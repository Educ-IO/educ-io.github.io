!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).suggestions=n({1:function(n,t,a,e,l){var r,o=n.lambda,s=n.escapeExpression,u=n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]};return'<li class="list-group-item d-flex justify-content-between align-items-center" data-suggestion="true">\n  <span data-type="tag">'+s(o(null!=t?u(t,"0"):t,t))+'</span>\n  <div class="float-right">\n    <span class="badge badge-'+(null!=(r=u(a,"is").call(null!=t?t:n.nullContext||{},null!=t?u(t,"1"):t,"lt",10,{name:"is",hash:{},fn:n.program(2,l,0),inverse:n.program(4,l,0),data:l,loc:{start:{line:4,column:29},end:{line:4,column:81}}}))?r:"")+' badge-pill mr-3">'+s(o(null!=t?u(t,"1"):t,t))+'</span>\n    <button data-action="add" type="button" class="btn btn-outline-primary">Add</button>\n  </div>\n</li>'},2:function(n,t,a,e,l){return"secondary"},4:function(n,t,a,e,l){return"dark"},compiler:[8,">= 4.3.0"],main:function(n,t,a,e,l){var r;return(null!=(r=(n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]})(a,"each").call(null!=t?t:n.nullContext||{},t,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:1,column:0},end:{line:7,column:14}}}))?r:"")+"\n"},useData:!0})}();