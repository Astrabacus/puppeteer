"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73071],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||p;return r?n.createElement(y,u(u({ref:t},s),{},{components:r})):n.createElement(y,u({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,u=new Array(p);u[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<p;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const p={sidebar_label:"Puppeteer.unregisterCustomQueryHandler"},u="Puppeteer.unregisterCustomQueryHandler() method",o={unversionedId:"api/puppeteer.puppeteer.unregistercustomqueryhandler",id:"version-15.3.0/api/puppeteer.puppeteer.unregistercustomqueryhandler",title:"Puppeteer.unregisterCustomQueryHandler() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.puppeteer.unregistercustomqueryhandler.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteer.unregistercustomqueryhandler",permalink:"/api/puppeteer.puppeteer.unregistercustomqueryhandler",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"Puppeteer.unregisterCustomQueryHandler"},sidebar:"sidebar",previous:{title:"Puppeteer.registerCustomQueryHandler",permalink:"/api/puppeteer.puppeteer.registercustomqueryhandler"},next:{title:"PuppeteerErrors",permalink:"/api/puppeteer.puppeteererrors"}},l={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],s={toc:i};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"puppeteerunregistercustomqueryhandler-method"},"Puppeteer.unregisterCustomQueryHandler() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,a.kt)("p",{parentName:"blockquote"},"Import directly puppeteer.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Puppeteer {\n  unregisterCustomQueryHandler(name: string): void;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"void"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {unregisterCustomQueryHandler} from 'puppeteer';\n")))}c.isMDXComponent=!0}}]);