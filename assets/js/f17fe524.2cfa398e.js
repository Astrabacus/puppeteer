"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20320],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(t),f=o,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},63204:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={sidebar_label:"ExperimentsConfiguration.macArmChromiumEnabled"},p="ExperimentsConfiguration.macArmChromiumEnabled property",u={unversionedId:"api/puppeteer.experimentsconfiguration.macarmchromiumenabled",id:"version-19.2.0/api/puppeteer.experimentsconfiguration.macarmchromiumenabled",title:"ExperimentsConfiguration.macArmChromiumEnabled property",description:"Require Puppeteer to download Chromium for Apple M1.",source:"@site/versioned_docs/version-19.2.0/api/puppeteer.experimentsconfiguration.macarmchromiumenabled.md",sourceDirName:"api",slug:"/api/puppeteer.experimentsconfiguration.macarmchromiumenabled",permalink:"/api/puppeteer.experimentsconfiguration.macarmchromiumenabled",draft:!1,tags:[],version:"19.2.0",frontMatter:{sidebar_label:"ExperimentsConfiguration.macArmChromiumEnabled"},sidebar:"api",previous:{title:"ExperimentsConfiguration",permalink:"/api/puppeteer.experimentsconfiguration"},next:{title:"FlattenHandle",permalink:"/api/puppeteer.flattenhandle"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Default value:",id:"default-value",level:4}],m={toc:c};function s(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"experimentsconfigurationmacarmchromiumenabled-property"}),"ExperimentsConfiguration.macArmChromiumEnabled property"),(0,n.kt)("p",null,"Require Puppeteer to download Chromium for Apple M1."),(0,n.kt)("p",null,"On Apple M1 devices Puppeteer by default downloads the version for Intel's processor which runs via Rosetta. It works without any problems, however, with this option, you should get more efficient resource usage (CPU and RAM) that could lead to a faster execution time."),(0,n.kt)("p",null,"Can be overridden by ",(0,n.kt)("inlineCode",{parentName:"p"},"PUPPETEER_EXPERIMENTAL_CHROMIUM_MAC_ARM"),"."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"interface ExperimentsConfiguration {\n  macArmChromiumEnabled?: boolean;\n}\n")),(0,n.kt)("h4",o({},{id:"default-value"}),"Default value:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"false")))}s.isMDXComponent=!0}}]);