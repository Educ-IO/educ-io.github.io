!function(){var t=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).results=t({1:function(t,l,n,a,s){var i;return null!=(i=t.lambda(null!=l?l.details:l,l))?i:""},compiler:[7,">= 4.0.0"],main:function(t,l,n,a,s){var i,e=t.lambda,o=t.escapeExpression;return'<div id="'+o(e(null!=l?l.id:l,l))+'" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_options_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_options_title">'+o(e(null!=l?l.title:l,l))+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n\t\t\t\t<ul class="list-group">\n  \t\t\t\t<li class="list-group-item">Folders: <strong>'+o(e(null!=l?l.folders:l,l))+'</strong></li>\n  \t\t\t\t<li class="list-group-item">Files: <strong>'+o(e(null!=l?l.files:l,l))+'</strong></li>\n  \t\t\t\t<li class="list-group-item">Total Size of Files: <strong>'+o(e(null!=l?l.size:l,l))+"</strong></li>\n\t\t\t\t</ul>\n\t\t\t\t"+(null!=(i=n.if.call(null!=l?l:t.nullContext||{},null!=l?l.details:l,{name:"if",hash:{},fn:t.program(1,s,0),inverse:t.noop,data:s}))?i:"")+'\n\t\t\t</div>\n      <div class="modal-footer">\n\t\t\t\t<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},useData:!0})}();