(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{cdad:function(t,a,s){},d45d:function(t,a,s){"use strict";s("cdad")},e4bb:function(t,a,s){"use strict";s.r(a);var l=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"table-wrapper"},[a("table",{attrs:{id:"table"}},[t._m(1),t._l(t.calculationsHistory,(function(s){return a("tr",{key:s.id},[a("td",[t._v(t._s(s.id))]),a("td",[t._v(t._s(s.title))]),a("td",{staticClass:"calc-buttons"},[a("router-link",{attrs:{to:{name:"calculation",params:{id:s.id}}}},[a("button",{staticClass:"button button--primary"},[t._v("Podgląd")])]),a("button",{staticClass:"button button--error",on:{click:function(a){return t.deleteResult(s.id)}}},[t._v("Usuń")])],1)])}))],2)]),a("button",{staticClass:"button button--error",on:{click:t.removeAllResults}},[t._v("Usuń wszystkie kalkulacje")])])])},e=[function(){var t=this,a=t._self._c;return a("h2",{staticClass:"card__heading"},[a("span",[t._v("Lista")]),t._v(" kalkulacji ")])},function(){var t=this,a=t._self._c;return a("tr",[a("th",[t._v("id")]),a("th",[t._v("Nazwa")]),a("th",[t._v("Akcje")])])}],c={data(){return{calculationsHistory:JSON.parse(localStorage.getItem("calculations"))}},methods:{deleteResult(t){console.log(this.calculationsHistory);let a=JSON.parse(localStorage.getItem("calculations"));a=a.filter(a=>a.id!=t),localStorage.removeItem("calculations"),localStorage.setItem("calculations",JSON.stringify(a)),this.calculationsHistory=a},removeAllResults(){1==confirm("Czy na pewno chcesz usunąć wsystkie kalkulacje?")&&(localStorage.removeItem("calculations"),this.calculationsHistory=[])}}},o=c,i=(s("d45d"),s("2877")),n=Object(i["a"])(o,l,e,!1,null,"1c15079e",null);a["default"]=n.exports}}]);
//# sourceMappingURL=about.f79b4a1d.js.map