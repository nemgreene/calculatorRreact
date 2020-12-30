(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),r=a.n(c),i=a(10),u=a.n(i),o=(a(17),a(1)),s=a(7),v=(a(18),a(11)),f=a(8),b={addition:function(e,t){return parseFloat(e)+parseFloat(t)},subtraction:function(e,t){return parseFloat(e)-parseFloat(t)},multiplication:function(e,t){return parseFloat(e)*parseFloat(t)},division:function(e,t){return parseFloat(e)/parseFloat(t)},percentage:function(e,t){return parseFloat(e)/100*parseFloat(t)},exponent:function(e){return Math.pow(parseFloat(e),2)},fraction:function(e){return parseFloat(e)/100/100},sqrt:function(e){return Math.sqrt(parseFloat(e<0?Math.abs(e):e))*(e<1?-1:1)},neg:function(e){return-1*e},byHundred:function(e){return parseFloat(e)/100}},l=[[{name:"MC"},{name:"MR"},{name:"M+"},{name:"M-"},{name:"MS"}],[{name:"%",func:b.byHundred,trigger:!0},{name:"CE"},{name:"C"},{name:"DEL"}],[{name:"1/x",func:b.fraction,trigger:!0},{name:"x^2",func:b.exponent,trigger:!0},{name:"sqrt(x)",func:b.sqrt,trigger:!0},{name:"\xf7",func:b.division}],[{name:7},{name:8},{name:9},{name:"x",func:b.multiplication}],[{name:4},{name:5},{name:6},{name:"-",func:b.subtraction}],[{name:1},{name:2},{name:3},{name:"+",func:b.addition}],[{name:"+/-",func:b.neg,trigger:!0},{name:0},{name:"."},{name:"="}]],j=(a(19),l||[]);var m=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)({v1:"",v2:"",f:" "}),u=Object(s.a)(i,2),b=u[0],l=u[1],m=Object(c.useState)(!1),p=Object(s.a)(m,2),g=p[0],O=p[1],d=Object(c.useState)(0),h=Object(s.a)(d,2),x=h[0],F=h[1];return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(f.a,{style:{width:"500px",height:"390px",background:"grey",padding:"10px",margin:"auto",marginTop:"20px"},children:[Object(n.jsx)(f.a.Header,{style:{textAlign:"right",marginRight:"20px",marginTop:"10px",marginLeft:"20px",background:"lightGrey"},children:a||0}),Object(n.jsx)(f.a.Body,{children:j.map((function(e,t){return Object(n.jsx)("div",{className:"btn-toolbar",children:e.map((function(e,t){return Object(n.jsx)(v.a,{onClick:function(t){!function(e,t,a){var n=e.target.value,c="function"===typeof b.f,i=c?b.v2:b.v1,u=function(e,t){return l(c?Object(o.a)(Object(o.a)({},b),{},{v2:e,f:t||b.f}):Object(o.a)(Object(o.a)({},b),{},{v1:e,f:t||b.f})),c?b.v2:b.v1};if("."===n){if(i.includes("."))return;return u(i?i+".":"0."),void r(i?i+".":"0.")}switch(!isNaN(n)){case!0:g?(l(Object(o.a)(Object(o.a)({},b),{},{v1:n,v2:0,f:" "})),r(n),O(!1)):0===i||"clear"===b.f?(u(n,"clear"===b.f?" ":t),r(n)):(u(i+n),r(i+n));break;case!1:switch(n){case"DEL":if(g)return void l(Object(o.a)(Object(o.a)({},b),{},{v1:0}));var s=u(!c||g?b.v1.length>1?b.v1.slice(0,-1):0:b.v2.length>1?b.v2.slice(0,-1):0);r(s>0?s.slice(0,-1):0);break;case"MC":F(0);break;case"MS":r(" "),F(b.v1),l(Object(o.a)(Object(o.a)({},b),{},{v1:"",f:" "}));break;case"M-":r(x-b.v1),l(Object(o.a)(Object(o.a)({},b),{},{v1:x-b.v1})),O(!0);break;case"M+":r(x+b.v1),l(Object(o.a)(Object(o.a)({},b),{},{v1:x+b.v1})),O(!0);break;case"MR":r(x),l(Object(o.a)(Object(o.a)({},b),{},{v1:x,v2:0}));break;case"C":r(0),l({v1:"",v2:"",f:" "}),F(0);break;case"CE":r(""),g?l(Object(o.a)(Object(o.a)({},b),{},{v1:0,v2:0})):u("");break;case"=":if("function"!==typeof b.f)return;r((function(){return b.f(b.v1,b.v2)})),l(Object(o.a)(Object(o.a)({},b),{},{v1:b.f(b.v1,b.v2)})),O(!0);break;default:if(t&&a){if(!b.v1)return;l({v1:t(b.v1),v2:0,f:"clear"}),r(t(b.v1)),O(!1)}else b.f&&!a&&(l(Object(o.a)(Object(o.a)({},b),{},{v1:b.v1&&b.v2&&t&&!g?b.f(b.v1,b.v2):b.v1,v2:b.v1&&b.v2&&t?0:b.v2,f:t})),O(!1),b.v1&&b.v2&&t&&!g&&r(b.f(b.v1,b.v2)))}}}(t,e.func,e.trigger)},value:e.name,style:{display:"inline-block",width:"M"===e.name[0]?"87px":"109px"},children:e.name},e.name)}))},t)}))})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};u.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),p()}},[[20,1,2]]]);
//# sourceMappingURL=main.b1856b04.chunk.js.map