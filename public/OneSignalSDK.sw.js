importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

// Add message event listener for service worker
self.addEventListener('message', function(event) {
  // Handle messages from the main thread
  if (event.data && event.data.type) {
    console.log('Service worker received message:', event.data);
  }
});

