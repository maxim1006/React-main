(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{224:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return d});var a=n(4),r=n.n(a),o=n(3),c=n(11),l=n(253),i=n.n(l);n(256),n(257);i.a.initializeApp({apiKey:"AIzaSyDEzBGwxj8YJjznHn9G0giS0bVP3AuUUHs",authDomain:"react-main-1006-8eae6.firebaseapp.com",databaseURL:"https://react-main-1006-8eae6.firebaseio.com",projectId:"react-main-1006-8eae6",storageBucket:"react-main-1006-8eae6.appspot.com",messagingSenderId:"561046526414",appId:"1:561046526414:web:f7fbfe689f187e68eef39f"});var u=i.a.auth(),s=i.a.firestore(),m=new i.a.auth.GoogleAuthProvider;m.setCustomParameters({prompts:"select_account"});var p=function(){return u.signInWithPopup(m)},d=function(){var e=Object(c.a)(r.a.mark(function e(t,n){var a,c,l,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=s.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,l=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(o.a)({displayName:c,email:l,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("createUserProfileDocument error ",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}},e,this,[[9,14]])}));return function(t,n){return e.apply(this,arguments)}}();i.a},252:function(e,t,n){},283:function(e,t,n){},285:function(e,t,n){},287:function(e,t,n){},289:function(e,t,n){},332:function(e,t,n){},335:function(e,t,n){},337:function(e,t,n){},339:function(e,t,n){},341:function(e,t,n){},343:function(e,t,n){"use strict";n.r(t);t.default=[1,2,3]},344:function(e,t,n){},346:function(e,t,n){},348:function(e,t,n){},395:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=n(11),i=n(5),u=n(6),s=n(8),m=n(7),p=n(9),d=(n(283),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={inputValue:"",checkboxValue:!1,selectValue:"2",textareaValue:"",radioValue:"1",dateValue:"2019-10-06"},n.onInputChange=function(e){n.setState({inputValue:e.target.value}),n.props.onInput(e)},n.onCheckboxChange=function(e){n.setState({checkboxValue:e.target.checked}),console.log("onCheckboxChange ",e.target.checked)},n.onSelectChange=function(e){n.setState({selectValue:e.target.value}),console.log("onSelectChange ",e.target.value)},n.onTextareaChange=function(e){console.log("onTextareaChange ",e.target.value),n.setState({textareaValue:e.target.value})},n.onRadioChange=function(e){console.log("onRadioChange ",e.target.value),n.setState({radioValue:e.target.value})},n.onDateChange=function(e){console.log("onDateChange ",e.target.value),n.setState({dateValue:e.target.value})},n.onFormSubmit=function(e){e.preventDefault(),console.log("onFormSubmit ",n.state)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.inputValue,n=e.checkboxValue,a=e.selectValue,o=e.textareaValue,c=e.radioValue,l=e.dateValue,i=JSON.stringify(this.state);return r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{className:"search-bar__input",value:t,onChange:this.onInputChange,type:"text"}),this.props.children,r.a.createElement("br",null),r.a.createElement("input",{className:"search-bar__input",onChange:this.onCheckboxChange,type:"checkbox",checked:n}),r.a.createElement("br",null),r.a.createElement("select",{value:a,onChange:this.onSelectChange},r.a.createElement("option",{value:"1"},"option 1"),r.a.createElement("option",{value:"2"},"option 2"),r.a.createElement("option",{value:"3"},"option 3")),r.a.createElement("br",null),r.a.createElement("textarea",{cols:"30",rows:"10",onChange:this.onTextareaChange,value:o}),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"test",value:"1",checked:"1"===c,onChange:this.onRadioChange}),"radio 1",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"test",value:"2",checked:"2"===c,onChange:this.onRadioChange}),"radio 2",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"test",value:"3",checked:"3"===c,onChange:this.onRadioChange}),"radio 3",r.a.createElement("br",null),r.a.createElement("input",{type:"date",value:l,onChange:this.onDateChange})),r.a.createElement("p",null,i))}}]),t}(a.Component)),f=(n(285),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getSearchListBody",value:function(){return this.props.items.map(function(e){var t=e.id,n=e.name,a=e.age;return r.a.createElement("li",{className:"search-list__item",key:t},n," ",a)})}},{key:"render",value:function(){return r.a.createElement("ul",{className:"search-list"},this.getSearchListBody())}}]),t}(a.Component)),h=n(62),v=n(16),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],filteredItems:[],isFamilyLoading:!1},n.cancelGetFamilyRequest=null,n.onInput=function(e){var t=n.state.items.filter(function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())});n.setState({filteredItems:t})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.cancelGetFamilyRequest=v.a.CancelToken.source(),e.prev=1,e.next=4,v.a.get("/family",{cancelToken:this.cancelGetFamilyRequest.token});case 4:t=e.sent,n=t.data,a=n.slice(),this.setState({items:n,filteredItems:a,isFamilyLoading:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("FormsComponent componentDidMount fetch /family error",e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isFamilyLoading?this.renderContent():this.renderLoader()}},{key:"componentWillUnmount",value:function(){this.cancelGetFamilyRequest.cancel("http://localhost:3001/api/family canceled")}},{key:"renderContent",value:function(){return r.a.createElement(d,{onInput:this.onInput},r.a.createElement(f,{items:this.state.filteredItems}))}},{key:"renderLoader",value:function(){return r.a.createElement("div",{style:{transform:"scale3d(0.8, 0.8, 0.8)"}},r.a.createElement(h.a,{message:"Loading family"}))}}]),t}(a.Component),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={family:[]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.cancelGetFamilyRequest=v.a.CancelToken.source(),e.prev=1,e.next=4,v.a.get("/family",{cancelToken:this.cancelGetFamilyRequest.token});case 4:t=e.sent,n=t.data,this.setState({family:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("JsxListComponent get('/family'... ",e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.cancelGetFamilyRequest.cancel("JsxListComponent get('/family'... canceled")}},{key:"render",value:function(){return r.a.createElement("ul",null,this.state.family.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(E,e))}))}}]),t}(a.Component);function E(e){var t=e.name,n=e.age,a=e.occupation;return r.a.createElement(r.a.Fragment,null,"Name: ",t,", age: ",n,", occupation: ",a)}var y=function(e){var t=e.prop1,n=e.prop2;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,t),r.a.createElement("li",null,n))},C=(n(287),function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Differences from html"),r.a.createElement("ol",null,r.a.createElement("li",{className:"jsx-example__list-item"},r.a.createElement("div",{style:{backgroundColor:"#e8f3e8",color:"#333"}},"Inline styles"),r.a.createElement("div",{style:{backgroundColor:"#e8f3e8",color:"#333"}},"Inline styles2")),r.a.createElement("li",{className:"jsx-example__list-item"},r.a.createElement("div",{className:"_modifier"},"className instead of class"),r.a.createElement("label",{htmlFor:"name"},"htmlFor instead of for"),r.a.createElement("input",{type:"text",id:"name"})),r.a.createElement("li",{className:"jsx-example__list-item"},"Variables in JSX",r.a.createElement("button",{type:"button"},"Click me"))))}),j=n(66),k=n(177),O=n(178),x=(n(289),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).renderInput=function(e){var t=e.input,a=e.meta,o=e.label,c=e.mandatory,l="redux-form__input ".concat(a.visited&&a.error?"_error":"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"redux-form__field"},r.a.createElement("label",{htmlFor:a.form+t.name},o,n.renderMandatory(c)),r.a.createElement("input",Object.assign({autoComplete:"off",id:a.form+t.name,type:"text"},t,{className:l})),r.a.createElement("p",{className:"redux-form__error-message"},a.visited&&a.error)))},n.renderMandatory=function(e){return e?r.a.createElement("sup",{style:{color:"darkRed"}},"*"):null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onSubmit",value:function(e){console.log("formValues ",e)}},{key:"render",value:function(){console.log("reduxForm props ",this.props);var e=this.props,t=e.handleSubmit,n=e.valid;return r.a.createElement("form",{onSubmit:t(this.onSubmit)},r.a.createElement(k.a,{name:"title",component:this.renderInput,label:"Enter title",mandatory:!0}),r.a.createElement(k.a,{name:"description",component:this.renderInput,label:"Enter description"}),r.a.createElement("button",{type:"submit",disabled:!n},"Submit"))}}]),t}(a.Component)),_=Object(O.a)({form:"reduxFormSample",validate:function(e){var t={};return e.title||(t.title="title should be filled"),t}})(x),N=(n(332),function(e){var t=e.name,n=e.content,a=e.date,o=e.img;e.id;return r.a.createElement("li",{className:"comment"},r.a.createElement("div",{className:"comment__col _margin-right-s"},r.a.createElement("div",{className:"comment__image"},r.a.createElement("img",{loading:"lazy",src:o,alt:"",className:"comment__image-img"}))),r.a.createElement("div",{className:"comment__col"},r.a.createElement("div",{className:"comment__row"},r.a.createElement("div",{className:"comment__name"},t),r.a.createElement("div",{className:"comment__date"},a)),r.a.createElement("div",{className:"comment__row"},r.a.createElement("div",{className:"comment__content"},n))))}),S=(n(252),n(335),function(e){var t=e.content;return r.a.createElement("div",{className:"content-projection-content"},t)}),w=(n(337),function(e){var t=e.projectFromProp,n=e.children;return r.a.createElement("div",{className:"content-projection"},t,r.a.createElement("div",{className:"content-projection__content"},n),r.a.createElement("div",{className:"content-projection__action-panel"},r.a.createElement("div",{className:"content-projection__approve"},r.a.createElement("button",{type:"button",style:{color:"white",backgroundColor:"green",marginRight:"30px"}},"Approve")),r.a.createElement("div",{className:"content-projection__reject"},r.a.createElement("button",{type:"button",style:{color:"white",backgroundColor:"red"}},"Reject"))))});n(172),n(27),n(339),n(341);Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(343);case 2:t=e.sent,console.log("data from dynamic import ",t);case 4:case"end":return e.stop()}},e,this)}))();var F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.string,n=e.obj,a=e.propFromRestOperator,o=e.truthy;return r.a.createElement("div",null,r.a.createElement("div",{tabIndex:1},"string: ",t," ",r.a.createElement("br",null),"obj: ",JSON.stringify(n),r.a.createElement("br",null),"propFromRestOperator: ",a,r.a.createElement("br",null),"truthy: ",o+""))}}]),t}(a.Component);function R(e){var t=e.string,n=e.obj,a=e.propFromRestOperator,o=e.onClick,c=e.truthy;return r.a.createElement("div",{onPointerUp:o},"string: ",t," ",r.a.createElement("br",null),"obj: ",JSON.stringify(n),r.a.createElement("br",null),"propFromRestOperator: ",a,r.a.createElement("br",null),"truthy: ",c+"")}R.defaultProps={string:"default"};a.Component,n(344),n(346),a.Component,a.Component;var I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){return e.prop!==this.props.prop}},{key:"render",value:function(){return console.log("LifecycleChild rendered"),"LifecycleChild"}}]),t}(a.Component),V=function(e){var t=e.prop;return console.log("LifecycleChildHooks rendered"),Object(a.useEffect)(function(){console.log("LifecycleChildHooks useEffect rendered")},[t]),"LifecycleChildHooks"},P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={prop:1,prop1:1},n.changeProp=function(){n.setState(function(e,t){var n=e.prop;return{prop:++n}})},n.changeProp1=function(){n.setState(function(e,t){var n=e.prop1;return{prop1:++n}})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("button",{type:"button",style:{marginRight:"20px"},onClick:this.changeProp},"Change prop"),r.a.createElement("button",{type:"button",onClick:this.changeProp1},"Change prop1")),r.a.createElement(I,this.state),r.a.createElement(V,this.state))}}]),t}(a.Component);a.Component;(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={latitude:null,longitude:null,errorMessage:"",randomProp:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=function(t){var n=t.coords;e.setState(function(e,t){return{latitude:n.latitude,longitude:n.longitude}})},n=function(t){console.log("Getting position error ",t),e.setState(function(e,n){return{errorMessage:t.message}})};navigator.geolocation.getCurrentPosition(t,n),this.id=navigator.geolocation.watchPosition(t,n)}},{key:"componentWillUnmount",value:function(){navigator.geolocation.clearWatch(this.id)}},{key:"render",value:function(){var e=this.state,t=e.latitude,n=e.longitude,a=this.props.defaultProp;return t?r.a.createElement("div",null,"defaultProps: ",a," ",r.a.createElement("br",null),"latitude: ",t," \xa0 longitude: ",n):r.a.createElement("div",{style:{position:"relative",pointerEvents:"none"}},"defaultProps: ",a,r.a.createElement(h.a,null))}}]),t}(a.Component)).defaultProps={defaultProp:"default prop"};a.Component,n(348),a.Component,n(224);function L(){return r.a.createElement(j.a,null,r.a.createElement("div",{tabName:"Components"}),r.a.createElement("div",{tabName:"Redux Forms"},r.a.createElement(_,null)),r.a.createElement("div",{tabName:"Forms"},r.a.createElement(g,null)),r.a.createElement("div",{tabName:"JSX"},r.a.createElement(b,null),r.a.createElement(y,{prop1:"prop1",prop2:"prop2"}),r.a.createElement(C,null)))}n.d(t,"default",function(){return L})}}]);
//# sourceMappingURL=3.6ae28b8f.chunk.js.map