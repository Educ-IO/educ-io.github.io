Sheets = function(sheet, ಠ_ಠ) {

	/* <!-- Internal Variables --> */
	var _db = new loki("view.db"),
		_sheets = {};
	/* <!-- Internal Variables --> */

	/* <!-- Internal Functions --> */
	var _currentSheet = () => _sheets[Object.keys(_sheets).filter(key => _sheets[key].active())[0]];

	var _initSheet = function(data, name, index, target, widths, hide, frozen, locale, size) {

		ಠ_ಠ.Flags.log("Google Sheet Values [" + name + "]", data);
		var headers = [];

		if (data && data.length > 0) {

			/* <!-- Check for fully 'blank' columns --> */
			ಠ_ಠ.Flags.time("Checking Blank Columns");
			var _hasValues = Array.apply(null, {
				length: size.cols
			}).map(Number.call, Number);
			_.find(data, (row) => {
				_.each(row, (cell, index) => {
					if (cell) _hasValues = _.filter(_hasValues, (number) => number !== index);
				});
				return (_hasValues.length === 0);
			});
			if (_hasValues && _hasValues.length > 0) {
				ಠ_ಠ.Flags.log("Blank Columns in Sheet:", JSON.stringify(_hasValues));
				_hasValues.reverse();
				data = _.map(data, (row) => {
					_.each(_hasValues, function(index) {
						if (row.length > index + 1) row.splice(index, 1);
					});
					return row;
				});
			}
			ಠ_ಠ.Flags.time("Checking Blank Columns", true);

			/* <!-- Handle Headers --> */
			ಠ_ಠ.Flags.time("Generating Headers");
			headers = data.shift();
			var rows = frozen.rows ? frozen.rows - 1 : 0;
			while (rows > 0) {
				headers = data.shift().map((v, i) => v ? (headers[i] ? headers[i] + " / " + v : v) : headers[i]);
				rows--;
			}

			/* <!-- Create Headers Object --> */
			headers = headers.map((v, i) => ({
				name: v ? v : "-" + i + "-",
				hide: function(initial) {
					return !!(this.hide_now || this.hide_always || (initial && this.hide_initially));
				},
				set_hide: function(now, always, initially) {
					this.hide_now = now;
					this.hide_always = always;
					this.hide_initially = initially;
				},
				hide_now: !!hide[i],
				hide_always: false,
				hide_initially: false,
				hide_default: !!hide[i]
			}));
			ಠ_ಠ.Flags.time("Generating Headers", true);

		}

		/* <!-- Check Array for Dates --> */
		ಠ_ಠ.Flags.time("Checking for Dates in Sheet Values");
		var _formats;
		if (locale && moment.locale(locale) == locale.toLowerCase()) {
			ಠ_ಠ.Flags.log("Spreadsheet Locale:", locale);
			var _locales = moment.localeData()._longDateFormat;
			_formats = [moment.ISO_8601];
			if (_locales) {
				if (_locales.L) {
					_formats.unshift(_locales.L);
					if (_locales.LT) _formats.unshift(_locales.L + " " + _locales.LT);
					if (_locales.LT) _formats.unshift(_locales.L + " " + _locales.LTS);
				}
				if (_locales.LL) _formats.unshift(_locales.LL);
				if (_locales.LLL) _formats.unshift(_locales.LLL);
				if (_locales.LLLL) _formats.unshift(_locales.LLLL);
			}
			ಠ_ಠ.Flags.log("Date Parsing Formats:", _formats);
		} else {
			ಠ_ಠ.Flags.error("Could Not Set Date/Time Locale to " + locale, "");
		}

		if (data && data.length > 0) {
			var _date_Indexes = _.reduce(data[0], (dates, value, index) => {
				if (value && _.isString(value) && moment(value, _formats, true).isValid()) dates.push(index);
				return dates;
			}, []);
			ಠ_ಠ.Flags.log("Date Column Indexes:", _date_Indexes);
			if (_date_Indexes.length > 0) _.each(data, (row) => _.each(_date_Indexes, (index) => {
				row[index] = row[index] ? moment(row[index], _formats, true).toDate() : row[index];
			}));
		}
		ಠ_ಠ.Flags.time("Checking for Dates in Sheet Values", true);

		ಠ_ಠ.Flags.time("Creating Object Array from Sheet Values");
		var values = data && data.length > 0 ? data.map((v) => {
			return Object.assign({}, v);
		}) : [];
		var fields = Array.apply(null, {
			length: size.cols
		}).map(Number.call, Number);
		ಠ_ಠ.Flags.time("Creating Object Array from Sheet Values", true);

		var table = _db.getCollection(name);

		if (!table) {
			table = _db.addCollection(name, {
				indices: fields,
				serializableIndices: false
			});
			table.insert(values);
		}

		_sheets[name] = ಠ_ಠ.Datatable(ಠ_ಠ, {
			id: index,
			name: name,
			headers: headers,
			data: table
		}, {
			widths: widths,
			frozen: frozen,
			advanced: true,
			visibilities : {
				visible: {
					name: "Visible",
					desc: "Show this column"
				},
				now: {
					name: "Hide Now",
					desc: "Hide this column",
					menu: true
				},
				always: {
					name: "Hide Always",
					desc: "Just hide this column on the view that you create",
					menu: true
				},
				initially: {
					name: "Hide Initially",
					desc: "Just hide this column on the view, but allow it to be un-hidden",
					menu: true
				}
			}
		}, target);

	};

	var _loadValues = function(sheet, name, index, target) {

		ಠ_ಠ.Display.busy({
			target: target
		});

		/* <!-- Clean Up CSS etc --> */
		if (_sheets[name]) _sheets[name].defaults();

		/* <!-- Grab and correct locale (if required) --> */
		var _locale = sheet.properties.locale;
		if (_locale) _locale = _locale.replace("_", "-");

		var _frozen = {
			cols: sheet.sheets[index].properties.gridProperties.frozenColumnCount,
			rows: sheet.sheets[index].properties.gridProperties.frozenRowCount
		};

		var _size = {
			cols: sheet.sheets[index].properties.gridProperties.columnCount,
			rows: sheet.sheets[index].properties.gridProperties.rowCount
		};

		/* <!-- Initiatilise Sheet, Protect Jump Links & Remove the Loader --> */
		var _complete = (d, n, i, t, w, h, f, l, s) => {
			_initSheet(d, n, i, t, w, h, f, l, s);
			ಠ_ಠ.Display.busy({
				target: target,
				clear: true
			}).state().enter("opened").protect("a.jump").on("JUMP");
		};

		/* <!-- ARRAY OF: {startRowIndex: 0, endRowIndex: 1, startColumnIndex: 1, endColumnIndex: 3} --> */
		ಠ_ಠ.Flags.log("Google Sheet Merges [" + name + "]", sheet.sheets[index].merges);

		if (sheet.sheets[index].data && sheet.sheets[index].data.length == 1) {

			/* <!-- Already have loaded values --> */
			var _data = sheet.sheets[index].data[0];
			var _fontSizes = Array(_data.columnMetadata.length).fill(sheet.properties.defaultFormat.textFormat.fontSize);
			var _rows = _data.rowData.map((r) => r.values.map((c, i) => {
				if (c.effectiveFormat) _fontSizes[i] = Math.max(_fontSizes[i], c.effectiveFormat.textFormat.fontSize);
				return c.formattedValue;
			}));

			_complete(
				_rows.clean(false, true).trim(_rows[0].length), name, index, target,
				_data.columnMetadata.map((c, i) => (c.pixelSize / _fontSizes[i]) * parseFloat(getComputedStyle(document.documentElement).fontSize)),
				_data.columnMetadata.map((c) => !!c.hiddenByUser), _frozen, _locale, _size
			);

		} else {

			/* <!-- Need to load the values --> */
			ಠ_ಠ.Google.sheets.values(sheet.spreadsheetId, name + "!A:ZZ")
				.then((data) => _complete(data.values, name, index, target, [], [], _frozen, _locale, _size))
				.catch((e) => {
					ಠ_ಠ.Flags.error("Adding Content Table", e);
					ಠ_ಠ.Display.busy({
						target: target,
						clear: true
					});
				});

		}

	};

	var _refreshTab = function() {
		var target = $("div.tab-pane.active");
		_loadValues(sheet, target.data("name"), target.data("index"), target.empty());
	};

	var _showTab = function(tab, sheet) {
		var target = $(tab.data("target"));
		if (target.children().length === 0 || tab.data("refresh")) _loadValues(sheet, tab.data("name"), tab.data("index"), target.empty());
		tab.closest(".nav-item").addClass("order-1").siblings(".order-1").removeClass("order-1");
	};

	var _showSheet = function(sheet) {

		var _data = {
			tabs: sheet.sheets.map((v, i) => ({
				id: i,
				name: v.properties.title
			}))
		};

		var _tabs = ಠ_ಠ.Display.template.show({
			template: "tab-list",
			class: "pt-2",
			id: sheet.spreadsheetId,
			name: sheet.properties.title,
			nav: "sheet_tabs",
			links: ಠ_ಠ.Display.template.get("tab-links")(_data),
			tabs: ಠ_ಠ.Display.template.get("tab-tabs")(_data),
			target: ಠ_ಠ.container,
			clear: true
		});

		/* <!-- Set Load Tab Handler & Load Initial Values --> */
		_tabs.find("a.nav-link").on("click", (e) => $(e.target).data("refresh", e.shiftKey)).on("show.bs.tab", function(e) {
			if (e && e.target) _showTab($(e.target), sheet);
		}).first().tab("show");

	};

	var _exportTypes = {
		csv: {
			name: "csv",
			type: "csv",
			ext: ".csv",
			size: "single",
			desc: "Comma Separated Value Format"
		},
		dif: {
			name: "dif",
			type: "dif",
			ext: ".dif",
			size: "single",
			desc: "Data Interchange Format (DIF)"
		},
		fods: {
			name: "fods",
			type: "fods",
			ext: ".fods",
			size: "multi",
			desc: "Flat OpenDocument Spreadsheet Format"
		},
		html: {
			name: "html",
			type: "html",
			ext: ".html",
			size: "single",
			desc: "HTML Document"
		},
		md: {
			name: "md",
			type: "md",
			ext: ".md",
			size: "single",
			desc: "Markdown Table"
		},
		ods: {
			name: "ods",
			type: "ods",
			ext: ".ods",
			size: "multi",
			desc: "OpenDocument Spreadsheet Format"
		},
		prn: {
			name: "ods",
			type: "prn",
			ext: ".prn",
			size: "single",
			desc: "Lotus Formatted Text"
		},
		sylk: {
			name: "sylk",
			type: "sylk",
			ext: ".sylk",
			size: "single",
			desc: "Symbolic Link (SYLK) File"
		},
		txt: {
			name: "txt",
			type: "txt",
			ext: ".txt",
			size: "single",
			desc: "UTF-16 Unicode Text File"
		},
		xlml: {
			name: "xlml",
			type: "xlml",
			ext: ".xls",
			size: "multi",
			desc: "Excel 2003-2004 (SpreadsheetML) Format"
		},
		xlsb: {
			name: "xlsb",
			type: "xlsb",
			ext: ".xlsb",
			size: "multi",
			desc: "Excel 2007+ Binary Format"
		},
		xlsm: {
			name: "xlsm",
			type: "xlsm",
			ext: ".xlsm",
			size: "multi",
			desc: "Excel 2007+ Macro XML Format"
		},
		xlsx: {
			name: "xlsx",
			type: "xlsx",
			ext: ".xlsx",
			size: "multi",
			desc: "Excel 2007+ XML Format"
		},
		xls_8: {
			name: "xls",
			type: "biff8",
			ext: ".xls",
			size: "multi",
			desc: "Excel 97-2004 Workbook Format"
		},
		xls_5: {
			name: "xls",
			type: "biff5",
			ext: ".xls",
			size: "multi",
			desc: "Excel 5.0/95 Workbook Format"
		},
		xls_2: {
			name: "xls",
			type: "biff2",
			ext: ".xls",
			size: "single",
			desc: "Excel 2.0 Worksheet Format"
		}
	};

	/* <!-- Output File Function (once choices have been made) --> */
	var _outputAndSave = function(book, type, filename) {

		ಠ_ಠ.Flags.log("Outputting Spreadsheet Book", book);

		var _s2ab = function(s) {
			var buf;
			if (typeof ArrayBuffer !== "undefined") {
				buf = new ArrayBuffer(s.length);
				var view = new Uint8Array(buf);
				for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
				return buf;
			} else {
				buf = new Array(s.length);
				for (var j = 0; j != s.length; ++j) buf[j] = s.charCodeAt(j) & 0xFF;
				return buf;
			}
		};

		return new Promise((resolve, reject) => {

			var wbout = XLSX.write(book, {
				bookType: type,
				bookSST: true,
				type: "binary"
			});
			try {
				saveAs(new Blob([_s2ab(wbout)], {
					type: "application/octet-stream"
				}), filename);
				resolve();
			} catch (e) {
				ಠ_ಠ.Flags.error("Google Sheet Export", e);
				reject();
			}
		});

	};

	/* <!-- Output File Function (once choices have been made) --> */
	var _exportSheet = function(full, all) {

		var error = (e) => e ? ಠ_ಠ.Flags.error("Google Sheet Export", e) : ಠ_ಠ.Flags.log("Google Sheet Export Cancelled");

		ಠ_ಠ.Display.choose({
			id: "view_export_format",
			title: "Please Select a Format to Export to ...",
			instructions: ಠ_ಠ.Display.doc.get({
				name: "EXPORT_FORMATS",
				content: full ? "original" : "filtered",
			}),
			desc: "Available Formats:",
			action: "Export",
			choices: _exportTypes
		}).then(function(option) {

			if (option) {

				var __exportSheet = function() {

					/* <!-- Trigger Loader --> */
					ಠ_ಠ.Display.busy({
						target: $("div.tab-content div.tab-pane.active")
					});

					var error = (e) => {
							if (e) ಠ_ಠ.Flags.error("Google Sheet Export:", e);
							ಠ_ಠ.Display.busy({
								clear: true
							});
						},
						complete = () => ಠ_ಠ.Display.busy({
							clear: true
						}),
						_content = $(".tab-content"),
						_id = _content.data("id"),
						_title = _content.data("name");

					if (option.type == "md") {

						var _md_sheet = _currentSheet(),
							_md_name = _md_sheet.name();
						var _md_values = _md_sheet.values(!full);

						var _md_output = "|---\n";
						if (_md_values && _md_values.length > 0) {

							/* <!-- Output Header Row --> */
							var _md_headers = _md_values.shift();
							_md_output += (_.reduce(_md_headers, (row, value, index) => row + (index > 0 ? " | " + value : value), "") + "\n");
							/* <!-- Output Separator Row --> */
							_md_output += (_.times(_md_headers.length, () => "|:-").join("") + "\n");
							if (_md_values.length > 0) {
								_md_output += _.map(_md_values, (values) => _.reduce(values, (row, value, index) => row + (index > 0 ? " | " + value : value), "")).join("\n");
							}

						}

						try {
							saveAs(new Blob([_md_output], {
								type: "text/markdown"
							}), _title + " - " + _md_name + option.ext);
							complete();
						} catch (e) {
							error(e);
						}

					} else {

						var Workbook = function() {
							if (!(this instanceof Workbook)) return new Workbook();
							this.SheetNames = [];
							this.Sheets = {};
						};

						var _exportBook = new Workbook();
						var _safeName = {
							"\\": "",
							"/": " ",
							"?": "",
							"*": "",
							"[": "",
							"]": ""
						};

						var save = (title) => _outputAndSave(_exportBook, option.type, title + option.ext).then(complete).catch(error);

						if (all && option.size == "multi") {

							/* <!-- Get all tabs --> */
							var _tabs = _content.children("div.tab-pane"),
								_current = 0,
								_total = _tabs.length;

							_tabs.each((i, el) => {
								var _name = $(el).data("name");
								var _get = !_sheets[_name] ?
									new Promise((resolve) => {
										ಠ_ಠ.Google.sheets.values(_id, _name + "!A:ZZ").then(data => resolve(data.values));
									}) :
									new Promise((resolve) => resolve(_sheets[_name].values(!full)));

								_get.then((data) => {
									if (data && data.length > 0) {
										_name = RegExp.replaceChars(_name, _safeName);
										_exportBook.SheetNames.push(_name);
										_exportBook.Sheets[_name] = XLSX.utils.aoa_to_sheet(data);
									}
									if (_total == ++_current) save(_title);

								});

							});

						} else {

							var _sheet = _currentSheet(),
								_name = RegExp.replaceChars(_sheet.name(), _safeName),
								_values = _sheet.values(!full);
							_exportBook.SheetNames.push(_name);
							_exportBook.Sheets[_name] = XLSX.utils.aoa_to_sheet(_values && _values.length > 0 ? _values : []);
							save(_title + " - " + _name);

						}

					}

				};

				if (!all && option.size == "multi") {

					ಠ_ಠ.Display.choose({
						id: "view_export_size",
						title: "Which Tabs would you like to export ...",
						instructions: ಠ_ಠ.Display.doc.get({
							name: "EXPORT_SIZE",
							content: option.desc
						}),
						action: "Export",
						choices: {
							all: {
								name: "All Tabs",
								all: true
							},
							single: {
								name: "Current Tab",
								desc: _currentSheet().name(),
								all: false,
							}
						}
					}).then(function(option) {

						all = option.all;
						__exportSheet();

					}).catch(error);

				} else {

					__exportSheet();

				}

			}

		}).catch(error);

	};
	/* <!-- Internal Functions --> */

	/* <!-- Initial Calls --> */
	_showSheet(sheet);

	/* <!-- External Visibility --> */
	return {
		id: () => sheet.spreadsheetId,

		export: (full, all) => _exportSheet(full, all),

		sheet: () => _currentSheet(),

		refresh: () => _refreshTab(),
	};
	/* <!-- External Visibility --> */

};