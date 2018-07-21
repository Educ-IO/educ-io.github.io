!function(){var t=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).new=t({1:function(t,a,l,n,e){return' id="'+t.escapeExpression(t.lambda(null!=a?a.id:a,a))+'"'},3:function(t,a,l,n,e){var i;return null!=(i=t.lambda(null!=a?a.instructions:a,a))?i:""},5:function(t,a,l,n,e){return t.escapeExpression(t.lambda(null!=a?a.id:a,a))+"_"},7:function(t,a,l,n,e){return' value="'+t.escapeExpression(t.lambda(null!=a?a.date:a,a))+'"'},9:function(t,a,l,n,e){var i;return null!=(i=l.each.call(null!=a?a:t.nullContext||{},null!=a?a.actions:a,{name:"each",hash:{},fn:t.program(10,e,0),inverse:t.noop,data:e}))?i:""},10:function(t,a,l,n,e){var i;return null!=(i=t.invokePartial(n.control_button,a,{name:"control_button",hash:{b_text:null!=a?a.text:a,b_title:null!=a?a.desc:a,b_action:l.concat.call(null!=a?a:t.nullContext||{},"actions_",e&&e.index,{name:"concat",hash:{},data:e}),b_id:null!=a?a.id:a,b_class:"btn-outline-info"},data:e,helpers:l,partials:n,decorators:t.decorators}))?i:""},compiler:[7,">= 4.0.0"],main:function(t,a,l,n,e){var i,o=null!=a?a:t.nullContext||{};return"<div"+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(1,e,0),inverse:t.noop,data:e}))?i:"")+' class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_options_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_options_title">'+(null!=(i=t.lambda(null!=a?a.title:a,a))?i:"")+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        '+(null!=(i=l.if.call(o,null!=a?a.instructions:a,{name:"if",hash:{},fn:t.program(3,e,0),inverse:t.noop,data:e}))?i:"")+'\n\t\t\t\t<form class="needs-validation mt-3" novalidate>\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="form-group col-lg-8 px-4 px-md-3">\n\t\t\t\t\t\t\t<label for="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'details">Details</label>\n\t\t\t\t\t\t  <button type="button" class="close" data-action="clear" data-clear="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'details" aria-label="Clear"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t\t\t\t<textarea id="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'details" data-output-field="Details" class="form-control resizable" tabindex="1" rows="1" data-action="extract" required></textarea>\n\t\t\t\t\t\t\t<div class="invalid-feedback">Details, name or a description is required for this item</div>\n\t\t\t\t\t\t</div>\n            <div class="form-group col-lg-4 px-4 px-md-3">\n              <label for="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'date">Date</label>\n              <input id="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'date" data-output-field="From" type="text" data-output-type="date" class="dt-picker form-control" tabindex="5"'+(null!=(i=l.if.call(o,null!=a?a.date:a,{name:"if",hash:{},fn:t.program(7,e,0),inverse:t.noop,data:e}))?i:"")+'/>\n              <small class="form-text text-muted"></small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="form-group col-lg-4 px-4 px-md-3">\n\t\t\t\t\t\t\t<label for="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'tags">Tags</label>\n\t\t\t\t\t\t\t<button type="button" class="close" data-action="clear" data-clear="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'tags" aria-label="Clear"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t\t\t\t<textarea id="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'tags" data-output-field="Tags" class="form-control resizable" tabindex="2" rows="1"></textarea>\n\t\t\t\t\t\t\t<small class="form-text text-muted">Tag/s related to this item. Lists can be delineated by <strong>any</strong> punctuation.</small>\n\t\t\t\t\t\t</div>\n            <div class="form-group col-lg-4 px-4 px-md-3">\n              <label for="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'time">Time</label>\n              <input type="text" id="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'time" data-source="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'details" data-extract="time" class="form-control" tabindex="-1" readonly/>\n              <small class="form-text text-muted">Automatically extracted from details</small>\n\t\t\t\t\t\t</div>\n            <div class="form-group col-lg-4 px-4 px-md-3">\n              <label for="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'due">Due</label>\n              <input type="text" id="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'due" data-source="'+(null!=(i=l.if.call(o,null!=a?a.id:a,{name:"if",hash:{},fn:t.program(5,e,0),inverse:t.noop,data:e}))?i:"")+'details" data-extract="date" class="form-control" tabindex="-1" readonly/>\n              <small class="form-text text-muted">Automatically extracted from details</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n      </div>\n      <div class="modal-footer">\n        '+(null!=(i=l.if.call(o,null!=a?a.actions:a,{name:"if",hash:{},fn:t.program(9,e,0),inverse:t.noop,data:e}))?i:"")+'\n\t\t\t\t<button type="button" class="btn btn-secondary btn-flat" data-dismiss="modal" tabindex="4">Close</button>\n        <button type="button" class="btn btn-primary" data-dismiss="modal" tabindex="3">Create</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},usePartial:!0,useData:!0})}();