(this["webpackJsonpreact-main"]=this["webpackJsonpreact-main"]||[]).push([[3],{1:function(e,t,n){"use strict";n.d(t,"s",(function(){return r})),n.d(t,"l",(function(){return a})),n.d(t,"h",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"p",(function(){return i})),n.d(t,"q",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"j",(function(){return p})),n.d(t,"i",(function(){return E})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"o",(function(){return S})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return b})),n.d(t,"r",(function(){return _})),n.d(t,"b",(function(){return O})),n.d(t,"k",(function(){return T})),n.d(t,"f",(function(){return v}));var r={FETCH_USERS_START:"FETCH_USERS_START",FETCH_USERS_SUCCESS:"FETCH_USERS_SUCCESS",FETCH_USERS_ERROR:"FETCH_USERS_ERROR",FETCH_USER_START:"FETCH_USER_START",FETCH_USER_SUCCESS:"FETCH_USER_SUCCESS",FETCH_USER_ERROR:"FETCH_USER_ERROR"},a="SELECT_SONG",c="FETCH_POSTS",o="FETCH_FRAMEWORKS",u="CHANGE_FRAMEWORK_STATUS",i="SIGN_IN",s="SIGN_OUT",l="CREATE_STREAM",p="FETCH_STREAMS",E="FETCH_STREAM",d="DELETE_STREAM",f="EDIT_STREAM",S={SET_CURRENT_USER:"SET_CURRENT_USER"},m={TOGGLE_DROPDOWN:"TOGGLE_DROPDOWN",CLOSE_DROPDOWN:"CLOSE_DROPDOWN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEMS:"REMOVE_ITEMS",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEMS:"CLEAR_ITEMS"},b={SET_DATA:"SET_DATA",FETCH_DATA_THUNK_START:"FETCH_DATA_THUNK_START",FETCH_DATA_THUNK_SUCCESS:"FETCH_DATA_THUNK_SUCCESS",FETCH_DATA_THUNK_ERROR:"FETCH_DATA_THUNK_ERROR"},_={FETCH_SKILLS_START:"FETCH_SKILL",FETCH_SKILLS_SUCCESS:"FETCH_SKILL_SUCCESS",FETCH_SKILLS_ERROR:"FETCH_SKILL_ERROR",ADD_SKILL_START:"ADD_SKILL",ADD_SKILL_SUCCESS:"ADD_SKILL_SUCCESS",ADD_SKILL_ERROR:"ADD_SKILL_ERROR",REMOVE_SKILL_START:"REMOVE_SKILL",REMOVE_SKILL_SUCCESS:"REMOVE_SKILL_SUCCESS",REMOVE_SKILL_ERROR:"REMOVE_SKILL_ERROR",CHANGE_SKILL_STATUS:"CHANGE_SKILL_STATUS",CHANGE_SKILL_STATUS_SUCCESS:"CHANGE_SKILL_STATUS",CHANGE_SKILL_STATUS_ERROR:"CHANGE_SKILL_STATUS",SEARCH_SKILL:"SEARCH_SKILL",CHANGE_FILTER_VALUE:"CHANGE_FILTER_VALUE"},O={INCREMENT:"INCREMENT",DECREMENT:"DECREMENT"},T={GET_USER_START:"[ReduxSagaIntroComponent] Get user start",GET_USER_SUCCESS:"[User saga] Get user success",GET_USER_ERROR:"[User saga] Get user error",INCREMENT_COUNTER:"[SagaCounterComponent] Increment counter",INCREMENT_AFTER_DELAY_COUNTER:"[SagaCounterComponent] Increment after delay counter",DECREMENT_COUNTER:"[SagaCounterComponent] Decrement counter"},v={GET_FAMILY_START:"[Api] Get family start",GET_FAMILY_SUCCESS:"[Api] Get family success",GET_FAMILY_ERROR:"[Api] Get family error"}},10:function(e,t,n){"use strict";var r=n(58),a=n.n(r),c=a.a.create({baseURL:"http://localhost:3001/api"});c.CancelToken=a.a.CancelToken,c.isCancel=a.a.isCancel,t.a=c},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=new Map([["Hats","hats"],["Sneakers","sneakers"],["Womens","womens"],["Mens","mens"],["Jackets","jackets"]])},130:function(e,t,n){e.exports=n(225)},135:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));n(3);function r(e,t,n){return n.indexOf(e)===t}function a(e){return"function"===typeof e}function c(e){return e>1024?"desktop":e<1024&&e>768?"tablet":e<768?"mobile":void 0}function o(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];var o=this;clearTimeout(t),t=setTimeout((function(){e.apply(o,a)}),n)}}var u=function(){return"".concat(i()+i(),"-").concat(i())};function i(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},225:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(43),o=n(40),u=(n(135),n(33)),i=(n(139),n(11)),s=n(78),l=n(47),p=n(46),E=function(){return a.a.createElement("h4",null,"RouterExactRoute")},d=function(){return a.a.createElement("h4",null,"RouterRoute1")},f=a.a.lazy((function(){return n.e(18).then(n.bind(null,462))})),S=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Router examples"),a.a.createElement(p.a,{routes:[{to:"/router/exact",title:"RouterExactRoute"},{to:"/router/route1",title:"RouterRoute1"},{to:"/router/lazy",title:"RouterLazyRoute"},{to:"/router/*",title:"RouterLazyNotFound"}]}),a.a.createElement(i.d,null,a.a.createElement(i.b,{path:"/router/exact",exact:!0,component:E}),a.a.createElement(i.b,{path:"/router/route1",component:d}),a.a.createElement(i.b,{path:"/router/lazy",component:f}),a.a.createElement(i.b,{path:"/router/*"},a.a.createElement(l.a,null,"Router not found"))))},m=a.a.createContext({}),b=n(44),_=n(45);function O(){var e=Object(b.a)([""]);return O=function(){return e},e}function T(){var e=Object(b.a)(["\n    list-style: none;\n"]);return T=function(){return e},e}function v(){var e=Object(b.a)(["\n    position: absolute;\n    right: 0;\n    top: 0;\n"]);return v=function(){return e},e}var R=_.b.div(v()),h=_.b.ul(T()),C=_.b.li(O()),y=Object(r.memo)((function(){var e=Object(r.useContext)(m),t=e.device,n=e.browser;return a.a.createElement(R,null,a.a.createElement(h,null,a.a.createElement(C,null,"Device: ",t),a.a.createElement(C,null,"Browser: ",n)))})),j=n(34),g=n(108),A=n.n(g),L=n(22),U=a.a.createContext("default"),w=function(){var e=Object(r.useContext)(U),t=e.theme,n=e.onThemeChange;return a.a.createElement("select",{value:t,onChange:n},a.a.createElement("option",{value:"default"},"default"),a.a.createElement("option",{value:"theme1"},"theme1"),a.a.createElement("option",{value:"theme2"},"theme2"))},I=n(3),k=n(74),x=n(75),N=n(77),D=n(76),H=function(e){Object(N.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(k.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={theme:"default"},e.onThemeChange=function(t){var n=document.documentElement,r=t.target.value;switch(r){case"default":n.classList.remove("theme1","theme2");break;default:n.classList.remove("theme1","theme2"),n.classList.add(r)}e.setState({theme:r})},e}return Object(x.a)(n,[{key:"render",value:function(){return a.a.createElement(U.Provider,{value:Object(I.a)(Object(I.a)({},this.state),{},{onThemeChange:this.onThemeChange})},this.props.children)}}]),n}(r.Component),M=Object(r.memo)((function(e){var t=e.children,n=function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),o=Object(j.a)(c,2),u=o[0],i=o[1];return Object(r.useEffect)((function(){var e=document.documentElement,t=Object(L.a)((function(){a(Object(L.c)(e.clientWidth))}),1e3);window.addEventListener("resize",t),window.dispatchEvent(new Event("resize")),a(Object(L.c)(e.clientWidth));var n=A.a.getParser(window.navigator.userAgent).getBrowserName();return i(n),function(){window.removeEventListener("resize",t)}}),[]),{device:n,browser:u}}(),c=n.device,o=n.browser;return a.a.createElement(m.Provider,{value:{device:c,browser:o}},a.a.createElement(H,null,a.a.createElement(w,null),t))})),F=a.a.lazy((function(){return Promise.all([n.e(16),n.e(20)]).then(n.bind(null,468))})),G=a.a.lazy((function(){return Promise.all([n.e(0),n.e(8),n.e(7)]).then(n.bind(null,467))})),K=a.a.lazy((function(){return n.e(19).then(n.bind(null,454))})),P=a.a.lazy((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,469))})),z=a.a.lazy((function(){return n.e(15).then(n.bind(null,474))})),V=a.a.lazy((function(){return n.e(6).then(n.bind(null,466))})),W=a.a.lazy((function(){return n.e(14).then(n.bind(null,470))})),Y=a.a.lazy((function(){return n.e(10).then(n.bind(null,465))})),q=a.a.lazy((function(){return Promise.all([n.e(9),n.e(12)]).then(n.bind(null,471))})),B=a.a.lazy((function(){return Promise.all([n.e(1),n.e(17),n.e(11)]).then(n.bind(null,475))})),J=a.a.lazy((function(){return Promise.all([n.e(1),n.e(22),n.e(21)]).then(n.bind(null,472))})),$=function(){return a.a.createElement(M,null,a.a.createElement(y,null),a.a.createElement("div",{className:"app"},a.a.createElement("main",{className:"app__main"},a.a.createElement(p.a,{routes:[{to:"/typescript",title:"Typescript"},{to:"/rt",title:"Redux Toolkit"},{to:"/pro-react",title:"Pro react"},{to:"/shop",title:"Shop"},{to:"/redux",title:"Redux"},{to:"/react",title:"React"},{to:"/router",title:"Router"},{to:"/stream",title:"Stream"},{to:"/lazy",title:"Lazy"},{to:"/context",title:"Context"},{to:"/hooks",title:"Hooks"},{to:"/intl",title:"Intl"},{to:"/unknown",title:"Unknown"}]}),a.a.createElement(r.Suspense,{fallback:a.a.createElement(s.a,null)},a.a.createElement(i.d,null,a.a.createElement(i.b,{path:"/typescript",component:J}),a.a.createElement(i.b,{path:"/rt",component:F}),a.a.createElement(i.b,{path:"/pro-react",component:B}),a.a.createElement(i.b,{path:"/shop",component:V}),a.a.createElement(i.b,{path:"/redux",component:Y}),a.a.createElement(i.b,{path:"/react",component:G}),a.a.createElement(i.b,{path:"/router",component:S}),a.a.createElement(i.b,{path:"/hooks",component:z}),a.a.createElement(i.b,{path:"/stream",component:P}),a.a.createElement(i.b,{path:"/lazy",component:K}),a.a.createElement(i.b,{path:"/context",component:W}),a.a.createElement(i.b,{path:"/intl",component:q}),a.a.createElement(i.b,{path:"*"},a.a.createElement(l.a,null)))))))},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Z=n(82),ee=n(20),te=n(109),ne=n(104),re=n(24);var ae=n(227),ce=function(){return[{title:"Imagine dragons",duration:"4:05",likes:100},{title:"Animal instinct",duration:"4:13",likes:110},{title:"Daemons",duration:"3:45",likes:120},{title:"Radioactive",duration:"1:45",likes:130}]},oe=n(1),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.l:return t.payload;default:return e}},ie=n(55),se=[],le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.h:return Object(ie.a)(t.payload);default:return e}},pe=[],Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.g:return t.payload;case oe.a:var n=t.payload,r=e.indexOf(n);return e[r]=Object(I.a)({},t.payload),Object(ie.a)(e);default:return e}},de={users:{},isLoadingUsers:!1,isLoadingUser:!1},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.s.FETCH_USER_START:return Object(I.a)(Object(I.a)({},e),{},{isLoadingUser:!0});case oe.s.FETCH_USER_SUCCESS:var n=Object(I.a)(Object(I.a)({},e.users),{},{[t.payload.id]:t.payload});return Object(I.a)(Object(I.a)({},e),{},{users:n,isLoadingUser:!1});case oe.s.FETCH_USER_ERROR:return Object(I.a)(Object(I.a)({},e),{},{isLoadingUser:!1});case oe.s.FETCH_USERS_START:return Object(I.a)(Object(I.a)({},e),{},{isLoadingUsers:!0});case oe.s.FETCH_USERS_SUCCESS:var r=Object(I.a)(Object(I.a)({},e.users),t.payload);return Object(I.a)(Object(I.a)({},e),{},{users:r,isLoadingUsers:!1});case oe.s.FETCH_USERS_ERROR:return Object(I.a)(Object(I.a)({},e),{},{isLoadingUsers:!1});default:return e}},Se={isSignedIn:null,userId:null},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.p:return Object(I.a)(Object(I.a)({},e),{},{isSignedIn:!0,userId:t.payload});case oe.q:return Object(I.a)(Object(I.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},be=n(28),_e=n(30),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.c:case oe.e:case oe.i:return t.payload.id?Object(I.a)(Object(I.a)({},e),{},{[t.payload.id]:t.payload}):e;case oe.j:return Object(I.a)(Object(I.a)({},e),t.payload);case oe.d:var n=t.payload.id,r=(e[n],Object(be.a)(e,[n].map(_e.a)));return Object(I.a)({},r);default:return e}},Te={currentUser:null},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.o.SET_CURRENT_USER:return Object(I.a)(Object(I.a)({},e),{},{currentUser:t.payload});default:return e}},Re={visibleDropdown:null,cartItems:{}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.m.TOGGLE_DROPDOWN:return Object(I.a)(Object(I.a)({},e),{},{visibleDropdown:!e.visibleDropdown});case oe.m.CLOSE_DROPDOWN:return Object(I.a)(Object(I.a)({},e),{},{visibleDropdown:!1});case oe.m.ADD_ITEM:var n=e.cartItems,r=t.payload,a=n[r.id];return a?(a.quantity+=1,a=Object(I.a)({},a)):n[r.id]=Object(I.a)(Object(I.a)({},r),{},{quantity:1}),Object(I.a)(Object(I.a)({},e),{},{cartItems:Object(I.a)({},n)});case oe.m.REMOVE_ITEMS:var c=e.cartItems,o=t.payload.id,u=(c[o],Object(be.a)(c,[o].map(_e.a)));return Object(I.a)(Object(I.a)({},e),{},{cartItems:Object(I.a)({},u)});case oe.m.REMOVE_ITEM:var i=e.cartItems,s=i[t.payload.id];if(s.quantity-=1,s.quantity<=0){var l=i,p=t.payload.id,E=(l[p],Object(be.a)(l,[p].map(_e.a)));i=E}else i[t.payload.id]=Object(I.a)({},s);return Object(I.a)(Object(I.a)({},e),{},{cartItems:Object(I.a)({},i)});case oe.m.CLEAR_ITEMS:return{visibleDropdown:null,cartItems:{}};default:return e}},Ce={data:null,isLoading:!1,errorMessage:void 0},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.n.SET_DATA:case oe.n.FETCH_DATA_THUNK_SUCCESS:return Object(I.a)(Object(I.a)({},e),{},{data:t.payload,isLoading:!1,errorMessage:void 0});case oe.n.FETCH_DATA_THUNK_START:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0,errorMessage:void 0});case oe.n.FETCH_DATA_THUNK_ERROR:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,errorMessage:t.payload});default:return e}},je={isLoading:!1,searchValue:"",items:{},filterValue:"",error:null},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.r.FETCH_SKILLS_START:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case oe.r.FETCH_SKILLS_SUCCESS:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,items:t.payload});case oe.r.SEARCH_SKILL:return Object(I.a)(Object(I.a)({},e),{},{searchValue:t.payload});case oe.r.ADD_SKILL_START:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case oe.r.ADD_SKILL_SUCCESS:var n=t.payload;return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,items:Object(I.a)(Object(I.a)({},e.items),{},{[n.id]:n})});case oe.r.REMOVE_SKILL_START:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case oe.r.REMOVE_SKILL_SUCCESS:var r=t.payload,a=e.items,c=r.id,o=(a[c],Object(be.a)(a,[c].map(_e.a)));return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,items:Object(I.a)({},o)});case oe.r.CHANGE_SKILL_STATUS:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case oe.r.CHANGE_SKILL_STATUS_SUCCESS:var u=t.payload;return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,items:Object(I.a)(Object(I.a)({},e.items),{},{[u.id]:u})});case oe.r.CHANGE_SKILL_STATUS_ERROR:case oe.r.ADD_SKILL_ERROR:case oe.r.REMOVE_SKILL_ERROR:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,error:Object(I.a)({},t.payload)});case oe.r.CHANGE_FILTER_VALUE:return Object(I.a)(Object(I.a)({},e),{},{filterValue:t.payload});default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.b.INCREMENT:return++e;case oe.b.DECREMENT:return--e;default:return e}},Le={loading:!1,entities:{users:[]},counter:0},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.k.GET_USER_START:return Object(I.a)(Object(I.a)({},e),{},{loading:!0});case oe.k.GET_USER_SUCCESS:var n=t.payload;return Object(I.a)(Object(I.a)({},e),{},{loading:!1,entities:Object(I.a)(Object(I.a)({},e.entities),{},{users:n})});case oe.k.GET_USER_ERROR:return Object(I.a)(Object(I.a)({},e),{},{loading:!1});case oe.k.INCREMENT_AFTER_DELAY_COUNTER:case oe.k.INCREMENT_COUNTER:var r=e.counter+1;return Object(I.a)(Object(I.a)({},e),{},{counter:r});case oe.k.DECREMENT_COUNTER:var a=e.counter-1;return Object(I.a)(Object(I.a)({},e),{},{counter:a});default:return e}},we=function(e){return Object(ee.combineReducers)({router:Object(o.b)(e),songs:ce,selectedSong:ue,posts:le,frameworks:Ee,users:fe,auth:me,form:ae.a,streams:Oe,shopUser:ve,shopCart:he,shopData:ye,skills:ge,counter:Ae,saga:Ue})},Ie=(n(129),n(111)),ke=n(4),xe=n.n(ke),Ne=n(13),De=n(9),He=n(10);function Me(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=Object(De.a)(xe.a.mark((function e(t){var n,r,a;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.payload,n=t.cancelToken,e.prev=1,e.next=4,He.a.get("users",{cancelToken:n.token});case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log("getUserApi saga api ",e.t0);case 12:return e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var Ge=xe.a.mark(Pe),Ke=xe.a.mark(ze);function Pe(e){var t,n;return xe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=He.a.CancelToken.source(),r.prev=1,r.next=4,Object(Ne.b)(Me,{payload:e.payload,cancelToken:t});case 4:return n=r.sent,r.next=7,Object(Ne.e)({type:oe.k.GET_USER_SUCCESS,payload:n});case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(Ne.e)({type:oe.k.GET_USER_ERROR,message:r.t0.message});case 13:return r.prev=13,r.next=16,Object(Ne.c)();case 16:if(!r.sent){r.next=18;break}t.cancel("getUser saga canceled");case 18:return r.finish(13);case 19:case"end":return r.stop()}}),Ge,null,[[1,9,13,19]])}function ze(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.f)(oe.k.GET_USER_START,Pe);case 2:case"end":return e.stop()}}),Ke)}var Ve=ze;function We(e){return Ye.apply(this,arguments)}function Ye(){return(Ye=Object(De.a)(xe.a.mark((function e(t){var n,r,a;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.payload,n=t.cancelToken,e.prev=1,e.next=4,He.a.get("family",{cancelToken:n.token});case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log("getUserApi saga api ",e.t0);case 12:return e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var qe=n(59),Be=xe.a.mark($e),Je=xe.a.mark(Qe);function $e(e){var t,n;return xe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=He.a.CancelToken.source(),r.prev=1,r.next=4,Object(Ne.b)(We,{payload:e.payload,cancelToken:t});case 4:return n=r.sent,r.next=7,Object(Ne.e)(Object(qe.n)(n));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(Ne.e)(Object(qe.m)(r.t0));case 13:return r.prev=13,r.next=16,Object(Ne.c)();case 16:if(!r.sent){r.next=18;break}t.cancel("Saga getFamily cancelled");case 18:return r.finish(13);case 19:case"end":return r.stop()}}),Be,null,[[1,9,13,19]])}function Qe(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.f)(oe.f.GET_FAMILY_START,$e);case 2:case"end":return e.stop()}}),Je)}var Xe=Qe,Ze=xe.a.mark(nt),et=xe.a.mark(rt),tt=xe.a.mark(at);function nt(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.d)(2e3);case 2:console.log("task after delay");case 3:case"end":return e.stop()}}),Ze)}function rt(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.a)([nt(),nt(),nt()]);case 2:case"end":return e.stop()}}),et)}function at(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.f)(oe.k.INCREMENT_COUNTER,rt);case 2:case"end":return e.stop()}}),tt)}var ct=at,ot=xe.a.mark(ut);function ut(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.a)([Ve(),Xe(),ct()]);case 2:case"end":return e.stop()}}),ot)}var it=function(e){var t=Object(Ie.a)(),n=[t,Z.a,Object(ne.a)(re.a)],r=ee.applyMiddleware.apply(void 0,n),a=Object(ee.compose)(r),c=Object(ee.createStore)(we(re.a),e,a);return t.run(ut),c.subscribe(Object(te.throttle)((function(){var e=c.getState();!function(e){try{var t=JSON.stringify(e);sessionStorage.setItem("state",t)}catch(n){console.log("saveState in sessionStorage error ",n)}}({songs:e.songs,shopCart:e.shopCart})}),1e3)),c}(function(){try{var e=sessionStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}()||{});Object(c.render)(a.a.createElement(u.a,{store:it},a.a.createElement(o.a,{history:re.a},a.a.createElement($,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");Q?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):X(t,e)}))}}()},24:function(e,t,n){"use strict";var r=n(16);t.a=Object(r.a)()},46:function(e,t,n){"use strict";var r=n(42),a=n(0),c=n.n(a);n(141);t.a=function(e){var t=e.routes,n=e.exact;return Array.isArray(t)?c.a.createElement("ul",{className:"main-menu"},t.map((function(e,t){return c.a.createElement("li",{className:"main-menu__item",key:t},c.a.createElement(r.b,{exact:!!n,strict:!0,activeClassName:"_active",className:"main-menu__link",to:e.to},e.title))}))):c.a.createElement("p",null,"there are no routes for you")}},47:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return e.children||a.a.createElement("div",null,"Page not found")}},59:function(e,t,n){"use strict";n.d(t,"p",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"k",(function(){return l})),n.d(t,"j",(function(){return p})),n.d(t,"e",(function(){return E})),n.d(t,"a",(function(){return d})),n.d(t,"g",(function(){return S})),n.d(t,"b",(function(){return _})),n.d(t,"i",(function(){return O})),n.d(t,"h",(function(){return T})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return R})),n.d(t,"v",(function(){return h})),n.d(t,"x",(function(){return C})),n.d(t,"s",(function(){return y})),n.d(t,"q",(function(){return j})),n.d(t,"u",(function(){return g})),n.d(t,"t",(function(){return A})),n.d(t,"r",(function(){return L})),n.d(t,"w",(function(){return U})),n.d(t,"o",(function(){return w})),n.d(t,"l",(function(){return I})),n.d(t,"n",(function(){return k})),n.d(t,"m",(function(){return x}));var r=n(1),a=function(e){return{type:r.l,payload:{song:e}}},c=n(4),o=n.n(c),u=n(9),i=n(10),s=function(){return function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("posts");case 3:a=e.sent,c=a.data,t({type:r.h,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Action fetchPosts error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()},l=function(){return function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:r.s.FETCH_USERS_START}),e.next=4,i.a.get("users");case 4:a=e.sent,c=a.data,t({type:r.s.FETCH_USERS_SUCCESS,payload:c}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:r.s.FETCH_USERS_ERROR}),console.log("Action fetchUsers error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,a){var c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:r.s.FETCH_USER_START}),t.next=4,i.a.get("users/".concat(e));case 4:c=t.sent,u=c.data,n({type:r.s.FETCH_USER_SUCCESS,payload:u}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:r.s.FETCH_USER_ERROR}),console.log("Action fetchUser error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},E=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("frameworks");case 3:a=e.sent,c=a.data,t({type:r.g,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Action fetchFrameworks error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(e){return{type:r.a,payload:e}},f=n(22),S=function(){return function(){var e=Object(u.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(s());case 2:r=n().posts.map((function(e){return e.userId})),r.filter(f.e).forEach((function(e){return t(p(e))}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},m=(n(86),n(3)),b=n(24),_=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,a){var c,u,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=a().auth.userId,t.next=4,i.a.post("/streams",Object(m.a)(Object(m.a)({},e),{},{userId:c}));case 4:u=t.sent,s=u.data,n({type:r.c,payload:s}),b.a.push("/stream"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("createStream post error ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()},O=function(e){return function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/streams");case 3:n=e.sent,a=n.data,t({type:r.j,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("fetchStreams get error ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},T=function(e,t){return function(){var n=Object(u.a)(o.a.mark((function n(a){var c,u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.get("/streams/".concat(e),{cancelToken:t});case 3:c=n.sent,u=c.data,a({type:r.i,payload:u}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("fetchStream get error ",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},v=function(e,t){return function(){var n=Object(u.a)(o.a.mark((function n(a){var c,u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.patch("/streams/".concat(e),t);case 3:c=n.sent,u=c.data,a({type:r.e,payload:u}),b.a.push("/stream"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("editStream get error ",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.delete("/streams",{params:{id:e}});case 3:a=t.sent,c=a.data,n({type:r.d,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("deleteStream get error ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return{type:r.o.SET_CURRENT_USER,payload:e}},C=function(){return{type:r.m.TOGGLE_DROPDOWN}},y=function(){return{type:r.m.CLOSE_DROPDOWN}},j=function(e){return{type:r.m.ADD_ITEM,payload:e}},g=function(e){return{type:r.m.REMOVE_ITEMS,payload:e}},A=function(e){return{type:r.m.REMOVE_ITEM,payload:e}},L=function(){return{type:r.m.CLEAR_ITEMS}},U=(n(80),n(103),function(e){return{type:r.n.SET_DATA,payload:e}}),w=function(e){return{type:r.k.GET_USER_START,payload:e}},I=function(){return{type:r.f.GET_FAMILY_START}},k=function(e){return{type:r.f.GET_FAMILY_SUCCESS,payload:e}},x=function(e){return{type:r.f.GET_FAMILY_ERROR,payload:e}}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(34),a=n(0),c=n.n(a);n(140);function o(e){var t=e.customStyles,n=e.message,o=e.delay,u=void 0===o?0:o,i=Object(a.useState)(!1),s=Object(r.a)(i,2),l=s[0],p=s[1];return Object(a.useEffect)((function(){var e;return u?e=setTimeout((function(){p(!0)}),u):p(!0),function(){return clearTimeout(e)}}),[u]),c.a.createElement(c.a.Fragment,null,l?c.a.createElement("div",{className:"material-loader",style:t},c.a.createElement("svg",{className:"material-loader__svg",viewBox:"25 25 50 50"},c.a.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})),c.a.createElement("p",{className:"material-loader__text"},n)):null)}o.defaultProps={message:"Loading..."}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return E})),n.d(t,"b",(function(){return d}));var r=n(4),a=n.n(r),c=n(3),o=n(9),u=n(32),i=n.n(u);n(220),n(223);i.a.initializeApp({apiKey:"AIzaSyDEzBGwxj8YJjznHn9G0giS0bVP3AuUUHs",authDomain:"react-main-1006-8eae6.firebaseapp.com",databaseURL:"https://react-main-1006-8eae6.firebaseio.com",projectId:"react-main-1006-8eae6",storageBucket:"react-main-1006-8eae6.appspot.com",messagingSenderId:"561046526414",appId:"1:561046526414:web:f7fbfe689f187e68eef39f"});var s=i.a.auth(),l=i.a.firestore(),p=new i.a.auth.GoogleAuthProvider;p.setCustomParameters({prompts:"select_account"});var E=function(){return s.signInWithPopup(p)},d=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=l.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return o=t.displayName,u=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(c.a)({displayName:o,email:u,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("createUserProfileDocument error ",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}();i.a},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(1),a=function(e){return{type:r.p,payload:e}},c=function(){return{type:r.q}}}},[[130,4,5]]]);
//# sourceMappingURL=main.fe9efe45.chunk.js.map