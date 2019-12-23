!function(){var l=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).resource=l({1:function(l,n,a,e,t){return'<div class="list-group-item px-0 py-2" data-group="'+l.escapeExpression(l.lambda(null!=n?n.id:n,n))+'">'},3:function(l,n,a,e,t){var r,s=null!=n?n:l.nullContext||{},i=l.escapeExpression;return'<a href="#" class="'+(null!=(r=a.if.call(s,null!=n?n.class:n,{name:"if",hash:{},fn:l.program(4,t,0),inverse:l.noop,data:t}))?r:"")+"list-group-item list-group-item-action resource-item"+(null!=(r=a.if.call(s,null!=n?n.simple:n,{name:"if",hash:{},fn:l.program(6,t,0),inverse:l.program(9,t,0),data:t}))?r:"")+'"\n   data-id="'+i(l.lambda(null!=n?n.email:n,n))+'" data-name="'+i(a.either.call(s,null!=n?n.name:n,null!=n?n.title:n,{name:"either",hash:{},data:t}))+'">'},4:function(l,n,a,e,t){return l.escapeExpression(l.lambda(null!=n?n.class:n,n))+" "},6:function(l,n,a,e,t){var r;return" py-2"+(null!=(r=a.if.call(null!=n?n:l.nullContext||{},null!=n?n.selectable:n,{name:"if",hash:{},fn:l.program(7,t,0),inverse:l.noop,data:t}))?r:"")},7:function(l,n,a,e,t){return" pl-2"},9:function(l,n,a,e,t){return" py-2 px-3"},11:function(l,n,a,e,t){return" mb-2"},13:function(l,n,a,e,t){return' class="d-flex align-items-center"'},15:function(l,n,a,e,t){var r,s=null!=n?n:l.nullContext||{},i=l.escapeExpression;return'<div class="custom-control custom-switch d-inline">\n        <input type="checkbox" class="custom-control-input" id="select_'+i(a.replace.call(s,null!=n?n.id:n,"\\s","",{name:"replace",hash:{},data:t}))+'" data-id="'+i(l.lambda(null!=n?n.email:n,n))+'"\n               data-name="'+i(a.either.call(s,null!=n?n.name:n,null!=n?n.title:n,{name:"either",hash:{},data:t}))+'"'+(null!=(r=a.if.call(s,null!=n?n.toggled:n,{name:"if",hash:{},fn:l.program(16,t,0),inverse:l.noop,data:t}))?r:"")+'>\n        <label class="custom-control-label" for="select_'+i(a.replace.call(s,null!=n?n.id:n,"\\s","",{name:"replace",hash:{},data:t}))+'"></label>\n      </div>'},16:function(l,n,a,e,t){return" checked"},18:function(l,n,a,e,t){var r,s=null!=n?n:l.nullContext||{},i=l.escapeExpression;return'<div class="d-inline mr-2">\n        <button class="btn btn-link d-inline-flex text-decoration-none collapsed py-1 px-2 rounded" type="button" data-toggle="collapse"\n                data-target="#'+i(a.replace.call(s,null!=n?n.id:n,"\\s","",{name:"replace",hash:{},data:t}))+'_children" aria-expanded="false" aria-controls="'+i(a.replace.call(s,null!=n?n.id:n,"\\s","",{name:"replace",hash:{},data:t}))+'_children">\n          <i class="material-icons md-18" data-listen="#'+i(a.replace.call(s,null!=n?n.id:n,"\\s","",{name:"replace",hash:{},data:t}))+'_children" data-event="hide.bs.collapse">expand_more</i>\n          <i class="material-icons md-18" data-listen="#'+i(a.replace.call(s,null!=n?n.id:n,"\\s","",{name:"replace",hash:{},data:t}))+'_children" data-event="show.bs.collapse" style="display: none;">expand_less</i>\n        </button>\n      </div>'+(null!=(r=a.unless.call(s,null!=n?n.selectable:n,{name:"unless",hash:{},fn:l.program(19,t,0),inverse:l.noop,data:t}))?r:"")},19:function(l,n,a,e,t){var r,s=null!=n?n:l.nullContext||{},i=l.escapeExpression;return'<div class="resource-group c-pointer d-inline rounded p-1'+(null!=(r=a.if.call(s,null!=n?n.opaque:n,{name:"if",hash:{},fn:l.program(20,t,0),inverse:l.noop,data:t}))?r:"")+'" data-group="'+i(l.lambda(null!=n?n.id:n,n))+'" data-name="'+i(a.either.call(s,null!=n?n.name:n,null!=n?n.title:n,{name:"either",hash:{},data:t}))+'">'},20:function(l,n,a,e,t){return" list-group-item-action"},22:function(l,n,a,e,t){return"font-weight-light "},24:function(l,n,a,e,t){return" d-inline"},26:function(l,n,a,e,t){var r;return null!=(r=a.unless.call(null!=n?n:l.nullContext||{},null!=n?n.selectable:n,{name:"unless",hash:{},fn:l.program(27,t,0),inverse:l.noop,data:t}))?r:""},27:function(l,n,a,e,t){return"</div>"},29:function(l,n,a,e,t){var r,s=null!=n?n:l.nullContext||{};return(null!=(r=a.if.call(s,null!=n?n.features:n,{name:"if",hash:{},fn:l.program(30,t,0),inverse:l.noop,data:t}))?r:"")+"\n      "+(null!=(r=a.if.call(s,null!=n?n.details:n,{name:"if",hash:{},fn:l.program(34,t,0),inverse:l.noop,data:t}))?r:"")},30:function(l,n,a,e,t){var r;return"<div>\n        "+(null!=(r=a.each.call(null!=n?n:l.nullContext||{},null!=n?n.features:n,{name:"each",hash:{},fn:l.program(31,t,0),inverse:l.noop,data:t}))?r:"")+"\n      </div>"},31:function(l,n,a,e,t){var r;return'<span class="badge badge-highlight badge-pill'+(null!=(r=a.unless.call(null!=n?n:l.nullContext||{},t&&t.last,{name:"unless",hash:{},fn:l.program(32,t,0),inverse:l.noop,data:t}))?r:"")+'">'+l.escapeExpression(l.lambda(n,n))+"</span>"},32:function(l,n,a,e,t){return" mr-1"},34:function(l,n,a,e,t){return"<small>"+l.escapeExpression(l.lambda(null!=n?n.details:n,n))+"</small>"},36:function(l,n,a,e,t){return'<div class="small d-flex align-items-center"><i class="material-icons small text-secondary mr-1" data-toggle="tooltip" data-html="true" title="<strong>Location</strong> of this resource.">my_location</i><span class="o-50 text-info small">'+l.escapeExpression(l.lambda(null!=n?n.location:n,n))+"</span></div>"},38:function(l,n,a,e,t){var r=l.lambda,s=l.escapeExpression;return'<i class="material-icons md-18 text-light bg-dark p-1 rounded" data-toggle="tooltip" data-html="true" title="<strong>Type:</strong> '+s(r(null!=n?n.type:n,n))+'">'+s(r(null!=n?n.icon:n,n))+"</i>"},40:function(l,n,a,e,t,r,s){var i,o=null!=n?n:l.nullContext||{},u=l.escapeExpression;return'<div id="'+u(a.replace.call(o,null!=n?n.id:n,"\\s","",{name:"replace",hash:{},data:t}))+'_children" data-group="'+u(l.lambda(null!=n?n.id:n,n))+'"\n                        class="w-100 list-group list-group-flush list-group-dark resource-list collapse'+(null!=(i=a.unless.call(o,null!=n?n.opaque:n,{name:"unless",hash:{},fn:l.program(41,t,0,r,s),inverse:l.noop,data:t}))?i:"")+(null!=(i=a.if.call(o,null!=n?n.expanded:n,{name:"if",hash:{},fn:l.program(43,t,0,r,s),inverse:l.noop,data:t}))?i:"")+'">\n    '+(null!=(i=a.each.call(o,null!=n?n.children:n,{name:"each",hash:{},fn:l.program(45,t,0,r,s),inverse:l.noop,data:t}))?i:"")+"\n  </div>"},41:function(l,n,a,e,t){return" bg-transparent"},43:function(l,n,a,e,t){return" show"},45:function(l,n,a,e,t,r,s){var i;return null!=(i=l.invokePartial(e.resource,n,{name:"resource",hash:{class:a.which.call(null!=n?n:l.nullContext||{},null!=s[1]?s[1].opaque:s[1],"","bg-transparent",{name:"which",hash:{},data:t}),simple:null!=s[1]?s[1].simple:s[1],selectable:null!=s[1]?s[1].selectable:s[1]},data:t,helpers:a,partials:e,decorators:l.decorators}))?i:""},47:function(l,n,a,e,t){return"</a>"},compiler:[7,">= 4.0.0"],main:function(l,n,a,e,t,r,s){var i,o=null!=n?n:l.nullContext||{};return(null!=(i=a.if.call(o,null!=n?n.children:n,{name:"if",hash:{},fn:l.program(1,t,0,r,s),inverse:l.program(3,t,0,r,s),data:t}))?i:"")+'\n  <div class="d-flex w-100 justify-content-between align-items-center'+(null!=(i=a.if.call(o,null!=n?n.children:n,{name:"if",hash:{},fn:l.program(11,t,0,r,s),inverse:l.noop,data:t}))?i:"")+'">\n    <div'+(null!=(i=a.if.call(o,null!=n?n.children:n,{name:"if",hash:{},fn:l.program(13,t,0,r,s),inverse:l.noop,data:t}))?i:"")+">"+(null!=(i=a.if.call(o,a.all.call(o,null!=n?n.selectable:n,null!=n?n.email:n,{name:"all",hash:{},data:t}),{name:"if",hash:{},fn:l.program(15,t,0,r,s),inverse:l.noop,data:t}))?i:"")+(null!=(i=a.if.call(o,null!=n?n.children:n,{name:"if",hash:{},fn:l.program(18,t,0,r,s),inverse:l.noop,data:t}))?i:"")+'<h6 class="'+(null!=(i=a.unless.call(o,null!=n?n.children:n,{name:"unless",hash:{},fn:l.program(22,t,0,r,s),inverse:l.noop,data:t}))?i:"")+"m-0"+(null!=(i=a.if.call(o,a.any.call(o,null!=n?n.selectable:n,null!=n?n.children:n,{name:"any",hash:{},data:t}),{name:"if",hash:{},fn:l.program(24,t,0,r,s),inverse:l.noop,data:t}))?i:"")+'">'+l.escapeExpression(a.either.call(o,null!=n?n.name:n,null!=n?n.title:n,{name:"either",hash:{},data:t}))+"</h6>"+(null!=(i=a.if.call(o,null!=n?n.children:n,{name:"if",hash:{},fn:l.program(26,t,0,r,s),inverse:l.noop,data:t}))?i:"")+(null!=(i=a.unless.call(o,null!=n?n.simple:n,{name:"unless",hash:{},fn:l.program(29,t,0,r,s),inverse:l.noop,data:t}))?i:"")+(null!=(i=a.if.call(o,null!=n?n.location:n,{name:"if",hash:{},fn:l.program(36,t,0,r,s),inverse:l.noop,data:t}))?i:"")+"</div>\n    "+(null!=(i=a.if.call(o,null!=n?n.icon:n,{name:"if",hash:{},fn:l.program(38,t,0,r,s),inverse:l.noop,data:t}))?i:"")+"\n  </div>"+(null!=(i=a.if.call(o,null!=n?n.children:n,{name:"if",hash:{},fn:l.program(40,t,0,r,s),inverse:l.noop,data:t}))?i:"")+(null!=(i=a.if.call(o,null!=n?n.children:n,{name:"if",hash:{},fn:l.program(27,t,0,r,s),inverse:l.program(47,t,0,r,s),data:t}))?i:"")+"\n"},usePartial:!0,useData:!0,useDepths:!0})}();