!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).notifications=a({1:function(a,e,n,r,t){return'id="'+a.escapeExpression(a.lambda(null!=e?e.id:e,e))+'" '},3:function(a,e,n,r,t){var o;return null!=(o=a.invokePartial(r.resources,e,{name:"resources",hash:{opaque:!1,resources:null!=e?e.data:e},data:t,helpers:n,partials:r,decorators:a.decorators}))?o:""},compiler:[7,">= 4.0.0"],main:function(a,e,n,r,t){var o,i=null!=e?e:a.nullContext||{};return"<div "+(null!=(o=n.if.call(i,null!=e?e.id:e,{name:"if",hash:{},fn:a.program(1,t,0),inverse:a.noop,data:t}))?o:"")+'class="container-fluid pt-lg-1 mvh-100">\n\n'+(null!=(o=a.invokePartial(r.date,e,{name:"date",hash:{remove_command:"remove.notification",remove:"Remove Notification",add_command:"add.notification",add:"Add new Notification",dateless:!0},data:t,indent:"  ",helpers:n,partials:r,decorators:a.decorators}))?o:"")+"  \n"+(null!=(o=a.invokePartial(r.search,e,{name:"search",hash:{placeholder:"Search Resources"},data:t,indent:"  ",helpers:n,partials:r,decorators:a.decorators}))?o:"")+'  \n  <div id="resources">'+(null!=(o=n.if.call(i,null!=e?e.data:e,{name:"if",hash:{},fn:a.program(3,t,0),inverse:a.noop,data:t}))?o:"")+"</div>\n  \n</div>\n"},usePartial:!0,useData:!0})}();