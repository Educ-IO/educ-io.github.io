!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).signature=a({1:function(a,n,l,e,s){return"you"},3:function(a,n,l,e,s){return a.escapeExpression(a.lambda(null!=n?n.who:n,n))},5:function(a,n,l,e,s){return" ("+a.escapeExpression(a.lambda(null!=n?n.email:n,n))+")"},7:function(a,n,l,e,s){return""},9:function(a,n,l,e,s){var t,r=null!=n?n:a.nullContext||{};return"The data in this report has <strong>probably been changed</strong> since it was reviewed. Please "+(null!=(t=l.if.call(r,null!=n?n.email:n,{name:"if",hash:{},fn:a.program(10,s,0),inverse:a.noop,data:s}))?t:"")+"request"+(null!=(t=l.if.call(r,null!=n?n.email:n,{name:"if",hash:{},fn:a.program(12,s,0),inverse:a.noop,data:s}))?t:"")+" that it is <strong>checked</strong> &amp; <strong>signed</strong> again."},10:function(a,n,l,e,s){var t=a.lambda,r=a.escapeExpression;return'<a href="mailto:'+r(t(null!=n?n.email:n,n))+"?subject=Please re-sign my Reflect Report&body=I have recently changed this report, so could you please check and re-sign it?%0D%0A%0D%0A"+r(t(null!=n?n.link:n,n))+'" target="_blank">'},12:function(a,n,l,e,s){return"</a>"},compiler:[7,">= 4.0.0"],main:function(a,n,l,e,s){var t,r=null!=n?n:a.nullContext||{},i=a.escapeExpression;return'<li class="list-group-item list-group-item-action">\n  <div class="d-flex w-100 justify-content-between">\n    <h5 class="mb-1">\n'+(null!=(t=a.invokePartial(e.valid,n,{name:"valid",data:s,indent:"      ",helpers:l,partials:e,decorators:a.decorators}))?t:"")+'      <span class="font-weight-bold text-'+i(l.which.call(r,null!=n?n.valid:n,"success","danger",{name:"which",hash:{},data:s}))+'">'+i(l.which.call(r,null!=n?n.valid:n,"Valid","Invalid",{name:"which",hash:{},data:s}))+'</span> Signature</h5>\n    <small class="ml-3">'+i(a.lambda(null!=n?n.when:n,n))+'</small>\n  </div>\n  <p class="mb-1">This report was signed by <strong class="text-body">'+(null!=(t=l.is.call(r,null!=n?n.who:n,"===",!0,{name:"is",hash:{},fn:a.program(1,s,0),inverse:a.program(3,s,0),data:s}))?t:"")+"</strong>"+(null!=(t=l.if.call(r,null!=n?n.email:n,{name:"if",hash:{},fn:a.program(5,s,0),inverse:a.noop,data:s}))?t:"")+"</p>\n  <small>"+(null!=(t=l.if.call(r,null!=n?n.valid:n,{name:"if",hash:{},fn:a.program(7,s,0),inverse:a.program(9,s,0),data:s}))?t:"")+"</small>\n</li>\n"},usePartial:!0,useData:!0})}();