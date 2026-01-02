// Minimal service worker to prevent 404 errors
self.addEventListener('install', () => {
  console.log('Service Worker installed');
});

self.addEventListener('activate', () => {
  console.log('Service Worker activated');  
});

self.addEventListener('fetch', () => {
  // Pass through all requests
  return;
});