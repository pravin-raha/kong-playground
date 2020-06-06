(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var i=t(2),r=t(6),a=(t(0),t(117)),o={id:"authentication_plugin",title:"Authentication plugin",sidebar_label:"Authentication plugin"},c={id:"authentication_plugin",title:"Authentication plugin",description:"Adding OIDC plugin",source:"@site/docs/authentication_plugin.md",permalink:"/kong-playground/docs/authentication_plugin",sidebar_label:"Authentication plugin",sidebar:"someSidebar",previous:{title:"Rate limit plugin",permalink:"/kong-playground/docs/rate_limit"},next:{title:"Load Balancer",permalink:"/kong-playground/docs/load_balancer"}},l=[{value:"Adding OIDC plugin",id:"adding-oidc-plugin",children:[{value:"Enabling the plugin on a Service.",id:"enabling-the-plugin-on-a-service",children:[]}]},{value:"Adding ACL plugin",id:"adding-acl-plugin",children:[{value:"Enabling the plugin on a Service.",id:"enabling-the-plugin-on-a-service-1",children:[]}]}],u={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"adding-oidc-plugin"},"Adding OIDC plugin"),Object(a.b)("h3",{id:"enabling-the-plugin-on-a-service"},"Enabling the plugin on a Service."),Object(a.b)("p",null,"Configure this plugin on a Service by making the following request:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'curl -X POST http://localhost:8001/services/{ID}/plugins \\\n    --data "name=oidc"  \\\n    --data "config.client_id=kong" \\\n    --data "config.client_secret=29d98bf7-168c-4874-b8e9-9ba5e7382fa0" \\\n    --data "config.discovery=http://{ip}:8080/auth/realms/kong/.well-known/openid-configuration" \\\n    --data "config.introspection_endpoint=http://{ip}:8080/auth/realms/kong/protocol/openid-connect/token/introspect" \\\n    --data "config.bearer_only=true"\n')),Object(a.b)("h2",{id:"adding-acl-plugin"},"Adding ACL plugin"),Object(a.b)("h3",{id:"enabling-the-plugin-on-a-service-1"},"Enabling the plugin on a Service."),Object(a.b)("p",null,"Configure this plugin on a Service by making the following request:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'curl -X POST http://localhost:8001/services/{ID}/plugins \\\n    --data "name=oidc-acl"  \\\n    --data "config.whitelist=admin" \\\n    --data "config.whitelist=user"\n')))}p.isMDXComponent=!0},117:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return b}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),p=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},g=function(e){var n=p(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(t),s=i,b=g["".concat(o,".").concat(s)]||g[s]||d[s]||a;return t?r.a.createElement(b,c(c({ref:n},u),{},{components:t})):r.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);