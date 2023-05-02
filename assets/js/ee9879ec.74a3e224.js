/*! For license information please see ee9879ec.74a3e224.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[6546],{675251:(e,t,o)=>{o(727418);var n=o(667294),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;a=i("react.element"),t.Fragment=i("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,o){var n,i={},h=null,d=null;for(n in void 0!==o&&(h=""+o),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:h,ref:d,props:i,_owner:s.current}}t.jsx=h,t.jsxs=h},785893:(e,t,o)=>{e.exports=o(675251)},295627:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=o(785893),a=o(511151);const i={title:"Announcing TechDocs: Spotify\u2019s docs-like-code plugin for Backstage",author:"Gary Niemen, Spotify",authorURL:"https://github.com/garyniemen"},s=void 0,r={permalink:"/blog/2020/09/08/announcing-tech-docs",source:"@site/blog/2020-09-08-announcing-tech-docs.mdx",title:"Announcing TechDocs: Spotify\u2019s docs-like-code plugin for Backstage",description:"Since we open sourced Backstage, one of the most requested features has been for a technical documentation plugin. Well, good news. The first open source version of TechDocs is here. Now let\u2019s start collaborating and making it better, together.",date:"2020-09-08T00:00:00.000Z",formattedDate:"September 8, 2020",tags:[],readingTime:10.965,hasTruncateMarker:!0,authors:[{name:"Gary Niemen, Spotify",url:"https://github.com/garyniemen"}],frontMatter:{title:"Announcing TechDocs: Spotify\u2019s docs-like-code plugin for Backstage",author:"Gary Niemen, Spotify",authorURL:"https://github.com/garyniemen"},unlisted:!1,prevItem:{title:"Backstage has been accepted into the CNCF Sandbox",permalink:"/blog/2020/09/23/backstage-cncf-sandbox"},nextItem:{title:"Announcing Backstage Software Templates",permalink:"/blog/2020/08/05/announcing-backstage-software-templates"}},c={authorsImageUrls:[void 0]},h=[{value:"Okay, let\u2019s start collaborating",id:"okay-lets-start-collaborating",level:2},{value:"The TechDocs story",id:"the-techdocs-story",level:2},{value:"Key problem areas that we are solving",id:"key-problem-areas-that-we-are-solving",level:2},{value:"Stuck to unstuck",id:"stuck-to-unstuck",level:3},{value:"Feedback loops",id:"feedback-loops",level:3},{value:"Trust",id:"trust",level:3},{value:"Discoverability and search",id:"discoverability-and-search",level:3},{value:"Use case variations",id:"use-case-variations",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Code-like-docs",id:"code-like-docs",level:3},{value:"Golden Paths",id:"golden-paths",level:3}];function d(e){const t=Object.assign({p:"p",a:"a",img:"img",h2:"h2",ul:"ul",li:"li",h3:"h3",hr:"hr"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Since we ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog/2020/03/16/announcing-backstage",children:"open sourced Backstage"}),", one of the most requested features has been for a technical documentation plugin. Well, good news. The first open source version of TechDocs is here. Now let\u2019s start collaborating and making it better, together."]}),"\n",(0,n.jsx)("iframe",{width:"780",height:"440",src:"https://www.youtube.com/embed/mOLCgdPw1iA",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n","\n",(0,n.jsx)(t.p,{children:"Internally, we call it TechDocs. It\u2019s the most used plugin at Spotify by far \u2014 accounting for about 20% of our Backstage traffic (even though it is just one of 130+ plugins). Its popularity is evidence of something simple: We made documentation so easy to create, find, and use \u2014 people actually use it."}),"\n",(0,n.jsx)(t.p,{children:"We are quite sure the main reason for the success of TechDocs is our docs-like-code approach \u2014 engineers write their technical documentation in Markdown files that live together with the code. During CI, a documentation site is created using MkDocs, and all sites are rendered centrally in a Backstage plugin. On top of the static documentation, we incorporate additional metadata about the documentation site \u2014 such as owner, open GitHub Issues, Slack support channel, and Stack Overflow Enterprise tags."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"available-templates",src:o(596906).Z+"",width:"1726",height:"709"})}),"\n",(0,n.jsx)(t.p,{children:"But this is just one way to do it. Today we\u2019re most excited for what the open version of TechDocs can become."}),"\n",(0,n.jsx)(t.h2,{id:"okay-lets-start-collaborating",children:"Okay, let\u2019s start collaborating"}),"\n",(0,n.jsxs)(t.p,{children:["If you go to ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins",children:"GitHub"})," now, you\u2019ll find everything you need to start collaborating with us to build out the docs-like-code Backstage plugin \u2014 we\u2019ll call it TechDocs in the open as well."]}),"\n",(0,n.jsxs)(t.p,{children:["You\u2019ll find the code in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs",children:"techdocs"})," (frontend) and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs-backend",children:"techdocs-backend"}),". (There are also two separate packages ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/techdocs-cli",children:"techdocs-cli"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/techdocs-container",children:"techdocs-container"}),".)"]}),"\n",(0,n.jsxs)(t.p,{children:["You\u2019ll find issues to work on in the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues?q=is%3Aissue+is%3Aopen+label%3A%22docs-like-code%22+label%3A%22help+wanted%22",children:"issues queue"}),", typically starting with TechDocs: and labeled with docs-like-code, some labeled good first issue. Feel free to add your own issues, of course."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"available-templates",src:o(82003).Z+"",width:"871",height:"173"})}),"\n",(0,n.jsx)(t.p,{children:"What we have on GitHub so far is a first iteration of TechDocs that you can use end-to-end \u2014 in other words, from docs written in Markdown in GitHub to a published site on Backstage."}),"\n",(0,n.jsx)(t.p,{children:"More specifically, with this first iteration, you can:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Run TechDocs locally and read documentation."}),"\n",(0,n.jsx)(t.li,{children:"Configure your entity (e.g. service, website) so that Backstage builds your documentation and serves it in TechDocs. Documentation is displayed on the Docs tab in the Service Catalog and on its own page."}),"\n",(0,n.jsx)(t.li,{children:"Get documentation set up for free in your project when you create a new component out of one of the non-experimental templates (labeled with recommended). If you are looking for a standalone documentation project, use the docs-template."}),"\n",(0,n.jsx)(t.li,{children:"Choose your own storage solution for the documentation."}),"\n",(0,n.jsx)(t.li,{children:"Define your own API to interface with your documentation solution."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For a full overview, including getting started instructions, check out our ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/",children:"TechDocs Documentation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"But before you go there, let me tell you a bit about the TechDocs story \u2014 and why we believe TechDocs is such a powerful yet simple solution for great documentation."}),"\n",(0,n.jsx)(t.h2,{id:"the-techdocs-story",children:"The TechDocs story"}),"\n",(0,n.jsx)(t.p,{children:"Here is the TechDocs story. It\u2019s not an uncommon one (we have learned from many other companies)."}),"\n",(0,n.jsx)(t.p,{children:"About a year and a half ago, we conducted a company-wide productivity survey. The third largest problem according to all our engineers? Not being able to find the technical information they needed to do their work. And it\u2019s not surprising. There was no standard way to produce and consume technical documentation, so teams were going their own way \u2014 using Confluence, Google Docs, README files, custom built websites, GitHub Pages, and so on and on. And those searching for information were left to hunt for it in all those different places until they found what they were looking for (if they ever did). Worse, if you did happen to find the documentation that you needed, there was no way to know whether the information was up-to-date or correct. In other words, there was no way to know whether you could trust what you found. We did have technical writers at the company, but they were mostly scattered across the company solving documentation problems within their own particular domain."}),"\n",(0,n.jsx)(t.p,{children:"So this is the fertile soil on which TechDocs was built."}),"\n",(0,n.jsx)(t.p,{children:"After a Hack Week implementation attracted interest from high up in the company, we formed a cross-functional team made up of technical writers and engineers with the mission to solve internal technical documentation at Spotify. And we started to build TechDocs. We went for a docs-like-code approach, fiercely optimizing for engineers and engineering workflows. We also went for an opinionated approach, telling everybody: This is the standard way to do technical documentation at Spotify. The sense was that engineers appreciated a documentation solution that was in line with their workflow and, after all the frustration of multiple tools, were relieved to be told \u201cthis is the way to do it\u201d."}),"\n",(0,n.jsxs)(t.p,{children:["For more information about this journey, take a look at my 20-minute talk from DevRelCon London from last December: ",(0,n.jsx)(t.a,{href:"https://www.linkedin.com/posts/garyniemen_how-we-are-solving-internal-technical-documentation-activity-6646078605594030080-4L31",children:"The Hero\u2019s Journey: How we are solving internal technical documentation at Spotify"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"key-problem-areas-that-we-are-solving",children:"Key problem areas that we are solving"}),"\n",(0,n.jsx)(t.p,{children:"We have come a long way, fast \u2014 both in our implementation and in our thinking. Here are some of the key problem areas that we are addressing. Note that they are in various stages of implementation, and we won\u2019t be able to release everything within our minimum plugin. In fact, see this as an appetite taster. What we hope is that we can build together."}),"\n",(0,n.jsx)(t.h3,{id:"stuck-to-unstuck",children:"Stuck to unstuck"}),"\n",(0,n.jsx)(t.p,{children:"Very early on, we decided that the main problem we were trying to solve was to help engineers (when using technical documentation) go from stuck to unstuck, and fast. This became our guiding principle. Is what we are building helping engineers get unstuck faster? From this, it follows that we need to promote quality documentation on the one hand, and provide a high level of discoverability on the other. One without the other is not going to cut it."}),"\n",(0,n.jsx)(t.h3,{id:"feedback-loops",children:"Feedback loops"}),"\n",(0,n.jsx)(t.p,{children:"What we want to build is a thriving community of technical documentation creators, contributors, and readers. We want this because, we believe, this is the way to drive up the quality of the documentation. More readers, more feedback, more doc updates. And driving up the quality of the corpus of technical documentation leads to trust which in turn leads to more engagement and, hence, more of a thriving community."}),"\n",(0,n.jsx)(t.p,{children:"To get this working, we recognised that we need to remove \u2018friction from the system\u2019 \u2014 we need to build in efficient feedback loops. For example, help engineers get their doc site up by providing documentation improvement hints and build information as close as possible to where they are already working. And for readers, make it easy to give feedback. And then for doc site owners, ensure that they are notified when there is feedback and incentivised to make the fix."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"available-templates",src:o(302674).Z+"",width:"570",height:"174"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"available-templates",src:o(763199).Z+"",width:"1392",height:"358"})}),"\n",(0,n.jsx)(t.h3,{id:"trust",children:"Trust"}),"\n",(0,n.jsx)(t.p,{children:"How do I know whether to trust this piece of documentation? This is a question we want to be able to answer for those using technical documentation in Backstage. It\u2019s not an easy nut to crack. It is almost, one could say, the hard problem of technical documentation. For example, some might say \u2018last updated\u2019 is a key factor. But what about stable, good quality documentation that has no need to be updated? What about page views? Yes, this is a good sign that the documentation is being found and viewed, but it doesn\u2019t say anything about whether the documentation can be trusted. How about a button: Did this documentation help? This is good, but will people use it? Will we get enough data to show trust? We have lofty ambitions of one day providing a trust score on the doc site informed by a super-intelligent algorithm. But we are not there yet. For now, we have landed on surfacing when the documentation was last updated, top five contributors, the support channel, owning team, and number of open GitHub Issues. But going forward we are definitely up for solving the hard problem. We think there\u2019s much more work to be done here and look forward to seeing ideas from the community."}),"\n",(0,n.jsx)(t.h3,{id:"discoverability-and-search",children:"Discoverability and search"}),"\n",(0,n.jsx)(t.p,{children:"How to find stuff? That is another big question. As mentioned above, it\u2019s all well and good having quality documentation, but it\u2019s no use whatsoever if you can\u2019t find it. If you know what you are looking for, then you can use a search engine. If you don\u2019t know what you are looking for, then you are going to need more \u2014 like a well designed information architecture, a user friendly browse experience, and even intelligent suggestions based on your role and what you have searched for previously."}),"\n",(0,n.jsx)(t.p,{children:"In this problem area, we made use of Elasticsearch, the open source search engine that was already being used in Backstage, to implement documentation search across all documentation sites and per documentation site. In terms of discoverability, we implemented a documentation home page in Backstage that surfaces Spotify\u2019s most important documents and uses metrics to list the company\u2019s most used doc sites as well as the documentation equivalent of a \u201cyour daily mix\u201d playlist."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"available-templates",src:o(698354).Z+"",width:"720",height:"451"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"available-templates",src:o(383873).Z+"",width:"713",height:"440"})}),"\n",(0,n.jsx)(t.p,{children:"There is much more to do in the area of discoverability and search."}),"\n",(0,n.jsx)(t.h3,{id:"use-case-variations",children:"Use case variations"}),"\n",(0,n.jsx)(t.p,{children:"The standard use case for TechDocs is: One component in Backstage equals one GitHub repository, equals one doc site. This use case comes in two flavours: the repository is a code repository with docs or a docs-only repository. Then, to meet the needs of one large part of the Spotify engineering organisation that uses monorepos (multi-component repositories), we added a third use case. We built an MkDocs plugin that enabled doc site creators to include documentation from doc folders in other parts of the repository. So this use case is: One main component in Backstage equals a monorepo with distributed documentation, equals one doc site."}),"\n",(0,n.jsx)(t.p,{children:"These three use cases satisfy most of the needs, but we have had plenty of requests for additional use cases, for example, the ability to create multiple doc sites from a multi-component repository and the ability to create one doc site from documentation in multiple repositories."}),"\n",(0,n.jsx)(t.h3,{id:"metrics",children:"Metrics"}),"\n",(0,n.jsx)(t.p,{children:"There are many good arguments for standardizing the way that technical documentation is produced and consumed. One of them is metrics. If we have one way of producing technical documentation (in our case, GitHub Enterprise) and one place where it shows up (in our case, Backstage), we are in a strong position to build up metrics that help all the various stakeholders \u2014 for example, us building TechDocs, teams creating documentation sites, and engineers trying to get unstuck. Just imagine how much harder this would be if technical documentation was produced and consumed in a plethora of places, such as Confluence, Google Docs, README files, custom web sites, and GitHub Pages."}),"\n",(0,n.jsx)(t.p,{children:"One thing we have recently completed is a Manage page in Backstage for doc site owners. Here teams can see all the documentation that they own, the number of GitHub Issues per doc site or page, and last updated. We have also built a large dashboard using the open source analytics software Redash to inform our own product development process."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"available-templates",src:o(597160).Z+"",width:"1628",height:"699"})}),"\n",(0,n.jsx)(t.p,{children:"Again, there is a lot more that can be done in the area of metrics. Did I mention the trust score?"}),"\n",(0,n.jsx)(t.h3,{id:"code-like-docs",children:"Code-like-docs"}),"\n",(0,n.jsx)(t.p,{children:"Code-like-docs, what? Okay, it\u2019s just my little play on words. This is what I mean. One request that we keep getting is to be able to have code in the documentation fetched from and in sync with code in GitHub. In this way, you can avoid code in the documentation going stale. MkDocs does have an extension for this \u2014 but it has some limitations. For example, the code has to be in the /docs folder with the Markdown files. We are working on developing a wider and more flexible solution."}),"\n",(0,n.jsx)(t.h3,{id:"golden-paths",children:"Golden Paths"}),"\n",(0,n.jsxs)(t.p,{children:["At Spotify, we have the concept of ",(0,n.jsx)(t.a,{href:"https://engineering.atspotify.com/2020/08/17/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/",children:"Golden Paths"})," \u2014 one for each engineering discipline. My favourite definition of Golden Path is that it is the \u201copinionated and supported path\u201d. Each Golden Path has an accompanying Golden Path tutorial that walks you through the opinionated and supported path."]}),"\n",(0,n.jsx)(t.p,{children:"The Golden Path tutorials are Spotify\u2019s most used and important documents and have shown themselves to be the most challenging to manage within a docs-like-code environment. One reason for this is that they are long, divided into many parts, and ownership is typically spread among many different teams. We have had to make use of GitHub codeowners to handle ownership and had to create datasets and data pipelines to be able to attach GitHub Issues to the specific parts or files that a team owns. Another challenge of the Golden Path tutorials is that parts are often dependent on other parts. We are just starting to look into how we can solve these dependency challenges in order to remove friction for engineers writing tutorial documentation."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"So that\u2019s it for now. As you can see, we have come a long way AND there is much more to do. We are looking forward to continuing our docs-like-code journey out in the open with new, enthusiastic technical documentation friends."})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},698354:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/discover1-f353893f2037daf109f9a4c6da65170d.png"},383873:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/discover2-b5b73307acf05a49c6551e20057dcab6.png"},596906:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/docs-in-backstage-c608c3e76354566eabb5f14bc5e74901.png"},302674:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/feedback-loop1-ca1fc3b9c9f12a73eb3821bdf4407171.png"},763199:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/feedback-loop2-03a85962acdb9e67a628e8e2c6261e4c.png"},82003:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/github-issues-8272b0067c887896637b5e1b2a6db488.png"},597160:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/metrics-34c31f69313ee14022373925d5121248.png"},511151:(e,t,o)=>{o.d(t,{Zo:()=>r,ah:()=>i});var n=o(667294);const a=n.createContext({});function i(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function r({components:e,children:t,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||s:i(e),n.createElement(a.Provider,{value:r},t)}}}]);