!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["tab-links"]=n({1:function(n,a,l,e,r,o,t){var s,i=n.lambda,u=n.escapeExpression,d=null!=a?a:n.nullContext||{};return'<li id="nav_'+u(i(null!=a?a.id:a,a))+'" class="nav-item'+(null!=(s=l.if.call(d,null!=a?a.actions:a,{name:"if",hash:{},fn:n.program(2,r,0,o,t),inverse:n.noop,data:r}))?s:"")+'">\n  <a class="nav-link'+(null!=(s=l.if.call(d,null!=a?a.actions:a,{name:"if",hash:{},fn:n.program(4,r,0,o,t),inverse:n.noop,data:r}))?s:"")+'" href="#tab_'+u(i(null!=a?a.id:a,a))+'" role="tab" '+(null!=(s=l.if.call(d,null!=t[1]?t[1].loader:t[1],{name:"if",hash:{},fn:n.program(6,r,0,o,t),inverse:n.noop,data:r}))?s:"")+' aria-controls="tab_'+u(i(null!=a?a.id:a,a))+'" data-toggle="tab" data-name="'+u(i(null!=a?a.name:a,a))+'" data-id="'+u(i(null!=a?a.id:a,a))+'" data-index="'+u(i(r&&r.index,a))+'" data-target="#tab_'+u(i(null!=a?a.id:a,a))+'"'+(null!=(s=l.if.call(d,null!=a?a.type:a,{name:"if",hash:{},fn:n.program(8,r,0,o,t),inverse:n.noop,data:r}))?s:"")+">\n    "+u(i(null!=a?a.name:a,a))+"\n  </a>\n"+(null!=(s=l.if.call(d,null!=a?a.actions:a,{name:"if",hash:{},fn:n.program(10,r,0,o,t),inverse:n.noop,data:r}))?s:"")+"</li>\n"},2:function(n,a,l,e,r){return" dropdown"},4:function(n,a,l,e,r){return" d-inline-block"},6:function(n,a,l,e,r,o,t){return' onclick="'+n.escapeExpression(n.lambda(null!=t[1]?t[1].loader:t[1],a))+'"'},8:function(n,a,l,e,r){return' data-type="'+n.escapeExpression(n.lambda(null!=a?a.type:a,a))+'"'},10:function(n,a,l,e,r){var o;return'  <a href="#" class="dropdown-toggle dropdown-toggle-split d-inline-block h-100" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n    <span class="sr-only">Toggle Dropdown</span>\n  </a>\n  <div class="dropdown-menu">\n    '+(null!=(o=l.each.call(null!=a?a:n.nullContext||{},null!=a?a.actions:a,{name:"each",hash:{},fn:n.program(11,r,0),inverse:n.noop,data:r}))?o:"")+"\n  </div>\n"},11:function(n,a,l,e,r){var o,t=null!=a?a:n.nullContext||{},s=n.lambda,i=n.escapeExpression;return'<a class="dropdown-item'+(null!=(o=l.if.call(t,null!=a?a.class:a,{name:"if",hash:{},fn:n.program(12,r,0),inverse:n.noop,data:r}))?o:"")+'" href="'+i(s(null!=a?a.url:a,a))+'"'+(null!=(o=l.if.call(t,null!=a?a.desc:a,{name:"if",hash:{},fn:n.program(14,r,0),inverse:n.noop,data:r}))?o:"")+">"+i(s(null!=a?a.name:a,a))+"</a>"},12:function(n,a,l,e,r){return" "+n.escapeExpression(n.lambda(null!=a?a.class:a,a))},14:function(n,a,l,e,r){return' title="'+n.escapeExpression(n.lambda(null!=a?a.desc:a,a))+'"'},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,r,o,t){var s;return null!=(s=l.each.call(null!=a?a:n.nullContext||{},null!=a?a.tabs:a,{name:"each",hash:{},fn:n.program(1,r,0,o,t),inverse:n.noop,data:r}))?s:""},useData:!0,useDepths:!0})}();