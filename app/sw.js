const CACHE = 'v2';
const precachedResources = [
  '/',
  'manifest.json',
  'css/main.css',
  'js/main.js',
  'res/img/logo_light.svg',
  'res/img/circle_2.png',
  'res/img/circle_3.png'
];

self.addEventListener('install', evt => {
  console.log('The service worker is being installed.');
  self.skipWaiting();
  evt.waitUntil(async () => {
    await precache();
    console.log('CACHED EVERYTHING');
  });
});

self.addEventListener('activate', event => {
  console.log('Serviceworker is active');
  event.waitUntil(
    (async function() {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter(cacheName => {
            if (cacheName != CACHE) {
              console.log('Deleteing Cache' + cacheName);
            }
            return cacheName != CACHE;
          })
          .map(cacheName => caches.delete(cacheName))
      );
    })()
  );
});

function precache() {
  return caches.open(CACHE).then(function(cache) {
    return cache.addAll(precachedResources);
  });
}

self.addEventListener('fetch', event => {
  event.respondWith(
    (async () => {
      let request = event.request;
      const requestURL = new URL(request.url);
      if (
        request.mode === 'navigate' ||
        (!requestURL.pathname.includes('.') && requestURL.href.startsWith(self.registration.scope))
      ) {
        request = new Request('/');
      }

      const cache = await caches.open(CACHE);
      let networkResponsePromise;
      let cachedResponse;
      cachedResponse = await cache.match(request).catch(() => {});
      networkResponsePromise = fetch(request).catch(() => {});

      event.waitUntil(
        (async () => {
          const networkResponse = await networkResponsePromise;
          await cache.put(request, networkResponse.clone());
        })()
      );

      // Returned the cached response if we have one, otherwise return the network response.
      return (
        cachedResponse ||
        networkResponsePromise ||
        (await cache.match('index.html'))
      );
    })()
  );
});
