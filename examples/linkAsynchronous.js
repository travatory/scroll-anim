webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(213);


/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _QueueAnim = __webpack_require__(195);
	
	var _QueueAnim2 = _interopRequireDefault(_QueueAnim);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _QueueAnim2["default"]; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(41);
	
	var _utils = __webpack_require__(197);
	
	var _animTypes = __webpack_require__(198);
	
	var _animTypes2 = _interopRequireDefault(_animTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var _ease = {
	  easeInElastic: function easeInElastic(_p, o, t) {
	    var p = _p;
	    var _p1 = o >= 1 ? o : 1;
	    var _p2 = (t || 1) / (o < 1 ? o : 1);
	    var _p3 = _p2 / Math.PI * 2 * (Math.asin(1 / _p1) || 0);
	    return -(_p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - _p3) * _p2));
	  },
	  easeOutElastic: function easeOutElastic(p, o, t) {
	    var _p1 = o >= 1 ? o : 1;
	    var _p2 = (t || 1) / (o < 1 ? o : 1);
	    var _p3 = _p2 / Math.PI * 2 * (Math.asin(1 / _p1) || 0);
	    return _p1 * Math.pow(2, -10 * p) * Math.sin((p - _p3) * _p2) + 1;
	  },
	  easeInOutElastic: function easeInOutElastic(_p, o, t) {
	    var p = _p;
	    var _p1 = o >= 1 ? o : 1;
	    var _p2 = (t || 1) / (o < 1 ? o : 1);
	    var _p3 = _p2 / Math.PI * 2 * (Math.asin(1 / _p1) || 0);
	    p *= 2;
	    return p < 1 ? -0.5 * (_p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - _p3) * _p2)) : _p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - _p3) * _p2) * 0.5 + 1;
	  },
	  easeInBounce: function easeInBounce(_p) {
	    var p = _p;
	    var __p = 1 - p;
	    if (__p < 1 / 2.75) {
	      return 1 - 7.5625 * p * p;
	    } else if (p < 2 / 2.75) {
	      return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
	    } else if (p < 2.5 / 2.75) {
	      return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
	    }
	    return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
	  },
	  easeOutBounce: function easeOutBounce(_p) {
	    var p = _p;
	    if (p < 1 / 2.75) {
	      return 7.5625 * p * p;
	    } else if (p < 2 / 2.75) {
	      return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
	    } else if (p < 2.5 / 2.75) {
	      return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
	    }
	    return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
	  },
	  easeInOutBounce: function easeInOutBounce(_p) {
	    var p = _p;
	    var invert = p < 0.5;
	    if (invert) {
	      p = 1 - p * 2;
	    } else {
	      p = p * 2 - 1;
	    }
	    if (p < 1 / 2.75) {
	      p = 7.5625 * p * p;
	    } else if (p < 2 / 2.75) {
	      p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
	    } else if (p < 2.5 / 2.75) {
	      p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
	    } else {
	      p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
	    }
	    return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
	  }
	};
	
	var velocity = void 0;
	if (typeof document !== 'undefined' && typeof window !== 'undefined') {
	  // only load velocity on the client
	  velocity = __webpack_require__(199);
	  Object.keys(_ease).forEach(function (key) {
	    if (velocity.Easings) {
	      velocity.Easings[key] = _ease[key];
	    }
	  });
	} else {
	  // provide a velocity stub for the server
	  velocity = function velocityServerDummy() {
	    var callback = arguments[arguments.length - 1];
	    // call after stack flushes
	    // in case you app depends on the asyncron nature of this function
	    setImmediate(function () {
	      return callback();
	    });
	  };
	}
	
	var BackEase = {
	  easeInBack: [0.6, -0.28, 0.735, 0.045],
	  easeOutBack: [0.175, 0.885, 0.32, 1.275],
	  easeInOutBack: [0.68, -0.55, 0.265, 1.55]
	};
	
	var placeholderKeyPrefix = 'ant-queue-anim-placeholder-';
	
	var QueueAnim = function (_React$Component) {
	  _inherits(QueueAnim, _React$Component);
	
	  function QueueAnim() {
	    _classCallCheck(this, QueueAnim);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	    _this.keysAnimating = [];
	    _this.placeholderTimeoutIds = {};
	
	    // 第一次进入，默认进场
	    var children = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(_this.props));
	    children.forEach(function (child) {
	      if (!child || !child.key) {
	        return;
	      }
	      _this.keysToEnter.push(child.key);
	    });
	
	    _this.originalChildren = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(_this.props));
	
	    _this.state = {
	      children: children,
	      childrenShow: {}
	    };
	
	    ['performEnter', 'performLeave', 'enterBegin', 'leaveComplete'].forEach(function (method) {
	      return _this[method] = _this[method].bind(_this);
	    });
	    return _this;
	  }
	
	  QueueAnim.prototype.componentDidMount = function componentDidMount() {
	    this.componentDidUpdate();
	  };
	
	  QueueAnim.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    var nextChildren = (0, _utils.toArrayChildren)(nextProps.children);
	    var currentChildren = this.originalChildren;
	    var newChildren = (0, _utils.mergeChildren)(currentChildren, nextChildren);
	
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    this.keysAnimating = [];
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (c) {
	      if (!c) {
	        return;
	      }
	      var key = c.key;
	      var hasPrev = (0, _utils.findChildInChildrenByKey)(currentChildren, key);
	      if (!hasPrev && key) {
	        _this2.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (c) {
	      if (!c) {
	        return;
	      }
	      var key = c.key;
	      var hasNext = (0, _utils.findChildInChildrenByKey)(nextChildren, key);
	      if (!hasNext && key) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  };
	
	  QueueAnim.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.originalChildren = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(this.props));
	    var keysToEnter = Array.prototype.slice.call(this.keysToEnter);
	    var keysToLeave = Array.prototype.slice.call(this.keysToLeave);
	    if (this.keysAnimating.length === 0) {
	      this.keysAnimating = keysToEnter.concat(keysToLeave);
	    }
	    keysToEnter.forEach(this.performEnter);
	    keysToLeave.forEach(this.performLeave);
	  };
	
	  QueueAnim.prototype.componentWillUnmount = function componentWillUnmount() {
	    var _this3 = this;
	
	    [].concat(this.keysToEnter, this.keysToLeave, this.keysAnimating).forEach(function (key) {
	      return _this3.refs[key] && velocity((0, _reactDom.findDOMNode)(_this3.refs[key]), 'stop');
	    });
	    Object.keys(this.placeholderTimeoutIds).forEach(function (key) {
	      clearTimeout(_this3.placeholderTimeoutIds[key]);
	    });
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    this.keysAnimating = [];
	  };
	
	  QueueAnim.prototype.getVelocityConfig = function getVelocityConfig(index) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    if (this.props.animConfig) {
	      return _utils.transformArguments.apply(undefined, [this.props.animConfig].concat(args))[index];
	    }
	    return _animTypes2["default"][_utils.transformArguments.apply(undefined, [this.props.type].concat(args))[index]];
	  };
	
	  QueueAnim.prototype.getVelocityEnterConfig = function getVelocityEnterConfig() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return this.getVelocityConfig.apply(this, [0].concat(args));
	  };
	
	  QueueAnim.prototype.getVelocityLeaveConfig = function getVelocityLeaveConfig() {
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    var config = this.getVelocityConfig.apply(this, [1].concat(args));
	    var ret = {};
	    Object.keys(config).forEach(function (key) {
	      if (Array.isArray(config[key])) {
	        ret[key] = Array.prototype.slice.call(config[key]).reverse();
	      } else {
	        ret[key] = config[key];
	      }
	    });
	    return ret;
	  };
	
	  QueueAnim.prototype.getVelocityEasing = function getVelocityEasing() {
	    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	      args[_key4] = arguments[_key4];
	    }
	
	    return _utils.transformArguments.apply(undefined, [this.props.ease].concat(args)).map(function (easeName) {
	      if (typeof easeName === 'string') {
	        return BackEase[easeName] || easeName;
	      }
	    });
	  };
	
	  QueueAnim.prototype.performEnter = function performEnter(key, i) {
	    var interval = (0, _utils.transformArguments)(this.props.interval, key, i)[0];
	    var delay = (0, _utils.transformArguments)(this.props.delay, key, i)[0];
	    this.placeholderTimeoutIds[key] = setTimeout(this.performEnterBegin.bind(this, key, i), interval * i + delay);
	    if (this.keysToEnter.indexOf(key) >= 0) {
	      this.keysToEnter.splice(this.keysToEnter.indexOf(key), 1);
	    }
	  };
	
	  QueueAnim.prototype.performEnterBegin = function performEnterBegin(key, i) {
	    var childrenShow = this.state.childrenShow;
	    childrenShow[key] = true;
	    this.setState({ childrenShow: childrenShow }, this.realPerformEnter.bind(this, key, i));
	  };
	
	  QueueAnim.prototype.realPerformEnter = function realPerformEnter(key, i) {
	    var node = (0, _reactDom.findDOMNode)(this.refs[key]);
	    if (!node) {
	      return;
	    }
	    var duration = (0, _utils.transformArguments)(this.props.duration, key, i)[0];
	    node.style.visibility = 'hidden';
	    velocity(node, 'stop');
	    velocity(node, this.getVelocityEnterConfig(key, i), {
	      duration: duration,
	      easing: this.getVelocityEasing(key, i)[0],
	      visibility: 'visible',
	      begin: this.enterBegin.bind(this, key),
	      complete: this.enterComplete.bind(this, key)
	    });
	  };
	
	  QueueAnim.prototype.performLeave = function performLeave(key, i) {
	    clearTimeout(this.placeholderTimeoutIds[key]);
	    delete this.placeholderTimeoutIds[key];
	    var node = (0, _reactDom.findDOMNode)(this.refs[key]);
	    if (!node) {
	      return;
	    }
	    var interval = (0, _utils.transformArguments)(this.props.interval, key, i)[1];
	    var delay = (0, _utils.transformArguments)(this.props.delay, key, i)[1];
	    var duration = (0, _utils.transformArguments)(this.props.duration, key, i)[1];
	    var order = this.props.leaveReverse ? this.keysToLeave.length - i - 1 : i;
	    velocity(node, 'stop');
	    velocity(node, this.getVelocityLeaveConfig(key, i), {
	      delay: interval * order + delay,
	      duration: duration,
	      easing: this.getVelocityEasing(key, i)[1],
	      begin: this.leaveBegin.bind(this),
	      complete: this.leaveComplete.bind(this, key)
	    });
	  };
	
	  QueueAnim.prototype.enterBegin = function enterBegin(key, elements) {
	    var _this4 = this;
	
	    elements.forEach(function (elem) {
	      var animatingClassName = _this4.props.animatingClassName;
	      elem.className = elem.className.replace(animatingClassName[1], '');
	      if (elem.className.indexOf(animatingClassName[0]) === -1) {
	        elem.className += ' ' + animatingClassName[0];
	      }
	    });
	  };
	
	  QueueAnim.prototype.enterComplete = function enterComplete(key, elements) {
	    var _this5 = this;
	
	    if (this.keysAnimating.indexOf(key) >= 0) {
	      this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1);
	    }
	    elements.forEach(function (elem) {
	      elem.className = elem.className.replace(_this5.props.animatingClassName[0], '').trim();
	    });
	  };
	
	  QueueAnim.prototype.leaveBegin = function leaveBegin(elements) {
	    var _this6 = this;
	
	    elements.forEach(function (elem) {
	      var animatingClassName = _this6.props.animatingClassName;
	      elem.className = elem.className.replace(animatingClassName[0], '');
	      if (elem.className.indexOf(animatingClassName[1]) === -1) {
	        elem.className += ' ' + animatingClassName[1];
	      }
	    });
	  };
	
	  QueueAnim.prototype.leaveComplete = function leaveComplete(key, elements) {
	    var _this7 = this;
	
	    if (this.keysAnimating.indexOf(key) < 0) {
	      return;
	    }
	    this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1);
	    var childrenShow = this.state.childrenShow;
	    childrenShow[key] = false;
	    if (this.keysToLeave.indexOf(key) >= 0) {
	      this.keysToLeave.splice(this.keysToLeave.indexOf(key), 1);
	    }
	    var needLeave = this.keysToLeave.some(function (c) {
	      return childrenShow[c];
	    });
	    if (!needLeave) {
	      var currentChildren = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(this.props));
	      this.setState({
	        children: currentChildren,
	        childrenShow: childrenShow
	      });
	    }
	    elements.forEach(function (elem) {
	      elem.className = elem.className.replace(_this7.props.animatingClassName[1], '').trim();
	    });
	  };
	
	  QueueAnim.prototype.render = function render() {
	    var _this8 = this;
	
	    var childrenToRender = (0, _utils.toArrayChildren)(this.state.children).map(function (child) {
	      if (!child || !child.key) {
	        return child;
	      }
	      return _this8.state.childrenShow[child.key] ? (0, _react.cloneElement)(child, {
	        ref: child.key,
	        key: child.key
	      }) : (0, _react.createElement)('div', {
	        ref: placeholderKeyPrefix + child.key,
	        key: placeholderKeyPrefix + child.key
	      });
	    });
	
	    var tagProps = _objectWithoutProperties(this.props, []);
	
	    ['component', 'interval', 'duration', 'delay', 'type', 'animConfig', 'ease', 'leaveReverse', 'animatingClassName'].forEach(function (key) {
	      return delete tagProps[key];
	    });
	    return (0, _react.createElement)(this.props.component, _extends({}, tagProps), childrenToRender);
	  };
	
	  return QueueAnim;
	}(_react2["default"].Component);
	
	var numberOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.array]);
	var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);
	var objectOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.object, _react2["default"].PropTypes.array]);
	var funcOrString = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.func, _react2["default"].PropTypes.string]);
	var funcOrStringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.func, stringOrArray]);
	var funcOrObjectOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.func, objectOrArray]);
	var funcOrNumberOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.func, numberOrArray]);
	
	QueueAnim.propTypes = {
	  component: funcOrString,
	  interval: numberOrArray,
	  duration: funcOrNumberOrArray,
	  delay: funcOrNumberOrArray,
	  type: funcOrStringOrArray,
	  animConfig: funcOrObjectOrArray,
	  ease: funcOrStringOrArray,
	  leaveReverse: _react2["default"].PropTypes.bool,
	  animatingClassName: _react2["default"].PropTypes.array
	};
	
	QueueAnim.defaultProps = {
	  component: 'div',
	  interval: 100,
	  duration: 450,
	  delay: 0,
	  type: 'right',
	  animConfig: null,
	  ease: 'easeOutQuart',
	  leaveReverse: false,
	  animatingClassName: ['queue-anim-entering', 'queue-anim-leaving']
	};
	
	exports["default"] = QueueAnim;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(196).setImmediate))

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(8).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(196).setImmediate, __webpack_require__(196).clearImmediate))

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.mergeChildren = mergeChildren;
	exports.transformArguments = transformArguments;
	exports.getChildrenFromProps = getChildrenFromProps;
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (c) {
	      if (ret || !c) {
	        return;
	      }
	      if (c.key === key) {
	        ret = c;
	      }
	    });
	  }
	  return ret;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (c) {
	    if (!c) {
	      return;
	    }
	    if (findChildInChildrenByKey(next, c.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[c.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else if (c.key) {
	      pendingChildren.push(c);
	    }
	  });
	
	  next.forEach(function (c) {
	    if (!c) {
	      return;
	    }
	    if (nextChildrenPending.hasOwnProperty(c.key)) {
	      ret = ret.concat(nextChildrenPending[c.key]);
	    }
	    ret.push(c);
	  });
	
	  // 保持原有的顺序
	  pendingChildren.forEach(function (c) {
	    var originIndex = prev.indexOf(c);
	    if (originIndex >= 0) {
	      ret.splice(originIndex, 0, c);
	    }
	  });
	
	  return ret;
	}
	
	function transformArguments(arg, key, i) {
	  var result = void 0;
	  if (typeof arg === 'function') {
	    result = arg({
	      key: key,
	      index: i
	    });
	  } else {
	    result = arg;
	  }
	  if (Array.isArray(result) && result.length === 2) {
	    return result;
	  }
	  return [result, result];
	}
	
	function getChildrenFromProps(props) {
	  return props && props.children;
	}

/***/ },

/***/ 198:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  left: {
	    opacity: [1, 0],
	    translateX: [0, -30]
	  },
	  top: {
	    opacity: [1, 0],
	    translateY: [0, -30]
	  },
	  right: {
	    opacity: [1, 0],
	    translateX: [0, 30]
	  },
	  bottom: {
	    opacity: [1, 0],
	    translateY: [0, 30]
	  },
	  alpha: {
	    opacity: [1, 0]
	  },
	  scale: {
	    opacity: [1, 0],
	    scale: [1, 0]
	  },
	  scaleBig: {
	    opacity: [1, 0],
	    scale: [1, 2]
	  },
	  scaleX: {
	    opacity: [1, 0],
	    scaleX: [1, 0]
	  },
	  scaleY: {
	    opacity: [1, 0],
	    scaleY: [1, 0]
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
	
	/*************************
	   Velocity jQuery Shim
	*************************/
	
	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
	
	/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
	/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
	/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */
	
	;(function (window) {
	    /***************
	         Setup
	    ***************/
	
	    /* If jQuery is already loaded, there's no point in loading this shim. */
	    if (window.jQuery) {
	        return;
	    }
	
	    /* jQuery base. */
	    var $ = function (selector, context) {
	        return new $.fn.init(selector, context);
	    };
	
	    /********************
	       Private Methods
	    ********************/
	
	    /* jQuery */
	    $.isWindow = function (obj) {
	        /* jshint eqeqeq: false */
	        return obj != null && obj == obj.window;
	    };
	
	    /* jQuery */
	    $.type = function (obj) {
	        if (obj == null) {
	            return obj + "";
	        }
	
	        return typeof obj === "object" || typeof obj === "function" ?
	            class2type[toString.call(obj)] || "object" :
	            typeof obj;
	    };
	
	    /* jQuery */
	    $.isArray = Array.isArray || function (obj) {
	        return $.type(obj) === "array";
	    };
	
	    /* jQuery */
	    function isArraylike (obj) {
	        var length = obj.length,
	            type = $.type(obj);
	
	        if (type === "function" || $.isWindow(obj)) {
	            return false;
	        }
	
	        if (obj.nodeType === 1 && length) {
	            return true;
	        }
	
	        return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
	    }
	
	    /***************
	       $ Methods
	    ***************/
	
	    /* jQuery: Support removed for IE<9. */
	    $.isPlainObject = function (obj) {
	        var key;
	
	        if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
	            return false;
	        }
	
	        try {
	            if (obj.constructor &&
	                !hasOwn.call(obj, "constructor") &&
	                !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
	                return false;
	            }
	        } catch (e) {
	            return false;
	        }
	
	        for (key in obj) {}
	
	        return key === undefined || hasOwn.call(obj, key);
	    };
	
	    /* jQuery */
	    $.each = function(obj, callback, args) {
	        var value,
	            i = 0,
	            length = obj.length,
	            isArray = isArraylike(obj);
	
	        if (args) {
	            if (isArray) {
	                for (; i < length; i++) {
	                    value = callback.apply(obj[i], args);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            } else {
	                for (i in obj) {
	                    value = callback.apply(obj[i], args);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            }
	
	        } else {
	            if (isArray) {
	                for (; i < length; i++) {
	                    value = callback.call(obj[i], i, obj[i]);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            } else {
	                for (i in obj) {
	                    value = callback.call(obj[i], i, obj[i]);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            }
	        }
	
	        return obj;
	    };
	
	    /* Custom */
	    $.data = function (node, key, value) {
	        /* $.getData() */
	        if (value === undefined) {
	            var id = node[$.expando],
	                store = id && cache[id];
	
	            if (key === undefined) {
	                return store;
	            } else if (store) {
	                if (key in store) {
	                    return store[key];
	                }
	            }
	        /* $.setData() */
	        } else if (key !== undefined) {
	            var id = node[$.expando] || (node[$.expando] = ++$.uuid);
	
	            cache[id] = cache[id] || {};
	            cache[id][key] = value;
	
	            return value;
	        }
	    };
	
	    /* Custom */
	    $.removeData = function (node, keys) {
	        var id = node[$.expando],
	            store = id && cache[id];
	
	        if (store) {
	            $.each(keys, function(_, key) {
	                delete store[key];
	            });
	        }
	    };
	
	    /* jQuery */
	    $.extend = function () {
	        var src, copyIsArray, copy, name, options, clone,
	            target = arguments[0] || {},
	            i = 1,
	            length = arguments.length,
	            deep = false;
	
	        if (typeof target === "boolean") {
	            deep = target;
	
	            target = arguments[i] || {};
	            i++;
	        }
	
	        if (typeof target !== "object" && $.type(target) !== "function") {
	            target = {};
	        }
	
	        if (i === length) {
	            target = this;
	            i--;
	        }
	
	        for (; i < length; i++) {
	            if ((options = arguments[i]) != null) {
	                for (name in options) {
	                    src = target[name];
	                    copy = options[name];
	
	                    if (target === copy) {
	                        continue;
	                    }
	
	                    if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
	                        if (copyIsArray) {
	                            copyIsArray = false;
	                            clone = src && $.isArray(src) ? src : [];
	
	                        } else {
	                            clone = src && $.isPlainObject(src) ? src : {};
	                        }
	
	                        target[name] = $.extend(deep, clone, copy);
	
	                    } else if (copy !== undefined) {
	                        target[name] = copy;
	                    }
	                }
	            }
	        }
	
	        return target;
	    };
	
	    /* jQuery 1.4.3 */
	    $.queue = function (elem, type, data) {
	        function $makeArray (arr, results) {
	            var ret = results || [];
	
	            if (arr != null) {
	                if (isArraylike(Object(arr))) {
	                    /* $.merge */
	                    (function(first, second) {
	                        var len = +second.length,
	                            j = 0,
	                            i = first.length;
	
	                        while (j < len) {
	                            first[i++] = second[j++];
	                        }
	
	                        if (len !== len) {
	                            while (second[j] !== undefined) {
	                                first[i++] = second[j++];
	                            }
	                        }
	
	                        first.length = i;
	
	                        return first;
	                    })(ret, typeof arr === "string" ? [arr] : arr);
	                } else {
	                    [].push.call(ret, arr);
	                }
	            }
	
	            return ret;
	        }
	
	        if (!elem) {
	            return;
	        }
	
	        type = (type || "fx") + "queue";
	
	        var q = $.data(elem, type);
	
	        if (!data) {
	            return q || [];
	        }
	
	        if (!q || $.isArray(data)) {
	            q = $.data(elem, type, $makeArray(data));
	        } else {
	            q.push(data);
	        }
	
	        return q;
	    };
	
	    /* jQuery 1.4.3 */
	    $.dequeue = function (elems, type) {
	        /* Custom: Embed element iteration. */
	        $.each(elems.nodeType ? [ elems ] : elems, function(i, elem) {
	            type = type || "fx";
	
	            var queue = $.queue(elem, type),
	                fn = queue.shift();
	
	            if (fn === "inprogress") {
	                fn = queue.shift();
	            }
	
	            if (fn) {
	                if (type === "fx") {
	                    queue.unshift("inprogress");
	                }
	
	                fn.call(elem, function() {
	                    $.dequeue(elem, type);
	                });
	            }
	        });
	    };
	
	    /******************
	       $.fn Methods
	    ******************/
	
	    /* jQuery */
	    $.fn = $.prototype = {
	        init: function (selector) {
	            /* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
	            if (selector.nodeType) {
	                this[0] = selector;
	
	                return this;
	            } else {
	                throw new Error("Not a DOM node.");
	            }
	        },
	
	        offset: function () {
	            /* jQuery altered code: Dropped disconnected DOM node checking. */
	            var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
	
	            return {
	                top: box.top + (window.pageYOffset || document.scrollTop  || 0)  - (document.clientTop  || 0),
	                left: box.left + (window.pageXOffset || document.scrollLeft  || 0) - (document.clientLeft || 0)
	            };
	        },
	
	        position: function () {
	            /* jQuery */
	            function offsetParent() {
	                var offsetParent = this.offsetParent || document;
	
	                while (offsetParent && (!offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static")) {
	                    offsetParent = offsetParent.offsetParent;
	                }
	
	                return offsetParent || document;
	            }
	
	            /* Zepto */
	            var elem = this[0],
	                offsetParent = offsetParent.apply(elem),
	                offset = this.offset(),
	                parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? { top: 0, left: 0 } : $(offsetParent).offset()
	
	            offset.top -= parseFloat(elem.style.marginTop) || 0;
	            offset.left -= parseFloat(elem.style.marginLeft) || 0;
	
	            if (offsetParent.style) {
	                parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0
	                parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0
	            }
	
	            return {
	                top: offset.top - parentOffset.top,
	                left: offset.left - parentOffset.left
	            };
	        }
	    };
	
	    /**********************
	       Private Variables
	    **********************/
	
	    /* For $.data() */
	    var cache = {};
	    $.expando = "velocity" + (new Date().getTime());
	    $.uuid = 0;
	
	    /* For $.queue() */
	    var class2type = {},
	        hasOwn = class2type.hasOwnProperty,
	        toString = class2type.toString;
	
	    var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
	    for (var i = 0; i < types.length; i++) {
	        class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
	    }
	
	    /* Makes $(node) possible, without having to call init. */
	    $.fn.init.prototype = $.fn;
	
	    /* Globalize Velocity onto the window, and assign its Utilities property. */
	    window.Velocity = { Utilities: $ };
	})(window);
	
	/******************
	    Velocity.js
	******************/
	
	;(function (factory) {
	    /* CommonJS module. */
	    if (typeof module === "object" && typeof module.exports === "object") {
	        module.exports = factory();
	    /* AMD module. */
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* Browser globals. */
	    } else {
	        factory();
	    }
	}(function() {
	return function (global, window, document, undefined) {
	
	    /***************
	        Summary
	    ***************/
	
	    /*
	    - CSS: CSS stack that works independently from the rest of Velocity.
	    - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
	      - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
	      - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
	                  Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
	      - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	    - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
	    - completeCall(): Handles the cleanup process for each Velocity call.
	    */
	
	    /*********************
	       Helper Functions
	    *********************/
	
	    /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
	    var IE = (function() {
	        if (document.documentMode) {
	            return document.documentMode;
	        } else {
	            for (var i = 7; i > 4; i--) {
	                var div = document.createElement("div");
	
	                div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
	
	                if (div.getElementsByTagName("span").length) {
	                    div = null;
	
	                    return i;
	                }
	            }
	        }
	
	        return undefined;
	    })();
	
	    /* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
	    var rAFShim = (function() {
	        var timeLast = 0;
	
	        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
	            var timeCurrent = (new Date()).getTime(),
	                timeDelta;
	
	            /* Dynamically set delay on a per-tick basis to match 60fps. */
	            /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
	            timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
	            timeLast = timeCurrent + timeDelta;
	
	            return setTimeout(function() { callback(timeCurrent + timeDelta); }, timeDelta);
	        };
	    })();
	
	    /* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
	    function compactSparseArray (array) {
	        var index = -1,
	            length = array ? array.length : 0,
	            result = [];
	
	        while (++index < length) {
	            var value = array[index];
	
	            if (value) {
	                result.push(value);
	            }
	        }
	
	        return result;
	    }
	
	    function sanitizeElements (elements) {
	        /* Unwrap jQuery/Zepto objects. */
	        if (Type.isWrapped(elements)) {
	            elements = [].slice.call(elements);
	        /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
	        } else if (Type.isNode(elements)) {
	            elements = [ elements ];
	        }
	
	        return elements;
	    }
	
	    var Type = {
	        isString: function (variable) {
	            return (typeof variable === "string");
	        },
	        isArray: Array.isArray || function (variable) {
	            return Object.prototype.toString.call(variable) === "[object Array]";
	        },
	        isFunction: function (variable) {
	            return Object.prototype.toString.call(variable) === "[object Function]";
	        },
	        isNode: function (variable) {
	            return variable && variable.nodeType;
	        },
	        /* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
	        isNodeList: function (variable) {
	            return typeof variable === "object" &&
	                /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) &&
	                variable.length !== undefined &&
	                (variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
	        },
	        /* Determine if variable is a wrapped jQuery or Zepto element. */
	        isWrapped: function (variable) {
	            return variable && (variable.jquery || (window.Zepto && window.Zepto.zepto.isZ(variable)));
	        },
	        isSVG: function (variable) {
	            return window.SVGElement && (variable instanceof window.SVGElement);
	        },
	        isEmptyObject: function (variable) {
	            for (var name in variable) {
	                return false;
	            }
	
	            return true;
	        }
	    };
	
	    /*****************
	       Dependencies
	    *****************/
	
	    var $,
	        isJQuery = false;
	
	    if (global.fn && global.fn.jquery) {
	        $ = global;
	        isJQuery = true;
	    } else {
	        $ = window.Velocity.Utilities;
	    }
	
	    if (IE <= 8 && !isJQuery) {
	        throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
	    } else if (IE <= 7) {
	        /* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
	        jQuery.fn.velocity = jQuery.fn.animate;
	
	        /* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
	        return;
	    }
	
	    /*****************
	        Constants
	    *****************/
	
	    var DURATION_DEFAULT = 400,
	        EASING_DEFAULT = "swing";
	
	    /*************
	        State
	    *************/
	
	    var Velocity = {
	        /* Container for page-wide Velocity state data. */
	        State: {
	            /* Detect mobile devices to determine if mobileHA should be turned on. */
	            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	            /* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
	            isAndroid: /Android/i.test(navigator.userAgent),
	            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
	            isChrome: window.chrome,
	            isFirefox: /Firefox/i.test(navigator.userAgent),
	            /* Create a cached element for re-use when checking for CSS property prefixes. */
	            prefixElement: document.createElement("div"),
	            /* Cache every prefix match to avoid repeating lookups. */
	            prefixMatches: {},
	            /* Cache the anchor used for animating window scrolling. */
	            scrollAnchor: null,
	            /* Cache the browser-specific property names associated with the scroll anchor. */
	            scrollPropertyLeft: null,
	            scrollPropertyTop: null,
	            /* Keep track of whether our RAF tick is running. */
	            isTicking: false,
	            /* Container for every in-progress call to Velocity. */
	            calls: []
	        },
	        /* Velocity's custom CSS stack. Made global for unit testing. */
	        CSS: { /* Defined below. */ },
	        /* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
	        Utilities: $,
	        /* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
	        Redirects: { /* Manually registered by the user. */ },
	        Easings: { /* Defined below. */ },
	        /* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
	        Promise: window.Promise,
	        /* Velocity option defaults, which can be overriden by the user. */
	        defaults: {
	            queue: "",
	            duration: DURATION_DEFAULT,
	            easing: EASING_DEFAULT,
	            begin: undefined,
	            complete: undefined,
	            progress: undefined,
	            display: undefined,
	            visibility: undefined,
	            loop: false,
	            delay: false,
	            mobileHA: true,
	            /* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
	            _cacheValues: true
	        },
	        /* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
	        init: function (element) {
	            $.data(element, "velocity", {
	                /* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
	                isSVG: Type.isSVG(element),
	                /* Keep track of whether the element is currently being animated by Velocity.
	                   This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
	                isAnimating: false,
	                /* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
	                computedStyle: null,
	                /* Tween data is cached for each animation on the element so that data can be passed across calls --
	                   in particular, end values are used as subsequent start values in consecutive Velocity calls. */
	                tweensContainer: null,
	                /* The full root property values of each CSS hook being animated on this element are cached so that:
	                   1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
	                   2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
	                rootPropertyValueCache: {},
	                /* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
	                transformCache: {}
	            });
	        },
	        /* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
	        hook: null, /* Defined below. */
	        /* Velocity-wide animation time remapping for testing purposes. */
	        mock: false,
	        version: { major: 1, minor: 2, patch: 2 },
	        /* Set to 1 or 2 (most verbose) to output debug info to console. */
	        debug: false
	    };
	
	    /* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
	    if (window.pageYOffset !== undefined) {
	        Velocity.State.scrollAnchor = window;
	        Velocity.State.scrollPropertyLeft = "pageXOffset";
	        Velocity.State.scrollPropertyTop = "pageYOffset";
	    } else {
	        Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
	        Velocity.State.scrollPropertyLeft = "scrollLeft";
	        Velocity.State.scrollPropertyTop = "scrollTop";
	    }
	
	    /* Shorthand alias for jQuery's $.data() utility. */
	    function Data (element) {
	        /* Hardcode a reference to the plugin name. */
	        var response = $.data(element, "velocity");
	
	        /* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
	        return response === null ? undefined : response;
	    };
	
	    /**************
	        Easing
	    **************/
	
	    /* Step easing generator. */
	    function generateStep (steps) {
	        return function (p) {
	            return Math.round(p * steps) * (1 / steps);
	        };
	    }
	
	    /* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
	    function generateBezier (mX1, mY1, mX2, mY2) {
	        var NEWTON_ITERATIONS = 4,
	            NEWTON_MIN_SLOPE = 0.001,
	            SUBDIVISION_PRECISION = 0.0000001,
	            SUBDIVISION_MAX_ITERATIONS = 10,
	            kSplineTableSize = 11,
	            kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
	            float32ArraySupported = "Float32Array" in window;
	
	        /* Must contain four arguments. */
	        if (arguments.length !== 4) {
	            return false;
	        }
	
	        /* Arguments must be numbers. */
	        for (var i = 0; i < 4; ++i) {
	            if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
	                return false;
	            }
	        }
	
	        /* X values must be in the [0, 1] range. */
	        mX1 = Math.min(mX1, 1);
	        mX2 = Math.min(mX2, 1);
	        mX1 = Math.max(mX1, 0);
	        mX2 = Math.max(mX2, 0);
	
	        var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
	
	        function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
	        function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
	        function C (aA1)      { return 3.0 * aA1; }
	
	        function calcBezier (aT, aA1, aA2) {
	            return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
	        }
	
	        function getSlope (aT, aA1, aA2) {
	            return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
	        }
	
	        function newtonRaphsonIterate (aX, aGuessT) {
	            for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
	                var currentSlope = getSlope(aGuessT, mX1, mX2);
	
	                if (currentSlope === 0.0) return aGuessT;
	
	                var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	                aGuessT -= currentX / currentSlope;
	            }
	
	            return aGuessT;
	        }
	
	        function calcSampleValues () {
	            for (var i = 0; i < kSplineTableSize; ++i) {
	                mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
	            }
	        }
	
	        function binarySubdivide (aX, aA, aB) {
	            var currentX, currentT, i = 0;
	
	            do {
	                currentT = aA + (aB - aA) / 2.0;
	                currentX = calcBezier(currentT, mX1, mX2) - aX;
	                if (currentX > 0.0) {
	                  aB = currentT;
	                } else {
	                  aA = currentT;
	                }
	            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	
	            return currentT;
	        }
	
	        function getTForX (aX) {
	            var intervalStart = 0.0,
	                currentSample = 1,
	                lastSample = kSplineTableSize - 1;
	
	            for (; currentSample != lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
	                intervalStart += kSampleStepSize;
	            }
	
	            --currentSample;
	
	            var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]),
	                guessForT = intervalStart + dist * kSampleStepSize,
	                initialSlope = getSlope(guessForT, mX1, mX2);
	
	            if (initialSlope >= NEWTON_MIN_SLOPE) {
	                return newtonRaphsonIterate(aX, guessForT);
	            } else if (initialSlope == 0.0) {
	                return guessForT;
	            } else {
	                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
	            }
	        }
	
	        var _precomputed = false;
	
	        function precompute() {
	            _precomputed = true;
	            if (mX1 != mY1 || mX2 != mY2) calcSampleValues();
	        }
	
	        var f = function (aX) {
	            if (!_precomputed) precompute();
	            if (mX1 === mY1 && mX2 === mY2) return aX;
	            if (aX === 0) return 0;
	            if (aX === 1) return 1;
	
	            return calcBezier(getTForX(aX), mY1, mY2);
	        };
	
	        f.getControlPoints = function() { return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }]; };
	
	        var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
	        f.toString = function () { return str; };
	
	        return f;
	    }
	
	    /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
	    /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
	       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
	    var generateSpringRK4 = (function () {
	        function springAccelerationForState (state) {
	            return (-state.tension * state.x) - (state.friction * state.v);
	        }
	
	        function springEvaluateStateWithDerivative (initialState, dt, derivative) {
	            var state = {
	                x: initialState.x + derivative.dx * dt,
	                v: initialState.v + derivative.dv * dt,
	                tension: initialState.tension,
	                friction: initialState.friction
	            };
	
	            return { dx: state.v, dv: springAccelerationForState(state) };
	        }
	
	        function springIntegrateState (state, dt) {
	            var a = {
	                    dx: state.v,
	                    dv: springAccelerationForState(state)
	                },
	                b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
	                c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
	                d = springEvaluateStateWithDerivative(state, dt, c),
	                dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
	                dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
	
	            state.x = state.x + dxdt * dt;
	            state.v = state.v + dvdt * dt;
	
	            return state;
	        }
	
	        return function springRK4Factory (tension, friction, duration) {
	
	            var initState = {
	                    x: -1,
	                    v: 0,
	                    tension: null,
	                    friction: null
	                },
	                path = [0],
	                time_lapsed = 0,
	                tolerance = 1 / 10000,
	                DT = 16 / 1000,
	                have_duration, dt, last_state;
	
	            tension = parseFloat(tension) || 500;
	            friction = parseFloat(friction) || 20;
	            duration = duration || null;
	
	            initState.tension = tension;
	            initState.friction = friction;
	
	            have_duration = duration !== null;
	
	            /* Calculate the actual time it takes for this animation to complete with the provided conditions. */
	            if (have_duration) {
	                /* Run the simulation without a duration. */
	                time_lapsed = springRK4Factory(tension, friction);
	                /* Compute the adjusted time delta. */
	                dt = time_lapsed / duration * DT;
	            } else {
	                dt = DT;
	            }
	
	            while (true) {
	                /* Next/step function .*/
	                last_state = springIntegrateState(last_state || initState, dt);
	                /* Store the position. */
	                path.push(1 + last_state.x);
	                time_lapsed += 16;
	                /* If the change threshold is reached, break. */
	                if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
	                    break;
	                }
	            }
	
	            /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
	               computed path and returns a snapshot of the position according to a given percentComplete. */
	            return !have_duration ? time_lapsed : function(percentComplete) { return path[ (percentComplete * (path.length - 1)) | 0 ]; };
	        };
	    }());
	
	    /* jQuery easings. */
	    Velocity.Easings = {
	        linear: function(p) { return p; },
	        swing: function(p) { return 0.5 - Math.cos( p * Math.PI ) / 2 },
	        /* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
	        spring: function(p) { return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6)); }
	    };
	
	    /* CSS3 and Robert Penner easings. */
	    $.each(
	        [
	            [ "ease", [ 0.25, 0.1, 0.25, 1.0 ] ],
	            [ "ease-in", [ 0.42, 0.0, 1.00, 1.0 ] ],
	            [ "ease-out", [ 0.00, 0.0, 0.58, 1.0 ] ],
	            [ "ease-in-out", [ 0.42, 0.0, 0.58, 1.0 ] ],
	            [ "easeInSine", [ 0.47, 0, 0.745, 0.715 ] ],
	            [ "easeOutSine", [ 0.39, 0.575, 0.565, 1 ] ],
	            [ "easeInOutSine", [ 0.445, 0.05, 0.55, 0.95 ] ],
	            [ "easeInQuad", [ 0.55, 0.085, 0.68, 0.53 ] ],
	            [ "easeOutQuad", [ 0.25, 0.46, 0.45, 0.94 ] ],
	            [ "easeInOutQuad", [ 0.455, 0.03, 0.515, 0.955 ] ],
	            [ "easeInCubic", [ 0.55, 0.055, 0.675, 0.19 ] ],
	            [ "easeOutCubic", [ 0.215, 0.61, 0.355, 1 ] ],
	            [ "easeInOutCubic", [ 0.645, 0.045, 0.355, 1 ] ],
	            [ "easeInQuart", [ 0.895, 0.03, 0.685, 0.22 ] ],
	            [ "easeOutQuart", [ 0.165, 0.84, 0.44, 1 ] ],
	            [ "easeInOutQuart", [ 0.77, 0, 0.175, 1 ] ],
	            [ "easeInQuint", [ 0.755, 0.05, 0.855, 0.06 ] ],
	            [ "easeOutQuint", [ 0.23, 1, 0.32, 1 ] ],
	            [ "easeInOutQuint", [ 0.86, 0, 0.07, 1 ] ],
	            [ "easeInExpo", [ 0.95, 0.05, 0.795, 0.035 ] ],
	            [ "easeOutExpo", [ 0.19, 1, 0.22, 1 ] ],
	            [ "easeInOutExpo", [ 1, 0, 0, 1 ] ],
	            [ "easeInCirc", [ 0.6, 0.04, 0.98, 0.335 ] ],
	            [ "easeOutCirc", [ 0.075, 0.82, 0.165, 1 ] ],
	            [ "easeInOutCirc", [ 0.785, 0.135, 0.15, 0.86 ] ]
	        ], function(i, easingArray) {
	            Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
	        });
	
	    /* Determine the appropriate easing type given an easing input. */
	    function getEasing(value, duration) {
	        var easing = value;
	
	        /* The easing option can either be a string that references a pre-registered easing,
	           or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
	        if (Type.isString(value)) {
	            /* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
	            if (!Velocity.Easings[value]) {
	                easing = false;
	            }
	        } else if (Type.isArray(value) && value.length === 1) {
	            easing = generateStep.apply(null, value);
	        } else if (Type.isArray(value) && value.length === 2) {
	            /* springRK4 must be passed the animation's duration. */
	            /* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
	               function generated with default tension and friction values. */
	            easing = generateSpringRK4.apply(null, value.concat([ duration ]));
	        } else if (Type.isArray(value) && value.length === 4) {
	            /* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
	            easing = generateBezier.apply(null, value);
	        } else {
	            easing = false;
	        }
	
	        /* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
	           if the Velocity-wide default has been incorrectly modified. */
	        if (easing === false) {
	            if (Velocity.Easings[Velocity.defaults.easing]) {
	                easing = Velocity.defaults.easing;
	            } else {
	                easing = EASING_DEFAULT;
	            }
	        }
	
	        return easing;
	    }
	
	    /*****************
	        CSS Stack
	    *****************/
	
	    /* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
	       It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
	    /* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
	    var CSS = Velocity.CSS = {
	
	        /*************
	            RegEx
	        *************/
	
	        RegEx: {
	            isHex: /^#([A-f\d]{3}){1,2}$/i,
	            /* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
	            valueUnwrap: /^[A-z]+\((.*)\)$/i,
	            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
	            /* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
	            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
	        },
	
	        /************
	            Lists
	        ************/
	
	        Lists: {
	            colors: [ "fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ],
	            transformsBase: [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ],
	            transforms3D: [ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]
	        },
	
	        /************
	            Hooks
	        ************/
	
	        /* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
	           (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
	        /* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
	           tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
	        Hooks: {
	            /********************
	                Registration
	            ********************/
	
	            /* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
	            /* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
	            templates: {
	                "textShadow": [ "Color X Y Blur", "black 0px 0px 0px" ],
	                "boxShadow": [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],
	                "clip": [ "Top Right Bottom Left", "0px 0px 0px 0px" ],
	                "backgroundPosition": [ "X Y", "0% 0%" ],
	                "transformOrigin": [ "X Y Z", "50% 50% 0px" ],
	                "perspectiveOrigin": [ "X Y", "50% 50%" ]
	            },
	
	            /* A "registered" hook is one that has been converted from its template form into a live,
	               tweenable property. It contains data to associate it with its root property. */
	            registered: {
	                /* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
	                   which consists of the subproperty's name, the associated root property's name,
	                   and the subproperty's position in the root's value. */
	            },
	            /* Convert the templates into individual hooks then append them to the registered object above. */
	            register: function () {
	                /* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
	                   currently set to "transparent" default to their respective template below when color-animated,
	                   and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
	                   which is almost always set closer to black than white. */
	                for (var i = 0; i < CSS.Lists.colors.length; i++) {
	                    var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
	                    CSS.Hooks.templates[CSS.Lists.colors[i]] = [ "Red Green Blue Alpha", rgbComponents ];
	                }
	
	                var rootProperty,
	                    hookTemplate,
	                    hookNames;
	
	                /* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
	                   Thus, we re-arrange the templates accordingly. */
	                if (IE) {
	                    for (rootProperty in CSS.Hooks.templates) {
	                        hookTemplate = CSS.Hooks.templates[rootProperty];
	                        hookNames = hookTemplate[0].split(" ");
	
	                        var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);
	
	                        if (hookNames[0] === "Color") {
	                            /* Reposition both the hook's name and its default value to the end of their respective strings. */
	                            hookNames.push(hookNames.shift());
	                            defaultValues.push(defaultValues.shift());
	
	                            /* Replace the existing template for the hook's root property. */
	                            CSS.Hooks.templates[rootProperty] = [ hookNames.join(" "), defaultValues.join(" ") ];
	                        }
	                    }
	                }
	
	                /* Hook registration. */
	                for (rootProperty in CSS.Hooks.templates) {
	                    hookTemplate = CSS.Hooks.templates[rootProperty];
	                    hookNames = hookTemplate[0].split(" ");
	
	                    for (var i in hookNames) {
	                        var fullHookName = rootProperty + hookNames[i],
	                            hookPosition = i;
	
	                        /* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
	                           and the hook's position in its template's default value string. */
	                        CSS.Hooks.registered[fullHookName] = [ rootProperty, hookPosition ];
	                    }
	                }
	            },
	
	            /*****************************
	               Injection and Extraction
	            *****************************/
	
	            /* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
	            /* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
	            getRoot: function (property) {
	                var hookData = CSS.Hooks.registered[property];
	
	                if (hookData) {
	                    return hookData[0];
	                } else {
	                    /* If there was no hook match, return the property name untouched. */
	                    return property;
	                }
	            },
	            /* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
	               the targeted hook can be injected or extracted at its standard position. */
	            cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
	                /* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
	                if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
	                    rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
	                }
	
	                /* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
	                   default to the root's default value as defined in CSS.Hooks.templates. */
	                /* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
	                   zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
	                if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
	                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
	                }
	
	                return rootPropertyValue;
	            },
	            /* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
	            extractValue: function (fullHookName, rootPropertyValue) {
	                var hookData = CSS.Hooks.registered[fullHookName];
	
	                if (hookData) {
	                    var hookRoot = hookData[0],
	                        hookPosition = hookData[1];
	
	                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
	                    /* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
	                    return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
	                } else {
	                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
	                    return rootPropertyValue;
	                }
	            },
	            /* Inject the hook's value into its root property's value. This is used to piece back together the root property
	               once Velocity has updated one of its individually hooked values through tweening. */
	            injectValue: function (fullHookName, hookValue, rootPropertyValue) {
	                var hookData = CSS.Hooks.registered[fullHookName];
	
	                if (hookData) {
	                    var hookRoot = hookData[0],
	                        hookPosition = hookData[1],
	                        rootPropertyValueParts,
	                        rootPropertyValueUpdated;
	
	                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
	                    /* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
	                       then reconstruct the rootPropertyValue string. */
	                    rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
	                    rootPropertyValueParts[hookPosition] = hookValue;
	                    rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
	
	                    return rootPropertyValueUpdated;
	                } else {
	                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
	                    return rootPropertyValue;
	                }
	            }
	        },
	
	        /*******************
	           Normalizations
	        *******************/
	
	        /* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
	           and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
	        Normalizations: {
	            /* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
	               the targeted element (which may need to be queried), and the targeted property value. */
	            registered: {
	                clip: function (type, element, propertyValue) {
	                    switch (type) {
	                        case "name":
	                            return "clip";
	                        /* Clip needs to be unwrapped and stripped of its commas during extraction. */
	                        case "extract":
	                            var extracted;
	
	                            /* If Velocity also extracted this value, skip extraction. */
	                            if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
	                                extracted = propertyValue;
	                            } else {
	                                /* Remove the "rect()" wrapper. */
	                                extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
	
	                                /* Strip off commas. */
	                                extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
	                            }
	
	                            return extracted;
	                        /* Clip needs to be re-wrapped during injection. */
	                        case "inject":
	                            return "rect(" + propertyValue + ")";
	                    }
	                },
	
	                blur: function(type, element, propertyValue) {
	                    switch (type) {
	                        case "name":
	                            return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
	                        case "extract":
	                            var extracted = parseFloat(propertyValue);
	
	                            /* If extracted is NaN, meaning the value isn't already extracted. */
	                            if (!(extracted || extracted === 0)) {
	                                var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
	
	                                /* If the filter string had a blur component, return just the blur value and unit type. */
	                                if (blurComponent) {
	                                    extracted = blurComponent[1];
	                                /* If the component doesn't exist, default blur to 0. */
	                                } else {
	                                    extracted = 0;
	                                }
	                            }
	
	                            return extracted;
	                        /* Blur needs to be re-wrapped during injection. */
	                        case "inject":
	                            /* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
	                            if (!parseFloat(propertyValue)) {
	                                return "none";
	                            } else {
	                                return "blur(" + propertyValue + ")";
	                            }
	                    }
	                },
	
	                /* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
	                opacity: function (type, element, propertyValue) {
	                    if (IE <= 8) {
	                        switch (type) {
	                            case "name":
	                                return "filter";
	                            case "extract":
	                                /* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
	                                   Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
	                                var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);
	
	                                if (extracted) {
	                                    /* Convert to decimal value. */
	                                    propertyValue = extracted[1] / 100;
	                                } else {
	                                    /* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
	                                    propertyValue = 1;
	                                }
	
	                                return propertyValue;
	                            case "inject":
	                                /* Opacified elements are required to have their zoom property set to a non-zero value. */
	                                element.style.zoom = 1;
	
	                                /* Setting the filter property on elements with certain font property combinations can result in a
	                                   highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
	                                   value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
	                                if (parseFloat(propertyValue) >= 1) {
	                                    return "";
	                                } else {
	                                  /* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
	                                  return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
	                                }
	                        }
	                    /* With all other browsers, normalization is not required; return the same values that were passed in. */
	                    } else {
	                        switch (type) {
	                            case "name":
	                                return "opacity";
	                            case "extract":
	                                return propertyValue;
	                            case "inject":
	                                return propertyValue;
	                        }
	                    }
	                }
	            },
	
	            /*****************************
	                Batched Registrations
	            *****************************/
	
	            /* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
	            register: function () {
	
	                /*****************
	                    Transforms
	                *****************/
	
	                /* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
	                   so that they can be referenced in a properties map by their individual names. */
	                /* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
	                   setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
	                   Transform setting is batched in this way to improve performance: the transform style only needs to be updated
	                   once when multiple transform subproperties are being animated simultaneously. */
	                /* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
	                   transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
	                   from being normalized for these browsers so that tweening skips these properties altogether
	                   (since it will ignore them as being unsupported by the browser.) */
	                if (!(IE <= 9) && !Velocity.State.isGingerbread) {
	                    /* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
	                    share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
	                    CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
	                }
	
	                for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
	                    /* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
	                    paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
	                    (function() {
	                        var transformName = CSS.Lists.transformsBase[i];
	
	                        CSS.Normalizations.registered[transformName] = function (type, element, propertyValue) {
	                            switch (type) {
	                                /* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
	                                case "name":
	                                    return "transform";
	                                /* Transform values are cached onto a per-element transformCache object. */
	                                case "extract":
	                                    /* If this transform has yet to be assigned a value, return its null value. */
	                                    if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
	                                        /* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
	                                        return /^scale/i.test(transformName) ? 1 : 0;
	                                    /* When transform values are set, they are wrapped in parentheses as per the CSS spec.
	                                       Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
	                                    } else {
	                                        return Data(element).transformCache[transformName].replace(/[()]/g, "");
	                                    }
	                                case "inject":
	                                    var invalid = false;
	
	                                    /* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
	                                       Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
	                                    /* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
	                                    switch (transformName.substr(0, transformName.length - 1)) {
	                                        /* Whitelist unit types for each transform. */
	                                        case "translate":
	                                            invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
	                                            break;
	                                        /* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
	                                        case "scal":
	                                        case "scale":
	                                            /* Chrome on Android has a bug in which scaled elements blur if their initial scale
	                                               value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
	                                               and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
	                                            if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
	                                                propertyValue = 1;
	                                            }
	
	                                            invalid = !/(\d)$/i.test(propertyValue);
	                                            break;
	                                        case "skew":
	                                            invalid = !/(deg|\d)$/i.test(propertyValue);
	                                            break;
	                                        case "rotate":
	                                            invalid = !/(deg|\d)$/i.test(propertyValue);
	                                            break;
	                                    }
	
	                                    if (!invalid) {
	                                        /* As per the CSS spec, wrap the value in parentheses. */
	                                        Data(element).transformCache[transformName] = "(" + propertyValue + ")";
	                                    }
	
	                                    /* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
	                                    return Data(element).transformCache[transformName];
	                            }
	                        };
	                    })();
	                }
	
	                /*************
	                    Colors
	                *************/
	
	                /* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
	                   Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
	                for (var i = 0; i < CSS.Lists.colors.length; i++) {
	                    /* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
	                       (Otherwise, all functions would take the final for loop's colorName.) */
	                    (function () {
	                        var colorName = CSS.Lists.colors[i];
	
	                        /* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
	                        CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
	                            switch (type) {
	                                case "name":
	                                    return colorName;
	                                /* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
	                                case "extract":
	                                    var extracted;
	
	                                    /* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
	                                    if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
	                                        extracted = propertyValue;
	                                    } else {
	                                        var converted,
	                                            colorNames = {
	                                                black: "rgb(0, 0, 0)",
	                                                blue: "rgb(0, 0, 255)",
	                                                gray: "rgb(128, 128, 128)",
	                                                green: "rgb(0, 128, 0)",
	                                                red: "rgb(255, 0, 0)",
	                                                white: "rgb(255, 255, 255)"
	                                            };
	
	                                        /* Convert color names to rgb. */
	                                        if (/^[A-z]+$/i.test(propertyValue)) {
	                                            if (colorNames[propertyValue] !== undefined) {
	                                                converted = colorNames[propertyValue]
	                                            } else {
	                                                /* If an unmatched color name is provided, default to black. */
	                                                converted = colorNames.black;
	                                            }
	                                        /* Convert hex values to rgb. */
	                                        } else if (CSS.RegEx.isHex.test(propertyValue)) {
	                                            converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
	                                        /* If the provided color doesn't match any of the accepted color formats, default to black. */
	                                        } else if (!(/^rgba?\(/i.test(propertyValue))) {
	                                            converted = colorNames.black;
	                                        }
	
	                                        /* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
	                                           repeated spaces (in case the value included spaces to begin with). */
	                                        extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
	                                    }
	
	                                    /* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
	                                    if (!(IE <= 8) && extracted.split(" ").length === 3) {
	                                        extracted += " 1";
	                                    }
	
	                                    return extracted;
	                                case "inject":
	                                    /* If this is IE<=8 and an alpha component exists, strip it off. */
	                                    if (IE <= 8) {
	                                        if (propertyValue.split(" ").length === 4) {
	                                            propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
	                                        }
	                                    /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
	                                    } else if (propertyValue.split(" ").length === 3) {
	                                        propertyValue += " 1";
	                                    }
	
	                                    /* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
	                                       on all values but the fourth (R, G, and B only accept whole numbers). */
	                                    return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
	                            }
	                        };
	                    })();
	                }
	            }
	        },
	
	        /************************
	           CSS Property Names
	        ************************/
	
	        Names: {
	            /* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
	               Camelcasing is used to normalize property names between and across calls. */
	            camelCase: function (property) {
	                return property.replace(/-(\w)/g, function (match, subMatch) {
	                    return subMatch.toUpperCase();
	                });
	            },
	
	            /* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
	            SVGAttribute: function (property) {
	                var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
	
	                /* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
	                if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
	                    SVGAttributes += "|transform";
	                }
	
	                return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
	            },
	
	            /* Determine whether a property should be set with a vendor prefix. */
	            /* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
	               If the property is not at all supported by the browser, return a false flag. */
	            prefixCheck: function (property) {
	                /* If this property has already been checked, return the cached value. */
	                if (Velocity.State.prefixMatches[property]) {
	                    return [ Velocity.State.prefixMatches[property], true ];
	                } else {
	                    var vendors = [ "", "Webkit", "Moz", "ms", "O" ];
	
	                    for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
	                        var propertyPrefixed;
	
	                        if (i === 0) {
	                            propertyPrefixed = property;
	                        } else {
	                            /* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
	                            propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) { return match.toUpperCase(); });
	                        }
	
	                        /* Check if the browser supports this property as prefixed. */
	                        if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
	                            /* Cache the match. */
	                            Velocity.State.prefixMatches[property] = propertyPrefixed;
	
	                            return [ propertyPrefixed, true ];
	                        }
	                    }
	
	                    /* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
	                    return [ property, false ];
	                }
	            }
	        },
	
	        /************************
	           CSS Property Values
	        ************************/
	
	        Values: {
	            /* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
	            hexToRgb: function (hex) {
	                var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
	                    longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
	                    rgbParts;
	
	                hex = hex.replace(shortformRegex, function (m, r, g, b) {
	                    return r + r + g + g + b + b;
	                });
	
	                rgbParts = longformRegex.exec(hex);
	
	                return rgbParts ? [ parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16) ] : [ 0, 0, 0 ];
	            },
	
	            isCSSNullValue: function (value) {
	                /* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
	                   Thus, we check for both falsiness and these special strings. */
	                /* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
	                   templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
	                /* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
	                return (value == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
	            },
	
	            /* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
	            getUnitType: function (property) {
	                if (/^(rotate|skew)/i.test(property)) {
	                    return "deg";
	                } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
	                    /* The above properties are unitless. */
	                    return "";
	                } else {
	                    /* Default to px for all other properties. */
	                    return "px";
	                }
	            },
	
	            /* HTML elements default to an associated display type when they're not set to display:none. */
	            /* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
	            getDisplayType: function (element) {
	                var tagName = element && element.tagName.toString().toLowerCase();
	
	                if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
	                    return "inline";
	                } else if (/^(li)$/i.test(tagName)) {
	                    return "list-item";
	                } else if (/^(tr)$/i.test(tagName)) {
	                    return "table-row";
	                } else if (/^(table)$/i.test(tagName)) {
	                    return "table";
	                } else if (/^(tbody)$/i.test(tagName)) {
	                    return "table-row-group";
	                /* Default to "block" when no match is found. */
	                } else {
	                    return "block";
	                }
	            },
	
	            /* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
	            addClass: function (element, className) {
	                if (element.classList) {
	                    element.classList.add(className);
	                } else {
	                    element.className += (element.className.length ? " " : "") + className;
	                }
	            },
	
	            removeClass: function (element, className) {
	                if (element.classList) {
	                    element.classList.remove(className);
	                } else {
	                    element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
	                }
	            }
	        },
	
	        /****************************
	           Style Getting & Setting
	        ****************************/
	
	        /* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
	        getPropertyValue: function (element, property, rootPropertyValue, forceStyleLookup) {
	            /* Get an element's computed property value. */
	            /* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
	               style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
	               *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
	            function computePropertyValue (element, property) {
	                /* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
	                   element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
	                   offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
	                   We subtract border and padding to get the sum of interior + scrollbar. */
	                var computedValue = 0;
	
	                /* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
	                   of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
	                   codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
	                   Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
	                if (IE <= 8) {
	                    computedValue = $.css(element, property); /* GET */
	                /* All other browsers support getComputedStyle. The returned live object reference is cached onto its
	                   associated element so that it does not need to be refetched upon every GET. */
	                } else {
	                    /* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
	                       toggle display to the element type's default value. */
	                    var toggleDisplay = false;
	
	                    if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
	                        toggleDisplay = true;
	                        CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
	                    }
	
	                    function revertDisplay () {
	                        if (toggleDisplay) {
	                            CSS.setPropertyValue(element, "display", "none");
	                        }
	                    }
	
	                    if (!forceStyleLookup) {
	                        if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
	                            var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
	                            revertDisplay();
	
	                            return contentBoxHeight;
	                        } else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
	                            var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
	                            revertDisplay();
	
	                            return contentBoxWidth;
	                        }
	                    }
	
	                    var computedStyle;
	
	                    /* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
	                       of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
	                    if (Data(element) === undefined) {
	                        computedStyle = window.getComputedStyle(element, null); /* GET */
	                    /* If the computedStyle object has yet to be cached, do so now. */
	                    } else if (!Data(element).computedStyle) {
	                        computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
	                    /* If computedStyle is cached, use it. */
	                    } else {
	                        computedStyle = Data(element).computedStyle;
	                    }
	
	                    /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
	                       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
	                       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
	                    if (property === "borderColor") {
	                        property = "borderTopColor";
	                    }
	
	                    /* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
	                       instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
	                    if (IE === 9 && property === "filter") {
	                        computedValue = computedStyle.getPropertyValue(property); /* GET */
	                    } else {
	                        computedValue = computedStyle[property];
	                    }
	
	                    /* Fall back to the property's style value (if defined) when computedValue returns nothing,
	                       which can happen when the element hasn't been painted. */
	                    if (computedValue === "" || computedValue === null) {
	                        computedValue = element.style[property];
	                    }
	
	                    revertDisplay();
	                }
	
	                /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
	                   defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
	                   effect as being set to 0, so no conversion is necessary.) */
	                /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
	                   property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
	                   to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
	                if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
	                    var position = computePropertyValue(element, "position"); /* GET */
	
	                    /* For absolute positioning, jQuery's $.position() only returns values for top and left;
	                       right and bottom will have their "auto" value reverted to 0. */
	                    /* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
	                       Not a big deal since we're currently in a GET batch anyway. */
	                    if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
	                        /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
	                        computedValue = $(element).position()[property] + "px"; /* GET */
	                    }
	                }
	
	                return computedValue;
	            }
	
	            var propertyValue;
	
	            /* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
	               extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
	            if (CSS.Hooks.registered[property]) {
	                var hook = property,
	                    hookRoot = CSS.Hooks.getRoot(hook);
	
	                /* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
	                   query the DOM for the root property's value. */
	                if (rootPropertyValue === undefined) {
	                    /* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
	                    rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
	                }
	
	                /* If this root has a normalization registered, peform the associated normalization extraction. */
	                if (CSS.Normalizations.registered[hookRoot]) {
	                    rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
	                }
	
	                /* Extract the hook's value. */
	                propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);
	
	            /* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
	               normalize the property's name and value, and handle the special case of transforms. */
	            /* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
	               numerical and therefore do not require normalization extraction. */
	            } else if (CSS.Normalizations.registered[property]) {
	                var normalizedPropertyName,
	                    normalizedPropertyValue;
	
	                normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
	
	                /* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
	                   At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
	                   This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
	                   thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
	                if (normalizedPropertyName !== "transform") {
	                    normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */
	
	                    /* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
	                    if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
	                        normalizedPropertyValue = CSS.Hooks.templates[property][1];
	                    }
	                }
	
	                propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
	            }
	
	            /* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
	            if (!/^[\d-]/.test(propertyValue)) {
	                /* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
	                   their HTML attribute values instead of their CSS style values. */
	                if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
	                    /* Since the height/width attribute values must be set manually, they don't reflect computed values.
	                       Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
	                    if (/^(height|width)$/i.test(property)) {
	                        /* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
	                        try {
	                            propertyValue = element.getBBox()[property];
	                        } catch (error) {
	                            propertyValue = 0;
	                        }
	                    /* Otherwise, access the attribute value directly. */
	                    } else {
	                        propertyValue = element.getAttribute(property);
	                    }
	                } else {
	                    propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
	                }
	            }
	
	            /* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
	               convert CSS null-values to an integer of value 0. */
	            if (CSS.Values.isCSSNullValue(propertyValue)) {
	                propertyValue = 0;
	            }
	
	            if (Velocity.debug >= 2) console.log("Get " + property + ": " + propertyValue);
	
	            return propertyValue;
	        },
	
	        /* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
	        setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
	            var propertyName = property;
	
	            /* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
	            if (property === "scroll") {
	                /* If a container option is present, scroll the container instead of the browser window. */
	                if (scrollData.container) {
	                    scrollData.container["scroll" + scrollData.direction] = propertyValue;
	                /* Otherwise, Velocity defaults to scrolling the browser window. */
	                } else {
	                    if (scrollData.direction === "Left") {
	                        window.scrollTo(propertyValue, scrollData.alternateValue);
	                    } else {
	                        window.scrollTo(scrollData.alternateValue, propertyValue);
	                    }
	                }
	            } else {
	                /* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
	                   Thus, for now, we merely cache transforms being SET. */
	                if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
	                    /* Perform a normalization injection. */
	                    /* Note: The normalization logic handles the transformCache updating. */
	                    CSS.Normalizations.registered[property]("inject", element, propertyValue);
	
	                    propertyName = "transform";
	                    propertyValue = Data(element).transformCache[property];
	                } else {
	                    /* Inject hooks. */
	                    if (CSS.Hooks.registered[property]) {
	                        var hookName = property,
	                            hookRoot = CSS.Hooks.getRoot(property);
	
	                        /* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
	                        rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */
	
	                        propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
	                        property = hookRoot;
	                    }
	
	                    /* Normalize names and values. */
	                    if (CSS.Normalizations.registered[property]) {
	                        propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
	                        property = CSS.Normalizations.registered[property]("name", element);
	                    }
	
	                    /* Assign the appropriate vendor prefix before performing an official style update. */
	                    propertyName = CSS.Names.prefixCheck(property)[0];
	
	                    /* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
	                       Try/catch is avoided for other browsers since it incurs a performance overhead. */
	                    if (IE <= 8) {
	                        try {
	                            element.style[propertyName] = propertyValue;
	                        } catch (error) { if (Velocity.debug) console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]"); }
	                    /* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
	                    /* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
	                    } else if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
	                        /* Note: For SVG attributes, vendor-prefixed property names are never used. */
	                        /* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
	                        element.setAttribute(property, propertyValue);
	                    } else {
	                        element.style[propertyName] = propertyValue;
	                    }
	
	                    if (Velocity.debug >= 2) console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
	                }
	            }
	
	            /* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
	            return [ propertyName, propertyValue ];
	        },
	
	        /* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
	        /* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
	        flushTransformCache: function(element) {
	            var transformString = "";
	
	            /* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
	               (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
	            if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && Data(element).isSVG) {
	                /* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
	                   Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
	                function getTransformFloat (transformProperty) {
	                    return parseFloat(CSS.getPropertyValue(element, transformProperty));
	                }
	
	                /* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
	                   we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
	                var SVGTransforms = {
	                    translate: [ getTransformFloat("translateX"), getTransformFloat("translateY") ],
	                    skewX: [ getTransformFloat("skewX") ], skewY: [ getTransformFloat("skewY") ],
	                    /* If the scale property is set (non-1), use that value for the scaleX and scaleY values
	                       (this behavior mimics the result of animating all these properties at once on HTML elements). */
	                    scale: getTransformFloat("scale") !== 1 ? [ getTransformFloat("scale"), getTransformFloat("scale") ] : [ getTransformFloat("scaleX"), getTransformFloat("scaleY") ],
	                    /* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
	                       defining the rotation's origin point. We ignore the origin values (default them to 0). */
	                    rotate: [ getTransformFloat("rotateZ"), 0, 0 ]
	                };
	
	                /* Iterate through the transform properties in the user-defined property map order.
	                   (This mimics the behavior of non-SVG transform animation.) */
	                $.each(Data(element).transformCache, function(transformName) {
	                    /* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
	                       properties so that they match up with SVG's accepted transform properties. */
	                    if (/^translate/i.test(transformName)) {
	                        transformName = "translate";
	                    } else if (/^scale/i.test(transformName)) {
	                        transformName = "scale";
	                    } else if (/^rotate/i.test(transformName)) {
	                        transformName = "rotate";
	                    }
	
	                    /* Check that we haven't yet deleted the property from the SVGTransforms container. */
	                    if (SVGTransforms[transformName]) {
	                        /* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
	                        transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
	
	                        /* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
	                           re-insert the same master property if we encounter another one of its axis-specific properties. */
	                        delete SVGTransforms[transformName];
	                    }
	                });
	            } else {
	                var transformValue,
	                    perspective;
	
	                /* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
	                $.each(Data(element).transformCache, function(transformName) {
	                    transformValue = Data(element).transformCache[transformName];
	
	                    /* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
	                    if (transformName === "transformPerspective") {
	                        perspective = transformValue;
	                        return true;
	                    }
	
	                    /* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
	                    if (IE === 9 && transformName === "rotateZ") {
	                        transformName = "rotate";
	                    }
	
	                    transformString += transformName + transformValue + " ";
	                });
	
	                /* If present, set the perspective subproperty first. */
	                if (perspective) {
	                    transformString = "perspective" + perspective + " " + transformString;
	                }
	            }
	
	            CSS.setPropertyValue(element, "transform", transformString);
	        }
	    };
	
	    /* Register hooks and normalizations. */
	    CSS.Hooks.register();
	    CSS.Normalizations.register();
	
	    /* Allow hook setting in the same fashion as jQuery's $.css(). */
	    Velocity.hook = function (elements, arg2, arg3) {
	        var value = undefined;
	
	        elements = sanitizeElements(elements);
	
	        $.each(elements, function(i, element) {
	            /* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
	            if (Data(element) === undefined) {
	                Velocity.init(element);
	            }
	
	            /* Get property value. If an element set was passed in, only return the value for the first element. */
	            if (arg3 === undefined) {
	                if (value === undefined) {
	                    value = Velocity.CSS.getPropertyValue(element, arg2);
	                }
	            /* Set property value. */
	            } else {
	                /* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
	                var adjustedSet = Velocity.CSS.setPropertyValue(element, arg2, arg3);
	
	                /* Transform properties don't automatically set. They have to be flushed to the DOM. */
	                if (adjustedSet[0] === "transform") {
	                    Velocity.CSS.flushTransformCache(element);
	                }
	
	                value = adjustedSet;
	            }
	        });
	
	        return value;
	    };
	
	    /*****************
	        Animation
	    *****************/
	
	    var animate = function() {
	
	        /******************
	            Call Chain
	        ******************/
	
	        /* Logic for determining what to return to the call stack when exiting out of Velocity. */
	        function getChain () {
	            /* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
	               default to null instead of returning the targeted elements so that utility function's return value is standardized. */
	            if (isUtility) {
	                return promiseData.promise || null;
	            /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
	            } else {
	                return elementsWrapped;
	            }
	        }
	
	        /*************************
	           Arguments Assignment
	        *************************/
	
	        /* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
	           objects are defined on a container object that's passed in as Velocity's sole argument. */
	        /* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
	        var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
	            /* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
	            isUtility,
	            /* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
	               passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
	            elementsWrapped,
	            argumentIndex;
	
	        var elements,
	            propertiesMap,
	            options;
	
	        /* Detect jQuery/Zepto elements being animated via the $.fn method. */
	        if (Type.isWrapped(this)) {
	            isUtility = false;
	
	            argumentIndex = 0;
	            elements = this;
	            elementsWrapped = this;
	        /* Otherwise, raw elements are being animated via the utility function. */
	        } else {
	            isUtility = true;
	
	            argumentIndex = 1;
	            elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
	        }
	
	        elements = sanitizeElements(elements);
	
	        if (!elements) {
	            return;
	        }
	
	        if (syntacticSugar) {
	            propertiesMap = arguments[0].properties || arguments[0].p;
	            options = arguments[0].options || arguments[0].o;
	        } else {
	            propertiesMap = arguments[argumentIndex];
	            options = arguments[argumentIndex + 1];
	        }
	
	        /* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
	           single raw DOM element is passed in (which doesn't contain a length property). */
	        var elementsLength = elements.length,
	            elementsIndex = 0;
	
	        /***************************
	            Argument Overloading
	        ***************************/
	
	        /* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
	           Overloading is detected by checking for the absence of an object being passed into options. */
	        /* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */
	        if (!/^(stop|finish|finishAll)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
	            /* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
	            var startingArgumentPosition = argumentIndex + 1;
	
	            options = {};
	
	            /* Iterate through all options arguments */
	            for (var i = startingArgumentPosition; i < arguments.length; i++) {
	                /* Treat a number as a duration. Parse it out. */
	                /* Note: The following RegEx will return true if passed an array with a number as its first item.
	                   Thus, arrays are skipped from this check. */
	                if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
	                    options.duration = arguments[i];
	                /* Treat strings and arrays as easings. */
	                } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
	                    options.easing = arguments[i];
	                /* Treat a function as a complete callback. */
	                } else if (Type.isFunction(arguments[i])) {
	                    options.complete = arguments[i];
	                }
	            }
	        }
	
	        /***************
	            Promises
	        ***************/
	
	        var promiseData = {
	                promise: null,
	                resolver: null,
	                rejecter: null
	            };
	
	        /* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
	           promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
	           method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
	           call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
	        /* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
	           triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
	           grouped together for the purposes of resolving and rejecting a promise. */
	        if (isUtility && Velocity.Promise) {
	            promiseData.promise = new Velocity.Promise(function (resolve, reject) {
	                promiseData.resolver = resolve;
	                promiseData.rejecter = reject;
	            });
	        }
	
	        /*********************
	           Action Detection
	        *********************/
	
	        /* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
	           or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
	           first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */
	        var action;
	
	        switch (propertiesMap) {
	            case "scroll":
	                action = "scroll";
	                break;
	
	            case "reverse":
	                action = "reverse";
	                break;
	
	            case "finish":
	            case "finishAll":
	            case "stop":
	                /*******************
	                    Action: Stop
	                *******************/
	
	                /* Clear the currently-active delay on each targeted element. */
	                $.each(elements, function(i, element) {
	                    if (Data(element) && Data(element).delayTimer) {
	                        /* Stop the timer from triggering its cached next() function. */
	                        clearTimeout(Data(element).delayTimer.setTimeout);
	
	                        /* Manually call the next() function so that the subsequent queue items can progress. */
	                        if (Data(element).delayTimer.next) {
	                            Data(element).delayTimer.next();
	                        }
	
	                        delete Data(element).delayTimer;
	                    }
	
	                    /* If we want to finish everything in the queue, we have to iterate through it
	                       and call each function. This will make them active calls below, which will
	                       cause them to be applied via the duration setting. */
	                    if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
	                        /* Iterate through the items in the element's queue. */
	                        $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
	                            /* The queue array can contain an "inprogress" string, which we skip. */
	                            if (Type.isFunction(item)) {
	                                item();
	                            }
	                        });
	
	                        /* Clearing the $.queue() array is achieved by resetting it to []. */
	                        $.queue(element, Type.isString(options) ? options : "", []);
	                    }
	                });
	
	                var callsToStop = [];
	
	                /* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
	                   been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
	                   is stopped, the next item in its animation queue is immediately triggered. */
	                /* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
	                   or a custom queue string can be passed in. */
	                /* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
	                   regardless of the element's current queue state. */
	
	                /* Iterate through every active call. */
	                $.each(Velocity.State.calls, function(i, activeCall) {
	                    /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
	                    if (activeCall) {
	                        /* Iterate through the active call's targeted elements. */
	                        $.each(activeCall[1], function(k, activeElement) {
	                            /* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
	                               clear calls associated with the relevant queue. */
	                            /* Call stopping logic works as follows:
	                               - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
	                               - options === undefined --> stop current queue:"" call and all queue:false calls.
	                               - options === false --> stop only queue:false calls.
	                               - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
	                            var queueName = (options === undefined) ? "" : options;
	
	                            if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
	                                return true;
	                            }
	
	                            /* Iterate through the calls targeted by the stop command. */
	                            $.each(elements, function(l, element) {
	                                /* Check that this call was applied to the target element. */
	                                if (element === activeElement) {
	                                    /* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
	                                       due to the queue-clearing above. */
	                                    if (options === true || Type.isString(options)) {
	                                        /* Iterate through the items in the element's queue. */
	                                        $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
	                                            /* The queue array can contain an "inprogress" string, which we skip. */
	                                            if (Type.isFunction(item)) {
	                                                /* Pass the item's callback a flag indicating that we want to abort from the queue call.
	                                                   (Specifically, the queue will resolve the call's associated promise then abort.)  */
	                                                item(null, true);
	                                            }
	                                        });
	
	                                        /* Clearing the $.queue() array is achieved by resetting it to []. */
	                                        $.queue(element, Type.isString(options) ? options : "", []);
	                                    }
	
	                                    if (propertiesMap === "stop") {
	                                        /* Since "reverse" uses cached start values (the previous call's endValues), these values must be
	                                           changed to reflect the final value that the elements were actually tweened to. */
	                                        /* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
	                                           object. Also, queue:false animations can't be reversed. */
	                                        if (Data(element) && Data(element).tweensContainer && queueName !== false) {
	                                            $.each(Data(element).tweensContainer, function(m, activeTween) {
	                                                activeTween.endValue = activeTween.currentValue;
	                                            });
	                                        }
	
	                                        callsToStop.push(i);
	                                    } else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
	                                        /* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
	                                        they finish upon the next rAf tick then proceed with normal call completion logic. */
	                                        activeCall[2].duration = 1;
	                                    }
	                                }
	                            });
	                        });
	                    }
	                });
	
	                /* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
	                   that the complete callback and display:none setting should be skipped since we're completing prematurely. */
	                if (propertiesMap === "stop") {
	                    $.each(callsToStop, function(i, j) {
	                        completeCall(j, true);
	                    });
	
	                    if (promiseData.promise) {
	                        /* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
	                        promiseData.resolver(elements);
	                    }
	                }
	
	                /* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
	                return getChain();
	
	            default:
	                /* Treat a non-empty plain object as a literal properties map. */
	                if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
	                    action = "start";
	
	                /****************
	                    Redirects
	                ****************/
	
	                /* Check if a string matches a registered redirect (see Redirects above). */
	                } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
	                    var opts = $.extend({}, options),
	                        durationOriginal = opts.duration,
	                        delayOriginal = opts.delay || 0;
	
	                    /* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
	                    if (opts.backwards === true) {
	                        elements = $.extend(true, [], elements).reverse();
	                    }
	
	                    /* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
	                    $.each(elements, function(elementIndex, element) {
	                        /* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
	                        if (parseFloat(opts.stagger)) {
	                            opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
	                        } else if (Type.isFunction(opts.stagger)) {
	                            opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
	                        }
	
	                        /* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
	                           the duration of each element's animation, using floors to prevent producing very short durations. */
	                        if (opts.drag) {
	                            /* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
	                            opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
	
	                            /* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
	                               B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
	                               The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
	                            opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex/elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
	                        }
	
	                        /* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
	                           reduce the opts checking logic required inside the redirect. */
	                        Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
	                    });
	
	                    /* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
	                       (The performance overhead up to this point is virtually non-existant.) */
	                    /* Note: The jQuery call chain is kept intact by returning the complete element set. */
	                    return getChain();
	                } else {
	                    var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";
	
	                    if (promiseData.promise) {
	                        promiseData.rejecter(new Error(abortError));
	                    } else {
	                        console.log(abortError);
	                    }
	
	                    return getChain();
	                }
	        }
	
	        /**************************
	            Call-Wide Variables
	        **************************/
	
	        /* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
	           being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
	           avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
	           conversion metrics across Velocity animations that are not immediately consecutively chained. */
	        var callUnitConversionData = {
	                lastParent: null,
	                lastPosition: null,
	                lastFontSize: null,
	                lastPercentToPxWidth: null,
	                lastPercentToPxHeight: null,
	                lastEmToPx: null,
	                remToPx: null,
	                vwToPx: null,
	                vhToPx: null
	            };
	
	        /* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
	           Velocity.State.calls array that is processed during animation ticking. */
	        var call = [];
	
	        /************************
	           Element Processing
	        ************************/
	
	        /* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
	           1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
	           2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
	           3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	        */
	
	        function processElement () {
	
	            /*************************
	               Part I: Pre-Queueing
	            *************************/
	
	            /***************************
	               Element-Wide Variables
	            ***************************/
	
	            var element = this,
	                /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
	                opts = $.extend({}, Velocity.defaults, options),
	                /* A container for the processed data associated with each property in the propertyMap.
	                   (Each property in the map produces its own "tween".) */
	                tweensContainer = {},
	                elementUnitConversionData;
	
	            /******************
	               Element Init
	            ******************/
	
	            if (Data(element) === undefined) {
	                Velocity.init(element);
	            }
	
	            /******************
	               Option: Delay
	            ******************/
	
	            /* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
	            /* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
	               (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
	            if (parseFloat(opts.delay) && opts.queue !== false) {
	                $.queue(element, opts.queue, function(next) {
	                    /* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
	                    Velocity.velocityQueueEntryFlag = true;
	
	                    /* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
	                       The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */
	                    Data(element).delayTimer = {
	                        setTimeout: setTimeout(next, parseFloat(opts.delay)),
	                        next: next
	                    };
	                });
	            }
	
	            /*********************
	               Option: Duration
	            *********************/
	
	            /* Support for jQuery's named durations. */
	            switch (opts.duration.toString().toLowerCase()) {
	                case "fast":
	                    opts.duration = 200;
	                    break;
	
	                case "normal":
	                    opts.duration = DURATION_DEFAULT;
	                    break;
	
	                case "slow":
	                    opts.duration = 600;
	                    break;
	
	                default:
	                    /* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
	                    opts.duration = parseFloat(opts.duration) || 1;
	            }
	
	            /************************
	               Global Option: Mock
	            ************************/
	
	            if (Velocity.mock !== false) {
	                /* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
	                   Alternatively, a multiplier can be passed in to time remap all delays and durations. */
	                if (Velocity.mock === true) {
	                    opts.duration = opts.delay = 1;
	                } else {
	                    opts.duration *= parseFloat(Velocity.mock) || 1;
	                    opts.delay *= parseFloat(Velocity.mock) || 1;
	                }
	            }
	
	            /*******************
	               Option: Easing
	            *******************/
	
	            opts.easing = getEasing(opts.easing, opts.duration);
	
	            /**********************
	               Option: Callbacks
	            **********************/
	
	            /* Callbacks must functions. Otherwise, default to null. */
	            if (opts.begin && !Type.isFunction(opts.begin)) {
	                opts.begin = null;
	            }
	
	            if (opts.progress && !Type.isFunction(opts.progress)) {
	                opts.progress = null;
	            }
	
	            if (opts.complete && !Type.isFunction(opts.complete)) {
	                opts.complete = null;
	            }
	
	            /*********************************
	               Option: Display & Visibility
	            *********************************/
	
	            /* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
	            /* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
	            if (opts.display !== undefined && opts.display !== null) {
	                opts.display = opts.display.toString().toLowerCase();
	
	                /* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
	                if (opts.display === "auto") {
	                    opts.display = Velocity.CSS.Values.getDisplayType(element);
	                }
	            }
	
	            if (opts.visibility !== undefined && opts.visibility !== null) {
	                opts.visibility = opts.visibility.toString().toLowerCase();
	            }
	
	            /**********************
	               Option: mobileHA
	            **********************/
	
	            /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
	               on animating elements. HA is removed from the element at the completion of its animation. */
	            /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
	            /* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
	            opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);
	
	            /***********************
	               Part II: Queueing
	            ***********************/
	
	            /* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
	               In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
	            /* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
	               the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
	            function buildQueue (next) {
	
	                /*******************
	                   Option: Begin
	                *******************/
	
	                /* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
	                if (opts.begin && elementsIndex === 0) {
	                    /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
	                    try {
	                        opts.begin.call(elements, elements);
	                    } catch (error) {
	                        setTimeout(function() { throw error; }, 1);
	                    }
	                }
	
	                /*****************************************
	                   Tween Data Construction (for Scroll)
	                *****************************************/
	
	                /* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
	                if (action === "scroll") {
	                    /* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
	                    var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
	                        scrollOffset = parseFloat(opts.offset) || 0,
	                        scrollPositionCurrent,
	                        scrollPositionCurrentAlternate,
	                        scrollPositionEnd;
	
	                    /* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
	                       as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
	                    if (opts.container) {
	                        /* Ensure that either a jQuery object or a raw DOM element was passed in. */
	                        if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
	                            /* Extract the raw DOM element from the jQuery wrapper. */
	                            opts.container = opts.container[0] || opts.container;
	                            /* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
	                               (due to the user's natural interaction with the page). */
	                            scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */
	
	                            /* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
	                               -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
	                               the scroll container's current scroll position. */
	                            scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
	                        /* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
	                        } else {
	                            opts.container = null;
	                        }
	                    } else {
	                        /* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
	                           the appropriate cached property names (which differ based on browser type). */
	                        scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
	                        /* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
	                        scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */
	
	                        /* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
	                           and therefore end values do not need to be compounded onto current values. */
	                        scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
	                    }
	
	                    /* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
	                    tweensContainer = {
	                        scroll: {
	                            rootPropertyValue: false,
	                            startValue: scrollPositionCurrent,
	                            currentValue: scrollPositionCurrent,
	                            endValue: scrollPositionEnd,
	                            unitType: "",
	                            easing: opts.easing,
	                            scrollData: {
	                                container: opts.container,
	                                direction: scrollDirection,
	                                alternateValue: scrollPositionCurrentAlternate
	                            }
	                        },
	                        element: element
	                    };
	
	                    if (Velocity.debug) console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
	
	                /******************************************
	                   Tween Data Construction (for Reverse)
	                ******************************************/
	
	                /* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
	                   that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
	                   the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
	                /* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
	                /* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
	                   there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
	                   as reverting to the element's values as they were prior to the previous *Velocity* call. */
	                } else if (action === "reverse") {
	                    /* Abort if there is no prior animation data to reverse to. */
	                    if (!Data(element).tweensContainer) {
	                        /* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
	                        $.dequeue(element, opts.queue);
	
	                        return;
	                    } else {
	                        /*********************
	                           Options Parsing
	                        *********************/
	
	                        /* If the element was hidden via the display option in the previous call,
	                           revert display to "auto" prior to reversal so that the element is visible again. */
	                        if (Data(element).opts.display === "none") {
	                            Data(element).opts.display = "auto";
	                        }
	
	                        if (Data(element).opts.visibility === "hidden") {
	                            Data(element).opts.visibility = "visible";
	                        }
	
	                        /* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
	                           Further, remove the previous call's callback options; typically, users do not want these to be refired. */
	                        Data(element).opts.loop = false;
	                        Data(element).opts.begin = null;
	                        Data(element).opts.complete = null;
	
	                        /* Since we're extending an opts object that has already been extended with the defaults options object,
	                           we remove non-explicitly-defined properties that are auto-assigned values. */
	                        if (!options.easing) {
	                            delete opts.easing;
	                        }
	
	                        if (!options.duration) {
	                            delete opts.duration;
	                        }
	
	                        /* The opts object used for reversal is an extension of the options object optionally passed into this
	                           reverse call plus the options used in the previous Velocity call. */
	                        opts = $.extend({}, Data(element).opts, opts);
	
	                        /*************************************
	                           Tweens Container Reconstruction
	                        *************************************/
	
	                        /* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
	                        var lastTweensContainer = $.extend(true, {}, Data(element).tweensContainer);
	
	                        /* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
	                        for (var lastTween in lastTweensContainer) {
	                            /* In addition to tween data, tweensContainers contain an element property that we ignore here. */
	                            if (lastTween !== "element") {
	                                var lastStartValue = lastTweensContainer[lastTween].startValue;
	
	                                lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
	                                lastTweensContainer[lastTween].endValue = lastStartValue;
	
	                                /* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
	                                   Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
	                                   The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
	                                if (!Type.isEmptyObject(options)) {
	                                    lastTweensContainer[lastTween].easing = opts.easing;
	                                }
	
	                                if (Velocity.debug) console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
	                            }
	                        }
	
	                        tweensContainer = lastTweensContainer;
	                    }
	
	                /*****************************************
	                   Tween Data Construction (for Start)
	                *****************************************/
	
	                } else if (action === "start") {
	
	                    /*************************
	                        Value Transferring
	                    *************************/
	
	                    /* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
	                       while the element was in the process of being animated by Velocity, then this current call is safe to use
	                       the end values from the prior call as its start values. Velocity attempts to perform this value transfer
	                       process whenever possible in order to avoid requerying the DOM. */
	                    /* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
	                       then the DOM is queried for the element's current values as a last resort. */
	                    /* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
	                    var lastTweensContainer;
	
	                    /* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
	                       to transfer over end values to use as start values. If it's set to true and there is a previous
	                       Velocity call to pull values from, do so. */
	                    if (Data(element).tweensContainer && Data(element).isAnimating === true) {
	                        lastTweensContainer = Data(element).tweensContainer;
	                    }
	
	                    /***************************
	                       Tween Data Calculation
	                    ***************************/
	
	                    /* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
	                    /* Property map values can either take the form of 1) a single value representing the end value,
	                       or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
	                       The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
	                       the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
	                    function parsePropertyValue (valueData, skipResolvingEasing) {
	                        var endValue = undefined,
	                            easing = undefined,
	                            startValue = undefined;
	
	                        /* Handle the array format, which can be structured as one of three potential overloads:
	                           A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
	                        if (Type.isArray(valueData)) {
	                            /* endValue is always the first item in the array. Don't bother validating endValue's value now
	                               since the ensuing property cycling logic does that. */
	                            endValue = valueData[0];
	
	                            /* Two-item array format: If the second item is a number, function, or hex string, treat it as a
	                               start value since easings can only be non-hex strings or arrays. */
	                            if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
	                                startValue = valueData[1];
	                            /* Two or three-item array: If the second item is a non-hex string or an array, treat it as an easing. */
	                            } else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1])) || Type.isArray(valueData[1])) {
	                                easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
	
	                                /* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
	                                if (valueData[2] !== undefined) {
	                                    startValue = valueData[2];
	                                }
	                            }
	                        /* Handle the single-value format. */
	                        } else {
	                            endValue = valueData;
	                        }
	
	                        /* Default to the call's easing if a per-property easing type was not defined. */
	                        if (!skipResolvingEasing) {
	                            easing = easing || opts.easing;
	                        }
	
	                        /* If functions were passed in as values, pass the function the current element as its context,
	                           plus the element's index and the element set's size as arguments. Then, assign the returned value. */
	                        if (Type.isFunction(endValue)) {
	                            endValue = endValue.call(element, elementsIndex, elementsLength);
	                        }
	
	                        if (Type.isFunction(startValue)) {
	                            startValue = startValue.call(element, elementsIndex, elementsLength);
	                        }
	
	                        /* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
	                        return [ endValue || 0, easing, startValue ];
	                    }
	
	                    /* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
	                       colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */
	                    $.each(propertiesMap, function(property, value) {
	                        /* Find shorthand color properties that have been passed a hex string. */
	                        if (RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(property)) {
	                            /* Parse the value data for each shorthand. */
	                            var valueData = parsePropertyValue(value, true),
	                                endValue = valueData[0],
	                                easing = valueData[1],
	                                startValue = valueData[2];
	
	                            if (CSS.RegEx.isHex.test(endValue)) {
	                                /* Convert the hex strings into their RGB component arrays. */
	                                var colorComponents = [ "Red", "Green", "Blue" ],
	                                    endValueRGB = CSS.Values.hexToRgb(endValue),
	                                    startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
	
	                                /* Inject the RGB component tweens into propertiesMap. */
	                                for (var i = 0; i < colorComponents.length; i++) {
	                                    var dataArray = [ endValueRGB[i] ];
	
	                                    if (easing) {
	                                        dataArray.push(easing);
	                                    }
	
	                                    if (startValueRGB !== undefined) {
	                                        dataArray.push(startValueRGB[i]);
	                                    }
	
	                                    propertiesMap[property + colorComponents[i]] = dataArray;
	                                }
	
	                                /* Remove the intermediary shorthand property entry now that we've processed it. */
	                                delete propertiesMap[property];
	                            }
	                        }
	                    });
	
	                    /* Create a tween out of each property, and append its associated data to tweensContainer. */
	                    for (var property in propertiesMap) {
	
	                        /**************************
	                           Start Value Sourcing
	                        **************************/
	
	                        /* Parse out endValue, easing, and startValue from the property's data. */
	                        var valueData = parsePropertyValue(propertiesMap[property]),
	                            endValue = valueData[0],
	                            easing = valueData[1],
	                            startValue = valueData[2];
	
	                        /* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
	                           we force the property to its camelCase styling to normalize it for manipulation. */
	                        property = CSS.Names.camelCase(property);
	
	                        /* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
	                        var rootProperty = CSS.Hooks.getRoot(property),
	                            rootPropertyValue = false;
	
	                        /* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
	                           inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
	                           Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
	                        /* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
	                           there is no way to check for their explicit browser support, and so we skip skip this check for them. */
	                        if (!Data(element).isSVG && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
	                            if (Velocity.debug) console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
	
	                            continue;
	                        }
	
	                        /* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
	                           animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
	                           a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
	                        if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
	                            startValue = 0;
	                        }
	
	                        /* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
	                           for all of the current call's properties that were *also* animated in the previous call. */
	                        /* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
	                        if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
	                            if (startValue === undefined) {
	                                startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
	                            }
	
	                            /* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
	                               instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
	                               attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
	                            rootPropertyValue = Data(element).rootPropertyValueCache[rootProperty];
	                        /* If values were not transferred from a previous Velocity call, query the DOM as needed. */
	                        } else {
	                            /* Handle hooked properties. */
	                            if (CSS.Hooks.registered[property]) {
	                               if (startValue === undefined) {
	                                    rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
	                                    /* Note: The following getPropertyValue() call does not actually trigger a DOM query;
	                                       getPropertyValue() will extract the hook from rootPropertyValue. */
	                                    startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
	                                /* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
	                                   just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
	                                   root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
	                                   to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
	                                } else {
	                                    /* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
	                                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
	                                }
	                            /* Handle non-hooked properties that haven't already been defined via forcefeeding. */
	                            } else if (startValue === undefined) {
	                                startValue = CSS.getPropertyValue(element, property); /* GET */
	                            }
	                        }
	
	                        /**************************
	                           Value Data Extraction
	                        **************************/
	
	                        var separatedValue,
	                            endValueUnitType,
	                            startValueUnitType,
	                            operator = false;
	
	                        /* Separates a property value into its numeric value and its unit type. */
	                        function separateValue (property, value) {
	                            var unitType,
	                                numericValue;
	
	                            numericValue = (value || "0")
	                                .toString()
	                                .toLowerCase()
	                                /* Match the unit type at the end of the value. */
	                                .replace(/[%A-z]+$/, function(match) {
	                                    /* Grab the unit type. */
	                                    unitType = match;
	
	                                    /* Strip the unit type off of value. */
	                                    return "";
	                                });
	
	                            /* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
	                            if (!unitType) {
	                                unitType = CSS.Values.getUnitType(property);
	                            }
	
	                            return [ numericValue, unitType ];
	                        }
	
	                        /* Separate startValue. */
	                        separatedValue = separateValue(property, startValue);
	                        startValue = separatedValue[0];
	                        startValueUnitType = separatedValue[1];
	
	                        /* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
	                        separatedValue = separateValue(property, endValue);
	                        endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
	                            operator = subMatch;
	
	                            /* Strip the operator off of the value. */
	                            return "";
	                        });
	                        endValueUnitType = separatedValue[1];
	
	                        /* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
	                        startValue = parseFloat(startValue) || 0;
	                        endValue = parseFloat(endValue) || 0;
	
	                        /***************************************
	                           Property-Specific Value Conversion
	                        ***************************************/
	
	                        /* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
	                        if (endValueUnitType === "%") {
	                            /* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
	                               which is identical to the em unit's behavior, so we piggyback off of that. */
	                            if (/^(fontSize|lineHeight)$/.test(property)) {
	                                /* Convert % into an em decimal value. */
	                                endValue = endValue / 100;
	                                endValueUnitType = "em";
	                            /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
	                            } else if (/^scale/.test(property)) {
	                                endValue = endValue / 100;
	                                endValueUnitType = "";
	                            /* For RGB components, take the defined percentage of 255 and strip off the unit type. */
	                            } else if (/(Red|Green|Blue)$/i.test(property)) {
	                                endValue = (endValue / 100) * 255;
	                                endValueUnitType = "";
	                            }
	                        }
	
	                        /***************************
	                           Unit Ratio Calculation
	                        ***************************/
	
	                        /* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
	                           %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
	                           for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
	                           from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
	                           1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
	                           2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
	                        /* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
	                           setting values with the target unit type then comparing the returned pixel value. */
	                        /* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
	                           of batching the SETs and GETs together upfront outweights the potential overhead
	                           of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
	                        /* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
	                        function calculateUnitRatios () {
	
	                            /************************
	                                Same Ratio Checks
	                            ************************/
	
	                            /* The properties below are used to determine whether the element differs sufficiently from this call's
	                               previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
	                               of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
	                               this is done to minimize DOM querying. */
	                            var sameRatioIndicators = {
	                                    myParent: element.parentNode || document.body, /* GET */
	                                    position: CSS.getPropertyValue(element, "position"), /* GET */
	                                    fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
	                                },
	                                /* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
	                                samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
	                                /* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
	                                sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);
	
	                            /* Store these ratio indicators call-wide for the next element to compare against. */
	                            callUnitConversionData.lastParent = sameRatioIndicators.myParent;
	                            callUnitConversionData.lastPosition = sameRatioIndicators.position;
	                            callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
	
	                            /***************************
	                               Element-Specific Units
	                            ***************************/
	
	                            /* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
	                               of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
	                            var measurement = 100,
	                                unitRatios = {};
	
	                            if (!sameEmRatio || !samePercentRatio) {
	                                var dummy = Data(element).isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
	
	                                Velocity.init(dummy);
	                                sameRatioIndicators.myParent.appendChild(dummy);
	
	                                /* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
	                                   Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
	                                /* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
	                                $.each([ "overflow", "overflowX", "overflowY" ], function(i, property) {
	                                    Velocity.CSS.setPropertyValue(dummy, property, "hidden");
	                                });
	                                Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
	                                Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
	                                Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
	
	                                /* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
	                                $.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(i, property) {
	                                    Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
	                                });
	                                /* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
	                                Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
	
	                                /* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
	                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
	                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
	                                unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */
	
	                                sameRatioIndicators.myParent.removeChild(dummy);
	                            } else {
	                                unitRatios.emToPx = callUnitConversionData.lastEmToPx;
	                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
	                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
	                            }
	
	                            /***************************
	                               Element-Agnostic Units
	                            ***************************/
	
	                            /* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
	                               once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
	                               that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
	                               so we calculate it now. */
	                            if (callUnitConversionData.remToPx === null) {
	                                /* Default to browsers' default fontSize of 16px in the case of 0. */
	                                callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
	                            }
	
	                            /* Similarly, viewport units are %-relative to the window's inner dimensions. */
	                            if (callUnitConversionData.vwToPx === null) {
	                                callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
	                                callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
	                            }
	
	                            unitRatios.remToPx = callUnitConversionData.remToPx;
	                            unitRatios.vwToPx = callUnitConversionData.vwToPx;
	                            unitRatios.vhToPx = callUnitConversionData.vhToPx;
	
	                            if (Velocity.debug >= 1) console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
	
	                            return unitRatios;
	                        }
	
	                        /********************
	                           Unit Conversion
	                        ********************/
	
	                        /* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
	                        if (/[\/*]/.test(operator)) {
	                            endValueUnitType = startValueUnitType;
	                        /* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
	                           is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
	                           on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
	                           would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
	                        /* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
	                        } else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
	                            /* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
	                            /* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
	                               match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
	                               which remains past the point of the animation's completion. */
	                            if (endValue === 0) {
	                                endValueUnitType = startValueUnitType;
	                            } else {
	                                /* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
	                                   If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
	                                elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
	
	                                /* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
	                                /* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
	                                var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";
	
	                                /* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
	                                   1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
	                                switch (startValueUnitType) {
	                                    case "%":
	                                        /* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
	                                           Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
	                                           to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
	                                        startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
	                                        break;
	
	                                    case "px":
	                                        /* px acts as our midpoint in the unit conversion process; do nothing. */
	                                        break;
	
	                                    default:
	                                        startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
	                                }
	
	                                /* Invert the px ratios to convert into to the target unit. */
	                                switch (endValueUnitType) {
	                                    case "%":
	                                        startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
	                                        break;
	
	                                    case "px":
	                                        /* startValue is already in px, do nothing; we're done. */
	                                        break;
	
	                                    default:
	                                        startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
	                                }
	                            }
	                        }
	
	                        /*********************
	                           Relative Values
	                        *********************/
	
	                        /* Operator logic must be performed last since it requires unit-normalized start and end values. */
	                        /* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
	                           to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
	                           50 points is added on top of the current % value. */
	                        switch (operator) {
	                            case "+":
	                                endValue = startValue + endValue;
	                                break;
	
	                            case "-":
	                                endValue = startValue - endValue;
	                                break;
	
	                            case "*":
	                                endValue = startValue * endValue;
	                                break;
	
	                            case "/":
	                                endValue = startValue / endValue;
	                                break;
	                        }
	
	                        /**************************
	                           tweensContainer Push
	                        **************************/
	
	                        /* Construct the per-property tween object, and push it to the element's tweensContainer. */
	                        tweensContainer[property] = {
	                            rootPropertyValue: rootPropertyValue,
	                            startValue: startValue,
	                            currentValue: startValue,
	                            endValue: endValue,
	                            unitType: endValueUnitType,
	                            easing: easing
	                        };
	
	                        if (Velocity.debug) console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
	                    }
	
	                    /* Along with its property data, store a reference to the element itself onto tweensContainer. */
	                    tweensContainer.element = element;
	                }
	
	                /*****************
	                    Call Push
	                *****************/
	
	                /* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
	                   being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
	                if (tweensContainer.element) {
	                    /* Apply the "velocity-animating" indicator class. */
	                    CSS.Values.addClass(element, "velocity-animating");
	
	                    /* The call array houses the tweensContainers for each element being animated in the current call. */
	                    call.push(tweensContainer);
	
	                    /* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
	                    if (opts.queue === "") {
	                        Data(element).tweensContainer = tweensContainer;
	                        Data(element).opts = opts;
	                    }
	
	                    /* Switch on the element's animating flag. */
	                    Data(element).isAnimating = true;
	
	                    /* Once the final element in this call's element set has been processed, push the call array onto
	                       Velocity.State.calls for the animation tick to immediately begin processing. */
	                    if (elementsIndex === elementsLength - 1) {
	                        /* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
	                           Anything on this call container is subjected to tick() processing. */
	                        Velocity.State.calls.push([ call, elements, opts, null, promiseData.resolver ]);
	
	                        /* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
	                        if (Velocity.State.isTicking === false) {
	                            Velocity.State.isTicking = true;
	
	                            /* Start the tick loop. */
	                            tick();
	                        }
	                    } else {
	                        elementsIndex++;
	                    }
	                }
	            }
	
	            /* When the queue option is set to false, the call skips the element's queue and fires immediately. */
	            if (opts.queue === false) {
	                /* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
	                   we manually inject the delay property here with an explicit setTimeout. */
	                if (opts.delay) {
	                    setTimeout(buildQueue, opts.delay);
	                } else {
	                    buildQueue();
	                }
	            /* Otherwise, the call undergoes element queueing as normal. */
	            /* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
	            } else {
	                $.queue(element, opts.queue, function(next, clearQueue) {
	                    /* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
	                       so it's fine if this is repeatedly triggered for each element in the associated call.) */
	                    if (clearQueue === true) {
	                        if (promiseData.promise) {
	                            promiseData.resolver(elements);
	                        }
	
	                        /* Do not continue with animation queueing. */
	                        return true;
	                    }
	
	                    /* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
	                       See completeCall() for further details. */
	                    Velocity.velocityQueueEntryFlag = true;
	
	                    buildQueue(next);
	                });
	            }
	
	            /*********************
	                Auto-Dequeuing
	            *********************/
	
	            /* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
	               must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
	               for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
	               queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
	               first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
	            /* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
	               each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
	            /* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
	               Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
	            if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
	                $.dequeue(element);
	            }
	        }
	
	        /**************************
	           Element Set Iteration
	        **************************/
	
	        /* If the "nodeType" property exists on the elements variable, we're animating a single element.
	           Place it in an array so that $.each() can iterate over it. */
	        $.each(elements, function(i, element) {
	            /* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
	            if (Type.isNode(element)) {
	                processElement.call(element);
	            }
	        });
	
	        /******************
	           Option: Loop
	        ******************/
	
	        /* The loop option accepts an integer indicating how many times the element should loop between the values in the
	           current call's properties map and the element's property values prior to this call. */
	        /* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
	           to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
	           which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
	        var opts = $.extend({}, Velocity.defaults, options),
	            reverseCallsCount;
	
	        opts.loop = parseInt(opts.loop);
	        reverseCallsCount = (opts.loop * 2) - 1;
	
	        if (opts.loop) {
	            /* Double the loop count to convert it into its appropriate number of "reverse" calls.
	               Subtract 1 from the resulting value since the current call is included in the total alternation count. */
	            for (var x = 0; x < reverseCallsCount; x++) {
	                /* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
	                   isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
	                   call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
	                var reverseOptions = {
	                    delay: opts.delay,
	                    progress: opts.progress
	                };
	
	                /* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
	                   so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
	                if (x === reverseCallsCount - 1) {
	                    reverseOptions.display = opts.display;
	                    reverseOptions.visibility = opts.visibility;
	                    reverseOptions.complete = opts.complete;
	                }
	
	                animate(elements, "reverse", reverseOptions);
	            }
	        }
	
	        /***************
	            Chaining
	        ***************/
	
	        /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
	        return getChain();
	    };
	
	    /* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
	    Velocity = $.extend(animate, Velocity);
	    /* For legacy support, also expose the literal animate method. */
	    Velocity.animate = animate;
	
	    /**************
	        Timing
	    **************/
	
	    /* Ticker function. */
	    var ticker = window.requestAnimationFrame || rAFShim;
	
	    /* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
	       To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
	       devices to avoid wasting battery power on inactive tabs. */
	    /* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
	    if (!Velocity.State.isMobile && document.hidden !== undefined) {
	        document.addEventListener("visibilitychange", function() {
	            /* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
	            if (document.hidden) {
	                ticker = function(callback) {
	                    /* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
	                    return setTimeout(function() { callback(true) }, 16);
	                };
	
	                /* The rAF loop has been paused by the browser, so we manually restart the tick. */
	                tick();
	            } else {
	                ticker = window.requestAnimationFrame || rAFShim;
	            }
	        });
	    }
	
	    /************
	        Tick
	    ************/
	
	    /* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
	    function tick (timestamp) {
	        /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
	           We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
	           the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
	           calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
	           the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
	           by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
	        if (timestamp) {
	            /* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is
	               under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */
	            var timeCurrent = (new Date).getTime();
	
	            /********************
	               Call Iteration
	            ********************/
	
	            var callsLength = Velocity.State.calls.length;
	
	            /* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
	               when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
	               has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
	            if (callsLength > 10000) {
	                Velocity.State.calls = compactSparseArray(Velocity.State.calls);
	            }
	
	            /* Iterate through each active call. */
	            for (var i = 0; i < callsLength; i++) {
	                /* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
	                if (!Velocity.State.calls[i]) {
	                    continue;
	                }
	
	                /************************
	                   Call-Wide Variables
	                ************************/
	
	                var callContainer = Velocity.State.calls[i],
	                    call = callContainer[0],
	                    opts = callContainer[2],
	                    timeStart = callContainer[3],
	                    firstTick = !!timeStart,
	                    tweenDummyValue = null;
	
	                /* If timeStart is undefined, then this is the first time that this call has been processed by tick().
	                   We assign timeStart now so that its value is as close to the real animation start time as possible.
	                   (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
	                   between that time and now would cause the first few frames of the tween to be skipped since
	                   percentComplete is calculated relative to timeStart.) */
	                /* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
	                   first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
	                   same style value as the element's current value. */
	                if (!timeStart) {
	                    timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
	                }
	
	                /* The tween's completion percentage is relative to the tween's start time, not the tween's start value
	                   (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
	                   Accordingly, we ensure that percentComplete does not exceed 1. */
	                var percentComplete = Math.min((timeCurrent - timeStart) / opts.duration, 1);
	
	                /**********************
	                   Element Iteration
	                **********************/
	
	                /* For every call, iterate through each of the elements in its set. */
	                for (var j = 0, callLength = call.length; j < callLength; j++) {
	                    var tweensContainer = call[j],
	                        element = tweensContainer.element;
	
	                    /* Check to see if this element has been deleted midway through the animation by checking for the
	                       continued existence of its data cache. If it's gone, skip animating this element. */
	                    if (!Data(element)) {
	                        continue;
	                    }
	
	                    var transformPropertyExists = false;
	
	                    /**********************************
	                       Display & Visibility Toggling
	                    **********************************/
	
	                    /* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
	                       (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
	                    if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
	                        if (opts.display === "flex") {
	                            var flexValues = [ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ];
	
	                            $.each(flexValues, function(i, flexValue) {
	                                CSS.setPropertyValue(element, "display", flexValue);
	                            });
	                        }
	
	                        CSS.setPropertyValue(element, "display", opts.display);
	                    }
	
	                    /* Same goes with the visibility option, but its "none" equivalent is "hidden". */
	                    if (opts.visibility !== undefined && opts.visibility !== "hidden") {
	                        CSS.setPropertyValue(element, "visibility", opts.visibility);
	                    }
	
	                    /************************
	                       Property Iteration
	                    ************************/
	
	                    /* For every element, iterate through each property. */
	                    for (var property in tweensContainer) {
	                        /* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
	                        if (property !== "element") {
	                            var tween = tweensContainer[property],
	                                currentValue,
	                                /* Easing can either be a pre-genereated function or a string that references a pre-registered easing
	                                   on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
	                                easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
	
	                            /******************************
	                               Current Value Calculation
	                            ******************************/
	
	                            /* If this is the last tick pass (if we've reached 100% completion for this tween),
	                               ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
	                            if (percentComplete === 1) {
	                                currentValue = tween.endValue;
	                            /* Otherwise, calculate currentValue based on the current delta from startValue. */
	                            } else {
	                                var tweenDelta = tween.endValue - tween.startValue;
	                                currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
	
	                                /* If no value change is occurring, don't proceed with DOM updating. */
	                                if (!firstTick && (currentValue === tween.currentValue)) {
	                                    continue;
	                                }
	                            }
	
	                            tween.currentValue = currentValue;
	
	                            /* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
	                               it can be passed into the progress callback. */
	                            if (property === "tween") {
	                                tweenDummyValue = currentValue;
	                            } else {
	                                /******************
	                                   Hooks: Part I
	                                ******************/
	
	                                /* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
	                                   for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
	                                   rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
	                                   updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
	                                   subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
	                                if (CSS.Hooks.registered[property]) {
	                                    var hookRoot = CSS.Hooks.getRoot(property),
	                                        rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];
	
	                                    if (rootPropertyValueCache) {
	                                        tween.rootPropertyValue = rootPropertyValueCache;
	                                    }
	                                }
	
	                                /*****************
	                                    DOM Update
	                                *****************/
	
	                                /* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
	                                /* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
	                                var adjustedSetData = CSS.setPropertyValue(element, /* SET */
	                                                                           property,
	                                                                           tween.currentValue + (parseFloat(currentValue) === 0 ? "" : tween.unitType),
	                                                                           tween.rootPropertyValue,
	                                                                           tween.scrollData);
	
	                                /*******************
	                                   Hooks: Part II
	                                *******************/
	
	                                /* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
	                                if (CSS.Hooks.registered[property]) {
	                                    /* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
	                                    if (CSS.Normalizations.registered[hookRoot]) {
	                                        Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
	                                    } else {
	                                        Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
	                                    }
	                                }
	
	                                /***************
	                                   Transforms
	                                ***************/
	
	                                /* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
	                                if (adjustedSetData[0] === "transform") {
	                                    transformPropertyExists = true;
	                                }
	
	                            }
	                        }
	                    }
	
	                    /****************
	                        mobileHA
	                    ****************/
	
	                    /* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
	                       It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
	                    if (opts.mobileHA) {
	                        /* Don't set the null transform hack if we've already done so. */
	                        if (Data(element).transformCache.translate3d === undefined) {
	                            /* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
	                            Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
	
	                            transformPropertyExists = true;
	                        }
	                    }
	
	                    if (transformPropertyExists) {
	                        CSS.flushTransformCache(element);
	                    }
	                }
	
	                /* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
	                   Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
	                if (opts.display !== undefined && opts.display !== "none") {
	                    Velocity.State.calls[i][2].display = false;
	                }
	                if (opts.visibility !== undefined && opts.visibility !== "hidden") {
	                    Velocity.State.calls[i][2].visibility = false;
	                }
	
	                /* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
	                if (opts.progress) {
	                    opts.progress.call(callContainer[1],
	                                       callContainer[1],
	                                       percentComplete,
	                                       Math.max(0, (timeStart + opts.duration) - timeCurrent),
	                                       timeStart,
	                                       tweenDummyValue);
	                }
	
	                /* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
	                if (percentComplete === 1) {
	                    completeCall(i);
	                }
	            }
	        }
	
	        /* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
	        if (Velocity.State.isTicking) {
	            ticker(tick);
	        }
	    }
	
	    /**********************
	        Call Completion
	    **********************/
	
	    /* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
	    function completeCall (callIndex, isStopped) {
	        /* Ensure the call exists. */
	        if (!Velocity.State.calls[callIndex]) {
	            return false;
	        }
	
	        /* Pull the metadata from the call. */
	        var call = Velocity.State.calls[callIndex][0],
	            elements = Velocity.State.calls[callIndex][1],
	            opts = Velocity.State.calls[callIndex][2],
	            resolver = Velocity.State.calls[callIndex][4];
	
	        var remainingCallsExist = false;
	
	        /*************************
	           Element Finalization
	        *************************/
	
	        for (var i = 0, callLength = call.length; i < callLength; i++) {
	            var element = call[i].element;
	
	            /* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
	            /* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
	            /* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
	            if (!isStopped && !opts.loop) {
	                if (opts.display === "none") {
	                    CSS.setPropertyValue(element, "display", opts.display);
	                }
	
	                if (opts.visibility === "hidden") {
	                    CSS.setPropertyValue(element, "visibility", opts.visibility);
	                }
	            }
	
	            /* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
	               a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
	               an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
	               we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
	               is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
	            if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
	                /* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
	                if (Data(element)) {
	                    Data(element).isAnimating = false;
	                    /* Clear the element's rootPropertyValueCache, which will become stale. */
	                    Data(element).rootPropertyValueCache = {};
	
	                    var transformHAPropertyExists = false;
	                    /* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
	                    $.each(CSS.Lists.transforms3D, function(i, transformName) {
	                        var defaultValue = /^scale/.test(transformName) ? 1 : 0,
	                            currentValue = Data(element).transformCache[transformName];
	
	                        if (Data(element).transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
	                            transformHAPropertyExists = true;
	
	                            delete Data(element).transformCache[transformName];
	                        }
	                    });
	
	                    /* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
	                    if (opts.mobileHA) {
	                        transformHAPropertyExists = true;
	                        delete Data(element).transformCache.translate3d;
	                    }
	
	                    /* Flush the subproperty removals to the DOM. */
	                    if (transformHAPropertyExists) {
	                        CSS.flushTransformCache(element);
	                    }
	
	                    /* Remove the "velocity-animating" indicator class. */
	                    CSS.Values.removeClass(element, "velocity-animating");
	                }
	            }
	
	            /*********************
	               Option: Complete
	            *********************/
	
	            /* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
	            /* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
	            if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
	                /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
	                try {
	                    opts.complete.call(elements, elements);
	                } catch (error) {
	                    setTimeout(function() { throw error; }, 1);
	                }
	            }
	
	            /**********************
	               Promise Resolving
	            **********************/
	
	            /* Note: Infinite loops don't return promises. */
	            if (resolver && opts.loop !== true) {
	                resolver(elements);
	            }
	
	            /****************************
	               Option: Loop (Infinite)
	            ****************************/
	
	            if (Data(element) && opts.loop === true && !isStopped) {
	                /* If a rotateX/Y/Z property is being animated to 360 deg with loop:true, swap tween start/end values to enable
	                   continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
	                $.each(Data(element).tweensContainer, function(propertyName, tweenContainer) {
	                    if (/^rotate/.test(propertyName) && parseFloat(tweenContainer.endValue) === 360) {
	                        tweenContainer.endValue = 0;
	                        tweenContainer.startValue = 360;
	                    }
	
	                    if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
	                        tweenContainer.endValue = 0;
	                        tweenContainer.startValue = 100;
	                    }
	                });
	
	                Velocity(element, "reverse", { loop: true, delay: opts.delay });
	            }
	
	            /***************
	               Dequeueing
	            ***************/
	
	            /* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
	               which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
	               $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
	            if (opts.queue !== false) {
	                $.dequeue(element, opts.queue);
	            }
	        }
	
	        /************************
	           Calls Array Cleanup
	        ************************/
	
	        /* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
	          (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
	        Velocity.State.calls[callIndex] = false;
	
	        /* Iterate through the calls array to determine if this was the final in-progress animation.
	           If so, set a flag to end ticking and clear the calls array. */
	        for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
	            if (Velocity.State.calls[j] !== false) {
	                remainingCallsExist = true;
	
	                break;
	            }
	        }
	
	        if (remainingCallsExist === false) {
	            /* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
	            Velocity.State.isTicking = false;
	
	            /* Clear the calls array so that its length is reset. */
	            delete Velocity.State.calls;
	            Velocity.State.calls = [];
	        }
	    }
	
	    /******************
	        Frameworks
	    ******************/
	
	    /* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
	       If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
	       also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
	       accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
	       (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
	    global.Velocity = Velocity;
	
	    if (global !== window) {
	        /* Assign the element function to Velocity's core animate() method. */
	        global.fn.velocity = animate;
	        /* Assign the object function's defaults to Velocity's global defaults object. */
	        global.fn.velocity.defaults = Velocity.defaults;
	    }
	
	    /***********************
	       Packaged Redirects
	    ***********************/
	
	    /* slideUp, slideDown */
	    $.each([ "Down", "Up" ], function(i, direction) {
	        Velocity.Redirects["slide" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
	            var opts = $.extend({}, options),
	                begin = opts.begin,
	                complete = opts.complete,
	                computedValues = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
	                inlineValues = {};
	
	            if (opts.display === undefined) {
	                /* Show the element before slideDown begins and hide the element after slideUp completes. */
	                /* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
	                opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
	            }
	
	            opts.begin = function() {
	                /* If the user passed in a begin callback, fire it now. */
	                begin && begin.call(elements, elements);
	
	                /* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
	                for (var property in computedValues) {
	                    inlineValues[property] = element.style[property];
	
	                    /* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
	                       use forcefeeding to start from computed values and animate down to 0. */
	                    var propertyValue = Velocity.CSS.getPropertyValue(element, property);
	                    computedValues[property] = (direction === "Down") ? [ propertyValue, 0 ] : [ 0, propertyValue ];
	                }
	
	                /* Force vertical overflow content to clip so that sliding works as expected. */
	                inlineValues.overflow = element.style.overflow;
	                element.style.overflow = "hidden";
	            }
	
	            opts.complete = function() {
	                /* Reset element to its pre-slide inline values once its slide animation is complete. */
	                for (var property in inlineValues) {
	                    element.style[property] = inlineValues[property];
	                }
	
	                /* If the user passed in a complete callback, fire it now. */
	                complete && complete.call(elements, elements);
	                promiseData && promiseData.resolver(elements);
	            };
	
	            Velocity(element, computedValues, opts);
	        };
	    });
	
	    /* fadeIn, fadeOut */
	    $.each([ "In", "Out" ], function(i, direction) {
	        Velocity.Redirects["fade" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
	            var opts = $.extend({}, options),
	                propertiesMap = { opacity: (direction === "In") ? 1 : 0 },
	                originalComplete = opts.complete;
	
	            /* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
	               callbacks by firing them only when the final element has been reached. */
	            if (elementsIndex !== elementsSize - 1) {
	                opts.complete = opts.begin = null;
	            } else {
	                opts.complete = function() {
	                    if (originalComplete) {
	                        originalComplete.call(elements, elements);
	                    }
	
	                    promiseData && promiseData.resolver(elements);
	                }
	            }
	
	            /* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
	            /* Note: We allow users to pass in "null" to skip display setting altogether. */
	            if (opts.display === undefined) {
	                opts.display = (direction === "In" ? "auto" : "none");
	            }
	
	            Velocity(this, propertiesMap, opts);
	        };
	    });
	
	    return Velocity;
	}((window.jQuery || window.Zepto || window), window, document);
	}));
	
	/******************
	   Known Issues
	******************/
	
	/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TweenOne = __webpack_require__(201);
	TweenOne.TweenOneGroup = __webpack_require__(202);
	TweenOne.easing = __webpack_require__(184);
	module.exports = TweenOne;

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(41);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _util = __webpack_require__(185);
	
	var _styleUtils = __webpack_require__(186);
	
	var _TimeLine = __webpack_require__(183);
	
	var _TimeLine2 = _interopRequireDefault(_TimeLine);
	
	var _plugins = __webpack_require__(187);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	var _ticker = __webpack_require__(189);
	
	var _ticker2 = _interopRequireDefault(_ticker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function noop() {}
	
	var perFrame = Math.round(1000 / 60);
	
	var TweenOne = function (_Component) {
	  _inherits(TweenOne, _Component);
	
	  function TweenOne() {
	    _classCallCheck(this, TweenOne);
	
	    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));
	
	    _this.restart = function () {
	      _this.startMoment = _this.timeLine.progressTime;
	      _this.startFrame = _ticker2["default"].frame;
	      _this.play();
	    };
	
	    _this.start = function () {
	      var props = _this.props;
	      if (props.animation && Object.keys(props.animation).length) {
	        _this.timeLine = new _TimeLine2["default"](_this.dom, (0, _util.dataToArray)(props.animation), props.attr);
	        // 开始动画
	        _this.play();
	        // 预先注册 raf, 初始动画数值。
	        _this.raf(0, true);
	      }
	    };
	
	    _this.play = function () {
	      _this.cancelRequestAnimationFrame();
	      if (_this.paused) {
	        return;
	      }
	      _this.rafID = _ticker2["default"].add(_this.raf);
	    };
	
	    _this.frame = function (register) {
	      var moment = (_ticker2["default"].frame - _this.startFrame) * perFrame + (!register && _this.startMoment || 0);
	      if (_this.reverse) {
	        moment = (_this.startMoment || 0) - (_ticker2["default"].frame - _this.startFrame) * perFrame;
	      }
	      moment = moment > _this.timeLine.totalTime ? _this.timeLine.totalTime : moment;
	      moment = moment <= 0 ? 0 : moment;
	      if (moment < _this.moment && !_this.reverse) {
	        _this.timeLine.resetDefaultStyle();
	      }
	      _this.moment = moment;
	      _this.timeLine.onChange = _this.onChange;
	      _this.timeLine.frame(moment);
	    };
	
	    _this.raf = function (date, register) {
	      _this.frame(register);
	      if (_this.moment >= _this.timeLine.totalTime && !_this.reverse || _this.paused || _this.reverse && _this.moment === 0) {
	        return _this.cancelRequestAnimationFrame();
	      }
	    };
	
	    _this.cancelRequestAnimationFrame = function () {
	      _ticker2["default"].clear(_this.rafID);
	      _this.rafID = -1;
	    };
	
	    _this.rafID = -1;
	    _this.moment = _this.props.moment || 0;
	    _this.startMoment = _this.props.moment || perFrame - 1;
	    _this.startFrame = _ticker2["default"].frame;
	    _this.paused = _this.props.paused;
	    _this.reverse = _this.props.reverse;
	    _this.onChange = _this.props.onChange;
	    return _this;
	  }
	
	  TweenOne.prototype.componentDidMount = function componentDidMount() {
	    this.dom = _reactDom2["default"].findDOMNode(this);
	    this.start();
	  };
	
	  TweenOne.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    this.onChange = nextProps.onChange;
	    // 跳帧事件 moment;
	    var newMoment = nextProps.moment;
	    if (typeof newMoment === 'number' && newMoment !== this.moment) {
	      this.startMoment = newMoment;
	      this.startFrame = _ticker2["default"].frame;
	      if (this.rafID === -1 && !nextProps.paused) {
	        (function () {
	          _this2.timeLine.resetAnimData();
	          var style = nextProps.style;
	          _this2.dom.setAttribute('style', '');
	          Object.keys(style).forEach(function (key) {
	            _this2.dom.style[key] = (0, _styleUtils.stylesToCss)(key, style[key]);
	          });
	          _this2.play();
	        })();
	      } else {
	        this.raf();
	      }
	    }
	    // 动画处理
	    var newAnimation = nextProps.animation;
	    var currentAnimation = this.props.animation;
	    var equal = (0, _util.objectEqual)(currentAnimation, newAnimation);
	    var styleEqual = (0, _util.objectEqual)(this.props.style, nextProps.style);
	    // 如果 animation 不同， 重新动画
	    this.restartAnim = false;
	    if (!equal) {
	      this.cancelRequestAnimationFrame();
	      if (nextProps.resetStyleBool && this.timeLine) {
	        this.timeLine.resetDefaultStyle();
	      }
	      this.startMoment = perFrame - 1; // 设置 perFrame 为开始时就播放一帧动画, 不是从0开始, 鼠标跟随使用
	      this.startFrame = _ticker2["default"].frame;
	      this.restartAnim = true;
	      // this.start(nextProps);
	    } else if (!styleEqual) {
	      // 如果 animation 相同，，style 不同，从当前时间开放。
	      if (this.rafID !== -1) {
	        this.cancelRequestAnimationFrame();
	        this.startMoment = this.timeLine.progressTime;
	        this.startFrame = _ticker2["default"].frame;
	        this.restartAnim = true;
	        // this.start(nextProps);
	      }
	    }
	    // 暂停倒放
	    if (this.paused !== nextProps.paused || this.reverse !== nextProps.reverse) {
	      this.paused = nextProps.paused;
	      this.reverse = nextProps.reverse;
	      if (this.paused) {
	        this.cancelRequestAnimationFrame();
	      } else {
	        if (this.reverse && nextProps.reverseDelay) {
	          this.cancelRequestAnimationFrame();
	          _ticker2["default"].timeout(this.restart, nextProps.reverseDelay);
	        } else {
	          this.restart();
	        }
	      }
	    }
	  };
	
	  TweenOne.prototype.componentDidUpdate = function componentDidUpdate() {
	    // 样式更新了后再执行动画；
	    if (this.restartAnim) {
	      this.start();
	    }
	  };
	
	  TweenOne.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelRequestAnimationFrame();
	  };
	
	  TweenOne.prototype.render = function render() {
	    var props = _extends({}, this.props);
	    ['animation', 'component', 'reverseDelay', 'attr', 'paused', 'reverse', 'moment', 'resetStyleBool'].forEach(function (key) {
	      return delete props[key];
	    });
	    props.style = _extends({}, this.props.style);
	    Object.keys(props.style).forEach(function (p) {
	      if (p.match(/filter/i)) {
	        ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
	          return props.style[prefix + 'Filter'] = props.style[p];
	        });
	      }
	    });
	    props.component = typeof props.component === 'function' ? this.props.componentReplace : props.component;
	    if (!props.component) {
	      delete props.component;
	    }
	    return _react2["default"].createElement(this.props.component, props);
	  };
	
	  return TweenOne;
	}(_react.Component);
	
	var objectOrArray = _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]);
	
	TweenOne.propTypes = {
	  component: _react.PropTypes.any,
	  componentReplace: _react.PropTypes.string,
	  animation: objectOrArray,
	  children: _react.PropTypes.any,
	  style: _react.PropTypes.object,
	  paused: _react.PropTypes.bool,
	  reverse: _react.PropTypes.bool,
	  reverseDelay: _react.PropTypes.number,
	  moment: _react.PropTypes.number,
	  attr: _react.PropTypes.string,
	  onChange: _react.PropTypes.func,
	  resetStyleBool: _react.PropTypes.bool
	};
	
	TweenOne.defaultProps = {
	  component: 'div',
	  reverseDelay: 0,
	  attr: 'style',
	  onChange: noop
	};
	TweenOne.plugins = _plugins2["default"];
	exports["default"] = TweenOne;
	module.exports = exports['default'];

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TweenOne = __webpack_require__(201);
	
	var _TweenOne2 = _interopRequireDefault(_TweenOne);
	
	var _util = __webpack_require__(185);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function noop() {}
	
	var TweenOneGroup = function (_Component) {
	  _inherits(TweenOneGroup, _Component);
	
	  function TweenOneGroup() {
	    _classCallCheck(this, TweenOneGroup);
	
	    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));
	
	    _initialiseProps.call(_this);
	
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	    _this.onEnterBool = false;
	    _this.isTween = {};
	    // 第一进入，appear 为 true 时默认用 enter 或 tween-one 上的效果
	    var children = (0, _util.toArrayChildren)((0, _util.getChildrenFromProps)(_this.props));
	    _this.state = {
	      children: children
	    };
	    return _this;
	  }
	
	  TweenOneGroup.prototype.componentDidMount = function componentDidMount() {
	    this.onEnterBool = true;
	  };
	
	  TweenOneGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    var nextChildren = (0, _util.toArrayChildren)(nextProps.children);
	    var currentChildren = (0, _util.toArrayChildren)(this.state.children);
	    var newChildren = (0, _util.mergeChildren)(currentChildren, nextChildren);
	
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    nextChildren.forEach(function (c) {
	      if (!c) {
	        return;
	      }
	      var key = c.key;
	      var hasPrev = (0, _util.findChildInChildrenByKey)(currentChildren, key);
	      if (!hasPrev && key) {
	        _this2.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (c) {
	      if (!c) {
	        return;
	      }
	      var key = c.key;
	      var hasNext = (0, _util.findChildInChildrenByKey)(nextChildren, key);
	      if (!hasNext && key) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	    this.setState({
	      children: newChildren
	    });
	  };
	
	  TweenOneGroup.prototype.render = function render() {
	    var childrenToRender = this.getChildrenToRender(this.state.children);
	    if (!this.props.component) {
	      return childrenToRender[0] || null;
	    }
	    var componentProps = _extends({}, this.props);
	    ['component', 'appear', 'enter', 'leave', 'animatingClassName', 'onEnd', 'resetStyleBool'].forEach(function (key) {
	      return delete componentProps[key];
	    });
	    return (0, _react.createElement)(this.props.component, componentProps, childrenToRender);
	  };
	
	  return TweenOneGroup;
	}(_react.Component);
	
	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this.onChange = function (animation, key, type, obj) {
	    var length = (0, _util.dataToArray)(animation).length;
	    var animatingClassName = _this3.props.animatingClassName;
	    var tag = obj.target;
	    var isEnter = type === 'enter' || type === 'appear';
	    if (obj.mode === 'onStart') {
	      tag.className = tag.className.replace(animatingClassName[isEnter ? 1 : 0], '').trim();
	      if (tag.className.indexOf(animatingClassName[isEnter ? 0 : 1]) === -1) {
	        tag.className = (tag.className + ' ' + animatingClassName[isEnter ? 0 : 1]).trim();
	      }
	    } else if (obj.index === length - 1 && obj.mode === 'onComplete') {
	      var children = _this3.state.children;
	      if (type === 'enter') {
	        _this3.keysToEnter.splice(_this3.keysToEnter.indexOf(key), 1);
	      } else if (type === 'leave') {
	        children = _this3.state.children.filter(function (child) {
	          return key !== child.key;
	        });
	        _this3.keysToLeave.splice(_this3.keysToLeave.indexOf(key), 1);
	      }
	      tag.className = tag.className.replace(animatingClassName[isEnter ? 0 : 1], '').trim();
	      delete _this3.isTween[key];
	      _this3.setState({
	        children: children
	      });
	      var _obj = { key: key, type: type };
	      _this3.props.onEnd(_obj);
	    }
	  };
	
	  this.getCoverAnimation = function (child, i, type) {
	    var animation = void 0;
	    var onChange = void 0;
	    animation = type === 'leave' ? _this3.props.leave : _this3.props.enter;
	    if (type === 'appear') {
	      var appear = (0, _util.transformArguments)(_this3.props.appear, child.key, i);
	      animation = appear && _this3.props.enter || null;
	    }
	    onChange = _this3.onChange.bind(_this3, animation, child.key, type);
	    var children = _react2["default"].createElement(_TweenOne2["default"], _extends({}, child.props, {
	      key: child.key,
	      component: child.type,
	      animation: (0, _util.transformArguments)(animation, child.key, i),
	      onChange: onChange,
	      resetStyleBool: _this3.props.resetStyleBool
	    }));
	    if (_this3.keysToEnter.concat(_this3.keysToLeave).indexOf(child.key) >= 0 || !_this3.onEnterBool && animation) {
	      _this3.isTween[child.key] = type;
	    }
	    return children;
	  };
	
	  this.getChildrenToRender = function (children) {
	    return children.map(function (child, i) {
	      if (!child || !child.key) {
	        return child;
	      }
	      var key = child.key;
	      if (_this3.keysToLeave.indexOf(key) >= 0) {
	        return _this3.getCoverAnimation(child, i, 'leave');
	      } else if (_this3.keysToEnter.indexOf(key) >= 0 || _this3.isTween[child.key] && _this3.keysToLeave.indexOf(key) === -1) {
	        return _this3.getCoverAnimation(child, i, 'enter');
	      } else if (!_this3.onEnterBool) {
	        return _this3.getCoverAnimation(child, i, 'appear');
	      }
	      return _this3.isTween[child.key] && _this3.getCoverAnimation(child, i, _this3.isTween[child.key]) || _react2["default"].createElement(_TweenOne2["default"], _extends({}, child.props, { component: child.type, key: child.key }));
	    });
	  };
	};
	
	var objectOrArray = _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]);
	var objectOrArrayOrFunc = _react.PropTypes.oneOfType([objectOrArray, _react.PropTypes.func]);
	
	TweenOneGroup.propTypes = {
	  component: _react.PropTypes.any,
	  children: _react.PropTypes.any,
	  style: _react.PropTypes.object,
	  appear: _react.PropTypes.bool,
	  enter: objectOrArrayOrFunc,
	  leave: objectOrArrayOrFunc,
	  animatingClassName: _react.PropTypes.array,
	  onEnd: _react.PropTypes.func,
	  resetStyleBool: _react.PropTypes.bool
	};
	
	TweenOneGroup.defaultProps = {
	  component: 'div',
	  appear: true,
	  animatingClassName: ['tween-one-entering', 'tween-one-leaving'],
	  enter: { x: 50, opacity: 0, type: 'from' },
	  leave: { x: -50, opacity: 0 },
	  onEnd: noop,
	  resetStyleBool: true
	};
	exports["default"] = TweenOneGroup;
	module.exports = exports['default'];

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// export this package's api
	module.exports = __webpack_require__(204);

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChildrenUtils = __webpack_require__(205);
	
	var _AnimateChild = __webpack_require__(206);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(211);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var defaultKey = 'rc_animate_' + Date.now();
	
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var Animate = _react2["default"].createClass({
	  displayName: 'Animate',
	
	  propTypes: {
	    component: _react2["default"].PropTypes.any,
	    animation: _react2["default"].PropTypes.object,
	    transitionName: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.object]),
	    transitionEnter: _react2["default"].PropTypes.bool,
	    transitionAppear: _react2["default"].PropTypes.bool,
	    exclusive: _react2["default"].PropTypes.bool,
	    transitionLeave: _react2["default"].PropTypes.bool,
	    onEnd: _react2["default"].PropTypes.func,
	    onEnter: _react2["default"].PropTypes.func,
	    onLeave: _react2["default"].PropTypes.func,
	    onAppear: _react2["default"].PropTypes.func,
	    showProp: _react2["default"].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this.performAppear(child.key);
	      }
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },
	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },
	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },
	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },
	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  },
	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },
	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(
	          _AnimateChild2["default"],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave
	          },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = {
	          className: props.className,
	          style: props.style
	        };
	      }
	      return _react2["default"].createElement(
	        Component,
	        passedProps,
	        children
	      );
	    }
	    return children[0] || null;
	  }
	});
	
	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(41);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _cssAnimation = __webpack_require__(207);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _util = __webpack_require__(211);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var AnimateChild = _react2["default"].createClass({
	  displayName: 'AnimateChild',
	
	  propTypes: {
	    children: _react2["default"].PropTypes.any
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },
	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },
	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  },
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;
	
	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _cssAnimation2["default"])(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },
	  stop: function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  },
	  render: function render() {
	    return this.props.children;
	  }
	});
	
	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _Event = __webpack_require__(208);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(209);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;
	
	
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);
	
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2["default"])(node);
	
	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);
	
	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };
	
	  _Event2["default"].addEndEventListener(node, node.rcEndListener);
	
	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  _Event2["default"].addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	exports["default"] = cssAnimation;
	module.exports = exports['default'];

/***/ },

/***/ 208:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports["default"] = TransitionEvents;
	module.exports = exports['default'];

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(210);
	} catch (err) {
	  var index = __webpack_require__(210);
	}
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ },

/***/ 210:
/***/ function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },

/***/ 211:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports['default'];

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcScrollAnim = __webpack_require__(3);
	
	var _rcScrollAnim2 = _interopRequireDefault(_rcScrollAnim);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(41);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcQueueAnim = __webpack_require__(194);
	
	var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);
	
	var _rcTweenOne = __webpack_require__(200);
	
	var _rcTweenOne2 = _interopRequireDefault(_rcTweenOne);
	
	var _rcAnimate = __webpack_require__(203);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // use jsx to render html, do not modify simple.html
	
	
	var _package = __webpack_require__(212);
	
	var Link = _rcScrollAnim2.default.Link;
	var Element = _rcScrollAnim2.default.Element;
	var ScrollOverPack = _rcScrollAnim2.default.OverPack;
	var EventListener = _rcScrollAnim2.default.Event;
	// ScrollAnim.scrollScreen({scrollInterval: 600});
	
	var Demo = function (_React$Component) {
	  _inherits(Demo, _React$Component);
	
	  function Demo() {
	    _classCallCheck(this, Demo);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	    _this.onFocus = function (e) {
	      _this.dom = e.target;
	      _this.barAnimate();
	    };
	
	    _this.onDataLoadEnd = function (func) {
	      setTimeout(function () {
	        _this.setState({ show: true }, func);
	      }, 1500);
	    };
	
	    _this.state = {
	      show: false
	    };
	    return _this;
	  }
	
	  Demo.prototype.componentDidMount = function componentDidMount() {
	    // 添加改变窗口事件,可加setTimeout
	    EventListener.addEventListener('resize.userResize', this.barAnimate.bind(this));
	  };
	
	  Demo.prototype.barAnimate = function barAnimate() {
	    if (!this.dom) {
	      return;
	    }
	    var bar = this.refs.bar;
	    bar.style.left = this.dom.getBoundingClientRect().left + 'px';
	  };
	
	  Demo.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'nav' },
	        _react2.default.createElement(
	          'div',
	          { className: 'logo' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'Ant Motion'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'nav-wap' },
	          _react2.default.createElement(
	            Link,
	            { className: 'nav-list', to: 'page0', showHeightActive: ['50%', '10%'],
	              onFocus: this.onFocus,
	              onAsynchronousAddEvent: this.onDataLoadEnd
	            },
	            'Example'
	          ),
	          _react2.default.createElement(
	            Link,
	            { className: 'nav-list', to: 'page1', showHeightActive: ['10%', '60%'], toShowHeight: true,
	              onFocus: this.onFocus,
	              onAsynchronousAddEvent: this.onDataLoadEnd
	            },
	            'Example2'
	          ),
	          _react2.default.createElement(
	            Link,
	            { className: 'nav-list', to: 'page2', showHeightActive: ['60%', '50%'], toShowHeight: true,
	              onFocus: this.onFocus,
	              onAsynchronousAddEvent: this.onDataLoadEnd
	            },
	            'Example3'
	          ),
	          _react2.default.createElement(
	            Link,
	            { className: 'nav-list', to: 'page3', offsetTop: 100,
	              onFocus: this.onFocus,
	              onAsynchronousAddEvent: this.onDataLoadEnd
	            },
	            'Example4'
	          ),
	          _react2.default.createElement('div', { ref: 'bar', className: 'nav-bar' })
	        )
	      ),
	      this.state.show && [_react2.default.createElement(
	        Element,
	        { className: 'pack-page page0', id: 'page0', key: 'banner' },
	        _react2.default.createElement(
	          _rcQueueAnim2.default,
	          { className: 'home-title' },
	          _react2.default.createElement(
	            'div',
	            { className: 'page-title', key: 'title' },
	            _react2.default.createElement(
	              'p',
	              null,
	              _package.name,
	              '@',
	              _package.version
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'page-description', key: 'c' },
	            _react2.default.createElement(
	              'p',
	              null,
	              'The link demo'
	            )
	          )
	        )
	      ), _react2.default.createElement(
	        ScrollOverPack,
	        { id: 'page1', className: 'page1', hideProps: { 0: { reverse: true } }, key: '1' },
	        _react2.default.createElement(
	          _rcTweenOne2.default,
	          { className: 'tween-one', key: '0', animation: { opacity: 1 } },
	          '\u9ED8\u8BA4\u8FDB\u5165\u4E0E\u51FA\u573A'
	        ),
	        _react2.default.createElement(
	          _rcQueueAnim2.default,
	          { key: '1' },
	          _react2.default.createElement('div', { key: '0', className: 'demo' }),
	          _react2.default.createElement('div', { key: '1', className: 'demo', style: { backgroundColor: '#F38EAD' } }),
	          _react2.default.createElement('div', { key: '2', className: 'demo' }),
	          _react2.default.createElement('div', { key: '3', className: 'demo' })
	        )
	      ), _react2.default.createElement(
	        ScrollOverPack,
	        {
	          className: 'pack-page page2',
	          style: { backgroundColor: '#0098CE' },
	          always: false,
	          id: 'page2',
	          hideProps: { 1: { reverse: true } },
	          key: '2'
	        },
	        _react2.default.createElement(
	          'div',
	          { className: 'page2-title' },
	          '\u53EA\u8FDB\u5165\u4E00\u6B21'
	        ),
	        _react2.default.createElement(
	          _rcAnimate2.default,
	          { key: '0', transitionName: 'fade', transitionAppear: true },
	          _react2.default.createElement('div', { className: 'demo2' })
	        ),
	        _react2.default.createElement(_rcTweenOne2.default, {
	          className: 'demo2',
	          animation: { y: 0, opacity: 1 },
	          key: '1',
	          style: { transform: 'translateY(100px)', opacity: 0 }
	        })
	      ), _react2.default.createElement(
	        ScrollOverPack,
	        {
	          className: 'pack-page page3',
	          style: { backgroundColor: '#174270' },
	          playScale: 0.8,
	          id: 'page3',
	          hideProps: { title: { reverse: true }, 1: { reverse: true } },
	          key: '3'
	        },
	        _react2.default.createElement(
	          _rcTweenOne2.default,
	          { animation: { opacity: 1 }, style: { opacity: 0 }, key: 'title',
	            className: 'page2-title'
	          },
	          '\u5728\u9875\u976280\uFF05\u65F6\u8FDB\u5165'
	        ),
	        _react2.default.createElement(
	          _rcAnimate2.default,
	          { key: '0', transitionName: 'fade', transitionAppear: true },
	          _react2.default.createElement('div', { className: 'demo' })
	        ),
	        _react2.default.createElement(_rcTweenOne2.default, {
	          className: 'demo',
	          animation: { y: 0, opacity: 1 },
	          key: '1',
	          style: { transform: 'translateY(100px)', opacity: 0 }
	        })
	      )]
	    );
	  };
	
	  return Demo;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=linkAsynchronous.js.map