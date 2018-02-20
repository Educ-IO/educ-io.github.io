Folder = function(ಠ_ಠ, folder, target, team, state) {

	/* <!-- Internal Constants --> */
	const BATCH_SIZE = 50;
	const DELAY = ms => new Promise(resolve => setTimeout(resolve, ms));
	const SEARCH_TRIGGER = 20;
	
	const TYPE_CONVERT = "application/x.educ-io.folders-convert",
				TYPE_SEARCH = "application/x.educ-io.folders-search",
				TYPE_TAG = "application/x.educ-io.folders-tag",
				_types = [TYPE_CONVERT, TYPE_SEARCH, TYPE_TAG];
	/* <!-- Internal Constants --> */

	/* <!-- Internal Variables --> */
	var _db = new loki("folders.db"),
		_tables = {},
		_search,
		_team = team,
		_searches = {};
	/* <!-- Internal Variables --> */

	/* <!-- Internal Functions --> */
	var busy = (cell, row, css_class) => (on) => {
		on ? ಠ_ಠ.Display.busy({
				target: cell,
				class: "loader-small"
			}) && row.addClass(css_class ? css_class : "bg-warning") :
			ಠ_ಠ.Display.busy({
				target: cell,
				clear: true
			}) && row.removeClass(css_class ? css_class : "bg-warning");
	};

	var mapItems = (v) => ({
		id: v.id,
		type: v.mimeType,
		name: v.name,
		parents: v.parents,
		icon: v.iconLink,
		thumbnail: v.thumbnailLink,
		url: v.webViewLink,
		star: v.starred,
		folder: ಠ_ಠ.google.folders.is(v.mimeType),
		download: !!v.webContentLink,
		paths: v.paths,
		properties: v.properties,
		appProperties: v.appProperties,
		team: _team,
		size: v.size,
		out: v.mimeType === "application/vnd.google-apps.spreadsheet" || ಠ_ಠ.google.files.in("application/x.educ-io.view")(v) ? {
			name: "View",
			desc: "Open in View",
			url: "/view/#google,load." + v.id + ".lazy"
		} : ಠ_ಠ.google.files.in("application/x.educ-io.folders")(v) ? {
			name: "Folders",
			desc: "Open in Folders",
			url: "/folders/#google,load." + v.id + ".lazy"
		} : ಠ_ಠ.google.files.in("application/x.educ-io.reflect")(v) ? {
			name: "Reflect",
			desc: "Open in Reflect",
			url: "/reflect/#google,load." + v.id + ".lazy"
		} : null
	});
	
	var _enableDownloads = function(target) {
		target.find("a.download").on("click.download", e => {
			ಠ_ಠ.google.download($(e.target).data("id"), _team).then(binary => {
				try {
					saveAs(binary, $(e.target).data("name"));
				} catch (e) {
					ಠ_ಠ.Flags.error("Drive File Download", e);
				}
			});
		});
	};

	var _showData = function(id, name, values, target) {

		var headers = ["Star", "Name", "Actions", "ID", "Type"].map((v) => ({
			name: v,
			hide: function(initial) {
				return !!(initial && this.hide_initially);
			},
			set_hide: function(now, always, initially) {
				this.hide_initially = initially;
			},
			hide_always: false,
			hide_now: false,
			hide_initially: v === "ID" ? true : false,
			field: v.toLowerCase(),
		}));

		var _data = _db.addCollection(id, {
			unique: ["id"],
			indices: ["type", "starred", "name"]
		});
		_data.insert(values);

		var _return = ಠ_ಠ.Datatable(ಠ_ಠ, {
			id: id,
			name: name,
			data: _data,
			headers: headers
		}, {
			advanced: false,
			collapsed: true
		}, target, (target) => _enableDownloads(target));

		/* <!-- Wire Up Downloads --> */
		_enableDownloads(target);

		return _return;

	};

	var _loadContents = function(id, name, target) {

		/* <!-- Start the Loader --> */
		ಠ_ಠ.Display.busy({
			target: target
		});

		var _loader = _team ? ಠ_ಠ.google.folders.contents(id, [], _team) : ಠ_ಠ.google.folders.contents(id);

		/* <!-- Need to load the contents of the folder --> */
		_loader.then((contents) => {
			ಠ_ಠ.Flags.log("Google Drive Folder Opened", contents);
			_tables[id] = _showData(id, name, _.map(contents, mapItems), target);
			ಠ_ಠ.Display.busy({
				target: target,
				clear: true
			}).state().enter("opened").protect("a.jump").on("JUMP");
		}).catch((e) => {
			ಠ_ಠ.Flags.error("Requesting Selected Google Drive Folder", e ? e : "No Inner Error");
			ಠ_ಠ.Display.busy({
				target: target,
				clear: true
			}).state().exit("opened").protect("a.jump").off("JUMP");
		});

	};

	var _showTab = function(tab) {
		var target = $(tab.data("target"));

		if (tab.data("type") == "team") _team = tab.data("id");

		if ((target.children().length === 0 || tab.data("refresh")) && (tab.data("type") == "folder" || tab.data("type") == "team")) _loadContents(tab.data("id"), tab.data("name"), target.empty());
		if (tab.data("type") == "folder" || tab.data("type") == "team") {
			ಠ_ಠ.Display.state().exit("searched");
			_search = null;
		} else if (tab.data("type") == "search") {
			ಠ_ಠ.Display.state().enter("searched");
			_search = tab.data("id");
		}
		tab.closest(".nav-item").addClass("order-1").siblings(".order-1").removeClass("order-1");
	};

	var _activateTab = function(tabs) {
		tabs.find("a.nav-link")
			.off("click.tabs").on("click.tabs", (e) => $(e.target).data("refresh", e.shiftKey))
			.off("show.bs.tab").on("show.bs.tab", (e) => _showTab($(e.target)))
			.last().tab("show");
	};

	var _showFolder = function(folder, target) {

		var _data = {
			tabs: [{
				id: folder.id,
				name: folder.name,
				type: folder.team ? "team" : "folder"
			}]
		};

		var _tabs = ಠ_ಠ.Display.template.show({
			template: "tab-list",
			id: folder.id,
			name: folder.name,
			nav: "folder_tabs",
			links: ಠ_ಠ.Display.template.get("tab-links")(_data),
			tabs: ಠ_ಠ.Display.template.get("tab-tabs")(_data),
			target: target
		});

		/* <!-- Set Load Tab Handler & Load Initial Values --> */
		_activateTab(_tabs);

	};

	var _showResults = function(name, items) {

		var _id = name.replace(/[^A-Z0-9]+/gi, "").toLowerCase(), _data = {
			tabs: [{
				id: _id,
				name: name,
				type: "search"
			}]
		};

		var _items = _.each(_.map(items, mapItems), (v) => v.safe = (_id + "_" + v.id)),
			_folder_Count = _.reduce(items, (count, item) => item.mimeType === "application/vnd.google-apps.folder" ? count + 1 : count, 0),
			_file_Count = _.reduce(items, (count, item) => item.mimeType !== "application/vnd.google-apps.folder" ? count + 1 : count, 0),
			_file_Size = _.reduce(items, (total, item) => total + (item.size ? parseInt(item.size) : 0), 0);

		_tables[_id] = _showData(_id, name, _items, $(ಠ_ಠ.Display.template.get("tab-tabs")(_data)).appendTo(".tab-content"));
		_activateTab($(ಠ_ಠ.Display.template.get("tab-links")(_data)).appendTo("#folder_tabs").parent());

		/* <!-- Measure the Performance (end) --> */
		ಠ_ಠ.Flags.time(name, true);

		/* <!-- Display the Results (if the total results exceeds the trigger) --> */
		if (items.length >= SEARCH_TRIGGER) ಠ_ಠ.Display.modal("results", {
			id: "search_results",
			target: ಠ_ಠ.container,
			title: "Search Results",
			folders: _folder_Count,
			files: _file_Count,
			size: _file_Size,
		});

	};

	var _searchFolder = function(id) {

		var _name = "Search @ " + new Date().toLocaleTimeString();

		/* <!-- Measure the Performance (start) --> */
		ಠ_ಠ.Flags.time(_name);

		var _decode = (values) => {
			var _regex = (regex, fallback) => f => {
				if (regex.indexOf("||") > 0) {
					return f.mimeType === regex.split("||")[0] && new RegExp(regex.split("||")[1], "i").test(f.name);
				} else if (regex) {
					return new RegExp(regex, "i").test(f.name);
				} else {
					return fallback;
				}
			};
			var _return = {
				mime : _.map(_.find(values, v => v.name == "mime").value.split("\n"), m => m.trim()),
				properties : _.find(values, v => v.name == "properties").value.trim() ? _.map(_.find(values, v => v.name == "properties").value.split("\n"), m => m.trim()) : "",
				exclude : _.map(_.find(values, v => v.name == "exclude").value.split("\n"), r => _regex(r.trim(), false)),
				include : _.map(_.find(values, v => v.name == "include").value.split("\n"), r => _regex(r.trim(), true)),
				recurse : !!(_.find(values, v => v.name == "recurse"))
			};
			return _return;
		};
		var _encode = (values) => _.each(_.clone(values), (value, key, list) => _.isArray(value) ? list[key] = value.join("\n") : false);
		
		var _id = "start_search", _search = ಠ_ಠ.Display.modal("search", {
			id: "start_search",
			target: ಠ_ಠ.container,
			title: "Search Google Drive",
			instructions: ಠ_ಠ.Display.doc.get("SEARCH_INSTRUCTIONS"),
			state: state && state.search ? state.search : null,
			actions: [{text : "Save", handler : (values) => {
				
				var finish = ಠ_ಠ.Display.busy({
					target : $(`#${_id}`),
					fn : true
				});
				
				var _meta = {
						name: `Search: ${folder.name} [${new Date().toLocaleDateString()}].folders`,
						parents: (folder ? [folder.id] : null)
					},
					_data = JSON.stringify({
							folder: folder,
							state: {
								search: _encode(_decode(values))	/* <!-- Need to join the arrays back together here --> */
							}
						}),
					_mime = TYPE_SEARCH;
				ಠ_ಠ.google.upload(_meta, _data, _mime).then(uploaded => ಠ_ಠ.Flags.log("Folders Search File Saved", uploaded))
					.catch(e => ಠ_ಠ.Flags.error("Upload Error", e ? e : "No Inner Error"))
					.then(finish);
			}}]
		});
		
		_search.then((values) => {

			
			
			if (values) {
			
				var _finish = ಠ_ಠ.Display.busy({
					target: ಠ_ಠ.container,
					fn: true
				});
				
				values = _decode(values);
				ಠ_ಠ.Flags.log(`Searching folder ${id} with terms: ${JSON.stringify(values)}`);
				_searches[id] = _encode(values);

				ಠ_ಠ.google.folders.search(id, values.recurse, values.mime, values.exclude, values.include, values.properties, _team).then((results) => {
					_showResults(_name, results);
				}).catch((e) => {
					if (e) ಠ_ಠ.Flags.error("Search Error", e);
				}).then(_finish);

			}
			
		}).catch((e) => {
			if (e) ಠ_ಠ.Flags.error("Search Error", e);
		});

		ಠ_ಠ.container.find("#start_search button[data-action='clear']").on("click.clear", (e) => $("#" + $(e.currentTarget).data("clear")).val(""));

		ಠ_ಠ.container.find("#start_search button[data-action='populate']").on("click.populate", (e) => {

			var _excludes = ["^(\\~\\$)", "^(\\*\\*\\*\\sARCHIVE\\s\\*\\*\\*\\s)", "\\$RECYCLE\\.BIN"].join("\n");
			var _populate = $(e.target).data("populate");
			
			switch (_populate) {
					
				case "word": 
					
					$("#mimeTypes").val([
						"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						"application/zip", "application/msword"
					].join("\n"));
					$("#excludeRegexes").val(_excludes);
					$("#includeRegexes").val(["(\\.docx)$", "(\\.doc)$"].join("\n"));
					break;
					
				case "docs":
					
					$("#mimeTypes").val([
						"application/vnd.google-apps.document"
					].join("\n"));
					$("#excludeRegexes").val(_excludes);
					$("#includeRegexes").val([].join("\n"));
					break;
					
				case "excel":
					
					$("#mimeTypes").val([
						"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
						"application/zip", "application/vnd.ms-excel"
					].join("\n"));
					$("#excludeRegexes").val(_excludes);
					$("#includeRegexes").val(["(\\.xlsx)$", "(\\.xls)$"].join("\n"));
					break;
				
				case "pdf":
					
					$("#mimeTypes").val([
						"application/pdf"
					].join("\n"));
					$("#excludeRegexes").val(_excludes);
					$("#includeRegexes").val([].join("\n"));
					break;
					
				case "sheets":
					
					$("#mimeTypes").val([
						"application/vnd.google-apps.spreadsheet"
					].join("\n"));
					$("#excludeRegexes").val(_excludes);
					$("#includeRegexes").val([].join("\n"));
					break;
					
				case "powerpoint":
					
					$("#mimeTypes").val([
						"application/vnd.openxmlformats-officedocument.presentationml.presentation",
						"application/zip", "application/vnd.ms-powerpoint"
					].join("\n"));
					$("#excludeRegexes").val(_excludes);
					$("#includeRegexes").val(["(\\.pptx)$", "(\\.ppt)$"].join("\n"));
					break;
					
				case "slides":
					
					$("#mimeTypes").val([
						"application/vnd.google-apps.presentation"
					].join("\n"));
					$("#excludeRegexes").val(_excludes);
					$("#includeRegexes").val([].join("\n"));
					break;
					
				case "drawings":
					
					$("#mimeTypes").val([
						"application/vnd.google-apps.drawing"
					].join("\n"));
					$("#excludeRegexes").val(_excludes);
					$("#includeRegexes").val([].join("\n"));
					break;
					
				case "temp":
					
					$("#mimeTypes").val([
						"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
						"application/vnd.openxmlformats-officedocument.presentationml.presentation",
						"application/vnd.ms-excel", "application/msword", "application/vnd.ms-powerpoint",
						"application/zip", "application/octet-stream"
					].join("\n"));
					$("#includeRegexes").val(["^(\\s*\\~\\$).*(\\.docx)$", "^(\\s*\\~\\$).*(\\.doc)$",
						"^(\\s*\\~\\$).*(\\.pptx)$", "^(\\s*\\~\\$).*(\\.ppt)$", "^(\\s*\\~\\$).*(\\.xlsx)$", "^(\\s*\\~\\$).*(\\.xls)$", "thumbs\\.db"
					].join("\n"));
					break;
			}

		});

	};

	var _exportFile = function(file, targetMimeType, inPlace, mirror) {
		
		return new Promise((resolve, reject) => {
			
			ಠ_ಠ.google.files.export(file.id, targetMimeType, _team).then(binary => {

				var _name = file.name.lastIndexOf(".") > 0 ? file.name.substr(0, file.name.lastIndexOf(".")) : file.name;
				
				var _upload = (metadata, id) => {
					
					ಠ_ಠ.google.upload(metadata ? metadata : {
						name: _name,
						parents: mirror ? (file.parents ? file.parents : []).concat(mirror) : file.parents,
						teamDriveId: _team,
					}, binary, targetMimeType, _team, id)
						.then(uploadedFile => resolve({new: uploadedFile}))
						.catch(e => {
							ಠ_ಠ.Flags.error("Upload Error", e ? e : "No Inner Error");
							reject();
						});
					
				};
				
				if (inPlace) {
					
					ಠ_ಠ.google.folders.search(file.parents, false, targetMimeType, null, ((n, t) => f => (f.name == n) && f.mimeType == t)(_name, targetMimeType), null, _team).then((results) => {
						if (results && results.length == 1) {
							_upload({}, results[0].id);
						} else {
							_upload();
						}
					});
					
				} else {
					
					_upload();
					
				}
				
			}).catch(e => {
				ಠ_ಠ.Flags.error("Export Error", e ? e : "No Inner Error");
				reject();
			});
			
		});
		
	};
	
	var _convertFile = function(file, sourceMimeType, targetMimeType, prefixAfterConversion, inPlace, mirror) {

		return new Promise((resolve, reject) => {

			var metadata = inPlace ? {} : {
				name: file.name.substr(0, file.name.lastIndexOf(".")),
				parents: mirror ? (file.parents ? file.parents : []).concat(mirror) : file.parents,
				teamDriveId: _team,
			};
			metadata.mimeType = targetMimeType;

			ಠ_ಠ.google.download(file.id, _team).then(binary => {

				(inPlace ? 
					ಠ_ಠ.google.upload(metadata, binary, sourceMimeType, _team, file.id) : 
					ಠ_ಠ.google.upload(metadata, binary, sourceMimeType, _team))
				.then(uploadedFile => {

						prefixAfterConversion ?
							ಠ_ಠ.google.update(file.id, {
								name: prefixAfterConversion + file.name
							}, _team)
							.then(updated => resolve({
								new: uploadedFile,
								old: updated
							}))
							.catch(e => {
								ಠ_ಠ.Flags.error("Renaming Source File Error", e ? e : "No Inner Error");
								reject();
							}) :
							resolve({
								new: uploadedFile
							});

					}

				).catch(e => {
					ಠ_ಠ.Flags.error("Conversion Error", e ? e : "No Inner Error");
					reject();
				});

			}).catch(e => {
				ಠ_ಠ.Flags.error("Download Error", e ? e : "No Inner Error");
				reject();
			});

		});

	};

	var _saveConversionResults = function(successes, failures, id, last) {

		return new Promise((resolve, reject) => {

			var _updateSheet = function(id, last) {

				var values = [];

				_.each(failures, failure => values.push(["FAILURE", failure.id, failure.name, "", "", ""]));
				_.each(successes, success => values.push(["Success", success.old ? success.old.id : "", success.old ? success.old.name : "", success.new.id, success.new.name, success.new.mimeType]));

				var _total = failures.length + successes.length + last;

				ಠ_ಠ.google.sheets.append(id, "A" + last + ":F" + _total, values)
					.then(() => {
						resolve({
							id: id,
							last: _total
						});
					})
					.catch(e => {
						reject(e);
					});

			};

			if (id) {

				_updateSheet(id, last);

			} else {

				ಠ_ಠ.google.sheets.create("Folders - Conversion Results " + (folder && folder.name ? " for (" + folder.name + ") " : "") + "[" + new Date().toUTCString() + "]").then(sheet => {

					var id = sheet.spreadsheetId,
						values = [];
					values.push(["Result", "Source File Id", "Source File Name", "Destination File Id", "Destination File Name", "Destination File Type"]);

					ಠ_ಠ.google.sheets.update(id, "A1:F1", values)
						.then(() => _updateSheet(id, 2))
						.catch(e => {
							reject(e);
						});

				}).catch(e => {
					reject(e);
				});

			}

		});

	};

	var _convertItems = function(id) {

		var _collection;
		if(!(_collection = _db.getCollection(id))) return;
		
		var _decode = (values) => {
			var _return = {
				source : _.find(values, v => v.name == "source") ? _.find(values, v => v.name == "source").value : null,
				target : _.find(values, v => v.name == "target").value,
				prefix : _.find(values, v => v.name == "prefix") ? _.find(values, v => v.name == "prefix").value : null,
				batch : _.find(values, v => v.name == "batch").value,
				inplace : !!(_.find(values, v => v.name == "inplace")),
				mirror : _.find(values, v => v.name == "mirror") ? _.find(values, v => v.name == "mirror").value : null
			};
			(!_return.batch || _return.batch <= 0) ? _return.batch = 50 : _return.log = true;
			return _return;
		};
		
		
		var _id = "convert_results", _convert = ಠ_ಠ.Display.modal("convert", {
			id: _id,
			target: ಠ_ಠ.container,
			title: "Convert Files",
			instructions: ಠ_ಠ.Display.doc.get("CONVERT_INSTRUCTIONS"),
			state: state && state.convert ? state.convert : null,
			actions: [{text : "Save", handler : (values) => {
				
				var finish = ಠ_ಠ.Display.busy({
					target : $(`#${_id}`),
					fn : true
				});
				
				var _meta = {
						name: `Convert: ${folder.name} [${new Date().toLocaleDateString()}].folders`,
						parents: (folder ? [folder.id] : null)
					},
					_data = JSON.stringify({
							folder: folder,
							state: {
								convert: _decode(values),
								search: _search ? _searches[id] : null	
							}
						}),
					_mime = TYPE_CONVERT;
				ಠ_ಠ.google.upload(_meta, _data, _mime).then(uploaded => ಠ_ಠ.Flags.log("Folders Convert File Saved", uploaded))
					.catch(e => ಠ_ಠ.Flags.error("Upload Error", e ? e : "No Inner Error"))
					.then(finish);
			}}]
		}), _form = ಠ_ಠ.container.find(`#${_id}`);
		
		/* <!-- Wire Up Fields and Handle Populate URL Fields from Google Drive --> */
		ಠ_ಠ.Fields().on(_form).find("button[data-action='load-g-folder'], a[data-action='load-g-folder']").off("click.folder").on("click.folder", e => {
			new Promise((resolve, reject) => {
				ಠ_ಠ.google.pick( /* <!-- Open Google Document from Google Drive Picker --> */
					"Select a Folder", false, true,
					() => new google.picker.DocsView(google.picker.ViewId.FOLDERS).setIncludeFolders(true).setSelectFolderEnabled(true).setParent("root"),
					folder => folder && ಠ_ಠ.google.folders.is(folder.mimeType) ? ಠ_ಠ.Flags.log("Google Drive Folder Picked", folder) && resolve(folder) : reject()
				);
			}).then(folder => {
				var _$ = $("#" + $(e.target).data("target")).val(folder.id).attr("title", folder.name);
			}).catch();
		});
		
		_convert.then((values) => {

			if (values) {
				
				$(".tab-pane.active .file-name.action-succeeded, .tab-pane.active .file-name.action-failed")
					.removeClass("action-succeeded text-success action-failed text-danger font-weight-bold");
				
				var _results = _collection.chain().data();

				ಠ_ಠ.Flags.log(`CONVERSION STARTED: ${_results.length} items to convert`);

				values = _decode(values);
				var _batch = values.batch ? values.batch : 50;

				if (values.target) {

					var _process_Batch = function(batch, batches, batch_index, length, id, last) {

						/* <!-- Reset Variables  --> */
						var _successes = [],
							_failures = [];

						var _process_Result = function(file, files, file_index, id, last, complete) {

							if (file) {

								if ((values.source || ಠ_ಠ.google.files.native(file.type))) {

									ಠ_ಠ.Flags.log("PROCESSING FILE " + file_index);

									var _container = $("#" + id + "_" + file.id), _result = _collection.by("id", file.id);
									if (!_container || _container.length === 0) _container = $("#" + file.id);
									var _cell = _container.find(".file-name").parent(), _row = _cell.parent(), _busy = busy(_cell, _row);
									_busy(true);

									(values.source ? 
										_convertFile(file, values.source, values.target, values.prefix, values.inplace, values.mirror) :
										_exportFile(file, values.target, values.inplace, values.mirror))
									.then(converted => {
										if (_container) _container.find(".file-name").addClass("action-succeeded text-success font-weight-bold");
										if (_result) _result.name_class = "action-succeeded text-success font-weight-bold";
										if (converted && converted.old) {
											if (_container) _container.find(".file-name").text(converted.old.name);
											if (_result) _result.name = converted.old.name;
										}
										if (_result) _collection.update(_result);
										ಠ_ಠ.Flags.debug("CONVERTED ITEM " + file_index, converted);
										if (converted) _successes.push(converted);
										_busy(false);
										_process_Result(files.shift(), files, file_index + 1, id, last, complete);
									}).catch(e => {
										if (_container) _container.find(".file-name").addClass("action-failed text-danger font-weight-bold");
										if (_result) {
											_result.name_class = "action-failed text-danger font-weight-bold";
											_collection.update(_result);
										}
										ಠ_ಠ.Flags.error("File " + file_index + " Conversion Error", e ? e : "No Inner Error");
										_failures.push(file);
										_busy(false);
										_process_Result(files.shift(), files, file_index + 1, id, last, complete);
									});

								} else {

									ಠ_ಠ.Flags.log("FILE WILL NOT BE PROCESSED:", file);
									_process_Result(files.shift(), files, file_index + 1, id, last, complete);

								}

							} else {

								ಠ_ಠ.Flags.log("FILE CONVERSION COMPLETE: " + _successes.length + " successfully converted, " + _failures.length + " failed to convert.");

								if (values.batch) {
									var _saveRetries = 3;
									var _save = function() {
										_saveConversionResults(_successes, _failures, id, last).then((v) => {
											complete(v);
										}).catch(() => _saveRetries-- ? DELAY(2000).then(_save()) : complete({id: id, last: last}));
									};
									_save();

								} else {

									complete({
										id: id,
										last: last
									});

								}

							}

						};

						if (batch) {

							ಠ_ಠ.Flags.log("PROCESSING BATCH " + batch_index + " of " + length);

							var _next = (value) => {
								if (value && (!_batch || value.id)) {
									_process_Batch(batches.shift(), batches, batch_index + 1, length, value.id, value.last);
								} else {
									ಠ_ಠ.Flags.error("Failed to Complete Batch Conversion");
								}
							};

							_process_Result(batch.shift(), batch, 1, id, last, _next);

						} else {

							ಠ_ಠ.Flags.log("BATCH PROCESSING COMPLETE");

						}

					};

					var batches = _.chain(_results).groupBy((v, i) => Math.floor(i / _batch)).toArray().value();
					_process_Batch(batches.shift(), batches, 1, batches.length + 1);

				}
				
			}

		}).catch(e => {
			if (e) ಠ_ಠ.Flags.error("Converstion Error", e);
		});

		/* <!-- Handle the Populate Buttons --> */
		ಠ_ಠ.container.find(`#${_id} button[data-action='populate']`).on("click.populate", e => {

			var _populate = $(e.target).data("populate"),
				_natives = ಠ_ಠ.google.files.natives(),
				_inplace = false;

			switch (_populate) {
					
				case "docs": 
					
					$("#sourceMimeType").val("application/vnd.openxmlformats-officedocument.wordprocessingml.document").prop("disabled", false);
					$("#targetMimeType").val(_natives[0]);
					$("#prefixAfterConversion").prop("disabled", false);
					break;
			
				case "sheets":
					
					$("#sourceMimeType").val("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet").prop("disabled", false);
					$("#targetMimeType").val(_natives[1]);
					$("#prefixAfterConversion").prop("disabled", false);
					break;
					
				case "slides":
					
					$("#sourceMimeType").val("application/vnd.openxmlformats-officedocument.presentationml.presentation").prop("disabled", false);
					$("#targetMimeType").val(_natives[2]);
					$("#prefixAfterConversion").prop("disabled", false);
					break;
					
				case "word":
					
					$("#sourceMimeType").val("application/zip").prop("disabled", false);
					$("#targetMimeType").val("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
					$("#prefixAfterConversion").prop("disabled", false);
					_inplace = true;
					break;
					
				case "excel":
					
					$("#sourceMimeType").val("application/zip").prop("disabled", false);
					$("#targetMimeType").val("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
					$("#prefixAfterConversion").prop("disabled", false);
					_inplace = true;
					break;
					
				case "powerpoint":
					
					$("#sourceMimeType").val("application/zip").prop("disabled", false);
					$("#targetMimeType").val("application/vnd.openxmlformats-officedocument.presentationml.presentation");
					$("#prefixAfterConversion").prop("disabled", false);
					_inplace = true;
					break;
					
				case "pdf":
					
					$("#sourceMimeType").val("").prop("disabled", true);
					$("#targetMimeType").val("application/pdf");
					$("#prefixAfterConversion").val("").prop("disabled", true);
					_inplace = true;
					
			}

			/* <!-- Reconcile Interface --> */
			$("#prefixAfterConversion").val(_inplace ? "" : "*** ARCHIVE *** ");
			$("#convertInplace").prop("disabled", !_inplace).prop("checked", _inplace);

		});

		/* <!-- Update whether we can do an inplace conversion, depending on the Target MIME Type --> */
		$("#targetMimeType").on("change", (e) => {
			var _native = ಠ_ಠ.google.files.native($(e.target).val());
			$("#convertInplace").prop("disabled", _native).prop("checked", !_native);
		});

		/* <!-- If we are working inplace, we're not renaming --> */
		$("#convertInplace").on("change", (e) => {
			if (e.currentTarget.checked) $("#prefixAfterConversion").val("");
		});

	};

	var _tagItems = function(id, file_id) {

		var _collection;
		if(!(_collection = _db.getCollection(id))) return;
		
		var _decode = (values) => {
			var _return = {
				name : _.find(values, v => v.name == "name") ? _.find(values, v => v.name == "name").value : null,
				value : _.find(values, v => v.name == "value") ? _.find(values, v => v.name == "value").value : null,
				private : !!(_.find(values, v => v.name == "private"))
			};
			return _return;
		};
		
		var _id = "tag_results", _tag = ಠ_ಠ.Display.modal("tag", {
			id: _id,
			target: ಠ_ಠ.container,
			title: "Tag Files",
			instructions: ಠ_ಠ.Display.doc.get("TAG_INSTRUCTIONS"),
			state: state && state.tag ? state.tag : null,
			validate : values => {
				values = _decode(values);
				return values.name && values.value && (values.name.length + values.value.length) <= 124;
			},
			actions: [{text : "Save", handler : (values) => {
				
				var finish = ಠ_ಠ.Display.busy({
					target : $(`#${_id}`),
					fn : true
				});
				
				var _meta = {
						name: `Tag: ${folder.name} [${new Date().toLocaleDateString()}].folders`,
						parents: (folder ? [folder.id] : null)
					},
					_data = JSON.stringify({
							folder: folder,
							state: {
								tag: _decode(values),
								search: _search ? _searches[id] : null	
							}
						}),
					_mime = TYPE_TAG;
				ಠ_ಠ.google.upload(_meta, _data, _mime).then(uploaded => ಠ_ಠ.Flags.log("Folders Tag File Saved", uploaded))
					.catch(e => ಠ_ಠ.Flags.error("Upload Error", e ? e : "No Inner Error"))
					.then(finish);
			}}]
		}), _form = ಠ_ಠ.container.find(`#${_id}`);
		
		_tag.then((values) => {

			if (!values) return;
			
			var _results = file_id ? [ _collection.by("id", file_id)] : _collection.chain().data();

			ಠ_ಠ.Flags.log(`TAG STARTED: ${_results.length} items to tag`);

			values = _decode(values);

			var _properties = {};
			_properties[values.name] = values.value;
			var _data = values.private ? {appProperties : _properties} : {properties : _properties};

			_.each(_results, file => {

				if (!file) return;
				ಠ_ಠ.Flags.log(`TAGGING FILE: ${file.name} (${file.id}) with ${JSON.stringify(_data)}`);

				var _container = $("#" + id + "_" + file.id), _result = _collection.by("id", file.id);
				if (!_container || _container.length === 0) _container = $("#" + file.id);
				var _cell = _container.find(".file-name").parent(), _row = _cell.parent(), _busy = busy(_cell, _row);
				_busy(true);

				ಠ_ಠ.google.update(file.id, _data, _team).then(updated => {
					if (!_result[values.private ? "appProperties" : "properties"]) _result[values.private ? "appProperties" : "properties"] = {};
					(_result[values.private ? "appProperties" : "properties"][values.name] = values.value) && _collection.update(_result);
					ಠ_ಠ.Flags.log(`FILE UPDATED: ${JSON.stringify(updated)}`);
				}).catch(e => {
					ಠ_ಠ.Flags.error("File " + file.id + " Updating Error", e ? e : "No Inner Error");
				}).then(() => _tables[id].update() && _busy(false));

			});

		}).catch(e => {
			if (e) ಠ_ಠ.Flags.error("Tagging Error", e);
		});

		/* <!-- Handle the Populate Buttons --> */
		ಠ_ಠ.container.find(`#${_id} button[data-action='populate']`).on("click.populate", e => {

			var _populate = $(e.target).data("populate");
			if (_populate) {
				var _name = _populate.split("|")[0], _value = _populate.split("|")[1];
				if (_value === "@@NOW@@") _value = new Date().toLocaleDateString();
				$("#tagName").val(_name) && $("#tagValue").val(_value);
			}
			
		});

		/* <!-- Update whether we can do an inplace conversion, depending on the Target MIME Type --> */
		$("#targetMimeType").on("change", (e) => {
			var _native = ಠ_ಠ.google.files.native($(e.target).val());
			$("#convertInplace").prop("disabled", _native).prop("checked", !_native);
		});

		/* <!-- If we are working inplace, we're not renaming --> */
		$("#convertInplace").on("change", (e) => {
			if (e.currentTarget.checked) $("#prefixAfterConversion").val("");
		});

	};
	
	var _deleteItems = function() {

		var _collection;
		if (!_search || !(_collection = _db.getCollection(_search))) return;

		ಠ_ಠ.Display.confirm({
			id: "delete_results",
			target: ಠ_ಠ.container,
			message: "Please confirm that you want to delete " + _collection.count() + " items.",
			action: "Delete"
		}).then((confirm) => {

			if (confirm) {

				var _delete_Item = function(item, items, totals) {

					if (item) {

						var _cell = $("#" + _search + "_" + item.id).find(".file-name").parent(), _busy = busy(_cell, _cell.parent());
						_busy(true);

						var _result = _collection.by("id", item.id);

						ಠ_ಠ.google.files.delete(item.id, _team, true).then((value) => {

							if (value) {

								/* <!-- Aggregate Results --> */
								ಠ_ಠ.google.folders.is(item.mimeType) ? totals.folders += 1 : totals.files += 1;
								totals.size += item.size ? Number(item.size) : 0;

								/* <!-- Save Results (for filtering etc) --> */
								_result.deleted = true;
								_collection.update(_result);

								/* <!-- Show Results --> */
								_cell.append(ಠ_ಠ.Display.template.get("status")(_result));

								/* <!-- Debug Log Results --> */
								ಠ_ಠ.Flags.log("DELETED ITEM:", item.id);

							}

							_busy(false);

							_delete_Item(items.shift(), items, totals);

						}).catch((e) => _busy(false) && ಠ_ಠ.Flags.error("Deletion Error", e ? e : "No Inner Error"));

					} else {

						/* <!-- Display the Results --> */
						ಠ_ಠ.Display.modal("results", {
							id: "delete_results",
							target: ಠ_ಠ.container,
							title: "Deletion Results",
							folders: totals.folders,
							files: totals.files,
							size: totals.size,
						});

					}

				};

				var _items = _collection.chain().data();

				/* <!-- Start Recursively Deleting Items --> */
				_delete_Item(_items.shift(), _items, {
					files: 0,
					folders: 0,
					size: 0
				});

			}

		}).catch(e => {
			if (e) ಠ_ಠ.Flags.error("Deletion Error", e);
		});

	};

	var _closeSearch = function(search) {

		if (_search && !search) return _closeSearch(_search);

		if (search) {
			_db.removeCollection(search);
			$("#nav_" + search).remove();
			$("#tab_" + search).remove();
			$("#folder_tabs a:last").tab("show");
		}

	};

	var _tally = function(id) {

		var _name = "Tally @ " + new Date().toLocaleTimeString();

		/* <!-- Measure the Performance (start) --> */
		ಠ_ಠ.Flags.time(_name);

		var _collection = _db.getCollection(id);

		var _tally_folders = function(folder_ids, results) {

			return new Promise((resolve) => {

				var _complete = (items) => {

					/* <!-- Update File Count & Sizes --> */
					var _isFile = ಠ_ಠ.google.folders.check(false);
					var _isFolder = ಠ_ಠ.google.folders.check(true);

					results.files += _.reduce(items, (count, item) => _isFile(item) ? count + 1 : count, 0);
					results.size += _.reduce(items, (total, item) => total + (item.size ? parseInt(item.size) : 0), 0);

					/* <!-- Update Folder Count --> */
					results.folders += _.reduce(items, (count, item) => _isFolder(item) ? count + 1 : count, 0);

					var _folders = _.filter(items, _isFolder);

					/* <!-- Recursive Iteration Function --> */
					var _iterate_batch = function(batch, batches, complete) {

						if (batch) {
							_tally_folders(batch, {
								files: 0,
								folders: 0,
								size: 0
							}).then((values) => {
								results.folders += values.folders;
								results.files += values.files;
								results.size += values.size;
								_iterate_batch(batches.shift(), batches, complete);
							});
						} else {
							complete();
						}

					};

					if (_folders && _folders.length > 0) {

						/* <!-- Batch these Child IDs into Arrays with length not longer than BATCH_SIZE --> */
						var _batches = _.chain(_folders).map(folder => folder.id).groupBy((v, i) => Math.floor(i / BATCH_SIZE)).toArray().value();

						_iterate_batch(_batches.shift(), _batches, () => resolve(results));

					} else {

						resolve(results);

					}

				};

				/* <!-- Run the promise to fetch the data, with a delayed single retry (if required) --> */
				/* <!-- Should be moved (DELAY / RETRY) to the Google Module, which will pass call retry details to network --> */
				ಠ_ಠ.google.folders.children(folder_ids, true, _team).then(_complete).catch(() => {
					DELAY(2000).then(() => {
						ಠ_ಠ.google.folders.children(folder_ids, true, _team).then(_complete).catch((e) => ಠ_ಠ.Flags.error("Processing Tally for Google Drive Folders: " + JSON.stringify(folder_ids), e ? e : "No Inner Error"));
					});
				});

			});

		};

		var _process_Folder = function(folder, folders, totals) {

			if (folder) {

				var _cell = $("#" + folder.id).find(".file-name").closest("td"), _busy = busy(_cell, _cell.parent());
				_busy(true);

				var _result = _collection.by("id", folder.id);

				_tally_folders(folder.id, {
					files: 0,
					folders: 0,
					size: 0
				}).then((results) => {

					/* <!-- Aggregate Results --> */
					totals.folders += results.folders;
					totals.files += results.files;
					totals.size += results.size;

					/* <!-- Format Results --> */
					results.empty = !!(!results.files && !results.folders && !results.size);

					/* <!-- Save Results (for filtering etc) --> */
					_result.results = results;
					_collection.update(_result);

					/* <!-- Show Results --> */
					_cell.append(ಠ_ಠ.Display.template.get("tally")(results));

					/* <!-- Debug Log Results --> */
					ಠ_ಠ.Flags.log("TALLIED FOLDER " + folder.id + ":", results);

					_busy(false);

					_process_Folder(folders.shift(), folders, totals);

				});

			} else {

				/* <!-- Measure the Performance (end) --> */
				ಠ_ಠ.Flags.time(_name, true);

				/* <!-- Display the Results --> */
				ಠ_ಠ.Display.modal("results", {
					id: "tally_results",
					target: ಠ_ಠ.container,
					title: "Tally Results",
					folders: totals.folders,
					files: totals.files,
					size: totals.size,
				});

			}

		};

		/* <!-- Get the Folders to Process --> */
		var _folders = _collection.chain().find({
			"folder": true
		}).data();

		/* <!-- Start Recursively Tallying Folders --> */
		_process_Folder(_folders.shift(), _folders, {
			files: 0,
			folders: 0,
			size: 0
		});

	};

	var _removeItem = function(id) {

		var _id = _search ? _search : folder.id;
		var _collection = _db.getCollection(_id);
		var _candidate = _collection.by("id", id);

		if (_candidate) _collection.remove(_candidate);
		_tables[_id].update();

	};
	
	var _detag = function(id, tag) {
		
		var _id = _search ? _search : folder.id;
		var _collection = _db.getCollection(_id);
		var _candidate = _collection.by("id", id);
		
		if (_candidate && (_candidate.properties[tag] || _candidate.appProperties[tag])) {
			
			ಠ_ಠ.Display.confirm({
				id: "remove_Tag",
				target: ಠ_ಠ.container,
				message: `Please confirm that you want to remove the ${tag} tag from ${_candidate.name}`,
				action: "Remove"
			}).then((confirm) => {

				if (confirm) {

					var _container = $("#" + _id + "_" + _candidate.id);
					if (!_container || _container.length === 0) _container = $("#" + _candidate.id);
					var _cell = _container.find(".file-name").parent(), _row = _cell.parent(), _busy = busy(_cell, _row);
					_busy(true);
					
					var _private = _candidate.appProperties && _candidate.appProperties[tag];
					var _properties = _private ? _candidate.appProperties : _candidate.properties;
					_properties[tag] = null;
					var _data = _private ? {appProperties : _properties} : {properties : _properties};
					
					ಠ_ಠ.Flags.log(`DE-TAGGING FILE: ${_candidate.name} (${_candidate.id}) with ${JSON.stringify(_data)}`);
						
					ಠ_ಠ.google.update(_candidate.id, _data, _team).then(updated => {
						_collection.update(_candidate);
						ಠ_ಠ.Flags.log(`FILE UPDATED: ${JSON.stringify(updated)}`);
					}).catch(e => {
						ಠ_ಠ.Flags.error("File " + _candidate.name + " De-Tagging Error", e ? e : "No Inner Error");
					}).then(() => _tables[_id].update() && _busy(false));

				}

			}).catch(e => {
				if (e) ಠ_ಠ.Flags.error("Removal Error", e);
			});
			
		}
		
	};
	/* <!-- Internal Functions --> */

	/* <!-- Initial Calls --> */
	_showFolder(folder, target);

	/* <!-- External Visibility --> */
	return {

		id: () => folder.id,

		name: () => folder.name,

		search: (id) => _searchFolder(id ? id : folder.id),

		convert: () => _convertItems(_search ? _search : folder.id),
		
		tag: (id) => _tagItems(_search ? _search : folder.id, id),

		close: () => _closeSearch(),

		delete: () => _deleteItems(),

		tally: (id) => _tally(id ? id : folder.id),

		remove: (id) => _removeItem(id),
		
		detag: (id, tag) => _detag(id, tag),
		
		table: () => _search ? _tables[_search] : _tables[folder.id],

	};
	/* <!-- External Visibility --> */

};