!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["parent-badge"]=a({compiler:[8,">= 4.3.0"],main:function(a,e,n,l,t){var d=a.lambda,r=a.escapeExpression,o=null!=e?e:a.nullContext||{},s=a.lookupProperty||function(a,e){if(Object.prototype.hasOwnProperty.call(a,e))return a[e]};return'<span class="badge badge-dark badge-pill mr-1" data-id="'+r(d(null!=e?s(e,"id"):e,e))+'" data-parent="'+r(d(null!=e?s(e,"name"):e,e))+'">\n  <span class="d-inline-flex p-1 my-0" data-output-name="*" data-data="'+r(d(null!=e?s(e,"name"):e,e))+'">'+r(d(null!=e?s(e,"display"):e,e))+'</span>\n  <a role="button" class="close d-inline-flex pl-1" aria-label="Remove" href="#remove.parent.'+r(s(n,"encode").call(o,null!=e?s(e,"id"):e,{name:"encode",hash:{},data:t,loc:{start:{line:3,column:93},end:{line:3,column:106}}}))+"."+r(s(n,"encode").call(o,null!=e?s(e,"name"):e,{name:"encode",hash:{},data:t,loc:{start:{line:3,column:107},end:{line:3,column:122}}}))+'" title="Remove Parent"><span aria-hidden="true">&times;</span></a>\n</span>\n'},useData:!0})}();