!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).date=n({1:function(n,l,a,e,t){var i,s=null!=l?l:n.nullContext||{},r=n.lambda,o=n.escapeExpression;return'<div class="row d-flex flex-row align-items-center mt-3 mt-md-1">\n  <div class="d-none d-md-inline">\n    <h4 class="display-4 col-12 mb-lg-0 d-inline-flex flex-column flex-md-row">\n      <span class="text-muted font-weight-normal'+(null!=(i=a.if.call(s,null!=l?l.subtitle:l,{name:"if",hash:{},fn:n.program(2,t,0),inverse:n.noop,data:t}))?i:"")+'">'+o(r(null!=l?l.title:l,l))+"</span>"+(null!=(i=a.if.call(s,null!=l?l.subtitle:l,{name:"if",hash:{},fn:n.program(4,t,0),inverse:n.noop,data:t}))?i:"")+'</h4>\n  </div>\n  <div class="d-inline d-md-none">\n    <h4 class="display-5 col-12 mb-lg-0 d-inline-flex flex-column flex-md-row">\n      <span class="text-muted font-weight-normal'+(null!=(i=a.if.call(s,null!=l?l.subtitle:l,{name:"if",hash:{},fn:n.program(2,t,0),inverse:n.noop,data:t}))?i:"")+'">'+o(r(null!=l?l.title:l,l))+"</span>"+(null!=(i=a.if.call(s,null!=l?l.subtitle:l,{name:"if",hash:{},fn:n.program(4,t,0),inverse:n.noop,data:t}))?i:"")+'</h4>\n  </div>\n  <div class="d-inline d-inline d-flex flex-column flex-md-row align-items-center">'+(null!=(i=a.unless.call(s,null!=l?l.dateless:l,{name:"unless",hash:{},fn:n.program(6,t,0),inverse:n.noop,data:t}))?i:"")+(null!=(i=a.if.call(s,null!=l?l.add:l,{name:"if",hash:{},fn:n.program(11,t,0),inverse:n.noop,data:t}))?i:"")+(null!=(i=a.if.call(s,null!=l?l.instructions:l,{name:"if",hash:{},fn:n.program(13,t,0),inverse:n.noop,data:t}))?i:"")+"</div>\n</div>"},2:function(n,l,a,e,t){return" mr-3"},4:function(n,l,a,e,t){return'<span class="d-block d-md-inline subtitle font-weight-light">'+n.escapeExpression(n.lambda(null!=l?l.subtitle:l,l))+"</span>"},6:function(n,l,a,e,t){var i;return'<a href="#date" class="d-flex text-decoration-none">\n      <i class="material-icons md-24 mb-2 mb-md-0 ml-md-2 mr-md-'+(null!=(i=a.unless.call(null!=l?l:n.nullContext||{},null!=l?l.instructions:l,{name:"unless",hash:{},fn:n.program(7,t,0),inverse:n.program(9,t,0),data:t}))?i:"")+' text-light bg-dark p-1 rounded">swap_calls</i>\n    </a>'},7:function(n,l,a,e,t){return"3"},9:function(n,l,a,e,t){return"1"},11:function(n,l,a,e,t){var i;return null!=(i=n.invokePartial(e.control_button,l,{name:"control_button",hash:{b_command:a.either.call(null!=l?l:n.nullContext||{},null!=l?l.add_command:l,"add",{name:"either",hash:{},data:t}),b_icon_type:"light",b_icon:"add_circle_outline",b_tooltip:null!=l?l.add:l,b_class:"btn-success btn-sm mr-md-1 mb-1 mb-md-0",b_icon_large:"true",b_large:"true"},data:t,helpers:a,partials:e,decorators:n.decorators}))?i:""},13:function(n,l,a,e,t){return'<a href="#instructions.'+n.escapeExpression(n.lambda(null!=l?l.instructions:l,l))+'" class="d-flex text-decoration-none mb-1 mb-md-0">\n      <i class="material-icons md-24 mb-0 mr-md-3 text-light bg-dark p-1 rounded">help_outline</i>\n    </a>'},compiler:[7,">= 4.0.0"],main:function(n,l,a,e,t){var i;return null!=(i=a.if.call(null!=l?l:n.nullContext||{},null!=l?l.title:l,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?i:""},usePartial:!0,useData:!0})}();