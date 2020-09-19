!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).rows=n({1:function(n,l,e,t,a){var o,r=null!=l?l:n.nullContext||{},s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<tr id="'+(null!=(o=s(e,"if").call(r,null!=l?s(l,"safe"):l,{name:"if",hash:{},fn:n.program(2,a,0),inverse:n.program(4,a,0),data:a,loc:{start:{line:1,column:22},end:{line:1,column:80}}}))?o:"")+'">\n  <td class="align-middle">'+(null!=(o=s(e,"exists").call(r,null!=l?s(l,"id"):l,{name:"exists",hash:{},fn:n.program(7,a,0),inverse:n.noop,data:a,loc:{start:{line:2,column:27},end:{line:4,column:15}}}))?o:"")+'/td>\n  <td class="align-middle">'+(null!=(o=s(e,"present").call(r,null!=l?s(l,"when"):l,{name:"present",hash:{},fn:n.program(9,a,0),inverse:n.noop,data:a,loc:{start:{line:5,column:27},end:{line:7,column:15}}}))?o:"")+'</td>\n  <td class="align-middle py-2">'+(null!=(o=s(e,"present").call(r,null!=l?s(l,"what"):l,{name:"present",hash:{},fn:n.program(11,a,0),inverse:n.noop,data:a,loc:{start:{line:8,column:32},end:{line:12,column:15}}}))?o:"")+'</td>\n  <td class="align-middle">'+(null!=(o=s(e,"present").call(r,null!=l?s(l,"who"):l,{name:"present",hash:{},fn:n.program(14,a,0),inverse:n.noop,data:a,loc:{start:{line:13,column:27},end:{line:15,column:15}}}))?o:"")+'</td>\n  <td class="align-middle'+(null!=(o=s(e,"if").call(r,null!=l?s(l,"manageable"):l,{name:"if",hash:{},fn:n.program(16,a,0),inverse:n.noop,data:a,loc:{start:{line:16,column:25},end:{line:16,column:65}}}))?o:"")+'">\n    <div class="d-flex flex-column flex-md-row align-items-center">\n      '+(null!=(o=s(e,"present").call(r,null!=l?s(l,"properties"):l,{name:"present",hash:{},fn:n.program(18,a,0),inverse:n.noop,data:a,loc:{start:{line:18,column:6},end:{line:18,column:114}}}))?o:"")+(null!=(o=s(e,"if").call(r,null!=l?s(l,"manageable"):l,{name:"if",hash:{},fn:n.program(20,a,0),inverse:n.noop,data:a,loc:{start:{line:19,column:6},end:{line:50,column:14}}}))?o:"")+"</div>\n  </td>\n</tr>"},2:function(n,l,e,t,a){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return n.escapeExpression(n.lambda(null!=l?o(l,"safe"):l,l))},4:function(n,l,e,t,a){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(o=r(e,"if").call(null!=l?l:n.nullContext||{},null!=l?r(l,"id"):l,{name:"if",hash:{},fn:n.program(5,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:50},end:{line:1,column:73}}}))?o:""},5:function(n,l,e,t,a){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return n.escapeExpression(n.lambda(null!=l?o(l,"id"):l,l))},7:function(n,l,e,t,a){var o=n.lambda,r=n.escapeExpression,s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'\n    <a class="text-left wrap-text small mw-25 link" href="'+r(o(null!=l?s(l,"url"):l,l))+'" target="_blank" title="Open in Google Calendar" data-type="out">'+r(o(null!=l?s(l,"id"):l,l))+"</a>\n  <"},9:function(n,l,e,t,a){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"\n    <span>"+n.escapeExpression(n.lambda(null!=l?o(l,"when"):l,l))+"</span>\n  "},11:function(n,l,e,t,a){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'\n    <div class="d-flex flex-column">\n      '+(null!=(o=r(e,"each").call(null!=l?l:n.nullContext||{},null!=l?r(l,"what"):l,{name:"each",hash:{},fn:n.program(12,a,0),inverse:n.noop,data:a,loc:{start:{line:10,column:6},end:{line:10,column:50}}}))?o:"")+"\n    </div>\n  "},12:function(n,l,e,t,a){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(o=n.invokePartial(r(t,"custom_resource"),l,{name:"custom_resource",data:a,helpers:e,partials:t,decorators:n.decorators}))?o:""},14:function(n,l,e,t,a){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"\n    <span>"+n.escapeExpression(n.lambda(null!=l?o(l,"who"):l,l))+"</span>\n  "},16:function(n,l,e,t,a){return" bg-secondary"},18:function(n,l,e,t,a){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(o=n.invokePartial(r(t,"custom_properties"),l,{name:"custom_properties",hash:{manageable:null!=l?r(l,"manageable"):l,id:null!=l?r(l,"id"):l,properties:null!=l?r(l,"properties"):l},data:a,helpers:e,partials:t,decorators:n.decorators}))?o:""},20:function(n,l,e,t,a){var o,r=null!=l?l:n.nullContext||{},s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'      <div class="ml-md-auto">'+(null!=(o=s(e,"if").call(r,s(e,"any").call(r,s(e,"absent").call(r,null!=l?s(l,"properties"):l,{name:"absent",hash:{},data:a,loc:{start:{line:21,column:20},end:{line:21,column:39}}}),s(e,"all").call(r,s(e,"is").call(r,null!=(o=null!=l?s(l,"properties"):l)?s(o,"STATUS"):o,"!=","LOANED",{name:"is",hash:{},data:a,loc:{start:{line:21,column:45},end:{line:21,column:81}}}),s(e,"is").call(r,null!=(o=null!=l?s(l,"properties"):l)?s(o,"STATUS"):o,"!=","RETURNED",{name:"is",hash:{},data:a,loc:{start:{line:21,column:82},end:{line:21,column:120}}}),{name:"all",hash:{},data:a,loc:{start:{line:21,column:40},end:{line:21,column:121}}}),{name:"any",hash:{},data:a,loc:{start:{line:21,column:15},end:{line:21,column:122}}}),{name:"if",hash:{},fn:n.program(21,a,0),inverse:n.noop,data:a,loc:{start:{line:21,column:8},end:{line:34,column:16}}}))?o:"")+(null!=(o=s(e,"if").call(r,s(e,"all").call(r,s(e,"present").call(r,null!=l?s(l,"properties"):l,{name:"present",hash:{},data:a,loc:{start:{line:35,column:20},end:{line:35,column:40}}}),s(e,"is").call(r,null!=(o=null!=l?s(l,"properties"):l)?s(o,"STATUS"):o,"LOANED",{name:"is",hash:{},data:a,loc:{start:{line:35,column:41},end:{line:35,column:72}}}),{name:"all",hash:{},data:a,loc:{start:{line:35,column:15},end:{line:35,column:73}}}),{name:"if",hash:{},fn:n.program(23,a,0),inverse:n.noop,data:a,loc:{start:{line:35,column:8},end:{line:48,column:16}}}))?o:"")+"</div>\n"},21:function(n,l,e,t,a){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'          <div class="btn-group mr-md-1">\n'+(null!=(o=n.invokePartial(r(t,"control_button"),l,{name:"control_button",hash:{b_command:r(e,"concat").call(null!=l?l:n.nullContext||{},"confirm.loan.",null!=l?r(l,"id"):l,{name:"concat",hash:{},data:a,loc:{start:{line:24,column:26},end:{line:24,column:53}}}),b_text:"Loan",b_icon:"directions_run",b_class:"btn-action",b_tiny:"true"},data:a,indent:"            ",helpers:e,partials:t,decorators:n.decorators}))?o:"")+(null!=(o=n.invokePartial(r(t,"control_button"),l,{name:"control_button",hash:{b_toggle:"dropdown",b_class:"btn-action dropdown-toggle dropdown-toggle-split d-flex",b_tiny:"true"},data:a,indent:"            ",helpers:e,partials:t,decorators:n.decorators}))?o:"")+'            <div class="dropdown-menu dropdown-menu-right">\n              <a class="dropdown-item text-dark text-left" href="#log.loan.'+n.escapeExpression(n.lambda(null!=l?r(l,"id"):l,l))+'">Log Loan</a>\n              <a class="dropdown-item text-dark text-left" href="#instructions.loan">\n                <span>About</span>\n                <span class="sr-only">More details about loaning, returning and logging</span>\n              </a>\n            </div>\n          </div>\n'},23:function(n,l,e,t,a){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'          <div class="btn-group mr-md-1">\n'+(null!=(o=n.invokePartial(r(t,"control_button"),l,{name:"control_button",hash:{b_command:r(e,"concat").call(null!=l?l:n.nullContext||{},"confirm.return.",null!=l?r(l,"id"):l,{name:"concat",hash:{},data:a,loc:{start:{line:38,column:26},end:{line:38,column:55}}}),b_text:"Return",b_icon:"home",b_class:"btn-action",b_tiny:"true"},data:a,indent:"            ",helpers:e,partials:t,decorators:n.decorators}))?o:"")+(null!=(o=n.invokePartial(r(t,"control_button"),l,{name:"control_button",hash:{b_toggle:"dropdown",b_class:"btn-action dropdown-toggle dropdown-toggle-split d-flex",b_tiny:"true"},data:a,indent:"            ",helpers:e,partials:t,decorators:n.decorators}))?o:"")+'            <div class="dropdown-menu dropdown-menu-right">\n              <a class="dropdown-item text-dark text-left" href="#log.return.'+n.escapeExpression(n.lambda(null!=l?r(l,"id"):l,l))+'">Log Return</a>\n              <a class="dropdown-item text-dark text-left" href="#instructions.loan">\n                <span>About</span>\n                <span class="sr-only">More details about loaning, returning and logging</span>\n              </a>\n            </div>\n          </div>\n'},compiler:[8,">= 4.3.0"],main:function(n,l,e,t,a){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(o=r(e,"each").call(null!=l?l:n.nullContext||{},null!=l?r(l,"rows"):l,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:0},end:{line:53,column:14}}}))?o:"")+"\n"},usePartial:!0,useData:!0})}();