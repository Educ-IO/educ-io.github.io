!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).edit=n({1:function(n,a,l,t,e){var s;return null!=(s=n.lambda(null!=a?a.instructions:a,a))?s:""},3:function(n,a,l,t,e){return n.escapeExpression(n.lambda(null!=a?a.id:a,a))+"_"},5:function(n,a,l,t,e){var s;return null!=(s=l.exists.call(null!=a?a:n.nullContext||{},null!=(s=null!=a?a.state:a)?s.name:s,{name:"exists",hash:{},fn:n.program(6,e,0),inverse:n.noop,data:e}))?s:""},6:function(n,a,l,t,e){var s;return' value="'+n.escapeExpression(n.lambda(null!=(s=null!=a?a.state:a)?s.name:s,a))+'"'},8:function(n,a,l,t,e){var s;return null!=(s=l.exists.call(null!=a?a:n.nullContext||{},null!=(s=null!=a?a.state:a)?s.type:s,{name:"exists",hash:{},fn:n.program(9,e,0),inverse:n.noop,data:e}))?s:""},9:function(n,a,l,t,e){var s;return' value="'+n.escapeExpression(n.lambda(null!=(s=null!=a?a.state:a)?s.type:s,a))+'"'},11:function(n,a,l,t,e){var s;return null!=(s=l.exists.call(null!=a?a:n.nullContext||{},null!=(s=null!=a?a.state:a)?s.description:s,{name:"exists",hash:{},fn:n.program(12,e,0),inverse:n.noop,data:e}))?s:""},12:function(n,a,l,t,e){var s;return n.escapeExpression(n.lambda(null!=(s=null!=a?a.state:a)?s.description:s,a))},14:function(n,a,l,t,e){var s;return null!=(s=l.exists.call(null!=a?a:n.nullContext||{},null!=(s=null!=a?a.state:a)?s.user_description:s,{name:"exists",hash:{},fn:n.program(15,e,0),inverse:n.noop,data:e}))?s:""},15:function(n,a,l,t,e){var s;return n.escapeExpression(n.lambda(null!=(s=null!=a?a.state:a)?s.user_description:s,a))},17:function(n,a,l,t,e,s,i){var o;return null!=(o=l.present.call(null!=a?a:n.nullContext||{},null!=(o=null!=a?a.state:a)?o.parents:o,{name:"present",hash:{},fn:n.program(18,e,0,s,i),inverse:n.noop,data:e}))?o:""},18:function(n,a,l,t,e,s,i){var o;return null!=(o=l.each.call(null!=a?a:n.nullContext||{},null!=(o=null!=a?a.state:a)?o.parents:o,{name:"each",hash:{},fn:n.program(19,e,0,s,i),inverse:n.noop,data:e}))?o:""},19:function(n,a,l,t,e,s,i){var o;return null!=(o=n.invokePartial(t.parent,a,{name:"parent",hash:{id:null!=(o=null!=i[1]?i[1].state:i[1])?o.id:o,name:null!=a?a.id:a,display:null!=a?a.name:a},data:e,helpers:l,partials:t,decorators:n.decorators}))?o:""},21:function(n,a,l,t,e){var s=n.lambda,i=n.escapeExpression;return'<option value="'+i(s(null!=a?a.id:a,a))+'">'+i(s(null!=a?a.name:a,a))+"</option>"},23:function(n,a,l,t,e,s,i){var o;return null!=(o=l.present.call(null!=a?a:n.nullContext||{},null!=(o=null!=a?a.state:a)?o.features:o,{name:"present",hash:{},fn:n.program(24,e,0,s,i),inverse:n.noop,data:e}))?o:""},24:function(n,a,l,t,e,s,i){var o;return null!=(o=l.each.call(null!=a?a:n.nullContext||{},null!=(o=null!=a?a.state:a)?o.features:o,{name:"each",hash:{},fn:n.program(25,e,0,s,i),inverse:n.noop,data:e}))?o:""},25:function(n,a,l,t,e,s,i){var o;return null!=(o=n.invokePartial(t.feature,a,{name:"feature",hash:{id:null!=(o=null!=i[1]?i[1].state:i[1])?o.id:o,name:a},data:e,helpers:l,partials:t,decorators:n.decorators}))?o:""},27:function(n,a,l,t,e){var s=n.lambda,i=n.escapeExpression;return'<option value="'+i(s(a,a))+'">'+i(s(a,a))+"</option>"},29:function(n,a,l,t,e){var s;return null!=(s=l.exists.call(null!=a?a:n.nullContext||{},null!=(s=null!=a?a.state:a)?s.id:s,{name:"exists",hash:{},fn:n.program(30,e,0),inverse:n.noop,data:e}))?s:""},30:function(n,a,l,t,e){var s;return'<input data-output-field="ID" type="hidden" type="text" value="'+n.escapeExpression(n.lambda(null!=(s=null!=a?a.state:a)?s.id:s,a))+'"/>'},32:function(n,a,l,t,e){var s;return null!=(s=l.each.call(null!=a?a:n.nullContext||{},null!=a?a.actions:a,{name:"each",hash:{},fn:n.program(33,e,0),inverse:n.noop,data:e}))?s:""},33:function(n,a,l,t,e){var s;return null!=(s=n.invokePartial(t.control_button,a,{name:"control_button",hash:{b_text:null!=a?a.text:a,b_title:null!=a?a.desc:a,b_action:l.concat.call(null!=a?a:n.nullContext||{},"actions_",e&&e.index,{name:"concat",hash:{},data:e}),b_id:null!=a?a.id:a,b_class:"btn-outline-danger"},data:e,helpers:l,partials:t,decorators:n.decorators}))?s:""},compiler:[7,">= 4.0.0"],main:function(n,a,l,t,e,s,i){var o,r=n.lambda,u=n.escapeExpression,d=null!=a?a:n.nullContext||{};return'<div id="'+u(r(null!=a?a.id:a,a))+'" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_options_title">\n  <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">\n    <div class="modal-content">\n      <div class="modal-header bg-light">\n        <div class="flex-column">\n          <h5 class="modal-title" id="modal_options_title">'+u(r(null!=a?a.title:a,a))+'</h5>\n        </div>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">'+(null!=(o=l.if.call(d,null!=a?a.instructions:a,{name:"if",hash:{},fn:n.program(1,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'<form class="needs-validation mt-3" novalidate>\n          \n\t\t\t\t\t<div class="row">\n            <div class="container col-xl-6 px-4 px-md-3">\n              <div class="form-group row">\n                <label for="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'name" class="col-sm-2 col-form-label">Name</label>\n                <div class="col-sm-10">\n                  <input id="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'name" data-output-field="Name" type="text" class="form-control required" tabindex="1"'+(null!=(o=l.if.call(d,null!=a?a.state:a,{name:"if",hash:{},fn:n.program(5,e,0,s,i),inverse:n.noop,data:e}))?o:"")+' required/>\n                </div>\n              </div>\n            </div>\n            <div class="container col-xl-6 px-4 px-md-3">\n              <div class="form-group row">\n                <label for="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'type" class="col-sm-2 col-form-label">Type</label>\n                <div class="col-sm-10">\n                  <input id="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'type" name="Type" type="text" class="form-control" tabindex="2"'+(null!=(o=l.if.call(d,null!=a?a.state:a,{name:"if",hash:{},fn:n.program(8,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'/>\n                </div>\n              </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n          \n          <div class="row">\n            <div class="form-group col-xl-6 px-4 px-md-3">\n\t\t\t\t\t\t\t<label for="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'description">Description</label>\n\t\t\t\t\t\t\t<button type="button" class="close" data-action="clear" data-clear="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'description" aria-label="Clear"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t\t\t\t<textarea id="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'description" data-output-field="Description" class="form-control resizable" tabindex="4" rows="1">'+(null!=(o=l.if.call(d,null!=a?a.state:a,{name:"if",hash:{},fn:n.program(11,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'</textarea>\n\t\t\t\t\t\t\t<small class="form-text text-muted"></small>\n\t\t\t\t\t\t</div>\n            <div class="form-group col-xl-6 px-4 px-md-3">\n\t\t\t\t\t\t\t<label for="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'user_description">User Visible Description</label>\n\t\t\t\t\t\t\t<button type="button" class="close" data-action="clear" data-clear="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'user_description" aria-label="Clear"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t\t\t\t<textarea id="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'user_description" data-output-field="User Description" class="form-control resizable" tabindex="5" rows="1">'+(null!=(o=l.if.call(d,null!=a?a.state:a,{name:"if",hash:{},fn:n.program(14,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'</textarea>\n\t\t\t\t\t\t\t<small class="form-text text-muted"></small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n          \n          <div class="row mb-2">\n            <div class="col-xl-12 d-flex align-items-center bg-light mb-2">\n              <span class="font-weight-bold">Parent/s</span>\n            </div>   \n            <div class="col-xl-8 d-flex align-items-center">\n              <div data-output-field="Parents" class="d-flex align-items-center">\n                '+(null!=(o=l.if.call(d,null!=a?a.state:a,{name:"if",hash:{},fn:n.program(17,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'\n              </div>\n            </div>\n            <div class="col-xl-4">\n              <div class="input-group">\n                <select class="form-control custom-select" data-action="parent" id="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'select_parent" tabindex="6">\n                  <option class="text-secondary" value="">New Parent ...</option>\n                  '+(null!=(o=l.each.call(d,null!=a?a.parents:a,{name:"each",hash:{},fn:n.program(21,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'\n                </select>\n                <div class="input-group-append">\n'+(null!=(o=n.invokePartial(t.control_button,a,{name:"control_button",hash:{b_icon_type:"light",b_icon:"add_circle_outline",b_tooltip:"Add Feature",b_command:"add.parent",b_class:"btn-success",b_icon_large:"true",b_large:"true"},data:e,indent:"                  ",helpers:l,partials:t,decorators:n.decorators}))?o:"")+'                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class="row">\n            <div class="col-xl-12 d-flex align-items-center bg-light mb-2">\n              <span class="font-weight-bold">Feature/s</span>\n            </div> \n            <div class="col-xl-8 d-flex align-items-center">\n              <div data-output-field="Features" class="d-flex align-items-center">\n                '+(null!=(o=l.if.call(d,null!=a?a.state:a,{name:"if",hash:{},fn:n.program(23,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'\n              </div>\n            </div>\n            <div class="col-xl-4">\n              <div class="input-group">\n                <select class="form-control custom-select" data-action="feature" id="'+(null!=(o=l.if.call(d,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(3,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'select_feature" tabindex="7">\n                  <option class="text-secondary" value="">New Feature ...</option>\n                  '+(null!=(o=l.each.call(d,null!=a?a.features:a,{name:"each",hash:{},fn:n.program(27,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'\n                </select>\n                <div class="input-group-append">\n'+(null!=(o=n.invokePartial(t.control_button,a,{name:"control_button",hash:{b_icon_type:"light",b_icon:"add_circle_outline",b_tooltip:"Add Feature",b_command:"add.feature",b_class:"btn-success",b_icon_large:"true",b_large:"true"},data:e,indent:"                  ",helpers:l,partials:t,decorators:n.decorators}))?o:"")+"                </div>\n              </div>\n            </div>\n          </div>\n          \n          "+(null!=(o=l.if.call(d,null!=a?a.state:a,{name:"if",hash:{},fn:n.program(29,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'\n\t\t\t\t</form>\n\t\t\t</div>\n      <div class="modal-footer">\n\t\t\t\t<button type="button" class="btn btn-outline-secondary btn-flat" data-dismiss="modal">Close</button>\n        '+(null!=(o=l.if.call(d,null!=a?a.actions:a,{name:"if",hash:{},fn:n.program(32,e,0,s,i),inverse:n.noop,data:e}))?o:"")+'\n        <button type="button" class="btn btn-primary" data-dismiss="modal">'+u(r(null!=a?a.confirm:a,a))+"</button>\n      </div>\n    </div>\n  </div>\n</div>\n"},usePartial:!0,useData:!0,useDepths:!0})}();