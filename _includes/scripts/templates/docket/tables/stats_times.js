!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).stats_times=n({1:function(n,a,s,l,e){var t;return'<div class="small pb-2 border-bottom">\n    <span class="display-5 d-flex align-items-center">\n      <i class="material-icons md-36 mr-2">schedule</i>\n      <span class="font-weight-bold text-secondary mr-2">'+n.escapeExpression(n.lambda(null!=a?a.timed:a,a))+'</span>\n      <span class="small text-danger font-weight-lighter">timed items</span>\n    </span>\n    '+(null!=(t=s.if.call(null!=a?a:n.nullContext||{},null!=a?a.future:a,{name:"if",hash:{},fn:n.program(2,e,0),inverse:n.noop,data:e}))?t:"")+"\n  </div>"},2:function(n,a,s,l,e){return'<span class="display-5 d-flex align-items-center">\n      <span class="font-weight-bold text-primary mr-2">'+n.escapeExpression(n.lambda(null!=a?a.future:a,a))+'</span>\n      <span class="small text-dark font-weight-lighter">scheduled in the <b>future</b></span>\n    </span>'},4:function(n,a,s,l,e){var t=n.lambda,i=n.escapeExpression;return'<div class="small mt-2 pb-2 border-bottom">\n    <span class="display-5 d-flex flex-row align-items-center">\n      <i class="material-icons md-36 mr-2">av_timer</i>\n      <span class="text-secondary mr-2">'+i(t(null!=a?a.durations:a,a))+'</span>\n      <span class="small text-info font-weight-lighter mr-2">items totalling</span>\n      <span class="small font-weight-normal text-dark" data-toggle="tooltip" title="'+i(t(null!=a?a.hours:a,a))+' hrs">'+i(t(null!=a?a.duration:a,a))+"</span>\n    </span>\n  </div>"},compiler:[7,">= 4.0.0"],main:function(n,a,s,l,e){var t,i=null!=a?a:n.nullContext||{};return'<div class="d-flex nvh-25 flex-column py-2 px-3 bg-light border">\n  '+(null!=(t=s.exists.call(i,null!=a?a.timed:a,{name:"exists",hash:{},fn:n.program(1,e,0),inverse:n.noop,data:e}))?t:"")+"\n  "+(null!=(t=s.if.call(i,null!=a?a.durations:a,{name:"if",hash:{},fn:n.program(4,e,0),inverse:n.noop,data:e}))?t:"")+'\n  <div class="small mt-2">\n    <span class="display-5 d-flex flex-row align-items-center">\n      <i class="material-icons md-36 mr-2">linear_scale</i>\n      <span class="display-6 text-black graph-tooltip"></span>\n    </span>\n  </div>\n</div>\n'},useData:!0})}();