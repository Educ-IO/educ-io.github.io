!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).audit=n({1:function(n,e,l,t,a){var s,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(s=n.lambda(null!=e?o(e,"instructions"):e,e))?s:""},3:function(n,e,l,t,a){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2"><span><strong>Searchable</strong></span><span class="badge badge-danger p-2">'+n.escapeExpression(n.lambda(null!=e?s(e,"searchable"):e,e))+"</span></li>"},5:function(n,e,l,t,a){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2"><span>Shared with <strong>Anyone</strong></span><span class="badge badge-warning p-2">'+n.escapeExpression(n.lambda(null!=e?s(e,"anyone"):e,e))+"</span></li>"},7:function(n,e,l,t,a){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2"><span>Shared with <strong>Domains</strong></span><span class="badge badge-dark p-2">'+n.escapeExpression(n.lambda(null!=e?s(e,"domain"):e,e))+"</span></li>"},9:function(n,e,l,t,a){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2"><span>Shared with <strong>Groups</strong></span><span class="badge badge-dark p-2">'+n.escapeExpression(n.lambda(null!=e?s(e,"group"):e,e))+"</span></li>"},11:function(n,e,l,t,a){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2"><span>Shared with <strong>Users</strong></span><span class="badge badge-dark p-2">'+n.escapeExpression(n.lambda(null!=e?s(e,"user"):e,e))+"</span></li>"},13:function(n,e,l,t,a){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2 list-group-item-light"><span>Readable</span><span class="badge badge-secondary p-2">'+n.escapeExpression(n.lambda(null!=e?s(e,"read"):e,e))+"</span></li>"},15:function(n,e,l,t,a){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2 list-group-item-light"><span>Commentable</span><span class="badge badge-secondary p-2">'+n.escapeExpression(n.lambda(null!=e?s(e,"comment"):e,e))+"</span></li>"},17:function(n,e,l,t,a){var s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="list-group-item d-flex justify-content-between align-items-center px-3 py-2 list-group-item-light"><span>Writable</span><span class="badge badge-secondary p-2">'+n.escapeExpression(n.lambda(null!=e?s(e,"write"):e,e))+"</span></li>"},19:function(n,e,l,t,a){var s=n.lambda,o=n.escapeExpression,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center px-2 py-2">\n                <span><strong>'+o(s(null!=e?r(e,"value"):e,e))+'</strong></span>\n                <span class="badge badge-dark p-2" title="Number of items shared with this domain">'+o(s(null!=e?r(e,"count"):e,e))+"</span>\n              </li>"},21:function(n,e,l,t,a){var s=n.lambda,o=n.escapeExpression,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="list-group-item d-flex justify-content-between align-items-center px-2 py-2">\n                <span><strong>'+o(s(null!=e?r(e,"value"):e,e))+'</strong></span>\n                <span class="badge badge-light p-2" title="Number of items shared with this email address">'+o(s(null!=e?r(e,"count"):e,e))+"</span>\n              </li>"},23:function(n,e,l,t,a){var s,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(s=n.lambda(null!=e?o(e,"details"):e,e))?s:""},compiler:[8,">= 4.3.0"],main:function(n,e,l,t,a){var s,o=n.lambda,r=n.escapeExpression,i=null!=e?e:n.nullContext||{},p=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div id="'+r(o(null!=e?p(e,"id"):e,e))+'" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_options_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_options_title">'+r(o(null!=e?p(e,"title"):e,e))+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        '+(null!=(s=p(l,"if").call(i,null!=e?p(e,"instructions"):e,{name:"if",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:11,column:8},end:{line:11,column:53}}}))?s:"")+'\n        <ul class="list-group small">\n          '+(null!=(s=p(l,"exists").call(i,null!=e?p(e,"searchable"):e,{name:"exists",hash:{},fn:n.program(3,a,0),inverse:n.noop,data:a,loc:{start:{line:13,column:10},end:{line:13,column:234}}}))?s:"")+"\n          "+(null!=(s=p(l,"exists").call(i,null!=e?p(e,"anyone"):e,{name:"exists",hash:{},fn:n.program(5,a,0),inverse:n.noop,data:a,loc:{start:{line:14,column:10},end:{line:14,column:235}}}))?s:"")+"\n          "+(null!=(s=p(l,"exists").call(i,null!=e?p(e,"domain"):e,{name:"exists",hash:{},fn:n.program(7,a,0),inverse:n.noop,data:a,loc:{start:{line:15,column:10},end:{line:15,column:233}}}))?s:"")+"\n          "+(null!=(s=p(l,"exists").call(i,null!=e?p(e,"group"):e,{name:"exists",hash:{},fn:n.program(9,a,0),inverse:n.noop,data:a,loc:{start:{line:16,column:10},end:{line:16,column:230}}}))?s:"")+"\n          "+(null!=(s=p(l,"exists").call(i,null!=e?p(e,"user"):e,{name:"exists",hash:{},fn:n.program(11,a,0),inverse:n.noop,data:a,loc:{start:{line:17,column:10},end:{line:17,column:227}}}))?s:"")+"\n          "+(null!=(s=p(l,"exists").call(i,null!=e?p(e,"read"):e,{name:"exists",hash:{},fn:n.program(13,a,0),inverse:n.noop,data:a,loc:{start:{line:18,column:10},end:{line:18,column:228}}}))?s:"")+"\n          "+(null!=(s=p(l,"exists").call(i,null!=e?p(e,"write"):e,{name:"exists",hash:{},fn:n.program(15,a,0),inverse:n.noop,data:a,loc:{start:{line:19,column:10},end:{line:19,column:235}}}))?s:"")+"\n          "+(null!=(s=p(l,"exists").call(i,null!=e?p(e,"user"):e,{name:"exists",hash:{},fn:n.program(17,a,0),inverse:n.noop,data:a,loc:{start:{line:20,column:10},end:{line:20,column:229}}}))?s:"")+'\n\t\t\t\t</ul>\n        <p>\n          <button class="btn btn-info ml-2 mt-3" type="button" data-toggle="collapse" data-target="#mimeTypes" aria-expanded="false" aria-controls="mimeTypes">\n            By Domain / Email Address\n          </button>\n        </p>\n        <div class="collapse" id="mimeTypes">\n          <div class="card card-body">\n            <ul class="list-group small">\n              '+(null!=(s=p(l,"each").call(i,null!=e?p(e,"domains"):e,{name:"each",hash:{},fn:n.program(19,a,0),inverse:n.noop,data:a,loc:{start:{line:30,column:14},end:{line:33,column:28}}}))?s:"")+"\n              "+(null!=(s=p(l,"each").call(i,null!=e?p(e,"emails"):e,{name:"each",hash:{},fn:n.program(21,a,0),inverse:n.noop,data:a,loc:{start:{line:34,column:14},end:{line:37,column:28}}}))?s:"")+"\n            </ul>\n          </div>\n        </div>\n\t\t\t\t"+(null!=(s=p(l,"if").call(i,null!=e?p(e,"details"):e,{name:"if",hash:{},fn:n.program(23,a,0),inverse:n.noop,data:a,loc:{start:{line:41,column:4},end:{line:41,column:39}}}))?s:"")+'\n\t\t\t</div>\n      <div class="modal-footer">\n\t\t\t\t<button type="button" class="btn btn-secondary btn-outline-secondary btn-flat" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},useData:!0})}();