if(!self.define){let e,i={};const t=(t,s)=>(t=new URL(t+".js",s).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>t(e,r),f={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-87098c68"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CYtmM06v.js",revision:"964219ec50935265b9c572e336e67de2"},{url:"index.html",revision:"1639552526f3c603a894f65c2917df95"},{url:"registerSW.js",revision:"79f23a070a00ad9f24ff7979bb4018c6"},{url:"manifest.webmanifest",revision:"138e925c3dcf21f9a32f583ae4c63217"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
