//Cached core static resources
self.addEventListener("install", e => {
  e.waitUntil(caches.open("static").then(cache => {
    return cache.addAll(["./",'./Squirrel_Square_192_PNG.png']);
  }));
});

//Fetch Resources
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(response => {
    return response || fetch(e.request);
  }));
});