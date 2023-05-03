/*! For license information please see ffb27cb8.d513ac0a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[512974],{300295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(824246),o=n(511151);const a={id:"org",title:"LDAP Organizational Data",sidebar_label:"Org Data",description:"Setting up ingestion of organizational data from LDAP"},i=void 0,s={unversionedId:"integrations/ldap/org",id:"integrations/ldap/org",title:"LDAP Organizational Data",description:"Setting up ingestion of organizational data from LDAP",source:"@site/../docs/integrations/ldap/org.md",sourceDirName:"integrations/ldap",slug:"/integrations/ldap/org",permalink:"/docs/integrations/ldap/org",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/ldap/org.md",tags:[],version:"current",frontMatter:{id:"org",title:"LDAP Organizational Data",sidebar_label:"Org Data",description:"Setting up ingestion of organizational data from LDAP"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/integrations/google-cloud-storage/locations"},next:{title:"Intro to plugins",permalink:"/docs/plugins/"}},l={},d=[{value:"Supported vendors",id:"supported-vendors",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"target",id:"target",level:3},{value:"bind",id:"bind",level:3},{value:"users",id:"users",level:3},{value:"users.dn",id:"usersdn",level:4},{value:"users.options",id:"usersoptions",level:4},{value:"users.set",id:"usersset",level:4},{value:"users.map",id:"usersmap",level:4},{value:"groups",id:"groups",level:3},{value:"groups.dn",id:"groupsdn",level:4},{value:"groups.options",id:"groupsoptions",level:4},{value:"groups.set",id:"groupsset",level:4},{value:"groups.map",id:"groupsmap",level:4},{value:"Customize the Provider",id:"customize-the-provider",level:2},{value:"Using a Processor instead of a Provider",id:"using-a-processor-instead-of-a-provider",level:2},{value:"Processor Installation",id:"processor-installation",level:3},{value:"Driving LDAP Org Processor Ingestion with Locations",id:"driving-ldap-org-processor-ingestion-with-locations",level:3}];function c(e){const t=Object.assign({p:"p",a:"a",code:"code",h2:"h2",pre:"pre",blockquote:"blockquote",em:"em",h3:"h3",h4:"h4",ol:"ol",li:"li"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The Backstage catalog can be set up to ingest organizational data - users and\ngroups - directly from an LDAP compatible service. The result is a hierarchy of\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-user",children:(0,r.jsx)(t.code,{children:"User"})})," and\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:(0,r.jsx)(t.code,{children:"Group"})})," kind\nentities that mirror your org setup."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-vendors",children:"Supported vendors"}),"\n",(0,r.jsxs)(t.p,{children:["Backstage in general supports OpenLDAP compatible vendors, as well as Active Directory and FreeIPA. If you are using a vendor that does not seem to be supported, please ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?assignees=&labels=enhancement&template=feature_template.md",children:"file an issue"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"This guide will use the Entity Provider method. If you for some reason prefer\nthe Processor method (not recommended), it is described separately below."}),"\n",(0,r.jsxs)(t.p,{children:["The provider is not installed by default, therefore you have to add a dependency\nto ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})," to your backend package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-catalog-backend-module-ldap\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: When configuring to use a Provider instead of a Processor you do not\nneed to add a ",(0,r.jsx)(t.em,{children:"location"})," pointing to your LDAP server"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Update the catalog plugin initialization in your backend to add the provider and\nschedule it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { LdapOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-ldap';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  /* highlight-add-start */\n  // The target parameter below needs to match the ldap.providers.target\n  // value specified in your app-config.\n  builder.addEntityProvider(\n    LdapOrgEntityProvider.fromConfig(env.config, {\n      id: 'our-ldap-master',\n      target: 'ldaps://ds.example.net',\n      logger: env.logger,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 60 },\n        timeout: { minutes: 15 },\n      }),\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"After this, you also have to add some configuration in your app-config that\ndescribes what you want to import for that target."}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"The following configuration is a small example of how a setup could look for\nimporting groups and users from a corporate LDAP server."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"ldap:\n  providers:\n    - target: ldaps://ds.example.net\n      bind:\n        dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net\n        secret: ${LDAP_SECRET}\n      users:\n        dn: ou=people,ou=example,dc=example,dc=net\n        options:\n          filter: (uid=*)\n        map:\n          description: l\n        set:\n          metadata.customField: 'hello'\n      groups:\n        dn: ou=access,ou=groups,ou=example,dc=example,dc=net\n        options:\n          filter: (&(objectClass=some-group-class)(!(groupType=email)))\n        map:\n          description: l\n        set:\n          metadata.customField: 'hello'\n"})}),"\n",(0,r.jsxs)(t.p,{children:["There may be many providers, each targeting a specific ",(0,r.jsx)(t.code,{children:"target"})," which is\nsupposed to match the ",(0,r.jsx)(t.code,{children:"target"})," of a dedicated provider instance - i.e., you will\nadd one entity provider class instance per target to ingest from."]}),"\n",(0,r.jsx)(t.p,{children:'These config blocks have a lot of options in them, so we will describe each\n"root" key within the block separately.'}),"\n",(0,r.jsx)(t.h3,{id:"target",children:"target"}),"\n",(0,r.jsxs)(t.p,{children:["This is the URL of the targeted server, typically on the form\n",(0,r.jsx)(t.code,{children:"ldaps://ds.example.net"})," for SSL enabled servers or ",(0,r.jsx)(t.code,{children:"ldap://ds.example.net"}),"\nwithout SSL."]}),"\n",(0,r.jsx)(t.h3,{id:"bind",children:"bind"}),"\n",(0,r.jsx)(t.p,{children:"The bind block specifies how the plugin should bind (essentially, to\nauthenticate) towards the server. It has the following fields."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net\nsecret: ${LDAP_SECRET}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"dn"})," is the full LDAP Distinguished Name for the user that the plugin\nauthenticates itself as. At this point, only regular user based authentication\nis supported."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"secret"})," is the password of the same user. In this example, it is given in\nthe form of an environment variable ",(0,r.jsx)(t.code,{children:"LDAP_SECRET"}),", that has to be set when the\nbackend starts."]}),"\n",(0,r.jsx)(t.h3,{id:"users",children:"users"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"users"})," block defines the settings that govern the reading and\ninterpretation of users. Its fields are explained in separate sections below."]}),"\n",(0,r.jsx)(t.h4,{id:"usersdn",children:"users.dn"}),"\n",(0,r.jsxs)(t.p,{children:["The DN under which users are stored, e.g.\n",(0,r.jsx)(t.code,{children:"ou=people,ou=example,dc=example,dc=net"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"usersoptions",children:"users.options"}),"\n",(0,r.jsx)(t.p,{children:"The search options to use when sending the query to the server, when reading all\nusers. All the options are shown below, with their default values, but they are\nall optional."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"options:\n  # One of 'base', 'one', or 'sub'.\n  scope: one\n  # The filter is the one that you commonly will want to specify explicitly. It\n  # is a string on the standard LDAP query format. Use it to select out the set\n  # of users that are of actual interest to ingest. For example, you may want\n  # to filter out disabled users.\n  filter: (uid=*)\n  # The attribute selectors for each item, as passed to the LDAP server.\n  attributes: ['*', '+']\n  # This field is either 'false' to disable paging when reading from the\n  # server, or an object on the form '{ pageSize: 100, pagePause: true }' that\n  # specifies the details of how the paging shall work.\n  paged: false\n"})}),"\n",(0,r.jsx)(t.h4,{id:"usersset",children:"users.set"}),"\n",(0,r.jsx)(t.p,{children:"This optional piece lets you specify a number of JSON paths (on a.b.c form) and\nhard coded values to set on those paths. This can be useful for example if you\nwant to hard code a namespace or similar on the generated entities."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"set:\n  # Just an example; the key and value can be anything\n  metadata.namespace: 'ldap'\n"})}),"\n",(0,r.jsx)(t.h4,{id:"usersmap",children:"users.map"}),"\n",(0,r.jsx)(t.p,{children:"Mappings from well known entity fields, to LDAP attribute names. This is where\nyou are able to define how to interpret the attributes of each LDAP result item,\nand to move them into the corresponding entity fields. All the options are shown\nbelow, with their default values, but they are all optional."}),"\n",(0,r.jsxs)(t.p,{children:["If you leave out an optional mapping, it will still be copied using that default\nvalue. For example, even if you do not put in the field ",(0,r.jsx)(t.code,{children:"displayName"})," in your\nconfig, the provider will still copy the attribute ",(0,r.jsx)(t.code,{children:"cn"})," into the entity field\n",(0,r.jsx)(t.code,{children:"spec.profile.displayName"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"map:\n  # The name of the attribute that holds the relative\n  # distinguished name of each entry.\n  rdn: uid\n  # The name of the attribute that shall be used for the value of\n  # the metadata.name field of the entity.\n  name: uid\n  # The name of the attribute that shall be used for the value of\n  # the metadata.description field of the entity.\n  description: description\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.displayName field of the entity.\n  displayName: cn\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.email field of the entity.\n  email: mail\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.picture field of the entity.\n  picture: <nothing, left out>\n  # The name of the attribute that shall be used for the values of\n  # the spec.memberOf field of the entity.\n  memberOf: memberOf\n"})}),"\n",(0,r.jsx)(t.h3,{id:"groups",children:"groups"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"groups"})," block defines the settings that govern the reading and\ninterpretation of groups. Its fields are explained in separate sections below."]}),"\n",(0,r.jsx)(t.h4,{id:"groupsdn",children:"groups.dn"}),"\n",(0,r.jsxs)(t.p,{children:["The DN under which groups are stored, e.g.\n",(0,r.jsx)(t.code,{children:"ou=people,ou=example,dc=example,dc=net"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"groupsoptions",children:"groups.options"}),"\n",(0,r.jsx)(t.p,{children:"The search options to use when sending the query to the server, when reading all\ngroups. All the options are shown below, with their default values, but they are\nall optional."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"options:\n  # One of 'base', 'one', or 'sub'.\n  scope: one\n  # The filter is the one that you commonly will want to specify explicitly. It\n  # is a string on the standard LDAP query format. Use it to select out the set\n  # of groups that are of actual interest to ingest. For example, you may want\n  # to filter out disabled groups.\n  filter: (&(objectClass=some-group-class)(!(groupType=email)))\n  # The attribute selectors for each item, as passed to the LDAP server.\n  attributes: ['*', '+']\n  # This field is either 'false' to disable paging when reading from the\n  # server, or an object on the form '{ pageSize: 100, pagePause: true }' that\n  # specifies the details of how the paging shall work.\n  paged: false\n"})}),"\n",(0,r.jsx)(t.h4,{id:"groupsset",children:"groups.set"}),"\n",(0,r.jsx)(t.p,{children:"This optional piece lets you specify a number of JSON paths (on a.b.c form) and\nhard coded values to set on those paths. This can be useful for example if you\nwant to hard code a namespace or similar on the generated entities."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"set:\n  # Just an example; the key and value can be anything\n  metadata.namespace: 'ldap'\n"})}),"\n",(0,r.jsx)(t.h4,{id:"groupsmap",children:"groups.map"}),"\n",(0,r.jsx)(t.p,{children:"Mappings from well known entity fields, to LDAP attribute names. This is where\nyou are able to define how to interpret the attributes of each LDAP result item,\nand to move them into the corresponding entity fields. All of the options are\nshown below, with their default values, but they are all optional."}),"\n",(0,r.jsxs)(t.p,{children:["If you leave out an optional mapping, it will still be copied using that default\nvalue. For example, even if you do not put in the field ",(0,r.jsx)(t.code,{children:"displayName"})," in your\nconfig, the provider will still copy the attribute ",(0,r.jsx)(t.code,{children:"cn"})," into the entity field\n",(0,r.jsx)(t.code,{children:"spec.profile.displayName"}),". If the target field is optional, such as the display\nname, the importer will accept missing attributes and just leave the target\nfield unset. If the target field is mandatory, such as the name of the entity,\nvalidation will fail if the source attribute is missing."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"map:\n  # The name of the attribute that holds the relative\n  # distinguished name of each entry. This value is copied into a\n  # well known annotation to be able to query by it later.\n  rdn: cn\n  # The name of the attribute that shall be used for the value of\n  # the metadata.name field of the entity.\n  name: cn\n  # The name of the attribute that shall be used for the value of\n  # the metadata.description field of the entity.\n  description: description\n  # The name of the attribute that shall be used for the value of\n  # the spec.type field of the entity.\n  type: groupType\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.displayName field of the entity.\n  displayName: cn\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.email field of the entity.\n  email: <nothing, left out>\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.picture field of the entity.\n  picture: <nothing, left out>\n  # The name of the attribute that shall be used for the values of\n  # the spec.parent field of the entity.\n  memberOf: memberOf\n  # The name of the attribute that shall be used for the values of\n  # the spec.children field of the entity.\n  members: member\n"})}),"\n",(0,r.jsx)(t.h2,{id:"customize-the-provider",children:"Customize the Provider"}),"\n",(0,r.jsx)(t.p,{children:"In case you want to customize the ingested entities, the provider allows to pass\ntransformers for users and groups. Here we will show an example of overriding\nthe group transformer."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a transformer:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export async function myGroupTransformer(\n  vendor: LdapVendor,\n  config: GroupConfig,\n  group: SearchEntry,\n): Promise<GroupEntity | undefined> {\n  // Transformations may change namespace, change entity naming pattern, fill\n  // profile with more or other details...\n\n  // Create the group entity on your own, or wrap the default transformer\n  return await defaultGroupTransformer(vendor, config, group);\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Configure the provider with the transformer:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const ldapEntityProvider = LdapOrgEntityProvider.fromConfig(env.config, {\n  id: 'our-ldap-master',\n  target: 'ldaps://ds.example.net',\n  logger: env.logger,\n  groupTransformer: myGroupTransformer,\n});\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"using-a-processor-instead-of-a-provider",children:"Using a Processor instead of a Provider"}),"\n",(0,r.jsx)(t.p,{children:"An alternative to using the Provider for ingesting LDAP entries is to use a\nProcessor. This is the old way that's based on registering locations with the\nproper type and target, triggering the processor to run."}),"\n",(0,r.jsx)(t.p,{children:"The drawback of this method is that it will leave orphaned Group/User entities\nwhenever they are deleted on your LDAP server, and you cannot control the\nfrequency with which they are refreshed, separately from other processors."}),"\n",(0,r.jsx)(t.h3,{id:"processor-installation",children:"Processor Installation"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"LdapOrgReaderProcessor"})," is not registered by default, so you have to\nregister it in the catalog plugin:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"builder.addProcessor(\n  LdapOrgReaderProcessor.fromConfig(env.config, {\n    logger: env.logger,\n  }),\n);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"driving-ldap-org-processor-ingestion-with-locations",children:"Driving LDAP Org Processor Ingestion with Locations"}),"\n",(0,r.jsxs)(t.p,{children:["Locations point out the specific org(s) you want to import. The ",(0,r.jsx)(t.code,{children:"type"})," of these\nlocations must be ",(0,r.jsx)(t.code,{children:"ldap-org"}),", and the ",(0,r.jsx)(t.code,{children:"target"})," must point to the exact URL\n(starting with ",(0,r.jsx)(t.code,{children:"ldap://"})," or ",(0,r.jsx)(t.code,{children:"ldaps://"}),") of the targeted LDAP server. You can\nhave several such location entries if you want, but typically you will have just\none."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: ldap-org\n      target: ldaps://ds.example.net\n      rules:\n        - allow: [User, Group]\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in a=Object(arguments[l]))n.call(a,d)&&(s[d]=a[d]);if(t){i=t(a);for(var c=0;c<i.length;c++)r.call(a,i[c])&&(s[i[c]]=a[i[c]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:d,ref:c,props:a,_owner:i.current}}t.jsx=d,t.jsxs=d},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,l=60112;t.Suspense=60113;var d=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),i=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),t.Suspense=u("react.suspense"),d=u("react.memo"),c=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var b=v.prototype=new y;b.constructor=v,r(b,m.prototype),b.isPureReactComponent=!0;var x={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];a.children=d}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+_(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(T,"$&/")+"/"),O(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(T,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var d=0;d<e.length;d++){var c=r+_(s=e[d],d);l+=O(s,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),d=0;!(s=e.next()).done;)l+=O(s=s.value,t,n,c=r+_(s,d++),i);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function S(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function L(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function C(){var e=A.current;if(null===e)throw Error(p(321));return e}var D={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:S,forEach:function(e,t,n){S(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var a=r({},e.props),i=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(c in t)j.call(t,c)&&!w.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==d?d[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){d=Array(c);for(var u=0;u<c;u++)d[u]=arguments[u+2];a.children=d}return{$$typeof:o,type:e.type,key:i,ref:s,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return C().useCallback(e,t)},t.useContext=function(e,t){return C().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return C().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return C().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return C().useLayoutEffect(e,t)},t.useMemo=function(e,t){return C().useMemo(e,t)},t.useReducer=function(e,t,n){return C().useReducer(e,t,n)},t.useRef=function(e){return C().useRef(e)},t.useState=function(e){return C().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),r.createElement(o.Provider,{value:s},t)}}}]);