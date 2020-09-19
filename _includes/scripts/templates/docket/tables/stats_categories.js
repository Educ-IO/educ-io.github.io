!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).stats_categories=n({1:function(n,l,e,t,a){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(r=o(e,"each").call(null!=l?l:n.nullContext||{},null!=l?o(l,"categories"):l,{name:"each",hash:{},fn:n.program(2,a,0),inverse:n.noop,data:a,loc:{start:{line:2,column:25},end:{line:11,column:25}}}))?r:""},2:function(n,l,e,t,a){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(r=o(e,"if").call(null!=l?l:n.nullContext||{},null!=l?o(l,"value"):l,{name:"if",hash:{},fn:n.program(3,a,0),inverse:n.noop,data:a,loc:{start:{line:2,column:45},end:{line:11,column:16}}}))?r:""},3:function(n,l,e,t,a){var r,o=null!=l?l:n.nullContext||{},i=n.lambda,s=n.escapeExpression,u=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<div>\n    <span class="display-'+(null!=(r=u(e,"is").call(o,null!=l?u(l,"name"):l,"TOTAL",{name:"is",hash:{},fn:n.program(4,a,0),inverse:n.program(6,a,0),data:a,loc:{start:{line:3,column:25},end:{line:3,column:62}}}))?r:"")+" d-flex align-items-center"+(null!=(r=u(e,"is").call(o,null!=l?u(l,"name"):l,"TOTAL",{name:"is",hash:{},fn:n.program(8,a,0),inverse:n.noop,data:a,loc:{start:{line:3,column:88},end:{line:3,column:129}}}))?r:"")+(null!=(r=u(e,"is").call(o,null!=l?u(l,"name"):l,"COMPLETE",{name:"is",hash:{},fn:n.program(10,a,0),inverse:n.noop,data:a,loc:{start:{line:3,column:129},end:{line:3,column:178}}}))?r:"")+'">'+(null!=(r=u(e,"is").call(o,null!=l?u(l,"name"):l,"ZOMBIES",{name:"is",hash:{},fn:n.program(12,a,0),inverse:n.noop,data:a,loc:{start:{line:4,column:6},end:{line:4,column:106}}}))?r:"")+(null!=(r=u(e,"is").call(o,null!=l?u(l,"name"):l,"GHOSTS",{name:"is",hash:{},fn:n.program(14,a,0),inverse:n.noop,data:a,loc:{start:{line:5,column:6},end:{line:5,column:98}}}))?r:"")+(null!=(r=u(e,"is").call(o,null!=l?u(l,"name"):l,"READY",{name:"is",hash:{},fn:n.program(16,a,0),inverse:n.noop,data:a,loc:{start:{line:6,column:6},end:{line:6,column:106}}}))?r:"")+(null!=(r=u(e,"is").call(o,null!=l?u(l,"name"):l,"IN PROGRESS",{name:"is",hash:{},fn:n.program(18,a,0),inverse:n.noop,data:a,loc:{start:{line:7,column:6},end:{line:7,column:109}}}))?r:"")+'<span class="text-primary'+(null!=(r=u(e,"unless").call(o,u(e,"is").call(o,null!=l?u(l,"name"):l,"TOTAL",{name:"is",hash:{},data:a,loc:{start:{line:8,column:41},end:{line:8,column:58}}}),{name:"unless",hash:{},fn:n.program(20,a,0),inverse:n.noop,data:a,loc:{start:{line:8,column:31},end:{line:8,column:91}}}))?r:"")+' mr-auto small">'+s(i(null!=l?u(l,"name"):l,l))+'</span>\n      <span class="font-weight-bold text-'+(null!=(r=u(e,"is").call(o,null!=l?u(l,"name"):l,"TOTAL",{name:"is",hash:{},fn:n.program(22,a,0),inverse:n.program(24,a,0),data:a,loc:{start:{line:9,column:41},end:{line:9,column:177}}}))?r:"")+' mr-2">'+s(i(null!=l?u(l,"value"):l,l))+(null!=(r=u(e,"exists").call(o,null!=l?u(l,"percent"):l,{name:"exists",hash:{},fn:n.program(32,a,0),inverse:n.noop,data:a,loc:{start:{line:9,column:193},end:{line:9,column:361}}}))?r:"")+"</span>\n    </span>\n  </div>"},4:function(n,l,e,t,a){return"5"},6:function(n,l,e,t,a){return"6"},8:function(n,l,e,t,a){return" border-bottom"},10:function(n,l,e,t,a){return" border-bottom mb-1"},12:function(n,l,e,t,a){return'<i class="material-icons text-dark md-24 mr-2 o-50">trending_down</i>'},14:function(n,l,e,t,a){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<span class="icon text-dark md-1 mr-3 o-50">'+(null!=(r=n.invokePartial(o(t,"ghost"),l,{name:"ghost",data:a,helpers:e,partials:t,decorators:n.decorators}))?r:"")+"</span>"},16:function(n,l,e,t,a){return'<i class="material-icons text-dark md-24 mr-2 o-50">hourglass_empty</i>'},18:function(n,l,e,t,a){return'<i class="material-icons text-dark md-24 mr-2 o-50">work_outline</i>'},20:function(n,l,e,t,a){return" font-weight-lighter"},22:function(n,l,e,t,a){return"dark"},24:function(n,l,e,t,a){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(r=o(e,"is").call(null!=l?l:n.nullContext||{},null!=l?o(l,"name"):l,"ONGOING",{name:"is",hash:{},fn:n.program(25,a,0),inverse:n.program(27,a,0),data:a,loc:{start:{line:9,column:73},end:{line:9,column:170}}}))?r:""},25:function(n,l,e,t,a){return"danger"},27:function(n,l,e,t,a){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(r=o(e,"is").call(null!=l?l:n.nullContext||{},null!=l?o(l,"name"):l,"COMPLETE",{name:"is",hash:{},fn:n.program(28,a,0),inverse:n.program(30,a,0),data:a,loc:{start:{line:9,column:109},end:{line:9,column:163}}}))?r:""},28:function(n,l,e,t,a){return"success"},30:function(n,l,e,t,a){return"secondary"},32:function(n,l,e,t,a){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<span class="font-weight-light text-secondary border-left pl-2 ml-2 d-inline-block text-right" style="min-width: 3em;">'+n.escapeExpression(n.lambda(null!=l?r(l,"percent"):l,l))+"%</span>"},compiler:[8,">= 4.3.0"],main:function(n,l,e,t,a){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<div class="d-flex justify-content-center nvh-25 h-100 flex-column py-2 px-3 bg-light border">'+(null!=(r=o(e,"exists").call(null!=l?l:n.nullContext||{},null!=l?o(l,"categories"):l,{name:"exists",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:2,column:2},end:{line:11,column:37}}}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})}();