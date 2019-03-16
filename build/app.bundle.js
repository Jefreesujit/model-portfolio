webpackJsonp([0],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCATION_CHANGE = exports.SET_PAGEDATA = exports.FETCHING_PAGEDATA = undefined;
exports.fetchingPageData = fetchingPageData;
exports.setPageData = setPageData;
exports.fetchPageData = fetchPageData;

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCHING_PAGEDATA = exports.FETCHING_PAGEDATA = 'FETCHING_PAGEDATA'; /** This provides the various redux actions to trigger app state changes by the redux reducer
                                                                          * @module Redux actions
                                                                          */

var SET_PAGEDATA = exports.SET_PAGEDATA = 'SET_PAGEDATA';
var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

function fetchingPageData() {
  return {
    type: FETCHING_PAGEDATA
  };
}

function setPageData(data) {
  return {
    type: SET_PAGEDATA,
    payload: data
  };
}

function fetchPageData() {
  return function (dispatch) {
    dispatch(fetchingPageData());
    return _axios2.default.get('/api/get-page-details').then(function (response) {
      dispatch(setPageData(response.data));
    });
  };
}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(19);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouter = __webpack_require__(6);

var _reactRouterRedux = __webpack_require__(8);

var _index = __webpack_require__(64);

var reducers = _interopRequireWildcard(_index);

var _defaultState = __webpack_require__(65);

var _defaultState2 = _interopRequireDefault(_defaultState);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  app: reducers.appState,
  dataRequests: reducers.dataRequests,
  routing: _reactRouterRedux.routerReducer,
  homePage: reducers.homePageReducer
});

var routingMiddleware = (0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory);

var store = (0, _redux.createStore)(reducer, _defaultState2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, routingMiddleware), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
}));

exports.default = store;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-unused-vars */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Error404 = function (_React$Component) {
  _inherits(Error404, _React$Component);

  function Error404() {
    _classCallCheck(this, Error404);

    return _possibleConstructorReturn(this, (Error404.__proto__ || Object.getPrototypeOf(Error404)).apply(this, arguments));
  }

  _createClass(Error404, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'page-container' },
        _react2.default.createElement(
          'h2',
          { className: 'error-heading' },
          '404 - Missing Resource '
        ),
        _react2.default.createElement(
          'p',
          null,
          'Please try again, but if the problem persist, contact an administrator.'
        )
      );
    }
  }]);

  return Error404;
}(_react2.default.Component);

Error404.displayName = 'Error404';

exports.default = Error404;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(67);

var _index2 = _interopRequireDefault(_index);

var _actions = __webpack_require__(25);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch(actions.fetchPageData());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _index2.default,
        { className: 'home-page', header: 'Home' },
        _react2.default.createElement(
          'h2',
          null,
          this.props.message
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.displayName = 'Home';

function select(state) {
  return {
    message: state.homePage.message
  };
}

exports.default = (0, _reactRedux.connect)(select)(Home);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PortFolioCustomize = function (_React$Component) {
  _inherits(PortFolioCustomize, _React$Component);

  function PortFolioCustomize() {
    _classCallCheck(this, PortFolioCustomize);

    return _possibleConstructorReturn(this, (PortFolioCustomize.__proto__ || Object.getPrototypeOf(PortFolioCustomize)).call(this));
  }

  _createClass(PortFolioCustomize, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'portfolio-customize-section' },
        _react2.default.createElement(
          'h2',
          null,
          ' Portfolio customize'
        )
      );
    }
  }]);

  return PortFolioCustomize;
}(_react2.default.Component);

PortFolioCustomize.displayName = 'PortFolioCustomize';

exports.default = PortFolioCustomize;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PortFolioListing = function (_React$Component) {
  _inherits(PortFolioListing, _React$Component);

  function PortFolioListing() {
    _classCallCheck(this, PortFolioListing);

    return _possibleConstructorReturn(this, (PortFolioListing.__proto__ || Object.getPrototypeOf(PortFolioListing)).call(this));
  }

  _createClass(PortFolioListing, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'portfolio-listing-section' },
        _react2.default.createElement(
          'h2',
          null,
          ' Portfolio Listing'
        )
      );
    }
  }]);

  return PortFolioListing;
}(_react2.default.Component);

PortFolioListing.displayName = 'PortFolioListing';

exports.default = PortFolioListing;

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["MemoryRouter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["Prompt"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["Redirect"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["Route"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["Router"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["StaticRouter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["Switch"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["generatePath"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["matchPath"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["withRouter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["__RouterContext"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tiny_warning__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_tiny_invariant__ = __webpack_require__(16);











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history__["createBrowserHistory"])(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

if (process.env.NODE_ENV !== "production") {
  BrowserRouter.propTypes = {
    basename: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,
    forceRefresh: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    getUserConfirmation: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    keyLength: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number
  };

  BrowserRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_tiny_warning__["a" /* default */])(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : void 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history__["createHashHistory"])(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

if (process.env.NODE_ENV !== "production") {
  HashRouter.propTypes = {
    basename: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,
    getUserConfirmation: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    hashType: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_tiny_warning__["a" /* default */])(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : void 0;
  };
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link =
/*#__PURE__*/
function (_React$Component) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(Link, _React$Component);

  function Link() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Link.prototype;

  _proto.handleClick = function handleClick(event, history) {
    if (this.props.onClick) this.props.onClick(event);

    if (!event.defaultPrevented && // onClick prevented default
    event.button === 0 && ( // ignore everything but left clicks
    !this.props.target || this.props.target === "_self") && // let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
        event.preventDefault();
        var method = this.props.replace ? history.replace : history.push;
        method(this.props.to);
      }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        innerRef = _this$props.innerRef,
        replace = _this$props.replace,
        to = _this$props.to,
        rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["innerRef", "replace", "to"]); // eslint-disable-line no-unused-vars


    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["__RouterContext"].Consumer, null, function (context) {
      !context ? process.env.NODE_ENV !== "production" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_tiny_invariant__["a" /* default */])(false, "You should not use <Link> outside a <Router>") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_tiny_invariant__["a" /* default */])(false) : void 0;
      var location = typeof to === "string" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history__["createLocation"])(to, null, null, context.location) : to;
      var href = location ? context.history.createHref(location) : "";
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__["a" /* default */])({}, rest, {
        onClick: function onClick(event) {
          return _this.handleClick(event, context.history);
        },
        href: href,
        ref: innerRef
      }));
    });
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

if (process.env.NODE_ENV !== "production") {
  var toType = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object]);
  var innerRefType = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
    current: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any
  })]);
  Link.propTypes = {
    innerRef: innerRefType,
    onClick: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    replace: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    target: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    to: toType.isRequired
  };
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


function NavLink(_ref) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      location = _ref.location,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to"]);

  var path = typeof to === "object" ? to.pathname : to; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Route"], {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;
      var isActive = !!(isActiveProp ? isActiveProp(match, location) : match);
      var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
      var style = isActive ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__["a" /* default */])({}, styleProp, activeStyle) : styleProp;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Link, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__["a" /* default */])({
        "aria-current": isActive && ariaCurrent || null,
        className: className,
        style: style,
        to: to
      }, rest));
    }
  });
}

if (process.env.NODE_ENV !== "production") {
  var ariaCurrentType = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__["a" /* default */])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    activeStyle: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    exact: __WEBPACK_IMPORTED_MODULE_2_react_router__["Route"].propTypes.exact,
    isActive: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    location: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    strict: __WEBPACK_IMPORTED_MODULE_2_react_router__["Route"].propTypes.strict,
    style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object
  });
}



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homePageReducer = homePageReducer;
exports.appState = appState;
exports.dataRequests = dataRequests;

var _index = __webpack_require__(25);

var actionEvents = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function homePageReducer(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_PAGEDATA) {
    newState = action.payload;
  }

  return newState;
}

function appState(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.LOCATION_CHANGE) {
    newState.current.path = action.payload.pathname;
  }

  return newState;
}

function dataRequests(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SETTING_PAGEDATA) {
    newState.settings = true;
  } else if (actionType === actionEvents.SET_PAGEDATA) {
    newState.settings = false;
  }

  return newState;
}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  app: {
    current: {
      path: '',
      pageTitle: ''
    }
  },
  homePage: {
    message: "Template Message"
  }
};

exports.default = state;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global location */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(7);

var _index = __webpack_require__(38);

var _index2 = _interopRequireDefault(_index);

var _reactRouterDom = __webpack_require__(46);

var _reactRouterRedux = __webpack_require__(8);

var _home = __webpack_require__(40);

var _home2 = _interopRequireDefault(_home);

var _error = __webpack_require__(39);

var _error2 = _interopRequireDefault(_error);

var _portfolioCustomize = __webpack_require__(41);

var _portfolioCustomize2 = _interopRequireDefault(_portfolioCustomize);

var _portfolioListing = __webpack_require__(42);

var _portfolioListing2 = _interopRequireDefault(_portfolioListing);

var _history = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var history = (0, _reactRouterRedux.syncHistoryWithStore)((0, _history.createBrowserHistory)(), _index2.default);
console.log(history);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'view-container' },
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: _index2.default },
          _react2.default.createElement(
            _reactRouterDom.Router,
            { history: history },
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _portfolioListing2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/portfolio-customize', component: _portfolioCustomize2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/404', component: _error2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { nomatch: true, component: _error2.default })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.displayName = 'App';

// Bootstrap client
if (typeof window !== 'undefined') {
  window.onload = function () {
    var props = {
      path: location.pathname
    };
    _reactDom2.default.render(_react2.default.createElement(App, props), document.getElementById('reactView'));
  };
}

exports.default = App;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          { id: 'header' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement('div', { className: 'logo-icon' }),
            _react2.default.createElement(
              'div',
              { className: 'page-header' },
              this.props.header
            )
          )
        ),
        _react2.default.createElement(
          'main',
          { id: 'body' },
          _react2.default.createElement(
            'div',
            { id: 'container', className: 'page-container' },
            this.props.children
          )
        ),
        _react2.default.createElement(
          'footer',
          null,
          _react2.default.createElement(
            'div',
            { className: 'footer' },
            'Generated by ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/jefreesujit/generator-react-node' },
              'generator-react-node'
            ),
            '.'
          )
        )
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

Page.displayName = 'Page';

exports.default = Page;

/***/ })

},[66]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9lcnJvcjQwNC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9DdXN0b21pemUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9MaXN0aW5nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyLWRvbS9lc20vcmVhY3Qtcm91dGVyLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvc3RvcmVzL2RlZmF1bHRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZmV0Y2hpbmdQYWdlRGF0YSIsInNldFBhZ2VEYXRhIiwiZmV0Y2hQYWdlRGF0YSIsIkZFVENISU5HX1BBR0VEQVRBIiwiU0VUX1BBR0VEQVRBIiwiTE9DQVRJT05fQ0hBTkdFIiwidHlwZSIsImRhdGEiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInJlZHVjZXJzIiwicmVkdWNlciIsImFwcCIsImFwcFN0YXRlIiwiZGF0YVJlcXVlc3RzIiwicm91dGluZyIsInJvdXRlclJlZHVjZXIiLCJob21lUGFnZSIsImhvbWVQYWdlUmVkdWNlciIsInJvdXRpbmdNaWRkbGV3YXJlIiwiYnJvd3Nlckhpc3RvcnkiLCJzdG9yZSIsImRlZmF1bHRTdGF0ZSIsInRodW5rIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmIiwiRXJyb3I0MDQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiYWN0aW9ucyIsIkhvbWUiLCJwcm9wcyIsIm1lc3NhZ2UiLCJzZWxlY3QiLCJzdGF0ZSIsIlBvcnRGb2xpb0N1c3RvbWl6ZSIsIlBvcnRGb2xpb0xpc3RpbmciLCJhY3Rpb25FdmVudHMiLCJhY3Rpb24iLCJhY3Rpb25UeXBlIiwibmV3U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjdXJyZW50IiwicGF0aCIsInBhdGhuYW1lIiwiU0VUVElOR19QQUdFREFUQSIsInNldHRpbmdzIiwicGFnZVRpdGxlIiwiaGlzdG9yeSIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJQb3J0Zm9saW9MaXN0aW5nIiwiUG9ydGZvbGlvQ3VzdG9taXplIiwib25sb2FkIiwibG9jYXRpb24iLCJSZWFjdERPTSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUGFnZSIsImhlYWRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUFVZ0JBLGdCLEdBQUFBLGdCO1FBTUFDLFcsR0FBQUEsVztRQU9BQyxhLEdBQUFBLGE7O0FBbkJoQjs7Ozs7O0FBRU8sSUFBTUMsZ0RBQW9CLG1CQUExQixDLENBTlA7Ozs7QUFPTyxJQUFNQyxzQ0FBZSxjQUFyQjtBQUNBLElBQU1DLDRDQUFrQiwwQkFBeEI7O0FBRUEsU0FBU0wsZ0JBQVQsR0FBNkI7QUFDbEMsU0FBTztBQUNMTSxVQUFNSDtBQURELEdBQVA7QUFHRDs7QUFFTSxTQUFTRixXQUFULENBQXNCTSxJQUF0QixFQUE0QjtBQUNqQyxTQUFPO0FBQ0xELFVBQU1GLFlBREQ7QUFFTEksYUFBU0Q7QUFGSixHQUFQO0FBSUQ7O0FBRU0sU0FBU0wsYUFBVCxHQUEwQjtBQUMvQixTQUFPLFVBQVVPLFFBQVYsRUFBb0I7QUFDekJBLGFBQVNULGtCQUFUO0FBQ0EsV0FBT1UsZ0JBQU1DLEdBQU4sQ0FBVSx1QkFBVixFQUNIQyxJQURHLENBQ0UsVUFBVUMsUUFBVixFQUFvQjtBQUN4QkosZUFBU1IsWUFBWVksU0FBU04sSUFBckIsQ0FBVDtBQUNELEtBSEcsQ0FBUDtBQUlELEdBTkQ7QUFPRCxDOzs7Ozs7Ozs7Ozs7OztBQy9CRDs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztJQUFZTyxROztBQUNaOzs7Ozs7OztBQUVBLElBQU1DLFVBQVUsNEJBQWdCO0FBQzlCQyxPQUFLRixTQUFTRyxRQURnQjtBQUU5QkMsZ0JBQWNKLFNBQVNJLFlBRk87QUFHOUJDLFdBQVNDLCtCQUhxQjtBQUk5QkMsWUFBVVAsU0FBU1E7QUFKVyxDQUFoQixDQUFoQjs7QUFPQSxJQUFNQyxvQkFBb0Isd0NBQWlCQywyQkFBakIsQ0FBMUI7O0FBRUEsSUFBTUMsUUFBUSx3QkFBWVYsT0FBWixFQUFxQlcsc0JBQXJCLEVBQW1DLG9CQUMvQyw0QkFBZ0JDLG9CQUFoQixFQUF1QkosaUJBQXZCLENBRCtDLEVBRS9DSyxPQUFPQyxpQkFBUCxHQUEyQkQsT0FBT0MsaUJBQVAsRUFBM0IsR0FBd0Q7QUFBQSxTQUFLQyxDQUFMO0FBQUEsQ0FGVCxDQUFuQyxDQUFkOztrQkFLZUwsSzs7Ozs7Ozs7QUNyQkY7O0FBRWI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNTSxROzs7Ozs7Ozs7Ozs2QkFFTTtBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQURGO0FBTUQ7Ozs7RUFUb0JDLGdCQUFNQyxTOztBQVk3QkYsU0FBU0csV0FBVCxHQUF1QixVQUF2Qjs7a0JBRWVILFE7Ozs7Ozs7O0FDbkJGOzs7Ozs7OztBQUViOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUksTzs7QUFDWjs7Ozs7Ozs7Ozs7O0lBRU1DLEk7OztBQUNKLGtCQUFlO0FBQUE7O0FBQUE7QUFFZDs7Ozt5Q0FFcUI7QUFDcEIsV0FBS0MsS0FBTCxDQUFXNUIsUUFBWCxDQUFvQjBCLFFBQVFqQyxhQUFSLEVBQXBCO0FBQ0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQyx1QkFBRDtBQUFBLFVBQU0sV0FBVSxXQUFoQixFQUE0QixRQUFPLE1BQW5DO0FBQ0U7QUFBQTtBQUFBO0FBQUssZUFBS21DLEtBQUwsQ0FBV0M7QUFBaEI7QUFERixPQURGO0FBS0Q7Ozs7RUFmZ0JOLGdCQUFNQyxTOztBQWtCekJHLEtBQUtGLFdBQUwsR0FBbUIsTUFBbkI7O0FBRUEsU0FBU0ssTUFBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDdEIsU0FBTztBQUNMRixhQUFTRSxNQUFNbkIsUUFBTixDQUFlaUI7QUFEbkIsR0FBUDtBQUdEOztrQkFFYyx5QkFBUUMsTUFBUixFQUFnQkgsSUFBaEIsQzs7Ozs7Ozs7QUNqQ0Y7Ozs7Ozs7O0FBRWI7Ozs7Ozs7Ozs7OztJQUVNSyxrQjs7O0FBQ0osZ0NBQWU7QUFBQTs7QUFBQTtBQUVkOzs7OzZCQUVTO0FBQ1IsYUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLDZCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLE9BREE7QUFLRDs7OztFQVg4QlQsZ0JBQU1DLFM7O0FBY3ZDUSxtQkFBbUJQLFdBQW5CLEdBQWlDLG9CQUFqQzs7a0JBRWVPLGtCOzs7Ozs7OztBQ3BCRjs7Ozs7Ozs7QUFFYjs7Ozs7Ozs7Ozs7O0lBRU1DLGdCOzs7QUFDSiw4QkFBZTtBQUFBOztBQUFBO0FBRWQ7Ozs7NkJBRVM7QUFDUixhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsMkJBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosT0FEQTtBQUtEOzs7O0VBWDRCVixnQkFBTUMsUzs7QUFjckNTLGlCQUFpQlIsV0FBakIsR0FBK0Isa0JBQS9COztrQkFFZVEsZ0I7Ozs7Ozs7O0FDcEJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRTtBQUM1QztBQUNvQztBQUNqQztBQUNxRDtBQUMvQztBQUNBO0FBQ3VCO0FBQzBDO0FBQzdEOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnSEFBYzs7QUFFaEI7QUFDQTs7QUFFQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9GQUFvQjtBQUN4QztBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVyw2Q0FBSyxlQUFlLG9EQUFNO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDLENBQUMsNkNBQUs7O0FBRVA7QUFDQTtBQUNBLGNBQWMsa0RBQVM7QUFDdkIsY0FBYyxrREFBUztBQUN2QixrQkFBa0Isa0RBQVM7QUFDM0IseUJBQXlCLGtEQUFTO0FBQ2xDLGVBQWUsa0RBQVM7QUFDeEI7O0FBRUE7QUFDQSw0Q0FBNEMsb0ZBQU8sNEdBQTRHLFNBQVMsc0JBQXNCLDBCQUEwQjtBQUN4TjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdIQUFjOztBQUVoQjtBQUNBOztBQUVBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsaUZBQWlCO0FBQ3JDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFXLDZDQUFLLGVBQWUsb0RBQU07QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUMsQ0FBQyw2Q0FBSzs7QUFFUDtBQUNBO0FBQ0EsY0FBYyxrREFBUztBQUN2QixjQUFjLGtEQUFTO0FBQ3ZCLHlCQUF5QixrREFBUztBQUNsQyxjQUFjLGtEQUFTO0FBQ3ZCOztBQUVBO0FBQ0EsNENBQTRDLG9GQUFPLHlHQUF5RyxTQUFTLHNCQUFzQix1QkFBdUI7QUFDbE47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0hBQWM7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtIQUE2Qiw2Q0FBNkM7OztBQUd6RixXQUFXLDZDQUFLLGVBQWUsNkRBQWU7QUFDOUMseURBQXlELHNGQUFTLDBEQUEwRCxzRkFBUztBQUNySSw4Q0FBOEMsOEVBQWM7QUFDNUQ7QUFDQSxhQUFhLDZDQUFLLG9CQUFvQiwwR0FBUSxHQUFHO0FBQ2pEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDLENBQUMsNkNBQUs7O0FBRVA7QUFDQSxlQUFlLGtEQUFTLFlBQVksa0RBQVMsU0FBUyxrREFBUztBQUMvRCxxQkFBcUIsa0RBQVMsWUFBWSxrREFBUyxTQUFTLGtEQUFTLE9BQU8sa0RBQVM7QUFDckYsYUFBYSxrREFBUztBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGFBQWEsa0RBQVM7QUFDdEIsYUFBYSxrREFBUztBQUN0QixZQUFZLGtEQUFTO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRSxhQUFhO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtIQUE2Qjs7QUFFMUMsdURBQXVEOztBQUV2RCx1REFBdUQ7QUFDdkQsU0FBUyw2Q0FBSyxlQUFlLG1EQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwwR0FBUSxHQUFHO0FBQ3hDLGFBQWEsNkNBQUsscUJBQXFCLDBHQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esd0JBQXdCLGtEQUFTO0FBQ2pDLHNCQUFzQiwwR0FBUSxHQUFHO0FBQ2pDO0FBQ0EscUJBQXFCLGtEQUFTO0FBQzlCLGlCQUFpQixrREFBUztBQUMxQixlQUFlLGtEQUFTO0FBQ3hCLFdBQVcsbURBQUs7QUFDaEIsY0FBYyxrREFBUztBQUN2QixjQUFjLGtEQUFTO0FBQ3ZCLFlBQVksbURBQUs7QUFDakIsV0FBVyxrREFBUztBQUNwQixHQUFHO0FBQ0g7O0FBRW9EOzs7Ozs7Ozs7Ozs7Ozs7UUNwUHBDcEIsZSxHQUFBQSxlO1FBV0FMLFEsR0FBQUEsUTtRQVdBQyxZLEdBQUFBLFk7O0FBeEJoQjs7SUFBWXlCLFk7Ozs7QUFFTCxTQUFTckIsZUFBVCxDQUEwQmtCLEtBQTFCLEVBQWlDSSxNQUFqQyxFQUF5QztBQUM5QyxNQUFJQyxhQUFhRCxPQUFPdEMsSUFBeEI7QUFBQSxNQUNJd0MsV0FBV0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JSLEtBQWxCLENBRGY7O0FBR0EsTUFBSUssZUFBZUYsYUFBYXZDLFlBQWhDLEVBQThDO0FBQzVDMEMsZUFBV0YsT0FBT3BDLE9BQWxCO0FBQ0Q7O0FBRUQsU0FBT3NDLFFBQVA7QUFDRDs7QUFFTSxTQUFTN0IsUUFBVCxDQUFtQnVCLEtBQW5CLEVBQTBCSSxNQUExQixFQUFrQztBQUN2QyxNQUFJQyxhQUFhRCxPQUFPdEMsSUFBeEI7QUFBQSxNQUNJd0MsV0FBV0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JSLEtBQWxCLENBRGY7O0FBR0EsTUFBSUssZUFBZUYsYUFBYXRDLGVBQWhDLEVBQWlEO0FBQy9DeUMsYUFBU0csT0FBVCxDQUFpQkMsSUFBakIsR0FBd0JOLE9BQU9wQyxPQUFQLENBQWUyQyxRQUF2QztBQUNEOztBQUVELFNBQU9MLFFBQVA7QUFDRDs7QUFFTSxTQUFTNUIsWUFBVCxDQUF1QnNCLEtBQXZCLEVBQThCSSxNQUE5QixFQUFzQztBQUMzQyxNQUFJQyxhQUFhRCxPQUFPdEMsSUFBeEI7QUFBQSxNQUNJd0MsV0FBV0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JSLEtBQWxCLENBRGY7O0FBR0EsTUFBSUssZUFBZUYsYUFBYVMsZ0JBQWhDLEVBQWtEO0FBQ2hETixhQUFTTyxRQUFULEdBQW9CLElBQXBCO0FBQ0QsR0FGRCxNQUVPLElBQUlSLGVBQWVGLGFBQWF2QyxZQUFoQyxFQUE4QztBQUNuRDBDLGFBQVNPLFFBQVQsR0FBb0IsS0FBcEI7QUFDRDs7QUFFRCxTQUFPUCxRQUFQO0FBQ0QsQzs7Ozs7Ozs7QUNuQ1k7Ozs7O0FBRWIsSUFBSU4sUUFBUTtBQUNWeEIsT0FBSztBQUNIaUMsYUFBUztBQUNQQyxZQUFNLEVBREM7QUFFUEksaUJBQVc7QUFGSjtBQUROLEdBREs7QUFPVmpDLFlBQVU7QUFDUmlCLGFBQVM7QUFERDtBQVBBLENBQVo7O2tCQVllRSxLOzs7Ozs7OztBQ2RmOztBQUVhOzs7Ozs7OztBQUViOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNZSxVQUFVLDRDQUFxQixvQ0FBckIsRUFBNkM5QixlQUE3QyxDQUFoQjtBQUNBK0IsUUFBUUMsR0FBUixDQUFZRixPQUFaOztJQUVNRyxHOzs7QUFDSixpQkFBZTtBQUFBOztBQUFBO0FBRWQ7Ozs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFDLDhCQUFEO0FBQUEsWUFBVSxPQUFPakMsZUFBakI7QUFDRTtBQUFDLGtDQUFEO0FBQUEsY0FBUSxTQUFTOEIsT0FBakI7QUFDRTtBQUFDLG9DQUFEO0FBQUE7QUFDRSw0Q0FBQyxxQkFBRCxJQUFPLE1BQUssR0FBWixFQUFnQixXQUFXSSwwQkFBM0IsR0FERjtBQUVFLDRDQUFDLHFCQUFELElBQU8sTUFBSyxzQkFBWixFQUFtQyxXQUFXQyw0QkFBOUMsR0FGRjtBQUdFLDRDQUFDLHFCQUFELElBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVc3QixlQUE5QixHQUhGO0FBSUUsNENBQUMscUJBQUQsSUFBTyxhQUFQLEVBQWUsV0FBV0EsZUFBMUI7QUFKRjtBQURGO0FBREY7QUFERixPQURGO0FBY0Q7Ozs7RUFwQmVDLGdCQUFNQyxTOztBQXVCeEJ5QixJQUFJeEIsV0FBSixHQUFrQixLQUFsQjs7QUFFQTtBQUNBLElBQUksT0FBT04sTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQ0EsU0FBT2lDLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQixRQUFJeEIsUUFBUTtBQUNWYSxZQUFNWSxTQUFTWDtBQURMLEtBQVo7QUFHQVksdUJBQVNDLE1BQVQsQ0FBZ0JoQyxnQkFBTWlDLGFBQU4sQ0FBb0JQLEdBQXBCLEVBQXlCckIsS0FBekIsQ0FBaEIsRUFBaUQ2QixTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBQWpEO0FBQ0QsR0FMRDtBQU1EOztrQkFFY1QsRzs7Ozs7Ozs7QUN0REY7Ozs7Ozs7O0FBRWI7Ozs7Ozs7Ozs7OztJQUVNVSxJOzs7QUFDSixrQkFBZTtBQUFBOztBQUFBO0FBRWQ7Ozs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFRLElBQUcsUUFBWDtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsS0FBZjtBQUNFLG1EQUFLLFdBQVUsV0FBZixHQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsYUFBZjtBQUE4QixtQkFBSy9CLEtBQUwsQ0FBV2dDO0FBQXpDO0FBRkY7QUFERixTQURGO0FBT0U7QUFBQTtBQUFBLFlBQU0sSUFBRyxNQUFUO0FBQ0U7QUFBQTtBQUFBLGNBQUssSUFBRyxXQUFSLEVBQW9CLFdBQVUsZ0JBQTlCO0FBQ0csaUJBQUtoQyxLQUFMLENBQVdpQztBQURkO0FBREYsU0FQRjtBQVlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsUUFBZjtBQUFBO0FBQ2U7QUFBQTtBQUFBLGdCQUFHLE1BQUsscURBQVI7QUFBQTtBQUFBLGFBRGY7QUFBQTtBQUFBO0FBREY7QUFaRixPQURGO0FBb0JEOzs7O0VBMUJnQnRDLGdCQUFNQyxTOztBQTZCekJtQyxLQUFLbEMsV0FBTCxHQUFtQixNQUFuQjs7a0JBRWVrQyxJIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVGhpcyBwcm92aWRlcyB0aGUgdmFyaW91cyByZWR1eCBhY3Rpb25zIHRvIHRyaWdnZXIgYXBwIHN0YXRlIGNoYW5nZXMgYnkgdGhlIHJlZHV4IHJlZHVjZXJcclxuICogQG1vZHVsZSBSZWR1eCBhY3Rpb25zXHJcbiAqL1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBGRVRDSElOR19QQUdFREFUQSA9ICdGRVRDSElOR19QQUdFREFUQSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUEFHRURBVEEgPSAnU0VUX1BBR0VEQVRBJztcclxuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0NIQU5HRSA9ICdAQHJvdXRlci9MT0NBVElPTl9DSEFOR0UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoaW5nUGFnZURhdGEgKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBGRVRDSElOR19QQUdFREFUQVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQYWdlRGF0YSAoZGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTRVRfUEFHRURBVEEsXHJcbiAgICBwYXlsb2FkOiBkYXRhXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUGFnZURhdGEgKCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL2dldC1wYWdlLWRldGFpbHMnKVxyXG4gICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgIGRpc3BhdGNoKHNldFBhZ2VEYXRhKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUsIHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyByZWR1Y2VycyBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCc7XHJcbmltcG9ydCBkZWZhdWx0U3RhdGUgZnJvbSAnLi9kZWZhdWx0U3RhdGUnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXBwOiByZWR1Y2Vycy5hcHBTdGF0ZSxcclxuICBkYXRhUmVxdWVzdHM6IHJlZHVjZXJzLmRhdGFSZXF1ZXN0cyxcclxuICByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyLFxyXG4gIGhvbWVQYWdlOiByZWR1Y2Vycy5ob21lUGFnZVJlZHVjZXJcclxufSk7XHJcblxyXG5jb25zdCByb3V0aW5nTWlkZGxld2FyZSA9IHJvdXRlck1pZGRsZXdhcmUoYnJvd3Nlckhpc3RvcnkpO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBkZWZhdWx0U3RhdGUsIGNvbXBvc2UoXHJcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCByb3V0aW5nTWlkZGxld2FyZSksXHJcbiAgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC9zdG9yZXMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRXJyb3I0MDQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJlcnJvci1oZWFkaW5nXCI+NDA0IC0gTWlzc2luZyBSZXNvdXJjZSA8L2gyPlxyXG4gICAgICAgIDxwPlBsZWFzZSB0cnkgYWdhaW4sIGJ1dCBpZiB0aGUgcHJvYmxlbSBwZXJzaXN0LCBjb250YWN0IGFuIGFkbWluaXN0cmF0b3IuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5FcnJvcjQwNC5kaXNwbGF5TmFtZSA9ICdFcnJvcjQwNCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvcjQwNDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9lcnJvcjQwNC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMuZmV0Y2hQYWdlRGF0YSgpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UGFnZSBjbGFzc05hbWU9XCJob21lLXBhZ2VcIiBoZWFkZXI9XCJIb21lXCI+XHJcbiAgICAgICAgPGgyPnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9oMj5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkhvbWUuZGlzcGxheU5hbWUgPSAnSG9tZSc7XHJcblxyXG5mdW5jdGlvbiBzZWxlY3QgKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1lc3NhZ2U6IHN0YXRlLmhvbWVQYWdlLm1lc3NhZ2VcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCkoSG9tZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvaG9tZS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQb3J0Rm9saW9DdXN0b21pemUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWN1c3RvbWl6ZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgPGgyPiBQb3J0Zm9saW8gY3VzdG9taXplPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblBvcnRGb2xpb0N1c3RvbWl6ZS5kaXNwbGF5TmFtZSA9ICdQb3J0Rm9saW9DdXN0b21pemUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydEZvbGlvQ3VzdG9taXplO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL3BvcnRmb2xpb0N1c3RvbWl6ZS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQb3J0Rm9saW9MaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1saXN0aW5nLXNlY3Rpb25cIj5cclxuICAgICAgICA8aDI+IFBvcnRmb2xpbyBMaXN0aW5nPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblBvcnRGb2xpb0xpc3RpbmcuZGlzcGxheU5hbWUgPSAnUG9ydEZvbGlvTGlzdGluZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Rm9saW9MaXN0aW5nO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL3BvcnRmb2xpb0xpc3RpbmcuanMiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBfX1JvdXRlckNvbnRleHQsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCAqIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uIH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG5cbnZhciBCcm93c2VyUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEJyb3dzZXJSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KF90aGlzLnByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQnJvd3NlclJvdXRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEJyb3dzZXJSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQnJvd3NlclJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGZvcmNlUmVmcmVzaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAga2V5TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyB3aW5kb3cubG9jYXRpb24uaGFzaC5cbiAqL1xuXG52YXIgSGFzaFJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShIYXNoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEhhc2hSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhhc2hSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNoVHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImhhc2hiYW5nXCIsIFwibm9zbGFzaFwiLCBcInNsYXNoXCJdKVxuICB9O1xuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8SGFzaFJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cblxudmFyIExpbmsgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTGluay5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQsIGhpc3RvcnkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIC8vIG9uQ2xpY2sgcHJldmVudGVkIGRlZmF1bHRcbiAgICBldmVudC5idXR0b24gPT09IDAgJiYgKCAvLyBpZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAhdGhpcy5wcm9wcy50YXJnZXQgfHwgdGhpcy5wcm9wcy50YXJnZXQgPT09IFwiX3NlbGZcIikgJiYgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgbWV0aG9kID0gdGhpcy5wcm9wcy5yZXBsYWNlID8gaGlzdG9yeS5yZXBsYWNlIDogaGlzdG9yeS5wdXNoO1xuICAgICAgICBtZXRob2QodGhpcy5wcm9wcy50byk7XG4gICAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgcmVwbGFjZSA9IF90aGlzJHByb3BzLnJlcGxhY2UsXG4gICAgICAgIHRvID0gX3RoaXMkcHJvcHMudG8sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiaW5uZXJSZWZcIiwgXCJyZXBsYWNlXCIsIFwidG9cIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9fUm91dGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IGNyZWF0ZUxvY2F0aW9uKHRvLCBudWxsLCBudWxsLCBjb250ZXh0LmxvY2F0aW9uKSA6IHRvO1xuICAgICAgdmFyIGhyZWYgPSBsb2NhdGlvbiA/IGNvbnRleHQuaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKSA6IFwiXCI7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVDbGljayhldmVudCwgY29udGV4dC5oaXN0b3J5KTtcbiAgICAgICAgfSxcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgcmVmOiBpbm5lclJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBMaW5rO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciB0b1R5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSk7XG4gIHZhciBpbm5lclJlZlR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMuYW55XG4gIH0pXSk7XG4gIExpbmsucHJvcFR5cGVzID0ge1xuICAgIGlubmVyUmVmOiBpbm5lclJlZlR5cGUsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvOiB0b1R5cGUuaXNSZXF1aXJlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBqb2luQ2xhc3NuYW1lcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzbmFtZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgY2xhc3NuYW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc25hbWVzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KS5qb2luKFwiIFwiKTtcbn1cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cblxuXG5mdW5jdGlvbiBOYXZMaW5rKF9yZWYpIHtcbiAgdmFyIF9yZWYkYXJpYUN1cnJlbnQgPSBfcmVmW1wiYXJpYS1jdXJyZW50XCJdLFxuICAgICAgYXJpYUN1cnJlbnQgPSBfcmVmJGFyaWFDdXJyZW50ID09PSB2b2lkIDAgPyBcInBhZ2VcIiA6IF9yZWYkYXJpYUN1cnJlbnQsXG4gICAgICBfcmVmJGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3JlZiRhY3RpdmVDbGFzc05hbWUgPT09IHZvaWQgMCA/IFwiYWN0aXZlXCIgOiBfcmVmJGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZVN0eWxlID0gX3JlZi5hY3RpdmVTdHlsZSxcbiAgICAgIGNsYXNzTmFtZVByb3AgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGV4YWN0ID0gX3JlZi5leGFjdCxcbiAgICAgIGlzQWN0aXZlUHJvcCA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICBzdHJpY3QgPSBfcmVmLnN0cmljdCxcbiAgICAgIHN0eWxlUHJvcCA9IF9yZWYuc3R5bGUsXG4gICAgICB0byA9IF9yZWYudG8sXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYXJpYS1jdXJyZW50XCIsIFwiYWN0aXZlQ2xhc3NOYW1lXCIsIFwiYWN0aXZlU3R5bGVcIiwgXCJjbGFzc05hbWVcIiwgXCJleGFjdFwiLCBcImlzQWN0aXZlXCIsIFwibG9jYXRpb25cIiwgXCJzdHJpY3RcIiwgXCJzdHlsZVwiLCBcInRvXCJdKTtcblxuICB2YXIgcGF0aCA9IHR5cGVvZiB0byA9PT0gXCJvYmplY3RcIiA/IHRvLnBhdGhuYW1lIDogdG87IC8vIFJlZ2V4IHRha2VuIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9waWxsYXJqcy9wYXRoLXRvLXJlZ2V4cC9ibG9iL21hc3Rlci9pbmRleC5qcyNMMjAyXG5cbiAgdmFyIGVzY2FwZWRQYXRoID0gcGF0aCAmJiBwYXRoLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICBwYXRoOiBlc2NhcGVkUGF0aCxcbiAgICBleGFjdDogZXhhY3QsXG4gICAgc3RyaWN0OiBzdHJpY3QsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihfcmVmMikge1xuICAgICAgdmFyIGxvY2F0aW9uID0gX3JlZjIubG9jYXRpb24sXG4gICAgICAgICAgbWF0Y2ggPSBfcmVmMi5tYXRjaDtcbiAgICAgIHZhciBpc0FjdGl2ZSA9ICEhKGlzQWN0aXZlUHJvcCA/IGlzQWN0aXZlUHJvcChtYXRjaCwgbG9jYXRpb24pIDogbWF0Y2gpO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGlzQWN0aXZlID8gam9pbkNsYXNzbmFtZXMoY2xhc3NOYW1lUHJvcCwgYWN0aXZlQ2xhc3NOYW1lKSA6IGNsYXNzTmFtZVByb3A7XG4gICAgICB2YXIgc3R5bGUgPSBpc0FjdGl2ZSA/IF9leHRlbmRzKHt9LCBzdHlsZVByb3AsIGFjdGl2ZVN0eWxlKSA6IHN0eWxlUHJvcDtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIF9leHRlbmRzKHtcbiAgICAgICAgXCJhcmlhLWN1cnJlbnRcIjogaXNBY3RpdmUgJiYgYXJpYUN1cnJlbnQgfHwgbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgdG86IHRvXG4gICAgICB9LCByZXN0KSk7XG4gICAgfVxuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgYXJpYUN1cnJlbnRUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcInBhZ2VcIiwgXCJzdGVwXCIsIFwibG9jYXRpb25cIiwgXCJkYXRlXCIsIFwidGltZVwiLCBcInRydWVcIl0pO1xuICBOYXZMaW5rLnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBMaW5rLnByb3BUeXBlcywge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50VHlwZSxcbiAgICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4YWN0OiBSb3V0ZS5wcm9wVHlwZXMuZXhhY3QsXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0cmljdDogUm91dGUucHJvcFR5cGVzLnN0cmljdCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9KTtcbn1cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluayB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJvdXRlci1kb20vZXNtL3JlYWN0LXJvdXRlci1kb20uanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGFjdGlvbkV2ZW50cyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZVJlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRfUEFHRURBVEEpIHtcclxuICAgIG5ld1N0YXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBTdGF0ZSAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkxPQ0FUSU9OX0NIQU5HRSkge1xyXG4gICAgbmV3U3RhdGUuY3VycmVudC5wYXRoID0gYWN0aW9uLnBheWxvYWQucGF0aG5hbWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRhUmVxdWVzdHMgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRUSU5HX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IHRydWU7XHJcbiAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuU0VUX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvcmVkdWNlcnMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgc3RhdGUgPSB7XHJcbiAgYXBwOiB7XHJcbiAgICBjdXJyZW50OiB7XHJcbiAgICAgIHBhdGg6ICcnLFxyXG4gICAgICBwYWdlVGl0bGU6ICcnXHJcbiAgICB9XHJcbiAgfSxcclxuICBob21lUGFnZToge1xyXG4gICAgbWVzc2FnZTogXCJUZW1wbGF0ZSBNZXNzYWdlXCJcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdGF0ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC9zdG9yZXMvZGVmYXVsdFN0YXRlLmpzIiwiLyogZ2xvYmFsIGxvY2F0aW9uICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgc3luY0hpc3RvcnlXaXRoU3RvcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL2hvbWUnO1xyXG5pbXBvcnQgRXJyb3I0MDQgZnJvbSAnLi9wYWdlcy9lcnJvcjQwNCc7XHJcbmltcG9ydCBQb3J0Zm9saW9DdXN0b21pemUgZnJvbSAnLi9wYWdlcy9wb3J0Zm9saW9DdXN0b21pemUnO1xyXG5pbXBvcnQgUG9ydGZvbGlvTGlzdGluZyBmcm9tICcuL3BhZ2VzL3BvcnRmb2xpb0xpc3RpbmcnO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCksIHN0b3JlKTtcclxuY29uc29sZS5sb2coaGlzdG9yeSk7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e1BvcnRmb2xpb0xpc3Rpbmd9IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcG9ydGZvbGlvLWN1c3RvbWl6ZVwiIGNvbXBvbmVudD17UG9ydGZvbGlvQ3VzdG9taXplfSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiLzQwNFwiIGNvbXBvbmVudD17RXJyb3I0MDR9IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIG5vbWF0Y2ggY29tcG9uZW50PXtFcnJvcjQwNH0gLz5cclxuICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICA8L1JvdXRlcj5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BcHAuZGlzcGxheU5hbWUgPSAnQXBwJztcclxuXHJcbi8vIEJvb3RzdHJhcCBjbGllbnRcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIHZhciBwcm9wcyA9IHtcclxuICAgICAgcGF0aDogbG9jYXRpb24ucGF0aG5hbWVcclxuICAgIH07XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHByb3BzKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0VmlldycpKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvdmlld3MvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1pY29uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj57dGhpcy5wcm9wcy5oZWFkZXJ9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8bWFpbiBpZD1cImJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgR2VuZXJhdGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vamVmcmVlc3VqaXQvZ2VuZXJhdG9yLXJlYWN0LW5vZGVcIj5nZW5lcmF0b3ItcmVhY3Qtbm9kZTwvYT4uXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUGFnZS5kaXNwbGF5TmFtZSA9ICdQYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9