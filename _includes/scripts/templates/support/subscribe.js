!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).subscribe=n({1:function(n,e,l,a,t){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'id="'+n.escapeExpression(n.lambda(null!=e?o(e,"id"):e,e))+'" '},3:function(n,e,l,a,t){var o,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(o=n.lambda(null!=e?s(e,"message"):e,e))?o:""},5:function(n,e,l,a,t){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<small id="os0_help" class="form-text text-muted">'+n.escapeExpression(n.lambda(null!=e?o(e,"details"):e,e))+"</small>"},compiler:[8,">= 4.3.0"],main:function(n,e,l,a,t){var o,s=null!=e?e:n.nullContext||{},i=n.lambda,r=n.escapeExpression,d=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<div "+(null!=(o=d(l,"if").call(s,null!=e?d(e,"id"):e,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t,loc:{start:{line:1,column:5},end:{line:1,column:34}}}))?o:"")+'class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_text_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_text_title">'+r(i(null!=e?d(e,"title"):e,e))+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        '+(null!=(o=d(l,"if").call(s,null!=e?d(e,"message"):e,{name:"if",hash:{},fn:n.program(3,t,0),inverse:n.noop,data:t,loc:{start:{line:11,column:8},end:{line:11,column:43}}}))?o:"")+'\n        <form action="https://www.paypal.com/cgi-bin/webscr" class="subscribe" method="post" target="_top">\n          <input type="hidden" name="cmd" value="_s-xclick">\n          <input type="hidden" name="hosted_button_id" value="'+r(i(null!=e?d(e,"button"):e,e))+'">\n          <input id="on0" type="hidden" name="on0" value="'+r(i(null!=e?d(e,"data"):e,e))+'">\n          <div class="form-group">\n            <label class="font-weight-bold" for="os0">'+r(i(null!=e?d(e,"data"):e,e))+'</label>\n            <input id="os0" type="text" name="os0" class="form-control form-control-lg" maxlength="200" aria-describedby="os0_help" placeholder="Type here ...">\n            '+(null!=(o=d(l,"if").call(s,null!=e?d(e,"details"):e,{name:"if",hash:{},fn:n.program(5,t,0),inverse:n.noop,data:t,loc:{start:{line:19,column:12},end:{line:19,column:103}}}))?o:"")+'\n          </div>\n          <p class="text-center">\n            <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">  \n          </p>\n          <img border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" alt="">\n        </form>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},useData:!0})}();