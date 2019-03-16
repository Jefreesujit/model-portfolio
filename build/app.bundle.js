webpackJsonp([0],{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_PORTFOLIO_DATA = exports.LOCATION_CHANGE = exports.SET_PAGEDATA = exports.FETCHING_PAGEDATA = undefined;
exports.fetchingPageData = fetchingPageData;
exports.setPageData = setPageData;
exports.setPortfolioData = setPortfolioData;
exports.fetchPageData = fetchPageData;
exports.fetchListingContent = fetchListingContent;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCHING_PAGEDATA = exports.FETCHING_PAGEDATA = 'FETCHING_PAGEDATA'; /** This provides the various redux actions to trigger app state changes by the redux reducer
                                                                          * @module Redux actions
                                                                          */

var SET_PAGEDATA = exports.SET_PAGEDATA = 'SET_PAGEDATA';
var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
var SET_PORTFOLIO_DATA = exports.SET_PORTFOLIO_DATA = 'SET_PORTFOLIO_DATA';

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

function setPortfolioData(data) {
  return {
    type: SET_PORTFOLIO_DATA,
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

function fetchListingContent() {
  return function (dispatch) {
    var listContent = [];

    for (var i = 1; i <= 14; i++) {
      listContent.push({
        id: i,
        title: 'Hong Kong Technology',
        imageUrl: '/build/images/HKSPnightview2panorama.jpg',
        volatality: '26.84',
        monthReturn: '2.96',
        meanReturn: '37.29',
        minInvestment: '170000',
        currency: 'HKD',
        eligibility: 'available'
      });
    }

    dispatch(setPortfolioData(listContent));
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

var _reduxThunk = __webpack_require__(20);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouter = __webpack_require__(8);

var _reactRouterRedux = __webpack_require__(5);

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
  homePage: reducers.homePageReducer,
  portfolioListing: reducers.portfolioListingReducer
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

var _index = __webpack_require__(68);

var _index2 = _interopRequireDefault(_index);

var _actions = __webpack_require__(14);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(4);

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
    key: 'componentDidMount',
    value: function componentDidMount() {
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(4);

var _portfolioItem = __webpack_require__(66);

var _portfolioItem2 = _interopRequireDefault(_portfolioItem);

var _reactRouterRedux = __webpack_require__(5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PortFolioListing = function (_React$Component) {
  _inherits(PortFolioListing, _React$Component);

  function PortFolioListing() {
    _classCallCheck(this, PortFolioListing);

    var _this = _possibleConstructorReturn(this, (PortFolioListing.__proto__ || Object.getPrototypeOf(PortFolioListing)).call(this));

    _this.state = {
      listingContent: []
    };
    return _this;
  }

  _createClass(PortFolioListing, [{
    key: 'itemClickHandler',
    value: function itemClickHandler(id) {
      this.props.dispatch((0, _reactRouterRedux.push)('/portfolio-customize/' + id));
    }
  }, {
    key: 'getListingContent',
    value: function getListingContent() {
      var _this2 = this;

      return this.state.listingContent.map(function (folioData) {
        return _react2.default.createElement(_portfolioItem2.default, _extends({ key: folioData.id }, folioData, { itemClickHandler: _this2.itemClickHandler }));
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch(actions.fetchListingContent());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'portfolio-listing-section' },
        _react2.default.createElement(
          'div',
          { className: 'listing-header' },
          _react2.default.createElement(
            'div',
            { className: 'logo-section' },
            _react2.default.createElement('img', { className: 'logo-img', src: '/build/images/logo.svg' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'action-section' },
            _react2.default.createElement(
              'span',
              null,
              'Log In'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'portfolio-main-section' },
          _react2.default.createElement(
            'div',
            { className: 'description' },
            'Here are a few recommendations to choose from',
            _react2.default.createElement(
              'div',
              { className: 'message' },
              'Use the filters to further zone in one a portfolio depending on your preferences'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filter-section' },
            _react2.default.createElement(
              'div',
              { className: 'filter-field' },
              _react2.default.createElement(
                'label',
                null,
                'Risk Level'
              ),
              _react2.default.createElement(
                'select',
                null,
                _react2.default.createElement(
                  'option',
                  null,
                  'All'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'filter-field' },
              _react2.default.createElement(
                'label',
                null,
                'Region'
              ),
              _react2.default.createElement(
                'select',
                null,
                _react2.default.createElement(
                  'option',
                  null,
                  'All'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'listing-section' },
            _react2.default.createElement(
              'div',
              { className: 'listing-title' },
              _react2.default.createElement(
                'div',
                { className: 'title-tab active' },
                this.state.listingContent.length,
                ' Portfolio recommendations based on your preferences'
              ),
              _react2.default.createElement('div', { className: 'title-tab' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'portfolio-preference-list' },
              this.getListingContent()
            )
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        listingContent: nextProps.listingContent
      };
    }
  }]);

  return PortFolioListing;
}(_react2.default.Component);

PortFolioListing.displayName = 'PortFolioListing';

function select(state) {
  return {
    listingContent: state.portfolioListing.listingContent
  };
}

exports.default = (0, _reactRedux.connect)(select)(PortFolioListing);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(8);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tiny_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_tiny_invariant__ = __webpack_require__(17);











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
exports.portfolioListingReducer = portfolioListingReducer;
exports.appState = appState;
exports.dataRequests = dataRequests;

var _index = __webpack_require__(14);

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

function portfolioListingReducer(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_PORTFOLIO_DATA) {
    newState.listingContent = action.payload;
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
  },
  portfolioListing: {
    listingContent: []
  },
  customizepage: {
    data: {}
  }
};

exports.default = state;

/***/ }),

/***/ 66:
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

var PortFolioItem = function (_React$Component) {
  _inherits(PortFolioItem, _React$Component);

  function PortFolioItem() {
    _classCallCheck(this, PortFolioItem);

    var _this = _possibleConstructorReturn(this, (PortFolioItem.__proto__ || Object.getPrototypeOf(PortFolioItem)).call(this));

    _this.eligibilityMapping = {
      available: 'Available for all investors',
      restricted: 'Restricted to Accredited investors '
    };

    _this.clickHandler = function () {
      return _this.itemClickHandler();
    };
    return _this;
  }

  _createClass(PortFolioItem, [{
    key: 'itemClickHandler',
    value: function itemClickHandler() {
      this.props.itemClickHandler(this.props.id);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'portfolio-item' },
        _react2.default.createElement(
          'div',
          { className: 'item-head' },
          _react2.default.createElement('img', { src: this.props.imageUrl, className: 'folio-item-image' }),
          _react2.default.createElement(
            'div',
            { className: 'folio-item-title' },
            _react2.default.createElement(
              'span',
              null,
              this.props.title
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'item-body' },
          _react2.default.createElement(
            'div',
            { className: 'item-record' },
            _react2.default.createElement(
              'div',
              { className: 'record-label' },
              'Volatality'
            ),
            _react2.default.createElement(
              'div',
              { className: 'record-value' },
              this.props.volatality,
              '%'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'item-record' },
            _react2.default.createElement(
              'div',
              { className: 'record-label' },
              '1 Month Return'
            ),
            _react2.default.createElement(
              'div',
              { className: 'record-value' },
              this.props.monthReturn,
              '%'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'item-record' },
            _react2.default.createElement(
              'div',
              { className: 'record-label' },
              'Mean Return'
            ),
            _react2.default.createElement(
              'div',
              { className: 'record-value' },
              this.props.meanReturn,
              '%'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'item-record' },
            _react2.default.createElement(
              'div',
              { className: 'record-label' },
              'Minimum Investment'
            ),
            _react2.default.createElement(
              'div',
              { className: 'record-value' },
              _react2.default.createElement(
                'span',
                { className: 'currency' },
                this.props.currency
              ),
              this.props.minInvestment
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'item-record' },
            _react2.default.createElement(
              'div',
              { className: 'record-label' },
              'Eligibility'
            ),
            _react2.default.createElement(
              'div',
              { className: 'record-value' },
              this.eligibilityMapping[this.props.eligibility]
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'item-action', onClick: this.clickHandler },
          'Explore Investment Idea'
        )
      );
    }
  }]);

  return PortFolioItem;
}(_react2.default.Component);

PortFolioItem.displayName = 'PortFolioItem';

exports.default = PortFolioItem;

/***/ }),

/***/ 67:
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

var _reactRedux = __webpack_require__(4);

var _index = __webpack_require__(38);

var _index2 = _interopRequireDefault(_index);

var _reactRouterDom = __webpack_require__(46);

var _reactRouterRedux = __webpack_require__(5);

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
              _react2.default.createElement(_reactRouterDom.Route, { path: '/portfolio-customize/:id', component: _portfolioCustomize2.default }),
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

/***/ 68:
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

},[67]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9lcnJvcjQwNC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9DdXN0b21pemUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9MaXN0aW5nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyLWRvbS9lc20vcmVhY3Qtcm91dGVyLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvc3RvcmVzL2RlZmF1bHRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL2NvbXBvbmVudHMvcG9ydGZvbGlvSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZmV0Y2hpbmdQYWdlRGF0YSIsInNldFBhZ2VEYXRhIiwic2V0UG9ydGZvbGlvRGF0YSIsImZldGNoUGFnZURhdGEiLCJmZXRjaExpc3RpbmdDb250ZW50IiwiRkVUQ0hJTkdfUEFHRURBVEEiLCJTRVRfUEFHRURBVEEiLCJMT0NBVElPTl9DSEFOR0UiLCJTRVRfUE9SVEZPTElPX0RBVEEiLCJ0eXBlIiwiZGF0YSIsInBheWxvYWQiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwibGlzdENvbnRlbnQiLCJpIiwicHVzaCIsImlkIiwidGl0bGUiLCJpbWFnZVVybCIsInZvbGF0YWxpdHkiLCJtb250aFJldHVybiIsIm1lYW5SZXR1cm4iLCJtaW5JbnZlc3RtZW50IiwiY3VycmVuY3kiLCJlbGlnaWJpbGl0eSIsInJlZHVjZXJzIiwicmVkdWNlciIsImFwcCIsImFwcFN0YXRlIiwiZGF0YVJlcXVlc3RzIiwicm91dGluZyIsInJvdXRlclJlZHVjZXIiLCJob21lUGFnZSIsImhvbWVQYWdlUmVkdWNlciIsInBvcnRmb2xpb0xpc3RpbmciLCJwb3J0Zm9saW9MaXN0aW5nUmVkdWNlciIsInJvdXRpbmdNaWRkbGV3YXJlIiwiYnJvd3Nlckhpc3RvcnkiLCJzdG9yZSIsImRlZmF1bHRTdGF0ZSIsInRodW5rIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmIiwiRXJyb3I0MDQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiYWN0aW9ucyIsIkhvbWUiLCJwcm9wcyIsIm1lc3NhZ2UiLCJzZWxlY3QiLCJzdGF0ZSIsIlBvcnRGb2xpb0N1c3RvbWl6ZSIsIlBvcnRGb2xpb0xpc3RpbmciLCJsaXN0aW5nQ29udGVudCIsIm1hcCIsImZvbGlvRGF0YSIsIml0ZW1DbGlja0hhbmRsZXIiLCJsZW5ndGgiLCJnZXRMaXN0aW5nQ29udGVudCIsIm5leHRQcm9wcyIsInByZXZTdGF0ZSIsImFjdGlvbkV2ZW50cyIsImFjdGlvbiIsImFjdGlvblR5cGUiLCJuZXdTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImN1cnJlbnQiLCJwYXRoIiwicGF0aG5hbWUiLCJTRVRUSU5HX1BBR0VEQVRBIiwic2V0dGluZ3MiLCJwYWdlVGl0bGUiLCJjdXN0b21pemVwYWdlIiwiUG9ydEZvbGlvSXRlbSIsImVsaWdpYmlsaXR5TWFwcGluZyIsImF2YWlsYWJsZSIsInJlc3RyaWN0ZWQiLCJjbGlja0hhbmRsZXIiLCJoaXN0b3J5IiwiY29uc29sZSIsImxvZyIsIkFwcCIsIlBvcnRmb2xpb0xpc3RpbmciLCJQb3J0Zm9saW9DdXN0b21pemUiLCJvbmxvYWQiLCJsb2NhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQYWdlIiwiaGVhZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQVdnQkEsZ0IsR0FBQUEsZ0I7UUFNQUMsVyxHQUFBQSxXO1FBT0FDLGdCLEdBQUFBLGdCO1FBT0FDLGEsR0FBQUEsYTtRQVVBQyxtQixHQUFBQSxtQjs7QUFyQ2hCOzs7Ozs7QUFFTyxJQUFNQyxnREFBb0IsbUJBQTFCLEMsQ0FOUDs7OztBQU9PLElBQU1DLHNDQUFlLGNBQXJCO0FBQ0EsSUFBTUMsNENBQWtCLDBCQUF4QjtBQUNBLElBQU1DLGtEQUFxQixvQkFBM0I7O0FBRUEsU0FBU1IsZ0JBQVQsR0FBNkI7QUFDbEMsU0FBTztBQUNMUyxVQUFNSjtBQURELEdBQVA7QUFHRDs7QUFFTSxTQUFTSixXQUFULENBQXNCUyxJQUF0QixFQUE0QjtBQUNqQyxTQUFPO0FBQ0xELFVBQU1ILFlBREQ7QUFFTEssYUFBU0Q7QUFGSixHQUFQO0FBSUQ7O0FBRU0sU0FBU1IsZ0JBQVQsQ0FBMkJRLElBQTNCLEVBQWlDO0FBQ3RDLFNBQU87QUFDTEQsVUFBTUQsa0JBREQ7QUFFTEcsYUFBU0Q7QUFGSixHQUFQO0FBSUQ7O0FBRU0sU0FBU1AsYUFBVCxHQUEwQjtBQUMvQixTQUFPLFVBQVVTLFFBQVYsRUFBb0I7QUFDekJBLGFBQVNaLGtCQUFUO0FBQ0EsV0FBT2EsZ0JBQU1DLEdBQU4sQ0FBVSx1QkFBVixFQUNIQyxJQURHLENBQ0UsVUFBVUMsUUFBVixFQUFvQjtBQUN4QkosZUFBU1gsWUFBWWUsU0FBU04sSUFBckIsQ0FBVDtBQUNELEtBSEcsQ0FBUDtBQUlELEdBTkQ7QUFPRDs7QUFFTSxTQUFTTixtQkFBVCxHQUFnQztBQUNyQyxTQUFPLFVBQVVRLFFBQVYsRUFBb0I7QUFDekIsUUFBSUssY0FBYyxFQUFsQjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsS0FBSyxF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QUFuQjs7a0JBRWVnRCxJIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVGhpcyBwcm92aWRlcyB0aGUgdmFyaW91cyByZWR1eCBhY3Rpb25zIHRvIHRyaWdnZXIgYXBwIHN0YXRlIGNoYW5nZXMgYnkgdGhlIHJlZHV4IHJlZHVjZXJcclxuICogQG1vZHVsZSBSZWR1eCBhY3Rpb25zXHJcbiAqL1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBGRVRDSElOR19QQUdFREFUQSA9ICdGRVRDSElOR19QQUdFREFUQSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUEFHRURBVEEgPSAnU0VUX1BBR0VEQVRBJztcclxuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0NIQU5HRSA9ICdAQHJvdXRlci9MT0NBVElPTl9DSEFOR0UnO1xyXG5leHBvcnQgY29uc3QgU0VUX1BPUlRGT0xJT19EQVRBID0gJ1NFVF9QT1JURk9MSU9fREFUQSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hpbmdQYWdlRGF0YSAoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEZFVENISU5HX1BBR0VEQVRBXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhZ2VEYXRhIChkYXRhKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNFVF9QQUdFREFUQSxcclxuICAgIHBheWxvYWQ6IGRhdGFcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UG9ydGZvbGlvRGF0YSAoZGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTRVRfUE9SVEZPTElPX0RBVEEsXHJcbiAgICBwYXlsb2FkOiBkYXRhXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUGFnZURhdGEgKCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL2dldC1wYWdlLWRldGFpbHMnKVxyXG4gICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgIGRpc3BhdGNoKHNldFBhZ2VEYXRhKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaExpc3RpbmdDb250ZW50ICgpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICBsZXQgbGlzdENvbnRlbnQgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxNDsgaSsrKSB7XHJcbiAgICAgIGxpc3RDb250ZW50LnB1c2goe1xyXG4gICAgICAgIGlkOiBpLFxyXG4gICAgICAgIHRpdGxlOiAnSG9uZyBLb25nIFRlY2hub2xvZ3knLFxyXG4gICAgICAgIGltYWdlVXJsOiAnL2J1aWxkL2ltYWdlcy9IS1NQbmlnaHR2aWV3MnBhbm9yYW1hLmpwZycsXHJcbiAgICAgICAgdm9sYXRhbGl0eTogJzI2Ljg0JyxcclxuICAgICAgICBtb250aFJldHVybjogJzIuOTYnLFxyXG4gICAgICAgIG1lYW5SZXR1cm46ICczNy4yOScsXHJcbiAgICAgICAgbWluSW52ZXN0bWVudDogJzE3MDAwMCcsXHJcbiAgICAgICAgY3VycmVuY3k6ICdIS0QnLFxyXG4gICAgICAgIGVsaWdpYmlsaXR5OiAnYXZhaWxhYmxlJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaChzZXRQb3J0Zm9saW9EYXRhKGxpc3RDb250ZW50KSk7XHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSwgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4JztcclxuaW1wb3J0IGRlZmF1bHRTdGF0ZSBmcm9tICcuL2RlZmF1bHRTdGF0ZSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBhcHA6IHJlZHVjZXJzLmFwcFN0YXRlLFxyXG4gIGRhdGFSZXF1ZXN0czogcmVkdWNlcnMuZGF0YVJlcXVlc3RzLFxyXG4gIHJvdXRpbmc6IHJvdXRlclJlZHVjZXIsXHJcbiAgaG9tZVBhZ2U6IHJlZHVjZXJzLmhvbWVQYWdlUmVkdWNlcixcclxuICBwb3J0Zm9saW9MaXN0aW5nOiByZWR1Y2Vycy5wb3J0Zm9saW9MaXN0aW5nUmVkdWNlclxyXG59KTtcclxuXHJcbmNvbnN0IHJvdXRpbmdNaWRkbGV3YXJlID0gcm91dGVyTWlkZGxld2FyZShicm93c2VySGlzdG9yeSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGRlZmF1bHRTdGF0ZSwgY29tcG9zZShcclxuICBhcHBseU1pZGRsZXdhcmUodGh1bmssIHJvdXRpbmdNaWRkbGV3YXJlKSxcclxuICB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3N0b3Jlcy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFcnJvcjQwNCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImVycm9yLWhlYWRpbmdcIj40MDQgLSBNaXNzaW5nIFJlc291cmNlIDwvaDI+XHJcbiAgICAgICAgPHA+UGxlYXNlIHRyeSBhZ2FpbiwgYnV0IGlmIHRoZSBwcm9ibGVtIHBlcnNpc3QsIGNvbnRhY3QgYW4gYWRtaW5pc3RyYXRvci48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkVycm9yNDA0LmRpc3BsYXlOYW1lID0gJ0Vycm9yNDA0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yNDA0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2Vycm9yNDA0LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLmZldGNoUGFnZURhdGEoKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBhZ2UgY2xhc3NOYW1lPVwiaG9tZS1wYWdlXCIgaGVhZGVyPVwiSG9tZVwiPlxyXG4gICAgICAgIDxoMj57dGhpcy5wcm9wcy5tZXNzYWdlfTwvaDI+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lLmRpc3BsYXlOYW1lID0gJ0hvbWUnO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0IChzdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBtZXNzYWdlOiBzdGF0ZS5ob21lUGFnZS5tZXNzYWdlXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QpKEhvbWUpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2hvbWUuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUG9ydEZvbGlvQ3VzdG9taXplIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1jdXN0b21pemUtc2VjdGlvblwiPlxyXG4gICAgICAgIDxoMj4gUG9ydGZvbGlvIGN1c3RvbWl6ZTwvaDI+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Qb3J0Rm9saW9DdXN0b21pemUuZGlzcGxheU5hbWUgPSAnUG9ydEZvbGlvQ3VzdG9taXplJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRGb2xpb0N1c3RvbWl6ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9DdXN0b21pemUuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUG9ydGZvbGlvSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL3BvcnRmb2xpb0l0ZW0nO1xyXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuXHJcbmNsYXNzIFBvcnRGb2xpb0xpc3RpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGlzdGluZ0NvbnRlbnQ6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpc3RpbmdDb250ZW50OiBuZXh0UHJvcHMubGlzdGluZ0NvbnRlbnRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpdGVtQ2xpY2tIYW5kbGVyKGlkKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHB1c2goYC9wb3J0Zm9saW8tY3VzdG9taXplLyR7aWR9YCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGlzdGluZ0NvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5saXN0aW5nQ29udGVudC5tYXAoKGZvbGlvRGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gPFBvcnRmb2xpb0l0ZW0ga2V5PXtmb2xpb0RhdGEuaWR9IHsuLi5mb2xpb0RhdGF9IGl0ZW1DbGlja0hhbmRsZXI9e3RoaXMuaXRlbUNsaWNrSGFuZGxlcn0vPjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLmZldGNoTGlzdGluZ0NvbnRlbnQoKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWxpc3Rpbmctc2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nby1pbWdcIiBzcmM9XCIvYnVpbGQvaW1hZ2VzL2xvZ28uc3ZnXCI+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPHNwYW4+TG9nIEluPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbWFpbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIEhlcmUgYXJlIGEgZmV3IHJlY29tbWVuZGF0aW9ucyB0byBjaG9vc2UgZnJvbVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICBVc2UgdGhlIGZpbHRlcnMgdG8gZnVydGhlciB6b25lIGluIG9uZSBhIHBvcnRmb2xpbyBkZXBlbmRpbmcgb24geW91ciBwcmVmZXJlbmNlc1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1maWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5SaXNrIExldmVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5BbGw8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlJlZ2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+QWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Rpbmctc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRhYiBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxpc3RpbmdDb250ZW50Lmxlbmd0aH0gUG9ydGZvbGlvIHJlY29tbWVuZGF0aW9ucyBiYXNlZCBvbiB5b3VyIHByZWZlcmVuY2VzXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10YWJcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXByZWZlcmVuY2UtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIHt0aGlzLmdldExpc3RpbmdDb250ZW50KCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Qb3J0Rm9saW9MaXN0aW5nLmRpc3BsYXlOYW1lID0gJ1BvcnRGb2xpb0xpc3RpbmcnO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0KHN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxpc3RpbmdDb250ZW50OiBzdGF0ZS5wb3J0Zm9saW9MaXN0aW5nLmxpc3RpbmdDb250ZW50XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QpKFBvcnRGb2xpb0xpc3RpbmcpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL3BvcnRmb2xpb0xpc3RpbmcuanMiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBfX1JvdXRlckNvbnRleHQsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCAqIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uIH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG5cbnZhciBCcm93c2VyUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEJyb3dzZXJSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KF90aGlzLnByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQnJvd3NlclJvdXRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEJyb3dzZXJSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQnJvd3NlclJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGZvcmNlUmVmcmVzaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAga2V5TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyB3aW5kb3cubG9jYXRpb24uaGFzaC5cbiAqL1xuXG52YXIgSGFzaFJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShIYXNoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEhhc2hSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhhc2hSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNoVHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImhhc2hiYW5nXCIsIFwibm9zbGFzaFwiLCBcInNsYXNoXCJdKVxuICB9O1xuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8SGFzaFJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cblxudmFyIExpbmsgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTGluay5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQsIGhpc3RvcnkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIC8vIG9uQ2xpY2sgcHJldmVudGVkIGRlZmF1bHRcbiAgICBldmVudC5idXR0b24gPT09IDAgJiYgKCAvLyBpZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAhdGhpcy5wcm9wcy50YXJnZXQgfHwgdGhpcy5wcm9wcy50YXJnZXQgPT09IFwiX3NlbGZcIikgJiYgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgbWV0aG9kID0gdGhpcy5wcm9wcy5yZXBsYWNlID8gaGlzdG9yeS5yZXBsYWNlIDogaGlzdG9yeS5wdXNoO1xuICAgICAgICBtZXRob2QodGhpcy5wcm9wcy50byk7XG4gICAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgcmVwbGFjZSA9IF90aGlzJHByb3BzLnJlcGxhY2UsXG4gICAgICAgIHRvID0gX3RoaXMkcHJvcHMudG8sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiaW5uZXJSZWZcIiwgXCJyZXBsYWNlXCIsIFwidG9cIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9fUm91dGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IGNyZWF0ZUxvY2F0aW9uKHRvLCBudWxsLCBudWxsLCBjb250ZXh0LmxvY2F0aW9uKSA6IHRvO1xuICAgICAgdmFyIGhyZWYgPSBsb2NhdGlvbiA/IGNvbnRleHQuaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKSA6IFwiXCI7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVDbGljayhldmVudCwgY29udGV4dC5oaXN0b3J5KTtcbiAgICAgICAgfSxcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgcmVmOiBpbm5lclJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBMaW5rO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciB0b1R5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSk7XG4gIHZhciBpbm5lclJlZlR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMuYW55XG4gIH0pXSk7XG4gIExpbmsucHJvcFR5cGVzID0ge1xuICAgIGlubmVyUmVmOiBpbm5lclJlZlR5cGUsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvOiB0b1R5cGUuaXNSZXF1aXJlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBqb2luQ2xhc3NuYW1lcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzbmFtZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgY2xhc3NuYW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc25hbWVzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KS5qb2luKFwiIFwiKTtcbn1cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cblxuXG5mdW5jdGlvbiBOYXZMaW5rKF9yZWYpIHtcbiAgdmFyIF9yZWYkYXJpYUN1cnJlbnQgPSBfcmVmW1wiYXJpYS1jdXJyZW50XCJdLFxuICAgICAgYXJpYUN1cnJlbnQgPSBfcmVmJGFyaWFDdXJyZW50ID09PSB2b2lkIDAgPyBcInBhZ2VcIiA6IF9yZWYkYXJpYUN1cnJlbnQsXG4gICAgICBfcmVmJGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3JlZiRhY3RpdmVDbGFzc05hbWUgPT09IHZvaWQgMCA/IFwiYWN0aXZlXCIgOiBfcmVmJGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZVN0eWxlID0gX3JlZi5hY3RpdmVTdHlsZSxcbiAgICAgIGNsYXNzTmFtZVByb3AgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGV4YWN0ID0gX3JlZi5leGFjdCxcbiAgICAgIGlzQWN0aXZlUHJvcCA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICBzdHJpY3QgPSBfcmVmLnN0cmljdCxcbiAgICAgIHN0eWxlUHJvcCA9IF9yZWYuc3R5bGUsXG4gICAgICB0byA9IF9yZWYudG8sXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYXJpYS1jdXJyZW50XCIsIFwiYWN0aXZlQ2xhc3NOYW1lXCIsIFwiYWN0aXZlU3R5bGVcIiwgXCJjbGFzc05hbWVcIiwgXCJleGFjdFwiLCBcImlzQWN0aXZlXCIsIFwibG9jYXRpb25cIiwgXCJzdHJpY3RcIiwgXCJzdHlsZVwiLCBcInRvXCJdKTtcblxuICB2YXIgcGF0aCA9IHR5cGVvZiB0byA9PT0gXCJvYmplY3RcIiA/IHRvLnBhdGhuYW1lIDogdG87IC8vIFJlZ2V4IHRha2VuIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9waWxsYXJqcy9wYXRoLXRvLXJlZ2V4cC9ibG9iL21hc3Rlci9pbmRleC5qcyNMMjAyXG5cbiAgdmFyIGVzY2FwZWRQYXRoID0gcGF0aCAmJiBwYXRoLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICBwYXRoOiBlc2NhcGVkUGF0aCxcbiAgICBleGFjdDogZXhhY3QsXG4gICAgc3RyaWN0OiBzdHJpY3QsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihfcmVmMikge1xuICAgICAgdmFyIGxvY2F0aW9uID0gX3JlZjIubG9jYXRpb24sXG4gICAgICAgICAgbWF0Y2ggPSBfcmVmMi5tYXRjaDtcbiAgICAgIHZhciBpc0FjdGl2ZSA9ICEhKGlzQWN0aXZlUHJvcCA/IGlzQWN0aXZlUHJvcChtYXRjaCwgbG9jYXRpb24pIDogbWF0Y2gpO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGlzQWN0aXZlID8gam9pbkNsYXNzbmFtZXMoY2xhc3NOYW1lUHJvcCwgYWN0aXZlQ2xhc3NOYW1lKSA6IGNsYXNzTmFtZVByb3A7XG4gICAgICB2YXIgc3R5bGUgPSBpc0FjdGl2ZSA/IF9leHRlbmRzKHt9LCBzdHlsZVByb3AsIGFjdGl2ZVN0eWxlKSA6IHN0eWxlUHJvcDtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIF9leHRlbmRzKHtcbiAgICAgICAgXCJhcmlhLWN1cnJlbnRcIjogaXNBY3RpdmUgJiYgYXJpYUN1cnJlbnQgfHwgbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgdG86IHRvXG4gICAgICB9LCByZXN0KSk7XG4gICAgfVxuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgYXJpYUN1cnJlbnRUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcInBhZ2VcIiwgXCJzdGVwXCIsIFwibG9jYXRpb25cIiwgXCJkYXRlXCIsIFwidGltZVwiLCBcInRydWVcIl0pO1xuICBOYXZMaW5rLnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBMaW5rLnByb3BUeXBlcywge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50VHlwZSxcbiAgICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4YWN0OiBSb3V0ZS5wcm9wVHlwZXMuZXhhY3QsXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0cmljdDogUm91dGUucHJvcFR5cGVzLnN0cmljdCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9KTtcbn1cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluayB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJvdXRlci1kb20vZXNtL3JlYWN0LXJvdXRlci1kb20uanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGFjdGlvbkV2ZW50cyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZVJlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRfUEFHRURBVEEpIHtcclxuICAgIG5ld1N0YXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3J0Zm9saW9MaXN0aW5nUmVkdWNlciAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlNFVF9QT1JURk9MSU9fREFUQSkge1xyXG4gICAgbmV3U3RhdGUubGlzdGluZ0NvbnRlbnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcFN0YXRlIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgbGV0IGFjdGlvblR5cGUgPSBhY3Rpb24udHlwZSxcclxuICAgICAgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcblxyXG4gIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuTE9DQVRJT05fQ0hBTkdFKSB7XHJcbiAgICBuZXdTdGF0ZS5jdXJyZW50LnBhdGggPSBhY3Rpb24ucGF5bG9hZC5wYXRobmFtZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFSZXF1ZXN0cyAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlNFVFRJTkdfUEFHRURBVEEpIHtcclxuICAgIG5ld1N0YXRlLnNldHRpbmdzID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRfUEFHRURBVEEpIHtcclxuICAgIG5ld1N0YXRlLnNldHRpbmdzID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC9yZWR1Y2Vycy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBzdGF0ZSA9IHtcclxuICBhcHA6IHtcclxuICAgIGN1cnJlbnQ6IHtcclxuICAgICAgcGF0aDogJycsXHJcbiAgICAgIHBhZ2VUaXRsZTogJydcclxuICAgIH1cclxuICB9LFxyXG4gIGhvbWVQYWdlOiB7XHJcbiAgICBtZXNzYWdlOiBcIlRlbXBsYXRlIE1lc3NhZ2VcIlxyXG4gIH0sXHJcbiAgcG9ydGZvbGlvTGlzdGluZzoge1xyXG4gICAgbGlzdGluZ0NvbnRlbnQ6IFtdXHJcbiAgfSxcclxuICBjdXN0b21pemVwYWdlOiB7XHJcbiAgICBkYXRhOiB7fVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YXRlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3N0b3Jlcy9kZWZhdWx0U3RhdGUuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUG9ydEZvbGlvSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmVsaWdpYmlsaXR5TWFwcGluZyA9IHtcclxuICAgICAgYXZhaWxhYmxlOiAnQXZhaWxhYmxlIGZvciBhbGwgaW52ZXN0b3JzJyxcclxuICAgICAgcmVzdHJpY3RlZDogJ1Jlc3RyaWN0ZWQgdG8gQWNjcmVkaXRlZCBpbnZlc3RvcnMgJ1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKCkgPT4gdGhpcy5pdGVtQ2xpY2tIYW5kbGVyKCk7XHJcbiAgfVxyXG5cclxuICBpdGVtQ2xpY2tIYW5kbGVyICgpIHtcclxuICAgIHRoaXMucHJvcHMuaXRlbUNsaWNrSGFuZGxlcih0aGlzLnByb3BzLmlkKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taGVhZFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmltYWdlVXJsfSBjbGFzc05hbWU9XCJmb2xpby1pdGVtLWltYWdlXCI+XHJcbiAgICAgICAgPC9pbWc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb2xpby1pdGVtLXRpdGxlXCI+PHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tcmVjb3JkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC1sYWJlbFwiPlZvbGF0YWxpdHk8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLXZhbHVlXCI+e3RoaXMucHJvcHMudm9sYXRhbGl0eX0lPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXJlY29yZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtbGFiZWxcIj4xIE1vbnRoIFJldHVybjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtdmFsdWVcIj57dGhpcy5wcm9wcy5tb250aFJldHVybn0lPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXJlY29yZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtbGFiZWxcIj5NZWFuIFJldHVybjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtdmFsdWVcIj57dGhpcy5wcm9wcy5tZWFuUmV0dXJufSU8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tcmVjb3JkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC1sYWJlbFwiPk1pbmltdW0gSW52ZXN0bWVudDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtdmFsdWVcIj48c3BhbiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPnt0aGlzLnByb3BzLmN1cnJlbmN5fTwvc3Bhbj57dGhpcy5wcm9wcy5taW5JbnZlc3RtZW50fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1yZWNvcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLWxhYmVsXCI+RWxpZ2liaWxpdHk8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLXZhbHVlXCI+e3RoaXMuZWxpZ2liaWxpdHlNYXBwaW5nW3RoaXMucHJvcHMuZWxpZ2liaWxpdHldfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWFjdGlvblwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5FeHBsb3JlIEludmVzdG1lbnQgSWRlYTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUG9ydEZvbGlvSXRlbS5kaXNwbGF5TmFtZSA9ICdQb3J0Rm9saW9JdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRGb2xpb0l0ZW07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvdmlld3MvY29tcG9uZW50cy9wb3J0Zm9saW9JdGVtLmpzIiwiLyogZ2xvYmFsIGxvY2F0aW9uICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgc3luY0hpc3RvcnlXaXRoU3RvcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL2hvbWUnO1xyXG5pbXBvcnQgRXJyb3I0MDQgZnJvbSAnLi9wYWdlcy9lcnJvcjQwNCc7XHJcbmltcG9ydCBQb3J0Zm9saW9DdXN0b21pemUgZnJvbSAnLi9wYWdlcy9wb3J0Zm9saW9DdXN0b21pemUnO1xyXG5pbXBvcnQgUG9ydGZvbGlvTGlzdGluZyBmcm9tICcuL3BhZ2VzL3BvcnRmb2xpb0xpc3RpbmcnO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCksIHN0b3JlKTtcclxuY29uc29sZS5sb2coaGlzdG9yeSk7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e1BvcnRmb2xpb0xpc3Rpbmd9IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcG9ydGZvbGlvLWN1c3RvbWl6ZS86aWRcIiBjb21wb25lbnQ9e1BvcnRmb2xpb0N1c3RvbWl6ZX0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi80MDRcIiBjb21wb25lbnQ9e0Vycm9yNDA0fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBub21hdGNoIGNvbXBvbmVudD17RXJyb3I0MDR9IC8+XHJcbiAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQXBwLmRpc3BsYXlOYW1lID0gJ0FwcCc7XHJcblxyXG4vLyBCb290c3RyYXAgY2xpZW50XHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgcHJvcHMgPSB7XHJcbiAgICAgIHBhdGg6IGxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICB9O1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBwcm9wcyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdFZpZXcnKSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28taWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+e3RoaXMucHJvcHMuaGVhZGVyfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPG1haW4gaWQ9XCJib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIEdlbmVyYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2plZnJlZXN1aml0L2dlbmVyYXRvci1yZWFjdC1ub2RlXCI+Z2VuZXJhdG9yLXJlYWN0LW5vZGU8L2E+LlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblBhZ2UuZGlzcGxheU5hbWUgPSAnUGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==