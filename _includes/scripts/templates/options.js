!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).options=n({1:function(n,a,l,e,t){var o;return"<p>"+(null!=(o=n.lambda(null!=a?a.instructions:a,a))?o:"")+"</p>"},3:function(n,a,l,e,t){return" flex-wrap"},5:function(n,a,l,e,t,o,i){var s,d=n.lambda,r=n.escapeExpression,u=null!=a?a:n.nullContext||{};return'          <div class="input-group col-md-12 col-lg-8 col-xl-6 p-1 no-gutters">\n            <input data-field="'+r(d(t&&t.index,a))+'" type="text" class="form-control disabled" value="'+(null!=(s=l.if.call(u,null!=a?a.name:a,{name:"if",hash:{},fn:n.program(6,t,0,o,i),inverse:n.program(8,t,0,o,i),data:t}))?s:"")+'" disabled>\n            <div class="input-group-append">\n              <button id="'+r(d(null!=i[1]?i[1].id:i[1],a))+"_"+r(d(t&&t.index,a))+'_btn" type="button" class="btn btn-secondary dropdown-toggle mb-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+(null!=(s=l.if.call(u,null!=a?a.current:a,{name:"if",hash:{},fn:n.program(10,t,0,o,i),inverse:n.program(12,t,0,o,i),data:t}))?s:"")+'</button>\n              <div class="dropdown-menu dropdown-menu-right" aria-label="'+r(d(null!=i[1]?i[1].choices_label:i[1],a))+'">\n'+(null!=(s=l.each.call(u,null!=i[1]?i[1].choices:i[1],{name:"each",hash:{},fn:n.program(14,t,0,o,i),inverse:n.noop,data:t}))?s:"")+"              </div>\n            </div>\n          </div>\n"},6:function(n,a,l,e,t){return n.escapeExpression(n.lambda(null!=a?a.name:a,a))},8:function(n,a,l,e,t){return n.escapeExpression(n.lambda(a,a))},10:function(n,a,l,e,t){return n.escapeExpression(n.lambda(null!=a?a.current:a,a))},12:function(n,a,l,e,t){return"Select"},14:function(n,a,l,e,t){var o;return"                "+(null!=(o=l.if.call(null!=a?a:n.nullContext||{},a,{name:"if",hash:{},fn:n.program(15,t,0),inverse:n.noop,data:t}))?o:"")+"\n"},15:function(n,a,l,e,t){var o,i=null!=a?a:n.nullContext||{};return'<a class="dropdown-item" href="#" data-field="'+n.escapeExpression(n.lambda(t&&t.index,a))+'"'+(null!=(o=l.if.call(i,null!=a?a.desc:a,{name:"if",hash:{},fn:n.program(16,t,0),inverse:n.noop,data:t}))?o:"")+">"+(null!=(o=l.if.call(i,null!=a?a.name:a,{name:"if",hash:{},fn:n.program(6,t,0),inverse:n.program(8,t,0),data:t}))?o:"")+"</a>"},16:function(n,a,l,e,t){return' data-toggle="tooltip" data-placement="left" title="'+n.escapeExpression(n.lambda(null!=a?a.desc:a,a))+'"'},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t,o,i){var s,d=n.lambda,r=n.escapeExpression,u=null!=a?a:n.nullContext||{};return'<div id="'+r(d(null!=a?a.id:a,a))+'" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_options_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_options_title">'+r(d(null!=a?a.title:a,a))+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        '+(null!=(s=l.if.call(u,null!=a?a.instructions:a,{name:"if",hash:{},fn:n.program(1,t,0,o,i),inverse:n.noop,data:t}))?s:"")+'\n        <div class="d-flex flex-row'+(null!=(s=l.if.call(u,null!=a?a.inline:a,{name:"if",hash:{},fn:n.program(3,t,0,o,i),inverse:n.noop,data:t}))?s:"")+'">\n'+(null!=(s=l.each.call(u,null!=a?a.list:a,{name:"each",hash:{},fn:n.program(5,t,0,o,i),inverse:n.noop,data:t}))?s:"")+'        </div>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-primary" data-dismiss="modal">'+r(d(null!=a?a.action:a,a))+'</button>\n        <button type="button" class="btn btn-secondary btn-flat" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},useData:!0,useDepths:!0})}();