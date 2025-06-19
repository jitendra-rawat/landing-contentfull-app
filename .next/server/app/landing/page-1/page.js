(()=>{var e={};e.id=674,e.ids=[674],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7790:e=>{"use strict";e.exports=require("assert")},4770:e=>{"use strict";e.exports=require("crypto")},7702:e=>{"use strict";e.exports=require("events")},2048:e=>{"use strict";e.exports=require("fs")},2615:e=>{"use strict";e.exports=require("http")},8791:e=>{"use strict";e.exports=require("https")},9801:e=>{"use strict";e.exports=require("os")},5315:e=>{"use strict";e.exports=require("path")},5816:e=>{"use strict";e.exports=require("process")},8621:e=>{"use strict";e.exports=require("punycode")},6162:e=>{"use strict";e.exports=require("stream")},4175:e=>{"use strict";e.exports=require("tty")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},1568:e=>{"use strict";e.exports=require("zlib")},1977:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>g,pages:()=>c,routeModule:()=>p,tree:()=>d}),i(211),i(2029),i(5866);var s=i(3191),n=i(8716),r=i(7922),l=i.n(r),a=i(5231),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);i.d(t,o);let d=["",{children:["landing",{children:["page-1",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,211)),"/Volumes/My Disk/personal project/frontend-contentful/src/app/landing/page-1/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,2029)),"/Volumes/My Disk/personal project/frontend-contentful/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Volumes/My Disk/personal project/frontend-contentful/src/app/landing/page-1/page.tsx"],g="/landing/page-1/page",u={require:i,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/landing/page-1/page",pathname:"/landing/page-1",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2168:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2994,23)),Promise.resolve().then(i.t.bind(i,6114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,9671,23)),Promise.resolve().then(i.t.bind(i,1868,23)),Promise.resolve().then(i.t.bind(i,4759,23))},335:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2481,23)),Promise.resolve().then(i.bind(i,4780))},8459:()=>{},4780:(e,t,i)=>{"use strict";i.d(t,{default:()=>l});var s=i(326);i(7577);var n=i(434),r=i(5047);i(3473);let l=()=>{let e=(0,r.usePathname)();return s.jsx("nav",{className:"navigation",role:"navigation","aria-label":"Main navigation",children:s.jsx("div",{className:"container",children:(0,s.jsxs)("div",{className:"nav-content",children:[s.jsx(n.default,{href:"/",className:"nav-brand",children:"Landing Page Builder"}),s.jsx("ul",{className:"nav-menu",children:[{href:"/landing/page-1",label:"Page 1"},{href:"/landing/page-2",label:"Page 2"}].map(t=>s.jsx("li",{className:"nav-item",children:s.jsx(n.default,{href:t.href,className:`nav-link ${e===t.href?"active":""}`,children:t.label})},t.href))})]})})})}},211:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d,metadata:()=>a});var s=i(9510);i(1159);var n=i(6611),r=i(2606),l=i(948);let a={title:"Landing Page 1 - Contentful + Next.js",description:"Dynamic landing page built with Contentful CMS"};async function o(){try{return await l.gc.getLandingPage("page-1")}catch(e){return console.error("Error fetching page data:",e),null}}async function d(){let e=await o();return(0,s.jsxs)(s.Fragment,{children:[s.jsx(n.Z,{}),s.jsx("main",{children:e?(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"page-header",children:(0,s.jsxs)("div",{className:"container",children:[s.jsx("h1",{children:e.title}),(0,s.jsxs)("p",{children:["Version: ",e.version," | Last Modified: ",new Date(e.lastModified).toLocaleDateString()]})]})}),s.jsx(r.Z,{components:e.layout})]}):s.jsx("div",{className:"container",children:(0,s.jsxs)("div",{className:"error-state",children:[s.jsx("h2",{children:"Page Not Found"}),s.jsx("p",{children:"This page doesn't exist in Contentful or there was an error loading it."}),s.jsx("p",{children:"Make sure you have:"}),(0,s.jsxs)("ul",{children:[s.jsx("li",{children:'Created a page entry in Contentful with slug "page-1"'}),s.jsx("li",{children:"Configured the layout with components"}),s.jsx("li",{children:"Set up the correct environment variables"})]})]})})})]})}},2029:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o,metadata:()=>l,viewport:()=>a});var s=i(9510),n=i(5317),r=i.n(n);i(5023);let l={title:"Landing Page Builder",description:"Custom landing pages built with Contentful and Next.js",keywords:["landing page","contentful","next.js","react"],authors:[{name:"Landing Page Builder"}],robots:"index, follow",openGraph:{type:"website",locale:"en_US",url:process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000",title:"Landing Page Builder",description:"Custom landing pages built with Contentful and Next.js",siteName:"Landing Page Builder"},twitter:{card:"summary_large_image",title:"Landing Page Builder",description:"Custom landing pages built with Contentful and Next.js"}},a={width:"device-width",initialScale:1};function o({children:e}){return(0,s.jsxs)("html",{lang:"en",children:[(0,s.jsxs)("head",{children:[s.jsx("link",{rel:"icon",href:"/favicon.ico"}),s.jsx("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"}),s.jsx("link",{rel:"manifest",href:"/manifest.json"})]}),s.jsx("body",{className:r().className,children:e})]})}},2606:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var s=i(9510);i(1159);var n=i(7710);i(7191);let r=({component:e})=>(0,s.jsxs)("section",{className:"hero-block",children:[e.backgroundImage&&(0,s.jsxs)("div",{className:"hero-background",children:[s.jsx(n.default,{src:e.backgroundImage.fields.file.url,alt:e.backgroundImage.fields.title,fill:!0,priority:!0,sizes:"100vw",style:{objectFit:"cover"},className:"hero-bg-image"}),s.jsx("div",{className:"hero-overlay"})]}),s.jsx("div",{className:"container",children:(0,s.jsxs)("div",{className:"hero-content",children:[s.jsx("h1",{className:"hero-title fade-in",children:e.heading}),s.jsx("p",{className:"hero-subtitle slide-in-up",children:e.subtitle}),s.jsx("div",{className:"hero-cta slide-in-up",children:s.jsx("a",{href:e.ctaLink,className:"btn btn-primary btn-lg",children:e.ctaText})})]})})]});i(5437);let l=({component:e})=>s.jsx("section",{className:"two-column-block",children:s.jsx("div",{className:"container",children:(0,s.jsxs)("div",{className:"two-column-content",children:[(0,s.jsxs)("div",{className:"left-column fade-in",children:[s.jsx("h2",{className:"column-title",children:e.leftHeading}),s.jsx("p",{className:"column-subtitle",children:e.leftSubtitle}),s.jsx("div",{className:"column-cta",children:s.jsx("a",{href:e.leftCtaLink,className:"btn btn-primary",children:e.leftCtaText})})]}),s.jsx("div",{className:"right-column slide-in-up",children:e.rightImage?s.jsx("div",{className:"image-container",children:s.jsx(n.default,{src:e.rightImage.fields.file.url,alt:e.rightImage.fields.title,width:600,height:400,sizes:"(max-width: 768px) 100vw, 50vw",className:"column-image",priority:!0})}):s.jsx("div",{className:"placeholder-image",children:s.jsx("span",{children:"Image"})})})]})})});i(4953);let a=({component:e})=>s.jsx("section",{className:"image-grid-block",children:(0,s.jsxs)("div",{className:"container",children:[e.title&&s.jsx("div",{className:"grid-header text-center fade-in",children:s.jsx("h2",{className:"grid-title",children:e.title})}),s.jsx("div",{className:"image-grid slide-in-up",children:e.images&&e.images.length>0?e.images.slice(0,4).map((e,t)=>s.jsx("div",{className:"grid-item",children:s.jsx("div",{className:"image-wrapper",children:s.jsx(n.default,{src:e.fields.file.url,alt:e.fields.title,width:400,height:400,sizes:"(max-width: 768px) 50vw, 25vw",className:"grid-image",loading:t<2?"eager":"lazy"})})},t)):Array.from({length:4},(e,t)=>s.jsx("div",{className:"grid-item",children:s.jsx("div",{className:"image-wrapper placeholder",children:(0,s.jsxs)("span",{children:["Image ",t+1]})})},t))})]})}),o=({components:e,className:t=""})=>e&&0!==e.length?s.jsx("div",{className:`component-renderer ${t}`,children:e.map(e=>{if(!("type"in e)||!("id"in e))return null;switch(e.type){case"HeroBlock":return s.jsx(r,{component:e},e.id);case"TwoColumnRow":return s.jsx(l,{component:e},e.id);case"ImageGrid":return s.jsx(a,{component:e},e.id);default:return console.warn(`Unknown component type: ${e.type}`),s.jsx("div",{className:"unknown-component",children:(0,s.jsxs)("p",{children:["Unknown component type: ",e.type]})},e.id||Math.random())}})}):s.jsx("div",{className:`component-renderer empty ${t}`,children:(0,s.jsxs)("div",{className:"empty-state",children:[s.jsx("h3",{children:"No components configured"}),s.jsx("p",{children:"Add some components to your layout to see them here."})]})})},6611:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});let s=(0,i(8570).createProxy)(String.raw`/Volumes/My Disk/personal project/frontend-contentful/src/components/Navigation.tsx#default`)},948:(e,t,i)=>{"use strict";i.d(t,{gc:()=>o});var s=i(7603),n=i(6451);function r(e){return e&&"object"==typeof e&&Array.isArray(e.components)&&"string"==typeof e.version&&"string"==typeof e.lastModified}function l(e){return e&&"object"==typeof e&&e.sys&&"string"==typeof e.sys.id&&"Asset"===e.sys.type&&e.fields&&"string"==typeof e.fields.title&&e.fields.file}class a{constructor(e,t){this.graphqlClient=new s.g6(`https://graphql.contentful.com/content/v1/spaces/${e}`,{headers:{authorization:`Bearer ${t}`}}),this.restClient=(0,n.e)({space:e,accessToken:t})}async getLandingPages(){try{return(await this.restClient.getEntries({content_type:"landingPage",include:2})).items.map(e=>({sys:{id:"string"==typeof e.sys.id?e.sys.id:"",type:"string"==typeof e.sys.type?e.sys.type:"Entry"},fields:{title:"string"==typeof e.fields.title?e.fields.title:"",slug:"string"==typeof e.fields.slug?e.fields.slug:"",layoutConfig:r(e.fields.layoutConfig)?e.fields.layoutConfig:void 0,seoTitle:"string"==typeof e.fields.seoTitle?e.fields.seoTitle:void 0,seoDescription:"string"==typeof e.fields.seoDescription?e.fields.seoDescription:void 0,seoImage:l(e.fields.seoImage)?e.fields.seoImage:void 0}}))}catch(e){return console.error("Error fetching landing pages:",e),[]}}async getLandingPage(e){try{let t=await this.restClient.getEntries({content_type:"landingPage","fields.slug":e,include:2});if(t.items.length>0){let e=t.items[0],i=r(e.fields.layoutConfig)?e.fields.layoutConfig:{components:[],version:"1.0",lastModified:new Date().toISOString()};return{title:"string"==typeof e.fields.title?e.fields.title:"",slug:"string"==typeof e.fields.slug?e.fields.slug:"",layout:i.components||[],lastModified:i.lastModified,version:i.version}}return null}catch(e){return console.error("Error fetching landing page:",e),null}}async getPages(){try{return(await this.restClient.getEntries({content_type:"page",include:2})).items.map(e=>({sys:{id:"string"==typeof e.sys.id?e.sys.id:"",type:"string"==typeof e.sys.type?e.sys.type:"Entry"},fields:{title:"string"==typeof e.fields.title?e.fields.title:"",slug:"string"==typeof e.fields.slug?e.fields.slug:"",layoutConfig:r(e.fields.layoutConfig)?e.fields.layoutConfig:{components:[],version:"1.0",lastModified:new Date().toISOString()},seoTitle:"string"==typeof e.fields.seoTitle?e.fields.seoTitle:void 0,seoDescription:"string"==typeof e.fields.seoDescription?e.fields.seoDescription:void 0,seoImage:l(e.fields.seoImage)?e.fields.seoImage:void 0}}))}catch(e){return console.error("Error fetching pages:",e),[]}}async getPage(e){try{let t=await this.restClient.getEntries({content_type:"page","fields.slug":e,include:2});if(t.items.length>0){let e=t.items[0];return{sys:{id:e.sys.id,type:e.sys.type},fields:{title:"string"==typeof e.fields.title?e.fields.title:"",slug:"string"==typeof e.fields.slug?e.fields.slug:"",layoutConfig:r(e.fields.layoutConfig)?e.fields.layoutConfig:{components:[],version:"1.0",lastModified:new Date().toISOString()},seoTitle:"string"==typeof e.fields.seoTitle?e.fields.seoTitle:void 0,seoDescription:"string"==typeof e.fields.seoDescription?e.fields.seoDescription:void 0,seoImage:l(e.fields.seoImage)?e.fields.seoImage:void 0}}}return null}catch(e){return console.error("Error fetching page:",e),null}}async getLandingPagesGraphQL(){let e=`
      query GetLandingPages {
        landingPageCollection {
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
    `;try{return(await this.graphqlClient.request(e)).landingPageCollection.items}catch(e){return console.error("Error fetching landing pages via GraphQL:",e),[]}}async getPagesGraphQL(){let e=`
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
    `;try{return(await this.graphqlClient.request(e)).pageCollection.items}catch(e){return console.error("Error fetching pages via GraphQL:",e),[]}}async getLandingPageGraphQL(e){let t=`
      query GetLandingPage($slug: String!) {
        landingPageCollection(where: { slug: $slug }, limit: 1) {
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
    `;try{return(await this.graphqlClient.request(t,{slug:e})).landingPageCollection.items[0]||null}catch(e){return console.error("Error fetching landing page via GraphQL:",e),null}}async getPageGraphQL(e){let t=`
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
    `;try{return(await this.graphqlClient.request(t,{slug:e})).pageCollection.items[0]||null}catch(e){return console.error("Error fetching page via GraphQL:",e),null}}async updateLandingPageLayoutConfig(e,t){try{return console.log("Updating landing page layout config for entry:",e,t),!0}catch(e){return console.error("Error updating landing page layout config:",e),!1}}async updateLayoutConfig(e,t){try{return console.log("Updating layout config for entry:",e,t),!0}catch(e){return console.error("Error updating layout config:",e),!1}}}let o=new a("4vp0upv0ting","qUWWdjwU3oMSYlX7lhw3MvPTQIvS_SNDyShtbFgajHc")},5023:()=>{},7191:()=>{},4953:()=>{},3473:()=>{},5437:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),s=t.X(0,[276,858,347,496,624],()=>i(1977));module.exports=s})();