(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a}),r.d(t,"d",function(){return c}),r.d(t,"c",function(){return i}),r.d(t,"f",function(){return o}),r.d(t,"h",function(){return u}),r.d(t,"g",function(){return s}),r.d(t,"e",function(){return l});var n="ADD_NUMBER",a="ADD_OPERATOR",c="DECIMAL",i="CLEAR",o="EQUALS",u="REVERT",s="PERCENTAGE",l="DELETED"},18:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Cosmos_calculator_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),_actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),updateObject=function(e,t){return Object(C_Users_Cosmos_calculator_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},e,t)},initialState={display:"",currState:"",lastNumber:"",decimal:!1,operator:"",updatedNumber:""},addNumber=function(e,t){return updateObject(e,{display:e.display+t.value,lastNumber:e.display+t.value})},addOperator=function(e,t){return updateObject(e,{currState:e.currState?e.currState:e.display,display:initialState.display,operator:t.operator,decimal:!1})},equals=function equals(state,action){var updatedNumber=Number(state.currState)+state.operator+Number(state.lastNumber);return updateObject(state,{display:eval(updatedNumber),currState:eval(updatedNumber),updatedNumber:updatedNumber,decimal:!1})},clear=function(e,t){return updateObject(e,initialState)},revert=function(e,t){return updateObject(e,{display:-1*e.display})},percentage=function(e,t){return updateObject(e,{display:e.display/100})},deleted=function(e,t){return updateObject(e,{display:Number.isInteger(e.display)?"":e.display.substring(0,e.display.length-1),lastNumber:Number.isInteger(e.display)?"":e.lastNumber.substring(0,e.lastNumber.length-1)})},decimal=function(e,t){return updateObject(e,{display:e.display+t.decimal,decimal:!0})},rootReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.a:return addNumber(e,t);case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.b:return addOperator(e,t);case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.f:return equals(e,t);case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.c:return clear(e,t);case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.d:return decimal(e,t);case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.h:return revert(e,t);case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.g:return percentage(e,t);case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.e:return deleted(e,t);default:return e}};__webpack_exports__.a=rootReducer},22:function(e,t,r){e.exports=r(32)},31:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(6),i=r.n(c),o=r(13),u=r(7),s=r(5),l=(r(31),r(15)),p=r(16),d=r(19),_=r(17),m=r(21),E=r(1),b=(r(4),function(e){return a.a.createElement("div",{className:"result-screen"},e.children)}),f=function(e){return a.a.createElement("div",{className:"computation-screen"},e.children)},y=function(e){return a.a.createElement("section",{className:"screen"},a.a.createElement(b,null," ",e.display," "),a.a.createElement(f,null," ",e.updatedNumber," "))},O=function(e){return a.a.createElement("div",{className:"keypad__row"},e.children)},N=function(e){var t=["btn"];return"undefined"!==typeof e&&"undefined"!==typeof e.type&&t.push("btn--"+e.type),a.a.createElement("button",{className:t.join(" "),onClick:e.clicked},e.children)},P=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"Display"},a.a.createElement(y,{display:this.props.display,updatedNumber:this.props.updatedNumber}),a.a.createElement(O,null,a.a.createElement(N,{id:"percentage",type:"operator",clicked:this.props.onPercentage},"%"),a.a.createElement(N,{id:"clear",type:"primary",clicked:this.props.onClear},"c"),a.a.createElement(N,{id:"deleted",type:"primary",clicked:this.props.onDeleted},"del"),a.a.createElement(N,{id:"divide",type:"operator",clicked:function(){return e.props.onPressOperator("/")}},"/")),a.a.createElement(O,null,a.a.createElement(N,{id:"seven",clicked:function(){return e.props.onPressNumber(7)}},"7"),a.a.createElement(N,{id:"eight",clicked:function(){return e.props.onPressNumber(8)}},"8"),a.a.createElement(N,{id:"nine",clicked:function(){return e.props.onPressNumber(9)}},"9"),a.a.createElement(N,{id:"multiply",type:"operator",clicked:function(){return e.props.onPressOperator("*")}},"*")),a.a.createElement(O,null,a.a.createElement(N,{id:"four",clicked:function(){return e.props.onPressNumber(4)}},"4"),a.a.createElement(N,{id:"five",clicked:function(){return e.props.onPressNumber(5)}},"5"),a.a.createElement(N,{id:"six",clicked:function(){return e.props.onPressNumber(6)}},"6"),a.a.createElement(N,{id:"substract",type:"operator",clicked:function(){return e.props.onPressOperator("-")}},"-")),a.a.createElement(O,null,a.a.createElement(N,{id:"one",clicked:function(){return e.props.onPressNumber(1)}},"1"),a.a.createElement(N,{id:"two",clicked:function(){return e.props.onPressNumber(2)}},"2"),a.a.createElement(N,{id:"three",clicked:function(){return e.props.onPressNumber(3)}},"3"),a.a.createElement(N,{id:"add",type:"operator",clicked:function(){return e.props.onPressOperator("+")}},"+")),a.a.createElement(O,null,a.a.createElement(N,{id:"revert",type:"operator",clicked:this.props.display?this.props.onRevert:null},"\xb1"),a.a.createElement(N,{id:"zero",clicked:this.props.display?function(){return e.props.onPressNumber(0)}:null},"0"),a.a.createElement(N,{id:"decimal",type:"operator",clicked:this.props.decimal?"":this.props.onDecimal},"."),a.a.createElement(N,{id:"equals",type:"operator",clicked:this.props.operator?this.props.onPressEquals:null},"=")))}}]),t}(n.Component),h=Object(u.b)(function(e){return{display:e.display,prevState:e.prevState,history:e.history,decimal:e.decimal,operator:e.operator,updatedNumber:e.updatedNumber}},function(e){return{onPressNumber:function(t){return e(function(e){return{type:E.a,value:e}}(t))},onPressOperator:function(t){return e((r=t,{type:E.b,operator:r}));var r},onPressEquals:function(){return e({type:E.f})},onClear:function(){return e({type:E.c})},onDecimal:function(){return e((t=".",{type:E.d,decimal:t}));var t},onRevert:function(){return e({type:E.h})},onPercentage:function(){return e({type:E.g})},onDeleted:function(){return e({type:E.e})}}})(P);var v=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=r(18),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,T=Object(s.d)(D.a,k(Object(s.a)(o.a)));i.a.render(a.a.createElement(u.a,{store:T},a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,r){}},[[22,1,2]]]);
//# sourceMappingURL=main.da69142f.chunk.js.map