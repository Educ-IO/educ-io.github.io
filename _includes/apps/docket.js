App = function() {
  "use strict";

  /* <!-- DEPENDS on JQUERY to work, but not to initialise --> */

  /* <!-- Returns an instance of this if required --> */
  if (this && this._isF && this._isF(this.App)) return new this.App().initialise(this);

  /* <!-- Internal Constants --> */
  const STATE_READY = "ready",
    STATE_CONFIG = "config",
    STATE_OPENED = "opened",
    STATE_CALENDAR = "calendar",
    STATE_ISSUES = "issues",
    STATE_CLASSES = "classes",
    STATES = [STATE_READY, STATE_CONFIG, STATE_OPENED, STATE_CALENDAR, STATE_ISSUES, STATE_CLASSES];
  const ID = "diary";
  /* <!-- Internal Constants --> */

  /* <!-- Internal Variables --> */
  var ಠ_ಠ, _tasks, _showdown;
  /* <!-- Internal Variables --> */

  /* <!-- Internal Functions --> */
  var _config = {

    name: "config.json",

    mime: "application/json",

    id: false,

    config: false,

    future: false,

    clear: () => ಠ_ಠ.Google.appData.search(_config.name, _config.mime)
      .then(results => Promise.all(_.map(results, result => ಠ_ಠ.Google.files.delete(result.id))))
      .then(result => result ? _config.config = false || ಠ_ಠ.Flags.log("Docket Config Deleted") : result),

    create: data => ಠ_ಠ.Google.appData.upload({
        name: _config.name
      }, JSON.stringify(_config.config = {
        data: data,
        calendar: false,
        issues: false,
        classes: false
      }), _config.mime)
      .then(uploaded => {
        ಠ_ಠ.Flags.log(`Docket Config (${_config.name}) Saved`, uploaded);
        _config.id = uploaded.id;
        ಠ_ಠ.Display.state().enter(STATE_CONFIG);
        return uploaded;
      })
      .catch(e => ಠ_ಠ.Flags.error("Upload Error", e ? e : "No Inner Error")),

    find: () => ಠ_ಠ.Google.appData.search(_config.name, _config.mime).then(results => {
      if (results && results.length == 1) {
        ಠ_ಠ.Flags.log(`Found Docket Config [${results[0].name} / ${results[0].id}]`);
        return results[0];
      } else {
        ಠ_ಠ.Flags.log("No Existing Docket Config");
        return false;
      }
    }).catch(e => ಠ_ಠ.Flags.error("Config Error", e ? e : "No Inner Error")),

    get: () => _config.find().then(result => result ? _config.load(result) : result),

    load: file => ಠ_ಠ.Google.files.download(file.id).then(loaded => {
      return ಠ_ಠ.Google.reader().promiseAsText(loaded).then(parsed => {
        ಠ_ಠ.Flags.log(`Loaded Docket Config [${file.name} / ${file.id}]: ${parsed}`);
        _config.id = file.id;
        return parsed;
      }).then(parsed => _config.config = JSON.parse(parsed));
    }),

    update: (id, config) => ಠ_ಠ.Google.appData.upload({
        name: _config.name
      }, JSON.stringify(_config.config = _.defaults(config, _config.config)), _config.mime, id)
      .then(uploaded => {
        ಠ_ಠ.Flags.log(`Docket Config (${_config.name}) Updated`, uploaded);
        return uploaded;
      })
      .catch(e => ಠ_ಠ.Flags.error("Upload Error", e ? e : "No Inner Error"))

  };

  var _options = {

    _action: (force, state) => new Promise(resolve => {
      var _state = force || (force === undefined && !ಠ_ಠ.Display.state().in(state)) ?
        ಠ_ಠ.Display.state().enter(state) : ಠ_ಠ.Display.state().exit(state);
      resolve(_state.state().in(state));
    }),

    calendar: force => _options._action(force, STATE_CALENDAR),

    issues: force => _options._action(force, STATE_ISSUES),

    classes: force => _options._action(force, STATE_CLASSES),

  };

  var _show = {

    db: false,

    today: false,

    show: false,

    /* <!-- Interal Methods --> */
    errors: {
      update: e => ಠ_ಠ.Flags.error("Update Error", e) && ಠ_ಠ.Display.alert({
        type: "danger",
        headline: "Update Failed",
        details: ಠ_ಠ.Display.doc.get("FAILED_UPDATE"),
        scroll: true
      }),
    },

    prepare: list => _.each(list, item => {
      !item.DISPLAY && item.DETAILS ? item.DISPLAY = _showdown.makeHtml(item.DETAILS) : false;
      item._action = ((item._complete && item.DONE) ?
        item.DONE : (item._timed || item.FROM.isAfter(_show.today)) ?
        item.FROM : moment(_show.today)).format("YYYY-MM-DD");
      item.__hash = _tasks.hash(item);
    }),
    /* <!-- Interal Methods --> */

    /* <!-- Action Methods --> */
    get: target => (target.data("id") !== null && target.data("id") !== undefined) ? _show.db.get(target.data("id")) : false,

    hookup: container => {

      var _return = promise => promise;

      /* <!-- Ensure Links open new tabs --> */
      container.find("a:not([href^='#'])").attr("target", "_blank").attr("rel", "noopener");

      /* <!-- Enable Button Links --> */
      container.find(".input-group button").on("click.action", e => {
        var target = $(e.currentTarget);
        if (target.data("action")) {
          var parent = target.parents("div.item");
          _return(target.data("action") == "cancel" ?
            _show.cancel(parent) : target.data("action") == "delete" ?
            _show.delete(parent) : target.data("action") == "update" ?
            _show.update(parent) : target.data("action") == "move" ?
            _show.move(parent) : target.data("action") == "complete" ?
            _show.complete(parent) : target.data("action") == "edit" ?
            _show.edit(parent) : Promise.reject());
        }
      });

      /* <!-- Enable Keyboard Shortcuts --> */
      container.find("div.edit textarea")
        .keydown(e => {
          var code = e.keyCode ? e.keyCode : e.which;
          if (code == 13 || code == 27) e.preventDefault(); /* <!-- Enter or Escape Pressed --> */
        })
        .keyup(e => {
          var code = e.keyCode ? e.keyCode : e.which;
          var _handle = target => {
            var parent = $(target).parents("div.item");
            parent.find("div.edit, div.display").toggleClass("d-none");
            parent.toggleClass("editable").toggleClass("editing")
              .attr("draggable", (i, attr) =>
                attr === undefined || attr === null || attr === false || attr === "false" ?
                "true" : "false");
            return parent;
          };
          if (code == 13) {
            /* <!-- Enter Pressed --> */
            e.preventDefault();
            _return(e.shiftKey ? _show.complete(_handle(e.currentTarget)) : _show.update(_handle(e.currentTarget)));
          } else if (code == 27) {
            /* <!-- Escape Pressed / Cancel Update --> */
            e.preventDefault();
            _return(_show.cancel(_handle(e.currentTarget)));
          }
        });

      /* <!-- Enable Item Editing --> */
      (container.is("div.item") ? container : container.find("div.item"))
      .off("click.item").on("click.item", e => {
        var _target = $(e.currentTarget),
          _clicked = $(e.target);
        _target.find("textarea.resizable").on("focus.autosize", e => autosize(e.currentTarget));
        !_clicked.is("input, textarea, a, span, a > i") ?
          e.shiftKey ? e.preventDefault() || _show.clear() || _show.complete(_target) :
          _target.find("div.edit, div.display").toggleClass("d-none") &&
          _target.toggleClass("editable").toggleClass("editing")
          .attr("draggable", (i, attr) =>
            attr === undefined || attr === null || attr === false || attr === "false" ?
            "true" : "false") : false;
        if (_target.find("div.edit").is(":visible")) {

          /* <!-- Focus Cursor on Text Area --> */
          _target.find("div.edit textarea").focus();

          /* <!-- Scroll to target if possible --> */
          if (Element.prototype.scrollIntoView && _target[0].scrollIntoView) {
            _return = (top => promise => promise.then($("html, body").animate({
              scrollTop: top
            }, 400)))(ಠ_ಠ.Display.top());

            _target[0].scrollIntoView({
              block: "start",
              inline: "nearest"
            });
          }

          if (_target.attr("draggable")) {

            var _movable = new Hammer(_target.find("div.edit")[0]);
            _movable.get("pan").set({
              direction: Hammer.DIRECTION_VERTICAL,
              threshold: _target.height() / 2
            });
            _movable.on("pan", e => {
              if (e.pointerType == "touch") {
                var _destination = $(document.elementFromPoint(e.center.x, e.center.y));
                _destination = _destination.is("div.item[draggable=true]") ? _destination : _destination.parents("div.item[draggable=true]");
                if (_destination && _destination.length == 1) {
                  var _source = $(e.target);
                  _source = _source.is("div.item") ? _source : _source.parents("div.item");
                  if (_source.parents(".group")[0] == _destination.parents(".group")[0]) _source.insertBefore(_destination);
                }
              }
            });
            _movable.on("panend", e => {
              var _source = $(e.target);
              _source = _source.is("div.item") ? _source : _source.parents("div.item");
              var _list = [];
              _source.parent().children("div.item[draggable=true]").each((i, el) => {
                var _el = $(el),
                  _item = _show.db.get(_el.data("id")),
                  _order = i + 1;
                _el.data("order", _order);
                if (_item && _item.ORDER != _order)(_item.ORDER = _order) && _list.push(_item);
              });
              /* <!-- Save List --> */
              if (_list.length > 0) ಠ_ಠ.Flags.log("LIST TO SAVE:", _list);
            });
          }
        }
      });

      /* <!-- Enable Tooltips --> */
      ಠ_ಠ.Display.tooltips(container.find("[data-toggle='tooltip']"), {
        container: "body"
      });

    },

    busy: (target, item) => (clear => () => {
      if (clear && _.isFunction(clear)) clear();
      if (target && item) {
        var _new = $(ಠ_ಠ.Display.template.get(_.extend({
          template: "item",
          editable: true
        }, item)));
        target.replaceWith(_new);
        _show.hookup(_new);
      }
    })(ಠ_ಠ.Display.busy({
      target: target,
      class: "loader-small float-right",
      fn: true
    })),

    move: target => {
      var _item = _show.get(target),
        _input = target.find("input.dt-picker");
      _input.on("change", e => {
        var _finish = _show.busy(target, _item);

        /* <!-- Update Date --> */
        _item.FROM = new moment($(e.target).val());

        /* <!-- Process Item, Reconcile UI then Update Database --> */
        _tasks.items.process(_item).then(item => {
            _show.db.update(item);
            return item;
          })
          .then(item => _tasks.items.update(item))
          .then(_finish)
          .then(() => _show.weekly(moment(_show.show ? _show.show : _show.today)))
          .catch(_show.errors.update);
      });
      _input.bootstrapMaterialDatePicker({
        format: "YYYY-MM-DD",
        cancelText: "Cancel",
        clearButton: false,
        nowButton: true,
        time: false,
        switchOnClick: true,
        triggerEvent: "dblclick"
      });

      _input.dblclick();

    },

    complete: target => {
      var _item = _show.get(target),
        _finish = _show.busy(target, _item);

      /* <!-- Update Item --> */
      _item._complete = !(_item._complete);
      _item.STATUS = _item._complete ? "COMPLETE" : "";
      _item.DONE = _item._complete ? moment() : "";

      /* <!-- Process Item, Reconcile UI then Update Database --> */
      return _tasks.items.process(_item).then(item => {
          _show.db.update(item);
          var _content = target.find("div.display p");
          item._complete ? _content.wrap($("<del />", {
            class: "text-muted"
          })) : _content.unwrap("del");
          return item;
        })
        .then(item => _tasks.items.update(item))
        .catch(_show.errors.update)
        .then(_finish);

    },

    update: target => {
      var _item = _show.get(target),
        _finish = _show.busy(target, _item);

      /* <!-- Update Item --> */
      _item.DETAILS = target.find("div.edit textarea").val();
      _item.DISPLAY = _showdown.makeHtml(_item.DETAILS);

      /* <!-- Process Item, Reconcile UI then Update Database --> */
      return _tasks.items.process(_item)
        .then(item => {
          _show.db.update(item);
          target.find("div.display p").html(item.DISPLAY);
          return item;
        })
        .then(item => _tasks.items.update(item))
        .then(_finish)
        .catch(_show.errors.update);
    },

    delete: target => {

      var _item = _show.get(target),
        _finish;

      return ಠ_ಠ.Display.confirm({
          id: "delete_Item",
          target: ಠ_ಠ.container,
          message: `Please confirm that you wish to delete this item: ${_item.DISPLAY}`,
          action: "Delete"
        })
        .then(confirm => {
          if (!confirm) return Promise.resolve(false); /* <!-- No confirmation, so don't proceed --> */

          _finish = _show.busy(target, _item);

          /* <!-- Update Database --> */
          return _tasks.items.delete(_item).then(() => {
            /* <!-- Reconcile UI --> */
            target.remove();
            _show.db.remove(_item);
            return true;
          });
        })
        .catch(e => e ? ಠ_ಠ.Flags.error("Delete Error", e) : ಠ_ಠ.Flags.log("Delete Cancelled"))
        .then(() => _finish ? _finish() : false);
    },

    cancel: target => {

      /* <!-- Reconcile UI --> */
      target.find("div.edit textarea").val(_show.get(target).DETAILS);
      return Promise.resolve();
    },

    clear: () => {

      var s = window.getSelection ? window.getSelection() : document.selection;
      s ? s.removeAllRanges ? s.removeAllRanges() : s.empty ? s.empty() : false : false;

    },

    detag: (target, tag) => {

      return ಠ_ಠ.Display.confirm({
          id: "remove_Tag",
          target: ಠ_ಠ.container,
          message: `Please confirm that you wish to remove the <strong>${tag}</strong> tag from this item`,
          action: "Remove"
        })
        .then(confirm => {
          if (!confirm) return Promise.resolve(false); /* <!-- No confirmation, so don't proceed --> */
          var _item = _show.get(target),
            _finish = _show.busy(target, _item);

          /* <!-- Update Item --> */
          _item.TAGS = (_item.BADGES = _.filter(_item.BADGES, badge => badge != tag)).join(";");

          /* <!-- Process Item, Reconcile UI then Update Database --> */
          return _tasks.items.process(_item).then(item => {
              _show.db.update(item);
              target.find(`span.badge a:contains('${tag}')`).filter(function() {
                return $(this).text() == tag;
              }).parents("span.badge").remove();
              return item;
            })
            .then(item => _tasks.items.update(item))
            .catch(_show.errors.update)
            .then(_finish);
        }).catch(e => e);
    },

    edit: target => {

      if (!target) return;
      var _item = _show.get(target),
        _tags = _item.TAGS,
        _dialog = ಠ_ಠ.Dialog({}, ಠ_ಠ),
        _template = "tag",
        _id = "tag";

      var _reconcile = target => {
        var _new = $(ಠ_ಠ.Display.template.get({
          template: "tags",
          tags: _item.TAGS,
          badges: _item.BADGES
        }));
        target.empty().append(_new);
        return target;
      };

      var _handleRemove = target => target.find("span.badge a").on("click.remove", e => {
        e.preventDefault();
        var _target = $(e.currentTarget),
          _tag = _target.parents("span.badge").text().replace("×", "");
        if (_tag) {
          _item.TAGS = (_item.BADGES = _.filter(_item.BADGES, badge => badge != _tag)).join(";");
          _handleRemove(_reconcile(_target.parents("form")));
        }
      });

      return ಠ_ಠ.Display.modal(_template, {
          target: ಠ_ಠ.container,
          id: _id,
          title: "Edit Tags",
          instructions: ಠ_ಠ.Display.doc.get("TAG_INSTRUCTIONS"),
          validate: values => values ? ಠ_ಠ.Flags.log("Values for Validation", values) && true : false,
          /* <!-- Do we need to validate? --> */
          handlers: {
            clear: _dialog.handlers.clear,
          },
          tags: _item.TAGS,
          badges: _item.BADGES,
          all: _tasks.badges(_show.db)
        }, dialog => {

          /* <!-- General Handlers --> */
          ಠ_ಠ.Fields().on(dialog);

          /* <!-- Handle CTRL Enter to Save --> */
          _dialog.handlers.keyboard.enter(dialog);

          /* <!-- Handle Click to Remove --> */
          _handleRemove(dialog);

          /* <!-- Handle Click to Add --> */
          dialog.find("li button").on("click.add", e => {
            e.preventDefault();
            var _input = $(e.currentTarget).parents("li").find("span[data-type='tag'], input[data-type='tag']");
            var _val = _input.val() || _input.text();
            if (_input.is("input")) _input.val("") && _input.focus();
            if (_val && (_item.BADGES ? _item.BADGES : _item.BADGES = []).indexOf(_val) < 0) {
              _item.BADGES.push(_val);
              _item.TAGS = _item.BADGES.join(";");
              _handleRemove(_reconcile(dialog.find("form")));
            }
          });

          /* <!-- Handle Enter on textbox to Add --> */
          dialog.find("li input[data-type='tag']")
            .keypress(e => ((e.keyCode ? e.keyCode : e.which) == 13) ? e.preventDefault() || $(e.currentTarget).siblings("button[data-action='add']").click() : null).focus();

        }).then(values => {
          if (values) {
            /* <!-- Apply the Update --> */
            var _finish = _show.busy(target, _item);
            /* <!-- Process Item, Reconcile UI then Update Database --> */
            return _tasks.items.process(_item).then(item => {
                _show.db.update(item);
                return item;
              })
              .then(item => _tasks.items.update(item))
              .catch(_show.errors.update)
              .then(_finish);
          } else {
            /* <!-- Cancel the Update --> */
            _item.TAGS = _tags;
            return _tasks.items.process(_item);
          }
        })
        .catch(e => e ? ಠ_ಠ.Flags.error("Edit Tags Error", e) : ಠ_ಠ.Flags.log("Edit Tags Cancelled"));

    },
    /* <!-- Action Methods --> */

    /* <!-- Diary Methods --> */
    list: list => ಠ_ಠ.Display.modal("list", {
      target: ಠ_ಠ.container,
      id: `${ID}_list`,
      title: `${list.length} Docket Item${list.length > 1 ? "s" : ""}`,
      items: _.sortBy(_show.prepare(list), "FROM"),
    }).then(() => list),

    weekly: focus => new Promise(resolve => {

      _show.show = focus.startOf("day").toDate();
      focus = focus.isoWeekday() == 7 ? focus.subtract(1, "days") : focus;

      var _days = [],
        _add = (date, css, action, tasks, events, type) => {
          _days.push({
            sizes: date.isoWeekday() >= 6 ? {
              xs: 12
            } : {
              lg: type.large ? 9 : type.small.before ? 3 : 6,
              xl: type.large ? 6 : type.small.before || type.small.after ? 3 : 4
            },
            row_sizes: date.isoWeekday() == 6 ? {
              lg: type.large ? 9 : type.small.before ? 3 : 6,
              xl: type.large ? 6 : type.small.before || type.small.after ? 3 : 4
            } : false,
            title: date.format("ddd"),
            date: date.toDate(),
            instruction: date.isoWeekday() == 6 ? "row-start" : date.isoWeekday() == 7 ? "row-end" : false,
            class: date.isoWeekday() >= 6 ? `p-0 ${css.block}` : css.block,
            action: action,
            title_class: css.title,
            wide: css.wide,
            tasks: tasks,
            events: events
          });
        };

      focus.add(focus.isoWeekday() == 1 ? -3 : -2, "days");
      _.times(7, () => {
        focus.add(1, "days");
        var _day = focus.isoWeekday(),
          _diff = focus.diff(_show.show, "days"),
          _lg = _diff === 0 || (_day == 6 && _diff == -1) || (_day == 7 && _diff == 1),
          _sm_Before = !_lg && (_diff == -1 || (_day == 5 && _diff == -2) || (_day == 6 && _diff == -2)),
          _sm_After = !_lg && (_diff == 1 || (_day == 1 && _diff == 2)),
          _sizes = {
            large: _lg,
            small: {
              before: _sm_Before,
              after: _sm_After,
            }
          },
          _display = focus.format("YYYY-MM-DD"),
          _all = _show.prepare(_show.db ? _tasks.query(focus, _show.db, focus.isSame(_show.today)) : []),
          _diary = {
            tasks: _.chain(_all).filter(item => !item._timed).sortBy("DETAILS").sortBy("GHOST").sortBy("ORDER").sortBy("_countdown").value(),
            events: _.chain(_all).filter(item => item._timed).sortBy(item => moment(item.TIME, ["h:m a", "H:m", "h:hh A"]).toDate()).value(),
          };
        _add(focus, {
            block: focus.isSame(_show.today) || (focus.isoWeekday() == 6 && focus.clone().add(1, "days").isSame(_show.today)) ?
              "present bg-highlight-gradient top-to-bottom" : _diff === 0 ? "focussed bg-light" : focus.isBefore(_show.today) ? "past text-muted" : "future",
            title: focus.isSame(_show.today) ? "present" : _diff === 0 ? "bg-bright-gradient left-to-right" : "",
            wide: _diff === 0
          },
          _display, _diary.tasks, _diary.events, _sizes);
      });
      if (_config.future) _days.push({
        sizes: {
          xs: 12
        },
        title: "Future",
        class: "mt-2 bg-light text-muted"
      });

      var _diary = ಠ_ಠ.Display.template.show({
        template: "weekly",
        id: ID,
        days: _days,
        action: {
          list: [{
            action: "new.task",
            icon: "add"
          }, {
            action: "search",
            icon: "search"
          }, {
            action: "jump",
            icon: "fast_forward"
          }, {
            action: "today",
            icon: "today"
          }],
          icon: "edit"
        },
        target: ಠ_ಠ.container,
        clear: true,
      });

      /* <!-- Hookup all relevant events --> */
      _show.hookup(_diary);

      /* <!-- Drag / Drop --> */
      var _get = data => !data || data.indexOf("item_") !== 0 ? false : $(`#${data}`),
        _items = _diary.find("div.item[draggable=true]"),
        _clear = _.debounce(items => items.removeClass("drop-target"), 100);
      _items
        .on("dragstart.item", e => e.originalEvent.dataTransfer.setData("text/plain", e.target.id))
        .on("dragend.item", () => _clear($("div.item.drop-target")))
        .on("dragover.item", e => e.preventDefault())
        .on("dragenter.item", e => {
          var _destination = $(e.target);
          _destination = _destination.is("div.item[draggable=true]") ? _destination : _destination.parents("div.item[draggable=true]");
          if (!_destination.hasClass("drop-target")) {
            _clear($("div.item.drop-target").not(`#${_destination[0].id}`));
            _destination.addClass("drop-target");
          }
        })
        .on("drop.item", e => {
          e.preventDefault();
          var _id = e.originalEvent.dataTransfer.getData("text/plain"),
            _source = _get(_id);
          var _destination = $(e.target);
          _destination = _destination.is("div.item[draggable=true]") ? _destination : _destination.parents("div.item[draggable=true]");
          if (!_source || _id == _destination.id) return;
          if (_source.parents(".group")[0] == _destination.parents(".group")[0]) {
            _source.insertBefore(_destination);
            _source.addClass("bg-bright");
            setTimeout(() => _source.removeClass("bg-bright"), 1000);
            var _list = [];
            _source.parent().children("div.item[draggable=true]").each((i, el) => {
              var _el = $(el),
                _item = _show.db.get(_el.data("id")),
                _order = i + 1;
              _el.data("order", _order);
              if (_item && _item.ORDER != _order)(_item.ORDER = _order) && _list.push(_item);
            });
            /* <!-- Save List --> */
            if (_list.length > 0) {
              ಠ_ಠ.Flags.log("LIST TO UPDATE:", _list);
              _.each(_list, item => _tasks.items.update(item)
                .then(r => (r === false) ? ಠ_ಠ.Flags.error("Update Item Failed", item) : true));
            }
          }
        });

      /* <!-- Scroll to today if visible --> */
      if (Element.prototype.scrollIntoView) {
        var _now = _diary.find("div.focussed").length == 1 ? _diary.find("div.focussed") : _diary.find("div.present");
        if (_now.length === 1 && _now[0].scrollIntoView) {
          _now[0].scrollIntoView({
            block: "start",
            inline: "nearest"
          });
          if (window.scrollBy && _diary.outerHeight(true) > $(window).height()) window.scrollBy(0, -10);
        }
      }

      resolve(ಠ_ಠ.Display.state().enter(STATE_OPENED));

    }),

    tagged: tag => _show.list(_tasks.tagged(tag, _show.db)),
    /* <!-- Diary Methods --> */

  };

  var _new = {

    item: type => {

      var _item, _error, _save, _retried = false;
      _error = () => ಠ_ಠ.Display.alert({
        type: "danger",
        headline: "Save Failed",
        details: _retried ? false : ಠ_ಠ.Display.doc.get("FAILED_SAVE"),
        action: _retried ? false : "Retry",
        scroll: true
      }).then(result => result === true ? (_retried = true) && _save(_item) : Promise.resolve(true));

      _save = item => _tasks.items.create(item).then(r => {
          if (r === false) return r;
          _show.db.update(r);
          return _show.weekly(moment(_show.show ? _show.show : _show.today));
        })
        .catch(e => ಠ_ಠ.Flags.error("Create New Error", e) && !_retried && _error())
        .then(r => r === false ? _error() : Promise.resolve(true));

      var _dialog = ಠ_ಠ.Dialog({}, ಠ_ಠ),
        _template = "new",
        _id = "new";
      return ಠ_ಠ.Display.modal(_template, {
          target: ಠ_ಠ.container,
          id: _id,
          title: `Create New ${type}`,
          instructions: ಠ_ಠ.Display.doc.get("NEW_INSTRUCTIONS"),
          validate: values => values ? ಠ_ಠ.Flags.log("Values for Validation", values) && true : false,
          /* <!-- Do we need to validate? --> */
          date: moment(_show.show ? _show.show : _show.today).format("YYYY-MM-DD"),
          handlers: {
            clear: _dialog.handlers.clear,
          },
          updates: {
            extract: _dialog.handlers.extract({
              time: _tasks.regexes.EXTRACT_TIME,
              date: _tasks.regexes.EXTRACT_DATE,
            })
          }
        }, dialog => {
          ಠ_ಠ.Fields().on(dialog);
          _dialog.handlers.keyboard.enter(dialog);
          dialog.find(`#${_id}_details`).focus();
        }).then(values => {
          if (!values) return false;
          ಠ_ಠ.Flags.log("Values for Creation", values);
          _item = {
            FROM: values.From ? values.From.Value : null,
            TAGS: values.Tags ? values.Tags.Value : null,
            DETAILS: values.Details ? values.Details.Value : null,
          };
          return _tasks.items.process(_item).then(item => _save(_show.db.insert(item)));
        })
        .catch(e => e ? ಠ_ಠ.Flags.error("Create New Error", e) : ಠ_ಠ.Flags.log("Create New Cancelled"));
    },

    task: () => _new.item("Task"),

  };

  var _find = {

    search: () => ಠ_ಠ.Display.text({
        message: ಠ_ಠ.Display.doc.get("SEARCH_INSTRUCTIONS"),
        action: "Search",
        simple: true,
      }).then(query => query ? _show.list(_tasks.search(query, _show.db, !_show.show ? _show.today : _show.show >= _show.today ? _show.show : false)) : false)
      .catch(e => e ? ಠ_ಠ.Flags.error("Search Error", e) : ಠ_ಠ.Flags.log("Search Cancelled"))

  };

  var _archive = {

    show: () => {

      var _template = "archive",
        _id = "archive";
      return ಠ_ಠ.Display.modal(_template, {
          target: ಠ_ಠ.container,
          id: _id,
          title: "Archive Docket Items",
          instructions: ಠ_ಠ.Display.doc.get("ARCHIVE_INSTRUCTIONS"),
          years: _tasks.years(_show.db),
        })
        .then(values => {
          if (_.isEmpty(values)) return false;
          var _years = _.reduce(values.Archive.Values, (list, value, year) => (value === true) ? list.concat([year]) : list, []);
          var _busy = ಠ_ಠ.Display.busy({
              target: ಠ_ಠ.container,
              status: "Archiving Data",
              fn: true
            }),
            _update = message => _busy({
              message: message
            });
          return Promise.all(_.map(_years, year => _tasks.archive(year, _show.db)))
            .then(items => {
              var _items = _.sortBy(_.compact(_.flatten(items, true)), "__ROW").reverse();
              if (!_items || _items.length === 0) return false;
              var _batches = _.reduce(_items, (groups, item, index, all) => {
                  (index === 0 || all[index - 1].__ROW == (item.__ROW + 1)) ?
                  groups[groups.length - 1].push(item):
                    groups.push([item]);
                  return groups;
                }, [
                  []
                ]),
                _results = [];

              var _complete = () => _.reduce(_batches, (promise, items) => {
                return promise
                  .then(() => _tasks.items.remove(items).then(result => _results.push(result)));
              }, Promise.resolve());

              return _complete().then(() => _results);

            })
            .then(() => _update("Loading Data") && _tasks.close())
            .then(() => _tasks.open(_config.config.data))
            .then(db => _update("Loaded Data") && (_show.db = db))
            .then(() => _show.weekly(moment(_show.show ? _show.show : _show.today)));
        })
        .catch(e => e ? ಠ_ಠ.Flags.error("Archive Error", e) : ಠ_ಠ.Flags.log("Archive Cancelled"));

    }

  };

  var _jump = () => {
    var _id = "ctrl_Jump";
    ಠ_ಠ.container.find(`#${_id}`).remove();
    var _input = $("<input />", {
      id: _id,
      type: "hidden",
      class: "d-none dt-picker",
      value: moment(_show.show ? _show.show : _show.today).format("YYYY-MM-DD")
    }).appendTo(ಠ_ಠ.container);

    _input.on("change", e => {
      var _date = new moment($(e.target).val());
      if (_date.isValid()) _show.weekly(_date);
    });

    _input.bootstrapMaterialDatePicker({
      format: "YYYY-MM-DD",
      cancelText: "Cancel",
      clearButton: false,
      cancelButton: true,
      nowButton: true,
      time: false,
      switchOnClick: true,
      triggerEvent: "dblclick"
    });

    _input.dblclick();
  };

  var _refresh = () => {

    var _busy = ಠ_ಠ.Display.busy({
      target: ಠ_ಠ.container,
      status: "Loading Data",
      fn: true
    });

    /* <!-- Reset to Today --> */
    _show.today = moment().startOf("day").toDate();

    _tasks.close();
    _tasks.open(_config.config.data)
      .then(db => _show.db = db)
      .then(() => _busy())
      .then(() => _show.weekly(moment(_show.show ? _show.show : _show.today)));

  };

  var _from = () => moment(_show.show ? _show.show : _show.today).clone();

  var _start = (config, busy) => {

    _options.calendar(config.calendar);
    _options.issues(config.issues);
    _options.classes(config.classes);

    if (busy) busy({
      message: "Loading Data"
    });

    return _tasks.open(config.data)
      .then(db => {
        _show.db = db;
        if (busy) busy({
          message: "Loaded Data"
        });
        return _show.weekly(moment());
      })
      .catch(e => {
        ಠ_ಠ.Flags.error("Data Error", e ? e : "No Inner Error");
        return false;
      });

  };
  /* <!-- Internal Functions --> */

  /* <!-- External Visibility --> */
  return {

    /* <!-- External Functions --> */
    initialise: function(container) {

      /* <!-- Get a reference to the Container --> */
      ಠ_ಠ = container;

      /* <!-- Set Container Reference to this --> */
      container.App = this;

      /* <!-- Set Up the Default Router --> */
      this.route = ಠ_ಠ.Router.create({
        name: "Docket",
        states: STATES,
        recent: false,
        simple: true,
        start: () => {
          var _busy = ಠ_ಠ.Display.busy({
            target: ಠ_ಠ.container,
            status: "Loading Config",
            fn: true
          });
          _config.get()
            .then(config => !config ? ಠ_ಠ.Router.run(STATE_READY) :
              _busy({
                message: "Loaded Config"
              }) && _start(config, _busy).then(result => result ? _busy() : ಠ_ಠ.Router.run(STATE_CONFIG)));
        },
        test: () => ಠ_ಠ.Display.state().in(STATE_OPENED),
        clear: () => _tasks ? _tasks.close() : false,
        routes: {
          archive: {
            matches: /ARCHIVE/i,
            fn: _archive.show
          },
          backward_day: {
            matches: [/BACKWARD/i, /DAY/i],
            keys: ",",
            fn: () => {
              var _start = _from();
              _show.weekly(_start.subtract(_start.isoWeekday() == 7 ? 2 : 1, "days"));
            },
          },
          backward: {
            matches: /BACKWARD/i,
            keys: "<",
            actions: "swiperight",
            fn: () => _show.weekly(_from().subtract(1, "weeks"))
          },
          calendar: {
            matches: /CALENDAR/i,
            fn: () => _options.calendar()
              .then(result => _config.update(_config.id, {
                calendar: result
              }))
          },
          classes: {
            matches: /CLASSES/i,
            fn: () => _options.classes().then(result => _config.update(_config.id, {
              classes: result
            }))
          },
          config_clear: {
            matches: [/CONFIG/i, /CLEAR/i],
            fn: () => () => ಠ_ಠ.Display.confirm({
                id: "clear_Config",
                target: ಠ_ಠ.container,
                message: "Please confirm that you wish to <strong>clear</strong> the configuration. This will <strong>not delete</strong> your data.",
                action: "Clear"
              })
              .then(confirm => confirm ? ಠ_ಠ.Display.busy() && _config.clear() : false)
              .then(cleared => cleared ? ಠ_ಠ.Display.state().exit([STATE_CONFIG, STATE_OPENED]) && ಠ_ಠ.Router.run(STATE_READY) : false)
              .catch(e => e ? ಠ_ಠ.Flags.error("Clear Config Error", e) : ಠ_ಠ.Flags.log("Clear Config Cancelled"))
          },
          config_show: {
            matches: [/CONFIG/i, /SHOW/i],
            fn: () => {
              var _details = {},
                _finish = ಠ_ಠ.Display.busy({
                  target: ಠ_ಠ.container,
                  fn: true
                });
              _config.find()
                .then(result => result ? _config.load(_details.file = result) : result)
                .then(config => config ? _details.config = config : config)
                .then(config => _finish() && config ? ಠ_ಠ.Display.inform({
                  id: "show_Config",
                  target: ಠ_ಠ.container,
                  code: _.escape(JSON.stringify(_details, null, 4))
                }) : config);
            }
          },
          create: () => {
            var _finish;
            _config.clear()
              .then(() => _tasks.create())
              .then(id => _config.create(id))
              .then(() => _start(_config.config, _finish))
              .then(_finish = ಠ_ಠ.Display.busy({
                target: ಠ_ಠ.container,
                status: "Creating Config",
                fn: true
              }));
          },
          edit_tags: {
            matches: [/EDIT/i, /TAGS/i],
            length: 1,
            fn: command => _show.edit($(`#item_${command}`))
          },
          forward_day: {
            matches: [/FORWARD/i, /DAY/i],
            keys: ".",
            fn: () => {
              var _start = _from();
              _show.weekly(_start.add(_start.isoWeekday() == 6 ? 2 : 1, "days"));
            },
          },
          forward: {
            matches: /FORWARD/i,
            keys: ">",
            actions: "swipeleft",
            fn: () => _show.weekly(_from().add(1, "weeks")),
          },
          issues: {
            matches: /ISSUES/i,
            fn: () => _options.issues().then(result => _config.update(_config.id, {
              issues: result
            }))
          },
          jump: {
            matches: /JUMP/i,
            keys: ["j", "J", "g", "G"],
            fn: _jump
          },
          new_task: {
            matches: [/NEW/i, /TASK/i],
            keys: ["n", "N"],
            fn: _new.task
          },
          open: {
            options: {
              title: "Select a Docket Sheet to Open",
              view: "SPREADSHEETS",
            },
            success: value => {
              var _picked = value.id,
                _finish = ಠ_ಠ.Display.busy({
                  target: ಠ_ಠ.container,
                  status: "Loading Config",
                  fn: true
                });
              _config.find()
                .then(config => config ? _config.update(config.id, {
                  data: _picked
                }) : _config.create(_picked))
                .then(() => _start(_config.config, _finish));
            },
          },
          refresh: {
            matches: /REFRESH/i,
            keys: ["r", "R"],
            fn: _refresh
          },
          remove_tag: {
            matches: [/REMOVE/i, /TAG/i],
            length: 2,
            fn: command => _show.detag($(`#item_${command[0]}`), command[1])
          },
          search_tags: {
            matches: [/SEARCH/i, /TAGS/i],
            length: 1,
            fn: command => _show.tagged(command).then(results => ಠ_ಠ.Flags.log(`Found Docket ${results.length} Item${results.length > 1 ? "s" : ""}`, results))
          },
          search: {
            keys: ["s", "S", "f", "F"],
            fn: _find.search,
          },
          today: {
            matches: /TODAY/i,
            keys: ["t", "T"],
            fn: () => _show.weekly(moment(_show.today)),
          }
        },
        route: (handled, command) => {
          /* <!-- TODO: More elegant expression here! --> */
          if (handled) return;
          var _parsed = moment(command);
          if (_parsed.isValid()) _show.weekly(_parsed);
        }
      });

      /* <!-- Return for Chaining --> */
      return this;

    },

    /* <!-- Start App after fully loaded --> */
    start: () => {

      /* <!-- Setup Moment --> */
      moment().format();
      var locale = window.navigator.userLanguage || window.navigator.language;
      if (locale) moment.locale(locale);
      _show.today = moment().startOf("day").toDate();

      /* <!-- Setup Showdown --> */
      _showdown = new showdown.Converter({
        strikethrough: true
      });

      /* <!-- Create Tasks Reference --> */
      _tasks = ಠ_ಠ.Tasks(ಠ_ಠ);

    },

    /* <!-- Clear the existing state --> */
    clean: () => ಠ_ಠ.Router.clean(false),

  };

};