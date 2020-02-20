!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).details=n({1:function(n,l,a,e,t){return n.escapeExpression(n.lambda(null!=l?l.id:l,l))+"_"},3:function(n,l,a,e,t){var r;return null!=(r=a.exists.call(null!=l?l:n.nullContext||{},null!=(r=null!=l?l.state:l)?r.name:r,{name:"exists",hash:{},fn:n.program(4,t,0),inverse:n.noop,data:t}))?r:""},4:function(n,l,a,e,t){var r;return' value="'+n.escapeExpression(n.lambda(null!=(r=null!=l?l.state:l)?r.name:r,l))+'"'},6:function(n,l,a,e,t){var r;return null!=(r=a.with.call(null!=l?l:n.nullContext||{},null!=l?l.state:l,{name:"with",hash:{},fn:n.program(7,t,0),inverse:n.noop,data:t}))?r:""},7:function(n,l,a,e,t){var r;return null!=(r=a.exists.call(null!=l?l:n.nullContext||{},null!=l?l.children:l,{name:"exists",hash:{},fn:n.program(8,t,0),inverse:n.noop,data:t}))?r:""},8:function(n,l,a,e,t){var r;return null!=(r=a.each.call(null!=l?l:n.nullContext||{},null!=l?l.children:l,{name:"each",hash:{},fn:n.program(9,t,0),inverse:n.noop,data:t}))?r:""},9:function(n,l,a,e,t){var r;return null!=(r=n.invokePartial(e.editable_part,l,{name:"editable_part",hash:{previous:null!=l?l.sequence:l},data:t,helpers:a,partials:e,decorators:n.decorators}))?r:""},compiler:[7,">= 4.0.0"],main:function(n,l,a,e,t){var r,o=null!=l?l:n.nullContext||{};return'<div class="form-row mb-1 mb-lg-2">\n\n  <label for="'+(null!=(r=a.if.call(o,null!=l?l.id:l,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?r:"")+'name" class="col-sm-2 col-form-label">Name</label>\n  <div class="col-sm-10">\n    <div class="input-group">\n        <div class="input-group-prepend d-none d-lg-flex" data-toggle="tooltip" data-html="true" title="">\n          <span class="input-group-text align-self-stretch"><i class="material-icons h-100 d-inline-flex md-18">notes</i></span>\n        </div>\n        <input id="'+(null!=(r=a.if.call(o,null!=l?l.id:l,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?r:"")+'name" data-output-field="Name" type="text" placeholder="Name" class="form-control required" tabindex="1"'+(null!=(r=a.if.call(o,null!=l?l.state:l,{name:"if",hash:{},fn:n.program(3,t,0),inverse:n.noop,data:t}))?r:"")+' required/>\n      </div> \n  </div>\n\n</div>\n\n<div class="form-row mb-2">\n  \n  <label for="'+(null!=(r=a.if.call(o,null!=l?l.id:l,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?r:"")+'parts" class="col-sm-2 col-form-label">Parts</label>\n  \n  <div class="col-sm-10 d-flex flex-column" data-output-field="Parts">\n    '+(null!=(r=a.if.call(o,null!=l?l.state:l,{name:"if",hash:{},fn:n.program(6,t,0),inverse:n.noop,data:t}))?r:"")+'\n  </div>\n  \n  <div class="col-12 d-flex justify-content-end">\n'+(null!=(r=n.invokePartial(e.control_button,l,{name:"control_button",hash:{b_command:"add.part",b_icon_type:"light",b_icon:"add_circle_outline",b_tooltip:"Add new Bundle Part",b_class:"btn-success",b_icon_large:"true",b_large:"true"},data:t,indent:"    ",helpers:a,partials:e,decorators:n.decorators}))?r:"")+"  </div>\n  \n</div>\n"},usePartial:!0,useData:!0})}();