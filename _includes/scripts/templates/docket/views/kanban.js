!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).kanban=a({1:function(a,n,l,e,r){var i;return null!=(i=a.invokePartial(e.name,n,{name:"name",data:r,helpers:l,partials:e,decorators:a.decorators}))?i:""},3:function(a,n,l,e,r){return'id="'+a.escapeExpression(a.lambda(null!=n?n.id:n,n))+'" '},5:function(a,n,l,e,r,i,t){var s,o=null!=n?n:a.nullContext||{},u=a.lambda,d=a.escapeExpression;return'  \t<div class="px-1 px-xl-2 py-1 py-xl-2'+(null!=(s=l.if.call(o,null!=n?n.size:n,{name:"if",hash:{},fn:a.program(6,r,0,i,t),inverse:a.program(8,r,0,i,t),data:r}))?s:"")+'">\n      <div class="card">\n        <div class="card-header'+(null!=(s=l.if.call(o,null!=n?n.header:n,{name:"if",hash:{},fn:a.program(15,r,0,i,t),inverse:a.noop,data:r}))?s:"")+(null!=(s=l.if.call(o,null!=n?n.icon:n,{name:"if",hash:{},fn:a.program(20,r,0,i,t),inverse:a.noop,data:r}))?s:"")+'"><h5 class="card-title mb-0">'+d(u(null!=n?n.name:n,n))+"</h5>"+(null!=(s=l.if.call(o,null!=n?n.icon:n,{name:"if",hash:{},fn:a.program(22,r,0,i,t),inverse:a.noop,data:r}))?s:"")+'</div>\n        <div class="card-body'+(null!=(s=l.if.call(o,null!=n?n.details:n,{name:"if",hash:{},fn:a.program(24,r,0,i,t),inverse:a.noop,data:r}))?s:"")+' pb-3 px-3" data-droppable="true" data-status="'+d(u(null!=n?n.value:n,n))+'" data-display-editable="true" data-display-simple="true"'+(null!=(s=l.if.call(o,null!=n?n.forward:n,{name:"if",hash:{},fn:a.program(26,r,0,i,t),inverse:a.noop,data:r}))?s:"")+(null!=(s=l.if.call(o,null!=n?n.backward:n,{name:"if",hash:{},fn:a.program(28,r,0,i,t),inverse:a.noop,data:r}))?s:"")+(null!=(s=l.if.call(o,null!=n?n.wide:n,{name:"if",hash:{},fn:a.program(30,r,0,i,t),inverse:a.noop,data:r}))?s:"")+">\n          "+(null!=(s=l.if.call(o,null!=n?n.details:n,{name:"if",hash:{},fn:a.program(32,r,0,i,t),inverse:a.noop,data:r}))?s:"")+'\n          <hr class="'+(null!=(s=l.if.call(o,null!=n?n.details:n,{name:"if",hash:{},fn:a.program(34,r,0,i,t),inverse:a.program(36,r,0,i,t),data:r}))?s:"")+' mb-0 divider" data-divider="true">\n          '+(null!=(s=l.if.call(o,null!=n?n.items:n,{name:"if",hash:{},fn:a.program(38,r,0,i,t),inverse:a.noop,data:r}))?s:"")+"\n        </div>\n      </div>\n    </div>\n"},6:function(a,n,l,e,r){return" "+a.escapeExpression(a.lambda(null!=n?n.size:n,n))},8:function(a,n,l,e,r,i,t){var s;return null!=(s=l.if.call(null!=n?n:a.nullContext||{},null!=t[1]?t[1].sizes:t[1],{name:"if",hash:{},fn:a.program(9,r,0,i,t),inverse:a.noop,data:r}))?s:""},9:function(a,n,l,e,r,i,t){var s;return" "+(null!=(s=l.each.call(null!=n?n:a.nullContext||{},null!=t[1]?t[1].sizes:t[1],{name:"each",hash:{},fn:a.program(10,r,0,i,t),inverse:a.noop,data:r}))?s:"")},10:function(a,n,l,e,r){var i,t=null!=n?n:a.nullContext||{};return(null!=(i=l.is.call(t,r&&r.index,"!=",0,{name:"is",hash:{},fn:a.program(11,r,0),inverse:a.noop,data:r}))?i:"")+"col-"+(null!=(i=l.is.call(t,r&&r.key,"!=","xs",{name:"is",hash:{},fn:a.program(13,r,0),inverse:a.noop,data:r}))?i:"")+a.escapeExpression(a.lambda(n,n))},11:function(a,n,l,e,r){return" "},13:function(a,n,l,e,r){return a.escapeExpression(a.lambda(r&&r.key,n))+"-"},15:function(a,n,l,e,r){var i;return" text-"+(null!=(i=l.if.call(null!=n?n:a.nullContext||{},null!=n?n.text:n,{name:"if",hash:{},fn:a.program(16,r,0),inverse:a.program(18,r,0),data:r}))?i:"")+" bg-"+a.escapeExpression(a.lambda(null!=n?n.header:n,n))},16:function(a,n,l,e,r){return a.escapeExpression(a.lambda(null!=n?n.text:n,n))},18:function(a,n,l,e,r){return"white"},20:function(a,n,l,e,r){return" d-flex justify-content-between align-items-center"},22:function(a,n,l,e,r){return'<i class="material-icons mr-1 d-block o-25">'+a.escapeExpression(a.lambda(null!=n?n.icon:n,n))+"</i>"},24:function(a,n,l,e,r){return" pt-2"},26:function(a,n,l,e,r){return' data-display-forward="'+a.escapeExpression(a.lambda(null!=n?n.forward:n,n))+'"'},28:function(a,n,l,e,r){return' data-display-backward="'+a.escapeExpression(a.lambda(null!=n?n.backward:n,n))+'"'},30:function(a,n,l,e,r){return' data-display-wide="'+a.escapeExpression(a.lambda(null!=n?n.wide:n,n))+'"'},32:function(a,n,l,e,r){var i;return null!=(i=a.lambda(null!=n?n.details:n,n))?i:""},34:function(a,n,l,e,r){return"mt-1 mt-xl-2"},36:function(a,n,l,e,r){return"mt-0"},38:function(a,n,l,e,r,i,t){var s;return null!=(s=l.each.call(null!=n?n:a.nullContext||{},null!=n?n.items:n,{name:"each",hash:{},fn:a.program(39,r,0,i,t),inverse:a.noop,data:r}))?s:""},39:function(a,n,l,e,r,i,t){var s;return null!=(s=a.invokePartial(e.item,n,{name:"item",hash:{backward:null!=t[1]?t[1].backward:t[1],forward:null!=t[1]?t[1].forward:t[1],wide:null!=t[1]?t[1].wide:t[1],simple:!0,editable:!0},data:r,helpers:l,partials:e,decorators:a.decorators}))?s:""},41:function(a,n,l,e,r){var i;return null!=(i=a.invokePartial(e.action,n,{name:"action",hash:{action:null!=n?n.action:n,id:null!=n?n.id:n},data:r,helpers:l,partials:e,decorators:a.decorators}))?i:""},compiler:[7,">= 4.0.0"],main:function(a,n,l,e,r,i,t){var s,o=null!=n?n:a.nullContext||{};return(null!=(s=l.if.call(o,null!=n?n.name:n,{name:"if",hash:{},fn:a.program(1,r,0,i,t),inverse:a.noop,data:r}))?s:"")+"<div "+(null!=(s=l.if.call(o,null!=n?n.id:n,{name:"if",hash:{},fn:a.program(3,r,0,i,t),inverse:a.noop,data:r}))?s:"")+'class="items-holder border-exagerate container-fluid pt-lg-1 mvh-100">\n  <div class="row m-0 pt-2">\n'+(null!=(s=l.each.call(o,null!=n?n.status:n,{name:"each",hash:{},fn:a.program(5,r,0,i,t),inverse:a.noop,data:r}))?s:"")+"  </div>\n</div>\n"+(null!=(s=l.if.call(o,null!=n?n.action:n,{name:"if",hash:{},fn:a.program(41,r,0,i,t),inverse:a.noop,data:r}))?s:"")+"\n"},usePartial:!0,useData:!0,useDepths:!0})}();