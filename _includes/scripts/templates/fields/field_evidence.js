!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).field_evidence=n({1:function(n,a,l,e,r){return"\x3c!-- "+n.escapeExpression(n.lambda(null!=a?a.description:a,a))+" --\x3e"},3:function(n,a,l,e,r){return' name="'+n.escapeExpression(n.lambda(null!=a?a.name:a,a))+'"'},5:function(n,a,l,e,r){return' style="'+n.escapeExpression(n.lambda(null!=a?a.style:a,a))+'"'},7:function(n,a,l,e,r){return" "+n.escapeExpression(n.lambda(null!=a?a.class:a,a))},9:function(n,a,l,e,r){return' data-field="'+n.escapeExpression(n.lambda(null!=a?a.field:a,a))+'"'},11:function(n,a,l,e,r){return' data-order="'+n.escapeExpression(n.lambda(null!=a?a.order:a,a))+'"'},13:function(n,a,l,e,r){return" input-group-lg"},15:function(n,a,l,e,r){return" form-control-lg"},17:function(n,a,l,e,r){return n.escapeExpression(n.lambda(null!=a?a.details:a,a))},19:function(n,a,l,e,r){return"Details"},21:function(n,a,l,e,r){return' aria-describedby="'+n.escapeExpression(n.lambda(null!=a?a.id:a,a))+'_HELP"'},23:function(n,a,l,e,r){return" btn-lg"},25:function(n,a,l,e,r){var t,i=null!=a?a:n.nullContext||{};return"\t\t\t\t"+(null!=(t=l.if.call(i,null!=a?a.divider:a,{name:"if",hash:{},fn:n.program(26,r,0),inverse:n.noop,data:r}))?t:"")+'\n\t\t\t\t<a class="dropdown-item'+(null!=(t=l.if.call(i,null!=a?a.value:a,{name:"if",hash:{},fn:n.program(28,r,0),inverse:n.noop,data:r}))?t:"")+(null!=(t=l.if.call(i,null!=a?a.class:a,{name:"if",hash:{},fn:n.program(7,r,0),inverse:n.noop,data:r}))?t:"")+'" href="#" data-value="'+(null!=(t=l.if.call(i,null!=a?a.value:a,{name:"if",hash:{},fn:n.program(30,r,0),inverse:n.program(32,r,0),data:r}))?t:"")+'">'+(null!=(t=l.if.call(i,null!=a?a.name:a,{name:"if",hash:{},fn:n.program(34,r,0),inverse:n.program(32,r,0),data:r}))?t:"")+"</a>\t\t\n"},26:function(n,a,l,e,r){return'<div class="dropdown-divider"></div>'},28:function(n,a,l,e,r){return" "+n.escapeExpression(n.lambda(null!=a?a.value:a,a))+"_SELECTOR "},30:function(n,a,l,e,r){return n.escapeExpression(n.lambda(null!=a?a.value:a,a))},32:function(n,a,l,e,r){return n.escapeExpression(n.lambda(a,a))},34:function(n,a,l,e,r){return n.escapeExpression(n.lambda(null!=a?a.name:a,a))},36:function(n,a,l,e,r){var t,i=n.lambda;return'<div id="'+n.escapeExpression(i(null!=a?a.id:a,a))+'_HELP" class="form-text text-muted mt-1 mt-md-2 text-justify">'+(null!=(t=i(null!=a?a.help:a,a))?t:"")+"</div>"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,r){var t,i=null!=a?a:n.nullContext||{},o=n.lambda,s=n.escapeExpression;return(null!=(t=l.if.call(i,null!=a?a.description:a,{name:"if",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r}))?t:"")+'\n<div id="'+s(o(null!=a?a.id:a,a))+'" '+(null!=(t=l.if.call(i,null!=a?a.name:a,{name:"if",hash:{},fn:n.program(3,r,0),inverse:n.noop,data:r}))?t:"")+(null!=(t=l.if.call(i,null!=a?a.style:a,{name:"if",hash:{},fn:n.program(5,r,0),inverse:n.noop,data:r}))?t:"")+' class="evidence-holder'+(null!=(t=l.if.call(i,null!=a?a.class:a,{name:"if",hash:{},fn:n.program(7,r,0),inverse:n.noop,data:r}))?t:"")+'"'+(null!=(t=l.if.call(i,null!=a?a.field:a,{name:"if",hash:{},fn:n.program(9,r,0),inverse:n.noop,data:r}))?t:"")+" "+(null!=(t=l.if.call(i,null!=a?a.order:a,{name:"if",hash:{},fn:n.program(11,r,0),inverse:n.noop,data:r}))?t:"")+'>\n\t<div class="input-group'+(null!=(t=l.if.call(i,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(13,r,0),inverse:n.noop,data:r}))?t:"")+' evidence">\n\t\t<textarea id="'+s(o(null!=a?a.id:a,a))+'_DETAILS" class="form-control'+(null!=(t=l.if.call(i,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(15,r,0),inverse:n.noop,data:r}))?t:"")+' resizable optional" data-output-name="Details" rows="1" aria-label="'+(null!=(t=l.if.call(i,null!=a?a.details:a,{name:"if",hash:{},fn:n.program(17,r,0),inverse:n.program(19,r,0),data:r}))?t:"")+'" placeholder="'+(null!=(t=l.if.call(i,null!=a?a.details:a,{name:"if",hash:{},fn:n.program(17,r,0),inverse:n.program(19,r,0),data:r}))?t:"")+'"'+(null!=(t=l.if.call(i,null!=a?a.help:a,{name:"if",hash:{},fn:n.program(21,r,0),inverse:n.noop,data:r}))?t:"")+'></textarea>\n\t\t<div class="input-group-append">\n\t\t\t<button id="'+s(o(null!=a?a.id:a,a))+'_TYPE" type="button" class="btn'+(null!=(t=l.if.call(i,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(23,r,0),inverse:n.noop,data:r}))?t:"")+' btn-dark complex-list-type dropdown-toggle" data-default="'+s(o(null!=a?a.type:a,a))+'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+s(o(null!=a?a.type:a,a))+'</button>\n\t\t\t<div class="dropdown-menu dropdown-menu-right">\n'+(null!=(t=l.each.call(i,null!=a?a.options:a,{name:"each",hash:{},fn:n.program(25,r,0),inverse:n.noop,data:r}))?t:"")+'\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id="'+s(o(null!=a?a.id:a,a))+'_LIST" class="list-data d-flex flex-column mt-1 mt-md-2" data-output-name="Evidence"></div>\n\t'+(null!=(t=l.if.call(i,null!=a?a.help:a,{name:"if",hash:{},fn:n.program(36,r,0),inverse:n.noop,data:r}))?t:"")+"\n</div>\n"},useData:!0})}();