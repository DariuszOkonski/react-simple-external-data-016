(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),s=n(3),r=n.n(s),c=(n(15),n(1)),u=n(4),o=n(5),m=n(7),i=n(6),h=n(8),E=(n(16),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"External data app"),l.a.createElement("h3",null,"Number of messages: ",l.a.createElement("span",null,e.numberOfElements)))}),f=function(e){return l.a.createElement("button",{onClick:e.clickReset},"Reset")},d=function(e){var t=e.element;return l.a.createElement("li",null,l.a.createElement("h4",null,t.title),l.a.createElement("p",null,t.body))},g=function(e){var t=e.messages,n=t.map(function(e){return l.a.createElement(d,{key:e.id,element:e})});return console.log(t),l.a.createElement("div",{className:"board"},l.a.createElement("ul",null,n.reverse()))},p=[];setInterval(function(){var e=p.length,t={id:e,title:"message nr ".concat(e),body:"this is message number ".concat(e)};p.push(t)},3e3);var b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).intervalIndex=null,n.state={messages:Object(c.a)(p)},n.checkExternalSource=function(){n.state.messages.length!==p.length&&n.setState({messages:Object(c.a)(p)})},n.handleReset=function(){p=[],n.setState({messages:[]})},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.intervalIndex=setInterval(this.checkExternalSource,2e3)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{numberOfElements:this.state.messages.length}),l.a.createElement(f,{clickReset:this.handleReset}),l.a.createElement(g,{messages:this.state.messages}))}}]),t}(a.Component);r.a.render(l.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.6c045024.chunk.js.map