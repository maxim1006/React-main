(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{172:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(u){r=!0,c=u}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},174:function(e,t,n){"use strict";var a=n(223),r=function(e){return e.shopCart},c=Object(a.a)([r],function(e){return e.cartItems}),l=Object(a.a)([c],function(e){return Object.values(e).reduce(function(e,t){return e+t.quantity},0)}),i=Object(a.a)([r],function(e){return e.visibleDropdown}),u=Object(a.a)([c],function(e){return Object.values(e).reduce(function(e,t){return e+t.quantity*t.price},0)}),o=(n(225),function(e){return e.streams}),s=Object(a.a)([o,function(e,t){return t}],function(e,t){return e[t]}),m=function(e){return e.auth},d=Object(a.a)([m],function(e){return e.isSignedIn}),f=Object(a.a)([m],function(e){return e.userId});n.d(t,"c",function(){return c}),n.d(t,"d",function(){return l}),n.d(t,"f",function(){return i}),n.d(t,"e",function(){return u}),n.d(t,"g",function(){return o}),n.d(t,"h",function(){return s}),n.d(t,"a",function(){return d}),n.d(t,"b",function(){return f})},222:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(251),r=(n(2),a.a.arrayInsert,a.a.arrayMove,a.a.arrayPop,a.a.arrayPush,a.a.arrayRemove,a.a.arrayRemoveAll,a.a.arrayShift,a.a.arraySplice,a.a.arraySwap,a.a.arrayUnshift,a.a.autofill,a.a.blur,a.a.change,a.a.clearAsyncError,a.a.clearFields,a.a.clearSubmit,a.a.clearSubmitErrors,a.a.destroy,a.a.focus,a.a.initialize,a.a.registerField,a.a.reset);a.a.resetSection,a.a.setSubmitFailed,a.a.setSubmitSucceeded,a.a.startAsyncValidation,a.a.startSubmit,a.a.stopAsyncValidation,a.a.stopSubmit,a.a.submit,a.a.touch,a.a.unregisterField,a.a.untouch,a.a.updateSyncWarnings,a.a.updateSyncErrors},223:function(e,t,n){"use strict";function a(e,t){return e===t}n.d(t,"a",function(){return r});var r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return function(){for(var t=arguments.length,a=Array(t),r=0;r<t;r++)a[r]=arguments[r];var c=0,l=a.pop(),i=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"===typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}(a),u=e.apply(void 0,[function(){return c++,l.apply(null,arguments)}].concat(n)),o=e(function(){for(var e=[],t=i.length,n=0;n<t;n++)e.push(i[n].apply(null,arguments));return u.apply(null,e)});return o.resultFunc=l,o.dependencies=i,o.recomputations=function(){return c},o.resetRecomputations=function(){return c=0},o}}(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=null,r=null;return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var a=t.length,r=0;r<a;r++)if(!e(t[r],n[r]))return!1;return!0}(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}})},225:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(223),r=Object(a.a)([function(e){return e.shopUser}],function(e){return e.currentUser})},357:function(e,t,n){},397:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),l=n(175),i=n(42),u=n(172),o=n(5),s=n(6),m=n(8),d=n(7),f=n(9),p=n(13),b=n(18),h=function(e){var t=e.title,n=e.description;return r.a.createElement("div",{className:"stream"},r.a.createElement("p",{className:"stream__title"},t),r.a.createElement("p",{className:"stream__description"},n))},E=n(36),v=n(38),g=n.n(v),O=(n(357),function(e){var t=e.title,n=e.controls;return g.a.createPortal(r.a.createElement("div",{className:"modal-portal"},r.a.createElement("div",{className:"modal-portal__inner"},r.a.createElement("p",null,t),r.a.createElement("div",{className:"modal-portal__controls"},n))),document.querySelector("#modal"))}),j=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={streamToDelete:null},n.onDelete=function(e,t){(0,n.props.deleteStream)(e.id),n.hideDeleteModel()},n.hideDeleteModel=function(){n.setState({streamToDelete:null})},n.showDeleteModal=function(e){n.setState({streamToDelete:e})},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderStreamList(),this.renderCreateControls(),this.renderDeleteModal())}},{key:"renderStreamList",value:function(){var e=this,t=this.props.streams;return r.a.createElement("ul",{className:"stream-list"},Object.entries(t).map(function(t){var n=Object(u.a)(t,2),a=n[0],c=n[1];return r.a.createElement("li",{key:a,className:"stream-list__item"},r.a.createElement(h,Object.assign({},c,{title:r.a.createElement(E.a,{to:"/stream/".concat(c.id)},c.title)})),e.renderControls(c))}))}},{key:"renderControls",value:function(e){var t=this.props.currentUserId,n=e.userId,a=e.id;if(n===t)return r.a.createElement("div",{className:"stream-list__controls"},r.a.createElement(E.a,{to:"/stream/edit/".concat(a)},"Edit"),r.a.createElement("button",{type:"button",onClick:this.showDeleteModal.bind(this,e)},"Delete"))}},{key:"renderCreateControls",value:function(){if(this.props.auth)return r.a.createElement("p",null,r.a.createElement(E.a,{to:"/stream/create"},"Create stream ->"))}},{key:"renderDeleteModal",value:function(){var e=this.state.streamToDelete;if(e){var t=r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.onDelete.bind(this,e)},"Delete"),r.a.createElement("button",{type:"button",onClick:this.hideDeleteModel},"Cancel"));return r.a.createElement(O,{title:"Are u sure u wanna delete this stream?",controls:t})}}}]),t}(a.Component),y=(Object(p.b)(function(e,t){return{streams:e.streams,currentUserId:e.auth.userId,auth:e.auth.isSignedIn}},{fetchStreams:b.i,deleteStream:b.c})(j),n(4)),S=n.n(y),C=n(11),w=n(64),k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).authStatusChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getId()):n.props.signOut()},n.signIn=function(){var e=Object(C.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,n.auth.signIn();case 4:a=e.sent,console.log("User signed in ",a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("GoogleAuth signIn error ",e.t0);case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),n.signOut=function(){var e=Object(C.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,n.auth.signOut();case 4:console.log("User signed out."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("GoogleAuth signed out error ",e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi&&window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"356527932784-volcn5md0nd1eg5nc2hn30cd6a6oeclf.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.auth.isSignedIn.listen(e.authStatusChange),e.authStatusChange(e.auth.isSignedIn.get())},function(){return console.log("GoogleAuth gapi.client.init error")})})}},{key:"render",value:function(){var e=this.props.isSignedIn;return null===e?"Auth is loading...":r.a.createElement(r.a.Fragment,null,e?r.a.createElement("a",{href:"/",onClick:this.signOut},"Sign out"):r.a.createElement("a",{href:"/",onClick:this.signIn},"Sign in"),r.a.createElement("div",null,"Google auth"))}}]),t}(a.Component),I=Object(p.b)(function(e,t){return{isSignedIn:e.auth.isSignedIn}},{signIn:w.a,signOut:w.b})(k),D=n(222),F=n(177),A=n(178),x=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).onSubmit=function(e){n.props.onSubmit(e),n.props.dispatch(Object(D.a)("streamCreate"))},n.renderTextField=function(e){var t=e.input,n=e.meta,a=e.label,c=e.mandatory;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:n.form+t.name},a,c&&r.a.createElement("sup",null,"*")),r.a.createElement("input",Object.assign({type:"text",autoComplete:"off",id:n.form+t.name},t)),r.a.createElement("p",{style:{color:"red"}},n.visited&&n.error))},n.renderMemoField=function(e){var t=e.input,n=e.meta,a=e.label,c=e.mandatory;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:n.form+t.name},a,c&&r.a.createElement("sup",null,"*")),r.a.createElement("textarea",Object.assign({id:n.form+t.name},t)),r.a.createElement("p",{style:{color:"red"}},n.touched&&n.error))},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleSubmit,n=e.valid;return r.a.createElement("form",{onSubmit:t(this.onSubmit)},r.a.createElement(F.a,{component:this.renderTextField,name:"title",label:"Enter title",mandatory:!0}),r.a.createElement(F.a,{component:this.renderMemoField,name:"description",label:"Enter description",mandatory:!1}),r.a.createElement("button",{type:"submit",disabled:!n},"Submit"))}}]),t}(a.Component);var _=Object(A.a)({form:"streamForm",validate:function(e){var t={};return e.title||(t.title="Please fill title"),t}})(x),M=Object(a.memo)(function(){var e=Object(p.c)(),t=Object(a.useCallback)(function(t){return e(Object(b.b)(t))},[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{onSubmit:t}),r.a.createElement("p",null,r.a.createElement(E.a,{to:"/stream"},"Go to stream list ->")))}),N=Object(a.memo)(function(e){var t=e.match,n=Object(p.c)(),c=Object(p.d)(function(e){return e.streams[t.params.id]});Object(a.useEffect)(function(){n(Object(b.h)(t.params.id))},[]);var l=Object(a.useCallback)(function(e){return n(Object(b.d)(t.params.id,e))},[n]);if(c){var i=c.title,u=c.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Edit stream"),r.a.createElement(_,{initialValues:{title:i,description:u},onSubmit:l}),r.a.createElement("p",null,r.a.createElement(E.a,{to:"/stream"},"Go to stream list ->")))}return r.a.createElement("div",null,"...Loading")}),U=n(174),G=Object(a.memo)(function(e){var t=e.match,n=Object(p.c)(),c=Object(p.d)(function(e){return Object(U.h)(e,t.params.id)});return Object(a.useEffect)(function(){n(Object(b.h)(t.params.id))},[]),c?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Stream show"),r.a.createElement("p",null,"Stream title: ",c.title),r.a.createElement("p",null,"Stream description: ",c.description),r.a.createElement(E.a,{to:"/stream"},"Go to stream list")):r.a.createElement("div",null,"...Loading")}),T=Object(a.memo)(function(e){var t=e.stream,n=e.currentUserId,a=e.onDeleteClick,c=t.userId,l=t.id;if(c===n)return r.a.createElement("div",{className:"stream-list__controls"},r.a.createElement(E.a,{to:"/stream/edit/".concat(l)},"Edit"),r.a.createElement("button",{type:"button",onClick:a},"Delete"))}),L=Object(a.memo)(function(){var e=Object(p.c)(),t=Object(p.d)(U.g),n=Object(p.d)(U.b),c=Object(a.useState)(null),l=Object(u.a)(c,2),i=l[0],o=l[1],s=Object(a.useCallback)(function(e){return function(t){o(e)}},[]),m=Object(a.useCallback)(function(){e(Object(b.c)(i.id)),o(null)},[e,i]),d=Object(a.useCallback)(function(){o(null)},[]),f=r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:m},"Delete"),r.a.createElement("button",{type:"button",onClick:d},"Cancel"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"stream-list"},Object.entries(t).map(function(e){var t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("li",{key:a,className:"stream-list__item"},r.a.createElement(h,Object.assign({},c,{title:r.a.createElement(E.a,{to:"/stream/".concat(c.id)},c.title)})),r.a.createElement(T,{stream:c,currentUserId:n,onDeleteClick:s(c)}))})),i&&r.a.createElement(O,{title:"Are u sure u wanna delete this stream?",controls:f}))}),P=Object(a.memo)(function(){var e=Object(p.c)(),t=Object(p.d)(U.a);return Object(a.useEffect)(function(){e(Object(b.i)())},[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),t&&r.a.createElement("p",null,r.a.createElement(E.a,{to:"/stream/create"},"Create stream ->")))});t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Router examples"),r.a.createElement(I,null),r.a.createElement(i.a,{exact:!0,routes:[{to:"/stream",title:"StreamList"},{to:"/stream/create",title:"StreamCreate"}]}),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/stream",exact:!0,component:P}),r.a.createElement(l.b,{path:"/stream/create",exact:!0,component:M}),r.a.createElement(l.b,{path:"/stream/edit/:id",exact:!0,component:N}),r.a.createElement(l.b,{path:"/stream/:id",exact:!0,component:G}),r.a.createElement(l.b,{path:"/stream/*"},r.a.createElement(c.a,null,"Stream not found"))))}}}]);
//# sourceMappingURL=5.c0133fb9.chunk.js.map