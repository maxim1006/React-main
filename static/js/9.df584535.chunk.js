(this["webpackJsonpreact-main"]=this["webpackJsonpreact-main"]||[]).push([[9],{229:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);a(230);class c extends n.Component{constructor(...e){super(...e),this.state={activeTab:0},this.onClick=e=>{this.setState((t,a)=>({activeTab:e}))}}componentDidMount(){var e=this.props.activeTab;void 0!==e&&this.setState({activeTab:e})}render(){var e=this.props.children;if(e){var t=[],a=[];return n.Children.map(e,(e,n)=>{t.push(this.getTabsHeaderView(e,n)),a.push(this.getTabsBody(e,n))}),r.a.createElement("div",{className:"tabs"},r.a.createElement("div",{className:"tabs__header"},t),r.a.createElement("div",{className:"tabs__content"},a))}}getTabsHeaderView(e,t){return r.a.createElement("div",{onClick:this.onClick.bind(this,t),key:t,className:"tabs__header-item".concat(t===this.state.activeTab?" _active":"")},e.props.tabName)}getTabsBody(e,t){return t===this.state.activeTab?r.a.createElement("div",{className:"tabs__content-item",key:t},e.props.children):""}}},230:function(e,t,a){},236:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(237);t.a=({title:e,children:t})=>r.a.createElement("div",{className:"component"},r.a.createElement("h3",{className:"component__title"},e),r.a.createElement("div",{className:"component__body"},t))},237:function(e,t,a){},401:function(e,t,a){e.exports={proReactPage:"pro-react.page_proReactPage__o_qfV"}},452:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(229),i=a(236),s=a(11),o=a(44),l=a(441),m=a(435),p=Object(n.memo)(()=>r.a.createElement("div",null,r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement("h3",null,"SignUpForm"),r.a.createElement("form",{noValidate:!0,autoComplete:"off",style:{marginBottom:"30px"}},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(l.a,{id:"standard-basic",label:"Standard"})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(l.a,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password"})))),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement("h3",null,"SignInForm"))))),d=Object(n.memo)(()=>r.a.createElement("div",null,"ProReactRouterAdminComponent")),u=Object(n.memo)(()=>r.a.createElement("div",null,r.a.createElement(o.a,{routes:[{to:"/pro-react/auth",title:"Auth"},{to:"/pro-react/admin",title:"Admin"}]}),r.a.createElement(s.b,{path:"/pro-react/auth",component:p}),r.a.createElement(s.b,{path:"/pro-react/admin",component:d}))),h=a(401),b=a.n(h);t.default=()=>r.a.createElement("div",{className:b.a.proReactPage},r.a.createElement(c.a,null,r.a.createElement("div",{tabName:"Router"},r.a.createElement(i.a,{title:"Router"},r.a.createElement(u,null)))))}}]);
//# sourceMappingURL=9.df584535.chunk.js.map