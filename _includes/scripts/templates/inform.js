!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).inform=a({1:function(a,l,n,e,t){return'id="'+a.escapeExpression(a.lambda(null!=l?l.id:l,l))+'" '},3:function(a,l,n,e,t){return a.escapeExpression(a.lambda(null!=l?l.title:l,l))},5:function(a,l,n,e,t){return"Details"},7:function(a,l,n,e,t){var d;return'<pre><code class="small">'+(null!=(d=a.lambda(null!=l?l.code:l,l))?d:"")+"</code></pre>"},9:function(a,l,n,e,t){var d;return"<p>"+(null!=(d=a.lambda(null!=l?l.details:l,l))?d:"")+"</p>"},compiler:[7,">= 4.0.0"],main:function(a,l,n,e,t){var d,i=null!=l?l:a.nullContext||{};return"<div "+(null!=(d=n.if.call(i,null!=l?l.id:l,{name:"if",hash:{},fn:a.program(1,t,0),inverse:a.noop,data:t}))?d:"")+'class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_confirm_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_confirm_title">'+(null!=(d=n.if.call(i,null!=l?l.title:l,{name:"if",hash:{},fn:a.program(3,t,0),inverse:a.program(5,t,0),data:t}))?d:"")+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        '+(null!=(d=n.if.call(i,null!=l?l.code:l,{name:"if",hash:{},fn:a.program(7,t,0),inverse:a.program(9,t,0),data:t}))?d:"")+'\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary btn-outline-secondary btn-flat" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},useData:!0})}();