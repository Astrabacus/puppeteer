"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1449],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>b});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),c=u(t),b=p,m=c["".concat(i,".").concat(b)]||c[b]||l[b]||o;return t?n.createElement(m,a(a({ref:r},f),{},{components:t})):n.createElement(m,a({ref:r},f))}));function b(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=c;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:p,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},84698:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(87462),p=(t(67294),t(3905));const o={sidebar_label:"HTTPResponse.buffer"},a="HTTPResponse.buffer() method",s={unversionedId:"api/puppeteer.httpresponse.buffer",id:"version-15.3.0/api/puppeteer.httpresponse.buffer",title:"HTTPResponse.buffer() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.httpresponse.buffer.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.buffer",permalink:"/api/puppeteer.httpresponse.buffer",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"HTTPResponse.buffer"},sidebar:"sidebar",previous:{title:"HTTPResponse",permalink:"/api/puppeteer.httpresponse"},next:{title:"HTTPResponse.frame",permalink:"/api/puppeteer.httpresponse.frame"}},i={},u=[],f={toc:u};function l(e){let{components:r,...t}=e;return(0,p.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"httpresponsebuffer-method"},"HTTPResponse.buffer() method"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPResponse {\n  buffer(): Promise<Buffer>;\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,"Promise","<","Buffer",">"),(0,p.kt)("p",null,"Promise which resolves to a buffer with response body."))}l.isMDXComponent=!0}}]);