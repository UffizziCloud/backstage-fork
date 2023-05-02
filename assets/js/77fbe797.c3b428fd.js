/*! For license information please see 77fbe797.c3b428fd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[325124],{648852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var i=n(824246),o=n(511151);const r={id:"life-of-an-entity",title:"The Life of an Entity",sidebar_label:"The Life of an Entity",description:"The life cycle of entities, from being introduced into the catalog, through processing, to being removed again"},a=void 0,s={unversionedId:"features/software-catalog/life-of-an-entity",id:"features/software-catalog/life-of-an-entity",title:"The Life of an Entity",description:"The life cycle of entities, from being introduced into the catalog, through processing, to being removed again",source:"@site/../docs/features/software-catalog/life-of-an-entity.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/life-of-an-entity",permalink:"/docs/features/software-catalog/life-of-an-entity",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/life-of-an-entity.md",tags:[],version:"current",frontMatter:{id:"life-of-an-entity",title:"The Life of an Entity",sidebar_label:"The Life of an Entity",description:"The life cycle of entities, from being introduced into the catalog, through processing, to being removed again"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/features/software-catalog/"},next:{title:"Catalog Configuration",permalink:"/docs/features/software-catalog/configuration"}},l={},h=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"Ingestion",id:"ingestion",level:2},{value:"Processing",id:"processing",level:2},{value:"Stitching",id:"stitching",level:2},{value:"Errors",id:"errors",level:2},{value:"Orphaning",id:"orphaning",level:2},{value:"Implicit Deletion",id:"implicit-deletion",level:2},{value:"Explicit Deletion",id:"explicit-deletion",level:2}];function c(e){const t=Object.assign({p:"p",h2:"h2",a:"a",ul:"ul",li:"li",em:"em",img:"img",code:"code",blockquote:"blockquote",pre:"pre"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This document gives a high level overview of the catalog backend, and the\ntechnical processes involved in making entities flow through it. It is mainly\naimed at developers who want to understand the internals while installing or\nextending the catalog. However, it can be informative for other personas too."}),"\n",(0,i.jsx)(t.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,i.jsxs)(t.p,{children:["The catalog forms a hub of sorts, where entities are ingested from various\nauthoritative sources and held in a database, subject to automated processing,\nand then presented through an API for quick and easy access by Backstage and\nothers. The most common source is ",(0,i.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format",children:"YAML files"})," on a\nstandard format, living in version control systems near the source code of\nsystems that they describe. Those files are registered with the catalog and\nmaintained by the respective owners. The catalog makes sure to keep itself up to\ndate with changes to those files."]}),"\n",(0,i.jsx)(t.p,{children:"The main extension points where developers can customize the catalog are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Entity providers"}),", that feed initial raw entity data into the catalog,"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Policies"}),", that establish baseline rules about the shape of entities,"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Processors"}),", that validate, analyze, and mutate the raw entity data into its\nfinal form."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The high level processes involved are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Ingestion"}),", where entity providers fetch raw entity data from external\nsources and seed it into the database,"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Processing"}),", where the policies and processors continually treat the ingested\ndata and may emit both other raw entities (that are also subject to\nprocessing), errors, relations to other entities, etc.,"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Stitching"}),", where all of the data emitted by various processors are assembled\ntogether into the final output entity."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"An entity is not visible to the outside world (through the catalog API), until\nit has passed through the last process and landed among the final entities."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"General overview",src:n(152867).Z+"",width:"442",height:"621"})}),"\n",(0,i.jsx)(t.p,{children:"The details of these processes are described below."}),"\n",(0,i.jsx)(t.h2,{id:"ingestion",children:"Ingestion"}),"\n",(0,i.jsxs)(t.p,{children:["Each catalog deployment has a number of ",(0,i.jsx)(t.em,{children:"entity providers"})," installed. They are\nresponsible for fetching data from external authoritative sources in any way\nthat they see fit, translating those into entity objects, and notifying the\ndatabase when those entities are added or removed. These are the ",(0,i.jsx)(t.em,{children:"unprocessed\nentities"})," that will be subject to later processing (see below), and they form\nthe very basis of existence for entities. If there were no entity providers, no\nentities would ever enter the system."]}),"\n",(0,i.jsxs)(t.p,{children:["The database always keeps track of the set of entities that belong to each\nprovider; no two providers can try to output the same entity. And when a\nprovider signals the removal of an entity, then that leads to an ",(0,i.jsx)(t.em,{children:"eager\ndeletion"}),": the entity and all auxiliary data that it has led to in the database\nis immediately purged."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Ingestion overview",src:n(563966).Z+"",width:"451",height:"321"})}),"\n",(0,i.jsx)(t.p,{children:"There are two providers installed by default: the one that deals with user\nregistered locations (e.g. URLs to YAML files), and the one that deals with\nstatic locations in the app-config. You can add more third party providers by\npassing them to the catalog builder in your backend initialization code, and you\ncan easily write your own."}),"\n",(0,i.jsxs)(t.p,{children:["An entity provider is a class that implements the ",(0,i.jsx)(t.code,{children:"EntityProvider"})," interface. It\nhas three main parts:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The identity: Each provider instance has a unique, stable identifier that the\ndatabase can use to keep track of the originator of each unprocessed entity."}),"\n",(0,i.jsx)(t.li,{children:"The connection: During backend startup, each provider is attached to the\ncatalog runtime."}),"\n",(0,i.jsx)(t.li,{children:"The stream of events: During its lifetime, the provider can issue change\nevents to the runtime at any point in time, to modify its set of unprocessed\nentities."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"It is entirely up to the provider to choose how and when it produces these\nchange events. For example, the app-config provider only fires off an update at\nstartup and then lies dormant. The location database provider does an initial\nupdate at startup, and then small delta updates every time a location database\nchange is detected. The LDAP provider is driven externally by a timer loop that\noccasionally triggers a full update. Some future provider may be entirely event\ndriven, feeding off an event bus or web hook. There is no magic coordination\namong providers; if they need to arrange synchronization or locking among\nthemselves for example to avoid duplicate work across multiple catalog service\nmachines, they need to handle that out-of-band."}),"\n",(0,i.jsxs)(t.p,{children:["The entities that are emitted get some coarse validation applied to them, to\nensure that they at least adhere to the most basic schema rules about how an\nentity should be shaped. For example, they need to have a ",(0,i.jsx)(t.code,{children:"kind"}),", a\n",(0,i.jsx)(t.code,{children:"metadata.name"}),", and optionally a ",(0,i.jsx)(t.code,{children:"metadata.namespace"}),", among others. Apart from\nthat, the ingestion stage considers its work done, and stores the unprocessed\nentities to be picked up at a later time by the processing system. This means\nthat the more precise validation rules that you put in place on entities are\n",(0,i.jsx)(t.em,{children:"not"})," yet applied at this stage."]}),"\n",(0,i.jsx)(t.h2,{id:"processing",children:"Processing"}),"\n",(0,i.jsx)(t.p,{children:'Every unprocessed entity comes with a timestamp, which tells at what time that\nthe processing loop should next try to process it. When the entity first\nappears, this timestamp is set to "now" - asking for it to be picked up as soon\nas possible.'}),"\n",(0,i.jsxs)(t.p,{children:["Each catalog deployment has a number of ",(0,i.jsx)(t.em,{children:"processors"})," installed. They are\nresponsible for receiving unprocessed entities that the catalog decided are due\nfor processing, and then running that data through a number of processing\nstages, mutating the entity and emitting auxiliary data about it. When all of\nthat is done, the catalog takes all of that information and stores it as the\nprocessed entity, and errors and relations to other entities separately. Then,\nthe catalog checks to see what entities are touched by that output, and triggers\nthe final assembly of those (see Stitching below)."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Processing overview",src:n(736652).Z+"",width:"442",height:"451"})}),"\n",(0,i.jsx)(t.p,{children:"Entities are always processed one by one, but all of your catalog service hosts\ncollaborate in doing so to distribute the load. Note how each processor can\ncontribute to one or more of the fixed steps in the processing pipeline. First\nall of the processors' contributions to one step are run in the order that the\nprocessors were registered, then all of their contributions to the next step in\nthe same order, and so on."}),"\n",(0,i.jsxs)(t.p,{children:["Each step has the opportunity to optionally modify the entity, and to optionally\nemit other information. For example, the processor might look at information in\nthe ",(0,i.jsx)(t.code,{children:"spec"})," field of the entity, and emit relations that correspond to those\ndeclarations. If the processor emits an entity, then that entity gets stored\nverbatim with a timestamp saying that it, too, should be processed as soon as\npossible. If errors are emitted, then that signals that something is wrong with\nthe entity and that it should not replace whatever previously error-free version\nwe had among the final entities. If relations are emitted, then they are put in\na dedicated relations table to be picked up by the stitching process below."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Optional low level detail note: When entities are emitted, the catalog keeps\ntrack of the edges between the emitting entity and the ones emitted. This\nhappens behind the scenes, hidden from the outside, and is used to form a\ngraph. This is ",(0,i.jsx)(t.em,{children:"not"})," the same thing as relations! The purpose of these edges,\nis to be able to detect when an entity becomes orphaned (see below), and to be\nable to perform eager deletions throughout the graph when a root is explicitly\nunregistered and nothing else is keeping lower nodes alive. We will talk more\nabout orphaning and deletions later on in this article."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"When the final step has completed, and no errors were encountered, the processed\nentity and all of the relations are finally persisted in the database. Then the\ncatalog considers this entity, and all of the entities it had relations to,\nsubject for stitching."}),"\n",(0,i.jsx)(t.p,{children:"It is worth noting here that the processing does not lead to deletion or\nunregistration of entities; it can only call new entities into existence or\nupdate entities that it has previously called into existence. More about that\nlater."}),"\n",(0,i.jsx)(t.h2,{id:"stitching",children:"Stitching"}),"\n",(0,i.jsx)(t.p,{children:"Stitching finalizes the entity, by gathering all of the output from the previous\nsteps and merging them into the final object which is what is visible from the\ncatalog API. As the final entity itself gets updated, the stitcher makes sure\nthat the search table gets refreshed accordingly as well."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Note: The search table mentioned here is not related to the core Search\nfeature of Backstage. It's rather the table that backs the ability to filter\ncatalog API query results."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Stitching overview",src:n(662767).Z+"",width:"512",height:"542"})}),"\n",(0,i.jsx)(t.p,{children:"The diagram shows how the stitcher reads from several sources:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The processed entity, as returned from the processing step"}),"\n",(0,i.jsx)(t.li,{children:"The errors, if any, that were emitted by the processing step"}),"\n",(0,i.jsxs)(t.li,{children:["All relations that were emitted by the processing step, as well as any\nrelations emitted by ",(0,i.jsx)(t.em,{children:"other"})," entity processing steps that happen to point at\nthe current entity"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The last part is noteworthy: This is how the stitcher is able to collect all of\nthe relation edges, both incoming and outgoing, no matter who produced them."}),"\n",(0,i.jsx)(t.p,{children:"The stitching is currently a fixed process, that cannot be modified or extended.\nThis means that any modifications you want to make on the final result, has to\nhappen during ingestion or processing."}),"\n",(0,i.jsx)(t.h2,{id:"errors",children:"Errors"}),"\n",(0,i.jsx)(t.p,{children:"Errors during the ingestion and processing of entities can happen in a variety\nof ways, and they may happen at a far later point in time than when they were\nregistered. For example, a registered file may get deleted in the remote system,\nor the user may accidentally change the file contents in such a way that they\ncannot be parsed successfully, etc."}),"\n",(0,i.jsx)(t.p,{children:"There are two main ways that these errors are surfaced."}),"\n",(0,i.jsx)(t.p,{children:"First, the catalog backend will produce detailed logs that should contain\nsufficient information for a reader to find the causes for errors. Since these\nlogs are typically not easily found by end users, this can mainly be a useful\ntool for Backstage operators who want to debug problems either with statically\nregistered entities that are under their control, or to help end users find\nproblems."}),"\n",(0,i.jsxs)(t.p,{children:["Second, for most classes of errors, the entity itself will contain a status\nfield that describes the problem. The contents of this field is shown at the top\nof your entity page in Backstage, if you have placed the corresponding error\ncallout component (",(0,i.jsx)(t.code,{children:"EntityProcessingErrorsPanel"}),") there."]}),"\n",(0,i.jsx)(t.p,{children:"We are still working to improve the surfacing and observability around\nprocessing loop errors."}),"\n",(0,i.jsx)(t.h2,{id:"orphaning",children:"Orphaning"}),"\n",(0,i.jsx)(t.p,{children:"As mentioned earlier, entities internally form a graph. The edges go from\nprocessed parent entities, to child entities emitted while processing the\nparent."}),"\n",(0,i.jsxs)(t.p,{children:["The processing loop runs continuously, so these edges are reconsidered over\ntime. If processing a parent entity no longer emits a given child entity, then\nthat former edge is severed. If that child has no other edges pointing at it\neither, it becomes ",(0,i.jsx)(t.em,{children:"orphaned"}),". The end result is as follows:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The stitching process injects a ",(0,i.jsx)(t.code,{children:"backstage.io/orphan: 'true'"})," annotation on\nthe child entity."]}),"\n",(0,i.jsxs)(t.li,{children:["The child entity is ",(0,i.jsx)(t.em,{children:"not"}),' removed from the catalog, but stays around until\nexplicitly deleted via the catalog API, or "reclaimed" by the original parent\nor another parent starting to reference it.']}),"\n",(0,i.jsx)(t.li,{children:"The catalog page in Backstage for the child entity detects the new annotation\nand informs users about the orphan status."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Orphaning can occur in several different scenarios."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'If a catalog-info YAML file is moved from one place to another in the version\ncontrol system without updating the registration in the catalog, it will\neffectively become orphaned "by" that registered location'}),"\n",(0,i.jsxs)(t.li,{children:["If the user edits a corresponding parent catalog-info YAML file removing the\nentity's entry - for example in the case of a ",(0,i.jsx)(t.code,{children:"Location"})," parent entity,\norphaning can happen if editing or removing the ",(0,i.jsx)(t.code,{children:"target"}),"/",(0,i.jsx)(t.code,{children:"targets"})," lines\npointing to the file containing the child entity."]}),"\n",(0,i.jsxs)(t.li,{children:["Another common cause is large batch processors such as the ones that crawl\nthrough remote systems looking for entities, no longer finding something that\nit used to find before. Maybe the data was moved, or deleted, in the remote\nsystem. So for example when a person leaves the company an LDAP org discovery\nprocessor might leave an orphaned ",(0,i.jsx)(t.code,{children:"User"})," entity behind. Note that this only\napplies to processors - ingestion that happens using entity providers work\ndifferently, described below."]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Note that removing a file, or accidentally corrupting a file so that it cannot\nbe read successfully, does ",(0,i.jsx)(t.em,{children:"not"})," lead to orphaning. Hard errors, including the\ninability to find or read a distinct remote, are marked as such on the entity\nto inform the owner that something is wrong. But processing and other\nbehaviors continue as usual."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The reason that the orphaning mechanism exists instead of having an eager\ndeletion triggered, is safety. Scenarios like these can happen purely by\naccident, due to the asynchronous nature of the system and the fallible nature\nof humans. In particular when external systems start consuming and relying on\nthe catalog, there could be substantial consequences to suddenly dropping\nentities without explicit owner consent. The catalog therefore takes the stance\nthat entities that often were added by direct user action should also be deleted\nonly by direct user action."}),"\n",(0,i.jsx)(t.p,{children:'It is possible to use the catalog API to build automated "reaper" systems that\nfinally delete entities that are orphaned. This is however not something that\'s\nprovided out of the box.'}),"\n",(0,i.jsx)(t.h2,{id:"implicit-deletion",children:"Implicit Deletion"}),"\n",(0,i.jsxs)(t.p,{children:["Entity providers - not processors - are subject to ",(0,i.jsx)(t.em,{children:"eager"})," deletion of entities,\nwhich may trigger the implicit deletion of more than just the entity you thought\nyou were deleting. This concept is explained here."]}),"\n",(0,i.jsxs)(t.p,{children:['Recall that all entity providers manage a private "bucket" of entities, as\ndescribed in the ',(0,i.jsx)(t.a,{href:"/docs/features/software-catalog/external-integrations",children:"External integrations"})," article. They\ncan perform some operations on those entities, including additions, updates, and\ndeletions. Entity additions/updates are subject to the regular processing loops,\nwhich means that bucket entities may end up forming roots of an entire graph of\nentities that are emitted by those processors as they recursively work they way\nthrough the bucket contents and its descendants."]}),"\n",(0,i.jsxs)(t.p,{children:["When a provider issues a deletion of an entity in its bucket, that entity as\nwell as ",(0,i.jsx)(t.em,{children:"the entire tree of entities processed out of it"}),", if any, are\nconsidered for immediate deletion. Note \"considered\" - they are deleted if and\nonly if they would otherwise have become orphaned (no other parent entities\nemitting them). Since the graph of entities is not strictly a tree, multiple\nroots may actually end up indirectly referencing a node farther down in the\ngraph. If that's the case, that node won't go away until all such roots go away."]}),"\n",(0,i.jsx)(t.p,{children:"URLs to yaml files that you register using either the Create button or add to\nyour app-config, are both handled by entity providers. That means that this\nimplicit deletion mechanism comes into play in some everyday circumstances.\nLet's illustrate."}),"\n",(0,i.jsxs)(t.p,{children:["Imagine that you have a monorepo, with a single ",(0,i.jsx)(t.code,{children:"Location"})," entity in a\ncatalog-info file at the root, and that entity points to three other\ncatalog-info files in the repo with a ",(0,i.jsx)(t.code,{children:"Component"})," entity in each one."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"/\n  feature_one/\n    catalog-info.yaml     <- kind: Component\n  feature_two/\n    catalog-info.yaml     <- kind: Component\n  feature_three/\n    catalog-info.yaml     <- kind: Component\n  catalog-info.yaml       <- kind: Location\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If you register the root ",(0,i.jsx)(t.code,{children:"Location"})," entity, the actual effect is that ",(0,i.jsx)(t.em,{children:"five"}),"\nentities appear in the catalog. First, one that is named ",(0,i.jsx)(t.code,{children:"generated-"}),'-something,\nwhich corresponds to the registered URL itself. That\'s the one that the provider\nhas put in its "bucket". Then, as processing loops chug along, the ',(0,i.jsx)(t.code,{children:"Location"}),"\nentity you pointed to appears as a child of that, and then the three ",(0,i.jsx)(t.code,{children:"Component"}),"\nentities appear in turn as children of the ",(0,i.jsx)(t.code,{children:"Location"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["As an end user of the Backstage interface, you may now want to delete one of the\nthree ",(0,i.jsx)(t.code,{children:"Component"})," entities. You do that by visiting the three-dots menu in the\ntop right of an entity view. The popup dialog that appears will inform you that\nactually this entity belongs to a certain root, and that you may want to remove\nthat root instead (which corresponds to unregistering the originally registered\nURL). If you choose to do so, ",(0,i.jsx)(t.em,{children:"all"})," of the aforementioned five entities will\nactually be deleted in the same operation."]}),"\n",(0,i.jsxs)(t.p,{children:["If you did not want to perform this aggressive pruning, you might have instead\nchosen to remove one of the ",(0,i.jsx)(t.code,{children:"target"})," rows of your ",(0,i.jsx)(t.code,{children:"Location"})," catalog-info file,\nand then deleted the catalog-info file that contained the ",(0,i.jsx)(t.code,{children:"Component"})," you wanted\nto get rid of. Now the catalog would be left with an orphaned component, and you\nwould instead be able to use the explicit deletion (see below) to delete that\nsingle component."]}),"\n",(0,i.jsx)(t.h2,{id:"explicit-deletion",children:"Explicit Deletion"}),"\n",(0,i.jsx)(t.p,{children:"The catalog and its REST API also permits direct deletion of individual\nentities. This makes sense to do on orphaned entities; entities that aren't\nbeing actively kept up to date by any parent entities. The popup interface under\nthe three-dots menu option of entity views does offer this option, and the\norphaned status can be seen in an info box at the top of the entity's overview\npage."}),"\n",(0,i.jsx)(t.p,{children:"However, if you were to try to do an explicit depletion on an entity that's\nbeing kept actively updated by a parent entity, it would just reappear again\nshortly thereafter when the processing loops reconsider the parent entity that's\nstill in there."})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},563966:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/life-of-an-entity_ingestion-e27dc42161836b86e63ddcde19b5bf2b.svg"},152867:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/life-of-an-entity_overview-ebdcd872ed5859928583a6660b983493.svg"},736652:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/life-of-an-entity_processing-6b46732e0191cabd850e7266190b7a8b.svg"},662767:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/life-of-an-entity_stitching-ca7c0d806d6265433e5066a26f9533f6.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var r,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var h in r=Object(arguments[l]))n.call(r,h)&&(s[h]=r[h]);if(t){a=t(r);for(var c=0;c<a.length;c++)i.call(r,a[c])&&(s[a[c]]=r[a[c]])}}return s}},371426:(e,t,n)=>{n(862525);var i=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;o=r("react.element"),t.Fragment=r("react.fragment")}var a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var i,r={},h=null,c=null;for(i in void 0!==n&&(h=""+n),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:o,type:e,key:h,ref:c,props:r,_owner:a.current}}t.jsx=h,t.jsxs=h},541535:(e,t,n)=>{var i=n(862525),o=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,l=60112;t.Suspense=60113;var h=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),r=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),a=d("react.provider"),s=d("react.context"),l=d("react.forward_ref"),t.Suspense=d("react.suspense"),h=d("react.memo"),c=d("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function m(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var v=b.prototype=new m;v.constructor=b,i(v,y.prototype),v.isPureReactComponent=!0;var w={current:null},x=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var i,r={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,i)&&!j.hasOwnProperty(i)&&(r[i]=t[i]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var h=Array(l),c=0;c<l;c++)h[c]=arguments[c+2];r.children=h}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===r[i]&&(r[i]=l[i]);return{$$typeof:o,type:e,key:a,ref:s,props:r,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case r:l=!0}}if(l)return a=a(l=e),e=""===i?"."+E(l,0):i,Array.isArray(a)?(n="",null!=e&&(n=e.replace(T,"$&/")+"/"),S(a,t,n,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(l=0,i=""===i?".":i+":",Array.isArray(e))for(var h=0;h<e.length;h++){var c=i+E(s=e[h],h);l+=S(s,t,n,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),h=0;!(s=e.next()).done;)l+=S(s=s.value,t,n,c=i+E(s,h++),a);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function I(e,t,n){if(null==e)return e;var i=[],o=0;return S(e,i,"","",(function(e){return t.call(n,e,o++)})),i}function O(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function P(){var e=C.current;if(null===e)throw Error(p(321));return e}var A={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:i};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var r=i({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var h=e.type.defaultProps;for(c in t)x.call(t,c)&&!j.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==h?h[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){h=Array(c);for(var d=0;d<c;d++)h[d]=arguments[d+2];r.children=h}return{$$typeof:o,type:e.type,key:a,ref:s,props:r,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>r});var i=n(667294);const o=i.createContext({});function r(e){const t=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:r(e),i.createElement(o.Provider,{value:s},t)}}}]);