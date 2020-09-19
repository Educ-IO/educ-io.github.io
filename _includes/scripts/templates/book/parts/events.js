!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).events=n({1:function(n,e,a,l,t){var o,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<div>\n"+(null!=(o=n.invokePartial(r(l,"control_button"),e,{name:"control_button",hash:{b_command:r(a,"either").call(null!=e?e:n.nullContext||{},null!=e?r(e,"extend_command"):e,"date.extend",{name:"either",hash:{},data:t,loc:{start:{line:10,column:38},end:{line:10,column:75}}}),b_icon_type:"light",b_icon:"add_circle_outline",b_tooltip:"Extend Booking Period",b_delay:"400",b_class:"btn-info btn-sm"},data:t,indent:"        ",helpers:a,partials:l,decorators:n.decorators}))?o:"")+"      </div>"},3:function(n,e,a,l,t){var o,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<hr /><div class="row mb-2">\n    \n    <div class="mb-2 col-12">\n      <h5 class="m-0 font-weight-light">Your bookings of <span class="font-weight-normal text-dark">'+n.escapeExpression(n.lambda(null!=e?r(e,"name"):e,e))+'</span></h5>\n    </div>\n  \n    <div class="card-columns col-12">'+(null!=(o=r(a,"each").call(null!=e?e:n.nullContext||{},null!=e?r(e,"events"):e,{name:"each",hash:{},fn:n.program(4,t,0),inverse:n.noop,data:t,loc:{start:{line:39,column:37},end:{line:39,column:73}}}))?o:"")+"</div>\n    \n  </div>"},4:function(n,e,a,l,t){var o,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(o=n.invokePartial(r(l,"event"),e,{name:"event",data:t,helpers:a,partials:l,decorators:n.decorators}))?o:""},compiler:[8,">= 4.3.0"],main:function(n,e,a,l,t){var o,r=n.lambda,i=n.escapeExpression,s=null!=e?e:n.nullContext||{},c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="container-fluid">\n  \n  <div class="row mb-2 mb-xl-3">\n    \n    <div class="mb-2 d-flex w-100 justify-content-between align-items-center">\n      <h5 class="m-0 font-weight-light">When is <span class="font-weight-normal text-dark">'+i(r(null!=e?c(e,"name"):e,e))+"</span> available?</h5>"+(null!=(o=c(a,"if").call(s,null!=e?c(e,"extend"):e,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t,loc:{start:{line:7,column:6},end:{line:11,column:20}}}))?o:"")+'</div>\n    \n    <div id="availability" class="progress w-100">'+(null!=(o=n.invokePartial(c(l,"availability"),e,{name:"availability",data:t,helpers:a,partials:l,decorators:n.decorators}))?o:"")+'</div>\n    <small id="availability_Help" class="d-none d-md-block form-text text-muted">The availability bar represents the whole day, with black/red parts of the bar showing when the resource is already booked.</small>\n    \n  </div><hr class="d-none d-md-block"/>\n  \n  <div class="row my-2 my-xl-3 mb-3">\n    \n    <div class="mb-1 d-none d-md-block">\n      <h5 class="m-0 font-weight-light">Book <span class="font-weight-normal text-dark">'+i(r(null!=e?c(e,"name"):e,e))+'</span></h5>\n    </div>\n    \n    <div class="bg-light rounded col-12 p-1 p-md-2">\n      \n'+(null!=(o=n.invokePartial(c(l,"create"),e,{name:"create",data:t,indent:"      ",helpers:a,partials:l,decorators:n.decorators}))?o:"")+"\n    </div>\n    \n  </div>\n  \n  "+(null!=(o=c(a,"if").call(s,null!=e?c(e,"events"):e,{name:"if",hash:{},fn:n.program(3,t,0),inverse:n.noop,data:t,loc:{start:{line:33,column:2},end:{line:41,column:15}}}))?o:"")+"\n  \n</div>\n"},usePartial:!0,useData:!0})}();