Help = function() {
  "use strict";

  /* <!-- Returns an instance of this if required --> */
  if (this && this._isF && this._isF(this.Help)) return new this.Help().initialise(this);

  /* <!-- Internal Functions --> */
  /* <!-- Internal Functions --> */

  /* <!-- Internal Variables --> */
  var ಠ_ಠ;
  /* <!-- Internal Variables --> */

  /* <!-- External Visibility --> */
  return {

    initialise: function(container) {

      /* <!-- Get a reference to the Container --> */
      ಠ_ಠ = container;

      /* <!-- Set Container Reference to this --> */
      container.Help = this;

      /* <!-- Return for Chaining --> */
      return this;

    },

    provide: function(app) {

      var _hash = new Hashes.SHA512(),
        _checks = ಠ_ಠ.me.available ? [_hash.hex(ಠ_ಠ.me.email.toLowerCase()).toUpperCase(), _hash.hex(ಠ_ಠ.me.email.split("@")[1].toLowerCase()).toUpperCase()] : [_hash.hex("ANONYMOUS").toUpperCase()];

      ಠ_ಠ.Display.modal("help", {
          id: "app_Help",
          title: "How to Get Help",
          content: ಠ_ಠ.Display.doc.get({
            name: "HELP",
            app: app,
          }),
          results: {
            success: {
              paths: ["m8.666667 23.383202l5.9238844 7.2099743l16.742783 -21.186352"],
              content: ಠ_ಠ.Display.doc.get("HELP_AVAILABLE"),
              form: {
                id: "support",
                question: "What do you need?",
                details: "Please give details about your problem, or feature request, here.",
                length: 500,
                options: [{
                    name: "Help or Assistance",
                    value: "Help"
                  },
                  {
                    name: "Report a Problem",
                    value: "Problem"
                  },
                  {
                    name: "Request a Feature",
                    value: "Feature"
                  }
                ]
              }
            },
            failure: {
              paths: ["m8.818897 8.818897l22.362206 22.362206", "m8.818897 31.181103l22.362206 -22.362206"],
              content: ಠ_ಠ.Display.doc.get("HELP_UNAVAILABLE")
            },
            indeterminate: {
              paths: [
                "m12.246719 13.975065l0 0c0 -3.6268148 2.940114 -6.566929 6.566929 -6.566929c3.6268158 0 6.566929 2.940114 6.566929 6.566929c0 3.6268158 -2.940113 6.566929 -6.566929 6.566929",
                "m18.813648 18.964567l0 8.9763775", "m18.813648 29.329397l0 3.9055119"
              ],
              content: ಠ_ಠ.Display.doc.get("HELP_INDETERMINATE")
            }
          }
        }, modal => {

          var _target = modal.find(".modal-content"),
            _results = _target.find(".result").hide(200),
            _busy = ಠ_ಠ.Display.busy({
              class: "loader-large h-100 w-100 position-absolute",
              target: _target,
              fn: true,
              status: "Checking Status"
            }),
            _complete = (selector, submit) => {
              _busy();
              _target.find(`.not-${selector}`).hide(600);
              var _show = _results.filter(`.${selector}`).show();
              _show.find("svg path").css("stroke-dashoffset", 0).css("opacity", 1);
              _show.find(".details").css("color", "#212529").find("a").css("color", "#007bff");
              _target.find(".btn-primary").toggle(submit === true);
              if (window.autosize) autosize(modal.find("textarea.resizable"));
            };

          fetchJsonp(`${ಠ_ಠ.SETUP.CHECK.url}?check=${_checks.join(";")}`)
            .then(response => response.json())
            .then(value => ಠ_ಠ.Flags.log(`Check Result: ${JSON.stringify(value)}`) &&
              _complete(value.valid === true ? "success" : value.valid === false ? "failure" : "indeterminate", value.valid === true))
            .catch(e => ಠ_ಠ.Flags.error("Error checking support status", e) && _complete(".unknown"));

        }).then(data => data && data.Type && data.Details ?
          fetchJsonp(`${ಠ_ಠ.SETUP.CHECK.url}?check=${_checks.join(";")}&type=${data.Type.Values.Value}&details=${data.Details.Values.Value}&to=${ಠ_ಠ.me.available ? ಠ_ಠ.me.email : ""}`) : Promise.resolve(false))
        .then(value => ಠ_ಠ.Flags.log(`Support Request Result: ${JSON.stringify(value)}`))
        .catch(e => ಠ_ಠ.Flags.error("Error with Help Modal", e));

    },
    /* <!-- External Functions --> */

  };
  /* <!-- External Visibility --> */
};