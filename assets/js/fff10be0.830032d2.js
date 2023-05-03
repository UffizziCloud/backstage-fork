/*! For license information please see fff10be0.830032d2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[431728],{601806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=n(824246),i=n(511151);const c={id:"naming-patterns",title:"Backend System Naming Patterns",sidebar_label:"Naming Patterns",description:"Naming patterns in the backend system"},s=void 0,o={unversionedId:"backend-system/architecture/naming-patterns",id:"backend-system/architecture/naming-patterns",title:"Backend System Naming Patterns",description:"Naming patterns in the backend system",source:"@site/../docs/backend-system/architecture/07-naming-patterns.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/naming-patterns",permalink:"/docs/backend-system/architecture/naming-patterns",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/architecture/07-naming-patterns.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"naming-patterns",title:"Backend System Naming Patterns",sidebar_label:"Naming Patterns",description:"Naming patterns in the backend system"},sidebar:"docs",previous:{title:"Modules",permalink:"/docs/backend-system/architecture/modules"},next:{title:"Overview",permalink:"/docs/backend-system/building-backends/index"}},a={},l=[{value:"Plugins",id:"plugins",level:3},{value:"Modules",id:"modules",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Services",id:"services",level:3}];function d(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"DISCLAIMER: The new backend system is in alpha, and still under active development. While we have reviewed the interfaces carefully, they may still be iterated on before the stable release."})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"These are the naming patterns to adhere to within the backend system. They help us keep exports consistent across packages and make it easier to understand the usage and intent of exports."}),"\n",(0,r.jsx)(t.h3,{id:"plugins",children:"Plugins"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Pattern"}),(0,r.jsx)(t.th,{children:"Examples"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"export"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<id>Plugin"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"catalogPlugin"}),", ",(0,r.jsx)(t.code,{children:"scaffolderPlugin"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ID"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'<id>'"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"'catalog'"}),", ",(0,r.jsx)(t.code,{children:"'scaffolder'"})]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export const catalogPlugin = createBackendPlugin({\n  pluginId: 'catalog',\n  ...\n})\n"})}),"\n",(0,r.jsx)(t.h3,{id:"modules",children:"Modules"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Pattern"}),(0,r.jsx)(t.th,{children:"Examples"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"export"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<pluginId>Module<ModuleId>"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"catalogModuleGithubEntityProvider"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ID"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'<moduleId>'"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'githubEntityProvider'"})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export const catalogModuleGithubEntityProvider = createBackendModule({\n  pluginId: 'catalog',\n  moduleId: 'githubEntityProvider',\n  ...\n})\n"})}),"\n",(0,r.jsx)(t.h3,{id:"extensions",children:"Extensions"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Pattern"}),(0,r.jsx)(t.th,{children:"Examples"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Interface"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<PluginId><Name>ExtensionPoint"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CatalogProcessingExtensionPoint"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Reference"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<pluginId><Name>ExtensionPoint"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"catalogProcessingExtensionPoint"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ID"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'<pluginId>.<name>'"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"'catalog.processing'"}),", ",(0,r.jsx)(t.code,{children:"'foo.barBaz'"})]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export interface CatalogProcessingExtensionPoint {\n  ...\n}\n\nexport const catalogProcessingExtensionPoint = createExtensionPoint<CatalogProcessingExtensionPoint>({\n  id: 'catalog.processing',\n  ...\n})\n"})}),"\n",(0,r.jsx)(t.h3,{id:"services",children:"Services"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Pattern"}),(0,r.jsx)(t.th,{children:"Examples"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Interface"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<Name>Service"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"LoggerService"}),", ",(0,r.jsx)(t.code,{children:"DatabaseService"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Reference"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<name>ServiceRef"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"loggerServiceRef"}),", ",(0,r.jsx)(t.code,{children:"databaseServiceRef"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ID"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<pluginId>.<name>"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"'core.rootHttpRouter'"}),", ",(0,r.jsx)(t.code,{children:"'catalog.catalogClient'"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Factory"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<name>ServiceFactory"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"loggerServiceFactory"}),", ",(0,r.jsx)(t.code,{children:"databaseServiceFactory"})]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export interface CatalogClientService {\n  ...\n}\n\nexport const catalogClientServiceRef = createServiceRef<CatalogClientService>({\n  id: 'catalog.catalogClient',\n  ...\n})\n\nexport const catalogClientServiceFactory = createServiceFactory({\n  service: catalogClientServiceRef,\n  ...\n})\n"})}),"\n",(0,r.jsxs)(t.p,{children:["An exception to the above service reference naming pattern has been made for the all of the core services in the core API. The ",(0,r.jsx)(t.code,{children:"@backstage/backend-plugin-api"})," makes all core service references available via a single ",(0,r.jsx)(t.code,{children:"coreServices"})," collection. Likewise, the ",(0,r.jsx)(t.code,{children:"@backstage/backend-test-utils"})," exports all mock service implementations via a single ",(0,r.jsx)(t.code,{children:"mockServices"})," collection. This means that the table above is slightly misleading, since ",(0,r.jsx)(t.code,{children:"loggerServiceRef"})," and ",(0,r.jsx)(t.code,{children:"databaseServiceRef"})," are instead available as ",(0,r.jsx)(t.code,{children:"coreServices.logger"})," and ",(0,r.jsx)(t.code,{children:"coreService.database"}),". We recommend that plugins avoid this patterns unless they have a very large number of services that they need to export."]}),"\n",(0,r.jsxs)(t.p,{children:["While it is often preferred to prefix root scoped services with ",(0,r.jsx)(t.code,{children:"Root"}),", it is not required. For example, ",(0,r.jsx)(t.code,{children:"RootHttpRouterService"})," and ",(0,r.jsx)(t.code,{children:"RootLifecycleService"})," follow this pattern, but ",(0,r.jsx)(t.code,{children:"ConfigService"})," doesn't and it is a root scoped service."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var c,s,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in c=Object(arguments[a]))n.call(c,l)&&(o[l]=c[l]);if(t){s=t(c);for(var d=0;d<s.length;d++)r.call(c,s[d])&&(o[s[d]]=c[s[d]])}}return o}},371426:(e,t,n)=>{n(862525);var r=n(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;i=c("react.element"),t.Fragment=c("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,c={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!a.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:d,props:c,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),i=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,o=60110,a=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;i=u("react.element"),c=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),s=u("react.provider"),o=u("react.context"),a=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x={};function j(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||p}function g(){}function y(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||p}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var m=y.prototype=new g;m.constructor=y,r(m,j.prototype),m.isPureReactComponent=!0;var v={current:null},b=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,c={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)b.call(t,r)&&!k.hasOwnProperty(r)&&(c[r]=t[r]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];c.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===c[r]&&(c[r]=a[r]);return{$$typeof:i,type:e,key:s,ref:o,props:c,_owner:v.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function w(e,t,n,r,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case c:a=!0}}if(a)return s=s(a=e),e=""===r?"."+E(a,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),w(s,t,n,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=r+E(o=e[l],l);a+=w(o,t,n,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(o=e.next()).done;)a+=w(o=o.value,t,n,d=r+E(o,l++),s);else if("object"===o)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function C(e,t,n){if(null==e)return e;var r=[],i=0;return w(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var O={current:null};function I(){var e=O.current;if(null===e)throw Error(f(321));return e}var $={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(f(143));return e}},t.Component=j,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var c=r({},e.props),s=e.key,o=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,a=v.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)b.call(t,d)&&!k.hasOwnProperty(d)&&(c[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)c.children=n;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];c.children=l}return{$$typeof:i,type:e.type,key:s,ref:o,props:c,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:o,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return I().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,n){return I().useReducer(e,t,n)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>c});var r=n(667294);const i=r.createContext({});function c(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||s:c(e),r.createElement(i.Provider,{value:o},t)}}}]);