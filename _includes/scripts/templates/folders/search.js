!function(){var t=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).search=t({1:function(t,l,a,e,n){var o;return null!=(o=t.lambda(null!=l?l.instructions:l,l))?o:""},3:function(t,l,a,e,n){var o;return null!=(o=t.invokePartial(e.populate_buttons,null!=l?l.shortcuts:l,{name:"populate_buttons",data:n,helpers:a,partials:e,decorators:t.decorators}))?o:""},5:function(t,l,a,e,n){var o;return t.escapeExpression(t.lambda(null!=(o=null!=l?l.state:l)?o.names:o,l))},7:function(t,l,a,e,n){var o;return null!=(o=a.if.call(null!=l?l:t.nullContext||{},null!=(o=null!=l?l.state:l)?o.limited:o,{name:"if",hash:{},fn:t.program(8,n,0),inverse:t.noop,data:n}))?o:""},8:function(t,l,a,e,n){return" checked"},10:function(t,l,a,e,n){var o;return null!=(o=a.if.call(null!=l?l:t.nullContext||{},null!=(o=null!=l?l.state:l)?o.domain:o,{name:"if",hash:{},fn:t.program(8,n,0),inverse:t.noop,data:n}))?o:""},12:function(t,l,a,e,n){var o;return null!=(o=a.if.call(null!=l?l:t.nullContext||{},null!=(o=null!=l?l.state:l)?o.public:o,{name:"if",hash:{},fn:t.program(8,n,0),inverse:t.noop,data:n}))?o:""},14:function(t,l,a,e,n){var o;return null!=(o=a.if.call(null!=l?l:t.nullContext||{},null!=(o=null!=l?l.state:l)?o.shared:o,{name:"if",hash:{},fn:t.program(8,n,0),inverse:t.noop,data:n}))?o:""},16:function(t,l,a,e,n){var o;return t.escapeExpression(t.lambda(null!=(o=null!=l?l.state:l)?o.mime:o,l))},18:function(t,l,a,e,n){var o;return t.escapeExpression(t.lambda(null!=(o=null!=l?l.state:l)?o.properties:o,l))},20:function(t,l,a,e,n){var o;return t.escapeExpression(t.lambda(null!=(o=null!=l?l.state:l)?o.exclude:o,l))},22:function(t,l,a,e,n){var o;return t.escapeExpression(t.lambda(null!=(o=null!=l?l.state:l)?o.include:o,l))},24:function(t,l,a,e,n){var o;return null!=(o=a.if.call(null!=l?l:t.nullContext||{},null!=(o=null!=l?l.state:l)?o.recurse:o,{name:"if",hash:{},fn:t.program(8,n,0),inverse:t.noop,data:n}))?o:""},26:function(t,l,a,e,n){var o;return null!=(o=a.if.call(null!=l?l:t.nullContext||{},null!=(o=null!=l?l.state:l)?o.entire:o,{name:"if",hash:{},fn:t.program(8,n,0),inverse:t.noop,data:n}))?o:""},28:function(t,l,a,e,n){var o;return null!=(o=a.if.call(null!=l?l:t.nullContext||{},null!=l?l.entire:l,{name:"if",hash:{},fn:t.program(8,n,0),inverse:t.noop,data:n}))?o:""},30:function(t,l,a,e,n){var o;return null!=(o=a.each.call(null!=l?l:t.nullContext||{},null!=l?l.actions:l,{name:"each",hash:{},fn:t.program(31,n,0),inverse:t.noop,data:n}))?o:""},31:function(t,l,a,e,n){var o;return null!=(o=t.invokePartial(e.control_button,l,{name:"control_button",hash:{b_text:null!=l?l.text:l,b_title:null!=l?l.desc:l,b_action:a.concat.call(null!=l?l:t.nullContext||{},"actions_",n&&n.index,{name:"concat",hash:{},data:n}),b_id:null!=l?l.id:l,b_class:"btn-outline-info"},data:n,helpers:a,partials:e,decorators:t.decorators}))?o:""},compiler:[7,">= 4.0.0"],main:function(t,l,a,e,n){var o,s=t.lambda,r=null!=l?l:t.nullContext||{};return'<div id="'+t.escapeExpression(s(null!=l?l.id:l,l))+'" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_options_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_options_title">'+(null!=(o=s(null!=l?l.title:l,l))?o:"")+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        '+(null!=(o=a.if.call(r,null!=l?l.instructions:l,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?o:"")+"\n\t\t\t\t"+(null!=(o=a.if.call(r,null!=l?l.shortcuts:l,{name:"if",hash:{},fn:t.program(3,n,0),inverse:t.noop,data:n}))?o:"")+'\n\t\t\t\t<form>\n\t\t\t\t\t<div class="row mt-3">\n\t\t\t\t\t\t<div class="col-12 col-lg-6">\n\t\t\t\t\t\t\t<label for="nameContains">Names</label>\n\t\t\t\t\t\t\t<button type="button" class="close" data-action="clear" data-clear="nameContains" aria-label="Clear"><span aria-hidden="true">&times;</span></button>\n    \t\t\t\t\t<textarea id="nameContains" name="names" class="form-control resizable optional" rows="1">'+(null!=(o=a.if.call(r,null!=l?l.state:l,{name:"if",hash:{},fn:t.program(5,n,0),inverse:t.noop,data:n}))?o:"")+'</textarea>\n\t\t\t\t\t\t\t<small class="form-text text-muted">File Names to search for (<strong>OR</strong>, <strong>ALL</strong> if blank), one per line.</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-12 col-lg-6 align-self-center">\n\t\t\t\t\t\t\t<div class="d-flex flex-column flex-wrap flex-md-row">\n\t\t\t\t\t\t\t\t<div class="custom-control custom-checkbox mr-2 mt-1">\n\t\t\t\t\t\t\t\t\t<input id="visibility_limited" name="limited" type="checkbox" class="custom-control-input"'+(null!=(o=a.if.call(r,null!=l?l.state:l,{name:"if",hash:{},fn:t.program(7,n,0),inverse:t.noop,data:n}))?o:"")+'>\n\t\t\t\t\t\t\t\t\t<label class="custom-control-label" for="visibility_limited">Individual/s</label>\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="custom-control custom-checkbox mr-2 mt-1">\n\t\t\t\t\t\t\t\t\t<input id="visibility_Domain" name="domain" type="checkbox" class="custom-control-input"'+(null!=(o=a.if.call(r,null!=l?l.state:l,{name:"if",hash:{},fn:t.program(10,n,0),inverse:t.noop,data:n}))?o:"")+'>\n\t\t\t\t\t\t\t\t\t<label class="custom-control-label" for="visibility_Domain">Domain</label>\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="custom-control custom-checkbox mr-2 mt-1">\n\t\t\t\t\t\t\t\t\t<input id="visibility_Public" name="public" type="checkbox" class="custom-control-input"'+(null!=(o=a.if.call(r,null!=l?l.state:l,{name:"if",hash:{},fn:t.program(12,n,0),inverse:t.noop,data:n}))?o:"")+'>\n\t\t\t\t\t\t\t\t\t<label class="custom-control-label" for="visibility_Public">Public</label>\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="custom-control custom-checkbox mr-2 mt-1">\n\t\t\t\t\t\t\t\t\t<input id="shared_WithMe" name="shared" type="checkbox" class="custom-control-input" disabled'+(null!=(o=a.if.call(r,null!=l?l.state:l,{name:"if",hash:{},fn:t.program(14,n,0),inverse:t.noop,data:n}))?o:"")+'>\n\t\t\t\t\t\t\t\t\t<label class="custom-control-label" for="shared_WithMe">Shared with Me</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<small class="form-text text-muted mt-1">Visibility of items to search for (<strong>OR</strong> / <strong>AND</strong> only shared).</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="row mt-3">\n\t\t\t\t\t\t<div class="col-12 col-lg-6">\n\t\t\t\t\t\t\t<label for="mimeTypes">Mime Types</label>\n\t\t\t\t\t\t\t<button type="button" class="close" data-action="clear" data-clear="mimeTypes" aria-label="Clear"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t\t\t\t<button type="button" class="close mr-1" data-action="lock" data-lock="mimeTypes" aria-label="Lock"><i class="material-icons">lock_open</i></button>\n\t\t\t\t\t\t\t<textarea id="mimeTypes" name="mime" class="form-control resizable optional small" rows="1">'+(null!=(o=a.if.call(r,null!=l?l.state:l,{name:"if",hash:{},fn:t.program(16,n,0),inverse:t.noop,data:n}))?o:"")+'</textarea>\n\t\t\t\t\t\t\t<small class="form-text text-muted">Mime Types to search for (<strong>OR</strong>, <strong>ALL</strong> if blank), one per line.</small>\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-12 col-lg-6">\n\t\t\t\t\t\t\t<label for="includeProperties">Properties</label>\n\t\t\t\t\t\t\t<a href="#" class="ml-1 badge badge-light" data-action="options" data-target="modifierProperties" data-value="or">OR</a>\n\t\t\t\t\t\t\t<a href="#" class="ml-1 badge badge-dark" data-action="options" data-target="modifierProperties" data-value="and">AND</a>\n\t\t\t\t\t\t\t<input id="modifierProperties" name="properties_modifier" class="d-none" data-click="[data-action=\'options\']" type="text" value="and" />\n\t\t\t\t\t\t\t<button type="button" class="close" data-action="clear" data-clear="includeProperties" aria-label="Clear"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t\t\t\t<button type="button" class="close mr-1" data-action="lock" data-lock="includeProperties,modifierProperties" aria-label="Lock"><i class="material-icons">lock_open</i></button>\n    \t\t\t\t\t<textarea id="includeProperties" name="properties" class="form-control resizable optional small" rows="1">'+(null!=(o=a.if.call(r,null!=l?l.state:l,{name:"if",hash:{},fn:t.program(18,n,0),inverse:t.noop,data:n}))?o:"")+'</textarea>\n\t\t\t\t\t\t\t<small class="form-text text-muted">One per line, use key, key= | &gt;= | &lt;= | !=value format.</small>\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="form-group col-12 col-lg-6">\n\t\t\t\t\t\t\t<label for="excludeRegexes">Exclude (Regexes)</label>\n\t\t\t\t\t\t\t<button type="button" class="close" data-action="clear" data-clear="excludeRegexes" aria-label="Clear"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t\t\t\t<button type="button" class="close mr-1" data-action="lock" data-lock="excludeRegexes" aria-label="Lock"><i class="material-icons">lock_open</i></button>\n    \t\t\t\t\t<textarea id="excludeRegexes" name="exclude" class="form-control resizable optional small" rows="1">'+(null!=(o=a.if.call(r,null!=l?l.state:l,{name:"if",hash:{},fn:t.program(20,n,0),inverse:t.noop,data:n}))?o:"")+'</textarea>\n\t\t\t\t\t\t\t<small class="form-text text-muted">Regexes to exclude search results (<strong>OR</strong>), one per line.</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-group col-12 col-lg-6">\n\t\t\t\t\t\t\t<label for="includeRegexes">Include (Regexes)</label>\n\t\t\t\t\t\t\t<button type="button" class="close" data-action="clear" data-clear="includeRegexes" aria-label="Clear"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t\t\t\t<button type="button" class="close mr-1" data-action="lock" data-lock="includeRegexes" aria-label="Lock"><i class="material-icons">lock_open</i></button>\n    \t\t\t\t\t<textarea id="includeRegexes" name="include" class="form-control resizable optional small"  rows="1">'+(null!=(o=a.if.call(r,null!=l?l.state:l,{name:"if",hash:{},fn:t.program(22,n,0),inverse:t.noop,data:n}))?o:"")+'</textarea>\n\t\t\t\t\t\t\t<small class="form-text text-muted">Regexes to include search results (<strong>OR</strong>), one per line.</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="col-12 col-lg-6 d-flex align-items-start">\n\t\t\t\t\t\t\t<div class="custom-control custom-checkbox">\n\t\t\t\t\t\t\t\t<input id="recurseFolders" name="recurse" type="checkbox" class="custom-control-input"'+(null!=(o=a.if.call(r,null!=l?l.state:l,{name:"if",hash:{},fn:t.program(24,n,0),inverse:t.program(8,n,0),data:n}))?o:"")+'>\n\t\t\t\t\t\t\t\t<label class="custom-control-label" for="recurseFolders">Search all Sub-Folders Too?</label>\n\t\t\t\t\t\t\t\t<small class="form-text text-muted">If de-ticked, only the current folder will be searched (no sub-folders).</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-12 col-lg-6 d-flex align-items-start">\n\t\t\t\t\t\t\t<div class="custom-control custom-checkbox">\n\t\t\t\t\t\t\t\t<input id="entireDrive" name="entire" type="checkbox" class="custom-control-input"'+(null!=(o=a.if.call(r,null!=l?l.state:l,{name:"if",hash:{},fn:t.program(26,n,0),inverse:t.program(28,n,0),data:n}))?o:"")+'>\n\t\t\t\t\t\t\t\t<label class="custom-control-label" for="entireDrive">Search Entire Drive?</label>\n\t\t\t\t\t\t\t\t<small class="form-text text-muted">Basic searches (mime, name and property<strong>=</strong>value) of entire drive will be <strong>much</strong> faster.</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n      </div>\n      <div class="modal-footer">\n\t\t\t\t'+(null!=(o=a.if.call(r,null!=l?l.actions:l,{name:"if",hash:{},fn:t.program(30,n,0),inverse:t.noop,data:n}))?o:"")+'\n        <button type="button" class="btn btn-primary" data-dismiss="modal">Search</button>\n\t\t\t\t<button type="button" class="btn btn-secondary btn-flat" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},usePartial:!0,useData:!0})}();