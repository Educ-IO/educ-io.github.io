!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).select=a({1:function(a,e,l,n,t){var r;return'<form class="needs-validation mt-3" novalidate>\n  <div class="row">\n    <div class="col-12 px-4 px-md-3">\n      <select class="custom-select" size="8" data-output-field="Classes" multiple>'+(null!=(r=l.present.call(null!=e?e:a.nullContext||{},null!=e?e.data:e,{name:"present",hash:{},fn:a.program(2,t,0),inverse:a.noop,data:t}))?r:"")+"</select>\n    </div>\n  </div>\n</form>\n"},2:function(a,e,l,n,t){var r;return null!=(r=l.each.call(null!=e?e:a.nullContext||{},null!=e?e.data:e,{name:"each",hash:{},fn:a.program(3,t,0),inverse:a.noop,data:t}))?r:""},3:function(a,e,l,n,t){var r,s=null!=e?e:a.nullContext||{},o=a.escapeExpression;return'<option value="'+o(l.either.call(s,null!=e?e.id:e,null!=e?e.value:e,{name:"either",hash:{},data:t}))+'"'+(null!=(r=l.if.call(s,null!=e?e.description:e,{name:"if",hash:{},fn:a.program(4,t,0),inverse:a.noop,data:t}))?r:"")+">"+o(l.either.call(s,null!=e?e.text:e,null!=e?e.name:e,{name:"either",hash:{},data:t}))+"</option>"},4:function(a,e,l,n,t){return' title="'+a.escapeExpression(a.lambda(null!=e?e.description:e,e))+'"'},compiler:[7,">= 4.0.0"],main:function(a,e,l,n,t){var r;return null!=(r=a.invokePartial(n.dialog,e,{name:"dialog",hash:{class:"modal-xl"},fn:a.program(1,t,0),inverse:a.noop,data:t,helpers:l,partials:n,decorators:a.decorators}))?r:""},usePartial:!0,useData:!0})}();