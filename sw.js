if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let d={};const t=e=>c(e,o),n={module:{uri:o},exports:d,require:t};s[o]=Promise.all(i.map((e=>n[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"bdec0761c6ac4783789f5f6047f64a90"},{url:"404/routeInfo.json",revision:"104daf0f39b6e45087f73ce43823b1a6"},{url:"config.json",revision:"dd1ffc06be97f8accbcf1851a4c9b997"},{url:"index.html",revision:"1dd872c9035eaae203289fc673edb340"},{url:"init-sw.js",revision:"b824dd888ed0c16cb36979278d51a562"},{url:"LICENSE.txt",revision:"449a4fb002a705650125bd13466840e1"},{url:"main.30e57a89.js",revision:"db6268e7cb272ac5e446feb736650ad1"},{url:"manifest.json",revision:"d99b6386feece56c4d0e7970bafb2b43"},{url:"robots.txt",revision:"6978a616c585d03cb5b542a891995efb"},{url:"routeInfo.json",revision:"8a0ca636dd2934aa46c43020e1e7aca9"},{url:"sitemap.xml",revision:"f1463fd647fde7c8ce561605c13c1701"},{url:"styles.7ccc69c9.css",revision:"a04d5ee22c7bf7c5a82bed66d134041d"},{url:"templates/__react_static_root__/src/pages/404.7cfdf06e.js",revision:"352ed8276edb1866d77ee5d535310f71"},{url:"templates/styles.c263d5bd.js",revision:"18684bfe39aa70ecd4a3bb0fc30e3bae"},{url:"templates/vendors~main.89ce2d2d.js",revision:"aff5e05cb6c1156c95db84f54161afbe"}],{})}));
//# sourceMappingURL=sw.js.map
