!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).field_span=n({1:function(n,l,a,e,t,o,r){var i,c=n.lambda,u=n.escapeExpression,s=null!=l?l:n.nullContext||{},d=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'  <div class="btn-group float-right mb-1 d-xl-none" role="group" id="'+u(c(null!=l?d(l,"id"):l,l))+'_BUTTONS">\n    '+(null!=(i=d(a,"if").call(s,null!=l?d(l,"options"):l,{name:"if",hash:{},fn:n.program(2,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:33,column:4},end:{line:48,column:17}}}))?i:"")+'\n  </div>\n  <div id="'+u(c(null!=l?d(l,"id"):l,l))+'"\n       '+(null!=(i=d(a,"if").call(s,null!=l?d(l,"default"):l,{name:"if",hash:{},fn:n.program(7,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:51,column:7},end:{line:51,column:62}}}))?i:"")+"\n       "+(null!=(i=d(a,"if").call(s,null!=l?d(l,"historical"):l,{name:"if",hash:{},fn:n.program(9,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:52,column:7},end:{line:52,column:65}}}))?i:"")+'\n       class="input-group'+(null!=(i=d(a,"if").call(s,null!=l?d(l,"large"):l,{name:"if",hash:{},fn:n.program(11,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:53,column:25},end:{line:53,column:60}}}))?i:"")+" input-daterange"+(null!=(i=d(a,"unless").call(s,null!=l?d(l,"readonly"):l,{name:"unless",hash:{},fn:n.program(13,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:53,column:76},end:{line:53,column:141}}}))?i:"")+'">\n    '+(null!=(i=d(a,"if").call(s,null!=l?d(l,"icon"):l,{name:"if",hash:{},fn:n.program(16,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:54,column:4},end:{line:54,column:80}}}))?i:"")+'\n    <input id="'+u(c(null!=l?d(l,"id"):l,l))+'_START" type="text" data-output-type="Date" data-output-name="Start"\n           class="form-control" name="'+u(c(null!=l?d(l,"id"):l,l))+'_start" aria-label="'+u(d(a,"val").call(s,"",null!=l?d(l,"title"):l,null!=l?d(l,"field"):l,{name:"val",hash:{},data:t,loc:{start:{line:56,column:64},end:{line:56,column:86}}}))+'"\n           '+(null!=(i=d(a,"if").call(s,null!=l?d(l,"help"):l,{name:"if",hash:{},fn:n.program(18,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:57,column:11},end:{line:57,column:61}}}))?i:"")+"\n           "+(null!=(i=d(a,"if").call(s,null!=l?d(l,"required"):l,{name:"if",hash:{},fn:n.program(20,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:58,column:11},end:{line:58,column:54}}}))?i:"")+"\n           "+(null!=(i=d(a,"if").call(s,null!=l?d(l,"readonly"):l,{name:"if",hash:{},fn:n.program(22,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:59,column:11},end:{line:59,column:54}}}))?i:"")+" />\n    "+(null!=(i=d(a,"if").call(s,null!=l?d(l,"icon"):l,{name:"if",hash:{},fn:n.program(24,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:60,column:4},end:{line:60,column:98}}}))?i:"")+'\n    <input id="'+u(c(null!=l?d(l,"id"):l,l))+'_END" type="text" data-output-type="Date" data-output-name="End"\n           class="form-control" name="'+u(c(null!=l?d(l,"id"):l,l))+'_end" aria-label="'+u(d(a,"val").call(s,"",null!=l?d(l,"title"):l,null!=l?d(l,"field"):l,{name:"val",hash:{},data:t,loc:{start:{line:62,column:62},end:{line:62,column:84}}}))+'"\n           '+(null!=(i=d(a,"if").call(s,null!=l?d(l,"help"):l,{name:"if",hash:{},fn:n.program(18,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:63,column:11},end:{line:63,column:61}}}))?i:"")+"\n           "+(null!=(i=d(a,"if").call(s,null!=l?d(l,"required"):l,{name:"if",hash:{},fn:n.program(20,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:64,column:11},end:{line:64,column:54}}}))?i:"")+"\n           "+(null!=(i=d(a,"if").call(s,null!=l?d(l,"readonly"):l,{name:"if",hash:{},fn:n.program(22,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:65,column:11},end:{line:65,column:54}}}))?i:"")+' />\n    <span class="input-group-append d-xl-none">\n'+(null!=(i=n.invokePartial(d(e,"control_button"),l,{name:"control_button",hash:{disabled:null!=l?d(l,"readonly"):l,b_icon_centered:"true",b_icon:"refresh",b_target:null!=l?d(l,"id"):l,b_tooltip:"Clear / Reset",b_class:"btn-secondary eraser no-active"},data:t,indent:"      ",helpers:a,partials:e,decorators:n.decorators}))?i:"")+'    </span>\n    <span class="input-group-append d-none d-xl-flex">\n'+(null!=(i=n.invokePartial(d(e,"control_button"),l,{name:"control_button",hash:{disabled:null!=l?d(l,"readonly"):l,b_icon_centered:"true",b_icon:"refresh",b_target:null!=l?d(l,"id"):l,b_tooltip:"Clear / Reset",b_class:"btn-secondary eraser no-active"},data:t,indent:"      ",helpers:a,partials:e,decorators:n.decorators}))?i:"")+"      "+(null!=(i=d(a,"if").call(s,null!=l?d(l,"options"):l,{name:"if",hash:{},fn:n.program(26,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:73,column:6},end:{line:89,column:19}}}))?i:"")+"\n    </span>\n"+(null!=(i=n.invokePartial(d(e,"field_validation"),l,{name:"field_validation",data:t,indent:"    ",helpers:a,partials:e,decorators:n.decorators}))?i:"")+"  </div>\n  "+(null!=(i=d(a,"if").call(s,null!=l?d(l,"details"):l,{name:"if",hash:{},fn:n.program(30,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:93,column:2},end:{line:97,column:80}}}))?i:"")+"\n"},2:function(n,l,a,e,t,o,r){var i,c=null!=l?l:n.nullContext||{},u=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(i=n.invokePartial(u(e,"control_button"),l,{name:"control_button",hash:{b_value:u(a,"concat").call(c,"-",u(a,"either").call(c,null!=l?u(l,"increment"):l,1,{name:"either",hash:{},data:t,loc:{start:{line:35,column:100},end:{line:35,column:120}}}),{name:"concat",hash:{},data:t,loc:{start:{line:35,column:88},end:{line:35,column:121}}}),b_icon_centered:"true",b_icon:"remove",b_modifier:u(a,"concat").call(c,null!=l?u(l,"id"):l,"_PERIOD_SM",{name:"concat",hash:{},data:t,loc:{start:{line:35,column:16},end:{line:35,column:40}}}),disabled:null!=l?u(l,"readonly"):l,b_target:null!=l?u(l,"id"):l,b_tooltip:"Decrease",b_class:"btn-info alter-numerical",b_small:"true"},data:t,helpers:a,partials:e,decorators:n.decorators}))?i:"")+"\n"+(null!=(i=n.invokePartial(u(e,"control_button"),l,{name:"control_button",hash:{disabled:null!=l?u(l,"readonly"):l,b_value:u(a,"either").call(c,null!=l?u(l,"increment"):l,1,{name:"either",hash:{},data:t,loc:{start:{line:38,column:13},end:{line:38,column:33}}}),b_icon:"add",b_modifier:u(a,"concat").call(c,null!=l?u(l,"id"):l,"_PERIOD_SM",{name:"concat",hash:{},data:t,loc:{start:{line:37,column:72},end:{line:37,column:96}}}),b_target:null!=l?u(l,"id"):l,b_icon_centered:"true",b_tooltip:"Increase",b_class:"btn-primary alter-numerical",b_small:"true"},data:t,indent:"    ",helpers:a,partials:e,decorators:n.decorators}))?i:"")+(null!=(i=n.invokePartial(u(e,"control_button"),l,{name:"control_button",hash:{disabled:null!=l?u(l,"readonly"):l,b_toggle:"dropdown",b_output_name:"Type",b_output_type:"String",b_span:u(a,"either").call(c,null!=l?u(l,"span"):l,"",{name:"either",hash:{},data:t,loc:{start:{line:40,column:52},end:{line:40,column:68}}}),b_text:null!=l?u(l,"type"):l,b_default:null!=l?u(l,"type"):l,b_targets:null!=l?u(l,"id"):l,b_class:"btn-dark complex-list-type dropdown-toggle",b_id:u(a,"concat").call(c,null!=l?u(l,"id"):l,"_PERIOD_SM",{name:"concat",hash:{},data:t,loc:{start:{line:39,column:28},end:{line:39,column:52}}})},data:t,indent:"    ",helpers:a,partials:e,decorators:n.decorators}))?i:"")+'    <div class="dropdown-menu" aria-labelledby="'+n.escapeExpression(n.lambda(null!=l?u(l,"id"):l,l))+'_PERIOD_SM">\n'+(null!=(i=u(a,"each").call(c,null!=l?u(l,"options"):l,{name:"each",hash:{},fn:n.program(3,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:43,column:6},end:{line:47,column:15}}}))?i:"")+"    </div>"},3:function(n,l,a,e,t,o,r){var i,c=n.escapeExpression,u=null!=l?l:n.nullContext||{},s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'      <a class="dropdown-item alter-span" href="#" data-targets="'+c(n.lambda(null!=r[1]?s(r[1],"id"):r[1],l))+'_PERIOD_SM"\n         data-value="'+c(s(a,"val").call(u,"",null!=l?s(l,"value"):l,l,{name:"val",hash:{},data:t,loc:{start:{line:45,column:21},end:{line:45,column:42}}}))+'"\n         '+(null!=(i=s(a,"exists").call(u,null!=l?s(l,"span"):l,{name:"exists",hash:{},fn:n.program(4,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:46,column:9},end:{line:46,column:76}}}))?i:"")+">"+c(s(a,"val").call(u,"",null!=l?s(l,"name"):l,l,{name:"val",hash:{},data:t,loc:{start:{line:46,column:77},end:{line:46,column:97}}}))+"</a>\n"},4:function(n,l,a,e,t){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(o=r(a,"if").call(null!=l?l:n.nullContext||{},null!=l?r(l,"span"):l,{name:"if",hash:{},fn:n.program(5,t,0),inverse:n.noop,data:t,loc:{start:{line:46,column:25},end:{line:46,column:65}}}))?o:""},5:function(n,l,a,e,t){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' data-span="'+n.escapeExpression(n.lambda(null!=l?o(l,"span"):l,l))+'"'},7:function(n,l,a,e,t){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' data-input-default="'+n.escapeExpression(n.lambda(null!=l?o(l,"default"):l,l))+'"'},9:function(n,l,a,e,t){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' data-historical="'+n.escapeExpression(n.lambda(null!=l?o(l,"historical"):l,l))+'"'},11:function(n,l,a,e,t){return" input-group-lg"},13:function(n,l,a,e,t){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return" dt-picker"+(null!=(o=r(a,"if").call(null!=l?l:n.nullContext||{},null!=l?r(l,"time"):l,{name:"if",hash:{},fn:n.program(14,t,0),inverse:n.noop,data:t,loc:{start:{line:53,column:106},end:{line:53,column:130}}}))?o:"")},14:function(n,l,a,e,t){return"-time"},16:function(n,l,a,e,t){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(o=n.invokePartial(r(e,"control_icon"),l,{name:"control_icon",hash:{icon:null!=l?r(l,"icon"):l,large:null!=l?r(l,"large"):l,visible_at:"xl"},data:t,helpers:a,partials:e,decorators:n.decorators}))?o:""},18:function(n,l,a,e,t){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' aria-describedby="'+n.escapeExpression(n.lambda(null!=l?o(l,"id"):l,l))+'_HELP"'},20:function(n,l,a,e,t){return' required="required"'},22:function(n,l,a,e,t){return' readonly="readonly"'},24:function(n,l,a,e,t){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(o=n.invokePartial(r(e,"control_icon"),l,{name:"control_icon",hash:{icon:"forward",large:null!=l?r(l,"large"):l,append:"true",prepend:"true"},data:t,helpers:a,partials:e,decorators:n.decorators}))?o:""},26:function(n,l,a,e,t,o,r){var i,c=null!=l?l:n.nullContext||{},u=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(i=n.invokePartial(u(e,"control_button"),l,{name:"control_button",hash:{b_value:u(a,"concat").call(c,"-",u(a,"either").call(c,null!=l?u(l,"increment"):l,1,{name:"either",hash:{},data:t,loc:{start:{line:75,column:79},end:{line:75,column:99}}}),{name:"concat",hash:{},data:t,loc:{start:{line:75,column:67},end:{line:75,column:100}}}),b_icon:"remove",b_modifier:u(a,"concat").call(c,null!=l?u(l,"id"):l,"_PERIOD_LG",{name:"concat",hash:{},data:t,loc:{start:{line:75,column:18},end:{line:75,column:42}}}),disabled:null!=l?u(l,"readonly"):l,b_target:null!=l?u(l,"id"):l,b_tooltip:"Decrease",b_class:"btn-info alter-numerical",b_icon_centered:"true",b_small:"true"},data:t,helpers:a,partials:e,decorators:n.decorators}))?i:"")+"\n"+(null!=(i=n.invokePartial(u(e,"control_button"),l,{name:"control_button",hash:{disabled:null!=l?u(l,"readonly"):l,b_value:u(a,"either").call(c,null!=l?u(l,"increment"):l,1,{name:"either",hash:{},data:t,loc:{start:{line:78,column:15},end:{line:78,column:35}}}),b_icon:"add",b_modifier:u(a,"concat").call(c,null!=l?u(l,"id"):l,"_PERIOD_LG",{name:"concat",hash:{},data:t,loc:{start:{line:77,column:51},end:{line:77,column:75}}}),b_target:null!=l?u(l,"id"):l,b_tooltip:"Increase",b_icon_centered:"true",b_class:"btn-primary alter-numerical",b_small:"true"},data:t,indent:"      ",helpers:a,partials:e,decorators:n.decorators}))?i:"")+(null!=(i=n.invokePartial(u(e,"control_button"),l,{name:"control_button",hash:{disabled:null!=l?u(l,"readonly"):l,b_toggle:"dropdown",b_output_name:"Type",b_output_type:"String",b_span:u(a,"either").call(c,null!=l?u(l,"span"):l,"",{name:"either",hash:{},data:t,loc:{start:{line:81,column:26},end:{line:81,column:42}}}),b_text:null!=l?u(l,"type"):l,b_default:null!=l?u(l,"type"):l,b_targets:null!=l?u(l,"id"):l,b_class:"btn-dark complex-list-type dropdown-toggle",b_id:u(a,"concat").call(c,null!=l?u(l,"id"):l,"_PERIOD_LG",{name:"concat",hash:{},data:t,loc:{start:{line:79,column:30},end:{line:79,column:54}}})},data:t,indent:"      ",helpers:a,partials:e,decorators:n.decorators}))?i:"")+'      <div class="dropdown-menu" aria-labelledby="'+n.escapeExpression(n.lambda(null!=l?u(l,"id"):l,l))+'_PERIOD_LG">\n'+(null!=(i=u(a,"each").call(c,null!=l?u(l,"options"):l,{name:"each",hash:{},fn:n.program(27,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:84,column:8},end:{line:88,column:17}}}))?i:"")+"      </div>"},27:function(n,l,a,e,t,o,r){var i,c=null!=l?l:n.nullContext||{},u=n.escapeExpression,s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'        <a class="dropdown-item alter-span'+(null!=(i=s(a,"if").call(c,null!=l?s(l,"readonly"):l,{name:"if",hash:{},fn:n.program(28,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:85,column:42},end:{line:85,column:74}}}))?i:"")+'" href="#"\n           data-targets="'+u(n.lambda(null!=r[1]?s(r[1],"id"):r[1],l))+'_PERIOD_LG" data-value="'+u(s(a,"val").call(c,"",null!=l?s(l,"value"):l,l,{name:"val",hash:{},data:t,loc:{start:{line:86,column:58},end:{line:86,column:79}}}))+'"\n           '+(null!=(i=s(a,"exists").call(c,null!=l?s(l,"span"):l,{name:"exists",hash:{},fn:n.program(4,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:87,column:11},end:{line:87,column:78}}}))?i:"")+">"+u(s(a,"val").call(c,"",null!=l?s(l,"name"):l,l,{name:"val",hash:{},data:t,loc:{start:{line:87,column:79},end:{line:87,column:99}}}))+"</a>\n"},28:function(n,l,a,e,t){return" disabled"},30:function(n,l,a,e,t,o,r){var i,c=n.lambda,u=n.escapeExpression,s=null!=l?l:n.nullContext||{},d=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<textarea data-for="'+u(c(null!=l?d(l,"id"):l,l))+'" data-output-name="Details" id="'+u(c(null!=l?d(l,"id"):l,l))+'_DETAILS"\n                 \tname="'+u(c(null!=l?d(l,"id"):l,l))+'_details"\n                  class="form-control'+(null!=(i=d(a,"if").call(s,null!=l?d(l,"large"):l,{name:"if",hash:{},fn:n.program(31,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:95,column:37},end:{line:95,column:73}}}))?i:"")+' resizable optional mt-2"\n                  rows="1" aria-label="'+u(c(null!=l?d(l,"details"):l,l))+'" placeholder="'+u(c(null!=l?d(l,"details"):l,l))+'"\n                  '+(null!=(i=d(a,"if").call(s,null!=l?d(l,"readonly"):l,{name:"if",hash:{},fn:n.program(22,t,0,o,r),inverse:n.noop,data:t,loc:{start:{line:97,column:18},end:{line:97,column:61}}}))?i:"")+"></textarea>"},31:function(n,l,a,e,t){return" form-control-lg"},compiler:[8,">= 4.3.0"],main:function(n,l,a,e,t,o,r){var i,c=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"\n\n\n\n"+(null!=(i=n.invokePartial(c(e,"field_general"),l,{name:"field_general",fn:n.program(1,t,0,o,r),inverse:n.noop,data:t,helpers:a,partials:e,decorators:n.decorators}))?i:"")},usePartial:!0,useData:!0,useDepths:!0})}();