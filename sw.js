const CACHE = 'tradeflow-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Sem cache — passa tudo direto para a rede
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
