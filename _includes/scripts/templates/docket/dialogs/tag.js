!function(){var t=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).tag=t({1:function(t,a,n,e,r){var l,o=t.lookupProperty||function(t,a){if(Object.prototype.hasOwnProperty.call(t,a))return t[a]};return"<form>\n"+(null!=(l=t.invokePartial(o(e,"tags"),a,{name:"tags",data:r,indent:"  ",helpers:n,partials:e,decorators:t.decorators}))?l:"")+'</form>\n<ul class="list-group list-group-flush">\n  <li class="list-group-item d-flex justify-content-between align-items-center">\n    <input class="form-control mr-3" type="text" data-type="tag" tabindex="1"/>\n    <button data-action="add" type="button" class="btn btn-primary" tabindex="2">Add</button>\n  </li>\n  '+(null!=(l=o(n,"if").call(null!=a?a:t.nullContext||{},null!=a?o(a,"all"):a,{name:"if",hash:{},fn:t.program(2,r,0),inverse:t.noop,data:r,loc:{start:{line:10,column:2},end:{line:10,column:43}}}))?l:"")+"\n</ul>\n"},2:function(t,a,n,e,r){var l,o=t.lookupProperty||function(t,a){if(Object.prototype.hasOwnProperty.call(t,a))return t[a]};return null!=(l=t.invokePartial(o(e,"suggestions"),null!=a?o(a,"all"):a,{name:"suggestions",data:r,helpers:n,partials:e,decorators:t.decorators}))?l:""},compiler:[8,">= 4.3.0"],main:function(t,a,n,e,r){var l,o=t.lookupProperty||function(t,a){if(Object.prototype.hasOwnProperty.call(t,a))return t[a]};return null!=(l=t.invokePartial(o(e,"dialog"),a,{name:"dialog",hash:{tabindex:2,action:"Save",class:"modal-lg"},fn:t.program(1,r,0),inverse:t.noop,data:r,helpers:n,partials:e,decorators:t.decorators}))?l:""},usePartial:!0,useData:!0})}();