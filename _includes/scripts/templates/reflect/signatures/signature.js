!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).signature=n({1:function(n,l,e,a,t){return"you"},3:function(n,l,e,a,t){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return n.escapeExpression(n.lambda(null!=l?r(l,"who"):l,l))},5:function(n,l,e,a,t){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return" ("+n.escapeExpression(n.lambda(null!=l?r(l,"email"):l,l))+")"},7:function(n,l,e,a,t){return""},9:function(n,l,e,a,t){var r,o=null!=l?l:n.nullContext||{},i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"The data in this report has <strong>probably been changed</strong> since it was reviewed. Please "+(null!=(r=i(e,"if").call(o,null!=l?i(l,"email"):l,{name:"if",hash:{},fn:n.program(10,t,0),inverse:n.noop,data:t,loc:{start:{line:9,column:127},end:{line:9,column:319}}}))?r:"")+"request"+(null!=(r=i(e,"if").call(o,null!=l?i(l,"email"):l,{name:"if",hash:{},fn:n.program(12,t,0),inverse:n.noop,data:t,loc:{start:{line:9,column:326},end:{line:9,column:350}}}))?r:"")+" that it is <strong>checked</strong> &amp; <strong>signed</strong> again."},10:function(n,l,e,a,t){var r=n.lambda,o=n.escapeExpression,i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<a href="mailto:'+o(r(null!=l?i(l,"email"):l,l))+"?subject=Please re-sign my Reflect Report&body=I have recently changed this report, so could you please check and re-sign it?%0D%0A%0D%0A"+o(r(null!=l?i(l,"link"):l,l))+'">'},12:function(n,l,e,a,t){return"</a>"},compiler:[8,">= 4.3.0"],main:function(n,l,e,a,t){var r,o=null!=l?l:n.nullContext||{},i=n.escapeExpression,s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<li class="list-group-item list-group-item-action">\n  <div class="d-flex w-100 justify-content-between">\n    <h5 class="mb-1">\n'+(null!=(r=n.invokePartial(s(a,"valid"),l,{name:"valid",data:t,indent:"      ",helpers:e,partials:a,decorators:n.decorators}))?r:"")+'      <span class="font-weight-bold text-'+i(s(e,"which").call(o,null!=l?s(l,"valid"):l,"success","danger",{name:"which",hash:{},data:t,loc:{start:{line:5,column:41},end:{line:5,column:75}}}))+'">'+i(s(e,"which").call(o,null!=l?s(l,"valid"):l,"Valid","Invalid",{name:"which",hash:{},data:t,loc:{start:{line:5,column:77},end:{line:5,column:110}}}))+'</span> Signature</h5>\n    <small class="ml-3">'+i(n.lambda(null!=l?s(l,"when"):l,l))+'</small>\n  </div>\n  <p class="mb-1">This report was signed by <strong class="text-body">'+(null!=(r=s(e,"is").call(o,null!=l?s(l,"who"):l,"===",!0,{name:"is",hash:{},fn:n.program(1,t,0),inverse:n.program(3,t,0),data:t,loc:{start:{line:8,column:70},end:{line:8,column:117}}}))?r:"")+"</strong>"+(null!=(r=s(e,"if").call(o,null!=l?s(l,"email"):l,{name:"if",hash:{},fn:n.program(5,t,0),inverse:n.noop,data:t,loc:{start:{line:8,column:126},end:{line:8,column:158}}}))?r:"")+"</p>\n  <small>"+(null!=(r=s(e,"if").call(o,null!=l?s(l,"valid"):l,{name:"if",hash:{},fn:n.program(7,t,0),inverse:n.program(9,t,0),data:t,loc:{start:{line:9,column:9},end:{line:9,column:430}}}))?r:"")+"</small>\n</li>\n"},usePartial:!0,useData:!0})}();