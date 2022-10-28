"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?a.createElement(f,p(p({ref:t},u),{},{components:n})):a.createElement(f,p({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={sidebar_label:"Page.exposeFunction"},i="Page.exposeFunction() method",l={unversionedId:"api/puppeteer.page.exposefunction",id:"api/puppeteer.page.exposefunction",title:"Page.exposeFunction() method",description:"The method adds a function called name on the page's window object. When called, the function executes puppeteerFunction in node.js and returns a Promise which resolves to the return value of puppeteerFunction.",source:"@site/../docs/api/puppeteer.page.exposefunction.md",sourceDirName:"api",slug:"/api/puppeteer.page.exposefunction",permalink:"/next/api/puppeteer.page.exposefunction",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.exposeFunction"},sidebar:"api",previous:{title:"Page.evaluateOnNewDocument",permalink:"/next/api/puppeteer.page.evaluateonnewdocument"},next:{title:"Page.focus",permalink:"/next/api/puppeteer.page.focus"}},c={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}],s={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"pageexposefunction-method"}),"Page.exposeFunction() method"),(0,a.kt)("p",null,"The method adds a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," on the page's ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object. When called, the function executes ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteerFunction")," in node.js and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," which resolves to the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteerFunction"),"."),(0,a.kt)("p",null,"If the puppeteerFunction returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),", it will be awaited."),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Functions installed via ",(0,a.kt)("inlineCode",{parentName:"p"},"page.exposeFunction")," survive navigations.")),(0,a.kt)("h4",r({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  exposeFunction(\n    name: string,\n    pptrFunction:\n      | Function\n      | {\n          default: Function;\n        }\n  ): Promise<void>;\n}\n")),(0,a.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Name of the function on the window object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"pptrFunction"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Function ","|"," { default: Function; }"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Callback function which will be called in Puppeteer's context.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",r({},{id:"example-1"}),"Example 1"),(0,a.kt)("p",null,"An example of adding an ",(0,a.kt)("inlineCode",{parentName:"p"},"md5")," function into the page:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const puppeteer = require('puppeteer');\nconst crypto = require('crypto');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('console', msg => console.log(msg.text()));\n  await page.exposeFunction('md5', text =>\n    crypto.createHash('md5').update(text).digest('hex')\n  );\n  await page.evaluate(async () => {\n    // use window.md5 to compute hashes\n    const myString = 'PUPPETEER';\n    const myHash = await window.md5(myString);\n    console.log(`md5 of ${myString} is ${myHash}`);\n  });\n  await browser.close();\n})();\n")),(0,a.kt)("h2",r({},{id:"example-2"}),"Example 2"),(0,a.kt)("p",null,"An example of adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"window.readfile")," function into the page:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const puppeteer = require('puppeteer');\nconst fs = require('fs');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('console', msg => console.log(msg.text()));\n  await page.exposeFunction('readfile', async filePath => {\n    return new Promise((resolve, reject) => {\n      fs.readFile(filePath, 'utf8', (err, text) => {\n        if (err) reject(err);\n        else resolve(text);\n      });\n    });\n  });\n  await page.evaluate(async () => {\n    // use window.readfile to read contents of a file\n    const content = await window.readfile('/etc/hosts');\n    console.log(content);\n  });\n  await browser.close();\n})();\n")))}m.isMDXComponent=!0}}]);