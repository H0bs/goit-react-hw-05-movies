"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[460],{488:function(n,e,t){t.d(e,{Df:function(){return u},Pg:function(){return o},Pt:function(){return d},Tn:function(){return p},bp:function(){return l}});var r=t(861),a=t(687),i=t.n(a),c=t(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s="6d7719b287a3b4f9def878f317f76757",u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("trending/movie/day?api_key=".concat(s),{signal:e.signal});case 2:return t=n.sent,n.next=5,t.data.results.map((function(n){return{id:n.id,title:n.title}}));case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"),{signal:t.signal});case 2:return r=n.sent,n.next=5,r.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"),{signal:t.signal});case 2:return r=n.sent,n.next=5,r.data.cast.map((function(n){return{id:n.id,name:n.name,character:n.character,profile_path:n.profile_path}}));case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"),{signal:t.signal});case 2:return r=n.sent,n.next=5,r.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}));case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e),{signal:t.signal});case 2:return r=n.sent,n.next=5,r.data.results.map((function(n){return{id:n.id,title:n.title}}));case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},460:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,c,s,u=t(861),o=t(885),l=t(687),p=t.n(l),d=t(731),f=t(470),h=t(791),x=t(488),v=t(168),g=t(934),m=g.Z.button(r||(r=(0,v.Z)(["\n  width: 80px;\n  height: 20px;\n  border-radius: 4px;\n  margin-bottom: 16px;\n  border: 1px solid yellowgreen;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: greenyellow;\n  }\n"]))),b=t(184),w=function(){var n=(0,f.s0)(),e=(0,f.TH)();return(0,b.jsx)(m,{type:"button",onClick:function(){var t,r;n(null!==(t=null===e||void 0===e||null===(r=e.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/",{replace:!0})},children:"Back"})},j=g.Z.div(a||(a=(0,v.Z)(["\n  display: flex;\n  padding-bottom: 20px;\n  border-bottom: 9px double rgba(163,95,164,0.2);\n"]))),Z=g.Z.div(i||(i=(0,v.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n"]))),k=g.Z.ul(c||(c=(0,v.Z)(["\n  list-style: none;\n  display: flex;\n  padding-left: 0;\n"]))),y=g.Z.li(s||(s=(0,v.Z)(["\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),_=function(){var n=(0,f.UO)().movieId,e=(0,h.useState)([]),t=(0,o.Z)(e,2),r=t[0],a=t[1];return(0,h.useEffect)((function(){var e=new AbortController,t=function(){var t=(0,u.Z)(p().mark((function t(){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,x.Pg)(n,e);case 3:r=t.sent,a(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}),[n]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{}),r&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(j,{children:[(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(r.poster_path),alt:r.title}),(0,b.jsxs)(Z,{children:[(0,b.jsxs)("h1",{children:[r.title," ","(".concat(parseInt(r.release_date),")")]}),(0,b.jsx)("p",{children:"User Score: ".concat(r.vote_average)}),(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:r.overview}),(0,b.jsx)("h3",{children:"Genres"}),(0,b.jsx)(k,{children:r.genres&&r.genres.map((function(n){var e=n.id,t=n.name;return(0,b.jsx)(y,{children:t},e)}))})]})]}),(0,b.jsxs)(Z,{children:[(0,b.jsxs)("ul",{children:[(0,b.jsx)("b",{children:"Additional information"}),(0,b.jsx)("li",{children:(0,b.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(d.rU,{to:"reviews",children:"Review"})})]}),(0,b.jsx)(h.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:(0,b.jsx)(f.j3,{})})]})]})]})}}}]);
//# sourceMappingURL=460.46c59989.chunk.js.map