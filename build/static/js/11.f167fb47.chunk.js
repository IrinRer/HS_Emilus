(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[11],{480:function(e,t,a){"use strict";var s=a(126),r={login:function(e){return Object(s.a)({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return Object(s.a)({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=r},485:function(e,t,a){"use strict";var s=a(2),r=a(74),c=a(0),i=a(38),n=a(470),o=a(528),l=a(526),d=a(527),u=a(456),m=a(110),j=a(52),h=a(42),b=a(483),g=a(480),p={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},x={showAuthMessage:j.c,hideAuthMessage:j.b,showLoading:j.d,authenticated:j.a};t.a=Object(i.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),x)((function(e){var t=e.showLoading,a=e.token,i=e.loading,x=e.redirect,f=e.message,O=e.showMessage,w=e.hideAuthMessage,y=e.authenticated,v=e.allowRedirect,k=l.a.useForm(),P=Object(r.a)(k,1)[0],F=Object(h.g)();return Object(c.useEffect)((function(){null!==a&&v&&F.push(x),O&&setTimeout((function(){w()}),3e3)})),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(s.jsx)(d.a,{type:"error",showIcon:!0,message:f})}),Object(s.jsxs)(l.a,{form:P,layout:"vertical",name:"register-form",onFinish:function(){P.validateFields().then((function(e){t();g.a.signUp(e).then((function(e){y("fakeToken")})).then((function(e){Object(j.c)(e)}))})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(s.jsx)(l.a.Item,{name:"email",label:"Email",rules:p.email,hasFeedback:!0,children:Object(s.jsx)(u.a,{prefix:Object(s.jsx)(n.a,{className:"text-primary"})})}),Object(s.jsx)(l.a.Item,{name:"password",label:"Password",rules:p.password,hasFeedback:!0,children:Object(s.jsx)(u.a.Password,{prefix:Object(s.jsx)(o.a,{className:"text-primary"})})}),Object(s.jsx)(l.a.Item,{name:"confirm",label:"ConfirmPassword",rules:p.confirm,hasFeedback:!0,children:Object(s.jsx)(u.a.Password,{prefix:Object(s.jsx)(o.a,{className:"text-primary"})})}),Object(s.jsx)(l.a.Item,{children:Object(s.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,loading:i,children:"Sign Up"})})]})]})}))},519:function(e,t,a){"use strict";a.r(t);var s=a(18),r=a(2),c=(a(0),a(485)),i=a(489),n=a(490),o=a(525),l=a(38),d={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(l.d)((function(e){return e.theme.currentTheme}));return Object(r.jsx)("div",{className:"h-100",style:d,children:Object(r.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(r.jsx)(i.a,{justify:"center",children:Object(r.jsx)(n.a,{xs:20,sm:20,md:20,lg:7,children:Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:"my-2",children:[Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo.png":"logo-white.png"),alt:""}),Object(r.jsx)("p",{className:"text-muted",children:"Create a new account:"})]}),Object(r.jsx)(i.a,{justify:"center",children:Object(r.jsx)(n.a,{xs:24,sm:24,md:20,lg:20,children:Object(r.jsx)(c.a,Object(s.a)({},e))})})]})})})})})})}}}]);
//# sourceMappingURL=11.f167fb47.chunk.js.map