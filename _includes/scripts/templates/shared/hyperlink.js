!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).hyperlink=n({1:function(n,l,e,a,r){var t,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' class="'+(null!=(t=o(e,"each").call(null!=l?l:n.nullContext||{},null!=l?o(l,"classes"):l,{name:"each",hash:{},fn:n.program(2,r,0),inverse:n.noop,data:r,loc:{start:{line:2,column:26},end:{line:2,column:90}}}))?t:"")+'"'},2:function(n,l,e,a,r){var t,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(t=o(e,"unless").call(null!=l?l:n.nullContext||{},r&&o(r,"first"),{name:"unless",hash:{},fn:n.program(3,r,0),inverse:n.noop,data:r,loc:{start:{line:2,column:43},end:{line:2,column:73}}}))?t:"")+n.escapeExpression(n.lambda(l,l))},3:function(n,l,e,a,r){return" "},5:function(n,l,e,a,r){var t=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' style="'+n.escapeExpression(n.lambda(null!=l?t(l,"style"):l,l))+'"'},7:function(n,l,e,a,r){return' target="_blank"'},compiler:[8,">= 4.3.0"],main:function(n,l,e,a,r){var t,o=n.lambda,u=n.escapeExpression,s=null!=l?l:n.nullContext||{},c=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<a href="'+u(o(null!=l?c(l,"url"):l,l))+'"\n   '+(null!=(t=c(e,"if").call(s,null!=l?c(l,"classes"):l,{name:"if",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:2,column:3},end:{line:2,column:98}}}))?t:"")+"\n   "+(null!=(t=c(e,"if").call(s,null!=l?c(l,"style"):l,{name:"if",hash:{},fn:n.program(5,r,0),inverse:n.noop,data:r,loc:{start:{line:3,column:3},end:{line:3,column:41}}}))?t:"")+"\n   "+(null!=(t=c(e,"if").call(s,null!=l?c(l,"blank"):l,{name:"if",hash:{},fn:n.program(7,r,0),inverse:n.noop,data:r,loc:{start:{line:4,column:3},end:{line:4,column:39}}}))?t:"")+">"+u(o(null!=l?c(l,"text"):l,l))+"</a>\n"},useData:!0})}();