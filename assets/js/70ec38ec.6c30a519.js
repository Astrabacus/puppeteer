"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81113],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(f,p(p({ref:r},c),{},{components:t})):n.createElement(f,p({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52251:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_label:"BrowserFetcher.remove"},p="BrowserFetcher.remove() method",i={unversionedId:"api/puppeteer.browserfetcher.remove",id:"api/puppeteer.browserfetcher.remove",title:"BrowserFetcher.remove() method",description:"Signature:",source:"@site/../docs/api/puppeteer.browserfetcher.remove.md",sourceDirName:"api",slug:"/api/puppeteer.browserfetcher.remove",permalink:"/next/api/puppeteer.browserfetcher.remove",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"BrowserFetcher.remove"},sidebar:"sidebar",previous:{title:"BrowserFetcher.product",permalink:"/next/api/puppeteer.browserfetcher.product"},next:{title:"BrowserFetcher.revisionInfo",permalink:"/next/api/puppeteer.browserfetcher.revisioninfo"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browserfetcherremove-method"},"BrowserFetcher.remove() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class BrowserFetcher {\n  remove(revision: string): Promise<void>;\n}\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"revision"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"A revision to remove for the current ",(0,o.kt)("code",null,"product"),".")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<","void",">"),(0,o.kt)("p",null,"A promise that resolves when the revision has been removes or throws if the revision has not been downloaded."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This method is affected by the current ",(0,o.kt)("inlineCode",{parentName:"p"},"product"),"."))}u.isMDXComponent=!0}}]);