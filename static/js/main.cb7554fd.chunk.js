(this["webpackJsonpmini-calculator"]=this["webpackJsonpmini-calculator"]||[]).push([[0],[,,,function(_,e,t){"use strict";t(1),t(15);var n=t(0);e.a=function(_){return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"text",className:"screen",value:_.question,readOnly:!0}),Object(n.jsx)("input",{type:"text",className:"screen",value:_.answer,readOnly:!0})]})}},,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_cookie_Music_mini_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Output_OutputRow__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_button_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),_button_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_cookie_Music_mini_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),question=_useState2[0],setQuestion=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(_home_cookie_Music_mini_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),answer=_useState4[0],setAnswer=_useState4[1],handleClick=function handleClick(e){var value=e.target.value;switch(console.log(value,answer),value){case"AC":setQuestion(""),setAnswer("");break;case"=":if(""!=question){var ans="";try{ans=eval(question)}catch(err){setAnswer("Math error")}"undefined"==ans||"Infinity"==ans?setAnswer("Math error"):(setAnswer(ans),setQuestion(ans.toString()))}break;case"D":var ques=question;ques=ques.substr(0,ques.length-1),setQuestion(ques);break;default:question=question.concat(value),setQuestion(question)}},handlePress=function(_){handleClick(_)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Output_OutputRow__WEBPACK_IMPORTED_MODULE_2__.a,{question:question,answer:answer}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"styling",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"(",children:"("}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:")",children:")"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"%",children:"%"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"clear",onClick:handleClick,value:"AC",children:"AC"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"styling",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"7",children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"8",children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"9",children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"/",children:"/"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"styling",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"4",children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"5",children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"6",children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"*",children:"*"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"styling",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"1",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"2",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"3",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"-",children:"-"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"styling",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"0",children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:".",children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"equal",onClick:handleClick,value:"=",children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn-group",onClick:handleClick,value:"+",children:"+"})]})]})}__webpack_exports__.a=Calculator},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){},,function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var n=t(1),c=t.n(n),a=t(5),s=t.n(a),r=(t(11),t(12),t(13),t(0));var l=function(){return Object(r.jsx)("nav",{className:"title",children:Object(r.jsx)("h1",{children:"Calculate within a sec..."})})},u=(t(3),t(6));var i=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsx)(u.a,{})]})},o=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;t(_),n(_),c(_),a(_),s(_)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i,{})}),document.getElementById("root")),o()}],[[17,1,2]]]);
//# sourceMappingURL=main.cb7554fd.chunk.js.map