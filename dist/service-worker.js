if(!self.define){let i,e={};const r=(r,n)=>(r=new URL(r+".js",n).href,e[r]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=r,i.onload=e,document.head.appendChild(i)}else i=r,importScripts(r),e()})).then((()=>{let i=e[r];if(!i)throw new Error(`Module ${r} didn’t register its module`);return i})));self.define=(n,c)=>{const a=i||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let o={};const s=i=>r(i,a),d={module:{uri:a},exports:o,require:s};e[a]=Promise.all(n.map((i=>d[i]||s(i)))).then((i=>(c(...i),o)))}}define(["./workbox-d169e1d7"],(function(i){"use strict";i.setCacheNameDetails({prefix:"toggle-switch"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/cosmin-draghici-remax/android-chrome-192x192.png",revision:"beaf0ad3ee6e7bd1c42b6dbc62d33ac4"},{url:"/cosmin-draghici-remax/android-chrome-512x512.png",revision:"5391edf844d642381b19aadae03a869b"},{url:"/cosmin-draghici-remax/apple-touch-icon.png",revision:"0c66c6987f088a1d723be134d006f0ab"},{url:"/cosmin-draghici-remax/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/cosmin-draghici-remax/css/app.02a59f4c.css",revision:null},{url:"/cosmin-draghici-remax/favicon-16x16.png",revision:"3d7d802feddf27df2642188103d62069"},{url:"/cosmin-draghici-remax/favicon-32x32.png",revision:"5138edd76855974507c45e45fb1275cc"},{url:"/cosmin-draghici-remax/img/cosmin.987dad9b.png",revision:null},{url:"/cosmin-draghici-remax/img/logo.a441f3d6.png",revision:null},{url:"/cosmin-draghici-remax/index.html",revision:"158bb40d68eba2f4295a94e62b37aef0"},{url:"/cosmin-draghici-remax/js/app.d626d0ba.js",revision:null},{url:"/cosmin-draghici-remax/js/chunk-vendors.2033440a.js",revision:null},{url:"/cosmin-draghici-remax/manifest.json",revision:"315528179232663699f68056e1224309"},{url:"/cosmin-draghici-remax/mstile-150x150.png",revision:"62389d792009cec3eedde1d9261b9786"},{url:"/cosmin-draghici-remax/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/cosmin-draghici-remax/safari-pinned-tab.svg",revision:"5289cab0bd878a16fb8dbb0a83529c1a"}],{})}));
//# sourceMappingURL=service-worker.js.map
