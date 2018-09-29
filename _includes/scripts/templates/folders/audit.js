!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).audit=n({1:function(n,a,e,s,l){var t;return null!=(t=n.lambda(null!=a?a.instructions:a,a))?t:""},3:function(n,a,e,s,l){return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2"><span><strong>Searchable</strong></span><span class="badge badge-danger p-2">'+n.escapeExpression(n.lambda(null!=a?a.searchable:a,a))+"</span></li>"},5:function(n,a,e,s,l){return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2"><span>Shared with <strong>Anyone</strong></span><span class="badge badge-warning p-2">'+n.escapeExpression(n.lambda(null!=a?a.anyone:a,a))+"</span></li>"},7:function(n,a,e,s,l){return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2"><span>Shared with <strong>Domains</strong></span><span class="badge badge-dark p-2">'+n.escapeExpression(n.lambda(null!=a?a.domain:a,a))+"</span></li>"},9:function(n,a,e,s,l){return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2"><span>Shared with <strong>Groups</strong></span><span class="badge badge-dark p-2">'+n.escapeExpression(n.lambda(null!=a?a.group:a,a))+"</span></li>"},11:function(n,a,e,s,l){return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2"><span>Shared with <strong>Users</strong></span><span class="badge badge-dark p-2">'+n.escapeExpression(n.lambda(null!=a?a.user:a,a))+"</span></li>"},13:function(n,a,e,s,l){return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2 list-group-item-light"><span>Readable</span><span class="badge badge-secondary p-2">'+n.escapeExpression(n.lambda(null!=a?a.read:a,a))+"</span></li>"},15:function(n,a,e,s,l){return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2 list-group-item-light"><span>Commentable</span><span class="badge badge-secondary p-2">'+n.escapeExpression(n.lambda(null!=a?a.comment:a,a))+"</span></li>"},17:function(n,a,e,s,l){return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2 list-group-item-light"><span>Writable</span><span class="badge badge-secondary p-2">'+n.escapeExpression(n.lambda(null!=a?a.write:a,a))+"</span></li>"},19:function(n,a,e,s,l){var t=n.lambda,i=n.escapeExpression;return'<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center px-2 py-2">\n                <span><strong>'+i(t(null!=a?a.value:a,a))+'</strong></span>\n                <span class="badge badge-dark p-2" title="Number of items shared with this domain">'+i(t(null!=a?a.count:a,a))+"</span>\n              </li>"},21:function(n,a,e,s,l){var t=n.lambda,i=n.escapeExpression;return'<li class="list-group-item d-flex justify-content-between align-items-center px-2 py-2">\n                <span><strong>'+i(t(null!=a?a.value:a,a))+'</strong></span>\n                <span class="badge badge-light p-2" title="Number of items shared with this email address">'+i(t(null!=a?a.count:a,a))+"</span>\n              </li>"},23:function(n,a,e,s,l){var t;return null!=(t=n.lambda(null!=a?a.details:a,a))?t:""},compiler:[7,">= 4.0.0"],main:function(n,a,e,s,l){var t,i=n.lambda,r=n.escapeExpression,o=null!=a?a:n.nullContext||{};return'<div id="'+r(i(null!=a?a.id:a,a))+'" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_options_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_options_title">'+r(i(null!=a?a.title:a,a))+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        '+(null!=(t=e.if.call(o,null!=a?a.instructions:a,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?t:"")+'\n        <ul class="list-group small">\n          '+(null!=(t=e.exists.call(o,null!=a?a.searchable:a,{name:"exists",hash:{},fn:n.program(3,l,0),inverse:n.noop,data:l}))?t:"")+"\n          "+(null!=(t=e.exists.call(o,null!=a?a.anyone:a,{name:"exists",hash:{},fn:n.program(5,l,0),inverse:n.noop,data:l}))?t:"")+"\n          "+(null!=(t=e.exists.call(o,null!=a?a.domain:a,{name:"exists",hash:{},fn:n.program(7,l,0),inverse:n.noop,data:l}))?t:"")+"\n          "+(null!=(t=e.exists.call(o,null!=a?a.group:a,{name:"exists",hash:{},fn:n.program(9,l,0),inverse:n.noop,data:l}))?t:"")+"\n          "+(null!=(t=e.exists.call(o,null!=a?a.user:a,{name:"exists",hash:{},fn:n.program(11,l,0),inverse:n.noop,data:l}))?t:"")+"\n          "+(null!=(t=e.exists.call(o,null!=a?a.read:a,{name:"exists",hash:{},fn:n.program(13,l,0),inverse:n.noop,data:l}))?t:"")+"\n          "+(null!=(t=e.exists.call(o,null!=a?a.write:a,{name:"exists",hash:{},fn:n.program(15,l,0),inverse:n.noop,data:l}))?t:"")+"\n          "+(null!=(t=e.exists.call(o,null!=a?a.user:a,{name:"exists",hash:{},fn:n.program(17,l,0),inverse:n.noop,data:l}))?t:"")+'\n\t\t\t\t</ul>\n        <p>\n          <button class="btn btn-info ml-2 mt-3" type="button" data-toggle="collapse" data-target="#mimeTypes" aria-expanded="false" aria-controls="mimeTypes">\n            By Domain / Email Address\n          </button>\n        </p>\n        <div class="collapse" id="mimeTypes">\n          <div class="card card-body">\n            <ul class="list-group small">\n              '+(null!=(t=e.each.call(o,null!=a?a.domains:a,{name:"each",hash:{},fn:n.program(19,l,0),inverse:n.noop,data:l}))?t:"")+"\n              "+(null!=(t=e.each.call(o,null!=a?a.emails:a,{name:"each",hash:{},fn:n.program(21,l,0),inverse:n.noop,data:l}))?t:"")+"\n            </ul>\n          </div>\n        </div>\n\t\t\t\t"+(null!=(t=e.if.call(o,null!=a?a.details:a,{name:"if",hash:{},fn:n.program(23,l,0),inverse:n.noop,data:l}))?t:"")+'\n\t\t\t</div>\n      <div class="modal-footer">\n\t\t\t\t<button type="button" class="btn btn-secondary btn-outline-secondary btn-flat" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},useData:!0})}();