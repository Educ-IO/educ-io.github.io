Google_API = (options, factory) => {
	"use strict";

	/* <!-- HELPER: Provides an interface onto various Google APIs --> */
	/* <!-- PARAMETERS: Options (see below) and factory (to generate other helper objects) --> */
	/* <!-- @options.timeout: Custom timeout for each network/API domain base --> */
	/* <!-- @factory.Network: Function to create a network helper object --> */
	/* <!-- REQUIRES: Global Scope: Underscore --> */
	/* <!-- REQUIRES: Factory Scope: Network helper --> */
	
	/* === Internal Visibility === */

	/* <!-- Internal Constants --> */
	const DEFAULTS = {};
	
	const LAST_RESORT_TIMEOUT =60000,
		PAGE_SIZE = 500,
		BATCH_SIZE = 50,
		PATH_LIMIT = 150;

	const READER = () => { /* <!-- FileReader Wrapper which appends 'promiseAs' methods --> */

		var reader = new FileReader(),
			promisify = fn =>
			function() {
				var _arguments = arguments;
				return new Promise((resolve, reject) => {
					var clean = (events) => _.each(events, (handler, event) => reader.removeEventListener(event, handler)),
						events = {
							load: () => clean(events) && resolve(reader.result),
							abort: () => clean(events) && reject(),
							error: () => clean(events) && reject(reader.error),
						};
					_.each(events, (handler, event) => reader.addEventListener(event, handler));
					fn.apply(reader, _arguments);
				});
			};

		_.each(_.filter(_.allKeys(reader), name => (/^READAS/i).test(name) && _.isFunction(reader[name])),
			fn => reader[fn.replace(/^READAS/i, "promiseAs")] = promisify(reader[fn]));

		return reader;
	};

	const WILDCARD = test => (value, remove) => {
		var present = value.indexOf(test) === 0 || value.indexOf(test) == (value.length - 1);
		return remove ?
			present < 0 ?
			value :
			present === 0 ?
			value.slice(present + test.length) : value.slice(0, value.length - test.length) :
			present >= 0;
	};
	/* <!-- Internal Constants --> */

	/* <!-- Network Constants --> */
	const GENERAL_URL = {
		name: "general",
		url: "https://www.googleapis.com/",
		rate: 4,
		/* <!-- 500 per 100 seconds --> */
		concurrent: 8,
		timeout: 30000,
	};
	const SHEETS_URL = {
		name: "sheets",
		url: "https://sheets.googleapis.com/",
		rate: 1,
		concurrent: 1,
		timeout: 30000,
	};
	const SCRIPTS_URL = {
		name: "scripts",
		url: "https://script.googleapis.com/",
		rate: 1,
		concurrent: 1,
		timeout: 30000,
	};
	const URLS = [GENERAL_URL, SHEETS_URL, SCRIPTS_URL];
	/* <!-- Network Constants --> */

	/* <!-- Internal Constants --> */
	const ALL = "application/vnd.google-apps.*";
	const FOLDER = "application/vnd.google-apps.folder";
	const DOC = "application/vnd.google-apps.document";
	const SHEET = "application/vnd.google-apps.spreadsheet";
	const SLIDE = "application/vnd.google-apps.presentation";
	const DRAWING = "application/vnd.google-apps.drawing";
	const FORM = "application/vnd.google-apps.form";
	const NATIVES = [DOC, SHEET, SLIDE, DRAWING, FORM];

	const EVENTS = {
		SEARCH: {
			PROGRESS: "google-search-progress",
		},
	};
	/* <!-- Internal Constants --> */

	/* <!-- Internal Variables --> */
	options = _.defaults(options ? _.clone(options) : {}, DEFAULTS);
	var KEY, CLIENT_ID, _check, _before, _token, _nameCache = {};
	/* <!-- Internal Variables --> */

	/* <!-- Network Variables --> */
	const NETWORKS = _.reduce(URLS, (networks, url) => {
		networks[url.name] = factory.Network({base : url.url, timeout: options.timeout ? options.timeout : url.timeout ? url.timeout : LAST_RESORT_TIMEOUT, per_sec : url.rate ? url.rate : 0, concurrent : url.concurrent ? url.concurrent : 0, retry :  r =>
			new Promise(resolve => r.status == 403 || r.status == 429 ?
				r.json().then(result => result.error.message && result.error.message.indexOf("Rate Limit Exceeded") >= 0 ? resolve(true) : resolve(false)) : resolve(false))}, factory);
		return networks;
	}, {});
	/* <!-- Network Variables --> */

	/* <!-- Internal Functions --> */
	var _init = (token, type, expires, update) => {

		/* <!-- Check Function to ensure token validity --> */
		_check = ((e, u) => force => {

			return new Promise((resolve, reject) => {

				if (force || e <= new Date()) { /* Token Expired */

					u(force).then(r => { /* Update token */

						if (r) _init(r.token, r.type, r.expires, u); /* Non-Null Response, so changes required */
						resolve(true);

					}).catch(err => reject(err));

				} else { /* Token Fine */

					resolve(false);

				}

			});

		})(new Date((expires - 1) * 1000), update); /* 1 second shift in case of network delays! */

		/* <!-- Pass Token to Network --> */
		_before = ((t, w) => {
			/* "Authorization: token OAUTH-TOKEN" */
			return r => {
				if (r.headers) r.headers.Authorization = (w + " " + t);
				return true;
			};

		})(token, type);

		_token = (t => () => t)(token);

		/* <!-- Before Network Call : Request Authorisation Closure --> */
		_.each(NETWORKS, network => {
			network.before(_before);
			network.check(_check);
		});

	};

	var _arrayize = (value, test) => value && test(value) ? [value] : !value ? [] : value;

	var _list = (url, property, list, data, next) => {

		return new Promise((resolve, reject) => {

			_check().then(() => {

				if (data) {
					if (next) data.pageToken = next;
				} else if (next) {
					data = {
						pageToken: next
					};
				}

				NETWORKS.general.get(url, data).then(value => {

					list = list.concat(value[property]);

					value.nextPageToken ?
						_list(url, property, list, data, value.nextPageToken).then(list => resolve(list)) : resolve(list);

				}).catch(e => reject(e));

			});

		});

	};

	var _call = function(method) {
		return new Promise((resolve, reject) => {
			_check().then(() => method.apply(this, _.rest(arguments)).then(value => resolve(value)).catch(e => reject(e)));
		});
	};

	var _get = (id, team) => {
		var _fields = "id,name,description,mimeType,version,parents,webViewLink,webContentLink,iconLink,size,modifiedByMeTime,hasThumbnail,thumbnailLink,starred,shared,properties,appProperties",
			_data = team ?
			team === true ? {
				fields: _fields,
				includeTeamDriveItems: true,
				supportsTeamDrives: true,
				corpora: "user,allTeamDrives"
			} : {
				fields: _fields,
				teamDriveId: team,
				includeTeamDriveItems: true,
				supportsTeamDrives: true,
				corpora: "teamDrive"
			} : {
				fields: _fields,
			};
		return _call(NETWORKS.general.get, "drive/v3/files/" + id, _data);
	};

	var _pick = (title, multiple, team, views, callback, context) => {

		if (google.picker) {

			var picker = new google.picker.PickerBuilder()
				.setTitle(title)
				.setAppId(CLIENT_ID)
				.setDeveloperKey(KEY)
				.setOAuthToken(_token())
				.setCallback(((callback, context) => {
					return data => {
						if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
							if (!multiple) {
								callback(data[google.picker.Response.DOCUMENTS][0], context);
							} else {
								callback(data[google.picker.Response.DOCUMENTS], context);
							}
						} else if (data[google.picker.Response.ACTION] == google.picker.Action.CANCEL) {
							callback(false, context);	 
						}
					};
				})(callback, context));

			if (multiple) picker.enableFeature(google.picker.Feature.MULTISELECT_ENABLED);
			/* <!-- This doesn't currently work, although it is in the Google Drive Picker API Documentation --> */
			if (team) picker.enableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES);

			if (views && typeof views === "function") views = views();
			if (!views || (Array.isArray(views) && views.length === 0)) {
				var view = new google.picker.DocsView()
					.setIncludeFolders(true)
					.setSelectFolderEnabled(true)
					.setParent("root");
				picker.addView(view.setEnableTeamDrives ? view.setEnableTeamDrives(team) : view);
			} else if (Array.isArray(views)) {
				views.forEach(function(view) {
					picker.addView(view.setEnableTeamDrives ? view.setEnableTeamDrives(team) : view);
				});
				if (views.length == 1) picker.enableFeature(google.picker.Feature.NAV_HIDDEN);
			} else {
				picker.addView(views.setEnableTeamDrives ? views.setEnableTeamDrives(team) : views);
				picker.enableFeature(google.picker.Feature.NAV_HIDDEN);
			}

			picker.build().setVisible(true);

		} else {

			google.load("picker", "1", {
				"callback": (function(title, multiple, team, views, callback, context) {
					return function() {
						_pick(title, multiple, team, views, callback, context);
					};
				})(title, multiple, team, views, callback, context)
			});

		}

	};

	var _contents = (ids, names, mimeTypes, excludeMimeTypes, properties, visibilities, shared, skeleton, team, overrideType, propertyModifier) => {

		/* <!-- Build the ID portion of the query --> */
		var _i = ids && ids.length > 0 ?
			_.reduce(ids, (q, id, i) => q + (i > 0 ? " or '" + id + "' in parents" : "'" + id + "' in parents"), " and (") + ")" : "";

		/* <!-- Build the NAME portion of the query --> */
		var _n = names && names.length > 0 ?
			_.reduce(names, (q, n, i) => q + (i > 0 ? " or name contains '" : "name contains '") + n + "'", " and (") + ")" : "";

		/* <!-- Build the MIME portion of the query --> */
		var _wild = WILDCARD("*"),
			_m = mimeTypes && mimeTypes.length > 0 ?
			_.reduce(mimeTypes, (q, m, i) => q + (i > 0 ? " or mimeType" : "mimeType") +
				(_wild(m) ? " contains " : " = ") + "'" + _wild(m, true) + "'", " and (") + ")" : "";

		/* <!-- Build exclude MIME portion of the query --> */
		var _e = excludeMimeTypes && excludeMimeTypes.length > 0 ?
			_.reduce(excludeMimeTypes, (q, m, i) => q + (i > 0 ? " and mimeType != '" : "mimeType != '") + m + "'", " and (") + ")" : "";

		/* <!-- Build PROPERTIES portion of the query --> */
		var _kv = p => "key='" + (p.indexOf("=") > 0 ? (p.split("=")[0] + "' and value='" + p.split("=")[1] + "'") : (p + "' and value=''"));
		var _p = properties && properties.length > 0 ?
			_.reduce(properties, (q, p, i) => q + (i > 0 ? " " + propertyModifier + " (properties has { " + _kv(p) + " } or appProperties has { " + _kv(p) + " })" : "(properties has { " + _kv(p) + "} or appProperties has { " + _kv(p) + "})"), " and (" + (overrideType ? "mimeType = '" + overrideType + "' or (" : "")) + (overrideType ? "))" : ")") : "";

		/* <!-- Build VISIBILITY portion of the query --> */
		var _v = visibilities && visibilities.length > 0 ?
			_.reduce(visibilities, (q, v, i) => q + (i > 0 ? " or visibility = '" : "visibility = '") + v + "'", " and (") + ")" : "";

		/* <!-- Build SHARED portion of the query --> */
		var _s = shared ? " and (sharedWithMe = true)" : "";

		var _data = {
			pageSize: PAGE_SIZE,
			q: "trashed = false" + _i + _n + _m + _e + _p + _v + _s,
			orderBy: "starred, modifiedByMeTime desc, viewedByMeTime desc, name",
			fields: skeleton ? "kind,nextPageToken,incompleteSearch,files(id,name,size,parents,mimeType" + (team ? ",teamDriveId" : "") + ")" : "kind,nextPageToken,incompleteSearch,files(description,id,modifiedByMeTime,name,version,mimeType,webViewLink,webContentLink,iconLink,hasThumbnail,thumbnailLink,size,parents,starred,shared,properties,appProperties" + (team ? ",teamDriveId" : "") + ")",
		};

		if (team) {
			_data.teamDriveId = team;
			_data.includeTeamDriveItems = true;
			_data.supportsTeamDrives = true;
			_data.corpora = "teamDrive";
		}

		return _list("drive/v3/files", "files", [], _data);

	};

	var _paths = (parents, chain, all, cache, team) => {

		var _path = (parent, chain) => {

			return new Promise(resolve => {

				var _complete = item => {
					if (item) chain.push(item);
					resolve(_paths(item ? item.parents : [], chain, all, cache, team));
				};

				if (cache[parent]) { /* <!-- Already Fetched --> */
					_complete(cache[parent]);
				} else if (cache.__pending && cache.__pending[parent]) { /* <!-- Fetch already pending --> */
					cache.__pending[parent].push(item => _complete(item));
				} else { /* <!-- Set-Up Fetch --> */
					if (!cache.__pending) cache.__pending = {};
					cache.__pending[parent] = [];
					/* <!-- Batcher to be inserted here --> */
					_get(parent, team).then(item => {
						cache[item.id] = {
							id: item.id,
							name: item.name,
							parents: item.parents
						};
						_.each(cache.__pending[parent], f => f(item));
						delete cache.__pending[parent];
						_complete(item);
					});
				}
			});

		};

		return new Promise(resolve => {
			if (parents && parents.length > 0) {
				if (parents.length == 1) {
					_path(parents[0], chain).then(value => resolve(value));
				} else {
					var promises = [];
					_.each(parents, parent => promises.push(_path(parent, _.clone(chain))));
					Promise.all(promises).then(() => resolve(all));
				}
			} else {
				all.push(chain.reverse());
				resolve(all);
			}
		});

	};

	var _search = (ids, recurse, folders, names, mimeTypes, excludes, includes, properties, visibilities, shared, team, cache, totals) => {

		return new Promise((resolve, reject) => {

			_contents(ids, names, mimeTypes, [], properties && properties.simple ? properties.simple : null, visibilities, shared, false, team, recurse && mimeTypes.length === 0 ? FOLDER : null, properties.modifier ? properties.modifier : "and").then(c => {

				/* <!-- Update Progress Event --> */
				if (totals && ids && window)(totals.folders += ids.length) && window.dispatchEvent(new CustomEvent(EVENTS.SEARCH.PROGRESS, {
					detail: totals
				}));

				/* <!-- Filter the results using the Exclude then Include methods --> */
				if (excludes) c = _.reject(c, item => _.some(excludes, (e) => e(item)));
				if (includes) c = _.filter(c, item => _.some(includes, (i) => i(item)));

				/* <!-- Get the ids of all the folders included in the raw set --> */
				var _cache = item => cache[item.id] = {
					id: item.id,
					name: item.name,
					parents: item.parents
				};
				var next = recurse ? _.filter(c, item => item.mimeType === FOLDER) : [];
				_.each(next, _cache);
				next = _.map(next, f => f.id);

				/* <!-- Batch these IDs into Arrays with length not longer than BATCH_SIZE --> */
				var batches = _.chain(next).groupBy((v, i) => Math.floor(i / BATCH_SIZE)).toArray().value();

				/* <!-- Make an array of promises to resolve with the results of these searches --> */
				var p = recurse ? _.map(batches,
					batch => _search(batch, recurse, folders, names, mimeTypes, excludes, includes, properties, visibilities, shared, team, cache, totals)) : [];

				/* <!-- Filter to remove the folders if we are not returning them --> */
				if (!folders) c = _.reject(c, item => item.mimeType === FOLDER);

				/* <!-- Filter the results using Advanced Properties --> */
				if (properties && properties.complex && properties.complex.length > 0) c = _.filter(c, item => properties.modifier && properties.modifier == "or" ?
					_.some(properties.complex, i => i(item)) : _.every(properties.complex, i => i(item)));

				/* <!-- Resolve this promise whilst resolving the recursive promises too if available --> */
				var _finish = items => p && p.length > 0 ? Promise.all(p).then(r => resolve(_.reduce(r, (c, v) => v && v.length > 0 ? c.concat(v) : c, items))).catch(e => reject(e)) : resolve(items);

				/* <!-- Resolve the paths promises before moving on --> */
				var _getPaths = () => Promise.all(_.map(c, item => new Promise(resolve => _paths(item.parents, [], [], cache, team).then(paths => (item.paths = paths) && resolve(item))))).then(_finish);

				/* <!-- Add in the current path value to each item --> */
				(c.length <= PATH_LIMIT) || recurse ?
					_getPaths() :
					_contents(null, null, [FOLDER], null, null, null, null, true, team, null).then(f => _.each(f, _cache)).then(_getPaths);

			}).catch(e => reject(e));

		});

	};
	/* <!-- Internal Functions --> */

	/* === Internal Visibility === */

	/* === External Visibility === */
	return {

		/* <!-- External Functions --> */
		initialise: function(token, type, expires, update, key, client_id) {

			/* <!-- Set the Important Constants --> */
			KEY = key, CLIENT_ID = client_id;

			/* <!-- Run the Initialisation --> */
			_init(token, type, expires, update);

			/* <!-- Return for Chaining --> */
			return this;

		},

		networks: () => _.map(NETWORKS, network => network.details()),

		/* <!-- Get Repos for the current user (don't pass parameter) or a named user --> */
		me: () => _call(NETWORKS.general.get, "oauth2/v1/userinfo?alt=json&key=" + KEY),

		execute: (id, method, data) => _call(NETWORKS.scripts.post, `/v1/scripts/${id}:run`, {
			function: method,
			parameters: data,
		}),

		scripts: () => _list("drive/v3/files", "files", [], {
			q: "mimeType = 'application/vnd.google-apps.script' and trashed = false",
			orderBy: "modifiedByMeTime desc,name",
			fields: "files(description,id,modifiedByMeTime,name,version)",
		}),

		download: (id, team) => team ? _call(NETWORKS.general.download, "drive/v3/files/" + id, {
			alt: "media",
			supportsTeamDrives: true
		}) : _call(NETWORKS.general.download, "drive/v3/files/" + id, {
			alt: "media",
		}),

		upload: (metadata, binary, mimeType, team, id) => {

			var _boundary = "**********%%**********";

			var _payload = new Blob([
				"--" + _boundary + "\r\n" + "Content-Type: application/json; charset=UTF-8" + "\r\n\r\n" + JSON.stringify(metadata) + "\r\n\r\n" + "--" + _boundary + "\r\n" + "Content-Type: " + mimeType + "\r\n\r\n",
				binary, "\r\n" + "--" + _boundary + "--" + "\r\n"
			], {
				type: "multipart/related; boundary=" + _boundary,
				endings: "native"
			});

			return _call(
				id ? NETWORKS.general.patch : NETWORKS.general.post,
				"upload/drive/v3/files/" + (id ? id + "?newRevision=true&" : "?") + "uploadType=multipart" + (team ? "&supportsTeamDrives=true" : ""), _payload, "multipart/related; boundary=" + _boundary, null, "application/binary");

		},

		export: id => _call(NETWORKS.general.get, "drive/v3/files/" + id + "/export", {
			mimeType: "application/vnd.google-apps.script+json"
		}),

		save: (id, files, team) => _call(NETWORKS.general.patch, "upload/drive/v3/files/" + id + "?uploadType=media" + (team ? "&supportsTeamDrives=true" : ""), {
			files: files
		}, "application/json"),

		update: (id, file, team) => _call(NETWORKS.general.patch, "drive/v3/files/" + id + (team ? "?supportsTeamDrives=true" : ""), file, "application/json"),

		pick: (title, multiple, team, views, callback, context) => _pick(title, multiple, team, views, callback, context),

		permissions: {

			get: (id, team) => {
				var _team = team ? `?teamDriveId=${team}&supportsTeamDrives=true` : "",
					_url = `drive/v3/files/${id}/permissions${_team}`,
					_fields = "id,type,emailAddress,domain,role,allowFileDiscovery,displayName,photoLink,expirationTime,deleted";
				return _list(_url, "permissions", [], {
					fields: `kind,nextPageToken,permissions(${_fields}${team ? ",teamDrivePermissionDetails" : ""})`
				});
			},

		},

		files: {

			all: () => ALL,

			natives: () => NATIVES,

			is: type => item => item.mimeType === type,

			in: type => item => item.mimeType && item.mimeType.startsWith(type),

			native: type => type && NATIVES.indexOf(type.toLowerCase()) >= 0,

			delete: (id, team, trash) => {
				var _url = team ? "drive/v3/files/" + id + "?teamDriveId=" + team + "&supportsTeamDrives=true" : "drive/v3/files/" + id;
				var _data = trash ? {
					trashed: true
				} : null;
				var _function = trash ? NETWORKS.general.patch : NETWORKS.general.delete;
				return _call(_function, _url, _data);
			},

			get: (id, team) => _get(id, team),

			copy: (id, team, file) => {
				var _team = team ? `?teamDriveId=${team}&supportsTeamDrives=true` : "",
					_url = `drive/v3/files/${id}/copy${_team}`;
				return _call(NETWORKS.general.post, _url, file);
			},

			export: (id, format) => _call(NETWORKS.general.get, "drive/v3/files/" + id + "/export", {
				mimeType: format
			}, null, "application/binary"),

		},

		teamDrives: {

			get: id => _call(NETWORKS.general.get, "drive/v3/teamdrives/" + id, {
				fields: "kind,id,name,colorRgb,capabilities",
			}),

			list: () => _list(
				"drive/v3/teamdrives", "teamDrives", [], {
					orderBy: "name",
					fields: "kind,nextPageToken,teamDrives(id,name,colorRgb)",
				}),

		},

		folders: {

			check: is => item => is ? item.mimeType === FOLDER : item.mimeType !== FOLDER,

			is: type => type === FOLDER,

			search: (ids, recurse, names, mimeTypes, excludes, includes, properties, visibilities, shared, team, basic) => {
				var _folders = (mimeTypes = _arrayize(mimeTypes, _.isString)).indexOf(FOLDER) >= 0;
				return basic ?
					_search(null, false, false, names, mimeTypes, null, null, properties, visibilities, shared, team, _nameCache, {
						folders: 0
					}) :
					_search(
						_arrayize(ids, _.isString), recurse, _folders, names,
						recurse && mimeTypes && mimeTypes.length > 0 && !_folders ? [FOLDER].concat(mimeTypes) : mimeTypes,
						_arrayize(excludes, _.isFunction),
						recurse && !_folders ? [f => f.mimeType === FOLDER].concat(_arrayize(includes, _.isFunction)) : _arrayize(includes, _.isFunction),
						properties, visibilities, shared, team, _nameCache, {
							folders: 0
						});
			},

			contents: (ids, mimeTypes, team, properties) => _contents(_arrayize(ids, _.isString), null, _arrayize(mimeTypes, _.isString), null, properties, null, null, false, team),

			children: (ids, skeleton, team, properties) => _contents(_arrayize(ids, _.isString), null, null, null, properties, null, null, skeleton, team),

			folders: (ids, skeleton, team, properties) => _contents(_arrayize(ids, _.isString), null, [FOLDER], null, properties, null, null, skeleton, team),

			files: (ids, skeleton, team) => _contents(_arrayize(ids, _.isString), null, null, [FOLDER], null, null, null, skeleton, team),

			create: (name, parent, data, team) => _call(NETWORKS.general.post, "drive/v3/files" + (team ? "?supportsTeamDrives=true" : ""),
				_.defaults({
					mimeType: FOLDER,
					name: name,
					parents: _arrayize(parent, _.isString)
				}, data)),

		},

		sheets: {

			create: (name, tab, colour) => _call(NETWORKS.sheets.post, "v4/spreadsheets", {
				"properties": {
					"title": name
				},
				"sheets": [{
					"properties": {
						"sheetId": 0,
						"title": tab ? tab : "Sheet1",
						"tabColor": colour ? colour : {
							"red": 0.0,
							"green": 0.0,
							"blue": 0.0
						}
					}
				}]
			}, "application/json"),

			get: (id, all, range) => _call(NETWORKS.sheets.get, `v4/spreadsheets/${id}${all ? 
																`?includeGridData=true${range ? `&ranges=${encodeURIComponent(range)}` : ""}` : ""}`),

			values: (id, range) => _call(NETWORKS.sheets.get, "v4/spreadsheets/" + id + "/values/" + encodeURIComponent(range)),

			append: (id, range, values, input) => _call(NETWORKS.sheets.post, "v4/spreadsheets/" + id + "/values/" + encodeURIComponent(range) + ":append?valueInputOption=" + (input ? input : "RAW"), {
				"range": range,
				"majorDimension": "ROWS",
				"values": values
			}, "application/json"),

			update: (id, range, values, input) => _call(NETWORKS.sheets.put, "v4/spreadsheets/" + id + "/values/" + encodeURIComponent(range) + "?valueInputOption=" + (input ? input : "RAW"), {
				"range": range,
				"majorDimension": "ROWS",
				"values": values
			}, "application/json"),

			batch: (id, updates, returnSheet, returnData) => _call(NETWORKS.sheets.post, `v4/spreadsheets/${id}:batchUpdate`, {
				"requests": _arrayize(updates, value => !_.isArray(value)),
				"includeSpreadsheetInResponse": returnSheet ? true : false,
				"responseIncludeGridData": returnData ? true : false,
			}, "application/json"),

		},

		url: {

			insert: url => _call(NETWORKS.general.post, "urlshortener/v1/url?key=" + KEY, {
				longUrl: url
			}, "application/json"),

		},

		reader: READER,

		events: () => EVENTS

	};
	/* === External Visibility === */
};