(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({users:"users"}[e]||e)+"."+{users:"ec90cbd0"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={users:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({users:"users"}[e]||e)+"."+{users:"4eb8fc22"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vuetify-admin-console/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var r=n("d63f"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{temporary:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("div",{staticClass:"title py-4 pl-6 text--secondary"},[e._v(" Vuetify Admin ")]),n("v-list",{staticClass:"mt-4",attrs:{dense:""}},e._l(e.nav,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.to}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:"",color:"primary",dark:"",flat:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"mr-8",staticStyle:{opacity:".87"}},[e._v("Vuetify Admin")]),n("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Pesquise usuários, grupos ou configurações"}}),n("v-spacer")],1),n("v-content",[n("v-sheet",{staticClass:"breadcrub-sheet d-flex align-center black--text pl-5",attrs:{height:"32"}},[e._v(" Admin Console ")]),n("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{drawer:!1,nav:[{title:"Pessoal",icon:"mdi-home",to:"/"},{title:"Painel de controle",icon:"mdi-view-dashboard",to:"/dashboard"},{title:"Usuários",icon:"mdi-account",to:{name:"users"}}]}},methods:{nop:function(){}}},s=i,c=(n("5c0b"),n("2877")),l=n("6544"),u=n.n(l),p=n("7496"),d=n("40dc"),f=n("5bc1"),m=n("a75b"),v=n("132d"),h=n("8860"),g=n("da13"),b=n("5d23"),y=n("34c3"),w=n("f774"),O=n("8dd9"),_=n("2fa4"),j=n("8654"),C=n("2a7f"),P=Object(c["a"])(s,a,o,!1,null,null,null),x=P.exports;u()(P,{VApp:p["a"],VAppBar:d["a"],VAppBarNavIcon:f["a"],VContent:m["a"],VIcon:v["a"],VList:h["a"],VListItem:g["a"],VListItemContent:b["a"],VListItemIcon:y["a"],VListItemTitle:b["b"],VNavigationDrawer:w["a"],VSheet:O["a"],VSpacer:_["a"],VTextField:j["a"],VToolbarTitle:C["a"]});n("d3b7");var V=n("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"px-6 px-sm-12",attrs:{fluid:""}},[n("v-row",{staticClass:"home-panels-grid"},e._l(e.cards,(function(t){return n("v-col",{key:t.title,staticClass:"d-flex flex-column align-center",class:{"home-panels-grid__col--custom-col":e.$vuetify.breakpoint.lgAndUp},attrs:{cols:"6",sm:"4",md:"3"}},[n("panel-card",{attrs:{icon:t.icon,title:t.title,description:t.description,to:t.action}})],1)})),1)],1)},S=[],E=(n("a4d3"),n("e01a"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),A=(n("89e4"),n("1c87")),T=n("58df");function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=Object(T["a"])(A["a"]),$=D.extend({name:"panel-card",props:{icon:String,title:String,description:String,to:null},computed:{classes:function(){return I({"panel-card":!0,"text--primary":!0},A["a"].options.computed.classes.call(this))}},methods:{genWrapper:function(){var e={class:{"panel-card__wrapper":!0}};return[this.$createElement("div",e,this.genContent())]},genContent:function(){return[this.genImage(),this.genTitle(),this.genDescription()]},genImage:function(){var e={attrs:{src:this.icon,alt:this.title,width:"48",height:"48"}};return this.$createElement("img",e)},genTitle:function(){var e={class:{"panel-card__title":!0}};return this.$createElement("div",e,this.title)},genDescription:function(){var e={class:{"panel-card__description":!0}};return this.$createElement("div",e,this.description)}},render:function(e){var t=this.generateRouteLink(),n=t.tag,r=t.data;return e(n,r,this.genWrapper())}}),N={name:"home",components:{PanelCard:$},data:function(){return{cards:[{icon:"//www.gstatic.com/apps/cpanel/resources/img/dashboard-googblue-48.png",title:"Painel de controle",description:"Ver insights relevantes sobre sua organização",action:"/"},{icon:"//www.gstatic.com/apps/cpanel/resources/img/people-quantum-48.svg",title:"Usuários",description:"Adicionar ou gerenciar usuários",action:{name:"users"}}]}}},B=N,q=(n("21bb"),n("62ad")),M=n("a523"),U=n("0fd9"),F=Object(c["a"])(B,k,S,!1,null,null,null),J=F.exports;u()(F,{VCol:q["a"],VContainer:M["a"],VRow:U["a"]}),r["a"].use(V["a"]);var R=[{path:"/",name:"home",component:J},{path:"/users",name:"users",component:function(){return n.e("users").then(n.bind(null,"ed81"))}}],W=new V["a"]({base:"/vuetify-admin-console/",routes:R}),z=W,H=n("2f62");r["a"].use(H["a"]);var K=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=n("f309");r["a"].use(G["a"]);var Q=new G["a"]({theme:{themes:{light:{primary:"#3367d6"}}},breakpoint:{thresholds:{xs:720,sm:1024,md:1280,lg:1600}}});r["a"].config.productionTip=!1,new r["a"]({router:z,store:K,vuetify:Q,render:function(e){return e(x)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("7694"),a=n.n(r);a.a},7694:function(e,t,n){},"89e4":function(e,t,n){},d63f:function(e,t,n){}});
//# sourceMappingURL=app.232e6182.js.map