!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).confirm=n({1:function(n,a,l,e,t){return'id="'+n.escapeExpression(n.lambda(null!=a?a.id:a,a))+'" '},3:function(n,a,l,e,t){return n.escapeExpression(n.lambda(null!=a?a.title:a,a))},5:function(n,a,l,e,t){return"Are you sure?"},7:function(n,a,l,e,t){var s,i=null!=a?a:n.nullContext||{};return(null!=(s=l.unless.call(i,l.startsWith.call(i,null!=a?a.message:a,"<p>",{name:"startsWith",hash:{},data:t}),{name:"unless",hash:{},fn:n.program(8,t,0),inverse:n.noop,data:t}))?s:"")+(null!=(s=n.lambda(null!=a?a.message:a,a))?s:"")+(null!=(s=l.unless.call(i,l.startsWith.call(i,null!=a?a.message:a,"<p>",{name:"startsWith",hash:{},data:t}),{name:"unless",hash:{},fn:n.program(10,t,0),inverse:n.noop,data:t}))?s:"")},8:function(n,a,l,e,t){return"<p>"},10:function(n,a,l,e,t){return"</p>"},12:function(n,a,l,e,t){return n.escapeExpression(n.lambda(null!=a?a.close:a,a))},14:function(n,a,l,e,t){return"Close"},16:function(n,a,l,e,t){return n.escapeExpression(n.lambda(null!=a?a.action:a,a))},18:function(n,a,l,e,t){return"Confirm"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){var s,i=null!=a?a:n.nullContext||{};return"<div "+(null!=(s=l.if.call(i,null!=a?a.id:a,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?s:"")+'class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_confirm_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_confirm_title">'+(null!=(s=l.if.call(i,null!=a?a.title:a,{name:"if",hash:{},fn:n.program(3,t,0),inverse:n.program(5,t,0),data:t}))?s:"")+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">'+(null!=(s=l.if.call(i,null!=a?a.message:a,{name:"if",hash:{},fn:n.program(7,t,0),inverse:n.noop,data:t}))?s:"")+'</div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary btn-outline-secondary btn-flat waves-effect" data-dismiss="modal">'+(null!=(s=l.if.call(i,null!=a?a.close:a,{name:"if",hash:{},fn:n.program(12,t,0),inverse:n.program(14,t,0),data:t}))?s:"")+'</button>\n        <button type="button" class="btn btn-primary waves-effect" data-dismiss="modal">'+(null!=(s=l.if.call(i,null!=a?a.action:a,{name:"if",hash:{},fn:n.program(16,t,0),inverse:n.program(18,t,0),data:t}))?s:"")+"</button>\n      </div>\n    </div>\n  </div>\n</div>\n"},useData:!0})}();