(this["webpackJsonpreact-master"]=this["webpackJsonpreact-master"]||[]).push([[0],{36:function(e,t,n){"use strict";n.r(t);var o,r=n(0),c=n.n(r),a=n(12),i=n.n(a),l=n(21),s=n(16),b=n(4),d=n(2),u=n(7);!function(e){e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE"}(o||(o={}));var j=Object(u.b)({key:"category",default:o.TO_DO}),O=Object(u.b)({key:"toDo",default:[]}),f=Object(u.c)({key:"toDoSelector",get:function(e){var t=e.get,n=t(O),o=t(j);return n.filter((function(e){return e.category===o}))}}),h=n(5),g=n(22),m=n(3);var p=function(){var e=Object(u.f)(O),t=Object(u.e)(j),n=Object(g.a)(),o=n.register,r=n.handleSubmit,c=n.setValue;return Object(m.jsxs)("form",{onSubmit:r((function(n){var o=n.toDo;e((function(e){return[{text:o,id:Date.now(),category:t}].concat(Object(h.a)(e))})),c("toDo","")})),children:[Object(m.jsx)("input",Object(b.a)(Object(b.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(m.jsx)("button",{children:"add"})]})};var x=function(e){var t=e.text,n=e.category,r=e.id,c=Object(u.d)(O),a=Object(d.a)(c,2),i=a[0],l=a[1],s=function(e){var n=e.currentTarget.name;l((function(e){var o=e.findIndex((function(e){return e.id===r})),c={text:t,id:r,category:n};return[].concat(Object(h.a)(e.slice(0,o)),[c],Object(h.a)(e.slice(o+1)))}))};return localStorage.setItem("save",JSON.stringify(i)),localStorage.setItem("category",n),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:t}),n!==o.DOING&&Object(m.jsx)("button",{name:o.DOING,onClick:s,children:"Doing"}),n!==o.TO_DO&&Object(m.jsx)("button",{name:o.TO_DO,onClick:s,children:"To Do"}),n!==o.DONE&&Object(m.jsx)("button",{name:o.DONE,onClick:s,children:"Done"}),Object(m.jsx)("button",{onClick:function(){l((function(e){var t=e.findIndex((function(e){return e.id===r}));return[].concat(Object(h.a)(e.slice(0,t)),Object(h.a)(e.slice(t+1)))}))},children:"delete"})]})};var v,D=function(){var e=Object(u.f)(O),t=Object(u.e)(f),n=Object(u.d)(j),c=Object(d.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){if(localStorage.getItem("save")){var t=localStorage.getItem("save");e(JSON.parse(t))}}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"To Dos"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("select",{value:a,onInput:function(e){i(e.currentTarget.value)},children:[Object(m.jsx)("option",{value:o.TO_DO,children:"To Do"}),Object(m.jsx)("option",{value:o.DOING,children:"Doing"}),Object(m.jsx)("option",{value:o.DONE,children:"Done"})]}),Object(m.jsx)(p,{}),null===t||void 0===t?void 0:t.map((function(e){return Object(m.jsx)(x,Object(b.a)({},e),e.id)}))]})},y=Object(s.b)(v||(v=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var k=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(D,{})]})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(u.a,{children:Object(m.jsx)(s.a,{theme:{bgColor:"#2f3640",boxColor:"#1d242e",textColor:"#f5f6fa",accentColor:"#9c88ff"},children:Object(m.jsx)(k,{})})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.af471ddf.chunk.js.map