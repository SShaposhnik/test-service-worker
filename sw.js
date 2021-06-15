/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute([{"revision":"b699ae3c6fd6146dae118b5fe180b446","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"d200b24bdbcb768519ab0ce2f5691886","url":"service-worker.js"},{"revision":"a5e43367aa8e4159a8cf0bf407048d89","url":"static/css/2.7b168c64.chunk.css"},{"revision":"01d4bee7aedd731ee780fdcb0156fc99","url":"static/css/main.d7e6dc52.chunk.css"},{"revision":"dbd09ed649a19cf879ac8f4d982078be","url":"static/js/2.06bcb912.chunk.js"},{"revision":"6bf9de76b971e724998ddf47876d8a47","url":"static/js/3.5149fe68.chunk.js"},{"revision":"aad8894631e6284127618bb240a4d806","url":"static/js/main.99472102.chunk.js"},{"revision":"d9c9501425eca14d2d64dea020e0fd05","url":"static/js/runtime-main.c0be44f5.js"}]);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith('/_')) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', async (event) => {
  console.log('addEventListener event', event);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    try {
      await self.skipWaiting()
      const clients = await self.clients.matchAll()
      clients.forEach(client => client.postMessage('reload-window'))
    } catch (e) {
      console.info(e)
    }
  }
});

// Any other custom service worker logic can go here.
