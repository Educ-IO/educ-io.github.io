!function(){var t=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).search=t({1:function(t,e,a,l,n){var o;return null!=(o=t.lambda(null!=e?e.instructions:e,e))?o:""},compiler:[7,">= 4.0.0"],main:function(t,e,a,l,n){var o,s=t.lambda,r=t.escapeExpression;return'<div id="'+r(s(null!=e?e.id:e,e))+'" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_options_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_options_title">'+r(s(null!=e?e.title:e,e))+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        '+(null!=(o=a.if.call(null!=e?e:t.nullContext||{},null!=e?e.instructions:e,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?o:"")+'\n\t\t\t\t<div class="d-flex flex-column flex-md-row lead mb-3 mt-4">\n\t\t\t\t\t<button data-action="populate" data-populate="word" type="button" class="btn btn-secondary mb-3 mb-md-0 mr-md-3">Word Docs</button>\n\t\t\t\t\t<button data-action="populate" data-populate="excel" type="button" class="btn btn-secondary mb-3 mb-md-0 mr-md-3">Excel Sheets</button>\n\t\t\t\t\t<button data-action="populate" data-populate="powerpoint" type="button" class="btn btn-secondary mb-3 mb-md-0 mr-md-3">Powerpoint Slides</button>\n\t\t\t\t</div>\n\t\t\t\t<form>\n\t\t\t\t\t<div class="form-group">\n    \t\t\t\t<label for="mimeTypes">Mime Types</label>\n    \t\t\t\t<textarea id="mimeTypes" name="mime" class="form-control" rows="2"></textarea>\n\t\t\t\t\t\t<small class="form-text text-muted">Mime Types to search for (OR), one per line.</small>\n  \t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n    \t\t\t\t<label for="includeProperties">Properties</label>\n    \t\t\t\t<textarea id="includeProperties" name="properties" class="form-control" rows="2"></textarea>\n\t\t\t\t\t\t<small class="form-text text-muted">Properties to search for, one per line (property name for existance, = for value too).</small>\n  \t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n    \t\t\t\t<label for="excludeRegexes">Exclude (Regexes)</label>\n    \t\t\t\t<textarea id="excludeRegexes" name="exclude" class="form-control" rows="2"></textarea>\n\t\t\t\t\t\t<small class="form-text text-muted">Regexes to exclude search results (OR), one per line.</small>\n  \t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n    \t\t\t\t<label for="includeRegexes">Include (Regexes)</label>\n    \t\t\t\t<textarea id="includeRegexes" name="include" class="form-control"  rows="2"></textarea>\n\t\t\t\t\t\t<small class="form-text text-muted">Regexes to include search results (OR), one per line.</small>\n  \t\t\t\t</div>\n\t\t\t\t\t<div class="form-check">\n    \t\t\t\t<label class="form-check-label">\n      \t\t\t\t<input name="recurse" type="checkbox" class="form-check-input" checked>\n      \t\t\t\tSearch all Sub-Folders Too?\n    \t\t\t\t</label>\n  \t\t\t\t</div>\n\t\t\t\t</form>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-primary" data-dismiss="modal">Search</button>\n\t\t\t\t<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},useData:!0})}();