/*! For license information please see 10.cef7a58c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,11],{126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(153),o=n(150),l=n(146),c=n(148),s=n(149);var u=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var d=function(e,t,n){var r=Object(a.useState)(void 0),i=r[0],o=r[1];Object(a.useEffect)((function(){var a=[],r=[];function l(){var l=function(){var e=0,t=null;for(a=document.getElementsByClassName("anchor");e<a.length&&!t;){var r=a[e],i=r.getBoundingClientRect().top;i>=0&&i<=n&&(t=r),e+=1}return t}();if(l){var c=0,s=!1;for(r=document.getElementsByClassName(e);c<r.length&&!s;){var u=r[c],d=u.href,f=decodeURIComponent(d.substring(d.indexOf("#")+1));l.id===f&&(i&&i.classList.remove(t),u.classList.add(t),o(u),s=!0),c+=1}}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}))},f=n(147),m=n.n(f),p=n(127),h=n.n(p);function v(e){var t=e.headings;return d("table-of-contents__link","table-of-contents__link--active",100),r.a.createElement("div",{className:"col col--3"},r.a.createElement("div",{className:h.a.tableOfContents},r.a.createElement(g,{headings:t})))}function g(e){var t=e.headings,n=e.isChild;return t.length?r.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(g,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t,n=Object(l.a)().siteConfig,a=void 0===n?{}:n,s=a.url,d=a.title,f=e.content,p=f.metadata,g=p.description,y=p.title,b=p.permalink,E=p.editUrl,k=p.lastUpdatedAt,j=p.lastUpdatedBy,x=p.version,w=f.frontMatter,_=w.image,N=w.keywords,O=w.hide_title,S=w.hide_table_of_contents,C=y?y+" | "+d:d,T=s+Object(c.a)(_);return Object(o.a)(_)||(T=_),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("title",null,C),r.a.createElement("meta",{property:"og:title",content:C}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),N&&N.length&&r.a.createElement("meta",{name:"keywords",content:N.join(",")}),_&&r.a.createElement("meta",{property:"og:image",content:T}),_&&r.a.createElement("meta",{property:"twitter:image",content:T}),_&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y}),b&&r.a.createElement("meta",{property:"og:url",content:s+b}),b&&r.a.createElement("link",{rel:"canonical",href:s+b})),r.a.createElement("div",{className:m()("container padding-vert--lg",h.a.docItemWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:m()("col",(t={},t[h.a.docItemCol]=!S,t))},r.a.createElement("div",{className:h.a.docItemContainer},r.a.createElement("article",null,x&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",x)),!O&&r.a.createElement("header",null,r.a.createElement("h1",{className:h.a.docTitle},y)),r.a.createElement("div",{className:"markdown"},r.a.createElement(f,null))),(E||k||j)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},E&&r.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(k||j)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",k&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("time",{dateTime:new Date(1e3*k).toISOString(),className:h.a.docLastUpdatedAt},new Date(1e3*k).toLocaleDateString()),j&&" "),j&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,j)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(u,{metadata:p})))),!S&&f.rightToc&&r.a.createElement(v,{headings:f.rightToc}))))}},145:function(e,t,n){"use strict";n.r(t);n(29),n(20),n(21),n(55),n(188);var a=n(0),r=n.n(a),i=n(158),o=n(146),l=n(61),c=n(152),s=n(126),u=n(2),d=n(10),f=n(147),m=n.n(f),p=n(164),h=n(171),v=n(172),g=n(170),y=n(149),b=n(150),E=n(134),k=n.n(E);function j(e){var t=e.item,n=e.onItemClick,i=e.collapsible,o=e.activePath,l=Object(d.a)(e,["item","onItemClick","collapsible","activePath"]),c=t.items,s=t.href,f=t.label,p=t.type,h=Object(a.useState)(t.collapsed),v=h[0],g=h[1],E=Object(a.useState)(null),k=E[0],x=E[1];t.collapsed!==k&&(x(t.collapsed),g(t.collapsed));var w=Object(a.useCallback)((function(e){e.preventDefault(),e.target.blur(),g((function(e){return!e}))}));switch(p){case"category":return c.length>0&&r.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(u.a)({className:m()("menu__link",{"menu__link--sublist":i,"menu__link--active":i&&!t.collapsed}),href:"#!",onClick:i?w:void 0},l),f),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(j,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:n,collapsible:i,activePath:o})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:f},r.a.createElement(y.a,Object(u.a)({className:m()("menu__link",{"menu__link--active":s===o}),to:s},Object(b.a)(s)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},l),f))}}var x=function(e){var t,n,i=Object(a.useState)(!1),l=i[0],c=i[1],s=Object(o.a)(),d=s.siteConfig,f=(d=void 0===d?{}:d).themeConfig.navbar,b=(f=void 0===f?{}:f).title,E=f.hideOnScroll,x=void 0!==E&&E,w=s.isClient,_=Object(v.a)(),N=_.logoLink,O=_.logoLinkProps,S=_.logoImageUrl,C=_.logoAlt,T=Object(p.a)().isAnnouncementBarClosed,A=Object(g.a)().scrollY,L=e.docsSidebars,P=e.path,I=e.sidebar,M=e.sidebarCollapsible;if(Object(h.a)(l),!I)return null;var B=L[I];if(!B)throw new Error('Cannot find the sidebar "'+I+'" in the sidebar config!');return M&&B.forEach((function(e){return function e(t,n){var a=t.items,r=t.href;switch(t.type){case"category":var i=a.map((function(t){return e(t,n)})).filter((function(e){return e})).length>0;return t.collapsed=!i,i;case"link":default:return r===n}}(e,P)})),r.a.createElement("div",{className:m()(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=x,t))},x&&r.a.createElement(y.a,Object(u.a)({tabIndex:"-1",className:k.a.sidebarLogo,to:N},O),null!=S&&r.a.createElement("img",{key:w,src:S,alt:C}),null!=b&&r.a.createElement("strong",null,b)),r.a.createElement("div",{className:m()("menu","menu--responsive",k.a.menu,(n={"menu--show":l},n[k.a.menuWithAnnouncementBar]=!T&&0===A,n))},r.a.createElement("button",{"aria-label":l?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){c(!l)}},l?r.a.createElement("span",{className:m()(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},B.map((function(e){return r.a.createElement(j,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),c(!1)},collapsible:M,activePath:P})})))))},w=(n(192),n(193),n(78),n(194),n(195),n(165),{plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]}),_={Prism:n(52).a,theme:w};function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var S=/\r\n|\r|\n/,C=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},T=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},A=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=O({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=O({},n,{backgroundColor:null}),r};function L(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var P=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),N(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?A(e.theme,e.language):void 0;return t.themeDict=n})),N(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,i=O({},L(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(i.style=o.plain),void 0!==r&&(i.style=void 0!==i.style?O({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),N(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return i[n[0]];var o=a?{display:"inline-block"}:{},l=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[o].concat(l))}})),N(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,i=e.token,o=O({},L(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?O({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,i=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],i=0,o=0,l=[],c=[l];o>-1;){for(;(i=a[o]++)<r[o];){var s=void 0,u=t[o],d=n[o][i];if("string"==typeof d?(u=o>0?u:["plain"],s=d):(u=T(u,d.type),d.alias&&(u=T(u,d.alias)),s=d.content),"string"==typeof s){var f=s.split(S),m=f.length;l.push({types:u,content:f[0]});for(var p=1;p<m;p++)C(l),c.push(l=[]),l.push({types:u,content:f[p]})}else o++,t.push(u),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return C(l),c}(void 0!==o?t.tokenize(a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),I=n(196),M=n.n(I),B=n(197),F=n.n(B),R={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},D=n(157),H=function(){var e=Object(o.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(D.a)().isDarkTheme,a=t.theme||R,r=t.darkTheme||a;return n?r:a},$=n(135),U=n.n($),W=/{([\d,-]+)}/,q=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},z=/title=".*"/,Y=function(e){var t=e.children,n=e.className,i=e.metastring,l=Object(o.a)().siteConfig.themeConfig.prism,c=void 0===l?{}:l,s=Object(a.useState)(!1),d=s[0],f=s[1],p=Object(a.useState)(!1),h=p[0],v=p[1];Object(a.useEffect)((function(){v(!0)}),[]);var g=Object(a.useRef)(null),y=Object(a.useRef)(null),b=[],E="",k=H();if(i&&W.test(i)){var j=i.match(W)[1];b=F.a.parse(j).filter((function(e){return e>0}))}i&&z.test(i)&&(E=i.match(z)[0].split("title=")[1].replace(/"+/g,"")),Object(a.useEffect)((function(){var e;return y.current&&(e=new M.a(y.current,{target:function(){return g.current}})),function(){e&&e.destroy()}}),[y.current,g.current]);var x=n&&n.replace(/language-/,"");!x&&c.defaultLanguage&&(x=c.defaultLanguage);var w=t.replace(/\n$/,"");if(0===b.length&&void 0!==x){for(var N,O="",S=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return q(["js","jsBlock"]);case"jsx":case"tsx":return q(["js","jsBlock","jsx"]);case"html":return q(["js","jsBlock","html"]);case"python":case"py":return q(["python"]);default:return q()}}(x),C=t.replace(/\n$/,"").split("\n"),T=0;T<C.length;){var A=T+1,L=C[T].match(S);if(null!==L){switch(L.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":O+=A+",";break;case"highlight-start":N=A;break;case"highlight-end":O+=N+"-"+(A-1)+","}C.splice(T,1)}else T+=1}b=F.a.parse(O),w=C.join("\n")}var I=function(){window.getSelection().empty(),f(!0),setTimeout((function(){return f(!1)}),2e3)};return r.a.createElement(P,Object(u.a)({},_,{key:h,theme:k,code:w,language:x}),(function(e){var t,n,a=e.className,i=e.style,o=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,E&&r.a.createElement("div",{style:i,className:U.a.codeBlockTitle},E),r.a.createElement("div",{className:U.a.codeBlockContent},r.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:m()(U.a.copyButton,(t={},t[U.a.copyButtonWithTitle]=E,t)),onClick:I},d?"Copied":"Copy"),r.a.createElement("div",{tabIndex:"0",className:m()(a,U.a.codeBlock,(n={},n[U.a.codeBlockWithTitle]=E,n))},r.a.createElement("div",{ref:g,className:U.a.codeBlockLines,style:i},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(u.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(u.a)({key:t},c({token:e,key:t})))})))}))))))}))},J=(n(136),n(137)),V=n.n(J),X=function(e){return function(t){var n,a=t.id,i=Object(d.a)(t,["id"]),l=Object(o.a)().siteConfig,c=(l=void 0===l?{}:l).themeConfig,s=(c=void 0===c?{}:c).navbar,u=(s=void 0===s?{}:s).hideOnScroll,f=void 0!==u&&u;return a?r.a.createElement(e,i,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:m()("anchor",(n={},n[V.a.enhancedAnchor]=!f,n)),id:a}),i.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,i)}},G=n(138),K=n.n(G),Q={code:function(e){var t=e.children;return"string"==typeof t?r.a.createElement(Y,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(y.a,e)},pre:function(e){return r.a.createElement("div",Object(u.a)({className:K.a.mdxCodeBlock},e))},h1:X("h1"),h2:X("h2"),h3:X("h3"),h4:X("h4"),h5:X("h5"),h6:X("h6")},Z=n(159),ee=n(169),te=n(139),ne=n.n(te);t.default=function(e){var t=e.route,n=e.docsMetadata,a=e.location,u=e.content,d=n.permalinkToSidebar,f=n.docsSidebars,m=n.version,p=n.isHomePage,h=n.homePagePath,v=p?{}:t.routes.find((function(e){return Object(ee.a)(a.pathname,e)}))||{},g=p?u.metadata.sidebar:d[v.path],y=Object(o.a)(),b=y.siteConfig,E=(b=void 0===b?{}:b).themeConfig,k=(E=void 0===E?{}:E).sidebarCollapsible,j=void 0===k||k,w=y.isClient;return p||0!==Object.keys(v).length?r.a.createElement(c.a,{version:m,key:w},r.a.createElement("div",{className:ne.a.docPage},g&&r.a.createElement("div",{className:ne.a.docSidebarContainer},r.a.createElement(x,{docsSidebars:f,path:p?h:v.path,sidebar:g,sidebarCollapsible:j})),r.a.createElement("main",{className:ne.a.docMainContainer},r.a.createElement(i.a,{components:Q},p?r.a.createElement(s.default,{content:u}):Object(l.a)(t.routes))))):r.a.createElement(Z.default,e)}},159:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(152);t.default=function(){return r.a.createElement(i.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},188:function(e,t,n){"use strict";var a=n(17),r=n(189)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(76)("find")},189:function(e,t,n){var a=n(27),r=n(77),i=n(50),o=n(35),l=n(190);e.exports=function(e,t){var n=1==e,c=2==e,s=3==e,u=4==e,d=6==e,f=5==e||d,m=t||l;return function(t,l,p){for(var h,v,g=i(t),y=r(g),b=a(l,p,3),E=o(y.length),k=0,j=n?m(t,E):c?m(t,0):void 0;E>k;k++)if((f||k in y)&&(v=b(h=y[k],k,g),e))if(n)j[k]=v;else if(v)switch(e){case 3:return!0;case 5:return h;case 6:return k;case 2:j.push(h)}else if(u)return!1;return d?-1:s||u?u:j}}},190:function(e,t,n){var a=n(191);e.exports=function(e,t){return new(a(e))(t)}},191:function(e,t,n){var a=n(11),r=n(168),i=n(3)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),a(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},192:function(e,t,n){"use strict";var a=n(17),r=n(83)(!0);a(a.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(76)("includes")},193:function(e,t,n){"use strict";var a=n(17),r=n(160);a(a.P+a.F*n(161)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},194:function(e,t,n){"use strict";var a=n(8),r=n(50),i=n(35),o=n(40),l=n(72),c=n(73),s=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g;n(74)("replace",2,(function(e,t,n,p){return[function(a,r){var i=e(this),o=null==a?void 0:a[t];return void 0!==o?o.call(a,i,r):n.call(String(i),a,r)},function(e,t){var r=p(n,e,this,t);if(r.done)return r.value;var d=a(e),f=String(this),m="function"==typeof t;m||(t=String(t));var v=d.global;if(v){var g=d.unicode;d.lastIndex=0}for(var y=[];;){var b=c(d,f);if(null===b)break;if(y.push(b),!v)break;""===String(b[0])&&(d.lastIndex=l(f,i(d.lastIndex),g))}for(var E,k="",j=0,x=0;x<y.length;x++){b=y[x];for(var w=String(b[0]),_=s(u(o(b.index),f.length),0),N=[],O=1;O<b.length;O++)N.push(void 0===(E=b[O])?E:String(E));var S=b.groups;if(m){var C=[w].concat(N,_,f);void 0!==S&&C.push(S);var T=String(t.apply(void 0,C))}else T=h(w,f,_,N,S,t);_>=j&&(k+=f.slice(j,_)+T,j=_+w.length)}return k+f.slice(j)}];function h(e,t,a,i,o,l){var c=a+e.length,s=i.length,u=m;return void 0!==o&&(o=r(o),u=f),n.call(l,u,(function(n,r){var l;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(c);case"<":l=o[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>s){var f=d(u/10);return 0===f?n:f<=s?void 0===i[f-1]?r.charAt(1):i[f-1]+r.charAt(1):n}l=i[u-1]}return void 0===l?"":l}))}}))},195:function(e,t,n){"use strict";var a=n(8),r=n(35),i=n(72),o=n(73);n(74)("match",1,(function(e,t,n,l){return[function(n){var a=e(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,a):new RegExp(n)[t](String(a))},function(e){var t=l(n,e,this);if(t.done)return t.value;var c=a(e),s=String(this);if(!c.global)return o(c,s);var u=c.unicode;c.lastIndex=0;for(var d,f=[],m=0;null!==(d=o(c,s));){var p=String(d[0]);f[m]=p,""===p&&(c.lastIndex=i(s,r(c.lastIndex),u)),m++}return 0===m?null:f}]}))},196:function(e,t,n){var a;a=function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var a=window.getSelection(),r=document.createRange();r.selectNodeContents(e),a.removeAllRanges(),a.addRange(r),t=a.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var a=this.e||(this.e={});return(a[e]||(a[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var a=this;function r(){a.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),a=0,r=n.length;a<r;a++)n[a].fn.apply(n[a].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),a=n[e],r=[];if(a&&t)for(var i=0,o=a.length;i<o;i++)a[i].fn!==t&&a[i].fn._!==t&&r.push(a[i]);return r.length?n[e]=r:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var a=n(3),r=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!a.string(t))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(a.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(a.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var a=n(5);function r(e,t,n,a,r){var o=i.apply(this,arguments);return e.addEventListener(n,o,r),{destroy:function(){e.removeEventListener(n,o,r)}}}function i(e,t,n,r){return function(n){n.delegateTarget=a(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,a,i){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,a,i)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return o(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),c=n(1),s=n.n(c),u=n(2),d=n.n(u),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.resolveOptions(n),a.listenClick(e),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),m(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===f(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=d()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return h("action",e)}},{key:"defaultTarget",value:function(e){var t=h("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return h("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(s.a);function h(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=p}]).default},e.exports=a()},197:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var i=[],o=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=o);for(var l=n;l!=r;l+=o)i.push(l);return i}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);