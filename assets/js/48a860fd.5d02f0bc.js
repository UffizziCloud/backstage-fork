/*! For license information please see 48a860fd.5d02f0bc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[281142],{802239:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>a});var n=t(824246),o=t(511151);const u={id:"plugin-kubernetes-backend.kubernetesbuilder.buildrouter",title:"KubernetesBuilder.buildRouter()",description:"API reference for KubernetesBuilder.buildRouter()"},i=void 0,s={unversionedId:"reference/plugin-kubernetes-backend.kubernetesbuilder.buildrouter",id:"reference/plugin-kubernetes-backend.kubernetesbuilder.buildrouter",title:"KubernetesBuilder.buildRouter()",description:"API reference for KubernetesBuilder.buildRouter()",source:"@site/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildrouter.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesbuilder.buildrouter",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildrouter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildrouter.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.kubernetesbuilder.buildrouter",title:"KubernetesBuilder.buildRouter()",description:"API reference for KubernetesBuilder.buildRouter()"}},c={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder",children:(0,n.jsx)(r.code,{children:"KubernetesBuilder"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildrouter",children:(0,n.jsx)(r.code,{children:"buildRouter"})})]}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"protected buildRouter(objectsProvider: KubernetesObjectsProvider, clusterSupplier: KubernetesClustersSupplier, catalogApi: CatalogApi, proxy: KubernetesProxy, permissionApi: PermissionEvaluator): express.Router;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"objectsProvider"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesobjectsprovider",children:"KubernetesObjectsProvider"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"clusterSupplier"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"catalogApi"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/catalog-client.catalogapi",children:"CatalogApi"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"proxy"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesproxy",children:"KubernetesProxy"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"permissionApi"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator",children:"PermissionEvaluator"})}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"Returns:"}),"\n",(0,n.jsx)(r.p,{children:"express.Router"})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var u,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var a in u=Object(arguments[c]))t.call(u,a)&&(s[a]=u[a]);if(r){i=r(u);for(var l=0;l<i.length;l++)n.call(u,i[l])&&(s[i[l]]=u[i[l]])}}return s}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),r.Fragment=u("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,u={},a=null,l=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!c.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:l,props:u,_owner:i.current}}r.jsx=a,r.jsxs=a},541535:(e,r,t)=>{var n=t(862525),o=60103,u=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,s=60110,c=60112;r.Suspense=60113;var a=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),u=d("react.portal"),r.Fragment=d("react.fragment"),r.StrictMode=d("react.strict_mode"),r.Profiler=d("react.profiler"),i=d("react.provider"),s=d("react.context"),c=d("react.forward_ref"),r.Suspense=d("react.suspense"),a=d("react.memo"),l=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||b}function j(){}function m(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=y.prototype;var v=m.prototype=new j;v.constructor=m,n(v,y.prototype),v.isPureReactComponent=!0;var k={current:null},g=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function _(e,r,t){var n,u={},i=null,s=null;if(null!=r)for(n in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(i=""+r.key),r)g.call(r,n)&&!x.hasOwnProperty(n)&&(u[n]=r[n]);var c=arguments.length-2;if(1===c)u.children=t;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];u.children=a}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===u[n]&&(u[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:s,props:u,_owner:k.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case u:c=!0}}if(c)return i=i(c=e),e=""===n?"."+P(c,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),S(i,r,t,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),r.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=n+P(s=e[a],a);c+=S(s,r,t,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(s=e.next()).done;)c+=S(s=s.value,r,t,l=n+P(s,a++),i);else if("object"===s)throw r=""+e,Error(p(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function R(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(p(321));return e}var A={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:R,forEach:function(e,r,t){R(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return R(e,(function(){r++})),r},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(p(143));return e}},r.Component=y,r.PureComponent=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,t){if(null==e)throw Error(p(267,e));var u=n({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,c=k.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in r)g.call(r,l)&&!x.hasOwnProperty(l)&&(u[l]=void 0===r[l]&&void 0!==a?a[l]:r[l])}var l=arguments.length-2;if(1===l)u.children=t;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];u.children=a}return{$$typeof:o,type:e.type,key:i,ref:s,props:u,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=_,r.createFactory=function(e){var r=_.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>s,ah:()=>u});var n=t(667294);const o=n.createContext({});function u(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function s({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||i:u(e),n.createElement(o.Provider,{value:s},r)}}}]);