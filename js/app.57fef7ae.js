(function(t){function e(e){for(var o,n,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var o={},n={app:0},s={app:0},r=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f79b4a1d","chunk-2d216214":"431196c0","chunk-b18aa712":"5250c41d"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"61000246","chunk-2d216214":"31d6cfe0","chunk-b18aa712":"31d6cfe0"}[t]+".css",s=l.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var c=r[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===s))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],u=c.getAttribute("data-href");if(u===o||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete n[t],d.parentNode.removeChild(d),a(r)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){n[t]=0})));var o=s[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,a){o=s[t]=[e,a]}));e.push(o[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",p.name="ChunkLoadError",p.type=o,p.request=n,a[1](p)}s[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(a,o,function(e){return t[e]}.bind(null,o));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vita_vinea/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0edd":function(t,e,a){t.exports=a.p+"img/checklist.2ab5f19b.png"},"2ccb":function(t,e,a){t.exports=a.p+"img/logo-vita.e7be2515.png"},"2d41":function(t,e,a){"use strict";a("5b44")},"3a4a":function(t,e,a){"use strict";a("9550")},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("div",{staticClass:"container"},[e("img",{staticClass:"logo",attrs:{src:a("2ccb"),alt:""}}),e("router-view")],1),e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:a("be00"),alt:""}}),t._v(" Nowa kalkulacja ")]),e("router-link",{attrs:{to:"/history"}},[e("img",{attrs:{src:a("0edd"),alt:""}}),t._v(" Kalkulacje ")])],1)])},s=[],r={created(){this.$workbox&&this.$workbox.addEventListener("waiting",()=>{this.showUpdateUI=!0})}},i=r,l=(a("3a4a"),a("2877")),c=Object(l["a"])(i,n,s,!1,null,null,null),u=c.exports,p=a("acfa");let d;"serviceWorker"in navigator?(d=new p["a"]("/vita_vinea/service-worker.js"),d.addEventListener("controlling",()=>{window.location.reload()}),d.register()):d=null;var m=d,h=a("8c4f"),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[t.showModal?e("div",{staticClass:"modal-overlay"},[e("div",{staticClass:"modal card"},[e("img",{attrs:{src:a("cd5c"),alt:""},on:{click:function(e){t.showModal=!1}}}),e("p",[t._v("Nazwa kalkulacji")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.resultName,expression:"resultName"}],staticClass:"base-input",attrs:{type:"text",placeholder:"Wpisz nazwę pod jaką zapiszesz utworzoną kalkuację"},domProps:{value:t.resultName},on:{input:function(e){e.target.composing||(t.resultName=e.target.value)}}}),e("button",{staticClass:"button button--success",on:{click:t.generateResults}},[t._v("Zapisz wyniki")])])]):t._e(),e("div",{staticClass:"card"},[t._m(0),e("div",{staticClass:"table-wrapper"},[e("table",{attrs:{id:"table"}},[t._m(1),t._l(this.$store.state.mapPoints,(function(a,o){return e("tr",{key:o},[e("td",[t._v(t._s(o))]),e("td",[t._v(t._s(a.position.lng))]),e("td",[t._v(t._s(a.position.lat))]),e("td",[e("button",{staticClass:"button button--error",on:{click:function(e){return t.removePoint(o)}}},[t._v("Usuń")])]),e("td",[e("div",{staticClass:"checkbox-wrapper-31"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.base,expression:"point.base"}],attrs:{type:"checkbox",disabled:t.checkBoxDisabled&&!a.base},domProps:{checked:Array.isArray(a.base)?t._i(a.base,null)>-1:a.base},on:{change:function(e){var o=a.base,n=e.target,s=!!n.checked;if(Array.isArray(o)){var r=null,i=t._i(o,r);n.checked?i<0&&t.$set(a,"base",o.concat([r])):i>-1&&t.$set(a,"base",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(a,"base",s)}}}),e("svg",{attrs:{viewBox:"0 0 35.6 35.6"}},[e("circle",{staticClass:"background",attrs:{cx:"17.8",cy:"17.8",r:"17.8"}}),e("circle",{staticClass:"stroke",attrs:{cx:"17.8",cy:"17.8",r:"14.37"}}),e("polyline",{staticClass:"check",attrs:{points:"11.78 18.12 15.55 22.23 25.17 12.87"}})])])])])}))],2)]),e("button",{staticClass:"button button--primary",on:{click:t.addPoint}},[t._v("Dodaj punkt")]),e("MapView")],1),e("div",{staticClass:"card"},[t._m(2),e("label",{attrs:{for:""}},[t._v("Odległość między rzędami (m)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.spaceRow,expression:"spaceRow"}],staticClass:"base-input",attrs:{type:"number",placeholder:"Wpisz odległość pomiędzy rzędami (m)"},domProps:{value:t.spaceRow},on:{input:function(e){e.target.composing||(t.spaceRow=e.target.value)}}}),e("label",{attrs:{for:""}},[t._v("Odległość między sadzonkami (m)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.spacePlant,expression:"spacePlant"}],staticClass:"base-input",attrs:{type:"number",placeholder:"Wpisz odległość pomiędzy sadzonkami (m)"},domProps:{value:t.spacePlant},on:{input:function(e){e.target.composing||(t.spacePlant=e.target.value)}}}),e("label",{attrs:{for:""}},[t._v("Odległość między słupkami środkowymi (m)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.spacePall,expression:"spacePall"}],staticClass:"base-input",attrs:{type:"number",placeholder:"Wpisz odległość pomiędzy słupkami (m)"},domProps:{value:t.spacePall},on:{input:function(e){e.target.composing||(t.spacePall=e.target.value)}}}),e("button",{staticClass:"button button--success",on:{click:function(e){t.showModal=!0}}},[t._v("Generuj wyniki")])])])},g=[function(){var t=this,e=t._self._c;return e("h2",{staticClass:"card__heading"},[e("span",[t._v("Punkty")]),t._v(" pola ")])},function(){var t=this,e=t._self._c;return e("tr",[e("th",[t._v("Lp.")]),e("th",[t._v("Lat")]),e("th",[t._v("Lon")]),e("th",[t._v("Akcje")]),e("th",[t._v("Podstawa")])])},function(){var t=this,e=t._self._c;return e("h2",{staticClass:"card__heading"},[e("span",[t._v("Dane")]),t._v(" obliczeniowe ")])}],f=function(){var t=this,e=t._self._c;return e("div",[t._v(" "+t._s(t.distanceBetweenPoints)+" "),e("l-map",{staticStyle:{height:"700px",width:"100%"},attrs:{zoom:t.zoom,center:this.$store.state.center}},[e("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),e("l-polyline",{attrs:{"lat-lngs":t.points,color:t.polyline.color}}),e("l-polyline",{attrs:{"lat-lngs":t.baseLinePoints,color:"red"}}),t._l(this.$store.state.mapPoints,(function(a,o){return e("l-marker",{key:o,attrs:{draggable:!0,"lat-lng":a.position},on:{"update:latLng":function(e){return t.$set(a,"position",e)},"update:lat-lng":function(e){return t.$set(a,"position",e)},click:function(e){return t.alert(a)}}},[e("l-tooltip",{attrs:{options:{permanent:!0,interactive:!0}}},[e("b",[t._v(t._s(o))]),t._v(" "),e("br"),o>0?e("span",[t._v("Do poprzedniego pkt "+t._s(t.distanceBetweenPoints[o-1])+"m")]):t._e()])],1)}))],2)],1)},b=[],y=a("2699"),_=a("a40a"),w=a("0dbd"),P=a("fb8e"),k=a("258a"),C=a("635f"),x=a("4e2b"),z=a("31dc"),L=a("e11e");delete L["Icon"].Default.prototype._getIconUrl,L["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var M={name:"GeometryTest",components:{LMap:y["a"],LTileLayer:_["a"],LCircle:w["a"],LRectangle:P["a"],LPolygon:k["a"],LPolyline:C["a"],LMarker:x["a"],LTooltip:z["a"]},computed:{points(){let t=[];return this.$store.state.mapPoints.forEach(e=>{t.push([e.position.lat,e.position.lng])}),t},baseLinePoints(){const t=this.$store.state.mapPoints.filter(t=>!0===t.base);let e=[];return t.forEach(t=>{e.push([t.position.lat,t.position.lng])}),e},distanceBetweenPoints(){const t=this.$store.state.mapPoints;if(t.length>1){let e=[];return t.forEach((a,o)=>{if(t[o-1]){const a=t[o].position.lat,n=t[o-1].position.lat,s=t[o].position.lng,r=t[o-1].position.lng,i=6371e3,l=a*Math.PI/180,c=n*Math.PI/180,u=(n-a)*Math.PI/180,p=(r-s)*Math.PI/180,d=Math.sin(u/2)*Math.sin(u/2)+Math.cos(l)*Math.cos(c)*Math.sin(p/2)*Math.sin(p/2),m=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),h=i*m;e.push(Math.floor(h))}}),e}},zoom(){return 15}},data(){return{polyline:{latlngs:[[47.334852,-1.509485],[47.342596,-1.328731],[47.241487,-1.190568],[47.234787,-1.358337]],color:"green"},url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},mounted(){this.getMyPosition()},methods:{clickBtn(){this.rectangle.style.weight++,this.rectangle.style.color=this.rectangle.style.weight%2===0?"blue":"green"},test(t){console.log(t)},getMyPosition(){navigator.geolocation.getCurrentPosition(t=>{let e=t.coords.latitude,a=t.coords.longitude;this.$store.state.center=[e,a]})}}},O=M,j=Object(l["a"])(O,f,b,!1,null,null,null),$=j.exports,S=(a("d67e"),{name:"Home",components:{MapView:$},data(){return{spaceRow:"",spacePlant:"",spacePall:"",showModal:!1,resultName:""}},computed:{checkBoxDisabled(){return this.$store.state.mapPoints.filter(t=>1==t.base).length>1}},methods:{addPoint(){navigator.geolocation.getCurrentPosition(t=>{let e=t.coords.latitude,a=t.coords.longitude;this.$store.commit("addPoint",{lng:a,lat:e}),this.$store.state.center=[e,a]})},removePoint(t){this.$store.commit("removePoint",t)},generateResults(){let t={title:this.resultName?this.resultName:`Kalkulacja ${(new Date).toLocaleDateString()} --- ${(new Date).toLocaleTimeString()}`,id:(Math.random()+1).toString(36).substring(7),points:this.$store.state.mapPoints,center:this.$store.state.center,spaceRow:this.spaceRow,spacePlant:this.spacePlant,spacePall:this.spacePall};if(localStorage.getItem("calculations")){let e=JSON.parse(localStorage.getItem("calculations"));e.push(t),localStorage.setItem("calculations",JSON.stringify(e))}else localStorage.setItem("calculations",JSON.stringify([t]));this.$router.push({path:"/history"})}}}),N=S,I=(a("2d41"),Object(l["a"])(N,v,g,!1,null,"aa0db3f0",null)),R=I.exports;a("abd3");o["a"].use(h["a"]);const D=[{path:"/",name:"Calculation",component:R},{path:"/history",name:"history",component:function(){return a.e("about").then(a.bind(null,"e4bb"))}},{path:"/calculation/:id",name:"calculation",props:!0,component:function(){return a.e("about").then(a.bind(null,"abd3"))}}],E=new h["a"]({mode:"history",base:"/vita_vinea/",routes:D});var A=E,T=a("2f62");o["a"].use(T["a"]);var U=new T["a"].Store({state:{mapPoints:[],center:[51,51]},mutations:{addPoint(t,e){t.mapPoints.push({position:e,base:!1})},removePoint(t,e){console.log("tak"),t.mapPoints.splice(e,1)}},actions:{}}),B=(a("6cc5"),a("6480"));o["a"].config.productionTip=!1,o["a"].prototype.$workbox=m,o["a"].use(B["a"]),new o["a"]({router:A,store:U,render:function(t){return t(u)}}).$mount("#app")},"5b44":function(t,e,a){},"5b99":function(t,e,a){"use strict";a("b47f")},9550:function(t,e,a){},abd3:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("vue-html2pdf",{ref:"html2Pdf",attrs:{"show-layout":!0,"float-layout":!1,"enable-download":!0,"preview-modal":!1,"paginate-elements-by-height":1400,filename:t.result.title,"pdf-quality":2,"manual-pagination":!1,"pdf-format":"a4","pdf-orientation":"landscape","pdf-content-width":"100%"}},[e("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[e("div",{staticClass:"card"},[e("h2",[t._v("Podgląd kalkulacji")]),e("h2",{staticClass:"card__heading"},[e("span",[t._v("Kalkulacja")]),t._v(" "+t._s(t.result.title)+" ")]),e("div",{staticClass:"table-wrapper"},[e("table",{attrs:{id:"table"}},[e("tr",[e("th",[t._v("Lp.")]),e("th",[t._v("Lat")]),e("th",[t._v("Lon")]),e("th",[t._v("Podstawa")])]),t._l(t.result.points,(function(a,o){return e("tr",{key:o},[e("td",[t._v(t._s(o))]),e("td",[t._v(t._s(a.position.lng))]),e("td",[t._v(t._s(a.position.lat))]),e("td",[e("div",{staticClass:"checkbox-wrapper-31"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.base,expression:"point.base"}],attrs:{type:"checkbox",disabled:"true"},domProps:{checked:Array.isArray(a.base)?t._i(a.base,null)>-1:a.base},on:{change:function(e){var o=a.base,n=e.target,s=!!n.checked;if(Array.isArray(o)){var r=null,i=t._i(o,r);n.checked?i<0&&t.$set(a,"base",o.concat([r])):i>-1&&t.$set(a,"base",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(a,"base",s)}}}),e("svg",{attrs:{viewBox:"0 0 35.6 35.6"}},[e("circle",{staticClass:"background",attrs:{cx:"17.8",cy:"17.8",r:"17.8"}}),e("circle",{staticClass:"stroke",attrs:{cx:"17.8",cy:"17.8",r:"14.37"}}),e("polyline",{staticClass:"check",attrs:{points:"11.78 18.12 15.55 22.23 25.17 12.87"}})])])])])}))],2)]),e("MapViewPreview",{attrs:{center:t.result.center,points:t.result.points}})],1),e("div",{staticClass:"card"},[e("h2",{staticClass:"card__heading"},[e("span",[t._v("Wprowadzone dane")]),t._v(" obliczeniowe ")]),e("div",{staticClass:"table-wrapper"},[e("table",{attrs:{id:"table"}},[e("tr",[e("th",[t._v("Dane")]),e("th",[t._v("Wartość")])]),e("tr",[e("td",[t._v("Odległość między rzędami (m)")]),e("td",[t._v(t._s(t.result.spaceRow))])]),e("tr",[e("td",[t._v("Odległość między sadzonkami (m)")]),e("td",[t._v(t._s(t.result.spacePlant))])]),e("tr",[e("td",[t._v("Odległość między słupkami środkowym (m)")]),e("td",[t._v(t._s(t.result.spacePall))])])])]),e("button",{staticClass:"button button--primary",on:{click:t.generateReport}},[t._v("Generuj PDF")])])])])],1)},n=[],s=function(){var t=this,e=t._self._c;return e("div",[e("l-map",{staticStyle:{height:"700px",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[e("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),e("l-polyline",{attrs:{"lat-lngs":t.pointsForPolyline,color:t.polyline.color}}),e("l-polyline",{attrs:{"lat-lngs":t.baseLinePoints,color:"red"}}),t._l(this.points,(function(a,o){return e("l-marker",{key:o,attrs:{draggable:!1}},[e("l-tooltip",{attrs:{options:{permanent:!0,interactive:!0}}},[t._v(" Punkt "+t._s(o)+" ")])],1)}))],2)],1)},r=[],i=a("2699"),l=a("a40a"),c=a("0dbd"),u=a("fb8e"),p=a("258a"),d=a("635f"),m=a("4e2b"),h=a("31dc"),v=a("e11e"),g=a("6480");delete v["Icon"].Default.prototype._getIconUrl,v["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var f={name:"GeometryTest",components:{LMap:i["a"],LTileLayer:l["a"],LCircle:c["a"],LRectangle:u["a"],LPolygon:p["a"],LPolyline:d["a"],LMarker:m["a"],LTooltip:h["a"],VueHtml2pdf:g["a"]},props:["points","center"],computed:{pointsForPolyline(){let t=[];return this.points.forEach(e=>{t.push([e.position.lat,e.position.lng])}),t},baseLinePoints(){const t=this.points.filter(t=>!0===t.base);let e=[];return t.forEach(t=>{e.push([t.position.lat,t.position.lng])}),e},zoom(){return 10}},data(){return{polyline:{latlngs:[[47.334852,-1.509485],[47.342596,-1.328731],[47.241487,-1.190568],[47.234787,-1.358337]],color:"green"},url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}}},b=f,y=a("2877"),_=Object(y["a"])(b,s,r,!1,null,null,null),w=_.exports,P={name:"Home",props:["id"],components:{MapViewPreview:w,VueHtml2pdf:g["a"]},data(){return{spaceRow:"",spacePlant:"",spacePall:"",showModal:!1,resultName:""}},computed:{result(){let t=JSON.parse(localStorage.getItem("calculations"));return t.filter(t=>t.id==this.id)[0]}},methods:{generateReport(){this.$refs.html2Pdf.generatePdf()}}},k=P,C=(a("5b99"),Object(y["a"])(k,o,n,!1,null,"3226bcfe",null));e["default"]=C.exports},b47f:function(t,e,a){},be00:function(t,e,a){t.exports=a.p+"img/new-calc.eca3dfd3.png"},cd5c:function(t,e,a){t.exports=a.p+"img/close.162602bc.png"}});
//# sourceMappingURL=app.57fef7ae.js.map