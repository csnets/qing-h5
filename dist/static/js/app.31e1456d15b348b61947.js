webpackJsonp([5],{"0xDb":function(t,n,e){"use strict";e.d(n,"a",function(){return c}),e.d(n,"b",function(){return u});var r=e("Yarq"),i=(e.n(r),e("hRKE")),a=e.n(i),c=function t(n){if("object"===(void 0===n?"undefined":a()(n))){var e=n instanceof Array?[]:{};for(var r in n)n.hasOwnProperty(r)&&(e[r]="object"===a()(n[r])?t(n[r]):n[r]);return e}},u={set:function(t,n){localStorage.setItem(t,n)},get:function(t){localStorage.getItem(t)},remove:function(t){localStorage.removeItem(t)}}},"2BAi":function(t,n){},"35JU":function(t,n,e){"use strict";n.a={name:"app",components:{moduleLists:function(){return e.e(3).then(e.bind(null,"ckLu"))},attrPanel:function(){return e.e(2).then(e.bind(null,"qqmI"))},topbar:function(){return e.e(1).then(e.bind(null,"lCIc"))},container:function(){return e.e(0).then(e.bind(null,"I3OW"))}},beforeCreate:function(){this.$store.dispatch("getUserData")}}},"3daJ":function(t,n){},"5reh":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"e",function(){return a}),e.d(n,"b",function(){return c}),e.d(n,"f",function(){return u}),e.d(n,"d",function(){return o});var r="ADD_COMP",i="EDIT_COMP",a="TOGGLE_COMP",c="ADD_PAGE",u="TOGGLE_PAGE",o="INIT_USER_DATA"},IcnI:function(t,n,e){"use strict";var r=e("a3Yh"),i=e.n(r),a=e("aA9S"),c=e.n(a),u=e("3cXf"),o=e.n(u),s=e("VCXJ"),f=e("9rMa"),d=e("5reh"),l=e("gJCy"),p=e("0xDb");s.default.use(f.a);n.a=new f.a.Store({actions:{getUserData:function(t){var n=t.commit,e=t.dispatch,r=localStorage.getItem("UserData");if(r)try{var i=JSON.parse(r),a=i.pages;n("INIT_USER_DATA",i),a&&a.lists&&a.lists.length&&n("TOGGLE_PAGE",a.lists[0].id)}catch(t){e("initH5Editor"),console.error("获取数据失败:"+t.message)}else e("initH5Editor")},saveUserData:function(t){var n=t.state;p.b.set("UserData",o()({pages:{lists:n.pages.lists}}))}},mutations:i()({},d.d,function(t,n){c()(t.pages,n.pages)}),modules:{pages:l.a},strict:!1})},M93x:function(t,n,e){"use strict";var r=e("35JU"),i=e("qo8W"),a=e("8AGX"),c=a(r.a,i.a,!1,null,null,null);n.a=c.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("VCXJ"),i=e("IcnI"),a=e("i9nl"),c=e.n(a),u=e("M93x"),o=e("c3k3"),s=(e.n(o),e("3daJ")),f=(e.n(s),e("2BAi")),d=(e.n(f),e("hvE6"));e.n(d);r.default.use(c.a),r.default.config.productionTip=!1,new r.default({el:"#app",store:i.a,render:function(t){return t(u.a)}})},c30k:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return c});var r=e("l/JR"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Date.now().toString(t)},a=function(){return Object(r.a)({id:i()})},c=function(){return Object(r.a)({id:i(32),css:{},props:{},comps:[]})}},c3k3:function(t,n){},fyxR:function(t,n,e){"use strict";var r=e("trOa");n.a={cImage:r.a}},gJCy:function(t,n,e){"use strict";var r,i=e("a3Yh"),a=e.n(i),c=e("aA9S"),u=e.n(c),o=e("5reh"),s=e("fyxR"),f=e("c30k"),d=e("0xDb"),l={lists:[],curPageId:null,curCompId:null},p={pages:function(t){return t.lists},curPageId:function(t){return t.curPageId||t.lists[0].id},curPage:function(t){return t.lists.find(function(n){return n.id===t.curPageId})||t.lists[0]}},g={initH5Editor:function(t){var n=t.dispatch,e=t.commit;n("addNewPage").then(function(t){e("TOGGLE_PAGE",t)})},addNewPage:function(t){var n=t.commit;return Object(f.b)().then(function(t){return n("ADD_PAGE",t),t.id})},addNewCompo:function(t,n){var e=t.commit;Object(f.a)().then(function(t){var r=s.a[n];e("ADD_COMP",u()(Object(d.a)(r),t))})}},v=(r={},a()(r,o.e,function(t,n){t.curCompId=n}),a()(r,o.c,function(t,n){var e=n.type,r=n.value,i=t.lists.find(function(n){return n.id===t.curPageId});if(i){var a=i.comps.find(function(n){return n.id===t.curCompId});a&&u()(a[e],r)}}),a()(r,o.f,function(t,n){t.curPageId=n}),a()(r,o.b,function(t,n){n&&t.lists.push(n)}),a()(r,o.a,function(t,n){var e=t.lists.find(function(n){return n.id===t.curPageId});e&&n&&e.comps.push(n)}),r);n.a={state:l,getters:p,actions:g,mutations:v}},hvE6:function(t,n){},"l/JR":function(t,n,e){"use strict";var r=e("rVsN"),i=e.n(r);n.a=function(t){var n=Math.ceil(200*Math.random());return new i.a(function(e,r){setTimeout(e(t),n)})}},qo8W:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-container",[e("el-header",{staticClass:"bg-main",attrs:{height:"8vh"}},[e("topbar")],1),t._v(" "),e("el-container",{staticStyle:{height:"92vh"}},[e("el-aside",[e("module-lists")],1),t._v(" "),e("el-main",[e("div",{staticClass:"workspace",attrs:{id:"workspace"}},[e("div",{staticClass:"wrap"},[e("container")],1)])]),t._v(" "),e("el-aside",[e("attr-panel")],1)],1)],1)},i=[],a={render:r,staticRenderFns:i};n.a=a},trOa:function(t,n,e){"use strict";n.a={id:1,title:"图片",name:"cImage",type:1,anim:{type:1,duration:1,delay:.4},props:{src:"/static/images/logo.png"},css:{t:0,l:0,w:200,h:200,rotate:0,bd:{w:1,t:1,c:"#fff"},br:5}}}},["NHnr"]);
//# sourceMappingURL=app.31e1456d15b348b61947.js.map