Datatable = function(ಠ_ಠ, table, options, target, after_update) {

	/* <!-- table = {id, name, data, headers} --> */
	/* <!-- options = {filters, inverted_Filters, sorts, widths, frozen, readonly, advanced, collapsed, template, removable} --> */

	/* <!-- Internal Consts --> */
	const LARGE_ROWS = 200, FILTER_DELAY = 200, defaults = {
    template : "rows",
		filters : {},
		inverted_Filters : {},
		sorts : {},
		classes : [],
		visibilities : {
			visible: {
				name: "Visible",
				desc: "Show this column"
			},
			initially: {
				name: "Hide",
				desc: "Hide this column, but allow it to be un-hidden",
				menu: true
			},
			now: null,
			always : null
		}
  };
	options = _.defaults(options, defaults);
	/* <!-- Internal Consts --> */
	
	/* <!-- Filters --> */
	var Filters = options => {

		/* <!-- Internal Variables --> */
		var _normal = options.filters, _inverted = options.inverted_Filters;
		/* <!-- Internal Variables --> */

		/* <!-- Internal Methods --> */
		var _createQuery = (filters, join) => {
			var _query, _join = join ? join : "$and";
			_.map(Object.keys(filters), field => {
				var _condition = {};
				_condition[field] = filters[field];
				if (!_query) {
					_query = _condition;
				} else {
					if (_query[_join]) {
						_query[_join].push(_condition);
					} else {
						_query = {
							[_join]: [_query, _condition]
						};
					}
				}
			});
			return _query;
		};

		var _addFilter = (field, value, normal, inverted) => {
			var _invert, _filter;
			if (value.startsWith("!!")) {
				_invert = true;
				value = value.substr(2).trim();
			}
			if (value.startsWith("$")) {
				value = value.substr(1).trim();
				if (value) _filter = {
					"$contains": [value]
				};
			} else if (value.startsWith("##")) {
				value = value.substr(2).trim();
				if (value) _filter = {
					"$regex": [RegExp.escape(value), "i"]
				};
			} else if (value.startsWith("<=") || value.startsWith("=<")) {
				value = value.substr(2).trim();
				if (value) _filter = {
					"$lte": value.toLowerCase() == "now" ? new Date() : value
				};
			} else if (value.startsWith(">=") || value.startsWith("=>")) {
				value = value.substr(2).trim();
				if (value) _filter = {
					"$gte": value.toLowerCase() == "now" ? new Date() : value
				};
			} else if (value.startsWith("<>")) {
				value = value.substr(2).trim();
				if (value) _filter = {
					"$ne": value.substr(2).trim()
				};
			} else if (value.startsWith("!$") || value.startsWith("$!")) {
				value = value.substr(2).trim();
				if (value) _filter = {
					"$containsNone": [value]
				};
			} else if (value.startsWith("=")) {
				value = value.substr(1).trim();
				if (value) _filter = {
					"$aeq": value
				};
			} else if (value.startsWith(">")) {
				value = value.substr(1).trim();
				if (value) _filter = {
					"$gt": value.toLowerCase() == "now" ? new Date() : value
				};
			} else if (value.startsWith("<")) {
				value = value.substr(1).trim();
				if (value) _filter = {
					"$lt": value.toLowerCase() == "now" ? new Date() : value
				};
			} else if (value.indexOf("->") > 0) {
				var _value = value.split("->");
				if (_value.length == 2) {
					var val_1 = _value[0].trim(),
						val_2 = _value[1].trim();
					if (val_1 && val_2) _filter = {
						"$between": [val_1, val_2]
					};
				} else if (value) {
					_filter = {
						"$regex": [RegExp.escape(value), "i"]
					};
				}
			} else if (value) {
				if (value.toLowerCase() === "past") {
					_filter = {
						"$lt": new Date()
					};
				} else if (value.toLowerCase() === "future") {
					_filter = {
						"$gt": new Date()
					};
				} else if (value.toLowerCase() === "today") {
					_filter = {
						"$between": [moment().startOf("day"), moment().endOf("day")]
					};
				} else {
					_filter = {
						"$regex": [RegExp.escape(value), "i"]
					};
				}
			}
			if (_filter) {
				if (_invert) {
					inverted[field] = _filter;
					delete normal[field];
				} else {
					normal[field] = _filter;
					delete inverted[field];
				}
			} else {
				delete normal[field];
				delete inverted[field];
			}
		};

		var _removeFilter = (field, normal, inverted) => {
			if (normal[field]) {
				delete normal[field];
				return true;
			} else if (inverted[field]) {
				delete inverted[field];
				return true;
			}
		};
		/* <!-- Internal Methods --> */

		/* <!-- External Visibility --> */
		return {

			add: (field, value) => _addFilter(field, value, _normal, _inverted),

			get: field => _inverted[field] ? {
				filter: _inverted[field],
				inverted: true
			} : _normal[field] ? {
				filter: _normal[field]
			} : null,

			remove: field => _removeFilter(field, _normal, _inverted),

			filter: rows => {
				if (!$.isEmptyObject(_inverted)) {
					ಠ_ಠ.Flags.log("Applying Inverted Filters", _inverted);
					var _inversion = _createQuery(_inverted, "$or");
					var _exclude = new Set(table.data.chain().find(_inversion).data().map(v => v.$loki));
					rows = rows.where(v => !_exclude.has(v.$loki));
				}
				if (!$.isEmptyObject(_normal)) {
					ಠ_ಠ.Flags.log("Applying Filters", _normal);
					rows = rows.find(_createQuery(_normal));
				}
				return rows;
			},

			normal: () => _normal,

			inverted: () => _inverted,

		};
		/* <!-- External Visibility --> */

	};
	/* <!-- Filters --> */

	/* <!-- Internal Variables --> */
	var _filters, _sorts, _advanced, _name, _css;
	/* <!-- Internal Variables --> */

	/* <!-- Initialisation Functions --> */
	var _initialise = () => {

		/* <!-- Get 'Default' Filters and Searches if applicable --> */
		_filters = Filters(options);
		_sorts = options.sorts;

		/* <!-- Get 'Default' Filters and Searches if applicable --> */
		_name = ("table_" + table.id).replace(/[^a-z0-9\-_:\.]|^[^a-z]+/gi, "");

		/* <!-- Remove / Create Custom CSS Sheet --> */
		_css = _css ? _css.deleteAll() : ಠ_ಠ.Css(_name);

	};
	_initialise(); /* <!-- Run initial variable initialisation --> */
	/* <!-- Initialisation Functions --> */

	/* <!-- Internal Functions --> */
	var _getData = () => {
		
		ಠ_ಠ.Flags.log("Getting Rows from Data");

		var _rows = table.data.chain();

		_rows = _filters.filter(_rows);

		if (!$.isEmptyObject(_sorts)) {
			ಠ_ಠ.Flags.log("Applying Sorts", _sorts);
			_rows = _rows.compoundsort(Object.keys(_sorts).reduce((sorts, field) => {
				sorts.push([field, _sorts[field].is_desc]);
				return sorts;
			}, []));
		}

		_rows = _rows.data({
			removeMeta: true
		});
		
		ಠ_ಠ.Flags.log("Data After Filtering & Sorting", _rows);
		
		return _rows;
		
	};
	
	var _getRows = () => {

		var _rows = _getData();

		ಠ_ಠ.Flags.log("Applying Column Hides", table.headers);
		return _rows.map(v => {
			table.headers.forEach((f, i) => {
				if (f.hide()) delete v[f.field ? f.field : i];
			});
			return v;
		});

	};

	var _clearVisibilities = () => {
		_css.delete("table-column-visibility");
		target.find(".to-hide-prefix").removeClass("to-hide-prefix");
	};

	var _toggleColumn = (el, f) => {
		if (el && el.hasClass("to-hide")) {
			var _style = _css.sheet("table-column-visibility");
			var _nth = ":nth-child(" + table.headers.slice(0, el.data("index")).reduce((t, h) => h.hide() ? t : t + 1, 1) + ")";
			var _selector = "table#" + _name + " tr th.table-header" + _nth + ", table#" + _name + " tbody tr td" + _nth;
			el.is(":hidden") ? _css.removeRule(_style, _selector) : _css.addRule(_style, _selector, "display: none !important;");
			if (f) return _toggleColumn(f(el), f);
		} else {
			return el;
		}
	};
	
	var _updateHeaders = (container, defaults) => {

		var query = ".table-header[data-index]";
		var _headers = (container ? container.find(query) : target.find(query)).sort((a, b) => parseInt(a.dataset.index) - parseInt(b.dataset.index));

		var _style = _css.sheet("table-column-tohide");

		_headers.each((i, el) => {

			var _t = $(el),
				_i = parseInt(_t.data("index")),
				_f = _t.data("field");

			if (table.headers[_i].hide(defaults) && _t.parent().is("tr")) {
				var _p = _t.parent().parent();
				if (_t.hasClass("to-hide-prefix")) _t.prev().addClass("to-hide-prefix");
				_t.detach().appendTo(_p);
			} else if (!table.headers[_i].hide(defaults) && _t.parent().hasClass("table-headers")) {
				var _q = _i === 0 ? _t.parents(".table-headers").find("tr")[0] : _t.parents(".table-headers").find("tr .table-header[data-index=" + (_i + 1) + "]")[0];
				_i === 0 ? _t.detach().prependTo(_q) : _t.detach().insertBefore(_q);
				_t.prev().hasClass("to-hide-prefix") ? _t.prev().removeClass("to-hide-prefix") : _t.removeClass("to-hide-prefix");
			}

			/* <!-- Set Visibility --> */
			_t.toggleClass("d-none", table.headers[i].hide(defaults)).toggleClass("to-hide", !!table.headers[i].hide_initially);

			/* <!-- Set Similar Style Rules for Rows --> */
			var _selector = "#" + _name + " tbody tr td:nth-child(" + table.headers.slice(0, _i).reduce((t, h) => h.hide() ? t : t + 1, 1) + ")";
			table.headers[_i].hide_initially ?
				_css.removeRule(_style, _selector).addRule(_style, _selector, "background-color: " + _t.css("background-color") + "; color: " + _t.css("color")) :
				_css.removeRule(_style, _selector);

			/* <!-- Set Sorts --> */
			_t.toggleClass("sort", !!_sorts[_f]).toggleClass("desc", !!(_sorts[_f] && _sorts[_f].is_desc)).toggleClass("asc", !!(_sorts[_f] && !_sorts[_f].is_desc));

			/* <!-- Set Filters --> */
			var _filter = _filters.get(_f);
			_t.toggleClass("filtered", !!(_filter)).toggleClass("inverse", !!(_filter && _filter.inverted));
			ಠ_ಠ.Flags.debug() && _filter ? _t.attr("title", (_filter.inverted ? "NOT: " : "") + JSON.stringify(_filter.filter)) : _t.removeAttr("title");

		});
		
		/* <!-- Clear Visibilities (make all toggles visible again) as we're inconsistent with indexing --> */
		_clearVisibilities();
		
		/* <!-- Collapse by default --> */
		if (options.collapsed) {
			query = ".table-header[data-index].to-hide";
			(container ? container.find(query) : target.find(query)).each((i, el) => {
				if (!el.nextElementSibling || !$(el.nextElementSibling).hasClass("to-hide")) {
					var _target = $(el),
					_last = (_target.hasClass("to-hide") && !_target.hasClass("to-hide-prefix") && _target.nextAll(":not(.to-hide)").length === 0),
					_result = _toggleColumn(_target, el => el.prev());
					if (_last) _result.addClass("to-hide-prefix");
				}
			});
		}

		return container;
	};

	var _updateRows = () => {
		var _rows = $(ಠ_ಠ.Display.template.get(options.template)({
			rows: _getRows(),
			removable: options.removable
		}));
		if (_advanced && _advanced.scroll.initialised()) { /* <!-- Complex Scrolling may have been requested but not initialised --> */
			_advanced.scroll.update(_rows.toArray().map(e => e.outerHTML));
		} else {
			target.find("#" + _name + " tbody").empty().append(_rows);
			target.find("[data-toggle='popover']").popover({
				trigger: "focus"
			});
		}
		if (after_update) after_update(target);
	};

	var _update = (rows, headers, container, defaults) => {
		if (rows) _updateRows();
		if (headers) _updateHeaders(container, defaults);
		return true;
	};

	var _clearFilter = t => {
		var _target = $(t);
		_target.parents("div.input-group").find("input[type='text']").val("");
		_filters.remove(_target.data("field"));
		_target.parents("div.form").fadeOut();
		_update(true, true, target);
	};

	var _createRows = rows => ಠ_ಠ.Display.template.get(options.template)({
		rows: rows,
		removable: options.removable
	});

	var _createDefaultTable = () => ಠ_ಠ.Display.template.get("table")({
		id: _name,
		links: false,
		classes: options.classes,
		headers: table.headers,
		rows: _createRows(table.data.chain().data({
			removeMeta: true
		}).map(v => {
			_.each(table.headers, (f, i) => {
				if (f.hide_default) delete v[i];
			});
			return v;
		})),
	});

	var _createDisplayFilters = () => ಠ_ಠ.Display.template.get("filters")({
		id: _name,
		headers: table.headers,
		choices: options.visibilities,
		instructions: ಠ_ಠ.Display.doc.get("FILTERS")
	});

	var _createDisplayTable = () => ಠ_ಠ.Display.template.get("table")({
		id: _name,
		links: !options.readonly,
		classes: options.classes.concat(options.widths && options.widths.lengths > 0 ? ["table-fixed-width"] : []),
		headers: table.headers,
		widths: options.widths,
		rows: _createRows(_getRows()),
	});

	var _createDisplayDataset = (filters, table) => $(ಠ_ಠ.Display.template.get("datatable")({
		filters: options.readonly ? "" : filters ? filters : _createDisplayFilters(),
		table: table ? table : _createDisplayTable()
	}));

	var _showValues = () => {

		/* <!-- Get Table to Display (Updating the Headers at the same time) --> */
		/* <!-- NEED TO APPEND LATER TO STOP VISUAL FLASH OF SCROLLBARS ?? --> */
		target.append(_createDisplayDataset());

		/* <!-- Set Filter Handlers --> */
		var _filter_Timeout = 0;
		target.find("input.table-search").off("keyup").on("keyup", e => {
			var _target, keycode = ((typeof e.keyCode != "undefined" && e.keyCode) ? e.keyCode : e.which);
			if (keycode === 27) { /* <!-- Escape Key Pressed --> */
				e.preventDefault();
				_clearFilter(e.target);
			} else if (keycode === 13) { /* <!-- Enter Key Pressed --> */
				e.preventDefault();
				_target = $(e.target);
				_target.parents("div.form").fadeOut();
			}
		}).off("input").on("input", e => {
			clearTimeout(_filter_Timeout);
			_filter_Timeout = setTimeout(() => {
				if (e && e.target) {
					var _target = $(e.target);
					var _action = _target.data("action");
					var _field = _target.data("field");
					var _value = _target.val();
					if (_action == "filter") {
						_value ? _filters.add(_field, _value) : _filters.remove(_field);
						_update(true, true, target);
					}
				}
			}, FILTER_DELAY);
		});

		/* <!-- Enable Pop-Overs and Tool-Tips --> */
    ಠ_ಠ.Display.popovers(target.find("[data-toggle='popover']"));
		ಠ_ಠ.Display.tooltips(target.find("[data-toggle='tooltip']"));

		/* <!-- Show/Hide Column (expandable table) --> */
		target.find(".table-headers").on("click", e => {
			if (e.target.classList.contains("table-header")) {
				var _target = $(e.target),
					_last = (_target.hasClass("to-hide") && !_target.hasClass("to-hide-prefix") && _target.nextAll(":not(.to-hide)").length === 0);
				if (_last) _target.prev().addClass("to-hide-prefix");
				_toggleColumn(_target.hasClass("to-hide") || _target.hasClass("to-hide-prefix") ? (_target.hasClass("to-hide-prefix") ? _target.next() : _target) : _target.prev(), _target.hasClass("to-hide") || _target.hasClass("to-hide-prefix") ? (el) => el.next() : (el) => el.prev());
				if (_target.hasClass("to-hide-prefix")) _target.removeClass("to-hide-prefix");
			}
		});

		/* <!-- Clear Column Filter --> */
		target.find("button[data-command='clear']").on("click", e => _clearFilter(e.target));

		/* <!-- Apply Table Sort --> */
		target.find("a[data-command='sort'], button[data-command='sort']").on("click", e => {
			var _target = $(e.target);
			var _field = _target.data("field");
			if (_sorts[_field]) {
				_sorts[_field].is_desc ? delete _sorts[_field] : _sorts[_field].is_desc = true;
			} else {
				_sorts[_field] = {
					is_desc: false
				};
			}
			_update(true, true, target);
		});

		/* <!-- Update Column Visibility --> */
		target.find("a[data-command='hide']").on("click", e => {
			var _target = $(e.target);
			var _action = _target.data("action");
			var _field = _target.parent().data("index");
			var _heading = $("#" + _target.parent().data("heading")).parent();
			var _complete;
			if (_action == "now") {
				table.headers[_field].hide_now = !table.headers[_field].hide_now;
				_complete = () => {
					if (table.headers[_field].hide_now && _heading.next().is(":hidden")) {
						/* <!-- Clear Visibilities (make all toggles visible again) as we are now inconsistent with indexing --> */
						_clearVisibilities();
					}
				};
			} else if (_action == "always") {
				table.headers[_field].hide_always = !table.headers[_field].hide_always;
				_complete = () => {
					if (table.headers[_field].hide_always && _heading.next().is(":hidden")) {
						/* <!-- Clear Visibilities (make all toggles visible again) as we are now inconsistent with indexing --> */
						_clearVisibilities();
					}
				};
			} else if (_action == "initially") {
				table.headers[_field].hide_initially = !table.headers[_field].hide_initially;
				if (table.headers[_field].hide_initially) {
					_complete = () => {
						if (!options.collapsed && (_heading.prev().is(":hidden") || _heading.next().is(":hidden"))) _toggleColumn(_heading);
					};
				}
			}
			_target.tooltip("hide").parents("div.form").fadeOut();
			_update(true, true, target);
			if (_complete) _complete();
		});

		target.find(".table-header a").on("click", e => {
			e.preventDefault();
			var target = $($(e.target).data("target"));
			target.fadeToggle().promise().done(() => target.find("input[type='text']:visible").first().focus());
		});

		/* <!-- Set up Table --> */
		if (options.advanced) {
			
			_advanced = _advanced ? _advanced : ಠ_ಠ.Table(target.find("table"), target, ಠ_ಠ);
			
			/* <!-- Init Scroll Cache for Larger Tables --> */
			if (table.data.count() > LARGE_ROWS) _advanced.scroll.init(target.find("tbody"), options.blocks_to_show, options.rows_to_show).toggle();
			
		}
		
		/* <!-- Collapse Columns if required --> */
		if (options.collapsed) _updateHeaders(target);
		
	}; /* <!-- End Show --> */

	var _columnVisibility = () => {

		var _choices = options.visibilities;
		
		ಠ_ಠ.Display.options({
			id: "column_visibilities",
			title: "Column Visibilities",
			action: "Apply",
			instructions: "Please select which columns you wish to be visible from the list below.",
			list: table.headers.map((v) => ({
				name: v.name,
				current: v.hide_always ? _choices.always.name : v.hide_initially ? _choices.initially.name : v.hide_now ? _choices.now.name : _choices.visible.name
			})),
			inline: true,
			choices_label: "Menu for controlling the visibility of this column",
			choices: _choices
		}).then(options => {

			if (options && options.length > 0) {

				/* <!-- Trigger Loader --> */
				var _busy = ಠ_ಠ.Display.busy({
					target: target,
					fn: true
				});

				ಠ_ಠ.Flags.log("Current Headers", table.headers).log("Received Options", options);

				/* <!-- Send List of Columns to hide --> */
				options.forEach(v => table.headers[v.name].set_hide(
					_choices.now && v.value === _choices.now.name, 
					_choices.always && v.value === _choices.always.name, 
					_choices.initially && v.value === _choices.initially.name));

				/* <!-- Update Visual Display --> */
				_update(true, true);

				/* <!-- Un-Trigger Loader --> */
				_busy();

			}

		}, e => e ? ಠ_ಠ.Flags.error("Select Column Visibility", e) : false);

	};
	/* <!-- Internal Functions --> */

	/* <!-- Initial Calls --> */
	_showValues();

	/* <!-- External Visibility --> */
	return {

		active: () => target.hasClass("active"),

		columns: {
			visibility: () => _columnVisibility()
		},
		
		defaults: () => {

			_initialise(); /* <!-- Run initial variable initialisation --> */

			table.headers.forEach(v =>  v.set_hide ? v.set_hide(v.hide_default, false, false) : false);

			target.find("input.table-search").val("");
			target.find("div.form.column-settings").hide();

			_update(true, true, target, true);
		},

		freeze: rows_only => {
			if (_advanced) _advanced.freeze.init((options.frozen && !rows_only) ? options.frozen.cols : 0).toggle();
		},

		name: () => table.name,

		data: () => _getData(),
		
		values: filtered => {
			var _html = filtered ? $(_createDisplayTable()) : $(_createDefaultTable());
			var _return = [_.map(_html.find(".table-headers .table-header:not(." + (filtered ? "no-export" : "no-export-default") + ") a").toArray(), el => el.textContent.trim())];
			_html.find("tbody tr").each((i, el) => _return.push(_.map($(el).find("td").toArray(), el => el.textContent.trim())));
			return _return;
		},

		dehydrate: () => ({
			n: table.name,
			f: _filters.normal(),
			e: _filters.inverted(),
			s: _sorts,
			r: options.frozen && options.frozen.rows ? options.frozen.rows : 1,
			h: _.chain(table.headers).filter(h => h.hide(true)).map(h => ({
				n: h.name,
				h: h.hide_always,
				i: h.hide_initially
			})).value()
		}),
		
		update: () => _update(true, true),

	};
	/* <!-- External Visibility --> */

};