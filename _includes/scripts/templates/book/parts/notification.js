!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).notification=n({1:function(n,a,e,t,l){return'<div class="notifications-holder">'},3:function(n,a,e,t,l,i,o){var s,r=n.lambda,d=n.escapeExpression,u=null!=a?a:n.nullContext||{};return'<div id="'+d(r(null!=o[1]?o[1].calendar:o[1],a))+"."+d(r(null!=a?a.type:a,a))+'" class="mr-2 mt-1 px-1 d-inline-flex justify-content-center align-items-center border rounded '+(null!=(s=e.if.call(u,null!=a?a.class:a,{name:"if",hash:{},fn:n.program(4,l,0,i,o),inverse:n.program(6,l,0,i,o),data:l}))?s:"")+'">'+(null!=(s=e.is.call(u,null!=a?a.type:a,"eventCreation",{name:"is",hash:{},fn:n.program(8,l,0,i,o),inverse:n.noop,data:l}))?s:"")+(null!=(s=e.is.call(u,null!=a?a.type:a,"eventChange",{name:"is",hash:{},fn:n.program(10,l,0,i,o),inverse:n.noop,data:l}))?s:"")+(null!=(s=e.is.call(u,null!=a?a.type:a,"eventCancellation",{name:"is",hash:{},fn:n.program(12,l,0,i,o),inverse:n.noop,data:l}))?s:"")+(null!=(s=e.is.call(u,null!=a?a.type:a,"eventResponse",{name:"is",hash:{},fn:n.program(14,l,0,i,o),inverse:n.noop,data:l}))?s:"")+(null!=(s=e.is.call(u,null!=a?a.type:a,"agenda",{name:"is",hash:{},fn:n.program(16,l,0,i,o),inverse:n.noop,data:l}))?s:"")+'<a role="button" style="font-size:1.2rem;" class="close d-inline-flex pl-1 text-warning" aria-label="Remove" href="#remove.notification.'+d(e.encode.call(u,null!=o[1]?o[1].calendar:o[1],{name:"encode",hash:{},data:l}))+"."+d(r(null!=a?a.type:a,a))+'" title="Remove Notification"><span aria-hidden="true">×</span></a>\n  </div>'},4:function(n,a,e,t,l){return n.escapeExpression(n.lambda(null!=a?a.class:a,a))},6:function(n,a,e,t,l){return"text-warning border-warning"},8:function(n,a,e,t,l){return'<i class="material-icons pl-1 md-1 text-muted" data-toggle="tooltip" data-html="true" title="Email Notification when <strong>Bookings are Created</strong>">add_box</i><span class="px-1 o-75">Created</span>'},10:function(n,a,e,t,l){return'<i class="material-icons pl-1 md-1 text-muted" data-toggle="tooltip" data-html="true" title="Email Notification when <strong>Bookings are Changed</strong>">mode_edit</i><span class="px-1 o-75">Changed</span>'},12:function(n,a,e,t,l){return'<i class="material-icons pl-1 md-1 text-muted" data-toggle="tooltip" data-html="true" title="Email Notification when <strong>Bookings are Cancelled</strong>">delete_outline</i><span class="px-1 o-75">Cancelled</span>'},14:function(n,a,e,t,l){return'<i class="material-icons pl-1 md-1 text-muted" data-toggle="tooltip" data-html="true" title="Email Notification when Bookings are <strong>Responded to by Attendees</strong>">reply</i><span class="px-1 o-75">Responded</span>'},16:function(n,a,e,t,l){return'<i class="material-icons pl-1 md-1 text-muted" data-toggle="tooltip" data-html="true" title="<strong>Daily Email</strong> Agenda for Bookings">view_agenda</i><span class="px-1 o-75">Daily Agenda</span>'},18:function(n,a,e,t,l){return"</div>"},compiler:[7,">= 4.0.0"],main:function(n,a,e,t,l,i,o){var s,r=null!=a?a:n.nullContext||{};return(null!=(s=e.unless.call(r,null!=a?a.addition:a,{name:"unless",hash:{},fn:n.program(1,l,0,i,o),inverse:n.noop,data:l}))?s:"")+"\n  "+(null!=(s=e.each.call(r,null!=a?a.notifications:a,{name:"each",hash:{},fn:n.program(3,l,0,i,o),inverse:n.noop,data:l}))?s:"")+"\n"+(null!=(s=e.unless.call(r,null!=a?a.addition:a,{name:"unless",hash:{},fn:n.program(18,l,0,i,o),inverse:n.noop,data:l}))?s:"")+"\n"},useData:!0,useDepths:!0})}();