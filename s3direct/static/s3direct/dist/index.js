// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1ntbq":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "57b6138dd00e5fc2";
module.bundle.HMR_BUNDLE_ID = "ca8d3ee009fc432b";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aI6f5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _shaJs = require("sha.js");
var _shaJsDefault = parcelHelpers.interopDefault(_shaJs);
var _evaporate = require("evaporate");
var _evaporateDefault = parcelHelpers.interopDefault(_evaporate);
var _sparkMd5 = require("spark-md5");
var _sparkMd5Default = parcelHelpers.interopDefault(_sparkMd5);
var _bootstrapProgressMinCss = require("./css/bootstrap-progress.min.css");
var _stylesCss = require("./css/styles.css");
const request = (method, url, data, headers, el, cb)=>{
    let req = new XMLHttpRequest();
    req.open(method, url, true);
    Object.keys(headers).forEach((key)=>{
        req.setRequestHeader(key, headers[key]);
    });
    req.onload = ()=>{
        cb(req.status, req.responseText);
    };
    req.onerror = req.onabort = ()=>{
        disableSubmit(false);
        error(el, 'Sorry, failed to upload file.');
    };
    req.send(data);
};
const parseNameFromUrl = (url)=>{
    return decodeURIComponent((url + '').replace(/\+/g, '%20'));
};
const parseJson = (json)=>{
    let data;
    try {
        data = JSON.parse(json);
    } catch (e) {
        data = null;
    }
    return data;
};
const updateProgressBar = (element, progressRatio)=>{
    const bar = element.querySelector('.bar');
    bar.style.width = Math.round(progressRatio * 100) + '%';
};
const error = (el, msg)=>{
    el.className = 's3direct form-active';
    el.querySelector('.file-input').value = '';
    alert(msg);
};
let concurrentUploads = 0;
const disableSubmit = (status)=>{
    const submitRow = document.querySelector('.submit-row');
    if (!submitRow) return;
    const buttons = submitRow.querySelectorAll('input[type=submit],button[type=submit]');
    if (status === true) concurrentUploads++;
    else concurrentUploads--;
    [].forEach.call(buttons, (el)=>{
        el.disabled = concurrentUploads !== 0;
    });
};
const beginUpload = (element)=>{
    disableSubmit(true);
    element.className = 's3direct progress-active';
};
const finishUpload = (element, endpoint, bucket, objectKey)=>{
    const link = element.querySelector('.file-link');
    const url = element.querySelector('.file-url');
    url.value = endpoint + '/' + bucket + '/' + objectKey;
    link.setAttribute('href', url.value);
    link.innerHTML = parseNameFromUrl(url.value).split('/').pop();
    element.className = 's3direct link-active';
    element.querySelector('.bar').style.width = '0%';
    disableSubmit(false);
};
const computeMd5 = (data)=>{
    return btoa(_sparkMd5Default.default.ArrayBuffer.hash(data, true));
};
const computeSha256 = (data)=>{
    return _shaJsDefault.default('sha256').update(data, 'utf-8').digest('hex');
};
const getCsrfToken = (element)=>{
    const cookieInput = element.querySelector('.csrf-cookie-name');
    const input = document.querySelector('input[name=csrfmiddlewaretoken]');
    const token = input ? input.value : _jsCookieDefault.default.get(cookieInput.value);
    return token;
};
const generateAmzInitHeaders = (acl, serverSideEncryption, sessionToken)=>{
    const headers = {};
    if (acl) headers['x-amz-acl'] = acl;
    if (sessionToken) headers['x-amz-security-token'] = sessionToken;
    if (serverSideEncryption) headers['x-amz-server-side-encryption'] = serverSideEncryption;
    return headers;
};
const generateAmzCommonHeaders = (sessionToken)=>{
    const headers = {};
    if (sessionToken) headers['x-amz-security-token'] = sessionToken;
    return headers;
};
const generateCustomAuthMethod = (element, signingUrl, dest)=>{
    const getAwsV4Signature = (_signParams, _signHeaders, stringToSign, signatureDateTime, _canonicalRequest)=>{
        return new Promise((resolve, reject)=>{
            const form = new FormData();
            const headers = {
                'X-CSRFToken': getCsrfToken(element)
            };
            form.append('to_sign', stringToSign);
            form.append('datetime', signatureDateTime);
            form.append('dest', dest);
            request('POST', signingUrl, form, headers, element, (status, resp)=>{
                const response = parseJson(resp);
                switch(status){
                    case 200:
                        resolve(response.s3ObjKey);
                        break;
                    case 403:
                    default:
                        reject(response.error);
                        break;
                }
            });
        });
    };
    return getAwsV4Signature;
};
const initiateUpload = (element, signingUrl, uploadParameters, file, dest)=>{
    const createConfig = {
        customAuthMethod: generateCustomAuthMethod(element, signingUrl, dest),
        aws_key: uploadParameters.access_key_id,
        bucket: uploadParameters.bucket,
        aws_url: uploadParameters.endpoint,
        awsRegion: uploadParameters.region,
        computeContentMd5: true,
        cryptoMd5Method: computeMd5,
        cryptoHexEncodedHash256: computeSha256,
        partSize: 20971520,
        logging: true,
        allowS3ExistenceOptimization: uploadParameters.allow_existence_optimization,
        s3FileCacheHoursAgo: uploadParameters.allow_existence_optimization ? 12 : 0
    };
    const addConfig = {
        name: uploadParameters.object_key,
        file: file,
        contentType: file.type,
        xAmzHeadersCommon: generateAmzCommonHeaders(uploadParameters.session_token),
        xAmzHeadersAtInitiate: generateAmzInitHeaders(uploadParameters.acl, uploadParameters.server_side_encryption, uploadParameters.session_token),
        progress: (progressRatio, stats)=>{
            updateProgressBar(element, progressRatio);
        },
        warn: (warnType, area, msg)=>{
            if (msg.includes('InvalidAccessKeyId')) error(element, msg);
        }
    };
    const optHeaders = {};
    if (uploadParameters.cache_control) optHeaders['Cache-Control'] = uploadParameters.cache_control;
    if (uploadParameters.content_disposition) optHeaders['Content-Disposition'] = uploadParameters.content_disposition;
    addConfig['notSignedHeadersAtInitiate'] = optHeaders;
    _evaporateDefault.default.create(createConfig).then((evaporate)=>{
        beginUpload(element);
        evaporate.add(addConfig).then((s3Objkey)=>{
            finishUpload(element, uploadParameters.endpoint, uploadParameters.bucket, s3Objkey);
        }, (reason)=>{
            return error(element, reason);
        });
    });
};
const checkFileAndInitiateUpload = (event)=>{
    const element = event.target.parentElement;
    const file = element.querySelector('.file-input').files[0];
    const dest = element.querySelector('.file-dest').value;
    const destCheckUrl = element.getAttribute('data-policy-url');
    const signerUrl = element.getAttribute('data-signing-url');
    const form = new FormData();
    const headers = {
        'X-CSRFToken': getCsrfToken(element)
    };
    form.append('dest', dest);
    form.append('name', file.name);
    form.append('type', file.type);
    form.append('size', file.size);
    request('POST', destCheckUrl, form, headers, element, (status, response)=>{
        const uploadParameters = parseJson(response);
        switch(status){
            case 200:
                initiateUpload(element, signerUrl, uploadParameters, file, dest);
                break;
            case 400:
            case 403:
            case 500:
                error(element, uploadParameters.error);
                break;
            default:
                error(element, 'Sorry, could not get upload URL.');
        }
    });
};
const removeUpload = (e)=>{
    e.preventDefault();
    const el = e.target.parentElement;
    el.querySelector('.file-url').value = '';
    el.querySelector('.file-input').value = '';
    el.className = 's3direct form-active';
};
const addHandlers = (el)=>{
    const url = el.querySelector('.file-url');
    const input = el.querySelector('.file-input');
    const remove = el.querySelector('.file-remove');
    const status = url.value === '' ? 'form' : 'link';
    el.className = 's3direct ' + status + '-active';
    remove.addEventListener('click', removeUpload, false);
    input.addEventListener('change', checkFileAndInitiateUpload, false);
};
document.addEventListener('DOMContentLoaded', (event)=>{
    [].forEach.call(document.querySelectorAll('.s3direct'), addHandlers);
});
document.addEventListener('DOMNodeInserted', (event)=>{
    if (event.target.tagName) {
        const el = event.target.querySelectorAll('.s3direct');
        [].forEach.call(el, (element, index, array)=>{
            addHandlers(element);
        });
    }
});

},{"js-cookie":"eqC0v","sha.js":"16giy","evaporate":"eJTmK","spark-md5":"aSUyG","./css/bootstrap-progress.min.css":"eRcmX","./css/styles.css":"ekxYL","@parcel/transformer-js/src/esmodule-helpers.js":"kyOlh"}],"eqC0v":[function(require,module,exports) {
(function(factory) {
    var registeredInModuleLoader = false;
    if (typeof define === 'function' && define.amd) {
        define(factory);
        registeredInModuleLoader = true;
    }
    module.exports = factory();
    registeredInModuleLoader = true;
    if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function() {
            window.Cookies = OldCookies;
            return api;
        };
    }
})(function() {
    function extend() {
        var i = 0;
        var result = {};
        for(; i < arguments.length; i++){
            var attributes = arguments[i];
            for(var key in attributes)result[key] = attributes[key];
        }
        return result;
    }
    function init(converter) {
        function api(key, value, attributes) {
            var result;
            if (typeof document === 'undefined') return;
            // Write
            if (arguments.length > 1) {
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);
                if (typeof attributes.expires === 'number') {
                    var expires = new Date();
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 86400000);
                    attributes.expires = expires;
                }
                // We're using "expires" because "max-age" is not supported by IE
                attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) value = result;
                } catch (e) {}
                if (!converter.write) value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                else value = converter.write(value, key);
                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, escape);
                var stringifiedAttributes = '';
                for(var attributeName in attributes){
                    if (!attributes[attributeName]) continue;
                    stringifiedAttributes += '; ' + attributeName;
                    if (attributes[attributeName] === true) continue;
                    stringifiedAttributes += '=' + attributes[attributeName];
                }
                return document.cookie = key + '=' + value + stringifiedAttributes;
            }
            // Read
            if (!key) result = {};
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling "get()"
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;
            for(; i < cookies.length; i++){
                var parts = cookies[i].split('=');
                var cookie = parts.slice(1).join('=');
                if (!this.json && cookie.charAt(0) === '"') cookie = cookie.slice(1, -1);
                try {
                    var name = parts[0].replace(rdecode, decodeURIComponent);
                    cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
                    if (this.json) try {
                        cookie = JSON.parse(cookie);
                    } catch (e) {}
                    if (key === name) {
                        result = cookie;
                        break;
                    }
                    if (!key) result[name] = cookie;
                } catch (e) {}
            }
            return result;
        }
        api.set = api;
        api.get = function(key) {
            return api.call(api, key);
        };
        api.getJSON = function() {
            return api.apply({
                json: true
            }, [].slice.call(arguments));
        };
        api.defaults = {};
        api.remove = function(key, attributes) {
            api(key, '', extend(attributes, {
                expires: -1
            }));
        };
        api.withConverter = init;
        return api;
    }
    return init(function() {});
});

},{}],"16giy":[function(require,module,exports) {
var exports = module.exports = function SHA(algorithm) {
    algorithm = algorithm.toLowerCase();
    var Algorithm = exports[algorithm];
    if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)');
    return new Algorithm();
};
exports.sha = require('./sha');
exports.sha1 = require('./sha1');
exports.sha224 = require('./sha224');
exports.sha256 = require('./sha256');
exports.sha384 = require('./sha384');
exports.sha512 = require('./sha512');

},{"./sha":"84tmO","./sha1":"f4sf9","./sha224":"4hrOe","./sha256":"bjybX","./sha384":"hQXJU","./sha512":"3Iehn"}],"84tmO":[function(require,module,exports) {
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
 * in FIPS PUB 180-1
 * This source code is derived from sha1.js of the same repository.
 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
 * operation was added.
 */ var inherits = require('inherits');
var Hash = require('./hash');
var Buffer = require('safe-buffer').Buffer;
var K = [
    1518500249,
    1859775393,
    -1894007588,
    -899497514
];
var W = new Array(80);
function Sha() {
    this.init();
    this._w = W;
    Hash.call(this, 64, 56);
}
inherits(Sha, Hash);
Sha.prototype.init = function() {
    this._a = 1732584193;
    this._b = 4023233417;
    this._c = 2562383102;
    this._d = 271733878;
    this._e = 3285377520;
    return this;
};
function rotl5(num) {
    return num << 5 | num >>> 27;
}
function rotl30(num) {
    return num << 30 | num >>> 2;
}
function ft(s, b, c, d) {
    if (s === 0) return b & c | ~b & d;
    if (s === 2) return b & c | b & d | c & d;
    return b ^ c ^ d;
}
Sha.prototype._update = function(M) {
    var W1 = this._w;
    var a = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;
    for(var i = 0; i < 16; ++i)W1[i] = M.readInt32BE(i * 4);
    for(; i < 80; ++i)W1[i] = W1[i - 3] ^ W1[i - 8] ^ W1[i - 14] ^ W1[i - 16];
    for(var j = 0; j < 80; ++j){
        var s = ~~(j / 20);
        var t = rotl5(a) + ft(s, b, c, d) + e + W1[j] + K[s] | 0;
        e = d;
        d = c;
        c = rotl30(b);
        b = a;
        a = t;
    }
    this._a = a + this._a | 0;
    this._b = b + this._b | 0;
    this._c = c + this._c | 0;
    this._d = d + this._d | 0;
    this._e = e + this._e | 0;
};
Sha.prototype._hash = function() {
    var H = Buffer.allocUnsafe(20);
    H.writeInt32BE(this._a | 0, 0);
    H.writeInt32BE(this._b | 0, 4);
    H.writeInt32BE(this._c | 0, 8);
    H.writeInt32BE(this._d | 0, 12);
    H.writeInt32BE(this._e | 0, 16);
    return H;
};
module.exports = Sha;

},{"inherits":"5giYL","./hash":"4ZEkm","safe-buffer":"fnbeG"}],"5giYL":[function(require,module,exports) {
if (typeof Object.create === 'function') // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function() {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
};

},{}],"4ZEkm":[function(require,module,exports) {
var Buffer = require('safe-buffer').Buffer;
// prototype class for hash functions
function Hash(blockSize, finalSize) {
    this._block = Buffer.alloc(blockSize);
    this._finalSize = finalSize;
    this._blockSize = blockSize;
    this._len = 0;
}
Hash.prototype.update = function(data, enc) {
    if (typeof data === 'string') {
        enc = enc || 'utf8';
        data = Buffer.from(data, enc);
    }
    var block = this._block;
    var blockSize = this._blockSize;
    var length = data.length;
    var accum = this._len;
    for(var offset = 0; offset < length;){
        var assigned = accum % blockSize;
        var remainder = Math.min(length - offset, blockSize - assigned);
        for(var i = 0; i < remainder; i++)block[assigned + i] = data[offset + i];
        accum += remainder;
        offset += remainder;
        if (accum % blockSize === 0) this._update(block);
    }
    this._len += length;
    return this;
};
Hash.prototype.digest = function(enc) {
    var rem = this._len % this._blockSize;
    this._block[rem] = 128;
    // zero (rem + 1) trailing bits, where (rem + 1) is the smallest
    // non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize
    this._block.fill(0, rem + 1);
    if (rem >= this._finalSize) {
        this._update(this._block);
        this._block.fill(0);
    }
    var bits = this._len * 8;
    // uint32
    if (bits <= 4294967295) this._block.writeUInt32BE(bits, this._blockSize - 4);
    else {
        var lowBits = (bits & 4294967295) >>> 0;
        var highBits = (bits - lowBits) / 4294967296;
        this._block.writeUInt32BE(highBits, this._blockSize - 8);
        this._block.writeUInt32BE(lowBits, this._blockSize - 4);
    }
    this._update(this._block);
    var hash = this._hash();
    return enc ? hash.toString(enc) : hash;
};
Hash.prototype._update = function() {
    throw new Error('_update must be implemented by subclass');
};
module.exports = Hash;

},{"safe-buffer":"fnbeG"}],"fnbeG":[function(require,module,exports) {
/* eslint-disable node/no-deprecated-api */ var buffer = require('buffer');
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module.exports = buffer;
else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') throw new TypeError('Argument must not be a number');
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return buffer.SlowBuffer(size);
};

},{"buffer":"iow0l"}],"iow0l":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
const base64 = require('base64-js');
const ieee754 = require('ieee754');
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i1;
    if (dir) {
        let foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    let val = this[offset + --byteLength2];
    let mul = 1;
    while(byteLength2 > 0 && (mul *= 256))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength3 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    let i = byteLength4;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 255;
    while(++i < byteLength5 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    let i = byteLength6 - 1;
    let mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength7 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    let i = byteLength8 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength9) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength9] === undefined) boundsError(offset, buf.length - (byteLength9 + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength10) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength10 > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength10 + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength10 + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength10 + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength10);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

},{"base64-js":"bAAHS","ieee754":"zjJza"}],"bAAHS":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len2; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i2 = start; i2 < end; i2 += 3){
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len3 = uint8.length;
    var extraBytes = len3 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i3 = 0, len2 = len3 - extraBytes; i3 < len2; i3 += maxChunkLength)parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len2 ? len2 : i3 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len3 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len3 - 2] << 8) + uint8[len3 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"zjJza":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"f4sf9":[function(require,module,exports) {
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */ var inherits = require('inherits');
var Hash = require('./hash');
var Buffer = require('safe-buffer').Buffer;
var K = [
    1518500249,
    1859775393,
    -1894007588,
    -899497514
];
var W = new Array(80);
function Sha1() {
    this.init();
    this._w = W;
    Hash.call(this, 64, 56);
}
inherits(Sha1, Hash);
Sha1.prototype.init = function() {
    this._a = 1732584193;
    this._b = 4023233417;
    this._c = 2562383102;
    this._d = 271733878;
    this._e = 3285377520;
    return this;
};
function rotl1(num) {
    return num << 1 | num >>> 31;
}
function rotl5(num) {
    return num << 5 | num >>> 27;
}
function rotl30(num) {
    return num << 30 | num >>> 2;
}
function ft(s, b, c, d) {
    if (s === 0) return b & c | ~b & d;
    if (s === 2) return b & c | b & d | c & d;
    return b ^ c ^ d;
}
Sha1.prototype._update = function(M) {
    var W1 = this._w;
    var a = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;
    for(var i = 0; i < 16; ++i)W1[i] = M.readInt32BE(i * 4);
    for(; i < 80; ++i)W1[i] = rotl1(W1[i - 3] ^ W1[i - 8] ^ W1[i - 14] ^ W1[i - 16]);
    for(var j = 0; j < 80; ++j){
        var s = ~~(j / 20);
        var t = rotl5(a) + ft(s, b, c, d) + e + W1[j] + K[s] | 0;
        e = d;
        d = c;
        c = rotl30(b);
        b = a;
        a = t;
    }
    this._a = a + this._a | 0;
    this._b = b + this._b | 0;
    this._c = c + this._c | 0;
    this._d = d + this._d | 0;
    this._e = e + this._e | 0;
};
Sha1.prototype._hash = function() {
    var H = Buffer.allocUnsafe(20);
    H.writeInt32BE(this._a | 0, 0);
    H.writeInt32BE(this._b | 0, 4);
    H.writeInt32BE(this._c | 0, 8);
    H.writeInt32BE(this._d | 0, 12);
    H.writeInt32BE(this._e | 0, 16);
    return H;
};
module.exports = Sha1;

},{"inherits":"5giYL","./hash":"4ZEkm","safe-buffer":"fnbeG"}],"4hrOe":[function(require,module,exports) {
/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */ var inherits = require('inherits');
var Sha256 = require('./sha256');
var Hash = require('./hash');
var Buffer = require('safe-buffer').Buffer;
var W = new Array(64);
function Sha224() {
    this.init();
    this._w = W // new Array(64)
    ;
    Hash.call(this, 64, 56);
}
inherits(Sha224, Sha256);
Sha224.prototype.init = function() {
    this._a = 3238371032;
    this._b = 914150663;
    this._c = 812702999;
    this._d = 4144912697;
    this._e = 4290775857;
    this._f = 1750603025;
    this._g = 1694076839;
    this._h = 3204075428;
    return this;
};
Sha224.prototype._hash = function() {
    var H = Buffer.allocUnsafe(28);
    H.writeInt32BE(this._a, 0);
    H.writeInt32BE(this._b, 4);
    H.writeInt32BE(this._c, 8);
    H.writeInt32BE(this._d, 12);
    H.writeInt32BE(this._e, 16);
    H.writeInt32BE(this._f, 20);
    H.writeInt32BE(this._g, 24);
    return H;
};
module.exports = Sha224;

},{"inherits":"5giYL","./sha256":"bjybX","./hash":"4ZEkm","safe-buffer":"fnbeG"}],"bjybX":[function(require,module,exports) {
/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */ var inherits = require('inherits');
var Hash = require('./hash');
var Buffer = require('safe-buffer').Buffer;
var K = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
];
var W = new Array(64);
function Sha256() {
    this.init();
    this._w = W // new Array(64)
    ;
    Hash.call(this, 64, 56);
}
inherits(Sha256, Hash);
Sha256.prototype.init = function() {
    this._a = 1779033703;
    this._b = 3144134277;
    this._c = 1013904242;
    this._d = 2773480762;
    this._e = 1359893119;
    this._f = 2600822924;
    this._g = 528734635;
    this._h = 1541459225;
    return this;
};
function ch(x, y, z) {
    return z ^ x & (y ^ z);
}
function maj(x, y, z) {
    return x & y | z & (x | y);
}
function sigma0(x) {
    return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
}
function sigma1(x) {
    return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
}
function gamma0(x) {
    return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
}
function gamma1(x) {
    return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
}
Sha256.prototype._update = function(M) {
    var W1 = this._w;
    var a = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;
    var f = this._f | 0;
    var g = this._g | 0;
    var h = this._h | 0;
    for(var i = 0; i < 16; ++i)W1[i] = M.readInt32BE(i * 4);
    for(; i < 64; ++i)W1[i] = gamma1(W1[i - 2]) + W1[i - 7] + gamma0(W1[i - 15]) + W1[i - 16] | 0;
    for(var j = 0; j < 64; ++j){
        var T1 = h + sigma1(e) + ch(e, f, g) + K[j] + W1[j] | 0;
        var T2 = sigma0(a) + maj(a, b, c) | 0;
        h = g;
        g = f;
        f = e;
        e = d + T1 | 0;
        d = c;
        c = b;
        b = a;
        a = T1 + T2 | 0;
    }
    this._a = a + this._a | 0;
    this._b = b + this._b | 0;
    this._c = c + this._c | 0;
    this._d = d + this._d | 0;
    this._e = e + this._e | 0;
    this._f = f + this._f | 0;
    this._g = g + this._g | 0;
    this._h = h + this._h | 0;
};
Sha256.prototype._hash = function() {
    var H = Buffer.allocUnsafe(32);
    H.writeInt32BE(this._a, 0);
    H.writeInt32BE(this._b, 4);
    H.writeInt32BE(this._c, 8);
    H.writeInt32BE(this._d, 12);
    H.writeInt32BE(this._e, 16);
    H.writeInt32BE(this._f, 20);
    H.writeInt32BE(this._g, 24);
    H.writeInt32BE(this._h, 28);
    return H;
};
module.exports = Sha256;

},{"inherits":"5giYL","./hash":"4ZEkm","safe-buffer":"fnbeG"}],"hQXJU":[function(require,module,exports) {
var inherits = require('inherits');
var SHA512 = require('./sha512');
var Hash = require('./hash');
var Buffer = require('safe-buffer').Buffer;
var W = new Array(160);
function Sha384() {
    this.init();
    this._w = W;
    Hash.call(this, 128, 112);
}
inherits(Sha384, SHA512);
Sha384.prototype.init = function() {
    this._ah = 3418070365;
    this._bh = 1654270250;
    this._ch = 2438529370;
    this._dh = 355462360;
    this._eh = 1731405415;
    this._fh = 2394180231;
    this._gh = 3675008525;
    this._hh = 1203062813;
    this._al = 3238371032;
    this._bl = 914150663;
    this._cl = 812702999;
    this._dl = 4144912697;
    this._el = 4290775857;
    this._fl = 1750603025;
    this._gl = 1694076839;
    this._hl = 3204075428;
    return this;
};
Sha384.prototype._hash = function() {
    var H = Buffer.allocUnsafe(48);
    function writeInt64BE(h, l, offset) {
        H.writeInt32BE(h, offset);
        H.writeInt32BE(l, offset + 4);
    }
    writeInt64BE(this._ah, this._al, 0);
    writeInt64BE(this._bh, this._bl, 8);
    writeInt64BE(this._ch, this._cl, 16);
    writeInt64BE(this._dh, this._dl, 24);
    writeInt64BE(this._eh, this._el, 32);
    writeInt64BE(this._fh, this._fl, 40);
    return H;
};
module.exports = Sha384;

},{"inherits":"5giYL","./sha512":"3Iehn","./hash":"4ZEkm","safe-buffer":"fnbeG"}],"3Iehn":[function(require,module,exports) {
var inherits = require('inherits');
var Hash = require('./hash');
var Buffer = require('safe-buffer').Buffer;
var K = [
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
];
var W = new Array(160);
function Sha512() {
    this.init();
    this._w = W;
    Hash.call(this, 128, 112);
}
inherits(Sha512, Hash);
Sha512.prototype.init = function() {
    this._ah = 1779033703;
    this._bh = 3144134277;
    this._ch = 1013904242;
    this._dh = 2773480762;
    this._eh = 1359893119;
    this._fh = 2600822924;
    this._gh = 528734635;
    this._hh = 1541459225;
    this._al = 4089235720;
    this._bl = 2227873595;
    this._cl = 4271175723;
    this._dl = 1595750129;
    this._el = 2917565137;
    this._fl = 725511199;
    this._gl = 4215389547;
    this._hl = 327033209;
    return this;
};
function Ch(x, y, z) {
    return z ^ x & (y ^ z);
}
function maj(x, y, z) {
    return x & y | z & (x | y);
}
function sigma0(x, xl) {
    return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
}
function sigma1(x, xl) {
    return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
}
function Gamma0(x, xl) {
    return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ x >>> 7;
}
function Gamma0l(x, xl) {
    return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
}
function Gamma1(x, xl) {
    return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ x >>> 6;
}
function Gamma1l(x, xl) {
    return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
}
function getCarry(a, b) {
    return a >>> 0 < b >>> 0 ? 1 : 0;
}
Sha512.prototype._update = function(M) {
    var W1 = this._w;
    var ah = this._ah | 0;
    var bh = this._bh | 0;
    var ch = this._ch | 0;
    var dh = this._dh | 0;
    var eh = this._eh | 0;
    var fh = this._fh | 0;
    var gh = this._gh | 0;
    var hh = this._hh | 0;
    var al = this._al | 0;
    var bl = this._bl | 0;
    var cl = this._cl | 0;
    var dl = this._dl | 0;
    var el = this._el | 0;
    var fl = this._fl | 0;
    var gl = this._gl | 0;
    var hl = this._hl | 0;
    for(var i = 0; i < 32; i += 2){
        W1[i] = M.readInt32BE(i * 4);
        W1[i + 1] = M.readInt32BE(i * 4 + 4);
    }
    for(; i < 160; i += 2){
        var xh = W1[i - 30];
        var xl = W1[i - 30 + 1];
        var gamma0 = Gamma0(xh, xl);
        var gamma0l = Gamma0l(xl, xh);
        xh = W1[i - 4];
        xl = W1[i - 4 + 1];
        var gamma1 = Gamma1(xh, xl);
        var gamma1l = Gamma1l(xl, xh);
        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
        var Wi7h = W1[i - 14];
        var Wi7l = W1[i - 14 + 1];
        var Wi16h = W1[i - 32];
        var Wi16l = W1[i - 32 + 1];
        var Wil = gamma0l + Wi7l | 0;
        var Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
        Wil = Wil + gamma1l | 0;
        Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
        Wil = Wil + Wi16l | 0;
        Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
        W1[i] = Wih;
        W1[i + 1] = Wil;
    }
    for(var j = 0; j < 160; j += 2){
        Wih = W1[j];
        Wil = W1[j + 1];
        var majh = maj(ah, bh, ch);
        var majl = maj(al, bl, cl);
        var sigma0h = sigma0(ah, al);
        var sigma0l = sigma0(al, ah);
        var sigma1h = sigma1(eh, el);
        var sigma1l = sigma1(el, eh);
        // t1 = h + sigma1 + ch + K[j] + W[j]
        var Kih = K[j];
        var Kil = K[j + 1];
        var chh = Ch(eh, fh, gh);
        var chl = Ch(el, fl, gl);
        var t1l = hl + sigma1l | 0;
        var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
        t1l = t1l + chl | 0;
        t1h = t1h + chh + getCarry(t1l, chl) | 0;
        t1l = t1l + Kil | 0;
        t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
        t1l = t1l + Wil | 0;
        t1h = t1h + Wih + getCarry(t1l, Wil) | 0;
        // t2 = sigma0 + maj
        var t2l = sigma0l + majl | 0;
        var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        el = dl + t1l | 0;
        eh = dh + t1h + getCarry(el, dl) | 0;
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        al = t1l + t2l | 0;
        ah = t1h + t2h + getCarry(al, t1l) | 0;
    }
    this._al = this._al + al | 0;
    this._bl = this._bl + bl | 0;
    this._cl = this._cl + cl | 0;
    this._dl = this._dl + dl | 0;
    this._el = this._el + el | 0;
    this._fl = this._fl + fl | 0;
    this._gl = this._gl + gl | 0;
    this._hl = this._hl + hl | 0;
    this._ah = this._ah + ah + getCarry(this._al, al) | 0;
    this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
    this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
    this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
    this._eh = this._eh + eh + getCarry(this._el, el) | 0;
    this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
    this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
    this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
};
Sha512.prototype._hash = function() {
    var H = Buffer.allocUnsafe(64);
    function writeInt64BE(h, l, offset) {
        H.writeInt32BE(h, offset);
        H.writeInt32BE(l, offset + 4);
    }
    writeInt64BE(this._ah, this._al, 0);
    writeInt64BE(this._bh, this._bl, 8);
    writeInt64BE(this._ch, this._cl, 16);
    writeInt64BE(this._dh, this._dl, 24);
    writeInt64BE(this._eh, this._el, 32);
    writeInt64BE(this._fh, this._fl, 40);
    writeInt64BE(this._gh, this._gl, 48);
    writeInt64BE(this._hh, this._hl, 56);
    return H;
};
module.exports = Sha512;

},{"inherits":"5giYL","./hash":"4ZEkm","safe-buffer":"fnbeG"}],"eJTmK":[function(require,module,exports) {
/*Copyright (c) 2016, TT Labs, Inc.
 All rights reserved.

 Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

 Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

 Neither the name of the TT Labs, Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.*/ /***************************************************************************************************
 *                                                                                                 *
 *  version 2.1.4                                                                                  *
 *                                                                                                 *
 ***************************************************************************************************/ (function() {
    var FAR_FUTURE = new Date('2060-10-22'), HOURS_AGO, PENDING = 0, EVAPORATING = 2, COMPLETE = 3, PAUSED = 4, CANCELED = 5, ERROR = 10, ABORTED = 20, PAUSING = 30, PAUSED_STATUSES = [
        PAUSED,
        PAUSING
    ], ACTIVE_STATUSES = [
        PENDING,
        EVAPORATING,
        ERROR
    ], ETAG_OF_0_LENGTH_BLOB = '"d41d8cd98f00b204e9800998ecf8427e"', PARTS_MONITOR_INTERVAL_MS = 120000, IMMUTABLE_OPTIONS = [
        'maxConcurrentParts',
        'logging',
        'cloudfront',
        'encodeFilename',
        'computeContentMd5',
        'allowS3ExistenceOptimization',
        'onlyRetryForSameFileName',
        'timeUrl',
        'cryptoMd5Method',
        'cryptoHexEncodedHash256',
        'awsRegion',
        'awsSignatureVersion',
        'evaporateChanged'
    ], S3_EXTRA_ENCODED_CHARS = {
        33: "%21",
        39: "%27",
        40: "%28",
        41: "%29",
        42: "%2A" // *
    }, l1;
    var Evaporate = function(config) {
        this.config = extend({
            readableStreams: false,
            readableStreamPartMethod: null,
            bucket: null,
            logging: true,
            maxConcurrentParts: 5,
            partSize: 6291456,
            retryBackoffPower: 2,
            maxRetryBackoffSecs: 300,
            progressIntervalMS: 1000,
            cloudfront: false,
            s3Acceleration: false,
            mockLocalStorage: false,
            encodeFilename: true,
            computeContentMd5: false,
            allowS3ExistenceOptimization: false,
            onlyRetryForSameFileName: false,
            timeUrl: null,
            cryptoMd5Method: null,
            cryptoHexEncodedHash256: null,
            aws_key: null,
            awsRegion: 'us-east-1',
            awsSignatureVersion: '4',
            sendCanonicalRequestToSignerUrl: false,
            s3FileCacheHoursAgo: null,
            signParams: {},
            signHeaders: {},
            customAuthMethod: undefined,
            maxFileSize: null,
            signResponseHandler: null,
            xhrWithCredentials: false,
            // undocumented, experimental
            localTimeOffset: undefined,
            evaporateChanged: function() {},
            abortCompletionThrottlingMs: 1000
        }, config);
        if (typeof window !== 'undefined' && window.console) {
            l1 = window.console;
            l1.d = l1.log;
            l1.w = window.console.warn ? l1.warn : l1.d;
            l1.e = window.console.error ? l1.error : l1.d;
        }
        this._instantiationError = this.validateEvaporateOptions();
        if (typeof this._instantiationError === 'string') {
            this.supported = false;
            return;
        } else delete this._instantiationError;
        if (!this.config.logging) // Reset the logger to be a no_op
        l1 = noOpLogger();
        var _d = new Date();
        HOURS_AGO = new Date(_d.setHours(_d.getHours() - (this.config.s3FileCacheHoursAgo || -100)));
        if (typeof config.localTimeOffset === 'number') this.localTimeOffset = config.localTimeOffset;
        else {
            var self = this;
            Evaporate.getLocalTimeOffset(this.config).then(function(offset) {
                self.localTimeOffset = offset;
            });
        }
        this.pendingFiles = {};
        this.queuedFiles = [];
        this.filesInProcess = [];
        historyCache = new HistoryCache(this.config.mockLocalStorage);
    };
    Evaporate.create = function(config) {
        var evapConfig = extend({}, config);
        return Evaporate.getLocalTimeOffset(evapConfig).then(function(offset) {
            evapConfig.localTimeOffset = offset;
            return new Promise(function(resolve, reject) {
                var e = new Evaporate(evapConfig);
                if (e.supported === true) resolve(e);
                else reject(e._instantiationError);
            });
        });
    };
    Evaporate.getLocalTimeOffset = function(config) {
        return new Promise(function(resolve, reject) {
            if (typeof config.localTimeOffset === 'number') return resolve(config.localTimeOffset);
            if (config.timeUrl) {
                var xhr1 = new XMLHttpRequest();
                xhr1.open("GET", config.timeUrl + '?requestTime=' + new Date().getTime());
                xhr1.onreadystatechange = function() {
                    if (xhr1.readyState === 4) {
                        if (xhr1.status === 200) {
                            var server_date = new Date(Date.parse(xhr1.responseText)), offset = server_date - new Date();
                            l1.d('localTimeOffset is', offset, 'ms');
                            resolve(offset);
                        }
                    }
                };
                xhr1.onerror = function(xhr) {
                    l1.e('xhr error timeUrl', xhr);
                    reject('Fetching offset time failed with status: ' + xhr.status);
                };
                xhr1.send();
            } else resolve(0);
        });
    };
    Evaporate.prototype.config = {};
    Evaporate.prototype.localTimeOffset = 0;
    Evaporate.prototype.supported = false;
    Evaporate.prototype._instantiationError = undefined;
    Evaporate.prototype.evaporatingCount = 0;
    Evaporate.prototype.pendingFiles = {};
    Evaporate.prototype.filesInProcess = [];
    Evaporate.prototype.queuedFiles = [];
    Evaporate.prototype.startNextFile = function(reason) {
        if (!this.queuedFiles.length || this.evaporatingCount >= this.config.maxConcurrentParts) return;
        var fileUpload = this.queuedFiles.shift();
        if (fileUpload.status === PENDING) {
            l1.d('Starting', decodeURIComponent(fileUpload.name), 'reason:', reason);
            this.evaporatingCnt(1);
            fileUpload.start();
        } else {
            // Add the file back to the stack, it's not ready
            l1.d('Requeued', decodeURIComponent(fileUpload.name), 'status:', fileUpload.status, 'reason:', reason);
            this.queuedFiles.push(fileUpload);
        }
    };
    Evaporate.prototype.fileCleanup = function(fileUpload) {
        removeAtIndex(this.queuedFiles, fileUpload);
        if (removeAtIndex(this.filesInProcess, fileUpload)) this.evaporatingCnt(-1);
        fileUpload.done();
        this.consumeRemainingSlots();
    };
    Evaporate.prototype.queueFile = function(fileUpload) {
        this.filesInProcess.push(fileUpload);
        this.queuedFiles.push(fileUpload);
        if (this.filesInProcess.length === 1) this.startNextFile('first file');
    };
    Evaporate.prototype.add = function(file, pConfig) {
        var self = this, fileConfig;
        return new Promise(function(resolve, reject) {
            var c = extend(pConfig, {});
            IMMUTABLE_OPTIONS.forEach(function(a) {
                delete c[a];
            });
            fileConfig = extend(self.config, c);
            if (typeof file === 'undefined' || typeof file.file === 'undefined') return reject('Missing file');
            if (fileConfig.maxFileSize && file.file.size > fileConfig.maxFileSize) return reject('File size too large. Maximum size allowed is ' + fileConfig.maxFileSize);
            if (typeof file.name === 'undefined') return reject('Missing attribute: name');
            if (fileConfig.encodeFilename) // correctly encode to an S3 object name, considering '/' and ' '
            file.name = s3EncodedObjectName(file.name);
            var fileUpload = new FileUpload(extend({
                started: function() {},
                uploadInitiated: function() {},
                progress: function() {},
                complete: function() {},
                cancelled: function() {},
                paused: function() {},
                resumed: function() {},
                pausing: function() {},
                nameChanged: function() {},
                info: function() {},
                warn: function() {},
                error: function() {},
                beforeSigner: undefined,
                xAmzHeadersAtInitiate: {},
                notSignedHeadersAtInitiate: {},
                xAmzHeadersCommon: null,
                xAmzHeadersAtUpload: {},
                xAmzHeadersAtComplete: {}
            }, file, {
                status: PENDING,
                priority: 0,
                loadedBytes: 0,
                sizeBytes: file.file.size,
                eTag: ''
            }), fileConfig, self), fileKey = fileUpload.id;
            self.pendingFiles[fileKey] = fileUpload;
            self.queueFile(fileUpload);
            // Resolve or reject the Add promise based on how the fileUpload completes
            fileUpload.deferredCompletion.promise.then(function() {
                self.fileCleanup(fileUpload);
                resolve(decodeURIComponent(fileUpload.name));
            }, function(reason) {
                self.fileCleanup(fileUpload);
                reject(reason);
            });
        });
    };
    Evaporate.prototype.cancel = function(id) {
        return typeof id === 'undefined' ? this._cancelAll() : this._cancelOne(id);
    };
    Evaporate.prototype._cancelAll = function() {
        l1.d('Canceling all file uploads');
        var promises = [];
        for(var key in this.pendingFiles)if (this.pendingFiles.hasOwnProperty(key)) {
            var file = this.pendingFiles[key];
            if (ACTIVE_STATUSES.indexOf(file.status) > -1) promises.push(file.stop());
        }
        if (!promises.length) promises.push(Promise.reject('No files to cancel.'));
        return Promise.all(promises);
    };
    Evaporate.prototype._cancelOne = function(id) {
        var promise = [];
        if (this.pendingFiles[id]) promise.push(this.pendingFiles[id].stop());
        else promise.push(Promise.reject('File does not exist'));
        return Promise.all(promise);
    };
    Evaporate.prototype.pause = function(id, options) {
        options = options || {};
        var force = typeof options.force === 'undefined' ? false : options.force;
        return typeof id === 'undefined' ? this._pauseAll(force) : this._pauseOne(id, force);
    };
    Evaporate.prototype._pauseAll = function(force) {
        l1.d('Pausing all file uploads');
        var promises = [];
        for(var key in this.pendingFiles)if (this.pendingFiles.hasOwnProperty(key)) {
            var file = this.pendingFiles[key];
            if (ACTIVE_STATUSES.indexOf(file.status) > -1) this._pause(file, force, promises);
        }
        return Promise.all(promises);
    };
    Evaporate.prototype._pauseOne = function(id, force) {
        var promises = [], file = this.pendingFiles[id];
        if (typeof file === 'undefined') promises.push(Promise.reject('Cannot pause a file that has not been added.'));
        else if (file.status === PAUSED) promises.push(Promise.reject('Cannot pause a file that is already paused.'));
        if (!promises.length) this._pause(file, force, promises);
        return Promise.all(promises);
    };
    Evaporate.prototype._pause = function(fileUpload, force, promises) {
        promises.push(fileUpload.pause(force));
        removeAtIndex(this.filesInProcess, fileUpload);
        removeAtIndex(this.queuedFiles, fileUpload);
    };
    Evaporate.prototype.resume = function(id) {
        return typeof id === 'undefined' ? this._resumeAll() : this._resumeOne(id);
    };
    Evaporate.prototype._resumeAll = function() {
        l1.d('Resuming all file uploads');
        for(var key in this.pendingFiles)if (this.pendingFiles.hasOwnProperty(key)) {
            var file = this.pendingFiles[key];
            if (PAUSED_STATUSES.indexOf(file.status) > -1) this.resumeFile(file);
        }
        return Promise.resolve();
    };
    Evaporate.prototype._resumeOne = function(id) {
        var file = this.pendingFiles[id], promises = [];
        if (typeof file === 'undefined') promises.push(Promise.reject('Cannot pause a file that does not exist.'));
        else if (PAUSED_STATUSES.indexOf(file.status) === -1) promises.push(Promise.reject('Cannot resume a file that has not been paused.'));
        else this.resumeFile(file);
        return Promise.all(promises);
    };
    Evaporate.prototype.resumeFile = function(fileUpload) {
        fileUpload.resume();
        this.queueFile(fileUpload);
    };
    Evaporate.prototype.forceRetry = function() {};
    Evaporate.prototype.consumeRemainingSlots = function() {
        var avail = this.config.maxConcurrentParts - this.evaporatingCount;
        if (!avail) return;
        for(var i = 0; i < this.filesInProcess.length; i++){
            var file = this.filesInProcess[i];
            var consumed = file.consumeSlots();
            if (consumed < 0) continue;
            avail -= consumed;
            if (!avail) return;
        }
    };
    Evaporate.prototype.validateEvaporateOptions = function() {
        this.supported = !(typeof File === 'undefined' || typeof Promise === 'undefined');
        if (!this.supported) return 'Evaporate requires support for File and Promise';
        if (this.config.readableStreams) {
            if (typeof this.config.readableStreamPartMethod !== 'function') return "Option readableStreamPartMethod is required when readableStreams is set.";
        } else {
            if (typeof Blob === 'undefined' || typeof (Blob.prototype.webkitSlice || Blob.prototype.mozSlice || Blob.prototype.slice) === 'undefined') return 'Evaporate requires support for Blob [webkitSlice || mozSlice || slice]';
        }
        if (!this.config.signerUrl && typeof this.config.customAuthMethod !== 'function') return "Option signerUrl is required unless customAuthMethod is present.";
        if (!this.config.bucket) return "The AWS 'bucket' option must be present.";
        if (this.config.computeContentMd5) {
            this.supported = typeof FileReader.prototype.readAsArrayBuffer !== 'undefined';
            if (!this.supported) return 'The browser\'s FileReader object does not support readAsArrayBuffer';
            if (typeof this.config.cryptoMd5Method !== 'function') return 'Option computeContentMd5 has been set but cryptoMd5Method is not defined.';
            if (this.config.awsSignatureVersion === '4') {
                if (typeof this.config.cryptoHexEncodedHash256 !== 'function') return 'Option awsSignatureVersion is 4 but cryptoHexEncodedHash256 is not defined.';
            }
        } else if (this.config.awsSignatureVersion === '4') return 'Option awsSignatureVersion is 4 but computeContentMd5 is not enabled.';
        return true;
    };
    Evaporate.prototype.evaporatingCnt = function(incr) {
        this.evaporatingCount = Math.max(0, this.evaporatingCount + incr);
        this.config.evaporateChanged(this, this.evaporatingCount);
    };
    function FileUpload(file, con, evaporate) {
        this.fileTotalBytesUploaded = 0;
        this.s3Parts = [];
        this.partsOnS3 = [];
        this.partsInProcess = [];
        this.partsToUpload = [];
        this.numParts = -1;
        this.con = extend({}, con);
        this.evaporate = evaporate;
        this.localTimeOffset = evaporate.localTimeOffset;
        this.deferredCompletion = defer();
        extend(this, file);
        this.id = decodeURIComponent(this.con.bucket + '/' + this.name);
        this.signParams = con.signParams;
    }
    FileUpload.prototype.con = undefined;
    FileUpload.prototype.evaporate = undefined;
    FileUpload.prototype.localTimeOffset = 0;
    FileUpload.prototype.id = undefined;
    FileUpload.prototype.status = PENDING;
    FileUpload.prototype.numParts = -1;
    FileUpload.prototype.fileTotalBytesUploaded = 0;
    FileUpload.prototype.partsInProcess = [];
    FileUpload.prototype.partsToUpload = [];
    FileUpload.prototype.s3Parts = [];
    FileUpload.prototype.partsOnS3 = [];
    FileUpload.prototype.deferredCompletion = undefined;
    FileUpload.prototype.abortedByUser = false;
    // Progress and Stats
    FileUpload.prototype.progressInterval = undefined;
    FileUpload.prototype.startTime = undefined;
    FileUpload.prototype.loaded = 0;
    FileUpload.prototype.totalUploaded = 0;
    FileUpload.prototype.updateLoaded = function(loadedNow) {
        this.loaded += loadedNow;
        this.fileTotalBytesUploaded += loadedNow;
    };
    FileUpload.prototype.progessStats = function() {
        // Adapted from https://github.com/fkjaekel
        // https://github.com/TTLabs/EvaporateJS/issues/13
        if (this.fileTotalBytesUploaded === 0) return {
            speed: 0,
            readableSpeed: "",
            loaded: 0,
            totalUploaded: 0,
            remainingSize: this.sizeBytes,
            secondsLeft: -1,
            fileSize: this.sizeBytes
        };
        this.totalUploaded += this.loaded;
        var delta = (new Date() - this.startTime) / 1000, avgSpeed = this.totalUploaded / delta, remainingSize = this.sizeBytes - this.fileTotalBytesUploaded, stats = {
            speed: avgSpeed,
            readableSpeed: readableFileSize(avgSpeed),
            loaded: this.loaded,
            totalUploaded: this.fileTotalBytesUploaded,
            remainingSize: remainingSize,
            secondsLeft: -1,
            fileSize: this.sizeBytes
        };
        if (avgSpeed > 0) stats.secondsLeft = Math.round(remainingSize / avgSpeed);
        return stats;
    };
    FileUpload.prototype.onProgress = function() {
        if ([
            ABORTED,
            PAUSED
        ].indexOf(this.status) === -1) {
            this.progress(this.fileTotalBytesUploaded / this.sizeBytes, this.progessStats());
            this.loaded = 0;
        }
    };
    FileUpload.prototype.startMonitor = function() {
        clearInterval(this.progressInterval);
        this.startTime = new Date();
        this.loaded = 0;
        this.totalUploaded = 0;
        this.onProgress();
        this.progressInterval = setInterval(this.onProgress.bind(this), this.con.progressIntervalMS);
    };
    FileUpload.prototype.stopMonitor = function() {
        clearInterval(this.progressInterval);
    };
    // Evaporate proxies
    FileUpload.prototype.startNextFile = function(reason) {
        this.evaporate.startNextFile(reason);
    };
    FileUpload.prototype.evaporatingCnt = function(incr) {
        this.evaporate.evaporatingCnt(incr);
    };
    FileUpload.prototype.consumeRemainingSlots = function() {
        this.evaporate.consumeRemainingSlots();
    };
    FileUpload.prototype.getRemainingSlots = function() {
        var evapCount = this.evaporate.evaporatingCount;
        if (!this.partsInProcess.length && evapCount > 0) // we can use our file slot
        evapCount -= 1;
        return this.con.maxConcurrentParts - evapCount;
    };
    FileUpload.prototype.lastPartSatisfied = Promise.resolve('onStart');
    FileUpload.prototype.start = function() {
        this.status = EVAPORATING;
        this.startMonitor();
        this.started(this.id);
        if (this.uploadId) {
            l1.d('resuming FileUpload ', this.id);
            return this.consumeSlots();
        }
        var awsKey = this.name;
        this.getUnfinishedFileUpload();
        var existenceOptimized = this.con.computeContentMd5 && this.con.allowS3ExistenceOptimization && typeof this.firstMd5Digest !== 'undefined' && typeof this.eTag !== 'undefined';
        if (this.uploadId) {
            if (existenceOptimized) return this.reuseS3Object(awsKey).then(this.deferredCompletion.resolve).catch(this.uploadFileFromScratch.bind(this));
            this.resumeInterruptedUpload().then(this._uploadComplete.bind(this)).catch(this.uploadFileFromScratch.bind(this));
        } else this.uploadFileFromScratch("");
    };
    FileUpload.prototype.uploadFileFromScratch = function(reason) {
        if (ACTIVE_STATUSES.indexOf(this.status) === -1) return;
        l1.d(reason);
        this.uploadId = undefined;
        return this.uploadFile(this.name).then(this._uploadComplete.bind(this)).catch(this._abortUpload.bind(this));
    };
    FileUpload.prototype._uploadComplete = function() {
        this.completeUpload().then(this.deferredCompletion.resolve);
    };
    FileUpload.prototype.stop = function() {
        l1.d('stopping FileUpload ', this.id);
        this.setStatus(CANCELED);
        this.info('Canceling uploads...');
        this.abortedByUser = true;
        var self = this;
        return this.abortUpload().then(function() {
            throw "User aborted the upload";
        }).catch(function(reason) {
            self.deferredCompletion.reject(reason);
        });
    };
    FileUpload.prototype.pause = function(force) {
        l1.d('pausing FileUpload, force:', !!force, this.id);
        var promises = [];
        this.info('Pausing uploads...');
        this.status = PAUSING;
        if (force) this.abortParts(true);
        else {
            promises = this.partsInProcess.map(function(p) {
                return this.s3Parts[p].awsRequest.awsDeferred.promise;
            }, this);
            this.pausing();
        }
        return Promise.all(promises).then((function() {
            this.stopMonitor();
            this.status = PAUSED;
            this.startNextFile('pause');
            this.paused();
        }).bind(this));
    };
    FileUpload.prototype.resume = function() {
        this.status = PENDING;
        this.resumed();
    };
    FileUpload.prototype.done = function() {
        clearInterval(this.progressInterval);
        this.startNextFile('file done');
        this.partsOnS3 = [];
        this.s3Parts = [];
    };
    FileUpload.prototype._startCompleteUpload = function(callComplete) {
        return function() {
            var promise = callComplete ? this.completeUpload() : Promise.resolve();
            promise.then(this.deferredCompletion.resolve.bind(this));
        };
    };
    FileUpload.prototype._abortUpload = function() {
        if (!this.abortedByUser) {
            var self = this;
            this.abortUpload().then(function() {
                self.deferredCompletion.reject('File upload aborted due to a part failing to upload');
            }, this.deferredCompletion.reject.bind(this));
        }
    };
    FileUpload.prototype.abortParts = function(pause) {
        var self = this;
        var toAbort = this.partsInProcess.slice(0);
        toAbort.forEach(function(i) {
            var s3Part = self.s3Parts[i];
            if (s3Part) {
                s3Part.awsRequest.abort();
                if (pause) s3Part.status = PENDING;
                removeAtIndex(self.partsInProcess, s3Part.partNumber);
                if (self.partsToUpload.length) self.evaporatingCnt(-1);
            }
        });
    };
    FileUpload.prototype.makeParts = function(firstPart) {
        this.numParts = Math.ceil(this.sizeBytes / this.con.partSize) || 1; // issue #58
        var partsDeferredPromises = [];
        var self = this;
        function cleanUpAfterPart(s3Part) {
            removeAtIndex(self.partsToUpload, s3Part.partNumber);
            removeAtIndex(self.partsInProcess, s3Part.partNumber);
            if (self.partsToUpload.length) self.evaporatingCnt(-1);
        }
        function resolve(s3Part) {
            return function() {
                cleanUpAfterPart(s3Part);
                if (self.partsToUpload.length) self.consumeRemainingSlots();
                if (self.partsToUpload.length < self.con.maxConcurrentParts) self.startNextFile('part resolve');
            };
        }
        function reject(s3Part) {
            return function() {
                cleanUpAfterPart(s3Part);
            };
        }
        var limit = firstPart ? 1 : this.numParts;
        for(var part = 1; part <= limit; part++){
            var s3Part1 = this.s3Parts[part];
            if (typeof s3Part1 !== "undefined") {
                if (s3Part1.status === COMPLETE) continue;
            } else s3Part1 = this.makePart(part, PENDING, this.sizeBytes);
            s3Part1.awsRequest = new PutPart(this, s3Part1);
            s3Part1.awsRequest.awsDeferred.promise.then(resolve(s3Part1), reject(s3Part1));
            this.partsToUpload.push(part);
            partsDeferredPromises.push(this.s3Parts[part].awsRequest.awsDeferred.promise);
        }
        return partsDeferredPromises;
    };
    FileUpload.prototype.makePart = function(partNumber, status, size) {
        var s3Part = {
            status: status,
            loadedBytes: 0,
            loadedBytesPrevious: null,
            isEmpty: size === 0,
            md5_digest: null,
            partNumber: partNumber
        };
        this.s3Parts[partNumber] = s3Part;
        return s3Part;
    };
    FileUpload.prototype.setStatus = function(s) {
        this.status = s;
    };
    FileUpload.prototype.createUploadFile = function() {
        if (this.status === ABORTED) return;
        var fileKey = uploadKey1(this), newUpload = {
            awsKey: this.name,
            bucket: this.con.bucket,
            uploadId: this.uploadId,
            fileSize: this.sizeBytes,
            fileType: this.file.type,
            lastModifiedDate: dateISOString(this.file.lastModified),
            partSize: this.con.partSize,
            signParams: this.con.signParams,
            createdAt: new Date().toISOString()
        };
        saveUpload(fileKey, newUpload);
    };
    FileUpload.prototype.updateUploadFile = function(updates) {
        var fileKey = uploadKey1(this), uploads = getSavedUploads(), upload = extend({}, uploads[fileKey], updates);
        saveUpload(fileKey, upload);
    };
    FileUpload.prototype.completeUploadFile = function(xhr) {
        var uploads = getSavedUploads(), upload = uploads[uploadKey1(this)];
        if (typeof upload !== 'undefined') {
            upload.completedAt = new Date().toISOString();
            upload.eTag = this.eTag;
            upload.firstMd5Digest = this.firstMd5Digest;
            uploads[uploadKey1(this)] = upload;
            historyCache.setItem('awsUploads', JSON.stringify(uploads));
        }
        this.complete(xhr, this.name, this.progessStats());
        this.setStatus(COMPLETE);
        this.onProgress();
    };
    FileUpload.prototype.removeUploadFile = function() {
        if (typeof this.file !== 'undefined') removeUpload(uploadKey1(this));
    };
    FileUpload.prototype.getUnfinishedFileUpload = function() {
        var savedUploads = getSavedUploads(true), u = savedUploads[uploadKey1(this)];
        if (this.canRetryUpload(u)) {
            this.uploadId = u.uploadId;
            this.name = u.awsKey;
            this.eTag = u.eTag;
            this.firstMd5Digest = u.firstMd5Digest;
            this.signParams = u.signParams;
        }
    };
    FileUpload.prototype.canRetryUpload = function(u) {
        // Must be the same file name, file size, last_modified, file type as previous upload
        if (typeof u === 'undefined') return false;
        var completedAt = new Date(u.completedAt || FAR_FUTURE);
        // check that the part sizes and bucket match, and if the file name of the upload
        // matches if onlyRetryForSameFileName is true
        return this.con.partSize === u.partSize && completedAt > HOURS_AGO && this.con.bucket === u.bucket && (this.con.onlyRetryForSameFileName ? this.name === u.awsKey : true);
    };
    FileUpload.prototype.partSuccess = function(eTag, putRequest) {
        var part = putRequest.part;
        l1.d(putRequest.request.step, 'ETag:', eTag);
        if (part.isEmpty || eTag !== ETAG_OF_0_LENGTH_BLOB) {
            part.eTag = eTag;
            part.status = COMPLETE;
            this.partsOnS3.push(part);
            return true;
        } else {
            part.status = ERROR;
            putRequest.resetLoadedBytes();
            var msg = [
                'eTag matches MD5 of 0 length blob for part #',
                putRequest.partNumber,
                'Retrying part.'
            ].join(" ");
            l1.w(msg);
            this.warn(msg);
        }
    };
    FileUpload.prototype.listPartsSuccess = function(listPartsRequest, partsXml) {
        this.info('uploadId', this.uploadId, 'is not complete. Fetching parts from part marker', listPartsRequest.partNumberMarker);
        partsXml = partsXml.replace(/(\r\n|\n|\r)/gm, ""); // strip line breaks to ease the regex requirements
        var partRegex = /<Part>(.+?)<\/Part\>/g;
        while(true){
            var cp = (partRegex.exec(partsXml) || [])[1];
            if (!cp) break;
            var partSize = parseInt(elementText(cp, "Size"), 10);
            this.fileTotalBytesUploaded += partSize;
            this.partsOnS3.push({
                eTag: elementText(cp, "ETag").replace(/&quot;/g, '"'),
                partNumber: parseInt(elementText(cp, "PartNumber"), 10),
                size: partSize,
                LastModified: elementText(cp, "LastModified")
            });
        }
        return elementText(partsXml, "IsTruncated") === 'true' ? elementText(partsXml, "NextPartNumberMarker") : undefined;
    };
    FileUpload.prototype.makePartsfromPartsOnS3 = function() {
        if (ACTIVE_STATUSES.indexOf(this.status) === -1) return;
        this.nameChanged(this.name);
        this.partsOnS3.forEach((function(cp) {
            var uploadedPart = this.makePart(cp.partNumber, COMPLETE, cp.size);
            uploadedPart.eTag = cp.eTag;
            uploadedPart.loadedBytes = cp.size;
            uploadedPart.loadedBytesPrevious = cp.size;
            uploadedPart.finishedUploadingAt = cp.LastModified;
        }).bind(this));
    };
    FileUpload.prototype.completeUpload = function() {
        var self = this;
        return new CompleteMultipartUpload(this).send().then(function(xhr) {
            self.eTag = elementText(xhr.responseText, "ETag").replace(/&quot;/g, '"');
            self.completeUploadFile(xhr);
        });
    };
    FileUpload.prototype.getCompletedPayload = function() {
        var completeDoc = [];
        completeDoc.push('<CompleteMultipartUpload>');
        this.s3Parts.forEach(function(part, partNumber) {
            if (partNumber > 0) [
                '<Part><PartNumber>',
                partNumber,
                '</PartNumber><ETag>',
                part.eTag,
                '</ETag></Part>'
            ].forEach(function(a) {
                completeDoc.push(a);
            });
        });
        completeDoc.push('</CompleteMultipartUpload>');
        return completeDoc.join("");
    };
    FileUpload.prototype.consumeSlots = function() {
        if (this.partsToUpload.length === 0) return -1;
        if (this.partsToUpload.length !== this.partsInProcess.length && this.status === EVAPORATING) {
            var partsToUpload = Math.min(this.getRemainingSlots(), this.partsToUpload.length);
            if (!partsToUpload) return -1;
            var satisfied = 0;
            for(var i = 0; i < this.partsToUpload.length; i++){
                var s3Part = this.s3Parts[this.partsToUpload[i]];
                if (s3Part.status === EVAPORATING) continue;
                if (this.canStartPart(s3Part)) {
                    if (this.partsInProcess.length && this.partsToUpload.length > 1) this.evaporatingCnt(1);
                    this.partsInProcess.push(s3Part.partNumber);
                    var awsRequest = s3Part.awsRequest;
                    this.lastPartSatisfied.then(awsRequest.delaySend.bind(awsRequest));
                    this.lastPartSatisfied = awsRequest.getStartedPromise();
                } else continue;
                satisfied += 1;
                if (satisfied === partsToUpload) break;
            }
            var allInProcess = this.partsToUpload.length === this.partsInProcess.length, remainingSlots = this.getRemainingSlots();
            if (allInProcess && remainingSlots > 0) // We don't need any more slots...
            this.startNextFile('consume slots');
            return remainingSlots;
        }
        return 0;
    };
    FileUpload.prototype.canStartPart = function(part) {
        return this.partsInProcess.indexOf(part.partNumber) === -1 && !part.awsRequest.errorExceptionStatus();
    };
    FileUpload.prototype.uploadFile = function(awsKey) {
        this.removeUploadFile();
        var self = this;
        return new InitiateMultipartUpload(self, awsKey).send().then(function() {
            self.uploadInitiated(self.uploadId);
            self.partsToUpload = [];
            return self.uploadParts().then(function() {}, function(reason) {
                throw reason;
            });
        });
    };
    FileUpload.prototype.uploadParts = function() {
        this.loaded = 0;
        this.totalUploaded = 0;
        if (ACTIVE_STATUSES.indexOf(this.status) === -1) return Promise.reject('Part uploading stopped because the file was canceled');
        var promises = this.makeParts();
        this.setStatus(EVAPORATING);
        this.startTime = new Date();
        this.consumeSlots();
        return Promise.all(promises);
    };
    FileUpload.prototype.abortUpload = function() {
        return new Promise((function(resolve, reject) {
            if (typeof this.uploadId === 'undefined') {
                resolve();
                return;
            }
            new DeleteMultipartUpload(this).send().then(resolve, reject);
        }).bind(this)).then((function() {
            this.setStatus(ABORTED);
            this.cancelled();
            this.removeUploadFile();
        }).bind(this), this.deferredCompletion.reject.bind(this));
    };
    FileUpload.prototype.resumeInterruptedUpload = function() {
        return new ResumeInterruptedUpload(this).send().then(this.uploadParts.bind(this));
    };
    FileUpload.prototype.reuseS3Object = function(awsKey) {
        var self = this;
        // Attempt to reuse entire uploaded object on S3
        this.makeParts(1);
        this.partsToUpload = [];
        var firstS3Part = this.s3Parts[1];
        function reject(reason) {
            self.name = awsKey;
            throw reason;
        }
        return firstS3Part.awsRequest.getPartMd5Digest().then(function() {
            if (self.firstMd5Digest === firstS3Part.md5_digest) return new ReuseS3Object(self, awsKey).send().then(function(xhr) {
                l1.d('headObject found matching object on S3.');
                self.completeUploadFile(xhr);
                self.nameChanged(self.name);
            }).catch(reject);
            else {
                var msg = self.con.allowS3ExistenceOptimization ? 'File\'s first part MD5 digest does not match what was stored.' : 'allowS3ExistenceOptimization is not enabled.';
                reject(msg);
            }
        });
    };
    function SignedS3AWSRequest(fileUpload, request) {
        this.fileUpload = fileUpload;
        this.con = fileUpload.con;
        this.attempts = 1;
        this.localTimeOffset = this.fileUpload.localTimeOffset;
        this.awsDeferred = defer();
        this.started = defer();
        this.awsUrl = awsUrl(this.con);
        this.awsHost = uri(this.awsUrl).hostname;
        var r = extend({}, request);
        if (fileUpload.contentType) r.contentType = fileUpload.contentType;
        this.updateRequest(r);
    }
    SignedS3AWSRequest.prototype.fileUpload = undefined;
    SignedS3AWSRequest.prototype.con = undefined;
    SignedS3AWSRequest.prototype.awsUrl = undefined;
    SignedS3AWSRequest.prototype.awsHost = undefined;
    SignedS3AWSRequest.prototype.authorize = function() {};
    SignedS3AWSRequest.prototype.localTimeOffset = 0;
    SignedS3AWSRequest.prototype.awsDeferred = undefined;
    SignedS3AWSRequest.prototype.started = undefined;
    SignedS3AWSRequest.prototype.getPath = function() {
        var path = '/' + this.con.bucket + '/' + this.fileUpload.name;
        if (this.con.cloudfront || this.awsUrl.indexOf('cloudfront') > -1) path = '/' + this.fileUpload.name;
        return path;
    };
    SignedS3AWSRequest.prototype.updateRequest = function(request) {
        this.request = request;
        var SigningClass = signingVersion(this, l1);
        this.signer = new SigningClass(request);
    };
    SignedS3AWSRequest.prototype.success = function() {
        this.awsDeferred.resolve(this.currentXhr);
    };
    SignedS3AWSRequest.prototype.backOffWait = function() {
        return this.attempts === 1 ? 0 : 1000 * Math.min(this.con.maxRetryBackoffSecs, Math.pow(this.con.retryBackoffPower, this.attempts - 2));
    };
    SignedS3AWSRequest.prototype.error = function(reason) {
        if (this.errorExceptionStatus()) return;
        this.signer.error();
        l1.d(this.request.step, 'error:', this.fileUpload.id, reason);
        if (typeof this.errorHandler(reason) !== 'undefined') return;
        this.fileUpload.warn('Error in ', this.request.step, reason);
        this.fileUpload.setStatus(ERROR);
        var self = this, backOffWait = this.backOffWait();
        this.attempts += 1;
        setTimeout(function() {
            if (!self.errorExceptionStatus()) self.trySend();
        }, backOffWait);
    };
    SignedS3AWSRequest.prototype.errorHandler = function() {};
    SignedS3AWSRequest.prototype.errorExceptionStatus = function() {
        return false;
    };
    SignedS3AWSRequest.prototype.getPayload = function() {
        return Promise.resolve(null);
    };
    SignedS3AWSRequest.prototype.success_status = function(xhr) {
        return xhr.status >= 200 && xhr.status <= 299 || this.request.success404 && xhr.status === 404;
    };
    SignedS3AWSRequest.prototype.stringToSign = function() {
        return encodeURIComponent(this.signer.stringToSign());
    };
    SignedS3AWSRequest.prototype.canonicalRequest = function() {
        return this.signer.canonicalRequest();
    };
    SignedS3AWSRequest.prototype.signResponse = function(payload, stringToSign, signatureDateTime) {
        var self = this;
        return new Promise(function(resolve) {
            if (typeof self.con.signResponseHandler === 'function') return self.con.signResponseHandler(payload, stringToSign, signatureDateTime).then(resolve);
            resolve(payload);
        });
    };
    SignedS3AWSRequest.prototype.sendRequestToAWS = function() {
        var self = this;
        return new Promise(function(resolve, reject) {
            var xhr3 = new XMLHttpRequest();
            self.currentXhr = xhr3;
            var url = [
                self.awsUrl,
                self.getPath(),
                self.request.path
            ].join(""), all_headers = {};
            if (self.request.query_string) url += self.request.query_string;
            extend(all_headers, self.request.not_signed_headers);
            extend(all_headers, self.request.x_amz_headers);
            xhr3.onreadystatechange = function() {
                if (xhr3.readyState === 4) {
                    if (self.success_status(xhr3)) {
                        if (self.request.response_match && xhr3.response.match(new RegExp(self.request.response_match)) === undefined) reject('AWS response does not match set pattern: ' + self.request.response_match);
                        else resolve();
                    } else {
                        var reason = xhr3.responseText ? getAwsResponse(xhr3) : ' ';
                        reason += 'status:' + xhr3.status;
                        reject(reason);
                    }
                }
            };
            xhr3.open(self.request.method, url);
            xhr3.setRequestHeader('Authorization', self.signer.authorizationString());
            for(var key in all_headers)if (all_headers.hasOwnProperty(key)) xhr3.setRequestHeader(key, all_headers[key]);
            self.signer.setHeaders(xhr3);
            if (self.request.contentType) xhr3.setRequestHeader('Content-Type', self.request.contentType);
            if (self.request.md5_digest) xhr3.setRequestHeader('Content-MD5', self.request.md5_digest);
            xhr3.onerror = function(xhr) {
                var reason = xhr.responseText ? getAwsResponse(xhr) : 'transport error';
                reject(reason);
            };
            if (typeof self.request.onProgress === 'function') xhr3.upload.onprogress = self.request.onProgress;
            self.getPayload().then(xhr3.send.bind(xhr3), reject);
            setTimeout(function() {
                self.started.resolve('request sent ' + self.request.step);
            }, 20);
            self.signer.payload = null;
            self.payloadPromise = undefined;
        });
    };
    //see: http://docs.amazonwebservices.com/AmazonS3/latest/dev/RESTAuthentication.html#ConstructingTheAuthenticationHeader
    SignedS3AWSRequest.prototype.authorize = function() {
        this.request.dateString = this.signer.dateString(this.localTimeOffset);
        this.request.x_amz_headers = extend(this.request.x_amz_headers, {
            'x-amz-date': this.request.dateString
        });
        return this.signer.getPayload().then((function() {
            return authorizationMethod(this).authorize();
        }).bind(this));
    };
    SignedS3AWSRequest.prototype.authorizationSuccess = function(authorization) {
        l1.d(this.request.step, 'signature:', authorization);
        this.request.auth = authorization;
    };
    SignedS3AWSRequest.prototype.trySend = function() {
        var self = this;
        return this.authorize().then(function(value) {
            self.authorizationSuccess(value);
            if (self.fileUpload.status === ABORTED) return;
            self.sendRequestToAWS().then(self.success.bind(self), self.error.bind(self));
        }, self.error.bind(self));
    };
    SignedS3AWSRequest.prototype.send = function() {
        this.trySend();
        return this.awsDeferred.promise;
    };
    function CancelableS3AWSRequest(fileUpload, request) {
        SignedS3AWSRequest.call(this, fileUpload, request);
    }
    CancelableS3AWSRequest.prototype = Object.create(SignedS3AWSRequest.prototype);
    CancelableS3AWSRequest.prototype.constructor = CancelableS3AWSRequest;
    CancelableS3AWSRequest.prototype.errorExceptionStatus = function() {
        return [
            ABORTED,
            CANCELED
        ].indexOf(this.fileUpload.status) > -1;
    };
    function SignedS3AWSRequestWithRetryLimit(fileUpload, request, maxRetries) {
        if (maxRetries > -1) this.maxRetries = maxRetries;
        SignedS3AWSRequest.call(this, fileUpload, request);
    }
    SignedS3AWSRequestWithRetryLimit.prototype = Object.create(CancelableS3AWSRequest.prototype);
    SignedS3AWSRequestWithRetryLimit.prototype.constructor = SignedS3AWSRequestWithRetryLimit;
    SignedS3AWSRequestWithRetryLimit.prototype.maxRetries = 1;
    SignedS3AWSRequestWithRetryLimit.prototype.errorHandler = function(reason) {
        if (this.attempts > this.maxRetries) {
            var msg = [
                'MaxRetries exceeded. Will re-upload file id ',
                this.fileUpload.id,
                ', ',
                reason
            ].join("");
            l1.w(msg);
            this.awsDeferred.reject(msg);
            return true;
        }
    };
    SignedS3AWSRequestWithRetryLimit.prototype.rejectedSuccess = function() {
        var reason = Array.prototype.slice.call(arguments, 1).join("");
        this.awsDeferred.reject(reason);
        return false;
    };
    // see: http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadInitiate.html
    function InitiateMultipartUpload(fileUpload, awsKey) {
        var request = {
            method: 'POST',
            path: '?uploads',
            step: 'initiate',
            x_amz_headers: fileUpload.xAmzHeadersAtInitiate,
            not_signed_headers: fileUpload.notSignedHeadersAtInitiate,
            response_match: '<UploadId>(.+)<\/UploadId>'
        };
        CancelableS3AWSRequest.call(this, fileUpload, request);
        this.awsKey = awsKey;
    }
    InitiateMultipartUpload.prototype = Object.create(CancelableS3AWSRequest.prototype);
    InitiateMultipartUpload.prototype.constructor = InitiateMultipartUpload;
    InitiateMultipartUpload.prototype.success = function() {
        var match = this.currentXhr.response.match(new RegExp(this.request.response_match));
        this.fileUpload.uploadId = match[1];
        this.fileUpload.awsKey = this.awsKey;
        l1.d('InitiateMultipartUpload ID is', this.fileUpload.uploadId);
        this.fileUpload.createUploadFile();
        this.awsDeferred.resolve(this.currentXhr);
    };
    //http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadComplete.html
    function CompleteMultipartUpload(fileUpload) {
        fileUpload.info('will attempt to complete upload');
        var request = {
            method: 'POST',
            contentType: 'application/xml; charset=UTF-8',
            path: '?uploadId=' + fileUpload.uploadId,
            x_amz_headers: fileUpload.xAmzHeadersCommon || fileUpload.xAmzHeadersAtComplete,
            step: 'complete'
        };
        CancelableS3AWSRequest.call(this, fileUpload, request);
    }
    CompleteMultipartUpload.prototype = Object.create(CancelableS3AWSRequest.prototype);
    CompleteMultipartUpload.prototype.constructor = CompleteMultipartUpload;
    CompleteMultipartUpload.prototype.getPayload = function() {
        return Promise.resolve(this.fileUpload.getCompletedPayload());
    };
    //http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadComplete.html
    function ReuseS3Object(fileUpload, awsKey) {
        this.awsKey = awsKey;
        fileUpload.info('will attempt to verify existence of the file');
        var request = {
            method: 'HEAD',
            path: '',
            x_amz_headers: fileUpload.xAmzHeadersCommon,
            success404: true,
            step: 'head_object'
        };
        SignedS3AWSRequestWithRetryLimit.call(this, fileUpload, request);
    }
    ReuseS3Object.prototype = Object.create(SignedS3AWSRequestWithRetryLimit.prototype);
    ReuseS3Object.prototype.constructor = ReuseS3Object;
    ReuseS3Object.prototype.awsKey = undefined;
    ReuseS3Object.prototype.success = function() {
        var eTag = this.currentXhr.getResponseHeader('Etag');
        if (eTag !== this.fileUpload.eTag && !this.rejectedSuccess('uploadId ', this.fileUpload.id, ' found on S3 but the Etag doesn\'t match.')) return;
        this.awsDeferred.resolve(this.currentXhr);
    };
    //http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadListParts.html
    function ResumeInterruptedUpload(fileUpload) {
        SignedS3AWSRequestWithRetryLimit.call(this, fileUpload);
        this.updateRequest(this.setupRequest(0));
    }
    ResumeInterruptedUpload.prototype = Object.create(SignedS3AWSRequestWithRetryLimit.prototype);
    ResumeInterruptedUpload.prototype.constructor = ResumeInterruptedUpload;
    ResumeInterruptedUpload.prototype.awsKey = undefined;
    ResumeInterruptedUpload.prototype.partNumberMarker = 0;
    ResumeInterruptedUpload.prototype.setupRequest = function(partNumberMarker) {
        var msg = [
            'setupRequest() for uploadId:',
            this.fileUpload.uploadId,
            'for part marker:',
            partNumberMarker
        ].join(" ");
        l1.d(msg);
        this.fileUpload.info(msg);
        this.awsKey = this.fileUpload.name;
        this.partNumberMarker = partNumberMarker;
        var request = {
            method: 'GET',
            path: [
                '?uploadId=',
                this.fileUpload.uploadId
            ].join(""),
            query_string: "&part-number-marker=" + partNumberMarker,
            x_amz_headers: this.fileUpload.xAmzHeadersCommon,
            step: 'get upload parts',
            success404: true
        };
        this.request = request;
        return request;
    };
    ResumeInterruptedUpload.prototype.success = function() {
        if (this.currentXhr.status === 404) {
            // Success! Upload is no longer recognized, so there is nothing to fetch
            if (this.rejectedSuccess('uploadId ', this.fileUpload.id, ' not found on S3.')) this.awsDeferred.resolve(this.currentXhr);
            return;
        }
        var nextPartNumber = this.fileUpload.listPartsSuccess(this, this.currentXhr.responseText);
        if (nextPartNumber) {
            var request = this.setupRequest(nextPartNumber); // let's fetch the next set of parts
            this.updateRequest(request);
            this.trySend();
        } else {
            this.fileUpload.makePartsfromPartsOnS3();
            this.awsDeferred.resolve(this.currentXhr);
        }
    };
    //http://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadUploadPart.html
    function PutPart(fileUpload, part) {
        this.part = part;
        this.partNumber = part.partNumber;
        this.start = (this.partNumber - 1) * fileUpload.con.partSize;
        this.end = Math.min(this.partNumber * fileUpload.con.partSize, fileUpload.sizeBytes);
        var request = {
            method: 'PUT',
            path: '?partNumber=' + this.partNumber + '&uploadId=' + fileUpload.uploadId,
            step: 'upload #' + this.partNumber,
            x_amz_headers: fileUpload.xAmzHeadersCommon || fileUpload.xAmzHeadersAtUpload,
            contentSha256: "UNSIGNED-PAYLOAD",
            onProgress: this.onProgress.bind(this)
        };
        SignedS3AWSRequest.call(this, fileUpload, request);
    }
    PutPart.prototype = Object.create(SignedS3AWSRequest.prototype);
    PutPart.prototype.constructor = PutPart;
    PutPart.prototype.part = 1;
    PutPart.prototype.payloadPromise = undefined;
    PutPart.prototype.start = 0;
    PutPart.prototype.end = 0;
    PutPart.prototype.partNumber = undefined;
    PutPart.prototype.getPartMd5Digest = function() {
        var self = this, part = this.part;
        return new Promise(function(resolve, reject) {
            if (self.con.computeContentMd5 && !part.md5_digest) self.getPayload().then(function(data) {
                var md5_digest = self.con.cryptoMd5Method(data);
                if (self.partNumber === 1 && self.con.computeContentMd5 && typeof self.fileUpload.firstMd5Digest === "undefined") {
                    self.fileUpload.firstMd5Digest = md5_digest;
                    self.fileUpload.updateUploadFile({
                        firstMd5Digest: md5_digest
                    });
                }
                resolve(md5_digest);
            }, reject);
            else resolve(part.md5_digest);
        }).then(function(md5_digest) {
            if (md5_digest) {
                l1.d(self.request.step, 'MD5 digest:', md5_digest);
                self.request.md5_digest = md5_digest;
                self.part.md5_digest = md5_digest;
            }
        });
    };
    PutPart.prototype.sendRequestToAWS = function() {
        this.stalledInterval = setInterval(this.stalledPartMonitor(), PARTS_MONITOR_INTERVAL_MS);
        this.stalledPartMonitor();
        return SignedS3AWSRequest.prototype.sendRequestToAWS.call(this);
    };
    PutPart.prototype.send = function() {
        if (this.part.status !== COMPLETE && [
            ABORTED,
            PAUSED,
            CANCELED
        ].indexOf(this.fileUpload.status) === -1) {
            l1.d('uploadPart #', this.partNumber, this.attempts === 1 ? 'submitting' : 'retrying');
            this.part.status = EVAPORATING;
            this.attempts += 1;
            this.part.loadedBytesPrevious = null;
            var self = this;
            return this.getPartMd5Digest().then(function() {
                l1.d('Sending', self.request.step);
                SignedS3AWSRequest.prototype.send.call(self);
            });
        }
    };
    PutPart.prototype.success = function() {
        clearInterval(this.stalledInterval);
        var eTag = this.currentXhr.getResponseHeader('ETag');
        this.currentXhr = null;
        if (this.fileUpload.partSuccess(eTag, this)) this.awsDeferred.resolve(this.currentXhr);
    };
    PutPart.prototype.onProgress = function(evt) {
        if (evt.loaded > 0) {
            var loadedNow = evt.loaded - this.part.loadedBytes;
            if (loadedNow) {
                this.part.loadedBytes = evt.loaded;
                this.fileUpload.updateLoaded(loadedNow);
            }
        }
    };
    PutPart.prototype.stalledPartMonitor = function() {
        var lastLoaded = this.part.loadedBytes;
        var self = this;
        return function() {
            clearInterval(self.stalledInterval);
            if ([
                EVAPORATING,
                ERROR,
                PAUSING,
                PAUSED
            ].indexOf(self.fileUpload.status) === -1 && self.part.status !== ABORTED && self.part.loadedBytes < this.size) {
                if (lastLoaded === self.part.loadedBytes) {
                    l1.w('Part stalled. Will abort and retry:', self.partNumber, decodeURIComponent(self.fileUpload.name));
                    self.abort();
                    if (!self.errorExceptionStatus()) self.delaySend();
                } else self.stalledInterval = setInterval(self.stalledPartMonitor(), PARTS_MONITOR_INTERVAL_MS);
            }
        };
    };
    PutPart.prototype.resetLoadedBytes = function() {
        this.fileUpload.updateLoaded(-this.part.loadedBytes);
        this.part.loadedBytes = 0;
        this.fileUpload.onProgress();
    };
    PutPart.prototype.errorExceptionStatus = function() {
        return [
            CANCELED,
            ABORTED,
            PAUSED,
            PAUSING
        ].indexOf(this.fileUpload.status) > -1;
    };
    PutPart.prototype.delaySend = function() {
        var backOffWait = this.backOffWait();
        this.attempts += 1;
        setTimeout(this.send.bind(this), backOffWait);
    };
    PutPart.prototype.errorHandler = function(reason) {
        clearInterval(this.stalledInterval);
        if (reason.match(/status:404/)) {
            var errMsg = '404 error on part PUT. The part and the file will abort. ' + reason;
            l1.w(errMsg);
            this.fileUpload.error(errMsg);
            this.part.status = ABORTED;
            this.awsDeferred.reject(errMsg);
            return true;
        }
        this.resetLoadedBytes();
        this.part.status = ERROR;
        if (!this.errorExceptionStatus()) this.delaySend();
        return true;
    };
    PutPart.prototype.abort = function() {
        if (this.currentXhr) this.currentXhr.abort();
        this.resetLoadedBytes();
        this.attempts = 1;
    };
    PutPart.size = 0;
    PutPart.prototype.streamToArrayBuffer = function(stream) {
        return new Promise((function(resolve, reject) {
            // stream is empty or ended
            if (!stream.readable) return resolve([]);
            var arr = new Uint8Array(Math.min(this.con.partSize, this.end - this.start)), i = 0;
            stream.on('data', onData);
            stream.on('end', onEnd);
            stream.on('error', onEnd);
            stream.on('close', onClose);
            function onData(data) {
                if (data.byteLength === 1) return;
                arr.set(data, i);
                i += data.byteLength;
            }
            function onEnd(err) {
                if (err) reject(err);
                else resolve(arr);
                cleanup();
            }
            function onClose() {
                resolve(arr);
                cleanup();
            }
            function cleanup() {
                arr = null;
                stream.removeListener('data', onData);
                stream.removeListener('end', onEnd);
                stream.removeListener('error', onEnd);
                stream.removeListener('close', onClose);
            }
        }).bind(this));
    };
    PutPart.prototype.getPayload = function() {
        if (typeof this.payloadPromise === 'undefined') this.payloadPromise = this.con.readableStreams ? this.payloadFromStream() : this.payloadFromBlob();
        return this.payloadPromise;
    };
    PutPart.prototype.payloadFromStream = function() {
        var stream = this.con.readableStreamPartMethod(this.fileUpload.file, this.start, this.end - 1);
        return new Promise((function(resolve, reject) {
            var streamPromise = this.streamToArrayBuffer(stream);
            streamPromise.then((function(data) {
                resolve(data);
            }).bind(this), reject);
        }).bind(this));
    };
    PutPart.prototype.payloadFromBlob = function() {
        // browsers' implementation of the Blob.slice function has been renamed a couple of times, and the meaning of the
        // 2nd parameter changed. For example Gecko went from slice(start,length) -> mozSlice(start, end) -> slice(start, end).
        // As of 12/12/12, it seems that the unified 'slice' is the best bet, hence it being first in the list. See
        // https://developer.mozilla.org/en-US/docs/DOM/Blob for more info.
        var file = this.fileUpload.file, slicerFn = file.slice ? 'slice' : file.mozSlice ? 'mozSlice' : 'webkitSlice', blob = file[slicerFn](this.start, this.end);
        if (this.con.computeContentMd5) return new Promise(function(resolve) {
            var reader = new FileReader();
            reader.onloadend = function() {
                var buffer = this.result && typeof this.result.buffer !== 'undefined', result = buffer ? new Uint8Array(this.result.buffer) : this.result;
                resolve(result);
            };
            reader.readAsArrayBuffer(blob);
        });
        return Promise.resolve(blob);
    };
    PutPart.prototype.stalledInterval = -1;
    PutPart.prototype.getStartedPromise = function() {
        return this.started.promise;
    };
    //http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadAbort.html
    function DeleteMultipartUpload(fileUpload) {
        fileUpload.info('will attempt to abort the upload');
        fileUpload.abortParts();
        var request = {
            method: 'DELETE',
            path: '?uploadId=' + fileUpload.uploadId,
            x_amz_headers: fileUpload.xAmzHeadersCommon,
            success404: true,
            step: 'abort'
        };
        SignedS3AWSRequest.call(this, fileUpload, request);
    }
    DeleteMultipartUpload.prototype = Object.create(SignedS3AWSRequest.prototype);
    DeleteMultipartUpload.prototype.constructor = DeleteMultipartUpload;
    DeleteMultipartUpload.prototype.maxRetries = 1;
    DeleteMultipartUpload.prototype.success = function() {
        this.fileUpload.setStatus(ABORTED);
        this.awsDeferred.resolve(this.currentXhr);
    };
    DeleteMultipartUpload.prototype.errorHandler = function(reason) {
        if (this.attempts > this.maxRetries) {
            var msg = 'Error aborting upload, Exceeded retries deleting the file upload: ' + reason;
            l1.w(msg);
            this.fileUpload.error(msg);
            this.awsDeferred.reject(msg);
            return true;
        }
    };
    function signingVersion(awsRequest, l) {
        var con = awsRequest.con;
        function AwsSignature(request) {
            this.request = request;
        }
        AwsSignature.prototype.request = {};
        AwsSignature.prototype.error = function() {};
        AwsSignature.prototype.authorizationString = function() {};
        AwsSignature.prototype.stringToSign = function() {};
        AwsSignature.prototype.canonicalRequest = function() {};
        AwsSignature.prototype.setHeaders = function() {};
        AwsSignature.prototype.datetime = function(timeOffset) {
            return new Date(new Date().getTime() + timeOffset);
        };
        AwsSignature.prototype.dateString = function(timeOffset) {
            return this.datetime(timeOffset).toISOString().slice(0, 19).replace(/-|:/g, '') + "Z";
        };
        function AwsSignatureV2(request) {
            AwsSignature.call(this, request);
        }
        AwsSignatureV2.prototype = Object.create(AwsSignature.prototype);
        AwsSignatureV2.prototype.constructor = AwsSignatureV2;
        AwsSignatureV2.prototype.authorizationString = function() {
            return [
                'AWS ',
                con.aws_key,
                ':',
                this.request.auth
            ].join('');
        };
        AwsSignatureV2.prototype.stringToSign = function() {
            var x_amz_headers = '', result, header_key_array = [];
            for(var key in this.request.x_amz_headers)if (this.request.x_amz_headers.hasOwnProperty(key)) header_key_array.push(key);
            header_key_array.sort();
            header_key_array.forEach((function(header_key) {
                x_amz_headers += header_key + ':' + this.request.x_amz_headers[header_key] + '\n';
            }).bind(this));
            result = this.request.method + '\n' + (this.request.md5_digest || '') + '\n' + (this.request.contentType || '') + '\n' + '\n' + x_amz_headers + (con.cloudfront ? '/' + con.bucket : '') + awsRequest.getPath() + this.request.path;
            l.d('V2 stringToSign:', result);
            return result;
        };
        AwsSignatureV2.prototype.dateString = function(timeOffset) {
            return this.datetime(timeOffset).toUTCString();
        };
        AwsSignatureV2.prototype.getPayload = function() {
            return Promise.resolve();
        };
        function AwsSignatureV4(request) {
            this._cr = undefined;
            AwsSignature.call(this, request);
        }
        AwsSignatureV4.prototype = Object.create(AwsSignature.prototype);
        AwsSignatureV4.prototype.constructor = AwsSignatureV4;
        AwsSignatureV4.prototype._cr = undefined;
        AwsSignatureV4.prototype.payload = null;
        AwsSignatureV4.prototype.error = function() {
            this._cr = undefined;
        };
        AwsSignatureV4.prototype.getPayload = function() {
            return awsRequest.getPayload().then((function(data) {
                this.payload = data;
            }).bind(this));
        };
        AwsSignatureV4.prototype.authorizationString = function() {
            var authParts = [];
            var credentials = this.credentialString();
            var headers = this.canonicalHeaders();
            authParts.push([
                'AWS4-HMAC-SHA256 Credential=',
                con.aws_key,
                '/',
                credentials
            ].join(''));
            authParts.push('SignedHeaders=' + headers.signedHeaders);
            authParts.push('Signature=' + this.request.auth);
            return authParts.join(', ');
        };
        AwsSignatureV4.prototype.stringToSign = function() {
            var signParts = [];
            signParts.push('AWS4-HMAC-SHA256');
            signParts.push(this.request.dateString);
            signParts.push(this.credentialString());
            signParts.push(con.cryptoHexEncodedHash256(this.canonicalRequest()));
            var result = signParts.join('\n');
            l.d('V4 stringToSign:', result);
            return result;
        };
        AwsSignatureV4.prototype.credentialString = function() {
            var credParts = [];
            credParts.push(this.request.dateString.slice(0, 8));
            credParts.push(con.awsRegion);
            credParts.push('s3');
            credParts.push('aws4_request');
            return credParts.join('/');
        };
        AwsSignatureV4.prototype.canonicalQueryString = function() {
            var qs = awsRequest.request.query_string || '', search = uri([
                awsRequest.awsUrl,
                this.request.path,
                qs
            ].join("")).search, searchParts = search.length ? search.split('&') : [], encoded = [], nameValue, i;
            for(i = 0; i < searchParts.length; i++){
                nameValue = searchParts[i].split("=");
                encoded.push({
                    name: encodeURIComponent(nameValue[0]),
                    value: nameValue.length > 1 ? encodeURIComponent(nameValue[1]) : null
                });
            }
            var sorted = encoded.sort(function(a, b) {
                if (a.name < b.name) return -1;
                else if (a.name > b.name) return 1;
                return 0;
            });
            var result = [];
            for(i = 0; i < sorted.length; i++){
                nameValue = sorted[i].value ? [
                    sorted[i].name,
                    sorted[i].value
                ].join("=") : sorted[i].name + '=';
                result.push(nameValue);
            }
            return result.join('&');
        };
        AwsSignatureV4.prototype.getPayloadSha256Content = function() {
            var result = this.request.contentSha256 || con.cryptoHexEncodedHash256(this.payload || '');
            l.d(this.request.step, 'getPayloadSha256Content:', result);
            return result;
        };
        AwsSignatureV4.prototype.canonicalHeaders = function() {
            var canonicalHeaders = [], keys = [], i;
            function addHeader(name, value) {
                var key = name.toLowerCase();
                keys.push(key);
                canonicalHeaders[key] = value.replace(/\s+/g, ' ');
            }
            if (this.request.md5_digest) addHeader("Content-Md5", this.request.md5_digest);
            addHeader('Host', awsRequest.awsHost);
            if (this.request.contentType) addHeader('Content-Type', this.request.contentType || '');
            var amzHeaders = this.request.x_amz_headers || {};
            for(var key1 in amzHeaders)if (amzHeaders.hasOwnProperty(key1)) addHeader(key1, amzHeaders[key1]);
            var sortedKeys = keys.sort(function(a, b) {
                if (a < b) return -1;
                else if (a > b) return 1;
                return 0;
            });
            var result = [];
            var unsigned_headers = [], not_signed = this.request.not_signed_headers || [], signed_headers = [];
            for(i = 0; i < not_signed.length; i++)unsigned_headers.push(not_signed[i].toLowerCase());
            for(i = 0; i < sortedKeys.length; i++){
                var k = sortedKeys[i];
                result.push([
                    k,
                    canonicalHeaders[k]
                ].join(":"));
                if (unsigned_headers.indexOf(k) === -1) signed_headers.push(k);
            }
            return {
                canonicalHeaders: result.join("\n"),
                signedHeaders: signed_headers.join(";")
            };
        };
        AwsSignatureV4.prototype.canonicalRequest = function() {
            if (typeof this._cr !== 'undefined') return this._cr;
            var canonParts = [];
            canonParts.push(this.request.method);
            canonParts.push(uri([
                awsRequest.awsUrl,
                awsRequest.getPath(),
                this.request.path
            ].join("")).pathname);
            canonParts.push(this.canonicalQueryString() || '');
            var headers = this.canonicalHeaders();
            canonParts.push(headers.canonicalHeaders + '\n');
            canonParts.push(headers.signedHeaders);
            canonParts.push(this.getPayloadSha256Content());
            this._cr = canonParts.join("\n");
            l.d(this.request.step, 'V4 CanonicalRequest:', this._cr);
            return this._cr;
        };
        AwsSignatureV4.prototype.setHeaders = function(xhr) {
            xhr.setRequestHeader("x-amz-content-sha256", this.getPayloadSha256Content());
        };
        return con.awsSignatureVersion === '4' ? AwsSignatureV4 : AwsSignatureV2;
    }
    function authorizationMethod(awsRequest) {
        var fileUpload = awsRequest.fileUpload, con = fileUpload.con, request = awsRequest.request;
        function AuthorizationMethod() {
            this.request = request;
        }
        AuthorizationMethod.prototype = Object.create(AuthorizationMethod.prototype);
        AuthorizationMethod.prototype.request = {};
        AuthorizationMethod.makeSignParamsObject = function(params) {
            var out = {};
            for(var param in params){
                if (!params.hasOwnProperty(param)) continue;
                if (typeof params[param] === 'function') out[param] = params[param]();
                else out[param] = params[param];
            }
            return out;
        };
        AuthorizationMethod.prototype.authorize = function() {
            return new Promise(function(resolve, reject) {
                var xhr4 = new XMLHttpRequest();
                awsRequest.currentXhr = xhr4;
                var stringToSign = awsRequest.stringToSign(), url = [
                    con.signerUrl,
                    '?to_sign=',
                    stringToSign,
                    '&datetime=',
                    request.dateString
                ];
                if (con.sendCanonicalRequestToSignerUrl) {
                    url.push('&canonical_request=');
                    url.push(encodeURIComponent(awsRequest.canonicalRequest()));
                }
                url = url.join("");
                var signParams = AuthorizationMethod.makeSignParamsObject(fileUpload.signParams);
                for(var param in signParams){
                    if (!signParams.hasOwnProperty(param)) continue;
                    url += '&' + encodeURIComponent(param) + '=' + encodeURIComponent(signParams[param]);
                }
                if (con.xhrWithCredentials) xhr4.withCredentials = true;
                xhr4.onreadystatechange = function() {
                    if (xhr4.readyState === 4) {
                        if (xhr4.status === 200) awsRequest.signResponse(xhr4.response, stringToSign, request.dateString).then(resolve);
                        else {
                            if ([
                                401,
                                403
                            ].indexOf(xhr4.status) > -1) {
                                var reason = "status:" + xhr4.status;
                                fileUpload.deferredCompletion.reject('Permission denied ' + reason);
                                return reject(reason);
                            }
                            reject("Signature fetch returned status: " + xhr4.status);
                        }
                    }
                };
                xhr4.onerror = function(xhr) {
                    reject('authorizedSend transport error: ' + xhr.responseText);
                };
                xhr4.open('GET', url);
                var signHeaders = AuthorizationMethod.makeSignParamsObject(con.signHeaders);
                for(var header in signHeaders){
                    if (!signHeaders.hasOwnProperty(header)) continue;
                    xhr4.setRequestHeader(header, signHeaders[header]);
                }
                if (typeof fileUpload.beforeSigner === 'function') fileUpload.beforeSigner(xhr4, url);
                xhr4.send();
            });
        };
        function AuthorizationCustom() {
            AuthorizationMethod.call(this);
        }
        AuthorizationCustom.prototype = Object.create(AuthorizationMethod.prototype);
        AuthorizationCustom.prototype.authorize = function() {
            return con.customAuthMethod(AuthorizationMethod.makeSignParamsObject(fileUpload.signParams), AuthorizationMethod.makeSignParamsObject(con.signHeaders), awsRequest.stringToSign(), request.dateString, awsRequest.canonicalRequest()).catch(function(reason) {
                fileUpload.deferredCompletion.reject(reason);
                throw reason;
            });
        };
        if (typeof con.customAuthMethod === 'function') return new AuthorizationCustom();
        return new AuthorizationMethod();
    }
    function awsUrl(con) {
        var url;
        if (con.aws_url) url = [
            con.aws_url
        ];
        else {
            if (con.s3Acceleration) {
                url = [
                    "https://",
                    con.bucket,
                    ".s3-accelerate"
                ];
                con.cloudfront = true;
            } else {
                url = [
                    "https://",
                    con.cloudfront ? con.bucket + "." : "",
                    "s3"
                ];
                if (con.awsRegion !== "us-east-1") url.push("-", con.awsRegion);
            }
            url.push(".amazonaws.com");
        }
        return url.join("");
    }
    function s3EncodedObjectName(fileName) {
        var fileParts = fileName.split('/'), encodedParts = [];
        fileParts.forEach(function(p) {
            var buf = [], enc = encodeURIComponent(p);
            for(var i = 0; i < enc.length; i++)buf.push(S3_EXTRA_ENCODED_CHARS[enc.charCodeAt(i)] || enc.charAt(i));
            encodedParts.push(buf.join(""));
        });
        return encodedParts.join('/');
    }
    function uri(url) {
        var p, href = url || '/';
        try {
            p = new URL(href);
        } catch (e) {
            p = document.createElement('a');
            p.href = href;
        }
        return {
            protocol: p.protocol,
            hostname: p.hostname,
            // IE omits the leading slash, so add it if it's missing
            pathname: p.pathname.replace(/(^\/?)/, "/"),
            port: p.port,
            search: p.search[0] === '?' ? p.search.substr(1) : p.search,
            hash: p.hash,
            host: p.host // => "example.com:3000"
        };
    }
    function dateISOString(date) {
        // Try to get the modified date as an ISO String, if the date exists
        return date ? new Date(date).toISOString() : '';
    }
    function getAwsResponse(xhr) {
        var code = elementText(xhr.responseText, "Code"), msg = elementText(xhr.responseText, "Message");
        return code.length ? [
            'AWS Code: ',
            code,
            ', Message:',
            msg
        ].join("") : '';
    }
    function elementText(source, element) {
        var match = source.match([
            "<",
            element,
            ">(.+)</",
            element,
            ">"
        ].join(""));
        return match ? match[1] : '';
    }
    function defer() {
        var deferred = {}, promise;
        promise = new Promise(function(resolve, reject) {
            deferred = {
                resolve: resolve,
                reject: reject
            };
        });
        return {
            resolve: deferred.resolve,
            reject: deferred.reject,
            promise: promise
        };
    }
    function extend(obj1, obj2, obj3) {
        function ext(target, source) {
            if (typeof source !== 'object') return;
            for(var key in source)if (source.hasOwnProperty(key)) target[key] = source[key];
        }
        obj1 = obj1 || {};
        obj2 = obj2 || {};
        obj3 = obj3 || {};
        ext(obj2, obj3);
        ext(obj1, obj2);
        return obj1;
    }
    function getSavedUploads(purge) {
        var uploads = JSON.parse(historyCache.getItem('awsUploads') || '{}');
        if (purge) {
            for(var key in uploads)if (uploads.hasOwnProperty(key)) {
                var upload = uploads[key], completedAt = new Date(upload.completedAt || FAR_FUTURE);
                if (completedAt < HOURS_AGO) // The upload is recent, let's keep it
                delete uploads[key];
            }
            historyCache.setItem('awsUploads', JSON.stringify(uploads));
        }
        return uploads;
    }
    function uploadKey1(fileUpload) {
        // The key tries to give a signature to a file in the absence of its path.
        // "<filename>-<mimetype>-<modifieddate>-<filesize>"
        return [
            fileUpload.file.name,
            fileUpload.file.type,
            dateISOString(fileUpload.file.lastModified),
            fileUpload.sizeBytes
        ].join("-");
    }
    function saveUpload(uploadKey, upload) {
        var uploads = getSavedUploads();
        uploads[uploadKey] = upload;
        historyCache.setItem('awsUploads', JSON.stringify(uploads));
    }
    function removeUpload(uploadKey) {
        var uploads = getSavedUploads();
        delete uploads[uploadKey];
        historyCache.setItem('awsUploads', JSON.stringify(uploads));
    }
    function removeAtIndex(a, i) {
        var idx = a.indexOf(i);
        if (idx > -1) {
            a.splice(idx, 1);
            return true;
        }
    }
    function readableFileSize(size) {
        // Adapted from https://github.com/fkjaekel
        // https://github.com/TTLabs/EvaporateJS/issues/13
        var units = [
            'B',
            'Kb',
            'Mb',
            'Gb',
            'Tb',
            'Pb',
            'Eb',
            'Zb',
            'Yb'
        ], i = 0;
        while(size >= 1024){
            size /= 1024;
            ++i;
        }
        return [
            size.toFixed(2).replace('.00', ''),
            units[i]
        ].join(" ");
    }
    var historyCache;
    function HistoryCache(mockLocalStorage) {
        var supported = HistoryCache.supported();
        this.cacheStore = mockLocalStorage ? {} : supported ? localStorage : undefined;
    }
    HistoryCache.prototype.supported = false;
    HistoryCache.prototype.cacheStore = undefined;
    HistoryCache.prototype.getItem = function(key) {
        if (this.cacheStore) return this.cacheStore[key];
    };
    HistoryCache.prototype.setItem = function(key, value) {
        if (this.cacheStore) this.cacheStore[key] = value;
    };
    HistoryCache.prototype.removeItem = function(key) {
        if (this.cacheStore) return delete this.cacheStore[key];
    };
    HistoryCache.supported = function() {
        var result = false;
        if (typeof window !== 'undefined') {
            if (!('localStorage' in window)) return result;
        } else return result;
        // Try to use storage (it might be disabled, e.g. user is in private mode)
        try {
            var k = '___test';
            localStorage[k] = 'OK';
            var test = localStorage[k];
            delete localStorage[k];
            return test === 'OK';
        } catch (e) {
            return result;
        }
    };
    function noOpLogger() {
        return {
            d: function() {},
            w: function() {},
            e: function() {}
        };
    }
    l1 = noOpLogger();
    if (module.exports) module.exports = Evaporate;
    else if (typeof window !== 'undefined') window.Evaporate = Evaporate;
})();

},{}],"aSUyG":[function(require,module,exports) {
(function(factory) {
    var glob, e;
    // Node/CommonJS
    module.exports = factory();
})(function(undefined) {
    'use strict';
    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */ /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */ var add32 = function(a, b) {
        return a + b & 4294967295;
    }, hex_chr = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'
    ];
    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b);
    }
    function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }
    function md5blk(s) {
        var md5blks = [], i; /* Andy King said do it this way. */ 
        for(i = 0; i < 64; i += 4)md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        return md5blks;
    }
    function md5blk_array(a) {
        var md5blks = [], i; /* Andy King said do it this way. */ 
        for(i = 0; i < 64; i += 4)md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        return md5blks;
    }
    function md51(s) {
        var n = s.length, state = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ], i, length, tail, tmp, lo, hi;
        for(i = 64; i <= n; i += 64)md5cycle(state, md5blk(s.substring(i - 64, i)));
        s = s.substring(i - 64);
        length = s.length;
        tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        for(i = 0; i < length; i += 1)tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for(i = 0; i < 16; i += 1)tail[i] = 0;
        }
        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
    }
    function md51_array(a) {
        var n = a.length, state = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ], i, length, tail, tmp, lo, hi;
        for(i = 64; i <= n; i += 64)md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        for(i = 0; i < length; i += 1)tail[i >> 2] |= a[i] << (i % 4 << 3);
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for(i = 0; i < 16; i += 1)tail[i] = 0;
        }
        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
    }
    function rhex(n) {
        var s = '', j;
        for(j = 0; j < 4; j += 1)s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        return s;
    }
    function hex1(x) {
        var i;
        for(i = 0; i < x.length; i += 1)x[i] = rhex(x[i]);
        return x.join('');
    }
    // In some cases the fast add32 function cannot be used..
    if (hex1(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') add32 = function(x, y) {
        var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535;
    };
    // ---------------------------------------------------
    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */ if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) (function() {
        function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) return Math.max(val + length, 0);
            return Math.min(val, length);
        }
        ArrayBuffer.prototype.slice = function(from, to) {
            var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
            if (to !== undefined) end = clamp(to, length);
            if (begin > end) return new ArrayBuffer(0);
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
        };
    })();
    // ---------------------------------------------------
    /**
     * Helpers.
     */ function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) str = unescape(encodeURIComponent(str));
        return str;
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for(i = 0; i < length; i += 1)arr[i] = str.charCodeAt(i);
        return returnUInt8Array ? arr : buff;
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
    }
    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for(x = 0; x < length - 1; x += 2)bytes.push(parseInt(hex.substr(x, 2), 16));
        return String.fromCharCode.apply(String, bytes);
    }
    // ---------------------------------------------------
    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */ function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }
    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.append = function(str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));
        return this;
    };
    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for(i = 64; i <= length; i += 64)md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        this._buff = this._buff.substring(i - 64);
        return this;
    };
    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i, tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ], ret;
        for(i = 0; i < length; i += 1)tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        this._finish(tail, length);
        ret = hex1(this._hash);
        if (raw) ret = hexToBinaryString(ret);
        this.reset();
        return ret;
    };
    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.reset = function() {
        this._buff = '';
        this._length = 0;
        this._hash = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ];
        return this;
    };
    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */ SparkMD5.prototype.getState = function() {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
        };
    };
    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
    };
    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */ SparkMD5.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };
    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */ SparkMD5.prototype._finish = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for(i = 0; i < 16; i += 1)tail[i] = 0;
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };
    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.hash = function(str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };
    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} raw     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex1(hash);
        return raw ? hexToBinaryString(ret) : ret;
    };
    // ---------------------------------------------------
    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */ SparkMD5.ArrayBuffer = function() {
        // call reset to init the instance
        this.reset();
    };
    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */ SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for(i = 64; i <= length; i += 64)md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
    };
    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ], i, ret;
        for(i = 0; i < length; i += 1)tail[i >> 2] |= buff[i] << (i % 4 << 3);
        this._finish(tail, length);
        ret = hex1(this._hash);
        if (raw) ret = hexToBinaryString(ret);
        this.reset();
        return ret;
    };
    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */ SparkMD5.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ];
        return this;
    };
    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */ SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
    };
    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */ SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     raw True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */ SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex1(hash);
        return raw ? hexToBinaryString(ret) : ret;
    };
    return SparkMD5;
});

},{}],"eRcmX":[function() {},{}],"ekxYL":[function() {},{}],"kyOlh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["1ntbq","aI6f5"], "aI6f5", "parcelRequire952e")

//# sourceMappingURL=index.js.map
