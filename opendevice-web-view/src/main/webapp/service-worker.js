/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/login","ea1674ead325d662e0a24e888a7b0b89"],["css/login.css","d6129053d53e77bfb982022ab203ea9f"],["css/normalize.css","8a43efb3691961b9bf37675bee31311f"],["dist/css/contrib.min.css","6d41ab23dc00bdcae4b54f31573ee68b"],["dist/css/main.min.css","35998d2f3f63c41d21309fc54472c7e4"],["dist/css/plugins.min.css","3c56be2b385e916d6a581b4e32dad5a1"],["dist/js/angular.bundle.js","daf01ae9ceaeb255c22577c6d97ccc6e"],["dist/js/contrib.bundle.js","86c131d1e84dbb23645607714458d310"],["dist/js/main.min.js","eaaa3f996771fc04e5d9795e54cfa35f"],["dist/js/opendevice.bundle.js","61e91df196cf3f19d4f3a56e5199a935"],["fonts/Source-Sans-Pro-300/Source-Sans-Pro-300.ttf","6a9d4d28a117a8364376de2f17ee5ff9"],["fonts/Source-Sans-Pro-700/Source-Sans-Pro-700.ttf","206f41ff7cdb7df5dbfeda33c847b793"],["fonts/Source-Sans-Pro-regular/Source-Sans-Pro-regular.ttf","f2d83436dcf3f53375518292e917643c"],["fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["images/boards/ESP8266.png","d7ea8993c65a570b3cbf1eb67c4b94ba"],["images/boards/generic-blue.png","9362702e801ccd06298946e3b29546bf"],["images/boards/generic-green.png","95988089a122e2db9e5c934c02b68865"],["images/boards/generic.svg","0bd848813e9d08f40d61b2ee6cb55d09"],["images/boards/preview_board.svg","fb2eb0e35c072aae2fc95b144d02cb2b"],["images/devices/battery.png","e5f6261e4f2607dbc0449e69118017e3"],["images/devices/battery_half.png","78cb05bcb113521b5fcb0b23e2324587"],["images/devices/battery_off.png","c05fe84be67fbd6a86aa897a25c4b2b8"],["images/devices/battery_on.png","f8f055faa6f4cc14c5adc0b1dec236f3"],["images/devices/lightbulb_add.png","e18f4a723521f8227e3b1c797501f8ea"],["images/devices/lightbulb_delete.png","bc84e3140794b3538eacef47dc70d14f"],["images/devices/lightbulb_off.png","29d0cadd8baa828bcd507dda95ca4345"],["images/devices/lightbulb_on.png","3ccb47636350441343153d2499e492b7"],["images/devices/sensor_off.png","69cd4229ac3c37b6f09697bd9b39546e"],["images/devices/sensor_on.png","9ba6d420a215575bf821a7185bbbf8b2"],["images/favicon.png","763cb75bf2e5813fef3221f7ba96e157"],["images/mws-logo.png","9b5b0035523e57960de42c9731d7e7d7"],["images/profile.jpg","982ad1f98b5729ab54d97bd1afa5f7b1"],["js/jquery-2.2.3.min.js","2a4b79b7b95ce5d591f19ca0a2b64e62"],["login.html","7344b3952192eb2231f4a430be83c39d"],["pages/boards.html","8de8a79ba746ff997490def679fed6ca"],["pages/connections.html","5d70d3ac3d5e487678d3ee57118d769b"],["pages/dashboard.html","2f0c86cf03443d2a95f7caa0d03d0d0e"],["pages/devices.html","8c3d55ffc2c8b02e69544f08f60644c8"],["pages/jobs.html","e1194882fb0a2cb1a7e3b5b7af764ea7"],["pages/new.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/rules.html","6d9f358f4e4cb9f21beac4e5fb4dfcb9"],["pages/subpages/actions.html","ac07574bbab25ca23d1b15efb4ed24a3"],["pages/subpages/confirm.html","657a8e23cd1b7cd5dca18f420a15c96a"],["pages/subpages/new-dashview.html","aab992f5df3b6d96c8c7ef34df07a32d"],["pages/subpages/new-job.html","6b2c00aed24298f004728ae30bd41d86"],["pages/subpages/new-rule.html","d7d874e16dfc00a0bd0e33f7c3f2d9da"],["pages/users.html","aeb37d6783dc985df29de1ec4168b6d2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







