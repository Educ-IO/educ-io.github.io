Bookings = (options, factory) => {
  "use strict";

  /* <!-- MODULE: Provides an interface to provide common functionality --> */
  /* <!-- PARAMETERS: Receives the global app context --> */
  /* <!-- REQUIRES: Global Scope: JQuery, Underscore | App Scope: Display --> */

  /* <!-- Internal Constants --> */
  const DEFAULTS = {
      id: "BOOKINGS",
      background: {
        accept: "bg-success-light",
        reject: "bg-danger-light"
      }
    },
    EXTRACT = {
      time: /(?:^|\s)((0?[1-9]|1[012])([:.]?[0-5][0-9])?(\s?[ap]m)|([01]?[0-9]|2[0-3])([:.]?[0-5][0-9]))(?:[.!?]?)(?:\s|$)/i,
    },
    FN = {};
  /* <!-- Internal Constants --> */
  
  /* <!-- Scope Constants --> */
  const SCOPE_EVENTS = "https://www.googleapis.com/auth/calendar.events";
  /* <!-- Scope Constants --> */

  /* <!-- Internal Options --> */
  options = _.defaults(options ? _.clone(options) : {}, DEFAULTS);
  /* <!-- Internal Options --> */

  /* <!-- Internal Variables --> */
  var ರ‿ರ = {}; /* <!-- State --> */
  /* <!-- Internal Variables --> */

  /* <!-- Internal Functions --> */
  FN.check = {

    extract: element => {

      var _val = element.val();
      if (!_val) return FN.action.indeterminate(element), false;

      var _time = _val.match(EXTRACT.time);
      if (!_time || _time.length === 0) return FN.action.indeterminate(element), false;

      return options.functions.data.date(_time[1]);

    },

    time: periods => input => {

      var _action = input.data("action"),
        _time = FN.check.extract(input);

      /* <!-- Verify this time is valid --> */
      if (!_time || !_time.isValid()) return;
      var _period = _.find(periods, period => _time.isBefore(period.until) &&
        _time.isSameOrAfter(period.from));

      /* <!-- Mark Input as Valid / Invalid --> */
      if (!_period) return FN.action.invalid(input),
        factory.Flags.log("No Available Period for:", _time), null;
      FN.action.valid(input);
      factory.Flags.log("Valid & Available Period:", _period);

      /* <!-- Get partner time (e.g. start or end) --> */
      var _partner = input.siblings(`input[data-action='${_action == "start" ? "end" : "start"}']`),
        _other = FN.check.extract(_partner);

      /* <!-- Verify partner time is valid (in the same period of availability) --> */
      if (!_other || !_other.isValid()) return;
      var _valid = _action == "start" ?
        _other.isAfter(_time) && _other.isSameOrBefore(_period.until) :
        _other.isBefore(_time) && _other.isSameOrAfter(_period.from);

      /* <!-- Mark Partner as Valid / Invalid --> */
      _valid ? FN.action.valid(_partner) : FN.action.invalid(_partner);

    },

  };
  
  FN.display = {
    
    group : (id, name) => {
      
      factory.Flags.log("Selected Resource Group with ID:", id);
      
      options.functions.data.children(id).then(children => {
        
         /* <!-- Create Last Updater Function --> */
        ರ‿ರ.last = ((id, name, children) => silent => {
          
          var _resources = _.pluck(children, "email"),
              _renderer = options.functions.render.group("group", name),
              _rendered;
              
          return options.functions.data.busy(_resources).then(results => {

            var _update = number => {
              
              var _periods = options.functions.process.busy(results.calendars, _resources.length - number);
              
              /* <!-- Update Booker Function --> */
              ರ‿ರ.book = options.functions.data.book.group(factory.me.email, results.calendars, number);
              
              FN.hookup.book(options.functions.process.available(_periods))(_rendered);
              
              return options.functions.render.availability(_periods);
            }, 
            _render = periods => Promise.resolve(_rendered = _renderer(periods, _resources.length))
                  .then(FN.hookup.number(_update))
                  .then(FN.hookup.book(options.functions.process.available(periods))),
                _periods = options.functions.process.busy(results.calendars, _resources.length - 1);
            
            /* <!-- Create Booker Function --> */
            ರ‿ರ.book = options.functions.data.book.group(factory.me.email, results.calendars, 1);
            
            _render(_periods);
            
          })
            .catch(e => factory.Flags.error("Busy Retrieval Error", e))
            .then(silent ? true : factory.Main.busy("Checking Availability"));
          
        })(id, name, children);

        ರ‿ರ.last();
        
      });
      
    },
    
    resource : (id, name) => {
      
      factory.Flags.log("Selected Resource with ID:", id);

      /* <!-- Create Last Updater Function --> */
      ರ‿ರ.last = ((id, name) => silent => {
        var _renderer = options.functions.render.events("events", name);
        return options.functions.data.events(id)
          .then(data => {
            var _events = options.functions.process.me(data, id),
              _periods = options.functions.process.periods(data),
              _book = FN.hookup.book(options.functions.process.available(_periods));
            factory.Flags.log("Periods for the Day / Resource:", _periods);
            if (_events && _events.length > 0) factory.Flags.log("Loaded Events:", _events);
            return Promise.resolve(_renderer(_events, _periods))
              .then(FN.hookup.event)
              .then(_book);
          })
          .catch(e => factory.Flags.error("Events Retrieval Error", e))
          .then(silent ? true : factory.Main.busy("Checking Availability"));

      })(id, name);
      
      /* <!-- Create Booker Function --> */
      ರ‿ರ.book = options.functions.data.book.one(factory.me.email, id);

      ರ‿ರ.last();
      
    },
    
  };
  
  FN.action = {

    target: e => $(e.currentTarget || e.target),

    number: fn => e => {
      var target = FN.action.target(e),
          _target = target.data("targets"),
          _value = target.val();
      $(_target).text(_value);
      if (fn) fn(_value);
    },
    
    search: e => options.functions.render.search("resources")(FN.action.target(e).val())
                    .then(FN.hookup.resource),
    
    validate: form => {
      var _result = form[0].checkValidity() !== false;
      _result = _.reduce(form.find("[required]"),
        (result, el) => {
          var _el = $(el),
            _result = _el.data("valid");
          _el.siblings(`.${_result === false ? "invalid" : "valid"}-feedback`).addClass("d-flex");
          _el.siblings(`.${_result === false ? "valid" : "invalid"}-feedback`).removeClass("d-flex");
          return result === false ? result : _result;
        }, _result);
      form.toggleClass("was-validated", !_result);
      return _result;
    },
    
    create: form => Promise.resolve(FN.action.validate(form))
        .then(result => {
          factory.Flags.log("Booking Form Result:", result);
          if (!result) return;
          return ರ‿ರ.book(form.serializeArray())
            .then(result => result && options.functions.calendar.confirmed(result) !== null ?
                      _.isArray(result) ?
                        options.state.application.notify.success(`${result.length} Resource${result.length > 1 ? "s" : ""} Booked`, factory.Display.doc.get({
                          name: "SUCCESSFUL_GROUP_BOOK"
                        })) :
                      options.state.application.notify.success("Resource Booked", factory.Display.doc.get({
                        name: "SUCCESSFUL_BOOK",
                        content: result.htmlLink
                      })) : result)
            .catch(e => options.state.application.notify.actions.error(e, 
                                                           "Booking Failed", "FAILED_BOOK"))
            .then(() => factory.App.delay(1000).then(() => ರ‿ರ.last(true)));
        })
        .catch(e => factory.Flags.error("Booking Error", e))
        .then(factory.Main.busy("Booking")),
    
    book: e => {
      e.preventDefault();
      return factory.Main.authorise(SCOPE_EVENTS)
          .then(result => result === true ? 
                  FN.action.create($(e.currentTarget).parents("form")) : result);
    },

    resource: e => {
      e.preventDefault();
      var target = FN.action.target(e);
      var id = target.data("id"),
          group = target.data("group"),
          name = target.data("name");
      
      target.parents(".list-group").find("div.resource-group.active, a.resource-item.active").removeClass("active");
      target.addClass("active");
      
      return id ? FN.display.resource(id, name, target) : group ? FN.display.group(group, name, target) : false;
    },
    
    check: periods => e => FN.check.time(periods)(FN.action.target(e)),

    valid: element => element
      .removeClass(options.background.reject)
      .addClass(options.background.accept)
      .data("valid", true),

    invalid: element => element
      .removeClass(options.background.accept)
      .addClass(options.background.reject)
      .data("valid", false),

    indeterminate: element => element
      .removeClass(`${options.background.accept} ${options.background.reject}`)
      .data("valid", null),
  };
  /* <!-- Internal Functions --> */

  /* <!-- Initial Calls --> */
  FN.hookup = factory.Hookup({action: FN.action}, factory);

  /* <!-- External Visibility --> */
  return {
    
    new: () => options.functions.data.resources()
      .then(options.functions.render.view("book", options.id, "Resources", "book.create"))
      .then(FN.hookup.resource)
      .then(FN.hookup.search),

    refresh: options.functions.render.refresh(options.id, () => ರ‿ರ.last ? ರ‿ರ.last() : false),

  };
  /* <!-- External Visibility --> */

};