!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).tabs=a({1:function(a,n,l,e,t,s,i){var r,d=a.lambda,u=a.escapeExpression;return'      <li class="nav-item">\n        <a class="nav-link" href="#'+u(d(null!=n?n.id:n,n))+'" role="tab" '+(null!=(r=l.if.call(null!=n?n:a.nullContext||{},null!=i[1]?i[1].loader:i[1],{name:"if",hash:{},fn:a.program(2,t,0,s,i),inverse:a.noop,data:t}))?r:"")+' aria-controls="'+u(d(null!=n?n.id:n,n))+'" data-toggle="tab" data-id="'+u(d(null!=i[1]?i[1].sheet:i[1],n))+'" data-sheet="'+u(d(null!=n?n.name:n,n))+'" data-index="'+u(d(t&&t.index,n))+'" data-target="#'+u(d(null!=n?n.id:n,n))+'">'+u(d(null!=n?n.name:n,n))+"</a>\n      </li>\n"},2:function(a,n,l,e,t,s,i){return' onclick="'+a.escapeExpression(a.lambda(null!=i[1]?i[1].loader:i[1],n))+'"'},4:function(a,n,l,e,t,s,i){var r=a.lambda,d=a.escapeExpression;return'      <div id="'+d(r(null!=n?n.id:n,n))+'" class="tab-pane fade" data-id="'+d(r(null!=i[1]?i[1].sheet:i[1],n))+'" data-sheet="'+d(r(null!=n?n.name:n,n))+'" role="tabpanel"></div>\n'},compiler:[7,">= 4.0.0"],main:function(a,n,l,e,t,s,i){var r,d=null!=n?n:a.nullContext||{};return'<div class="container-fluid">\n  <ul id="'+a.escapeExpression(a.lambda(null!=n?n.id:n,n))+'" class="nav nav-tabs" role="tablist">\n'+(null!=(r=l.each.call(d,null!=n?n.tabs:n,{name:"each",hash:{},fn:a.program(1,t,0,s,i),inverse:a.noop,data:t}))?r:"")+'  </ul>\n  <div class="tab-content">\n'+(null!=(r=l.each.call(d,null!=n?n.tabs:n,{name:"each",hash:{},fn:a.program(4,t,0,s,i),inverse:a.noop,data:t}))?r:"")+"  </div>\n</div>\n"},useData:!0,useDepths:!0})}();