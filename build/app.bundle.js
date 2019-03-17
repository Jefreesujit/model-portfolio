webpackJsonp([0],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConstituentItem = function (_React$Component) {
  _inherits(ConstituentItem, _React$Component);

  function ConstituentItem() {
    _classCallCheck(this, ConstituentItem);

    var _this = _possibleConstructorReturn(this, (ConstituentItem.__proto__ || Object.getPrototypeOf(ConstituentItem)).call(this));

    _this.onChangeHandler = function (event) {
      return _this.itemChangeHandler(parseInt(event.target.value));
    };
    _this.increaseHandler = function () {
      return _this.itemChangeHandler(_this.props.weight + 1);
    };
    _this.decreaseHandler = function () {
      return _this.itemChangeHandler(_this.props.weight - 1);
    };
    _this.deleteHandler = function () {
      return _this._deleteHandler();
    };
    return _this;
  }

  _createClass(ConstituentItem, [{
    key: 'itemChangeHandler',
    value: function itemChangeHandler(value) {
      if (value > 0) {
        var _props$instrument = this.props.instrument,
            type = _props$instrument.type,
            id = _props$instrument.id;

        this.props.dispatch(actions.updateItemWeight({ type: type, id: id, value: value }));
      }
    }
  }, {
    key: '_deleteHandler',
    value: function _deleteHandler() {
      if (this.props.allowDelete) {
        var _props$instrument2 = this.props.instrument,
            type = _props$instrument2.type,
            id = _props$instrument2.id;

        this.props.dispatch(actions.deleteConstituentItem({ type: type, id: id }));
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.inputValue;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'instrument-row' },
        _react2.default.createElement(
          'span',
          { className: 'icon glyphicon glyphicon-trash', onClick: this.deleteHandler },
          'D'
        ),
        _react2.default.createElement(
          'div',
          { className: 'content-value category' },
          _react2.default.createElement(
            'a',
            { href: '' },
            this.props.instrument.name
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
          this.props.weight,
          '%'
        ),
        _react2.default.createElement(
          'div',
          { className: 'content-value weight' },
          _react2.default.createElement(
            'span',
            { onClick: this.decreaseHandler, 'class': 'icon dec' },
            '-'
          ),
          _react2.default.createElement('input', { type: 'number', className: 'weight-input', onChange: this.onChangeHandler, value: this.props.weight }),
          _react2.default.createElement(
            'span',
            { onClick: this.increaseHandler, className: 'icon inc' },
            '+'
          )
        )
      );
    }
  }]);

  return ConstituentItem;
}(_react2.default.Component);

ConstituentItem.displayName = 'ConstituentItem';

exports.default = (0, _reactRedux.connect)()(ConstituentItem);

/***/ }),

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
  customizePortfolio: (0, _redux.combineReducers)({
    modalPortfolio: reducers.customizePortfolioReducer,
    constituentData: reducers.constituentDataReducer
  })
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

var _constituentItem = __webpack_require__(126);

var _constituentItem2 = _interopRequireDefault(_constituentItem);

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

    _this.refsList = {};

    _this.resetHandler = function () {
      return _this._resetHandler();
    };
    _this.rebalanceHandler = function () {
      return _this._rebalanceHandler();
    };
    return _this;
  }

  _createClass(PortFolioCustomize, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch(actions.fetchPortfolioData());
    }
  }, {
    key: '_resetHandler',
    value: function _resetHandler() {
      this.props.dispatch(actions.resetPortfolioData());
    }
  }, {
    key: '_rebalanceHandler',
    value: function _rebalanceHandler() {
      this.props.dispatch(actions.rebalanceConstituents());
    }
  }, {
    key: 'renderGridContent',
    value: function renderGridContent() {
      var constituentData = this.state.constituentData;

      var gridContent = [],
          weight = void 0;

      var _loop = function _loop(key) {
        weight = constituentData[key].weight;

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
              weight.toFixed(1),
              '%'
            ),
            _react2.default.createElement(
              'div',
              { className: 'column-value weight' },
              weight.toFixed(1),
              '%'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'group-accord' },
            constituentData[key].list.map(function (content) {
              return _react2.default.createElement(_constituentItem2.default, _extends({ key: content.instrument.id, type: key }, content, {
                allowDelete: constituentData[key].list.length > 1 }));
            })
          )
        ));
      };

      for (var key in constituentData) {
        _loop(key);
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
      return {
        modalData: nextProps.modalPortfolio,
        constituentData: nextProps.constituentData
      };
    }
  }]);

  return PortFolioCustomize;
}(_react2.default.Component);

PortFolioCustomize.displayName = 'PortFolioCustomize';

function select(state) {
  return {
    modalPortfolio: state.customizePortfolio.modalPortfolio,
    constituentData: state.customizePortfolio.constituentData
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.homePageReducer = homePageReducer;
exports.portfolioListingReducer = portfolioListingReducer;
exports.customizePortfolioReducer = customizePortfolioReducer;
exports.constituentDataReducer = constituentDataReducer;
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
    newState = action.payload;
  }

  return newState;
}

function setWeightList(constituentData) {
  var weightList = {};
  Object.keys(constituentData).map(function (key) {
    constituentData[key].weight = constituentData[key].list.reduce(function (r, a) {
      return r + a.weight;
    }, 0);
  });

  return weightList;
}

function constituentDataReducer(state, action) {
  var actionType = action.type,
      totalWeight = void 0,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_PORTFOLIO_DATA || actionType === actionEvents.RESET_PORTFOLIO_DATA) {
    newState = action.payload.constituents.reduce(function (r, a) {
      r[a.instrument.type] = r[a.instrument.type] || {};
      r[a.instrument.type].list = r[a.instrument.type].list || [];
      r[a.instrument.type].list.push(_extends({}, a));
      return r;
    }, Object.create(null));

    setWeightList(newState);
  } else if (actionType === actionEvents.UPDATE_ITEM_WEIGHT) {
    var _action$payload = action.payload,
        type = _action$payload.type,
        id = _action$payload.id,
        value = _action$payload.value;

    newState[type].list.find(function (item) {
      return item.instrument.id === id;
    }).weight = value;
  } else if (actionType === actionEvents.DELETE_CONSTITUENT_ITEM) {
    var _action$payload2 = action.payload,
        _type = _action$payload2.type,
        _id = _action$payload2.id,
        _value = _action$payload2.value;

    var deletedWeight = void 0;
    newState[_type].list.some(function (item, index, list) {
      if (item.instrument.id === _id) {
        deletedWeight = item.weight;
        list.splice(index, 1);
        return true;
      }
    });
  } else if (actionType === actionEvents.REBALANCE_CONSTITUENTS) {
    Object.keys(newState).map(function (type) {
      var totalWeight = newState[type].list.reduce(function (r, a) {
        return r + a.weight;
      }, 0),
          weightDiff;
      if (totalWeight < newState[type].weight) {
        weightDiff = newState[type].weight - totalWeight;
        newState[type].list.forEach(function (item) {
          item.weight += parseFloat((item.weight * weightDiff / totalWeight).toFixed(1));
        });
      } else {
        // not sure of the usecase here, going with the assumption
        weightDiff = totalWeight - newState[type].weight;
        newState[type].list.forEach(function (item) {
          item.weight -= parseFloat((item.weight * weightDiff / totalWeight).toFixed(1));
        });
      }
    });
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
    modalPortfolio: {},
    constituentData: {}
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
exports.DELETE_CONSTITUENT_ITEM = exports.REBALANCE_CONSTITUENTS = exports.RESET_PORTFOLIO_DATA = exports.UPDATE_ITEM_WEIGHT = exports.SET_PORTFOLIO_DATA = exports.SET_LISTING_DATA = exports.LOCATION_CHANGE = undefined;
exports.fetchListingContent = fetchListingContent;
exports.fetchPortfolioData = fetchPortfolioData;
exports.resetPortfolioData = resetPortfolioData;
exports.updateItemWeight = updateItemWeight;
exports.deleteConstituentItem = deleteConstituentItem;
exports.rebalanceConstituents = rebalanceConstituents;

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

var _listing = __webpack_require__(70);

var _listing2 = _interopRequireDefault(_listing);

var _customize = __webpack_require__(69);

var _customize2 = _interopRequireDefault(_customize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE'; /** This provides the various redux actions to trigger app state changes by the redux reducer
                                                                             * @module Redux actions
                                                                             */

var SET_LISTING_DATA = exports.SET_LISTING_DATA = 'SET_LISTING_DATA';
var SET_PORTFOLIO_DATA = exports.SET_PORTFOLIO_DATA = 'SET_PORTFOLIO_DATA';
var UPDATE_ITEM_WEIGHT = exports.UPDATE_ITEM_WEIGHT = 'UPDATE_ITEM_WEIGHT';
var RESET_PORTFOLIO_DATA = exports.RESET_PORTFOLIO_DATA = 'RESET_PORTFOLIO_DATA';
var REBALANCE_CONSTITUENTS = exports.REBALANCE_CONSTITUENTS = 'REBALANCE_CONSTITUENTS';
var DELETE_CONSTITUENT_ITEM = exports.DELETE_CONSTITUENT_ITEM = 'DELETE_CONSTITUENT_ITEM';

function fetchListingContent() {
  return function (dispatch) {
    dispatch({
      type: SET_LISTING_DATA,
      payload: _listing2.default
    });
  };
}

function fetchPortfolioData() {
  return function (dispatch) {
    dispatch({
      type: SET_PORTFOLIO_DATA,
      payload: _customize2.default[0]
    });
  };
}

function resetPortfolioData() {
  return function (dispatch, getState) {
    var _getState = getState(),
        customizePortfolio = _getState.customizePortfolio;

    dispatch({
      type: RESET_PORTFOLIO_DATA,
      payload: customizePortfolio.modalPortfolio
    });
  };
}

function updateItemWeight(data) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_ITEM_WEIGHT,
      payload: data
    });
  };
}

function deleteConstituentItem(data) {
  return function (dispatch) {
    dispatch({
      type: DELETE_CONSTITUENT_ITEM,
      payload: data
    });
  };
}

function rebalanceConstituents(data) {
  return function (dispatch) {
    dispatch({
      type: REBALANCE_CONSTITUENTS,
      payload: data
    });
  };
}

/***/ })

},[68]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL2NvbXBvbmVudHMvY29uc3RpdHVlbnRJdGVtLmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9lcnJvcjQwNC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9DdXN0b21pemUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9MaXN0aW5nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyLWRvbS9lc20vcmVhY3Qtcm91dGVyLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvc3RvcmVzL2RlZmF1bHRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL2NvbXBvbmVudHMvcG9ydGZvbGlvSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9tb2NrZGF0YS9jdXN0b21pemUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21vY2tkYXRhL2xpc3RpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJDb25zdGl0dWVudEl0ZW0iLCJvbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsIml0ZW1DaGFuZ2VIYW5kbGVyIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImluY3JlYXNlSGFuZGxlciIsInByb3BzIiwid2VpZ2h0IiwiZGVjcmVhc2VIYW5kbGVyIiwiZGVsZXRlSGFuZGxlciIsIl9kZWxldGVIYW5kbGVyIiwiaW5zdHJ1bWVudCIsInR5cGUiLCJpZCIsImRpc3BhdGNoIiwidXBkYXRlSXRlbVdlaWdodCIsImFsbG93RGVsZXRlIiwiZGVsZXRlQ29uc3RpdHVlbnRJdGVtIiwic3RhdGUiLCJpbnB1dFZhbHVlIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJQYWdlIiwiY2hpbGRyZW4iLCJyZWR1Y2VycyIsInJlZHVjZXIiLCJhcHAiLCJhcHBTdGF0ZSIsImRhdGFSZXF1ZXN0cyIsInJvdXRpbmciLCJyb3V0ZXJSZWR1Y2VyIiwiaG9tZVBhZ2UiLCJob21lUGFnZVJlZHVjZXIiLCJwb3J0Zm9saW9MaXN0aW5nIiwicG9ydGZvbGlvTGlzdGluZ1JlZHVjZXIiLCJjdXN0b21pemVQb3J0Zm9saW8iLCJtb2RhbFBvcnRmb2xpbyIsImN1c3RvbWl6ZVBvcnRmb2xpb1JlZHVjZXIiLCJjb25zdGl0dWVudERhdGEiLCJjb25zdGl0dWVudERhdGFSZWR1Y2VyIiwicm91dGluZ01pZGRsZXdhcmUiLCJicm93c2VySGlzdG9yeSIsInN0b3JlIiwiZGVmYXVsdFN0YXRlIiwidGh1bmsiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJFcnJvcjQwNCIsIkhvbWUiLCJmZXRjaFBhZ2VEYXRhIiwibWVzc2FnZSIsInNlbGVjdCIsIlBvcnRGb2xpb0N1c3RvbWl6ZSIsInJlZnNMaXN0IiwicmVzZXRIYW5kbGVyIiwiX3Jlc2V0SGFuZGxlciIsInJlYmFsYW5jZUhhbmRsZXIiLCJfcmViYWxhbmNlSGFuZGxlciIsImZldGNoUG9ydGZvbGlvRGF0YSIsInJlc2V0UG9ydGZvbGlvRGF0YSIsInJlYmFsYW5jZUNvbnN0aXR1ZW50cyIsImdyaWRDb250ZW50Iiwia2V5IiwicHVzaCIsInRvRml4ZWQiLCJsaXN0IiwibWFwIiwiY29udGVudCIsImxlbmd0aCIsInNhdmVIYW5kbGVyIiwicmVuZGVyR3JpZENvbnRlbnQiLCJuZXh0UHJvcHMiLCJwcmV2U3RhdGUiLCJtb2RhbERhdGEiLCJQb3J0Rm9saW9MaXN0aW5nIiwiaXRlbUNsaWNrSGFuZGxlciIsIl9pdGVtQ2xpY2tIYW5kbGVyIiwiaGlzdG9yeSIsImxpc3RpbmdDb250ZW50IiwiZm9saW9EYXRhIiwiZmV0Y2hMaXN0aW5nQ29udGVudCIsImdldExpc3RpbmdDb250ZW50IiwiYWN0aW9uRXZlbnRzIiwiYWN0aW9uIiwiYWN0aW9uVHlwZSIsIm5ld1N0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiU0VUX1BBR0VEQVRBIiwicGF5bG9hZCIsIlNFVF9MSVNUSU5HX0RBVEEiLCJTRVRfUE9SVEZPTElPX0RBVEEiLCJzZXRXZWlnaHRMaXN0Iiwid2VpZ2h0TGlzdCIsImtleXMiLCJyZWR1Y2UiLCJyIiwiYSIsInRvdGFsV2VpZ2h0IiwiUkVTRVRfUE9SVEZPTElPX0RBVEEiLCJjb25zdGl0dWVudHMiLCJjcmVhdGUiLCJVUERBVEVfSVRFTV9XRUlHSFQiLCJmaW5kIiwiaXRlbSIsIkRFTEVURV9DT05TVElUVUVOVF9JVEVNIiwiZGVsZXRlZFdlaWdodCIsInNvbWUiLCJpbmRleCIsInNwbGljZSIsIlJFQkFMQU5DRV9DT05TVElUVUVOVFMiLCJ3ZWlnaHREaWZmIiwiZm9yRWFjaCIsInBhcnNlRmxvYXQiLCJMT0NBVElPTl9DSEFOR0UiLCJjdXJyZW50IiwicGF0aCIsInBhdGhuYW1lIiwiU0VUVElOR19QQUdFREFUQSIsInNldHRpbmdzIiwicGFnZVRpdGxlIiwiUG9ydEZvbGlvSXRlbSIsImVsaWdpYmlsaXR5TWFwcGluZyIsImF2YWlsYWJsZSIsInJlc3RyaWN0ZWQiLCJjbGlja0hhbmRsZXIiLCJpbWFnZVVybCIsInRpdGxlIiwidm9sYXRhbGl0eSIsIm1vbnRoUmV0dXJuIiwibWVhblJldHVybiIsImN1cnJlbmN5IiwibWluSW52ZXN0bWVudCIsImVsaWdpYmlsaXR5IiwiY29uc29sZSIsImxvZyIsIkFwcCIsIlBvcnRmb2xpb0xpc3RpbmciLCJQb3J0Zm9saW9DdXN0b21pemUiLCJvbmxvYWQiLCJsb2NhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2b2xhdGlsaXR5IiwibWVhbl9yZXR1cm4iLCJsaXN0Q29udGVudCIsImkiLCJsaXN0aW5nTW9ja0RhdGEiLCJwb3J0Zm9saW9Nb2RhbERhdGEiLCJnZXRTdGF0ZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFhOzs7Ozs7OztBQUViOzs7O0FBQ0E7O0lBQVlBLE87O0FBQ1o7Ozs7Ozs7Ozs7OztJQUVNQyxlOzs7QUFDSiw2QkFBZTtBQUFBOztBQUFBOztBQUdmLFVBQUtDLGVBQUwsR0FBdUIsVUFBQ0MsS0FBRDtBQUFBLGFBQVcsTUFBS0MsaUJBQUwsQ0FBdUJDLFNBQVNGLE1BQU1HLE1BQU4sQ0FBYUMsS0FBdEIsQ0FBdkIsQ0FBWDtBQUFBLEtBQXZCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QjtBQUFBLGFBQU0sTUFBS0osaUJBQUwsQ0FBdUIsTUFBS0ssS0FBTCxDQUFXQyxNQUFYLEdBQW9CLENBQTNDLENBQU47QUFBQSxLQUF2QjtBQUNBLFVBQUtDLGVBQUwsR0FBdUI7QUFBQSxhQUFNLE1BQUtQLGlCQUFMLENBQXVCLE1BQUtLLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixDQUEzQyxDQUFOO0FBQUEsS0FBdkI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCO0FBQUEsYUFBTSxNQUFLQyxjQUFMLEVBQU47QUFBQSxLQUFyQjtBQU5lO0FBT2Q7Ozs7c0NBRWtCTixLLEVBQU87QUFDeEIsVUFBSUEsUUFBUSxDQUFaLEVBQWU7QUFBQSxnQ0FDTSxLQUFLRSxLQUFMLENBQVdLLFVBRGpCO0FBQUEsWUFDTkMsSUFETSxxQkFDTkEsSUFETTtBQUFBLFlBQ0FDLEVBREEscUJBQ0FBLEVBREE7O0FBRWIsYUFBS1AsS0FBTCxDQUFXUSxRQUFYLENBQW9CakIsUUFBUWtCLGdCQUFSLENBQXlCLEVBQUNILFVBQUQsRUFBT0MsTUFBUCxFQUFXVCxZQUFYLEVBQXpCLENBQXBCO0FBQ0Q7QUFDRjs7O3FDQUVpQjtBQUNoQixVQUFJLEtBQUtFLEtBQUwsQ0FBV1UsV0FBZixFQUE0QjtBQUFBLGlDQUNQLEtBQUtWLEtBQUwsQ0FBV0ssVUFESjtBQUFBLFlBQ25CQyxJQURtQixzQkFDbkJBLElBRG1CO0FBQUEsWUFDYkMsRUFEYSxzQkFDYkEsRUFEYTs7QUFFMUIsYUFBS1AsS0FBTCxDQUFXUSxRQUFYLENBQW9CakIsUUFBUW9CLHFCQUFSLENBQThCLEVBQUNMLFVBQUQsRUFBT0MsTUFBUCxFQUE5QixDQUFwQjtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0ssS0FBTCxDQUFXQyxVQUFsQjtBQUNEOzs7NkJBRVM7QUFDVixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLGdDQUFoQixFQUFpRCxTQUFTLEtBQUtWLGFBQS9EO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUF3QztBQUFBO0FBQUEsY0FBRyxNQUFLLEVBQVI7QUFBWSxpQkFBS0gsS0FBTCxDQUFXSyxVQUFYLENBQXNCUztBQUFsQztBQUF4QyxTQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUFBO0FBQUEsU0FIRjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFBdUMsZUFBS2QsS0FBTCxDQUFXQyxNQUFsRDtBQUFBO0FBQUEsU0FKRjtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFDQTtBQUFBO0FBQUEsY0FBTSxTQUFTLEtBQUtDLGVBQXBCLEVBQXFDLFNBQU0sVUFBM0M7QUFBQTtBQUFBLFdBREE7QUFFQSxtREFBTyxNQUFLLFFBQVosRUFBcUIsV0FBVSxjQUEvQixFQUE4QyxVQUFVLEtBQUtULGVBQTdELEVBQThFLE9BQU8sS0FBS08sS0FBTCxDQUFXQyxNQUFoRyxHQUZBO0FBR0E7QUFBQTtBQUFBLGNBQU0sU0FBUyxLQUFLRixlQUFwQixFQUFxQyxXQUFVLFVBQS9DO0FBQUE7QUFBQTtBQUhBO0FBTEYsT0FERjtBQWFDOzs7O0VBMUMyQmdCLGdCQUFNQyxTOztBQTZDcEN4QixnQkFBZ0J5QixXQUFoQixHQUE4QixpQkFBOUI7O2tCQUVlLDJCQUFVekIsZUFBVixDOzs7Ozs7OztBQ3JERjs7Ozs7Ozs7QUFFYjs7Ozs7Ozs7Ozs7O0lBRU0wQixJOzs7QUFDSixrQkFBZTtBQUFBOztBQUFBO0FBRWQ7Ozs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFNBQU0sY0FBWDtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUsYUFBbEI7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFDRSxtREFBSyxXQUFVLFVBQWYsRUFBMEIsS0FBSSx3QkFBOUI7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUpGLFNBREY7QUFTRTtBQUFBO0FBQUEsWUFBTSxJQUFHLE1BQVQ7QUFDRTtBQUFBO0FBQUEsY0FBSyxJQUFHLFdBQVIsRUFBb0IsV0FBVSxnQkFBOUI7QUFDRyxpQkFBS2xCLEtBQUwsQ0FBV21CO0FBRGQ7QUFERixTQVRGO0FBY0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxRQUFmO0FBQUE7QUFDbUI7QUFBQTtBQUFBLGdCQUFHLE1BQUssRUFBUjtBQUFBO0FBQUEsYUFEbkI7QUFBQTtBQUFBO0FBREY7QUFkRixPQURGO0FBc0JEOzs7O0VBNUJnQkosZ0JBQU1DLFM7O0FBK0J6QkUsS0FBS0QsV0FBTCxHQUFtQixNQUFuQjs7a0JBRWVDLEk7Ozs7Ozs7Ozs7Ozs7O0FDckNmOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlFLFE7O0FBQ1o7Ozs7Ozs7O0FBRUEsSUFBTUMsVUFBVSw0QkFBZ0I7QUFDOUJDLE9BQUtGLFNBQVNHLFFBRGdCO0FBRTlCQyxnQkFBY0osU0FBU0ksWUFGTztBQUc5QkMsV0FBU0MsK0JBSHFCO0FBSTlCQyxZQUFVUCxTQUFTUSxlQUpXO0FBSzlCQyxvQkFBa0JULFNBQVNVLHVCQUxHO0FBTTlCQyxzQkFBb0IsNEJBQWdCO0FBQ2xDQyxvQkFBZ0JaLFNBQVNhLHlCQURTO0FBRWxDQyxxQkFBaUJkLFNBQVNlO0FBRlEsR0FBaEI7QUFOVSxDQUFoQixDQUFoQjs7QUFZQSxJQUFNQyxvQkFBb0Isd0NBQWlCQywyQkFBakIsQ0FBMUI7O0FBRUEsSUFBTUMsUUFBUSx3QkFBWWpCLE9BQVosRUFBcUJrQixzQkFBckIsRUFBbUMsb0JBQy9DLDRCQUFnQkMsb0JBQWhCLEVBQXVCSixpQkFBdkIsQ0FEK0MsRUFFL0NLLE9BQU9DLGlCQUFQLEdBQTJCRCxPQUFPQyxpQkFBUCxFQUEzQixHQUF3RDtBQUFBLFNBQUtDLENBQUw7QUFBQSxDQUZULENBQW5DLENBQWQ7O2tCQUtlTCxLOzs7Ozs7OztBQzFCRjs7QUFFYjs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1NLFE7Ozs7Ozs7Ozs7OzZCQUVNO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSxlQUFkO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BREY7QUFNRDs7OztFQVRvQjdCLGdCQUFNQyxTOztBQVk3QjRCLFNBQVMzQixXQUFULEdBQXVCLFVBQXZCOztrQkFFZTJCLFE7Ozs7Ozs7O0FDbkJGOzs7Ozs7OztBQUViOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWXJELE87O0FBQ1o7Ozs7Ozs7Ozs7OztJQUVNc0QsSTs7O0FBQ0osa0JBQWU7QUFBQTs7QUFBQTtBQUVkOzs7O3dDQUVvQjtBQUNuQixXQUFLN0MsS0FBTCxDQUFXUSxRQUFYLENBQW9CakIsUUFBUXVELGFBQVIsRUFBcEI7QUFDRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFDLHVCQUFEO0FBQUEsVUFBTSxXQUFVLFdBQWhCLEVBQTRCLFFBQU8sTUFBbkM7QUFDRTtBQUFBO0FBQUE7QUFBSyxlQUFLOUMsS0FBTCxDQUFXK0M7QUFBaEI7QUFERixPQURGO0FBS0Q7Ozs7RUFmZ0JoQyxnQkFBTUMsUzs7QUFrQnpCNkIsS0FBSzVCLFdBQUwsR0FBbUIsTUFBbkI7O0FBRUEsU0FBUytCLE1BQVQsQ0FBaUJwQyxLQUFqQixFQUF3QjtBQUN0QixTQUFPO0FBQ0xtQyxhQUFTbkMsTUFBTWUsUUFBTixDQUFlb0I7QUFEbkIsR0FBUDtBQUdEOztrQkFFYyx5QkFBUUMsTUFBUixFQUFnQkgsSUFBaEIsQzs7Ozs7Ozs7QUNqQ0Y7Ozs7Ozs7Ozs7QUFFYjs7OztBQUNBOzs7O0FBQ0E7O0lBQVl0RCxPOztBQUNaOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVNMEQsa0I7OztBQUNKLGdDQUFlO0FBQUE7O0FBQUE7O0FBR2IsVUFBS3JDLEtBQUwsR0FBYTtBQUNYc0IsdUJBQWlCO0FBRE4sS0FBYjs7QUFJQSxVQUFLZ0IsUUFBTCxHQUFnQixFQUFoQjs7QUFFQSxVQUFLQyxZQUFMLEdBQW9CO0FBQUEsYUFBTSxNQUFLQyxhQUFMLEVBQU47QUFBQSxLQUFwQjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCO0FBQUEsYUFBTSxNQUFLQyxpQkFBTCxFQUFOO0FBQUEsS0FBeEI7QUFWYTtBQVdkOzs7O3dDQUVvQjtBQUNuQixXQUFLdEQsS0FBTCxDQUFXUSxRQUFYLENBQW9CakIsUUFBUWdFLGtCQUFSLEVBQXBCO0FBQ0Q7OztvQ0FFZ0I7QUFDZixXQUFLdkQsS0FBTCxDQUFXUSxRQUFYLENBQW9CakIsUUFBUWlFLGtCQUFSLEVBQXBCO0FBQ0Q7Ozt3Q0FFb0I7QUFDbkIsV0FBS3hELEtBQUwsQ0FBV1EsUUFBWCxDQUFvQmpCLFFBQVFrRSxxQkFBUixFQUFwQjtBQUNEOzs7d0NBU29CO0FBQUEsVUFDWHZCLGVBRFcsR0FDUyxLQUFLdEIsS0FEZCxDQUNYc0IsZUFEVzs7QUFFbkIsVUFBSXdCLGNBQWMsRUFBbEI7QUFBQSxVQUNJekQsZUFESjs7QUFGbUIsaUNBS1YwRCxHQUxVO0FBTWpCMUQsaUJBQVNpQyxnQkFBZ0J5QixHQUFoQixFQUFxQjFELE1BQTlCOztBQUVBeUQsb0JBQVlFLElBQVosQ0FDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLG1CQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsdUJBQWY7QUFBd0NEO0FBQXhDLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxtQkFBZjtBQUFtQztBQUFBO0FBQUEsa0JBQUcsTUFBSyxFQUFSO0FBQUE7QUFBa0JBO0FBQWxCO0FBQW5DLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxxQkFBZjtBQUFzQzFELHFCQUFPNEQsT0FBUCxDQUFlLENBQWYsQ0FBdEM7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxxQkFBZjtBQUFzQzVELHFCQUFPNEQsT0FBUCxDQUFlLENBQWYsQ0FBdEM7QUFBQTtBQUFBO0FBSkYsV0FERjtBQU9FO0FBQUE7QUFBQSxjQUFLLFdBQVUsY0FBZjtBQUNHM0IsNEJBQWdCeUIsR0FBaEIsRUFBcUJHLElBQXJCLENBQTBCQyxHQUExQixDQUE4QjtBQUFBLHFCQUM3Qiw4QkFBQyx5QkFBRCxhQUFpQixLQUFLQyxRQUFRM0QsVUFBUixDQUFtQkUsRUFBekMsRUFBNkMsTUFBTW9ELEdBQW5ELElBQTRESyxPQUE1RDtBQUNpQiw2QkFBYTlCLGdCQUFnQnlCLEdBQWhCLEVBQXFCRyxJQUFyQixDQUEwQkcsTUFBMUIsR0FBbUMsQ0FEakUsSUFENkI7QUFBQSxhQUE5QjtBQURIO0FBUEYsU0FERjtBQVJpQjs7QUFLbkIsV0FBSyxJQUFJTixHQUFULElBQWdCekIsZUFBaEIsRUFBaUM7QUFBQSxjQUF4QnlCLEdBQXdCO0FBbUJoQzs7QUFFRCxhQUFPRCxXQUFQO0FBQ0Q7Ozs2QkFFUztBQUNSLGFBQ0E7QUFBQTtBQUFBLFVBQUssV0FBVSw2QkFBZjtBQUNJO0FBQUMseUJBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsbUJBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFRLFNBQVMsS0FBS1AsWUFBdEIsRUFBb0MsV0FBVSwyQkFBOUM7QUFBQTtBQUFBLGlCQURGO0FBRUU7QUFBQTtBQUFBLG9CQUFRLFNBQVMsS0FBS0UsZ0JBQXRCLEVBQXdDLFdBQVUsK0JBQWxEO0FBQUE7QUFBQSxpQkFGRjtBQUdFO0FBQUE7QUFBQSxvQkFBUSxTQUFTLEtBQUthLFdBQXRCLEVBQW1DLFdBQVUsMEJBQTdDO0FBQUE7QUFBQTtBQUhGO0FBRkYsYUFERjtBQVNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHVCQUFmO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLG1CQUFmO0FBQUE7QUFBQSxpQkFGRjtBQUdFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHFCQUFmO0FBQUE7QUFBQSxpQkFIRjtBQUlFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHFCQUFmO0FBQUE7QUFBQTtBQUpGLGVBREY7QUFPRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBQ0cscUJBQUtDLGlCQUFMO0FBREg7QUFQRjtBQVRGO0FBREY7QUFESixPQURBO0FBMkJEOzs7NkNBaEVnQ0MsUyxFQUFXQyxTLEVBQVc7QUFDckQsYUFBTztBQUNMQyxtQkFBV0YsVUFBVXBDLGNBRGhCO0FBRUxFLHlCQUFpQmtDLFVBQVVsQztBQUZ0QixPQUFQO0FBSUQ7Ozs7RUEvQjhCbkIsZ0JBQU1DLFM7O0FBNkZ2Q2lDLG1CQUFtQmhDLFdBQW5CLEdBQWlDLG9CQUFqQzs7QUFFQSxTQUFTK0IsTUFBVCxDQUFnQnBDLEtBQWhCLEVBQXVCO0FBQ3JCLFNBQU87QUFDTG9CLG9CQUFnQnBCLE1BQU1tQixrQkFBTixDQUF5QkMsY0FEcEM7QUFFTEUscUJBQWlCdEIsTUFBTW1CLGtCQUFOLENBQXlCRztBQUZyQyxHQUFQO0FBSUQ7O2tCQUVjLHlCQUFRYyxNQUFSLEVBQWdCQyxrQkFBaEIsQzs7Ozs7Ozs7QUM5R0Y7Ozs7Ozs7Ozs7QUFFYjs7OztBQUNBOzs7O0FBQ0E7O0lBQVkxRCxPOztBQUNaOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVNZ0YsZ0I7OztBQUNKLDhCQUFlO0FBQUE7O0FBQUE7O0FBR2IsVUFBS0MsZ0JBQUwsR0FBd0IsVUFBQ2pFLEVBQUQ7QUFBQSxhQUFRLE1BQUtrRSxpQkFBTCxDQUF1QmxFLEVBQXZCLENBQVI7QUFBQSxLQUF4QjtBQUhhO0FBSWQ7Ozs7c0NBRWlCQSxFLEVBQUk7QUFDcEIsV0FBS1AsS0FBTCxDQUFXMEUsT0FBWCxDQUFtQmQsSUFBbkIsaUJBQXNDckQsRUFBdEM7QUFDRDs7O3dDQUVtQjtBQUFBOztBQUNsQixhQUFPLEtBQUtQLEtBQUwsQ0FBVzJFLGNBQVgsQ0FBMEJaLEdBQTFCLENBQThCLFVBQUNhLFNBQUQsRUFBZTtBQUNsRCxlQUFPLDhCQUFDLHVCQUFELGFBQWUsS0FBS0EsVUFBVXJFLEVBQTlCLElBQXNDcUUsU0FBdEMsSUFBaUQsa0JBQWtCLE9BQUtKLGdCQUF4RSxJQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7Ozt3Q0FFb0I7QUFDbkIsV0FBS3hFLEtBQUwsQ0FBV1EsUUFBWCxDQUFvQmpCLFFBQVFzRixtQkFBUixFQUFwQjtBQUNEOzs7NkJBRVM7QUFDUixhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsMkJBQWY7QUFDRTtBQUFDLHlCQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsYUFBZjtBQUFBO0FBRUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsU0FBZjtBQUFBO0FBQUE7QUFGRixhQURGO0FBT0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUZGLGVBREY7QUFPRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUZGO0FBUEYsYUFQRjtBQXFCRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxrQkFBZjtBQUNHLHVCQUFLN0UsS0FBTCxDQUFXMkUsY0FBWCxDQUEwQlYsTUFEN0I7QUFBQTtBQUFBLGlCQURGO0FBSUUsdURBQUssV0FBVSxXQUFmO0FBSkYsZUFERjtBQVFFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLDJCQUFmO0FBQ0cscUJBQUthLGlCQUFMO0FBREg7QUFSRixhQXJCRjtBQWlDRTtBQUFBO0FBQUEsZ0JBQUssU0FBTSxhQUFYO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLFNBQU0sY0FBZDtBQUFBO0FBQUE7QUFERjtBQWpDRjtBQURGO0FBREYsT0FEQTtBQTJDRDs7OztFQWpFNEIvRCxnQkFBTUMsUzs7QUFvRXJDdUQsaUJBQWlCdEQsV0FBakIsR0FBK0Isa0JBQS9COztBQUVBLFNBQVMrQixNQUFULENBQWdCcEMsS0FBaEIsRUFBdUI7QUFDckIsU0FBTztBQUNMK0Qsb0JBQWdCL0QsTUFBTWlCLGdCQUFOLENBQXVCOEM7QUFEbEMsR0FBUDtBQUdEOztrQkFFYyx5QkFBUTNCLE1BQVIsRUFBZ0J1QixnQkFBaEIsQzs7Ozs7Ozs7QUNwRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNFO0FBQzVDO0FBQ29DO0FBQ2pDO0FBQ3FEO0FBQy9DO0FBQ0E7QUFDdUI7QUFDMEM7QUFDN0Q7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdIQUFjOztBQUVoQjtBQUNBOztBQUVBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0ZBQW9CO0FBQ3hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFXLDZDQUFLLGVBQWUsb0RBQU07QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUMsQ0FBQyw2Q0FBSzs7QUFFUDtBQUNBO0FBQ0EsY0FBYyxrREFBUztBQUN2QixjQUFjLGtEQUFTO0FBQ3ZCLGtCQUFrQixrREFBUztBQUMzQix5QkFBeUIsa0RBQVM7QUFDbEMsZUFBZSxrREFBUztBQUN4Qjs7QUFFQTtBQUNBLDRDQUE0QyxvRkFBTyw0R0FBNEcsU0FBUyxzQkFBc0IsMEJBQTBCO0FBQ3hOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0hBQWM7O0FBRWhCO0FBQ0E7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpRkFBaUI7QUFDckM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVcsNkNBQUssZUFBZSxvREFBTTtBQUNyQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLDZDQUFLOztBQUVQO0FBQ0E7QUFDQSxjQUFjLGtEQUFTO0FBQ3ZCLGNBQWMsa0RBQVM7QUFDdkIseUJBQXlCLGtEQUFTO0FBQ2xDLGNBQWMsa0RBQVM7QUFDdkI7O0FBRUE7QUFDQSw0Q0FBNEMsb0ZBQU8seUdBQXlHLFNBQVMsc0JBQXNCLHVCQUF1QjtBQUNsTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnSEFBYzs7QUFFaEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0hBQTZCLDZDQUE2Qzs7O0FBR3pGLFdBQVcsNkNBQUssZUFBZSw2REFBZTtBQUM5Qyx5REFBeUQsc0ZBQVMsMERBQTBELHNGQUFTO0FBQ3JJLDhDQUE4Qyw4RUFBYztBQUM1RDtBQUNBLGFBQWEsNkNBQUssb0JBQW9CLDBHQUFRLEdBQUc7QUFDakQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUMsQ0FBQyw2Q0FBSzs7QUFFUDtBQUNBLGVBQWUsa0RBQVMsWUFBWSxrREFBUyxTQUFTLGtEQUFTO0FBQy9ELHFCQUFxQixrREFBUyxZQUFZLGtEQUFTLFNBQVMsa0RBQVMsT0FBTyxrREFBUztBQUNyRixhQUFhLGtEQUFTO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsYUFBYSxrREFBUztBQUN0QixhQUFhLGtEQUFTO0FBQ3RCLFlBQVksa0RBQVM7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTJFLGFBQWE7QUFDeEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0hBQTZCOztBQUUxQyx1REFBdUQ7O0FBRXZELHVEQUF1RDtBQUN2RCxTQUFTLDZDQUFLLGVBQWUsbURBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBHQUFRLEdBQUc7QUFDeEMsYUFBYSw2Q0FBSyxxQkFBcUIsMEdBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSx3QkFBd0Isa0RBQVM7QUFDakMsc0JBQXNCLDBHQUFRLEdBQUc7QUFDakM7QUFDQSxxQkFBcUIsa0RBQVM7QUFDOUIsaUJBQWlCLGtEQUFTO0FBQzFCLGVBQWUsa0RBQVM7QUFDeEIsV0FBVyxtREFBSztBQUNoQixjQUFjLGtEQUFTO0FBQ3ZCLGNBQWMsa0RBQVM7QUFDdkIsWUFBWSxtREFBSztBQUNqQixXQUFXLGtEQUFTO0FBQ3BCLEdBQUc7QUFDSDs7QUFFb0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ3BQcEMzQyxlLEdBQUFBLGU7UUFXQUUsdUIsR0FBQUEsdUI7UUFXQUcseUIsR0FBQUEseUI7UUFzQkFFLHNCLEdBQUFBLHNCO1FBZ0RBWixRLEdBQUFBLFE7UUFXQUMsWSxHQUFBQSxZOztBQXpHaEI7O0lBQVl1RCxZOzs7O0FBRUwsU0FBU25ELGVBQVQsQ0FBMEJoQixLQUExQixFQUFpQ29FLE1BQWpDLEVBQXlDO0FBQzlDLE1BQUlDLGFBQWFELE9BQU8xRSxJQUF4QjtBQUFBLE1BQ0k0RSxXQUFXQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQnhFLEtBQWxCLENBRGY7O0FBR0EsTUFBSXFFLGVBQWVGLGFBQWFNLFlBQWhDLEVBQThDO0FBQzVDSCxlQUFXRixPQUFPTSxPQUFsQjtBQUNEOztBQUVELFNBQU9KLFFBQVA7QUFDRDs7QUFFTSxTQUFTcEQsdUJBQVQsQ0FBa0NsQixLQUFsQyxFQUF5Q29FLE1BQXpDLEVBQWlEO0FBQ3RELE1BQUlDLGFBQWFELE9BQU8xRSxJQUF4QjtBQUFBLE1BQ0k0RSxXQUFXQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQnhFLEtBQWxCLENBRGY7O0FBR0EsTUFBSXFFLGVBQWVGLGFBQWFRLGdCQUFoQyxFQUFrRDtBQUNoREwsYUFBU1AsY0FBVCxHQUEwQkssT0FBT00sT0FBakM7QUFDRDs7QUFFRCxTQUFPSixRQUFQO0FBQ0Q7O0FBRU0sU0FBU2pELHlCQUFULENBQW9DckIsS0FBcEMsRUFBMkNvRSxNQUEzQyxFQUFtRDtBQUN4RCxNQUFJQyxhQUFhRCxPQUFPMUUsSUFBeEI7QUFBQSxNQUNJNEUsV0FBV0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0J4RSxLQUFsQixDQURmOztBQUdBLE1BQUlxRSxlQUFlRixhQUFhUyxrQkFBaEMsRUFBb0Q7QUFDbEROLGVBQVdGLE9BQU9NLE9BQWxCO0FBQ0Q7O0FBRUQsU0FBT0osUUFBUDtBQUNEOztBQUVELFNBQVNPLGFBQVQsQ0FBd0J2RCxlQUF4QixFQUF5QztBQUNyQyxNQUFJd0QsYUFBYSxFQUFqQjtBQUNBUCxTQUFPUSxJQUFQLENBQVl6RCxlQUFaLEVBQTZCNkIsR0FBN0IsQ0FBaUMsZUFBTztBQUN0QzdCLG9CQUFnQnlCLEdBQWhCLEVBQXFCMUQsTUFBckIsR0FBOEJpQyxnQkFBZ0J5QixHQUFoQixFQUFxQkcsSUFBckIsQ0FBMEI4QixNQUExQixDQUFpQyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN2RSxhQUFPRCxJQUFJQyxFQUFFN0YsTUFBYjtBQUNELEtBRjZCLEVBRTNCLENBRjJCLENBQTlCO0FBR0QsR0FKRDs7QUFNQSxTQUFPeUYsVUFBUDtBQUNIOztBQUVNLFNBQVN2RCxzQkFBVCxDQUFpQ3ZCLEtBQWpDLEVBQXdDb0UsTUFBeEMsRUFBZ0Q7QUFDckQsTUFBSUMsYUFBYUQsT0FBTzFFLElBQXhCO0FBQUEsTUFBOEJ5RixvQkFBOUI7QUFBQSxNQUNJYixXQUFXQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQnhFLEtBQWxCLENBRGY7O0FBR0EsTUFBSXFFLGVBQWVGLGFBQWFTLGtCQUE1QixJQUFrRFAsZUFBZUYsYUFBYWlCLG9CQUFsRixFQUF3RztBQUN0R2QsZUFBV0YsT0FBT00sT0FBUCxDQUFlVyxZQUFmLENBQTRCTCxNQUE1QixDQUFtQyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN0REQsUUFBRUMsRUFBRXpGLFVBQUYsQ0FBYUMsSUFBZixJQUF1QnVGLEVBQUVDLEVBQUV6RixVQUFGLENBQWFDLElBQWYsS0FBd0IsRUFBL0M7QUFDQXVGLFFBQUVDLEVBQUV6RixVQUFGLENBQWFDLElBQWYsRUFBcUJ3RCxJQUFyQixHQUE0QitCLEVBQUVDLEVBQUV6RixVQUFGLENBQWFDLElBQWYsRUFBcUJ3RCxJQUFyQixJQUE2QixFQUF6RDtBQUNBK0IsUUFBRUMsRUFBRXpGLFVBQUYsQ0FBYUMsSUFBZixFQUFxQndELElBQXJCLENBQTBCRixJQUExQixjQUFtQ2tDLENBQW5DO0FBQ0EsYUFBT0QsQ0FBUDtBQUNELEtBTFUsRUFLUlYsT0FBT2UsTUFBUCxDQUFjLElBQWQsQ0FMUSxDQUFYOztBQU9BVCxrQkFBY1AsUUFBZDtBQUVELEdBVkQsTUFVTyxJQUFJRCxlQUFlRixhQUFhb0Isa0JBQWhDLEVBQW9EO0FBQUEsMEJBQzdCbkIsT0FBT00sT0FEc0I7QUFBQSxRQUNqRGhGLElBRGlELG1CQUNqREEsSUFEaUQ7QUFBQSxRQUMzQ0MsRUFEMkMsbUJBQzNDQSxFQUQyQztBQUFBLFFBQ3ZDVCxLQUR1QyxtQkFDdkNBLEtBRHVDOztBQUV6RG9GLGFBQVM1RSxJQUFULEVBQWV3RCxJQUFmLENBQW9Cc0MsSUFBcEIsQ0FBeUI7QUFBQSxhQUFRQyxLQUFLaEcsVUFBTCxDQUFnQkUsRUFBaEIsS0FBdUJBLEVBQS9CO0FBQUEsS0FBekIsRUFBNEROLE1BQTVELEdBQXFFSCxLQUFyRTtBQUNELEdBSE0sTUFHQSxJQUFJbUYsZUFBZUYsYUFBYXVCLHVCQUFoQyxFQUF5RDtBQUFBLDJCQUNsQ3RCLE9BQU9NLE9BRDJCO0FBQUEsUUFDdERoRixLQURzRCxvQkFDdERBLElBRHNEO0FBQUEsUUFDaERDLEdBRGdELG9CQUNoREEsRUFEZ0Q7QUFBQSxRQUM1Q1QsTUFENEMsb0JBQzVDQSxLQUQ0Qzs7QUFFOUQsUUFBSXlHLHNCQUFKO0FBQ0FyQixhQUFTNUUsS0FBVCxFQUFld0QsSUFBZixDQUFvQjBDLElBQXBCLENBQXlCLFVBQUNILElBQUQsRUFBT0ksS0FBUCxFQUFjM0MsSUFBZCxFQUF1QjtBQUM5QyxVQUFJdUMsS0FBS2hHLFVBQUwsQ0FBZ0JFLEVBQWhCLEtBQXVCQSxHQUEzQixFQUErQjtBQUM3QmdHLHdCQUFnQkYsS0FBS3BHLE1BQXJCO0FBQ0E2RCxhQUFLNEMsTUFBTCxDQUFZRCxLQUFaLEVBQW1CLENBQW5CO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FWTSxNQVVBLElBQUl4QixlQUFlRixhQUFhNEIsc0JBQWhDLEVBQXdEO0FBQzdEeEIsV0FBT1EsSUFBUCxDQUFZVCxRQUFaLEVBQXNCbkIsR0FBdEIsQ0FBMEIsZ0JBQVE7QUFDaEMsVUFBSWdDLGNBQWNiLFNBQVM1RSxJQUFULEVBQWV3RCxJQUFmLENBQW9COEIsTUFBcEIsQ0FBMkIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFBRSxlQUFPRCxJQUFJQyxFQUFFN0YsTUFBYjtBQUFxQixPQUE1RCxFQUE4RCxDQUE5RCxDQUFsQjtBQUFBLFVBQW9GMkcsVUFBcEY7QUFDQSxVQUFJYixjQUFjYixTQUFTNUUsSUFBVCxFQUFlTCxNQUFqQyxFQUF5QztBQUN2QzJHLHFCQUFhMUIsU0FBUzVFLElBQVQsRUFBZUwsTUFBZixHQUF3QjhGLFdBQXJDO0FBQ0FiLGlCQUFTNUUsSUFBVCxFQUFld0QsSUFBZixDQUFvQitDLE9BQXBCLENBQTRCLFVBQUNSLElBQUQsRUFBVTtBQUNwQ0EsZUFBS3BHLE1BQUwsSUFBZTZHLFdBQVcsQ0FBRVQsS0FBS3BHLE1BQUwsR0FBYzJHLFVBQWYsR0FBMkJiLFdBQTVCLEVBQXlDbEMsT0FBekMsQ0FBaUQsQ0FBakQsQ0FBWCxDQUFmO0FBQ0QsU0FGRDtBQUdELE9BTEQsTUFLTztBQUNMO0FBQ0ErQyxxQkFBYWIsY0FBY2IsU0FBUzVFLElBQVQsRUFBZUwsTUFBMUM7QUFDQWlGLGlCQUFTNUUsSUFBVCxFQUFld0QsSUFBZixDQUFvQitDLE9BQXBCLENBQTRCLFVBQUNSLElBQUQsRUFBVTtBQUNwQ0EsZUFBS3BHLE1BQUwsSUFBZTZHLFdBQVcsQ0FBRVQsS0FBS3BHLE1BQUwsR0FBYzJHLFVBQWYsR0FBMkJiLFdBQTVCLEVBQXlDbEMsT0FBekMsQ0FBaUQsQ0FBakQsQ0FBWCxDQUFmO0FBQ0QsU0FGRDtBQUdEO0FBQ0YsS0FkRDtBQWVEOztBQUVELFNBQU9xQixRQUFQO0FBQ0Q7O0FBRU0sU0FBUzNELFFBQVQsQ0FBbUJYLEtBQW5CLEVBQTBCb0UsTUFBMUIsRUFBa0M7QUFDdkMsTUFBSUMsYUFBYUQsT0FBTzFFLElBQXhCO0FBQUEsTUFDSTRFLFdBQVdDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCeEUsS0FBbEIsQ0FEZjs7QUFHQSxNQUFJcUUsZUFBZUYsYUFBYWdDLGVBQWhDLEVBQWlEO0FBQy9DN0IsYUFBUzhCLE9BQVQsQ0FBaUJDLElBQWpCLEdBQXdCakMsT0FBT00sT0FBUCxDQUFlNEIsUUFBdkM7QUFDRDs7QUFFRCxTQUFPaEMsUUFBUDtBQUNEOztBQUVNLFNBQVMxRCxZQUFULENBQXVCWixLQUF2QixFQUE4Qm9FLE1BQTlCLEVBQXNDO0FBQzNDLE1BQUlDLGFBQWFELE9BQU8xRSxJQUF4QjtBQUFBLE1BQ0k0RSxXQUFXQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQnhFLEtBQWxCLENBRGY7O0FBR0EsTUFBSXFFLGVBQWVGLGFBQWFvQyxnQkFBaEMsRUFBa0Q7QUFDaERqQyxhQUFTa0MsUUFBVCxHQUFvQixJQUFwQjtBQUNELEdBRkQsTUFFTyxJQUFJbkMsZUFBZUYsYUFBYU0sWUFBaEMsRUFBOEM7QUFDbkRILGFBQVNrQyxRQUFULEdBQW9CLEtBQXBCO0FBQ0Q7O0FBRUQsU0FBT2xDLFFBQVA7QUFDRCxDOzs7Ozs7OztBQ3BIWTs7Ozs7QUFFYixJQUFJdEUsUUFBUTtBQUNWVSxPQUFLO0FBQ0gwRixhQUFTO0FBQ1BDLFlBQU0sRUFEQztBQUVQSSxpQkFBVztBQUZKO0FBRE4sR0FESztBQU9WMUYsWUFBVTtBQUNSb0IsYUFBUztBQURELEdBUEE7QUFVVmxCLG9CQUFrQjtBQUNoQjhDLG9CQUFnQjtBQURBLEdBVlI7QUFhVjVDLHNCQUFvQjtBQUNsQkMsb0JBQWdCLEVBREU7QUFFbEJFLHFCQUFpQjtBQUZDO0FBYlYsQ0FBWjs7a0JBbUJldEIsSzs7Ozs7Ozs7QUNyQkY7Ozs7Ozs7O0FBRWI7Ozs7Ozs7Ozs7OztJQUVNMEcsYTs7O0FBQ0osMkJBQWU7QUFBQTs7QUFBQTs7QUFHYixVQUFLQyxrQkFBTCxHQUEwQjtBQUN4QkMsaUJBQVcsNkJBRGE7QUFFeEJDLGtCQUFZO0FBRlksS0FBMUI7O0FBS0EsVUFBS0MsWUFBTCxHQUFvQjtBQUFBLGFBQU0sTUFBS2xELGdCQUFMLEVBQU47QUFBQSxLQUFwQjtBQVJhO0FBU2Q7Ozs7dUNBRW1CO0FBQ2xCLFdBQUt4RSxLQUFMLENBQVd3RSxnQkFBWCxDQUE0QixLQUFLeEUsS0FBTCxDQUFXTyxFQUF2QztBQUNEOzs7NkJBRVM7QUFDUixhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFdBQWY7QUFDRSxpREFBSyxLQUFLLEtBQUtQLEtBQUwsQ0FBVzJILFFBQXJCLEVBQStCLFdBQVUsa0JBQXpDLEdBREY7QUFHRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGtCQUFmO0FBQWtDO0FBQUE7QUFBQTtBQUFPLG1CQUFLM0gsS0FBTCxDQUFXNEg7QUFBbEI7QUFBbEM7QUFIRixTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFBK0IsbUJBQUs1SCxLQUFMLENBQVc2SCxVQUExQztBQUFBO0FBQUE7QUFGRixXQURGO0FBS0U7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFBK0IsbUJBQUs3SCxLQUFMLENBQVc4SCxXQUExQztBQUFBO0FBQUE7QUFGRixXQUxGO0FBU0U7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFBK0IsbUJBQUs5SCxLQUFMLENBQVcrSCxVQUExQztBQUFBO0FBQUE7QUFGRixXQVRGO0FBYUU7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFBOEI7QUFBQTtBQUFBLGtCQUFNLFdBQVUsVUFBaEI7QUFBNEIscUJBQUsvSCxLQUFMLENBQVdnSTtBQUF2QyxlQUE5QjtBQUFzRixtQkFBS2hJLEtBQUwsQ0FBV2lJO0FBQWpHO0FBRkYsV0FiRjtBQWlCRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxjQUFmO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUErQixtQkFBS1Ysa0JBQUwsQ0FBd0IsS0FBS3ZILEtBQUwsQ0FBV2tJLFdBQW5DO0FBQS9CO0FBRkY7QUFqQkYsU0FORjtBQTRCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWYsRUFBNkIsU0FBUyxLQUFLUixZQUEzQztBQUFBO0FBQUE7QUE1QkYsT0FEQTtBQWdDRDs7OztFQWpEeUIzRyxnQkFBTUMsUzs7QUFvRGxDc0csY0FBY3JHLFdBQWQsR0FBNEIsZUFBNUI7O2tCQUVlcUcsYTs7Ozs7Ozs7QUMxRGY7O0FBRWE7Ozs7Ozs7O0FBRWI7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU01QyxVQUFVLDRDQUFxQixvQ0FBckIsRUFBNkNwQyxlQUE3QyxDQUFoQjtBQUNBNkYsUUFBUUMsR0FBUixDQUFZMUQsT0FBWjs7SUFFTTJELEc7OztBQUNKLGlCQUFlO0FBQUE7O0FBQUE7QUFFZDs7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUMsOEJBQUQ7QUFBQSxZQUFVLE9BQU8vRixlQUFqQjtBQUNFO0FBQUMsa0NBQUQ7QUFBQSxjQUFRLFNBQVNvQyxPQUFqQjtBQUNFO0FBQUMsb0NBQUQ7QUFBQTtBQUNFLDRDQUFDLHFCQUFELElBQU8sV0FBUCxFQUFhLE1BQUssR0FBbEIsRUFBc0IsV0FBVzRELDBCQUFqQyxHQURGO0FBRUUsNENBQUMscUJBQUQsSUFBTyxNQUFLLGdCQUFaLEVBQTZCLFdBQVdDLDRCQUF4QyxHQUZGO0FBR0UsNENBQUMscUJBQUQsSUFBTyxNQUFLLE1BQVosRUFBbUIsV0FBVzNGLGVBQTlCLEdBSEY7QUFJRSw0Q0FBQyxxQkFBRCxJQUFPLGFBQVAsRUFBZSxXQUFXQSxlQUExQjtBQUpGO0FBREY7QUFERjtBQURGLE9BREY7QUFjRDs7OztFQXBCZTdCLGdCQUFNQyxTOztBQXVCeEJxSCxJQUFJcEgsV0FBSixHQUFrQixLQUFsQjs7QUFFQTtBQUNBLElBQUksT0FBT3dCLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNBLFNBQU8rRixNQUFQLEdBQWdCLFlBQU07QUFDcEIsUUFBSXhJLFFBQVE7QUFDVmlILFlBQU13QixTQUFTdkI7QUFETCxLQUFaO0FBR0F3Qix1QkFBU0MsTUFBVCxDQUFnQjVILGdCQUFNNkgsYUFBTixDQUFvQlAsR0FBcEIsRUFBeUJySSxLQUF6QixDQUFoQixFQUFpRDZJLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBakQ7QUFDRCxHQUxEO0FBTUQ7O2tCQUVjVCxHOzs7Ozs7Ozs7Ozs7O2tCQ3REQSxDQUNYLEVBQUU5SCxJQUFJLENBQU47QUFDRU8sUUFBTSxxQkFEUjtBQUVFaUksY0FBWSxPQUZkO0FBR0VDLGVBQWEsT0FIZjtBQUlFaEIsWUFBVSxLQUpaO0FBS0UvQixnQkFBYyxDQUNaO0FBQ0VoRyxZQUFRLENBRFY7QUFFRUksZ0JBQVk7QUFDVkUsVUFBSSxDQURNO0FBRVZPLFlBQU0sVUFGSTtBQUdWUixZQUFNO0FBSEk7QUFGZCxHQURZLEVBU1o7QUFDRUwsWUFBUSxFQURWO0FBRUVJLGdCQUFZO0FBQ1ZFLFVBQUksQ0FETTtBQUVWTyxZQUFNLGFBRkk7QUFHVlIsWUFBTTtBQUhJO0FBRmQsR0FUWSxFQWlCWjtBQUNFTCxZQUFRLEVBRFY7QUFFRUksZ0JBQVk7QUFDVkUsVUFBSSxDQURNO0FBRVZPLFlBQU0sZ0JBRkk7QUFHVlIsWUFBTTtBQUhJO0FBRmQsR0FqQlksRUF5Qlo7QUFDRUwsWUFBUSxFQURWO0FBRUVJLGdCQUFZO0FBQ1ZFLFVBQUksQ0FETTtBQUVWTyxZQUFNLFdBRkk7QUFHVlIsWUFBTTtBQUhJO0FBRmQsR0F6QlksRUFpQ1o7QUFDRUwsWUFBUSxFQURWO0FBRUVJLGdCQUFZO0FBQ1ZFLFVBQUksQ0FETTtBQUVWTyxZQUFNLFlBRkk7QUFHVlIsWUFBTTtBQUhJO0FBRmQsR0FqQ1ksRUF5Q1o7QUFDRUwsWUFBUSxFQURWO0FBRUVJLGdCQUFZO0FBQ1ZFLFVBQUksQ0FETTtBQUVWTyxZQUFNLHVCQUZJO0FBR1ZSLFlBQU07QUFISTtBQUZkLEdBekNZLEVBaURaO0FBQ0VMLFlBQVEsQ0FEVjtBQUVFSSxnQkFBWTtBQUNWRSxVQUFJLENBRE07QUFFVk8sWUFBTSxrQkFGSTtBQUdWUixZQUFNO0FBSEk7QUFGZCxHQWpEWSxFQXlEWjtBQUNFTCxZQUFRLEVBRFY7QUFFRUksZ0JBQVk7QUFDVkUsVUFBSSxDQURNO0FBRVZPLFlBQU0sS0FGSTtBQUdWUixZQUFNO0FBSEk7QUFGZCxHQXpEWSxFQWlFWjtBQUNFTCxZQUFRLEVBRFY7QUFFRUksZ0JBQVk7QUFDVkUsVUFBSSxFQURNO0FBRVZPLFlBQU0sVUFGSTtBQUdWUixZQUFNO0FBSEk7QUFGZCxHQWpFWTtBQUxoQixDQURXLEM7Ozs7Ozs7Ozs7Ozs7QUNBZixJQUFJMkksY0FBYyxFQUFsQjs7QUFFQSxLQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsS0FBSyxFQUFyQixFQUF5QkEsR0FBekIsRUFBOEI7QUFDNUJELGNBQVlyRixJQUFaLENBQWlCO0FBQ2ZyRCxRQUFJMkksQ0FEVztBQUVmdEIsV0FBTyxzQkFGUTtBQUdmRCxjQUFVLHlDQUhLO0FBSWZFLGdCQUFZLE9BSkc7QUFLZkMsaUJBQWEsTUFMRTtBQU1mQyxnQkFBWSxPQU5HO0FBT2ZFLG1CQUFlLFFBUEE7QUFRZkQsY0FBVSxLQVJLO0FBU2ZFLGlCQUFhO0FBVEUsR0FBakI7QUFXRDs7a0JBRWNlLFc7Ozs7Ozs7Ozs7Ozs7O1FDQ0NwRSxtQixHQUFBQSxtQjtRQVNBdEIsa0IsR0FBQUEsa0I7UUFTQUMsa0IsR0FBQUEsa0I7UUFVQS9DLGdCLEdBQUFBLGdCO1FBU0FFLHFCLEdBQUFBLHFCO1FBU0E4QyxxQixHQUFBQSxxQjs7QUEzRGhCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTXNELDRDQUFrQiwwQkFBeEIsQyxDQVJQOzs7O0FBU08sSUFBTXhCLDhDQUFtQixrQkFBekI7QUFDQSxJQUFNQyxrREFBcUIsb0JBQTNCO0FBQ0EsSUFBTVcsa0RBQXFCLG9CQUEzQjtBQUNBLElBQU1ILHNEQUF1QixzQkFBN0I7QUFDQSxJQUFNVywwREFBeUIsd0JBQS9CO0FBQ0EsSUFBTUwsNERBQTBCLHlCQUFoQzs7QUFHQSxTQUFTekIsbUJBQVQsR0FBZ0M7QUFDckMsU0FBTyxVQUFVckUsUUFBVixFQUFvQjtBQUN6QkEsYUFBUztBQUNQRixZQUFNaUYsZ0JBREM7QUFFUEQsZUFBUzZEO0FBRkYsS0FBVDtBQUlELEdBTEQ7QUFNRDs7QUFFTSxTQUFTNUYsa0JBQVQsR0FBK0I7QUFDcEMsU0FBTyxVQUFVL0MsUUFBVixFQUFvQjtBQUN6QkEsYUFBUztBQUNQRixZQUFNa0Ysa0JBREM7QUFFUEYsZUFBUzhELG9CQUFtQixDQUFuQjtBQUZGLEtBQVQ7QUFJRCxHQUxEO0FBTUQ7O0FBRU0sU0FBUzVGLGtCQUFULEdBQStCO0FBQ3BDLFNBQU8sVUFBVWhELFFBQVYsRUFBb0I2SSxRQUFwQixFQUE4QjtBQUFBLG9CQUNOQSxVQURNO0FBQUEsUUFDN0J0SCxrQkFENkIsYUFDN0JBLGtCQUQ2Qjs7QUFFbkN2QixhQUFTO0FBQ1BGLFlBQU0wRixvQkFEQztBQUVQVixlQUFTdkQsbUJBQW1CQztBQUZyQixLQUFUO0FBSUQsR0FORDtBQU9EOztBQUVNLFNBQVN2QixnQkFBVCxDQUEyQjZJLElBQTNCLEVBQWlDO0FBQ3RDLFNBQU8sVUFBVTlJLFFBQVYsRUFBb0I7QUFDekJBLGFBQVM7QUFDUEYsWUFBTTZGLGtCQURDO0FBRVBiLGVBQVNnRTtBQUZGLEtBQVQ7QUFJRCxHQUxEO0FBTUQ7O0FBRU0sU0FBUzNJLHFCQUFULENBQWdDMkksSUFBaEMsRUFBc0M7QUFDM0MsU0FBTyxVQUFVOUksUUFBVixFQUFvQjtBQUN6QkEsYUFBUztBQUNQRixZQUFNZ0csdUJBREM7QUFFUGhCLGVBQVNnRTtBQUZGLEtBQVQ7QUFJRCxHQUxEO0FBTUQ7O0FBRU0sU0FBUzdGLHFCQUFULENBQWdDNkYsSUFBaEMsRUFBc0M7QUFDM0MsU0FBTyxVQUFVOUksUUFBVixFQUFvQjtBQUN6QkEsYUFBUztBQUNQRixZQUFNcUcsc0JBREM7QUFFUHJCLGVBQVNnRTtBQUZGLEtBQVQ7QUFJRCxHQUxEO0FBTUQsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIENvbnN0aXR1ZW50SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gIHN1cGVyKCk7XHJcblxyXG4gIHRoaXMub25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB0aGlzLml0ZW1DaGFuZ2VIYW5kbGVyKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gIHRoaXMuaW5jcmVhc2VIYW5kbGVyID0gKCkgPT4gdGhpcy5pdGVtQ2hhbmdlSGFuZGxlcih0aGlzLnByb3BzLndlaWdodCArIDEpO1xyXG4gIHRoaXMuZGVjcmVhc2VIYW5kbGVyID0gKCkgPT4gdGhpcy5pdGVtQ2hhbmdlSGFuZGxlcih0aGlzLnByb3BzLndlaWdodCAtIDEpO1xyXG4gIHRoaXMuZGVsZXRlSGFuZGxlciA9ICgpID0+IHRoaXMuX2RlbGV0ZUhhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIGl0ZW1DaGFuZ2VIYW5kbGVyICh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID4gMCkge1xyXG4gICAgICBjb25zdCB7dHlwZSwgaWR9ID0gdGhpcy5wcm9wcy5pbnN0cnVtZW50O1xyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlSXRlbVdlaWdodCh7dHlwZSwgaWQsIHZhbHVlfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2RlbGV0ZUhhbmRsZXIgKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYWxsb3dEZWxldGUpIHtcclxuICAgICAgY29uc3Qge3R5cGUsIGlkfSA9IHRoaXMucHJvcHMuaW5zdHJ1bWVudDtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLmRlbGV0ZUNvbnN0aXR1ZW50SXRlbSh7dHlwZSwgaWR9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RydW1lbnQtcm93XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFwiIG9uQ2xpY2s9e3RoaXMuZGVsZXRlSGFuZGxlcn0gPkQ8L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC12YWx1ZSBjYXRlZ29yeVwiPjxhIGhyZWY9XCJcIj57dGhpcy5wcm9wcy5pbnN0cnVtZW50Lm5hbWV9PC9hPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdmFsdWUgbGlua1wiPiZuYnNwOzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdmFsdWUgd2VpZ2h0XCI+e3RoaXMucHJvcHMud2VpZ2h0fSU8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXZhbHVlIHdlaWdodFwiPlxyXG4gICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmRlY3JlYXNlSGFuZGxlcn0gY2xhc3M9XCJpY29uIGRlY1wiPi08L3NwYW4+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwid2VpZ2h0LWlucHV0XCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VIYW5kbGVyfSB2YWx1ZT17dGhpcy5wcm9wcy53ZWlnaHR9PjwvaW5wdXQ+XHJcbiAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuaW5jcmVhc2VIYW5kbGVyfSBjbGFzc05hbWU9XCJpY29uIGluY1wiPis8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQ29uc3RpdHVlbnRJdGVtLmRpc3BsYXlOYW1lID0gJ0NvbnN0aXR1ZW50SXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoQ29uc3RpdHVlbnRJdGVtKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC92aWV3cy9jb21wb25lbnRzL2NvbnN0aXR1ZW50SXRlbS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28taW1nXCIgc3JjPVwiL2J1aWxkL2ltYWdlcy9sb2dvLnN2Z1wiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkxvZyBJbjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxtYWluIGlkPVwiYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICBDb3B5cmlnaHQgJmNvcHk7IDxhIGhyZWY9XCJcIiA+Q0dTLUNJTUIgU2VjdXJpdGllczwvYT4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUGFnZS5kaXNwbGF5TmFtZSA9ICdQYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSwgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4JztcclxuaW1wb3J0IGRlZmF1bHRTdGF0ZSBmcm9tICcuL2RlZmF1bHRTdGF0ZSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBhcHA6IHJlZHVjZXJzLmFwcFN0YXRlLFxyXG4gIGRhdGFSZXF1ZXN0czogcmVkdWNlcnMuZGF0YVJlcXVlc3RzLFxyXG4gIHJvdXRpbmc6IHJvdXRlclJlZHVjZXIsXHJcbiAgaG9tZVBhZ2U6IHJlZHVjZXJzLmhvbWVQYWdlUmVkdWNlcixcclxuICBwb3J0Zm9saW9MaXN0aW5nOiByZWR1Y2Vycy5wb3J0Zm9saW9MaXN0aW5nUmVkdWNlcixcclxuICBjdXN0b21pemVQb3J0Zm9saW86IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBtb2RhbFBvcnRmb2xpbzogcmVkdWNlcnMuY3VzdG9taXplUG9ydGZvbGlvUmVkdWNlcixcclxuICAgIGNvbnN0aXR1ZW50RGF0YTogcmVkdWNlcnMuY29uc3RpdHVlbnREYXRhUmVkdWNlclxyXG4gIH0pXHJcbn0pO1xyXG5cclxuY29uc3Qgcm91dGluZ01pZGRsZXdhcmUgPSByb3V0ZXJNaWRkbGV3YXJlKGJyb3dzZXJIaXN0b3J5KTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZGVmYXVsdFN0YXRlLCBjb21wb3NlKFxyXG4gIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgcm91dGluZ01pZGRsZXdhcmUpLFxyXG4gIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvc3RvcmVzL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVycm9yNDA0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZXJyb3ItaGVhZGluZ1wiPjQwNCAtIE1pc3NpbmcgUmVzb3VyY2UgPC9oMj5cclxuICAgICAgICA8cD5QbGVhc2UgdHJ5IGFnYWluLCBidXQgaWYgdGhlIHByb2JsZW0gcGVyc2lzdCwgY29udGFjdCBhbiBhZG1pbmlzdHJhdG9yLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRXJyb3I0MDQuZGlzcGxheU5hbWUgPSAnRXJyb3I0MDQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3I0MDQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvZXJyb3I0MDQuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMuZmV0Y2hQYWdlRGF0YSgpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UGFnZSBjbGFzc05hbWU9XCJob21lLXBhZ2VcIiBoZWFkZXI9XCJIb21lXCI+XHJcbiAgICAgICAgPGgyPnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9oMj5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkhvbWUuZGlzcGxheU5hbWUgPSAnSG9tZSc7XHJcblxyXG5mdW5jdGlvbiBzZWxlY3QgKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1lc3NhZ2U6IHN0YXRlLmhvbWVQYWdlLm1lc3NhZ2VcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCkoSG9tZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvaG9tZS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQ29uc3RpdHVlbnRJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvY29uc3RpdHVlbnRJdGVtJztcclxuXHJcbmNsYXNzIFBvcnRGb2xpb0N1c3RvbWl6ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb25zdGl0dWVudERhdGE6IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVmc0xpc3QgPSB7fTtcclxuXHJcbiAgICB0aGlzLnJlc2V0SGFuZGxlciA9ICgpID0+IHRoaXMuX3Jlc2V0SGFuZGxlcigpO1xyXG4gICAgdGhpcy5yZWJhbGFuY2VIYW5kbGVyID0gKCkgPT4gdGhpcy5fcmViYWxhbmNlSGFuZGxlcigpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLmZldGNoUG9ydGZvbGlvRGF0YSgpKTtcclxuICB9XHJcblxyXG4gIF9yZXNldEhhbmRsZXIgKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLnJlc2V0UG9ydGZvbGlvRGF0YSgpKTtcclxuICB9XHJcblxyXG4gIF9yZWJhbGFuY2VIYW5kbGVyICgpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5yZWJhbGFuY2VDb25zdGl0dWVudHMoKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIChuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbW9kYWxEYXRhOiBuZXh0UHJvcHMubW9kYWxQb3J0Zm9saW8sXHJcbiAgICAgIGNvbnN0aXR1ZW50RGF0YTogbmV4dFByb3BzLmNvbnN0aXR1ZW50RGF0YVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlckdyaWRDb250ZW50ICgpIHtcclxuICAgIGNvbnN0IHsgY29uc3RpdHVlbnREYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGdyaWRDb250ZW50ID0gW10sXHJcbiAgICAgICAgd2VpZ2h0O1xyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiBjb25zdGl0dWVudERhdGEpIHtcclxuICAgICAgd2VpZ2h0ID0gY29uc3RpdHVlbnREYXRhW2tleV0ud2VpZ2h0O1xyXG5cclxuICAgICAgZ3JpZENvbnRlbnQucHVzaChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN0aXR1ZW50LWdyb3VwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWJhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbi12YWx1ZSBjYXRlZ29yeVwiPntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uLXZhbHVlIGxpbmtcIj48YSBocmVmPVwiXCI+ICtBZGQge2tleX08L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uLXZhbHVlIHdlaWdodFwiPnt3ZWlnaHQudG9GaXhlZCgxKX0lPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uLXZhbHVlIHdlaWdodFwiPnt3ZWlnaHQudG9GaXhlZCgxKX0lPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtYWNjb3JkXCI+XHJcbiAgICAgICAgICAgIHtjb25zdGl0dWVudERhdGFba2V5XS5saXN0Lm1hcChjb250ZW50ID0+IFxyXG4gICAgICAgICAgICAgIDxDb25zdGl0dWVudEl0ZW0ga2V5PXtjb250ZW50Lmluc3RydW1lbnQuaWR9IHR5cGU9e2tleX0gey4uLmNvbnRlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dEZWxldGU9e2NvbnN0aXR1ZW50RGF0YVtrZXldLmxpc3QubGVuZ3RoID4gMX0vPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3JpZENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWN1c3RvbWl6ZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWl6ZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+UG9ydGZvbGlvIENvbnN0aXR1ZW50czwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlc2V0SGFuZGxlcn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHJlc2V0LWJ0blwiPlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucmViYWxhbmNlSGFuZGxlcn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHJlYmFsYW5jZS1idG5cIj5SZWJhbGFuY2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zYXZlSGFuZGxlcn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHNhdmUtYnRuXCI+U2F2ZSBhbmQgQ29udGludWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWdyaWQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tdGl0bGUgY2F0ZWdvcnlcIj5DYXRlZ29yeS9TdG9jazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tdGl0bGUgbGlua1wiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tdGl0bGUgd2VpZ2h0XCI+TW9kZWwgV2VpZ2h0KCUpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbi10aXRsZSB3ZWlnaHRcIj5XZWlnaHQoMTAwICUpPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckdyaWRDb250ZW50KCl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9QYWdlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUG9ydEZvbGlvQ3VzdG9taXplLmRpc3BsYXlOYW1lID0gJ1BvcnRGb2xpb0N1c3RvbWl6ZSc7XHJcblxyXG5mdW5jdGlvbiBzZWxlY3Qoc3RhdGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbW9kYWxQb3J0Zm9saW86IHN0YXRlLmN1c3RvbWl6ZVBvcnRmb2xpby5tb2RhbFBvcnRmb2xpbyxcclxuICAgIGNvbnN0aXR1ZW50RGF0YTogc3RhdGUuY3VzdG9taXplUG9ydGZvbGlvLmNvbnN0aXR1ZW50RGF0YVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0KShQb3J0Rm9saW9DdXN0b21pemUpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL3BvcnRmb2xpb0N1c3RvbWl6ZS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUG9ydGZvbGlvSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL3BvcnRmb2xpb0l0ZW0nO1xyXG5cclxuY2xhc3MgUG9ydEZvbGlvTGlzdGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLml0ZW1DbGlja0hhbmRsZXIgPSAoaWQpID0+IHRoaXMuX2l0ZW1DbGlja0hhbmRsZXIoaWQpO1xyXG4gIH1cclxuXHJcbiAgX2l0ZW1DbGlja0hhbmRsZXIoaWQpIHtcclxuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvY3VzdG9taXplLyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRMaXN0aW5nQ29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLmxpc3RpbmdDb250ZW50Lm1hcCgoZm9saW9EYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiA8UG9ydGZvbGlvSXRlbSBrZXk9e2ZvbGlvRGF0YS5pZH0gey4uLmZvbGlvRGF0YX0gaXRlbUNsaWNrSGFuZGxlcj17dGhpcy5pdGVtQ2xpY2tIYW5kbGVyfS8+O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMuZmV0Y2hMaXN0aW5nQ29udGVudCgpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbGlzdGluZy1zZWN0aW9uXCI+XHJcbiAgICAgIDxQYWdlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLW1haW4tc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBIZXJlIGFyZSBhIGZldyByZWNvbW1lbmRhdGlvbnMgdG8gY2hvb3NlIGZyb21cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgVXNlIHRoZSBmaWx0ZXJzIHRvIGZ1cnRoZXIgem9uZSBpbiBvbmUgYSBwb3J0Zm9saW8gZGVwZW5kaW5nIG9uIHlvdXIgcHJlZmVyZW5jZXNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItZmllbGRcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+UmlzayBMZXZlbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+QWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1maWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5SZWdpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPkFsbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10YWIgYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5saXN0aW5nQ29udGVudC5sZW5ndGh9IFBvcnRmb2xpbyByZWNvbW1lbmRhdGlvbnMgYmFzZWQgb24geW91ciBwcmVmZXJlbmNlc1xyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtdGFiXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1wcmVmZXJlbmNlLWxpc3RcIj5cclxuICAgICAgICAgICAgICB7dGhpcy5nZXRMaXN0aW5nQ29udGVudCgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtYmFjay1idG5cIj5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUG9ydEZvbGlvTGlzdGluZy5kaXNwbGF5TmFtZSA9ICdQb3J0Rm9saW9MaXN0aW5nJztcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdChzdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBsaXN0aW5nQ29udGVudDogc3RhdGUucG9ydGZvbGlvTGlzdGluZy5saXN0aW5nQ29udGVudFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0KShQb3J0Rm9saW9MaXN0aW5nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9wb3J0Zm9saW9MaXN0aW5nLmpzIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgX19Sb3V0ZXJDb250ZXh0LCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5leHBvcnQgKiBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBjcmVhdGVMb2NhdGlvbiB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgSFRNTDUgaGlzdG9yeS5cbiAqL1xuXG52YXIgQnJvd3NlclJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShCcm93c2VyUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCcm93c2VyUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBCcm93c2VyUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEJyb3dzZXJSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBmb3JjZVJlZnJlc2g6IFByb3BUeXBlcy5ib29sLFxuICAgIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGtleUxlbmd0aDogUHJvcFR5cGVzLm51bWJlclxuICB9O1xuXG4gIEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8QnJvd3NlclJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgd2luZG93LmxvY2F0aW9uLmhhc2guXG4gKi9cblxudmFyIEhhc2hSb3V0ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSGFzaFJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSGFzaFJvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlSGFzaEhpc3RvcnkoX3RoaXMucHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBIYXNoUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgICAgaGlzdG9yeTogdGhpcy5oaXN0b3J5LFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSGFzaFJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBIYXNoUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGFzaFR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJoYXNoYmFuZ1wiLCBcIm5vc2xhc2hcIiwgXCJzbGFzaFwiXSlcbiAgfTtcblxuICBIYXNoUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEhhc2hSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBIYXNoUm91dGVyIGFzIFJvdXRlciB9YC5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgYSBoaXN0b3J5LWF3YXJlIDxhPi5cbiAqL1xuXG5cbnZhciBMaW5rID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKExpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpbmsoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExpbmsucHJvdG90eXBlO1xuXG4gIF9wcm90by5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LCBoaXN0b3J5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAvLyBvbkNsaWNrIHByZXZlbnRlZCBkZWZhdWx0XG4gICAgZXZlbnQuYnV0dG9uID09PSAwICYmICggLy8gaWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG4gICAgIXRoaXMucHJvcHMudGFyZ2V0IHx8IHRoaXMucHJvcHMudGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmIC8vIGxldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICAgIWlzTW9kaWZpZWRFdmVudChldmVudCkgLy8gaWdub3JlIGNsaWNrcyB3aXRoIG1vZGlmaWVyIGtleXNcbiAgICApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHRoaXMucHJvcHMucmVwbGFjZSA/IGhpc3RvcnkucmVwbGFjZSA6IGhpc3RvcnkucHVzaDtcbiAgICAgICAgbWV0aG9kKHRoaXMucHJvcHMudG8pO1xuICAgICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIHJlcGxhY2UgPSBfdGhpcyRwcm9wcy5yZXBsYWNlLFxuICAgICAgICB0byA9IF90aGlzJHByb3BzLnRvLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImlubmVyUmVmXCIsIFwicmVwbGFjZVwiLCBcInRvXCJdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfX1JvdXRlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAhY29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPExpbms+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICB2YXIgbG9jYXRpb24gPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBjcmVhdGVMb2NhdGlvbih0bywgbnVsbCwgbnVsbCwgY29udGV4dC5sb2NhdGlvbikgOiB0bztcbiAgICAgIHZhciBocmVmID0gbG9jYXRpb24gPyBjb250ZXh0Lmhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbikgOiBcIlwiO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlQ2xpY2soZXZlbnQsIGNvbnRleHQuaGlzdG9yeSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgIHJlZjogaW5uZXJSZWZcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTGluaztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgdG9UeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pO1xuICB2YXIgaW5uZXJSZWZUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY3VycmVudDogUHJvcFR5cGVzLmFueVxuICB9KV0pO1xuICBMaW5rLnByb3BUeXBlcyA9IHtcbiAgICBpbm5lclJlZjogaW5uZXJSZWZUeXBlLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHRhcmdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0bzogdG9UeXBlLmlzUmVxdWlyZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gam9pbkNsYXNzbmFtZXMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc25hbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzbmFtZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY2xhc3NuYW1lcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaTtcbiAgfSkuam9pbihcIiBcIik7XG59XG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG5cblxuZnVuY3Rpb24gTmF2TGluayhfcmVmKSB7XG4gIHZhciBfcmVmJGFyaWFDdXJyZW50ID0gX3JlZltcImFyaWEtY3VycmVudFwiXSxcbiAgICAgIGFyaWFDdXJyZW50ID0gX3JlZiRhcmlhQ3VycmVudCA9PT0gdm9pZCAwID8gXCJwYWdlXCIgOiBfcmVmJGFyaWFDdXJyZW50LFxuICAgICAgX3JlZiRhY3RpdmVDbGFzc05hbWUgPSBfcmVmLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYkYWN0aXZlQ2xhc3NOYW1lID09PSB2b2lkIDAgPyBcImFjdGl2ZVwiIDogX3JlZiRhY3RpdmVDbGFzc05hbWUsXG4gICAgICBhY3RpdmVTdHlsZSA9IF9yZWYuYWN0aXZlU3R5bGUsXG4gICAgICBjbGFzc05hbWVQcm9wID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBleGFjdCA9IF9yZWYuZXhhY3QsXG4gICAgICBpc0FjdGl2ZVByb3AgPSBfcmVmLmlzQWN0aXZlLFxuICAgICAgbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgc3RyaWN0ID0gX3JlZi5zdHJpY3QsXG4gICAgICBzdHlsZVByb3AgPSBfcmVmLnN0eWxlLFxuICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImFyaWEtY3VycmVudFwiLCBcImFjdGl2ZUNsYXNzTmFtZVwiLCBcImFjdGl2ZVN0eWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwiZXhhY3RcIiwgXCJpc0FjdGl2ZVwiLCBcImxvY2F0aW9uXCIsIFwic3RyaWN0XCIsIFwic3R5bGVcIiwgXCJ0b1wiXSk7XG5cbiAgdmFyIHBhdGggPSB0eXBlb2YgdG8gPT09IFwib2JqZWN0XCIgPyB0by5wYXRobmFtZSA6IHRvOyAvLyBSZWdleCB0YWtlbiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAvYmxvYi9tYXN0ZXIvaW5kZXguanMjTDIwMlxuXG4gIHZhciBlc2NhcGVkUGF0aCA9IHBhdGggJiYgcGF0aC5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7XG4gICAgcGF0aDogZXNjYXBlZFBhdGgsXG4gICAgZXhhY3Q6IGV4YWN0LFxuICAgIHN0cmljdDogc3RyaWN0LFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4oX3JlZjIpIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IF9yZWYyLmxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoID0gX3JlZjIubWF0Y2g7XG4gICAgICB2YXIgaXNBY3RpdmUgPSAhIShpc0FjdGl2ZVByb3AgPyBpc0FjdGl2ZVByb3AobWF0Y2gsIGxvY2F0aW9uKSA6IG1hdGNoKTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBpc0FjdGl2ZSA/IGpvaW5DbGFzc25hbWVzKGNsYXNzTmFtZVByb3AsIGFjdGl2ZUNsYXNzTmFtZSkgOiBjbGFzc05hbWVQcm9wO1xuICAgICAgdmFyIHN0eWxlID0gaXNBY3RpdmUgPyBfZXh0ZW5kcyh7fSwgc3R5bGVQcm9wLCBhY3RpdmVTdHlsZSkgOiBzdHlsZVByb3A7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBfZXh0ZW5kcyh7XG4gICAgICAgIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmIGFyaWFDdXJyZW50IHx8IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHRvOiB0b1xuICAgICAgfSwgcmVzdCkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIGFyaWFDdXJyZW50VHlwZSA9IFByb3BUeXBlcy5vbmVPZihbXCJwYWdlXCIsIFwic3RlcFwiLCBcImxvY2F0aW9uXCIsIFwiZGF0ZVwiLCBcInRpbWVcIiwgXCJ0cnVlXCJdKTtcbiAgTmF2TGluay5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgTGluay5wcm9wVHlwZXMsIHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFR5cGUsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleGFjdDogUm91dGUucHJvcFR5cGVzLmV4YWN0LFxuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHJpY3Q6IFJvdXRlLnByb3BUeXBlcy5zdHJpY3QsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEJyb3dzZXJSb3V0ZXIsIEhhc2hSb3V0ZXIsIExpbmssIE5hdkxpbmsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzbS9yZWFjdC1yb3V0ZXItZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBhY3Rpb25FdmVudHMgZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2VSZWR1Y2VyIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgbGV0IGFjdGlvblR5cGUgPSBhY3Rpb24udHlwZSxcclxuICAgICAgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcblxyXG4gIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuU0VUX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9ydGZvbGlvTGlzdGluZ1JlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRfTElTVElOR19EQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5saXN0aW5nQ29udGVudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9taXplUG9ydGZvbGlvUmVkdWNlciAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlNFVF9QT1JURk9MSU9fREFUQSkge1xyXG4gICAgbmV3U3RhdGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0V2VpZ2h0TGlzdCAoY29uc3RpdHVlbnREYXRhKSB7XHJcbiAgICBsZXQgd2VpZ2h0TGlzdCA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXMoY29uc3RpdHVlbnREYXRhKS5tYXAoa2V5ID0+IHtcclxuICAgICAgY29uc3RpdHVlbnREYXRhW2tleV0ud2VpZ2h0ID0gY29uc3RpdHVlbnREYXRhW2tleV0ubGlzdC5yZWR1Y2UoKHIsIGEpID0+IHtcclxuICAgICAgICByZXR1cm4gciArIGEud2VpZ2h0O1xyXG4gICAgICB9LCAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB3ZWlnaHRMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uc3RpdHVlbnREYXRhUmVkdWNlciAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsIHRvdGFsV2VpZ2h0LFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRfUE9SVEZPTElPX0RBVEEgfHwgYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlJFU0VUX1BPUlRGT0xJT19EQVRBKSB7XHJcbiAgICBuZXdTdGF0ZSA9IGFjdGlvbi5wYXlsb2FkLmNvbnN0aXR1ZW50cy5yZWR1Y2UoKHIsIGEpID0+IHtcclxuICAgICAgclthLmluc3RydW1lbnQudHlwZV0gPSByW2EuaW5zdHJ1bWVudC50eXBlXSB8fCB7fTtcclxuICAgICAgclthLmluc3RydW1lbnQudHlwZV0ubGlzdCA9IHJbYS5pbnN0cnVtZW50LnR5cGVdLmxpc3QgfHwgW11cclxuICAgICAgclthLmluc3RydW1lbnQudHlwZV0ubGlzdC5wdXNoKHsuLi5hfSk7XHJcbiAgICAgIHJldHVybiByO1xyXG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XHJcblxyXG4gICAgc2V0V2VpZ2h0TGlzdChuZXdTdGF0ZSk7XHJcblxyXG4gIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlVQREFURV9JVEVNX1dFSUdIVCkge1xyXG4gICAgY29uc3QgeyB0eXBlLCBpZCwgdmFsdWUgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgbmV3U3RhdGVbdHlwZV0ubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pbnN0cnVtZW50LmlkID09PSBpZCkud2VpZ2h0ID0gdmFsdWU7XHJcbiAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuREVMRVRFX0NPTlNUSVRVRU5UX0lURU0pIHtcclxuICAgIGNvbnN0IHsgdHlwZSwgaWQsIHZhbHVlIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGxldCBkZWxldGVkV2VpZ2h0O1xyXG4gICAgbmV3U3RhdGVbdHlwZV0ubGlzdC5zb21lKChpdGVtLCBpbmRleCwgbGlzdCkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5pbnN0cnVtZW50LmlkID09PSBpZCkge1xyXG4gICAgICAgIGRlbGV0ZWRXZWlnaHQgPSBpdGVtLndlaWdodDtcclxuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlJFQkFMQU5DRV9DT05TVElUVUVOVFMpIHtcclxuICAgIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5tYXAodHlwZSA9PiB7XHJcbiAgICAgIHZhciB0b3RhbFdlaWdodCA9IG5ld1N0YXRlW3R5cGVdLmxpc3QucmVkdWNlKChyLCBhKSA9PiB7IHJldHVybiByICsgYS53ZWlnaHQgfSwgMCksIHdlaWdodERpZmY7XHJcbiAgICAgIGlmICh0b3RhbFdlaWdodCA8IG5ld1N0YXRlW3R5cGVdLndlaWdodCkge1xyXG4gICAgICAgIHdlaWdodERpZmYgPSBuZXdTdGF0ZVt0eXBlXS53ZWlnaHQgLSB0b3RhbFdlaWdodDtcclxuICAgICAgICBuZXdTdGF0ZVt0eXBlXS5saXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGl0ZW0ud2VpZ2h0ICs9IHBhcnNlRmxvYXQoKChpdGVtLndlaWdodCAqIHdlaWdodERpZmYpL3RvdGFsV2VpZ2h0KS50b0ZpeGVkKDEpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBub3Qgc3VyZSBvZiB0aGUgdXNlY2FzZSBoZXJlLCBnb2luZyB3aXRoIHRoZSBhc3N1bXB0aW9uXHJcbiAgICAgICAgd2VpZ2h0RGlmZiA9IHRvdGFsV2VpZ2h0IC0gbmV3U3RhdGVbdHlwZV0ud2VpZ2h0O1xyXG4gICAgICAgIG5ld1N0YXRlW3R5cGVdLmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaXRlbS53ZWlnaHQgLT0gcGFyc2VGbG9hdCgoKGl0ZW0ud2VpZ2h0ICogd2VpZ2h0RGlmZikvdG90YWxXZWlnaHQpLnRvRml4ZWQoMSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcFN0YXRlIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgbGV0IGFjdGlvblR5cGUgPSBhY3Rpb24udHlwZSxcclxuICAgICAgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcblxyXG4gIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuTE9DQVRJT05fQ0hBTkdFKSB7XHJcbiAgICBuZXdTdGF0ZS5jdXJyZW50LnBhdGggPSBhY3Rpb24ucGF5bG9hZC5wYXRobmFtZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFSZXF1ZXN0cyAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlNFVFRJTkdfUEFHRURBVEEpIHtcclxuICAgIG5ld1N0YXRlLnNldHRpbmdzID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRfUEFHRURBVEEpIHtcclxuICAgIG5ld1N0YXRlLnNldHRpbmdzID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC9yZWR1Y2Vycy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBzdGF0ZSA9IHtcclxuICBhcHA6IHtcclxuICAgIGN1cnJlbnQ6IHtcclxuICAgICAgcGF0aDogJycsXHJcbiAgICAgIHBhZ2VUaXRsZTogJydcclxuICAgIH1cclxuICB9LFxyXG4gIGhvbWVQYWdlOiB7XHJcbiAgICBtZXNzYWdlOiBcIlRlbXBsYXRlIE1lc3NhZ2VcIlxyXG4gIH0sXHJcbiAgcG9ydGZvbGlvTGlzdGluZzoge1xyXG4gICAgbGlzdGluZ0NvbnRlbnQ6IFtdXHJcbiAgfSxcclxuICBjdXN0b21pemVQb3J0Zm9saW86IHtcclxuICAgIG1vZGFsUG9ydGZvbGlvOiB7fSxcclxuICAgIGNvbnN0aXR1ZW50RGF0YToge31cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdGF0ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC9zdG9yZXMvZGVmYXVsdFN0YXRlLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFBvcnRGb2xpb0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5lbGlnaWJpbGl0eU1hcHBpbmcgPSB7XHJcbiAgICAgIGF2YWlsYWJsZTogJ0F2YWlsYWJsZSBmb3IgYWxsIGludmVzdG9ycycsXHJcbiAgICAgIHJlc3RyaWN0ZWQ6ICdSZXN0cmljdGVkIHRvIEFjY3JlZGl0ZWQgaW52ZXN0b3JzICdcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMuaXRlbUNsaWNrSGFuZGxlcigpO1xyXG4gIH1cclxuXHJcbiAgaXRlbUNsaWNrSGFuZGxlciAoKSB7XHJcbiAgICB0aGlzLnByb3BzLml0ZW1DbGlja0hhbmRsZXIodGhpcy5wcm9wcy5pZCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWhlYWRcIj5cclxuICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5pbWFnZVVybH0gY2xhc3NOYW1lPVwiZm9saW8taXRlbS1pbWFnZVwiPlxyXG4gICAgICAgIDwvaW1nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9saW8taXRlbS10aXRsZVwiPjxzcGFuPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1ib2R5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXJlY29yZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtbGFiZWxcIj5Wb2xhdGFsaXR5PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC12YWx1ZVwiPnt0aGlzLnByb3BzLnZvbGF0YWxpdHl9JTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1yZWNvcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLWxhYmVsXCI+MSBNb250aCBSZXR1cm48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLXZhbHVlXCI+e3RoaXMucHJvcHMubW9udGhSZXR1cm59JTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1yZWNvcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLWxhYmVsXCI+TWVhbiBSZXR1cm48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLXZhbHVlXCI+e3RoaXMucHJvcHMubWVhblJldHVybn0lPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXJlY29yZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvcmQtbGFiZWxcIj5NaW5pbXVtIEludmVzdG1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb3JkLXZhbHVlXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57dGhpcy5wcm9wcy5jdXJyZW5jeX08L3NwYW4+e3RoaXMucHJvcHMubWluSW52ZXN0bWVudH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tcmVjb3JkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC1sYWJlbFwiPkVsaWdpYmlsaXR5PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC12YWx1ZVwiPnt0aGlzLmVsaWdpYmlsaXR5TWFwcGluZ1t0aGlzLnByb3BzLmVsaWdpYmlsaXR5XX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1hY3Rpb25cIiBvbkNsaWNrPXt0aGlzLmNsaWNrSGFuZGxlcn0+RXhwbG9yZSBJbnZlc3RtZW50IElkZWE8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblBvcnRGb2xpb0l0ZW0uZGlzcGxheU5hbWUgPSAnUG9ydEZvbGlvSXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Rm9saW9JdGVtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL2NvbXBvbmVudHMvcG9ydGZvbGlvSXRlbS5qcyIsIi8qIGdsb2JhbCBsb2NhdGlvbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmVzL2luZGV4JztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9ob21lJztcclxuaW1wb3J0IEVycm9yNDA0IGZyb20gJy4vcGFnZXMvZXJyb3I0MDQnO1xyXG5pbXBvcnQgUG9ydGZvbGlvQ3VzdG9taXplIGZyb20gJy4vcGFnZXMvcG9ydGZvbGlvQ3VzdG9taXplJztcclxuaW1wb3J0IFBvcnRmb2xpb0xpc3RpbmcgZnJvbSAnLi9wYWdlcy9wb3J0Zm9saW9MaXN0aW5nJztcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuXHJcbmNvbnN0IGhpc3RvcnkgPSBzeW5jSGlzdG9yeVdpdGhTdG9yZShjcmVhdGVCcm93c2VySGlzdG9yeSgpLCBzdG9yZSk7XHJcbmNvbnNvbGUubG9nKGhpc3RvcnkpO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1jb250YWluZXJcIj5cclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcbiAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtQb3J0Zm9saW9MaXN0aW5nfSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2N1c3RvbWl6ZS86aWRcIiBjb21wb25lbnQ9e1BvcnRmb2xpb0N1c3RvbWl6ZX0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi80MDRcIiBjb21wb25lbnQ9e0Vycm9yNDA0fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBub21hdGNoIGNvbXBvbmVudD17RXJyb3I0MDR9IC8+XHJcbiAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQXBwLmRpc3BsYXlOYW1lID0gJ0FwcCc7XHJcblxyXG4vLyBCb290c3RyYXAgY2xpZW50XHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgcHJvcHMgPSB7XHJcbiAgICAgIHBhdGg6IGxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICB9O1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBwcm9wcyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdFZpZXcnKSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3ZpZXdzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAgeyBpZDogMSxcclxuICAgICAgbmFtZTogJ0hPTkdLT05HIFRFQ0hOT0xPR1knLFxyXG4gICAgICB2b2xhdGlsaXR5OiAnMjYuOCUnLFxyXG4gICAgICBtZWFuX3JldHVybjogJzIuOTYlJyxcclxuICAgICAgY3VycmVuY3k6ICdTR0QnLFxyXG4gICAgICBjb25zdGl0dWVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IDMsXHJcbiAgICAgICAgICBpbnN0cnVtZW50OiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ1NYIGNvcnAnLFxyXG4gICAgICAgICAgICB0eXBlOiAnRXF1aXR5J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgd2VpZ2h0OiAxNyxcclxuICAgICAgICAgIGluc3RydW1lbnQ6IHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIG5hbWU6ICdjdW1taW5zIEluYycsXHJcbiAgICAgICAgICAgIHR5cGU6ICdFcXVpdHknXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IDEwLFxyXG4gICAgICAgICAgaW5zdHJ1bWVudDoge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgbmFtZTogJ0VhdG9uIENvcnAgUExDJyxcclxuICAgICAgICAgICAgdHlwZTogJ0VxdWl0eSdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdlaWdodDogMTAsXHJcbiAgICAgICAgICBpbnN0cnVtZW50OiB7XHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBuYW1lOiAnRmVkeCBjb3JwJyxcclxuICAgICAgICAgICAgdHlwZTogJ0VxdWl0eSdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdlaWdodDogMTAsXHJcbiAgICAgICAgICBpbnN0cnVtZW50OiB7XHJcbiAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICBuYW1lOiAnSGFyaXMgY29ycCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdFcXVpdHknXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IDEwLFxyXG4gICAgICAgICAgaW5zdHJ1bWVudDoge1xyXG4gICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgbmFtZTogJ05vcmZvbGsgU291dGhlcm4gQ29ycCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdCb25kJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgd2VpZ2h0OiA1LFxyXG4gICAgICAgICAgaW5zdHJ1bWVudDoge1xyXG4gICAgICAgICAgICBpZDogNyxcclxuICAgICAgICAgICAgbmFtZTogJ0dlbmVyYWwgRHluYW1pY3MnLFxyXG4gICAgICAgICAgICB0eXBlOiAnQm9uZCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdlaWdodDogMTUsXHJcbiAgICAgICAgICBpbnN0cnVtZW50OiB7XHJcbiAgICAgICAgICAgIGlkOiA4LFxyXG4gICAgICAgICAgICBuYW1lOiAnaGFsJyxcclxuICAgICAgICAgICAgdHlwZTogJ0JvbmQnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IDIwLFxyXG4gICAgICAgICAgaW5zdHJ1bWVudDoge1xyXG4gICAgICAgICAgICBpZDogMTAsXHJcbiAgICAgICAgICAgIG5hbWU6ICdVU0QgQ0FTSCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdDQVNIJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG5dXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL21vY2tkYXRhL2N1c3RvbWl6ZS5qcyIsImxldCBsaXN0Q29udGVudCA9IFtdO1xyXG5cclxuZm9yIChsZXQgaSA9IDE7IGkgPD0gMTQ7IGkrKykge1xyXG4gIGxpc3RDb250ZW50LnB1c2goe1xyXG4gICAgaWQ6IGksXHJcbiAgICB0aXRsZTogJ0hvbmcgS29uZyBUZWNobm9sb2d5JyxcclxuICAgIGltYWdlVXJsOiAnYnVpbGQvaW1hZ2VzL0hLU1BuaWdodHZpZXcycGFub3JhbWEuanBnJyxcclxuICAgIHZvbGF0YWxpdHk6ICcyNi44NCcsXHJcbiAgICBtb250aFJldHVybjogJzIuOTYnLFxyXG4gICAgbWVhblJldHVybjogJzM3LjI5JyxcclxuICAgIG1pbkludmVzdG1lbnQ6ICcxNzAwMDAnLFxyXG4gICAgY3VycmVuY3k6ICdIS0QnLFxyXG4gICAgZWxpZ2liaWxpdHk6ICdhdmFpbGFibGUnXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpc3RDb250ZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9tb2NrZGF0YS9saXN0aW5nLmpzIiwiLyoqIFRoaXMgcHJvdmlkZXMgdGhlIHZhcmlvdXMgcmVkdXggYWN0aW9ucyB0byB0cmlnZ2VyIGFwcCBzdGF0ZSBjaGFuZ2VzIGJ5IHRoZSByZWR1eCByZWR1Y2VyXHJcbiAqIEBtb2R1bGUgUmVkdXggYWN0aW9uc1xyXG4gKi9cclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBsaXN0aW5nTW9ja0RhdGEgZnJvbSAnLi4vLi4vbW9ja2RhdGEvbGlzdGluZyc7XHJcbmltcG9ydCBwb3J0Zm9saW9Nb2RhbERhdGEgZnJvbSAnLi4vLi4vbW9ja2RhdGEvY3VzdG9taXplJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9DSEFOR0UgPSAnQEByb3V0ZXIvTE9DQVRJT05fQ0hBTkdFJztcclxuZXhwb3J0IGNvbnN0IFNFVF9MSVNUSU5HX0RBVEEgPSAnU0VUX0xJU1RJTkdfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUE9SVEZPTElPX0RBVEEgPSAnU0VUX1BPUlRGT0xJT19EQVRBJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9JVEVNX1dFSUdIVCA9ICdVUERBVEVfSVRFTV9XRUlHSFQnO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfUE9SVEZPTElPX0RBVEEgPSAnUkVTRVRfUE9SVEZPTElPX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgUkVCQUxBTkNFX0NPTlNUSVRVRU5UUyA9ICdSRUJBTEFOQ0VfQ09OU1RJVFVFTlRTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9DT05TVElUVUVOVF9JVEVNID0gJ0RFTEVURV9DT05TVElUVUVOVF9JVEVNJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hMaXN0aW5nQ29udGVudCAoKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTRVRfTElTVElOR19EQVRBLFxyXG4gICAgICBwYXlsb2FkOiBsaXN0aW5nTW9ja0RhdGFcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvcnRmb2xpb0RhdGEgKCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0VUX1BPUlRGT0xJT19EQVRBLFxyXG4gICAgICBwYXlsb2FkOiBwb3J0Zm9saW9Nb2RhbERhdGFbMF1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldFBvcnRmb2xpb0RhdGEgKCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gsIGdldFN0YXRlKSB7XHJcbiAgICBsZXQgeyBjdXN0b21pemVQb3J0Zm9saW8gfSA9IGdldFN0YXRlKCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFU0VUX1BPUlRGT0xJT19EQVRBLFxyXG4gICAgICBwYXlsb2FkOiBjdXN0b21pemVQb3J0Zm9saW8ubW9kYWxQb3J0Zm9saW9cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJdGVtV2VpZ2h0IChkYXRhKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUERBVEVfSVRFTV9XRUlHSFQsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb25zdGl0dWVudEl0ZW0gKGRhdGEpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IERFTEVURV9DT05TVElUVUVOVF9JVEVNLFxyXG4gICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmViYWxhbmNlQ29uc3RpdHVlbnRzIChkYXRhKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRUJBTEFOQ0VfQ09OU1RJVFVFTlRTLFxyXG4gICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvYWN0aW9ucy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=