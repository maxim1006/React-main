(this["webpackJsonpreact-main"]=this["webpackJsonpreact-main"]||[]).push([[10],{237:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(74),r=a(75),c=a(77),l=a(76),o=a(0),u=a.n(o),s=(a(238),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={activeTab:0},e.onClick=function(t){e.setState((function(e,a){return{activeTab:t}}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.activeTab;void 0!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props.children;if(t){var a=[],n=[];return o.Children.map(t,(function(t,r){a.push(e.getTabsHeaderView(t,r)),n.push(e.getTabsBody(t,r))})),u.a.createElement("div",{className:"tabs"},u.a.createElement("div",{className:"tabs__header"},a),u.a.createElement("div",{className:"tabs__content"},n))}}},{key:"getTabsHeaderView",value:function(e,t){return u.a.createElement("div",{onClick:this.onClick.bind(this,t),key:t,className:"tabs__header-item".concat(t===this.state.activeTab?" _active":"")},e.props.tabName)}},{key:"getTabsBody",value:function(e,t){return t===this.state.activeTab?u.a.createElement("div",{className:"tabs__content-item",key:t},e.props.children):""}}]),a}(o.Component))},238:function(e,t,a){},261:function(e){e.exports=JSON.parse('{"browse":"browse","cancel":"cancel","clear":"clear","complex":{"prop":"complex {{count}}"}}')},286:function(e){e.exports=JSON.parse('{"browse":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c","cancel":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c","complex":{"prop":"\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u043e\u0435 {{count}}"}}')},402:function(e,t,a){var n={"./en.json":[261],"./ru.json":[286],"./whitelist_ru.json":[407,21]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a.t(r,3)}))}r.keys=function(){return Object.keys(n)},r.id=402,e.exports=r},452:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),l=a(265),o=a(286),u=a(261),s={ru:o,en:u},i=a(288),m=a(268),p=Object(m.a)({browse:{id:"browse",defaultMessage:"browse"}}),b=Object(n.memo)((function(){var e=Object(i.a)().formatMessage;return r.a.createElement(r.a.Fragment,null,e(p.browse))})),f=Object(n.memo)((function(){var e,t=(e="locale",JSON.parse(localStorage.getItem(e))),a=Object(n.useState)("ru"===t?"ru":"en"),o=Object(c.a)(a,2),u=o[0],i=o[1],m=s[u];return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:function(){i((function(e){return"ru"===e?"en":"ru"}))}},"Change locale from ",u),r.a.createElement(l.a,{locale:u,messages:m},r.a.createElement(b,null)))})),v=a(237),d=a(4),E=a.n(d),h=a(3),O=a(9),j=a(401),w=a.n(j);w.a.fallbacks=!0,w.a.translations={en:u,ru:{}},w.a.defaultLocale="en";var k=w.a;(function(){var e=Object(O.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(Object.keys(w.a.translations).filter((function(e){return e!==w.a.defaultLocale})).map(function(){var e=Object(O.a)(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(402)("./".concat(t,".json"));case 2:n=e.sent,r=n.default,w.a.translations[t]=Object(h.a)(Object(h.a)({},w.a.translations[t]),r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var y=r.a.createContext({setValue:function(){},i18n:{}}),g=Object(n.memo)((function(){var e=Object(n.useContext)(y).i18n;return r.a.createElement("div",null,r.a.createElement("h3",null,"I18n Inner"),r.a.createElement("p",null,e.t("browse")),r.a.createElement("p",null,e.t("browse",{locale:"ru"})),r.a.createElement("p",null,e.t("complex.prop",{count:10})),r.a.createElement("p",null,e.t("cancel")),r.a.createElement("p",null,e.t("clear")))})),x=Object(n.memo)((function(){var e=Object(n.useState)(k.currentLocale()),t=Object(c.a)(e,2),a=t[0],l=t[1];return k.locale=a,r.a.createElement(y.Provider,{value:{i18n:k,setValue:function(e){k.locale=e,l(e)}}},r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){l("ru"===a?"en":"ru")}},"Change locale from ",a)),r.a.createElement("p",null,k.t("browse")),r.a.createElement("p",null,k.t("browse",{locale:"ru"})),r.a.createElement("p",null,k.t("complex.prop",{count:10})),r.a.createElement("p",null,k.t("cancel")),r.a.createElement("p",null,k.t("clear")),r.a.createElement(g,null))}));t.default=Object(n.memo)((function(){return r.a.createElement(v.a,null,r.a.createElement("div",{tabName:"i18n-js"},r.a.createElement(x,null)),r.a.createElement("div",{tabName:"react-intl"},r.a.createElement(f,null)))}))}},0,[21]]);
//# sourceMappingURL=10.55e0b3db.chunk.js.map