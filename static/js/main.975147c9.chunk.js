(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n(7),i=n.n(a),s=n(5),o=n(16),l=n(2),u=n(9),j=n(3),d="RESULT",h="STEP",b="NAME",p="START_GAME",f={result:[]},O=[{title:"Which of the following command is used to create react-js-app ?",variants:["npx create-react-app appname","npm install create-react-app","npx install create-react-app -g"],correct:0},{title:"In React.js which one of the followingis used to create a class for Inheritance ?",variants:["Create","Extends","Enherits","Delete"],correct:1},{title:"What is the default port number in which the application run ?",variants:["3000","8080","5000","3030"],correct:0},{title:"Which of the following valid component return type of React ?",variants:["2","5","1","3"],correct:2},{title:"Which of the following is a way to handle data in React.js ?",variants:["State & Props","Services & Components","State & Services","State & Component"],correct:0},{title:"Which of the following is must for the API in React.js ?",variants:[" SetinitialComponent","renderComponent","render","All of the above"],correct:1},{title:"In React.js, how we can pass the data from one component to another in React.js ?",variants:["SetState","Render with arguments","Props","PropTypes"],correct:2},{title:"Which of the following is true about key props ?",variants:['"Key" props are used to look beauty','"Key" prop is a way to identify the newly added element',"It is one type of attribute of HTML","It is not used in the array"],correct:1},{title:"What is the best definition of React.js ?",variants:["Server - side Framework","User - interface framework","A Library for building interaction interfaces","None of These"],correct:2},{title:"Which of the following is used to render components in web pages ?",variants:[" DOM_render()","render()","ReactDOM_render()","transfer()"],correct:0}],m={stepQ:1},v={name:""},g={start:!1},x=Object(s.b)({historyResultReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{result:[t.data].concat(Object(u.a)(e.result))});default:return e}},stepReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return e.stepQ>O.length?Object(j.a)(Object(j.a)({},e),{},{stepQ:1}):Object(j.a)(Object(j.a)({},e),{},{stepQ:Number(e.stepQ)+1});default:return e}},nameReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)({},e),{},{name:t.name});default:return e}},startReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(j.a)(Object(j.a)({},e),{},{start:t.start});default:return e}}}),w=(n(27),n(4)),y=(n(28),n(29),n(15)),R=n.n(y);function _(e){return{type:h,data:{stepQ:e}}}function S(e){return{type:p,start:e}}var N=function(e){var t=e.question,n=e.onClickVariant,c=Object(l.c)((function(e){return e.stepReducer.stepQ})),a=Math.ceil(c/O.length*100);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{style:{width:"".concat(a,"%")},className:"progress__inner"})}),Object(r.jsx)("h1",{children:t.title}),Object(r.jsx)("ul",{children:t.variants.map((function(e,t){return Object(r.jsx)("li",{onClick:function(){return n(t)},children:e},e)}))})]})},k=n.p+"static/media/celebrating.0bc75bd6.png",E=n.p+"static/media/anxiety.42f9baf8.png";function C(e){var t=e.correctAnswer,n=e.getStart,c=Object(l.c)((function(e){return e.nameReducer.name}));return Object(r.jsxs)("div",{className:"result",children:[Object(r.jsx)("img",{src:t>O.length-1?k:E,alt:"img"}),Object(r.jsxs)("h2",{children:[c,": Correct"," ",t," ","from"," ",O.length]}),Object(r.jsx)("button",{type:"button",onClick:n,children:"Start again"})]})}function T(){var e=Object(l.c)((function(e){return e.historyResultReducer.result}));return Object(r.jsx)("div",{className:"history",children:0!==e.length&&Object(r.jsx)("ul",{children:e.map((function(e){return Object(r.jsxs)("li",{children:[e.name,":"," ",e.result," ","correct answer"]},e.id)}))})})}function Q(){var e=Object(l.c)((function(e){return e.stepReducer.stepQ}));return Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:[e<O.length?e:O.length,"/"," ",O.length]})})}function I(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),s=Object(w.a)(i,2),o=(s[0],s[1]),u=Object(l.b)();return Object(r.jsx)("div",{className:"name-block",children:Object(r.jsxs)("form",{className:"name-block__form",onSubmit:function(e){e.preventDefault(),u({type:b,name:n}),o(!0),u(S(!0)),a("")},children:[Object(r.jsx)("input",{type:"text",className:"name-block__form-name input is-info",onChange:function(e){a(e.target.value)},value:n,placeholder:"Enter your name"}),Object(r.jsx)("button",{type:"submit",className:"button is-info name-block__form-btn",disabled:""===n,children:"Start"})]})})}var A=function(){var e=Object(c.useState)(0),t=Object(w.a)(e,2),n=t[0],a=t[1],i=O[n],s=Object(c.useState)(0),o=Object(w.a)(s,2),u=o[0],j=o[1],h=Object(l.b)(),b=Object(l.c)((function(e){return e.stepReducer.stepQ})),p=Object(l.c)((function(e){return e.nameReducer.name})),f=Object(l.c)((function(e){return e.startReducer.start})),m=Object(l.c)((function(e){return e.historyResultReducer.result}));return Object(r.jsxs)("div",{className:"app__container",children:[Object(r.jsx)("h1",{className:"title app__title",children:"React Quiz"}),Object(r.jsxs)("div",{className:"app",children:[!f&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(I,{}),m.length>0&&Object(r.jsx)(T,{})]}),f&&(n!==O.length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Q,{}),Object(r.jsx)(N,{question:i,onClickVariant:function(e){a(n+1),h(_(b+1)),e===i.correct&&j(u+1)}})]}):Object(r.jsx)(C,{correctAnswer:u,getStart:function(){var e=R()();h(function(e,t,n){return{type:d,data:{result:e,name:t,id:n}}}(u,p,e)),h(_(1)),h(S(!1)),a(0),j(0)}}))]})]})},D=Object(s.d)(x,Object(s.c)(Object(s.a)(o.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(Object(r.jsx)(l.a,{store:D,children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.975147c9.chunk.js.map