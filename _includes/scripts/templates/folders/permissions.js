!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).permissions=n({1:function(n,l,a,e,r,i,t){var o;return null!=(o=a.if.call(null!=l?l:n.nullContext||{},l,{name:"if",hash:{},fn:n.program(2,r,0,i,t),inverse:n.noop,data:r}))?o:""},2:function(n,l,a,e,r,i,t){var o;return null!=(o=a.if.call(null!=l?l:n.nullContext||{},null!=l?l.mine:l,{name:"if",hash:{},fn:n.program(3,r,0,i,t),inverse:n.program(8,r,0,i,t),data:r}))?o:""},3:function(n,l,a,e,r,i,t){var o;return'<div id="'+n.escapeExpression(n.lambda(null!=t[1]?t[1].id:t[1],l))+"."+(null!=(o=a.if.call(null!=l?l:n.nullContext||{},null!=l?l.mine:l,{name:"if",hash:{},fn:n.program(4,r,0,i,t),inverse:n.program(6,r,0,i,t),data:r}))?o:"")+'" class="mr-2 d-inline-flex justify-content-center align-items-center ,t-1"><i class="material-icons text-success" title="Owned by you">cloud_done</i></div>'},4:function(n,l,a,e,r){return"mine"},6:function(n,l,a,e,r){return n.escapeExpression(n.lambda(null!=l?l.id:l,l))},8:function(n,l,a,e,r,i,t){var o,s=n.lambda,u=n.escapeExpression,m=null!=l?l:n.nullContext||{};return'<div id="'+u(s(null!=t[1]?t[1].id:t[1],l))+"."+u(s(null!=l?l.id:l,l))+'" class="mr-2 mt-1 px-1 d-inline-flex justify-content-center align-items-center border rounded '+(null!=(o=a.if.call(m,null!=l?l.class:l,{name:"if",hash:{},fn:n.program(9,r,0,i,t),inverse:n.program(11,r,0,i,t),data:r}))?o:"")+'">\n  <i class="material-icons md-1" title="'+(null!=(o=a.is.call(m,null!=l?l.role:l,"owner",{name:"is",hash:{},fn:n.program(13,r,0,i,t),inverse:n.program(15,r,0,i,t),data:r}))?o:"")+'">'+(null!=(o=a.is.call(m,null!=l?l.type:l,"user",{name:"is",hash:{},fn:n.program(22,r,0,i,t),inverse:n.noop,data:r}))?o:"")+(null!=(o=a.is.call(m,null!=l?l.type:l,"group",{name:"is",hash:{},fn:n.program(30,r,0,i,t),inverse:n.noop,data:r}))?o:"")+(null!=(o=a.is.call(m,null!=l?l.type:l,"domain",{name:"is",hash:{},fn:n.program(32,r,0,i,t),inverse:n.noop,data:r}))?o:"")+(null!=(o=a.is.call(m,null!=l?l.type:l,"anyone",{name:"is",hash:{},fn:n.program(34,r,0,i,t),inverse:n.noop,data:r}))?o:"")+"</i>\n  "+(null!=(o=a.if.call(m,null!=l?l.allowFileDiscovery:l,{name:"if",hash:{},fn:n.program(36,r,0,i,t),inverse:n.noop,data:r}))?o:"")+"\n  "+(null!=(o=a.is.call(m,null!=l?l.role:l,"writer",{name:"is",hash:{},fn:n.program(38,r,0,i,t),inverse:n.noop,data:r}))?o:"")+"\n  "+(null!=(o=a.is.call(m,null!=l?l.me:l,!1,{name:"is",hash:{},fn:n.program(40,r,0,i,t),inverse:n.noop,data:r}))?o:"")+"\n</div>"},9:function(n,l,a,e,r){return n.escapeExpression(n.lambda(null!=l?l.class:l,l))},11:function(n,l,a,e,r){return"text-muted border-secondary"},13:function(n,l,a,e,r){return"Owner"},15:function(n,l,a,e,r){var i,t=null!=l?l:n.nullContext||{};return(null!=(i=a.is.call(t,null!=l?l.type:l,"group",{name:"is",hash:{},fn:n.program(16,r,0),inverse:n.noop,data:r}))?i:"")+(null!=(i=a.is.call(t,null!=l?l.type:l,"domain",{name:"is",hash:{},fn:n.program(18,r,0),inverse:n.noop,data:r}))?i:"")+(null!=(i=a.is.call(t,null!=l?l.type:l,"anyone",{name:"is",hash:{},fn:n.program(20,r,0),inverse:n.noop,data:r}))?i:"")},16:function(n,l,a,e,r){return"Group"},18:function(n,l,a,e,r){return"Entire Domain"},20:function(n,l,a,e,r){return"Whole World"},22:function(n,l,a,e,r){var i;return null!=(i=a.is.call(null!=l?l:n.nullContext||{},null!=l?l.role:l,"owner",{name:"is",hash:{},fn:n.program(23,r,0),inverse:n.program(25,r,0),data:r}))?i:""},23:function(n,l,a,e,r){return"pets"},25:function(n,l,a,e,r){var i;return null!=(i=a.if.call(null!=l?l:n.nullContext||{},null!=l?l.me:l,{name:"if",hash:{},fn:n.program(26,r,0),inverse:n.program(28,r,0),data:r}))?i:""},26:function(n,l,a,e,r){return"mood"},28:function(n,l,a,e,r){return"face"},30:function(n,l,a,e,r){return"group"},32:function(n,l,a,e,r){return"domain"},34:function(n,l,a,e,r){return"public"},36:function(n,l,a,e,r){return'<i class="material-icons pl-1 md-1 text-danger" title="Searchable without link!">new_releases</i>'},38:function(n,l,a,e,r){return'<i class="material-icons pl-1 md-1" title="Can Edit">mode_edit</i>'},40:function(n,l,a,e,r){var i;return null!=(i=a.if.call(null!=l?l:n.nullContext||{},null!=l?l.displayName:l,{name:"if",hash:{},fn:n.program(41,r,0),inverse:n.noop,data:r}))?i:""},41:function(n,l,a,e,r){var i,t=null!=l?l:n.nullContext||{};return'<span class="px-1"'+(null!=(i=a.if.call(t,null!=l?l.emailAddress:l,{name:"if",hash:{},fn:n.program(42,r,0),inverse:n.noop,data:r}))?i:"")+(null!=(i=a.if.call(t,null!=l?l.domain:l,{name:"if",hash:{},fn:n.program(44,r,0),inverse:n.noop,data:r}))?i:"")+">"+n.escapeExpression(n.lambda(null!=l?l.displayName:l,l))+"</span>"},42:function(n,l,a,e,r){return' title="'+n.escapeExpression(n.lambda(null!=l?l.emailAddress:l,l))+'"'},44:function(n,l,a,e,r){return' title="'+n.escapeExpression(n.lambda(null!=l?l.domain:l,l))+'"'},compiler:[7,">= 4.0.0"],main:function(n,l,a,e,r,i,t){var o;return(null!=(o=a.each.call(null!=l?l:n.nullContext||{},null!=l?l.permissions:l,{name:"each",hash:{},fn:n.program(1,r,0,i,t),inverse:n.noop,data:r}))?o:"")+"\n"},useData:!0,useDepths:!0})}();