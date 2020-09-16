/*! For license information please see 4.5ddf5bbb.chunk.js.LICENSE.txt */
(this["webpackJsonpkamasutra-app"]=this["webpackJsonpkamasutra-app"]||[]).push([[4],{290:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(r=(l=s.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},291:function(e,t,n){e.exports=n.p+"static/media/user.5f994a6e.png"},294:function(e,t,n){e.exports={paginator:"Paginator_paginator__2xE-P",pageNumber:"Paginator_pageNumber__1fbK-",selectedPage:"Paginator_selectedPage__3SXWW"}},295:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},296:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1BI9k",selectedPage:"Users_selectedPage__1Y959"}},300:function(e,t,n){"use strict";n.r(t);var r=n(35),a=n(36),o=n(38),l=n(37),s=n(39),u=n(0),i=n.n(u),c=n(11),p=n(126),g=n(66),f=n(95),m=n(290),h=n(294),d=n.n(h),P=n(295),b=n.n(P),v=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.portionSize,l=void 0===o?10:o,s=Math.ceil(t/n),c=[],p=1;p<=s;p++)c.push(p);var g=Math.ceil(s/l),h=Object(u.useState)(1),P=Object(m.a)(h,2),v=P[0],w=P[1],E=(v-1)*l+1,y=v*l;return i.a.createElement("div",{className:d.a.paginator},v>1&&i.a.createElement("button",{onClick:function(){w(v-1)}},"PREV"),c.filter((function(e){return e>=E&&e<=y})).map((function(e){return i.a.createElement("span",{className:b()(Object(f.a)({},d.a.selectedPage,r===e),d.a.pageNumber),key:e,onClick:function(t){a(e)}},e)})),g>v&&i.a.createElement("button",{onClick:function(){w(v+1)}},"NEXT"))},w=n(291),E=n.n(w),y=n(296),C=n.n(y),j=n(12),S=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return i.a.createElement("div",null,i.a.createElement("span",null,i.a.createElement("div",null,i.a.createElement(j.b,{to:"/profile/"+t.id},i.a.createElement("img",{src:null!=t.photos.small?t.photos.small:E.a,alt:"avatar",className:C.a.userPhoto}))),i.a.createElement("div",null,t.followed?i.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):i.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Follow"))),i.a.createElement("span",null,i.a.createElement("span",null,i.a.createElement("div",null,t.name),i.a.createElement("div",null,t.status)),i.a.createElement("span",null,i.a.createElement("div",null,"u.location.country"),i.a.createElement("div",null,"u.location.city"))))},_=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,o=e.users,l=Object(g.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return i.a.createElement("div",null,i.a.createElement(v,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),i.a.createElement("div",null,o.map((function(e){return i.a.createElement(S,{user:e,followingInProgress:l.followingInProgress,key:e.id,unfollow:l.unfollow,follow:l.follow})}))))},k=n(63),O=n(8),U=function(e){return e.usersPage.users},z=function(e){return e.usersPage.pageSize},I=function(e){return e.usersPage.totalUsersCount},x=function(e){return e.usersPage.currentPage},N=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.followingInProgress},F=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).onPageChanged=function(e){n.props.requestUsers(e,n.props.pageSize)},n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(k.a,null):null,i.a.createElement(_,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(i.a.Component);t.default=Object(O.d)(Object(c.b)((function(e){return{users:U(e),pageSize:z(e),totalUsersCount:I(e),currentPage:x(e),isFetching:N(e),followingInProgress:A(e)}}),{follow:p.b,unfollow:p.f,setCurrentPage:p.d,toggleFollowingProgress:p.e,requestUsers:p.c}))(F)}}]);
//# sourceMappingURL=4.5ddf5bbb.chunk.js.map