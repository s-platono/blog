(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{459:function(e,t,r){"use strict";var n=r(23),c=(r(75),r(31),r(217));t.a=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var l,o,f,d,h,m,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=parseInt(r.page),r.tag){e.next=7;break}return e.next=4,t("articles").fetch();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,t("articles").where({tags:{$contains:r.tag.name}}).fetch();case 9:e.t0=e.sent;case 10:if(o=e.t0,f=o.length,d=Math.ceil(f/c.a.perPage),h=f%c.a.perPage==0?c.a.perPage:f%c.a.perPage,m=function(){return 1===l?0:l===d?f-h:(l-1)*c.a.perPage},!r.tag){e.next=21;break}return e.next=18,t("articles").only(["title","description","img","slug","tags","createdAt","author"]).where({tags:{$contains:r.tag.name}}).sortBy("createdAt","asc").limit(c.a.perPage).skip(m()).fetch();case 18:x=e.sent,e.next=24;break;case 21:return e.next=23,t("articles").only(["title","description","img","slug","tags","createdAt","author"]).sortBy("createdAt","asc").limit(c.a.perPage).skip(m()).fetch();case 23:x=e.sent;case 24:if(0!==l&&x.length){e.next=26;break}return e.abrupt("return",n({statusCode:404,message:"No articles found!"}));case 26:return e.abrupt("return",{allArticles:o,paginatedArticles:x});case 27:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},507:function(e,t,r){"use strict";r.r(t);var n=r(23),c=(r(75),r(3),r(40),r(41),r(459)),l={components:{About:function(){return r.e(4).then(r.bind(null,510))},Articles:function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,511))},Banner:function(){return r.e(5).then(r.bind(null,512))},Subscribe:function(){return r.e(7).then(r.bind(null,513))}},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,e.app,n=e.params,l=e.error,t.next=3,Object(c.a)(r,n,l);case 3:return content=t.sent,t.abrupt("return",{total:content.allArticles,articles:content.paginatedArticles});case 5:case"end":return t.stop()}}),t)})))()}},o=r(39),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("articles",{attrs:{articles:e.articles,total:e.total}})],1)}),[],!1,null,"5a53f910",null);t.default=component.exports}}]);