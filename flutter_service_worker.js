'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/asset/image/b1.jpeg": "175953eb48d786b7055c49b216f00578",
"assets/asset/image/b2.jpeg": "ce4566966a400c36d60fd26642562bc9",
"assets/asset/image/background.jpeg": "60f000d19010dc31320d7c3ff4b3f131",
"assets/asset/image/bg.gif": "dc9f949a7d36bc0e30d8f32f12dd76d1",
"assets/asset/image/buy.gif": "810f93e75f602e958345dda564333c27",
"assets/asset/image/c1.jpeg": "eecde0d3c9877aee1b2b48c1eda59d2b",
"assets/asset/image/clock.png": "c0091febbdfb94bacb488b00f4521d5a",
"assets/asset/image/demo.jpg": "ebefd49b33e8f367984ba7a7830f3fb3",
"assets/asset/image/dp.jpg": "80b28aef4cbedfb33310aeda3f529bce",
"assets/asset/image/e1.jpeg": "2499af91585e83222ede6afe33d8b575",
"assets/asset/image/e2.jpeg": "d76a43cf398c21f0b140642e174e8c39",
"assets/asset/image/e3.jpeg": "4ed6059409274676914ed09090e40043",
"assets/asset/image/e4.jpeg": "8be5806531575aa13d7fe98497fbb1db",
"assets/asset/image/eco1.jpeg": "4ae6b51e7530f251be8d4f323fd327a4",
"assets/asset/image/eco2.jpeg": "60d42546c6a09995b87122168dab08b4",
"assets/asset/image/f1.jpg": "78a68c00d54041e55eebf5b71ca5aa7a",
"assets/asset/image/f2.jpg": "8ce7e4ead3eb60bc311dd3db74420389",
"assets/asset/image/fast.gif": "f4b87cc11971a88dce4fba17d3fbe8a5",
"assets/asset/image/h1.jpeg": "7641cbe68a8194803f655f308a4953c6",
"assets/asset/image/h2.jpeg": "d4dc2277b78602d2b9ba757b423b3c1a",
"assets/asset/image/h3.jpeg": "4a69f06a13ee5e3e07cac092c68f6158",
"assets/asset/image/h4.jpeg": "2b95c525cf74dbed5f3208dfba4ee9e6",
"assets/asset/image/item1.jpeg": "b3c9792b94ded8eba6026a7f3fb99e83",
"assets/asset/image/item10.jpeg": "95ed985bc081e17d1027b9596dc839a8",
"assets/asset/image/item7.jpeg": "7e7b37839636c7ae4f46fac6ccef37db",
"assets/asset/image/light1.png": "6c8ba31eab30d40b5ce914be52ca484e",
"assets/asset/image/light2.png": "82bff49a319cf52b57967f67ead32154",
"assets/asset/image/login.jpg": "025b92bf45945fee0fd9ffa70aa2f9ea",
"assets/asset/image/logo.png": "d528396fd8ef44a51cb240834720ab6b",
"assets/asset/image/m1.jpeg": "86e2f7919380bc686970cf206c32a5a3",
"assets/asset/image/m2.jpeg": "274be14a6b61358cdd1fb48cf59e82fb",
"assets/asset/image/m3.jpeg": "861102a44f0c0bf96567520e088334c1",
"assets/asset/image/m4.jpeg": "1f5af56462123f2dfeb0bf7e67884ae1",
"assets/asset/image/one.jpg": "ce9893040198b916eedb673dc8d41f1b",
"assets/asset/image/playstore.png": "a18782f5c81ca45c7b111cc9b593d981",
"assets/asset/image/poster.png": "7ab3449bf049627183e3c23806541b4e",
"assets/asset/image/r1.jpeg": "016ceb2cbfeec7d3648b1f2cc27eaaed",
"assets/asset/image/r2.jpeg": "a672b0e0d0176baae25f0d4929ac1796",
"assets/asset/image/r3.jpeg": "330a355775e10dfed246bd93d4a2c2a8",
"assets/asset/image/res.jpg": "3fe85f4c464331959a697bbbfb17c26c",
"assets/asset/image/rice1.jpeg": "13201fee83b7b83dad896aa7e64698b7",
"assets/asset/image/rice2.jpeg": "06d268b8ae875fb0397f6374dc0cbb9f",
"assets/asset/image/rice3.jpeg": "0d777630e791847a516b320676751d10",
"assets/asset/image/rukhwat.jpg": "32a130f444e4d71544f6138c661bc670",
"assets/asset/image/s1.jpeg": "f569bb7412fdeeb272011461bb81440d",
"assets/asset/image/s1.png": "ec4cbc974f7757339e796611d1aa8a61",
"assets/asset/image/s2.jpeg": "34a32603253782c1c4515935c036ea12",
"assets/asset/image/s2.jpg": "5e32c0ac35b110719f72252bd887885c",
"assets/asset/image/side.gif": "04087a3848276e1089f6863ac5c1ad93",
"assets/asset/image/subs.jpg": "63662a5d3ca41a1db3f10c1ab894b4c0",
"assets/asset/image/support.gif": "48eec518116ed0039f318171e8fa4f9c",
"assets/asset/image/t1.jpeg": "d7c79af442f9e3715e95214682f7de08",
"assets/asset/image/t2.jpeg": "2771881f2d481ac80296fbc86939271d",
"assets/asset/image/t3.jpeg": "ae1448dafd23d23de557e422cceb9c98",
"assets/asset/image/t4.jpeg": "1a29120d7acb25fd6d7bf93ca4b35375",
"assets/asset/image/w1.jpeg": "4bb5305df8a9a125492d88fc0e155e9e",
"assets/asset/image/w2.jpeg": "f3c5fbac0dda9c4e05e7a6998f032bd9",
"assets/AssetManifest.json": "2a3a2cfc4db93dbcfa13ebc2786825f7",
"assets/FontManifest.json": "985126755eee6c828de86cf9cc9b25e6",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c25423f9ef72e46e0a3f26a50caab79c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/typicons_flutter/fonts/typicons.ttf": "29f9630f7d87a79830d1c321e1600f2e",
"assets/shaders/ink_sparkle.frag": "bb2f09705eebff3cafaaedd9ff45c211",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "714341a56a210afb76aa87a20abec3e8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "33b155a7a5e125fdc5e54218851711f7",
"icons/Icon-512.png": "a18782f5c81ca45c7b111cc9b593d981",
"icons/Icon-maskable-192.png": "33b155a7a5e125fdc5e54218851711f7",
"icons/Icon-maskable-512.png": "a18782f5c81ca45c7b111cc9b593d981",
"index.html": "7df25b64c2a4cb1ff7cdb66ff67caedb",
"/": "7df25b64c2a4cb1ff7cdb66ff67caedb",
"main.dart.js": "9494ff9ca4146dc490088c3da34441f7",
"manifest.json": "994299c949af66a115007cb16767d09f",
"version.json": "c49ee8ebd8075f4274514c8f93deff0e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
