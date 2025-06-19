(()=>{var e={};e.id=928,e.ids=[928],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7790:e=>{"use strict";e.exports=require("assert")},4770:e=>{"use strict";e.exports=require("crypto")},7702:e=>{"use strict";e.exports=require("events")},2048:e=>{"use strict";e.exports=require("fs")},2615:e=>{"use strict";e.exports=require("http")},8791:e=>{"use strict";e.exports=require("https")},9801:e=>{"use strict";e.exports=require("os")},5315:e=>{"use strict";e.exports=require("path")},5816:e=>{"use strict";e.exports=require("process")},8621:e=>{"use strict";e.exports=require("punycode")},6162:e=>{"use strict";e.exports=require("stream")},4175:e=>{"use strict";e.exports=require("tty")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},1568:e=>{"use strict";e.exports=require("zlib")},7315:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>g,pages:()=>c,routeModule:()=>p,tree:()=>d}),s(885),s(2029),s(5866);var i=s(3191),n=s(8716),r=s(7922),l=s.n(r),a=s(5231),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);s.d(t,o);let d=["",{children:["test",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,885)),"/Volumes/My Disk/personal project/frontend-contentful/src/app/test/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,2029)),"/Volumes/My Disk/personal project/frontend-contentful/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Volumes/My Disk/personal project/frontend-contentful/src/app/test/page.tsx"],g="/test/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/test/page",pathname:"/test",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2168:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},6802:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2481,23)),Promise.resolve().then(s.bind(s,4780))},8459:()=>{},4780:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var i=s(326);s(7577);var n=s(434),r=s(5047);s(3473);let l=()=>{let e=(0,r.usePathname)();return i.jsx("nav",{className:"navigation",role:"navigation","aria-label":"Main navigation",children:i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"nav-content",children:[i.jsx(n.default,{href:"/",className:"nav-brand",children:"Landing Page Builder"}),i.jsx("ul",{className:"nav-menu",children:[{href:"/landing/page-1",label:"Page 1"},{href:"/landing/page-2",label:"Page 2"}].map(t=>i.jsx("li",{className:"nav-item",children:i.jsx(n.default,{href:t.href,className:`nav-link ${e===t.href?"active":""}`,children:t.label})},t.href))})]})})})}},2029:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>l,viewport:()=>a});var i=s(9510),n=s(5317),r=s.n(n);s(5023);let l={title:"Landing Page Builder",description:"Custom landing pages built with Contentful and Next.js",keywords:["landing page","contentful","next.js","react"],authors:[{name:"Landing Page Builder"}],robots:"index, follow",openGraph:{type:"website",locale:"en_US",url:process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000",title:"Landing Page Builder",description:"Custom landing pages built with Contentful and Next.js",siteName:"Landing Page Builder"},twitter:{card:"summary_large_image",title:"Landing Page Builder",description:"Custom landing pages built with Contentful and Next.js"}},a={width:"device-width",initialScale:1};function o({children:e}){return(0,i.jsxs)("html",{lang:"en",children:[(0,i.jsxs)("head",{children:[i.jsx("link",{rel:"icon",href:"/favicon.ico"}),i.jsx("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"}),i.jsx("link",{rel:"manifest",href:"/manifest.json"})]}),i.jsx("body",{className:r().className,children:e})]})}},885:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var i=s(9510);s(1159);var n=s(948),r=s(6611),l=s(2606);async function a(){try{let e="page-1",t=await n.gc.getLandingPage(e),s=await n.gc.getLandingPages();return(0,i.jsxs)(i.Fragment,{children:[i.jsx(r.Z,{}),i.jsx("main",{className:"test-page",children:(0,i.jsxs)("div",{className:"container",children:[i.jsx("h1",{children:"Contentful Data Test"}),(0,i.jsxs)("p",{className:"note",children:[i.jsx("strong",{children:"Note:"})," This test is using the slug ",i.jsx("code",{children:e}),". Change this in ",i.jsx("code",{children:"src/app/test/page.tsx"})," if you want to test a different entry."]}),(0,i.jsxs)("section",{className:"test-section",children:[i.jsx("h2",{children:"All Landing Pages"}),i.jsx("pre",{className:"data-display",children:JSON.stringify(s,null,2)})]}),(0,i.jsxs)("section",{className:"test-section",children:[(0,i.jsxs)("h2",{children:["Specific Landing Page: ",e]}),t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"page-info",children:[i.jsx("h3",{children:t.title}),(0,i.jsxs)("p",{children:["Slug: ",t.slug]}),(0,i.jsxs)("p",{children:["Version: ",t.version]}),(0,i.jsxs)("p",{children:["Last Modified: ",new Date(t.lastModified).toLocaleString()]}),(0,i.jsxs)("p",{children:["Components: ",t.layout?.length||0]})]}),(0,i.jsxs)("div",{className:"components-preview",children:[i.jsx("h3",{children:"Components Preview"}),i.jsx(l.Z,{components:t.layout||[]})]}),(0,i.jsxs)("div",{className:"raw-data",children:[i.jsx("h3",{children:"Raw Data"}),i.jsx("pre",{className:"data-display",children:JSON.stringify(t,null,2)})]})]}):(0,i.jsxs)("div",{className:"error-message",children:[(0,i.jsxs)("p",{children:["No landing page found with slug: ",e]}),i.jsx("p",{children:"Please create a landing page in Contentful with this slug, or change the testSlug in this file."})]})]})]})})]})}catch(e){return console.error("Error loading test page:",e),(0,i.jsxs)(i.Fragment,{children:[i.jsx(r.Z,{}),i.jsx("main",{className:"test-page",children:i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"error-message",children:[i.jsx("h1",{children:"Error Loading Test Page"}),i.jsx("p",{children:"There was an error loading the Contentful data:"}),i.jsx("pre",{className:"error-details",children:e instanceof Error?e.message:"Unknown error occurred"})]})})})]})}}s(850)},2606:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var i=s(9510);s(1159);var n=s(7710);s(7191);let r=({component:e})=>(0,i.jsxs)("section",{className:"hero-block",children:[e.backgroundImage&&(0,i.jsxs)("div",{className:"hero-background",children:[i.jsx(n.default,{src:e.backgroundImage.fields.file.url,alt:e.backgroundImage.fields.title,fill:!0,priority:!0,sizes:"100vw",style:{objectFit:"cover"},className:"hero-bg-image"}),i.jsx("div",{className:"hero-overlay"})]}),i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"hero-content",children:[i.jsx("h1",{className:"hero-title fade-in",children:e.heading}),i.jsx("p",{className:"hero-subtitle slide-in-up",children:e.subtitle}),i.jsx("div",{className:"hero-cta slide-in-up",children:i.jsx("a",{href:e.ctaLink,className:"btn btn-primary btn-lg",children:e.ctaText})})]})})]});s(5437);let l=({component:e})=>i.jsx("section",{className:"two-column-block",children:i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"two-column-content",children:[(0,i.jsxs)("div",{className:"left-column fade-in",children:[i.jsx("h2",{className:"column-title",children:e.leftHeading}),i.jsx("p",{className:"column-subtitle",children:e.leftSubtitle}),i.jsx("div",{className:"column-cta",children:i.jsx("a",{href:e.leftCtaLink,className:"btn btn-primary",children:e.leftCtaText})})]}),i.jsx("div",{className:"right-column slide-in-up",children:e.rightImage?i.jsx("div",{className:"image-container",children:i.jsx(n.default,{src:e.rightImage.fields.file.url,alt:e.rightImage.fields.title,width:600,height:400,sizes:"(max-width: 768px) 100vw, 50vw",className:"column-image",priority:!0})}):i.jsx("div",{className:"placeholder-image",children:i.jsx("span",{children:"Image"})})})]})})});s(4953);let a=({component:e})=>i.jsx("section",{className:"image-grid-block",children:(0,i.jsxs)("div",{className:"container",children:[e.title&&i.jsx("div",{className:"grid-header text-center fade-in",children:i.jsx("h2",{className:"grid-title",children:e.title})}),i.jsx("div",{className:"image-grid slide-in-up",children:e.images&&e.images.length>0?e.images.slice(0,4).map((e,t)=>i.jsx("div",{className:"grid-item",children:i.jsx("div",{className:"image-wrapper",children:i.jsx(n.default,{src:e.fields.file.url,alt:e.fields.title,width:400,height:400,sizes:"(max-width: 768px) 50vw, 25vw",className:"grid-image",loading:t<2?"eager":"lazy"})})},t)):Array.from({length:4},(e,t)=>i.jsx("div",{className:"grid-item",children:i.jsx("div",{className:"image-wrapper placeholder",children:(0,i.jsxs)("span",{children:["Image ",t+1]})})},t))})]})}),o=({components:e,className:t=""})=>e&&0!==e.length?i.jsx("div",{className:`component-renderer ${t}`,children:e.map(e=>{if(!("type"in e)||!("id"in e))return null;switch(e.type){case"HeroBlock":return i.jsx(r,{component:e},e.id);case"TwoColumnRow":return i.jsx(l,{component:e},e.id);case"ImageGrid":return i.jsx(a,{component:e},e.id);default:return console.warn(`Unknown component type: ${e.type}`),i.jsx("div",{className:"unknown-component",children:(0,i.jsxs)("p",{children:["Unknown component type: ",e.type]})},e.id||Math.random())}})}):i.jsx("div",{className:`component-renderer empty ${t}`,children:(0,i.jsxs)("div",{className:"empty-state",children:[i.jsx("h3",{children:"No components configured"}),i.jsx("p",{children:"Add some components to your layout to see them here."})]})})},6611:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});let i=(0,s(8570).createProxy)(String.raw`/Volumes/My Disk/personal project/frontend-contentful/src/components/Navigation.tsx#default`)},948:(e,t,s)=>{"use strict";s.d(t,{gc:()=>o});var i=s(7603),n=s(6451);function r(e){return e&&"object"==typeof e&&Array.isArray(e.components)&&"string"==typeof e.version&&"string"==typeof e.lastModified}function l(e){return e&&"object"==typeof e&&e.sys&&"string"==typeof e.sys.id&&"Asset"===e.sys.type&&e.fields&&"string"==typeof e.fields.title&&e.fields.file}class a{constructor(e,t){this.graphqlClient=new i.g6(`https://graphql.contentful.com/content/v1/spaces/${e}`,{headers:{authorization:`Bearer ${t}`}}),this.restClient=(0,n.e)({space:e,accessToken:t})}async getLandingPages(){try{return(await this.restClient.getEntries({content_type:"landingPage",include:2})).items.map(e=>({sys:{id:"string"==typeof e.sys.id?e.sys.id:"",type:"string"==typeof e.sys.type?e.sys.type:"Entry"},fields:{title:"string"==typeof e.fields.title?e.fields.title:"",slug:"string"==typeof e.fields.slug?e.fields.slug:"",layoutConfig:r(e.fields.layoutConfig)?e.fields.layoutConfig:void 0,seoTitle:"string"==typeof e.fields.seoTitle?e.fields.seoTitle:void 0,seoDescription:"string"==typeof e.fields.seoDescription?e.fields.seoDescription:void 0,seoImage:l(e.fields.seoImage)?e.fields.seoImage:void 0}}))}catch(e){return console.error("Error fetching landing pages:",e),[]}}async getLandingPage(e){try{let t=await this.restClient.getEntries({content_type:"landingPage","fields.slug":e,include:2});if(t.items.length>0){let e=t.items[0],s=r(e.fields.layoutConfig)?e.fields.layoutConfig:{components:[],version:"1.0",lastModified:new Date().toISOString()};return{title:"string"==typeof e.fields.title?e.fields.title:"",slug:"string"==typeof e.fields.slug?e.fields.slug:"",layout:s.components||[],lastModified:s.lastModified,version:s.version}}return null}catch(e){return console.error("Error fetching landing page:",e),null}}async getPages(){try{return(await this.restClient.getEntries({content_type:"page",include:2})).items.map(e=>({sys:{id:"string"==typeof e.sys.id?e.sys.id:"",type:"string"==typeof e.sys.type?e.sys.type:"Entry"},fields:{title:"string"==typeof e.fields.title?e.fields.title:"",slug:"string"==typeof e.fields.slug?e.fields.slug:"",layoutConfig:r(e.fields.layoutConfig)?e.fields.layoutConfig:{components:[],version:"1.0",lastModified:new Date().toISOString()},seoTitle:"string"==typeof e.fields.seoTitle?e.fields.seoTitle:void 0,seoDescription:"string"==typeof e.fields.seoDescription?e.fields.seoDescription:void 0,seoImage:l(e.fields.seoImage)?e.fields.seoImage:void 0}}))}catch(e){return console.error("Error fetching pages:",e),[]}}async getPage(e){try{let t=await this.restClient.getEntries({content_type:"page","fields.slug":e,include:2});if(t.items.length>0){let e=t.items[0];return{sys:{id:e.sys.id,type:e.sys.type},fields:{title:"string"==typeof e.fields.title?e.fields.title:"",slug:"string"==typeof e.fields.slug?e.fields.slug:"",layoutConfig:r(e.fields.layoutConfig)?e.fields.layoutConfig:{components:[],version:"1.0",lastModified:new Date().toISOString()},seoTitle:"string"==typeof e.fields.seoTitle?e.fields.seoTitle:void 0,seoDescription:"string"==typeof e.fields.seoDescription?e.fields.seoDescription:void 0,seoImage:l(e.fields.seoImage)?e.fields.seoImage:void 0}}}return null}catch(e){return console.error("Error fetching page:",e),null}}async getLandingPagesGraphQL(){let e=`
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
    `;try{return(await this.graphqlClient.request(t,{slug:e})).pageCollection.items[0]||null}catch(e){return console.error("Error fetching page via GraphQL:",e),null}}async updateLandingPageLayoutConfig(e,t){try{return console.log("Updating landing page layout config for entry:",e,t),!0}catch(e){return console.error("Error updating landing page layout config:",e),!1}}async updateLayoutConfig(e,t){try{return console.log("Updating layout config for entry:",e,t),!0}catch(e){return console.error("Error updating layout config:",e),!1}}}let o=new a("4vp0upv0ting","qUWWdjwU3oMSYlX7lhw3MvPTQIvS_SNDyShtbFgajHc")},5023:()=>{},850:()=>{},7191:()=>{},4953:()=>{},3473:()=>{},5437:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[276,858,347,496,624],()=>s(7315));module.exports=i})();