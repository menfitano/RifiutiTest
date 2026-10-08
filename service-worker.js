self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Listener per le notifiche programmate dal timer
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
    const { title, body, delay } = event.data;
    
    setTimeout(() => {
      self.registration.showNotification(title, {
        body: body,
        icon: 'umido.png', // Icona di default della notifica
        badge: 'umido.png',
        vibrate: [200, 100, 200],
        tag: 'rifiuti-notification'
      });
    }, delay);
  }
});
