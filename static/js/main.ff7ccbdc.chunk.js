(this.webpackJsonpquotesapp=this.webpackJsonpquotesapp||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var s=o(1),n=o.n(s),r=o(9),c=o.n(r),a=(o(14),o(8)),i=o(4),u=o(6),l=o(0),h=function(){return Object(l.jsxs)("header",{children:[Object(l.jsx)("div",{className:"logo",children:"Quote"}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#life",children:"Life"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#love",children:"Love"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#inspirational",children:"Inspirational"})})]})})]})},j=function(e){var t=e.quoteItem,o=e.index,s=e.onDelete;return console.log(t),console.log(o),Object(l.jsxs)("blockquote",{children:[Object(l.jsx)("i",{class:"fas fa-quote-left quote-1"}),Object(l.jsx)("p",{children:t.quote}),Object(l.jsx)("i",{class:"fas fa-quote-right quote-2"}),Object(l.jsxs)("footer",{children:[Object(l.jsx)("span",{style:{marginRight:"5px"},children:"\u223d"}),t.author,Object(l.jsx)("span",{style:{marginLeft:"5px"},children:"\u223d"})]}),Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"10px"},children:[Object(l.jsxs)("p",{children:["Published by ",Object(l.jsx)("span",{style:{fontStyle:"italic"},children:t.publisher})]}),Object(l.jsx)("i",{class:"fas fa-trash",style:{marginTop:"10px",cursor:"pointer"},onClick:function(){return s(o)}})]})]})},b=o(2),d=function(e){var t=e.addQuote,o=Object(s.useState)({quote:"",author:"",publisher:""}),n=Object(u.a)(o,2),r=n[0],c=n[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r&&(t(r),c({quote:"",author:"",publisher:""}))},children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("textarea",{name:"quote",id:"quote",cols:"30",rows:"10",placeholder:"Enter Quote...",value:r.quote,onChange:function(e){return c(Object(b.a)(Object(b.a)({},r),{},{quote:e.target.value}))}})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"text",className:"form-control",id:"author",name:"author",placeholder:"author",value:r.author,onChange:function(e){return c(Object(b.a)(Object(b.a)({},r),{},{author:e.target.value}))}})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"text",className:"form-control",id:"publisher",name:"publisher",placeholder:"Publisher",value:r.publisher,onChange:function(e){return c(Object(b.a)(Object(b.a)({},r),{},{publisher:e.target.value}))}})}),Object(l.jsx)("button",{children:"Submit"})]})},p=function(e){var t=e.quotes,o=e.addQuote,s=e.onDelete;return console.log(t),Object(l.jsxs)("div",{className:"display",children:[Object(l.jsx)("div",{className:"container",children:t.map((function(e,t){return Object(l.jsx)(j,{quoteItem:e,index:t,onDelete:s},t)}))}),Object(l.jsx)(d,{addQuote:o})]})};var f=function(){var e,t=Object(s.useState)([{quote:"Get busy living or get busy dying",author:"Stephen King",publisher:"Clark James"},{quote:"Many of life\u2019s failures are people who did not realize how close they were to success when they gave up.",author:"Thomas A. Edison",publisher:"Tamminga Budds"},{quote:"Your time is limited, so don\u2019t waste it living someone else\u2019s life. Don\u2019t be trapped by dogma \u2013 which is living with the results of other people\u2019s thinking.",author:"Steve Jobs",publisher:"Mcloud James"},{quote:"The whole secret of a successful life is to find out what is one\u2019s destiny to do, and then do it.",author:"Henry Ford",publisher:"Mabel Karani"},(e={quote:"Everything negative \u2013 pressure, challenges \u2013 is all an opportunity for me to rise.",author:"Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny."},Object(i.a)(e,"author","Lao-Tze"),Object(i.a)(e,"publisher","Curtis Carson"),e)]),o=Object(u.a)(t,2),n=o[0],r=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{}),Object(l.jsx)(p,{quotes:n,addQuote:function(e){console.log(e);var t=[].concat(Object(a.a)(n),[e]);r(t)},onDelete:function(e){var t=Object(a.a)(n);t.splice(e,1),r(t)}})]})},O=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(t){var o=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;o(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.ff7ccbdc.chunk.js.map