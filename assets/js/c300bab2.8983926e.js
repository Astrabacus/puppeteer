"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),h=a,f=m["".concat(i,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_label:"Page.hover"},p="Page.hover() method",i={unversionedId:"api/puppeteer.page.hover",id:"version-19.2.0/api/puppeteer.page.hover",title:"Page.hover() method",description:"This method fetches an element with selector, scrolls it into view if needed, and then uses Page.mouse to hover over the center of the element. If there's no element matching selector, the method throws an error.",source:"@site/versioned_docs/version-19.2.0/api/puppeteer.page.hover.md",sourceDirName:"api",slug:"/api/puppeteer.page.hover",permalink:"/api/puppeteer.page.hover",draft:!1,tags:[],version:"19.2.0",frontMatter:{sidebar_label:"Page.hover"},sidebar:"api",previous:{title:"Page.goto",permalink:"/api/puppeteer.page.goto"},next:{title:"Page.isClosed",permalink:"/api/puppeteer.page.isclosed"}},s={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:c};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"pagehover-method"}),"Page.hover() method"),(0,n.kt)("p",null,"This method fetches an element with ",(0,n.kt)("inlineCode",{parentName:"p"},"selector"),", scrolls it into view if needed, and then uses ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page.mouse"}),"Page.mouse")," to hover over the center of the element. If there's no element matching ",(0,n.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  hover(selector: string): Promise<void>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"selector"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A ",(0,n.kt)("a",a({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"}),"selector")," to search for element to hover. If there are multiple elements satisfying the selector, the first will be hovered.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("p",null,"Promise which resolves when the element matching ",(0,n.kt)("inlineCode",{parentName:"p"},"selector")," is successfully hovered. Promise gets rejected if there's no element matching ",(0,n.kt)("inlineCode",{parentName:"p"},"selector"),"."),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"Shortcut for ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page.hover"}),"page.mainFrame().hover(selector)"),"."))}m.isMDXComponent=!0}}]);