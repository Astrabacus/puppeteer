"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||p;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62619:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const p={sidebar_label:"Frame.title"},i="Frame.title() method",o={unversionedId:"api/puppeteer.frame.title",id:"version-15.3.0/api/puppeteer.frame.title",title:"Frame.title() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.frame.title.md",sourceDirName:"api",slug:"/api/puppeteer.frame.title",permalink:"/api/puppeteer.frame.title",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"Frame.title"},sidebar:"sidebar",previous:{title:"Frame.tap",permalink:"/api/puppeteer.frame.tap"},next:{title:"Frame.type",permalink:"/api/puppeteer.frame.type"}},l={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frametitle-method"},"Frame.title() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  title(): Promise<string>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","string",">"),(0,a.kt)("p",null,"the frame's title."))}s.isMDXComponent=!0}}]);