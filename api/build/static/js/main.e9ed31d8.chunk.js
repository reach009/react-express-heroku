(this["webpackJsonpusing-pre-built-react-components"]=this["webpackJsonpusing-pre-built-react-components"]||[]).push([[0],{47:function(e,t,n){e.exports=n(75)},75:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(7),r=n.n(c),o=n(33),u=n(34),i=n(42),s=n(35),m=n(43),v=n(36),f=n.n(v);var d=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(f.a,null),"Keeper"))},h=n(38),p=n.n(h);var E=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright ",l.a.createElement(p.a,null)," ",e))},g=n(39),b=n.n(g);var D=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(b.a,null)))},j=n(18),O=n(40),k=n(23),y=n(41),C=n.n(y),w=n(90),A=n(91);var I=function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)({title:"",content:""}),u=Object(k.a)(o,2),i=u[0],s=u[1];function m(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(O.a)({},e,Object(j.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},c&&l.a.createElement("input",{name:"title",onChange:m,value:i.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){r(!0)},onChange:m,value:i.content,placeholder:"Take a note...",rows:c?3:1}),l.a.createElement(A.a,{in:c},l.a.createElement(w.a,{onClick:function(t){e.onAdd(i),s({title:"",content:""}),t.preventDefault()}},l.a.createElement(C.a,null)))))},S=n(21),x=n.n(S),J=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={notes:[]},n.getData=function(){x.a.get("/notes").then((function(e){var t=e.data;n.setState({notes:t})}))},n.addData=function(e){x.a.post("/notes",e).then((function(e){console.log(e),console.log(e.data)})),n.getData()},n.removeData=function(e){x.a.delete("/notes/"+e).then((function(e){console.log(e)})),n.getData()},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData(),this.interval=setInterval(this.getData,5e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(I,{onAdd:this.addData}),this.state.notes.map((function(t,n){return l.a.createElement(D,{key:n,id:t._id,title:t.title,content:t.content,onDelete:e.removeData})})),l.a.createElement(E,null))}}]),t}(a.Component);r.a.render(l.a.createElement(J,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e9ed31d8.chunk.js.map