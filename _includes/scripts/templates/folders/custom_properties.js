!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).custom_properties=n({1:function(n,e,a,l,r,s,i){var t;return null!=(t=a.if.call(null!=e?e:n.nullContext||{},e,{name:"if",hash:{},fn:n.program(2,r,0,s,i),inverse:n.noop,data:r}))?t:""},2:function(n,e,a,l,r,s,i){var t,o=null!=e?e:n.nullContext||{},u=n.lambda,p=n.escapeExpression;return'<span class="custom-property badge badge-secondary'+(null!=(t=a.si.call(o,e,"High",{name:"si",hash:{},fn:n.program(3,r,0,s,i),inverse:n.noop,data:r}))?t:"")+(null!=(t=a.si.call(o,e,"Medium",{name:"si",hash:{},fn:n.program(5,r,0,s,i),inverse:n.noop,data:r}))?t:"")+(null!=(t=a.si.call(o,e,"Low",{name:"si",hash:{},fn:n.program(7,r,0,s,i),inverse:n.noop,data:r}))?t:"")+(null!=(t=a.si.call(o,e,"None",{name:"si",hash:{},fn:n.program(9,r,0,s,i),inverse:n.noop,data:r}))?t:"")+(null!=(t=a.si.call(o,r&&r.key,"Review",{name:"si",hash:{},fn:n.program(11,r,0,s,i),inverse:n.noop,data:r}))?t:"")+(null!=(t=a.si.call(o,r&&r.key,"Reviewed",{name:"si",hash:{},fn:n.program(13,r,0,s,i),inverse:n.noop,data:r}))?t:"")+' ml-1" title="">'+(null!=(t=a.exists.call(o,null!=i[1]?i[1].private:i[1],{name:"exists",hash:{},fn:n.program(15,r,0,s,i),inverse:n.noop,data:r}))?t:"")+p(u(r&&r.key,e))+" - "+p(u(e,e))+'<a role="button" class="close" aria-label="Close" href="#remove.tag.'+p(u(null!=i[1]?i[1].id:i[1],e))+"."+p(u(r&&r.key,e))+'" title="Remove Tag"><span aria-hidden="true">&times;</span></a></span>'},3:function(n,e,a,l,r){return" badge-danger"},5:function(n,e,a,l,r){return" badge-warning"},7:function(n,e,a,l,r){return" badge-success"},9:function(n,e,a,l,r){return" badge-info"},11:function(n,e,a,l,r){return" badge-dark"},13:function(n,e,a,l,r){return" badge-light"},15:function(n,e,a,l,r){return'<i class="material-icons h-100 d-inline-flex pr-1" title="Visible only with this App">lock</i>'},compiler:[7,">= 4.0.0"],main:function(n,e,a,l,r,s,i){var t;return(null!=(t=a.each.call(null!=e?e:n.nullContext||{},null!=e?e.properties:e,{name:"each",hash:{},fn:n.program(1,r,0,s,i),inverse:n.noop,data:r}))?t:"")+"\n"},useData:!0,useDepths:!0})}();