!function(){var l=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).results=l({1:function(l,t,n,a,s){return'<li class="list-group-item">Folders: <strong>'+l.escapeExpression(l.lambda(null!=t?t.folders:t,t))+"</strong></li>"},3:function(l,t,n,a,s){return'<li class="list-group-item">Files: <strong>'+l.escapeExpression(l.lambda(null!=t?t.files:t,t))+"</strong></li>"},5:function(l,t,n,a,s){return'<li class="list-group-item">Total Size of Files: <strong>'+l.escapeExpression(n.formatBytes.call(null!=t?t:l.nullContext||{},null!=t?t.size:t,{name:"formatBytes",hash:{},data:s}))+"</strong></li>"},7:function(l,t,n,a,s){var e;return'<p>\n          <button class="btn btn-info ml-2 mt-3" type="button" data-toggle="collapse" data-target="#mimeTypes" aria-expanded="false" aria-controls="mimeTypes">\n            By Mime Type\n          </button>\n        </p>\n        <div class="collapse" id="mimeTypes">\n          <div class="card card-body">\n            <ul class="list-group">\n              '+(null!=(e=n.each.call(null!=t?t:l.nullContext||{},null!=t?t.mime:t,{name:"each",hash:{},fn:l.program(8,s,0),inverse:l.noop,data:s}))?e:"")+"\n            </ul>\n          </div>\n        </div>"},8:function(l,t,n,a,s){var e=l.lambda,i=l.escapeExpression,o=null!=t?t:l.nullContext||{};return'<li class="list-group-item">\n                <strong>'+i(e(null!=t?t.mime:t,t))+'</strong>\n                <span class="badge badge-secondary ml-1 float-right" title="'+i(e(null!=t?t.files:t,t))+' Files/s of this type">'+i(e(null!=t?t.files:t,t))+'&nbsp;&#9922;</span>\n                <span class="badge badge-light ml-1 float-right" title="'+i(n.formatBytes.call(o,null!=t?t.size:t,{name:"formatBytes",hash:{},data:s}))+' of this type">'+i(n.formatBytes.call(o,null!=t?t.size:t,{name:"formatBytes",hash:{},data:s}))+"</span>\n              </li>"},10:function(l,t,n,a,s){var e;return null!=(e=l.lambda(null!=t?t.details:t,t))?e:""},compiler:[7,">= 4.0.0"],main:function(l,t,n,a,s){var e,i=l.lambda,o=l.escapeExpression,r=null!=t?t:l.nullContext||{};return'<div id="'+o(i(null!=t?t.id:t,t))+'" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_options_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_options_title">'+o(i(null!=t?t.title:t,t))+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n\t\t\t\t<ul class="list-group">\n  \t\t\t\t'+(null!=(e=n.exists.call(r,null!=t?t.folders:t,{name:"exists",hash:{},fn:l.program(1,s,0),inverse:l.noop,data:s}))?e:"")+"\n  \t\t\t\t"+(null!=(e=n.exists.call(r,null!=t?t.files:t,{name:"exists",hash:{},fn:l.program(3,s,0),inverse:l.noop,data:s}))?e:"")+"\n  \t\t\t\t"+(null!=(e=n.exists.call(r,null!=t?t.size:t,{name:"exists",hash:{},fn:l.program(5,s,0),inverse:l.noop,data:s}))?e:"")+"\n\t\t\t\t</ul>\n        "+(null!=(e=n.if.call(r,null!=t?t.mime:t,{name:"if",hash:{},fn:l.program(7,s,0),inverse:l.noop,data:s}))?e:"")+"\n\t\t\t\t"+(null!=(e=n.if.call(r,null!=t?t.details:t,{name:"if",hash:{},fn:l.program(10,s,0),inverse:l.noop,data:s}))?e:"")+'\n\t\t\t</div>\n      <div class="modal-footer">\n\t\t\t\t<button type="button" class="btn btn-secondary btn-flat" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},useData:!0})}();