!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).group=a({1:function(a,e,n,l,s){var r=a.lambda,i=a.escapeExpression;return'<div class="w-100 mt-2 mt-xl-3">\n      <h4 class="d-inline mr-2"><span id="number_Required_Value" class="badge badge-dark">1</span></h4><label for="number_Required">How many '+i(r(null!=e?e.name:e,e))+' required?</label>\n      <input type="range" class="custom-range" min="1" max="'+i(r(null!=e?e.max:e,e))+'" value="1" id="number_Required" data-targets="#number_Required_Value">  \n    </div>'},compiler:[7,">= 4.0.0"],main:function(a,e,n,l,s){var r,i=a.lambda,t=a.escapeExpression;return'<div class="container-fluid">\n  \n  <div class="row mb-2 mb-xl-3">\n    \n    <div class="mb-2">\n      <h5 class="m-0 font-weight-light">When are <span class="font-weight-normal text-dark">'+t(i(null!=e?e.name:e,e))+'</span> available?</h5>\n    </div>\n    \n    <div id="availability" class="progress w-100">'+(null!=(r=a.invokePartial(l.availability,e,{name:"availability",data:s,helpers:n,partials:l,decorators:a.decorators}))?r:"")+'</div>\n    <small id="availability_Help" class="d-none d-md-block form-text text-muted">The availability bar represents the whole day, with black/red parts of the bar showing when the number of resources you require are <strong>not available</strong>.</small>'+(null!=(r=n.is.call(null!=e?e:a.nullContext||{},null!=e?e.max:e,"gt",1,{name:"is",hash:{},fn:a.program(1,s,0),inverse:a.noop,data:s}))?r:"")+'</div><hr class="d-none d-md-block"/>\n  \n  <div class="row my-2 my-xl-3 mb-3">\n    \n    <div class="mb-1 d-none d-md-block">\n      <h5 class="m-0 font-weight-light">Book <span class="font-weight-normal text-dark">'+t(i(null!=e?e.name:e,e))+'</span></h5>\n    </div>\n    \n    <div class="bg-light rounded col-12 p-2">\n      \n'+(null!=(r=a.invokePartial(l.create,e,{name:"create",data:s,indent:"      ",helpers:n,partials:l,decorators:a.decorators}))?r:"")+"\n    </div>\n    \n  </div>\n  \n</div>\n"},usePartial:!0,useData:!0})}();