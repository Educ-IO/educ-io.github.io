!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).edit_part=n({1:function(n,a,e,l,i){var r,t=null!=a?a:n.nullContext||{},o=n.escapeExpression;return'<form class="needs-validation mt-3" novalidate>\n  <div class="row">\n    <div class="container col-12 px-4 px-md-3">\n      <div class="form-group row">\n        <label for="'+(null!=(r=e.if.call(t,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(2,i,0),inverse:n.noop,data:i}))?r:"")+'sequence" class="col-sm-2 col-form-label">Sequence</label>\n        <div class="col-sm-10">\n          <input id="'+(null!=(r=e.if.call(t,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(2,i,0),inverse:n.noop,data:i}))?r:"")+'sequence" name="Sequence" type="number" class="form-control" tabindex="1" min="1" max="'+o(n.lambda(null!=a?a.end:a,a))+'" value="'+o(e.either.call(t,null!=a?a.sequence:a,null!=a?a.end:a,{name:"either",hash:{},data:i}))+'"/>\n        </div>\n      </div>\n      <div class="form-group row">\n        <label for="'+(null!=(r=e.if.call(t,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(2,i,0),inverse:n.noop,data:i}))?r:"")+'quantity" class="col-sm-2 col-form-label">Quantity</label>\n        <div class="col-sm-10">          \n          <input id="'+(null!=(r=e.if.call(t,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(2,i,0),inverse:n.noop,data:i}))?r:"")+'quantity" name="Quantity" type="number" class="form-control" tabindex="2" min="1" value="'+o(e.either.call(t,null!=a?a.quantity:a,1,{name:"either",hash:{},data:i}))+'"/>\n        </div>\n      </div>\n    </div>\n  </div>\n  '+(null!=(r=e.if.call(t,null!=a?a.sequence:a,{name:"if",hash:{},fn:n.program(4,i,0),inverse:n.noop,data:i}))?r:"")+"\n  "+(null!=(r=e.if.call(t,null!=a?a.previous:a,{name:"if",hash:{},fn:n.program(6,i,0),inverse:n.noop,data:i}))?r:"")+"\n</form>\n"},2:function(n,a,e,l,i){return n.escapeExpression(n.lambda(null!=a?a.id:a,a))+"_"},4:function(n,a,e,l,i){return'<input data-output-field="ID" type="hidden" data-output-type="number" value="'+n.escapeExpression(n.lambda(null!=a?a.sequence:a,a))+'"/>'},6:function(n,a,e,l,i){return'<input data-output-field="Previous" type="hidden" data-output-type="number" value="'+n.escapeExpression(n.lambda(null!=a?a.previous:a,a))+'"/>'},compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i){var r;return null!=(r=n.invokePartial(l.dialog,a,{name:"dialog",fn:n.program(1,i,0),inverse:n.noop,data:i,helpers:e,partials:l,decorators:n.decorators}))?r:""},usePartial:!0,useData:!0})}();