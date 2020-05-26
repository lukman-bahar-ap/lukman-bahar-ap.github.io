importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

const CACHE_NAME = "mc-lukman-sub3-v1";

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  workbox.strategies.staleWhileRevalidate({
      cacheName: 'api-football-data.org',
      cacheExpiration: {
          maxAgeSeconds: 60 * 14 //14hr
      }
  })
);

workbox.precaching.precacheAndRoute([]);
workbox.precaching.precacheAndRoute([
  { url: '/index.html', revision: '1' },
  { url: '/team-info.html', revision: '1' },
  { url: '/push.js', revision: '1' },
  { url: '/app.js', revision: '1' },
  { url: '/manifest.json', revision: '1' },
  { url: '/images/logo.png', revision: '1' },
  { url: '/js/materialize.min.js', revision: '1' },
  { url: '/js/view/main.js', revision: '1' },
]);

workbox.routing.registerRoute(
  new RegExp('/pages/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'pages'
  })
);

// Menyimpan cache untuk file font selama 1 tahun
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com\/icon\?family\=Material\+Icons/,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);
// Menyimpan cache untuk file font selama 1 tahun
workbox.routing.registerRoute(
  /^https:\/\/code\.jquery\.com\/jquery\-3\.5\.1\.min\.js/,
  workbox.strategies.cacheFirst({
    cacheName: 'jquery',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  new RegExp('/js/utility/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'utility'
  })
);
workbox.routing.registerRoute(
  new RegExp('/js/dom-content-loaded/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'dom-content-loaded'
  })
);
workbox.routing.registerRoute(
  new RegExp('/css/'),
  workbox.strategies.cacheFirst({
    cacheName: 'css'
  })
);
workbox.routing.registerRoute(
  new RegExp('/js/component/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'component'
  })
);
workbox.routing.registerRoute(
  new RegExp('/js/api/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'api'
  })
);
workbox.routing.registerRoute(
  new RegExp('/js/db/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'db'
  })
);
workbox.routing.registerRoute(
  new RegExp('/images/bg-img/'),
  workbox.strategies.cacheFirst({
    cacheName: 'bg-img'
  })
);
workbox.routing.registerRoute(
  new RegExp('/images/icon/'),
  workbox.strategies.cacheFirst({
    cacheName: 'icon'
  })
);
workbox.routing.registerRoute(
  new RegExp('/images/slide-collection/'),
  workbox.strategies.cacheFirst({
    cacheName: 'slide'
  })
);
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 14, // 14 hari
      }),
    ],
  }),
);

self.addEventListener('push', event => {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  let options = {
    body: body,
    icon: '/images/icon/icon-m.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification aplikasi BOLA Premier League', options)
  );
});