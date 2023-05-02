/*! For license information please see 30fad491.15a15315.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[582400],{542448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(824246),o=n(511151);const s={id:"migrating-from-v1beta2-to-v1beta3",title:"Migrating to v1beta3 templates",description:"How to migrate your existing templates to beta3 syntax"},a="What's new?",i={unversionedId:"features/software-templates/migrating-from-v1beta2-to-v1beta3",id:"features/software-templates/migrating-from-v1beta2-to-v1beta3",title:"Migrating to v1beta3 templates",description:"How to migrate your existing templates to beta3 syntax",source:"@site/../docs/features/software-templates/migrating-from-v1beta2-to-v1beta3.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/migrating-from-v1beta2-to-v1beta3",permalink:"/docs/features/software-templates/migrating-from-v1beta2-to-v1beta3",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/migrating-from-v1beta2-to-v1beta3.md",tags:[],version:"current",frontMatter:{id:"migrating-from-v1beta2-to-v1beta3",title:"Migrating to v1beta3 templates",description:"How to migrate your existing templates to beta3 syntax"},sidebar:"docs",previous:{title:"Experimental: Testing out the alpha Scaffolder plugin",permalink:"/docs/features/software-templates/testing-scaffolder-alpha"},next:{title:"Overview",permalink:"/docs/features/search/"}},l={},c=[{value:"Add the Processor to the <code>plugin-catalog-backend</code>",id:"add-the-processor-to-the-plugin-catalog-backend",level:2},{value:"<code>backstage.io/v1beta2</code> -&gt; <code>scaffolder.backstage.io/v1beta3</code>",id:"backstageiov1beta2---scaffolderbackstageiov1beta3",level:2},{value:"<code>${{ }}</code> instead of <code>&quot;{{ }}&quot;</code>",id:"--instead-of--",level:2},{value:"No more <code>eq</code> or <code>not</code> helpers",id:"no-more-eq-or-not-helpers",level:2},{value:"No more <code>json</code> helper",id:"no-more-json-helper",level:2},{value:"<code>parseRepoUrl</code> is now a <code>filter</code>",id:"parserepourl-is-now-a-filter",level:2},{value:"Links should be used instead of named outputs",id:"links-should-be-used-instead-of-named-outputs",level:2},{value:"Watch out for <code>dash-case</code>",id:"watch-out-for-dash-case",level:2},{value:"Summary",id:"summary",level:3}];function d(e){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"whats-new",children:"What's new?"}),"\n",(0,r.jsx)(t.p,{children:"Well then, here we are! \ud83d\ude80"}),"\n",(0,r.jsxs)(t.p,{children:["Backstage has had many forms of templating languages throughout different\nplugins and different systems. We've had ",(0,r.jsx)(t.code,{children:"cookiecutter"})," syntax in templates, and\nwe also had ",(0,r.jsx)(t.code,{children:"handlebars"})," templating in the ",(0,r.jsx)(t.code,{children:"kind: Template"}),". Then we wanted to\nremove the additional dependency on ",(0,r.jsx)(t.code,{children:"cookiecutter"})," for Software Templates out of\nthe box, so we introduced ",(0,r.jsx)(t.code,{children:"nunjucks"})," as an alternative in ",(0,r.jsx)(t.code,{children:"fetch:template"}),"\naction which is based on the ",(0,r.jsx)(t.code,{children:"jinja2"})," syntax so they're pretty similar. In an\neffort to reduce confusion and unify on to one templating language, we're\nofficially deprecating support for ",(0,r.jsx)(t.code,{children:"handlebars"})," templating in the\n",(0,r.jsx)(t.code,{children:"kind: Template"})," entities with ",(0,r.jsx)(t.code,{children:"apiVersion"})," ",(0,r.jsx)(t.code,{children:"scaffolder.backstage.io/v1beta3"}),"\nand moving to using ",(0,r.jsx)(t.code,{children:"nunjucks"})," instead."]}),"\n",(0,r.jsxs)(t.p,{children:["This provides us a lot of built in ",(0,r.jsx)(t.code,{children:"filters"})," (",(0,r.jsx)(t.code,{children:"handlebars"})," helpers), that as\nTemplate authors will give you much more flexibility out of the box, and also\nopen up sharing of filters in the Entity and the actual ",(0,r.jsx)(t.code,{children:"skeleton"})," too, and\nremoving the slight differences between the two languages."]}),"\n",(0,r.jsxs)(t.p,{children:["We've also removed a lot of the built in helpers that we shipped with\n",(0,r.jsx)(t.code,{children:"handlebars"}),", as they're now supported as first class citizens by either\n",(0,r.jsx)(t.code,{children:"nunjucks"})," or the new ",(0,r.jsx)(t.code,{children:"scaffolder"})," when using ",(0,r.jsx)(t.code,{children:"scaffolder.backstage.io/v1beta3"}),"\n",(0,r.jsx)(t.code,{children:"apiVersion"})]}),"\n",(0,r.jsxs)(t.p,{children:["The migration path is pretty simple, and we've removed some of the pain points\nfrom writing the ",(0,r.jsx)(t.code,{children:"handlebars"})," templates too. Let's go through what's new and how\nto upgrade."]}),"\n",(0,r.jsxs)(t.h2,{id:"add-the-processor-to-the-plugin-catalog-backend",children:["Add the Processor to the ",(0,r.jsx)(t.code,{children:"plugin-catalog-backend"})]}),"\n",(0,r.jsxs)(t.p,{children:["An important change is to add the required processor to your ",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/catalog.ts"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-next-line */\n  builder.addProcessor(new ScaffolderEntitiesProcessor());\n  const { processingEngine, router } = await builder.build();\n\n  // ..\n}\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"backstageiov1beta2---scaffolderbackstageiov1beta3",children:[(0,r.jsx)(t.code,{children:"backstage.io/v1beta2"})," -> ",(0,r.jsx)(t.code,{children:"scaffolder.backstage.io/v1beta3"})]}),"\n",(0,r.jsxs)(t.p,{children:["The most important change is that you'll need to switch over the ",(0,r.jsx)(t.code,{children:"apiVersion"})," in\nyour templates to the new one."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"  kind: Template\n  # highlight-remove-next-line\n  apiVersion: backstage.io/v1beta2\n  # highlight-add-next-line\n  apiVersion: scaffolder.backstage.io/v1beta3\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"--instead-of--",children:[(0,r.jsx)(t.code,{children:"${{ }}"})," instead of ",(0,r.jsx)(t.code,{children:'"{{ }}"'})]}),"\n",(0,r.jsxs)(t.p,{children:["One really big readability issue and cause for confusion was the fact that with\n",(0,r.jsx)(t.code,{children:"handlebars"})," and ",(0,r.jsx)(t.code,{children:"yaml"})," you always had to wrap your templating strings in quotes\nin ",(0,r.jsx)(t.code,{children:"yaml"})," so that it didn't try to parse it as a ",(0,r.jsx)(t.code,{children:"json"})," object and fail. This\nwas pretty annoying, as it also meant that all things look like strings. Now\nthat's no longer the case, you can now remove the ",(0,r.jsx)(t.code,{children:'""'})," and take advantage of\nwriting nice ",(0,r.jsx)(t.code,{children:"yaml"})," files that just work."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"spec:\n  steps:\n      input:\n        allowedHosts: ['github.com']\n        # highlight-remove-next-line\n        description: 'This is {{ parameters.name }}'\n        # highlight-add-next-line\n        description: This is ${{ parameters.name }}\n        # highlight-remove-next-line\n        repoUrl: '{{ parameters.repoUrl }}'\n        # highlight-add-next-line\n        repoUrl: ${{ parameters.repoUrl }}\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"no-more-eq-or-not-helpers",children:["No more ",(0,r.jsx)(t.code,{children:"eq"})," or ",(0,r.jsx)(t.code,{children:"not"})," helpers"]}),"\n",(0,r.jsxs)(t.p,{children:["These helpers are no longer needed with the more expressive ",(0,r.jsx)(t.code,{children:"api"})," that\n",(0,r.jsx)(t.code,{children:"nunjucks"})," provides. You can simply use the built-in ",(0,r.jsx)(t.code,{children:"nunjucks"})," and ",(0,r.jsx)(t.code,{children:"jinja2"}),"\nstyle operators."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'spec:\n  steps:\n      input:\n        # highlight-remove-next-line\n        if: \'{{ eq parameters.value "backstage" }}\'\n        # highlight-add-next-line\n        if: ${{ parameters.value === "backstage" }}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["And then for the ",(0,r.jsx)(t.code,{children:"not"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'spec:\n  steps:\n      input:\n        # highlight-remove-next-line\n        if: \'{{ not parameters.value "backstage" }}\'\n        # highlight-add-next-line\n        if: ${{ parameters.value !== "backstage" }}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Much better right? \u2728"}),"\n",(0,r.jsxs)(t.h2,{id:"no-more-json-helper",children:["No more ",(0,r.jsx)(t.code,{children:"json"})," helper"]}),"\n",(0,r.jsxs)(t.p,{children:["This helper is no longer needed, as we've added support for complex values and\nsupporting the additional primitive values now rather than everything being a\n",(0,r.jsx)(t.code,{children:"string"}),". This means that now that you can pass around ",(0,r.jsx)(t.code,{children:"parameters"})," and it\nshould all work as expected and keep the type that has been declared in the\ninput schema."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"spec:\n  parameters:\n    test:\n      type: number\n      name: Test Number\n    address:\n      type: object\n      required:\n        - line1\n      properties:\n        line1:\n          type: string\n          name: Line 1\n        line2:\n          type: string\n          name: Line 2\n\n  steps:\n    - id: test step\n      action: run:something\n      input:\n        # highlight-remove-next-line\n        address: '{{ json parameters.address }}'\n        # highlight-add-next-line\n        address: ${{ parameters.address }}\n        # highlight-remove-next-line\n        test: '{{ parameters.test }}'\n        # highlight-add-next-line\n        test: ${{ parameters.test }} # this will now make sure that the type of test is a number \ud83d\ude4f\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"parserepourl-is-now-a-filter",children:[(0,r.jsx)(t.code,{children:"parseRepoUrl"})," is now a ",(0,r.jsx)(t.code,{children:"filter"})]}),"\n",(0,r.jsxs)(t.p,{children:["All calls to ",(0,r.jsx)(t.code,{children:"parseRepoUrl"})," are now a ",(0,r.jsx)(t.code,{children:"jinja2"})," ",(0,r.jsx)(t.code,{children:"filter"}),", which means you'll need\nto update the syntax."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"spec:\n  steps:\n      input:\n        # highlight-remove-next-line\n        repoUrl: '{{ parseRepoUrl parameters.repoUrl }}'\n        # highlight-add-next-line\n        repoUrl: ${{ parameters.repoUrl | parseRepoUrl }}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now we have complex value support here too, expect that this ",(0,r.jsx)(t.code,{children:"filter"})," will go\naway in future versions and the ",(0,r.jsx)(t.code,{children:"RepoUrlPicker"})," will return an object so\n",(0,r.jsx)(t.code,{children:"parameters.repoUrl"})," will already be a\n",(0,r.jsx)(t.code,{children:"{ host: string; owner: string; repo: string }"})," \ud83d\ude80"]}),"\n",(0,r.jsx)(t.h2,{id:"links-should-be-used-instead-of-named-outputs",children:"Links should be used instead of named outputs"}),"\n",(0,r.jsxs)(t.p,{children:["Previously, it was possible to provide links to the frontend using the named output ",(0,r.jsx)(t.code,{children:"entityRef"})," and ",(0,r.jsx)(t.code,{children:"remoteUrl"}),".\nThese should be moved to ",(0,r.jsx)(t.code,{children:"links"})," under the ",(0,r.jsx)(t.code,{children:"output"})," object instead."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"output:\n  # highlight-remove-start\n  remoteUrl: {{ steps['publish'].output.remoteUrl }}\n  entityRef: {{ steps['register'].output.entityRef }}\n  # highlight-remove-end\n  # highlight-add-start\n  links:\n    - title: Repository\n      url: ${{ steps['publish'].output.remoteUrl }}\n    - title: Open in catalog\n      icon: catalog\n      entityRef: ${{ steps['register'].output.entityRef }}\n      # highlight-add-end\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"watch-out-for-dash-case",children:["Watch out for ",(0,r.jsx)(t.code,{children:"dash-case"})]}),"\n",(0,r.jsxs)(t.p,{children:["The nunjucks compiler can run into issues if the ",(0,r.jsx)(t.code,{children:"id"})," fields in your template steps use dash characters, since these IDs translate directly to JavaScript object properties when accessed as output. One possible migration path is to use ",(0,r.jsx)(t.code,{children:"camelCase"})," for your action IDs."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"  steps:\n    # highlight-remove-start\n    id: my-custom-action\n    ...\n\n    id: publish-pull-request\n    input:\n      repoUrl: {{ steps.my-custom-action.output.repoUrl }} # Will not recognize 'my-custom-action' as a JS property since it contains dashes!\n      # highlight-remove-end\n\n  steps:\n    # highlight-add-start\n    id: myCustomAction\n    ...\n\n    id: publishPullRequest\n    input:\n      repoUrl: ${{ steps.myCustomAction.output.repoUrl }}\n      # highlight-add-end\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Alternatively, it's possible to keep the ",(0,r.jsx)(t.code,{children:"dash-case"})," syntax and use brackets for property access as you would in JavaScript:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"input:\n  repoUrl: ${{ steps['my-custom-action'].output.repoUrl }}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.p,{children:["Of course, we're always available on ",(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"discord"})," if\nyou're stuck or something's not working as expected. You can also\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new/choose",children:"raise an issue"})," with\nfeedback or bugs!"]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in s=Object(arguments[l]))n.call(s,c)&&(i[c]=s[c]);if(t){a=t(s);for(var d=0;d<a.length;d++)r.call(s,a[d])&&(i[a[d]]=s[a[d]])}}return i}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:a.current}}t.jsx=c,t.jsxs=c},541535:(e,t,n)=>{var r=n(862525),o=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,i=60110,l=60112;t.Suspense=60113;var c=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),s=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),a=u("react.provider"),i=u("react.context"),l=u("react.forward_ref"),t.Suspense=u("react.suspense"),c=u("react.memo"),d=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var v=j.prototype=new y;v.constructor=j,r(v,m.prototype),v.isPureReactComponent=!0;var x={current:null},b=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,s={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)b.call(t,r)&&!w.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===s[r]&&(s[r]=l[r]);return{$$typeof:o,type:e,key:a,ref:i,props:s,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,r,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case s:l=!0}}if(l)return a=a(l=e),e=""===r?"."+S(l,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),R(a,t,n,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var d=r+S(i=e[c],c);l+=R(i,t,n,d,a)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(i=e.next()).done;)l+=R(i=i.value,t,n,d=r+S(i,c++),a);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function $(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var U={current:null};function P(){var e=U.current;if(null===e)throw Error(p(321));return e}var C={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var s=r({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)b.call(t,d)&&!w.hasOwnProperty(d)&&(s[d]=void 0===t[d]&&void 0!==c?c[d]:t[d])}var d=arguments.length-2;if(1===d)s.children=n;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];s.children=c}return{$$typeof:o,type:e.type,key:a,ref:i,props:s,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>s});var r=n(667294);const o=r.createContext({});function s(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:s(e),r.createElement(o.Provider,{value:i},t)}}}]);