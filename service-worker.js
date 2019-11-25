/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ico",
    "revision": "f776412bd6036b55da0dbcc8d35a0ab9"
  },
  {
    "url": "icons/android/icon_144x144.67c3acd9e0cb956a5309a419ed7f916c.png",
    "revision": "67c3acd9e0cb956a5309a419ed7f916c"
  },
  {
    "url": "icons/android/icon_192x192.1f5672a7c6aa87eb2bfa6145250c875d.png",
    "revision": "1f5672a7c6aa87eb2bfa6145250c875d"
  },
  {
    "url": "icons/android/icon_36x36.b8f977e5e1841a6bbff5c7dd227d6d4c.png",
    "revision": "b8f977e5e1841a6bbff5c7dd227d6d4c"
  },
  {
    "url": "icons/android/icon_48x48.816a2f3497fe1a3eb992a91fe34c3589.png",
    "revision": "816a2f3497fe1a3eb992a91fe34c3589"
  },
  {
    "url": "icons/android/icon_512x512.bdfad856286f853afde40370c6a46acc.png",
    "revision": "bdfad856286f853afde40370c6a46acc"
  },
  {
    "url": "icons/android/icon_72x72.ef9190d068890fe036c4141950fb0d7b.png",
    "revision": "ef9190d068890fe036c4141950fb0d7b"
  },
  {
    "url": "icons/android/icon_96x96.ac1b07fe7424e36d1b98fa5b1a1a36af.png",
    "revision": "ac1b07fe7424e36d1b98fa5b1a1a36af"
  },
  {
    "url": "icons/ios/icon_1024x1024.ad4d21f0cfd6a46b49dee80c943f3a0b.png",
    "revision": "ad4d21f0cfd6a46b49dee80c943f3a0b"
  },
  {
    "url": "icons/ios/icon_120x120.871ff7e4ea481cfbf67ac9602d10bfb0.png",
    "revision": "871ff7e4ea481cfbf67ac9602d10bfb0"
  },
  {
    "url": "icons/ios/icon_144x144.67c3acd9e0cb956a5309a419ed7f916c.png",
    "revision": "67c3acd9e0cb956a5309a419ed7f916c"
  },
  {
    "url": "icons/ios/icon_152x152.d5c81bdafd5c2bcfe57dbaac0ba53e1c.png",
    "revision": "d5c81bdafd5c2bcfe57dbaac0ba53e1c"
  },
  {
    "url": "icons/ios/icon_167x167.54f0758c067fed44d554aa188ad36e41.png",
    "revision": "54f0758c067fed44d554aa188ad36e41"
  },
  {
    "url": "icons/ios/icon_180x180.50537beb7f6f8ea367676d167b943a2d.png",
    "revision": "50537beb7f6f8ea367676d167b943a2d"
  },
  {
    "url": "icons/ios/icon_192x192.1f5672a7c6aa87eb2bfa6145250c875d.png",
    "revision": "1f5672a7c6aa87eb2bfa6145250c875d"
  },
  {
    "url": "icons/ios/icon_256x256.d1d82d04c01936dc7cc86395e52d7c47.png",
    "revision": "d1d82d04c01936dc7cc86395e52d7c47"
  },
  {
    "url": "icons/ios/icon_512x512.bdfad856286f853afde40370c6a46acc.png",
    "revision": "bdfad856286f853afde40370c6a46acc"
  },
  {
    "url": "index.html",
    "revision": "97b723847e54d08c8f59ac37979cb264"
  },
  {
    "url": "js/0.bundle.de7b9b7869923d316b87.min.js",
    "revision": "13acb6b30c04a14cb0b27b94611b42e2"
  },
  {
    "url": "js/2.bundle.de7b9b7869923d316b87.min.js",
    "revision": "29013aa82a99a39e5c0311a5a72250ca"
  },
  {
    "url": "js/bundle.de7b9b7869923d316b87.min.js",
    "revision": "f29cb82520867302cba0731cbe7b0791"
  },
  {
    "url": "manifest.df46a0cdd1b5c392ad7896ebf48c6ac8.json",
    "revision": "df46a0cdd1b5c392ad7896ebf48c6ac8"
  },
  {
    "url": "precache-manifest.565d00b9dfb9e46042196c48ea30890a.js",
    "revision": "565d00b9dfb9e46042196c48ea30890a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
