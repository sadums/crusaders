exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 70:
/***/ ((module) => {

module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_210__) {

// ESM COMPAT FLAG
__nested_webpack_require_210__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_210__.d(__nested_webpack_exports__, {
  "beginMultipartUpload": function() { return /* reexport */ beginMultipartUpload; },
  "completeUploadPart": function() { return /* reexport */ completeUploadPart; },
  "getUploadPart": function() { return /* reexport */ getUploadPart; },
  "request": function() { return /* reexport */ request; }
});

;// CONCATENATED MODULE: ./src/core/request.ts
/**
 * Request using XHR client
 * @param options The request options from the the service
 * @returns ApiResult
 * @throws ApiError
 */
function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

var request = _async(function (config, options) {
  var url = getUrl(config, options);
  return _await(sendRequest(config, options, url), function (response) {
    var responseBody = getResponseBody(response);
    var responseHeader = getResponseHeader(response, options.responseHeader);
    return {
      url: url,
      ok: response.status >= 200 && response.status < 300,
      status: response.status,
      statusText: response.statusText,
      body: responseHeader || responseBody
    };
  });
});

var sendRequest = _async(function (config, options, url) {
  var xhr = new XMLHttpRequest();
  xhr.open(options.method, url, true);
  xhr.withCredentials = config.WITH_CREDENTIALS;
  return _await(getHeaders(config, options), function (headers) {
    headers.forEach(function (value, key) {
      xhr.setRequestHeader(key, value);
    });
    return new Promise(function (resolve) {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          resolve(xhr);
        }
      };

      xhr.send(getRequestBody(options));
    });
  });
});

var getHeaders = _async(function (config, options) {
  return _await(resolve(options, config.USERNAME), function (username) {
    return _await(resolve(options, config.PASSWORD), function (password) {
      return _await(resolve(options, config.HEADERS), function (defaultHeaders) {
        var headers = new Headers(Object.assign(Object.assign({
          Accept: contentTypeJson
        }, defaultHeaders), options.headers));

        if (isStringWithValue(username) && isStringWithValue(password)) {
          var credentials = btoa("".concat(username, ":").concat(password));
          headers.append("Authorization", "Basic ".concat(credentials));
        }

        if (options.body) {
          headers.append(contentType, contentTypeJson);
        }

        return headers;
      });
    });
  });
});

var resolve = _async(function (options, resolver) {
  return typeof resolver === "function" ? resolver(options) : resolver;
});

var contentType = "Content-Type";
var contentTypeJson = "application/json";

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isStringWithValue(value) {
  return typeof value === "string" && value !== "";
}

function getQueryString(params) {
  var qs = [];
  Object.keys(params).forEach(function (key) {
    var value = params[key];

    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach(function (value) {
          qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value))));
        });
      } else {
        qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value))));
      }
    }
  });

  if (qs.length > 0) {
    return "?".concat(qs.join("&"));
  }

  return "";
}

function getUrl(config, options) {
  var path = options.path.replace(/[:]/g, "_");
  var url = "".concat(config.BASE).concat(path);

  if (options.query) {
    return "".concat(url).concat(getQueryString(options.query));
  }

  return url;
}

function getRequestBody(options) {
  if (options.body) {
    return JSON.stringify(options.body);
  }

  return undefined;
}

function getResponseHeader(xhr, responseHeader) {
  if (responseHeader) {
    return xhr.getResponseHeader(responseHeader);
  }

  return null;
}

function getResponseBody(xhr) {
  var headerValue = xhr.getResponseHeader(contentType);

  if (headerValue) {
    var isJSON = headerValue.toLowerCase().startsWith(contentTypeJson);

    if (isJSON) {
      return JSON.parse(xhr.responseText);
    } else {
      return xhr.responseText;
    }
  }

  return null;
}
;// CONCATENATED MODULE: ./src/services/UploadsService.ts


function UploadsService_await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}
/**
 * Finalizes an upload part for an in-progress multipart upload. Required API key type: 'secret_*' or 'public_*'.
 * @param accountId
 * @param uploadId
 * @param uploadPartIndex
 * @param requestBody
 * @returns void
 * @throws ApiError
 */


function UploadsService_async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

/**
 * Gets a remaining upload part for an in-progress upload. Required API key type: 'secret_*' or 'public_*'.
 * @param accountId
 * @param uploadId
 * @param uploadPartIndex
 * @returns UploadPartV2 Success.
 * @throws ApiError
 */
var getUploadPart = UploadsService_async(function (config, accountId, uploadId, uploadPartIndex) {
  return request(config, {
    method: "GET",
    path: "".concat(accounts).concat(accountId).concat(uploads, "/").concat(uploadId).concat(parts).concat(uploadPartIndex)
  });
});
var completeUploadPart = UploadsService_async(function (config, accountId, uploadId, uploadPartIndex, requestBody) {
  return request(config, {
    method: "PUT",
    path: "".concat(accounts).concat(accountId).concat(uploads, "/").concat(uploadId).concat(parts).concat(uploadPartIndex),
    body: requestBody
  });
});
var beginMultipartUpload = UploadsService_async(function (config, accountId, requestBody) {
  return request(config, {
    method: "POST",
    path: "".concat(accounts).concat(accountId).concat(uploads),
    body: requestBody
  });
});
var accounts = "/v2/accounts/";
var uploads = "/uploads";
var parts = "/parts/";
;// CONCATENATED MODULE: ./src/index.ts
/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */




 // Used by upload-js

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_7332__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_7332__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_7332__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_7332__.o(definition, key) && !__nested_webpack_require_7332__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_7332__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_7332__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_7332__("./src/index.ts");
/******/ })()
;

/***/ }),

/***/ 1198:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 2980:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;


/***/ }),

/***/ 5333:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var n=__webpack_require__(9052),t=__webpack_require__(3920);function e(n,t){for(var e in t)n[e]=t[e];return n}function r(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function u(n,t){return n===t&&(0!==n||1/n==1/t)||n!=n&&t!=t}function o(n){this.props=n}function i(t,e){function u(n){var t=this.props.ref,u=t==n.ref;return!u&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!u:r(this.props,n)}function o(e){return this.shouldComponentUpdate=u,n.createElement(t,e)}return o.displayName="Memo("+(t.displayName||t.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(o.prototype=new n.Component).isPureReactComponent=!0,o.prototype.shouldComponentUpdate=function(n,t){return r(this.props,n)||r(this.state,t)};var c=n.options.__b;n.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),c&&c(n)};var l="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function f(n){function t(t){var r=e({},t);return delete r.ref,n(r,t.ref||null)}return t.$$typeof=l,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var a=function(t,e){return null==t?null:n.toChildArray(n.toChildArray(t).map(e))},s={map:a,forEach:a,count:function(t){return t?n.toChildArray(t).length:0},only:function(t){var e=n.toChildArray(t);if(1!==e.length)throw"Children.only";return e[0]},toArray:n.toChildArray},p=n.options.__e;n.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);p(n,t,e,r)};var h=n.options.unmount;function v(n,t,r){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=e({},n)).__c&&(n.__c.__P===r&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return v(n,t,r)})),n}function d(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return d(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function m(){this.__u=0,this.t=null,this.__b=null}function x(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function b(t){var e,r,u;function o(o){if(e||(e=t()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return n.createElement(r,o)}return o.displayName="Lazy",o.__f=!0,o}function _(){this.u=null,this.o=null}n.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),h&&h(n)},(m.prototype=new n.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=x(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(c):c())};e.__R=i;var c=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=d(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},l=!0===t.__h;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},m.prototype.componentWillUnmount=function(){this.t=[]},m.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),u=this.__v.__k[0].__c;this.__v.__k[0]=v(this.__b,r,u.__O=u.__P)}this.__b=null}var o=e.__a&&n.createElement(n.Fragment,null,t.fallback);return o&&(o.__h=null),[n.createElement(n.Fragment,null,e.__a?null:t.children),o]};var y=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function g(n){return this.getChildContext=function(){return n.context},n.children}function S(t){var e=this,r=t.i;e.componentWillUnmount=function(){n.render(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),t.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),n.render(n.createElement(g,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function C(t,e){var r=n.createElement(S,{__v:t,i:e});return r.containerInfo=e,r}(_.prototype=new n.Component).__a=function(n){var t=this,e=x(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),y(t,n,r)):u()};e?e(o):o()}},_.prototype.render=function(t){this.u=null,this.o=new Map;var e=n.toChildArray(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var r=e.length;r--;)this.o.set(e[r],this.u=[1,0,this.u]);return t.children},_.prototype.componentDidUpdate=_.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){y(n,e,t)})};var E="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,O=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,w=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,R=/[A-Z0-9]/g,j="undefined"!=typeof document,N=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function k(t,e,r){return null==e.__k&&(e.textContent=""),n.render(t,e),"function"==typeof r&&r(),t?t.__c:null}function A(t,e,r){return n.hydrate(t,e),"function"==typeof r&&r(),t?t.__c:null}n.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(n.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var T=n.options.event;function I(){}function L(){return this.cancelBubble}function U(){return this.defaultPrevented}n.options.event=function(n){return T&&(n=T(n)),n.persist=I,n.isPropagationStopped=L,n.isDefaultPrevented=U,n.nativeEvent=n};var D,F={enumerable:!1,configurable:!0,get:function(){return this.class}},M=n.options.vnode;n.options.vnode=function(t){"string"==typeof t.type&&function(t){var e=t.props,r=t.type,u={};for(var o in e){var i=e[o];if(!("value"===o&&"defaultValue"in e&&null==i||j&&"children"===o&&"noscript"===r||"class"===o||"className"===o)){var c=o.toLowerCase();"defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===c?o="ondblclick":"onchange"!==c||"input"!==r&&"textarea"!==r||N(e.type)?"onfocus"===c?o="onfocusin":"onblur"===c?o="onfocusout":w.test(o)?o=c:-1===r.indexOf("-")&&O.test(o)?o=o.replace(R,"-$&").toLowerCase():null===i&&(i=void 0):c=o="oninput","oninput"===c&&u[o=c]&&(o="oninputCapture"),u[o]=i}}"select"==r&&u.multiple&&Array.isArray(u.value)&&(u.value=n.toChildArray(e.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==r&&null!=u.defaultValue&&(u.value=n.toChildArray(e.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),e.class&&!e.className?(u.class=e.class,Object.defineProperty(u,"className",F)):(e.className&&!e.class||e.class&&e.className)&&(u.class=u.className=e.className),t.props=u}(t),t.$$typeof=E,M&&M(t)};var V=n.options.__r;n.options.__r=function(n){V&&V(n),D=n.__c};var W=n.options.diffed;n.options.diffed=function(n){W&&W(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),D=null};var P={ReactCurrentDispatcher:{current:{readContext:function(n){return D.__n[n.__c].props.value}}}};function z(t){return n.createElement.bind(null,t)}function B(n){return!!n&&n.$$typeof===E}function q(t){return B(t)?n.cloneElement.apply(null,arguments):t}function H(t){return!!t.__k&&(n.render(null,t),!0)}function Z(n){return n&&(n.base||1===n.nodeType&&n)||null}var Y=function(n,t){return n(t)},$=function(n,t){return n(t)},G=n.Fragment;function J(n){n()}function K(n){return n}function Q(){return[!1,J]}var X=t.useLayoutEffect;function nn(n,e){var r=e(),o=t.useState({p:{__:r,h:e}}),i=o[0].p,c=o[1];return t.useLayoutEffect(function(){i.__=r,i.h=e,u(i.__,e())||c({p:i})},[n,r,e]),t.useEffect(function(){return u(i.__,i.h())||c({p:i}),n(function(){u(i.__,i.h())||c({p:i})})},[n]),r}var tn={useState:t.useState,useId:t.useId,useReducer:t.useReducer,useEffect:t.useEffect,useLayoutEffect:t.useLayoutEffect,useInsertionEffect:X,useTransition:Q,useDeferredValue:K,useSyncExternalStore:nn,startTransition:J,useRef:t.useRef,useImperativeHandle:t.useImperativeHandle,useMemo:t.useMemo,useCallback:t.useCallback,useContext:t.useContext,useDebugValue:t.useDebugValue,version:"17.0.2",Children:s,render:k,hydrate:A,unmountComponentAtNode:H,createPortal:C,createElement:n.createElement,createContext:n.createContext,createFactory:z,cloneElement:q,createRef:n.createRef,Fragment:n.Fragment,isValidElement:B,findDOMNode:Z,Component:n.Component,PureComponent:o,memo:i,forwardRef:f,flushSync:$,unstable_batchedUpdates:Y,StrictMode:G,Suspense:m,SuspenseList:_,lazy:b,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:P};Object.defineProperty(exports, "Component", ({enumerable:!0,get:function(){return n.Component}})),Object.defineProperty(exports, "Fragment", ({enumerable:!0,get:function(){return n.Fragment}})),Object.defineProperty(exports, "createContext", ({enumerable:!0,get:function(){return n.createContext}})),Object.defineProperty(exports, "createElement", ({enumerable:!0,get:function(){return n.createElement}})),Object.defineProperty(exports, "createRef", ({enumerable:!0,get:function(){return n.createRef}})),exports.Children=s,exports.PureComponent=o,exports.StrictMode=G,exports.Suspense=m,exports.SuspenseList=_,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,exports.cloneElement=q,exports.createFactory=z,exports.createPortal=C,exports["default"]=tn,exports.findDOMNode=Z,exports.flushSync=$,exports.forwardRef=f,exports.hydrate=A,exports.isValidElement=B,exports.lazy=b,exports.memo=i,exports.render=k,exports.startTransition=J,exports.unmountComponentAtNode=H,exports.unstable_batchedUpdates=Y,exports.useDeferredValue=K,exports.useInsertionEffect=X,exports.useSyncExternalStore=nn,exports.useTransition=Q,exports.version="17.0.2",Object.keys(t).forEach(function(n){"default"===n||exports.hasOwnProperty(n)||Object.defineProperty(exports,n,{enumerable:!0,get:function(){return t[n]}})});
//# sourceMappingURL=compat.js.map


/***/ }),

/***/ 9052:
/***/ ((__unused_webpack_module, exports) => {

var n,l,u,t,i,o,r,f,e,c={},s=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function y(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d(l,f,i,o,null)}function d(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function _(n){return n.children}function x(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function g(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!m.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(m)}function m(){var n,l,u,t,o,r,e,c,s;for(i.sort(f);n=i.shift();)n.__d&&(l=i.length,t=void 0,o=void 0,r=void 0,c=(e=(u=n).__v).__e,(s=u.__P)&&(t=[],o=[],(r=a({},e)).__v=e.__v+1,j(s,e,r,u.__n,void 0!==s.ownerSVGElement,null!=e.__h?[c]:null,t,null==c?k(e):c,e.__h,o),z(t,e,o),e.__e!=c&&b(e)),i.length>l&&i.sort(f));m.__r=0}function w(n,l,u,t,i,o,r,f,e,p,a){var h,y,x,k,b,g,m,w,$,A,H=0,I=t&&t.__k||s,T=I.length,z=T,L=l.length;for(u.__k=[],h=0;h<L;h++)null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k||"function"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?d(null,k,null,null,k):v(k)?d(_,{children:k},null,null,null):k.__b>0?d(k.type,k.props,k.key,k.ref?k.ref:null,k.__v):k)&&(k.__=u,k.__b=u.__b+1,-1===(w=S(k,I,m=h+H,z))?x=c:(x=I[w]||c,I[w]=void 0,z--),j(n,k,x,i,o,r,f,e,p,a),b=k.__e,(y=k.ref)&&x.ref!=y&&(x.ref&&M(x.ref,null,k),a.push(y,k.__c||b,k)),null!=b&&(null==g&&(g=b),A=!($=x===c||null===x.__v)&&w===m,$?-1==w&&H--:w!==m&&(w===m+1?(H++,A=!0):w>m?z>L-m?(H+=w-m,A=!0):H--:H=w<m&&w==m-1?w-m:0),m=h+H,A=A||w==h&&!$,"function"!=typeof k.type||w===m&&x.__k!==k.__k?"function"==typeof k.type||A?void 0!==k.__d?(e=k.__d,k.__d=void 0):e=b.nextSibling:e=C(n,b,e):e=P(k,e,n),"function"==typeof u.type&&(u.__d=e)));for(u.__e=g,h=T;h--;)null!=I[h]&&("function"==typeof u.type&&null!=I[h].__e&&I[h].__e==u.__d&&(u.__d=I[h].__e.nextSibling),N(I[h],I[h]))}function P(n,l,u){for(var t,i=n.__k,o=0;i&&o<i.length;o++)(t=i[o])&&(t.__=n,l="function"==typeof t.type?P(t,l,u):C(u,t.__e,l));return l}function C(n,l,u){return null==u||u.parentNode!==n?n.insertBefore(l,null):l==u&&null!=l.parentNode||n.insertBefore(l,u),l.nextSibling}function S(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type)return u;if(t>(null!=e?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&i==e.key&&o===e.type)return r;r--}if(f<l.length){if((e=l[f])&&i==e.key&&o===e.type)return f;f++}}return-1}function $(n,l,u,t,i){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],t)}function A(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||p.test(l)?u:u+"px"}function H(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||A(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||A(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u))}}function I(n){return this.l[n.type+!1](l.event?l.event(n):n)}function T(n){return this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,t,i,o,r,f,e,c,s){var p,h,y,d,k,b,g,m,P,C,S,$,A,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=t.__h&&(c=t.__h,e=u.__e=t.__e,u.__h=null,r=[e]),(p=l.__b)&&p(u);try{n:if("function"==typeof T){if(m=u.props,P=(p=T.contextType)&&i[p.__c],C=p?P?P.props.value:p.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:("prototype"in T&&T.prototype.render?u.__c=h=new T(m,C):(u.__c=h=new x(m,C),h.constructor=T,h.render=O),P&&P.sub(h),h.props=m,h.state||(h.state={}),h.context=C,h.__n=i,y=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,T.getDerivedStateFromProps(m,h.__s))),d=h.props,k=h.state,h.__v=u,y)null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==T.getDerivedStateFromProps&&m!==d&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,C),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,C)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u)}),S=0;S<h._sb.length;S++)h.__h.push(h._sb[S]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(d,k,b)})}if(h.context=C,h.props=m,h.__P=n,h.__e=!1,$=l.__r,A=0,"prototype"in T&&T.prototype.render){for(h.state=h.__s,h.__d=!1,$&&$(u),p=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,$&&$(u),p=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=a(a({},i),h.getChildContext())),y||null==h.getSnapshotBeforeUpdate||(b=h.getSnapshotBeforeUpdate(d,k)),w(n,v(I=null!=p&&p.type===_&&null==p.key?p.props.children:p)?I:[I],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),g&&(h.__E=h.__=null)}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=L(t.__e,u,t,i,o,r,f,c,s);(p=l.diffed)&&p(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,t)}}function z(n,u,t){for(var i=0;i<t.length;i++)M(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,t,i,o,r,f,e,s){var p,a,y,d=t.props,_=u.props,x=u.type,b=0;if("svg"===x&&(o=!0),null!=r)for(;b<r.length;b++)if((p=r[b])&&"setAttribute"in p==!!x&&(x?p.localName===x:3===p.nodeType)){l=p,r[b]=null;break}if(null==l){if(null===x)return document.createTextNode(_);l=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,_.is&&_),r=null,e=!1}if(null===x)d===_||e&&l.data===_||(l.data=_);else{if(r=r&&n.call(l.childNodes),a=(d=t.props||c).dangerouslySetInnerHTML,y=_.dangerouslySetInnerHTML,!e){if(null!=r)for(d={},b=0;b<l.attributes.length;b++)d[l.attributes[b].name]=l.attributes[b].value;(y||a)&&(y&&(a&&y.__html==a.__html||y.__html===l.innerHTML)||(l.innerHTML=y&&y.__html||""))}if($(l,_,d,o,e),y)u.__k=[];else if(w(l,v(b=u.props.children)?b:[b],u,t,i,o&&"foreignObject"!==x,r,f,r?r[0]:t.__k&&k(t,0),e,s),null!=r)for(b=r.length;b--;)null!=r[b]&&h(r[b]);e||("value"in _&&void 0!==(b=_.value)&&(b!==l.value||"progress"===x&&!b||"option"===x&&b!==d.value)&&H(l,"value",b,d.value,!1),"checked"in _&&void 0!==(b=_.checked)&&b!==l.checked&&H(l,"checked",b,d.checked,!1))}return l}function M(n,u,t){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,t)}}function N(n,u,t){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||M(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null,n.__c=void 0}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&N(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||h(n.__e),n.__=n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function q(u,t,i){var o,r,f,e;l.__&&l.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],j(t,u=(!o&&i||t).__k=y(_,null,[u]),r||c,c,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),z(f,u,e)}n=s.slice,l={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&void 0===n.constructor},x.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),g(this))},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},x.prototype.render=_,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},m.__r=0,e=0,exports.Component=x,exports.Fragment=_,exports.cloneElement=function(l,u,t){var i,o,r,f,e=a({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),d(l.type,e,i||l.key,o||l.ref,null)},exports.createContext=function(n,l){var u={__c:l="__cC"+e++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,g(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u},exports.createElement=y,exports.createRef=function(){return{current:null}},exports.h=y,exports.hydrate=function n(l,u){q(l,u,n)},exports.isValidElement=t,exports.options=l,exports.render=q,exports.toChildArray=function n(l,u){return u=u||[],null==l||"boolean"==typeof l||(v(l)?l.some(function(l){n(l,u)}):u.push(l)),u};
//# sourceMappingURL=preact.js.map


/***/ }),

/***/ 3920:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var n,t,r,u,o=__webpack_require__(9052),i=0,f=[],c=[],e=o.options.__b,a=o.options.__r,v=o.options.diffed,s=o.options.__c,l=o.options.unmount;function p(n,r){o.options.__h&&o.options.__h(t,n,i||r),i=0;var u=t.__H||(t.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c}),u.__[n]}function x(n){return i=1,d(P,n)}function d(r,u,o){var i=p(n++,2);if(i.t=r,!i.__c&&(i.__=[o?o(u):P(void 0,u),function(n){var t=i.__N?i.__N[0]:i.__[0],r=i.t(t,n);t!==r&&(i.__N=[r,i.__[1]],i.__c.setState({}))}],i.__c=t,!t.u)){var f=function(n,t,r){if(!i.__c.__H)return!0;var u=i.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var o=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(o=!0)}}),!(!o&&i.__c.props===n)&&(!c||c.call(this,n,t,r))};t.u=!0;var c=t.shouldComponentUpdate,e=t.componentWillUpdate;t.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},t.shouldComponentUpdate=f}return i.__N||i.__}function m(r,u){var i=p(n++,4);!o.options.__s&&T(i.__H,u)&&(i.__=r,i.o=u,t.__h.push(i))}function h(t,r){var u=p(n++,7);return T(u.__H,r)?(u.__V=t(),u.o=r,u.__h=t,u.__V):u.__}function y(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(A),n.__H.__h.forEach(F),n.__H.__h=[]}catch(t){n.__H.__h=[],o.options.__e(t,n.__v)}}o.options.__b=function(n){t=null,e&&e(n)},o.options.__r=function(u){a&&a(u),n=0;var o=(t=u.__c).__H;o&&(r===t?(o.__h=[],t.__h=[],o.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.o=void 0})):(o.__h.forEach(A),o.__h.forEach(F),o.__h=[],n=0)),r=t},o.options.diffed=function(n){v&&v(n);var i=n.__c;i&&i.__H&&(i.__H.__h.length&&(1!==f.push(i)&&u===o.options.requestAnimationFrame||((u=o.options.requestAnimationFrame)||q)(y)),i.__H.__.forEach(function(n){n.o&&(n.__H=n.o),n.__V!==c&&(n.__=n.__V),n.o=void 0,n.__V=c})),r=t=null},o.options.__c=function(n,t){t.some(function(n){try{n.__h.forEach(A),n.__h=n.__h.filter(function(n){return!n.__||F(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],o.options.__e(r,n.__v)}}),s&&s(n,t)},o.options.unmount=function(n){l&&l(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{A(n)}catch(n){t=n}}),r.__H=void 0,t&&o.options.__e(t,r.__v))};var _="function"==typeof requestAnimationFrame;function q(n){var t,r=function(){clearTimeout(u),_&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);_&&(t=requestAnimationFrame(r))}function A(n){var r=t,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),t=r}function F(n){var r=t;n.__c=n.__(),t=r}function T(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function P(n,t){return"function"==typeof t?t(n):t}exports.useCallback=function(n,t){return i=8,h(function(){return n},t)},exports.useContext=function(r){var u=t.context[r.__c],o=p(n++,9);return o.c=r,u?(null==o.__&&(o.__=!0,u.sub(t)),u.props.value):r.__},exports.useDebugValue=function(n,t){o.options.useDebugValue&&o.options.useDebugValue(t?t(n):n)},exports.useEffect=function(r,u){var i=p(n++,3);!o.options.__s&&T(i.__H,u)&&(i.__=r,i.o=u,t.__H.__h.push(i))},exports.useErrorBoundary=function(r){var u=p(n++,10),o=x();return u.__=r,t.componentDidCatch||(t.componentDidCatch=function(n,t){u.__&&u.__(n,t),o[1](n)}),[o[0],function(){o[1](void 0)}]},exports.useId=function(){var r=p(n++,11);if(!r.__){for(var u=t.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var o=u.__m||(u.__m=[0,0]);r.__="P"+o[0]+"-"+o[1]++}return r.__},exports.useImperativeHandle=function(n,t,r){i=6,m(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))},exports.useLayoutEffect=m,exports.useMemo=h,exports.useReducer=d,exports.useRef=function(n){return i=5,h(function(){return{current:n}},[])},exports.useState=x;
//# sourceMappingURL=hooks.js.map


/***/ }),

/***/ 6787:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var r=__webpack_require__(9052),e=0;function _(_,n,o,t,u,l){var f,i,c={};for(i in n)"ref"==i?f=n[i]:c[i]=n[i];var p={type:_,props:c,key:o,ref:f,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--e,__source:u,__self:l};if("function"==typeof _&&(f=_.defaultProps))for(i in f)void 0===c[i]&&(c[i]=f[i]);return r.options.vnode&&r.options.vnode(p),p}Object.defineProperty(exports, "Fragment", ({enumerable:!0,get:function(){return r.Fragment}})),exports.jsx=_,exports.jsxDEV=_,exports.jsxs=_;
//# sourceMappingURL=jsxRuntime.js.map


/***/ }),

/***/ 1579:
/***/ ((module) => {

module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_210__) {

// ESM COMPAT FLAG
__nested_webpack_require_210__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_210__.d(__nested_webpack_exports__, {
  "ProgressSmoother": function() { return /* reexport */ ProgressSmoother; }
});

;// CONCATENATED MODULE: ./src/ProgressSmoother.ts
function ProgressSmoother(config) {
  var _a, _b;

  var minFinishDuration = 1000; // If set to 0, the download with abruptly move to 100% on the final chunk. This way it smooths over 1000ms.

  var maxForecastFactor = 0.33; // How much to estimate without receiving a single chunk.

  var minSetupTime = (_a = config.minDelayUntilFirstValue) !== null && _a !== void 0 ? _a : 0;
  var minTeardownTime = (_b = config.teardownTime) !== null && _b !== void 0 ? _b : 0;
  var valueIncreaseRatePerSecond = config.valueIncreaseRatePerSecond,
      averageTimeBetweenValues = config.averageTimeBetweenValues,
      maxValue = config.maxValue,
      valueIncreaseDelta = config.valueIncreaseDelta;

  var _lastReading;

  var lastTimeMinus1 = Date.now();
  var lastYieldedValue = 0;
  var movingAverage = 0;

  function returnMonotonic(getValue) {
    var value = getValue();

    if (value > lastYieldedValue) {
      lastYieldedValue = value;
    }

    return lastYieldedValue;
  }

  function hasFinished(lastReading) {
    return lastReading.value === maxValue;
  }

  function fromLastReading(lastReading, now) {
    if (hasFinished(lastReading)) {
      var teardownTime = Math.max(minFinishDuration, minTeardownTime);
      var millisElapsed = now - lastReading.time;
      var percentageIntoTeardown = millisElapsed / teardownTime;
      var percentageIntoTeardownCapped = Math.min(1, percentageIntoTeardown);
      var percentageIntoTeardownEased = easeInQuad(percentageIntoTeardownCapped);
      var delta = lastReading.value - movingAverage;
      return movingAverage + delta * percentageIntoTeardownEased;
    }

    return calculateEMA(lastReading.value, now, lastTimeMinus1);
  }

  function forecastInitialValue(now) {
    var maxForecastSize = Math.min(valueIncreaseDelta, maxValue * maxForecastFactor);
    var maxForecastTransferTime = maxForecastSize / valueIncreaseRatePerSecond * 1000;
    var maxTwiddleTime = minSetupTime + maxForecastTransferTime;
    var millisElapsed = now - lastTimeMinus1;
    var percentageIntoTwiddleTime = millisElapsed / maxTwiddleTime;
    var percentageIntoTwiddleTimeCapped = Math.min(1, percentageIntoTwiddleTime);
    return percentageIntoTwiddleTimeCapped * maxForecastSize;
  }

  function alpha(now, lastTime) {
    var alphaMagicNumber = 3.5; // This just seems to work best, from playing around.

    return 1 - Math.exp(-(now - lastTime) / (averageTimeBetweenValues * alphaMagicNumber));
  }

  function calculateEMA(value, now, lastTime) {
    var a = alpha(now, lastTime);
    return a * value + (1 - a) * movingAverage;
  }

  function easeInQuad(x) {
    return x * x;
  }

  function setValue(value, nowMaybe) {
    if (_lastReading !== undefined) {
      if (hasFinished(_lastReading)) {
        return;
      }

      movingAverage = calculateEMA(_lastReading.value, _lastReading.time, lastTimeMinus1);
      lastTimeMinus1 = _lastReading.time;
    }

    _lastReading = {
      time: nowMaybe !== null && nowMaybe !== void 0 ? nowMaybe : Date.now(),
      value: Math.min(value, maxValue)
    };
  }

  function smoothedValue(nowMaybe) {
    return returnMonotonic(function () {
      var now = nowMaybe !== null && nowMaybe !== void 0 ? nowMaybe : Date.now();

      if (_lastReading !== undefined) {
        return fromLastReading(_lastReading, now);
      }

      return forecastInitialValue(now);
    });
  }

  function smoothedFactor(nowMaybe) {
    return smoothedValue(nowMaybe) / maxValue;
  }

  return {
    setValue: setValue,
    smoothedValue: smoothedValue,
    smoothedFactor: smoothedFactor
  };
}
;// CONCATENATED MODULE: ./src/index.ts


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_4336__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_4336__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_4336__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_4336__.o(definition, key) && !__nested_webpack_require_4336__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_4336__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_4336__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_4336__("./src/index.ts");
/******/ })()
;

/***/ }),

/***/ 6291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __nested_webpack_require_112__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_112__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_112__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_112__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_112__.o(definition, key) && !__nested_webpack_require_112__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_112__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_112__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// ESM COMPAT FLAG
__nested_webpack_require_112__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_112__.d(__nested_webpack_exports__, {
  "UploadButton": function() { return /* reexport */ UploadButton; },
  "UploadDropzone": function() { return /* reexport */ UploadDropzone; }
});

;// CONCATENATED MODULE: external "react"
var external_react_namespaceObject = __webpack_require__(8038);;
var external_react_default = /*#__PURE__*/__nested_webpack_require_112__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "lodash.isequal"
var external_lodash_isequal_namespaceObject = __webpack_require__(2980);;
var external_lodash_isequal_default = /*#__PURE__*/__nested_webpack_require_112__.n(external_lodash_isequal_namespaceObject);
;// CONCATENATED MODULE: ./src/hooks/UseObjectDep.ts


function useObjectDep(value) {
  var _a;

  var ref = (0,external_react_namespaceObject.useRef)();

  if (!external_lodash_isequal_default()(value, ref.current)) {
    ref.current = value;
  }

  return (_a = ref.current) !== null && _a !== void 0 ? _a : value;
}
;// CONCATENATED MODULE: ./src/hooks/UseAutoUpdatingOptions.ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useAutoUpdatingOptions(optionsMaybe) {
  var _useState = (0,external_react_namespaceObject.useState)(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      methods = _useState2[0],
      setMethods = _useState2[1];

  var optionsDep = useObjectDep(optionsMaybe !== null && optionsMaybe !== void 0 ? optionsMaybe : {});
  (0,external_react_namespaceObject.useEffect)(function () {
    if (methods !== undefined) {
      methods.updateConfig(optionsMaybe !== null && optionsMaybe !== void 0 ? optionsMaybe : {});
    }
  }, [optionsDep, methods]);
  return Object.assign(Object.assign({}, optionsMaybe), {
    onInit: function onInit(m) {
      if ((optionsMaybe === null || optionsMaybe === void 0 ? void 0 : optionsMaybe.onInit) !== undefined) {
        optionsMaybe.onInit(m);
      }

      setMethods(m);
    }
  });
}
;// CONCATENATED MODULE: ./src/UploadButton.tsx

var UploadButton = function UploadButton(_ref) {
  var uploader = _ref.uploader,
      options = _ref.options,
      onComplete = _ref.onComplete,
      children = _ref.children;
  var autoUpdatingOptions = useAutoUpdatingOptions(options);

  var onClick = function onClick(e) {
    e.preventDefault();
    uploader.open(autoUpdatingOptions).then(function (files) {
      if (onComplete !== undefined) {
        onComplete(files);
      }
    }, function (error) {
      return console.error("Uploader error.", error);
    });
  };

  return children({
    onClick: onClick
  });
};
;// CONCATENATED MODULE: ./src/hooks/UseElementRef.ts
function UseElementRef_slicedToArray(arr, i) { return UseElementRef_arrayWithHoles(arr) || UseElementRef_iterableToArrayLimit(arr, i) || UseElementRef_unsupportedIterableToArray(arr, i) || UseElementRef_nonIterableRest(); }

function UseElementRef_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UseElementRef_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UseElementRef_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UseElementRef_arrayLikeToArray(o, minLen); }

function UseElementRef_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UseElementRef_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UseElementRef_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/**
 * Unlike 'useRef', 'useElementRef' will trigger a rerender when the reference is updated.
 */

function useElementRef() {
  var _useState = (0,external_react_namespaceObject.useState)(undefined),
      _useState2 = UseElementRef_slicedToArray(_useState, 2),
      element = _useState2[0],
      setElement = _useState2[1];

  var elementRef = (0,external_react_namespaceObject.useCallback)(function (e) {
    setElement(e !== null && e !== void 0 ? e : undefined);
  }, []);
  return [element, elementRef];
}
;// CONCATENATED MODULE: ./src/UploadDropzone.tsx
function UploadDropzone_slicedToArray(arr, i) { return UploadDropzone_arrayWithHoles(arr) || UploadDropzone_iterableToArrayLimit(arr, i) || UploadDropzone_unsupportedIterableToArray(arr, i) || UploadDropzone_nonIterableRest(); }

function UploadDropzone_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UploadDropzone_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UploadDropzone_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UploadDropzone_arrayLikeToArray(o, minLen); }

function UploadDropzone_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UploadDropzone_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UploadDropzone_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var UploadDropzone = function UploadDropzone(_ref) {
  var uploader = _ref.uploader,
      options = _ref.options,
      onComplete = _ref.onComplete,
      onUpdate = _ref.onUpdate,
      minWidth = _ref.minWidth,
      width = _ref.width,
      height = _ref.height,
      className = _ref.className;

  var _useElementRef = useElementRef(),
      _useElementRef2 = UploadDropzone_slicedToArray(_useElementRef, 2),
      element = _useElementRef2[0],
      elementRef = _useElementRef2[1];

  var classNameProp = className === undefined ? {} : {
    className: className
  };
  var onUpdateParams = onUpdate === undefined ? {} : {
    onUpdate: onUpdate
  };
  var autoUpdatingOptions = useAutoUpdatingOptions(Object.assign(Object.assign(Object.assign({}, options), onUpdateParams), {
    layout: "inline",
    container: element
  })); // Prevent React warning, while keeping rendering synchronous in the browser.

  if (typeof window !== "undefined") {
    (0,external_react_namespaceObject.useLayoutEffect)(function () {
      if (element !== undefined) {
        uploader.open(autoUpdatingOptions).then(function (files) {
          if (onComplete !== undefined) {
            onComplete(files);
          }
        }, function (error) {
          return console.error("Uploader error.", error);
        });
      }
    }, [element]);
  }

  return /*#__PURE__*/external_react_default().createElement("div", Object.assign({}, classNameProp, {
    ref: elementRef,
    style: {
      position: "relative",
      width: "100%",
      minWidth: minWidth !== null && minWidth !== void 0 ? minWidth : "280px",
      maxWidth: width !== null && width !== void 0 ? width : "600px",
      height: height !== null && height !== void 0 ? height : "375px"
    }
  }));
};
;// CONCATENATED MODULE: ./src/index.ts


module.exports = __nested_webpack_exports__;
/******/ })()
;

/***/ }),

/***/ 4810:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_210__) {

// ESM COMPAT FLAG
__nested_webpack_require_210__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_210__.d(__nested_webpack_exports__, {
  "Upload": function() { return /* reexport */ Upload; },
  "UploadApiError": function() { return /* reexport */ UploadApiError; }
});

;// CONCATENATED MODULE: external "@upload-io/upload-api-client-upload-js"
var upload_api_client_upload_js_namespaceObject = __webpack_require__(70);;
;// CONCATENATED MODULE: ./src/Mutex.ts
/**
 * A lightweight mutex. (Other libraries contain too many features and we want to keep the size upload-js down).
 *
 * Characteristics:
 * - Non-reentrant.
 * - Unfair. (Multiple callers awaiting 'acquire' will be granted the mutex in no order.)
 *   - When calling `safe` consecutively with no 'awaits' in-between, the current context will synchronously acquire
 *     the mutex every time.
 */
function _call(body, then, direct) {
  if (direct) {
    return then ? then(body()) : body();
  }

  try {
    var result = Promise.resolve(body());
    return then ? result.then(then) : result;
  } catch (e) {
    return Promise.reject(e);
  }
}

function _rethrow(thrown, value) {
  if (thrown) throw value;
  return value;
}

function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }

  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }

  return finalizer(false, result);
}

function _empty() {}

function _awaitIgnored(value, direct) {
  if (!direct) {
    return value && value.then ? value.then(_empty) : Promise.resolve();
  }
}

function _settle(pact, state, value) {
  if (!pact.s) {
    if (value instanceof _Pact) {
      if (value.s) {
        if (state & 1) {
          state = value.s;
        }

        value = value.v;
      } else {
        value.o = _settle.bind(null, pact, state);
        return;
      }
    }

    if (value && value.then) {
      value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
      return;
    }

    pact.s = state;
    pact.v = value;
    var observer = pact.o;

    if (observer) {
      observer(pact);
    }
  }
}

var _Pact = /*#__PURE__*/function () {
  function _Pact() {}

  _Pact.prototype.then = function (onFulfilled, onRejected) {
    var result = new _Pact();
    var state = this.s;

    if (state) {
      var callback = state & 1 ? onFulfilled : onRejected;

      if (callback) {
        try {
          _settle(result, 1, callback(this.v));
        } catch (e) {
          _settle(result, 2, e);
        }

        return result;
      } else {
        return this;
      }
    }

    this.o = function (_this) {
      try {
        var value = _this.v;

        if (_this.s & 1) {
          _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
        } else if (onRejected) {
          _settle(result, 1, onRejected(value));
        } else {
          _settle(result, 2, value);
        }
      } catch (e) {
        _settle(result, 2, e);
      }
    };

    return result;
  };

  return _Pact;
}();

function _isSettledPact(thenable) {
  return thenable instanceof _Pact && thenable.s & 1;
}

function _for(test, update, body) {
  var stage;

  for (;;) {
    var shouldContinue = test();

    if (_isSettledPact(shouldContinue)) {
      shouldContinue = shouldContinue.v;
    }

    if (!shouldContinue) {
      return result;
    }

    if (shouldContinue.then) {
      stage = 0;
      break;
    }

    var result = body();

    if (result && result.then) {
      if (_isSettledPact(result)) {
        result = result.s;
      } else {
        stage = 1;
        break;
      }
    }

    if (update) {
      var updateValue = update();

      if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
        stage = 2;
        break;
      }
    }
  }

  var pact = new _Pact();

  var reject = _settle.bind(null, pact, 2);

  (stage === 0 ? shouldContinue.then(_resumeAfterTest) : stage === 1 ? result.then(_resumeAfterBody) : updateValue.then(_resumeAfterUpdate)).then(void 0, reject);
  return pact;

  function _resumeAfterBody(value) {
    result = value;

    do {
      if (update) {
        updateValue = update();

        if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
          updateValue.then(_resumeAfterUpdate).then(void 0, reject);
          return;
        }
      }

      shouldContinue = test();

      if (!shouldContinue || _isSettledPact(shouldContinue) && !shouldContinue.v) {
        _settle(pact, 1, result);

        return;
      }

      if (shouldContinue.then) {
        shouldContinue.then(_resumeAfterTest).then(void 0, reject);
        return;
      }

      result = body();

      if (_isSettledPact(result)) {
        result = result.v;
      }
    } while (!result || !result.then);

    result.then(_resumeAfterBody).then(void 0, reject);
  }

  function _resumeAfterTest(shouldContinue) {
    if (shouldContinue) {
      result = body();

      if (result && result.then) {
        result.then(_resumeAfterBody).then(void 0, reject);
      } else {
        _resumeAfterBody(result);
      }
    } else {
      _settle(pact, 1, result);
    }
  }

  function _resumeAfterUpdate() {
    if (shouldContinue = test()) {
      if (shouldContinue.then) {
        shouldContinue.then(_resumeAfterTest).then(void 0, reject);
      } else {
        _resumeAfterTest(shouldContinue);
      }
    } else {
      _settle(pact, 1, result);
    }
  }
}

function _continue(value, then) {
  return value && value.then ? value.then(then) : then(value);
}

function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

function Mutex() {
  var mutex;
  var resolver;

  var safe = function safe(callback) {
    return _call(acquire, function () {
      return _finallyRethrows(callback, function (_wasThrown, _result) {
        release();
        return _rethrow(_wasThrown, _result);
      });
    });
  };

  var acquire = _async(function () {
    // Loop necessary for when multiple calls are made to 'acquire' before a 'release' is called, else the call to
    // 'release' will resume every caller currently waiting on 'acquire'.
    // eslint-disable-next-line no-unmodified-loop-condition
    return _continue(_for(function () {
      return mutex !== undefined;
    }, void 0, function () {
      return _awaitIgnored(mutex);
    }), function () {
      mutex = new Promise(function (resolve) {
        resolver = resolve;
      });
    });
  });

  var release = function release() {
    if (resolver === undefined) {
      throw new Error("Unable to release mutex: already released.");
    }

    resolver();
    resolver = undefined;
    mutex = undefined;
  };

  return {
    safe: safe
  };
}
;// CONCATENATED MODULE: external "progress-smoother"
var external_progress_smoother_namespaceObject = __webpack_require__(1579);;
;// CONCATENATED MODULE: ./src/UploadApiError.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var UploadApiError = /*#__PURE__*/function (_Error) {
  _inherits(UploadApiError, _Error);

  var _super = _createSuper(UploadApiError);

  function UploadApiError(response) {
    var _this;

    _classCallCheck(this, UploadApiError);

    _this = _super.call(this, response.error.message);
    _this.errorCode = response.error.code;
    _this.details = response.error.details;
    return _this;
  }

  return _createClass(UploadApiError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
;// CONCATENATED MODULE: ./src/Upload.ts
function Upload_rethrow(thrown, value) {
  if (thrown) throw value;
  return value;
}

function Upload_finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }

  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }

  return finalizer(false, result);
}

function _continueIgnored(value) {
  if (value && value.then) {
    return value.then(Upload_empty);
  }
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






function Upload_empty() {}

var accountIdLength = 7; // Sync with: upload/shared/**/AccountIdUtils

function Upload_awaitIgnored(value, direct) {
  if (!direct) {
    return value && value.then ? value.then(Upload_empty) : Promise.resolve();
  }
}

var specialApiKeyAccountId = "W142hJk";

function Upload_async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

var specialApiKeys = ["free", "demo"];

function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

var apiKeyPrefix = "public_";

function Upload_call(body, then, direct) {
  if (direct) {
    return then ? then(body()) : body();
  }

  try {
    var result = Promise.resolve(body());
    return then ? result.then(then) : result;
  } catch (e) {
    return Promise.reject(e);
  }
}

var maxUploadConcurrency = 5;

function _callIgnored(body, direct) {
  return Upload_call(body, Upload_empty, direct);
}

var refreshBeforeExpirySeconds = 20;

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
}

var onProgressInterval = 100;

function _invokeIgnored(body) {
  var result = body();

  if (result && result.then) {
    return result.then(Upload_empty);
  }
}

var retryAuthAfterErrorSeconds = 5;
var minJwtTtlSeconds = 10;
var accessTokenPathBase = "/api/v1/access_tokens/";
var logPrefix = "[upload-js] ";
/**
 * You should instantiate one instance of this class in your web app.
 *
 * Try using:
 *
 *    Upload({apiKey: "free"})
 *
 * If multiple instances exist, then all '*AuthSession' calls will be forwarded to the first instance that had an
 * '*AuthSession' call invoked on it.
 */

function Upload(config) {
  // ----------------
  // READONLY MEMBERS
  // ----------------
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;

  var accountId;
  var authMutex = Mutex();
  var apiUrl = (_b = (_a = config.internal) === null || _a === void 0 ? void 0 : _a.apiUrl) !== null && _b !== void 0 ? _b : "https://api.upload.io";
  var cdnUrl = (_d = (_c = config.internal) === null || _c === void 0 ? void 0 : _c.cdnUrl) !== null && _d !== void 0 ? _d : "https://upcdn.io";
  var authenticateWithApiKey = (_f = (_e = config.internal) === null || _e === void 0 ? void 0 : _e.authenticateWithApiKey) !== null && _f !== void 0 ? _f : true;
  var headers = (_g = config.internal) === null || _g === void 0 ? void 0 : _g.headers;
  var debugMode = config.debug === true;
  var wasCalled = " was called."; // ------------------
  // READ/WRITE MEMBERS
  // ------------------

  var lastAuthSession; // ----------------
  // CONSTRUCTOR
  // ----------------

  if ((config !== null && config !== void 0 ? config : undefined) === undefined) {
    throw new Error("".concat(logPrefix, "Config parameter required."));
  }

  if (config.debug === true) {
    console.log("".concat(logPrefix, "Initialized with API key '").concat(config.apiKey, "'"));
  }

  if (((_h = config.apiKey) !== null && _h !== void 0 ? _h : undefined) === undefined) {
    throw new Error("".concat(logPrefix, "Please provide an API key via the 'apiKey' config parameter."));
  }

  if (config.apiKey.trim() !== config.apiKey) {
    // We do not support API keys with whitespace (by trimming ourselves) because otherwise we'd need to support this
    // everywhere in perpetuity (since removing the trimming would be a breaking change).
    throw new Error("".concat(logPrefix, "API key needs trimming (whitespace detected)."));
  } // Non-api-key authentication is required by Upload Dashboard, which uses bearer tokens instead of API keys because
  // the user may not have any active API keys, but might still want to upload files via the Upload Dashboard.


  if (((_j = config.internal) === null || _j === void 0 ? void 0 : _j.authenticateWithApiKey) === false) {
    accountId = config.internal.accountId;
  } else {
    if (specialApiKeys.includes(config.apiKey)) {
      accountId = specialApiKeyAccountId;
    } else {
      if (!config.apiKey.startsWith(apiKeyPrefix)) {
        throw new Error("".concat(logPrefix, "API key must begin with \"").concat(apiKeyPrefix, "\"."));
      }

      accountId = config.apiKey.substr(apiKeyPrefix.length, accountIdLength);

      if (accountId.length !== accountIdLength) {
        throw new Error("".concat(logPrefix, "API key is too short!"));
      }
    }
  }

  var accessTokenUrl = "".concat(cdnUrl).concat(accessTokenPathBase).concat(accountId); // ----------------
  // PUBLIC METHODS
  // ----------------

  var beginAuthSession = Upload_async(function (authUrl, authHeaders) {
    return Upload_awaitIgnored(callAuthMethod(Upload_async(function (x) {
      return x.beginAuthSession(authUrl, authHeaders);
    }), Upload_async(function () {
      debug("'beginAuthSession'".concat(wasCalled)); // Explanation:
      // - Prevents restarting the auth session on accidental double-calls to 'beginAuthSession': in some users' code,
      //   this happens accidentally every second, so we want to bail-out if we detect this is occurring.
      // - We only check 'authUrl' to determine if the 'same call' is being made, since 'authHeaders' is a function
      //   and therefore its body can be switched-out by the user's code if they desire a change to its behaviour, so
      //   don't need to call 'beginAuthSession' just to update it.

      if ((lastAuthSession === null || lastAuthSession === void 0 ? void 0 : lastAuthSession.authUrl) === authUrl) {
        error("'beginAuthSession' already called. Ignoring this call. Hint: call 'endAuthSession' and then 'beginAuthSession' if you want to restart the auth session.");
        return;
      }

      return Upload_call(doEndAuthSession, function () {
        var authSession = {
          accessToken: undefined,
          accessTokenRefreshHandle: undefined,
          isActive: true,
          authUrl: authUrl
        }; // Does not need to be inside the mutex since the environment is single-threaded, and we have not async-yielded
        // since the mutex from 'endAuthSession' was relinquished (meaning we still have execution,
        // so we know a) nothing can interject and b) nothing has interjected since the lock was relinquished).

        lastAuthSession = authSession;
        return Upload_awaitIgnored(refreshAccessToken(authUrl, authHeaders, authSession));
      });
    })));
  });

  var endAuthSession = Upload_async(function () {
    return Upload_awaitIgnored(callAuthMethod(Upload_async(function (x) {
      return x.endAuthSession();
    }), Upload_async(function () {
      debug("'endAuthSession'".concat(wasCalled));
      return _callIgnored(doEndAuthSession);
    })));
  });

  var uploadFile = Upload_async(function (file) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    debug("'uploadFile'".concat(wasCalled)); // Initial progress (raised immediately and synchronously).

    var cancellationHandlers = [];

    var addCancellationHandler = function addCancellationHandler(ca) {
      cancellationHandlers.push(ca);
    };

    var cancel = function cancel() {
      return cancellationHandlers.forEach(function (x) {
        return x();
      });
    };

    if (params.onBegin !== undefined) {
      params.onBegin({
        cancel: cancel
      });
    }

    return _catch(function () {
      return _await(beginFileUpload(file, params, addCancellationHandler));
    }, function (e) {
      cancel();
      throw e;
    });
  });

  var url = function url(filePath, transformationOrParams) {
    var _a;

    var defaultSlug = "raw";
    var params = typeof transformationOrParams === "string" ? {
      transformation: transformationOrParams
    } : transformationOrParams;
    return "".concat(cdnUrl, "/").concat(accountId, "/").concat((_a = params === null || params === void 0 ? void 0 : params.transformation) !== null && _a !== void 0 ? _a : defaultSlug).concat(filePath).concat((params === null || params === void 0 ? void 0 : params.auth) === true ? "?_auth=true" : "");
  };

  var self = {
    beginAuthSession: beginAuthSession,
    endAuthSession: endAuthSession,
    uploadFile: uploadFile,
    url: url
  }; // ----------------
  // PRIVATE METHODS
  // ----------------

  var doEndAuthSession = Upload_async(function () {
    return Upload_awaitIgnored(authMutex.safe(Upload_async(function () {
      if (lastAuthSession === undefined) {
        return;
      }

      var authSession = lastAuthSession;
      lastAuthSession = undefined;

      if (authSession.accessTokenRefreshHandle !== undefined) {
        clearTimeout(authSession.accessTokenRefreshHandle);
      }

      authSession.isActive = false;
      return _callIgnored(deleteAccessToken);
    })));
  });

  var beginFileUpload = Upload_async(function (file, params, addCancellationHandler) {
    var progressSmoother = (0,external_progress_smoother_namespaceObject.ProgressSmoother)({
      maxValue: file.size,
      teardownTime: 1000,
      minDelayUntilFirstValue: 2000,
      valueIncreaseDelta: 200 * 1024,
      valueIncreaseRatePerSecond: 50 * 1024,
      averageTimeBetweenValues: 1000 // When running, XHR should (hopefully) report at least every second, regardless of connection speed.

    });

    var reportProgress = function reportProgress(stopReportingProgress) {
      if (params.onProgress === undefined) {
        stopReportingProgress(); // Important to call this, as outer function awaits this call when the download ends.
      } else {
        var bytesSent = progressSmoother.smoothedValue();
        var bytesTotal = file.size;

        if (bytesSent === bytesTotal) {
          stopReportingProgress();
        }

        params.onProgress({
          bytesSent: bytesSent,
          bytesTotal: bytesTotal,
          progress: Math.round(bytesSent / bytesTotal * 100)
        });
      }
    };

    return withProgressReporting(onProgressInterval, reportProgress, Upload_async(function () {
      var uploadRequest = {
        path: params.path,
        metadata: params.metadata,
        mime: normalizeMimeType(file.type),
        originalFileName: file.name,
        protocol: "1.1",
        size: file.size,
        tags: params.tags
      };
      debug("Initiating file upload. Params = ".concat(JSON.stringify(uploadRequest)));
      return _await((0,upload_api_client_upload_js_namespaceObject.beginMultipartUpload)(getConfig(), accountId, uploadRequest), function (_beginMultipartUpload) {
        var uploadMetadata = handleApiResult(_beginMultipartUpload);
        debug("Initiated file upload. Metadata = ".concat(JSON.stringify(uploadMetadata)));

        var incUploadIndex = function () {
          var lastUploadIndex = 0;
          return function () {
            if (lastUploadIndex === uploadMetadata.uploadParts.count - 1) {
              return undefined;
            }

            return ++lastUploadIndex;
          };
        }();

        var nextPartQueue = [uploadMetadata.uploadParts.first];

        var getNextPart = Upload_async(function (workerIndex) {
          var nextPart = nextPartQueue.pop();

          if (nextPart !== undefined) {
            debug("Dequeued part ".concat(nextPart.uploadPartIndex, "."), workerIndex);
            return nextPart;
          }

          var uploadPartIndex = incUploadIndex();

          if (uploadPartIndex === undefined) {
            debug("No parts remaining.", workerIndex);
            return undefined;
          }

          debug("Fetching metadata for part ".concat(uploadPartIndex, "."), workerIndex);
          return _await((0,upload_api_client_upload_js_namespaceObject.getUploadPart)(getConfig(), accountId, uploadMetadata.uploadId, uploadPartIndex), handleApiResult);
        });

        var bytesSentByEachWorker = [];

        var uploadNextPart = function uploadNextPart(workerIndex) {
          return _await(getNextPart(workerIndex), function (nextPart) {
            return _invokeIgnored(function () {
              if (nextPart !== undefined) {
                var lastBytesSent = 0;

                var progress = function progress(_ref) {
                  var bytesSent = _ref.bytesSent;

                  if (bytesSentByEachWorker[workerIndex] === undefined) {
                    bytesSentByEachWorker[workerIndex] = bytesSent;
                  } else {
                    bytesSentByEachWorker[workerIndex] -= lastBytesSent;
                    bytesSentByEachWorker[workerIndex] += bytesSent;
                  }

                  lastBytesSent = bytesSent;
                  var totalBytesSent = bytesSentByEachWorker.reduce(function (a, b) {
                    return a + b;
                  });
                  progressSmoother.setValue(totalBytesSent);
                };

                return _await(uploadPart(file, nextPart, progress, addCancellationHandler, workerIndex), function () {
                  return Upload_awaitIgnored(uploadNextPart(workerIndex));
                });
              }
            });
          });
        };

        return _await(Promise.all(_toConsumableArray(Array(maxUploadConcurrency).keys()).map(function (workerIndex) {
          return _await(uploadNextPart(workerIndex));
        })), function () {
          var uploadedFile = Object.assign({
            accountId: accountId,
            file: file
          }, uploadMetadata.file);
          debug("File upload completed.");
          return uploadedFile;
        });
      });
    }));
  });

  var putUploadPart = Upload_async(function (url, content, progress, addCancellationHandler) {
    var xhr = new XMLHttpRequest();
    var pending = true;
    addCancellationHandler(function () {
      if (pending) {
        xhr.abort();
      }
    });
    return Upload_finallyRethrows(function () {
      return _await(new Promise(function (resolve, reject) {
        xhr.upload.addEventListener("progress", function (evt) {
          if (evt.lengthComputable) {
            progress({
              bytesSent: evt.loaded,
              bytesTotal: evt.total
            });
          }
        }, false);
        xhr.addEventListener("load", function () {
          // Ensure we always report the progress of a finished upload as 100%.
          progress({
            bytesSent: content.size,
            bytesTotal: content.size
          });

          if (Math.floor(xhr.status / 100) === 2) {
            var etag = xhr.getResponseHeader("etag");

            if (etag === null || etag === undefined) {
              reject(new Error("File upload error: no etag header in upload response."));
            } else {
              resolve({
                etag: etag
              });
            }
          } else {
            reject(new Error("File upload error: status code ".concat(xhr.status)));
          }
        });

        xhr.onabort = function () {
          return reject(new Error("File upload cancelled."));
        };

        xhr.onerror = function () {
          return reject(new Error("File upload error."));
        };

        xhr.ontimeout = function () {
          return reject(new Error("File upload timeout."));
        };

        xhr.open("PUT", url);
        xhr.send(content);
      }));
    }, function (_wasThrown, _result) {
      pending = false;
      return Upload_rethrow(_wasThrown, _result);
    });
  });

  var uploadPart = Upload_async(function (file, part, progress, addCancellationHandler, workerIndex) {
    var content = part.range.inclusiveEnd === -1 ? new Blob() : file.slice(part.range.inclusiveStart, part.range.inclusiveEnd + 1);
    debug("Uploading part ".concat(part.uploadPartIndex, "."), workerIndex);
    return _await(putUploadPart(part.uploadUrl, content, progress, addCancellationHandler), function (_ref2) {
      var etag = _ref2.etag;
      return _await((0,upload_api_client_upload_js_namespaceObject.completeUploadPart)(getConfig(), accountId, part.uploadId, part.uploadPartIndex, {
        etag: etag
      }), function (_completeUploadPart) {
        handleApiResult(_completeUploadPart);
        debug("Uploaded part ".concat(part.uploadPartIndex, "."), workerIndex);
      });
    });
  });

  var withProgressReporting = Upload_async(function (tickInterval, tick, scope) {
    var whileReportingResolved;
    var whileReporting = new Promise(function (resolve) {
      whileReportingResolved = resolve;
    });
    var isReporting = true;

    var stopReporting = function stopReporting() {
      if (isReporting) {
        whileReportingResolved();
        clearInterval(intervalHandle);
        isReporting = false;
      }
    };

    var intervalHandle = setInterval(function () {
      return tick(stopReporting);
    }, tickInterval);
    return Upload_finallyRethrows(function () {
      return Upload_call(scope, function (result) {
        return _await(whileReporting, function () {
          return result;
        });
      });
    }, function (_wasThrown2, _result2) {
      stopReporting();
      return Upload_rethrow(_wasThrown2, _result2);
    });
  });

  var deleteAccessToken = Upload_async(function () {
    return Upload_awaitIgnored(deleteNoResponse(accessTokenUrl, {}, true // Required, else CDN response's `Set-Cookie` header will be silently ignored.
    ));
  });
  /**
   * Calls the given auth method on the canonical auth instance.
   */


  var callAuthMethod = Upload_async(function (other, me) {
    var authInstance = getAuthInstance();
    return _invokeIgnored(function () {
      if (authInstance !== self) {
        // Forward call to global auth instance.
        return Upload_awaitIgnored(other(authInstance));
      } else {
        return _callIgnored(me);
      }
    });
  });
  /**
   * Returns a single global instance of Upload.js for all auth calls.
   * If we require multiple instances in the future, we can provide a parameter to disable this behaviour.
   */


  var getAuthInstance = function getAuthInstance() {
    var globalKey = "uploadJsAuthInstance";
    var globalAuthInstance = window[globalKey];

    if (globalAuthInstance === undefined) {
      globalAuthInstance = self;
      window[globalKey] = self;
    }

    return globalAuthInstance;
  };

  var refreshAccessToken = Upload_async(function (authUrl, authHeaders, authSession) {
    return _continueIgnored(_catch(function () {
      return Upload_awaitIgnored(authMutex.safe(Upload_async(function () {
        // Session may have been ended while timer was waiting.
        if (!authSession.isActive) {
          return;
        }

        return Upload_call(authHeaders, function (_authHeaders) {
          return _await(getAccessToken(authUrl, _authHeaders), function (token) {
            return _await(putJsonGetJson(accessTokenUrl, {}, {
              accessToken: token
            }, true // Required, else CDN response's `Set-Cookie` header will be silently ignored.
            ), function (setTokenResult) {
              var desiredTtlSeconds = setTokenResult.ttlSeconds - refreshBeforeExpirySeconds;

              if (desiredTtlSeconds < minJwtTtlSeconds) {
                warn("JWT expiration is too short: waiting for ".concat(minJwtTtlSeconds, " seconds before refreshing."));
              }

              authSession.accessToken = setTokenResult.accessToken;
              authSession.accessTokenRefreshHandle = window.setTimeout(function () {
                refreshAccessToken(authUrl, authHeaders, authSession).then(function () {}, function (e) {
                  return error("Permanent error when refreshing access token: ".concat(e));
                });
              }, Math.max(minJwtTtlSeconds, desiredTtlSeconds) * 1000);
            });
          });
        });
      })));
    }, function (e) {
      // Use 'error' instead of 'debug' so that the user sees error messages.
      error("Error when refreshing access token: ".concat(e)); // Perform attempts as part of same promise, rather than via a 'setTimeout' so that the 'beginAuthSession' only
      // returns once an auth session has been successfully established.

      return _await(new Promise(function (resolve) {
        return setTimeout(resolve, retryAuthAfterErrorSeconds * 1000);
      }), function () {
        // Todo: is this stack safe?
        return Upload_awaitIgnored(refreshAccessToken(authUrl, authHeaders, authSession));
      });
    }));
  });

  var putJsonGetJson = Upload_async(function (url, headers, requestBody, withCredentials) {
    return _await(nonUploadApiRequest({
      method: "PUT",
      path: url,
      headers: headers,
      body: requestBody
    }, withCredentials), function (_nonUploadApiRequest) {
      return _await(handleApiResult(_nonUploadApiRequest));
    });
  });

  var getAccessToken = Upload_async(function (authUrl, headers) {
    var endpointName = "Your auth API endpoint";
    return _await(nonUploadApiRequest({
      method: "GET",
      path: authUrl,
      headers: headers
    }, false), function (result) {
      if (!result.ok) {
        throw new Error("".concat(logPrefix).concat(endpointName, " returned a failed response. Please ensure the endpoint's status code is 200."));
      }

      var jwt = result.body;

      if (typeof jwt !== "string") {
        // We will receive 'null' if there was no content-type response header.
        throw new Error("".concat(logPrefix).concat(endpointName, " returned an unsupported response. Please ensure: 1) 'Content-Type: text/plain' is in the HTTP response headers 2) the status code is 200."));
      }

      if (jwt.length === 0) {
        throw new Error("".concat(logPrefix).concat(endpointName, " returned an empty string. Please return a valid JWT instead."));
      }

      if (jwt.trim().length !== jwt.length) {
        // Whitespace can be a nightmare to spot/debug, so we fail early here.
        throw new Error("".concat(logPrefix).concat(endpointName, " returned whitespace around the JWT, please remove it."));
      }

      return jwt;
    });
  });

  var deleteNoResponse = Upload_async(function (url, headers, withCredentials) {
    return _await(nonUploadApiRequest({
      method: "DELETE",
      path: url,
      headers: headers
    }, withCredentials), function (_nonUploadApiRequest2) {
      handleApiResult(_nonUploadApiRequest2);
    });
  });

  var handleApiResult = function handleApiResult(result) {
    var _a;

    if (result.ok) {
      return result.body;
    }

    var errorResponseMaybe = result.body;

    if (typeof ((_a = errorResponseMaybe === null || errorResponseMaybe === void 0 ? void 0 : errorResponseMaybe.error) === null || _a === void 0 ? void 0 : _a.code) === "string") {
      throw new UploadApiError(errorResponseMaybe);
    }

    throw new Error("".concat(logPrefix, "Unexpected API error."));
  };

  var nonUploadApiRequest = Upload_async(function (options, withCredentials) {
    return (0,upload_api_client_upload_js_namespaceObject.request)({
      BASE: options.path,
      WITH_CREDENTIALS: withCredentials
    }, Object.assign(Object.assign({}, options), {
      path: "" // We set to "" because we're using "BASE" above instead.

    }));
  });

  var getConfig = function getConfig() {
    var apiConfig = {
      BASE: apiUrl,
      WITH_CREDENTIALS: true
    };

    if (authenticateWithApiKey) {
      apiConfig.USERNAME = "apikey";
      apiConfig.PASSWORD = config.apiKey;
    }

    var accessToken = lastAuthSession === null || lastAuthSession === void 0 ? void 0 : lastAuthSession.accessToken;

    if (headers !== undefined || accessToken !== undefined) {
      apiConfig.HEADERS = Upload_async(function () {
        return _await(headers === undefined ? {} : headers(), function (headersFromConfig) {
          var accessToken = lastAuthSession === null || lastAuthSession === void 0 ? void 0 : lastAuthSession.accessToken; // Re-fetch as there's been an async boundary so state may have changed.

          return Object.assign(Object.assign({}, headersFromConfig), accessToken === undefined ? {} : {
            "authorization-token": accessToken
          });
        }, headers === undefined);
      });
    }

    return apiConfig;
  };

  var normalizeMimeType = function normalizeMimeType(mime) {
    var normal = mime.toLowerCase();
    var regex = /^[a-z0-9]+\/[a-z0-9+\-._]+(?:;[^=]+=[^;]+)*$/; // Sync with 'MimeTypeUnboxed' in 'upload/api'.

    return regex.test(normal) ? normal : undefined;
  };

  var debug = function debug(message, workerIndex) {
    if (debugMode) {
      console.log("".concat(logPrefix).concat(message).concat(workerIndex !== undefined ? " (Worker ".concat(workerIndex, ")") : ""));
    }
  };

  var error = function error(message) {
    console.error("".concat(logPrefix).concat(message));
  };

  var warn = function warn(message) {
    console.warn("".concat(logPrefix).concat(message));
  };

  return self;
}
;// CONCATENATED MODULE: ./src/index.ts



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_39535__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_39535__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_39535__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_39535__.o(definition, key) && !__nested_webpack_require_39535__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_39535__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_39535__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_39535__("./src/index.ts");
/******/ })()
;

/***/ }),

/***/ 6992:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@upload-io/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/@upload-io/style-loader/dist/runtime/insertStyleElement.js":
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  if (typeof document === "undefined") {
    return undefined;
  }

  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/@upload-io/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_3332__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =   true ? __nested_webpack_require_3332__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/@upload-io/style-loader/dist/runtime/styleDomAPI.js":
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  } // const sourceMap = obj.sourceMap;
  //
  // if (sourceMap && typeof btoa !== "undefined") {
  //   // This line appears to cause an internal server error from Vercel during builds (at least for the Shopify Vercel
  //   // template, which deploys to Vercel Edge functions), so we simply disable source maps to allow projects that
  //   // use "uploader" to build successfully.
  //   css += '\n/*# sourceMappingURL=data:application/json;base64,';
  //
  //   css += btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  //   css += ' */';
  // }
  // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/@upload-io/style-loader/dist/runtime/styleTagTransform.js":
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement === undefined) {
    return;
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_6246__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_6246__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_6246__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".uploader__body{overflow:hidden}.uploader--with-modal{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999}.uploader__modal{background:var(--shade-900);border-radius:.5em;z-index:100000;position:relative;overflow:auto;top:-5%;height:60%;width:75%;max-width:65.625em;max-height:41.25em}@media (max-height: 700px){.uploader__modal{top:-1%;height:80%}}@media (max-width: 750px), (max-height: 420px){.uploader__modal{top:0;height:100%;width:100%;max-width:none;max-height:none;border-radius:0}}.uploader__modal__close{position:absolute;right:0;top:0;z-index:2}.uploader__modal__close a{-webkit-transition:0.1s color linear;-o-transition:0.1s color linear;-moz-transition:0.1s color linear;transition:0.1s color linear;color:var(--shade-500);padding:1.125em 1.0625em .8125em .875em;display:inline-block}.uploader__backdrop{content:\" \";background:rgba(0,0,0,0.5);position:fixed;left:0;right:0;top:0;bottom:0;z-index:99999}.uploader__modal,.uploader__backdrop{opacity:0;-webkit-transition:0.15s opacity linear;-o-transition:0.15s opacity linear;-moz-transition:0.15s opacity linear;transition:0.15s opacity linear}.uploader__modal.show,.uploader__backdrop.show{opacity:1}\n", ""]);
// Exports
/* harmony default export */ __nested_webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/UploadWidgetContainer.scss":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_8936__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_8936__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_8936__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".uploader{--btn-text-color: var(--shade-200);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-moz-box-sizing:border-box;box-sizing:border-box;color:var(--shade-100);font-family:var(--base-font-family);font-size:var(--base-font-size);line-height:1;text-align:left;position:static}.uploader__root{position:absolute;left:0;right:0;top:0;bottom:0}.uploader a,.uploader p,.uploader button{font-size:inherit;margin:0}.uploader a{border-bottom:none;padding:0}.uploader svg{margin-bottom:0}.uploader a{color:var(--primary-color)}.uploader a,.uploader a:hover,.uploader a:active,.uploader a:focus{text-decoration:underline}.uploader a:hover:not(:disabled):not(.disabled){color:var(--primary-active-color)}.uploader .btn,.uploader .btn-group>.btn{-webkit-transition:0.1s border-color linear, 0.1s background-color linear;-o-transition:0.1s border-color linear, 0.1s background-color linear;-moz-transition:0.1s border-color linear, 0.1s background-color linear;transition:0.1s border-color linear, 0.1s background-color linear;display:inline-block;font-weight:400;color:var(--btn-text-color);text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgba(0,0,0,0);border:.0625em solid rgba(0,0,0,0);padding:0 1em;line-height:3;border-radius:0.3125em}.uploader .btn,.uploader .btn:hover,.uploader .btn:active,.uploader .btn:focus,.uploader .btn-group>.btn,.uploader .btn-group>.btn:hover,.uploader .btn-group>.btn:active,.uploader .btn-group>.btn:focus{text-decoration:none}.uploader .btn:not(:disabled):not(.disabled),.uploader .btn-group>.btn:not(:disabled):not(.disabled){cursor:pointer}.uploader .btn:hover:not(:disabled):not(.disabled),.uploader .btn-group>.btn:hover:not(:disabled):not(.disabled){color:var(--shade-300)}.uploader .btn--primary,.uploader .btn-group>.btn--primary{color:var(--shade-900);background-color:var(--primary-color);border-color:var(--primary-color)}.uploader .btn--primary:hover:not(:disabled):not(.disabled),.uploader .btn-group>.btn--primary:hover:not(:disabled):not(.disabled){background-color:var(--primary-active-color);border-color:var(--primary-active-color);color:var(--shade-900)}.uploader .btn--primary-outline,.uploader .btn-group>.btn--primary-outline{color:var(--primary-color);border-color:var(--primary-color)}.uploader .btn.disabled,.uploader .btn-group>.btn.disabled{opacity:0.5;cursor:default}.uploader .btn--file,.uploader .btn-group>.btn--file{position:relative;overflow:hidden;margin-bottom:0}.uploader .btn--file__input,.uploader .btn-group>.btn--file__input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.uploader .btn--upload,.uploader .btn-group>.btn--upload{font-size:1.11em;padding:0.2em 1.6em;margin-bottom:1.5em}.uploader .btn-group{padding:.9375em}.uploader .btn-group--space button:not(:last-child){margin-right:0.5em}.uploader .text-secondary{color:var(--shade-400)}.uploader .vcenter{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.uploader .hcenter{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploader .nudge-up-1{position:relative;top:-1px}.uploader .ml-0{margin-left:0}.uploader .ml-1{margin-left:.3125em}.uploader .ml-2{margin-left:.4375em}.uploader .ml-3{margin-left:.5em}.uploader .ml-4{margin-left:.625em}.uploader .mr-0{margin-right:0}.uploader .mr-1{margin-right:.3125em}.uploader .mr-2{margin-right:.4375em}.uploader .mr-3{margin-right:.5em}.uploader .mr-4{margin-right:.625em}.uploader .mb-0{margin-bottom:0}.uploader .mb-1{margin-bottom:.3125em}.uploader .mb-2{margin-bottom:.4375em}.uploader .mb-3{margin-bottom:.5em}.uploader .mb-4{margin-bottom:.625em}.uploader .mt-0{margin-top:0}.uploader .mt-1{margin-top:.3125em}.uploader .mt-2{margin-top:.4375em}.uploader .mt-3{margin-top:.5em}.uploader .mt-4{margin-top:.625em}.uploader .mt-5{margin-top:1.25em}\n", ""]);
// Exports
/* harmony default export */ __nested_webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageCropper.scss":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_14121__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_14121__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_14121__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".uploader__image-cropper__overlay{position:absolute;background:rgba(255,255,255,0.5)}.uploader__image-cropper__clip{overflow:hidden}.uploader__image-cropper__clip img{max-width:unset}.uploader__image-cropper__clip:before{content:\" \";display:block;background:rgba(255,255,255,0.15);position:absolute;left:-2px;right:-2px;top:-2px;bottom:-2px}.uploader__image-cropper__clip--circular,.uploader__image-cropper__clip--circular:before{border-radius:100%}\n", ""]);
// Exports
/* harmony default export */ __nested_webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_15593__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_15593__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_15593__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".uploader__image-editor{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;height:100%;width:100%}.uploader__image-editor img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.uploader__image-editor__header{padding:0.825em 0.8em 0.75em 0.8em}.uploader__image-editor__header--empty-non-modal{min-height:.9375em}.uploader__image-editor__image{width:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}.uploader__image-editor__image-padding{position:absolute;top:0;bottom:0;left:.9375em;right:.9375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.uploader__image-editor__image-inner{max-width:100%;max-height:100%}.uploader__modal .uploader__image-editor__header{padding-top:0;padding-bottom:1.3em;margin-top:-1em}\n", ""]);
// Exports
/* harmony default export */ __nested_webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/Spinner.scss":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_18262__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_18262__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_18262__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes spinner{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spinner{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.spinner{display:block !important;border:0.275em solid var(--shade-700);border-right-color:transparent;border-radius:50%;-webkit-animation:spinner 0.75s linear infinite;-moz-animation:spinner 0.75s linear infinite;animation:spinner 0.75s linear infinite}.spinner__container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;width:100%}\n", ""]);
// Exports
/* harmony default export */ __nested_webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_20222__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_20222__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_20222__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".uploader__resizable-square{position:absolute;cursor:move}.uploader__resizable-square__nw,.uploader__resizable-square__ne,.uploader__resizable-square__sw,.uploader__resizable-square__se{width:1em;height:1em;opacity:0.75;background-color:var(--shade-900);border:.0625em solid var(--primary-color);border-radius:100%;position:absolute;display:block !important}.uploader__resizable-square__nw{top:-.5em;left:-.5em;cursor:nw-resize}.uploader__resizable-square__ne{top:-.5em;right:-.5em;cursor:ne-resize}.uploader__resizable-square__sw{bottom:-.5em;left:-.5em;cursor:sw-resize}.uploader__resizable-square__se{bottom:-.5em;right:-.5em;cursor:se-resize}\n", ""]);
// Exports
/* harmony default export */ __nested_webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_21886__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21886__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_21886__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".progress-icon{display:block}.progress-icon__container{display:inline-block;position:relative}.progress-icon__circle{-webkit-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-o-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-moz-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50%;stroke:var(--primary-color)}.progress-icon__circle__bg{-webkit-transition:.3s opacity linear;-o-transition:.3s opacity linear;-moz-transition:.3s opacity linear;transition:.3s opacity linear;fill:var(--shade-700)}.progress-icon__circle--error{stroke:var(--error-color)}.progress-icon__thumbnail{-webkit-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-o-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-moz-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-webkit-transition-delay:.3s;-moz-transition-delay:.3s;-o-transition-delay:.3s;transition-delay:.3s;background-repeat:no-repeat;background-position:center center;background-size:contain;opacity:1;position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transform:scale(1, 1);-moz-transform:scale(1, 1);-ms-transform:scale(1, 1);-o-transform:scale(1, 1);transform:scale(1, 1)}.progress-icon__thumbnail--hidden{opacity:0;-webkit-transform:scale(0.1, 0.1);-moz-transform:scale(0.1, 0.1);-ms-transform:scale(0.1, 0.1);-o-transform:scale(0.1, 0.1);transform:scale(0.1, 0.1)}\n", ""]);
// Exports
/* harmony default export */ __nested_webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_25192__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_25192__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_25192__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".breakpoint-md .uploader__submitted-file{max-width:100%;width:100%}.breakpoint-lg .uploader__submitted-file{max-width:50%;width:50%}.breakpoint-xl .uploader__submitted-file{max-width:33.333333%;width:33.333333%}.breakpoint-xl .uploader__submitted-file--loners{max-width:46%;width:46%}.uploader__submitted-file{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:.3125em 0}.uploader__submitted-file__container{margin:0 .3125em;background:var(--shade-800);border-radius:.4375em}.uploader__submitted-file__inner{padding:1.3125em 1.4375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.uploader__submitted-file__text{margin-left:.4375em;margin-right:.5em;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.uploader__submitted-file__action{min-width:4.625em;text-align:right;display:inline-block}.uploader__submitted-file__action--performed{color:var(--shade-300)}.uploader__submitted-file__message{font-size:0.75em;margin-top:0.2em;display:block;line-height:1.1em}.uploader__submitted-file__name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;height:1.1em}\n", ""]);
// Exports
/* harmony default export */ __nested_webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/screens/UploaderMainScreen.scss":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_27672__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27672__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_27672__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".uploader__main-screen{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;height:100%;width:100%}.uploader__main-screen__file-list{margin:auto 0;overflow-y:auto;width:100%}.uploader__main-screen__file-list__inner{padding:.9375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploader__main-screen__info{color:var(--btn-text-color);text-align:center;padding:1.15em 0}.uploader__main-screen__info+.btn{display:block}\n", ""]);
// Exports
/* harmony default export */ __nested_webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/widgetBase/WidgetBase.scss":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_29858__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_29858__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_29858__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".uploader__widget-base{border-radius:.3125em;position:absolute;top:.9375em;left:.9375em;right:.9375em;bottom:.9375em;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.uploader__widget-base__modal-bg{color:var(--shade-600);position:absolute;z-index:1}.uploader__widget-base__modal-bg--dragging{color:var(--primary-color)}.uploader__widget-base__modal-bg--dragging *{pointer-events:none}.uploader__widget-base__children{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:2;position:absolute;bottom:0;top:0;left:0;right:0}.uploader__widget-base__children--is-modal{top:2.5em}.uploader__widget-base--draggable{border:.125em dashed var(--shade-600)}.uploader__widget-base--dragging{border-color:var(--primary-color)}.uploader__widget-base--dragging *{pointer-events:none}\n", ""]);
// Exports
/* harmony default export */ __nested_webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_34205__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_34205__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_34205__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_34205__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_34205__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_34205__.o(definition, key) && !__nested_webpack_require_34205__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_34205__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_34205__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__nested_webpack_require_34205__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_34205__.d(__nested_webpack_exports__, {
  "UploadWidgetResult": function() { return /* reexport */ UploadWidgetResult; },
  "Uploader": function() { return /* reexport */ Uploader; },
  "UploaderLocaleEnUs": function() { return /* reexport */ UploaderLocaleEnUs; }
});

;// CONCATENATED MODULE: external "preact/jsx-runtime"
var jsx_runtime_namespaceObject = __webpack_require__(6787);;
;// CONCATENATED MODULE: external "upload-js"
var external_upload_js_namespaceObject = __webpack_require__(4810);;
;// CONCATENATED MODULE: ./src/modules/locales/EN_US.ts
var UploaderLocaleEnUs = {
  "error!": "Error!",
  "done": "Done",
  "addAnotherFile": "Add another file...",
  "addAnotherImage": "Add another image...",
  "cancel": "cancel",
  "cancelInPreviewWindow": "Cancel",
  "cancelled!": "cancelled",
  "continue": "Continue",
  "customValidationFailed": "Failed to validate file.",
  "crop": "Crop",
  "finish": "Finished",
  "finishIcon": true,
  "image": "Image",
  "maxFilesReached": "Maximum number of files:",
  "maxImagesReached": "Maximum number of images:",
  "maxSize": "File size limit:",
  "next": "Next",
  "of": "of",
  "orDragDropFile": "...or drag and drop a file.",
  "orDragDropFiles": "...or drag and drop files.",
  "orDragDropImage": "...or drag and drop an image.",
  "orDragDropImages": "...or drag and drop images.",
  "pleaseWait": "Please wait...",
  "removed!": "removed",
  "remove": "remove",
  "skip": "Skip",
  "unsupportedFileType": "File type not supported.",
  "uploadFile": "Upload a File",
  "uploadFiles": "Upload a File",
  "uploadImage": "Upload an Image",
  "uploadImages": "Upload an Image",
  "processingFile": "Processing file..."
};
;// CONCATENATED MODULE: ./src/config/UploadWidgetEditor.ts
var UploadWidgetEditorRequired;

(function (UploadWidgetEditorRequired) {
  function from(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;

    var cropShape = (_b = (_a = options === null || options === void 0 ? void 0 : options.images) === null || _a === void 0 ? void 0 : _a.cropShape) !== null && _b !== void 0 ? _b : "rect";
    var crop = (_d = (_c = options === null || options === void 0 ? void 0 : options.images) === null || _c === void 0 ? void 0 : _c.crop) !== null && _d !== void 0 ? _d : true;
    return {
      images: {
        crop: crop,
        cropFilePath: (_f = (_e = options === null || options === void 0 ? void 0 : options.images) === null || _e === void 0 ? void 0 : _e.cropFilePath) !== null && _f !== void 0 ? _f : function (originalImage) {
          return "".concat(originalImage.filePath, ".crop");
        },
        cropRatio: cropShape === "circ" ? 1 : (_g = options === null || options === void 0 ? void 0 : options.images) === null || _g === void 0 ? void 0 : _g.cropRatio,
        cropShape: cropShape,
        // Prevents introducing a new step for existing users where previously they didn't expect any interruption, but
        // shows previews for new file types (PDFs) to users who are already expecting interruption for image uploads.
        // "If at least one editor option is enabled, then previews are enabled by default".
        preview: (_j = (_h = options === null || options === void 0 ? void 0 : options.images) === null || _h === void 0 ? void 0 : _h.preview) !== null && _j !== void 0 ? _j : crop
      }
    };
  }

  UploadWidgetEditorRequired.from = from;
})(UploadWidgetEditorRequired || (UploadWidgetEditorRequired = {}));
;// CONCATENATED MODULE: ./src/modules/ColorUtils.ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Original: https://stackoverflow.com/a/54070620/592768
// License: https://creativecommons.org/licenses/by-sa/4.0/legalcode
function rgb2hsv(r, g, b) {
  var v = Math.max(r, g, b);
  var c = v - Math.min(r, g, b); // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions

  var h = c && (v === r ? (g - b) / c : v === g ? 2 + (b - r) / c : 4 + (r - g) / c); // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions

  return [60 * (h < 0 ? h + 6 : h), v && c / v, v];
} // Original: https://stackoverflow.com/a/54024653/592768
// License: https://creativecommons.org/licenses/by-sa/4.0/legalcode


function hsv2rgb(h, s, v) {
  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };

  return [f(5), f(3), f(1)];
} // Original: https://stackoverflow.com/a/5624139/592768
// License: https://creativecommons.org/licenses/by-sa/4.0/legalcode


function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (_, r, g, b) {
    return "".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result === null) {
    throw new Error("Invalid color code: ".concat(hex));
  }

  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

function highlightColor(hex, amount) {
  var _hexToRgb = hexToRgb(hex),
      _hexToRgb2 = _slicedToArray(_hexToRgb, 3),
      r = _hexToRgb2[0],
      g = _hexToRgb2[1],
      b = _hexToRgb2[2];

  var _rgb2hsv = rgb2hsv(r, g, b),
      _rgb2hsv2 = _slicedToArray(_rgb2hsv, 3),
      h = _rgb2hsv2[0],
      s = _rgb2hsv2[1],
      v = _rgb2hsv2[2];

  var clipToFactor = function clipToFactor(x) {
    return Math.min(1, Math.max(0, x));
  };

  var _hsv2rgb$map = hsv2rgb(h, clipToFactor(s + amount * -1), clipToFactor(v / 255 + amount) * 255).map(Math.round),
      _hsv2rgb$map2 = _slicedToArray(_hsv2rgb$map, 3),
      rNew = _hsv2rgb$map2[0],
      gNew = _hsv2rgb$map2[1],
      bNew = _hsv2rgb$map2[2];

  return "rgb(".concat(rNew, ", ").concat(gNew, ", ").concat(bNew, ")");
}
;// CONCATENATED MODULE: ./src/config/UploadWidgetColors.ts

var UploaderColorOptionsRequired;

(function (UploaderColorOptionsRequired) {
  function from(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

    var primaryDefault = "#377dff";
    var activeDefault = "#528fff";
    var primary = (_a = options === null || options === void 0 ? void 0 : options.primary) !== null && _a !== void 0 ? _a : primaryDefault;
    var active;

    try {
      active = highlightColor(primary, 0.1);
    } catch (e) {
      console.error("Invalid hex code '".concat(primary, "', using default colours."));
      primary = primaryDefault;
      active = activeDefault;
    }

    return {
      primary: primary,
      active: (_b = options === null || options === void 0 ? void 0 : options.active) !== null && _b !== void 0 ? _b : active,
      error: (_c = options === null || options === void 0 ? void 0 : options.error) !== null && _c !== void 0 ? _c : "#d23f4d",
      shade100: (_d = options === null || options === void 0 ? void 0 : options.shade100) !== null && _d !== void 0 ? _d : "#333",
      shade200: (_e = options === null || options === void 0 ? void 0 : options.shade200) !== null && _e !== void 0 ? _e : "#7a7a7a",
      shade300: (_f = options === null || options === void 0 ? void 0 : options.shade300) !== null && _f !== void 0 ? _f : "#999",
      shade400: (_g = options === null || options === void 0 ? void 0 : options.shade400) !== null && _g !== void 0 ? _g : "#a5a6a8",
      shade500: (_h = options === null || options === void 0 ? void 0 : options.shade500) !== null && _h !== void 0 ? _h : "#d3d3d3",
      shade600: (_j = options === null || options === void 0 ? void 0 : options.shade600) !== null && _j !== void 0 ? _j : "#dddddd",
      shade700: (_k = options === null || options === void 0 ? void 0 : options.shade700) !== null && _k !== void 0 ? _k : "#f0f0f0",
      shade800: (_l = options === null || options === void 0 ? void 0 : options.shade800) !== null && _l !== void 0 ? _l : "#f8f8f8",
      shade900: (_m = options === null || options === void 0 ? void 0 : options.shade900) !== null && _m !== void 0 ? _m : "#fff" // 900 DONE

    };
  }

  UploaderColorOptionsRequired.from = from;
})(UploaderColorOptionsRequired || (UploaderColorOptionsRequired = {}));
;// CONCATENATED MODULE: ./src/config/UploadWidgetFontSize.ts
var UploadWidgetFontSizeRequired;

(function (UploadWidgetFontSizeRequired) {
  function from(options) {
    var _a;

    return {
      base: (_a = options === null || options === void 0 ? void 0 : options.base) !== null && _a !== void 0 ? _a : 16
    };
  }

  UploadWidgetFontSizeRequired.from = from;
})(UploadWidgetFontSizeRequired || (UploadWidgetFontSizeRequired = {}));
;// CONCATENATED MODULE: ./src/config/UploadWidgetFontFamily.ts
var UploadWidgetFontFamilyRequired;

(function (UploadWidgetFontFamilyRequired) {
  function from(options) {
    var _a;

    return {
      base: (_a = options === null || options === void 0 ? void 0 : options.base) !== null && _a !== void 0 ? _a : "-apple-system, blinkmacsystemfont, Segoe UI, helvetica, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
    };
  }

  UploadWidgetFontFamilyRequired.from = from;
})(UploadWidgetFontFamilyRequired || (UploadWidgetFontFamilyRequired = {}));
;// CONCATENATED MODULE: ./src/config/UploadWidgetStyles.ts



var UploadWidgetStylesRequired;

(function (UploadWidgetStylesRequired) {
  function from(options) {
    return {
      colors: UploaderColorOptionsRequired.from(options === null || options === void 0 ? void 0 : options.colors),
      fontFamilies: UploadWidgetFontFamilyRequired.from(options === null || options === void 0 ? void 0 : options.fontFamilies),
      fontSizes: UploadWidgetFontSizeRequired.from(options === null || options === void 0 ? void 0 : options.fontSizes)
    };
  }

  UploadWidgetStylesRequired.from = from;
})(UploadWidgetStylesRequired || (UploadWidgetStylesRequired = {}));
;// CONCATENATED MODULE: ./src/config/UploadWidgetConfig.ts




function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

var UploadWidgetConfigRequired;

(function (UploadWidgetConfigRequired) {
  function from(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;

    var layout = (_a = options.layout) !== null && _a !== void 0 ? _a : "modal";
    var multi = (_b = options.multi) !== null && _b !== void 0 ? _b : options.maxFileCount !== undefined && options.maxFileCount > 1;
    return {
      container: options.container,
      editor: UploadWidgetEditorRequired.from(options.editor),
      layout: layout,
      locale: Object.assign(Object.assign({}, UploaderLocaleEnUs), options.locale),
      maxFileCount: options.maxFileCount,
      maxFileSizeBytes: options.maxFileSizeBytes,
      metadata: options.metadata,
      mimeTypes: (_c = options.mimeTypes) === null || _c === void 0 ? void 0 : _c.map(function (x) {
        return x.trim().toLowerCase();
      }),
      multi: multi,
      onInit: (_d = options.onInit) !== null && _d !== void 0 ? _d : function () {},
      onUpdate: (_e = options.onUpdate) !== null && _e !== void 0 ? _e : function () {},
      onPreUpload: _async(function (file) {
        var onValidate = options.onValidate,
            onPreUpload = options.onPreUpload;
        return _await(onValidate === undefined ? {} : onValidate(file), function (_onValidate) {
          var _Object$assign = Object.assign({}, onValidate === undefined ? _onValidate : {
            errorMessage: _onValidate
          });

          return _await(onPreUpload === undefined ? {} : onPreUpload(file), function (_onPreUpload) {
            return Object.assign(_Object$assign, _onPreUpload);
          }, onPreUpload === undefined);
        }, onValidate === undefined);
      }),
      path: options.path,
      showFinishButton: (_f = options.showFinishButton) !== null && _f !== void 0 ? _f : multi ? layout === "modal" : false,
      showRemoveButton: (_g = options.showRemoveButton) !== null && _g !== void 0 ? _g : true,
      styles: UploadWidgetStylesRequired.from(options.styles),
      tags: (_h = options.tags) !== null && _h !== void 0 ? _h : []
    };
  }

  UploadWidgetConfigRequired.from = from;
})(UploadWidgetConfigRequired || (UploadWidgetConfigRequired = {}));
;// CONCATENATED MODULE: external "preact"
var external_preact_namespaceObject = __webpack_require__(9052);;
;// CONCATENATED MODULE: ./src/UploadInstanceMaybe.ts
var UploadInstanceMaybe;

(function (UploadInstanceMaybe) {
  function isUploadInstance(object) {
    return typeof object.uploadFile === "function";
  }

  UploadInstanceMaybe.isUploadInstance = isUploadInstance;
})(UploadInstanceMaybe || (UploadInstanceMaybe = {}));
// EXTERNAL MODULE: ./node_modules/@upload-io/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __nested_webpack_require_34205__("./node_modules/@upload-io/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__nested_webpack_require_34205__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/@upload-io/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __nested_webpack_require_34205__("./node_modules/@upload-io/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__nested_webpack_require_34205__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/@upload-io/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __nested_webpack_require_34205__("./node_modules/@upload-io/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__nested_webpack_require_34205__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/@upload-io/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __nested_webpack_require_34205__("./node_modules/@upload-io/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__nested_webpack_require_34205__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/@upload-io/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __nested_webpack_require_34205__("./node_modules/@upload-io/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__nested_webpack_require_34205__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/UploadWidgetContainer.scss
var UploadWidgetContainer = __nested_webpack_require_34205__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/UploadWidgetContainer.scss");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/UploadWidgetContainer.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = function insertIntoTarget(element) {
        if (typeof document !== "undefined") {
          document.head.appendChild(element);
        }
      };
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(UploadWidgetContainer.default, options);




       /* harmony default export */ var uploader_UploadWidgetContainer = (UploadWidgetContainer.default && UploadWidgetContainer.default.locals ? UploadWidgetContainer.default.locals : undefined);

;// CONCATENATED MODULE: external "classnames"
var external_classnames_namespaceObject = __webpack_require__(1198);;
var external_classnames_default = /*#__PURE__*/__nested_webpack_require_34205__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/widgetBase/WidgetBase.scss
var WidgetBase = __nested_webpack_require_34205__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/widgetBase/WidgetBase.scss");
;// CONCATENATED MODULE: ./src/components/widgets/widgetBase/WidgetBase.scss

      
      
      
      
      
      
      
      
      

var WidgetBase_options = {};

WidgetBase_options.styleTagTransform = (styleTagTransform_default());
WidgetBase_options.setAttributes = (setAttributesWithoutAttributes_default());
WidgetBase_options.insert = function insertIntoTarget(element) {
        if (typeof document !== "undefined") {
          document.head.appendChild(element);
        }
      };
WidgetBase_options.domAPI = (styleDomAPI_default());
WidgetBase_options.insertStyleElement = (insertStyleElement_default());

var WidgetBase_update = injectStylesIntoStyleTag_default()(WidgetBase.default, WidgetBase_options);




       /* harmony default export */ var widgetBase_WidgetBase = (WidgetBase.default && WidgetBase.default.locals ? WidgetBase.default.locals : undefined);

;// CONCATENATED MODULE: ./src/assets/svgs/DashedBackgroundSvg.tsx

var baseWidth = 600;
var baseHeight = 400;
var baseNotchSize = 50;
var DashedBackgroundSvg = function DashedBackgroundSvg(_ref) {
  var className = _ref.className,
      width = _ref.width,
      height = _ref.height,
      notchSize = _ref.notchSize;
  var widthDelta = baseWidth - width;
  var heightDelta = baseHeight - height;
  var notchDelta = baseNotchSize - notchSize;
  return (0,jsx_runtime_namespaceObject.jsxs)("svg", Object.assign({
    width: width,
    height: height,
    className: className,
    xmlns: "http://www.w3.org/2000/svg"
  }, {
    children: [(0,jsx_runtime_namespaceObject.jsxs)("defs", {
      children: [(0,jsx_runtime_namespaceObject.jsx)("path", {
        d: "M76 99h".concat(536 - (widthDelta - notchDelta), "a7 7 0 0 1 7 7v").concat(36 - notchDelta, "a7 7 0 0 0 7 7h").concat(36 - notchDelta, "a7 7 0 0 1 7 7v").concat(336 - (heightDelta - notchDelta), "a7 7 0 0 1-7 7H76a7 7 0 0 1-7-7V106a7 7 0 0 1 7-7Z"),
        id: "rectWithNotch"
      }), (0,jsx_runtime_namespaceObject.jsx)("mask", Object.assign({
        id: "rectWithNotchMask",
        maskContentUnits: "userSpaceOnUse",
        maskUnits: "objectBoundingBox",
        x: "0",
        y: "0",
        width: width,
        height: height,
        fill: "#fff"
      }, {
        children: (0,jsx_runtime_namespaceObject.jsx)("use", {
          xlinkHref: "#rectWithNotch"
        })
      }))]
    }), (0,jsx_runtime_namespaceObject.jsx)("use", {
      mask: "url(#rectWithNotchMask)",
      xlinkHref: "#rectWithNotch",
      transform: "translate(-69 -99)",
      stroke: "currentColor",
      strokeWidth: "4",
      fill: "none",
      fillRule: "evenodd",
      strokeDasharray: "4"
    })]
  }));
};
;// CONCATENATED MODULE: ./src/components/widgets/widgetBase/WidgetBaseBackground.tsx



var WidgetBaseBackground = function WidgetBaseBackground(_ref) {
  var closeButtonSize = _ref.closeButtonSize,
      isDragging = _ref.isDragging,
      dimensions = _ref.dimensions;

  if (dimensions === undefined) {
    return (0,jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {});
  }

  return (0,jsx_runtime_namespaceObject.jsx)(DashedBackgroundSvg, {
    width: dimensions.width,
    height: dimensions.height,
    notchSize: closeButtonSize,
    className: external_classnames_default()("uploader__widget-base__modal-bg", {
      "uploader__widget-base__modal-bg--dragging": isDragging
    })
  });
};
;// CONCATENATED MODULE: external "preact/compat"
var compat_namespaceObject = __webpack_require__(5333);;
;// CONCATENATED MODULE: ./src/assets/svgs/utils/ResizedSvg.tsx
var __rest =  false || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


/**
 * IE11 doesn't like it when setting only width or height, so this utility makes it easier to set both.
 */

var ResizedSvg = function ResizedSvg(_a) {
  var children = _a.children,
      className = _a.className,
      originalHeight = _a.originalHeight,
      originalWidth = _a.originalWidth,
      style = _a.style,
      rest = __rest(_a, ["children", "className", "originalHeight", "originalWidth", "style"]);

  var widthMaybe = rest === null || rest === void 0 ? void 0 : rest.width;
  var heightMaybe = rest === null || rest === void 0 ? void 0 : rest.height;
  return (0,jsx_runtime_namespaceObject.jsx)("svg", Object.assign({
    viewBox: "0 0 ".concat(originalWidth, " ").concat(originalHeight),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    style: Object.assign(Object.assign({}, style), heightMaybe !== undefined ? {
      height: "".concat(heightMaybe, "px"),
      width: "".concat(heightMaybe * (originalWidth / originalHeight), "px")
    } : widthMaybe !== undefined ? {
      width: "".concat(widthMaybe, "px"),
      height: "".concat(widthMaybe * (originalHeight / originalWidth), "px")
    } : {})
  }, {
    children: children
  }));
};
;// CONCATENATED MODULE: ./src/assets/svgs/CloseSvg.tsx


var CloseSvg = function CloseSvg(_ref) {
  var className = _ref.className,
      width = _ref.width;
  return (0,jsx_runtime_namespaceObject.jsx)(ResizedSvg, Object.assign({
    originalWidth: 27,
    originalHeight: 26,
    width: width !== null && width !== void 0 ? width : 27,
    className: className
  }, {
    children: (0,jsx_runtime_namespaceObject.jsxs)("g", Object.assign({
      transform: "rotate(45 6.547 16.13)",
      fill: "currentColor",
      fillRule: "evenodd"
    }, {
      children: [(0,jsx_runtime_namespaceObject.jsx)("rect", {
        x: "7.75",
        width: "2.5",
        height: "18",
        rx: "1.25"
      }), (0,jsx_runtime_namespaceObject.jsx)("rect", {
        transform: "rotate(90 9 9)",
        x: "7.75",
        width: "2.5",
        height: "18",
        rx: "1.25"
      })]
    }))
  }));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss
var Modal = __nested_webpack_require_34205__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss");
;// CONCATENATED MODULE: ./src/components/modal/Modal.scss

      
      
      
      
      
      
      
      
      

var Modal_options = {};

Modal_options.styleTagTransform = (styleTagTransform_default());
Modal_options.setAttributes = (setAttributesWithoutAttributes_default());
Modal_options.insert = function insertIntoTarget(element) {
        if (typeof document !== "undefined") {
          document.head.appendChild(element);
        }
      };
Modal_options.domAPI = (styleDomAPI_default());
Modal_options.insertStyleElement = (insertStyleElement_default());

var Modal_update = injectStylesIntoStyleTag_default()(Modal.default, Modal_options);




       /* harmony default export */ var modal_Modal = (Modal.default && Modal.default.locals ? Modal.default.locals : undefined);

;// CONCATENATED MODULE: ./src/components/modal/Modal.tsx
function Modal_slicedToArray(arr, i) { return Modal_arrayWithHoles(arr) || Modal_iterableToArrayLimit(arr, i) || Modal_unsupportedIterableToArray(arr, i) || Modal_nonIterableRest(); }

function Modal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Modal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Modal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Modal_arrayLikeToArray(o, minLen); }

function Modal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Modal_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Modal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var modalTransitionDuration = 250; // Actual CSS transition of 'fade' is 150ms, but we add 100ms for safety.

var modalCloseButtonSize = 27;
var modalCloseButtonPadding = 11;
var Modal_Modal = function Modal(_ref) {
  var children = _ref.children,
      closeModal = _ref.closeModal;

  var _useState = (0,compat_namespaceObject.useState)(false),
      _useState2 = Modal_slicedToArray(_useState, 2),
      isClosed = _useState2[0],
      setIsClosed = _useState2[1];

  var _useState3 = (0,compat_namespaceObject.useState)(false),
      _useState4 = Modal_slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var _useState5 = (0,compat_namespaceObject.useState)(false),
      _useState6 = Modal_slicedToArray(_useState5, 2),
      showModalAsync = _useState6[0],
      setShowModalAsync = _useState6[1];

  var showModal = visible && !isClosed;

  var doClose = function doClose() {
    setIsClosed(true);
  };

  (0,compat_namespaceObject.useEffect)(function () {
    if (!visible) {
      setVisible(true);
    }
  }, [visible]);
  (0,compat_namespaceObject.useEffect)(function () {
    if (!isClosed) {
      return;
    }

    var timeout = setTimeout(function () {
      closeModal();
    }, modalTransitionDuration);
    return function () {
      return clearTimeout(timeout);
    };
  }, [isClosed]);
  (0,compat_namespaceObject.useLayoutEffect)(function () {
    var oldHtmlClass = document.documentElement.className;
    var oldBodyClass = document.body.className;
    document.documentElement.className = "".concat(oldHtmlClass, " uploader__html");
    document.body.className = "".concat(oldBodyClass, " uploader__body");
    return function () {
      document.documentElement.className = oldHtmlClass;
      document.body.className = oldBodyClass;
    };
  }, []);
  (0,compat_namespaceObject.useEffect)(function () {
    if (showModal && !showModalAsync) {
      var f = window.requestAnimationFrame(function () {
        setShowModalAsync(true);
      });
      return function () {
        return window.cancelAnimationFrame(f);
      };
    } else if (showModalAsync) {
      setShowModalAsync(false);
    }
  }, [showModal]); // 'onMouseDown' vs 'onClick':
  // When cropping an image, if we start a crop then release the mouse button outside the modal, it appears to register
  // as an 'onClick', so we use 'onMouseDown' to fix this.

  return (0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
    children: [showModal && (0,jsx_runtime_namespaceObject.jsx)("div", {
      className: external_classnames_default()("uploader__backdrop", {
        show: showModalAsync
      }),
      onMouseDown: doClose
    }), showModal && (0,jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
      className: external_classnames_default()("uploader__modal", {
        show: showModalAsync
      })
    }, {
      children: [children, (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
        className: "uploader__modal__close"
      }, {
        children: (0,jsx_runtime_namespaceObject.jsx)("a", Object.assign({
          href: "#close",
          onClick: function onClick(e) {
            e.preventDefault();
            doClose();
          }
        }, {
          children: (0,jsx_runtime_namespaceObject.jsx)(CloseSvg, {
            width: modalCloseButtonSize
          })
        }))
      }))]
    }))]
  });
};
;// CONCATENATED MODULE: ./src/modules/common/UseDimensionsFromElement.ts
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || UseDimensionsFromElement_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return UseDimensionsFromElement_arrayLikeToArray(arr); }

function UseDimensionsFromElement_slicedToArray(arr, i) { return UseDimensionsFromElement_arrayWithHoles(arr) || UseDimensionsFromElement_iterableToArrayLimit(arr, i) || UseDimensionsFromElement_unsupportedIterableToArray(arr, i) || UseDimensionsFromElement_nonIterableRest(); }

function UseDimensionsFromElement_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UseDimensionsFromElement_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UseDimensionsFromElement_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UseDimensionsFromElement_arrayLikeToArray(o, minLen); }

function UseDimensionsFromElement_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UseDimensionsFromElement_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UseDimensionsFromElement_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useElementRef() {
  var _useState = (0,compat_namespaceObject.useState)(undefined),
      _useState2 = UseDimensionsFromElement_slicedToArray(_useState, 2),
      element = _useState2[0],
      setElement = _useState2[1];

  var elementRef = (0,compat_namespaceObject.useCallback)(function (e) {
    setElement(e !== null && e !== void 0 ? e : undefined);
  }, []);
  return [element, elementRef];
}
function getElementDimensionsOnResize(isElementReady, imageSizeDeps) {
  var _useElementRef = useElementRef(),
      _useElementRef2 = UseDimensionsFromElement_slicedToArray(_useElementRef, 2),
      element = _useElementRef2[0],
      elementRef = _useElementRef2[1];

  var dimensions = doGetElementDimensionsOnResize(isElementReady, element, element, imageSizeDeps);
  return [dimensions, elementRef];
}
function getElementDimensionsOnParentResize(isElementReady, imageSizeDeps) {
  var _useElementRef3 = useElementRef(),
      _useElementRef4 = UseDimensionsFromElement_slicedToArray(_useElementRef3, 2),
      element = _useElementRef4[0],
      elementRef = _useElementRef4[1];

  var _useElementRef5 = useElementRef(),
      _useElementRef6 = UseDimensionsFromElement_slicedToArray(_useElementRef5, 2),
      parentElement = _useElementRef6[0],
      parentElementRef = _useElementRef6[1];

  var dimensions = doGetElementDimensionsOnResize(isElementReady, element, parentElement, imageSizeDeps);
  return [dimensions, elementRef, parentElementRef];
}

function doGetElementDimensionsOnResize(isElementReady, element, parentElement, imageSizeDeps) {
  // Must be 'undefined' to begin with, as these dimensions will be zero'd if the element isn't ready (i.e. it's an image and hasn't loaded yet).
  // IMPORTANT: do not override 'onload' for an image to achieve this, as we're already setting the attribute elsewhere, so don't want to overwrite the handler.
  var _useState3 = (0,compat_namespaceObject.useState)(undefined),
      _useState4 = UseDimensionsFromElement_slicedToArray(_useState3, 2),
      dimensions = _useState4[0],
      setDimensions = _useState4[1];

  (0,compat_namespaceObject.useLayoutEffect)(function () {
    var updateDimensions = function updateDimensions() {
      if (isElementReady) {
        setDimensions(getDimensionsFromElement(element));
      }
    };

    if (element === undefined || parentElement === undefined) {
      return;
    }

    var observer = new ResizeObserver(updateDimensions);
    observer.observe(parentElement);
    return function () {
      return observer.disconnect();
    };
  }, [element, isElementReady].concat(_toConsumableArray(imageSizeDeps)));
  return dimensions;
}

function getDimensionsFromElement(element) {
  if (element === undefined) {
    return undefined;
  }

  var domRect = element.getBoundingClientRect();
  return {
    width: domRect.width,
    height: domRect.height,
    x: element.offsetLeft,
    y: element.offsetTop
  };
}
;// CONCATENATED MODULE: ./src/components/widgets/widgetBase/WidgetBase.tsx
function WidgetBase_slicedToArray(arr, i) { return WidgetBase_arrayWithHoles(arr) || WidgetBase_iterableToArrayLimit(arr, i) || WidgetBase_unsupportedIterableToArray(arr, i) || WidgetBase_nonIterableRest(); }

function WidgetBase_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function WidgetBase_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return WidgetBase_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return WidgetBase_arrayLikeToArray(o, minLen); }

function WidgetBase_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function WidgetBase_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function WidgetBase_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var WidgetBase_WidgetBase = function WidgetBase(_ref) {
  var children = _ref.children,
      htmlProps = _ref.htmlProps,
      isDraggable = _ref.isDraggable,
      isDragging = _ref.isDragging,
      layout = _ref.layout;

  var _a, _b;

  var _getElementDimensions = getElementDimensionsOnResize(true, []),
      _getElementDimensions2 = WidgetBase_slicedToArray(_getElementDimensions, 2),
      dimensions = _getElementDimensions2[0],
      containerRef = _getElementDimensions2[1];

  var breakpoints = [{
    width: 650,
    value: "md"
  }, {
    width: 930,
    value: "lg"
  }];
  var lastBreakpoint = "xl";
  var breakpoint = (_b = dimensions === undefined ? undefined : (_a = breakpoints.find(function (x) {
    return dimensions.width <= x.width;
  })) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : lastBreakpoint;
  return (0,jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
    ref: containerRef,
    className: external_classnames_default()("uploader__widget-base", "breakpoint-".concat(breakpoint), {
      "uploader__widget-base--draggable": isDraggable === true && layout !== "modal",
      "uploader__widget-base--dragging": isDragging === true && layout !== "modal"
    })
  }, htmlProps, {
    children: [isDraggable === true && layout === "modal" && (0,jsx_runtime_namespaceObject.jsx)(WidgetBaseBackground, {
      isDragging: isDragging === true,
      dimensions: dimensions,
      closeButtonSize: modalCloseButtonSize + modalCloseButtonPadding
    }), (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
      className: external_classnames_default()("uploader__widget-base__children", {
        "uploader__widget-base__children--is-modal": layout === "modal"
      })
    }, {
      children: children
    }))]
  }));
};
;// CONCATENATED MODULE: ./src/assets/svgs/RightSvg.tsx


var RightSvg = function RightSvg(_ref) {
  var className = _ref.className,
      width = _ref.width;
  return (0,jsx_runtime_namespaceObject.jsx)(ResizedSvg, Object.assign({
    originalWidth: 13,
    originalHeight: 10,
    width: width !== null && width !== void 0 ? width : 13,
    className: className
  }, {
    children: (0,jsx_runtime_namespaceObject.jsx)("path", {
      d: "M6.293.293a.999.999 0 0 0 0 1.414L8.586 4H1a1 1 0 0 0 0 2h7.586L6.293 8.293a.999.999 0 1 0 1.414 1.414L12.414 5 7.707.293a.999.999 0 0 0-1.414 0Z",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/widgets/configError/ConfigError.tsx



var ConfigError = function ConfigError(_ref) {
  var error = _ref.error,
      layout = _ref.layout;

  var _a;

  var errorMessage = ((_a = error.message) !== null && _a !== void 0 ? _a : "unknown error").replace("[upload-js] ", "");
  var isApiKeyError = errorMessage.toLowerCase().includes("api key");
  return (0,jsx_runtime_namespaceObject.jsxs)(WidgetBase_WidgetBase, Object.assign({
    layout: layout,
    multi: false
  }, {
    children: [(0,jsx_runtime_namespaceObject.jsx)("h1", {
      children: isApiKeyError ? "Almost there..." : "Oops!"
    }), (0,jsx_runtime_namespaceObject.jsx)("p", {
      children: errorMessage
    }), isApiKeyError ? (0,jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
      className: "mt-5"
    }, {
      children: [(0,jsx_runtime_namespaceObject.jsxs)("a", Object.assign({
        href: "https://upload.io/get-started",
        className: "btn btn--primary-outline"
      }, {
        children: ["Get API Key ", (0,jsx_runtime_namespaceObject.jsx)(RightSvg, {
          width: 12,
          className: "ml-2"
        })]
      })), " "]
    })) : (0,jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {})]
  }));
};
;// CONCATENATED MODULE: ./src/modules/common/TypeUtils.ts
function isDefined(object) {
  return object !== undefined;
}
function assertUnreachable(_x) {
  throw new Error("Didn't expect to get here: ".concat(JSON.stringify(_x)));
}
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/UploadButton.tsx
function UploadButton_slicedToArray(arr, i) { return UploadButton_arrayWithHoles(arr) || UploadButton_iterableToArrayLimit(arr, i) || UploadButton_unsupportedIterableToArray(arr, i) || UploadButton_nonIterableRest(); }

function UploadButton_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UploadButton_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UploadButton_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UploadButton_arrayLikeToArray(o, minLen); }

function UploadButton_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UploadButton_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UploadButton_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var UploadButton = function UploadButton(_ref) {
  var className = _ref.className,
      options = _ref.options,
      onUpload = _ref.onUpload,
      text = _ref.text;

  var _a;

  var _useState = (0,compat_namespaceObject.useState)(Math.random()),
      _useState2 = UploadButton_slicedToArray(_useState, 1),
      fileInputKey = _useState2[0];

  var _useState3 = (0,compat_namespaceObject.useState)("uploader__input-".concat(Math.round(Math.random() * 1000000))),
      _useState4 = UploadButton_slicedToArray(_useState3, 1),
      inputId = _useState4[0];

  return (0,jsx_runtime_namespaceObject.jsxs)("label", Object.assign({
    className: external_classnames_default()("btn btn--file", className),
    htmlFor: inputId
  }, {
    children: [text, (0,jsx_runtime_namespaceObject.jsx)("input", Object.assign({
      id: inputId,
      name: inputId,
      accept: (_a = options.mimeTypes) === null || _a === void 0 ? void 0 : _a.join(","),
      type: "file",
      className: "btn--file__input"
    }, options.multi ? {
      multiple: true
    } : {}, {
      onChange: function onChange(e) {
        var _a, _b;

        var input = e.target;
        var files = Array.from((_b = (_a = input.files) !== null && _a !== void 0 ? _a : undefined) !== null && _b !== void 0 ? _b : []);

        if (files.length > 0) {
          onUpload(files);
        }
      }
    }), fileInputKey)]
  }));
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/screens/UploaderWelcomeScreen.tsx


var UploaderWelcomeScreen = function UploaderWelcomeScreen(_ref) {
  var addFiles = _ref.addFiles,
      options = _ref.options,
      isImageUploader = _ref.isImageUploader;
  var multi = options.multi,
      locale = options.locale;
  return (0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
    children: [(0,jsx_runtime_namespaceObject.jsx)(UploadButton, {
      options: options,
      text: isImageUploader ? multi ? locale.uploadImages : locale.uploadImage : multi ? locale.uploadFiles : locale.uploadFile,
      className: "btn--primary btn--upload",
      onUpload: addFiles
    }), (0,jsx_runtime_namespaceObject.jsx)("p", Object.assign({
      className: "text-secondary mb-0"
    }, {
      children: isImageUploader ? multi ? locale.orDragDropImages : locale.orDragDropImage : multi ? locale.orDragDropFiles : locale.orDragDropFile
    }))]
  });
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss
var ProgressIcon = __nested_webpack_require_34205__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss

      
      
      
      
      
      
      
      
      

var ProgressIcon_options = {};

ProgressIcon_options.styleTagTransform = (styleTagTransform_default());
ProgressIcon_options.setAttributes = (setAttributesWithoutAttributes_default());
ProgressIcon_options.insert = function insertIntoTarget(element) {
        if (typeof document !== "undefined") {
          document.head.appendChild(element);
        }
      };
ProgressIcon_options.domAPI = (styleDomAPI_default());
ProgressIcon_options.insertStyleElement = (insertStyleElement_default());

var ProgressIcon_update = injectStylesIntoStyleTag_default()(ProgressIcon.default, ProgressIcon_options);




       /* harmony default export */ var fileIcons_ProgressIcon = (ProgressIcon.default && ProgressIcon.default.locals ? ProgressIcon.default.locals : undefined);

;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/ProgressIcon.tsx
function ProgressIcon_slicedToArray(arr, i) { return ProgressIcon_arrayWithHoles(arr) || ProgressIcon_iterableToArrayLimit(arr, i) || ProgressIcon_unsupportedIterableToArray(arr, i) || ProgressIcon_nonIterableRest(); }

function ProgressIcon_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProgressIcon_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProgressIcon_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProgressIcon_arrayLikeToArray(o, minLen); }

function ProgressIcon_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ProgressIcon_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ProgressIcon_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var progressWheelVanish = 300;
var progressWheelDelay = 350;
var ProgressIcon_ProgressIcon = function ProgressIcon(_ref) {
  var height = _ref.height,
      progress = _ref.progress,
      onCompleteImageSource = _ref.onCompleteImageSource,
      isError = _ref.isError;

  var _useState = (0,compat_namespaceObject.useState)(progress === 1),
      _useState2 = ProgressIcon_slicedToArray(_useState, 2),
      completed = _useState2[0],
      setCompleted = _useState2[1];

  var radius = height / 2;
  var stokeWidth = radius * 2;
  var size = stokeWidth * 2;
  var circumference = radius * 2 * Math.PI;
  var strokeDashoffset = circumference - progress * circumference;
  var strokeDasharray = "".concat(circumference, " ").concat(circumference);
  (0,compat_namespaceObject.useEffect)(function () {
    if (progress === 1 && !completed) {
      var timeout = setTimeout(function () {
        setCompleted(true);
      }, progressWheelDelay - 50); // We want to start this _just_ before the wheel finishes

      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [progress]);
  return (0,jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
    className: "progress-icon__container"
  }, {
    children: [(0,jsx_runtime_namespaceObject.jsxs)("svg", Object.assign({
      className: "progress-icon",
      width: size,
      height: size
    }, {
      children: [(0,jsx_runtime_namespaceObject.jsx)("circle", {
        className: "progress-icon__circle__bg",
        strokeWidth: 0,
        r: size / 2,
        cx: size / 2,
        cy: size / 2,
        style: {
          opacity: completed ? 0 : 1
        }
      }), (0,jsx_runtime_namespaceObject.jsx)("circle", {
        className: external_classnames_default()("progress-icon__circle", {
          "progress-icon__circle--error": isError
        }),
        strokeWidth: completed ? 0 : stokeWidth,
        fill: "transparent",
        r: completed ? 0 : radius,
        cx: stokeWidth,
        cy: stokeWidth,
        style: {
          strokeDasharray: strokeDasharray,
          strokeDashoffset: strokeDashoffset,
          opacity: completed ? 0 : 1
        }
      })]
    })), (0,jsx_runtime_namespaceObject.jsx)("span", {
      className: external_classnames_default()("progress-icon__thumbnail", {
        "progress-icon__thumbnail--hidden": !completed
      }),
      style: {
        backgroundImage: "url(".concat(onCompleteImageSource, ")")
      }
    })]
  }));
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Document.svg
/* harmony default export */ var Document = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMjIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjAgMjIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTAwIDBIMTVDNyAwIDAgNyAwIDE1djE5MGMwIDggNyAxNSAxNSAxNWgxMzBjOCAwIDE1LTcgMTUtMTVWNjBsLTM1LTI1LTI1LTM1eiIgc3R5bGU9ImZpbGw6IzQyODVmNCIvPjxwYXRoIGQ9Ik00MCAxNjBoODB2LTEwSDQwdjEwem0wIDIwaDYwdi0xMEg0MHYxMHptMC03MHYxMGg4MHYtMTBINDB6bTAgMzBoODB2LTEwSDQwdjEweiIgc3R5bGU9ImZpbGw6I2YxZjFmMSIvPjxwYXRoIGQ9Ik0xMDAgMHY0NWMwIDggNyAxNSAxNSAxNWg0NUwxMDAgMHoiIHN0eWxlPSJmaWxsOiNhMWMyZmEiLz48L3N2Zz4K");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Spreadsheet.svg
/* harmony default export */ var Spreadsheet = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMjEwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjAgMjEwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNXoiIHN0eWxlPSJmaWxsOiM0M2EwNDciLz48cGF0aCBkPSJNMTYwIDUwaC01MFYwbDUwIDUweiIgc3R5bGU9ImZpbGw6I2M4ZTZjOSIvPjxwYXRoIGQ9Im0xMTAgNTAgNTAgNTBWNTBoLTUweiIgc3R5bGU9ImZpbGw6IzJlN2QzMiIvPjxwYXRoIGQ9Ik0xMTUgMTAwSDM1djcwaDkwdi03MGgtMTB6bS03MCAxMGgyMHYxMEg0NXYtMTB6bTAgMjBoMjB2MTBINDV2LTEwem0wIDIwaDIwdjEwSDQ1di0xMHptNzAgMTBINzV2LTEwaDQwdjEwem0wLTIwSDc1di0xMGg0MHYxMHptMC0yMEg3NXYtMTBoNDB2MTB6IiBzdHlsZT0iZmlsbDojZThmNWU5Ii8+PC9zdmc+Cg==");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Slideshow.svg
/* harmony default export */ var Slideshow = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiNEMzUyMzAiLz48cGF0aCBmaWxsPSIjRkY4NDY0IiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiNCNDQyMjMiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTIxLjY1OSA5NEgzOC4zMzNDMzMuNzM3IDk0IDMwIDk3LjcyMyAzMCAxMDIuM3Y0NS42NWMwIDQuNTc3IDMuNzM3IDguMyA4LjMzMyA4LjNINzUuODN2OC4zYzAgMS45NTktMS42MTMgMy45NjctNC40MjUgNS41MjQtMy4yNDIgMS43ODgtNy41OTEgMi43NzYtMTIuMjM3IDIuNzc2VjE3N2g0MS42NjR2LTQuMTVjLTQuNjYzIDAtOS4wMTItLjk4NC0xMi4yMzctMi43NzYtMi44MTItMS41NTctNC40MjUtMy41NjUtNC40MjUtNS41MjR2LTguM2gzNy40OTdjNC41OTYgMCA4LjMzMy0zLjcyMyA4LjMzMy04LjNWMTAyLjNjMC00LjU3Ny0zLjczNy04LjMtOC4zMzMtOC4zaC0uMDA4Wm0tMzYuNDggNzguODVINzQuODE3YzMuMjQxLTIuMTkxIDUuMTgzLTUuMDg0IDUuMTgzLTguMyAwIDMuMjE2IDEuOTQyIDYuMTA5IDUuMTgzIDguM2gtLjAwNFpNMzguMzMzIDEwMi4zaDgzLjMyNnYzNy4zNUgzOC4zMzNWMTAyLjNjLS4wMTMgMCAwIDAgMCAwWm0wIDQ1LjY1di00LjE1aDgzLjMyNnY0LjE1SDM4LjMzM1oiLz48cGF0aCBkPSJNNjcuOTg2IDEzNi43Yy4zMzYuMi43MTMuMyAxLjA4NS4zLjMxMSAwIC42MzQtLjA3Ni45MzMtLjIxMmwyNC44NTctMTJBMS45OTMgMS45OTMgMCAwIDAgOTYgMTIzYzAtLjc1Mi0uNDQtMS40NTItMS4xNC0xLjc4OGwtMjQuODU2LTEyYTIuMTQ1IDIuMTQ1IDAgMCAwLTIuMDIyLjA4OEExLjk5MyAxLjk5MyAwIDAgMCA2NyAxMTF2MjRjMCAuNjg4LjM3NyAxLjMzNi45ODIgMS43aC4wMDRabTMuMTYxLTIyLjQ2NEw4OS4yOTcgMTIzbC0xOC4xNSA4Ljc2NFYxMTQuMjM2WiIvPjwvZz48L2c+PC9nPjwvc3ZnPgo=");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Archive.svg
/* harmony default export */ var Archive = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM4NkFCRUIiLz48cGF0aCBmaWxsPSIjQzRENEYxIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiM3MThGQzMiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzkgOTEuNjkxaDE4LjMzOHY5LjE2OUgzOXpNNDguMTY5IDEwMC44NmgxOC4zMzh2OS4xNjlINDguMTY5eiIvPjxwYXRoIGQ9Ik00OC4xNjkgMTAwLjg2aDkuMTY5djE4LjMzOGgtOS4xNjl6TTM5IDczLjM1M2gxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSA4Mi41MjJoMTguMzM4djkuMTY5SDQ4LjE2OXpNMzkgNTUuMDE1aDE4LjMzOHY5LjE2OUgzOXpNNDguMTY5IDY0LjE4NGgxOC4zMzh2OS4xNjlINDguMTY5ek0zOSAzNi42NzZoMTguMzM4djkuMTY5SDM5ek00OC4xNjkgNDUuODQ2aDE4LjMzOHY5LjE2OUg0OC4xNjl6TTM5IDE4LjMzOGgxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSAyNy41MDdoMTguMzM4djkuMTY5SDQ4LjE2OXpNMzkgMGgxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSA5LjE2OWgxOC4zMzh2OS4xNjlINDguMTY5eiIvPjxwYXRoIGQ9Ik01Mi43NTQgMTE3LjAzYzcuNTk2IDAgMTMuNzUzIDYuMTU3IDEzLjc1MyAxMy43NTN2MTMuNzU0YTkuMTcgOS4xNyAwIDAgMS05LjE2OSA5LjE2OUg0OC4xN2E5LjE3IDkuMTcgMCAwIDEtOS4xNjktOS4xN3YtMTMuNzUzYzAtNy41OTYgNi4xNTgtMTMuNzU0IDEzLjc1NC0xMy43NTRabTAgOS4xNjlhNC41ODUgNC41ODUgMCAwIDAtNC41ODUgNC41ODR2OS4xN2E0LjU4NSA0LjU4NSAwIDEgMCA5LjE3IDB2LTkuMTdhNC41ODUgNC41ODUgMCAwIDAtNC41ODUtNC41ODRaIi8+PC9nPjwvZz48L2c+PC9zdmc+Cg==");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Code.svg
/* harmony default export */ var Code = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDUgMjEwSDE1Yy04LjMgMC0xNS02LjctMTUtMTVWMTVDMCA2LjcgNi43IDAgMTUgMGg5NWw1MCA1MHYxNDVjMCA4LjMtNi43IDE1LTE1IDE1WiIgZmlsbD0iIzQwNzREMSIvPjxwYXRoIGZpbGw9IiM4RkIwRUEiIGQ9Ik0xNjAgNTBoLTUwVjB6Ii8+PHBhdGggZmlsbD0iIzQwNjM5RSIgZD0ibTExMCA1MCA1MCA1MFY1MHoiLz48cGF0aCBkPSJNNjkuNjUxIDE2MC4wNjN2LTUuNDE3SDY0LjJjLTMuNDc0IDAtNS43NjYtLjUwMy02Ljg3NC0xLjUwOS0xLjEwOS0xLjAwNi0xLjY2My0yLjIxNy0xLjY2My0zLjYzNCAwLTEuMDUyLjIyOC0yLjY3NC42ODYtNC44NjlsLjg5MS00LjAxMWMuNDgtMi4xNDkuNzItMy44ODYuNzItNS4yMTIgMC0xLjUwOC0uMjU3LTIuODQ1LS43NzEtNC4wMTEtLjUxNS0xLjE2Ni0xLjI4LTIuMjk3LTIuMjk4LTMuMzk0LTEuMDE3LTEuMDk3LTIuNjExLTIuMjE3LTQuNzgyLTMuMzYgMi4xNzEtMS4xNDMgMy43NjUtMi4yNjkgNC43ODItMy4zNzcgMS4wMTgtMS4xMDkgMS43ODMtMi4yNCAyLjI5OC0zLjM5NS41MTQtMS4xNTQuNzcxLTIuNDg1Ljc3MS0zLjk5NCAwLTEuMzI2LS4yNC0zLjA3NC0uNzItNS4yNDZsLS44OTEtNC4wMTFjLS40NTgtMi4xNzItLjY4Ni0zLjc3Mi0uNjg2LTQuOCAwLTEuNDYzLjU2LTIuNjkyIDEuNjgtMy42ODYgMS4xMi0uOTk0IDMuNDA2LTEuNDkxIDYuODU3LTEuNDkxaDUuNDUxVjg5LjE2aC01LjUyYy02LjQyMiAwLTEwLjU2IDEuMDQtMTIuNDExIDMuMTItMS44NTEgMi4wOC0yLjc3NyA0LjQxMS0yLjc3NyA2Ljk5NCAwIDEuMzcyLjE3MSAyLjg2OS41MTQgNC40OTJsLjY1MiAyLjgxMS41ODIgMy4wNTIuNDQ2IDEuODE3Yy4xNi44LjI0IDEuNjIzLjI0IDIuNDY4IDAgMi4yODYtLjc0MyA0LjE4OS0yLjIyOCA1LjcwOS0xLjQ4NiAxLjUyLTQuMDU4IDIuMjgtNy43MTUgMi4yOEgzOC4yOHY1LjQ1MWgzLjE1NGMzLjcwMyAwIDYuMjg2Ljc3MiA3Ljc0OSAyLjMxNSAxLjQ2MyAxLjU0MiAyLjE5NCAzLjQxMSAyLjE5NCA1LjYwNSAwIC44LS4wOCAxLjYzNS0uMjQgMi41MDNsLS40NDYgMS44ODYtLjU4MiAzLjA1MS0uNjUyIDIuODEyYy0uMzQzIDEuNi0uNTE0IDMuMDg1LS41MTQgNC40NTcgMCAyLjYwNi45MjYgNC45MzcgMi43NzcgNi45OTQgMS44NTEgMi4wNTcgNS45ODkgMy4wODYgMTIuNDExIDMuMDg2aDUuNTJabTI3LjI0NiAwYzYuNDIzIDAgMTAuNTY2LTEuMDIzIDEyLjQyOS0zLjA2OSAxLjg2My0yLjA0NSAyLjc5NC00LjM3MSAyLjc5NC02Ljk3NyAwLTEuMzcxLS4xODMtMi44NjgtLjU0OS00LjQ5MWwtLjY1MS0yLjgxMi0uNTgzLTMuMDUxLS40MTEtMS44ODZjLS4xODMtLjgtLjI3NS0xLjYtLjI3NS0yLjQgMC0yLjI4Ni43NDktNC4xOTQgMi4yNDYtNS43MjYgMS40OTctMS41MzEgNC4wNzQtMi4yOTcgNy43MzItMi4yOTdoMy4xMnYtNS40NTFoLTMuMTJjLTMuNzAzIDAtNi4yOTItLjc3Mi03Ljc2Ni0yLjMxNC0xLjQ3NC0xLjU0My0yLjIxMi0zLjQtMi4yMTItNS41NzIgMC0uODIzLjA5Mi0xLjY4LjI3NS0yLjU3MWwuNDExLTEuODE3LjU4My0zLjA1Mi42NTEtMi44MTFjLjM2Ni0xLjYuNTQ5LTMuMDk3LjU0OS00LjQ5MiAwLTIuNTgzLS45MzEtNC45MTQtMi43OTQtNi45OTRzLTYuMDA2LTMuMTItMTIuNDI5LTMuMTJoLTUuNTJ2NS40ODZoNS40NTJjMy40NzQgMCA1Ljc2NS40OTcgNi44NzQgMS40OTEgMS4xMDguOTk0IDEuNjYzIDIuMjEyIDEuNjYzIDMuNjUyIDAgMS4wNTEtLjIyOSAyLjY2Mi0uNjg2IDQuODM0bC0uODkxIDQuMDExYy0uNDM1IDIuMTcyLS42NTIgMy45Mi0uNjUyIDUuMjQ2IDAgMS41MDkuMjQ2IDIuODQuNzM3IDMuOTk0LjQ5MiAxLjE1NSAxLjI0NiAyLjI4NiAyLjI2MyAzLjM5NSAxLjAxNyAxLjEwOCAyLjYxMiAyLjIzNCA0Ljc4MyAzLjM3Ny0yLjE3MSAxLjE0My0zLjc2NiAyLjI2My00Ljc4MyAzLjM2LTEuMDE3IDEuMDk3LTEuNzcxIDIuMjI4LTIuMjYzIDMuMzk0LS40OTEgMS4xNjYtLjczNyAyLjUwMy0uNzM3IDQuMDExIDAgMS4zMjYuMjE3IDMuMDYzLjY1MiA1LjIxMmwuODkxIDQuMDExYy40NTcgMi4xOTUuNjg2IDMuODA2LjY4NiA0LjgzNSAwIDEuNDQtLjU1NSAyLjY2Mi0xLjY2MyAzLjY2OC0xLjEwOSAxLjAwNi0zLjQgMS41MDktNi44NzQgMS41MDloLTUuNDUydjUuNDE3aDUuNTJaIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPgo=");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Image.svg
/* harmony default export */ var svgs_Image = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM0ZDhhZmEiLz48cGF0aCBmaWxsPSIjOTViNmZmIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiMzZTcxZTQiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTI3IDE3MUgzM3YtMTguODU3bDI3LjExOC0zMy4wNDkgMzkuNzExIDMzLjA0OUwxMjcgMTQwLjI4OXpNMTMxIDExMC41YzAgOC4wMDktNi40OTEgMTQuNS0xNC41IDE0LjVzLTE0LjUtNi40OTEtMTQuNS0xNC41UzEwOC40OTEgOTYgMTE2LjUgOTZzMTQuNSA2LjQ5MSAxNC41IDE0LjVaIi8+PC9nPjwvZz48L2c+PC9zdmc+Cg==");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Video.svg
/* harmony default export */ var Video = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM4QzUwRTciLz48cGF0aCBmaWxsPSIjQjM4MEZGIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiM3QzNGRDgiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0iTTEyNi45NTggMTA0SDMzLjA0MkEyLjA0MiAyLjA0MiAwIDAgMCAzMSAxMDYuMDMxdjYwLjkzOGMwIDEuMTE3LjkxOSAyLjAzMSAyLjA0MiAyLjAzMWg5My45MTZhMi4wNDIgMi4wNDIgMCAwIDAgMi4wNDItMi4wMzFWMTA2LjAzYTIuMDQyIDIuMDQyIDAgMCAwLTIuMDQyLTIuMDMxWm0tNzkuNjI1IDQuMDYzdjguMTI0aC04LjE2NnYtOC4xMjRoOC4xNjZabS04LjE2NiAzNi41NjJoOC4xNjZ2OC4xMjVoLTguMTY2di04LjEyNVptMC00LjA2M3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm0wLTEyLjE4N3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm0wIDM2LjU2M3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm02NS4zMzMtNC4wNjNoLTQ5di00OC43NWg0OXY0OC43NVptMTYuMzMzLTguMTI1aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabTAtMTIuMTg4aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabTAtMTIuMTg3aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabS04LjE2NiAzNi41NjN2LTguMTI1aDguMTY2djguMTI1aC04LjE2NlptOC4xNjYtNDguNzVoLTguMTY2di04LjEyNmg4LjE2NnY4LjEyNloiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L2c+PC9zdmc+Cg==");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Audio.svg
/* harmony default export */ var Audio = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiMwNzkxRkYiLz48cGF0aCBmaWxsPSIjQjNEREZGIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiMwQTdDRDkiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0iTTg5LjQwNSA5NS4wMWM5LjQ4IDIuMDQ1IDE3LjI4MSA2LjkwNCAyMy40MDcgMTQuNTc4IDYuMTI1IDcuNjc0IDkuMTg4IDE2LjQ4IDkuMTg4IDI2LjQxNyAwIDkuOTM3LTMuMDYzIDE4Ljc0My05LjE4OCAyNi40MTYtNi4xMjYgNy42NzQtMTMuOTI4IDEyLjUzNC0yMy40MDcgMTQuNTc5di05LjY0OWM2Ljg1NC0yLjA0NSAxMi40MzEtNS45MTggMTYuNzM0LTExLjYxOCA0LjMwMi01LjcgNi40NTQtMTIuMjc4IDYuNDU0LTE5LjczM3MtMi4xNTItMTQuMDMzLTYuNDU0LTE5LjczM2MtNC4zMDMtNS43LTkuODgtOS41NzMtMTYuNzM0LTExLjYxOFY5NXYuMDFabTExLjU5MiA0MWMwIDguNzctMy44NjQgMTUuMDU1LTExLjU5MiAxOC44NTN2LTM3LjcxMmMzLjIwOCAxLjYwOSA1Ljk0MiA0LjI0IDguMjA0IDcuODk1IDIuMjYxIDMuNjU1IDMuMzkyIDcuMzA5IDMuMzkyIDEwLjk2M2gtLjAwNFpNMzggMTIxLjk3N2gxOC41OTFsMjMuNDA3LTIzLjQ2djc0Ljk3OWwtMjMuNDA3LTIzLjQ2SDM4di0yOC4wNjQuMDA1WiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvZz48L3N2Zz4K");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Unknown.svg
/* harmony default export */ var Unknown = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDUgMjEwSDE1Yy04LjMgMC0xNS02LjctMTUtMTVWMTVDMCA2LjcgNi43IDAgMTUgMGg5NWw1MCA1MHYxNDVjMCA4LjMtNi43IDE1LTE1IDE1WiIgZmlsbD0iI2M5ZGNmZCIvPjxwYXRoIGZpbGw9IiNFQ0YzRkYiIGQ9Ik0xNjAgNTBoLTUwVjB6Ii8+PHBhdGggZmlsbD0iI2JjZDRmZSIgZD0ibTExMCA1MCA1MCA1MFY1MHoiLz48L2c+PC9zdmc+Cg==");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/utils/FileIconUtil.tsx









function getFileIconImageSource(fileName, mime) {
  var _a;

  var fn = fileName.toLowerCase().trim();
  var result = fileExtensionIcons.find(function (x) {
    return x.extensions.some(function (ext) {
      return fn.endsWith(ext);
    }) || x.mime.some(function (m) {
      return mime.startsWith(m);
    });
  });
  return (_a = result === null || result === void 0 ? void 0 : result.icon) !== null && _a !== void 0 ? _a : Unknown;
}
var fileExtensionIcons = [{
  icon: Document,
  extensions: [".docx", ".doc", ".txt", ".md", ".markdown", ".mkdown", ".mkdn", ".pdf"],
  mime: ["application/x-abiword", "application/msword", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
}, {
  icon: Spreadsheet,
  extensions: [".xlsx", ".xls", ".csv", ".tsv", ".psv"],
  mime: ["application/ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]
}, {
  icon: Slideshow,
  extensions: [".pptx", ".ppt"],
  mime: ["application/vnd.apple.keynote", "application/ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation"]
}, {
  icon: Archive,
  extensions: [".zip", ".tar", ".tar.gz", ".rar"],
  mime: []
}, {
  icon: svgs_Image,
  extensions: [],
  mime: ["image/"]
}, {
  icon: Video,
  extensions: [],
  mime: ["video/"]
}, {
  icon: Audio,
  extensions: [],
  mime: ["audio/"]
}, {
  icon: Code,
  extensions: [".json", ".js", ".ts", ".htm", ".html", ".css", ".sass"],
  mime: []
}];
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss
var SubmittedFileComponent = __nested_webpack_require_34205__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss

      
      
      
      
      
      
      
      
      

var SubmittedFileComponent_options = {};

SubmittedFileComponent_options.styleTagTransform = (styleTagTransform_default());
SubmittedFileComponent_options.setAttributes = (setAttributesWithoutAttributes_default());
SubmittedFileComponent_options.insert = function insertIntoTarget(element) {
        if (typeof document !== "undefined") {
          document.head.appendChild(element);
        }
      };
SubmittedFileComponent_options.domAPI = (styleDomAPI_default());
SubmittedFileComponent_options.insertStyleElement = (insertStyleElement_default());

var SubmittedFileComponent_update = injectStylesIntoStyleTag_default()(SubmittedFileComponent.default, SubmittedFileComponent_options);




       /* harmony default export */ var files_SubmittedFileComponent = (SubmittedFileComponent.default && SubmittedFileComponent.default.locals ? SubmittedFileComponent.default.locals : undefined);

;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/fileIcons/svgs/Error.svg
/* harmony default export */ var svgs_Error = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNkMjNmNGQiIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuNiA3LjYpIiBmaWxsPSIjRkZGIj48cmVjdCB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgNy40MjUgNy40MjUpIiB4PSI1LjkyNSIgeT0iLTEuNTc1IiB3aWR0aD0iMyIgaGVpZ2h0PSIxOCIgcng9IjEuNSIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDcuNDI1IDcuNDI1KSIgeD0iNS45MjUiIHk9Ii0xLjU3NSIgd2lkdGg9IjMiIGhlaWdodD0iMTgiIHJ4PSIxLjUiLz48L2c+PC9nPjwvc3ZnPgo=");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/hypermedia/Hypermedia.tsx


var Link = function Link(_ref) {
  var prefix = _ref.prefix,
      suffix = _ref.suffix,
      text = _ref.text,
      url = _ref.url;
  return (0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
    children: [prefix, " ", (0,jsx_runtime_namespaceObject.jsx)("a", Object.assign({
      href: url,
      target: "_blank",
      rel: "noopener"
    }, {
      children: text
    })), " ", suffix]
  });
};

function replaceFirstLink(text) {
  var matches = /^(.*?)(https?:\/\/[^\s)]+)(.*?)$/.exec(text);

  if (matches === null) {
    return undefined;
  }

  var prefix = matches[1];
  var url = matches[2];
  var suffix = matches[3];
  return (0,jsx_runtime_namespaceObject.jsx)(Link, {
    text: url,
    url: url,
    prefix: prefix,
    suffix: suffix
  });
}

function replaceUploadIo(text) {
  var find = "upload.io";
  var index = text.toLowerCase().indexOf(find);

  if (index === -1) {
    return undefined;
  }

  return (0,jsx_runtime_namespaceObject.jsx)(Link, {
    text: "Upload.io",
    url: "https://upload.io/pricing",
    prefix: text.substring(0, index),
    suffix: text.substring(index + find.length)
  });
}

var Hypermedia = function Hypermedia(_ref2) {
  var text = _ref2.text;

  var _a, _b;

  return (_b = (_a = replaceFirstLink(text)) !== null && _a !== void 0 ? _a : replaceUploadIo(text)) !== null && _b !== void 0 ? _b : (0,jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
    children: text
  });
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/files/SubmittedFileComponent.tsx
function SubmittedFileComponent_slicedToArray(arr, i) { return SubmittedFileComponent_arrayWithHoles(arr) || SubmittedFileComponent_iterableToArrayLimit(arr, i) || SubmittedFileComponent_unsupportedIterableToArray(arr, i) || SubmittedFileComponent_nonIterableRest(); }

function SubmittedFileComponent_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SubmittedFileComponent_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SubmittedFileComponent_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SubmittedFileComponent_arrayLikeToArray(o, minLen); }

function SubmittedFileComponent_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SubmittedFileComponent_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SubmittedFileComponent_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










 // Keep up-to-date with total animation duration in CSS.

var removalAnimationTime = 1000;
var SubmittedFileComponent_SubmittedFileComponent = function SubmittedFileComponent(_ref) {
  var file = _ref.file,
      fileCount = _ref.fileCount,
      remove = _ref.remove,
      locale = _ref.locale,
      showRemoveButton = _ref.showRemoveButton;

  var _a, _b;

  var _useState = (0,compat_namespaceObject.useState)(false),
      _useState2 = SubmittedFileComponent_slicedToArray(_useState, 2),
      isDelayedRemove = _useState2[0],
      setIsDelayedRemove = _useState2[1];

  var delayedRemove = function delayedRemove() {
    setIsDelayedRemove(true);
  };

  (0,compat_namespaceObject.useEffect)(function () {
    if (!isDelayedRemove) {
      return;
    }

    var timeout = setTimeout(function () {
      remove();
    }, removalAnimationTime);
    return function () {
      return clearTimeout(timeout);
    };
  }, [isDelayedRemove]);
  var progressMargin = 0.02;
  var thumbnail = Unknown;
  var progress = 0;
  var fileName;
  var fileMessage;

  switch (file.type) {
    case "preprocessing":
      progress = 0;
      fileName = file.file.name;
      fileMessage = locale.processingFile;
      break;

    case "uploading":
      progress = Math.min(file.progress, 1 - progressMargin); // Do not let progress display 100%, as we don't have the MIME type & URL for the thumbnail yet. Plus it's confusing leaving it hanging on 100%.

      fileName = file.file.name;
      break;

    case "uploaded":
      progress = 1;
      thumbnail = getFileIconImageSource(file.uploadedFile.file.name, file.uploadedFile.mime);
      fileName = file.uploadedFile.file.name;
      break;

    case "error":
      progress = 1;
      thumbnail = svgs_Error;
      fileMessage = (_b = (_a = file.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : "Unexpected error occurred.";
      fileName = file.file.name;
      break;

    default:
      assertUnreachable(file);
  }

  return (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
    className: external_classnames_default()("uploader__submitted-file", {
      "uploader__submitted-file--loners": fileCount <= 2
    })
  }, {
    children: (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
      className: "uploader__submitted-file__container"
    }, {
      children: (0,jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
        className: "uploader__submitted-file__inner"
      }, {
        children: [(0,jsx_runtime_namespaceObject.jsx)(ProgressIcon_ProgressIcon, {
          progress: Math.max(progressMargin, progress),
          onCompleteImageSource: thumbnail,
          height: 15,
          isError: file.type === "error"
        }), " ", (0,jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
          className: "uploader__submitted-file__text"
        }, {
          children: [(0,jsx_runtime_namespaceObject.jsx)("span", Object.assign({
            className: "uploader__submitted-file__name",
            title: fileName
          }, {
            children: fileName
          })), fileMessage !== undefined && (0,jsx_runtime_namespaceObject.jsx)("span", Object.assign({
            className: "uploader__submitted-file__message"
          }, {
            children: (0,jsx_runtime_namespaceObject.jsx)(Hypermedia, {
              text: fileMessage
            })
          }))]
        })), isDelayedRemove ? (0,jsx_runtime_namespaceObject.jsx)("span", Object.assign({
          className: "uploader__submitted-file__action uploader__submitted-file__action--performed"
        }, {
          children: file.type === "uploading" ? locale["cancelled!"] : locale["removed!"]
        })) : (0,jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
          children: (showRemoveButton || file.type === "uploading") && (0,jsx_runtime_namespaceObject.jsx)("a", Object.assign({
            className: "uploader__submitted-file__action",
            href: "#remove",
            onClick: function onClick(e) {
              e.preventDefault();
              delayedRemove();
            }
          }, {
            children: file.type === "uploading" ? locale.cancel : locale.remove
          }))
        })]
      }))
    }))
  }));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/screens/UploaderMainScreen.scss
var UploaderMainScreen = __nested_webpack_require_34205__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/screens/UploaderMainScreen.scss");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/screens/UploaderMainScreen.scss

      
      
      
      
      
      
      
      
      

var UploaderMainScreen_options = {};

UploaderMainScreen_options.styleTagTransform = (styleTagTransform_default());
UploaderMainScreen_options.setAttributes = (setAttributesWithoutAttributes_default());
UploaderMainScreen_options.insert = function insertIntoTarget(element) {
        if (typeof document !== "undefined") {
          document.head.appendChild(element);
        }
      };
UploaderMainScreen_options.domAPI = (styleDomAPI_default());
UploaderMainScreen_options.insertStyleElement = (insertStyleElement_default());

var UploaderMainScreen_update = injectStylesIntoStyleTag_default()(UploaderMainScreen.default, UploaderMainScreen_options);




       /* harmony default export */ var screens_UploaderMainScreen = (UploaderMainScreen.default && UploaderMainScreen.default.locals ? UploaderMainScreen.default.locals : undefined);

;// CONCATENATED MODULE: ./src/components/widgets/uploader/screens/UploaderMainScreen.tsx






var UploaderMainScreen_UploaderMainScreen = function UploaderMainScreen(_ref) {
  var addFiles = _ref.addFiles,
      submittedFiles = _ref.submittedFiles,
      uploadedFiles = _ref.uploadedFiles,
      options = _ref.options,
      _remove = _ref.remove,
      finalize = _ref.finalize,
      isImageUploader = _ref.isImageUploader;
  var finishedUploading = submittedFiles.every(function (x) {
    return x.type !== "uploading";
  });
  var canFinish = finishedUploading && uploadedFiles.length > 0;
  var locale = options.locale;
  var hasButtons = options.multi || options.showFinishButton;
  return (// Div required to break-out of flex-box layout.
    (0,jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
      className: "uploader__main-screen"
    }, {
      children: [(0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
        className: "uploader__main-screen__file-list"
      }, {
        children: (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
          className: "uploader__main-screen__file-list__inner"
        }, {
          children: submittedFiles.map(function (file) {
            return (0,jsx_runtime_namespaceObject.jsx)(SubmittedFileComponent_SubmittedFileComponent, {
              file: file,
              fileCount: submittedFiles.length,
              locale: locale,
              remove: function remove() {
                return _remove(file.fileIndex);
              },
              showRemoveButton: options.showRemoveButton
            }, file.fileIndex);
          })
        }))
      })), hasButtons && (0,jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
        className: "btn-group"
      }, {
        children: [options.multi && (options.maxFileCount === undefined || submittedFiles.length < options.maxFileCount ? (0,jsx_runtime_namespaceObject.jsx)(UploadButton, {
          options: options,
          text: isImageUploader ? locale.addAnotherImage : locale.addAnotherFile,
          onUpload: addFiles
        }) : (0,jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
          className: "uploader__main-screen__info"
        }, {
          children: [isImageUploader ? locale.maxImagesReached : locale.maxFilesReached, " ", options.maxFileCount]
        }))), options.showFinishButton && (0,jsx_runtime_namespaceObject.jsx)("a", Object.assign({
          href: "#done",
          className: external_classnames_default()("btn btn--primary", {
            disabled: !canFinish
          }),
          onClick: function onClick(e) {
            e.preventDefault();

            if (canFinish) {
              finalize();
            }
          }
        }, {
          children: finishedUploading ? (0,jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
            className: "vcenter hcenter"
          }, {
            children: [locale.finish, " ", locale.finishIcon && (0,jsx_runtime_namespaceObject.jsx)(RightSvg, {
              width: 12,
              className: "ml-2"
            })]
          })) : locale.pleaseWait
        }))]
      }))]
    }))
  );
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/model/SubmittedFile.ts
function isUploadedFile(file) {
  return file.type === "uploaded";
}
;// CONCATENATED MODULE: ./src/modules/common/UseDragDrop.ts
function UseDragDrop_slicedToArray(arr, i) { return UseDragDrop_arrayWithHoles(arr) || UseDragDrop_iterableToArrayLimit(arr, i) || UseDragDrop_unsupportedIterableToArray(arr, i) || UseDragDrop_nonIterableRest(); }

function UseDragDrop_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UseDragDrop_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UseDragDrop_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UseDragDrop_arrayLikeToArray(o, minLen); }

function UseDragDrop_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UseDragDrop_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UseDragDrop_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useDragDrop(acceptFiles) {
  var _useState = (0,compat_namespaceObject.useState)(false),
      _useState2 = UseDragDrop_slicedToArray(_useState, 2),
      isDragging = _useState2[0],
      setIsDragging = _useState2[1];

  var handleDragEnter = function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  var handleDragLeave = function handleDragLeave(e) {
    var _a;

    e.preventDefault();
    e.stopPropagation();

    if (e.relatedTarget !== null && ((_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) === true) {
      return;
    }

    setIsDragging(false);
  };

  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer !== null) {
      e.dataTransfer.dropEffect = "copy";
    }
  };

  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer !== null) {
      var files = Array.from(e.dataTransfer.files);

      if (files.length > 0) {
        acceptFiles(files);
      }
    }
  };

  return {
    isDragging: isDragging,
    onDrop: function onDrop(e) {
      return handleDrop(e);
    },
    onDragOver: function onDragOver(e) {
      return handleDragOver(e);
    },
    onDragEnter: function onDragEnter(e) {
      return handleDragEnter(e);
    },
    onDragLeave: function onDragLeave(e) {
      return handleDragLeave(e);
    }
  };
}
;// CONCATENATED MODULE: ./src/modules/common/FormatUtils.ts
function humanFileSize(bytes) {
  var dp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var reference = bytes;
  var thresh = 1024;
  var sep = " ";
  var r = Math.pow(10, dp);
  var units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  var magnitude = 0;

  if (Math.abs(reference) < thresh) {
    return "".concat(reference).concat(sep).concat(units[magnitude]);
  }

  do {
    bytes /= thresh;
    reference /= thresh;
    ++magnitude;
  } while (Math.round(Math.abs(reference) * r) / r >= thresh && magnitude < units.length - 1);

  var number = bytes.toFixed(dp);
  return number + sep + units[magnitude];
}
;// CONCATENATED MODULE: ./src/components/modal/UploadWidgetResult.ts
var UploadWidgetResult;

(function (UploadWidgetResult) {
  function from(upload, originalFile, editedFile) {
    var _a;

    var calculateFileUrl = function calculateFileUrl() {
      if (editedFile === undefined) {
        // Always return the original file if unedited (could be a ZIP, EXE, etc. so don't run through our image API).
        return upload.url(originalFile.filePath);
      }

      var imageUrl = upload.url(editedFile.filePath, {
        transformation: "image"
      });
      return "".concat(imageUrl, "?w=600&h=600&fit=max&q=70");
    };

    return {
      editedFile: editedFile,
      originalFile: originalFile,
      fileUrl: calculateFileUrl(),
      filePath: (_a = editedFile === null || editedFile === void 0 ? void 0 : editedFile.filePath) !== null && _a !== void 0 ? _a : originalFile.filePath
    };
  }

  UploadWidgetResult.from = from;
})(UploadWidgetResult || (UploadWidgetResult = {}));
;// CONCATENATED MODULE: ./src/modules/common/Rect.ts
var RectWithPos;

(function (RectWithPos) {
  function toCssProps(r) {
    return {
      width: r.width,
      height: r.height,
      left: r.x,
      top: r.y
    };
  }

  RectWithPos.toCssProps = toCssProps;
})(RectWithPos || (RectWithPos = {}));
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss
var ResizableSquare = __nested_webpack_require_34205__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss

      
      
      
      
      
      
      
      
      

var ResizableSquare_options = {};

ResizableSquare_options.styleTagTransform = (styleTagTransform_default());
ResizableSquare_options.setAttributes = (setAttributesWithoutAttributes_default());
ResizableSquare_options.insert = function insertIntoTarget(element) {
        if (typeof document !== "undefined") {
          document.head.appendChild(element);
        }
      };
ResizableSquare_options.domAPI = (styleDomAPI_default());
ResizableSquare_options.insertStyleElement = (insertStyleElement_default());

var ResizableSquare_update = injectStylesIntoStyleTag_default()(ResizableSquare.default, ResizableSquare_options);




       /* harmony default export */ var shapes_ResizableSquare = (ResizableSquare.default && ResizableSquare.default.locals ? ResizableSquare.default.locals : undefined);

;// CONCATENATED MODULE: ./src/components/common/Draggable.tsx
function Draggable_slicedToArray(arr, i) { return Draggable_arrayWithHoles(arr) || Draggable_iterableToArrayLimit(arr, i) || Draggable_unsupportedIterableToArray(arr, i) || Draggable_nonIterableRest(); }

function Draggable_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Draggable_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Draggable_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Draggable_arrayLikeToArray(o, minLen); }

function Draggable_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Draggable_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Draggable_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Draggable = function Draggable(_ref) {
  var boundary = _ref.boundary,
      children = _ref.children,
      className = _ref.className,
      onMoveCallback = _ref.onMove,
      style = _ref.style,
      startingValue = _ref.startingValue,
      geometryMutatorId = _ref.geometryMutatorId;

  var _useState = (0,compat_namespaceObject.useState)(false),
      _useState2 = Draggable_slicedToArray(_useState, 2),
      isDragging = _useState2[0],
      setIsDragging = _useState2[1];

  var _useState3 = (0,compat_namespaceObject.useState)(0),
      _useState4 = Draggable_slicedToArray(_useState3, 2),
      startX = _useState4[0],
      setStartX = _useState4[1];

  var _useState5 = (0,compat_namespaceObject.useState)(0),
      _useState6 = Draggable_slicedToArray(_useState5, 2),
      startY = _useState6[0],
      setStartY = _useState6[1];

  var _useState7 = (0,compat_namespaceObject.useState)(0),
      _useState8 = Draggable_slicedToArray(_useState7, 2),
      lastXDelta = _useState8[0],
      setLastXDelta = _useState8[1];

  var _useState9 = (0,compat_namespaceObject.useState)(0),
      _useState10 = Draggable_slicedToArray(_useState9, 2),
      lastYDelta = _useState10[0],
      setLastYDelta = _useState10[1];

  var _useState11 = (0,compat_namespaceObject.useState)(startingValue),
      _useState12 = Draggable_slicedToArray(_useState11, 2),
      start = _useState12[0],
      setStart = _useState12[1];

  var clip = function clip(min, max, value) {
    return Math.min(Math.max(value, min), max);
  };

  var clipDimension = function clipDimension(length, value) {
    return clip(length * -1, length, value);
  };

  var setPositionStart = function setPositionStart(e) {
    setStartX(e.pageX);
    setStartY(e.pageY);
  };

  var getPositionDelta = function getPositionDelta(e) {
    return {
      x: e.pageX - startX + lastXDelta,
      y: e.pageY - startY + lastYDelta
    };
  };

  var onDown = function onDown(e) {
    e.stopPropagation(); // Required so that if a draggable element exists within another draggable element, when the child element is dragged, the parent element is not.

    e.target.setPointerCapture(e.pointerId);
    setIsDragging(true);
    setPositionStart(e);

    if (startingValue.lastUpdatedBy !== geometryMutatorId) {
      setLastXDelta(0);
      setLastYDelta(0);
      setStart(startingValue);
    }
  };

  var onUp = function onUp(e) {
    setIsDragging(false);
    e.target.releasePointerCapture(e.pointerId);

    var _getPositionDelta = getPositionDelta(e),
        x = _getPositionDelta.x,
        y = _getPositionDelta.y;

    setLastYDelta(clipDimension(boundary.height, y));
    setLastXDelta(clipDimension(boundary.width, x));
  };

  var onMove = function onMove(e) {
    if (!isDragging) {
      return;
    }

    var _getPositionDelta2 = getPositionDelta(e),
        x = _getPositionDelta2.x,
        y = _getPositionDelta2.y;

    onMoveCallback(x, y, start);
  };

  var onTouchStart = function onTouchStart(e) {
    // Cancel scrolling on mobile, which causes dragging to immediately halt after it's started.
    e.preventDefault();
  };

  return (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
    className: className,
    style: style,
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onUp,
    onTouchStart: onTouchStart
  }, {
    children: children
  }));
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.tsx
function ResizableSquare_slicedToArray(arr, i) { return ResizableSquare_arrayWithHoles(arr) || ResizableSquare_iterableToArrayLimit(arr, i) || ResizableSquare_unsupportedIterableToArray(arr, i) || ResizableSquare_nonIterableRest(); }

function ResizableSquare_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ResizableSquare_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ResizableSquare_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ResizableSquare_arrayLikeToArray(o, minLen); }

function ResizableSquare_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ResizableSquare_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ResizableSquare_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var CornerDragger = function CornerDragger(_ref) {
  var boundary = _ref.boundary,
      corner = _ref.corner,
      geometry = _ref.geometry,
      setGeometry = _ref.setGeometry;
  return (0,jsx_runtime_namespaceObject.jsx)(Draggable, {
    className: "uploader__resizable-square__".concat(corner),
    boundary: boundary,
    geometryMutatorId: corner,
    startingValue: geometry,
    onMove: function onMove(x, y, g) {
      return setGeometry(corner, {
        x: corner === "nw" || corner === "sw" ? g.x + x : g.x,
        y: corner === "nw" || corner === "ne" ? g.y + y : g.y,
        width: corner === "nw" || corner === "sw" ? g.width - x : g.width + x,
        height: corner === "nw" || corner === "ne" ? g.height - y : g.height + y
      });
    }
  });
};

var ResizableSquare_ResizableSquare = function ResizableSquare(_ref2) {
  var boundary = _ref2.boundary,
      ratio = _ref2.ratio,
      onResized = _ref2.onResized,
      children = _ref2.children;
  var minSize = 50;
  var adjustedBoundary = {
    width: boundary.width - minSize,
    height: boundary.height - minSize
  };

  var reRatio = function reRatio(g, fixed) {
    if (ratio === undefined) {
      return Object.assign(Object.assign({}, g), {
        lastUpdatedBy: fixed
      });
    }

    var width = Math.min(g.height * ratio, g.width);
    var height = width / ratio;
    return {
      lastUpdatedBy: fixed,
      height: height,
      width: width,
      x: fixed === "ne" || fixed === "se" ? g.x : fixed === "center" ? g.x + g.width / 2 - width / 2 : g.x + (g.width - width),
      y: fixed === "sw" || fixed === "se" ? g.y : fixed === "center" ? g.y + g.height / 2 - height / 2 : g.y + (g.height - height)
    };
  };

  var clip = function clip(g) {
    var x = Math.min(boundary.width - minSize, Math.max(0, g.x)); // x is clipped, but width may continue to grow. We should deduct from width the amount that's clipped?

    var y = Math.min(boundary.height - minSize, Math.max(0, g.y));
    var xClip = Math.min(0, g.x);
    var yClip = Math.min(0, g.y);
    return {
      x: x,
      y: y,
      width: Math.max(minSize, Math.min(g.width + xClip, boundary.width - x)),
      height: Math.max(minSize, Math.min(g.height + yClip, boundary.height - y))
    };
  };

  var clipAndReRatio = function clipAndReRatio(g, fixed) {
    return reRatio(clip(g), fixed);
  };

  var calculateInitialGeometry = function calculateInitialGeometry() {
    return clipAndReRatio({
      x: 0,
      y: 0,
      width: boundary.width,
      height: boundary.height
    }, "center");
  };

  var _useState = (0,compat_namespaceObject.useState)(calculateInitialGeometry),
      _useState2 = ResizableSquare_slicedToArray(_useState, 2),
      geometry = _useState2[0],
      setGeometryUnsafe = _useState2[1];

  var setGeometry = function setGeometry(corner, set) {
    return setGeometryUnsafe(clipAndReRatio(set, corner));
  };

  var onGeometryChange = function onGeometryChange() {
    var isSameAsBoundary = geometry.x === 0 && geometry.y === 0 && geometry.width === boundary.width && geometry.height === boundary.height;
    onResized(isSameAsBoundary ? undefined : {
      geometry: geometry,
      boundary: boundary
    });
  };

  (0,compat_namespaceObject.useLayoutEffect)(onGeometryChange, [geometry]);
  (0,compat_namespaceObject.useLayoutEffect)(function () {
    setGeometryUnsafe(calculateInitialGeometry());
    onGeometryChange();
  }, [boundary]);
  return (0,jsx_runtime_namespaceObject.jsxs)(Draggable, Object.assign({
    className: "uploader__resizable-square",
    boundary: adjustedBoundary,
    style: RectWithPos.toCssProps(geometry),
    geometryMutatorId: "center",
    startingValue: geometry,
    onMove: function onMove(x, y, g) {
      return setGeometry("center", {
        x: g.x + x,
        y: g.y + y,
        width: g.width,
        height: g.height
      });
    }
  }, {
    children: [children, (0,jsx_runtime_namespaceObject.jsx)(CornerDragger, {
      corner: "nw",
      setGeometry: setGeometry,
      geometry: geometry,
      boundary: adjustedBoundary
    }), (0,jsx_runtime_namespaceObject.jsx)(CornerDragger, {
      corner: "ne",
      setGeometry: setGeometry,
      geometry: geometry,
      boundary: adjustedBoundary
    }), (0,jsx_runtime_namespaceObject.jsx)(CornerDragger, {
      corner: "se",
      setGeometry: setGeometry,
      geometry: geometry,
      boundary: adjustedBoundary
    }), (0,jsx_runtime_namespaceObject.jsx)(CornerDragger, {
      corner: "sw",
      setGeometry: setGeometry,
      geometry: geometry,
      boundary: adjustedBoundary
    })]
  }));
};
;// CONCATENATED MODULE: ./src/modules/MimeUtils.ts
var isEditableImage = function isEditableImage(originalImage) {
  return originalImage.mime.toLowerCase().startsWith("image/");
};
/**
 * Returns 'true' if the file can be rendered as an image (via our Image Processing API), but image editing options
 * should not be shown.
 *
 * IMPORTANT:
 * Must be mutually exclusive with 'isEditableImage' (there's several parts of the code that assume this).
 */

var isReadOnlyImage = function isReadOnlyImage(originalImage) {
  var mime = originalImage.mime.toLowerCase();
  return mime.startsWith("application/pdf") || mime.startsWith("video/");
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/modules/PreviewImageUrlCalculator.ts
 // Do not allow SVGs, as these may include scripts, so a user may unwittingly upload an SVG that captures their own session information.

var nativelySupportedImages = ["image/jpeg", "image/gif", "image/png", "image/webp"];
function calculateImagePreviewUrl(originalImage) {
  if (isImageNativelySupported(originalImage)) {
    return {
      url: URL.createObjectURL(originalImage.file),
      external: false,
      urlForDimensions: undefined
    };
  } // We use WebP to support transparency, e.g. in SVGs.
  // and use fit=max to enlarge SVGs (as they typically come out very small
  // if left in their native dimensions).


  var enlarge = requiresServeSideEnlargement(originalImage);
  var imageUrl = originalImage.fileUrl.replace("/raw/", "/image/");
  var maxDimension = 1000;
  return {
    url: "".concat(imageUrl, "?f=webp&f2=jpg").concat(enlarge ? "&w=".concat(maxDimension, "&h=").concat(maxDimension, "&fit=max") : ""),
    external: true,
    urlForDimensions: enlarge ? "".concat(imageUrl, "?f=jpg") : undefined
  };
}

function isImageNativelySupported(originalImage) {
  return nativelySupportedImages.includes(originalImage.mime);
}
/**
 * SVGs can come out very small natively, but can obviously be enlarged without affecting quality, so we enlarge them
 * server-side for the previews.
 * @param originalImage
 */


function requiresServeSideEnlargement(originalImage) {
  return isReadOnlyImage(originalImage) || originalImage.mime === "image/svg+xml";
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/Spinner.scss
var Spinner = __nested_webpack_require_34205__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/Spinner.scss");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/Spinner.scss

      
      
      
      
      
      
      
      
      

var Spinner_options = {};

Spinner_options.styleTagTransform = (styleTagTransform_default());
Spinner_options.setAttributes = (setAttributesWithoutAttributes_default());
Spinner_options.insert = function insertIntoTarget(element) {
        if (typeof document !== "undefined") {
          document.head.appendChild(element);
        }
      };
Spinner_options.domAPI = (styleDomAPI_default());
Spinner_options.insertStyleElement = (insertStyleElement_default());

var Spinner_update = injectStylesIntoStyleTag_default()(Spinner.default, Spinner_options);




       /* harmony default export */ var editors_Spinner = (Spinner.default && Spinner.default.locals ? Spinner.default.locals : undefined);

;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/Spinner.tsx
function Spinner_slicedToArray(arr, i) { return Spinner_arrayWithHoles(arr) || Spinner_iterableToArrayLimit(arr, i) || Spinner_unsupportedIterableToArray(arr, i) || Spinner_nonIterableRest(); }

function Spinner_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Spinner_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Spinner_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Spinner_arrayLikeToArray(o, minLen); }

function Spinner_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Spinner_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Spinner_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Spinner_Spinner = function Spinner() {
  var _a, _b;

  var _getElementDimensions = getElementDimensionsOnResize(true, []),
      _getElementDimensions2 = Spinner_slicedToArray(_getElementDimensions, 2),
      dimensions = _getElementDimensions2[0],
      containerRef = _getElementDimensions2[1];

  var relativeSize = 0.5;
  var lowestDim = Math.min((_a = dimensions === null || dimensions === void 0 ? void 0 : dimensions.width) !== null && _a !== void 0 ? _a : 0, (_b = dimensions === null || dimensions === void 0 ? void 0 : dimensions.height) !== null && _b !== void 0 ? _b : 0);
  var lowestDimCss = "".concat(Math.round(lowestDim * relativeSize), "px");
  return (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
    "class": "spinner__container",
    ref: containerRef
  }, {
    children: (0,jsx_runtime_namespaceObject.jsx)("div", {
      className: "spinner",
      style: {
        width: lowestDimCss,
        height: lowestDimCss
      }
    })
  }));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss
var ImageEditorLayout = __nested_webpack_require_34205__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss

      
      
      
      
      
      
      
      
      

var ImageEditorLayout_options = {};

ImageEditorLayout_options.styleTagTransform = (styleTagTransform_default());
ImageEditorLayout_options.setAttributes = (setAttributesWithoutAttributes_default());
ImageEditorLayout_options.insert = function insertIntoTarget(element) {
        if (typeof document !== "undefined") {
          document.head.appendChild(element);
        }
      };
ImageEditorLayout_options.domAPI = (styleDomAPI_default());
ImageEditorLayout_options.insertStyleElement = (insertStyleElement_default());

var ImageEditorLayout_update = injectStylesIntoStyleTag_default()(ImageEditorLayout.default, ImageEditorLayout_options);




       /* harmony default export */ var editors_ImageEditorLayout = (ImageEditorLayout.default && ImageEditorLayout.default.locals ? ImageEditorLayout.default.locals : undefined);

;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageEditorLayout.tsx
function ImageEditorLayout_slicedToArray(arr, i) { return ImageEditorLayout_arrayWithHoles(arr) || ImageEditorLayout_iterableToArrayLimit(arr, i) || ImageEditorLayout_unsupportedIterableToArray(arr, i) || ImageEditorLayout_nonIterableRest(); }

function ImageEditorLayout_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ImageEditorLayout_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ImageEditorLayout_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ImageEditorLayout_arrayLikeToArray(o, minLen); }

function ImageEditorLayout_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ImageEditorLayout_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ImageEditorLayout_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ImageEditorLayout_ImageEditorLayout = function ImageEditorLayout(_ref) {
  var actions = _ref.actions,
      originalImage = _ref.originalImage,
      header = _ref.header,
      image = _ref.image,
      modal = _ref.modal;

  var _useState = (0,compat_namespaceObject.useState)(""),
      _useState2 = ImageEditorLayout_slicedToArray(_useState, 2),
      imageUrl = _useState2[0],
      setImageUrl = _useState2[1]; // Used to determine whether to show the image element or the spinner.


  var _useState3 = (0,compat_namespaceObject.useState)(false),
      _useState4 = ImageEditorLayout_slicedToArray(_useState3, 2),
      imageLoaded = _useState4[0],
      setImageLoaded = _useState4[1]; // Used to track if the image element is 'loaded' per its onload state.


  var _useState5 = (0,compat_namespaceObject.useState)(false),
      _useState6 = ImageEditorLayout_slicedToArray(_useState5, 2),
      imageLoadedReal = _useState6[0],
      setImageLoadedReal = _useState6[1];

  var _useState7 = (0,compat_namespaceObject.useState)("uploader__image-editor__image-".concat(Math.round(Math.random() * 100000))),
      _useState8 = ImageEditorLayout_slicedToArray(_useState7, 1),
      containerId = _useState8[0];

  var _getElementDimensions = getElementDimensionsOnParentResize(imageLoadedReal, [imageUrl, imageLoaded]),
      _getElementDimensions2 = ImageEditorLayout_slicedToArray(_getElementDimensions, 3),
      imgDimensions = _getElementDimensions2[0],
      imgRef = _getElementDimensions2[1],
      containerRef = _getElementDimensions2[2]; // When multiple images are uploaded, the same component instance is used, so we need to update the image with an effect:


  (0,compat_namespaceObject.useLayoutEffect)(function () {
    var _calculateImagePrevie = calculateImagePreviewUrl(originalImage),
        url = _calculateImagePrevie.url,
        external = _calculateImagePrevie.external;

    setImageUrl(url);
    setImageLoaded(!external); // Delay for displaying a local image is very short, so don't flash the loader to the user.

    setImageLoadedReal(false); // Image will be unloaded to being with, as we're changing its "src" attribute here.
  }, [originalImage.fileUrl]);
  return (0,jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
    className: "uploader__image-editor"
  }, {
    children: [(0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
      className: external_classnames_default()({
        "uploader__image-editor__header": header !== undefined,
        "uploader__image-editor__header--empty-non-modal": header === undefined && !modal
      })
    }, {
      children: header
    })), (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
      className: "uploader__image-editor__image",
      ref: containerRef
    }, {
      children: (0,jsx_runtime_namespaceObject.jsxs)("div", Object.assign({
        className: "uploader__image-editor__image-padding"
      }, {
        children: [!imageLoaded && (0,jsx_runtime_namespaceObject.jsx)(Spinner_Spinner, {}), (0,jsx_runtime_namespaceObject.jsx)("img", {
          id: containerId,
          src: imageUrl,
          onLoad: function onLoad() {
            setImageLoaded(true);
            setImageLoadedReal(true);
          },
          className: "uploader__image-editor__image-inner",
          style: imageLoaded ? {} : {
            display: "none"
          },
          ref: imgRef,
          draggable: false
        }), imgDimensions !== undefined && imageLoaded && image !== undefined && image({
          imgDimensions: imgDimensions,
          imageUrl: imageUrl
        })]
      }))
    })), (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
      className: "uploader__image-editor__actions btn-group btn-group--space"
    }, {
      children: actions
    }))]
  }));
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageEditorHeader.tsx

var getImageEditorHeader = function getImageEditorHeader(_ref) {
  var imageCount = _ref.imageCount,
      imageIndex = _ref.imageIndex,
      options = _ref.options;
  var locale = options.locale;
  var multi = options.multi ? {
    imageIndex: imageIndex,
    imageCount: imageCount
  } : undefined;
  return multi === undefined || multi.imageCount === 1 ? undefined : (0,jsx_runtime_namespaceObject.jsxs)("span", Object.assign({
    className: "text-secondary"
  }, {
    children: [locale.image, " ", multi.imageIndex + 1, " ", locale.of, " ", multi.imageCount]
  }));
};
;// CONCATENATED MODULE: ./src/modules/FormUtils.ts
function FormUtils_slicedToArray(arr, i) { return FormUtils_arrayWithHoles(arr) || FormUtils_iterableToArrayLimit(arr, i) || FormUtils_unsupportedIterableToArray(arr, i) || FormUtils_nonIterableRest(); }

function FormUtils_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function FormUtils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return FormUtils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FormUtils_arrayLikeToArray(o, minLen); }

function FormUtils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function FormUtils_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function FormUtils_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var transientFlagTimeout = 1500;
function useTransientFlag() {
  var _useState = (0,compat_namespaceObject.useState)(undefined),
      _useState2 = FormUtils_slicedToArray(_useState, 2),
      onTimeout = _useState2[0],
      setOnTimeout = _useState2[1];

  var flag = onTimeout !== undefined;
  (0,compat_namespaceObject.useEffect)(function () {
    if (onTimeout !== undefined) {
      var handle = setTimeout(function () {
        setOnTimeout(undefined);
        onTimeout();
      }, transientFlagTimeout);
      return function () {
        return clearTimeout(handle);
      };
    }

    return function () {};
  }, [flag]);
  return [flag, function (onTimeout) {
    return setOnTimeout(onTimeout !== null && onTimeout !== void 0 ? onTimeout : function () {});
  }];
}
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/buttons/SubmitButton.tsx
function SubmitButton_slicedToArray(arr, i) { return SubmitButton_arrayWithHoles(arr) || SubmitButton_iterableToArrayLimit(arr, i) || SubmitButton_unsupportedIterableToArray(arr, i) || SubmitButton_nonIterableRest(); }

function SubmitButton_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SubmitButton_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SubmitButton_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SubmitButton_arrayLikeToArray(o, minLen); }

function SubmitButton_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SubmitButton_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SubmitButton_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var SubmitButton = function SubmitButton(_ref) {
  var busyText = _ref.busyText,
      idleText = _ref.idleText,
      locale = _ref.locale,
      onSubmit = _ref.onSubmit,
      showIcon = _ref.showIcon;

  var _useState = (0,compat_namespaceObject.useState)(false),
      _useState2 = SubmitButton_slicedToArray(_useState, 2),
      isSubmitting = _useState2[0],
      setIsSubmitting = _useState2[1];

  var _useTransientFlag = useTransientFlag(),
      _useTransientFlag2 = SubmitButton_slicedToArray(_useTransientFlag, 2),
      isError = _useTransientFlag2[0],
      setIsError = _useTransientFlag2[1];

  var isDisabled = isSubmitting || isError;

  var submitAsync = function submitAsync(e) {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit().then(function () {}, function (e) {
      console.error(e);
      setIsError();
      setIsSubmitting(false);
    });
  };

  return (0,jsx_runtime_namespaceObject.jsxs)("button", Object.assign({
    disabled: isDisabled,
    onClick: submitAsync,
    className: external_classnames_default()("btn btn--primary", {
      disabled: isDisabled
    })
  }, {
    children: [isSubmitting ? busyText : isError ? locale["error!"] : idleText, " ", showIcon && (0,jsx_runtime_namespaceObject.jsx)(RightSvg, {
      width: 12,
      className: "ml-2"
    })]
  }));
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageEditorButtons.tsx



function ImageEditorButtons_await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function ImageEditorButtons_async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

var ImageEditorButtons = function ImageEditorButtons(_ref) {
  var options = _ref.options,
      onFinish = _ref.onFinish;
  var locale = options.locale;
  return (0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
    children: [(0,jsx_runtime_namespaceObject.jsx)("button", Object.assign({
      onClick: function onClick() {
        onFinish(false).then(function () {}, function (e) {
          console.error("Unable to cancel upload.", e);
        });
      },
      className: "btn"
    }, {
      children: locale.cancelInPreviewWindow
    })), (0,jsx_runtime_namespaceObject.jsx)(SubmitButton, {
      onSubmit: ImageEditorButtons_async(function () {
        return onFinish(true);
      }),
      locale: locale,
      idleText: locale["continue"],
      busyText: locale.pleaseWait,
      showIcon: false
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageCropper.scss
var ImageCropper = __nested_webpack_require_34205__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageCropper.scss");
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageCropper.scss

      
      
      
      
      
      
      
      
      

var ImageCropper_options = {};

ImageCropper_options.styleTagTransform = (styleTagTransform_default());
ImageCropper_options.setAttributes = (setAttributesWithoutAttributes_default());
ImageCropper_options.insert = function insertIntoTarget(element) {
        if (typeof document !== "undefined") {
          document.head.appendChild(element);
        }
      };
ImageCropper_options.domAPI = (styleDomAPI_default());
ImageCropper_options.insertStyleElement = (insertStyleElement_default());

var ImageCropper_update = injectStylesIntoStyleTag_default()(ImageCropper.default, ImageCropper_options);




       /* harmony default export */ var editors_ImageCropper = (ImageCropper.default && ImageCropper.default.locals ? ImageCropper.default.locals : undefined);

;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageCropper.tsx
function ImageCropper_await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function _empty() {}

function _invokeIgnored(body) {
  var result = body();

  if (result && result.then) {
    return result.then(_empty);
  }
}

function ImageCropper_async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

function ImageCropper_slicedToArray(arr, i) { return ImageCropper_arrayWithHoles(arr) || ImageCropper_iterableToArrayLimit(arr, i) || ImageCropper_unsupportedIterableToArray(arr, i) || ImageCropper_nonIterableRest(); }

function ImageCropper_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ImageCropper_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ImageCropper_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ImageCropper_arrayLikeToArray(o, minLen); }

function ImageCropper_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ImageCropper_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ImageCropper_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function makeCropJson(originalFilePathRelative, geometry, boundary, nativeImageSize) {
  var scale = nativeImageSize.width / boundary.width;
  return {
    inputPath: originalFilePathRelative,
    pipeline: {
      steps: [{
        geometry: {
          offset: {
            x: Math.round(geometry.x * scale),
            y: Math.round(geometry.y * scale)
          },
          size: {
            width: Math.round(geometry.width * scale),
            height: Math.round(geometry.height * scale),
            type: "widthxheight!"
          }
        },
        type: "crop"
      }]
    }
  };
}

var ImageCropper_ImageCropper = function ImageCropper(props) {
  var options = props.options,
      originalImage = props.originalImage,
      upload = props.upload,
      onFinish = props.onFinish;

  var _useState = (0,compat_namespaceObject.useState)(undefined),
      _useState2 = ImageCropper_slicedToArray(_useState, 2),
      geometry = _useState2[0],
      setGeometry = _useState2[1];

  var submit = ImageCropper_async(function (keep) {
    var _a;

    return _invokeIgnored(function () {
      if (!keep || geometry === undefined) {
        onFinish(keep, undefined);
      } else {
        return ImageCropper_await(new Promise(function (resolve) {
          var _a;

          var img = new Image();
          var imgInfo = calculateImagePreviewUrl(originalImage);

          img.onload = function () {
            resolve({
              width: img.naturalWidth,
              height: img.naturalHeight
            });
          };

          img.src = (_a = imgInfo.urlForDimensions) !== null && _a !== void 0 ? _a : imgInfo.url;
        }), function (nativeImageSize) {
          var originalImageUploadedName = originalImage.filePath.substring(originalImage.filePath.lastIndexOf("/") + 1);
          var cropJson = makeCropJson(originalImageUploadedName, geometry.geometry, geometry.boundary, nativeImageSize);
          var blob = new Blob([JSON.stringify(cropJson)], {
            type: "application/json"
          });
          return ImageCropper_await(upload.uploadFile({
            name: "".concat((_a = originalImage.originalFileName) !== null && _a !== void 0 ? _a : "image", ".crop"),
            type: blob.type,
            size: blob.size,
            slice: function slice(start, end) {
              return blob.slice(start, end);
            }
          }, {
            path: options.editor.images.cropFilePath(originalImage)
          }), function (editedFile) {
            onFinish(keep, editedFile);
          });
        });
      }
    });
  });

  return (0,jsx_runtime_namespaceObject.jsx)(ImageEditorLayout_ImageEditorLayout, {
    modal: options.layout === "modal",
    header: getImageEditorHeader(props),
    actions: (0,jsx_runtime_namespaceObject.jsx)(ImageEditorButtons, {
      options: options,
      onFinish: submit
    }),
    image: function image(_ref) {
      var imgDimensions = _ref.imgDimensions,
          imageUrl = _ref.imageUrl;

      var _a, _b, _c, _d;

      return (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
        className: "uploader__image-cropper__overlay",
        style: RectWithPos.toCssProps(imgDimensions)
      }, {
        children: (0,jsx_runtime_namespaceObject.jsx)(ResizableSquare_ResizableSquare, Object.assign({
          boundary: imgDimensions,
          onResized: setGeometry,
          ratio: options.editor.images.cropRatio
        }, {
          children: (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
            className: external_classnames_default()("uploader__image-cropper__clip", {
              "uploader__image-cropper__clip--circular": options.editor.images.cropShape === "circ"
            }),
            style: {
              width: (_a = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.width) !== null && _a !== void 0 ? _a : imgDimensions.width,
              height: (_b = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.height) !== null && _b !== void 0 ? _b : imgDimensions.height
            }
          }, {
            children: (0,jsx_runtime_namespaceObject.jsx)("img", {
              src: imageUrl,
              draggable: false,
              style: {
                width: imgDimensions.width,
                height: imgDimensions.height,
                transform: "translateX(".concat(((_c = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.x) !== null && _c !== void 0 ? _c : 0) * -1, "px) translateY(").concat(((_d = geometry === null || geometry === void 0 ? void 0 : geometry.geometry.y) !== null && _d !== void 0 ? _d : 0) * -1, "px)")
              }
            })
          }))
        }))
      }));
    },
    originalImage: originalImage
  });
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImagePreview.tsx






function ImagePreview_await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function ImagePreview_async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

var ImagePreview = function ImagePreview(props) {
  var options = props.options,
      originalImage = props.originalImage,
      onFinish = props.onFinish;

  var submit = ImagePreview_async(function (keep) {
    onFinish(keep);
    return ImagePreview_await();
  });

  return (0,jsx_runtime_namespaceObject.jsx)(ImageEditorLayout_ImageEditorLayout, {
    modal: options.layout === "modal",
    header: getImageEditorHeader(props),
    actions: (0,jsx_runtime_namespaceObject.jsx)(ImageEditorButtons, {
      options: options,
      onFinish: submit
    }),
    originalImage: originalImage
  });
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/components/editors/ImageEditor.tsx





function canCropImage(options, originalImage) {
  return options.editor.images.crop && isEditableImage(originalImage);
}

var ImageEditor = function ImageEditor(_ref) {
  var imageCount = _ref.imageCount,
      imageIndex = _ref.imageIndex,
      originalImage = _ref.originalImage,
      upload = _ref.upload,
      onImageEdited = _ref.onImageEdited,
      options = _ref.options;
  // Currently we only provide a cropper: it would be good to provide rotation in the future, too, and we can switch between
  // them here.
  return canCropImage(options, originalImage) ? (0,jsx_runtime_namespaceObject.jsx)(ImageCropper_ImageCropper, {
    imageCount: imageCount,
    imageIndex: imageIndex,
    options: options,
    onFinish: onImageEdited,
    upload: upload,
    originalImage: originalImage
  }) : (0,jsx_runtime_namespaceObject.jsx)(ImagePreview, {
    imageCount: imageCount,
    imageIndex: imageIndex,
    options: options,
    onFinish: function onFinish(keep) {
      return onImageEdited(keep, undefined);
    },
    originalImage: originalImage
  });
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/screens/modules/UseImageList.ts
function UseImageList_toConsumableArray(arr) { return UseImageList_arrayWithoutHoles(arr) || UseImageList_iterableToArray(arr) || UseImageList_unsupportedIterableToArray(arr) || UseImageList_nonIterableSpread(); }

function UseImageList_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UseImageList_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function UseImageList_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return UseImageList_arrayLikeToArray(arr); }

function UseImageList_slicedToArray(arr, i) { return UseImageList_arrayWithHoles(arr) || UseImageList_iterableToArrayLimit(arr, i) || UseImageList_unsupportedIterableToArray(arr, i) || UseImageList_nonIterableRest(); }

function UseImageList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UseImageList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UseImageList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UseImageList_arrayLikeToArray(o, minLen); }

function UseImageList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UseImageList_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UseImageList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useImageList(images) {
  var _useState = (0,compat_namespaceObject.useState)(images[0]),
      _useState2 = UseImageList_slicedToArray(_useState, 2),
      currentImage = _useState2[0],
      setCurrentImage = _useState2[1];

  var _useState3 = (0,compat_namespaceObject.useState)(0),
      _useState4 = UseImageList_slicedToArray(_useState3, 2),
      imageIndex = _useState4[0],
      setImageIndex = _useState4[1];

  var _useState5 = (0,compat_namespaceObject.useState)(images.length),
      _useState6 = UseImageList_slicedToArray(_useState5, 2),
      imageCount = _useState6[0],
      setImageCount = _useState6[1];

  var editingFiles = images.map(function (x) {
    return x.uploadedFile.filePath;
  });
  var currentFile = currentImage.uploadedFile.filePath; // Prevents image being swapped-out mid-edit if an upload that was started _before_ this image finishes _after_ this
  // image has uploaded.

  (0,compat_namespaceObject.useLayoutEffect)(function () {
    var hasFinishedEditing = !editingFiles.includes(currentFile);

    if (hasFinishedEditing) {
      setCurrentImage(images[0]);
      setImageIndex(function (i) {
        return i + 1;
      });
    }

    setImageCount(imageIndex + images.length);
  }, [imageIndex, currentFile].concat(UseImageList_toConsumableArray(editingFiles)));
  return {
    currentFile: currentFile,
    imageCount: imageCount,
    imageIndex: imageIndex,
    currentImage: currentImage
  };
}
;// CONCATENATED MODULE: ./src/components/widgets/uploader/screens/UploaderImageListEditor.tsx



var UploaderImageListEditor = function UploaderImageListEditor(_ref) {
  var images = _ref.images,
      _onImageEdited = _ref.onImageEdited,
      upload = _ref.upload,
      options = _ref.options;

  var _useImageList = useImageList(images),
      currentFile = _useImageList.currentFile,
      imageCount = _useImageList.imageCount,
      imageIndex = _useImageList.imageIndex,
      currentImage = _useImageList.currentImage;

  return (0,jsx_runtime_namespaceObject.jsx)(ImageEditor, {
    options: options,
    imageCount: imageCount,
    imageIndex: imageIndex,
    originalImage: currentImage.uploadedFile,
    onImageEdited: function onImageEdited(keep, editedFile) {
      return _onImageEdited(keep, editedFile, currentImage.fileIndex);
    },
    upload: upload
  }, currentFile);
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/screens/modules/UseShowImageEditor.ts
function UseShowImageEditor_slicedToArray(arr, i) { return UseShowImageEditor_arrayWithHoles(arr) || UseShowImageEditor_iterableToArrayLimit(arr, i) || UseShowImageEditor_unsupportedIterableToArray(arr, i) || UseShowImageEditor_nonIterableRest(); }

function UseShowImageEditor_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UseShowImageEditor_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UseShowImageEditor_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UseShowImageEditor_arrayLikeToArray(o, minLen); }

function UseShowImageEditor_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UseShowImageEditor_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UseShowImageEditor_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useShowImageEditor(pendingImages, onFileUploadDelay) {
  var _useState = (0,compat_namespaceObject.useState)(false),
      _useState2 = UseShowImageEditor_slicedToArray(_useState, 2),
      showImageScreen = _useState2[0],
      setShowImageScreen = _useState2[1];

  var _useState3 = (0,compat_namespaceObject.useState)(null),
      _useState4 = UseShowImageEditor_slicedToArray(_useState3, 2),
      showImageScreenTimeout = _useState4[0],
      setShowImageScreenTimeout = _useState4[1];

  (0,compat_namespaceObject.useEffect)(function () {
    if (pendingImages.length > 0) {
      var timeout = setTimeout(function () {
        setShowImageScreen(true);
      }, onFileUploadDelay);
      setShowImageScreenTimeout(timeout);
      return function () {
        return clearTimeout(timeout);
      };
    }

    if (showImageScreen) {
      setShowImageScreen(false);
    }

    if (showImageScreenTimeout !== null) {
      clearTimeout(showImageScreenTimeout);
      setShowImageScreenTimeout(null);
    }
  }, [pendingImages.length, showImageScreen]);
  return showImageScreen;
}
;// CONCATENATED MODULE: ./src/components/widgets/uploader/UploadWidget.tsx
function UploadWidget_await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
}

function _continue(value, then) {
  return value && value.then ? value.then(then) : then(value);
}

function UploadWidget_async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function UploadWidget_toConsumableArray(arr) { return UploadWidget_arrayWithoutHoles(arr) || UploadWidget_iterableToArray(arr) || UploadWidget_unsupportedIterableToArray(arr) || UploadWidget_nonIterableSpread(); }

function UploadWidget_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UploadWidget_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function UploadWidget_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return UploadWidget_arrayLikeToArray(arr); }

function UploadWidget_slicedToArray(arr, i) { return UploadWidget_arrayWithHoles(arr) || UploadWidget_iterableToArrayLimit(arr, i) || UploadWidget_unsupportedIterableToArray(arr, i) || UploadWidget_nonIterableRest(); }

function UploadWidget_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UploadWidget_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UploadWidget_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UploadWidget_arrayLikeToArray(o, minLen); }

function UploadWidget_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UploadWidget_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UploadWidget_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UploadWidget_rest =  false || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
















function isValidMimeType(allowedMimeTypes, actualMimeType) {
  if (allowedMimeTypes === undefined || allowedMimeTypes.length === 0) {
    return true;
  }

  var normalize = function normalize(x) {
    return x.trim().toLowerCase();
  };

  var actualNormalized = normalize(actualMimeType);
  return allowedMimeTypes.some(function (x) {
    var requiredNormalized = normalize(x);
    return requiredNormalized === actualNormalized || requiredNormalized.endsWith("*") && actualNormalized.startsWith(requiredNormalized.substring(0, requiredNormalized.length - 1));
  });
}

var UploadWidget = function UploadWidget(_ref) {
  var resolve = _ref.resolve,
      options = _ref.options,
      upload = _ref.upload;

  var _a;

  var _useState = (0,compat_namespaceObject.useState)(0),
      _useState2 = UploadWidget_slicedToArray(_useState, 2),
      setNextSparseFileIndex = _useState2[1];

  var _useState3 = (0,compat_namespaceObject.useState)(true),
      _useState4 = UploadWidget_slicedToArray(_useState3, 2),
      isInitialUpdate = _useState4[0],
      setIsInitialUpdate = _useState4[1];

  var _useState5 = (0,compat_namespaceObject.useState)({}),
      _useState6 = UploadWidget_slicedToArray(_useState5, 2),
      submittedFiles = _useState6[0],
      setSubmittedFiles = _useState6[1];

  var submittedFileList = Object.values(submittedFiles).filter(isDefined);
  var uploadedFiles = submittedFileList.filter(isUploadedFile);
  var onFileUploadDelay = progressWheelDelay + (progressWheelVanish - 100); // Allows the animation to finish before closing modal. We add some time to allow the wheel to fade out.

  var multi = options.multi,
      tags = options.tags,
      metadata = options.metadata,
      path = options.path;
  var uploadWidgetResult = uploadedFiles.map(function (x) {
    return UploadWidgetResult.from(upload, x.uploadedFile, x.editedFile);
  });
  var canEditImages = options.editor.images.crop;
  var canPreviewImages = options.editor.images.preview;
  var pendingImages = uploadedFiles.filter(function (x) {
    return !x.isSubmitted && ((canEditImages || canPreviewImages) && isEditableImage(x.uploadedFile) || canPreviewImages && isReadOnlyImage(x.uploadedFile));
  });
  var showImageEditor = useShowImageEditor(pendingImages, onFileUploadDelay);

  var onImageSubmitted = function onImageSubmitted(keep, editedFile, sparseFileIndex) {
    if (!keep) {
      removeSubmittedFile(sparseFileIndex);
    } else {
      updateFile(sparseFileIndex, "uploaded", function (file) {
        return Object.assign(Object.assign({}, file), {
          editedFile: editedFile,
          isSubmitted: true
        });
      });
    }
  };

  var finalize = function finalize() {
    resolve(uploadWidgetResult);
  }; // We want to use a 'layout effect' since if the cropper has just been closed in 'single file mode', we want to
  // immediately resolve the uploader, rather than momentarily showing the main screen.


  (0,compat_namespaceObject.useLayoutEffect)(function () {
    if (pendingImages.length > 0) {
      // Do not raise update events until after the images have finished editing.
      return;
    }

    if (isInitialUpdate) {
      setIsInitialUpdate(false);
      return;
    }

    options.onUpdate(uploadWidgetResult); // For inline layouts, if in single-file mode, we never resolve (there is no terminal state): we just allow the
    // user to add/remove their file, and the caller should instead rely on the 'onUpdate' method above.

    var shouldCloseModalImmediatelyAfterUpload = !multi && uploadedFiles.length > 0 && !options.showFinishButton && options.layout === "modal";

    if (shouldCloseModalImmediatelyAfterUpload) {
      // Just in case the user dragged-and-dropped multiple files.
      var firstUploadedFile = uploadWidgetResult.slice(0, 1);

      var doResolve = function doResolve() {
        return resolve(firstUploadedFile);
      };

      var previousScreenWasEditor = uploadedFiles[0].isSubmitted;

      if (previousScreenWasEditor) {
        doResolve();
      } else {
        var timeout = setTimeout(doResolve, onFileUploadDelay);
        return function () {
          return clearTimeout(timeout);
        };
      }
    }
  }, [pendingImages.length].concat(UploadWidget_toConsumableArray(uploadedFiles.map(function (x) {
    return x.uploadedFile.fileUrl;
  }))));

  var removeSubmittedFile = function removeSubmittedFile(fileIndex) {
    setSubmittedFiles(function (x) {
      var _a = x,
          _b = fileIndex,
          removed = _a[_b],
          rest = UploadWidget_rest(_a, [_typeof(_b) === "symbol" ? _b : _b + ""]);

      if ((removed === null || removed === void 0 ? void 0 : removed.type) === "uploading") {
        removed.cancel();
      }

      return rest;
    });
  };

  var setSubmittedFile = function setSubmittedFile(fileIndex, file) {
    setSubmittedFiles(function (x) {
      return Object.assign(Object.assign({}, x), _defineProperty({}, fileIndex, file));
    });
  };

  var updateFile = function updateFile(fileIndex, fileType, file) {
    setSubmittedFiles(function (x) {
      var oldFile = x[fileIndex];

      if (oldFile === undefined || oldFile.type !== fileType) {
        return x;
      }

      return Object.assign(Object.assign({}, x), _defineProperty({}, fileIndex, file(oldFile)));
    });
  };

  var doUpload = UploadWidget_async(function (file, fileIndex) {
    var _a, _b;

    var raiseError = function raiseError(error) {
      setSubmittedFile(fileIndex, {
        file: file,
        fileIndex: fileIndex,
        error: error,
        type: "error"
      });
      throw error;
    };

    var maxFileSizeBytes = options.maxFileSizeBytes,
        mimeTypes = options.mimeTypes,
        onPreUpload = options.onPreUpload;

    if (maxFileSizeBytes !== undefined && file.size > maxFileSizeBytes) {
      raiseError(new Error("".concat(options.locale.maxSize, " ").concat(humanFileSize(maxFileSizeBytes))));
    }

    if (!isValidMimeType(mimeTypes, file.type)) {
      raiseError(new Error(options.locale.unsupportedFileType));
    }

    setSubmittedFile(fileIndex, {
      file: file,
      fileIndex: fileIndex,
      type: "preprocessing"
    });
    var preUploadResult;
    return _continue(_catch(function () {
      return UploadWidget_await(onPreUpload(file), function (_onPreUpload) {
        preUploadResult = (_a = _onPreUpload) !== null && _a !== void 0 ? _a : undefined;
      }); // incase the user returns 'null' instead of undefined.
    }, function (e) {
      preUploadResult = {
        errorMessage: options.locale.customValidationFailed
      };
      console.error("[uploader] onPreUpload function raised an error.", e);
    }), function () {
      if ((preUploadResult === null || preUploadResult === void 0 ? void 0 : preUploadResult.errorMessage) !== undefined) {
        raiseError(new Error(preUploadResult.errorMessage));
      }

      var fileToUpload = (_b = preUploadResult === null || preUploadResult === void 0 ? void 0 : preUploadResult.transformedFile) !== null && _b !== void 0 ? _b : file;
      return UploadWidget_await(upload.uploadFile(fileToUpload, {
        path: path,
        metadata: metadata,
        tags: tags,
        onBegin: function onBegin(_ref2) {
          var cancel = _ref2.cancel;
          return setSubmittedFile(fileIndex, {
            // IMPORTANT: use 'setSubmittedFile' as file may already exist in collection as a "validating" file.
            file: fileToUpload,
            fileIndex: fileIndex,
            cancel: cancel,
            progress: 0,
            type: "uploading"
          });
        },
        onProgress: function onProgress(_ref3) {
          var bytesSent = _ref3.bytesSent,
              bytesTotal = _ref3.bytesTotal;
          return updateFile(fileIndex, "uploading", function (uploadingFile) {
            return Object.assign(Object.assign({}, uploadingFile), {
              progress: bytesSent / bytesTotal
            });
          });
        }
      }));
    });
  });

  var addFiles = function addFiles(files) {
    return setNextSparseFileIndex(function (nextSparseFileIndex) {
      var maxFiles = multi ? options.maxFileCount : 1;
      var filesToTake = maxFiles === undefined ? files.length : Math.min(files.length, maxFiles - submittedFileList.length); // Ignores subsequent drag-and-drop events for single file uploaders.

      if (filesToTake <= 0) {
        return nextSparseFileIndex;
      }

      files.slice(0, filesToTake).forEach(function (file, i) {
        var fileIndex = nextSparseFileIndex + i;
        doUpload(file, fileIndex).then(function (uploadedFile) {
          updateFile(fileIndex, "uploading", function () {
            return {
              fileIndex: fileIndex,
              uploadedFile: uploadedFile,
              editedFile: undefined,
              isSubmitted: false,
              type: "uploaded"
            };
          });
        }, function (error) {
          updateFile(fileIndex, "uploading", function (uploadingFile) {
            return {
              fileIndex: fileIndex,
              error: error,
              file: uploadingFile.file,
              type: "error"
            };
          });
        });
      });
      return nextSparseFileIndex + files.length;
    });
  };

  var _b = useDragDrop(addFiles),
      isDragging = _b.isDragging,
      rootProps = UploadWidget_rest(_b, ["isDragging"]);

  var mimeTypes = (_a = options.mimeTypes) !== null && _a !== void 0 ? _a : [];
  var isImageUploader = mimeTypes.length > 0 && mimeTypes.every(function (x) {
    return x.trim().toLowerCase().startsWith("image/");
  });
  return (0,jsx_runtime_namespaceObject.jsx)(WidgetBase_WidgetBase, Object.assign({
    htmlProps: rootProps,
    isDraggable: true,
    isDragging: isDragging,
    layout: options.layout,
    multi: options.multi
  }, {
    children: submittedFileList.length === 0 ? (0,jsx_runtime_namespaceObject.jsx)(UploaderWelcomeScreen, {
      options: options,
      addFiles: addFiles,
      isImageUploader: isImageUploader
    }) : showImageEditor && pendingImages.length > 0 ? (0,jsx_runtime_namespaceObject.jsx)(UploaderImageListEditor, {
      images: pendingImages,
      onImageEdited: onImageSubmitted,
      upload: upload,
      options: options
    }) : (0,jsx_runtime_namespaceObject.jsx)(UploaderMainScreen_UploaderMainScreen, {
      options: options,
      addFiles: addFiles,
      submittedFiles: submittedFileList,
      uploadedFiles: uploadedFiles,
      remove: removeSubmittedFile,
      finalize: finalize,
      isImageUploader: isImageUploader
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/widgets/uploader/UploadWidgetContainer.tsx
 // Put this first, so other components' stylesheets can override the default styles.




var UploadWidgetContainer_UploadWidgetContainer = function UploadWidgetContainer(_ref) {
  var upload = _ref.upload,
      resolve = _ref.resolve,
      reject = _ref.reject,
      options = _ref.options;
  return (0,jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {
    children: upload.type === "error" ? (0,jsx_runtime_namespaceObject.jsx)(ConfigError, {
      error: upload.value,
      layout: options.layout
    }) : (0,jsx_runtime_namespaceObject.jsx)(UploadWidget, {
      resolve: resolve,
      reject: reject,
      options: options,
      upload: upload.value
    })
  });
};
;// CONCATENATED MODULE: ./src/components/modal/ModalContainer.tsx
function ModalContainer_slicedToArray(arr, i) { return ModalContainer_arrayWithHoles(arr) || ModalContainer_iterableToArrayLimit(arr, i) || ModalContainer_unsupportedIterableToArray(arr, i) || ModalContainer_nonIterableRest(); }

function ModalContainer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ModalContainer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ModalContainer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ModalContainer_arrayLikeToArray(o, minLen); }

function ModalContainer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ModalContainer_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ModalContainer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ModalContainer = function ModalContainer(_ref) {
  var widgetProps = _ref.widgetProps;

  // NEVER call without resolving or rejecting the promise, as will cause a hanging promise.
  var _useState = (0,compat_namespaceObject.useState)(true),
      _useState2 = ModalContainer_slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var resolve = function resolve(files) {
    widgetProps.resolve(files);
    setIsOpen(false);
  };

  var reject = function reject(error) {
    widgetProps.reject(error);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (0,jsx_runtime_namespaceObject.jsx)(jsx_runtime_namespaceObject.Fragment, {});
  }

  return (0,jsx_runtime_namespaceObject.jsx)(Modal_Modal, Object.assign({
    closeModal: function closeModal() {
      return resolve([]);
    }
  }, {
    children: (0,jsx_runtime_namespaceObject.jsx)(UploadWidgetContainer_UploadWidgetContainer, Object.assign({}, widgetProps, {
      resolve: resolve,
      reject: reject
    }))
  }));
};
;// CONCATENATED MODULE: ./src/components/RootContainer.tsx
function RootContainer_slicedToArray(arr, i) { return RootContainer_arrayWithHoles(arr) || RootContainer_iterableToArrayLimit(arr, i) || RootContainer_unsupportedIterableToArray(arr, i) || RootContainer_nonIterableRest(); }

function RootContainer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function RootContainer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RootContainer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RootContainer_arrayLikeToArray(o, minLen); }

function RootContainer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function RootContainer_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function RootContainer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var RootContainer = function RootContainer(_ref) {
  var widgetProps = _ref.widgetProps;

  var _useState = (0,compat_namespaceObject.useState)(0),
      _useState2 = RootContainer_slicedToArray(_useState, 2),
      refreshKey = _useState2[0],
      setRefreshKey = _useState2[1];

  var _useState3 = (0,compat_namespaceObject.useState)(widgetProps.options),
      _useState4 = RootContainer_slicedToArray(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  var widgetPropsUpdated = Object.assign(Object.assign({}, widgetProps), {
    options: options
  });
  (0,compat_namespaceObject.useEffect)(function () {
    options.onInit({
      close: function close() {
        widgetProps.resolve([]);
      },
      reset: function reset() {
        setRefreshKey(function (x) {
          return x + 1;
        });
      },
      updateConfig: function updateConfig(newOptionsPartial) {
        setOptions(UploadWidgetConfigRequired.from(newOptionsPartial));
      }
    });
  }, []);
  return (0,jsx_runtime_namespaceObject.jsx)(external_preact_namespaceObject.Fragment, {
    children: (0,jsx_runtime_namespaceObject.jsx)("div", Object.assign({
      className: external_classnames_default()("uploader", {
        "uploader--with-modal": options.layout === "modal"
      }),
      style: {
        "--error-color": options.styles.colors.error,
        "--primary-color": options.styles.colors.primary,
        "--primary-active-color": options.styles.colors.active,
        "--shade-100": options.styles.colors.shade100,
        "--shade-200": options.styles.colors.shade200,
        "--shade-300": options.styles.colors.shade300,
        "--shade-400": options.styles.colors.shade400,
        "--shade-500": options.styles.colors.shade500,
        "--shade-600": options.styles.colors.shade600,
        "--shade-700": options.styles.colors.shade700,
        "--shade-800": options.styles.colors.shade800,
        "--shade-900": options.styles.colors.shade900,
        "--base-font-family": options.styles.fontFamilies.base,
        "--base-font-size": "".concat(options.styles.fontSizes.base, "px")
      }
    }, {
      children: options.layout === "modal" ? (0,jsx_runtime_namespaceObject.jsx)(ModalContainer, {
        widgetProps: widgetPropsUpdated
      }) : (0,jsx_runtime_namespaceObject.jsx)(UploadWidgetContainer_UploadWidgetContainer, Object.assign({}, widgetPropsUpdated))
    }))
  }, refreshKey);
};
;// CONCATENATED MODULE: ./src/modules/UploadManager.ts
function UploadManager_toConsumableArray(arr) { return UploadManager_arrayWithoutHoles(arr) || UploadManager_iterableToArray(arr) || UploadManager_unsupportedIterableToArray(arr) || UploadManager_nonIterableSpread(); }

function UploadManager_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UploadManager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UploadManager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UploadManager_arrayLikeToArray(o, minLen); }

function UploadManager_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function UploadManager_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return UploadManager_arrayLikeToArray(arr); }

function UploadManager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UploadManager_await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function _rethrow(thrown, value) {
  if (thrown) throw value;
  return value;
}

function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }

  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }

  return finalizer(false, result);
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Allows all file uploads to be cancelled (e.g. when widget closes).
 */
var UploadManager = /*#__PURE__*/function () {
  function UploadManager(instance) {
    _classCallCheck(this, UploadManager);

    this.instance = instance;
    this.uploadCancellations = [];
  }

  _createClass(UploadManager, [{
    key: "cancelAll",
    value: function cancelAll() {
      this.uploadCancellations.forEach(function (cancel) {
        return cancel();
      });
    }
  }, {
    key: "beginAuthSession",
    value: function beginAuthSession(authUrl, authHeaders) {
      try {
        var _this2 = this;

        return UploadManager_await(_this2.instance.beginAuthSession(authUrl, authHeaders));
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }, {
    key: "endAuthSession",
    value: function endAuthSession() {
      try {
        var _this4 = this;

        return UploadManager_await(_this4.instance.endAuthSession());
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file, params) {
      try {
        var _this6 = this;

        var cancellation;
        return _finallyRethrows(function () {
          return UploadManager_await(_this6.instance.uploadFile(file, Object.assign(Object.assign({}, params), {
            onBegin: function onBegin(onBeginParams) {
              cancellation = onBeginParams.cancel;
              _this6.uploadCancellations = [].concat(UploadManager_toConsumableArray(_this6.uploadCancellations), [cancellation]);

              if ((params === null || params === void 0 ? void 0 : params.onBegin) !== undefined) {
                params.onBegin(onBeginParams);
              }
            }
          })));
        }, function (_wasThrown, _result) {
          _this6.uploadCancellations = _this6.uploadCancellations.filter(function (x) {
            return x !== cancellation;
          });
          return _rethrow(_wasThrown, _result);
        });
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }, {
    key: "url",
    value: function url(filePath, slugOrParams) {
      return this.instance.url(filePath, slugOrParams);
    }
  }]);

  return UploadManager;
}();
;// CONCATENATED MODULE: ./src/Uploader.tsx








function Uploader_await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function _call(body, then, direct) {
  if (direct) {
    return then ? then(body()) : body();
  }

  try {
    var result = Promise.resolve(body());
    return then ? result.then(then) : result;
  } catch (e) {
    return Promise.reject(e);
  }
}

function Uploader_async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

function Uploader(uploadOrConfig) {
  // ----------------
  // READONLY MEMBERS
  // ----------------
  var uploadMaybe; // ----------------
  // CONSTRUCTOR
  // ----------------

  if (UploadInstanceMaybe.isUploadInstance(uploadOrConfig)) {
    uploadMaybe = {
      type: "upload",
      value: uploadOrConfig
    };
  } else {
    try {
      uploadMaybe = {
        type: "upload",
        value: (0,external_upload_js_namespaceObject.Upload)(uploadOrConfig)
      };
    } catch (e) {
      uploadMaybe = {
        type: "error",
        value: e
      };
    }
  } // ----------------
  // PUBLIC METHODS
  // ----------------


  var open = Uploader_async(function () {
    var optionsMaybe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _a;

    var options = UploadWidgetConfigRequired.from(optionsMaybe); // Important: wait for body first, before using 'querySelector' below.

    return _call(getBody, function (body) {
      var container = options.container !== undefined ? typeof options.container === "string" ? (_a = document.querySelector(options.container)) !== null && _a !== void 0 ? _a : undefined : options.container : undefined;
      var widget = document.createElement("div");
      (container !== null && container !== void 0 ? container : body).appendChild(widget); // Do not refer to 'options' in this file (where possible): move to 'RootContainer' so that it can handle prop updates.

      widget.className = "uploader__root";
      var uploadManager;
      var upload = uploadMaybe;

      if (uploadMaybe.type === "upload") {
        uploadManager = new UploadManager(uploadMaybe.value);
        upload = {
          type: "upload",
          value: uploadManager
        };
      }

      return Uploader_await(new Promise(function (resolve, reject) {
        var props = {
          upload: upload,
          resolve: resolve,
          reject: reject,
          options: options
        };
        (0,external_preact_namespaceObject.render)((0,jsx_runtime_namespaceObject.jsx)(RootContainer, {
          widgetProps: props
        }), widget);
      }), function (uploadedFiles) {
        widget.remove();
        uploadManager === null || uploadManager === void 0 ? void 0 : uploadManager.cancelAll(); // Stops in-progress uploads when the widget is closed.

        return uploadedFiles;
      });
    });
  }); // ----------------
  // PRIVATE METHODS
  // ----------------

  /**
   * Required when the 'uploader.open()' method is called from within '<head>'.
   */


  var getBody = Uploader_async(function () {
    return new Promise(function (resolve) {
      var attempt = function attempt() {
        var _a;

        var bodyMaybe = (_a = document.body) !== null && _a !== void 0 ? _a : undefined;

        if (bodyMaybe !== undefined) {
          resolve(bodyMaybe);
        }

        setTimeout(attempt, 100);
      };

      attempt();
    });
  }); // If this isn't a valid upload instance, then the user will experience errors when attempting to use it as one, but
  // they'll also be aware there's a problem as we'll render one on screen.


  var upload = uploadMaybe.type === "upload" ? uploadMaybe.value : {};
  return Object.assign(Object.assign({}, upload), {
    open: open
  });
}
;// CONCATENATED MODULE: ./src/index.ts



}();
module.exports = __nested_webpack_exports__;
/******/ })()
;

/***/ })

};
;