!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).database_file=a({compiler:[7,">= 4.0.0"],main:function(a,e,n,l,s){var t=a.lambda,d=a.escapeExpression;return'<div class="row m-1 pt-2">\n  <div class="col-12">\n    '+d(t(null!=e?e.name:e,e))+'\n    <a href="#load.'+d(t(null!=e?e.id:e,e))+'" target="_blank">Load</a>\n  </div>\n</div>\n'},useData:!0})}();