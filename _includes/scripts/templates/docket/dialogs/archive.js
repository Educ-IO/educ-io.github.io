!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).archive=n({1:function(n,t,e,l,a){var o,r=n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]};return"<form>\n"+(null!=(o=r(e,"if").call(null!=t?t:n.nullContext||{},null!=t?r(t,"years"):t,{name:"if",hash:{},fn:n.program(2,a,0),inverse:n.noop,data:a,loc:{start:{line:3,column:2},end:{line:28,column:9}}}))?o:"")+"</form>\n"},2:function(n,t,e,l,a){var o,r=n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]};return'  <table class="table">\n    <thead>\n      <tr>\n        <th scope="col">Year</th>\n        <th scope="col">Complete</th>\n        <th scope="col">Incomplete</th>\n        <th scope="col"></th>\n      </tr>\n    </thead>\n    <tbody data-output-field="Archive">\n'+(null!=(o=r(e,"each").call(null!=t?t:n.nullContext||{},null!=t?r(t,"years"):t,{name:"each",hash:{},fn:n.program(3,a,0),inverse:n.noop,data:a,loc:{start:{line:14,column:6},end:{line:25,column:20}}}))?o:"")+"\n    </tbody>\n  </table>\n"},3:function(n,t,e,l,a){var o=n.lambda,r=n.escapeExpression,c=n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]};return'      <tr>\n        <th scope="row">'+r(o(a&&c(a,"key"),t))+"</th>\n        <td>"+r(o(null!=t?c(t,"complete"):t,t))+"</td>\n        <td>"+r(o(null!=t?c(t,"incomplete"):t,t))+'</td>\n        <td>\n          <div class="custom-control custom-checkbox">\n            <input id="archive_'+r(o(a&&c(a,"key"),t))+'" name="archive_'+r(o(a&&c(a,"key"),t))+'" data-output-name="'+r(o(a&&c(a,"key"),t))+'" data-output-type="boolean" type="checkbox" class="custom-control-input" tabindex='+r(c(e,"add").call(null!=t?t:n.nullContext||{},!0,1,a&&c(a,"index"),{name:"add",hash:{},data:a,loc:{start:{line:21,column:174},end:{line:21,column:195}}}))+'>\n            <label class="custom-control-label" for="archive_'+r(o(a&&c(a,"key"),t))+'">Archive? </label>\t\n          </div>\n        </td>\n      </tr>'},compiler:[8,">= 4.3.0"],main:function(n,t,e,l,a){var o,r=n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]};return null!=(o=n.invokePartial(r(l,"dialog"),t,{name:"dialog",hash:{tabindex:r(e,"length").call(null!=t?t:n.nullContext||{},null!=t?r(t,"years"):t,{name:"length",hash:{},data:a,loc:{start:{line:1,column:55},end:{line:1,column:69}}}),action:"Archive",class:"modal-lg"},fn:n.program(1,a,0),inverse:n.noop,data:a,helpers:e,partials:l,decorators:n.decorators}))?o:""},usePartial:!0,useData:!0})}();