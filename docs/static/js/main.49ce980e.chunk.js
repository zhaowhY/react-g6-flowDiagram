(this["webpackJsonpcra-template"]=this["webpackJsonpcra-template"]||[]).push([[0],{249:function(e,t){},252:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(20),a=r(22),o=r(35),c=r(36),u=r(0),i=r.n(u),s=r(19),p=r(255),l=r(231),f=r.n(l),b=0,m=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this.props.routes;return i.a.createElement(s.d,null,e.map((function(e,t){b+=1;var r=e.path,n=e.exact;return i.a.createElement(s.b,{key:"".concat(b,"-").concat(t),exact:!!n,path:r,render:function(t){var r=e.component;return i.a.createElement(r,Object.assign({},t,{routes:e.routes,meta:e.meta}))}})})))}}]),r}(i.a.Component),d=Object(s.g)(m),h=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).getRouterData=function(){var t=e.props.routes,r=[];var n=function e(t){return t.reduce((function(t,n){var a=t,o=n;return o.redirect?(r.push({from:o.path,to:o.redirect}),a):(o.routes&&(a=a.concat(e(o.routes))),!o.component||o.loadabled||o.component.loadable||(o.component=Object(p.a)(o.component),o.loadabled=!0),a=a.concat(f.a.omit(o,"routes")))}),[])}(t);return{redirectRoutes:r,flatRoutes:n}},e}return Object(a.a)(r,[{key:"render",value:function(){var e=this.getRouterData(),t=e.redirectRoutes,r=e.flatRoutes;return i.a.createElement(s.d,null,t.map((function(e){return i.a.createElement(s.a,{key:e.from,exact:!0,from:e.from,to:e.to})})),i.a.createElement(d,{routes:r}))}}]),r}(u.Component)},253:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r(7),a=[{path:"/list",name:"\u6570\u636e\u5171\u4eab",img:{src:"icon_gongzuotai"},exact:!0,component:function(){return Promise.all([r.e(6),r.e(5)]).then(r.bind(null,551))}},{component:function(){return r.e(3).then(r.bind(null,550))}}],o=[{path:"/",component:function(){return r.e(4).then(r.bind(null,549))}}],c=[].concat(Object(n.a)(a),[{path:"/",redirect:"/list"}])},277:function(e,t,r){e.exports=r(539)},481:function(e,t,r){},539:function(e,t,r){"use strict";r.r(t);r(278),r(288);var n,a,o,c,u=r(0),i=r.n(u),s=r(53),p=r.n(s),l=r(250),f=r(85),b=r(272),m=r.n(b),d=r(121),h=r(252),O=r(253),j=(r(481),function(){return i.a.createElement(d.a,null,i.a.createElement(f.a,{locale:m.a},i.a.createElement(h.a,{routes:O.b})))}),v=r(31),y=r.n(v),g=r(74),w=r(2),E=r(20),k=r(22),R=r(130),x=r(6),L=r(43),P=r(131),C=r.n(P),D=r(273),q="/user/login",I=r(274),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.quiet,r=e.raw;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r)return e.data;var n=e.data,a=n.code,o=n.data,c=n.message;return 200===a?o:(101!==a&&102!==a||(I.b.error(c),window.location.hash=q),!t&&I.b.error(c||"\u670d\u52a1\u5668\u9519\u8bef"),Promise.reject(e.data))}},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.cache,n=void 0!==r&&r,a=t.withCredentials,o=void 0===a||a,c=Object(L.a)(t,["cache","withCredentials"]),u=Object(w.a)({baseURL:e,withCredentials:o,paramsSerializer:function(e){return Object(D.stringify)(e,{arrayFormat:"repeat"})}},c),i=C.a.create(u);return i.interceptors.request.use((function(e){return n?(e.params||(e.params={}),e.params._t=Date.now(),e):e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use(_(),(function(e){return Promise.reject(e)})),i.quiet=C.a.create(u),i.quiet.interceptors.response.use(_({quiet:!0})),i.raw=C.a.create(u),i.raw.interceptors.response.use(_({raw:!0})),i},A=(r(249),z({base:window.GLOBAL_CONFIG.baseURL}.base)),B={},F={list:new(n=x.f.bound,a=x.f.bound,o=x.f.bound,c=function(){function e(){Object(E.a)(this,e),Object(x.i)(this,Object(w.a)({},B))}return Object(k.a)(e,[{key:"getInterfaceList",value:function(){var e=Object(g.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/mock/users/1");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"reset",value:function(){Object.assign(this,B)}},{key:"update",value:function(e){Object.assign(this,e)}}]),e}(),Object(R.a)(c.prototype,"getInterfaceList",[n],Object.getOwnPropertyDescriptor(c.prototype,"getInterfaceList"),c.prototype),Object(R.a)(c.prototype,"reset",[a],Object.getOwnPropertyDescriptor(c.prototype,"reset"),c.prototype),Object(R.a)(c.prototype,"update",[o],Object.getOwnPropertyDescriptor(c.prototype,"update"),c.prototype),c)};p.a.render(i.a.createElement(l.a,F,i.a.createElement(j,null)),document.getElementById("root"))}},[[277,1,2]]]);