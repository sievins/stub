(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"themes",function(){return b}),n.d(a,"ThemeContext",function(){return v});var r={};n.r(r),n.d(r,"get",function(){return B}),n.d(r,"set",function(){return P});var c={};n.r(c),n.d(c,"default",function(){return _}),n.d(c,"init",function(){return W});var i={};n.r(i),n.d(i,"default",function(){return Z}),n.d(i,"settings",function(){return c});var s={};n.r(s),n.d(s,"getPassage",function(){return ce});var o=n(0),u=n.n(o),l=n(9),m=n.n(l),h=(n(94),n(8)),f=n(172),g=n(170),d=n(156),p=n(74),b={dark:{type:"dark",backgroundColor:"#282c34",color:"white"},light:{type:"light",backgroundColor:"white",color:"#282c34"}},v=Object(o.createContext)(b.dark),y=n(175),E=n(48),w=n(20),j=n(155);function O(){var e=Object(w.a)();return Object(j.a)(e.breakpoints.down("sm"))}function S(e){var t=O();return Object(d.a)(e)({isSmallScreen:t})}var C=function(e){return{toggle:function(t){var n=t.isSmallScreen;return{position:"absolute",display:"inline-flex",left:e.spacing(n?.5:10),top:e.spacing(n?.5:2)}},text:{margin:"auto"}}};var k=function(e){var t=e.checked,n=e.handleChange,a=Object(o.useContext)(v),r=S(C);return u.a.createElement("div",{className:r.toggle},u.a.createElement(y.a,{checked:t,onChange:n,value:"theme-toggle",inputProps:{"aria-label":"theme checkbox"}}),u.a.createElement(E.a,{variant:"body1",className:r.text},"dark"===a.type?"Dark theme":"Light theme"))},x=n(50),N=n.n(x),V=n(159),B=function(){var e=N.a.getJSON();return{consented:e.consented,theme:e.theme,settings:e.settings}},P=function(e){Object(V.a)(function(e,t){"consented"!==t&&!0!==B().consented||N.a.set(t,e,{expires:365})},e)},R=n(162),T=n(176),q=n(161),L=Object(o.createContext)({}),M=function(e){return{content:function(t){return{minWidth:t.isSmallScreen?null:e.spacing(68)}},action:function(e){var t=e.isSmallScreen;return{marginLeft:t?0:null,paddingLeft:t?0:null}},button:function(e){return{paddingLeft:e.isSmallScreen?0:null}}}};var J=function(e){var t=e.handleConsent,n=Object(o.useContext)(L).consented,a=Object(o.useState)(!n),r=Object(h.a)(a,2),c=r[0],i=r[1],s=S(M);Object(o.useEffect)(function(){i(!n)},[n]);var l=function(e,n){"clickaway"!==n&&(i(!1),t())};return u.a.createElement(T.a,{onClose:l,open:c},u.a.createElement(q.a,{action:u.a.createElement(R.a,{className:s.button,color:"secondary",size:"small",onClick:l},"That's OK"),className:s.content,classes:{action:s.action},message:"This website uses cookies to remember your print settings and theme"}))},z=n(46),F=n(70),$=n(174),D=n(166),A=n(163),H=n(164),I=n(165),W={withVerseNumbers:!1,withBigMargins:!1,withReference:!1};var _=function(e){var t=e.open,n=e.handleClose,a=e.handleChange,c=Object(o.useState)(W),i=Object(h.a)(c,2),s=i[0],l=i[1],m=Object(o.useState)(r.get().settings||W),f=Object(h.a)(m,2),g=f[0],d=f[1],p=Object(o.useState)(!1),b=Object(h.a)(p,2),v=b[0],E=b[1];Object(o.useEffect)(function(){a(g)},[g,a]);var w=function(e){return function(t){d(Object(F.a)({},g,Object(z.a)({},e,t.target.checked)))}};return u.a.createElement($.a,{open:t,onEnter:function(){l(g)},onExited:function(){!v&&d(s)},"aria-labelledby":"settings"},u.a.createElement(A.a,null,u.a.createElement(H.a,null,u.a.createElement(I.a,{control:u.a.createElement(y.a,{checked:g.withVerseNumbers,onChange:w("withVerseNumbers"),value:"withVerseNumbers",color:"primary"}),label:"Verse numbers"}),u.a.createElement(I.a,{control:u.a.createElement(y.a,{checked:g.withBigMargins,onChange:w("withBigMargins"),value:"withBigMargins",color:"primary"}),label:"Extra large right margin"}),u.a.createElement(I.a,{control:u.a.createElement(y.a,{checked:g.withReference,onChange:w("withReference"),value:"withReference",color:"primary"}),label:"Passage title"}))),u.a.createElement(D.a,null,u.a.createElement(R.a,{onClick:function(){E(!1),n()},variant:"contained",color:"secondary"},"Cancel"),u.a.createElement(R.a,{onClick:function(){E(!0),n()},variant:"contained",color:"primary"},"Confirm")))},K=n(71),G=n.n(K),U=n(158),Y=n(72),Q=n.n(Y),X=function(e){return{actions:function(t){var n=t.isSmallScreen;return{position:n?null:"absolute",right:n?null:e.spacing(10),justifyContent:n?"flex-start":null,marginLeft:n?e.spacing(.5):null}},settings:function(t){return{marginTop:t.isSmallScreen?null:e.spacing(2.75),marginRight:e.spacing(1)}}}},Z=function(e){var t=e.passageRef,n=e.isPassage,a=e.handleSettingsChange,r=Object(o.useState)(!1),c=Object(h.a)(r,2),i=c[0],s=c[1],l=S(X),m=function(e,t){var n={marginTop:t?null:"22px"};return u.a.createElement(R.a,{variant:"contained",color:"primary",style:n,disabled:!e},"Print")}(n,O());return u.a.createElement("div",{className:l.actions},u.a.createElement(U.a,{onClick:function(){return s(!0)},color:"primary",className:l.settings,"aria-label":"open settings dialog"},u.a.createElement(Q.a,null)),u.a.createElement(_,{handleClose:function(){return s(!1)},handleChange:function(e){return a(e)},open:i}),u.a.createElement(G.a,{trigger:function(){return m},content:function(){return t}}))},ee=n(26),te=n.n(ee),ne=n(171),ae=n(101),re=function(e,t){var n;return te.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,te.a.awrap(ae.get("https://api.esv.org/v3/passage/text/",{headers:{Authorization:"Token ".concat("a644cd2dd28beb34c535e5d23a025e3549ce5a8f")},params:{q:e,"include-verse-numbers":t,"include-first-verse-numbers":t,"include-passage-references":!1,"include-footnotes":!1,"include-footnote-body":!1,"include-headings":!1,"include-short-copyright":!1,"include-copyright":!1},timeout:1e3}));case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}})},ce=function(e){var t,n,a,r;return te.a.async(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,te.a.awrap(Promise.all([re(e,!0),re(e,!1)]));case 2:return t=c.sent,n=Object(h.a)(t,2),a=n[0],r=n[1],c.abrupt("return",{withVerseNumbers:a.passages[0],withoutVerseNumbers:r.passages[0],query:a.query});case 7:case"end":return c.stop()}})},ie=s.getPassage,se=function(e){return{search:function(t){var n=t.isSmallScreen;return{display:"flex",justifyContent:n?"flex-start":null,marginLeft:n?e.spacing(1):null}},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},button:{marginTop:e.spacing(3.5),height:"fit-content"}}};var oe=function(e){var t=e.handleSearch,n=Object(o.useState)(""),a=Object(h.a)(n,2),r=a[0],c=a[1],i=Object(o.useState)(!1),s=Object(h.a)(i,2),l=s[0],m=s[1],f=Object(o.useState)(""),g=Object(h.a)(f,2),d=g[0],p=g[1],b=S(se),v=function(){return'Failed to find "'.concat(r,'"')},y=function(){var e;return te.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=14;break}return m(!0),n.prev=2,n.next=5,te.a.awrap(ie(r));case 5:e=n.sent,Boolean(!e.withVerseNumbers||!e.withoutVerseNumbers)?p(v()):(p(""),t(e)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),p(v());case 13:m(!1);case 14:case"end":return n.stop()}},null,null,[[2,10]])};return u.a.createElement("div",{className:b.search},u.a.createElement(ne.a,{onChange:function(e){return c(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&y()},disabled:l,error:Boolean(d),helperText:d,id:"standard-search",label:"Enter passage",type:"search",className:b.textField,margin:"normal"}),u.a.createElement(R.a,{onClick:y,disabled:l||!r,variant:"contained",color:"primary",className:b.button},"Search"))},ue=function(){return{menu:function(e){return{display:"flex",justifyContent:"center",position:"relative",flexDirection:e.isSmallScreen?"column":null}}}};var le=function(e){var t=e.handleSearch,n=e.handleSettingsChange,a=e.passageRef,r=e.isPassage,c=S(ue);return u.a.createElement("div",{className:c.menu},u.a.createElement(oe,{handleSearch:t}),u.a.createElement(Z,{passageRef:a,isPassage:r,handleSettingsChange:n}))},me=n(73),he=n.n(me),fe=["Obadiah","Philemon","2 John","3 John","Jude"],ge=function(e,t){var n=function(e){return e.match(/(\d?\s?\w+)\s?(.*)/)}(e),a=Object(h.a)(n,3),r=(a[0],a[1]),c=a[2];if(fe.includes(r))return t;if(/^[^:]+$/.test(c)){var i=c;return t.replace(/\[1]/,"[".concat(i,":1]"))}if(/^[^\u2013]+:[^\u2013]+$/.test(c)){var s=c.match(/(\d+)/),o=Object(h.a)(s,2),u=(o[0],o[1]);return t.replace(/\[1]/,"[".concat(u,":1]"))}if(/[^\u2013]+:\d\u2013[^:]$/.test(c)){var l=c.match(/(\d+)/),m=Object(h.a)(l,2),f=(m[0],m[1]);return t.replace(/\[1]/,"[".concat(f,":1]"))}if(/:.*:/.test(c)){var g=c.match(/(\d+):(\d+)/),d=Object(h.a)(g,3),p=(d[0],d[1]);return"1"!==d[2]&&p++,t.replace(/\[1]/g,function(e){return"[".concat(p++,":1]")})}if(/^\d+\u2013/.test(c)){var b=c.match(/(\d+)/),v=Object(h.a)(b,2),y=(v[0],v[1]);return t.replace(/\[1]/g,function(e){return"[".concat(y++,":1]")})}return t};function de(e,t){return function(){return t.call(this,e.apply(this,arguments))}}function pe(){if(0===arguments.length)throw new Error("pipe requires at least one argument");var e=Array.prototype.slice.call(arguments),t=e[0],n=e.slice(1);return function(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,n){return t.apply(this,arguments)};case 3:return function(e,n,a){return t.apply(this,arguments)};case 4:return function(e,n,a,r){return t.apply(this,arguments)};case 5:return function(e,n,a,r,c){return t.apply(this,arguments)};case 6:return function(e,n,a,r,c,i){return t.apply(this,arguments)};case 7:return function(e,n,a,r,c,i,s){return t.apply(this,arguments)};case 8:return function(e,n,a,r,c,i,s,o){return t.apply(this,arguments)};case 9:return function(e,n,a,r,c,i,s,o,u){return t.apply(this,arguments)};case 10:return function(e,n,a,r,c,i,s,o,u,l){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}(t.length,n.reduce(de,t))}var be=function(e){return e.replace(/\[(\d+:?\d*)]\s/g,'<sup style="font-size: calc(4px + 1vmin)">$1</sup>&nbsp;')},ve=function(e,t){if(!e.query)return"";var n=t.withVerseNumbers?e.withVerseNumbers:e.withoutVerseNumbers,a=pe(ge,be,he.a.sanitize)(e.query,n);return u.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})},ye=(n(119),function(e){return{passage:function(t){return{margin:t.isSmallScreen?e.spacing(2):e.spacing(10),marginTop:e.spacing(4)}}}}),Ee=function(e){var t="page";return e.withMargin&&(t+=" margin"),e.withSmall&&(t+=" small"),t};var we=function(e){var t=e.passage,n=e.handlePassageRef,a=e.settings,r=S(ye),c=O(),i=Object(o.useRef)();Object(o.useEffect)(function(){n(i.current)},[i,n]);var s=Ee({withMargin:a.withBigMargins,withSmall:c}),l=a.withReference?u.a.createElement(E.a,{variant:"h4",gutterBottom:!0,className:"header"},t.query):null;return u.a.createElement("div",{className:r.passage},u.a.createElement("div",{ref:i,className:s},l,ve(t,a)))},je=n(167),Oe=n(169),Se=n(168),Ce=Object(d.a)(function(e){return{link:{cursor:"pointer"}}});var ke=function(){var e=Ce(),t=Object(o.useState)(!1),n=Object(h.a)(t,2),a=n[0],r=n[1];return u.a.createElement(o.Fragment,null,u.a.createElement(je.a,{onClick:function(){return r(!0)},className:e.link},"ESV"),u.a.createElement($.a,{open:a,onClose:function(){return r(!1)},"aria-labelledby":"copyright-notice","aria-describedby":"copyright-notice-description"},u.a.createElement(Se.a,{id:"copyright-notice-title"},"Copyright notice"),u.a.createElement(A.a,null,u.a.createElement(Oe.a,{id:"copyright-notice-description"},"Scripture quotations are from the ESV\xae Bible (The Holy Bible, English Standard Version\xae), copyright \xa9 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. You may not copy or download more than 500 consecutive verses of the ESV Bible or more than one half of any book of the ESV Bible."))))},xe=Object(d.a)(function(e){return{title:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:e.spacing(3),marginBottom:e.spacing(3)}}});var Ne=function(){var e=xe();return u.a.createElement("div",{className:e.title},u.a.createElement(E.a,{variant:"h1"},"StuB"),u.a.createElement(E.a,{variant:"subtitle1"},"Study the Bible \u2022 ",u.a.createElement(ke,null)))},Ve=a.themes,Be=a.ThemeContext,Pe=i.settings.init,Re=function(e){return Object(d.a)({app:{backgroundColor:e.backgroundColor,minHeight:"100vh",display:"flex",flexDirection:"column",fontSize:"calc(10px + 2vmin)",color:e.color}})},Te=function(e){return Object(p.a)({palette:{type:e}})};var qe=function(){var e=Object(o.useState)(r.get()),t=Object(h.a)(e,1)[0],n=Object(o.useState)(t.theme||Ve.dark),a=Object(h.a)(n,2),c=a[0],i=a[1],s=Object(o.useState)({withVerseNumbers:"",withoutVerseNumbers:"",query:""}),l=Object(h.a)(s,2),m=l[0],d=l[1],p=Object(o.useState)(null),b=Object(h.a)(p,2),v=b[0],y=b[1],E=Object(o.useState)(t.settings||Pe),w=Object(h.a)(E,2),j=w[0],O=w[1],S=Re(c)(),C=function(e){e&&r.set({consented:!0}),r.set({theme:c,settings:j})};return Object(o.useEffect)(C,[c,j]),u.a.createElement(L.Provider,{value:t},u.a.createElement(Be.Provider,{value:c},u.a.createElement(g.a,{theme:Te(c.type)},u.a.createElement("div",{className:S.app},u.a.createElement(k,{handleChange:function(){i(Object(f.a)(c,Ve.dark)?Ve.light:Ve.dark)},checked:Object(f.a)(c,Ve.dark)}),u.a.createElement(Ne,null),u.a.createElement(le,{handleSearch:d,passageRef:v,isPassage:Boolean(m),handleSettingsChange:O}),u.a.createElement(we,{passage:m,handlePassageRef:y,settings:j}),u.a.createElement(J,{handleConsent:function(){return C(!0)}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(u.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,n){e.exports=n(120)},94:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.54d0a277.chunk.js.map