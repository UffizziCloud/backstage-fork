/*! For license information please see cddc4734.d135bf4a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[466670],{151042:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>u,metadata:()=>s,toc:()=>f});var n=t(824246),o=t(511151);const u={id:"plugin-gitops-profiles.applyprofilerequest.githubuser",title:"ApplyProfileRequest.gitHubUser",description:"API reference for ApplyProfileRequest.gitHubUser"},i=void 0,s={unversionedId:"reference/plugin-gitops-profiles.applyprofilerequest.githubuser",id:"reference/plugin-gitops-profiles.applyprofilerequest.githubuser",title:"ApplyProfileRequest.gitHubUser",description:"API reference for ApplyProfileRequest.gitHubUser",source:"@site/../docs/reference/plugin-gitops-profiles.applyprofilerequest.githubuser.md",sourceDirName:"reference",slug:"/reference/plugin-gitops-profiles.applyprofilerequest.githubuser",permalink:"/docs/reference/plugin-gitops-profiles.applyprofilerequest.githubuser",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-gitops-profiles.applyprofilerequest.githubuser.md",tags:[],version:"current",frontMatter:{id:"plugin-gitops-profiles.applyprofilerequest.githubuser",title:"ApplyProfileRequest.gitHubUser",description:"API reference for ApplyProfileRequest.gitHubUser"}},c={},f=[];function a(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-gitops-profiles",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-gitops-profiles"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-gitops-profiles.applyprofilerequest",children:(0,n.jsx)(r.code,{children:"ApplyProfileRequest"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-gitops-profiles.applyprofilerequest.githubuser",children:(0,n.jsx)(r.code,{children:"gitHubUser"})})]}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"gitHubUser: string;\n"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var u,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var f in u=Object(arguments[c]))t.call(u,f)&&(s[f]=u[f]);if(r){i=r(u);for(var a=0;a<i.length;a++)n.call(u,i[a])&&(s[i[a]]=u[i[a]])}}return s}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),r.Fragment=u("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,t){var n,u={},f=null,a=null;for(n in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(a=r.ref),r)s.call(r,n)&&!c.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:f,ref:a,props:u,_owner:i.current}}r.jsx=f,r.jsxs=f},541535:(e,r,t)=>{var n=t(862525),o=60103,u=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,s=60110,c=60112;r.Suspense=60113;var f=60115,a=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),u=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),i=l("react.provider"),s=l("react.context"),c=l("react.forward_ref"),r.Suspense=l("react.suspense"),f=l("react.memo"),a=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}function b(){}function v(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var m=v.prototype=new b;m.constructor=v,n(m,h.prototype),m.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var n,u={},i=null,s=null;if(null!=r)for(n in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(i=""+r.key),r)j.call(r,n)&&!O.hasOwnProperty(n)&&(u[n]=r[n]);var c=arguments.length-2;if(1===c)u.children=t;else if(1<c){for(var f=Array(c),a=0;a<c;a++)f[a]=arguments[a+2];u.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===u[n]&&(u[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:s,props:u,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,t,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case u:c=!0}}if(c)return i=i(c=e),e=""===n?"."+S(c,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),R(i,r,t,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),r.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var a=n+S(s=e[f],f);c+=R(s,r,t,a,i)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),f=0;!(s=e.next()).done;)c+=R(s=s.value,r,t,a=n+S(s,f++),i);else if("object"===s)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function x(e,r,t){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(d(321));return e}var q={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:x,forEach:function(e,r,t){x(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var u=n({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,c=_.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(a in r)j.call(r,a)&&!O.hasOwnProperty(a)&&(u[a]=void 0===r[a]&&void 0!==f?f[a]:r[a])}var a=arguments.length-2;if(1===a)u.children=t;else if(1<a){f=Array(a);for(var l=0;l<a;l++)f[l]=arguments[l+2];u.children=f}return{$$typeof:o,type:e.type,key:i,ref:s,props:u,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:a,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>s,ah:()=>u});var n=t(667294);const o=n.createContext({});function u(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function s({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||i:u(e),n.createElement(o.Provider,{value:s},r)}}}]);