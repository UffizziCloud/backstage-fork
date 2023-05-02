/*! For license information please see 3f371f3b.7f53f9f0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[989508],{675251:(e,t,a)=>{a(727418);var s=a(667294),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),t.Fragment=o("react.fragment")}var n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,a){var s,o={},h=null,p=null;for(s in void 0!==a&&(h=""+a),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:h,ref:p,props:o,_owner:n.current}}t.jsx=h,t.jsxs=h},785893:(e,t,a)=>{e.exports=a(675251)},266335:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var s=a(785893),r=a(511151);const o={title:"Avoid upgrade surprises with Backstage Upgrade Helper",author:"Vincenzo Scamporlino, Spotify",authorURL:"https://github.com/vinzscam",authorImageURL:"https://avatars.githubusercontent.com/u/8433119?v=4"},n=void 0,i={permalink:"/blog/2022/03/04/backstage-upgrade-helper",source:"@site/blog/2022-03-04-backstage-upgrade-helper.mdx",title:"Avoid upgrade surprises with Backstage Upgrade Helper",description:"backstage header",date:"2022-03-04T00:00:00.000Z",formattedDate:"March 4, 2022",tags:[],readingTime:3.91,hasTruncateMarker:!0,authors:[{name:"Vincenzo Scamporlino, Spotify",url:"https://github.com/vinzscam",imageURL:"https://avatars.githubusercontent.com/u/8433119?v=4"}],frontMatter:{title:"Avoid upgrade surprises with Backstage Upgrade Helper",author:"Vincenzo Scamporlino, Spotify",authorURL:"https://github.com/vinzscam",authorImageURL:"https://avatars.githubusercontent.com/u/8433119?v=4"},unlisted:!1,prevItem:{title:"Backstage Turns Two!",permalink:"/blog/2022/03/16/backstage-turns-two"},nextItem:{title:"Say Hi to Backstage homepage templates!",permalink:"/blog/2022/01/25/backstage-homepage-templates"}},c={authorsImageUrls:[void 0]},h=[{value:"Upgrading Backstage was a common pain point",id:"upgrading-backstage-was-a-common-pain-point",level:2},{value:"So what is Backstage Upgrade Helper?",id:"so-what-is-backstage-upgrade-helper",level:2},{value:"To use the Upgrade Helper, follow these simple steps",id:"to-use-the-upgrade-helper-follow-these-simple-steps",level:3},{value:"Open source inspires",id:"open-source-inspires",level:2}];function p(e){const t=Object.assign({p:"p",img:"img",em:"em",a:"a",strong:"strong",h2:"h2",code:"code",h3:"h3",ol:"ol",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"backstage header",src:a(667339).Z+"",width:"1201",height:"631"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"TLDR;"})," The Spotify team recently announced ",(0,s.jsx)(t.a,{href:"https://backstage.github.io/upgrade-helper",children:"Backstage Upgrade Helper"}),": a tool that helps adopters keep their Backstage application up-to-date. ",(0,s.jsx)(t.strong,{children:"Spoiler alert"}),": this is also a hidden and heartwarming tale about the beauty of open source innovation."]}),"\n","\n",(0,s.jsx)(t.h2,{id:"upgrading-backstage-was-a-common-pain-point",children:"Upgrading Backstage was a common pain point"}),"\n",(0,s.jsxs)(t.p,{children:["Without a doubt, one of the most exciting things about Backstage is our community. Step into our daily ",(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord conversations"})," and the monthly ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=0QMQYSTKAx0",children:"Community Sessions"})," and you\u2019ll find a ton of great ideas, problem-solving, and support for one another."]}),"\n",(0,s.jsx)(t.p,{children:"During one of these discussions, we realized we all shared the same pain point \u2014 upgrading a Backstage application."}),"\n",(0,s.jsx)(t.p,{children:"The Backstage open source project is in hyper-growth mode, where dozens of pull requests are merged each day. This means adopters need to go through the upgrade process more often in order to get the latest and greatest features. The Spotify team heard a lot of feedback about how painful and manual this process was \u2014 so we decided to tackle this problem during one of our internal Hack Days."}),"\n",(0,s.jsxs)(t.p,{children:["At Spotify, we run Hack Days every month and a lot of ideas come from those sessions (in fact, the idea to open source Backstage itself ",(0,s.jsx)(t.a,{href:"https://open.spotify.com/episode/332yTwGiILGKTS7dsHCj2P",children:"was born on a Hack Day"}),"!). During a brainstorming session, we noticed that another open source community faced a similar upgrading problem years back and came up with a really good solution."]}),"\n",(0,s.jsxs)(t.p,{children:["If you have ever worked on a React Native project, you might immediately recognize what we are referring to: The ",(0,s.jsx)(t.a,{href:"https://github.com/react-native-community/upgrade-helper",children:"React Native Upgrade Helper"})," \u2014 a web tool to support React Native developers in upgrading their apps \u2014 might have saved hours of your time. It certainly saved us hours of ours. So we looked into the project details and discovered it could fulfill our Backstage needs."]}),"\n",(0,s.jsxs)(t.p,{children:["We started by creating a fork from React Native\u2019s open source project, applying a few changes on top of it to introduce Backstage support, and \u2014 ",(0,s.jsx)(t.em,{children:"ecco"})," \u2014 we had a new Backstage Upgrade Helper! In just a few days with pretty minimal effort, we created a product that would save a lot of time for the entire Backstage community. And we had fun at the same time (happy developers make happy code \ud83d\ude01 )."]}),"\n",(0,s.jsx)(t.h2,{id:"so-what-is-backstage-upgrade-helper",children:"So what is Backstage Upgrade Helper?"}),"\n",(0,s.jsx)(t.p,{children:"The Backstage Upgrade Helper tool enables adopters to easily upgrade their Backstage app by using the power of git to create a diff between different versions."}),"\n",(0,s.jsxs)(t.p,{children:["Whenever a new version of Backstage is released, the Helper scaffolds a new sample Backstage app using the ",(0,s.jsx)(t.code,{children:"backstage-create-app"})," cli utility and checks all the generated files in a specific git branch. After the branch is generated, it gets compared with all the existing ones, which results in generating specific git patches stored in specific files. By selecting the version of the current Backstage release together with the version you want to upgrade to, the UI knows which patch file needs to be picked up."]}),"\n",(0,s.jsx)(t.p,{children:"So, now you can update your Backstage application in three steps rather than manually reading the changelogs of all the Backstage modules in reverse order."}),"\n",(0,s.jsx)(t.h3,{id:"to-use-the-upgrade-helper-follow-these-simple-steps",children:"To use the Upgrade Helper, follow these simple steps"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Go to the ",(0,s.jsx)(t.a,{href:"https://backstage.github.io/upgrade-helper",children:"Backstage Upgrade Helper"})," and enter your current release and the release you would like to upgrade to."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Press ",(0,s.jsx)(t.strong,{children:"Show me how to upgrade!"})," After that, the feature spits out the changes between the two Backstage versions in a split-screen view for easy comparison."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Backstage Upgrade Helper in action",src:a(422459).Z+"",width:"1200",height:"794"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Apply the suggested changes to your source code to correctly upgrade your app to the selected Backstage version. This will let you directly migrate from the version you\u2019re currently using to the target version and skip all the intermediate steps you would have otherwise gone through manually reading all the changelogs."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://youtu.be/nYjI2j-lWEM?t=410",children:"Watch the Upgrade Helper demo"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"open-source-inspires",children:"Open source inspires"}),"\n",(0,s.jsx)(t.p,{children:"Thus far, the Backstage Upgrade Helper has gotten a lot of good feedback from the community and we\u2019re sure to see awesome contributions in the future. But all the credit behind this idea goes to the React Native community."}),"\n",(0,s.jsx)(t.p,{children:"With React Native\u2019s open source contributions, we were able to quickly solve a tough problem for the entire Backstage community. Not only did React Native\u2019s project save us time creating a new product, but it has also saved our adopters time upgrading Backstage."}),"\n",(0,s.jsx)(t.p,{children:"This is why we love working in open source. The hard work done for one community has the power to influence and inspire another community. We hope Backstage can do the same and pay it forward to other open source projects."}),"\n",(0,s.jsxs)(t.p,{children:["For more Backstage Upgrade Helper resources, check out the ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/upgrade-helper",children:"UI code"})," and the ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/upgrade-helper-diff",children:"git patches"}),"."]})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},667339:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/backstage-upgrade-helper-post-header-7644246a66a82cdaa842cecaa203d64e.png"},422459:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/backstage-upgrade-helper-ee80827e66fe95f734561313920d2c35.gif"},511151:(e,t,a)=>{a.d(t,{Zo:()=>i,ah:()=>o});var s=a(667294);const r=s.createContext({});function o(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const n={};function i({components:e,children:t,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||n:o(e),s.createElement(r.Provider,{value:i},t)}}}]);