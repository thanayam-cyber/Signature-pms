/* Signature PMS service worker — network-first navigation, no app-data caching.
   This enables PWA installation without caching sensitive PMS screens or API data. */
self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET' || request.mode !== 'navigate') return;
  event.respondWith(fetch(request));
});
