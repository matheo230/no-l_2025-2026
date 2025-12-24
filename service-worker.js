const CACHE_NAME = 'noel-app-v1';
const urlsToCache = [
  '/',  
  '/index.html',
  '/login.html',
  '/anaya/anaya.html',
  '/bts/bts.html',
  '/blackpink/blackpink.html',
  '/maman/maman.html',
  '/maman/maman-moyenne.html',
  '/papa/papa.html',
  '/papa/billard.html',
  '/papa/football.html',
  '/css/style.css',
  '/js/script.js',
  '/js/main.js',
  // Images BTS
  '/images/bts1.jpg',
  '/images/bts2.jpg',
  '/images/bts3.jpg',
  '/images/bts4.jpg',
  '/images/bts5.jpg',
  // Images BLACKPINK
  '/images/bp1.jpg',
  '/images/bp2.jpg',
  '/images/bp3.jpg',
  '/images/bp4.jpg',
  // Icônes manifest
  '/icon-192.png',
  '/icon-512.png'
];

// Installation du SW et cache initial
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache ouvert et fichiers ajoutés');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activation du SW et nettoyage des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});

// Interception des requêtes pour renvoyer les fichiers du cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si trouvé dans le cache, renvoie le fichier
        if (response) return response;
        // Sinon, fetch normal
        return fetch(event.request);
      })
  );
});
