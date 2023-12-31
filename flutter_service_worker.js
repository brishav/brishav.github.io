'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "371a6f7fe450f674276a99eaa6e58619",
"index.html": "f80d4826ea4aec9a4f5bf9744641702b",
"/": "f80d4826ea4aec9a4f5bf9744641702b",
"main.dart.js": "b54b4a737e2b3e35a61f335197fb3861",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "335328d44edbfa84b714343abca5f038",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bb205ef01b92dc0259c7581962af16ff",
".git/config": "c0600dfb52e9c08f66044711e5892f7a",
".git/objects/0d/0d29dd4d9a7d7b1620106ec7067bc7e063635c": "8205fe3c4bb6d0975b093638a460910d",
".git/objects/9b/6f343d3f65c3e66b45411210accc2ebf0b6c1b": "4cfeba26c3ebb87e3d19c7b643afcac8",
".git/objects/32/61594b5ab8ad3d766f0f402c38fe994eb32844": "2d37d0399ac4b0dab87f384ce3ec5501",
".git/objects/69/c18296bcb788f604cd7d3198577e898388bb87": "e660048199acaa131cc1e4609c079178",
".git/objects/58/744c10ed759a2609f08a7629ebf6f1f8e71b4c": "c4a4179048cbae23f0e7535d1573c400",
".git/objects/67/22e9dfb57d3ed0f848789485bced209b19bd8e": "a7946626efddb32ce08e75f80e8c437d",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/02/45550748bee68d252345e7cc9350c5e91a637f": "009c72b2e56f0d2d0cd3ecb881221733",
".git/objects/d8/6fa40cf154a1cdbc0f56c5398b819095d3e8da": "cbcbfe79e3405e3613bda2472f65a0a6",
".git/objects/e5/9bc9b7f5ca072a2e0552528533c30c6dabac5b": "aa9699f193b5051fd39e9d15c072941a",
".git/objects/e2/43a2d1b2ce31e57d436e2cbb1b95f78ee7fae2": "5f2697e4916f65e3c901aedc9c1494ed",
".git/objects/c7/7fc979ee4fe0afe80bb25b2d7efea12ff7f478": "dbfe12d75c701711fc6a038a9c5b591b",
".git/objects/fc/5b5766fbf3f6249e7fcd2db7d16e4d18c83a6a": "56e4c3b2d56ab8480ac82addb1f3ff18",
".git/objects/cf/22d7f8acede164a7b2fbce6200e14e86126730": "a73303451ab55db0c4d2abd4bf0bde8d",
".git/objects/c8/10263a27ef25b71dea4026bac3b08e41377a1b": "2a906b60705978c1f107e2b1d94dec5e",
".git/objects/20/650d5211c85b107fbd88e2d85532f69a47b29f": "d162be9cc9bb12f27218e0ca2fb6ca2f",
".git/objects/pack/pack-67233dd999b1e94c8def7a577af1915de40ac0a6.pack": "72fa7e2451eba25ffb6bc28005e8e0a0",
".git/objects/pack/pack-67233dd999b1e94c8def7a577af1915de40ac0a6.idx": "672ce5e467769392a010c8eba303c241",
".git/objects/7d/38744ff16fdc1a748cf0d9d0a4962d51bfe15f": "ffe0f156125b3e2f9dad160995d349ef",
".git/objects/1f/7bcf49a74c910de3dfea863b1cad47443c285a": "4af0bca993c16b467e43e055337a804a",
".git/objects/74/b50df3952eb1c5edf213230a9ad6fafa4bcd50": "6970df56a6b4f7849a0ea42f7f66d8fc",
".git/objects/1a/9ec0d34d3e98695861958fc0072ecc37a21319": "93092052471caa896bb6610208495d0d",
".git/objects/26/841a32d20e646c2365db41681d182227887c99": "c5f1da37a141340c1559867c182342e5",
".git/objects/21/a523f15ef0b2f3f499d227136ca89fe7160d98": "994e997f6e38f0de0f66d4d2a304d9a9",
".git/objects/4d/8eff4bc9d3a1f5ed48a23608245aefcffe5c88": "24b19cf6373752683c8b09ef9145a6ac",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/09/f11098778e38280f6dd4375866bf5cfafa4a72": "d341e68e014e0872b7d2cd856ad5aa57",
".git/objects/31/faf5aca710bbfef917f5105dfc0811ba827f6e": "afc1b60336751cbe9d367d65c3c66946",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/01/f1030e50ff298e0aac1d2ba387290a22f51fbf": "4936681ac0935caacb4ee017c1a17849",
".git/objects/39/5bc75b7cc4e1456cc8ed9c1a4040e28845de50": "259e6615b4f8d6bd5040b332b419123c",
".git/objects/bf/ed1ba040b33af4da5a5d749a3d318671680f05": "753a479468d8694c4c50c36be3a2cbdd",
".git/objects/bf/b6dd1abff82eaf2d0a326e2fd56a8a687fc37b": "9f1a4f4b4e738984b72386c6417f250a",
".git/objects/d5/4a3b2c7adf598a52c1d933706585aaac286a28": "f660845f8c40d54d143c454bc38fcc74",
".git/objects/af/9384ea98432576cf451befff4e5c930d6ea878": "0d6df8511cb41f024a864998e370a7ae",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/ef/06168e92aa3901f828c71c29dfc4366ee41c27": "d6fd47fabbfbac80ca6482f393e15887",
".git/objects/e8/a8e04f613b7086232e7451b49fc94258e79306": "971b9951bfdac2d7e62cfa376e713597",
".git/objects/f1/fcca7d68c0561ba4af30312dc95e7fa1995314": "a1504a18932f33bd395111df8f24471e",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/70/a5fb04db4b1dd73ecb111e38f07ff42871cfc8": "519cdc837b37f38c8bb45fbaf6ad4a2c",
".git/objects/1e/cf810db8a173fe855f4f4fe043436c57266545": "d112a8c89058d4efe7999013bc5535c3",
".git/objects/84/333a75c64a11293a5de21e3b762b6149b73752": "138f9a1d3f668c2692ef17ae3523c2f0",
".git/objects/1c/a63f0c766004b60f6f2173d7dc1c236bd6f304": "b45c0433b8bf921b863d2dd3dffabfda",
".git/objects/2e/271d8d4d5ecf1e2c13d6897e57263f25e02495": "459ed92bb1e0cb1430b0921eda8aef30",
".git/objects/14/72523cdd9ce7519c596ed92c64e8158e9da115": "06b0c157818570e67a4fa711e2ae84d1",
".git/objects/22/327eac2845f1ac11372e3fdf048cc8ad0bf24f": "048faaa598679d5524fea8a3922d5364",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5dbd97c4dd5bc6de3bc083125c8da826",
".git/logs/refs/heads/main": "5dbd97c4dd5bc6de3bc083125c8da826",
".git/logs/refs/remotes/origin/HEAD": "e81373b1a342c9b3eb9f448cfbbc5938",
".git/logs/refs/remotes/origin/main": "973e6424c87f5711af12c6ca243b80cd",
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
".git/refs/heads/main": "c3ac86500d9a557e264affca81c62206",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c3ac86500d9a557e264affca81c62206",
".git/index": "40cdcffae8f945af13c3866c137a6a77",
".git/packed-refs": "ef802c588e249354d3ceb675d3d4063c",
".git/COMMIT_EDITMSG": "724daed105a739a12f70e3fc8e852b50",
"assets/AssetManifest.json": "70186bc2432e503576d53e1268c4e56d",
"assets/NOTICES": "99dac96c2d508889761dced1e7911b76",
"assets/FontManifest.json": "65b87b001a2d0b8ab96a151e102c0c09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/esc_pos_utils/resources/capabilities.json": "ae5c3288b81125ab9c54fff02d30387e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ebd872b25775f1262effc689387f1560",
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
