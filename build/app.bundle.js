webpackJsonp([0],{

/***/ 15:
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
        { 'class': 'page-wrapper' },
        _react2.default.createElement(
          'header',
          { className: 'page-header' },
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
            'Copyright \xA9 ',
            _react2.default.createElement(
              'a',
              { href: '' },
              'CGS-CIMB Securities'
            ),
            '. All rights reserved.'
          )
        )
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

Page.displayName = 'Page';

exports.default = Page;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(21);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouter = __webpack_require__(7);

var _reactRouterRedux = __webpack_require__(8);

var _index = __webpack_require__(65);

var reducers = _interopRequireWildcard(_index);

var _defaultState = __webpack_require__(66);

var _defaultState2 = _interopRequireDefault(_defaultState);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  app: reducers.appState,
  dataRequests: reducers.dataRequests,
  routing: _reactRouterRedux.routerReducer,
  homePage: reducers.homePageReducer,
  portfolioListing: reducers.portfolioListingReducer,
  customizePortfolio: reducers.customizePortfolioReducer
});

var routingMiddleware = (0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory);

var store = (0, _redux.createStore)(reducer, _defaultState2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, routingMiddleware), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
}));

exports.default = store;

/***/ }),

/***/ 40:
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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _actions = __webpack_require__(9);

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

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PortFolioCustomize = function (_React$Component) {
  _inherits(PortFolioCustomize, _React$Component);

  function PortFolioCustomize() {
    _classCallCheck(this, PortFolioCustomize);

    var _this = _possibleConstructorReturn(this, (PortFolioCustomize.__proto__ || Object.getPrototypeOf(PortFolioCustomize)).call(this));

    _this.state = {
      constituentData: {}
    };
    return _this;
  }

  _createClass(PortFolioCustomize, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch(actions.fetchPortfolioData());
    }
  }, {
    key: 'renderGridSubContent',
    value: function renderGridSubContent(content) {
      return _react2.default.createElement(
        'div',
        { 'class': 'instrument-row' },
        _react2.default.createElement(
          'div',
          { className: 'content-value category' },
          _react2.default.createElement(
            'a',
            { href: '' },
            content.instrument.name
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'content-value link' },
          '\xA0'
        ),
        _react2.default.createElement(
          'div',
          { className: 'content-value weight' },
          content.weight,
          '%'
        ),
        _react2.default.createElement(
          'div',
          { className: 'content-value weight' },
          _react2.default.createElement(
            'span',
            { className: 'inc' },
            '+'
          ),
          _react2.default.createElement('input', { type: 'number', className: 'weight-input', defaultValue: content.weight }),
          _react2.default.createElement(
            'span',
            { 'class': 'dec' },
            '-'
          )
        )
      );
    }
  }, {
    key: 'renderGridContent',
    value: function renderGridContent() {
      var constituentData = this.state.constituentData;

      var gridContent = [],
          weight = void 0;

      for (var key in constituentData) {
        weight = constituentData[key].reduce(function (r, a) {
          return r + a.weight;
        }, 0);
        gridContent.push(_react2.default.createElement(
          'div',
          { className: 'constituent-group' },
          _react2.default.createElement(
            'div',
            { className: 'group-bar' },
            _react2.default.createElement(
              'div',
              { className: 'column-value category' },
              key
            ),
            _react2.default.createElement(
              'div',
              { className: 'column-value link' },
              _react2.default.createElement(
                'a',
                { href: '' },
                ' +Add ',
                key
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column-value weight' },
              weight,
              '%'
            ),
            _react2.default.createElement(
              'div',
              { className: 'column-value weight' },
              weight,
              '%'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'group-accord' },
            constituentData[key].map(this.renderGridSubContent)
          )
        ));
      }

      return gridContent;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'portfolio-customize-section' },
        _react2.default.createElement(
          _index2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: 'customize-content' },
            _react2.default.createElement(
              'div',
              { className: 'top-section' },
              _react2.default.createElement(
                'h2',
                { className: 'header' },
                'Portfolio Constituents'
              ),
              _react2.default.createElement(
                'div',
                { className: 'action-section' },
                _react2.default.createElement(
                  'button',
                  { onClick: this.resetHandler, className: 'btn btn-primary reset-btn' },
                  'Reset'
                ),
                _react2.default.createElement(
                  'button',
                  { onClick: this.rebalanceHandler, className: 'btn btn-primary rebalance-btn' },
                  'Rebalance'
                ),
                _react2.default.createElement(
                  'button',
                  { onClick: this.saveHandler, className: 'btn btn-primary save-btn' },
                  'Save and Continue'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'portfolio-grid-section' },
              _react2.default.createElement(
                'div',
                { className: 'grid-title' },
                _react2.default.createElement(
                  'div',
                  { className: 'column-title category' },
                  'Category/Stock'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'column-title link' },
                  '\xA0'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'column-title weight' },
                  'Model Weight(%)'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'column-title weight' },
                  'Weight(100 %)'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'grid-content' },
                this.renderGridContent()
              )
            )
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.modalPortfolio.length) {
        var modalData = nextProps.modalPortfolio[0],
            constituentData = modalData.constituents.reduce(function (r, a) {
          r[a.instrument.type] = r[a.instrument.type] || [];
          r[a.instrument.type].push(a);
          return r;
        }, Object.create(null));

        return _extends({}, modalData, {
          constituentData: constituentData
        });
      } else {
        return null;
      }
    }
  }]);

  return PortFolioCustomize;
}(_react2.default.Component);

PortFolioCustomize.displayName = 'PortFolioCustomize';

function select(state) {
  return {
    modalPortfolio: state.customizePortfolio.modalPortfolio
  };
}

exports.default = (0, _reactRedux.connect)(select)(PortFolioCustomize);

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(4);

var _portfolioItem = __webpack_require__(67);

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

      return this.props.listingContent.map(function (folioData) {
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
          _index2.default,
          null,
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
                  this.props.listingContent.length,
                  ' Portfolio recommendations based on your preferences'
                ),
                _react2.default.createElement('div', { className: 'title-tab' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'portfolio-preference-list' },
                this.getListingContent()
              )
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'nav-section' },
              _react2.default.createElement(
                'button',
                { 'class': 'nav-back-btn' },
                'Back'
              )
            )
          )
        )
      );
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(7);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tiny_warning__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_tiny_invariant__ = __webpack_require__(18);











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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homePageReducer = homePageReducer;
exports.portfolioListingReducer = portfolioListingReducer;
exports.customizePortfolioReducer = customizePortfolioReducer;
exports.appState = appState;
exports.dataRequests = dataRequests;

var _index = __webpack_require__(9);

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

  if (actionType === actionEvents.SET_LISTING_DATA) {
    newState.listingContent = action.payload;
  }

  return newState;
}

function customizePortfolioReducer(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_PORTFOLIO_DATA) {
    newState.modalPortfolio = action.payload;
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

/***/ 66:
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
  customizePortfolio: {
    modalPortfolio: []
  }
};

exports.default = state;

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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global location */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(4);

var _index = __webpack_require__(39);

var _index2 = _interopRequireDefault(_index);

var _reactRouterDom = __webpack_require__(47);

var _reactRouterRedux = __webpack_require__(8);

var _home = __webpack_require__(41);

var _home2 = _interopRequireDefault(_home);

var _error = __webpack_require__(40);

var _error2 = _interopRequireDefault(_error);

var _portfolioCustomize = __webpack_require__(42);

var _portfolioCustomize2 = _interopRequireDefault(_portfolioCustomize);

var _portfolioListing = __webpack_require__(43);

var _portfolioListing2 = _interopRequireDefault(_portfolioListing);

var _history = __webpack_require__(11);

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
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _portfolioCustomize2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/customize/:id', component: _portfolioListing2.default }),
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

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{ id: 1,
  name: 'HONGKONG TECHNOLOGY',
  volatility: '26.8%',
  mean_return: '2.96%',
  currency: 'SGD',
  constituents: [{
    weight: 3,
    instrument: {
      id: 1,
      name: 'CSX corp',
      type: 'Equity'
    }
  }, {
    weight: 17,
    instrument: {
      id: 2,
      name: 'cummins Inc',
      type: 'Equity'
    }
  }, {
    weight: 10,
    instrument: {
      id: 3,
      name: 'Eaton Corp PLC',
      type: 'Equity'
    }
  }, {
    weight: 10,
    instrument: {
      id: 4,
      name: 'Fedx corp',
      type: 'Equity'
    }
  }, {
    weight: 10,
    instrument: {
      id: 5,
      name: 'Haris corp',
      type: 'Equity'
    }
  }, {
    weight: 10,
    instrument: {
      id: 6,
      name: 'Norfolk Southern Corp',
      type: 'Bond'
    }
  }, {
    weight: 5,
    instrument: {
      id: 7,
      name: 'General Dynamics',
      type: 'Bond'
    }
  }, {
    weight: 15,
    instrument: {
      id: 8,
      name: 'hal',
      type: 'Bond'
    }
  }, {
    weight: 20,
    instrument: {
      id: 10,
      name: 'USD CASH',
      type: 'CASH'
    }
  }]
}];

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = listContent;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_PORTFOLIO_DATA = exports.SET_LISTING_DATA = exports.LOCATION_CHANGE = exports.SET_PAGEDATA = exports.FETCHING_PAGEDATA = undefined;
exports.fetchingPageData = fetchingPageData;
exports.setPageData = setPageData;
exports.setListingData = setListingData;
exports.setPortfolioData = setPortfolioData;
exports.fetchPageData = fetchPageData;
exports.fetchListingContent = fetchListingContent;
exports.fetchPortfolioData = fetchPortfolioData;

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

var _listing = __webpack_require__(70);

var _listing2 = _interopRequireDefault(_listing);

var _customize = __webpack_require__(69);

var _customize2 = _interopRequireDefault(_customize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCHING_PAGEDATA = exports.FETCHING_PAGEDATA = 'FETCHING_PAGEDATA'; /** This provides the various redux actions to trigger app state changes by the redux reducer
                                                                          * @module Redux actions
                                                                          */

var SET_PAGEDATA = exports.SET_PAGEDATA = 'SET_PAGEDATA';
var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
var SET_LISTING_DATA = exports.SET_LISTING_DATA = 'SET_LISTING_DATA';
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

function setListingData(data) {
  return {
    type: SET_LISTING_DATA,
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
    dispatch(setListingData(_listing2.default));
  };
}

function fetchPortfolioData() {
  return function (dispatch) {
    dispatch(setPortfolioData(_customize2.default));
  };
}

/***/ })

},[68]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvc3RvcmVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvZXJyb3I0MDQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvcG9ydGZvbGlvQ3VzdG9taXplLmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvcG9ydGZvbGlvTGlzdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci1kb20vZXNtL3JlYWN0LXJvdXRlci1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3N0b3Jlcy9kZWZhdWx0U3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9jb21wb25lbnRzL3BvcnRmb2xpb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbW9ja2RhdGEvY3VzdG9taXplLmpzIiwid2VicGFjazovLy8uL2xpYi9tb2NrZGF0YS9saXN0aW5nLmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvYWN0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQYWdlIiwicHJvcHMiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJyZWR1Y2VycyIsInJlZHVjZXIiLCJhcHAiLCJhcHBTdGF0ZSIsImRhdGFSZXF1ZXN0cyIsInJvdXRpbmciLCJyb3V0ZXJSZWR1Y2VyIiwiaG9tZVBhZ2UiLCJob21lUGFnZVJlZHVjZXIiLCJwb3J0Zm9saW9MaXN0aW5nIiwicG9ydGZvbGlvTGlzdGluZ1JlZHVjZXIiLCJjdXN0b21pemVQb3J0Zm9saW8iLCJjdXN0b21pemVQb3J0Zm9saW9SZWR1Y2VyIiwicm91dGluZ01pZGRsZXdhcmUiLCJicm93c2VySGlzdG9yeSIsInN0b3JlIiwiZGVmYXVsdFN0YXRlIiwidGh1bmsiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJFcnJvcjQwNCIsImFjdGlvbnMiLCJIb21lIiwiZGlzcGF0Y2giLCJmZXRjaFBhZ2VEYXRhIiwibWVzc2FnZSIsInNlbGVjdCIsInN0YXRlIiwiUG9ydEZvbGlvQ3VzdG9taXplIiwiY29uc3RpdHVlbnREYXRhIiwiZmV0Y2hQb3J0Zm9saW9EYXRhIiwiY29udGVudCIsImluc3RydW1lbnQiLCJuYW1lIiwid2VpZ2h0IiwiZ3JpZENvbnRlbnQiLCJrZXkiLCJyZWR1Y2UiLCJyIiwiYSIsInB1c2giLCJtYXAiLCJyZW5kZXJHcmlkU3ViQ29udGVudCIsInJlc2V0SGFuZGxlciIsInJlYmFsYW5jZUhhbmRsZXIiLCJzYXZlSGFuZGxlciIsInJlbmRlckdyaWRDb250ZW50IiwibmV4dFByb3BzIiwicHJldlN0YXRlIiwibW9kYWxQb3J0Zm9saW8iLCJsZW5ndGgiLCJtb2RhbERhdGEiLCJjb25zdGl0dWVudHMiLCJ0eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiUG9ydEZvbGlvTGlzdGluZyIsIml0ZW1DbGlja0hhbmRsZXIiLCJpZCIsIl9pdGVtQ2xpY2tIYW5kbGVyIiwiaGlzdG9yeSIsImxpc3RpbmdDb250ZW50IiwiZm9saW9EYXRhIiwiZmV0Y2hMaXN0aW5nQ29udGVudCIsImdldExpc3RpbmdDb250ZW50IiwiYWN0aW9uRXZlbnRzIiwiYWN0aW9uIiwiYWN0aW9uVHlwZSIsIm5ld1N0YXRlIiwiYXNzaWduIiwiU0VUX1BBR0VEQVRBIiwicGF5bG9hZCIsIlNFVF9MSVNUSU5HX0RBVEEiLCJTRVRfUE9SVEZPTElPX0RBVEEiLCJMT0NBVElPTl9DSEFOR0UiLCJjdXJyZW50IiwicGF0aCIsInBhdGhuYW1lIiwiU0VUVElOR19QQUdFREFUQSIsInNldHRpbmdzIiwicGFnZVRpdGxlIiwiUG9ydEZvbGlvSXRlbSIsImVsaWdpYmlsaXR5TWFwcGluZyIsImF2YWlsYWJsZSIsInJlc3RyaWN0ZWQiLCJjbGlja0hhbmRsZXIiLCJpbWFnZVVybCIsInRpdGxlIiwidm9sYXRhbGl0eSIsIm1vbnRoUmV0dXJuIiwibWVhblJldHVybiIsImN1cnJlbmN5IiwibWluSW52ZXN0bWVudCIsImVsaWdpYmlsaXR5IiwiY29uc29sZSIsImxvZyIsIkFwcCIsIlBvcnRmb2xpb0N1c3RvbWl6ZSIsIlBvcnRmb2xpb0xpc3RpbmciLCJvbmxvYWQiLCJsb2NhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2b2xhdGlsaXR5IiwibWVhbl9yZXR1cm4iLCJsaXN0Q29udGVudCIsImkiLCJmZXRjaGluZ1BhZ2VEYXRhIiwic2V0UGFnZURhdGEiLCJzZXRMaXN0aW5nRGF0YSIsInNldFBvcnRmb2xpb0RhdGEiLCJGRVRDSElOR19QQUdFREFUQSIsImRhdGEiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImxpc3RpbmdNb2NrRGF0YSIsInBvcnRmb2xpb01vZGFsRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7Ozs7Ozs7O0FBRWI7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7QUFDSixrQkFBZTtBQUFBOztBQUFBO0FBRWQ7Ozs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFNBQU0sY0FBWDtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUsYUFBbEI7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFDRSxtREFBSyxXQUFVLFVBQWYsRUFBMEIsS0FBSSx3QkFBOUI7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUpGLFNBREY7QUFT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LEtBSEcsQ0FBUDtBQUlELEdBTkQ7QUFPRDs7QUFFTSxTQUFTcEQsbUJBQVQsR0FBZ0M7QUFDckMsU0FBTyxVQUFVeEMsUUFBVixFQUFvQjtBQUN6QkEsYUFBU3lGLGVBQWVRLGlCQUFmLENBQVQ7QUFDRCxHQUZEO0FBR0Q7O0FBRU0sU0FBUzFGLGtCQUFULEdBQStCO0FBQ3BDLFNBQU8sVUFBVVAsUUFBVixFQUFvQjtBQUN6QkEsYUFBUzBGLGlCQUFpQlEsbUJBQWpCLENBQVQ7QUFDRCxHQUZEO0FBR0QsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nby1pbWdcIiBzcmM9XCIvYnVpbGQvaW1hZ2VzL2xvZ28uc3ZnXCI+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPHNwYW4+TG9nIEluPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPG1haW4gaWQ9XCJib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIENvcHlyaWdodCAmY29weTsgPGEgaHJlZj1cIlwiID5DR1MtQ0lNQiBTZWN1cml0aWVzPC9hPi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5QYWdlLmRpc3BsYXlOYW1lID0gJ1BhZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlLCByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgcmVkdWNlcnMgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnO1xyXG5pbXBvcnQgZGVmYXVsdFN0YXRlIGZyb20gJy4vZGVmYXVsdFN0YXRlJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGFwcDogcmVkdWNlcnMuYXBwU3RhdGUsXHJcbiAgZGF0YVJlcXVlc3RzOiByZWR1Y2Vycy5kYXRhUmVxdWVzdHMsXHJcbiAgcm91dGluZzogcm91dGVyUmVkdWNlcixcclxuICBob21lUGFnZTogcmVkdWNlcnMuaG9tZVBhZ2VSZWR1Y2VyLFxyXG4gIHBvcnRmb2xpb0xpc3Rpbmc6IHJlZHVjZXJzLnBvcnRmb2xpb0xpc3RpbmdSZWR1Y2VyLFxyXG4gIGN1c3RvbWl6ZVBvcnRmb2xpbzogcmVkdWNlcnMuY3VzdG9taXplUG9ydGZvbGlvUmVkdWNlclxyXG59KTtcclxuXHJcbmNvbnN0IHJvdXRpbmdNaWRkbGV3YXJlID0gcm91dGVyTWlkZGxld2FyZShicm93c2VySGlzdG9yeSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGRlZmF1bHRTdGF0ZSwgY29tcG9zZShcclxuICBhcHBseU1pZGRsZXdhcmUodGh1bmssIHJvdXRpbmdNaWRkbGV3YXJlKSxcclxuICB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3N0b3Jlcy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFcnJvcjQwNCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImVycm9yLWhlYWRpbmdcIj40MDQgLSBNaXNzaW5nIFJlc291cmNlIDwvaDI+XHJcbiAgICAgICAgPHA+UGxlYXNlIHRyeSBhZ2FpbiwgYnV0IGlmIHRoZSBwcm9ibGVtIHBlcnNpc3QsIGNvbnRhY3QgYW4gYWRtaW5pc3RyYXRvci48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkVycm9yNDA0LmRpc3BsYXlOYW1lID0gJ0Vycm9yNDA0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yNDA0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2Vycm9yNDA0LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLmZldGNoUGFnZURhdGEoKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBhZ2UgY2xhc3NOYW1lPVwiaG9tZS1wYWdlXCIgaGVhZGVyPVwiSG9tZVwiPlxyXG4gICAgICAgIDxoMj57dGhpcy5wcm9wcy5tZXNzYWdlfTwvaDI+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lLmRpc3BsYXlOYW1lID0gJ0hvbWUnO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0IChzdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBtZXNzYWdlOiBzdGF0ZS5ob21lUGFnZS5tZXNzYWdlXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QpKEhvbWUpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2hvbWUuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIFBvcnRGb2xpb0N1c3RvbWl6ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb25zdGl0dWVudERhdGE6IHt9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLmZldGNoUG9ydGZvbGlvRGF0YSgpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICBpZiAobmV4dFByb3BzLm1vZGFsUG9ydGZvbGlvLmxlbmd0aCkge1xyXG4gICAgICBsZXQgbW9kYWxEYXRhID0gbmV4dFByb3BzLm1vZGFsUG9ydGZvbGlvWzBdLFxyXG4gICAgICAgICAgY29uc3RpdHVlbnREYXRhID0gbW9kYWxEYXRhLmNvbnN0aXR1ZW50cy5yZWR1Y2UoKHIsIGEpID0+IHtcclxuICAgICAgICAgICAgclthLmluc3RydW1lbnQudHlwZV0gPSByW2EuaW5zdHJ1bWVudC50eXBlXSB8fCBbXTtcclxuICAgICAgICAgICAgclthLmluc3RydW1lbnQudHlwZV0ucHVzaChhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLm1vZGFsRGF0YSxcclxuICAgICAgICBjb25zdGl0dWVudERhdGEgXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckdyaWRTdWJDb250ZW50IChjb250ZW50KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5zdHJ1bWVudC1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdmFsdWUgY2F0ZWdvcnlcIj48YSBocmVmPVwiXCI+e2NvbnRlbnQuaW5zdHJ1bWVudC5uYW1lfTwvYT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdmFsdWUgbGlua1wiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC12YWx1ZSB3ZWlnaHRcIj57Y29udGVudC53ZWlnaHR9JTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC12YWx1ZSB3ZWlnaHRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluY1wiPis8L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cIndlaWdodC1pbnB1dFwiIGRlZmF1bHRWYWx1ZT17Y29udGVudC53ZWlnaHR9PjwvaW5wdXQ+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlY1wiPi08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckdyaWRDb250ZW50ICgpIHtcclxuICAgIGNvbnN0IHsgY29uc3RpdHVlbnREYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGdyaWRDb250ZW50ID0gW10sXHJcbiAgICAgICAgd2VpZ2h0O1xyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiBjb25zdGl0dWVudERhdGEpIHtcclxuICAgICAgd2VpZ2h0ID0gY29uc3RpdHVlbnREYXRhW2tleV0ucmVkdWNlKChyLCBhKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHIgKyBhLndlaWdodDtcclxuICAgICAgfSwgMCk7XHJcbiAgICAgIGdyaWRDb250ZW50LnB1c2goXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdGl0dWVudC1ncm91cFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1iYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tdmFsdWUgY2F0ZWdvcnlcIj57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbi12YWx1ZSBsaW5rXCI+PGEgaHJlZj1cIlwiPiArQWRkIHtrZXl9PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbi12YWx1ZSB3ZWlnaHRcIj57d2VpZ2h0fSU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tdmFsdWUgd2VpZ2h0XCI+e3dlaWdodH0lPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtYWNjb3JkXCI+XHJcbiAgICAgICAgICAgIHtjb25zdGl0dWVudERhdGFba2V5XS5tYXAodGhpcy5yZW5kZXJHcmlkU3ViQ29udGVudCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBncmlkQ29udGVudDtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tY3VzdG9taXplLXNlY3Rpb25cIj5cclxuICAgICAgICA8UGFnZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9taXplLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3Atc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXJcIj5Qb3J0Zm9saW8gQ29uc3RpdHVlbnRzPC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucmVzZXRIYW5kbGVyfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgcmVzZXQtYnRuXCI+UmVzZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5yZWJhbGFuY2VIYW5kbGVyfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgcmViYWxhbmNlLWJ0blwiPlJlYmFsYW5jZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNhdmVIYW5kbGVyfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgc2F2ZS1idG5cIj5TYXZlIGFuZCBDb250aW51ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZ3JpZC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbi10aXRsZSBjYXRlZ29yeVwiPkNhdGVnb3J5L1N0b2NrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbi10aXRsZSBsaW5rXCI+Jm5ic3A7PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbi10aXRsZSB3ZWlnaHRcIj5Nb2RlbCBXZWlnaHQoJSk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uLXRpdGxlIHdlaWdodFwiPldlaWdodCgxMDAgJSk8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyR3JpZENvbnRlbnQoKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhZ2U+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Qb3J0Rm9saW9DdXN0b21pemUuZGlzcGxheU5hbWUgPSAnUG9ydEZvbGlvQ3VzdG9taXplJztcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdChzdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBtb2RhbFBvcnRmb2xpbzogc3RhdGUuY3VzdG9taXplUG9ydGZvbGlvLm1vZGFsUG9ydGZvbGlvXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QpKFBvcnRGb2xpb0N1c3RvbWl6ZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvcG9ydGZvbGlvQ3VzdG9taXplLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQb3J0Zm9saW9JdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvcG9ydGZvbGlvSXRlbSc7XHJcblxyXG5jbGFzcyBQb3J0Rm9saW9MaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuaXRlbUNsaWNrSGFuZGxlciA9IChpZCkgPT4gdGhpcy5faXRlbUNsaWNrSGFuZGxlcihpZCk7XHJcbiAgfVxyXG5cclxuICBfaXRlbUNsaWNrSGFuZGxlcihpZCkge1xyXG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9jdXN0b21pemUvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGdldExpc3RpbmdDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMubGlzdGluZ0NvbnRlbnQubWFwKChmb2xpb0RhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIDxQb3J0Zm9saW9JdGVtIGtleT17Zm9saW9EYXRhLmlkfSB7Li4uZm9saW9EYXRhfSBpdGVtQ2xpY2tIYW5kbGVyPXt0aGlzLml0ZW1DbGlja0hhbmRsZXJ9Lz47XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5mZXRjaExpc3RpbmdDb250ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1saXN0aW5nLXNlY3Rpb25cIj5cclxuICAgICAgPFBhZ2U+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbWFpbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIEhlcmUgYXJlIGEgZmV3IHJlY29tbWVuZGF0aW9ucyB0byBjaG9vc2UgZnJvbVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICBVc2UgdGhlIGZpbHRlcnMgdG8gZnVydGhlciB6b25lIGluIG9uZSBhIHBvcnRmb2xpbyBkZXBlbmRpbmcgb24geW91ciBwcmVmZXJlbmNlc1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1maWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5SaXNrIExldmVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5BbGw8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlJlZ2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+QWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Rpbmctc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRhYiBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpc3RpbmdDb250ZW50Lmxlbmd0aH0gUG9ydGZvbGlvIHJlY29tbWVuZGF0aW9ucyBiYXNlZCBvbiB5b3VyIHByZWZlcmVuY2VzXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10YWJcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXByZWZlcmVuY2UtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIHt0aGlzLmdldExpc3RpbmdDb250ZW50KCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1iYWNrLWJ0blwiPkJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Qb3J0Rm9saW9MaXN0aW5nLmRpc3BsYXlOYW1lID0gJ1BvcnRGb2xpb0xpc3RpbmcnO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0KHN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxpc3RpbmdDb250ZW50OiBzdGF0ZS5wb3J0Zm9saW9MaXN0aW5nLmxpc3RpbmdDb250ZW50XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QpKFBvcnRGb2xpb0xpc3RpbmcpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL3BvcnRmb2xpb0xpc3RpbmcuanMiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBfX1JvdXRlckNvbnRleHQsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCAqIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uIH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG5cbnZhciBCcm93c2VyUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEJyb3dzZXJSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KF90aGlzLnByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQnJvd3NlclJvdXRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEJyb3dzZXJSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQnJvd3NlclJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGZvcmNlUmVmcmVzaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAga2V5TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyB3aW5kb3cubG9jYXRpb24uaGFzaC5cbiAqL1xuXG52YXIgSGFzaFJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShIYXNoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEhhc2hSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhhc2hSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNoVHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImhhc2hiYW5nXCIsIFwibm9zbGFzaFwiLCBcInNsYXNoXCJdKVxuICB9O1xuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8SGFzaFJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cblxudmFyIExpbmsgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTGluay5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQsIGhpc3RvcnkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIC8vIG9uQ2xpY2sgcHJldmVudGVkIGRlZmF1bHRcbiAgICBldmVudC5idXR0b24gPT09IDAgJiYgKCAvLyBpZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAhdGhpcy5wcm9wcy50YXJnZXQgfHwgdGhpcy5wcm9wcy50YXJnZXQgPT09IFwiX3NlbGZcIikgJiYgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgbWV0aG9kID0gdGhpcy5wcm9wcy5yZXBsYWNlID8gaGlzdG9yeS5yZXBsYWNlIDogaGlzdG9yeS5wdXNoO1xuICAgICAgICBtZXRob2QodGhpcy5wcm9wcy50byk7XG4gICAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgcmVwbGFjZSA9IF90aGlzJHByb3BzLnJlcGxhY2UsXG4gICAgICAgIHRvID0gX3RoaXMkcHJvcHMudG8sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiaW5uZXJSZWZcIiwgXCJyZXBsYWNlXCIsIFwidG9cIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9fUm91dGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IGNyZWF0ZUxvY2F0aW9uKHRvLCBudWxsLCBudWxsLCBjb250ZXh0LmxvY2F0aW9uKSA6IHRvO1xuICAgICAgdmFyIGhyZWYgPSBsb2NhdGlvbiA/IGNvbnRleHQuaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKSA6IFwiXCI7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVDbGljayhldmVudCwgY29udGV4dC5oaXN0b3J5KTtcbiAgICAgICAgfSxcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgcmVmOiBpbm5lclJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBMaW5rO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciB0b1R5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSk7XG4gIHZhciBpbm5lclJlZlR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMuYW55XG4gIH0pXSk7XG4gIExpbmsucHJvcFR5cGVzID0ge1xuICAgIGlubmVyUmVmOiBpbm5lclJlZlR5cGUsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvOiB0b1R5cGUuaXNSZXF1aXJlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBqb2luQ2xhc3NuYW1lcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzbmFtZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgY2xhc3NuYW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc25hbWVzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KS5qb2luKFwiIFwiKTtcbn1cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cblxuXG5mdW5jdGlvbiBOYXZMaW5rKF9yZWYpIHtcbiAgdmFyIF9yZWYkYXJpYUN1cnJlbnQgPSBfcmVmW1wiYXJpYS1jdXJyZW50XCJdLFxuICAgICAgYXJpYUN1cnJlbnQgPSBfcmVmJGFyaWFDdXJyZW50ID09PSB2b2lkIDAgPyBcInBhZ2VcIiA6IF9yZWYkYXJpYUN1cnJlbnQsXG4gICAgICBfcmVmJGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3JlZiRhY3RpdmVDbGFzc05hbWUgPT09IHZvaWQgMCA/IFwiYWN0aXZlXCIgOiBfcmVmJGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZVN0eWxlID0gX3JlZi5hY3RpdmVTdHlsZSxcbiAgICAgIGNsYXNzTmFtZVByb3AgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGV4YWN0ID0gX3JlZi5leGFjdCxcbiAgICAgIGlzQWN0aXZlUHJvcCA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICBzdHJpY3QgPSBfcmVmLnN0cmljdCxcbiAgICAgIHN0eWxlUHJvcCA9IF9yZWYuc3R5bGUsXG4gICAgICB0byA9IF9yZWYudG8sXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYXJpYS1jdXJyZW50XCIsIFwiYWN0aXZlQ2xhc3NOYW1lXCIsIFwiYWN0aXZlU3R5bGVcIiwgXCJjbGFzc05hbWVcIiwgXCJleGFjdFwiLCBcImlzQWN0aXZlXCIsIFwibG9jYXRpb25cIiwgXCJzdHJpY3RcIiwgXCJzdHlsZVwiLCBcInRvXCJdKTtcblxuICB2YXIgcGF0aCA9IHR5cGVvZiB0byA9PT0gXCJvYmplY3RcIiA/IHRvLnBhdGhuYW1lIDogdG87IC8vIFJlZ2V4IHRha2VuIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9waWxsYXJqcy9wYXRoLXRvLXJlZ2V4cC9ibG9iL21hc3Rlci9pbmRleC5qcyNMMjAyXG5cbiAgdmFyIGVzY2FwZWRQYXRoID0gcGF0aCAmJiBwYXRoLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICBwYXRoOiBlc2NhcGVkUGF0aCxcbiAgICBleGFjdDogZXhhY3QsXG4gICAgc3RyaWN0OiBzdHJpY3QsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihfcmVmMikge1xuICAgICAgdmFyIGxvY2F0aW9uID0gX3JlZjIubG9jYXRpb24sXG4gICAgICAgICAgbWF0Y2ggPSBfcmVmMi5tYXRjaDtcbiAgICAgIHZhciBpc0FjdGl2ZSA9ICEhKGlzQWN0aXZlUHJvcCA/IGlzQWN0aXZlUHJvcChtYXRjaCwgbG9jYXRpb24pIDogbWF0Y2gpO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGlzQWN0aXZlID8gam9pbkNsYXNzbmFtZXMoY2xhc3NOYW1lUHJvcCwgYWN0aXZlQ2xhc3NOYW1lKSA6IGNsYXNzTmFtZVByb3A7XG4gICAgICB2YXIgc3R5bGUgPSBpc0FjdGl2ZSA/IF9leHRlbmRzKHt9LCBzdHlsZVByb3AsIGFjdGl2ZVN0eWxlKSA6IHN0eWxlUHJvcDtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIF9leHRlbmRzKHtcbiAgICAgICAgXCJhcmlhLWN1cnJlbnRcIjogaXNBY3RpdmUgJiYgYXJpYUN1cnJlbnQgfHwgbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgdG86IHRvXG4gICAgICB9LCByZXN0KSk7XG4gICAgfVxuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgYXJpYUN1cnJlbnRUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcInBhZ2VcIiwgXCJzdGVwXCIsIFwibG9jYXRpb25cIiwgXCJkYXRlXCIsIFwidGltZVwiLCBcInRydWVcIl0pO1xuICBOYXZMaW5rLnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBMaW5rLnByb3BUeXBlcywge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50VHlwZSxcbiAgICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4YWN0OiBSb3V0ZS5wcm9wVHlwZXMuZXhhY3QsXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0cmljdDogUm91dGUucHJvcFR5cGVzLnN0cmljdCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9KTtcbn1cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluayB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJvdXRlci1kb20vZXNtL3JlYWN0LXJvdXRlci1kb20uanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGFjdGlvbkV2ZW50cyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZVJlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRfUEFHRURBVEEpIHtcclxuICAgIG5ld1N0YXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3J0Zm9saW9MaXN0aW5nUmVkdWNlciAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlNFVF9MSVNUSU5HX0RBVEEpIHtcclxuICAgIG5ld1N0YXRlLmxpc3RpbmdDb250ZW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21pemVQb3J0Zm9saW9SZWR1Y2VyIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgbGV0IGFjdGlvblR5cGUgPSBhY3Rpb24udHlwZSxcclxuICAgICAgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcblxyXG4gIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuU0VUX1BPUlRGT0xJT19EQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5tb2RhbFBvcnRmb2xpbyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwU3RhdGUgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5MT0NBVElPTl9DSEFOR0UpIHtcclxuICAgIG5ld1N0YXRlLmN1cnJlbnQucGF0aCA9IGFjdGlvbi5wYXlsb2FkLnBhdGhuYW1lO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGF0YVJlcXVlc3RzIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgbGV0IGFjdGlvblR5cGUgPSBhY3Rpb24udHlwZSxcclxuICAgICAgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcblxyXG4gIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuU0VUVElOR19QQUdFREFUQSkge1xyXG4gICAgbmV3U3RhdGUuc2V0dGluZ3MgPSB0cnVlO1xyXG4gIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlNFVF9QQUdFREFUQSkge1xyXG4gICAgbmV3U3RhdGUuc2V0dGluZ3MgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3JlZHVjZXJzL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IHN0YXRlID0ge1xyXG4gIGFwcDoge1xyXG4gICAgY3VycmVudDoge1xyXG4gICAgICBwYXRoOiAnJyxcclxuICAgICAgcGFnZVRpdGxlOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaG9tZVBhZ2U6IHtcclxuICAgIG1lc3NhZ2U6IFwiVGVtcGxhdGUgTWVzc2FnZVwiXHJcbiAgfSxcclxuICBwb3J0Zm9saW9MaXN0aW5nOiB7XHJcbiAgICBsaXN0aW5nQ29udGVudDogW11cclxuICB9LFxyXG4gIGN1c3RvbWl6ZVBvcnRmb2xpbzoge1xyXG4gICAgbW9kYWxQb3J0Zm9saW86IFtdXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvc3RvcmVzL2RlZmF1bHRTdGF0ZS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQb3J0Rm9saW9JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZWxpZ2liaWxpdHlNYXBwaW5nID0ge1xyXG4gICAgICBhdmFpbGFibGU6ICdBdmFpbGFibGUgZm9yIGFsbCBpbnZlc3RvcnMnLFxyXG4gICAgICByZXN0cmljdGVkOiAnUmVzdHJpY3RlZCB0byBBY2NyZWRpdGVkIGludmVzdG9ycyAnXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSAoKSA9PiB0aGlzLml0ZW1DbGlja0hhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIGl0ZW1DbGlja0hhbmRsZXIgKCkge1xyXG4gICAgdGhpcy5wcm9wcy5pdGVtQ2xpY2tIYW5kbGVyKHRoaXMucHJvcHMuaWQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1oZWFkXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuaW1hZ2VVcmx9IGNsYXNzTmFtZT1cImZvbGlvLWl0ZW0taW1hZ2VcIj5cclxuICAgICAgICA8L2ltZz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbGlvLWl0ZW0tdGl0bGVcIj48c3Bhbj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tYm9keVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1yZWNvcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLWxhYmVsXCI+Vm9sYXRhbGl0eTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtdmFsdWVcIj57dGhpcy5wcm9wcy52b2xhdGFsaXR5fSU8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tcmVjb3JkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC1sYWJlbFwiPjEgTW9udGggUmV0dXJuPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC12YWx1ZVwiPnt0aGlzLnByb3BzLm1vbnRoUmV0dXJufSU8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tcmVjb3JkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC1sYWJlbFwiPk1lYW4gUmV0dXJuPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC12YWx1ZVwiPnt0aGlzLnByb3BzLm1lYW5SZXR1cm59JTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1yZWNvcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLWxhYmVsXCI+TWluaW11bSBJbnZlc3RtZW50PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC12YWx1ZVwiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e3RoaXMucHJvcHMuY3VycmVuY3l9PC9zcGFuPnt0aGlzLnByb3BzLm1pbkludmVzdG1lbnR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXJlY29yZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtbGFiZWxcIj5FbGlnaWJpbGl0eTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtdmFsdWVcIj57dGhpcy5lbGlnaWJpbGl0eU1hcHBpbmdbdGhpcy5wcm9wcy5lbGlnaWJpbGl0eV19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tYWN0aW9uXCIgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9PkV4cGxvcmUgSW52ZXN0bWVudCBJZGVhPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Qb3J0Rm9saW9JdGVtLmRpc3BsYXlOYW1lID0gJ1BvcnRGb2xpb0l0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydEZvbGlvSXRlbTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC92aWV3cy9jb21wb25lbnRzL3BvcnRmb2xpb0l0ZW0uanMiLCIvKiBnbG9iYWwgbG9jYXRpb24gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3Jlcy9pbmRleCc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBzeW5jSGlzdG9yeVdpdGhTdG9yZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvaG9tZSc7XHJcbmltcG9ydCBFcnJvcjQwNCBmcm9tICcuL3BhZ2VzL2Vycm9yNDA0JztcclxuaW1wb3J0IFBvcnRmb2xpb0N1c3RvbWl6ZSBmcm9tICcuL3BhZ2VzL3BvcnRmb2xpb0N1c3RvbWl6ZSc7XHJcbmltcG9ydCBQb3J0Zm9saW9MaXN0aW5nIGZyb20gJy4vcGFnZXMvcG9ydGZvbGlvTGlzdGluZyc7XHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5jb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSwgc3RvcmUpO1xyXG5jb25zb2xlLmxvZyhoaXN0b3J5KTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxyXG4gICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17UG9ydGZvbGlvQ3VzdG9taXplfSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2N1c3RvbWl6ZS86aWRcIiBjb21wb25lbnQ9e1BvcnRmb2xpb0xpc3Rpbmd9IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvNDA0XCIgY29tcG9uZW50PXtFcnJvcjQwNH0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgbm9tYXRjaCBjb21wb25lbnQ9e0Vycm9yNDA0fSAvPlxyXG4gICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgIDwvUm91dGVyPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkFwcC5kaXNwbGF5TmFtZSA9ICdBcHAnO1xyXG5cclxuLy8gQm9vdHN0cmFwIGNsaWVudFxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgdmFyIHByb3BzID0ge1xyXG4gICAgICBwYXRoOiBsb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgfTtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgcHJvcHMpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3RWaWV3JykpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC92aWV3cy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHsgaWQ6IDEsXHJcbiAgICAgIG5hbWU6ICdIT05HS09ORyBURUNITk9MT0dZJyxcclxuICAgICAgdm9sYXRpbGl0eTogJzI2LjglJyxcclxuICAgICAgbWVhbl9yZXR1cm46ICcyLjk2JScsXHJcbiAgICAgIGN1cnJlbmN5OiAnU0dEJyxcclxuICAgICAgY29uc3RpdHVlbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgd2VpZ2h0OiAzLFxyXG4gICAgICAgICAgaW5zdHJ1bWVudDoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmFtZTogJ0NTWCBjb3JwJyxcclxuICAgICAgICAgICAgdHlwZTogJ0VxdWl0eSdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdlaWdodDogMTcsXHJcbiAgICAgICAgICBpbnN0cnVtZW50OiB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBuYW1lOiAnY3VtbWlucyBJbmMnLFxyXG4gICAgICAgICAgICB0eXBlOiAnRXF1aXR5J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgd2VpZ2h0OiAxMCxcclxuICAgICAgICAgIGluc3RydW1lbnQ6IHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIG5hbWU6ICdFYXRvbiBDb3JwIFBMQycsXHJcbiAgICAgICAgICAgIHR5cGU6ICdFcXVpdHknXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IDEwLFxyXG4gICAgICAgICAgaW5zdHJ1bWVudDoge1xyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgbmFtZTogJ0ZlZHggY29ycCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdFcXVpdHknXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IDEwLFxyXG4gICAgICAgICAgaW5zdHJ1bWVudDoge1xyXG4gICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgbmFtZTogJ0hhcmlzIGNvcnAnLFxyXG4gICAgICAgICAgICB0eXBlOiAnRXF1aXR5J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgd2VpZ2h0OiAxMCxcclxuICAgICAgICAgIGluc3RydW1lbnQ6IHtcclxuICAgICAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgICAgIG5hbWU6ICdOb3Jmb2xrIFNvdXRoZXJuIENvcnAnLFxyXG4gICAgICAgICAgICB0eXBlOiAnQm9uZCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdlaWdodDogNSxcclxuICAgICAgICAgIGluc3RydW1lbnQ6IHtcclxuICAgICAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHZW5lcmFsIER5bmFtaWNzJyxcclxuICAgICAgICAgICAgdHlwZTogJ0JvbmQnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IDE1LFxyXG4gICAgICAgICAgaW5zdHJ1bWVudDoge1xyXG4gICAgICAgICAgICBpZDogOCxcclxuICAgICAgICAgICAgbmFtZTogJ2hhbCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdCb25kJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgd2VpZ2h0OiAyMCxcclxuICAgICAgICAgIGluc3RydW1lbnQ6IHtcclxuICAgICAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgICAgICBuYW1lOiAnVVNEIENBU0gnLFxyXG4gICAgICAgICAgICB0eXBlOiAnQ0FTSCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuXVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9tb2NrZGF0YS9jdXN0b21pemUuanMiLCJsZXQgbGlzdENvbnRlbnQgPSBbXTtcclxuXHJcbmZvciAobGV0IGkgPSAxOyBpIDw9IDE0OyBpKyspIHtcclxuICBsaXN0Q29udGVudC5wdXNoKHtcclxuICAgIGlkOiBpLFxyXG4gICAgdGl0bGU6ICdIb25nIEtvbmcgVGVjaG5vbG9neScsXHJcbiAgICBpbWFnZVVybDogJ2J1aWxkL2ltYWdlcy9IS1NQbmlnaHR2aWV3MnBhbm9yYW1hLmpwZycsXHJcbiAgICB2b2xhdGFsaXR5OiAnMjYuODQnLFxyXG4gICAgbW9udGhSZXR1cm46ICcyLjk2JyxcclxuICAgIG1lYW5SZXR1cm46ICczNy4yOScsXHJcbiAgICBtaW5JbnZlc3RtZW50OiAnMTcwMDAwJyxcclxuICAgIGN1cnJlbmN5OiAnSEtEJyxcclxuICAgIGVsaWdpYmlsaXR5OiAnYXZhaWxhYmxlJ1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXN0Q29udGVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvbW9ja2RhdGEvbGlzdGluZy5qcyIsIi8qKiBUaGlzIHByb3ZpZGVzIHRoZSB2YXJpb3VzIHJlZHV4IGFjdGlvbnMgdG8gdHJpZ2dlciBhcHAgc3RhdGUgY2hhbmdlcyBieSB0aGUgcmVkdXggcmVkdWNlclxyXG4gKiBAbW9kdWxlIFJlZHV4IGFjdGlvbnNcclxuICovXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgbGlzdGluZ01vY2tEYXRhIGZyb20gJy4uLy4uL21vY2tkYXRhL2xpc3RpbmcnO1xyXG5pbXBvcnQgcG9ydGZvbGlvTW9kYWxEYXRhIGZyb20gJy4uLy4uL21vY2tkYXRhL2N1c3RvbWl6ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgRkVUQ0hJTkdfUEFHRURBVEEgPSAnRkVUQ0hJTkdfUEFHRURBVEEnO1xyXG5leHBvcnQgY29uc3QgU0VUX1BBR0VEQVRBID0gJ1NFVF9QQUdFREFUQSc7XHJcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9DSEFOR0UgPSAnQEByb3V0ZXIvTE9DQVRJT05fQ0hBTkdFJztcclxuZXhwb3J0IGNvbnN0IFNFVF9MSVNUSU5HX0RBVEEgPSAnU0VUX0xJU1RJTkdfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUE9SVEZPTElPX0RBVEEgPSAnU0VUX1BPUlRGT0xJT19EQVRBJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaGluZ1BhZ2VEYXRhICgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogRkVUQ0hJTkdfUEFHRURBVEFcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGFnZURhdGEgKGRhdGEpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0VUX1BBR0VEQVRBLFxyXG4gICAgcGF5bG9hZDogZGF0YVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMaXN0aW5nRGF0YSAoZGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTRVRfTElTVElOR19EQVRBLFxyXG4gICAgcGF5bG9hZDogZGF0YVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQb3J0Zm9saW9EYXRhIChkYXRhKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNFVF9QT1JURk9MSU9fREFUQSxcclxuICAgIHBheWxvYWQ6IGRhdGFcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQYWdlRGF0YSAoKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hpbmdQYWdlRGF0YSgpKTtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy9hcGkvZ2V0LXBhZ2UtZGV0YWlscycpXHJcbiAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgZGlzcGF0Y2goc2V0UGFnZURhdGEocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTGlzdGluZ0NvbnRlbnQgKCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKHNldExpc3RpbmdEYXRhKGxpc3RpbmdNb2NrRGF0YSkpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvcnRmb2xpb0RhdGEgKCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKHNldFBvcnRmb2xpb0RhdGEocG9ydGZvbGlvTW9kYWxEYXRhKSk7XHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9