!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).rows=a({1:function(a,l,n,e,r,t,o){var s;return"<tr>\n"+(null!=(s=n.each.call(null!=l?l:a.nullContext||{},l,{name:"each",hash:{},fn:a.program(2,r,0,t,o),inverse:a.noop,data:r}))?s:"")+"</tr>\n"},2:function(a,l,n,e,r,t,o){var s,u=null!=l?l:a.nullContext||{};return"  <td>"+(null!=(s=n.if.call(u,l,{name:"if",hash:{},fn:a.program(3,r,0,t,o),inverse:a.noop,data:r}))?s:"")+(null!=(s=n.if.call(u,n.all.call(u,r&&r.last,null!=o[2]?o[2].removable:o[2],{name:"all",hash:{},data:r}),{name:"if",hash:{},fn:a.program(5,r,0,t,o),inverse:a.noop,data:r}))?s:"")+"</td>\n"},3:function(a,l,n,e,r){var t;return null!=(t=a.invokePartial(e.cell,l,{name:"cell",data:r,helpers:n,partials:e,decorators:a.decorators}))?t:""},5:function(a,l,n,e,r){return'<a role="button" class="close float-right" aria-label="Close" href="#" title="Remove from List"><span aria-hidden="true">&times;</span></a>'},compiler:[7,">= 4.0.0"],main:function(a,l,n,e,r,t,o){var s;return null!=(s=n.each.call(null!=l?l:a.nullContext||{},null!=l?l.rows:l,{name:"each",hash:{},fn:a.program(1,r,0,t,o),inverse:a.noop,data:r}))?s:""},usePartial:!0,useData:!0,useDepths:!0})}();