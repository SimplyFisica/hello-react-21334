(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=a(16),i=a(2),u=a(4),s=a.n(u),m=function(e){var t=e.title;return r.a.createElement("nav",{className:"justify-content-center navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/#"},t))},d=function(e){var t=e.id,a=e.initialTitle,c=e.initialText,l=e.removeNote,o=e.updateNote,u=Object(n.useState)(a),s=Object(i.a)(u,2),m=s[0],d=s[1],f=Object(n.useState)(c),b=Object(i.a)(f,2),v=b[0],E=b[1],h=Object(n.useState)(!1),p=Object(i.a)(h,2),N=p[0],g=p[1];return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("input",{style:{backgroundColor:"transparent",border:"none",fontSize:"1.25rem",marginBottom:"0.75rem"},spellCheck:!1,disabled:!N,value:m,onChange:function(e){return d(e.target.value)}}),r.a.createElement("textarea",{rows:5,style:{backgroundColor:"transparent",border:"none"},spellCheck:!1,disabled:!N,value:v,onChange:function(e){return E(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn",hidden:N,onClick:function(){return g(!N)}},r.a.createElement("i",{className:"text-secondary fa fa-pencil fa-lg"})),r.a.createElement("button",{className:"btn",hidden:!N,onClick:function(){o(t,m,v),g(!N)}},r.a.createElement("i",{className:"text-secondary fa fa-save fa-lg"})),r.a.createElement("button",{className:"btn",onClick:function(){return l(t)}},r.a.createElement("i",{className:"text-danger fa fa-trash fa-lg"}))))},f=function(e){var t=e.notes,a=e.removeNote,n=e.updateNote;return r.a.createElement("div",{className:"card-columns"},t.map((function(e){return r.a.createElement(d,{id:e._id,key:e._id,initialTitle:e.title,initialText:e.text,removeNote:a,updateNote:n})})))},b=function(e){var t=e.addNote,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(""),s=Object(i.a)(u,2),m=s[0],d=s[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:l,text:m}),o(""),d("")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"T\xedtulo"),r.a.createElement("input",{id:"title",className:"form-control",type:"text",value:l,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"text"},"Texto"),r.a.createElement("textarea",{id:"text",className:"form-control",value:m,rows:"4",onChange:function(e){return d(e.target.value)}})),r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Guardar"}))},v=function(){return r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("hr",null),r.a.createElement("h4",{className:"text-muted"},"Hello React"),r.a.createElement("a",{href:"https://github.com/santiagotrini/hello-react"},r.a.createElement("i",{className:"fa fa-github fa-3x text-dark"})))},E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){s.a.get("/api/notes").then((function(e){c(e.data.notes)}))}),[]);return r.a.createElement("div",null,r.a.createElement(m,{title:"Notas"}),r.a.createElement("div",{className:"container mt-3"},r.a.createElement(b,{addNote:function(e){s.a.post("/api/notes",e).then((function(e){var t=[e.data].concat(Object(o.a)(a));c(t)}))}}),r.a.createElement("hr",null),r.a.createElement(f,{notes:a,removeNote:function(e){s.a.delete("/api/notes/"+e).then((function(t){var n=a.filter((function(t){return t._id!==e}));c(n)}))},updateNote:function(e,t,n){var r={title:t,text:n};s.a.put("/api/notes/"+e,r).then((function(t){var n=a.map((function(t){return t.id===e?r:t}));c(n)}))}})),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.bcfb8578.chunk.js.map