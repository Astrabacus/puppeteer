"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||p;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const p={sidebar_label:"FrameAddStyleTagOptions.path"},o="FrameAddStyleTagOptions.path property",i={unversionedId:"api/puppeteer.frameaddstyletagoptions.path",id:"api/puppeteer.frameaddstyletagoptions.path",title:"FrameAddStyleTagOptions.path property",description:"The path to a CSS file to be injected into the frame.",source:"@site/../docs/api/puppeteer.frameaddstyletagoptions.path.md",sourceDirName:"api",slug:"/api/puppeteer.frameaddstyletagoptions.path",permalink:"/next/api/puppeteer.frameaddstyletagoptions.path",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"FrameAddStyleTagOptions.path"},sidebar:"sidebar",previous:{title:"FrameAddStyleTagOptions.content",permalink:"/next/api/puppeteer.frameaddstyletagoptions.content"},next:{title:"FrameAddStyleTagOptions.url",permalink:"/next/api/puppeteer.frameaddstyletagoptions.url"}},l={},s=[{value:"Remarks",id:"remarks",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frameaddstyletagoptionspath-property"},"FrameAddStyleTagOptions.path property"),(0,a.kt)("p",null,"The path to a CSS file to be injected into the frame."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FrameAddStyleTagOptions {\n  path?: string;\n}\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is a relative path, it is resolved relative to the current working directory (",(0,a.kt)("inlineCode",{parentName:"p"},"process.cwd()")," in Node.js)."))}d.isMDXComponent=!0}}]);