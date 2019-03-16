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
        imageUrl: 'build/images/HKSPnightview2panorama.jpg',
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
          ' Portfolio customize ',
          this.props.match.params.id,
          ' '
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

    _this.itemClickHandler = function (id) {
      return _this._itemClickHandler(id);
    };
    return _this;
  }

  _createClass(PortFolioListing, [{
    key: '_itemClickHandler',
    value: function _itemClickHandler(id) {
      this.props.history.push('/customize/' + id);
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
            _react2.default.createElement('img', { className: 'logo-img', src: 'build/images/logo.svg' })
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
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _portfolioListing2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/customize/:id', component: _portfolioCustomize2.default }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9lcnJvcjQwNC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9DdXN0b21pemUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9MaXN0aW5nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyLWRvbS9lc20vcmVhY3Qtcm91dGVyLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvc3RvcmVzL2RlZmF1bHRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL2NvbXBvbmVudHMvcG9ydGZvbGlvSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZmV0Y2hpbmdQYWdlRGF0YSIsInNldFBhZ2VEYXRhIiwic2V0UG9ydGZvbGlvRGF0YSIsImZldGNoUGFnZURhdGEiLCJmZXRjaExpc3RpbmdDb250ZW50IiwiRkVUQ0hJTkdfUEFHRURBVEEiLCJTRVRfUEFHRURBVEEiLCJMT0NBVElPTl9DSEFOR0UiLCJTRVRfUE9SVEZPTElPX0RBVEEiLCJ0eXBlIiwiZGF0YSIsInBheWxvYWQiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwibGlzdENvbnRlbnQiLCJpIiwicHVzaCIsImlkIiwidGl0bGUiLCJpbWFnZVVybCIsInZvbGF0YWxpdHkiLCJtb250aFJldHVybiIsIm1lYW5SZXR1cm4iLCJtaW5JbnZlc3RtZW50IiwiY3VycmVuY3kiLCJlbGlnaWJpbGl0eSIsInJlZHVjZXJzIiwicmVkdWNlciIsImFwcCIsImFwcFN0YXRlIiwiZGF0YVJlcXVlc3RzIiwicm91dGluZyIsInJvdXRlclJlZHVjZXIiLCJob21lUGFnZSIsImhvbWVQYWdlUmVkdWNlciIsInBvcnRmb2xpb0xpc3RpbmciLCJwb3J0Zm9saW9MaXN0aW5nUmVkdWNlciIsInJvdXRpbmdNaWRkbGV3YXJlIiwiYnJvd3Nlckhpc3RvcnkiLCJzdG9yZSIsImRlZmF1bHRTdGF0ZSIsInRodW5rIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmIiwiRXJyb3I0MDQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiYWN0aW9ucyIsIkhvbWUiLCJwcm9wcyIsIm1lc3NhZ2UiLCJzZWxlY3QiLCJzdGF0ZSIsIlBvcnRGb2xpb0N1c3RvbWl6ZSIsIm1hdGNoIiwicGFyYW1zIiwiUG9ydEZvbGlvTGlzdGluZyIsImxpc3RpbmdDb250ZW50IiwiaXRlbUNsaWNrSGFuZGxlciIsIl9pdGVtQ2xpY2tIYW5kbGVyIiwiaGlzdG9yeSIsIm1hcCIsImZvbGlvRGF0YSIsImxlbmd0aCIsImdldExpc3RpbmdDb250ZW50IiwibmV4dFByb3BzIiwicHJldlN0YXRlIiwiYWN0aW9uRXZlbnRzIiwiYWN0aW9uIiwiYWN0aW9uVHlwZSIsIm5ld1N0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiY3VycmVudCIsInBhdGgiLCJwYXRobmFtZSIsIlNFVFRJTkdfUEFHRURBVEEiLCJzZXR0aW5ncyIsInBhZ2VUaXRsZSIsImN1c3RvbWl6ZXBhZ2UiLCJQb3J0Rm9saW9JdGVtIiwiZWxpZ2liaWxpdHlNYXBwaW5nIiwiYXZhaWxhYmxlIiwicmVzdHJpY3RlZCIsImNsaWNrSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJQb3J0Zm9saW9MaXN0aW5nIiwiUG9ydGZvbGlvQ3VzdG9taXplIiwib25sb2FkIiwibG9jYXRpb24iLCJSZWFjdERPTSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUGFnZSIsImhlYWRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUFXZ0JBLGdCLEdBQUFBLGdCO1FBTUFDLFcsR0FBQUEsVztRQU9BQyxnQixHQUFBQSxnQjtRQU9BQyxhLEdBQUFBLGE7UUFVQUMsbUIsR0FBQUEsbUI7O0FBckNoQjs7Ozs7O0FBRU8sSUFBTUMsZ0RBQW9CLG1CQUExQixDLENBTlA7Ozs7QUFPTyxJQUFNQyxzQ0FBZSxjQUFyQjtBQUNBLElBQU1DLDRDQUFrQiwwQkFBeEI7QUFDQSxJQUFNQyxrREFBcUIsb0JBQTNCOztBQUVBLFNBQVNSLGdCQUFULEdBQTZCO0FBQ2xDLFNBQU87QUFDTFMsVUFBTUo7QUFERCxHQUFQO0FBR0Q7O0FBRU0sU0FBU0osV0FBVCxDQUFzQlMsSUFBdEIsRUFBNEI7QUFDakMsU0FBTztBQUNMRCxVQUFNSCxZQUREO0FBRUxLLGFBQVNEO0FBRkosR0FBUDtBQUlEOztBQUVNLFNBQVNSLGdCQUFULENBQTJCUSxJQUEzQixFQUFpQztBQUN0QyxTQUFPO0FBQ0xELFVBQU1ELGtCQUREO0FBRUxHLGFBQVNEO0FBRkosR0FBUDtBQUlEOztBQUVNLFNBQVNQLGFBQVQsR0FBMEI7QUFDL0IsU0FBTyxVQUFVUyxRQUFWLEVBQW9CO0FBQ3pCQSxhQUFTWixrQkFBVDtBQUNBLFdBQU9hLGdCQUFNQyxHQUFOLENBQVUsdUJBQVYsRUFDSEMsSUFERyxDQUNFLFVBQVVDLFFBQVYsRUFBb0I7QUFDeEJKLGVBQVNYLFlBQVllLFNBQVNOLElBQXJCLENBQVQ7QUFDRCxLQUhHLENBQVA7QUFJRCxHQU5EO0FBT0Q7O0FBRU0sU0FBU04sbUJBQVQsR0FBZ0M7QUFDckMsU0FBTyxVQUFVUSxRQUFWLEVBQW9CO0FBQ3pCLFFBQUlLLGNBQWMsRUFBbEI7O0FB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S0FBTCxDQUFXa0Q7QUFEZDtBQURGLFNBUEY7QUFZRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFFBQWY7QUFBQTtBQUNlO0FBQUE7QUFBQSxnQkFBRyxNQUFLLHFEQUFSO0FBQUE7QUFBQSxhQURmO0FBQUE7QUFBQTtBQURGO0FBWkYsT0FERjtBQW9CRDs7OztFQTFCZ0J2RCxnQkFBTUMsUzs7QUE2QnpCb0QsS0FBS25ELFdBQUwsR0FBbUIsTUFBbkI7O2tCQUVlbUQsSSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFRoaXMgcHJvdmlkZXMgdGhlIHZhcmlvdXMgcmVkdXggYWN0aW9ucyB0byB0cmlnZ2VyIGFwcCBzdGF0ZSBjaGFuZ2VzIGJ5IHRoZSByZWR1eCByZWR1Y2VyXHJcbiAqIEBtb2R1bGUgUmVkdXggYWN0aW9uc1xyXG4gKi9cclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgRkVUQ0hJTkdfUEFHRURBVEEgPSAnRkVUQ0hJTkdfUEFHRURBVEEnO1xyXG5leHBvcnQgY29uc3QgU0VUX1BBR0VEQVRBID0gJ1NFVF9QQUdFREFUQSc7XHJcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9DSEFOR0UgPSAnQEByb3V0ZXIvTE9DQVRJT05fQ0hBTkdFJztcclxuZXhwb3J0IGNvbnN0IFNFVF9QT1JURk9MSU9fREFUQSA9ICdTRVRfUE9SVEZPTElPX0RBVEEnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoaW5nUGFnZURhdGEgKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBGRVRDSElOR19QQUdFREFUQVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQYWdlRGF0YSAoZGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTRVRfUEFHRURBVEEsXHJcbiAgICBwYXlsb2FkOiBkYXRhXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBvcnRmb2xpb0RhdGEgKGRhdGEpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0VUX1BPUlRGT0xJT19EQVRBLFxyXG4gICAgcGF5bG9hZDogZGF0YVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBhZ2VEYXRhICgpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICBkaXNwYXRjaChmZXRjaGluZ1BhZ2VEYXRhKCkpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9nZXQtcGFnZS1kZXRhaWxzJylcclxuICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICBkaXNwYXRjaChzZXRQYWdlRGF0YShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hMaXN0aW5nQ29udGVudCAoKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgbGV0IGxpc3RDb250ZW50ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTQ7IGkrKykge1xyXG4gICAgICBsaXN0Q29udGVudC5wdXNoKHtcclxuICAgICAgICBpZDogaSxcclxuICAgICAgICB0aXRsZTogJ0hvbmcgS29uZyBUZWNobm9sb2d5JyxcclxuICAgICAgICBpbWFnZVVybDogJ2J1aWxkL2ltYWdlcy9IS1NQbmlnaHR2aWV3MnBhbm9yYW1hLmpwZycsXHJcbiAgICAgICAgdm9sYXRhbGl0eTogJzI2Ljg0JyxcclxuICAgICAgICBtb250aFJldHVybjogJzIuOTYnLFxyXG4gICAgICAgIG1lYW5SZXR1cm46ICczNy4yOScsXHJcbiAgICAgICAgbWluSW52ZXN0bWVudDogJzE3MDAwMCcsXHJcbiAgICAgICAgY3VycmVuY3k6ICdIS0QnLFxyXG4gICAgICAgIGVsaWdpYmlsaXR5OiAnYXZhaWxhYmxlJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaChzZXRQb3J0Zm9saW9EYXRhKGxpc3RDb250ZW50KSk7XHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSwgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4JztcclxuaW1wb3J0IGRlZmF1bHRTdGF0ZSBmcm9tICcuL2RlZmF1bHRTdGF0ZSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBhcHA6IHJlZHVjZXJzLmFwcFN0YXRlLFxyXG4gIGRhdGFSZXF1ZXN0czogcmVkdWNlcnMuZGF0YVJlcXVlc3RzLFxyXG4gIHJvdXRpbmc6IHJvdXRlclJlZHVjZXIsXHJcbiAgaG9tZVBhZ2U6IHJlZHVjZXJzLmhvbWVQYWdlUmVkdWNlcixcclxuICBwb3J0Zm9saW9MaXN0aW5nOiByZWR1Y2Vycy5wb3J0Zm9saW9MaXN0aW5nUmVkdWNlclxyXG59KTtcclxuXHJcbmNvbnN0IHJvdXRpbmdNaWRkbGV3YXJlID0gcm91dGVyTWlkZGxld2FyZShicm93c2VySGlzdG9yeSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGRlZmF1bHRTdGF0ZSwgY29tcG9zZShcclxuICBhcHBseU1pZGRsZXdhcmUodGh1bmssIHJvdXRpbmdNaWRkbGV3YXJlKSxcclxuICB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3N0b3Jlcy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFcnJvcjQwNCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImVycm9yLWhlYWRpbmdcIj40MDQgLSBNaXNzaW5nIFJlc291cmNlIDwvaDI+XHJcbiAgICAgICAgPHA+UGxlYXNlIHRyeSBhZ2FpbiwgYnV0IGlmIHRoZSBwcm9ibGVtIHBlcnNpc3QsIGNvbnRhY3QgYW4gYWRtaW5pc3RyYXRvci48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkVycm9yNDA0LmRpc3BsYXlOYW1lID0gJ0Vycm9yNDA0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yNDA0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2Vycm9yNDA0LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLmZldGNoUGFnZURhdGEoKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBhZ2UgY2xhc3NOYW1lPVwiaG9tZS1wYWdlXCIgaGVhZGVyPVwiSG9tZVwiPlxyXG4gICAgICAgIDxoMj57dGhpcy5wcm9wcy5tZXNzYWdlfTwvaDI+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lLmRpc3BsYXlOYW1lID0gJ0hvbWUnO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0IChzdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBtZXNzYWdlOiBzdGF0ZS5ob21lUGFnZS5tZXNzYWdlXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QpKEhvbWUpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2hvbWUuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUG9ydEZvbGlvQ3VzdG9taXplIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1jdXN0b21pemUtc2VjdGlvblwiPlxyXG4gICAgICAgIDxoMj4gUG9ydGZvbGlvIGN1c3RvbWl6ZSB7dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWR9IDwvaDI+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Qb3J0Rm9saW9DdXN0b21pemUuZGlzcGxheU5hbWUgPSAnUG9ydEZvbGlvQ3VzdG9taXplJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRGb2xpb0N1c3RvbWl6ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9DdXN0b21pemUuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUG9ydGZvbGlvSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL3BvcnRmb2xpb0l0ZW0nO1xyXG5cclxuY2xhc3MgUG9ydEZvbGlvTGlzdGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsaXN0aW5nQ29udGVudDogW11cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pdGVtQ2xpY2tIYW5kbGVyID0gKGlkKSA9PiB0aGlzLl9pdGVtQ2xpY2tIYW5kbGVyKGlkKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsaXN0aW5nQ29udGVudDogbmV4dFByb3BzLmxpc3RpbmdDb250ZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgX2l0ZW1DbGlja0hhbmRsZXIoaWQpIHtcclxuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvY3VzdG9taXplLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRMaXN0aW5nQ29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmxpc3RpbmdDb250ZW50Lm1hcCgoZm9saW9EYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiA8UG9ydGZvbGlvSXRlbSBrZXk9e2ZvbGlvRGF0YS5pZH0gey4uLmZvbGlvRGF0YX0gaXRlbUNsaWNrSGFuZGxlcj17dGhpcy5pdGVtQ2xpY2tIYW5kbGVyfS8+O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMuZmV0Y2hMaXN0aW5nQ29udGVudCgpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbGlzdGluZy1zZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvLWltZ1wiIHNyYz1cImJ1aWxkL2ltYWdlcy9sb2dvLnN2Z1wiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkxvZyBJbjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLW1haW4tc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBIZXJlIGFyZSBhIGZldyByZWNvbW1lbmRhdGlvbnMgdG8gY2hvb3NlIGZyb21cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgVXNlIHRoZSBmaWx0ZXJzIHRvIGZ1cnRoZXIgem9uZSBpbiBvbmUgYSBwb3J0Zm9saW8gZGVwZW5kaW5nIG9uIHlvdXIgcHJlZmVyZW5jZXNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItZmllbGRcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+UmlzayBMZXZlbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+QWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1maWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5SZWdpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPkFsbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10YWIgYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5saXN0aW5nQ29udGVudC5sZW5ndGh9IFBvcnRmb2xpbyByZWNvbW1lbmRhdGlvbnMgYmFzZWQgb24geW91ciBwcmVmZXJlbmNlc1xyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtdGFiXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1wcmVmZXJlbmNlLWxpc3RcIj5cclxuICAgICAgICAgICAgICB7dGhpcy5nZXRMaXN0aW5nQ29udGVudCgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUG9ydEZvbGlvTGlzdGluZy5kaXNwbGF5TmFtZSA9ICdQb3J0Rm9saW9MaXN0aW5nJztcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdChzdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBsaXN0aW5nQ29udGVudDogc3RhdGUucG9ydGZvbGlvTGlzdGluZy5saXN0aW5nQ29udGVudFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0KShQb3J0Rm9saW9MaXN0aW5nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9MaXN0aW5nLmpzIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgX19Sb3V0ZXJDb250ZXh0LCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5leHBvcnQgKiBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBjcmVhdGVMb2NhdGlvbiB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgSFRNTDUgaGlzdG9yeS5cbiAqL1xuXG52YXIgQnJvd3NlclJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShCcm93c2VyUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCcm93c2VyUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBCcm93c2VyUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEJyb3dzZXJSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBmb3JjZVJlZnJlc2g6IFByb3BUeXBlcy5ib29sLFxuICAgIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGtleUxlbmd0aDogUHJvcFR5cGVzLm51bWJlclxuICB9O1xuXG4gIEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8QnJvd3NlclJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgd2luZG93LmxvY2F0aW9uLmhhc2guXG4gKi9cblxudmFyIEhhc2hSb3V0ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSGFzaFJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSGFzaFJvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlSGFzaEhpc3RvcnkoX3RoaXMucHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBIYXNoUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgICAgaGlzdG9yeTogdGhpcy5oaXN0b3J5LFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSGFzaFJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBIYXNoUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGFzaFR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJoYXNoYmFuZ1wiLCBcIm5vc2xhc2hcIiwgXCJzbGFzaFwiXSlcbiAgfTtcblxuICBIYXNoUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEhhc2hSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBIYXNoUm91dGVyIGFzIFJvdXRlciB9YC5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgYSBoaXN0b3J5LWF3YXJlIDxhPi5cbiAqL1xuXG5cbnZhciBMaW5rID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKExpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpbmsoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExpbmsucHJvdG90eXBlO1xuXG4gIF9wcm90by5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LCBoaXN0b3J5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAvLyBvbkNsaWNrIHByZXZlbnRlZCBkZWZhdWx0XG4gICAgZXZlbnQuYnV0dG9uID09PSAwICYmICggLy8gaWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG4gICAgIXRoaXMucHJvcHMudGFyZ2V0IHx8IHRoaXMucHJvcHMudGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmIC8vIGxldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICAgIWlzTW9kaWZpZWRFdmVudChldmVudCkgLy8gaWdub3JlIGNsaWNrcyB3aXRoIG1vZGlmaWVyIGtleXNcbiAgICApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHRoaXMucHJvcHMucmVwbGFjZSA/IGhpc3RvcnkucmVwbGFjZSA6IGhpc3RvcnkucHVzaDtcbiAgICAgICAgbWV0aG9kKHRoaXMucHJvcHMudG8pO1xuICAgICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIHJlcGxhY2UgPSBfdGhpcyRwcm9wcy5yZXBsYWNlLFxuICAgICAgICB0byA9IF90aGlzJHByb3BzLnRvLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImlubmVyUmVmXCIsIFwicmVwbGFjZVwiLCBcInRvXCJdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfX1JvdXRlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAhY29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPExpbms+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICB2YXIgbG9jYXRpb24gPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBjcmVhdGVMb2NhdGlvbih0bywgbnVsbCwgbnVsbCwgY29udGV4dC5sb2NhdGlvbikgOiB0bztcbiAgICAgIHZhciBocmVmID0gbG9jYXRpb24gPyBjb250ZXh0Lmhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbikgOiBcIlwiO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlQ2xpY2soZXZlbnQsIGNvbnRleHQuaGlzdG9yeSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgIHJlZjogaW5uZXJSZWZcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTGluaztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgdG9UeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pO1xuICB2YXIgaW5uZXJSZWZUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY3VycmVudDogUHJvcFR5cGVzLmFueVxuICB9KV0pO1xuICBMaW5rLnByb3BUeXBlcyA9IHtcbiAgICBpbm5lclJlZjogaW5uZXJSZWZUeXBlLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHRhcmdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0bzogdG9UeXBlLmlzUmVxdWlyZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gam9pbkNsYXNzbmFtZXMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc25hbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzbmFtZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY2xhc3NuYW1lcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaTtcbiAgfSkuam9pbihcIiBcIik7XG59XG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG5cblxuZnVuY3Rpb24gTmF2TGluayhfcmVmKSB7XG4gIHZhciBfcmVmJGFyaWFDdXJyZW50ID0gX3JlZltcImFyaWEtY3VycmVudFwiXSxcbiAgICAgIGFyaWFDdXJyZW50ID0gX3JlZiRhcmlhQ3VycmVudCA9PT0gdm9pZCAwID8gXCJwYWdlXCIgOiBfcmVmJGFyaWFDdXJyZW50LFxuICAgICAgX3JlZiRhY3RpdmVDbGFzc05hbWUgPSBfcmVmLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYkYWN0aXZlQ2xhc3NOYW1lID09PSB2b2lkIDAgPyBcImFjdGl2ZVwiIDogX3JlZiRhY3RpdmVDbGFzc05hbWUsXG4gICAgICBhY3RpdmVTdHlsZSA9IF9yZWYuYWN0aXZlU3R5bGUsXG4gICAgICBjbGFzc05hbWVQcm9wID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBleGFjdCA9IF9yZWYuZXhhY3QsXG4gICAgICBpc0FjdGl2ZVByb3AgPSBfcmVmLmlzQWN0aXZlLFxuICAgICAgbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgc3RyaWN0ID0gX3JlZi5zdHJpY3QsXG4gICAgICBzdHlsZVByb3AgPSBfcmVmLnN0eWxlLFxuICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImFyaWEtY3VycmVudFwiLCBcImFjdGl2ZUNsYXNzTmFtZVwiLCBcImFjdGl2ZVN0eWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwiZXhhY3RcIiwgXCJpc0FjdGl2ZVwiLCBcImxvY2F0aW9uXCIsIFwic3RyaWN0XCIsIFwic3R5bGVcIiwgXCJ0b1wiXSk7XG5cbiAgdmFyIHBhdGggPSB0eXBlb2YgdG8gPT09IFwib2JqZWN0XCIgPyB0by5wYXRobmFtZSA6IHRvOyAvLyBSZWdleCB0YWtlbiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAvYmxvYi9tYXN0ZXIvaW5kZXguanMjTDIwMlxuXG4gIHZhciBlc2NhcGVkUGF0aCA9IHBhdGggJiYgcGF0aC5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7XG4gICAgcGF0aDogZXNjYXBlZFBhdGgsXG4gICAgZXhhY3Q6IGV4YWN0LFxuICAgIHN0cmljdDogc3RyaWN0LFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4oX3JlZjIpIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IF9yZWYyLmxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoID0gX3JlZjIubWF0Y2g7XG4gICAgICB2YXIgaXNBY3RpdmUgPSAhIShpc0FjdGl2ZVByb3AgPyBpc0FjdGl2ZVByb3AobWF0Y2gsIGxvY2F0aW9uKSA6IG1hdGNoKTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBpc0FjdGl2ZSA/IGpvaW5DbGFzc25hbWVzKGNsYXNzTmFtZVByb3AsIGFjdGl2ZUNsYXNzTmFtZSkgOiBjbGFzc05hbWVQcm9wO1xuICAgICAgdmFyIHN0eWxlID0gaXNBY3RpdmUgPyBfZXh0ZW5kcyh7fSwgc3R5bGVQcm9wLCBhY3RpdmVTdHlsZSkgOiBzdHlsZVByb3A7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBfZXh0ZW5kcyh7XG4gICAgICAgIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmIGFyaWFDdXJyZW50IHx8IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHRvOiB0b1xuICAgICAgfSwgcmVzdCkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIGFyaWFDdXJyZW50VHlwZSA9IFByb3BUeXBlcy5vbmVPZihbXCJwYWdlXCIsIFwic3RlcFwiLCBcImxvY2F0aW9uXCIsIFwiZGF0ZVwiLCBcInRpbWVcIiwgXCJ0cnVlXCJdKTtcbiAgTmF2TGluay5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgTGluay5wcm9wVHlwZXMsIHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFR5cGUsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleGFjdDogUm91dGUucHJvcFR5cGVzLmV4YWN0LFxuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHJpY3Q6IFJvdXRlLnByb3BUeXBlcy5zdHJpY3QsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEJyb3dzZXJSb3V0ZXIsIEhhc2hSb3V0ZXIsIExpbmssIE5hdkxpbmsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzbS9yZWFjdC1yb3V0ZXItZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBhY3Rpb25FdmVudHMgZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2VSZWR1Y2VyIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgbGV0IGFjdGlvblR5cGUgPSBhY3Rpb24udHlwZSxcclxuICAgICAgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcblxyXG4gIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuU0VUX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9ydGZvbGlvTGlzdGluZ1JlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRfUE9SVEZPTElPX0RBVEEpIHtcclxuICAgIG5ld1N0YXRlLmxpc3RpbmdDb250ZW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBTdGF0ZSAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkxPQ0FUSU9OX0NIQU5HRSkge1xyXG4gICAgbmV3U3RhdGUuY3VycmVudC5wYXRoID0gYWN0aW9uLnBheWxvYWQucGF0aG5hbWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRhUmVxdWVzdHMgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRUSU5HX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IHRydWU7XHJcbiAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuU0VUX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvcmVkdWNlcnMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgc3RhdGUgPSB7XHJcbiAgYXBwOiB7XHJcbiAgICBjdXJyZW50OiB7XHJcbiAgICAgIHBhdGg6ICcnLFxyXG4gICAgICBwYWdlVGl0bGU6ICcnXHJcbiAgICB9XHJcbiAgfSxcclxuICBob21lUGFnZToge1xyXG4gICAgbWVzc2FnZTogXCJUZW1wbGF0ZSBNZXNzYWdlXCJcclxuICB9LFxyXG4gIHBvcnRmb2xpb0xpc3Rpbmc6IHtcclxuICAgIGxpc3RpbmdDb250ZW50OiBbXVxyXG4gIH0sXHJcbiAgY3VzdG9taXplcGFnZToge1xyXG4gICAgZGF0YToge31cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdGF0ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC9zdG9yZXMvZGVmYXVsdFN0YXRlLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFBvcnRGb2xpb0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5lbGlnaWJpbGl0eU1hcHBpbmcgPSB7XHJcbiAgICAgIGF2YWlsYWJsZTogJ0F2YWlsYWJsZSBmb3IgYWxsIGludmVzdG9ycycsXHJcbiAgICAgIHJlc3RyaWN0ZWQ6ICdSZXN0cmljdGVkIHRvIEFjY3JlZGl0ZWQgaW52ZXN0b3JzICdcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMuaXRlbUNsaWNrSGFuZGxlcigpO1xyXG4gIH1cclxuXHJcbiAgaXRlbUNsaWNrSGFuZGxlciAoKSB7XHJcbiAgICB0aGlzLnByb3BzLml0ZW1DbGlja0hhbmRsZXIodGhpcy5wcm9wcy5pZCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWhlYWRcIj5cclxuICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5pbWFnZVVybH0gY2xhc3NOYW1lPVwiZm9saW8taXRlbS1pbWFnZVwiPlxyXG4gICAgICAgIDwvaW1nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9saW8taXRlbS10aXRsZVwiPjxzcGFuPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1ib2R5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXJlY29yZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtbGFiZWxcIj5Wb2xhdGFsaXR5PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC12YWx1ZVwiPnt0aGlzLnByb3BzLnZvbGF0YWxpdHl9JTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1yZWNvcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLWxhYmVsXCI+MSBNb250aCBSZXR1cm48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLXZhbHVlXCI+e3RoaXMucHJvcHMubW9udGhSZXR1cm59JTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1yZWNvcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLWxhYmVsXCI+TWVhbiBSZXR1cm48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLXZhbHVlXCI+e3RoaXMucHJvcHMubWVhblJldHVybn0lPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXJlY29yZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtbGFiZWxcIj5NaW5pbXVtIEludmVzdG1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLXZhbHVlXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57dGhpcy5wcm9wcy5jdXJyZW5jeX08L3NwYW4+e3RoaXMucHJvcHMubWluSW52ZXN0bWVudH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tcmVjb3JkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC1sYWJlbFwiPkVsaWdpYmlsaXR5PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC12YWx1ZVwiPnt0aGlzLmVsaWdpYmlsaXR5TWFwcGluZ1t0aGlzLnByb3BzLmVsaWdpYmlsaXR5XX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1hY3Rpb25cIiBvbkNsaWNrPXt0aGlzLmNsaWNrSGFuZGxlcn0+RXhwbG9yZSBJbnZlc3RtZW50IElkZWE8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblBvcnRGb2xpb0l0ZW0uZGlzcGxheU5hbWUgPSAnUG9ydEZvbGlvSXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Rm9saW9JdGVtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL2NvbXBvbmVudHMvcG9ydGZvbGlvSXRlbS5qcyIsIi8qIGdsb2JhbCBsb2NhdGlvbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmVzL2luZGV4JztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9ob21lJztcclxuaW1wb3J0IEVycm9yNDA0IGZyb20gJy4vcGFnZXMvZXJyb3I0MDQnO1xyXG5pbXBvcnQgUG9ydGZvbGlvQ3VzdG9taXplIGZyb20gJy4vcGFnZXMvcG9ydGZvbGlvQ3VzdG9taXplJztcclxuaW1wb3J0IFBvcnRmb2xpb0xpc3RpbmcgZnJvbSAnLi9wYWdlcy9wb3J0Zm9saW9MaXN0aW5nJztcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuXHJcbmNvbnN0IGhpc3RvcnkgPSBzeW5jSGlzdG9yeVdpdGhTdG9yZShjcmVhdGVCcm93c2VySGlzdG9yeSgpLCBzdG9yZSk7XHJcbmNvbnNvbGUubG9nKGhpc3RvcnkpO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1jb250YWluZXJcIj5cclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcbiAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtQb3J0Zm9saW9MaXN0aW5nfSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2N1c3RvbWl6ZS86aWRcIiBjb21wb25lbnQ9e1BvcnRmb2xpb0N1c3RvbWl6ZX0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi80MDRcIiBjb21wb25lbnQ9e0Vycm9yNDA0fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBub21hdGNoIGNvbXBvbmVudD17RXJyb3I0MDR9IC8+XHJcbiAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQXBwLmRpc3BsYXlOYW1lID0gJ0FwcCc7XHJcblxyXG4vLyBCb290c3RyYXAgY2xpZW50XHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgcHJvcHMgPSB7XHJcbiAgICAgIHBhdGg6IGxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICB9O1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBwcm9wcyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdFZpZXcnKSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28taWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+e3RoaXMucHJvcHMuaGVhZGVyfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPG1haW4gaWQ9XCJib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIEdlbmVyYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2plZnJlZXN1aml0L2dlbmVyYXRvci1yZWFjdC1ub2RlXCI+Z2VuZXJhdG9yLXJlYWN0LW5vZGU8L2E+LlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblBhZ2UuZGlzcGxheU5hbWUgPSAnUGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==