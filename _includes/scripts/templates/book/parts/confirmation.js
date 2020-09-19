!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).confirmation=n({1:function(n,l,t,e,r){var a,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"  "+(null!=(a=o(t,"is").call(null!=l?l:n.nullContext||{},null!=l?o(l,"confirmed"):l,!0,{name:"is",hash:{},fn:n.program(2,r,0),inverse:n.program(7,r,0),data:r,loc:{start:{line:2,column:2},end:{line:2,column:478}}}))?a:"")+"\n"},2:function(n,l,t,e,r){var a,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<i class="material-icons text-light'+(null!=(a=o(t,"if").call(null!=l?l:n.nullContext||{},null!=l?o(l,"class"):l,{name:"if",hash:{},fn:n.program(3,r,0),inverse:n.program(5,r,0),data:r,loc:{start:{line:2,column:59},end:{line:2,column:113}}}))?a:"")+'" data-toggle="tooltip" data-html="true" title="Resource Availability has been <strong>confirmed</strong>.">check_circle</i>'},3:function(n,l,t,e,r){var a=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return" "+n.escapeExpression(n.lambda(null!=l?a(l,"class"):l,l))},5:function(n,l,t,e,r){return" ml-1 mr-2 md-18"},7:function(n,l,t,e,r){var a,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<i class="material-icons text-secondary'+(null!=(a=o(t,"if").call(null!=l?l:n.nullContext||{},null!=l?o(l,"class"):l,{name:"if",hash:{},fn:n.program(3,r,0),inverse:n.program(5,r,0),data:r,loc:{start:{line:2,column:284},end:{line:2,column:338}}}))?a:"")+'" data-toggle="tooltip" data-html="true" title="Resource Availability has <strong>NOT</strong> <em>yet</em> been confirmed.">help</i>'},9:function(n,l,t,e,r){var a,o=null!=l?l:n.nullContext||{},i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(a=i(t,"if").call(o,i(t,"all").call(o,i(t,"present").call(o,null!=l?i(l,"declined"):l,{name:"present",hash:{},data:r,loc:{start:{line:4,column:14},end:{line:4,column:32}}}),i(t,"is").call(o,null!=l?i(l,"responseStatus"):l,"declined",{name:"is",hash:{},data:r,loc:{start:{line:4,column:33},end:{line:4,column:63}}}),{name:"all",hash:{},data:r,loc:{start:{line:4,column:9},end:{line:4,column:64}}}),{name:"if",hash:{},fn:n.program(10,r,0),inverse:n.noop,data:r,loc:{start:{line:4,column:2},end:{line:4,column:265}}}))?a:""},10:function(n,l,t,e,r){var a,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<i class="material-icons text-danger'+(null!=(a=o(t,"if").call(null!=l?l:n.nullContext||{},null!=l?o(l,"class"):l,{name:"if",hash:{},fn:n.program(3,r,0),inverse:n.program(5,r,0),data:r,loc:{start:{line:4,column:102},end:{line:4,column:156}}}))?a:"")+'" data-toggle="tooltip" data-html="true" title="Resource is <strong>NOT</strong> AVAILABLE">error</i>'},compiler:[8,">= 4.3.0"],main:function(n,l,t,e,r){var a,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(a=o(t,"present").call(null!=l?l:n.nullContext||{},null!=l?o(l,"confirmed"):l,{name:"present",hash:{},fn:n.program(1,r,0),inverse:n.program(9,r,0),data:r,loc:{start:{line:1,column:0},end:{line:5,column:13}}}))?a:""},useData:!0})}();