(this["webpackJsonpreact-main"]=this["webpackJsonpreact-main"]||[]).push([[10],{244:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(74),r=a(75),c=a(77),l=a(76),o=a(0),i=a.n(o),u=(a(245),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={activeTab:0},e.onClick=function(t){e.setState((function(e,a){return{activeTab:t}}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.activeTab;void 0!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props.children;if(t){var a=[],n=[];return o.Children.map(t,(function(t,r){a.push(e.getTabsHeaderView(t,r)),n.push(e.getTabsBody(t,r))})),i.a.createElement("div",{className:"tabs"},i.a.createElement("div",{className:"tabs__header"},a),i.a.createElement("div",{className:"tabs__content"},n))}}},{key:"getTabsHeaderView",value:function(e,t){return i.a.createElement("div",{onClick:this.onClick.bind(this,t),key:t,className:"tabs__header-item".concat(t===this.state.activeTab?" _active":"")},e.props.tabName)}},{key:"getTabsBody",value:function(e,t){return t===this.state.activeTab?i.a.createElement("div",{className:"tabs__content-item",key:t},e.props.children):""}}]),a}(o.Component))},245:function(e,t,a){},246:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(247);t.a=function(e){var t=e.title,a=e.children;return r.a.createElement("div",{className:"component"},r.a.createElement("h3",{className:"component__title"},t),r.a.createElement("div",{className:"component__body"},a))}},247:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),c=a(9),l=a(35),o=a(0),i=a.n(o),u=Object(o.memo)((function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),n=t[0],u=t[1],s=function(e){u(Object(o.lazy)((function(){return a(402)("./".concat(e))})))},m=Object(o.useCallback)(Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(0).then(a.bind(null,275));case 2:t=e.sent,u(t.default);case 4:case"end":return e.stop()}}),e)}))),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:function(){return s("lazy-inner.component")}},"Load lazy-inner"),i.a.createElement("button",{onClick:function(){return s("lazy-inner1.component")}},"Load lazy-inner1"),i.a.createElement("button",{onClick:function(){return s("lazy-inner2.component")}},"Load lazy-inner2"),i.a.createElement("button",{onClick:m},"Load by webpack import"),n&&i.a.createElement(n,null))}));t.default=u},354:function(e,t,a){},355:function(e,t,a){},356:function(e,t,a){},357:function(e,t,a){},402:function(e,t,a){var n={"./lazy-inner.component":[306,3],"./lazy-inner.component.tsx":[306,3],"./lazy-inner1.component":[307,4],"./lazy-inner1.component.tsx":[307,4],"./lazy-inner2.component":[308,5],"./lazy-inner2.component.tsx":[308,5],"./lazy-inner3.component":[275,0],"./lazy-inner3.component.tsx":[275,0],"./lazy.component":[268],"./lazy.component.tsx":[268]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=402,e.exports=r},476:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=a(9),i=a(74),u=a(75),s=a(77),m=a(76),p=(a(354),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:"",checkboxValue:!1,selectValue:"2",textareaValue:"",radioValue:"1",dateValue:"2019-10-06"},e.onInputChange=function(t){e.setState({inputValue:t.target.value}),e.props.onInput(t)},e.onCheckboxChange=function(t){e.setState({checkboxValue:t.target.checked}),console.log("onCheckboxChange ",t.target.checked)},e.onSelectChange=function(t){e.setState({selectValue:t.target.value}),console.log("onSelectChange ",t.target.value)},e.onTextareaChange=function(t){console.log("onTextareaChange ",t.target.value),e.setState({textareaValue:t.target.value})},e.onRadioChange=function(t){console.log("onRadioChange ",t.target.value),e.setState({radioValue:t.target.value})},e.onDateChange=function(t){console.log("onDateChange ",t.target.value),e.setState({dateValue:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),console.log("onFormSubmit ",e.state)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.inputValue,a=e.checkboxValue,n=e.selectValue,c=e.textareaValue,l=e.radioValue,o=e.dateValue,i=JSON.stringify(this.state);return r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{className:"search-bar__input",value:t,onChange:this.onInputChange,type:"text"}),this.props.children,r.a.createElement("br",null),r.a.createElement("input",{className:"search-bar__input",onChange:this.onCheckboxChange,type:"checkbox",checked:a}),r.a.createElement("br",null),r.a.createElement("select",{value:n,onChange:this.onSelectChange},r.a.createElement("option",{value:"1"},"option 1"),r.a.createElement("option",{value:"2"},"option 2"),r.a.createElement("option",{value:"3"},"option 3")),r.a.createElement("br",null),r.a.createElement("textarea",{cols:"30",rows:"10",onChange:this.onTextareaChange,value:c}),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"test",value:"1",checked:"1"===l,onChange:this.onRadioChange}),"radio 1",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"test",value:"2",checked:"2"===l,onChange:this.onRadioChange}),"radio 2",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"test",value:"3",checked:"3"===l,onChange:this.onRadioChange}),"radio 3",r.a.createElement("br",null),r.a.createElement("input",{type:"date",value:o,onChange:this.onDateChange})),r.a.createElement("p",null,i))}}]),a}(n.Component)),d=(a(355),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"getSearchListBody",value:function(){return this.props.items.map((function(e){var t=e.id,a=e.name,n=e.age;return r.a.createElement("li",{className:"search-list__item",key:t},a," ",n)}))}},{key:"render",value:function(){return r.a.createElement("ul",{className:"search-list"},this.getSearchListBody())}}]),a}(n.Component)),f=a(78),h=a(11),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={items:[],filteredItems:[],isFamilyLoading:!1},e.cancelGetFamilyRequest=null,e.onInput=function(t){var a=e.state.items.filter((function(e){return e.name.toLowerCase().includes(t.target.value.toLowerCase())}));e.setState({filteredItems:a})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.cancelGetFamilyRequest=h.a.CancelToken.source(),e.prev=1,e.next=4,h.a.get("/family",{cancelToken:this.cancelGetFamilyRequest.token});case 4:t=e.sent,a=t.data,n=a.slice(),this.setState({items:a,filteredItems:n,isFamilyLoading:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("FormsComponent componentDidMount fetch /family error",e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isFamilyLoading?this.renderContent():this.renderLoader()}},{key:"componentWillUnmount",value:function(){this.cancelGetFamilyRequest.cancel("http://localhost:3001/api/family canceled")}},{key:"renderContent",value:function(){return r.a.createElement(p,{onInput:this.onInput},r.a.createElement(d,{items:this.state.filteredItems}))}},{key:"renderLoader",value:function(){return r.a.createElement("div",{style:{transform:"scale3d(0.8, 0.8, 0.8)"}},r.a.createElement(f.a,{message:"Loading family"}))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={family:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.cancelGetFamilyRequest=h.a.CancelToken.source(),e.prev=1,e.next=4,h.a.get("/family",{cancelToken:this.cancelGetFamilyRequest.token});case 4:t=e.sent,a=t.data,this.setState({family:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("JsxListComponent get('/family'... ",e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.cancelGetFamilyRequest.cancel("JsxListComponent get('/family'... canceled")}},{key:"render",value:function(){return r.a.createElement("ul",null,this.state.family.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(y,e))})))}}]),a}(n.Component);function y(e){var t=e.name,a=e.age,n=e.occupation;return r.a.createElement(r.a.Fragment,null,"Name: ",t,", age: ",a,", occupation: ",n)}var E=function(e){var t=e.prop1,a=e.prop2;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,t),r.a.createElement("li",null,a))},g=(a(356),function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Differences from html"),r.a.createElement("ol",null,r.a.createElement("li",{className:"jsx-example__list-item"},r.a.createElement("div",{style:{backgroundColor:"#e8f3e8",color:"#333"}},"Inline styles"),r.a.createElement("div",{style:{backgroundColor:"#e8f3e8",color:"#333"}},"Inline styles2")),r.a.createElement("li",{className:"jsx-example__list-item"},r.a.createElement("div",{className:"_modifier"},"className instead of class"),r.a.createElement("label",{htmlFor:"name"},"htmlFor instead of for"),r.a.createElement("input",{type:"text",id:"name"})),r.a.createElement("li",{className:"jsx-example__list-item"},"Variables in JSX",r.a.createElement("button",{type:"button"},"Click me"))))}),k=a(244),C=a(310),O=a(311),j=(a(357),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).renderInput=function(t){var a=t.input,n=t.meta,c=t.label,l=t.mandatory,o="redux-form__input ".concat(n.visited&&n.error?"_error":"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"redux-form__field"},r.a.createElement("label",{htmlFor:n.form+a.name},c,e.renderMandatory(l)),r.a.createElement("input",Object.assign({autoComplete:"off",id:n.form+a.name,type:"text"},a,{className:o})),r.a.createElement("p",{className:"redux-form__error-message"},n.visited&&n.error)))},e.renderMandatory=function(e){return e?r.a.createElement("sup",{style:{color:"darkRed"}},"*"):null},e}return Object(u.a)(a,[{key:"onSubmit",value:function(e){console.log("formValues ",e)}},{key:"render",value:function(){console.log("reduxForm props ",this.props);var e=this.props,t=e.handleSubmit,a=e.valid;return r.a.createElement("form",{onSubmit:t(this.onSubmit)},r.a.createElement(C.a,{name:"title",component:this.renderInput,label:"Enter title",mandatory:!0}),r.a.createElement(C.a,{name:"description",component:this.renderInput,label:"Enter description"}),r.a.createElement("button",{type:"submit",disabled:!a},"Submit"))}}]),a}(n.Component)),x=Object(O.a)({form:"reduxFormSample",validate:function(e){var t={};return e.title||(t.title="title should be filled"),t}})(j),_=a(246),S=a(35),N=Object(n.memo)((function(){var e=function(e){var t=e.url,a=Object(n.useState)(null),r=Object(S.a)(a,2),c=r[0],i=r[1],u=Object(n.useState)(!1),s=Object(S.a)(u,2),m=s[0],p=s[1],d=Object(n.useState)(null),f=Object(S.a)(d,2),v=f[0],b=f[1],y=Object(n.useCallback)((function(){b(h.a.CancelToken.source())}),[b]),E=Object(n.useCallback)(Object(o.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,h.a.get(t,{cancelToken:null===v||void 0===v?void 0:v.token});case 4:a=e.sent,n=a.data,i(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Get request to ".concat(t," error "),e.t0);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[v,t]);return Object(n.useEffect)((function(){return E(),function(){return null===v||void 0===v?void 0:v.cancel("Cancel get request to ".concat(t))}}),[E,v,t]),{data:c,refetch:y,loading:m}}({url:"family"}),t=e.data,a=e.refetch,c=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){a()}},"refetch"),c?r.a.createElement(f.a,null):r.a.createElement("ul",null,null===t||void 0===t?void 0:t.map((function(e){var t=e.name,a=e.id,n=e.age;return r.a.createElement("li",{key:a},t,":",n)}))))})),F=a(268);function w(){return r.a.createElement(k.a,null,r.a.createElement("div",{tabName:"React"},r.a.createElement(_.a,{title:"Lazy"},r.a.createElement(F.default,null)),r.a.createElement(_.a,{title:"Family fetch"},r.a.createElement(N,null))),r.a.createElement("div",{tabName:"Redux Forms"},r.a.createElement(x,null)),r.a.createElement("div",{tabName:"Forms"},r.a.createElement(v,null)),r.a.createElement("div",{tabName:"JSX"},r.a.createElement(b,null),r.a.createElement(E,{prop1:"prop1",prop2:"prop2"}),r.a.createElement(g,null)))}}}]);
//# sourceMappingURL=10.6cb39176.chunk.js.map