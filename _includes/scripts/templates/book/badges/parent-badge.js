!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["parent-badge"]=a({compiler:[7,">= 4.0.0"],main:function(a,e,n,l,t){var d=a.lambda,s=a.escapeExpression,r=null!=e?e:a.nullContext||{};return'<span class="badge badge-dark badge-pill mr-1" data-id="'+s(d(null!=e?e.id:e,e))+'" data-parent="'+s(d(null!=e?e.name:e,e))+'">\n  <span class="d-inline-flex p-1 my-0" data-output-name="*" data-data="'+s(d(null!=e?e.name:e,e))+'">'+s(d(null!=e?e.display:e,e))+'</span>\n  <a role="button" class="close d-inline-flex pl-1" aria-label="Remove" href="#remove.parent.'+s(n.encode.call(r,null!=e?e.id:e,{name:"encode",hash:{},data:t}))+"."+s(n.encode.call(r,null!=e?e.name:e,{name:"encode",hash:{},data:t}))+'" title="Remove Parent"><span aria-hidden="true">&times;</span></a>\n</span>\n'},useData:!0})}();