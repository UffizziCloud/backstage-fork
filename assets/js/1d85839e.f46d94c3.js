/*! For license information please see 1d85839e.f46d94c3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[645861],{15185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(824246),r=n(511151);const s={id:"cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage."},c=void 0,i={unversionedId:"features/techdocs/cli",id:"features/techdocs/cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage.",source:"@site/../docs/features/techdocs/cli.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/cli",permalink:"/docs/features/techdocs/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/cli.md",tags:[],version:"current",frontMatter:{id:"cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage."},sidebar:"docs",previous:{title:"Configuring CI/CD to generate and publish TechDocs sites",permalink:"/docs/features/techdocs/configuring-ci-cd"},next:{title:"How-To guides",permalink:"/docs/features/techdocs/how-to-guides"}},a={},l=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Preview TechDocs site locally in a Backstage like environment",id:"preview-techdocs-site-locally-in-a-backstage-like-environment",level:3},{value:"Generate TechDocs site from a documentation project",id:"generate-techdocs-site-from-a-documentation-project",level:3},{value:"Publish generated TechDocs sites",id:"publish-generated-techdocs-sites",level:3},{value:"Publishing from behind a proxy",id:"publishing-from-behind-a-proxy",level:4},{value:"Migrate content for case-insensitive access",id:"migrate-content-for-case-insensitive-access",level:3},{value:"Authentication",id:"authentication",level:4},{value:"Development",id:"development",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",img:"img",h4:"h4",em:"em"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Utility command line interface for managing TechDocs sites in\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"Backstage"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/",children:"https://backstage.io/docs/features/techdocs/"})}),"\n",(0,o.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Supports local development/preview of a TechDocs site in a Backstage app."}),"\n",(0,o.jsx)(t.li,{children:"Supports generation and publishing of a documentation site in a CI/CD\nworkflow."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli --help\nUsage: techdocs-cli [options] [command]\n\nOptions:\n  -V, --version             output the version number\n  -h, --help                display help for command\n\nCommands:\n  generate|build [options]  Generate TechDocs documentation site using mkdocs.\n  publish [options]         Publish generated TechDocs site to an external storage AWS S3,\n                            Google GCS, etc.\n  serve:mkdocs [options]    Serve a documentation project locally using mkdocs serve.\n  serve [options]           Serve a documentation project locally in a Backstage app-like\n                            environment\n  help [command]            display help for command\n"})}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(t.p,{children:["You can always use ",(0,o.jsx)(t.a,{href:"https://github.com/npm/npx",children:(0,o.jsx)(t.code,{children:"npx"})})," to run the latest version\nof ",(0,o.jsx)(t.code,{children:"techdocs-cli"})," -"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx @techdocs/cli [command]\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Or you can install it using ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@techdocs/cli",children:"npm"})," -"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install -g @techdocs/cli\ntechdocs-cli [command]\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.h3,{id:"preview-techdocs-site-locally-in-a-backstage-like-environment",children:"Preview TechDocs site locally in a Backstage like environment"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli serve\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"A preview of techdocs-cli serve command",src:n(114947).Z+"",width:"1918",height:"1136"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, Docker and\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/techdocs-container",children:"techdocs-container"})," is used to\nmake sure all the dependencies are installed. However, Docker can be disabled\nwith ",(0,o.jsx)(t.code,{children:"--no-docker"})," flag."]}),"\n",(0,o.jsx)(t.p,{children:"The command starts two local servers - an MkDocs preview server on port 8000 and\na Backstage app server on port 3000. The Backstage app has a custom TechDocs API\nimplementation, which uses the MkDocs preview server as a proxy to fetch the\ngenerated documentation files and assets."}),"\n",(0,o.jsxs)(t.p,{children:["Backstage instances might differ from the provided preview app in appearance and\nbehavior. To preview documentation with a different app, use\n",(0,o.jsx)(t.code,{children:"--preview-app-bundle-path"})," with a path to the bundle of the app to use instead.\nTypically, a ",(0,o.jsx)(t.code,{children:"dist"})," or ",(0,o.jsx)(t.code,{children:"build"})," directory."]}),"\n",(0,o.jsxs)(t.p,{children:["NOTE: When using a custom ",(0,o.jsx)(t.code,{children:"techdocs"})," docker image, make sure the entry point is\nalso ",(0,o.jsx)(t.code,{children:'ENTRYPOINT ["mkdocs"]'})," or override with ",(0,o.jsx)(t.code,{children:"--docker-entrypoint"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Command reference:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'Usage: techdocs-cli serve [options]\n\nServe a documentation project locally in a Backstage app-like environment\n\nOptions:\n  -i, --docker-image <DOCKER_IMAGE>           The mkdocs docker container to use (default: "spotify/techdocs")\n  --docker-entrypoint <DOCKER_ENTRYPOINT>     Override the image entrypoint\n  --docker-option <DOCKER_OPTION...>          Extra options to pass to the docker run command, e.g. "--add-host=internal.host:192.168.11.12"\n                                              (can be added multiple times).\n  --no-docker                                 Do not use Docker, use MkDocs executable in current user environment.\n  --mkdocs-port <PORT>                        Port for MkDocs server to use (default: "8000")\n  --preview-app-bundle-path <PATH_TO_BUNDLE>  Preview documentation using a web app other than the included one.\n  --preview-app-port <PORT>                   Port where the preview will be served.\n                                              Can only be used with "--preview-app-bundle-path". (default: "3000")\n  -v --verbose                                Enable verbose output. (default: false)\n  -h, --help                                  display help for command\n'})}),"\n",(0,o.jsx)(t.h3,{id:"generate-techdocs-site-from-a-documentation-project",children:"Generate TechDocs site from a documentation project"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli generate\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Alias: ",(0,o.jsx)(t.code,{children:"techdocs-cli build"})]}),"\n",(0,o.jsxs)(t.p,{children:["The generate command uses the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs-node",children:(0,o.jsx)(t.code,{children:"@backstage/plugin-techdocs-node"})}),"\npackage from Backstage for consistency. A Backstage app can also generate and\npublish TechDocs sites if ",(0,o.jsx)(t.code,{children:"techdocs.builder"})," is set to ",(0,o.jsx)(t.code,{children:"'local'"})," in\n",(0,o.jsx)(t.code,{children:"app-config.yaml"}),". See\n",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/configuration",children:"configuration reference"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["By default, this command uses Docker and\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/techdocs-container",children:"techdocs-container"})," to make\nsure all the dependencies are installed. But it can be disabled using\n",(0,o.jsx)(t.code,{children:"--no-docker"})," flag."]}),"\n",(0,o.jsx)(t.p,{children:"Command reference:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'techdocs-cli generate --help\nUsage: techdocs-cli generate|build [options]\n\nGenerate TechDocs documentation site using MkDocs.\n\nOptions:\n  --source-dir <PATH>             Source directory containing mkdocs.yml and docs/ directory. (default: ".")\n  --output-dir <PATH>             Output directory containing generated TechDocs site. (default: "./site/")\n  --docker-image <DOCKER_IMAGE>   The mkdocs docker container to use (default: "spotify/techdocs:v1.0.3")\n  --no-pull                       Do not pull the latest docker image\n  --no-docker                     Do not use Docker, use MkDocs executable and plugins in current user environment.\n  --techdocs-ref <HOST_TYPE:URL>  The repository hosting documentation source files e.g.\n                                  url:https://ghe.mycompany.net.com/org/repo.\n                                  This value is same as the backstage.io/techdocs-ref annotation of the corresponding\n                                  Backstage entity.\n                                  It is completely fine to skip this as it is only being used to set repo_url in mkdocs.yml\n                                  if not found.\n  --etag <ETAG>                   A unique identifier for the prepared tree e.g. commit SHA. If provided it will be stored\n                                  in techdocs_metadata.json.\n  --omitTechdocsCoreMkdocsPlugin  An option to disable automatic addition of techdocs-core plugin to the mkdocs.yaml files.\n                                  Defaults to false, which means that the techdocs-core plugin is always added to the mkdocs file.\n  --legacyCopyReadmeMdToIndexMd   Attempt to ensure an index.md exists falling back to using <docs-dir>/README.md or README.md\n                                  in case a default <docs-dir>/index.md is not provided. (default: false)\n  -v --verbose                    Enable verbose output. (default: false)\n  -h, --help                      display help for command\n'})}),"\n",(0,o.jsx)(t.h3,{id:"publish-generated-techdocs-sites",children:"Publish generated TechDocs sites"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli publish --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --entity <namespace/kind/name>\n"})}),"\n",(0,o.jsxs)(t.p,{children:["After generating a TechDocs site using ",(0,o.jsx)(t.code,{children:"techdocs-cli generate"}),", use the publish\ncommand to upload the static generated files on a cloud storage (AWS/GCS) bucket\nor (Azure) container which your Backstage app can read from."]}),"\n",(0,o.jsxs)(t.p,{children:["The value for ",(0,o.jsx)(t.code,{children:"--entity"})," must be the Backstage entity which the generated\nTechDocs site belongs to. You can find the values in your Entity's\n",(0,o.jsx)(t.code,{children:"catalog-info.yaml"})," file. If namespace is missing in the ",(0,o.jsx)(t.code,{children:"catalog-info.yaml"}),",\nuse ",(0,o.jsx)(t.code,{children:"default"}),". The directory structure used in the storage bucket is\n",(0,o.jsx)(t.code,{children:"namespace/kind/name/<files>"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that the values are case-sensitive. An example for ",(0,o.jsx)(t.code,{children:"--entity"})," is\n",(0,o.jsx)(t.code,{children:"default/Component/<entityName>"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Command reference:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'Usage: techdocs-cli publish [options]\n\nPublish generated TechDocs site to an external storage AWS S3, Google GCS, etc.\n\nOptions:\n  --publisher-type <TYPE>                                       (Required always) awsS3 | googleGcs | azureBlobStorage | openStackSwift - same as techdocs.publisher.type in Backstage app-config.yaml\n  --storage-name <BUCKET/CONTAINER NAME>                        (Required always) In case of AWS/GCS, use the bucket name. In case of Azure, use container name. Same as\n                                                                techdocs.publisher.[TYPE].bucketName\n  --entity <NAMESPACE/KIND/NAME>                                (Required always) Entity uid separated by / in namespace/kind/name order (case-sensitive). Example: default/Component/myEntity\n  --legacyUseCaseSensitiveTripletPaths                          Publishes objects with cased entity triplet prefix when set (e.g. namespace/Kind/name). Only use if your TechDocs backend is configured\n                                                                the same way. (default: false)\n  --azureAccountName <AZURE ACCOUNT NAME>                       (Required for Azure) specify when --publisher-type azureBlobStorage\n  --azureAccountKey <AZURE ACCOUNT KEY>                         Azure Storage Account key to use for authentication. If not specified, you must set AZURE_TENANT_ID, AZURE_CLIENT_ID &\n                                                                AZURE_CLIENT_SECRET as environment variables.\n  --awsRoleArn <AWS ROLE ARN>                                   Optional AWS ARN of role to be assumed.\n  --awsEndpoint <AWS ENDPOINT>                                  Optional AWS endpoint to send requests to.\n  --awsProxy <HTTPS Proxy>                                      Optional Proxy to use for AWS requests.\n  --awsS3sse <AWS SSE>                                          Optional AWS S3 Server Side Encryption.\n  --awsS3ForcePathStyle                                         Optional AWS S3 option to force path style.\n  --awsBucketRootPath <AWS BUCKET ROOT PATH>                    Optional sub-directory to store files in Amazon S3\n  --osCredentialId <OPENSTACK SWIFT APPLICATION CREDENTIAL ID>  (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osSecret <OPENSTACK SWIFT APPLICATION CREDENTIAL SECRET>    (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osAuthUrl <OPENSTACK SWIFT AUTHURL>                         (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osSwiftUrl <OPENSTACK SWIFT SWIFTURL>                       (Required for OpenStack) specify when --publisher-type openStackSwift\n  --gcsBucketRootPath <GCS BUCKET ROOT PATH>                    Optional sub-directory to store files in Google cloud storage\n  --directory <PATH>                                            Path of the directory containing generated files to publish (default: "./site/")\n  -h, --help                                                    display help for command\n'})}),"\n",(0,o.jsx)(t.h4,{id:"publishing-from-behind-a-proxy",children:"Publishing from behind a proxy"}),"\n",(0,o.jsxs)(t.p,{children:["For users attempting to publish TechDocs content behind a proxy, the TechDocs CLI leverages ",(0,o.jsx)(t.code,{children:"global-agent"})," to navigate the proxy to successfully connect to that location. To enable ",(0,o.jsx)(t.code,{children:"global-agent"}),", the following variables need to be set prior to running the techdocs-cli command:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"export GLOBAL_AGENT_HTTPS_PROXY=${HTTP_PROXY}\nexport GLOBAL_AGENT_NO_PROXY=${NO_PROXY}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"migrate-content-for-case-insensitive-access",children:"Migrate content for case-insensitive access"}),"\n",(0,o.jsxs)(t.p,{children:["Prior to the beta version of TechDocs (",(0,o.jsx)(t.code,{children:"v[0.11.0]"}),"), TechDocs were stored in\nobject storage using a case-sensitive entity triplet (e.g.\n",(0,o.jsx)(t.code,{children:"default/API/name/index.html"}),"). This resulted in a limitation where that exact\ncase was required in the Backstage URL in order to read/render TechDocs content.\nAs of ",(0,o.jsx)(t.code,{children:"v[0.11.0]"})," of the TechDocs plugin, any case is allowed in the URL (e.g.\n",(0,o.jsx)(t.code,{children:"default/api/name"}),"), matching the behavior of the Catalog plugin."]}),"\n",(0,o.jsxs)(t.p,{children:["Backstage instances created with TechDocs ",(0,o.jsx)(t.code,{children:"v[0.11.0]"})," or later do not need this\ncommand. However, when upgrading to this version from an older version of\nTechDocs, the ",(0,o.jsx)(t.code,{children:"migrate"})," command can be used prior to deployment to ensure docs\nremain accessible without having to rebuild all docs."]}),"\n",(0,o.jsxs)(t.p,{children:["Prior to upgrading to ",(0,o.jsx)(t.code,{children:"v[0.11.0]"})," or greater, run this command to copy all\nassets to their lower-case triplet equivalents like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli migrate --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --verbose\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Once migrated and the upgraded version of the Backstage plugin has been\ndeployed, you can clean up the legacy, case-sensitive triplet files by\nre-running the command with the ",(0,o.jsx)(t.code,{children:"--removeOriginal"})," flag passed, which ",(0,o.jsx)(t.em,{children:"moves"}),"\n(rather than copies) the files. Note: this deletes files and is therefore a\ndestructive operation that should performed with caution."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli migrate --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --removeOriginal --verbose\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Afterward, update your TechDocs CLI to ",(0,o.jsx)(t.code,{children:"v[0.7.0]"})," to ensure further publishing\nhappens using a lower-case entity triplet."]}),"\n",(0,o.jsxs)(t.p,{children:["Note: arguments for this command largely match those of the ",(0,o.jsx)(t.code,{children:"publish"})," command,\ndepending on your chosen storage provider. Run ",(0,o.jsx)(t.code,{children:"techdocs-cli migrate --help"})," for\ndetails."]}),"\n",(0,o.jsx)(t.h4,{id:"authentication",children:"Authentication"}),"\n",(0,o.jsxs)(t.p,{children:["You need to make sure that your environment is able to authenticate with the\ntarget cloud provider. ",(0,o.jsx)(t.code,{children:"techdocs-cli"})," uses the official Node.js clients provided\nby AWS (v3), Google Cloud and Azure. You can authenticate using environment\nvariables and/or by other means (",(0,o.jsx)(t.code,{children:"~/.aws/credentials"}),", ",(0,o.jsx)(t.code,{children:"~/.config/gcloud"})," etc.)"]}),"\n",(0,o.jsx)(t.p,{children:"Refer to the Authentication section of the following documentation depending\nupon your cloud storage provider -"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-google-gcs-bucket-with-techdocs",children:"Google Cloud Storage"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-aws-s3-bucket-with-techdocs",children:"AWS S3"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-azure-blob-storage-container-with-techdocs",children:"Azure Blob Storage"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"development",children:"Development"}),"\n",(0,o.jsxs)(t.p,{children:["You are welcome to contribute to TechDocs CLI to improve it and support new\nfeatures! See the project\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/main/src/packages/techdocs-cli/README.md",children:"README"}),"\nfor more information."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},114947:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/techdocs-cli-serve-preview-aa54f38162b18cee2747ce73121b0588.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(e,r){for(var s,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in s=Object(arguments[a]))n.call(s,l)&&(i[l]=s[l]);if(t){c=t(s);for(var d=0;d<c.length;d++)o.call(s,c[d])&&(i[c[d]]=s[c[d]])}}return i}},371426:(e,t,n)=>{n(862525);var o=n(827378),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;r=s("react.element"),t.Fragment=s("react.fragment")}var c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,s={},l=null,d=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,o)&&!a.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:c.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var o=n(862525),r=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,i=60110,a=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;r=u("react.element"),s=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),c=u("react.provider"),i=u("react.context"),a=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var v=b.prototype=new y;v.constructor=b,o(v,m.prototype),v.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,s={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,o)&&!k.hasOwnProperty(o)&&(s[o]=t[o]);var a=arguments.length-2;if(1===a)s.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===s[o]&&(s[o]=a[o]);return{$$typeof:r,type:e,key:c,ref:i,props:s,_owner:j.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var S=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,o,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case s:a=!0}}if(a)return c=c(a=e),e=""===o?"."+A(a,0):o,Array.isArray(c)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),O(c,t,n,"",(function(e){return e}))):null!=c&&(T(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+e)),t.push(c)),1;if(a=0,o=""===o?".":o+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=o+A(i=e[l],l);a+=O(i,t,n,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(i=e.next()).done;)a+=O(i=i.value,t,n,d=o+A(i,l++),c);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function E(e,t,n){if(null==e)return e;var o=[],r=0;return O(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function D(){var e=_.current;if(null===e)throw Error(p(321));return e}var P={ReactCurrentDispatcher:_,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var s=o({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=j.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)x.call(t,d)&&!k.hasOwnProperty(d)&&(s[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)s.children=n;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:r,type:e.type,key:c,ref:i,props:s,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return D().useCallback(e,t)},t.useContext=function(e,t){return D().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return D().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return D().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return D().useLayoutEffect(e,t)},t.useMemo=function(e,t){return D().useMemo(e,t)},t.useReducer=function(e,t,n){return D().useReducer(e,t,n)},t.useRef=function(e){return D().useRef(e)},t.useState=function(e){return D().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>s});var o=n(667294);const r=o.createContext({});function s(e){const t=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:s(e),o.createElement(r.Provider,{value:i},t)}}}]);