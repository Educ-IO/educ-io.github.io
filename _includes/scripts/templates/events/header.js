!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).header=a({1:function(a,n,l,e,s){return'id="'+a.escapeExpression(a.lambda(null!=n?n.id:n,n))+'" '},3:function(a,n,l,e,s){var r;return null!=(r=l.each.call(null!=n?n:a.nullContext||{},null!=n?n.classes:n,{name:"each",hash:{},fn:a.program(4,s,0),inverse:a.noop,data:s}))?r:""},4:function(a,n,l,e,s){return" "+a.escapeExpression(a.lambda(n,n))},compiler:[7,">= 4.0.0"],main:function(a,n,l,e,s){var r,t=null!=n?n:a.nullContext||{},u=a.lambda,o=a.escapeExpression;return"<h4 "+(null!=(r=l.if.call(t,null!=n?n.id:n,{name:"if",hash:{},fn:a.program(1,s,0),inverse:a.noop,data:s}))?r:"")+'class="display-4'+(null!=(r=l.if.call(t,null!=n?n.classes:n,{name:"if",hash:{},fn:a.program(3,s,0),inverse:a.noop,data:s}))?r:"")+'">\n  <span class="text-muted font-weight-bold small">'+o(u(null!=n?n.month:n,n))+'</span><span class="small"> '+o(u(null!=n?n.year:n,n))+"</span>\n</h4>\n"},useData:!0})}();