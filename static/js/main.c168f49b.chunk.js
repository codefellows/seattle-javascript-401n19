(this["webpackJsonpclass-27-review"]=this["webpackJsonpclass-27-review"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(6),r=n(11),i=n(10),s=n(1),u=n.n(s),j=n(8),l=n.n(j),o=n(9),b=n(2),d=n(4),O=n.n(d),h=(n(17),n(0));var f=function(e){var t=e.title;return Object(h.jsx)("header",{children:Object(h.jsx)("h1",{title:"Header","data-testid":"header",className:"header",children:t})})};var v=function(){return Object(h.jsx)("footer",{children:"\xa9 2018"})};n(19);var p=function(e){var t=Object(s.useState)(""),n=Object(b.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(""),i=Object(b.a)(r,2),u=i[0],j=i[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={method:u,url:c};e.handleApiCall(n)},children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"URL: "}),Object(h.jsx)("input",{name:"url",type:"text",onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("button",{"data-testid":"submit-form-button",type:"submit",children:"Submit"}),Object(h.jsx)("button",{"data-testid":"clear-form-button",type:"submit",children:"Clear"})]}),Object(h.jsxs)("label",{className:"methods",children:[Object(h.jsx)("span",{className:"GET"===u?"active":"inactive",id:"get",onClick:function(){return j("GET")},children:"GET"}),Object(h.jsx)("span",{className:"POST"===u?"active":"inactive",id:"post",onClick:function(){return j("POST")},children:"POST"}),Object(h.jsx)("span",{className:"PUT"===u?"active":"inactive",id:"put",onClick:function(){return j("PUT")},children:"PUT"}),Object(h.jsx)("span",{className:"DELETE"===u?"active":"inactive",id:"delete",onClick:function(){return j("DELETE")},children:"DELETE"})]})]})})};var m=function(e){var t=e.loading,n=e.data;return Object(h.jsx)("section",{children:t?Object(h.jsx)("div",{children:"LOADING..."}):Object(h.jsx)("pre",{children:n?JSON.stringify(n,void 0,2):null})})};var x=function(){var e=Object(s.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)({}),r=Object(b.a)(a,2),i=r[0],j=r[1],l=Object(s.useState)(!1),d=Object(b.a)(l,2),x=d[0],E=d[1];Object(s.useEffect)((function(){console.log("I am the useEffect only when data updates")}),[n]);var g=function(){var e=Object(o.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(t),E(!0),e.next=4,setTimeout((function(){c({count:2,results:[{name:"fake thing 1",url:"http://fakethings.com/1"},{name:"fake thing 2",url:"http://fakethings.com/2"}]}),E(!1)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(u.a.Fragment,{children:[Object(h.jsx)(f,{title:"RESTy"}),Object(h.jsxs)("div",{children:["Request Method:",i.method]}),Object(h.jsxs)("div",{children:["URL: ",i.url]}),Object(h.jsx)(p,{handleApiCall:g}),Object(h.jsx)(m,{loading:x,data:n}),Object(h.jsx)(v,{})]})},E=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(h.jsx)(x,{})}}]),n}(u.a.Component),g=document.getElementById("root");l.a.render(Object(h.jsx)(E,{}),g)}},[[20,1,2]]]);
//# sourceMappingURL=main.c168f49b.chunk.js.map