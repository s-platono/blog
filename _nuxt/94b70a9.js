(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{459:function(e,t,r){"use strict";var n=r(23),c=(r(75),r(31),r(217));t.a=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var o,l,f,h,m,d,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=parseInt(r.page),r.tag){e.next=7;break}return e.next=4,t("articles").fetch();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,t("articles").where({tags:{$contains:r.tag.name}}).fetch();case 9:e.t0=e.sent;case 10:if(l=e.t0,f=l.length,h=Math.ceil(f/c.a.perPage),m=f%c.a.perPage==0?c.a.perPage:f%c.a.perPage,d=function(){return 1===o?0:o===h?f-m:(o-1)*c.a.perPage},!r.tag){e.next=21;break}return e.next=18,t("articles").only(["title","description","img","slug","tags","createdAt","author"]).where({tags:{$contains:r.tag.name}}).sortBy("createdAt","asc").limit(c.a.perPage).skip(d()).fetch();case 18:w=e.sent,e.next=24;break;case 21:return e.next=23,t("articles").only(["title","description","img","slug","tags","createdAt","author"]).sortBy("createdAt","asc").limit(c.a.perPage).skip(d()).fetch();case 23:w=e.sent;case 24:if(0!==o&&w.length){e.next=26;break}return e.abrupt("return",n({statusCode:404,message:"No articles found!"}));case 26:return e.abrupt("return",{allArticles:l,paginatedArticles:w});case 27:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},506:function(e,t,r){"use strict";r.r(t);var n=r(23),c=(r(75),r(3),r(40),r(41),r(31),r(48),r(459)),o={components:{Articles:function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,511))}},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,f,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,e.app,n=e.params,o=e.error,t.next=3,r("tags").where({slug:{$contains:n.tag}}).limit(1).fetch();case 3:return l=t.sent,f=l.length>0?l[0]:void 0,n.tag=f,t.next=8,Object(c.a)(r,n,o);case 8:return content=t.sent,t.abrupt("return",{total:content.allArticles,articles:content.paginatedArticles,tag:f});case 10:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.capitalizeFirstLetter(this.tag.name)}},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"})},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}},l=r(39),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("articles",{attrs:{articles:e.articles,total:e.total}})}),[],!1,null,null,null);t.default=component.exports}}]);