(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(t,e,r){"use strict";r.r(e);var l=r(33),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"80",height:"40",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},194:function(t,e,r){"use strict";r.r(e);r(89),r(23);var l=r(2),n={data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}},c=r(33),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},196:function(t,e,r){var content=r(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("90f0709c",content,!0,{sourceMap:!1})},202:function(t,e,r){"use strict";r(196)},203:function(t,e,r){(e=r(43)(!1)).push([t.i,".article-card,.article-card a{border-radius:8px}.article-card a{background-color:#fff}.article-card img div{border-radius:8px 0 0 8px}",""]),t.exports=e},215:function(t,e,r){"use strict";r.r(e);r(57),r(24),r(25),r(9),r(42);var l=r(21),n=r(53);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({tags:"tags"}))},f=r(33),component=Object(f.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"flex"},[e("NuxtLink",{attrs:{to:"/"}},[e("Logo",{staticClass:"mb-4"})],1),this._v(" "),e("Navbar",{attrs:{tags:this.tags}}),this._v(" "),e("AppSearchInput",{staticClass:"ml-8"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(193).default,Navbar:r(216).default,AppSearchInput:r(194).default})},216:function(t,e,r){"use strict";r.r(e);var l={name:"Navbar",props:{tags:Array}},n=r(33),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("ul",{staticClass:"flex flex-wrap mb-4 text-center"},t._l(t.tags,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"},[r("NuxtLink",{attrs:{to:"/tag/"+e.slug}},[r("p",{staticClass:"font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"},[t._v("\n          "+t._s(e.name)+"\n        ")])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},221:function(t,e,r){"use strict";r.r(e);r(57),r(24),r(25),r(9),r(42);var l=r(21),n=r(53);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({tags:"tags",articles:"articles"}))},f=(r(202),r(33)),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-8"},[r("TheHeader"),t._v(" "),r("h1",{staticClass:"font-bold text-4xl"},[t._v("Blog Posts")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[article.img?r("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:article.img}}):t._e(),t._v(" "),r("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[r("h2",{staticClass:"font-bold"},[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v("by "+t._s(article.author.name))]),t._v(" "),r("p",{staticClass:"font-bold text-gray-600 text-sm"},[t._v("\n            "+t._s(article.description)+"\n          ")])])])],1)})),0),t._v(" "),r("h3",{staticClass:"mb-4 font-bold text-2xl uppercase text-center"},[t._v("Topics")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap mb-4 text-center"},t._l(t.tags,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"},[r("NuxtLink",{attrs:{to:"/tag/"+e.slug}},[r("p",{staticClass:"font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"},[t._v("\n          "+t._s(e.name)+"\n        ")])])],1)})),0),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"flex justify-center border-gray-500 border-t-2"},[e("p",{staticClass:"mt-4"},[this._v("\n      Created by\n      "),e("a",{staticClass:"font-bold hover:underline",attrs:{href:"https://twitter.com/el_platono"}},[this._v("Senior Platono")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:r(215).default})}}]);