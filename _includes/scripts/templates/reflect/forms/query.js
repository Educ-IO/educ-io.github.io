!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).query=a({compiler:[7,">= 4.0.0"],main:function(a,e,l,t,n){var r,o=a.lambda,u=a.escapeExpression,d=null!=e?e:a.nullContext||{};return'<div id="query_'+u(o(null!=e?e.group:e,e))+"_"+u(o(null!=e?e.field:e,e))+'" class="queryable-block rounded p-1 mb-1" data-group="'+u(o(null!=e?e.group:e,e))+'" data-field="'+u(o(null!=e?e.field:e,e))+'">\n  '+(null!=(r=o(null!=e?e.content:e,e))?r:"")+'\n  <a class="p-2 o-50 queryable-trigger" href="#query.report.'+u(l.encode.call(d,null!=e?e.group:e,{name:"encode",hash:{},data:n}))+"."+u(l.encode.call(d,null!=e?e.field:e,{name:"encode",hash:{},data:n}))+'" data-toggle="hover" data-targets="#query_'+u(o(null!=e?e.group:e,e))+"_"+u(o(null!=e?e.field:e,e))+'" data-value="bg-light">\n    <i class="material-icons" data-toggle="tooltip" data-html="true" title="Send a <strong>Query to Owner / Respondant</strong> about this report part">contact_support</i>\n  </a>\n</div>\n'},useData:!0})}();