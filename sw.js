!function(){let e="carpediem23-v1",t=[];self.addEventListener("install",a=>{a.waitUntil(caches.open(e).then(e=>e.addAll(t).catch(e=>{throw console.error("Cache addAll error:",e),e})))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(t=>Promise.all(t.filter(t=>t!==e).map(e=>caches.delete(e)))))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("message",e=>{"CACHE_URLS"===e.data.type&&(t=e.data.urls)})}();
//# sourceMappingURL=sw.js.map
