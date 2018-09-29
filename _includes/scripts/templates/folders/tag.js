!function(){var t=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).tag=t({1:function(t,a,n,l,e){var o;return null!=(o=t.lambda(null!=a?a.instructions:a,a))?o:""},3:function(t,a,n,l,e){var o;return null!=(o=t.invokePartial(l.populate_buttons,null!=a?a.shortcuts:a,{name:"populate_buttons",data:e,helpers:n,partials:l,decorators:t.decorators}))?o:""},5:function(t,a,n,l,e){var o;return null!=(o=n.if.call(null!=a?a:t.nullContext||{},null!=(o=null!=a?a.state:a)?o.name:o,{name:"if",hash:{},fn:t.program(6,e,0),inverse:t.noop,data:e}))?o:""},6:function(t,a,n,l,e){var o;return' value="'+t.escapeExpression(t.lambda(null!=(o=null!=a?a.state:a)?o.name:o,a))+'"'},8:function(t,a,n,l,e){var o;return null!=(o=n.if.call(null!=a?a:t.nullContext||{},null!=(o=null!=a?a.state:a)?o.private:o,{name:"if",hash:{},fn:t.program(9,e,0),inverse:t.noop,data:e}))?o:""},9:function(t,a,n,l,e){return" checked"},11:function(t,a,n,l,e){var o;return t.escapeExpression(t.lambda(null!=(o=null!=a?a.state:a)?o.value:o,a))},13:function(t,a,n,l,e){var o;return null!=(o=n.if.call(null!=a?a:t.nullContext||{},null!=(o=null!=a?a.state:a)?o.remove:o,{name:"if",hash:{},fn:t.program(9,e,0),inverse:t.noop,data:e}))?o:""},15:function(t,a,n,l,e){var o;return null!=(o=n.each.call(null!=a?a:t.nullContext||{},null!=a?a.actions:a,{name:"each",hash:{},fn:t.program(16,e,0),inverse:t.noop,data:e}))?o:""},16:function(t,a,n,l,e){var o;return null!=(o=t.invokePartial(l.control_button,a,{name:"control_button",hash:{b_text:null!=a?a.text:a,b_title:null!=a?a.desc:a,b_action:n.concat.call(null!=a?a:t.nullContext||{},"actions_",e&&e.index,{name:"concat",hash:{},data:e}),b_id:null!=a?a.id:a,b_class:"btn-outline-info"},data:e,helpers:n,partials:l,decorators:t.decorators}))?o:""},compiler:[7,">= 4.0.0"],main:function(t,a,n,l,e){var o,s=t.lambda,r=null!=a?a:t.nullContext||{};return'<div id="'+t.escapeExpression(s(null!=a?a.id:a,a))+'" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_options_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_options_title">'+(null!=(o=s(null!=a?a.title:a,a))?o:"")+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        '+(null!=(o=n.if.call(r,null!=a?a.instructions:a,{name:"if",hash:{},fn:t.program(1,e,0),inverse:t.noop,data:e}))?o:"")+"\n\t\t\t\t"+(null!=(o=n.if.call(r,null!=a?a.shortcuts:a,{name:"if",hash:{},fn:t.program(3,e,0),inverse:t.noop,data:e}))?o:"")+'\n\t\t\t\t<form class="needs-validation mt-3" novalidate>\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="form-group col-lg-8">\n\t\t\t\t\t\t\t<label for="tagName">Name</label>\n\t\t\t\t\t\t  <input type="text" id="tagName" name="name" class="form-control"'+(null!=(o=n.if.call(r,null!=a?a.state:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?o:"")+' pattern="^[a-zA-Z0-9.!@$%^&*()\\-_/]*$" required/>\n\t\t\t\t\t\t  <small class="form-text text-muted">The name of the tag to set.</small>\n\t\t\t\t\t\t\t<div class="invalid-feedback">Tag Names may only contain only the letters a-z and A-Z, the numbers 0-9, and the characters .!@$%^&amp;*()-_/</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-lg-4 d-flex align-items-center">\n\t\t\t\t\t\t\t<div class="custom-control custom-checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="custom-control-input" id="tagPrivate" name="private"'+(null!=(o=n.if.call(r,null!=a?a.state:a,{name:"if",hash:{},fn:t.program(8,e,0),inverse:t.noop,data:e}))?o:"")+'>\n\t\t\t\t\t\t\t\t<label class="custom-control-label" for="tagPrivate">Private Tag?</label>\n\t\t\t\t\t\t\t\t<small class="form-text text-muted">Can only be read with this app.</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="form-group col-lg-8">\n\t\t\t\t\t\t\t<label for="tagName">Value</label>\n\t\t\t\t\t\t\t<button type="button" class="close" data-action="clear" data-clear="tagValue" aria-label="Clear"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t\t\t\t<textarea id="tagValue" name="value" class="form-control resizable" rows="1" required>'+(null!=(o=n.if.call(r,null!=a?a.state:a,{name:"if",hash:{},fn:t.program(11,e,0),inverse:t.noop,data:e}))?o:"")+'</textarea>\n\t\t\t\t\t\t\t<small class="form-text text-muted">The value of the tag to set.</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-lg-4 d-flex align-items-center">\n\t\t\t\t\t\t\t<div class="custom-control custom-checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="custom-control-input" id="tagRemove" name="remove"'+(null!=(o=n.if.call(r,null!=a?a.state:a,{name:"if",hash:{},fn:t.program(13,e,0),inverse:t.noop,data:e}))?o:"")+'>\n\t\t\t\t\t\t\t\t<label class="custom-control-label" for="tagRemove">Remove Tag?</label>\n\t\t\t\t\t\t\t\t<small class="form-text text-muted">Remove Named Tag from items.</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary btn-outline-secondary btn-flat" data-dismiss="modal">Close</button>\n        '+(null!=(o=n.if.call(r,null!=a?a.actions:a,{name:"if",hash:{},fn:t.program(15,e,0),inverse:t.noop,data:e}))?o:"")+'\n\t\t\t\t<button type="button" class="btn btn-primary" data-dismiss="modal">Tag</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},usePartial:!0,useData:!0})}();