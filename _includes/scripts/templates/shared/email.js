!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).email=n({1:function(n,a,l,e,t){var u,r=null!=a?a:n.nullContext||{};return"?"+(null!=(u=l.if.call(r,null!=a?a.subject:a,{name:"if",hash:{},fn:n.program(2,t,0),inverse:n.noop,data:t}))?u:"")+(null!=(u=l.if.call(r,null!=a?a.body:a,{name:"if",hash:{},fn:n.program(4,t,0),inverse:n.noop,data:t}))?u:"")},2:function(n,a,l,e,t){return"subject="+n.escapeExpression(l.encode.call(null!=a?a:n.nullContext||{},null!=a?a.subject:a,{name:"encode",hash:{},data:t}))},4:function(n,a,l,e,t){var u,r=null!=a?a:n.nullContext||{};return(null!=(u=l.if.call(r,null!=a?a.subject:a,{name:"if",hash:{},fn:n.program(5,t,0),inverse:n.noop,data:t}))?u:"")+"body="+n.escapeExpression(l.encode.call(r,null!=a?a.body:a,{name:"encode",hash:{},data:t}))},5:function(n,a,l,e,t){return"&"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){var u,r=n.lambda,o=n.escapeExpression,s=null!=a?a:n.nullContext||{};return'<a href="mailto:'+o(r(null!=a?a.address:a,a))+(null!=(u=l.if.call(s,l.any.call(s,null!=a?a.subject:a,null!=a?a.body:a,{name:"any",hash:{},data:t}),{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?u:"")+'" target="_blank">'+o(r(null!=a?a.text:a,a))+"</a>\n"},useData:!0})}();