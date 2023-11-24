'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "371a6f7fe450f674276a99eaa6e58619",
"index.html": "db9a18876e36e3f258e5183256f5a9f0",
"/": "db9a18876e36e3f258e5183256f5a9f0",
"main.dart.js": "b9519ac70c8fb31ab51c9f540c8479ed",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "335328d44edbfa84b714343abca5f038",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bb205ef01b92dc0259c7581962af16ff",
".git/config": "c0600dfb52e9c08f66044711e5892f7a",
".git/objects/32/61594b5ab8ad3d766f0f402c38fe994eb32844": "2d37d0399ac4b0dab87f384ce3ec5501",
".git/objects/67/22e9dfb57d3ed0f848789485bced209b19bd8e": "a7946626efddb32ce08e75f80e8c437d",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/02/45550748bee68d252345e7cc9350c5e91a637f": "009c72b2e56f0d2d0cd3ecb881221733",
".git/objects/d8/6fa40cf154a1cdbc0f56c5398b819095d3e8da": "cbcbfe79e3405e3613bda2472f65a0a6",
".git/objects/c7/7fc979ee4fe0afe80bb25b2d7efea12ff7f478": "dbfe12d75c701711fc6a038a9c5b591b",
".git/objects/cf/22d7f8acede164a7b2fbce6200e14e86126730": "a73303451ab55db0c4d2abd4bf0bde8d",
".git/objects/c8/10263a27ef25b71dea4026bac3b08e41377a1b": "2a906b60705978c1f107e2b1d94dec5e",
".git/objects/20/650d5211c85b107fbd88e2d85532f69a47b29f": "d162be9cc9bb12f27218e0ca2fb6ca2f",
".git/objects/pack/pack-67233dd999b1e94c8def7a577af1915de40ac0a6.pack": "72fa7e2451eba25ffb6bc28005e8e0a0",
".git/objects/pack/pack-67233dd999b1e94c8def7a577af1915de40ac0a6.idx": "672ce5e467769392a010c8eba303c241",
".git/objects/74/b50df3952eb1c5edf213230a9ad6fafa4bcd50": "6970df56a6b4f7849a0ea42f7f66d8fc",
".git/objects/26/841a32d20e646c2365db41681d182227887c99": "c5f1da37a141340c1559867c182342e5",
".git/objects/21/a523f15ef0b2f3f499d227136ca89fe7160d98": "994e997f6e38f0de0f66d4d2a304d9a9",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/bf/b6dd1abff82eaf2d0a326e2fd56a8a687fc37b": "9f1a4f4b4e738984b72386c6417f250a",
".git/objects/d5/4a3b2c7adf598a52c1d933706585aaac286a28": "f660845f8c40d54d143c454bc38fcc74",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/ef/06168e92aa3901f828c71c29dfc4366ee41c27": "d6fd47fabbfbac80ca6482f393e15887",
".git/objects/e8/a8e04f613b7086232e7451b49fc94258e79306": "971b9951bfdac2d7e62cfa376e713597",
".git/objects/f1/fcca7d68c0561ba4af30312dc95e7fa1995314": "a1504a18932f33bd395111df8f24471e",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/84/333a75c64a11293a5de21e3b762b6149b73752": "138f9a1d3f668c2692ef17ae3523c2f0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "15ccdc381f8ec1f6c07125cf3892b9f7",
".git/logs/refs/heads/main": "15ccdc381f8ec1f6c07125cf3892b9f7",
".git/logs/refs/remotes/origin/HEAD": "e81373b1a342c9b3eb9f448cfbbc5938",
".git/logs/refs/remotes/origin/main": "1d79aadda3a3a8382a65cbee1eb60418",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f3330e9b51359b270b2565ddce802be0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f3330e9b51359b270b2565ddce802be0",
".git/index": "6eed4cca2d6e74062716a46b2e6943b8",
".git/packed-refs": "ef802c588e249354d3ceb675d3d4063c",
".git/COMMIT_EDITMSG": "c41fcee526cb3050462881710c625699",
"assets/AssetManifest.json": "23a7bbc74ff05fa11dce01901ebf6f58",
"assets/NOTICES": "eca87b1628da95202fe69bdda6f58590",
"assets/FontManifest.json": "65b87b001a2d0b8ab96a151e102c0c09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1386f1bc1bc3f1374256a3b55d13db6b",
"assets/fonts/MaterialIcons-Regular.otf": "5e2ffd174199f811a93181d63da4f99f",
"assets/assets/images/brishav.jpg": "bc3925b8e94c3b8a8853d341776650eb",
"assets/assets/images/app_logo.png": "335328d44edbfa84b714343abca5f038",
"assets/assets/fonts/google_sans.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
