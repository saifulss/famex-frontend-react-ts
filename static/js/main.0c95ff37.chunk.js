(this["webpackJsonpfamex-frontend-react-ts"]=this["webpackJsonpfamex-frontend-react-ts"]||[]).push([[0],{107:function(e,t,n){e.exports=n(144)},112:function(e,t,n){},113:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),i=n.n(o),c=(n(112),n(113),n(7)),s=n(16),l=n(17),u=n(27),m=n(26),p=n(14),d=n(32),f=n.n(d),h=n(41),E=n(42),b=n.n(E),v={BASE_URL:"".concat("https://famex.rollingwithkids.com")};function y(){return function(){var e=Object(h.a)(f.a.mark((function e(t,n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(v.BASE_URL,"/expense-claims"),{headers:{Authorization:"Bearer ".concat(n().auth.accessToken)}});case 2:r=e.sent,a=r.data.map((function(e){return{id:e.id,amount:e.amount_in_cents,description:e.description,createdAt:e.created_at,claimant:{id:e.claimant.id,displayName:e.claimant.display_name}}})),t(g(a));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function g(e){return{type:"STORE_EXPENSE_CLAIMS",expenseClaims:e}}var C=n(33),O=n(11);var x=n(146),j=n(183),w=n(196),k=n(199),S=n(198),_=n(185),A=n(186),U=function(){function e(t){Object(s.a)(this,e),this.values=void 0,this.errors=[],this.values=t}return Object(l.a)(e,[{key:"validate",value:function(){this.values.amount||this.errors.push({field:"amount",message:"Mandatory"}),this.values.description||this.errors.push({field:"description",message:"Mandatory"})}}]),e}(),T=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).onInputChange=function(e){if(void 0===e.target.name)throw new Error("Unknown form input name");if(!["currency","amount","category","description"].includes(e.target.name))throw new Error("Unknown form input name ".concat(e.target.name));r.props.updateExpenseClaimForm(Object(O.a)(Object(O.a)({},r.props.expenseClaimForm),{},Object(C.a)({},e.target.name,e.target.value)))},r.onSubmit=function(e){e.preventDefault();var t=new U(r.props.expenseClaimForm);t.validate(),r.setState({formErrors:t.errors},(function(){0===r.state.formErrors.length&&r.props.submitExpenseClaim()}))},r.hasError=function(e){return 0!==r.state.formErrors.filter((function(t){return t.field===e})).length},r.state={formErrors:[]},r}return Object(l.a)(n,[{key:"render",value:function(){return r.createElement(x.a,{style:{padding:"8px"}},r.createElement("form",{onSubmit:this.onSubmit},r.createElement("div",{style:{display:"flex"}},r.createElement(j.a,{style:{flexGrow:1}},r.createElement(w.a,{label:"Description",variant:"outlined",inputProps:{name:"description"},value:this.props.expenseClaimForm.description||"",onChange:this.onInputChange}))),r.createElement("div",{style:{display:"flex",marginTop:"8px"}},r.createElement(j.a,{style:{flexGrow:1},variant:"outlined"},r.createElement(k.a,{htmlFor:"outlined-adornment-amount"},"Amount"),r.createElement(S.a,{id:"outlined-adornment-amount",type:"number",value:void 0===this.props.expenseClaimForm.amount?"":this.props.expenseClaimForm.amount,onChange:this.onInputChange,startAdornment:r.createElement(_.a,{position:"start"},"$"),name:"amount",error:this.hasError("amount")}))),r.createElement("div",{style:{display:"flex",flexDirection:"row-reverse",marginTop:"8px"}},r.createElement(A.a,{variant:"contained",color:"primary",onSubmit:this.onSubmit,onClick:this.onSubmit},"Create"))))}}]),n}(r.Component),R=Object(p.b)((function(e){return{expenseClaimForm:e.expenseClaimForm}}),(function(e){return{updateExpenseClaimForm:function(t){return e(function(e){return{type:"UPDATE_EXPENSE_CLAIM_FORM",payload:e}}(t))},submitExpenseClaim:function(){return e(function(){var e=Object(h.a)(f.a.mark((function e(t,n){var r,a,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n().expenseClaimForm,a=r.amount,o=r.description,a){e.next=3;break}throw new Error("Amount is falsy.");case 3:if(n().auth.currentUser){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,b.a.post("".concat(v.BASE_URL,"/expense-claims"),{amount_in_cents:Math.round(100*a),description:o,claimant:n().auth.currentUser.id},{headers:{Authorization:"Bearer ".concat(n().auth.accessToken)}});case 7:t({type:"CLEAR_EXPENSE_CLAIM_FORM"}),t(y());case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))(T),N=n(184),L=n(188),M=n(147),F=n(92),I=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"toCurrency",value:function(e){return new Intl.NumberFormat("en-sg",{style:"currency",currency:"sgd"}).format(e)}},{key:"toCurrencyWithoutTrailingZeroes",value:function(e){var t,n=new Intl.NumberFormat("en-sg",{style:"currency",currency:"sgd"}).formatToParts(e),r="",a=Object(F.a)(n);try{for(a.s();!(t=a.n()).done;){var o=t.value;if("fraction"===o.type&&"00"===o.value)return r=r.replace(".","");r+=o.value}}catch(i){a.e(i)}finally{a.f()}return r}}]),e}(),D=n(52),B=n.n(D),P=n(187),W=n(200),z=n(86),X=function(e){var t=B()(e.createdAt),n=t.fromNow(),a=B()().subtract(3,"d");return t.isBefore(a)&&(n=t.format("D MMM YYYY, HH:mm")),r.createElement("div",{style:{fontSize:"70%",color:"#aaaaaa"}},n)},V=function(e){return r.createElement("div",null,G(e))},G=function(e){return e.description?r.createElement("div",{style:{fontSize:"80%",color:"#aaaaaa"}},e.description):null},J=function(e){return r.createElement(M.a,null,r.createElement(P.a,null,r.createElement(W.a,null,z(e.expenseClaim.claimant.displayName))),r.createElement(L.a,{primary:(t=e.expenseClaim,r.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.createElement("div",null,I.toCurrencyWithoutTrailingZeroes(t.amount/100)),X(t))),secondary:V(e.expenseClaim),disableTypography:!0}));var t},K=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).endOfList=void 0,a.scrollToBottom=function(){a.endOfList.current.scrollIntoView()},a.endOfList=r.createRef(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(e,t,n){JSON.stringify(e.expenseClaims)!==JSON.stringify(this.props.expenseClaims)&&this.scrollToBottom()}},{key:"render",value:function(){return r.createElement(N.a,{dense:!0,style:Object(O.a)({},this.props.style)},this.props.expenseClaims.map((function(e){return r.createElement(J,{expenseClaim:e,key:e.id})})),r.createElement("li",{ref:this.endOfList}))}}]),n}(r.Component),Y=Object(p.b)((function(e){return{expenseClaims:e.expenseClaim.expenseClaims}}))(K),H=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchExpenseClaims()}},{key:"render",value:function(){return r.createElement("div",{className:"ExpenseClaimsView",style:{display:"flex",flexDirection:"column",height:"90vh"}},r.createElement(Y,{style:{overflow:"auto"}}),r.createElement(R,null))}}]),n}(r.Component),Z={fetchExpenseClaims:y},$=Object(p.b)((function(e){return{expenseClaims:e.expenseClaim.expenseClaims}}),Z)(H),q=n(53),Q="/",ee="/login",te="/expense-claims",ne=Object(p.b)((function(e){return{currentUser:e.auth.currentUser}}))((function(e){return r.createElement("div",null,r.createElement("p",null,"Welcome to Famex - the family expenditure tracking app!"),void 0===e.currentUser&&r.createElement("p",null,"To begin, click ",r.createElement(q.b,{to:ee},"here")," to sign in."),e.currentUser&&r.createElement("p",null,"Welcome, ",e.currentUser.email,"! Click"," ",r.createElement(q.b,{to:te},"here")," to see expense claims."))})),re=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.createElement("div",null,"Error404View")}}]),n}(r.Component),ae=n(20),oe=n(93),ie=n(94),ce={currentUser:void 0,accessToken:void 0},se={amount:0,description:""},le={expenseClaims:[]},ue=Object(ae.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;return"STORE_ACCESS_TOKEN"===t.type?Object(O.a)(Object(O.a)({},e),{},{accessToken:t.accessToken}):"STORE_CURRENT_USER"===t.type?Object(O.a)(Object(O.a)({},e),{},{currentUser:t.currentUser}):"CLEAR_CURRENT_USER"===t.type?Object(O.a)(Object(O.a)({},e),{},{currentUser:void 0}):"CLEAR_ACCESS_TOKEN"===t.type?Object(O.a)(Object(O.a)({},e),{},{accessToken:void 0}):e},expenseClaim:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;if("STORE_EXPENSE_CLAIMS"===t.type){var n=t.expenseClaims.sort((function(e,t){return e.createdAt<t.createdAt?-1:e.createdAt>t.createdAt?1:e.id<t.id?-1:e.id>t.id?1:0}));return{expenseClaims:n.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{createdAt:B.a.utc(e.createdAt).local().toDate()})}))}}return e},expenseClaimForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_EXPENSE_CLAIM_FORM"===t.type?{amount:t.payload.amount,description:t.payload.description}:"CLEAR_EXPENSE_CLAIM_FORM"===t.type?Object(O.a)(Object(O.a)({},e),{},{amount:void 0,description:""}):e}}),me=n(68),pe=n(95),de={key:"root",storage:n.n(pe).a},fe=Object(me.a)(de,ue),he=[oe.a],Ee=ae.applyMiddleware.apply(void 0,he),be=function(e,t){return function(){var n=Object(h.a)(f.a.mark((function n(r){var a,o,i,c,s;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={identifier:e,password:t},n.next=3,b.a.post("".concat(v.BASE_URL,"/auth/local"),a);case 3:o=n.sent,i=o.data,c=i.jwt,s=i.user,r({type:"STORE_CURRENT_USER",currentUser:{id:s.id,email:s.email,displayName:s.display_name}}),r(ve(c));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},ve=function(e){return{type:"STORE_ACCESS_TOKEN",accessToken:e}},ye=n(194),ge=n(4),Ce=n(69),Oe=n(189),xe=n(201),je=n(15),we=n(192),ke=n(193),Se=n(191),_e=n(54),Ae=n(190),Ue=n(97),Te=n(96),Re=n.n(Te),Ne=n(86),Le=Object(Oe.a)((function(e){return Object(xe.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},search:Object(C.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(je.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(je.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(C.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(C.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(C.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})})),Me=Object(p.b)((function(e){return{currentUserDisplayName:e.auth.currentUser.displayName}}),(function(e){return{clearCurrentUser:function(){return e({type:"CLEAR_CURRENT_USER"})},clearAccessToken:function(){return e({type:"CLEAR_ACCESS_TOKEN"})}}}))((function(e){var t=Le(),n=a.a.useState(null),r=Object(Ce.a)(n,2),o=r[0],i=r[1],c=a.a.useState(null),s=Object(Ce.a)(c,2),l=s[0],u=s[1],m=Boolean(o),p=Boolean(l);function d(e){i(e.currentTarget)}function f(){u(null)}function h(){i(null),f()}var E="primary-search-account-menu",b=a.a.createElement(Ue.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:E,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:h},a.a.createElement(Ae.a,{onClick:function(){e.clearCurrentUser(),e.clearAccessToken(),h()}},"Log out")),v=a.a.createElement(W.a,null,Ne(e.currentUserDisplayName)),y=a.a.createElement(Ue.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:f},a.a.createElement(Ae.a,{onClick:d},a.a.createElement(Se.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},v),a.a.createElement("p",null,"Profile")));return a.a.createElement("div",{className:t.grow},a.a.createElement(we.a,null,a.a.createElement(ke.a,null,a.a.createElement(_e.a,{className:t.title,variant:"h6",noWrap:!0},"Famex"),a.a.createElement("div",{className:t.grow}),a.a.createElement("div",{className:t.sectionDesktop},a.a.createElement(Se.a,{edge:"end","aria-label":"account of current user","aria-controls":E,"aria-haspopup":"true",onClick:d,color:"inherit"},v)),a.a.createElement("div",{className:t.sectionMobile},a.a.createElement(Se.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},a.a.createElement(Re.a,null))))),y,b)})),Fe={attemptAuthentication:be},Ie=Object(ge.a)((function(e){return{toolbar:e.mixins.toolbar}}))(Object(p.b)((function(e){return{currentUser:e.auth.currentUser}}),Fe)((function(e){if(void 0===e.currentUser)return r.createElement(c.a,{to:"/login"});var t=e.classes;return r.createElement(ye.a,{maxWidth:"xs"},r.createElement(Me,null),r.createElement("div",{id:"AuthenticatedBaseView__app-bar-vertical-spacer",className:t.toolbar}),r.createElement("div",{id:"AuthenticatedBaseView__main-content"},e.component))}))),De=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:""},e.onUsernameChange=function(t){var n=t.target.value;e.setState({username:n})},e.onPasswordChange=function(t){var n=t.target.value;e.setState({password:n})},e.onSubmit=function(t){t.preventDefault(),e.props.attemptAuthentication(e.state.username,e.state.password)},e.hasLoggedIn=function(){return void 0!==e.props.currentUser&&void 0!==e.props.accessToken},e}return Object(l.a)(n,[{key:"render",value:function(){return this.hasLoggedIn()?r.createElement(c.a,{to:te}):r.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",flexDirection:"column",width:"400px"}},r.createElement("input",{value:this.state.username,onChange:this.onUsernameChange,placeholder:"Email"}),r.createElement("input",{type:"password",value:this.state.password,onChange:this.onPasswordChange,placeholder:"Password"}),r.createElement("input",{type:"submit",value:"Sign in"}))}}]),n}(r.Component),Be={attemptAuthentication:be},Pe=Object(p.b)((function(e){return{currentUser:e.auth.currentUser,accessToken:e.auth.accessToken}}),Be)(De),We=n(195),ze=function(){var e=Object(ae.createStore)(fe,Object(ie.composeWithDevTools)(Ee));return{store:e,persistor:Object(me.b)(e)}}().store,Xe=function(){return a.a.createElement(q.a,null,a.a.createElement(We.a,null),a.a.createElement(p.a,{store:ze},a.a.createElement(c.d,null,a.a.createElement(c.b,{exact:!0,path:Q,render:function(){return a.a.createElement(ne,null)}}),a.a.createElement(c.b,{exact:!0,path:ee,component:Pe}),a.a.createElement(c.b,{exact:!0,path:te,render:function(){return a.a.createElement(Ie,{component:a.a.createElement($,null)})}}),a.a.createElement(c.b,{path:"*",render:function(){return a.a.createElement(re,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[107,1,2]]]);
//# sourceMappingURL=main.0c95ff37.chunk.js.map