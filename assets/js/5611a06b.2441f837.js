/*! For license information please see 5611a06b.2441f837.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[560418],{998257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(824246),o=n(511151);const s={id:"system-model",title:"System Model",description:"Documentation on System Model"},a=void 0,i={unversionedId:"features/software-catalog/system-model",id:"features/software-catalog/system-model",title:"System Model",description:"Documentation on System Model",source:"@site/../docs/features/software-catalog/system-model.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/system-model",permalink:"/docs/features/software-catalog/system-model",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/system-model.md",tags:[],version:"current",frontMatter:{id:"system-model",title:"System Model",description:"Documentation on System Model"},sidebar:"docs",previous:{title:"Catalog Configuration",permalink:"/docs/features/software-catalog/configuration"},next:{title:"YAML File Format",permalink:"/docs/features/software-catalog/descriptor-format"}},c={},l=[{value:"Core Entities",id:"core-entities",level:2},{value:"Component",id:"component",level:3},{value:"API",id:"api",level:3},{value:"Resource",id:"resource",level:3},{value:"Organizational Entities",id:"organizational-entities",level:2},{value:"User",id:"user",level:3},{value:"Group",id:"group",level:3},{value:"Ecosystem Modeling",id:"ecosystem-modeling",level:2},{value:"System",id:"system",level:3},{value:"Domain",id:"domain",level:3},{value:"Other",id:"other",level:2},{value:"Location",id:"location",level:3},{value:"Type",id:"type",level:3},{value:"Template",id:"template",level:3}];function u(e){const t=Object.assign({p:"p",em:"em",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",img:"img",h3:"h3"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"We believe that a strong shared understanding and terminology around software\nand resources leads to a better Backstage experience."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["This description originates from\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/390",children:"this RFC"}),". Note that some of\nthe concepts are not yet supported in Backstage."]})}),"\n",(0,r.jsx)(t.h2,{id:"core-entities",children:"Core Entities"}),"\n",(0,r.jsx)(t.p,{children:"We model software in the Backstage catalogue using these three core entities\n(further explained below):"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Components"})," are individual pieces of software"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"APIs"})," are the boundaries between different components"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Resources"})," are physical or virtual infrastructure needed to operate a\ncomponent"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(842201).Z+"",width:"731",height:"111"})}),"\n",(0,r.jsx)(t.h3,{id:"component",children:"Component"}),"\n",(0,r.jsx)(t.p,{children:"A component is a piece of software, for example a mobile feature, web site,\nbackend service or data pipeline (list not exhaustive). A component can be\ntracked in source control, or use some existing open source or commercial\nsoftware."}),"\n",(0,r.jsx)(t.p,{children:"A component can implement APIs for other components to consume. In turn it might\nconsume APIs implemented by other components, or directly depend on components or\nresources that are attached to it at runtime."}),"\n",(0,r.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,r.jsx)(t.p,{children:"APIs form an important (maybe the most important) abstraction that allows large\nsoftware ecosystems to scale. Thus, APIs are a first class citizen in the\nBackstage model and the primary way to discover existing functionality in the\necosystem."}),"\n",(0,r.jsx)(t.p,{children:"APIs are implemented by components and form boundaries between components. They\nmight be defined using an RPC IDL (e.g., Protobuf, GraphQL, ...), a data schema\n(e.g., Avro, TFRecord, ...), or as code interfaces. In any case, APIs exposed by\ncomponents need to be in a known machine-readable format so we can build further\ntooling and analysis on top."}),"\n",(0,r.jsx)(t.p,{children:"APIs have a visibility: they are either public (making them available for any\nother component to consume), restricted (only available to an allowlisted set of\nconsumers), or private (only available within their system). As public APIs are\ngoing to be the primary way interaction between components, Backstage supports\ndocumenting, indexing and searching all APIs so we can browse them as\ndevelopers."}),"\n",(0,r.jsx)(t.h3,{id:"resource",children:"Resource"}),"\n",(0,r.jsx)(t.p,{children:"Resources are the infrastructure a component needs to operate at runtime, like\nBigTable databases, Pub/Sub topics, S3 buckets or CDNs. Modelling them together\nwith components and systems will better allow us to visualize resource\nfootprint, and create tooling around them."}),"\n",(0,r.jsx)(t.h2,{id:"organizational-entities",children:"Organizational Entities"}),"\n",(0,r.jsx)(t.h3,{id:"user",children:"User"}),"\n",(0,r.jsx)(t.p,{children:"A user describes a person, such as an employee, a contractor, or similar."}),"\n",(0,r.jsx)(t.h3,{id:"group",children:"Group"}),"\n",(0,r.jsx)(t.p,{children:"A group describes an organizational entity, such as for example a team, a\nbusiness unit, or a loose collection of people in an interest group."}),"\n",(0,r.jsx)(t.h2,{id:"ecosystem-modeling",children:"Ecosystem Modeling"}),"\n",(0,r.jsx)(t.p,{children:"A large catalogue of components, APIs and resources can be highly granular and\nhard to understand as a whole. It might thus be convenient to further categorize\nthese entities using the following (optional) concepts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Systems"})," are a collection of entities that cooperate to perform some\nfunction"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Domains"})," relate entities and systems to part of the business"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(379582).Z+"",width:"782",height:"834"})}),"\n",(0,r.jsx)(t.h3,{id:"system",children:"System"}),"\n",(0,r.jsx)(t.p,{children:"With increasing complexity in software, systems form an important abstraction\nlevel to help us reason about software ecosystems. Systems are a useful concept\nin that they allow us to ignore the implementation details of a certain\nfunctionality for consumers, while allowing the owning team to make changes as\nthey see fit (leading to low coupling)."}),"\n",(0,r.jsx)(t.p,{children:"A system, in this sense, is a collection of resources and components that\nexposes one or several public APIs. The main benefit of modelling a system is\nthat it hides its resources and private APIs between the components for any\nconsumers. This means that as the owner, you can evolve the implementation, in\nterms of components and resources, without your consumers being able to notice.\nTypically, a system will consist of at most a handful of components (see Domain\nfor a grouping of systems)."}),"\n",(0,r.jsx)(t.p,{children:"For example, a playlist management system might encapsulate a backend service to\nupdate playlists, a backend service to query them, and a database to store them.\nIt could expose an RPC API, a daily snapshots dataset, and an event stream of\nplaylist updates."}),"\n",(0,r.jsx)(t.h3,{id:"domain",children:"Domain"}),"\n",(0,r.jsx)(t.p,{children:"While systems are the basic level of encapsulation for related entities, it is\noften useful to group a collection of systems that share terminology, domain\nmodels, metrics, KPIs, business purpose, or documentation, i.e. they form a\nbounded context."}),"\n",(0,r.jsx)(t.p,{children:"For example, it would make sense if the different systems in the \u201cPayments\u201d\ndomain would come with some documentation on how to accept payments for a new\nproduct or use-case, share the same entity types in their APIs, and integrate\nwell with each other. Other domains could be \u201cContent Ingestion\u201d, \u201cAds\u201d or\n\u201cSearch\u201d."}),"\n",(0,r.jsx)(t.h2,{id:"other",children:"Other"}),"\n",(0,r.jsx)(t.h3,{id:"location",children:"Location"}),"\n",(0,r.jsx)(t.p,{children:"A location is a marker that references other places to look for catalog data."}),"\n",(0,r.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,r.jsxs)(t.p,{children:["The type field in the system has no set meaning. It is up to the user to assign their own types and use them as desired, such as for link validation or creating custom UI components. Some common pre-defined types are depicted in the\n",(0,r.jsx)(t.a,{href:"#ecosystem-modeling",children:"ecosystem modeling diagram"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"template",children:"Template"}),"\n",(0,r.jsx)(t.p,{children:"A template definition describes both the parameters that are rendered in the\nfrontend part of the scaffolding wizard, and the steps that are executed when\nscaffolding that component."})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},842201:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/software-model-core-entities.drawio-c64d5fc511aef4d812137d8b1f7c1965.svg"},379582:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/software-model-entities.drawio-914f0e6e1b9e11d950ef5c104bce60c3.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in s=Object(arguments[c]))n.call(s,l)&&(i[l]=s[l]);if(t){a=t(s);for(var u=0;u<a.length;u++)r.call(s,a[u])&&(i[a[u]]=s[a[u]])}}return i}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:a.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,i=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),s=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),a=d("react.provider"),i=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var b=v.prototype=new g;b.constructor=v,r(b,y.prototype),b.isPureReactComponent=!0;var w={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,s={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,r)&&!x.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===s[r]&&(s[r]=c[r]);return{$$typeof:o,type:e,key:a,ref:i,props:s,_owner:w.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case s:c=!0}}if(c)return a=a(c=e),e=""===r?"."+S(c,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),O(a,t,n,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+S(i=e[l],l);c+=O(i,t,n,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=O(i=i.value,t,n,u=r+S(i,l++),a);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function A(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function E(){var e=I.current;if(null===e)throw Error(p(321));return e}var R={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var s=r({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)j.call(t,u)&&!x.hasOwnProperty(u)&&(s[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:o,type:e.type,key:a,ref:i,props:s,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return E().useCallback(e,t)},t.useContext=function(e,t){return E().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return E().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return E().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return E().useLayoutEffect(e,t)},t.useMemo=function(e,t){return E().useMemo(e,t)},t.useReducer=function(e,t,n){return E().useReducer(e,t,n)},t.useRef=function(e){return E().useRef(e)},t.useState=function(e){return E().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>s});var r=n(667294);const o=r.createContext({});function s(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:s(e),r.createElement(o.Provider,{value:i},t)}}}]);