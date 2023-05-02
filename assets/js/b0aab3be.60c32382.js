/*! For license information please see b0aab3be.60c32382.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[944855],{675251:(e,t,o)=>{o(727418);var s=o(667294),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),t.Fragment=a("react.fragment")}var r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var s,a={},d=null,h=null;for(s in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,s)&&!c.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:d,ref:h,props:a,_owner:r.current}}t.jsx=d,t.jsxs=d},785893:(e,t,o)=>{e.exports=o(675251)},420901:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=o(785893),n=o(511151);const a={title:"Introducing the TechDocs Addon Framework",author:"Gary Niemen, Spotify",authorURL:"https://github.com/garyniemen/",authorImageURL:"https://avatars.githubusercontent.com/u/65337273?v=4"},r=void 0,i={permalink:"/blog/2022/05/13/techdocs-addon-framework",source:"@site/blog/2022-05-13-techdocs-addon-framework.mdx",title:"Introducing the TechDocs Addon Framework",description:"This blog post is co-authored by Eric Peterson (@iamEAP), Spotify.",date:"2022-05-13T00:00:00.000Z",formattedDate:"May 13, 2022",tags:[],readingTime:2.335,hasTruncateMarker:!0,authors:[{name:"Gary Niemen, Spotify",url:"https://github.com/garyniemen/",imageURL:"https://avatars.githubusercontent.com/u/65337273?v=4"}],frontMatter:{title:"Introducing the TechDocs Addon Framework",author:"Gary Niemen, Spotify",authorURL:"https://github.com/garyniemen/",authorImageURL:"https://avatars.githubusercontent.com/u/65337273?v=4"},unlisted:!1,prevItem:{title:"Releasing Backstage Search 1.0",permalink:"/blog/2022/07/19/releasing-backstage-search-1.0"},nextItem:{title:"New release: Backstage 1.0",permalink:"/blog/2022/03/17/backstage-1.0"}},c={authorsImageUrls:[void 0]},d=[];function h(e){const t=Object.assign({p:"p",em:"em",a:"a",img:"img",h1:"h1",ul:"ul",li:"li"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["This blog post is co-authored by Eric Peterson (",(0,s.jsx)(t.a,{href:"https://github.com/iamEAP",children:"@iamEAP"}),"), Spotify."]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"backstage header",src:o(174933).Z+"",width:"960",height:"540"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"TL;DR:"})," Introducing the TechDocs Addon Framework \u2014 a way for us all to contribute and share additional features, TechDocs Addons, on top of the base docs-like-code experience."]}),"\n","\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/",children:"TechDocs"})," is a centralized platform for publishing, viewing, and discovering technical documentation across an entire organization. It's a solid foundation! But TechDocs doesn't solve higher order documentation needs on its own such as: How do you create and reinforce a culture of documentation? How do you build trust in the quality of technical documentation?"]}),"\n",(0,s.jsxs)(t.p,{children:["To address this need, we\u2019re proud to introduce the ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/9636",children:"TechDocs Addon Framework"})," \u2014 a way for us all to contribute and share additional features, TechDocs Addons, on top of the base docs-like-code experience. Using TechDocs Addons, you can customize the TechDocs experience to address some of these higher order needs."]}),"\n",(0,s.jsx)(t.h1,{id:"open-source-addons-from-spotify",children:"Open source Addons from Spotify"}),"\n",(0,s.jsx)(t.p,{children:"We plan to open source many of the TechDocs Addons that we use at Spotify. The first Addon we open sourced is ReportIssue, which you can start using today. ReportIssue enables you to highlight text on a page and quickly raise a templated issue for that text, in your version control system (currently supports GitHub and GitLab). The following images depict this Addon in practice."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"techdocs-addon1",src:o(341154).Z+"",width:"512",height:"192"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"techdocs-addon2",src:o(925433).Z+"",width:"512",height:"268"})}),"\n",(0,s.jsx)(t.p,{children:"Other Addons coming soon include a Stack Overflow card to surface relevant questions and answers and an Issue Counter."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"techdocs-addon3",src:o(365747).Z+"",width:"248",height:"321"})}),"\n",(0,s.jsx)(t.p,{children:"We encourage you to use Addons that we open source and contribute Addons of your own as you solve technical documentation problems arising in your company. We can\u2019t wait to see what you come up with!"}),"\n",(0,s.jsx)(t.p,{children:"Here are some resources to help you get started with new TechDocs Addons:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/addons#installing-and-using-addons",children:"Installing and using Addons"}),": add an existing TechDocs Addon to your Backstage App"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/addons#creating-an-addon",children:"Creating an Addon"}),": contribute a new Addon for others to use"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/addons",children:"TechDocs Addon page"}),": read everything you need to know about TechDocs Addons"]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsx)(t.p,{children:"At present, the TechDocs Addon Framework is focused on frontend experiences only. We know what\u2019s available now is a solid foundation, but based on our experience developing and maintaining Addons over several years, we know there\u2019s more to be done."}),"\n",(0,s.jsx)(t.p,{children:"One such pattern is the occasional need for Addons to retrieve or compute data that is not easily accessible. Examples of these at Spotify are Last Updated and Top Contributors. Seemingly simple, these Addons require the ability to run non-trivial git commands to determine when documentation itself was last updated, and by whom."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"techdocs-addon5",src:o(357133).Z+"",width:"298",height:"74"})}),"\n",(0,s.jsxs)(t.p,{children:["This next step is a bit more tricky and we would like to work with you all to make it happen. Take a look at ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/11110",children:"this issue"})," in the GitHub repo, let us know what you think, and feel free to get involved."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},174933:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/techdocs-addon-header-bd1f1bfe1225c1b1b749839deb82ad7f.gif"},341154:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/techdocs-addon1-c2d6e00eda588dca1c65d5b6fc40893f.png"},925433:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/techdocs-addon2-d49f246c8e9e5dc286c32a904a1264c9.png"},365747:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/techdocs-addon3-8bf8754967732f4d6b8b602afa6acd48.png"},357133:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/techdocs-addon5-f2ff977f962f132fdff42f813079bf03.png"},511151:(e,t,o)=>{o.d(t,{Zo:()=>i,ah:()=>a});var s=o(667294);const n=s.createContext({});function a(e){const t=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:o}){let i;return i=o?"function"==typeof e?e({}):e||r:a(e),s.createElement(n.Provider,{value:i},t)}}}]);