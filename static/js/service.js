/* Service Worker boilerplate, not in use at the moment. */

var urlsToCache = [
  '/static/css/fonts.css',
  '/static/css/vuelog.css'
]

// Set the callback for the install step
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', function(event) {
  console.log('Fetching resource')
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response
        }

        return fetch(event.request)
      }
    )
  )
})
