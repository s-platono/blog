(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{465:function(e,t,r){"use strict";var n=r(20),c=(r(75),r(28),r(216));t.a=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n,o){var l,f,h,d,m,w,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=parseInt(o.query.page),r.tag){e.next=7;break}return e.next=4,t("articles").fetch();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,t("articles").where({tags:{$contains:r.tag.name}}).fetch();case 9:e.t0=e.sent;case 10:if(f=e.t0,h=f.length,d=Math.ceil(h/c.a.perPage),m=h%c.a.perPage==0?c.a.perPage:h%c.a.perPage,w=function(){return 1===l?0:l===d?h-m:(l-1)*c.a.perPage},!r.tag){e.next=21;break}return e.next=18,t("articles").only(["title","description","img","slug","tags","createdAt","author"]).where({tags:{$contains:r.tag.name.toLowerCase()}}).sortBy("createdAt","asc").limit(c.a.perPage).skip(w()).fetch();case 18:x=e.sent,e.next=24;break;case 21:return e.next=23,t("articles").only(["title","description","img","slug","tags","createdAt","author"]).sortBy("createdAt","asc").limit(c.a.perPage).skip(w()).fetch();case 23:x=e.sent;case 24:if(0!==l&&x.length){e.next=26;break}return e.abrupt("return",n({statusCode:404,message:"No articles found!"}));case 26:return e.abrupt("return",{allArticles:f,paginatedArticles:x});case 27:case"end":return e.stop()}}),e)})));return function(t,r,n,c){return e.apply(this,arguments)}}()},538:function(e,t,r){"use strict";r.r(t);var n=r(20),c=(r(75),r(4),r(38),r(39),r(465)),o={components:{About:function(){return r.e(6).then(r.bind(null,541))},Articles:function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,542))},Banner:function(){return r.e(7).then(r.bind(null,543))},Subscribe:function(){return Promise.all([r.e(1),r.e(9)]).then(r.bind(null,544))}},watchQuery:["page"],asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,e.app,n=e.params,o=e.error,l=e.route,t.next=3,Object(c.a)(r,n,o,l);case 3:return content=t.sent,t.abrupt("return",{total:content.allArticles,articles:content.paginatedArticles});case 5:case"end":return t.stop()}}),t)})))()}},l=r(40),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("articles",{attrs:{articles:e.articles,total:e.total,"page-type":"article"}})],1)}),[],!1,null,"75ffb1c7",null);t.default=component.exports}}]);