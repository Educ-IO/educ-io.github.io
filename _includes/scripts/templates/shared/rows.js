!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).rows=n({1:function(n,a,e,l,t,r,o){var s;return"<tr>"+(null!=(s=e.each.call(null!=a?a:n.nullContext||{},a,{name:"each",hash:{},fn:n.program(2,t,0,r,o),inverse:n.noop,data:t}))?s:"")+"</tr>"},2:function(n,a,e,l,t,r,o){var s,u=null!=a?a:n.nullContext||{};return"<td>"+(null!=(s=e.isDate.call(u,a,{name:"isDate",hash:{},fn:n.program(3,t,0,r,o),inverse:n.program(5,t,0,r,o),data:t}))?s:"")+(null!=(s=e.if.call(u,t&&t.last,{name:"if",hash:{},fn:n.program(8,t,0,r,o),inverse:n.noop,data:t}))?s:"")+"</td>"},3:function(n,a,e,l,t){return n.escapeExpression(e.localeDate.call(null!=a?a:n.nullContext||{},a,{name:"localeDate",hash:{},data:t}))},5:function(n,a,e,l,t){var r;return null!=(r=e.present.call(null!=a?a:n.nullContext||{},a,{name:"present",hash:{},fn:n.program(6,t,0),inverse:n.noop,data:t}))?r:""},6:function(n,a,e,l,t){return n.escapeExpression(n.lambda(a,a))},8:function(n,a,e,l,t,r,o){var s;return null!=(s=e.if.call(null!=a?a:n.nullContext||{},null!=o[2]?o[2].removable:o[2],{name:"if",hash:{},fn:n.program(9,t,0,r,o),inverse:n.noop,data:t}))?s:""},9:function(n,a,e,l,t){return'<a role="button" class="close float-right" aria-label="Close" href="#" title="Remove from List"><span aria-hidden="true">&times;</span></a>'},compiler:[7,">= 4.0.0"],main:function(n,a,e,l,t,r,o){var s;return(null!=(s=e.each.call(null!=a?a:n.nullContext||{},null!=a?a.rows:a,{name:"each",hash:{},fn:n.program(1,t,0,r,o),inverse:n.noop,data:t}))?s:"")+"\n"},useData:!0,useDepths:!0})}();