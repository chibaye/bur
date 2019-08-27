module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!****************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**************************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!***********************************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!***********************************************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!********************************************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!************************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!*******************************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!************************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!********************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!**********************************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!***********************************************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!***************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/next/dist/client/link.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../../node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!*****************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/next/dist/client/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!**********************************************************************!*\
  !*** /Users/me/dev/bur/node_modules/next/dist/client/with-router.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!***************************************************!*\
  !*** /Users/me/dev/bur/node_modules/next/link.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./components/fieldset.js":
/*!********************************!*\
  !*** ./components/fieldset.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const styles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default()(theme => ({
  fieldset: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingBottom: 30,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  label: {
    flex: '0 0 220px',
    color: '#323334',
    display: 'flex',
    fontSize: 18,
    marginTop: 2,
    marginRight: 20,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(2)
    }
  },
  required: {
    '&:after': {
      width: 6,
      height: 6,
      content: "''",
      background: '#FF4800',
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
      borderRadius: '100%'
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  label,
  required
}) => {
  const classes = styles();
  return __jsx("div", {
    className: classes.fieldset
  }, __jsx("label", {
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()(classes.label, {
      [classes.required]: required
    })
  }, label), children);
});

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons */ "./components/icons/index.js");
/* harmony import */ var _icons_logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/logo */ "./components/icons/logo.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const styles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_8___default()(theme => ({
  toolbar: {
    padding: 32,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing()
    }
  },
  text: {
    fontSize: '1rem'
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  xs6: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '100% !important',
      flexBasis: '100% !important',
      marginBottom: theme.spacing(2)
    }
  },
  listItemText: {
    [theme.breakpoints.down('xs')]: {
      margin: 0
    }
  },
  listItemIcon: {
    [theme.breakpoints.down('xs')]: {
      minWidth: 36
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const classes = styles();
  return __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "footer",
    color: "secondary"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], {
    className: classes.toolbar
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    className: classes.xs6
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.listItemIcon
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "facebook",
    fill: "#fff"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    primary: "walanda.org",
    classes: {
      root: classes.listItemText,
      primary: classes.text
    }
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.listItemIcon
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "email",
    fill: "#fff"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    primary: "bursaries@walanda.org",
    classes: {
      root: classes.listItemText,
      primary: classes.text
    }
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.listItemIcon
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "phone",
    fill: "#fff"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    primary: "0953 760909 / 0968 437034",
    classes: {
      root: classes.listItemText,
      primary: classes.text
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "button"
  }, "CONTACT DETAILS"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], null, "Plot No. 4485A,"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], null, "Katima Mulilo Rd,"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], null, "Kalundu"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], null, "P.O. Box 38285"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], null, "Lusaka, Zambia")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3,
    className: classes.centered
  }, __jsx(_icons_logo__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h6"
  }, "Walanda Bursaries"))))));
});

/***/ }),

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! simple-react-validator */ "simple-react-validator");
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(simple_react_validator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./row */ "./components/row.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icons */ "./components/icons/index.js");
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./terms */ "./components/terms.js");
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./upload */ "./components/upload.js");
/* harmony import */ var _fieldset__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fieldset */ "./components/fieldset.js");
/* harmony import */ var _lib_redux_actions_form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../lib/redux/actions/form */ "./lib/redux/actions/form.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_23__);


var _temp;

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
























const styles = theme => ({
  '@global': {
    '.srv-validation-message': {
      color: '#900'
    }
  },
  actions: {
    display: 'flex',
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  typography: {
    marginRight: theme.spacing() + 4
  },
  progress: {
    color: 'white',
    display: 'none'
  },
  show: {
    display: 'block'
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_23___default()(styles, {
  withTheme: true
})(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state, {
  fileChange: _lib_redux_actions_form__WEBPACK_IMPORTED_MODULE_22__["fileChange"],
  inputChange: _lib_redux_actions_form__WEBPACK_IMPORTED_MODULE_22__["inputChange"],
  post: _lib_redux_actions_form__WEBPACK_IMPORTED_MODULE_22__["post"]
})((_temp = class extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "validator", new simple_react_validator__WEBPACK_IMPORTED_MODULE_11___default.a({
      autoForceUpdate: this
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSubmit", e => {
      e.preventDefault();
      const {
        data,
        post
      } = this.props;

      if (this.validator.allValid()) {
        post(data);
      } else {
        this.validator.showMessages();
        alert('There are errors on the form.');
      }
    });
  }

  render() {
    const {
      classes,
      theme,
      data,
      files,
      form: {
        loading
      },
      fileChange,
      inputChange
    } = this.props;
    const {
      ids,
      letter,
      certificate,
      photos,
      payment
    } = files;
    const {
      names,
      surname,
      phone,
      gender,
      address,
      email,
      birthday,
      school,
      major,
      guardian,
      guardianPhone,
      nrc
    } = data;
    return __jsx("form", {
      onSubmit: this.handleSubmit
    }, __jsx(_row__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: "Personal Details"
    }, __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Given Names",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
      name: "names",
      onChange: inputChange,
      value: names,
      className: classes.textField,
      placeholder: "Enter exactly as stated on your NRC"
    }), this.validator.message('name', names, 'required'))), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Surname",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
      name: "surname",
      onChange: inputChange,
      value: surname,
      className: classes.textField,
      placeholder: "Enter exactly as stated on your NRC"
    }), this.validator.message('surname', surname, 'required'))), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Gender",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_9___default.a, {
      "aria-label": "position",
      name: "gender",
      value: gender,
      onChange: inputChange,
      row: true
    }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default.a, {
      value: "male",
      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_5___default.a, {
        color: "primary",
        disableRipple: true
      }),
      label: "Male",
      labelPlacement: "end"
    }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default.a, {
      value: "female",
      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_5___default.a, {
        color: "primary",
        disableRipple: true
      }),
      label: "Female",
      labelPlacement: "end"
    })), this.validator.message('gender', gender, 'required'))), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "NRC",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
      name: "nrc",
      onChange: inputChange,
      value: nrc,
      className: classes.textField,
      placeholder: "000000/00/0"
    }), this.validator.message('nrc', nrc, 'required'))), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "birthday",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
      name: "birthday",
      onChange: inputChange,
      value: birthday,
      className: classes.textField,
      placeholder: "DD/MM/YYYY"
    }), this.validator.message('birthday', birthday, 'required')))), __jsx(_row__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: "Contact Details"
    }, __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Address",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
      name: "address",
      onChange: inputChange,
      value: address,
      className: classes.textField,
      placeholder: "Street, City/Town, Province"
    }), this.validator.message('address', address, 'required'))), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Phone number",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
      name: "phone",
      onChange: inputChange,
      value: phone,
      className: classes.textField,
      InputProps: {
        startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14___default.a, {
          position: "start"
        }, "+260")
      }
    }), this.validator.message('phone', phone, 'required'))), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Email Address",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
      name: "email",
      onChange: inputChange,
      value: email,
      className: classes.textField,
      placeholder: "Your active Email Address"
    }), this.validator.message('email', email, 'required|email')))), __jsx(_row__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: "Guardian Details",
      subtitle: "(if less than 21)"
    }, __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Full Names"
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
      name: "guardian",
      onChange: inputChange,
      value: guardian,
      className: classes.textField,
      placeholder: "Guardian Full Name"
    })), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Guardian Phone"
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
      name: "guardianPhone",
      onChange: inputChange,
      value: guardianPhone,
      className: classes.textField,
      placeholder: "Guardian Phone Number"
    }))), __jsx(_row__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: "Additional Details"
    }, __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "University/ College",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
      name: "school",
      onChange: inputChange,
      value: school,
      className: classes.textField
    }), this.validator.message('school', school, 'required'))), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Major",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
      name: "major",
      onChange: inputChange,
      value: major,
      className: classes.textField
    }), this.validator.message('major', major, 'required'))), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Academic Qualification",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_upload__WEBPACK_IMPORTED_MODULE_20__["default"], {
      name: "certificate",
      files: certificate,
      onChange: fileChange
    }), this.validator.message('certificate', certificate, 'required'))), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Acceptance/ Recommendation Letter",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_upload__WEBPACK_IMPORTED_MODULE_20__["default"], {
      name: "letter",
      files: letter,
      onChange: fileChange
    }), this.validator.message('acceptance/recommendation', letter, 'required'))), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "NRC",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_upload__WEBPACK_IMPORTED_MODULE_20__["default"], {
      name: "ids",
      files: ids,
      multiple: true,
      onChange: fileChange
    }), this.validator.message('nrc attachment', ids, 'required'))), __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "2 Passport Size Photos",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_upload__WEBPACK_IMPORTED_MODULE_20__["default"], {
      name: "photos",
      files: photos,
      multiple: true,
      onChange: fileChange
    }), this.validator.message('passport photos', photos, 'required')))), __jsx(_row__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: "Payment"
    }, __jsx(_fieldset__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: "Deposit Slip",
      required: true
    }, __jsx("div", {
      className: classes.col
    }, __jsx(_upload__WEBPACK_IMPORTED_MODULE_20__["default"], {
      name: "payment",
      files: payment,
      onChange: fileChange
    }), this.validator.message('deposit slip', payment, 'required')))), __jsx(_terms__WEBPACK_IMPORTED_MODULE_19__["default"], null), __jsx("div", {
      className: classes.actions
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
      component: "nav"
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13___default.a, null, __jsx(_icons__WEBPACK_IMPORTED_MODULE_18__["default"], {
      name: "check",
      fill: theme.palette.primary.main
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12___default.a, {
      primary: "I agree to the above Terms & Conditions"
    }))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      type: "submit",
      color: "primary",
      size: "large",
      variant: "contained"
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: classes.typography
    }, "Submit Application"), __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_16___default.a, {
      size: 20,
      thickness: 4,
      className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.progress, {
        [classes.show]: loading
      })
    }))));
  }

}, _temp))));

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./link */ "./components/link.js");
/* harmony import */ var _icons_logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/logo */ "./components/icons/logo.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "header",
    color: "primary"
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "/"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx(_icons_logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "38px",
    fill: "#56ceb5"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    style: {
      color: 'white'
    }
  }, "walanda.org")))))));
});

/***/ }),

/***/ "./components/hero.js":
/*!****************************!*\
  !*** ./components/hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const styles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(theme => ({
  hero: {
    width: '100%',
    height: 550,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    [theme.breakpoints.down('xs')]: {
      borderRadius: 4
    }
  },
  cover: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundSize: 'cover',
    justifyContent: 'center',
    backgroundPosition: 'top right',
    background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://res.cloudinary.com/xox/image/upload/v1566808369/Female-Black-African-Student-Smiling_khaobf.jpg) no-repeat right top'
  },
  heading: {
    fontWeight: 700,
    marginTop: 362,
    color: theme.palette.common.white,
    textShadow: '0px 2px 3px rgba(0,0,0,0.4), 0px 4px 7px rgba(0,0,0,0.1), 0px 9px 12px rgba(0,0,0,0.1)'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const classes = styles();
  return __jsx("div", {
    className: classes.hero
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.cover
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2",
    className: classes.heading
  }, "Walanda Bursaries")));
});

/***/ }),

/***/ "./components/icons/file.js":
/*!**********************************!*\
  !*** ./components/icons/file.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/useTheme */ "@material-ui/core/styles/useTheme");
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "17px",
  height: "22px",
  viewBox: "0 0 17 22"
}, __jsx("g", {
  fill: "none"
}, __jsx("g", {
  transform: "translate(-630.000000, -2729.000000)",
  fill: _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_1___default()().palette.primary.main
}, __jsx("g", {
  transform: "translate(60.000000, 640.000000)"
}, __jsx("g", {
  transform: "translate(0.000000, 1500.000000)"
}, __jsx("g", {
  transform: "translate(290.000000, 589.000000)"
}, __jsx("path", {
  d: "M288.5,0 C283.813,0 280,3.838 280,8.556 L280,14.667 L282.428,14.667 L282.428,8.556 C282.428,5.183 285.148,2.444 288.5,2.444 C291.852,2.444 294.571,5.183 294.571,8.556 L294.571,15.889 C294.571,17.918 292.943,19.556 290.929,19.556 C288.912,19.556 287.285,17.918 287.285,15.889 L287.285,8.556 C287.285,7.871 287.819,7.333 288.5,7.333 C289.18,7.333 289.714,7.871 289.714,8.556 L289.714,14.667 L292.143,14.667 L292.143,8.556 C292.143,6.527 290.516,4.889 288.5,4.889 C286.484,4.889 284.857,6.527 284.857,8.556 L284.857,15.889 C284.857,19.263 287.576,22 290.929,22 C294.279,22 297,19.263 297,15.889 L297,8.556 C297,3.838 293.187,0 288.5,0"
}))))))));

/***/ }),

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


const data = {
  email: 'M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z',
  facebook: 'M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z',
  check: 'M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z',
  phone: 'M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z'
};
/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    name,
    fill
  } = _ref,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["name", "fill"]);

  const x = data[name];
  const v = x.viewBox || '0 0 24 24';
  const o = typeof x === 'object';
  return __jsx(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: v
  }, rest), o ? x.data.map((n, i) => __jsx("path", {
    key: i,
    fill: n.fill || fill || '#FFF',
    d: n.d
  })) : __jsx("path", {
    d: x,
    fill: fill
  }));
});

/***/ }),

/***/ "./components/icons/logo.js":
/*!**********************************!*\
  !*** ./components/icons/logo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  size = '35%',
  fill
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 142.4 109.59",
  width: size
}, __jsx("polygon", {
  fill: fill || 'transparent',
  points: "38.76 21.05 39.67 60.93 33.67 60.07 32.72 19.43 7.34 12.61 10.07 88.2 67.67 101.7 67.67 28.82 38.76 21.05"
}), __jsx("polygon", {
  fill: fill || 'transparent',
  points: "134.94 12.61 108.61 19.58 108.61 19.58 107.67 60.07 101.67 60.93 102.57 21.18 73.67 28.83 73.67 101.7 131.3 88.19 134.94 12.61"
}), __jsx("path", {
  fill: "#fff",
  d: "M71,22.38.33,3.39,3.6,93.8,71,109.59l67.37-15.78,4.36-90.42ZM10.4,88.2,7.67,12.61l25.38,6.82L34,60l6,.93-.91-39.88L68,28.82V101.7ZM74,28.83l28.9-7.65L102,60.93l6-.86.94-40.49h0l26.33-7-3.64,75.58L74,101.7Z",
  transform: "translate(-0.33)"
}), __jsx("polygon", {
  fill: "#fff",
  opacity: 0.35,
  points: "131.75 0 70.71 22.38 9.67 0 9.67 5.99 70.72 22.38 131.75 6.21 131.75 0"
})));

/***/ }),

/***/ "./components/intro.js":
/*!*****************************!*\
  !*** ./components/intro.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/row */ "./components/row.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const styles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(theme => ({
  type: {
    marginBottom: 18
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const classes = styles();
  return __jsx(_components_row__WEBPACK_IMPORTED_MODULE_2__["default"], {
    disableBackground: true
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.type
  }, __jsx("b", null, "Walanda Bursaries"), " is established with the intention to provide financial assistance to individuals that qualify to be enrolled in various colleges and Universities. Preference will be given to Zambian students with a proven record of good grades and a passion for education."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.type
  }, __jsx("b", null, "Walanda assistance"), " is based on academic performance. Bursaries are awarded twice in a year provided funds are available."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.type
  }, __jsx("b", null, "Walanda awards"), " bursaries on the basis of a comprehensive process. Bursaries awarded are based upon the availability of funds and additional qualifying criteria."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.type
  }, __jsx("b", null, "DEADLINE"), " for bursary applications is 1st November for the January intake. Applications made after the said date will be considered for the June/July intake."));
});

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx("main", null, children), __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./components/link.js":
/*!****************************!*\
  !*** ./components/link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    children,
    href,
    name = ''
  } = _ref,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "href", "name"]);

  const [title, arg] = name.split(',');
  const url = href ? href : (/^-?\d+$/.test(arg) ? arg < 0 ? '' : title.split(' ')[arg] : arg || title.replace(new RegExp(' ', 'g'), '-')).toLowerCase();
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: url
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: url,
    noWrap: true
  }, rest), children ? children : title));
});

/***/ }),

/***/ "./components/payments.js":
/*!********************************!*\
  !*** ./components/payments.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const styles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default()(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: '#eee'
  },
  hidden: {
    opacity: 0
  },
  xs6: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '100% !important',
      flexBasis: '100% !important'
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const classes = styles();
  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "button"
  }, "BANK DETAILS"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Bank"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Account Name"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Account Number"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Branch")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.hidden
  }, "."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "AtlasMara"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Mulena Information Technology Ltd"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "3255047933029"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "East Pack Mall")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    className: classes.xs6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "button"
  }, "MOBILE MONEY(MTN)"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Dial *303#"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Select option 5 (Momo Pay)"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Select option 1 (Merchant Code)"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Enter Merchant Code: 748832"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Enter Reason: Walanda Bursaries")))));
});

/***/ }),

/***/ "./components/row.js":
/*!***************************!*\
  !*** ./components/row.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const styles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default()(theme => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    display: 'flex'
  },
  subtitle: {
    fontSize: 19,
    marginLeft: 4,
    marginTop: 4
  },
  background: {
    backgroundColor: 'rgba(0, 0, 240, 0.05)'
  },
  container: {
    paddingTop: theme.spacing(4)
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  title,
  subtitle,
  disableBackground
}) => {
  const classes = styles();
  return __jsx("div", {
    className: classes.root
  }, title && __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    maxWidth: "sm"
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "div",
    variant: "h2",
    className: classes.title
  }, title, subtitle && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h2",
    className: classes.subtitle
  }, subtitle))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()(classes.container, {
      [classes.background]: !disableBackground
    })
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    maxWidth: "sm"
  }, children)));
});

/***/ }),

/***/ "./components/terms.js":
/*!*****************************!*\
  !*** ./components/terms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./row */ "./components/row.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const styles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1___default()(theme => ({
  ul: {
    marginTop: -36,
    [theme.breakpoints.down('xs')]: {
      marginLeft: -theme.spacing(2)
    }
  },
  li: {
    fontSize: '1rem',
    marginLeft: -20,
    marginBottom: 4
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const classes = styles();
  return __jsx(_row__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Terms & Conditions",
    disableBackground: true
  }, __jsx("ul", {
    className: classes.ul
  }, __jsx("li", {
    className: classes.li
  }, "The application fee of k150.00 is non-refundable"), __jsx("li", {
    className: classes.li
  }, "The bursary is only valid for one academic year/semester but may be renewed on application after production of satisfactory academic results"), __jsx("li", {
    className: classes.li
  }, "Part of the allowance due to the student is paid to the beneficiary through a bank account as funds become available."), __jsx("li", {
    className: classes.li
  }, "The student will not be allowed to change his/her course of studies without the consent of the bursaries board."), __jsx("li", {
    className: classes.li
  }, "The board shall cancel the bursary when the student fails exams, is indulged in inappropriate behavior or as the board sees fit in its absolute discretion."), __jsx("li", {
    className: classes.li
  }, "The bursary awarded to the student shall not extend to the spouse, children or any other dependent"), __jsx("li", {
    className: classes.li
  }, "The bursary will be awarded to Zambian citizens between the age of 18 years to 35 years."), __jsx("li", {
    className: classes.li
  }, "The applicants will be required to sit for aptitude tests prior to final selection. All applicants who wish to commence in January must submit their applications before the 1st of November while those who submit after the said date will be considered for the June/July intakes."), __jsx("li", {
    className: classes.li
  }, "Students who apply for financial aid may be granted a full or partial bursary. This means that a student may be granted a bursary, which covers all or only half their tertiary fees. To cover the remaining half, families can apply for an additional loan. The amount of money you will get depends on your academic performance and your family\u2019s income or financial situation.")));
});

/***/ }),

/***/ "./components/upload.js":
/*!******************************!*\
  !*** ./components/upload.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/file */ "./components/icons/file.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const styles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3___default()(theme => ({
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  input: {
    width: 460,
    height: 32,
    opacity: 0,
    outline: 0,
    zIndex: 2,
    position: 'absolute',
    background: '#fff'
  },
  small: {
    fontSize: 11,
    marginLeft: 28,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  placeholder: {
    color: '#b5babb',
    height: 22,
    overflow: 'hidden',
    fontSize: 17,
    marginLeft: 8,
    textOverflow: 'ellipsis'
  },
  progress: {
    marginTop: 6,
    marginLeft: 26,
    opacity: 0
  }
}));

const ellipsis = s => s.length > 13 ? `...${s.slice(-13)}` : s;

const getNames = files => files.length > 1 ? [...new Array(2)].map((n, i) => ellipsis(files[i].name)).toString() : ellipsis(files[0].name);

/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    name,
    files,
    onChange
  } = _ref,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["name", "files", "onChange"]);

  const classes = styles();
  return __jsx("div", null, __jsx("div", {
    className: classes.row
  }, __jsx(_icons_file__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("span", {
    className: classes.placeholder
  }, files ? getNames(files) : 'Choose File(s)'), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "file",
    name: name,
    className: classes.input,
    onChange: onChange
  }, rest)), [...new Array(rest.multiple ? 2 : 1)].map((n, i) => __jsx("progress", {
    key: i,
    id: `${name}-${i}`,
    value: "0",
    max: "100",
    className: classes.progress
  }, "0%"))), __jsx("small", {
    className: classes.small
  }, ".jpg .jpeg .png .bmp .pdf, up to 3 MB"));
});

/***/ }),

/***/ "./lib/firebase/index.js":
/*!*******************************!*\
  !*** ./lib/firebase/index.js ***!
  \*******************************/
/*! exports provided: firebase, firestore, storage, timestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);



const config = {
  apiKey: "AIzaSyBj9ZGKHjoif93eSPPnIy9R7nNvxYheHN8",
  authDomain: "wnd-io.firebaseapp.com",
  databaseURL: "https://wnd-io.firebaseio.com",
  projectId: "wnd-io",
  storageBucket: "wnd-io.appspot.com",
  messagingSenderId: "680439626861",
  appId: "1:680439626861:web:643b6bbd526e7822"
};
let firestore, storage, timestamp;

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0__["apps"].length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](config);
  storage = firebase_app__WEBPACK_IMPORTED_MODULE_0__["storage"]();
  firestore = firebase_app__WEBPACK_IMPORTED_MODULE_0__["firestore"]();
  timestamp = firebase_app__WEBPACK_IMPORTED_MODULE_0__["firestore"].FieldValue.serverTimestamp();
}



/***/ }),

/***/ "./lib/redux/actions/form.js":
/*!***********************************!*\
  !*** ./lib/redux/actions/form.js ***!
  \***********************************/
/*! exports provided: inputChange, fileChange, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputChange", function() { return inputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileChange", function() { return fileChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./lib/redux/types.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase */ "./lib/firebase/index.js");




const upload = (name, file, index = 0) => dispatch => {
  const task = _firebase__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`bursaries/${file.name}`).put(file, {
    contentType: 'image/jpeg'
  });
  task.on(_firebase__WEBPACK_IMPORTED_MODULE_2__["firebase"].storage.TaskEvent.STATE_CHANGED, snapshot => {
    const el = document.getElementById(`${name}-${index}`);
    el.style.opacity = '1';
    el.value = snapshot.bytesTransferred / snapshot.totalBytes * 100;
  }, error => error, async () => {
    try {
      const url = await task.snapshot.ref.getDownloadURL();
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FORM"].FIELD,
        payload: {
          name,
          index,
          url
        }
      });
    } catch (e) {
      console.error(e);
    }
  });
};

const inputChange = e => dispatch => dispatch({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["FORM"].INPUT,
  payload: {
    e
  }
});
const fileChange = ({
  target: {
    name,
    files
  }
}) => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FORM"].FILES,
    payload: {
      name,
      files
    }
  });
  files.length > 1 ? [...new Array(2)].map((n, i) => dispatch(upload(name, files[i], i))) : dispatch(upload(name, files[0]));
};
const post = data => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FORM"].LOADING
  });

  try {
    await _firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].collection('bursaries').add(data);
    await dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FORM"].LOADING
    });
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.replace('/thank-you');
  } catch (err) {
    alert('Something went wrong, try again.');
    console.error(err);
  }
};

/***/ }),

/***/ "./lib/redux/types.js":
/*!****************************!*\
  !*** ./lib/redux/types.js ***!
  \****************************/
/*! exports provided: FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM", function() { return FORM; });
const FORM = {
  FIELD: 'FIELD',
  FILES: 'FILES',
  INPUT: 'INPUT',
  LOADING: 'LOADING'
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero */ "./components/hero.js");
/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro */ "./components/intro.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_payments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/payments */ "./components/payments.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(_components_hero__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_intro__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_payments__WEBPACK_IMPORTED_MODULE_5__["default"], null)));

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/me/dev/bur/src/app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "@material-ui/core/SvgIcon":
/*!********************************************!*\
  !*** external "@material-ui/core/SvgIcon" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles/makeStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/makeStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "@material-ui/core/styles/useTheme":
/*!****************************************************!*\
  !*** external "@material-ui/core/styles/useTheme" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/useTheme");

/***/ }),

/***/ "@material-ui/core/styles/withStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/withStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "simple-react-validator":
/*!*****************************************!*\
  !*** external "simple-react-validator" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simple-react-validator");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map