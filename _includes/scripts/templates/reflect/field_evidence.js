!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).field_evidence=n({1:function(n,a,l,e,t){return"\x3c!-- "+n.escapeExpression(n.lambda(null!=a?a.description:a,a))+" --\x3e"},3:function(n,a,l,e,t){return' name="'+n.escapeExpression(n.lambda(null!=a?a.name:a,a))+'"'},5:function(n,a,l,e,t){return' style="'+n.escapeExpression(n.lambda(null!=a?a.style:a,a))+'"'},7:function(n,a,l,e,t){return" "+n.escapeExpression(n.lambda(null!=a?a.class:a,a))},9:function(n,a,l,e,t){return' data-field="'+n.escapeExpression(n.lambda(null!=a?a.field:a,a))+'"'},11:function(n,a,l,e,t){return' data-order="'+n.escapeExpression(n.lambda(null!=a?a.order:a,a))+'"'},13:function(n,a,l,e,t){return" input-group-lg"},15:function(n,a,l,e,t){return" form-control-lg"},17:function(n,a,l,e,t){return n.escapeExpression(n.lambda(null!=a?a.details:a,a))},19:function(n,a,l,e,t){return"Details"},21:function(n,a,l,e,t){return' aria-describedby="'+n.escapeExpression(n.lambda(null!=a?a.id:a,a))+'_HELP"'},23:function(n,a,l,e,t){return" btn-group-lg"},25:function(n,a,l,e,t){return" btn-lg"},27:function(n,a,l,e,t){var r,i=null!=a?a:n.nullContext||{};return"\t\t\t\t"+(null!=(r=l.if.call(i,null!=a?a.divider:a,{name:"if",hash:{},fn:n.program(28,t,0),inverse:n.noop,data:t}))?r:"")+'\n\t\t\t\t<a class="dropdown-item'+(null!=(r=l.if.call(i,null!=a?a.value:a,{name:"if",hash:{},fn:n.program(30,t,0),inverse:n.noop,data:t}))?r:"")+(null!=(r=l.if.call(i,null!=a?a.class:a,{name:"if",hash:{},fn:n.program(7,t,0),inverse:n.noop,data:t}))?r:"")+'" href="#" data-value="'+(null!=(r=l.if.call(i,null!=a?a.value:a,{name:"if",hash:{},fn:n.program(32,t,0),inverse:n.program(34,t,0),data:t}))?r:"")+'">'+(null!=(r=l.if.call(i,null!=a?a.name:a,{name:"if",hash:{},fn:n.program(36,t,0),inverse:n.program(34,t,0),data:t}))?r:"")+"</a>\t\t\n"},28:function(n,a,l,e,t){return'<div class="dropdown-divider"></div>'},30:function(n,a,l,e,t){return" "+n.escapeExpression(n.lambda(null!=a?a.value:a,a))+"_SELECTOR "},32:function(n,a,l,e,t){return n.escapeExpression(n.lambda(null!=a?a.value:a,a))},34:function(n,a,l,e,t){return n.escapeExpression(n.lambda(a,a))},36:function(n,a,l,e,t){return n.escapeExpression(n.lambda(null!=a?a.name:a,a))},38:function(n,a,l,e,t){var r,i=n.lambda;return'<div id="'+n.escapeExpression(i(null!=a?a.id:a,a))+'_HELP" class="form-text text-muted mt-1 mt-md-2 text-justify">'+(null!=(r=i(null!=a?a.help:a,a))?r:"")+"</div>"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){var r,i=null!=a?a:n.nullContext||{},o=n.lambda,s=n.escapeExpression;return(null!=(r=l.if.call(i,null!=a?a.description:a,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?r:"")+'\n<div id="'+s(o(null!=a?a.id:a,a))+'" '+(null!=(r=l.if.call(i,null!=a?a.name:a,{name:"if",hash:{},fn:n.program(3,t,0),inverse:n.noop,data:t}))?r:"")+(null!=(r=l.if.call(i,null!=a?a.style:a,{name:"if",hash:{},fn:n.program(5,t,0),inverse:n.noop,data:t}))?r:"")+' class="evidence-holder'+(null!=(r=l.if.call(i,null!=a?a.class:a,{name:"if",hash:{},fn:n.program(7,t,0),inverse:n.noop,data:t}))?r:"")+'"'+(null!=(r=l.if.call(i,null!=a?a.field:a,{name:"if",hash:{},fn:n.program(9,t,0),inverse:n.noop,data:t}))?r:"")+" "+(null!=(r=l.if.call(i,null!=a?a.order:a,{name:"if",hash:{},fn:n.program(11,t,0),inverse:n.noop,data:t}))?r:"")+'>\n\t<div class="input-group'+(null!=(r=l.if.call(i,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(13,t,0),inverse:n.noop,data:t}))?r:"")+' evidence">\n\t\t<textarea id="'+s(o(null!=a?a.id:a,a))+'_DETAILS" class="form-control'+(null!=(r=l.if.call(i,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(15,t,0),inverse:n.noop,data:t}))?r:"")+' resizable optional" data-output-name="Details" rows="1" aria-label="'+(null!=(r=l.if.call(i,null!=a?a.details:a,{name:"if",hash:{},fn:n.program(17,t,0),inverse:n.program(19,t,0),data:t}))?r:"")+'" placeholder="'+(null!=(r=l.if.call(i,null!=a?a.details:a,{name:"if",hash:{},fn:n.program(17,t,0),inverse:n.program(19,t,0),data:t}))?r:"")+'"'+(null!=(r=l.if.call(i,null!=a?a.help:a,{name:"if",hash:{},fn:n.program(21,t,0),inverse:n.noop,data:t}))?r:"")+'></textarea>\n\t\t<div class="btn-group'+(null!=(r=l.if.call(i,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(23,t,0),inverse:n.noop,data:t}))?r:"")+'">\n\t\t\t<button id="'+s(o(null!=a?a.id:a,a))+'_TYPE" type="button" class="btn'+(null!=(r=l.if.call(i,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(25,t,0),inverse:n.noop,data:t}))?r:"")+' btn-dark complex-list-type" data-default="'+s(o(null!=a?a.type:a,a))+'">'+s(o(null!=a?a.type:a,a))+'</button>\n\t\t\t<button type="button" class="btn'+(null!=(r=l.if.call(i,null!=a?a.large:a,{name:"if",hash:{},fn:n.program(25,t,0),inverse:n.noop,data:t}))?r:"")+' btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n\t\t\t\t<span class="sr-only">Toggle Dropdown</span>\n\t\t\t</button>\n\t\t\t<div class="dropdown-menu">\n'+(null!=(r=l.each.call(i,null!=a?a.options:a,{name:"each",hash:{},fn:n.program(27,t,0),inverse:n.noop,data:t}))?r:"")+'\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id="'+s(o(null!=a?a.id:a,a))+'_LIST" class="list-data d-flex flex-column mt-1 mt-md-2" data-output-name="Evidence"></div>\n\t'+(null!=(r=l.if.call(i,null!=a?a.help:a,{name:"if",hash:{},fn:n.program(38,t,0),inverse:n.noop,data:t}))?r:"")+"\n</div>\n"},useData:!0})}();