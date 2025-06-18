(()=>{var e={};e.id=928,e.ids=[928],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7790:e=>{"use strict";e.exports=require("assert")},4770:e=>{"use strict";e.exports=require("crypto")},7702:e=>{"use strict";e.exports=require("events")},2048:e=>{"use strict";e.exports=require("fs")},2615:e=>{"use strict";e.exports=require("http")},8791:e=>{"use strict";e.exports=require("https")},9801:e=>{"use strict";e.exports=require("os")},5315:e=>{"use strict";e.exports=require("path")},5816:e=>{"use strict";e.exports=require("process")},8621:e=>{"use strict";e.exports=require("punycode")},6162:e=>{"use strict";e.exports=require("stream")},4175:e=>{"use strict";e.exports=require("tty")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},1568:e=>{"use strict";e.exports=require("zlib")},7315:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>g,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),s(885),s(2029),s(5866);var i=s(3191),n=s(8716),r=s(7922),l=s.n(r),o=s(5231),a={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>o[e]);s.d(t,a);let d=["",{children:["test",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,885)),"/Volumes/My Disk/personal project/frontend-contentful/src/app/test/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,2029)),"/Volumes/My Disk/personal project/frontend-contentful/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Volumes/My Disk/personal project/frontend-contentful/src/app/test/page.tsx"],u="/test/page",g={require:s,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/test/page",pathname:"/test",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2168:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},8459:()=>{},2145:(e,t,s)=>{Promise.resolve().then(s.bind(s,4780))},4780:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var i=s(326);s(7577);var n=s(434),r=s(5047);s(3473);let l=()=>{let e=(0,r.usePathname)();return i.jsx("nav",{className:"navigation",role:"navigation","aria-label":"Main navigation",children:i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"nav-content",children:[i.jsx(n.default,{href:"/",className:"nav-brand",children:"Landing Page Builder"}),i.jsx("ul",{className:"nav-menu",children:[{href:"/landing/page-1",label:"Page 1"},{href:"/landing/page-2",label:"Page 2"}].map(t=>i.jsx("li",{className:"nav-item",children:i.jsx(n.default,{href:t.href,className:`nav-link ${e===t.href?"active":""}`,children:t.label})},t.href))})]})})})}},2029:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a,metadata:()=>l,viewport:()=>o});var i=s(9510),n=s(5317),r=s.n(n);s(5023);let l={title:"Landing Page Builder",description:"Custom landing pages built with Contentful and Next.js",keywords:["landing page","contentful","next.js","react"],authors:[{name:"Landing Page Builder"}],robots:"index, follow",openGraph:{type:"website",locale:"en_US",url:process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000",title:"Landing Page Builder",description:"Custom landing pages built with Contentful and Next.js",siteName:"Landing Page Builder"},twitter:{card:"summary_large_image",title:"Landing Page Builder",description:"Custom landing pages built with Contentful and Next.js"}},o={width:"device-width",initialScale:1};function a({children:e}){return(0,i.jsxs)("html",{lang:"en",children:[(0,i.jsxs)("head",{children:[i.jsx("link",{rel:"icon",href:"/favicon.ico"}),i.jsx("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"}),i.jsx("link",{rel:"manifest",href:"/manifest.json"})]}),i.jsx("body",{className:r().className,children:e})]})}},885:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>l});var i=s(9510);s(1159);var n=s(6611),r=s(948);let l={title:"Contentful Test - Verify Integration",description:"Test page to verify Contentful integration"};async function o(){let e=[],t=null;try{e=await r.gc.getPages()}catch(e){t=e instanceof Error?e.message:"Unknown error occurred"}return(0,i.jsxs)(i.Fragment,{children:[i.jsx(n.Z,{}),i.jsx("main",{children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"page-header",children:[i.jsx("h1",{children:"Contentful Integration Test"}),i.jsx("p",{children:"Testing connection to Contentful CMS"})]}),t?(0,i.jsxs)("div",{className:"error-state",children:[i.jsx("h2",{children:"Connection Error"}),i.jsx("p",{children:"Failed to connect to Contentful:"}),i.jsx("p",{children:i.jsx("strong",{children:t})}),i.jsx("p",{children:"Please check your environment variables:"}),(0,i.jsxs)("ul",{children:[i.jsx("li",{children:"NEXT_PUBLIC_CONTENTFUL_SPACE_ID"}),i.jsx("li",{children:"NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN"})]})]}):(0,i.jsxs)("div",{className:"success-state",children:[i.jsx("h2",{children:"✅ Connection Successful!"}),(0,i.jsxs)("p",{children:["Found ",e.length," page(s) in Contentful:"]}),e.length>0?i.jsx("div",{className:"pages-list",children:e.map(e=>(0,i.jsxs)("div",{className:"page-item",children:[i.jsx("h3",{children:e.fields.title}),(0,i.jsxs)("p",{children:[i.jsx("strong",{children:"Slug:"})," ",e.fields.slug]}),(0,i.jsxs)("p",{children:[i.jsx("strong",{children:"Components:"})," ",e.fields.layoutConfig?.components?.length||0]}),i.jsx("a",{href:`/landing/${e.fields.slug}`,className:"btn btn-primary",children:"View Page"})]},e.sys.id))}):(0,i.jsxs)("div",{className:"empty-state",children:[i.jsx("h3",{children:"No Pages Found"}),i.jsx("p",{children:"No pages have been created in Contentful yet."}),i.jsx("p",{children:'Create a page entry with content type "page" and add some components to see them here.'})]})]})]})})]})}},6611:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});let i=(0,s(8570).createProxy)(String.raw`/Volumes/My Disk/personal project/frontend-contentful/src/components/Navigation.tsx#default`)},948:(e,t,s)=>{"use strict";s.d(t,{gc:()=>a});var i=s(7603),n=s(6451);function r(e){return e&&"object"==typeof e&&Array.isArray(e.components)&&"string"==typeof e.version&&"string"==typeof e.lastModified}function l(e){return e&&"object"==typeof e&&e.sys&&"string"==typeof e.sys.id&&"Asset"===e.sys.type&&e.fields&&"string"==typeof e.fields.title&&e.fields.file}class o{constructor(e,t){this.graphqlClient=new i.g6(`https://graphql.contentful.com/content/v1/spaces/${e}`,{headers:{authorization:`Bearer ${t}`}}),this.restClient=(0,n.e)({space:e,accessToken:t})}async getPages(){try{return(await this.restClient.getEntries({content_type:"page",include:2})).items.map(e=>({sys:{id:"string"==typeof e.sys.id?e.sys.id:"",type:"string"==typeof e.sys.type?e.sys.type:"Entry"},fields:{title:"string"==typeof e.fields.title?e.fields.title:"",slug:"string"==typeof e.fields.slug?e.fields.slug:"",layoutConfig:r(e.fields.layoutConfig)?e.fields.layoutConfig:{components:[],version:"1.0",lastModified:new Date().toISOString()},seoTitle:"string"==typeof e.fields.seoTitle?e.fields.seoTitle:void 0,seoDescription:"string"==typeof e.fields.seoDescription?e.fields.seoDescription:void 0,seoImage:l(e.fields.seoImage)?e.fields.seoImage:void 0}}))}catch(e){return console.error("Error fetching pages:",e),[]}}async getPage(e){try{let t=await this.restClient.getEntries({content_type:"page","fields.slug":e,include:2});if(t.items.length>0){let e=t.items[0];return{sys:{id:e.sys.id,type:e.sys.type},fields:{title:"string"==typeof e.fields.title?e.fields.title:"",slug:"string"==typeof e.fields.slug?e.fields.slug:"",layoutConfig:r(e.fields.layoutConfig)?e.fields.layoutConfig:{components:[],version:"1.0",lastModified:new Date().toISOString()},seoTitle:"string"==typeof e.fields.seoTitle?e.fields.seoTitle:void 0,seoDescription:"string"==typeof e.fields.seoDescription?e.fields.seoDescription:void 0,seoImage:l(e.fields.seoImage)?e.fields.seoImage:void 0}}}return null}catch(e){return console.error("Error fetching page:",e),null}}async getLandingPage(e){try{let t=await this.restClient.getEntries({content_type:"page","fields.slug":e,include:2});if(t.items.length>0){let e=t.items[0],s=r(e.fields.layoutConfig)?e.fields.layoutConfig:{components:[],version:"1.0",lastModified:new Date().toISOString()};if(s&&s.components)return{title:"string"==typeof e.fields.title?e.fields.title:"",slug:"string"==typeof e.fields.slug?e.fields.slug:"",layout:s.components,lastModified:s.lastModified,version:s.version}}return null}catch(e){return console.error("Error fetching landing page:",e),null}}async getPagesGraphQL(){let e=`
      query GetPages {
        pageCollection {
          items {
            sys {
              id
              type
            }
            fields {
              title
              slug
              layoutConfig
              seoTitle
              seoDescription
              seoImage {
                sys {
                  id
                  type
                }
                fields {
                  title
                  file {
                    url
                    details {
                      size
                      image {
                        width
                        height
                      }
                    }
                    fileName
                    contentType
                  }
                }
              }
            }
          }
        }
      }
    `;try{return(await this.graphqlClient.request(e)).pageCollection.items}catch(e){return console.error("Error fetching pages:",e),[]}}async getPageGraphQL(e){let t=`
      query GetPage($slug: String!) {
        pageCollection(where: { slug: $slug }, limit: 1) {
          items {
            sys {
              id
              type
            }
            fields {
              title
              slug
              layoutConfig
              seoTitle
              seoDescription
              seoImage {
                sys {
                  id
                  type
                }
                fields {
                  title
                  file {
                    url
                    details {
                      size
                      image {
                        width
                        height
                      }
                    }
                    fileName
                    contentType
                  }
                }
              }
            }
          }
        }
      }
    `;try{return(await this.graphqlClient.request(t,{slug:e})).pageCollection.items[0]||null}catch(e){return console.error("Error fetching page:",e),null}}async updateLayoutConfig(e,t){return console.log("Updating layout config for entry:",e,t),!0}}let a=new o("4vp0upv0ting","qUWWdjwU3oMSYlX7lhw3MvPTQIvS_SNDyShtbFgajHc")},5023:()=>{},3473:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[276,347,858,496],()=>s(7315));module.exports=i})();