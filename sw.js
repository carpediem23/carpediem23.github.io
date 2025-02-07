const CACHE_NAME = "carpediem23-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles/global.css",
  "/scripts/index.js",
  "/assets/images/profile_transparent.webp",
  "/assets/audios/ambience.mp3",
  "/assets/audios/select.mp3",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request)),
  );
});
