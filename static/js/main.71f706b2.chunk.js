(this["webpackJsonpreact-main"]=this["webpackJsonpreact-main"]||[]).push([[2],{1:function(e,t,a){"use strict";a.d(t,"s",(function(){return r})),a.d(t,"l",(function(){return n})),a.d(t,"h",(function(){return c})),a.d(t,"g",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"p",(function(){return u})),a.d(t,"q",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"j",(function(){return E})),a.d(t,"i",(function(){return p})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return S})),a.d(t,"o",(function(){return m})),a.d(t,"m",(function(){return _})),a.d(t,"n",(function(){return f})),a.d(t,"r",(function(){return b})),a.d(t,"b",(function(){return T})),a.d(t,"k",(function(){return O})),a.d(t,"f",(function(){return R}));var r={FETCH_USERS_START:"FETCH_USERS_START",FETCH_USERS_SUCCESS:"FETCH_USERS_SUCCESS",FETCH_USERS_ERROR:"FETCH_USERS_ERROR",FETCH_USER_START:"FETCH_USER_START",FETCH_USER_SUCCESS:"FETCH_USER_SUCCESS",FETCH_USER_ERROR:"FETCH_USER_ERROR"},n="SELECT_SONG",c="FETCH_POSTS",o="FETCH_FRAMEWORKS",s="CHANGE_FRAMEWORK_STATUS",u="SIGN_IN",i="SIGN_OUT",l="CREATE_STREAM",E="FETCH_STREAMS",p="FETCH_STREAM",d="DELETE_STREAM",S="EDIT_STREAM",m={SET_CURRENT_USER:"SET_CURRENT_USER"},_={TOGGLE_DROPDOWN:"TOGGLE_DROPDOWN",CLOSE_DROPDOWN:"CLOSE_DROPDOWN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEMS:"REMOVE_ITEMS",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEMS:"CLEAR_ITEMS"},f={SET_DATA:"SET_DATA",FETCH_DATA_THUNK_START:"FETCH_DATA_THUNK_START",FETCH_DATA_THUNK_SUCCESS:"FETCH_DATA_THUNK_SUCCESS",FETCH_DATA_THUNK_ERROR:"FETCH_DATA_THUNK_ERROR"},b={FETCH_SKILLS_START:"FETCH_SKILL",FETCH_SKILLS_SUCCESS:"FETCH_SKILL_SUCCESS",FETCH_SKILLS_ERROR:"FETCH_SKILL_ERROR",ADD_SKILL_START:"ADD_SKILL",ADD_SKILL_SUCCESS:"ADD_SKILL_SUCCESS",ADD_SKILL_ERROR:"ADD_SKILL_ERROR",REMOVE_SKILL_START:"REMOVE_SKILL",REMOVE_SKILL_SUCCESS:"REMOVE_SKILL_SUCCESS",REMOVE_SKILL_ERROR:"REMOVE_SKILL_ERROR",CHANGE_SKILL_STATUS:"CHANGE_SKILL_STATUS",CHANGE_SKILL_STATUS_SUCCESS:"CHANGE_SKILL_STATUS",CHANGE_SKILL_STATUS_ERROR:"CHANGE_SKILL_STATUS",SEARCH_SKILL:"SEARCH_SKILL",CHANGE_FILTER_VALUE:"CHANGE_FILTER_VALUE"},T={INCREMENT:"INCREMENT",DECREMENT:"DECREMENT"},O={GET_USER_START:"[ReduxSagaIntroComponent] Get user start",GET_USER_SUCCESS:"[User saga] Get user success",GET_USER_ERROR:"[User saga] Get user error",INCREMENT_COUNTER:"[SagaCounterComponent] Increment counter",INCREMENT_AFTER_DELAY_COUNTER:"[SagaCounterComponent] Increment after delay counter",DECREMENT_COUNTER:"[SagaCounterComponent] Decrement counter"},R={GET_FAMILY_START:"[Api] Get family start",GET_FAMILY_SUCCESS:"[Api] Get family success",GET_FAMILY_ERROR:"[Api] Get family error"}},10:function(e,t,a){"use strict";var r=a(53),n=a.n(r),c=n.a.create({baseURL:"http://localhost:3001/api"});c.CancelToken=n.a.CancelToken,c.isCancel=n.a.isCancel,t.a=c},121:function(e,t,a){e.exports=a(216)},126:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},21:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));a(3);function r(e,t,a){return a.indexOf(e)===t}function n(e){return"function"===typeof e}function c(e){return e>1024?"desktop":e<1024&&e>768?"tablet":e<768?"mobile":void 0}function o(e,t=0){var a;return function(...r){var n=this;clearTimeout(a),a=setTimeout(()=>{e.apply(n,r)},t)}}var s=()=>"".concat(u()+u(),"-").concat(u());function u(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},216:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(40),o=(a(126),a(33)),s=(a(130),a(11)),u=a(70),i=a(44),l=a(43),E=()=>n.a.createElement("h4",null,"RouterExactRoute"),p=()=>n.a.createElement("h4",null,"RouterRoute1"),d=n.a.lazy(()=>a.e(16).then(a.bind(null,440))),S=()=>n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Router examples"),n.a.createElement(l.a,{routes:[{to:"/router/exact",title:"RouterExactRoute"},{to:"/router/route1",title:"RouterRoute1"},{to:"/router/lazy",title:"RouterLazyRoute"},{to:"/router/*",title:"RouterLazyNotFound"}]}),n.a.createElement(s.d,null,n.a.createElement(s.b,{path:"/router/exact",exact:!0,component:E}),n.a.createElement(s.b,{path:"/router/route1",component:p}),n.a.createElement(s.b,{path:"/router/lazy",component:d}),n.a.createElement(s.b,{path:"/router/*"},n.a.createElement(i.a,null,"Router not found")))),m=n.a.createContext({}),_=a(41),f=a(42);function b(){var e=Object(_.a)([""]);return b=function(){return e},e}function T(){var e=Object(_.a)(["\n    list-style: none;\n"]);return T=function(){return e},e}function O(){var e=Object(_.a)(["\n    position: absolute;\n    right: 0;\n    top: 0;\n"]);return O=function(){return e},e}var R=f.b.div(O()),h=f.b.ul(T()),v=f.b.li(b()),C=Object(r.memo)(()=>{var e=Object(r.useContext)(m),t=e.device,a=e.browser;return n.a.createElement(R,null,n.a.createElement(h,null,n.a.createElement(v,null,"Device: ",t),n.a.createElement(v,null,"Browser: ",a)))}),y=a(34),j=a(100),L=a.n(j),A=a(21),g=n.a.createContext("default"),U=()=>{var e=Object(r.useContext)(g),t=e.theme,a=e.onThemeChange;return n.a.createElement("select",{value:t,onChange:a},n.a.createElement("option",{value:"default"},"default"),n.a.createElement("option",{value:"theme1"},"theme1"),n.a.createElement("option",{value:"theme2"},"theme2"))},I=a(3);class w extends r.Component{constructor(...e){super(...e),this.state={theme:"default"},this.onThemeChange=e=>{var t=document.documentElement,a=e.target.value;switch(a){case"default":t.classList.remove("theme1","theme2");break;default:t.classList.remove("theme1","theme2"),t.classList.add(a)}this.setState({theme:a})}}render(){return n.a.createElement(g.Provider,{value:Object(I.a)(Object(I.a)({},this.state),{},{onThemeChange:this.onThemeChange})},this.props.children)}}var x=Object(r.memo)(({children:e})=>{var t=(()=>{var e=Object(r.useState)(null),t=Object(y.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(null),o=Object(y.a)(c,2),s=o[0],u=o[1];return Object(r.useEffect)(()=>{var e=document.documentElement,t=Object(A.a)(()=>{n(Object(A.c)(e.clientWidth))},1e3);window.addEventListener("resize",t),window.dispatchEvent(new Event("resize")),n(Object(A.c)(e.clientWidth));var a=L.a.getParser(window.navigator.userAgent).getBrowserName();return u(a),()=>{window.removeEventListener("resize",t)}},[]),{device:a,browser:s}})(),a=t.device,c=t.browser;return n.a.createElement(m.Provider,{value:{device:a,browser:c}},n.a.createElement(w,null,n.a.createElement(U,null),e))}),k=n.a.lazy(()=>Promise.all([a.e(13),a.e(18)]).then(a.bind(null,444))),N=n.a.lazy(()=>Promise.all([a.e(0),a.e(8)]).then(a.bind(null,448))),D=n.a.lazy(()=>a.e(17).then(a.bind(null,432))),H=n.a.lazy(()=>Promise.all([a.e(0),a.e(11)]).then(a.bind(null,445))),M=n.a.lazy(()=>a.e(14).then(a.bind(null,451))),F=n.a.lazy(()=>a.e(5).then(a.bind(null,443))),G=n.a.lazy(()=>a.e(12).then(a.bind(null,446))),K=n.a.lazy(()=>a.e(7).then(a.bind(null,442))),P=n.a.lazy(()=>Promise.all([a.e(6),a.e(10)]).then(a.bind(null,447))),z=n.a.lazy(()=>Promise.all([a.e(1),a.e(15),a.e(9)]).then(a.bind(null,452))),V=n.a.lazy(()=>Promise.all([a.e(1),a.e(20),a.e(19)]).then(a.bind(null,449))),W=()=>n.a.createElement(x,null,n.a.createElement(C,null),n.a.createElement("div",{className:"app"},n.a.createElement("main",{className:"app__main"},n.a.createElement(l.a,{routes:[{to:"/typescript",title:"Typescript"},{to:"/rt",title:"Redux Toolkit"},{to:"/pro-react",title:"Pro react"},{to:"/shop",title:"Shop"},{to:"/redux",title:"Redux"},{to:"/react",title:"React"},{to:"/router",title:"Router"},{to:"/stream",title:"Stream"},{to:"/lazy",title:"Lazy"},{to:"/context",title:"Context"},{to:"/hooks",title:"Hooks"},{to:"/intl",title:"Intl"},{to:"/unknown",title:"Unknown"}]}),n.a.createElement(r.Suspense,{fallback:n.a.createElement(u.a,null)},n.a.createElement(s.d,null,n.a.createElement(s.b,{path:"/typescript",component:V}),n.a.createElement(s.b,{path:"/rt",component:k}),n.a.createElement(s.b,{path:"/pro-react",component:z}),n.a.createElement(s.b,{path:"/shop",component:F}),n.a.createElement(s.b,{path:"/redux",component:K}),n.a.createElement(s.b,{path:"/react",component:N}),n.a.createElement(s.b,{path:"/router",component:S}),n.a.createElement(s.b,{path:"/hooks",component:M}),n.a.createElement(s.b,{path:"/stream",component:H}),n.a.createElement(s.b,{path:"/lazy",component:D}),n.a.createElement(s.b,{path:"/context",component:G}),n.a.createElement(s.b,{path:"/intl",component:P}),n.a.createElement(s.b,{path:"*"},n.a.createElement(i.a,null)))))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(74),q=a(22),B=a(101),J=a(96),$=a(25);var Q=a(218),X=a(64),Z=()=>[{title:"Imagine dragons",duration:"4:05",likes:100},{title:"Animal instinct",duration:"4:13",likes:110},{title:"Daemons",duration:"3:45",likes:120},{title:"Radioactive",duration:"1:45",likes:130}],ee=a(1),te=(e=null,t)=>{switch(t.type){case ee.l:return t.payload;default:return e}},ae=[],re=(e=ae,t)=>{switch(t.type){case ee.h:return[...t.payload];default:return e}},ne=[],ce=(e=ne,t)=>{switch(t.type){case ee.g:return t.payload;case ee.a:var a=t.payload,r=e.indexOf(a);return e[r]=Object(I.a)({},t.payload),[...e];default:return e}},oe={users:{},isLoadingUsers:!1,isLoadingUser:!1},se=(e=oe,t)=>{switch(t.type){case ee.s.FETCH_USER_START:return Object(I.a)(Object(I.a)({},e),{},{isLoadingUser:!0});case ee.s.FETCH_USER_SUCCESS:var a=Object(I.a)(Object(I.a)({},e.users),{},{[t.payload.id]:t.payload});return Object(I.a)(Object(I.a)({},e),{},{users:a,isLoadingUser:!1});case ee.s.FETCH_USER_ERROR:return Object(I.a)(Object(I.a)({},e),{},{isLoadingUser:!1});case ee.s.FETCH_USERS_START:return Object(I.a)(Object(I.a)({},e),{},{isLoadingUsers:!0});case ee.s.FETCH_USERS_SUCCESS:var r=Object(I.a)(Object(I.a)({},e.users),t.payload);return Object(I.a)(Object(I.a)({},e),{},{users:r,isLoadingUsers:!1});case ee.s.FETCH_USERS_ERROR:return Object(I.a)(Object(I.a)({},e),{},{isLoadingUsers:!1});default:return e}},ue={isSignedIn:null,userId:null},ie=(e=ue,t)=>{switch(t.type){case ee.p:return Object(I.a)(Object(I.a)({},e),{},{isSignedIn:!0,userId:t.payload});case ee.q:return Object(I.a)(Object(I.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},le=a(28),Ee=a(29),pe=(e={},t)=>{switch(t.type){case ee.c:case ee.e:case ee.i:return t.payload.id?Object(I.a)(Object(I.a)({},e),{},{[t.payload.id]:t.payload}):e;case ee.j:return Object(I.a)(Object(I.a)({},e),t.payload);case ee.d:var a=t.payload.id,r=(e[a],Object(le.a)(e,[a].map(Ee.a)));return Object(I.a)({},r);default:return e}},de={currentUser:null},Se=(e=de,t)=>{switch(t.type){case ee.o.SET_CURRENT_USER:return Object(I.a)(Object(I.a)({},e),{},{currentUser:t.payload});default:return e}},me={visibleDropdown:null,cartItems:{}},_e=(e=me,t)=>{switch(t.type){case ee.m.TOGGLE_DROPDOWN:return Object(I.a)(Object(I.a)({},e),{},{visibleDropdown:!e.visibleDropdown});case ee.m.CLOSE_DROPDOWN:return Object(I.a)(Object(I.a)({},e),{},{visibleDropdown:!1});case ee.m.ADD_ITEM:var a=e.cartItems,r=t.payload,n=a[r.id];return n?(n.quantity+=1,n=Object(I.a)({},n)):a[r.id]=Object(I.a)(Object(I.a)({},r),{},{quantity:1}),Object(I.a)(Object(I.a)({},e),{},{cartItems:Object(I.a)({},a)});case ee.m.REMOVE_ITEMS:var c=e.cartItems,o=t.payload.id,s=(c[o],Object(le.a)(c,[o].map(Ee.a)));return Object(I.a)(Object(I.a)({},e),{},{cartItems:Object(I.a)({},s)});case ee.m.REMOVE_ITEM:var u=e.cartItems,i=u[t.payload.id];if(i.quantity-=1,i.quantity<=0){var l=u,E=t.payload.id;l[E];u=Object(le.a)(l,[E].map(Ee.a))}else u[t.payload.id]=Object(I.a)({},i);return Object(I.a)(Object(I.a)({},e),{},{cartItems:Object(I.a)({},u)});case ee.m.CLEAR_ITEMS:return{visibleDropdown:null,cartItems:{}};default:return e}},fe={data:null,isLoading:!1,errorMessage:void 0},be=(e=fe,t)=>{switch(t.type){case ee.n.SET_DATA:case ee.n.FETCH_DATA_THUNK_SUCCESS:return Object(I.a)(Object(I.a)({},e),{},{data:t.payload,isLoading:!1,errorMessage:void 0});case ee.n.FETCH_DATA_THUNK_START:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0,errorMessage:void 0});case ee.n.FETCH_DATA_THUNK_ERROR:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,errorMessage:t.payload});default:return e}},Te={isLoading:!1,searchValue:"",items:{},filterValue:"",error:null},Oe=(e=Te,t)=>{switch(t.type){case ee.r.FETCH_SKILLS_START:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case ee.r.FETCH_SKILLS_SUCCESS:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,items:t.payload});case ee.r.SEARCH_SKILL:return Object(I.a)(Object(I.a)({},e),{},{searchValue:t.payload});case ee.r.ADD_SKILL_START:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case ee.r.ADD_SKILL_SUCCESS:var a=t.payload;return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,items:Object(I.a)(Object(I.a)({},e.items),{},{[a.id]:a})});case ee.r.REMOVE_SKILL_START:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case ee.r.REMOVE_SKILL_SUCCESS:var r=t.payload,n=e.items,c=r.id,o=(n[c],Object(le.a)(n,[c].map(Ee.a)));return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,items:Object(I.a)({},o)});case ee.r.CHANGE_SKILL_STATUS:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case ee.r.CHANGE_SKILL_STATUS_SUCCESS:var s=t.payload;return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,items:Object(I.a)(Object(I.a)({},e.items),{},{[s.id]:s})});case ee.r.CHANGE_SKILL_STATUS_ERROR:case ee.r.ADD_SKILL_ERROR:case ee.r.REMOVE_SKILL_ERROR:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,error:Object(I.a)({},t.payload)});case ee.r.CHANGE_FILTER_VALUE:return Object(I.a)(Object(I.a)({},e),{},{filterValue:t.payload});default:return e}},Re=(e=0,t)=>{switch(t.type){case ee.b.INCREMENT:return++e;case ee.b.DECREMENT:return--e;default:return e}},he={loading:!1,entities:{users:[]},counter:0},ve=(e=he,t)=>{switch(t.type){case ee.k.GET_USER_START:return Object(I.a)(Object(I.a)({},e),{},{loading:!0});case ee.k.GET_USER_SUCCESS:var a=t.payload;return Object(I.a)(Object(I.a)({},e),{},{loading:!1,entities:Object(I.a)(Object(I.a)({},e.entities),{},{users:a})});case ee.k.GET_USER_ERROR:return Object(I.a)(Object(I.a)({},e),{},{loading:!1});case ee.k.INCREMENT_AFTER_DELAY_COUNTER:case ee.k.INCREMENT_COUNTER:var r=e.counter+1;return Object(I.a)(Object(I.a)({},e),{},{counter:r});case ee.k.DECREMENT_COUNTER:var n=e.counter-1;return Object(I.a)(Object(I.a)({},e),{},{counter:n});default:return e}},Ce=e=>Object(q.combineReducers)({router:Object(X.a)(e),songs:Z,selectedSong:te,posts:re,frameworks:ce,users:se,auth:ie,form:Q.a,streams:pe,shopUser:Se,shopCart:_e,shopData:be,skills:Oe,counter:Re,saga:ve}),ye=a(103),je=a(4),Le=a.n(je),Ae=a(13),ge=a(9),Ue=a(10);function Ie(e){return we.apply(this,arguments)}function we(){return(we=Object(ge.a)(Le.a.mark((function e({payload:t,cancelToken:a}){var r,n;return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ue.a.get("users",{cancelToken:a.token});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log("getUserApi saga api ",e.t0);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var xe=Le.a.mark(Ne),ke=Le.a.mark(De);function Ne(e){var t,a;return Le.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=Ue.a.CancelToken.source(),r.prev=1,r.next=4,Object(Ae.b)(Ie,{payload:e.payload,cancelToken:t});case 4:return a=r.sent,r.next=7,Object(Ae.e)({type:ee.k.GET_USER_SUCCESS,payload:a});case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(Ae.e)({type:ee.k.GET_USER_ERROR,message:r.t0.message});case 13:return r.prev=13,r.next=16,Object(Ae.c)();case 16:if(!r.sent){r.next=18;break}t.cancel("getUser saga canceled");case 18:return r.finish(13);case 19:case"end":return r.stop()}}),xe,null,[[1,9,13,19]])}function De(){return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.f)(ee.k.GET_USER_START,Ne);case 2:case"end":return e.stop()}}),ke)}var He=De;function Me(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=Object(ge.a)(Le.a.mark((function e({payload:t,cancelToken:a}){var r,n;return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ue.a.get("family",{cancelToken:a.token});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log("getUserApi saga api ",e.t0);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var Ge=a(54),Ke=Le.a.mark(ze),Pe=Le.a.mark(Ve);function ze(e){var t,a;return Le.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=Ue.a.CancelToken.source(),r.prev=1,r.next=4,Object(Ae.b)(Me,{payload:e.payload,cancelToken:t});case 4:return a=r.sent,r.next=7,Object(Ae.e)(Object(Ge.n)(a));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(Ae.e)(Object(Ge.m)(r.t0));case 13:return r.prev=13,r.next=16,Object(Ae.c)();case 16:if(!r.sent){r.next=18;break}t.cancel("Saga getFamily cancelled");case 18:return r.finish(13);case 19:case"end":return r.stop()}}),Ke,null,[[1,9,13,19]])}function Ve(){return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.f)(ee.f.GET_FAMILY_START,ze);case 2:case"end":return e.stop()}}),Pe)}var We=Ve,Ye=Le.a.mark(Je),qe=Le.a.mark($e),Be=Le.a.mark(Qe);function Je(){return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.d)(2e3);case 2:console.log("task after delay");case 3:case"end":return e.stop()}}),Ye)}function $e(){return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.a)([Je(),Je(),Je()]);case 2:case"end":return e.stop()}}),qe)}function Qe(){return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.f)(ee.k.INCREMENT_COUNTER,$e);case 2:case"end":return e.stop()}}),Be)}var Xe=Qe,Ze=Le.a.mark(et);function et(){return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.a)([He(),We(),Xe()]);case 2:case"end":return e.stop()}}),Ze)}var tt=function(e){var t=Object(ye.a)(),a=[t,Y.a,Object(J.a)($.a)],r=Object(q.applyMiddleware)(...a),n=Object(q.compose)(r),c=Object(q.createStore)(Ce($.a),e,n);return t.run(et),c.subscribe(Object(B.throttle)(()=>{var e=c.getState();!function(e){try{var t=JSON.stringify(e);sessionStorage.setItem("state",t)}catch(a){console.log("saveState in sessionStorage error ",a)}}({songs:e.songs,shopCart:e.shopCart})},1e3)),c}(function(){try{var e=sessionStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}()||{}),at=a(30);Object(c.render)(n.a.createElement(o.a,{store:tt},n.a.createElement(at.a,{history:$.a},n.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},25:function(e,t,a){"use strict";var r=a(16);t.a=Object(r.a)()},43:function(e,t,a){"use strict";var r=a(30),n=a(0),c=a.n(n);a(132);t.a=({routes:e,exact:t})=>Array.isArray(e)?c.a.createElement("ul",{className:"main-menu"},e.map((e,a)=>c.a.createElement("li",{className:"main-menu__item",key:a},c.a.createElement(r.c,{exact:!!t,strict:!0,activeClassName:"_active",className:"main-menu__link",to:e.to},e.title)))):c.a.createElement("p",null,"there are no routes for you")},44:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=({children:e})=>e||n.a.createElement("div",null,"Page not found")},54:function(e,t,a){"use strict";a.d(t,"p",(function(){return n})),a.d(t,"f",(function(){return i})),a.d(t,"k",(function(){return l})),a.d(t,"j",(function(){return E})),a.d(t,"e",(function(){return p})),a.d(t,"a",(function(){return d})),a.d(t,"g",(function(){return m})),a.d(t,"b",(function(){return b})),a.d(t,"i",(function(){return T})),a.d(t,"h",(function(){return O})),a.d(t,"d",(function(){return R})),a.d(t,"c",(function(){return h})),a.d(t,"v",(function(){return v})),a.d(t,"x",(function(){return C})),a.d(t,"s",(function(){return y})),a.d(t,"q",(function(){return j})),a.d(t,"u",(function(){return L})),a.d(t,"t",(function(){return A})),a.d(t,"r",(function(){return g})),a.d(t,"w",(function(){return U})),a.d(t,"o",(function(){return I})),a.d(t,"l",(function(){return w})),a.d(t,"n",(function(){return x})),a.d(t,"m",(function(){return k}));var r=a(1),n=e=>({type:r.l,payload:{song:e}}),c=a(4),o=a.n(c),s=a(9),u=a(10),i=()=>function(){var e=Object(s.a)(o.a.mark((function e(t,a){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("posts");case 3:n=e.sent,c=n.data,t({type:r.h,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Action fetchPosts error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),l=()=>function(){var e=Object(s.a)(o.a.mark((function e(t,a){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:r.s.FETCH_USERS_START}),e.next=4,u.a.get("users");case 4:n=e.sent,c=n.data,t({type:r.s.FETCH_USERS_SUCCESS,payload:c}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:r.s.FETCH_USERS_ERROR}),console.log("Action fetchUsers error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),E=e=>function(){var t=Object(s.a)(o.a.mark((function t(a,n){var c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:r.s.FETCH_USER_START}),t.next=4,u.a.get("users/".concat(e));case 4:c=t.sent,s=c.data,a({type:r.s.FETCH_USER_SUCCESS,payload:s}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:r.s.FETCH_USER_ERROR}),console.log("Action fetchUser error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(o.a.mark((function e(t,a){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("frameworks");case 3:n=e.sent,c=n.data,t({type:r.g,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Action fetchFrameworks error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),d=e=>({type:r.a,payload:e}),S=a(21),m=()=>function(){var e=Object(s.a)(o.a.mark((function e(t,a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(i());case 2:r=a().posts.map(({userId:e})=>e),r.filter(S.e).forEach(e=>t(E(e)));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=(a(78),a(3)),f=a(25),b=e=>function(){var t=Object(s.a)(o.a.mark((function t(a,n){var c,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=n().auth.userId,t.next=4,u.a.post("/streams",Object(_.a)(Object(_.a)({},e),{},{userId:c}));case 4:s=t.sent,i=s.data,a({type:r.c,payload:i}),f.a.push("/stream"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("createStream post error ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,a){return t.apply(this,arguments)}}(),T=e=>function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/streams");case 3:a=e.sent,n=a.data,t({type:r.j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("fetchStreams get error ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),O=(e,t)=>function(){var a=Object(s.a)(o.a.mark((function a(n){var c,s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.get("/streams/".concat(e),{cancelToken:t});case 3:c=a.sent,s=c.data,n({type:r.i,payload:s}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log("fetchStream get error ",a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}(),R=(e,t)=>function(){var a=Object(s.a)(o.a.mark((function a(n){var c,s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.patch("/streams/".concat(e),t);case 3:c=a.sent,s=c.data,n({type:r.e,payload:s}),f.a.push("/stream"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("editStream get error ",a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}(),h=e=>function(){var t=Object(s.a)(o.a.mark((function t(a){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.delete("/streams",{params:{id:e}});case 3:n=t.sent,c=n.data,a({type:r.d,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("deleteStream get error ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),v=e=>({type:r.o.SET_CURRENT_USER,payload:e}),C=()=>({type:r.m.TOGGLE_DROPDOWN}),y=()=>({type:r.m.CLOSE_DROPDOWN}),j=e=>({type:r.m.ADD_ITEM,payload:e}),L=e=>({type:r.m.REMOVE_ITEMS,payload:e}),A=e=>({type:r.m.REMOVE_ITEM,payload:e}),g=()=>({type:r.m.CLEAR_ITEMS}),U=(a(72),a(95),e=>({type:r.n.SET_DATA,payload:e})),I=e=>({type:r.k.GET_USER_START,payload:e}),w=()=>({type:r.f.GET_FAMILY_START}),x=e=>({type:r.f.GET_FAMILY_SUCCESS,payload:e}),k=e=>({type:r.f.GET_FAMILY_ERROR,payload:e})},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(34),n=a(0),c=a.n(n);a(131);function o({customStyles:e,message:t,delay:a=0}){var o=Object(n.useState)(!1),s=Object(r.a)(o,2),u=s[0],i=s[1];return Object(n.useEffect)(()=>{var e;return a?e=setTimeout(()=>{i(!0)},a):i(!0),()=>clearTimeout(e)},[a]),c.a.createElement(c.a.Fragment,null,u?c.a.createElement("div",{className:"material-loader",style:e},c.a.createElement("svg",{className:"material-loader__svg",viewBox:"25 25 50 50"},c.a.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})),c.a.createElement("p",{className:"material-loader__text"},t)):null)}o.defaultProps={message:"Loading..."}},72:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(4),n=a.n(r),c=a(3),o=a(9),s=a(32),u=a.n(s);a(211),a(214);u.a.initializeApp({apiKey:"AIzaSyDEzBGwxj8YJjznHn9G0giS0bVP3AuUUHs",authDomain:"react-main-1006-8eae6.firebaseapp.com",databaseURL:"https://react-main-1006-8eae6.firebaseio.com",projectId:"react-main-1006-8eae6",storageBucket:"react-main-1006-8eae6.appspot.com",messagingSenderId:"561046526414",appId:"1:561046526414:web:f7fbfe689f187e68eef39f"});var i=u.a.auth(),l=u.a.firestore(),E=new u.a.auth.GoogleAuthProvider;E.setCustomParameters({prompts:"select_account"});var p=()=>i.signInWithPopup(E),d=function(){var e=Object(o.a)(n.a.mark((function e(t,a){var r,o,s,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=l.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return o=t.displayName,s=t.email,u=new Date,e.prev=9,e.next=12,r.set(Object(c.a)({displayName:o,email:s,createdAt:u},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("createUserProfileDocument error ",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}();u.a},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var r=a(1),n=e=>({type:r.p,payload:e}),c=()=>({type:r.q})},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=new Map([["Hats","hats"],["Sneakers","sneakers"],["Womens","womens"],["Mens","mens"],["Jackets","jackets"]])}},[[121,3,4]]]);
//# sourceMappingURL=main.71f706b2.chunk.js.map