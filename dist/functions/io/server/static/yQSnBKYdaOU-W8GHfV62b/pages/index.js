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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2MIm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("uFB0"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4C7a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FORM; });
const FORM = {
  FIELD: 'FIELD',
  FILES: 'FILES',
  INPUT: 'INPUT',
  LOADING: 'LOADING'
};

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Tpg":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("FIas");

var _Object$defineProperty = __webpack_require__("LcAa");

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

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "7xIC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Tpg");

var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("uFB0"));

var _defineProperty = _interopRequireDefault(__webpack_require__("LcAa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("2MIm"));

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

/***/ "8//M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "8k7s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "CUfL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__("GLYF");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: /Users/me/dev/bur/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// CONCATENATED MODULE: ./components/link.js


var __jsx = external_react_default.a.createElement;



/* harmony default export */ var components_link = ((_ref) => {
  let {
    children,
    href,
    name = ''
  } = _ref,
      rest = Object(objectWithoutProperties["a" /* default */])(_ref, ["children", "href", "name"]);

  const [title, arg] = name.split(',');
  const url = href ? href : (/^-?\d+$/.test(arg) ? arg < 0 ? '' : title.split(' ')[arg] : arg || title.replace(new RegExp(' ', 'g'), '-')).toLowerCase();
  return __jsx(link_default.a, {
    href: url
  }, __jsx(Link_default.a, Object(esm_extends["a" /* default */])({
    href: url,
    noWrap: true
  }, rest), children ? children : title));
});
// CONCATENATED MODULE: ./components/icons/logo.js
var logo_jsx = external_react_default.a.createElement;

/* harmony default export */ var logo = (({
  size = '35%',
  fill
}) => logo_jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 142.4 109.59",
  width: size
}, logo_jsx("polygon", {
  fill: fill || 'transparent',
  points: "38.76 21.05 39.67 60.93 33.67 60.07 32.72 19.43 7.34 12.61 10.07 88.2 67.67 101.7 67.67 28.82 38.76 21.05"
}), logo_jsx("polygon", {
  fill: fill || 'transparent',
  points: "134.94 12.61 108.61 19.58 108.61 19.58 107.67 60.07 101.67 60.93 102.57 21.18 73.67 28.83 73.67 101.7 131.3 88.19 134.94 12.61"
}), logo_jsx("path", {
  fill: "#fff",
  d: "M71,22.38.33,3.39,3.6,93.8,71,109.59l67.37-15.78,4.36-90.42ZM10.4,88.2,7.67,12.61l25.38,6.82L34,60l6,.93-.91-39.88L68,28.82V101.7ZM74,28.83l28.9-7.65L102,60.93l6-.86.94-40.49h0l26.33-7-3.64,75.58L74,101.7Z",
  transform: "translate(-0.33)"
}), logo_jsx("polygon", {
  fill: "#fff",
  opacity: 0.35,
  points: "131.75 0 70.71 22.38 9.67 0 9.67 5.99 70.72 22.38 131.75 6.21 131.75 0"
})));
// CONCATENATED MODULE: ./components/header.js
var header_jsx = external_react_default.a.createElement;










/* harmony default export */ var header = (() => {
  return header_jsx(AppBar_default.a, {
    component: "header",
    color: "primary"
  }, header_jsx(Toolbar_default.a, null, header_jsx(Container_default.a, null, header_jsx(components_link, {
    href: "/"
  }, header_jsx(ListItem_default.a, null, header_jsx(ListItemIcon_default.a, null, header_jsx(logo, {
    size: "38px",
    fill: "#56ceb5"
  })), header_jsx(ListItemText_default.a, null, header_jsx(core_["Typography"], {
    variant: "h5",
    style: {
      color: 'white'
    }
  }, "walanda.org")))))));
});
// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/styles/makeStyles"
var makeStyles_ = __webpack_require__("8//M");
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);

// EXTERNAL MODULE: ./components/icons/index.js
var icons = __webpack_require__("dhEp");

// CONCATENATED MODULE: ./components/footer.js
var footer_jsx = external_react_default.a.createElement;











const styles = makeStyles_default()(theme => ({
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
/* harmony default export */ var footer = (() => {
  const classes = styles();
  return footer_jsx(AppBar_default.a, {
    component: "footer",
    color: "secondary"
  }, footer_jsx(core_["Toolbar"], {
    className: classes.toolbar
  }, footer_jsx(Container_default.a, null, footer_jsx(Grid_default.a, {
    container: true
  }, footer_jsx(Grid_default.a, {
    item: true,
    xs: 6,
    className: classes.xs6
  }, footer_jsx(ListItem_default.a, null, footer_jsx(ListItemIcon_default.a, {
    className: classes.listItemIcon
  }, footer_jsx(icons["a" /* default */], {
    name: "facebook",
    fill: "#fff"
  })), footer_jsx(ListItemText_default.a, {
    primary: "walanda.org",
    classes: {
      root: classes.listItemText,
      primary: classes.text
    }
  })), footer_jsx(ListItem_default.a, null, footer_jsx(ListItemIcon_default.a, {
    className: classes.listItemIcon
  }, footer_jsx(icons["a" /* default */], {
    name: "email",
    fill: "#fff"
  })), footer_jsx(ListItemText_default.a, {
    primary: "bursaries@walanda.org",
    classes: {
      root: classes.listItemText,
      primary: classes.text
    }
  })), footer_jsx(ListItem_default.a, null, footer_jsx(ListItemIcon_default.a, {
    className: classes.listItemIcon
  }, footer_jsx(icons["a" /* default */], {
    name: "phone",
    fill: "#fff"
  })), footer_jsx(ListItemText_default.a, {
    primary: "0953 760909 / 0968 437034",
    classes: {
      root: classes.listItemText,
      primary: classes.text
    }
  }))), footer_jsx(Grid_default.a, {
    item: true,
    xs: 3
  }, footer_jsx(core_["Typography"], {
    variant: "button"
  }, "CONTACT DETAILS"), footer_jsx(core_["Typography"], null, "Plot No. 4485A,"), footer_jsx(core_["Typography"], null, "Katima Mulilo Rd,"), footer_jsx(core_["Typography"], null, "Kalundu"), footer_jsx(core_["Typography"], null, "P.O. Box 38285"), footer_jsx(core_["Typography"], null, "Lusaka, Zambia")), footer_jsx(Grid_default.a, {
    item: true,
    xs: 3,
    className: classes.centered
  }, footer_jsx(logo, null), footer_jsx(core_["Typography"], {
    variant: "h6"
  }, "Walanda Bursaries"))))));
});
// CONCATENATED MODULE: ./components/layout.js
var layout_jsx = external_react_default.a.createElement;



/* harmony default export */ var layout = __webpack_exports__["a"] = (({
  children
}) => layout_jsx(external_react_default.a.Fragment, null, layout_jsx(header, null), layout_jsx("main", null, children), layout_jsx(footer, null)));

/***/ }),

/***/ "FIas":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "JeHL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KeDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Tpg");

var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("JeHL"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("7xIC"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
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

    if (false) {}

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

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "LcAa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "MYXB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "NP1D":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),

/***/ "OCF2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("znL5");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/Radio"
var Radio_ = __webpack_require__("CUfL");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/RadioGroup"
var RadioGroup_ = __webpack_require__("p1B1");
var RadioGroup_default = /*#__PURE__*/__webpack_require__.n(RadioGroup_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "simple-react-validator"
var external_simple_react_validator_ = __webpack_require__("XHjz");
var external_simple_react_validator_default = /*#__PURE__*/__webpack_require__.n(external_simple_react_validator_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__("GLYF");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__("lj8g");
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__("1imS");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/styles/makeStyles"
var makeStyles_ = __webpack_require__("8//M");
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);

// CONCATENATED MODULE: ./components/row.js
var __jsx = external_react_default.a.createElement;





const styles = makeStyles_default()(theme => ({
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
/* harmony default export */ var row = (({
  children,
  title,
  subtitle,
  disableBackground
}) => {
  const classes = styles();
  return __jsx("div", {
    className: classes.root
  }, title && __jsx(Container_default.a, {
    maxWidth: "sm"
  }, __jsx(Typography_default.a, {
    component: "div",
    variant: "h2",
    className: classes.title
  }, title, subtitle && __jsx(Typography_default.a, {
    variant: "h2",
    className: classes.subtitle
  }, subtitle))), __jsx(Container_default.a, {
    className: external_clsx_default()(classes.container, {
      [classes.background]: !disableBackground
    })
  }, __jsx(Container_default.a, {
    maxWidth: "sm"
  }, children)));
});
// EXTERNAL MODULE: ./components/icons/index.js
var icons = __webpack_require__("dhEp");

// CONCATENATED MODULE: ./components/terms.js
var terms_jsx = external_react_default.a.createElement;



const terms_styles = makeStyles_default()(theme => ({
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
/* harmony default export */ var terms = (() => {
  const classes = terms_styles();
  return terms_jsx(row, {
    title: "Terms & Conditions",
    disableBackground: true
  }, terms_jsx("ul", {
    className: classes.ul
  }, terms_jsx("li", {
    className: classes.li
  }, "The application fee of k150.00 is non-refundable"), terms_jsx("li", {
    className: classes.li
  }, "The bursary is only valid for one academic year/semester but may be renewed on application after production of satisfactory academic results"), terms_jsx("li", {
    className: classes.li
  }, "Part of the allowance due to the student is paid to the beneficiary through a bank account as funds become available."), terms_jsx("li", {
    className: classes.li
  }, "The student will not be allowed to change his/her course of studies without the consent of the bursaries board."), terms_jsx("li", {
    className: classes.li
  }, "The board shall cancel the bursary when the student fails exams, is indulged in inappropriate behavior or as the board sees fit in its absolute discretion."), terms_jsx("li", {
    className: classes.li
  }, "The bursary awarded to the student shall not extend to the spouse, children or any other dependent"), terms_jsx("li", {
    className: classes.li
  }, "The bursary will be awarded to Zambian citizens between the age of 18 years to 35 years."), terms_jsx("li", {
    className: classes.li
  }, "The applicants will be required to sit for aptitude tests prior to final selection. All applicants who wish to commence in January must submit their applications before the 1st of November while those who submit after the said date will be considered for the June/July intakes."), terms_jsx("li", {
    className: classes.li
  }, "Students who apply for financial aid may be granted a full or partial bursary. This means that a student may be granted a bursary, which covers all or only half their tertiary fees. To cover the remaining half, families can apply for an additional loan. The amount of money you will get depends on your academic performance and your family\u2019s income or financial situation.")));
});
// EXTERNAL MODULE: /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "@material-ui/core/styles/useTheme"
var useTheme_ = __webpack_require__("wicp");
var useTheme_default = /*#__PURE__*/__webpack_require__.n(useTheme_);

// CONCATENATED MODULE: ./components/icons/file.js
var file_jsx = external_react_default.a.createElement;


/* harmony default export */ var icons_file = (() => file_jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "17px",
  height: "22px",
  viewBox: "0 0 17 22"
}, file_jsx("g", {
  fill: "none"
}, file_jsx("g", {
  transform: "translate(-630.000000, -2729.000000)",
  fill: useTheme_default()().palette.primary.main
}, file_jsx("g", {
  transform: "translate(60.000000, 640.000000)"
}, file_jsx("g", {
  transform: "translate(0.000000, 1500.000000)"
}, file_jsx("g", {
  transform: "translate(290.000000, 589.000000)"
}, file_jsx("path", {
  d: "M288.5,0 C283.813,0 280,3.838 280,8.556 L280,14.667 L282.428,14.667 L282.428,8.556 C282.428,5.183 285.148,2.444 288.5,2.444 C291.852,2.444 294.571,5.183 294.571,8.556 L294.571,15.889 C294.571,17.918 292.943,19.556 290.929,19.556 C288.912,19.556 287.285,17.918 287.285,15.889 L287.285,8.556 C287.285,7.871 287.819,7.333 288.5,7.333 C289.18,7.333 289.714,7.871 289.714,8.556 L289.714,14.667 L292.143,14.667 L292.143,8.556 C292.143,6.527 290.516,4.889 288.5,4.889 C286.484,4.889 284.857,6.527 284.857,8.556 L284.857,15.889 C284.857,19.263 287.576,22 290.929,22 C294.279,22 297,19.263 297,15.889 L297,8.556 C297,3.838 293.187,0 288.5,0"
}))))))));
// CONCATENATED MODULE: ./components/upload.js


var upload_jsx = external_react_default.a.createElement;



const upload_styles = makeStyles_default()(theme => ({
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

/* harmony default export */ var upload = ((_ref) => {
  let {
    name,
    files,
    onChange
  } = _ref,
      rest = Object(objectWithoutProperties["a" /* default */])(_ref, ["name", "files", "onChange"]);

  const classes = upload_styles();
  return upload_jsx("div", null, upload_jsx("div", {
    className: classes.row
  }, upload_jsx(icons_file, null), upload_jsx("span", {
    className: classes.placeholder
  }, files ? getNames(files) : 'Choose File(s)'), upload_jsx("input", Object(esm_extends["a" /* default */])({
    type: "file",
    name: name,
    className: classes.input,
    onChange: onChange
  }, rest)), [...new Array(rest.multiple ? 2 : 1)].map((n, i) => upload_jsx("progress", {
    key: i,
    id: `${name}-${i}`,
    value: "0",
    max: "100",
    className: classes.progress
  }, "0%"))), upload_jsx("small", {
    className: classes.small
  }, ".jpg .jpeg .png .bmp .pdf, up to 3 MB"));
});
// CONCATENATED MODULE: ./components/fieldset.js
var fieldset_jsx = external_react_default.a.createElement;



const fieldset_styles = makeStyles_default()(theme => ({
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
/* harmony default export */ var fieldset = (({
  children,
  label,
  required
}) => {
  const classes = fieldset_styles();
  return fieldset_jsx("div", {
    className: classes.fieldset
  }, fieldset_jsx("label", {
    className: external_clsx_default()(classes.label, {
      [classes.required]: required
    })
  }, label), children);
});
// EXTERNAL MODULE: ./lib/redux/types.js
var types = __webpack_require__("4C7a");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__("wVQA");

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__("bnmT");

// EXTERNAL MODULE: external "firebase/storage"
var storage_ = __webpack_require__("ha8t");

// CONCATENATED MODULE: ./lib/firebase/index.js



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

if (!app_["apps"].length) {
  app_["initializeApp"](config);
  storage = app_["storage"]();
  firestore = app_["firestore"]();
  timestamp = app_["firestore"].FieldValue.serverTimestamp();
}


// CONCATENATED MODULE: ./lib/redux/actions/form.js




const form_upload = (name, file, index = 0) => dispatch => {
  const task = storage.ref(`bursaries/${file.name}`).put(file, {
    contentType: 'image/jpeg'
  });
  task.on(app_.storage.TaskEvent.STATE_CHANGED, snapshot => {
    const el = document.getElementById(`${name}-${index}`);
    el.style.opacity = '1';
    el.value = snapshot.bytesTransferred / snapshot.totalBytes * 100;
  }, error => error, async () => {
    try {
      const url = await task.snapshot.ref.getDownloadURL();
      dispatch({
        type: types["a" /* FORM */].FIELD,
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

const form_inputChange = e => dispatch => dispatch({
  type: types["a" /* FORM */].INPUT,
  payload: {
    e
  }
});
const form_fileChange = ({
  target: {
    name,
    files
  }
}) => dispatch => {
  dispatch({
    type: types["a" /* FORM */].FILES,
    payload: {
      name,
      files
    }
  });
  files.length > 1 ? [...new Array(2)].map((n, i) => dispatch(form_upload(name, files[i], i))) : dispatch(form_upload(name, files[0]));
};
const post = data => async dispatch => {
  dispatch({
    type: types["a" /* FORM */].LOADING
  });

  try {
    await firestore.collection('bursaries').add(data);
    await dispatch({
      type: types["a" /* FORM */].LOADING
    });
    router_default.a.replace('/thank-you');
  } catch (err) {
    alert('Something went wrong, try again.');
    console.error(err);
  }
};
// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__("NP1D");
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// CONCATENATED MODULE: ./components/form.js


var _temp;

var form_jsx = external_react_default.a.createElement;
























const form_styles = theme => ({
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

/* harmony default export */ var components_form = (withStyles_default()(form_styles, {
  withTheme: true
})(Object(external_react_redux_["connect"])(state => state, {
  fileChange: form_fileChange,
  inputChange: form_inputChange,
  post: post
})((_temp = class extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "validator", new external_simple_react_validator_default.a({
      autoForceUpdate: this
    }));

    Object(defineProperty["a" /* default */])(this, "handleSubmit", e => {
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
    return form_jsx("form", {
      onSubmit: this.handleSubmit
    }, form_jsx(row, {
      title: "Personal Details"
    }, form_jsx(fieldset, {
      label: "Given Names",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(TextField_default.a, {
      name: "names",
      onChange: inputChange,
      value: names,
      className: classes.textField,
      placeholder: "Enter exactly as stated on your NRC"
    }), this.validator.message('name', names, 'required'))), form_jsx(fieldset, {
      label: "Surname",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(TextField_default.a, {
      name: "surname",
      onChange: inputChange,
      value: surname,
      className: classes.textField,
      placeholder: "Enter exactly as stated on your NRC"
    }), this.validator.message('surname', surname, 'required'))), form_jsx(fieldset, {
      label: "Gender",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(RadioGroup_default.a, {
      "aria-label": "position",
      name: "gender",
      value: gender,
      onChange: inputChange,
      row: true
    }, form_jsx(FormControlLabel_default.a, {
      value: "male",
      control: form_jsx(Radio_default.a, {
        color: "primary",
        disableRipple: true
      }),
      label: "Male",
      labelPlacement: "end"
    }), form_jsx(FormControlLabel_default.a, {
      value: "female",
      control: form_jsx(Radio_default.a, {
        color: "primary",
        disableRipple: true
      }),
      label: "Female",
      labelPlacement: "end"
    })), this.validator.message('gender', gender, 'required'))), form_jsx(fieldset, {
      label: "NRC",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(TextField_default.a, {
      name: "nrc",
      onChange: inputChange,
      value: nrc,
      className: classes.textField,
      placeholder: "000000/00/0"
    }), this.validator.message('nrc', nrc, 'required'))), form_jsx(fieldset, {
      label: "birthday",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(TextField_default.a, {
      name: "birthday",
      onChange: inputChange,
      value: birthday,
      className: classes.textField,
      placeholder: "DD/MM/YYYY"
    }), this.validator.message('birthday', birthday, 'required')))), form_jsx(row, {
      title: "Contact Details"
    }, form_jsx(fieldset, {
      label: "Address",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(TextField_default.a, {
      name: "address",
      onChange: inputChange,
      value: address,
      className: classes.textField,
      placeholder: "Street, City/Town, Province"
    }), this.validator.message('address', address, 'required'))), form_jsx(fieldset, {
      label: "Phone number",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(TextField_default.a, {
      name: "phone",
      onChange: inputChange,
      value: phone,
      className: classes.textField,
      InputProps: {
        startAdornment: form_jsx(InputAdornment_default.a, {
          position: "start"
        }, "+260")
      }
    }), this.validator.message('phone', phone, 'required'))), form_jsx(fieldset, {
      label: "Email Address",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(TextField_default.a, {
      name: "email",
      onChange: inputChange,
      value: email,
      className: classes.textField,
      placeholder: "Your active Email Address"
    }), this.validator.message('email', email, 'required|email')))), form_jsx(row, {
      title: "Guardian Details",
      subtitle: "(if less than 21)"
    }, form_jsx(fieldset, {
      label: "Full Names"
    }, form_jsx(TextField_default.a, {
      name: "guardian",
      onChange: inputChange,
      value: guardian,
      className: classes.textField,
      placeholder: "Guardian Full Name"
    })), form_jsx(fieldset, {
      label: "Guardian Phone"
    }, form_jsx(TextField_default.a, {
      name: "guardianPhone",
      onChange: inputChange,
      value: guardianPhone,
      className: classes.textField,
      placeholder: "Guardian Phone Number"
    }))), form_jsx(row, {
      title: "Additional Details"
    }, form_jsx(fieldset, {
      label: "University/ College",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(TextField_default.a, {
      name: "school",
      onChange: inputChange,
      value: school,
      className: classes.textField
    }), this.validator.message('school', school, 'required'))), form_jsx(fieldset, {
      label: "Major",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(TextField_default.a, {
      name: "major",
      onChange: inputChange,
      value: major,
      className: classes.textField
    }), this.validator.message('major', major, 'required'))), form_jsx(fieldset, {
      label: "Academic Qualification",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(upload, {
      name: "certificate",
      files: certificate,
      onChange: fileChange
    }), this.validator.message('certificate', certificate, 'required'))), form_jsx(fieldset, {
      label: "Acceptance/ Recommendation Letter",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(upload, {
      name: "letter",
      files: letter,
      onChange: fileChange
    }), this.validator.message('acceptance/recommendation', letter, 'required'))), form_jsx(fieldset, {
      label: "NRC",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(upload, {
      name: "ids",
      files: ids,
      multiple: true,
      onChange: fileChange
    }), this.validator.message('nrc attachment', ids, 'required'))), form_jsx(fieldset, {
      label: "2 Passport Size Photos",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(upload, {
      name: "photos",
      files: photos,
      multiple: true,
      onChange: fileChange
    }), this.validator.message('passport photos', photos, 'required')))), form_jsx(row, {
      title: "Payment"
    }, form_jsx(fieldset, {
      label: "Deposit Slip",
      required: true
    }, form_jsx("div", {
      className: classes.col
    }, form_jsx(upload, {
      name: "payment",
      files: payment,
      onChange: fileChange
    }), this.validator.message('deposit slip', payment, 'required')))), form_jsx(terms, null), form_jsx("div", {
      className: classes.actions
    }, form_jsx(List_default.a, {
      component: "nav"
    }, form_jsx(ListItem_default.a, null, form_jsx(ListItemIcon_default.a, null, form_jsx(icons["a" /* default */], {
      name: "check",
      fill: theme.palette.primary.main
    })), form_jsx(ListItemText_default.a, {
      primary: "I agree to the above Terms & Conditions"
    }))), form_jsx(Button_default.a, {
      type: "submit",
      color: "primary",
      size: "large",
      variant: "contained"
    }, form_jsx(Typography_default.a, {
      className: classes.typography
    }, "Submit Application"), form_jsx(CircularProgress_default.a, {
      size: 20,
      thickness: 4,
      className: external_clsx_default()(classes.progress, {
        [classes.show]: loading
      })
    }))));
  }

}, _temp))));
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./components/hero.js
var hero_jsx = external_react_default.a.createElement;




const hero_styles = makeStyles_default()(theme => ({
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
/* harmony default export */ var hero = (() => {
  const classes = hero_styles();
  return hero_jsx("div", {
    className: classes.hero
  }, hero_jsx(Container_default.a, {
    className: classes.cover
  }, hero_jsx(core_["Typography"], {
    variant: "h2",
    className: classes.heading
  }, "Walanda Bursaries")));
});
// CONCATENATED MODULE: ./components/intro.js
var intro_jsx = external_react_default.a.createElement;




const intro_styles = makeStyles_default()(theme => ({
  type: {
    marginBottom: 18
  }
}));
/* harmony default export */ var intro = (() => {
  const classes = intro_styles();
  return intro_jsx(row, {
    disableBackground: true
  }, intro_jsx(Typography_default.a, {
    className: classes.type
  }, intro_jsx("b", null, "Walanda Bursaries"), " is established with the intention to provide financial assistance to individuals that qualify to be enrolled in various colleges and Universities. Preference will be given to Zambian students with a proven record of good grades and a passion for education."), intro_jsx(Typography_default.a, {
    className: classes.type
  }, intro_jsx("b", null, "Walanda assistance"), " is based on academic performance. Bursaries are awarded twice in a year provided funds are available."), intro_jsx(Typography_default.a, {
    className: classes.type
  }, intro_jsx("b", null, "Walanda awards"), " bursaries on the basis of a comprehensive process. Bursaries awarded are based upon the availability of funds and additional qualifying criteria."), intro_jsx(Typography_default.a, {
    className: classes.type
  }, intro_jsx("b", null, "DEADLINE"), " for bursary applications is 1st November for the January intake. Applications made after the said date will be considered for the June/July intake."));
});
// EXTERNAL MODULE: ./components/layout.js + 4 modules
var layout = __webpack_require__("CafY");

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// CONCATENATED MODULE: ./components/payments.js
var payments_jsx = external_react_default.a.createElement;





const payments_styles = makeStyles_default()(theme => ({
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
/* harmony default export */ var payments = (() => {
  const classes = payments_styles();
  return payments_jsx("div", {
    className: classes.root
  }, payments_jsx(Container_default.a, null, payments_jsx(Grid_default.a, {
    container: true
  }, payments_jsx(Grid_default.a, {
    item: true,
    xs: 2
  }, payments_jsx(core_["Typography"], {
    variant: "button"
  }, "BANK DETAILS"), payments_jsx(core_["Typography"], null, "Bank"), payments_jsx(core_["Typography"], null, "Account Name"), payments_jsx(core_["Typography"], null, "Account Number"), payments_jsx(core_["Typography"], null, "Branch")), payments_jsx(Grid_default.a, {
    item: true,
    xs: 4
  }, payments_jsx(core_["Typography"], {
    className: classes.hidden
  }, "."), payments_jsx(core_["Typography"], null, "AtlasMara"), payments_jsx(core_["Typography"], null, "Mulena Information Technology Ltd"), payments_jsx(core_["Typography"], null, "3255047933029"), payments_jsx(core_["Typography"], null, "East Pack Mall")), payments_jsx(Grid_default.a, {
    item: true,
    xs: 6,
    className: classes.xs6
  }, payments_jsx(core_["Typography"], {
    variant: "button"
  }, "MOBILE MONEY(MTN)"), payments_jsx(core_["Typography"], null, "Dial *303#"), payments_jsx(core_["Typography"], null, "Select option 5 (Momo Pay)"), payments_jsx(core_["Typography"], null, "Select option 1 (Merchant Code)"), payments_jsx(core_["Typography"], null, "Enter Merchant Code: 748832"), payments_jsx(core_["Typography"], null, "Enter Reason: Walanda Bursaries")))));
});
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;






/* harmony default export */ var pages = __webpack_exports__["default"] = (() => pages_jsx(layout["a" /* default */], null, pages_jsx(hero, null), pages_jsx(intro, null), pages_jsx(components_form, null), pages_jsx(payments, null)));

/***/ }),

/***/ "TPw6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "XHjz":
/***/ (function(module, exports) {

module.exports = require("simple-react-validator");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dhEp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MYXB");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


const data = {
  email: 'M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z',
  facebook: 'M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z',
  check: 'M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z',
  phone: 'M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z'
};
/* harmony default export */ __webpack_exports__["a"] = ((_ref) => {
  let {
    name,
    fill
  } = _ref,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["name", "fill"]);

  const x = data[name];
  const v = x.viewBox || '0 0 24 24';
  const o = typeof x === 'object';
  return __jsx(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lj8g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "lpv4":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "p1B1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pneb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OCF2");
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

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "uFB0":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("OCF2");

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

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wicp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/useTheme");

/***/ }),

/***/ "wk2l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("8k7s");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("TPw6");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: /Users/me/dev/bur/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

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

/***/ "znL5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LcAa");
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

/***/ })

/******/ });