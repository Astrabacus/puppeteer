"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=u(n),v=o,b=f["".concat(l,".").concat(v)]||f[v]||s[v]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},83054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_label:"LaunchOptions.env"},p="LaunchOptions.env property",l={unversionedId:"api/puppeteer.launchoptions.env",id:"version-19.2.0/api/puppeteer.launchoptions.env",title:"LaunchOptions.env property",description:"Specify environment variables that will be visible to the browser.",source:"@site/versioned_docs/version-19.2.0/api/puppeteer.launchoptions.env.md",sourceDirName:"api",slug:"/api/puppeteer.launchoptions.env",permalink:"/api/puppeteer.launchoptions.env",draft:!1,tags:[],version:"19.2.0",frontMatter:{sidebar_label:"LaunchOptions.env"},sidebar:"api",previous:{title:"LaunchOptions.dumpio",permalink:"/api/puppeteer.launchoptions.dumpio"},next:{title:"LaunchOptions.executablePath",permalink:"/api/puppeteer.launchoptions.executablepath"}},u={},c=[{value:"Signature:",id:"signature",level:4},{value:"Default value:",id:"default-value",level:4}],s={toc:c};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"launchoptionsenv-property"}),"LaunchOptions.env property"),(0,r.kt)("p",null,"Specify environment variables that will be visible to the browser."),(0,r.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"interface LaunchOptions {\n  env?: Record<string, string | undefined>;\n}\n")),(0,r.kt)("h4",o({},{id:"default-value"}),"Default value:"),(0,r.kt)("p",null,"The contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env"),"."))}f.isMDXComponent=!0}}]);