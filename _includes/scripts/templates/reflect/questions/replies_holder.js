!function(){var e=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).replies_holder=e({1:function(e,a,l,r,n){var t;return null!=(t=e.invokePartial(r.reply_details,a,{name:"reply_details",data:n,helpers:l,partials:r,decorators:e.decorators}))?t:""},compiler:[7,">= 4.0.0"],main:function(e,a,l,r,n){var t;return'  <div class="replies w-100 p-1 ml-1 ml-lg-2 ml-xl-3 border-left border-secondary">\n    '+(null!=(t=l.each.call(null!=a?a:e.nullContext||{},null!=a?a.replies:a,{name:"each",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?t:"")+"\n  </div>\n"},usePartial:!0,useData:!0})}();