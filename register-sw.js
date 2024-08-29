// Basic Service Worker Registration
self.addEventListener('install', function (event) {
    console.log('Service Worker installing.');
    // You can cache files here during the install phase
});

self.addEventListener('activate', function (event) {
    console.log('Service Worker activating.');
    // Clean up old caches or other tasks during activation
});

self.addEventListener('fetch', function (event) {
    console.log('Fetching:', event.request.url);
    // Optionally, respond with cached content here
});
