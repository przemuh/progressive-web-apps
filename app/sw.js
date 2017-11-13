self.addEventListener('install', event => {
    console.log('Service worker installed', self ,event);
});

self.addEventListener('fetch', event => {
    console.log('Service worker fetch event', self, event);
});