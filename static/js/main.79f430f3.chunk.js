(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(11),o=n.n(s),c=n(2),l=n(3),i=n(4),u=n(7),d=n(6),h=(n(18),n(19),"https://mate-api.herokuapp.com");function m(e){return fetch("".concat(h,"/users/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))}var p=n(5),f=n.n(p),v=n(1),E=n.n(v),b=(E.a.bool,E.a.string.isRequired,E.a.number,E.a.func.isRequired,function(e){var t=e.completed,n=e.title,a=e.userId,s=e.handle\u0421hangeUserId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:t}),r.a.createElement("p",null,n)),r.a.createElement("button",{className:f()("button",{"TodoList__user-button--selected":t}),type:"button",onClick:function(){return s(a)}},"User #",a))});b.defaultProps={userId:0,completed:!1};var g={showedTodos:E.a.string.isRequired,filterText:E.a.string.isRequired,handleChange:E.a.func.isRequired},_=function(e){var t=e.filterText,n=e.handleChange,a=e.showedTodos;return r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Search",name:"filterText",value:t,onChange:n}),r.a.createElement("select",{name:"showedTodos",value:a,onChange:n},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"active"},"Active"),r.a.createElement("option",{value:"completed"},"Completed")))},T=n(8),I=(Object(T.a)(Object(T.a)({},g),{},{todos:E.a.arrayOf(E.a.shape({id:E.a.number.isRequired,userId:E.a.number,completed:E.a.bool,title:E.a.string.isRequired}))}),n(22),function(e){var t=e.todos,n=e.filterText,a=e.handleChange,s=e.showedTodos,o=e.handle\u0421hangeUserId;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement(_,{filterText:n,handleChange:a,showedTodos:s}),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){var t=e.completed,n=e.id,s=e.title,c=e.userId;return r.a.createElement("li",{key:n,className:f()("TodoList__item",{"TodoList__item--checked":t,"TodoList__item--unchecked":!t})},r.a.createElement(b,{completed:t,title:s,userId:c,handleChange:a,"handle\u0421hangeUserId":o}))})))))}),U=n(9),C=n.n(U),w=n(12),y=(n(24),E.a.number.isRequired,E.a.func.isRequired,function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e.changeUser=Object(w.a)(C.a.mark((function t(){var n,a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.userId,t.prev=1,t.next=4,m(n);case 4:a=t.sent,e.setState({user:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.warn(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.changeUser()}},{key:"componentDidUpdate",value:function(e){var t=this.props.userId;e.userId!==t&&this.changeUser()}},{key:"render",value:function(){var e=this.props,t=e.userId,n=e.resetUserId,a=this.state.user,s=a.name,o=a.email,c=a.phone;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",t)),r.a.createElement("h3",{className:"CurrentUser__name"},s),r.a.createElement("p",{className:"CurrentUser__email"},o),r.a.createElement("p",{className:"CurrentUser__phone"},c),r.a.createElement("button",{type:"button",className:"CurrentUser__clear button",onClick:n},"Clear"))}}]),n}(r.a.Component)),k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,filterText:"",showedTodos:"all"},e.handle\u0421hangeUserId=function(t){e.setState({selectedUserId:t})},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(c.a)({},a,r))},e.resetUserId=function(){e.setState({selectedUserId:0})},e.getFiltredTodos=function(){var t=e.state,n=t.todos,a=t.filterText,r=t.showedTodos,s={all:function(){return!0},active:function(e){return!e},completed:function(e){return e}};return n.filter((function(e){var t=e.title,n=e.completed,o=t.toLowerCase(),c=a.toLowerCase();return o.includes(c)&&s[r](n)}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(h,"/todos")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e.filter((function(e){var t=e.id,n=e.title;return t&&n}))})).then((function(t){e.setState({todos:t})})).catch((function(e){return console.warn(e)}))}},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.filterText,a=e.showedTodos;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(I,{todos:this.getFiltredTodos(),selectUserId:this.selectUserId,filterText:n,handleChange:this.handleChange,"handle\u0421hangeUserId":this.handle\u0421hangeUserId,showedTodos:a})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},t?r.a.createElement(y,{userId:t,resetUserId:this.resetUserId}):"No user selected")))}}]),n}(r.a.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.79f430f3.chunk.js.map