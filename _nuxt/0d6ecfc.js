(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{257:function(e,r,t){"use strict";t.r(r);var n=t(8),c=(t(42),t(28),t(139),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return r.articles=[],t.abrupt("return");case 3:return t.next=5,r.$content("articles").limit(6).search(e).fetch();case 5:r.articles=t.sent;case 6:case"end":return t.stop()}}),t)})))()}}}),o=t(48),component=Object(o.a)(c,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:e.searchQuery},on:{input:function(r){r.target.composing||(e.searchQuery=r.target.value)}}}),e._v(" "),e.articles.length?t("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"},e._l(e.articles,(function(article){return t("li",{key:article.slug},[t("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[e._v("\n        "+e._s(article.title)+"\n      ")])],1)})),0):e._e()])}),[],!1,null,null,null);r.default=component.exports}}]);