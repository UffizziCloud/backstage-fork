/*! For license information please see 73dc8a15.ca273092.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[955516],{711312:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(824246),i=t(511151);const o={id:"plugin-permission-react",title:"@backstage/plugin-permission-react",description:"API Reference for @backstage/plugin-permission-react"},s=void 0,c={unversionedId:"reference/plugin-permission-react",id:"reference/plugin-permission-react",title:"@backstage/plugin-permission-react",description:"API Reference for @backstage/plugin-permission-react",source:"@site/../docs/reference/plugin-permission-react.md",sourceDirName:"reference",slug:"/reference/plugin-permission-react",permalink:"/docs/reference/plugin-permission-react",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-react.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-react",title:"@backstage/plugin-permission-react",description:"API Reference for @backstage/plugin-permission-react"}},a={},l=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function u(e){const r=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-permission-react"})})]}),"\n",(0,n.jsx)(r.h2,{id:"classes",children:"Classes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Class"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.identitypermissionapi",children:"IdentityPermissionApi"})}),(0,n.jsxs)(r.td,{children:["The default implementation of the PermissionApi, which simply calls the authorize method of the given ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionclient",children:"PermissionClient"}),"."]})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermission",children:"RequirePermission(props)"})}),(0,n.jsxs)(r.td,{children:["A boundary that only renders its child elements if the user has the specified permission.","While loading, nothing will be rendered. If the user does not have permission, the ","errorPage"," element will be rendered, falling back to the ","NotFoundErrorPage"," app component if no ","errorPage"," is provider."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.usepermission",children:"usePermission(input)"})}),(0,n.jsxs)(r.td,{children:["React hook utility for authorization. Given either a non-resource ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permission"})," or a ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"})," and an optional resourceRef, it will return whether or not access is allowed (for the given resource, if resourceRef is provided). See  for more details.","The resourceRef field is optional to allow calling this hook with an entity that might be loading asynchronously, but when resourceRef is not supplied, the value of ","allowed"," will always be false.","Note: This hook uses stale-while-revalidate to help avoid flicker in UI elements that would be conditionally rendered based on the ","allowed"," result of this hook."]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Variable"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.permissionapiref",children:"permissionApiRef"})}),(0,n.jsxs)(r.td,{children:["A Backstage ApiRef for the Permission API. See ",(0,n.jsx)(r.a,{href:"https://backstage.io/docs/api/utility-apis",children:"https://backstage.io/docs/api/utility-apis"})," for more information on Backstage ApiRefs."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.permissionedroute",children:"PermissionedRoute"})}),(0,n.jsxs)(r.td,{children:["Returns a React Router Route which only renders the element when authorized. If unauthorized, the Route will render a NotFoundErrorPage (see ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.appcomponents",children:"AppComponents"}),")."]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type Alias"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.asyncpermissionresult",children:"AsyncPermissionResult"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.permissionapi",children:"PermissionApi"})}),(0,n.jsx)(r.td,{children:"This API is used by various frontend utilities that allow developers to implement authorization within their frontend plugins. A plugin developer will likely not have to interact with this API or its implementations directly, but rather with the aforementioned utility components/hooks."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermissionprops",children:"RequirePermissionProps"})}),(0,n.jsxs)(r.td,{children:["Properties for ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermission",children:"RequirePermission()"})]})]})]})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,s,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in o=Object(arguments[a]))t.call(o,l)&&(c[l]=o[l]);if(r){s=r(o);for(var u=0;u<s.length;u++)n.call(o,s[u])&&(c[s[u]]=o[s[u]])}}return c}},371426:(e,r,t)=>{t(862525);var n=t(827378),i=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),r.Fragment=o("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,o={},l=null,u=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:s.current}}r.jsx=l,r.jsxs=l},541535:(e,r,t)=>{var n=t(862525),i=60103,o=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var s=60109,c=60110,a=60112;r.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;i=f("react.element"),o=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),s=f("react.provider"),c=f("react.context"),a=f("react.forward_ref"),r.Suspense=f("react.suspense"),l=f("react.memo"),u=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}function j(){}function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=y.prototype;var v=g.prototype=new j;v.constructor=g,n(v,y.prototype),v.isPureReactComponent=!0;var b={current:null},x=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,o={},s=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(s=""+r.key),r)x.call(r,n)&&!_.hasOwnProperty(n)&&(o[n]=r[n]);var a=arguments.length-2;if(1===a)o.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:i,type:e,key:s,ref:c,props:o,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,t,n,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case o:a=!0}}if(a)return s=s(a=e),e=""===n?"."+R(a,0):n,Array.isArray(s)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),O(s,r,t,"",(function(e){return e}))):null!=s&&(k(s)&&(s=function(e,r){return{$$typeof:i,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),r.push(s)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+R(c=e[l],l);a+=O(c,r,t,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)a+=O(c=c.value,r,t,u=n+R(c,l++),s);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function C(e,r,t){if(null==e)return e;var n=[],i=0;return O(e,n,"","",(function(e){return r.call(t,e,i++)})),n}function S(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function A(){var e=E.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},r.Component=y,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var o=n({},e.props),s=e.key,c=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,a=b.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in r)x.call(r,u)&&!_.hasOwnProperty(u)&&(o[u]=void 0===r[u]&&void 0!==l?l[u]:r[u])}var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:i,type:e.type,key:s,ref:c,props:o,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:S}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return A().useCallback(e,r)},r.useContext=function(e,r){return A().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return A().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return A().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return A().useLayoutEffect(e,r)},r.useMemo=function(e,r){return A().useMemo(e,r)},r.useReducer=function(e,r,t){return A().useReducer(e,r,t)},r.useRef=function(e){return A().useRef(e)},r.useState=function(e){return A().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>o});var n=t(667294);const i=n.createContext({});function o(e){const r=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||s:o(e),n.createElement(i.Provider,{value:c},r)}}}]);