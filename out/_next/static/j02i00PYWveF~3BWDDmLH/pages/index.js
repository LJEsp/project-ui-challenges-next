(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{116:function(e,t,n){e.exports=n(220)},117:function(e,t,n){e.exports=n(113)},218:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(219),{page:e.exports.default}})},219:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(116),l=n.n(o),i=n(117),f=n.n(i),s=n(15),p=n(53);function u(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  ","\n  \n  body { \n    font-family: 'Montserrat', sans-serif;  \n    font-size: 1rem;\n    padding: 2em;\n  }\n"]);return u=function(){return e},e}s.c.h1.withConfig({displayName:"pages__Title",componentId:"sc-1wbo52z-0"})(["color:red;font-size:50px;"]);var c=[{href:"/challenges/017-email-receipt",title:"Email Receipt",date:"January 26, 2019"}],d=Object(s.a)(u(),p.a),h=s.c.div.withConfig({displayName:"pages__StyledWrapper",componentId:"sc-1wbo52z-1"})(["h1{font-size:3em;margin-bottom:1em;}nav div{width:100%;max-width:50em;display:grid;grid-template-columns:auto 1fr auto;grid-column-gap:1em;}a{color:#2196F3;}"]);t.default=function(){return a.a.createElement(h,null,a.a.createElement(f.a,null,a.a.createElement("title",null,"Test"),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:400,700",rel:"stylesheet"})),a.a.createElement(d,null),a.a.createElement("h1",null,"UI Challenges"),a.a.createElement("nav",null,c.map(function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("span",null,"Day ",t+1),a.a.createElement(l.a,{key:e.href,href:e.href},a.a.createElement("a",null,e.title)),a.a.createElement("span",null,e.date))})))}},220:function(e,t,n){"use strict";var r=n(21),a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(221)),l=a(n(50)),i=a(n(8)),f=a(n(9)),s=a(n(18)),p=a(n(19)),u=a(n(20)),c=a(n(52)),d=a(n(14)),h=n(111),m=r(n(0)),v=(a(n(27)),r(n(49))),y=n(26);var E=function(e){function t(){var e,n,r,a,o,f;(0,i.default)(this,t);for(var u=arguments.length,m=new Array(u),E=0;E<u;E++)m[E]=arguments[E];return n=(0,s.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(m))),(0,d.default)((0,c.default)((0,c.default)(n)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,l.default)(e)?(0,h.format)(e):e,as:t&&"object"===(0,l.default)(t)?(0,h.format)(t):t}},a=null,o=null,f=null,function(e,t){if(e===a&&t===o)return f;var n=r(e,t);return a=e,o=t,f=n,n})),(0,d.default)((0,c.default)((0,c.default)(n)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,a=t.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),l=o.href,i=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,y.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(l)){var f=window.location.pathname;l=(0,h.resolve)(f,l),i=i?(0,h.resolve)(f,i):l,e.preventDefault();var s=n.props.scroll;null==s&&(s=i.indexOf("#")<0);var p=n.props.replace?"replace":"push";v.default[p](l,i,{shallow:n.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){n.props.onError&&n.props.onError(e)})}}}),n}return(0,u.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,h.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"==typeof t&&(t=m.default.createElement("a",null,t));var o=m.Children.only(t),l={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(l.href=a||r),l.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=(0,v._rewriteUrlForNextExport)(l.href)),m.default.cloneElement(o,l)}}]),t}(m.Component);t.default=E},221:function(e,t,n){e.exports=n(222)},222:function(e,t,n){var r=n(1),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}}},[[218,1,0]]]);