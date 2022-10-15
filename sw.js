self.addEventListener("install", e => {
    // Cache static content. The installation will perform after the e.waitUntill is completed
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./"]);
        })
    );    
    console.log("Install");
});

// This will run whenever we have fetch request
self.addEventListener("fetch", e => {
    console.log(`Intercepting fetch request for: ${e.request.url}`);
    // Return the cached content else go to network to get the content if not found in cache (undefine)
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});