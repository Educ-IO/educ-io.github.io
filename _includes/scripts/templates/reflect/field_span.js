!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).field_span=n({1:function(n,a,l,t,e){return"\x3c!-- "+n.escapeExpression(n.lambda(null!=a?a.description:a,a))+" --\x3e"},3:function(n,a,l,t,e){return" form-group-lg"},5:function(n,a,l,t,e){return' data-output-order="'+n.escapeExpression(n.lambda(null!=a?a.order:a,a))+'"'},7:function(n,a,l,t,e){return n.escapeExpression(n.lambda(null!=a?a.title:a,a))},9:function(n,a,l,t,e){return n.escapeExpression(n.lambda(null!=a?a.field:a,a))},11:function(n,a,l,t,e,r,o){var i,u=n.lambda,s=n.escapeExpression,p=null!=a?a:n.nullContext||{};return'<button type="button" class="btn btn-primary alter-numerical d-flex" data-target="'+s(u(null!=a?a.id:a,a))+'" data-modifier="'+s(u(null!=a?a.id:a,a))+'_PERIOD" data-value="-'+(null!=(i=l.if.call(p,null!=a?a.increment:a,{name:"if",hash:{},fn:n.program(12,e,0,r,o),inverse:n.program(14,e,0,r,o),data:e}))?i:"")+'"><i class="material-icons '+(null!=(i=l.if.call(p,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(16,e,0,r,o),inverse:n.program(18,e,0,r,o),data:e}))?i:"")+'">remove</i></button>\n\t\t\t<button type="button" class="btn btn-info alter-numerical d-flex" data-target="'+s(u(null!=a?a.id:a,a))+'" data-modifier="'+s(u(null!=a?a.id:a,a))+'_PERIOD" data-value="'+(null!=(i=l.if.call(p,null!=a?a.increment:a,{name:"if",hash:{},fn:n.program(12,e,0,r,o),inverse:n.program(14,e,0,r,o),data:e}))?i:"")+'"><i class="material-icons '+(null!=(i=l.if.call(p,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(16,e,0,r,o),inverse:n.program(18,e,0,r,o),data:e}))?i:"")+'">add</i></button>\n\t\t\t<button id="'+s(u(null!=a?a.id:a,a))+'_PERIOD" type="button" class="btn btn-dark complex-list-type" data-default="'+s(u(null!=a?a.type:a,a))+'" data-target="'+s(u(null!=a?a.id:a,a))+'" data-span="" data-output-type="String" data-output-name="Type">'+s(u(null!=a?a.type:a,a))+'</button>\n\t\t\t<button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n\t\t\t\t<span class="sr-only">Toggle Dropdown</span>\n\t\t\t</button>\n\t\t\t<div class="dropdown-menu">\n'+(null!=(i=l.each.call(p,null!=a?a.options:a,{name:"each",hash:{},fn:n.program(20,e,0,r,o),inverse:n.noop,data:e}))?i:"")+"\t\t\t</div>"},12:function(n,a,l,t,e){return n.escapeExpression(n.lambda(null!=a?a.increment:a,a))},14:function(n,a,l,t,e){return"1"},16:function(n,a,l,t,e){return"md-24"},18:function(n,a,l,t,e){return"md-18"},20:function(n,a,l,t,e,r,o){var i,u=null!=a?a:n.nullContext||{};return'\t\t\t\t<a class="dropdown-item alter-span" href="#" data-target="'+n.escapeExpression(n.lambda(null!=o[1]?o[1].id:o[1],a))+'_PERIOD" data-value="'+(null!=(i=l.if.call(u,null!=a?a.value:a,{name:"if",hash:{},fn:n.program(21,e,0,r,o),inverse:n.program(23,e,0,r,o),data:e}))?i:"")+'"'+(null!=(i=l.exists.call(u,null!=a?a.span:a,{name:"exists",hash:{},fn:n.program(25,e,0,r,o),inverse:n.noop,data:e}))?i:"")+">"+(null!=(i=l.if.call(u,null!=a?a.name:a,{name:"if",hash:{},fn:n.program(28,e,0,r,o),inverse:n.program(23,e,0,r,o),data:e}))?i:"")+"</a>\t\t\t\t\n"},21:function(n,a,l,t,e){return n.escapeExpression(n.lambda(null!=a?a.value:a,a))},23:function(n,a,l,t,e){return n.escapeExpression(n.lambda(a,a))},25:function(n,a,l,t,e){var r;return null!=(r=l.if.call(null!=a?a:n.nullContext||{},null!=a?a.span:a,{name:"if",hash:{},fn:n.program(26,e,0),inverse:n.noop,data:e}))?r:""},26:function(n,a,l,t,e){return' data-span="'+n.escapeExpression(n.lambda(null!=a?a.span:a,a))+'"'},28:function(n,a,l,t,e){return n.escapeExpression(n.lambda(null!=a?a.name:a,a))},30:function(n,a,l,t,e){return" input-group-lg"},32:function(n,a,l,t,e){var r;return null!=(r=n.invokePartial(t.control_icon,a,{name:"control_icon",hash:{icon:null!=a?a.icon:a,large:null!=a?a.large:a,visible_at:"xl"},data:e,helpers:l,partials:t,decorators:n.decorators}))?r:""},34:function(n,a,l,t,e){return' aria-describedby="'+n.escapeExpression(n.lambda(null!=a?a.id:a,a))+'_HELP"'},36:function(n,a,l,t,e){var r;return null!=(r=n.invokePartial(t.control_icon,a,{name:"control_icon",hash:{icon:"forward",large:null!=a?a.large:a,append:"true",prepend:"true"},data:e,helpers:l,partials:t,decorators:n.decorators}))?r:""},38:function(n,a,l,t,e){var r,o=n.lambda,i=n.escapeExpression;return'<textarea data-for="'+i(o(null!=a?a.id:a,a))+'" data-output-name="Details" id="'+i(o(null!=a?a.id:a,a))+'_DETAILS" name="'+i(o(null!=a?a.id:a,a))+'_DETAILS" class="form-control'+(null!=(r=l.if.call(null!=a?a:n.nullContext||{},null!=a?a.large:a,{name:"if",hash:{},fn:n.program(39,e,0),inverse:n.noop,data:e}))?r:"")+' resizable optional mt-2" rows="1" aria-label="'+i(o(null!=a?a.details:a,a))+'" placeholder="'+i(o(null!=a?a.details:a,a))+'"></textarea>'},39:function(n,a,l,t,e){return" form-control-lg"},41:function(n,a,l,t,e){var r,o=n.lambda;return'<div id="'+n.escapeExpression(o(null!=a?a.id:a,a))+'_HELP" class="form-text text-muted text-right">'+(null!=(r=o(null!=a?a.help:a,a))?r:"")+"</div>"},compiler:[7,">= 4.0.0"],main:function(n,a,l,t,e,r,o){var i,u=null!=a?a:n.nullContext||{},s=n.lambda,p=n.escapeExpression;return(null!=(i=l.if.call(u,null!=a?a.description:a,{name:"if",hash:{},fn:n.program(1,e,0,r,o),inverse:n.noop,data:e}))?i:"")+'\n<div class="form-group'+(null!=(i=l.if.call(u,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(3,e,0,r,o),inverse:n.noop,data:e}))?i:"")+' row justify-content-between" data-output-field="'+p(s(null!=a?a.field:a,a))+'"'+(null!=(i=l.if.call(u,null!=a?a.order:a,{name:"if",hash:{},fn:n.program(5,e,0,r,o),inverse:n.noop,data:e}))?i:"")+'>\n\t<label class="col-md-3 col-form-label" for="'+p(s(null!=a?a.id:a,a))+'">'+(null!=(i=l.if.call(u,null!=a?a.title:a,{name:"if",hash:{},fn:n.program(7,e,0,r,o),inverse:n.program(9,e,0,r,o),data:e}))?i:"")+'</label>\n\t<div class="col-md-9 col-lg-8 col-xl-7">\n\t\t<div class="btn-group float-right mb-1" role="group" id="'+p(s(null!=a?a.id:a,a))+'_BUTTONS">\n\t\t\t'+(null!=(i=l.if.call(u,null!=a?a.options:a,{name:"if",hash:{},fn:n.program(11,e,0,r,o),inverse:n.noop,data:e}))?i:"")+'\n\t\t</div>\n\t\t<div id="'+p(s(null!=a?a.id:a,a))+'" class="input-group'+(null!=(i=l.if.call(u,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(30,e,0,r,o),inverse:n.noop,data:e}))?i:"")+' input-daterange dt-picker">\n\t\t\t'+(null!=(i=l.if.call(u,null!=a?a.icon:a,{name:"if",hash:{},fn:n.program(32,e,0,r,o),inverse:n.noop,data:e}))?i:"")+'\n\t\t\t<input id="'+p(s(null!=a?a.id:a,a))+'_START" type="text" data-output-type="Date" data-output-name="Start" class="form-control" name="start" aria-label="'+(null!=(i=l.if.call(u,null!=a?a.title:a,{name:"if",hash:{},fn:n.program(7,e,0,r,o),inverse:n.program(9,e,0,r,o),data:e}))?i:"")+'" '+(null!=(i=l.if.call(u,null!=a?a.help:a,{name:"if",hash:{},fn:n.program(34,e,0,r,o),inverse:n.noop,data:e}))?i:"")+"/>\n\t\t\t"+(null!=(i=l.if.call(u,null!=a?a.icon:a,{name:"if",hash:{},fn:n.program(36,e,0,r,o),inverse:n.noop,data:e}))?i:"")+'\n    \t<input id="'+p(s(null!=a?a.id:a,a))+'_END" type="text" data-output-type="Date" data-output-name="End" class="form-control" name="end" aria-label="'+(null!=(i=l.if.call(u,null!=a?a.title:a,{name:"if",hash:{},fn:n.program(7,e,0,r,o),inverse:n.program(9,e,0,r,o),data:e}))?i:"")+'" '+(null!=(i=l.if.call(u,null!=a?a.help:a,{name:"if",hash:{},fn:n.program(34,e,0,r,o),inverse:n.noop,data:e}))?i:"")+'/>\n\t\t\t<span class="input-group-append">\n'+(null!=(i=n.invokePartial(t.control_button,a,{name:"control_button",hash:{b_icon:"refresh",b_target:null!=a?a.id:a,b_title:"Clear / Reset",b_class:"btn-secondary eraser"},data:e,indent:"\t\t\t\t",helpers:l,partials:t,decorators:n.decorators}))?i:"")+"\t\t\t</span>\n\t\t</div>\n\t\t"+(null!=(i=l.if.call(u,null!=a?a.details:a,{name:"if",hash:{},fn:n.program(38,e,0,r,o),inverse:n.noop,data:e}))?i:"")+"\n\t\t"+(null!=(i=l.if.call(u,null!=a?a.help:a,{name:"if",hash:{},fn:n.program(41,e,0,r,o),inverse:n.noop,data:e}))?i:"")+"\n\t</div>\n</div>\n"},usePartial:!0,useData:!0,useDepths:!0})}();