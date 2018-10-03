self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('site').then(function(cache) {
      return cache.addAll(
        [
          'index.html',
          'manifest.json',
          'mega.jpg',
          'yMJRMIlzdpvBhQQL_Qq7dy0.woff2'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});