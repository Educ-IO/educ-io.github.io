!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).item=n({1:function(n,a,l,e,t){return'data-countdown="'+n.escapeExpression(n.lambda(null!=a?a._countdown:a,a))+'" '},3:function(n,a,l,e,t){return'data-zombie="'+n.escapeExpression(n.lambda(null!=a?a.ZOMBIE:a,a))+'" '},5:function(n,a,l,e,t){return'data-ghost="'+n.escapeExpression(n.lambda(null!=a?a.GHOST:a,a))+'" '},7:function(n,a,l,e,t){return" editable"},9:function(n,a,l,e,t){return" text-complement small"},11:function(n,a,l,e,t){return" complete"},13:function(n,a,l,e,t){var r;return null!=(r=l.is.call(null!=a?a:n.nullContext||{},null!=a?a._countdown:a,"lt",0,{name:"is",hash:{},fn:n.program(14,t,0),inverse:n.program(16,t,0),data:t}))?r:""},14:function(n,a,l,e,t){return" overdue"},16:function(n,a,l,e,t){var r;return null!=(r=l.is.call(null!=a?a:n.nullContext||{},null!=a?a._countdown:a,"lte",2,{name:"is",hash:{},fn:n.program(17,t,0),inverse:n.noop,data:t}))?r:""},17:function(n,a,l,e,t){return" due-soon"},19:function(n,a,l,e,t){return" background"},21:function(n,a,l,e,t){var r;return null!=(r=l.if.call(null!=a?a:n.nullContext||{},null!=a?a.GHOST:a,{name:"if",hash:{},fn:n.program(19,t,0),inverse:n.noop,data:t}))?r:""},23:function(n,a,l,e,t){var r=n.lambda,o=n.escapeExpression;return'id="item_'+o(r(null!=a?a.$loki:a,a))+'" data-id="'+o(r(null!=a?a.$loki:a,a))+'"'},25:function(n,a,l,e,t){var r;return' data-order="'+(null!=(r=l.if.call(null!=a?a:n.nullContext||{},null!=a?a.ORDER:a,{name:"if",hash:{},fn:n.program(26,t,0),inverse:n.program(28,t,0),data:t}))?r:"")+'" draggable="true"'},26:function(n,a,l,e,t){return n.escapeExpression(n.lambda(null!=a?a.ORDER:a,a))},28:function(n,a,l,e,t){return n.escapeExpression(l.inc.call(null!=a?a:n.nullContext||{},t&&t.index,{name:"inc",hash:{},data:t}))},30:function(n,a,l,e,t){return'title="'+n.escapeExpression(n.lambda(null!=a?a._title:a,a))+'" '},32:function(n,a,l,e,t){return" small ghost text-very-faded"},34:function(n,a,l,e,t){return" zombie text-faded"},36:function(n,a,l,e,t){var r=n.lambda,o=n.escapeExpression;return'<a role="button" aria-label="View" href="'+o(r(null!=a?a._link:a,a))+'" target="_blank" class="d-none d-md-block float-left text-very-faded pr-1"><i class="material-icons md-1">'+o(r(null!=a?a._icon:a,a))+"</i></a>"},38:function(n,a,l,e,t){return'<span class="float-right text-muted text-small pr-1" title="'+n.escapeExpression(n.lambda(null!=a?a.TIME:a,a))+'"><i class="material-icons md-1">schedule</i></span>'},40:function(n,a,l,e,t){var r,o=null!=a?a:n.nullContext||{};return(null!=(r=l.is.call(o,null!=a?a._countdown:a,"==",0,{name:"is",hash:{},fn:n.program(41,t,0),inverse:n.noop,data:t}))?r:"")+(null!=(r=l.is.call(o,null!=a?a._countdown:a,"lt",0,{name:"is",hash:{},fn:n.program(43,t,0),inverse:n.noop,data:t}))?r:"")+(null!=(r=l.if.call(o,null!=a?a.ZOMBIE:a,{name:"if",hash:{},fn:n.program(45,t,0),inverse:n.noop,data:t}))?r:"")+(null!=(r=l.if.call(o,null!=a?a.GHOST:a,{name:"if",hash:{},fn:n.program(47,t,0),inverse:n.noop,data:t}))?r:"")},41:function(n,a,l,e,t){return'<span class="float-right text-muted text-small pr-1" title="Due TODAY"><i class="material-icons md-1">priority_high</i></span>'},43:function(n,a,l,e,t){return'<span class="float-right text-muted text-small pr-1" title="Was Due By '+n.escapeExpression(l.localeDate.call(null!=a?a:n.nullContext||{},null!=a?a.DUE:a,{name:"localeDate",hash:{},data:t}))+'"><i class="material-icons md-1">error</i></span>'},45:function(n,a,l,e,t){return'<span class="float-right text-small pr-1" title="Been hanging around a while ..."><i class="material-icons md-1">trending_down</i></span>'},47:function(n,a,l,e,t){return'<span class="float-right text-small pr-1" title="Added '+n.escapeExpression(n.lambda(null!=a?a._dormant:a,a))+'. Perhaps reschedule or delete this?"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path class="g" d="M65.4 270c-15.3-22 12.7-94.8 25.4-108.2 6.8-7.2 15.6-13.1 22.2-20.8 10.6-12.3 23.9-4.4 35.7-13.8 9-7 8.5-17.5 8.6-18 2.8-16.8 21.8-32.7 34.5-45.8 13.8-14.2 19.6-16.1 42.6-30.5 22.6-14.2 33.8-15.6 72.4-9.4 45.7 7.4 51.9 18 65.4 33.8 18.4 21.5 8.3 19.4 28 55 8 14.2 9.4 42.3 9.4 42.3s-3.2 9.6 9.9 17.5c14.3 8.6 1.5.5 14.8 8 14 7.9 24.8 22 25.5 31 2.4 31.3 0 43.3 1.9 73.4 1.3 22.2 10.5 48-9 46.5-34.8-2.6-47.4-8.4-60.3.8-14.8 10.4-15.8 27.2-22 28.1-26.4 4.1-40.7-15-67 3.7-25.8 18.4-15.8 122-77.5 113C152.2 466 214 378.2 190 344.4c-8.2-11.6-50.3-19.6-64.6-23.4-15.3-4 6.7-20.2-8.3-33.3-16-14.1-21.1-13.9-52-18"/><path class="e" d="M222 95c3.6-20.7 12.5-38.3 24.5-36.2 12 2 22.5 22.8 19 43.5s-11.2 35.2-23.2 33.1c-12-2-23.8-19.8-20.3-40.5zM293.6 105.3c3.6-20.7 12.3-36.9 24.3-34.8 12 2 22.7 21.5 19.2 42.1-3.5 20.7-9.5 34-21.5 32s-25.5-18.7-22-39.3zM219.4 216.8c-14.8-1.7-31.4-11.5-34.5-6.7-4 6.2 6.2 26 10.2 29.4 6.8 5.7 14.8 10 23.3 12.2 9 2.3 19 2.7 30 1.2 13.6-2 17.7-6.8 35.2-12.6 13.2-4.4 24-5 28.5-14.2 4.9-10.3-80-8.3-93.1-9.2"/></g></svg></span>'},49:function(n,a,l,e,t){return'<del class="text-muted text-faded">'},51:function(n,a,l,e,t){var r,o=null!=a?a:n.nullContext||{};return(null!=(r=l.if.call(o,null!=a?a._action:a,{name:"if",hash:{},fn:n.program(52,t,0),inverse:n.noop,data:t}))?r:"")+'<span class="float-left font-weight-light text-muted mr-2">'+(null!=(r=l.if.call(o,null!=a?a._date:a,{name:"if",hash:{},fn:n.program(54,t,0),inverse:n.program(56,t,0),data:t}))?r:"")+"</span>"+(null!=(r=l.if.call(o,null!=a?a._action:a,{name:"if",hash:{},fn:n.program(58,t,0),inverse:n.noop,data:t}))?r:"")},52:function(n,a,l,e,t){return'<a class="date" href="#'+n.escapeExpression(n.lambda(null!=a?a._action:a,a))+'" data-click="dismiss-modal">'},54:function(n,a,l,e,t){return n.escapeExpression(l.localeDate.call(null!=a?a:n.nullContext||{},null!=a?a._date:a,{name:"localeDate",hash:{},data:t}))},56:function(n,a,l,e,t){return n.escapeExpression(l.localeDate.call(null!=a?a:n.nullContext||{},null!=a?a.FROM:a,{name:"localeDate",hash:{},data:t}))},58:function(n,a,l,e,t){return"</a>"},60:function(n,a,l,e,t,r,o){var i,s=null!=a?a:n.nullContext||{};return(null!=(i=l.if.call(s,null!=a?a.editable:a,{name:"if",hash:{},fn:n.program(61,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.if.call(s,null!=a?a.BADGES:a,{name:"if",hash:{},fn:n.program(65,t,0,r,o),inverse:n.noop,data:t}))?i:"")},61:function(n,a,l,e,t){var r;return null!=(r=l.unless.call(null!=a?a:n.nullContext||{},null!=a?a._complete:a,{name:"unless",hash:{},fn:n.program(62,t,0),inverse:n.noop,data:t}))?r:""},62:function(n,a,l,e,t){var r;return'<a class="d-none d-md-block float-left text-very-faded pr-1" role="button" aria-label="Edit Tags" href="#edit.tags'+(null!=(r=l.exists.call(null!=a?a:n.nullContext||{},null!=a?a.$loki:a,{name:"exists",hash:{},fn:n.program(63,t,0),inverse:n.noop,data:t}))?r:"")+'"><i class="material-icons md-1">add_box</i></a>'},63:function(n,a,l,e,t){return"."+n.escapeExpression(n.lambda(null!=a?a.$loki:a,a))},65:function(n,a,l,e,t,r,o){var i;return null!=(i=l.each.call(null!=a?a:n.nullContext||{},null!=a?a.BADGES:a,{name:"each",hash:{},fn:n.program(66,t,0,r,o),inverse:n.noop,data:t}))?i:""},66:function(n,a,l,e,t,r,o){var i,s=null!=a?a:n.nullContext||{},c=n.lambda,u=n.escapeExpression;return'<span class="float-left badge badge-pill badge-'+(null!=(i=l.is.call(s,a,"~=","Info",{name:"is",hash:{},fn:n.program(67,t,0,r,o),inverse:n.program(69,t,0,r,o),data:t}))?i:"")+(null!=(i=l.is.call(s,a,"~=","High",{name:"is",hash:{},fn:n.program(71,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.is.call(s,a,"~=","Medium",{name:"is",hash:{},fn:n.program(73,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.is.call(s,a,"~=","Low",{name:"is",hash:{},fn:n.program(75,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.is.call(s,a,"~=","Review",{name:"is",hash:{},fn:n.program(77,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.is.call(s,a,"~=","Highlight",{name:"is",hash:{},fn:n.program(79,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.is.call(s,a,"~=","Work",{name:"is",hash:{},fn:n.program(81,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.is.call(s,a,"~=","Social",{name:"is",hash:{},fn:n.program(83,t,0,r,o),inverse:n.noop,data:t}))?i:"")+" mr-"+(null!=(i=l.if.call(s,t&&t.last,{name:"if",hash:{},fn:n.program(85,t,0,r,o),inverse:n.program(87,t,0,r,o),data:t}))?i:"")+'" title=""><a role="button" href="#search.tags.'+u(c(a,a))+'" aria-label="Find all items with the same Tag">'+u(c(a,a))+'</a><a role="button" class="close pl-1" aria-label="Remove Tag" href="#remove.tag'+(null!=(i=l.exists.call(s,null!=o[1]?o[1].$loki:o[1],{name:"exists",hash:{},fn:n.program(89,t,0,r,o),inverse:n.noop,data:t}))?i:"")+"."+u(c(a,a))+'"><span aria-hidden="true">×</span></a></span>'},67:function(n,a,l,e,t){return"secondary"},69:function(n,a,l,e,t){return"primary"},71:function(n,a,l,e,t){return" badge-danger"},73:function(n,a,l,e,t){return" badge-warning"},75:function(n,a,l,e,t){return" badge-success"},77:function(n,a,l,e,t){return" badge-info"},79:function(n,a,l,e,t){return" badge-bright"},81:function(n,a,l,e,t){return" badge-dark"},83:function(n,a,l,e,t){return" badge-rainbow"},85:function(n,a,l,e,t){return"2"},87:function(n,a,l,e,t){return"1"},89:function(n,a,l,e,t,r,o){return"."+n.escapeExpression(n.lambda(null!=o[1]?o[1].$loki:o[1],a))},91:function(n,a,l,e,t){var r;return null!=(r=n.lambda(null!=a?a.DISPLAY:a,a))?r:""},93:function(n,a,l,e,t){return n.escapeExpression(n.lambda(a,a))},95:function(n,a,l,e,t){return"</del>"},97:function(n,a,l,e,t,r,o){var i,s=null!=a?a:n.nullContext||{};return'<div class="d-none edit form-group row mb-1" style="touch-action: none;">\n  \t<input type="hidden" class="d-none dt-picker" value="'+(null!=(i=l.if.call(s,null!=a?a._action:a,{name:"if",hash:{},fn:n.program(98,t,0,r,o),inverse:n.noop,data:t}))?i:"")+'"/>\n    <div class="col-12 p-1">\n\t\t\t<div class="input-group">\n        '+(null!=(i=l.if.call(s,null!=a?a.wide:a,{name:"if",hash:{},fn:n.program(100,t,0,r,o),inverse:n.noop,data:t}))?i:"")+'\n        <textarea class="form-control resizable" rows="1" style="touch-action: none;">'+(null!=(i=l.if.call(s,null!=a?a.DETAILS:a,{name:"if",hash:{},fn:n.program(102,t,0,r,o),inverse:n.program(93,t,0,r,o),data:t}))?i:"")+"</textarea>\n      \t"+(null!=(i=l.if.call(s,null!=a?a.wide:a,{name:"if",hash:{},fn:n.program(104,t,0,r,o),inverse:n.noop,data:t}))?i:"")+'\n      </div>\n      <div class="input-group d-flex'+(null!=(i=l.if.call(s,null!=a?a.wide:a,{name:"if",hash:{},fn:n.program(109,t,0,r,o),inverse:n.noop,data:t}))?i:"")+' pt-1">\n         <span class="input-group-prepend">\n'+(null!=(i=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"cancel",b_icon:"cancel",b_title:"Cancel",b_class:l.concat.call(s,"btn-light px-2",l.which.call(s,null!=a?a.wide:a," px-sm-3","",{name:"which",hash:{},data:t}),{name:"concat",hash:{},data:t})},data:t,indent:"          ",helpers:l,partials:e,decorators:n.decorators}))?i:"")+(null!=(i=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"delete",b_icon:"delete_forever",b_aria_title:"Delete this Item",b_icon_type:"light",b_class:l.concat.call(s,"btn-danger px-2",l.which.call(s,null!=a?a.wide:a," px-sm-3","",{name:"which",hash:{},data:t}),{name:"concat",hash:{},data:t})},data:t,indent:"          ",helpers:l,partials:e,decorators:n.decorators}))?i:"")+(null!=(i=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"edit",b_icon:"add_box",b_aria_title:"Edit Tags",b_icon_type:"light",b_class:l.concat.call(s,"btn-info px-2",l.which.call(s,null!=a?a.wide:a," px-sm-3","",{name:"which",hash:{},data:t}),{name:"concat",hash:{},data:t})},data:t,indent:"          ",helpers:l,partials:e,decorators:n.decorators}))?i:"")+'        </span>\n        <span class="input-group-append">\n'+(null!=(i=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"update",b_icon:"save",b_aria_title:"Save Changes",b_icon_type:"light",b_class:l.concat.call(s,"btn-secondary px-2",l.which.call(s,null!=a?a.wide:a," px-sm-3","",{name:"which",hash:{},data:t}),{name:"concat",hash:{},data:t})},data:t,indent:"          ",helpers:l,partials:e,decorators:n.decorators}))?i:"")+(null!=(i=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"move",b_icon:"update",b_aria_title:"Change Date",b_icon_type:"light",b_class:l.concat.call(s,"btn-dark px-2",l.which.call(s,null!=a?a.wide:a," px-sm-3","",{name:"which",hash:{},data:t}),{name:"concat",hash:{},data:t})},data:t,indent:"          ",helpers:l,partials:e,decorators:n.decorators}))?i:"")+"          "+(null!=(i=l.if.call(s,null!=a?a._complete:a,{name:"if",hash:{},fn:n.program(111,t,0,r,o),inverse:n.program(113,t,0,r,o),data:t}))?i:"")+"\n        </span>\n      </div>\n    </div>\n  </div>"},98:function(n,a,l,e,t){return n.escapeExpression(n.lambda(null!=a?a._action:a,a))},100:function(n,a,l,e,t){var r;return'<span class="input-group-prepend d-none d-xl-flex">\n'+(null!=(r=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"cancel",b_icon:"cancel",b_title:"Cancel",b_class:"btn-light"},data:t,indent:"          ",helpers:l,partials:e,decorators:n.decorators}))?r:"")+(null!=(r=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"delete",b_icon:"delete_forever",b_aria_title:"Delete this Item",b_icon_type:"light",b_class:"btn-danger"},data:t,indent:"          ",helpers:l,partials:e,decorators:n.decorators}))?r:"")+"        </span>"},102:function(n,a,l,e,t){var r;return null!=(r=n.lambda(null!=a?a.DETAILS:a,a))?r:""},104:function(n,a,l,e,t){var r;return'<span class="input-group-append d-none d-xl-flex">\n'+(null!=(r=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"update",b_icon:"save",b_aria_title:"Save Changes",b_icon_type:"light",b_class:"btn-secondary"},data:t,indent:"          ",helpers:l,partials:e,decorators:n.decorators}))?r:"")+(null!=(r=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"move",b_icon:"update",b_aria_title:"Change Date",b_icon_type:"light",b_class:"btn-dark"},data:t,indent:"          ",helpers:l,partials:e,decorators:n.decorators}))?r:"")+"          "+(null!=(r=l.if.call(null!=a?a:n.nullContext||{},null!=a?a._complete:a,{name:"if",hash:{},fn:n.program(105,t,0),inverse:n.program(107,t,0),data:t}))?r:"")+"\n        </span>"},105:function(n,a,l,e,t){var r;return null!=(r=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"complete",b_icon:"edit",b_aria_title:"Mark as In Progress",b_class:"btn-warning"},data:t,helpers:l,partials:e,decorators:n.decorators}))?r:""},107:function(n,a,l,e,t){var r;return null!=(r=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"complete",b_icon:"done",b_aria_title:"Mark as Complete",b_icon_type:"light",b_class:"btn-success"},data:t,helpers:l,partials:e,decorators:n.decorators}))?r:""},109:function(n,a,l,e,t){return" d-xl-none"},111:function(n,a,l,e,t){var r,o=null!=a?a:n.nullContext||{};return null!=(r=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"complete",b_icon:"edit",b_aria_title:"Mark as In Progress",b_class:l.concat.call(o,"btn-warning px-2",l.which.call(o,null!=a?a.wide:a," px-sm-3","",{name:"which",hash:{},data:t}),{name:"concat",hash:{},data:t})},data:t,helpers:l,partials:e,decorators:n.decorators}))?r:""},113:function(n,a,l,e,t){var r,o=null!=a?a:n.nullContext||{};return null!=(r=n.invokePartial(e.control_button,a,{name:"control_button",hash:{b_action:"complete",b_icon:"done",b_aria_title:"Mark as Complete",b_icon_type:"light",b_class:l.concat.call(o,"btn-success px-2",l.which.call(o,null!=a?a.wide:a," px-sm-3","",{name:"which",hash:{},data:t}),{name:"concat",hash:{},data:t})},data:t,helpers:l,partials:e,decorators:n.decorators}))?r:""},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t,r,o){var i,s=null!=a?a:n.nullContext||{};return"<div "+(null!=(i=l.exists.call(s,null!=a?a._countdown:a,{name:"exists",hash:{},fn:n.program(1,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.if.call(s,null!=a?a.ZOMBIE:a,{name:"if",hash:{},fn:n.program(3,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.if.call(s,null!=a?a.GHOST:a,{name:"if",hash:{},fn:n.program(5,t,0,r,o),inverse:n.noop,data:t}))?i:"")+'class="item px-1'+(null!=(i=l.if.call(s,null!=a?a.editable:a,{name:"if",hash:{},fn:n.program(7,t,0,r,o),inverse:n.program(9,t,0,r,o),data:t}))?i:"")+(null!=(i=l.if.call(s,null!=a?a._complete:a,{name:"if",hash:{},fn:n.program(11,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.unless.call(s,null!=a?a._complete:a,{name:"unless",hash:{},fn:n.program(13,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.if.call(s,null!=a?a.ZOMBIE:a,{name:"if",hash:{},fn:n.program(19,t,0,r,o),inverse:n.program(21,t,0,r,o),data:t}))?i:"")+'"'+(null!=(i=l.exists.call(s,null!=a?a.$loki:a,{name:"exists",hash:{},fn:n.program(23,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.unless.call(s,null!=a?a._timed:a,{name:"unless",hash:{},fn:n.program(25,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.exists.call(s,null!=a?a._title:a,{name:"exists",hash:{},fn:n.program(30,t,0,r,o),inverse:n.noop,data:t}))?i:"")+'>\n  <div class="display'+(null!=(i=l.if.call(s,null!=a?a.GHOST:a,{name:"if",hash:{},fn:n.program(32,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.if.call(s,null!=a?a.ZOMBIE:a,{name:"if",hash:{},fn:n.program(34,t,0,r,o),inverse:n.noop,data:t}))?i:"")+'">\n    '+(null!=(i=l.if.call(s,l.all.call(s,null!=a?a._icon:a,null!=a?a._link:a,{name:"all",hash:{},data:t}),{name:"if",hash:{},fn:n.program(36,t,0,r,o),inverse:n.noop,data:t}))?i:"")+"\n    "+(null!=(i=l.if.call(s,null!=a?a._timed:a,{name:"if",hash:{},fn:n.program(38,t,0,r,o),inverse:n.noop,data:t}))?i:"")+"\n    "+(null!=(i=l.unless.call(s,null!=a?a._complete:a,{name:"unless",hash:{},fn:n.program(40,t,0,r,o),inverse:n.noop,data:t}))?i:"")+"\n    "+(null!=(i=l.if.call(s,null!=a?a._complete:a,{name:"if",hash:{},fn:n.program(49,t,0,r,o),inverse:n.noop,data:t}))?i:"")+(null!=(i=l.if.call(s,null!=a?a.dates:a,{name:"if",hash:{},fn:n.program(51,t,0,r,o),inverse:n.program(60,t,0,r,o),data:t}))?i:"")+(null!=(i=l.if.call(s,null!=a?a.DISPLAY:a,{name:"if",hash:{},fn:n.program(91,t,0,r,o),inverse:n.program(93,t,0,r,o),data:t}))?i:"")+(null!=(i=l.if.call(s,null!=a?a._complete:a,{name:"if",hash:{},fn:n.program(95,t,0,r,o),inverse:n.noop,data:t}))?i:"")+"\n  </div>\n  "+(null!=(i=l.if.call(s,null!=a?a.editable:a,{name:"if",hash:{},fn:n.program(97,t,0,r,o),inverse:n.noop,data:t}))?i:"")+"\n</div>\n"},usePartial:!0,useData:!0,useDepths:!0})}();