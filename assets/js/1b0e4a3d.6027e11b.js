"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11009],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=o(a),g=n,c=k["".concat(d,".").concat(g)]||k[g]||m[g]||p;return a?r.createElement(c,l(l({ref:t},u),{},{components:a})):r.createElement(c,l({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<p;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},66774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const p={sidebar_label:"PageEventObject"},l="PageEventObject interface",i={unversionedId:"api/puppeteer.pageeventobject",id:"version-15.3.0/api/puppeteer.pageeventobject",title:"PageEventObject interface",description:"Denotes the objects received by callback functions for page events.",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.pageeventobject.md",sourceDirName:"api",slug:"/api/puppeteer.pageeventobject",permalink:"/api/puppeteer.pageeventobject",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"PageEventObject"},sidebar:"sidebar",previous:{title:"PageEmittedEvents",permalink:"/api/puppeteer.pageemittedevents"},next:{title:"PageEventObject.close",permalink:"/api/puppeteer.pageeventobject.close"}},d={},o=[{value:"Properties",id:"properties",level:2}],u={toc:o};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pageeventobject-interface"},"PageEventObject interface"),(0,n.kt)("p",null,"Denotes the objects received by callback functions for page events."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.pageemittedevents"},"PageEmittedEvents")," for more detail on the events and when they are emitted."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface PageEventObject\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.close"},"close")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"never"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.console"},"console")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.consolemessage"},"ConsoleMessage")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.dialog"},"dialog")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.dialog"},"Dialog")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.domcontentloaded"},"domcontentloaded")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"never"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.error"},"error")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Error"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.frameattached"},"frameattached")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.frame"},"Frame")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.framedetached"},"framedetached")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.frame"},"Frame")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.framenavigated"},"framenavigated")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.frame"},"Frame")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.load"},"load")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"never"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.metrics"},"metrics")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"{ title: string; metrics: ",(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.metrics"},"Metrics"),"; }"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.pageerror"},"pageerror")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Error"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.popup"},"popup")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.page"},"Page")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.request"},"request")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.httprequest"},"HTTPRequest")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.requestfailed"},"requestfailed")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.httprequest"},"HTTPRequest")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.requestfinished"},"requestfinished")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.httprequest"},"HTTPRequest")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.requestservedfromcache"},"requestservedfromcache")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.httprequest"},"HTTPRequest")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.response"},"response")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.httpresponse"},"HTTPResponse")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.workercreated"},"workercreated")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.webworker"},"WebWorker")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject.workerdestroyed"},"workerdestroyed")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.webworker"},"WebWorker")),(0,n.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);