!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).all=a({1:function(a,n,e,t,l){var r;return'<div class="card-columns wide">'+(null!=(r=e.each.call(null!=n?n:a.nullContext||{},null!=n?n.events:n,{name:"each",hash:{},fn:a.program(2,l,0),inverse:a.noop,data:l}))?r:"")+"</div>"},2:function(a,n,e,t,l){var r;return null!=(r=a.invokePartial(t.event,n,{name:"event",data:l,helpers:e,partials:t,decorators:a.decorators}))?r:""},4:function(a,n,e,t,l){return'<h5 class="mt-3"><i class="material-icons md-24 mr-1 text-warning">highlight_off</i><span class="font-weight-light text-muted">No Bookings for this date!</span></h5>'},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l){var r;return(null!=(r=e.present.call(null!=n?n:a.nullContext||{},null!=n?n.events:n,{name:"present",hash:{},fn:a.program(1,l,0),inverse:a.program(4,l,0),data:l}))?r:"")+"\n"},usePartial:!0,useData:!0})}();