webpackJsonp([5],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _focus = __webpack_require__(117);

var _focus2 = _interopRequireDefault(_focus);

var _func = __webpack_require__(72);

var _func2 = _interopRequireDefault(_func);

var _keyCode = __webpack_require__(76);

var _keyCode2 = _interopRequireDefault(_keyCode);

var _pickAttrs = __webpack_require__(120);

var _pickAttrs2 = _interopRequireDefault(_pickAttrs);

var _scrollbar = __webpack_require__(122);

var _scrollbar2 = _interopRequireDefault(_scrollbar);

var _support = __webpack_require__(123);

var _support2 = _interopRequireDefault(_support);

var _log = __webpack_require__(118);

var _log2 = _interopRequireDefault(_log);

var _pickOthers = __webpack_require__(121);

var _pickOthers2 = _interopRequireDefault(_pickOthers);

var _object = __webpack_require__(119);

var _object2 = _interopRequireDefault(_object);

var _children = __webpack_require__(116);

var _children2 = _interopRequireDefault(_children);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

module.exports = {
    focus: _focus2['default'],
    func: _func2['default'],
    keyCode: _keyCode2['default'],
    pickAttrs: _pickAttrs2['default'],
    scrollbar: _scrollbar2['default'],
    support: _support2['default'],
    log: _log2['default'],
    pickOthers: _pickOthers2['default'],
    obj: _object2['default'],
    children: _children2['default']
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(105);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _icon2['default'];
module.exports = exports['default'];

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return warning; });
/* harmony export (immutable) */ __webpack_exports__["e"] = format;
/* harmony export (immutable) */ __webpack_exports__["f"] = isEmptyValue;
/* unused harmony export isEmptyObject */
/* harmony export (immutable) */ __webpack_exports__["b"] = asyncMap;
/* harmony export (immutable) */ __webpack_exports__["d"] = complementError;
/* harmony export (immutable) */ __webpack_exports__["a"] = deepMerge;


var formatRegExp = /%[sdj%]/g;

var warning = function warning() {};

// don't print warning message when in production env or node runtime
if ("development" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }
    return str;
  }
  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var flattenArr = flattenObjArr(objArr);
    return asyncSerialArray(flattenArr, func, callback);
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var next = function next(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === objArrLength) {
      callback(results);
    }
  };
  objArrKeys.forEach(function (key) {
    var arr = objArr[key];
    if (firstFields.indexOf(key) !== -1) {
      asyncSerialArray(arr, func, next);
    } else {
      asyncParallelArray(arr, func, next);
    }
  });
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(value)) === 'object' && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(target[s]) === 'object') {
          target[s] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    classList: __webpack_require__(101),
    events: __webpack_require__(102),
    position: __webpack_require__(103),
    style: __webpack_require__(45)
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__required__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__whitespace__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enum__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pattern__ = __webpack_require__(168);







/* harmony default export */ __webpack_exports__["a"] = ({
  required: __WEBPACK_IMPORTED_MODULE_0__required__["a" /* default */],
  whitespace: __WEBPACK_IMPORTED_MODULE_1__whitespace__["a" /* default */],
  type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
  range: __WEBPACK_IMPORTED_MODULE_3__range__["a" /* default */],
  'enum': __WEBPACK_IMPORTED_MODULE_4__enum__["a" /* default */],
  pattern: __WEBPACK_IMPORTED_MODULE_5__pattern__["a" /* default */]
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Container = (_temp = _class = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Container.prototype.getPrefix = function getPrefix() {
        return this.context.prefix || this.props.prefix;
    };
    /**
     * 获取当前组件的父节点的实例
     */


    Container.prototype.getParent = function getParent() {
        return this.props.parent;
    };
    /**
     * 获取当前组件的根节点
     */


    Container.prototype.getRoot = function getRoot() {
        var instance = this.props.parent;
        while (instance.props.parent) {
            instance = instance.props.parent;
        }
        return instance;
    };
    /**
     * 为child建立和当前实例的父子级关系
     * @param child {ReactElement}
     */


    Container.prototype.addRelation = function addRelation(child) {
        return _react2['default'].cloneElement(child, {
            parent: this
        });
    };
    /**
     * 根据type获取父级的实例
     * @param type {Class}
     */


    Container.prototype.getParentBy = function getParentBy(func) {
        var instance = this.props.parent,
            result = func(instance) ? [instance] : [];

        while (instance.props.parent) {
            instance = instance.props.parent;
            if (func(instance)) {
                result.push(instance);
            }
        }
        return result;
    };

    Container.prototype.getParentByFlag = function getParentByFlag(flag) {
        return this.getParentBy(function (inc) {
            return inc.constructor[flag];
        });
    };

    Container.prototype.getParentByType = function getParentByType(type) {
        return this.getParentBy(function (inc) {
            return inc instanceof type;
        });
    };
    /**
     * 获取当前组件的孩子节点的实例
     */


    Container.prototype.getChildrenInc = function getChildrenInc() {
        var _this2 = this;

        return Object.keys(this.refs).map(function (key) {
            return _this2.refs[key];
        });
    };
    /**
     * 根据类型获取当前组件的孩子节点的实例
     * @param type {Class}
     */


    Container.prototype.getChildrenIncByType = function getChildrenIncByType(type) {
        return this.getChildrenIncBy(function (child) {
            return child instanceof type;
        });
    };

    Container.prototype.getChildrenIncByFlag = function getChildrenIncByFlag(flag) {
        return this.getChildrenIncBy(function (child) {
            return child.constructor[flag];
        });
    };

    Container.prototype.getChildrenIncBy = function getChildrenIncBy(func) {
        var result = [],
            loop = function loop(children) {
            children.forEach(function (child) {
                if (child.getChildrenInc) {
                    loop(child.getChildrenInc());
                }
                result.push(child);
            });
        };
        loop(this.getChildrenInc());
        return result.filter(func);
    };
    /**
     * 获取当前组件的孩子节点
     * @return {Array<ReactElement>}
     */


    Container.prototype.getChildren = function getChildren() {
        return this.props.children;
    };
    /**
     * 根据类型获取当前组件的孩子节点
     * @param type {Class}
     * @return {Array<ReactElement>}
     */


    Container.prototype.getChildrenByType = function getChildrenByType(type) {
        return this.getChildrenBy(function (child) {
            return child.type === type;
        });
    };

    Container.prototype.getChildrenByFlag = function getChildrenByFlag(flag) {
        return this.getChildrenBy(function (child) {
            return child.type && child.type[flag];
        });
    };

    Container.prototype.getChildrenBy = function getChildrenBy(func) {
        var result = [],
            loop = function loop(children) {
            _react.Children.forEach(children, function (child) {
                if (child.props && child.props.children) {
                    loop(child.props.children);
                }
                result.push(child);
            });
        };
        loop(this.props.children);
        return result.filter(func);
    };

    return Container;
}(_react2['default'].Component), _class.propTypes = {
    prefix: _react.PropTypes.string,
    parent: _react.PropTypes.any,
    children: _react.PropTypes.any
}, _temp);
Container.displayName = 'Container';
exports['default'] = Container;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overlay = __webpack_require__(50);

var _overlay2 = _interopRequireDefault(_overlay);

var _gateway = __webpack_require__(49);

var _gateway2 = _interopRequireDefault(_gateway);

var _position = __webpack_require__(51);

var _position2 = _interopRequireDefault(_position);

var _popup = __webpack_require__(113);

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_overlay2['default'].Gateway = _gateway2['default'];
_overlay2['default'].Position = _position2['default'];
_overlay2['default'].Popup = _popup2['default'];

exports['default'] = _overlay2['default'];
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /* eslint-disable react/prop-types */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _nextUtil = __webpack_require__(2);

var _nextOverlay = __webpack_require__(9);

var _nextAnimate = __webpack_require__(26);

var _nextAnimate2 = _interopRequireDefault(_nextAnimate);

var _container = __webpack_require__(8);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Component = _container2['default'];
var PropTypes = _react2['default'].PropTypes;
/** Menu.Item */
var MenuItem = (_temp = _class = function (_Component) {
    _inherits(MenuItem, _Component);

    function MenuItem(props, context) {
        _classCallCheck(this, MenuItem);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        ['onClick', 'onKeyDown', 'onFocus', 'onMouseEnter', 'onMouseLeave'].forEach(function (method) {
            _this[method] = _this[method].bind(_this);
        });
        var root = _this.getRoot();
        if (!root) {
            throw new Error('MenuItem should use under Menu.');
        }
        _this.root = root;
        _this.Menu = root.constructor;
        _this.SubMenu = root.constructor.SubMenu;
        return _this;
    }

    MenuItem.prototype.componentDidMount = function componentDidMount() {
        this._meta = _extends({
            node: _reactDom2['default'].findDOMNode(this)
        }, this.props);
        this.pushMetaToParent();
    };

    MenuItem.prototype.componentDidUpdate = function componentDidUpdate() {
        // We need update parent ref to avoid root update.
        this.root = this.getRoot();
        this.pushMetaToParent();
    };

    // If it have a parentMenu, we push meta to the parentMenu for keyboard navigation.


    MenuItem.prototype.pushMetaToParent = function pushMetaToParent() {
        var menu = this.getParentByFlag('_menu')[0];
        menu && menu.addChildMeta(this._meta);
    };

    MenuItem.prototype.componentWillUnmount = function componentWillUnmount() {
        var menu = this.getParentByFlag('_menu')[0];
        menu && menu.removeChildMeta(this._meta);
    };

    MenuItem.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            focused = _props.focused,
            selected = _props.selected,
            disabled = _props.disabled,
            helper = _props.helper,
            className = _props.className,
            indentSize = _props.indentSize,
            children = _props.children,
            focusedKey = _props.focusedKey,
            hasSelectedIcon = _props.hasSelectedIcon,
            index = _props.index,
            needIndent = _props.needIndent,
            _props$style = _props.style,
            style = _props$style === undefined ? {} : _props$style,
            others = _objectWithoutProperties(_props, ['focused', 'selected', 'disabled', 'helper', 'className', 'indentSize', 'children', 'focusedKey', 'hasSelectedIcon', 'index', 'needIndent', 'style']),
            prefix = this.getPrefix();

        if (typeof selected === 'undefined') {
            selected = this.root.state.selectedKeys.indexOf(index) > -1;
        }

        var cls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefix + 'menu-item', true), _defineProperty(_classnames, 'disabled', disabled), _defineProperty(_classnames, 'selected', selected), _defineProperty(_classnames, 'focused', index && focusedKey === index), _defineProperty(_classnames, className, className), _classnames)),
            events = {
            onClick: this.onClick,
            onKeyDown: this.onKeyDown,
            onFocus: this.onFocus,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave
        },
            icon = _react2['default'].createElement(
            _nextAnimate2['default'],
            { animation: {
                    appear: 'zoomIn',
                    enter: 'zoomIn',
                    leave: 'zoomOut'
                } },
            hasSelectedIcon && selected ? _react2['default'].createElement(_nextIcon2['default'], { type: 'select', className: prefix + 'menu-icon-select', size: 'xs', style: { left: (indentSize || 20) - 16 + 'px' } }) : null
        );

        helper = helper ? _react2['default'].createElement(
            'em',
            { className: prefix + 'menu-item-helper' },
            helper
        ) : null;
        if (disabled) {
            events = {
                // // Avoid trigger menu onSelect events
                onSelect: function onSelect(e) {
                    e.stopPropagation();
                },
                onClick: function onClick(e) {
                    e.stopPropagation();
                }
            };
        }
        others = (0, _nextUtil.pickAttrs)(others);
        if (indentSize && needIndent === true) {
            style.paddingLeft = indentSize;
        }
        return _react2['default'].createElement(
            'li',
            _extends({}, others, events, {
                style: style,
                tabIndex: disabled ? null : focused ? 0 : -1,
                role: 'menuitem',
                className: cls }),
            children,
            icon,
            helper
        );
    };

    MenuItem.prototype.onClick = function onClick(e) {
        this.root.onItemClick(e, this.props.index, 'click', this);
        // It will crash Popup or others component.
        // We will adjust order of params at 2.x
        this.props.onClick(this.props.index, e);
        e.stopPropagation();
    };

    MenuItem.prototype.onKeyDown = function onKeyDown(e) {
        var keyCode = e.keyCode;
        this.props.onKeyDown(e);
        if (keyCode === 32 || keyCode === 13) {
            this.onClick(e);
        }
    };

    MenuItem.prototype.onFocus = function onFocus(e) {
        e.stopPropagation();
    };

    MenuItem.prototype.onMouseEnter = function onMouseEnter(e) {
        this.root.onKeyNavNodeFocus(e);
        this.root.focusChild(this._meta);
        var parentMenu = this.getParentByType(this.Menu)[0];
        if (parentMenu) {
            var subMenu = parentMenu.getChildrenIncByType(this.SubMenu);
            var popup = parentMenu.getChildrenIncByType(_nextOverlay.Popup);
            subMenu.forEach(function (menu) {
                menu.onContentMouseEnter();
                if (menu.props.triggerType === 'hover') {
                    menu.onSubMenuMouseLeave(e);
                }
            });
            popup.forEach(function (p) {
                p._onContentMouseEnter();
                if (p.props.triggerType === 'hover') {
                    p._onTriggerMouseLeave(e);
                }
            });
        }
        this.props.onMouseEnter(e);
    };

    MenuItem.prototype.onMouseLeave = function onMouseLeave(e) {
        this.root.unFocusChild(this._meta);
        this.props.onMouseLeave(e);
    };

    return MenuItem;
}(Component), _class._menuItem = true, _class.propTypes = {
    /**
    * 显示在菜单右侧的帮助文本，通常用于一些附加信息
    */
    helper: PropTypes.string,
    /**
    * 禁用当前菜单项, 被禁用不会触发事件, 也无法选中Checkbox/Radio
    */
    disabled: PropTypes.bool,
    /**
    * 当前的菜单项是否被选中, 优先级比Menu传入的selectedKeys要高
    */
    selected: PropTypes.bool,
    focused: PropTypes.bool,
    /**
    * 点击了菜单项触发的事件
     * @param {String} key 当前菜单项的key值
     * @param {Event} e DOM事件
    */
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    prefix: PropTypes.string,
    parent: PropTypes.any,
    hasSelectedIcon: PropTypes.bool,
    needIndent: PropTypes.bool
}, _class.defaultProps = {
    helper: null,
    disabled: false,
    prefix: 'next-',
    hasSelectedIcon: true,
    needIndent: true,
    onClick: function onClick() {},
    onKeyDown: function onKeyDown() {},
    onMouseEnter: function onMouseEnter() {},
    onMouseLeave: function onMouseLeave() {}
}, _class.contextTypes = {
    parentIndex: _react2['default'].PropTypes.array,
    parentLabel: _react2['default'].PropTypes.array,
    prefix: PropTypes.string
}, _temp);
MenuItem.displayName = 'MenuItem';
exports['default'] = MenuItem;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(24)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16);
var createDesc = __webpack_require__(38);
module.exports = __webpack_require__(14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(33);
var IE8_DOM_DEFINE = __webpack_require__(85);
var toPrimitive = __webpack_require__(64);
var dP = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(86);
var defined = __webpack_require__(54);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(62)('wks');
var uid = __webpack_require__(39);
var Symbol = __webpack_require__(10).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _deepMerge = __webpack_require__(228);

var _deepMerge2 = _interopRequireDefault(_deepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var LOCALE_CACHE = 'zh-cn';

var COMPONENTS_LOCALE_CACHE = {};

var getDisplayName = function getDisplayName(Component) {
    return Component.displayName || Component.name || (typeof Component === 'string' ? Component : 'Component');
};

var Locale = function Locale(Component) {
    var _class, _temp;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var LocaleProvider = (_temp = _class = function (_React$Component) {
        _inherits(LocaleProvider, _React$Component);

        function LocaleProvider() {
            _classCallCheck(this, LocaleProvider);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        LocaleProvider.prototype._getInstance = function _getInstance(componentInstance) {
            if (componentInstance) {
                this.refs = componentInstance.refs;
                this._instance = componentInstance;
            }
        };

        LocaleProvider.prototype.getInstance = function getInstance() {
            return this._instance;
        };

        LocaleProvider.prototype.render = function render() {
            var _props = this.props,
                language = _props.language,
                _props$locale = _props.locale,
                locale = _props$locale === undefined ? {} : _props$locale,
                others = _objectWithoutProperties(_props, ['language', 'locale']);

            var defaultLocale = void 0,
                displayName = void 0,
                cacheLocale = void 0,
                resultLocale = void 0;

            if (!language) {
                language = Locale.get();
            }

            // 获取组件挂载的默认多语言文案，增加英文兜底
            defaultLocale = LocaleProvider.LOCALE && (LocaleProvider.LOCALE[language] || LocaleProvider.LOCALE['en-us']);

            // 组件名称
            displayName = getDisplayName(Component);

            // 缓存的多语言文案
            cacheLocale = COMPONENTS_LOCALE_CACHE[displayName] ? COMPONENTS_LOCALE_CACHE[displayName] : {};

            // 最终的多语言文案
            if (options.deepMerge) {
                resultLocale = (0, _deepMerge2['default'])(defaultLocale, cacheLocale, locale);
            } else {
                resultLocale = _extends({}, defaultLocale, cacheLocale, locale);
            }

            others.ref = this._getInstance.bind(this);

            return _react2['default'].createElement(Component, _extends({ locale: resultLocale, language: language }, others));
        };

        return LocaleProvider;
    }(_react2['default'].Component), _class.propTypes = {
        language: _react.PropTypes.string,
        locale: _react.PropTypes.object
    }, _temp);
    LocaleProvider.displayName = 'LocaleProvider';


    Locale.init(LocaleProvider);
    LocaleProvider.displayName = 'LocaleProvider(' + getDisplayName(Component) + ')';

    return LocaleProvider;
};

Locale.init = function (Component) {
    Component.LOCALE = Component.LOCALE || {};
};

Locale.set = function (lang) {
    LOCALE_CACHE = lang;
};

Locale.get = function () {
    return LOCALE_CACHE;
};

Locale.setComponents = function (locales) {
    COMPONENTS_LOCALE_CACHE = _extends({}, COMPONENTS_LOCALE_CACHE, locales);
};

exports['default'] = Locale;
module.exports = exports['default'];

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _nextMenu = __webpack_require__(28);

var _nextMenu2 = _interopRequireDefault(_nextMenu);

var _helper = __webpack_require__(31);

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Item = (_temp = _class = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item(props, context) {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        var prefix = context.prefix + 'navigation-item';

        _this.itemClassName = '' + prefix;
        _this.selectedClassName = prefix + '-selected';
        _this.leafClassName = prefix + '-leaf-icon';
        _this.iconClassName = prefix + '-icon';
        _this.customClassName = prefix + '-custom-icon';
        _this.textClassName = prefix + '-text';
        _this.contentClassName = prefix + '-content';
        _this.childClassName = prefix + '-children';
        _this.innerClassName = prefix + '-content-inner';
        _this.menuClassName = prefix + '-children-menu';

        if (context.nestingPath) {
            _this.nestingPath = context.nestingPath.concat(_this);
        } else {
            _this.nestingPath = [_this];
        }

        _this.createMouseEvent();
        return _this;
    }

    Item.prototype.getChildContext = function getChildContext() {
        var context = this;

        return {
            nestingPath: context.nestingPath ? context.nestingPath.slice() : []
        };
    };

    /**
     * 绑定鼠标相关事件;事件类型：click,mouseleave,mousemove,mouseenter
     * @method createMouseEvent
     * @return {Object}
     */


    Item.prototype.createMouseEvent = function createMouseEvent() {
        var _this2 = this;

        if (this.mouseEvent) {
            return this.mouseEvent;
        }

        this.mouseEvent = {};

        ['onClick', 'onMouseLeave', 'onMouseEnter', 'onMouseMove'].forEach(function (e) {
            var evt = _this2[e],
                mouseEvent = _this2.mouseEvent || (_this2.mouseEvent = {});

            if (evt) {
                mouseEvent[e] = evt.bind(_this2);
            }
        });

        return this.mouseEvent;
    };

    /**
     * click默认处理函数;调用顶层navigation onItemClick 方法
     * @method onClick
     */


    Item.prototype.onClick = function onClick() {
        var _props = this.props,
            onClick = _props.onClick,
            itemid = _props.itemid;


        var argv = [].slice.call(arguments),
            context = this.context;

        argv = [itemid, this].concat(argv);

        onClick.apply(this, argv);
        context.onItemClick.apply(context.rootNavigation, argv);
    };

    // onMouseEnter默认处理函数
    // 调用顶层navigation onItemMouseEnter 方法


    Item.prototype.onMouseEnter = function onMouseEnter() {
        var _props2 = this.props,
            onMouseEnter = _props2.onMouseEnter,
            itemid = _props2.itemid;


        var argv = [].slice.call(arguments),
            context = this.context;

        argv = [itemid, this].concat(argv);

        onMouseEnter.apply(this, [itemid, this].concat(argv));
        context.onItemMouseEnter.apply(context.rootNavigation, argv);
    };

    /**
     * onMouseMove默认处理函数;调用顶层navigation onItemMouseMove 方法
     * @method onMouseMove
     */


    Item.prototype.onMouseMove = function onMouseMove() {
        var _props3 = this.props,
            onMouseMove = _props3.onMouseMove,
            itemid = _props3.itemid;


        var argv = [].slice.call(arguments),
            context = this.context;

        argv = [itemid, this].concat(argv);

        onMouseMove.apply(this, [itemid, this].concat(argv));
        context.onItemMouseMove.apply(context.rootNavigation, argv);
    };

    /**
     * onMouseLeave默认处理函数;调用顶层navigation onItemMouseLeave 方法
     * @method onMouseLeave
     */


    Item.prototype.onMouseLeave = function onMouseLeave() {
        var _props4 = this.props,
            onMouseLeave = _props4.onMouseLeave,
            itemid = _props4.itemid;


        var argv = [].slice.call(arguments),
            context = this.context;

        argv = [itemid, this].concat(argv);

        onMouseLeave.apply(this, [itemid, this].concat(argv));
        context.onItemMouseLeave.apply(context.rootNavigation, argv);
    };

    /**
     * 如果图片是使用对象传进，则克隆图标
     * @method onMouseLcloneIconeave
     * @return {Object}
     */


    Item.prototype.cloneIcon = function cloneIcon(icon, className) {
        var attr = void 0;

        attr = {
            className: className
        };

        return _react2['default'].cloneElement(icon, attr);
    };

    /**
     * 渲染自定义图标
     * @method renderCustomIcon
     * @return {Object}
     */


    Item.prototype.renderCustomIcon = function renderCustomIcon() {
        var _classNames;

        var icon = this.props.icon;


        var classes = void 0,
            attr = void 0;

        if (icon === undefined) {
            return undefined;
        }

        classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this.iconClassName, true), _defineProperty(_classNames, this.customClassName, true), _classNames));

        attr = {
            type: icon,
            ref: 'custom',
            className: classes
        };

        return (typeof icon === 'undefined' ? 'undefined' : _typeof(icon)) === 'object' ? this.cloneIcon(icon, classes) : _react2['default'].createElement(_nextIcon2['default'], attr);
    };

    /**
     * 渲染text文字
     * @method renderText
     * @return {Object}
     */


    Item.prototype.renderText = function renderText() {
        var text = this.props.text;


        if (text === undefined) {
            return undefined;
        }

        return _react2['default'].createElement(
            'span',
            { ref: 'text', className: this.textClassName },
            text
        );
    };

    /**
     * 渲染菜单branch图标
     * @method renderLeafIcon
     * @return {Object}
     */


    Item.prototype.renderLeafIcon = function renderLeafIcon() {
        var _classNames2;

        var _props5 = this.props,
            hasLeaf = _props5.hasLeaf,
            leaf = _props5.leaf,
            context = this.context;


        hasLeaf = hasLeaf === undefined ? context.hasLeaf : hasLeaf;
        leaf = leaf || context.leaf;

        var classes = (0, _classnames2['default'])((_classNames2 = {}, _defineProperty(_classNames2, this.iconClassName, true), _defineProperty(_classNames2, this.leafClassName, true), _classNames2)),
            cmp = _react2['default'].createElement(_nextIcon2['default'], { ref: 'leaf', type: leaf, className: classes });

        if (hasLeaf) {
            return cmp;
        }
    };

    /**
     * 判断DOM是否在Item内
     * @method inItem
     * @return {Boolean}
     */


    Item.prototype.inItem = function inItem(dom) {
        var content = this.refs.item,
            hasCmp = content.compareDocumentPosition,
            contain = content[hasCmp ? 'compareDocumentPosition' : 'contains'],
            value = hasCmp ? 20 : true;

        return dom === content || contain.call(content, dom) === value;
    };

    /**
     * 判断DOM是否在Item Content内
     * @method inItemContent
     * @return {Boolean}
     */


    Item.prototype.inItemContent = function inItemContent(dom) {
        var content = this.refs.itemContent,
            hasCmp = content.compareDocumentPosition,
            contain = content[hasCmp ? 'compareDocumentPosition' : 'contains'],
            value = hasCmp ? 20 : true;

        return dom === content || contain.call(content, dom) === value;
    };

    /**
     * 渲染主要内容：icon,text,leaf
     * @method renderLeafIcon
     * @return {Object}
     */


    Item.prototype.renderContent = function renderContent() {
        var _props6 = this.props,
            link = _props6.link,
            target = _props6.target,
            title = _props6.title,
            branchLevel = _props6.branchLevel,
            container = _props6.container;
        var Tag = link ? 'a' : 'div',
            branchPadding = this.context.branchPadding,
            content = this.props.content,
            attr = {
            className: this.innerClassName,
            href: link
        },
            style = void 0;


        style = {
            paddingLeft: branchPadding * (branchLevel - 1) + 'px'
        };

        if (target) {
            attr.target = target;
        }

        if (title) {
            attr.title = title;
        }

        if (!content) {
            content = _react2['default'].createElement(
                Tag,
                _extends({}, attr, { ref: 'itemContent' }),
                this.renderCustomIcon(),
                this.renderText(),
                this.renderLeafIcon()
            );
        } else {
            content = _react2['default'].createElement(
                Tag,
                attr,
                content
            );
        }

        if ((typeof container === 'undefined' ? 'undefined' : _typeof(container)) === 'object') {
            content = _react2['default'].cloneElement(container, null, content);
        }

        return _react2['default'].createElement(
            'div',
            { className: this.contentClassName, style: style },
            content
        );
    };

    /**
     * 渲染子组件；跟进不同标识选择不同组件处理；使用不同类名控制
     * @method renderLeafIcon
     * @return {Object}
     */


    Item.prototype.renderChildren = function renderChildren() {
        var _this3 = this;

        var _props7 = this.props,
            hasChildren = _props7.hasChildren,
            children = _props7.children;
        var isStopPropagation = this.props.isStopPropagation,
            content = [];


        isStopPropagation = isStopPropagation || this.context.isStopPropagation;

        if (!hasChildren) {
            return undefined;
        }

        _react2['default'].Children.forEach(children, function (child, i) {
            if (child.type === _nextMenu2['default']) {
                if (isStopPropagation) {
                    child = _this3.handleMenuComponent(child, i);
                }

                return content.push(child);
            }

            if (typeof child.type === 'function') {
                if (child.type.componentMark) {
                    child = _this3.handleNavigationComponent(child, i);

                    return content.push(child);
                }
            }

            child = _this3.handleUnknownComponent(child, i);

            content.push(child);
        });

        return content;
    };

    // 未知组件类型处理方法
    // 直接返回


    Item.prototype.handleUnknownComponent = function handleUnknownComponent(child, i) {
        return _react2['default'].createElement(
            'div',
            { className: this.unknowsClassName, key: i },
            child
        );
    };

    // 嵌套组件类型


    Item.prototype.handleNavigationComponent = function handleNavigationComponent(child, i) {
        return _react2['default'].createElement(
            'div',
            { className: this.childClassName, key: i },
            child
        );
    };

    // 针对菜单组件处理方法
    // 根据是否有事件冒泡阻止，注入onClick处理


    Item.prototype.handleMenuComponent = function handleMenuComponent(child, i) {
        var _this4 = this;

        var handlers = {},
            some = [].some;

        ['onClick'].forEach(function (type) {
            var refsHandler = child.props[type];
            var handler = void 0;

            handler = function handler(key, item, e, r) {
                var argv = getEventTarget(key, item, e, r);

                if (argv) {
                    if (_this4.inItem(argv.target)) {
                        _this4[type](argv);
                    }

                    argv.stopPropagation();
                }
            };

            if (refsHandler) {
                handler = function (key, item, e, r) {
                    var argv = getEventTarget(key, item, e, r);

                    refsHandler.apply(child.props, arguments);

                    if (argv) {
                        if (this.inItem(argv.target)) {
                            this[type](argv);
                        }

                        argv.stopPropagation();
                    }
                }.bind(_this4);
            }

            handlers[type] = handler;
        });

        function getEventTarget() {
            var ret = void 0;

            if (some.call(arguments, function (argv) {
                if ((typeof argv === 'undefined' ? 'undefined' : _typeof(argv)) === 'object') {
                    if (argv.target) {
                        return argv.target.nodeType === undefined ? false : ret = argv;
                    }
                }
            })) {
                return ret;
            }
        }

        return _react2['default'].createElement(
            'div',
            { className: this.menuClassName, key: i },
            _react2['default'].cloneElement(child, handlers)
        );
    };

    Item.prototype.render = function render(clsName) {
        var _classNames3;

        var _props8 = this.props,
            className = _props8.className,
            style = _props8.style;

        var classes = void 0;

        classes = (0, _classnames2['default'])((_classNames3 = {}, _defineProperty(_classNames3, this.itemClassName, true), _defineProperty(_classNames3, clsName, !!clsName), _defineProperty(_classNames3, className, !!className), _classNames3));

        return _react2['default'].createElement(
            'li',
            _extends({
                ref: 'item'
            }, this.mouseEvent, {
                className: classes,
                style: style
            }),
            this.renderContent(),
            this.renderChildren()
        );
    };

    return Item;
}(_react2['default'].Component), _class.contextTypes = _helper2['default'].propTypes, _class.propTypes = _helper2['default'].propTypes, _class.childContextTypes = {}, _class.componentMark = 'item', _temp);
Item.displayName = 'Item';
exports['default'] = Item;


Item.propTypes.nestingPath = _react.PropTypes.array;
Item.contextTypes.nestingPath = _react.PropTypes.array;
Item.childContextTypes.nestingPath = _react.PropTypes.array;

Item.defaultProps = {
    selectedStyle: true,
    hasLeaf: true,
    isStopPropagation: true
};

['onClick', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onSelect', 'onFold', 'onUnFold'].forEach(function (name) {
    var defaultProps = Item.defaultProps || (Item.defaultProps = {});

    defaultProps[name] = _helper2['default'].empty;
});
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _helper = __webpack_require__(31);

var _helper2 = _interopRequireDefault(_helper);

var _index = __webpack_require__(69);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Navigation = (_temp = _class = function (_React$Component) {
    _inherits(Navigation, _React$Component);

    Navigation.prototype.getChildContext = function getChildContext() {
        var props = this.props,
            context = this.context;

        return {
            // 最顶层navigation对象
            rootNavigation: context.rootNavigation || this,
            // 顶层已经初始化
            rootMount: context.rootMount || true,
            // 最近navigation对象
            navigation: this,
            // Tree分支缩进
            branchPadding: context.branchPadding || props.branchPadding,
            // 类名前缀
            prefix: context.prefix || props.prefix,
            // navigation 类型
            type: context.type || props.type,
            // Tree 分支图标
            leaf: context.leaf || props.leaf,
            // 是否显示分支图标
            hasLeaf: context.hasLeaf || props.hasLeaf,
            // 是否暴露选择样式
            selectedStyle: context.selectedStyle || props.selectedStyle,
            // 激活条位置
            activeDirection: context.activeDirection || props.activeDirection,
            // navigation失去焦点收起菜单
            isBlurDispear: context.isBlurDispear || props.isBlurDispear || props.blurHide,
            // 子组件是否阻止事件冒泡
            isStopPropagation: context.isStopPropagation || props.isStopPropagation,
            // 子组件内容排版
            contentAlign: context.contentAlign || props.contentAlign || props.menuAlign,
            // navigation 标题
            title: context.title || props.title,
            // 触发类型
            trigger: context.trigger || props.trigger,
            // 点击处理函数
            onItemClick: context.onItemClick || this.onItemClick,
            // 鼠标进入处理函数
            onItemMouseEnter: context.onItemMouseEnter || this.onItemMouseEnter,
            // 鼠标移动处理函数
            onItemMouseMove: context.onItemMouseMove || this.onItemMouseMove,
            // 鼠标离开处理函数
            onItemMouseLeave: context.onItemMouseLeave || this.onItemMouseLeave,
            // Item选中处理函数
            onItemSelect: context.onItemSelect || this.onItemSelect,
            // Tree折叠处理函数
            onItemFold: context.onItemFold || this.onItemFold,
            // Tree展开处理函数
            onItemUnFold: context.onItemUnFold || this.onItemUnFold,
            // 或者、设置顶级state函数
            getRootState: context.getRootState || this.keepState,
            // 默认选中
            selectedKey: context.selectedKey || this.props.selectedKey,
            // 默认打开
            openedKeys: context.openedKeys || this.props.openedKeys,
            // 手风琴展开
            accordion: context.accordion || this.props.accordion || false,
            // 嵌套层级
            branchLevel: context.branchLevel || this.props.branchLevel || 0

        };
    };

    function Navigation(props, context) {
        _classCallCheck(this, Navigation);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        var prefix = context.prefix,
            type = context.type;


        prefix = (prefix || props.prefix) + 'navigation';
        type = type || props.type;

        _this.navigationClassName = prefix;
        _this.directionClassName = prefix + '-' + _this.getDirectionClassName();
        _this.typeClassName = prefix + '-' + type;
        _this.rootClassName = prefix + '-root';
        _this.subClassName = prefix + '-sub';

        _this.state = {
            selectedKey: _this.props.selectedKey || null
        };

        _this.getRootState = _this.getRootState.bind(_this);
        return _this;
    }

    Navigation.prototype.componentDidMount = function componentDidMount() {
        this.isMount = true;
    };

    Navigation.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var state = {};

        if (nextProps.selectedKey) {
            state.selectedKey = nextProps.selectedKey;
        }

        this.setState(state);
    };

    /**
     * 判断DOM对象是否在navigation内
     * @method inNavigation
     * @return {[Boolean]}       返回true 或者 false
     */


    Navigation.prototype.inNavigation = function inNavigation(dom) {
        var content = this.refs.navigation,
            hasCmp = content.compareDocumentPosition,
            contain = content[hasCmp ? 'compareDocumentPosition' : 'contains'],
            value = hasCmp ? 20 : true;

        return dom === content || contain.call(content, dom) === value;
    };

    /**
     * 判断DOM对象是否在navigation内
     * @method keepState
     * @return {*}
     * 1、当value === undefined，如果有key，则返回key状态；如果没有则返回state对象
     * 2、如果value !== undefined，则设置值
     */


    Navigation.prototype.getRootState = function getRootState() {
        return this.state;
    };

    /**
     * 获取组件direction值，根据type修正direction值
     * @method getDirectionClassName
     * @return {String}
     */


    Navigation.prototype.getDirectionClassName = function getDirectionClassName() {
        var _props = this.props,
            direction = _props.direction,
            type = _props.type;


        type = this.context.type || this.props.type;

        if (direction) {
            return direction === 'hoz' ? 'horizontal' : 'vertical';
        }

        if (type === 'text' || type === 'line' || type === 'filling' || type === undefined) {
            return 'horizontal';
        }

        return 'vertical';
    };

    /**
     * 处理Item点击事件
     * @method onItemClick
     */


    Navigation.prototype.onItemClick = function onItemClick() {
        var argv = [].slice.call(arguments);

        argv.splice(2, 0, this);

        this.props.onClick.apply(this, argv);
    };

    /**
     * 调用属性传递的onSelect事件
     * @method onItemSelect
     */


    Navigation.prototype.onItemSelect = function onItemSelect() {
        var argv = [].slice.call(arguments);

        argv.splice(2, 0, this);

        this.props.onSelect.apply(this, argv);
    };

    /**
     * 调用属性传递的onMouseEnter事件
     * @method onItemMouseEnter
     */


    Navigation.prototype.onItemMouseEnter = function onItemMouseEnter() {
        var argv = [].slice.call(arguments);

        argv.splice(2, 0, this);

        this.props.onMouseEnter.apply(this, argv);
    };

    /**
     * 调用属性传递的onMouseLeave事件
     * @method onItemMouseLeave
     */


    Navigation.prototype.onItemMouseLeave = function onItemMouseLeave() {
        var argv = [].slice.call(arguments);

        argv.splice(2, 0, this);

        this.props.onMouseLeave.apply(this, argv);
    };

    /**
     * 调用属性传递的onMouseMove事件
     * @method onItemMouseMove
     */


    Navigation.prototype.onItemMouseMove = function onItemMouseMove() {
        var argv = [].slice.call(arguments);

        argv.splice(2, 0, this);

        this.props.onMouseMove.apply(this, argv);
    };

    /**
     * 克隆子组件函数;过滤掉undefined，null情况
     * @method cloneChildElement
     * @return {Array}
     */


    Navigation.prototype.cloneChildElement = function cloneChildElement(groupChildren) {
        var _this2 = this;

        var children = this.props.children;


        return _react2['default'].Children.map(groupChildren || children, function (child, index) {
            var key = void 0,
                type = void 0,
                props = void 0;

            if (child === undefined || child === null) {
                return child;
            }

            key = child.props.itemid || child.key || index;
            type = child.type;

            if (type === _index2['default']) {
                return _react2['default'].createElement(
                    _index2['default'],
                    child.props,
                    _this2.cloneChildElement(child.props.children)
                );
            }

            props = type.componentMark ? _this2.cloneChildProperty(child, key) : child.props;

            return _react2['default'].cloneElement(child, props);
        });
    };

    /**
     * 克隆item属性数据;根据状态处理props对应的值
     * @method cloneChildProperty
     * @return {Object}
     */


    Navigation.prototype.cloneChildProperty = function cloneChildProperty(child, key) {
        var state = void 0,
            context = this.context,
            isMount = this.isMount,
            navigation = context.rootNavigation || this,
            hasChildren = !!child.props.children,
            hasSelectedKey = context.selectedKey || this.props.selectedKey,
            selected = void 0;

        state = navigation.getRootState ? navigation.getRootState() : this.state;

        if (!isMount) {
            if (!hasSelectedKey) {
                if (typeof child.props.selected === 'string') {
                    if (child.props.selected === 'true') {
                        state.selectedKey = key;
                    }
                } else {
                    if (child.props.selected) {
                        state.selectedKey = key;
                    }
                }
            }
        }

        if (state.selectedKey === key) {
            selected = true;
        }

        return {
            key: key,
            itemid: key,
            selected: selected,
            hasChildren: hasChildren ? this.context.type || this.props.type : undefined,
            hasLeaf: hasChildren
        };
    };

    /**
     * navigation传递title;自动嵌套<Group />
     * @method renderGroup
     * @return {Object}
     */


    Navigation.prototype.renderGroup = function renderGroup() {
        var title = this.props.title;


        var children = this.cloneChildElement();

        if (title) {
            return _react2['default'].createElement(
                _index2['default'],
                { title: title },
                children
            );
        }

        return children;
    };

    Navigation.prototype.render = function render() {
        var _classNames;

        var _props2 = this.props,
            className = _props2.className,
            style = _props2.style;
        var rootNavigation = this.context.rootNavigation;


        var classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this.navigationClassName, true), _defineProperty(_classNames, this.directionClassName, true), _defineProperty(_classNames, this.typeClassName, true), _defineProperty(_classNames, undefined === rootNavigation ? this.rootClassName : this.subClassName, true), _defineProperty(_classNames, className, !!className), _classNames));

        return _react2['default'].createElement(
            'ul',
            {
                style: style,
                className: classes,
                ref: 'navigation'
            },
            this.renderGroup()
        );
    };

    return Navigation;
}(_react2['default'].Component), _class.childContextTypes = _helper2['default'].propTypes, _class.contextTypes = _helper2['default'].propTypes, _class.propTypes = _helper2['default'].propTypes, _class.componentMark = 'navigation', _temp);
Navigation.displayName = 'Navigation';


Navigation.defaultProps = {
    prefix: 'next-',
    type: 'text',
    leaf: 'arrow-down',
    contentAlign: 'center',
    trigger: 'hover',
    title: null,
    activeDirection: null,
    selectedStyle: true,
    hasLeaf: true,
    isStopPropagation: true,
    isBlurDispear: true,
    branchPadding: 20,
    branchLevel: 0
};

['onClick', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onSelect', 'onFold', 'onUnFold'].forEach(function (name) {
    return Navigation.defaultProps[name] = _helper2['default'].empty;
});

exports['default'] = Navigation;
module.exports = exports['default'];

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(236)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _class2, _temp2, _class3, _temp3;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactAddonsTransitionGroup = __webpack_require__(124);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _nextUtil = __webpack_require__(2);

var _nextDom = __webpack_require__(6);

var _names = __webpack_require__(99);

var _names2 = _interopRequireDefault(_names);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var noop = function noop() {};
var on = _nextDom.events.on;
var addClass = _nextDom.classList.addClass;
var removeClass = _nextDom.classList.removeClass;

var AnimateChild = (_temp = _class = function (_React$Component) {
    _inherits(AnimateChild, _React$Component);

    function AnimateChild() {
        _classCallCheck(this, AnimateChild);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    AnimateChild.prototype.componentDidMount = function componentDidMount() {
        this.node = (0, _reactDom.findDOMNode)(this);
        this.onAnimateEnd = this.onAnimateEnd.bind(this);
        if (this.props.useTransition && _nextUtil.support.transition) {
            this._animation = on(this.node, _nextUtil.support.transition.end, this.onAnimateEnd);
        } else if (_nextUtil.support.animation) {
            this._animation = on(this.node, _nextUtil.support.animation.end, this.onAnimateEnd);
        }
    };

    AnimateChild.prototype.fakeAnimationEvent = function fakeAnimationEvent() {
        if (!_nextUtil.support.animation || this.props.useTransition && !_nextUtil.support.transition) {
            this.timeoutEnd = setTimeout(this.onAnimateEnd, 10);
        }
    };

    AnimateChild.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this._animation && this._animation.off) {
            this._animation.off();
        }
        clearTimeout(this.timeoutEnd);
    };

    AnimateChild.prototype.componentWillAppear = function componentWillAppear(done) {
        if (this.props.animationAppear) {
            this.playAction('appear', done);
        } else {
            done();
        }
        this.props.beforeAppear();
        this.fakeAnimationEvent();
    };

    AnimateChild.prototype.componentDidAppear = function componentDidAppear() {
        this.props.afterAppear();
    };

    AnimateChild.prototype.componentWillEnter = function componentWillEnter(done) {
        this.playAction('enter', done);
        this.props.beforeEnter();
        this.fakeAnimationEvent();
    };

    AnimateChild.prototype.componentDidEnter = function componentDidEnter() {
        this.props.afterEnter();
    };

    AnimateChild.prototype.componentWillLeave = function componentWillLeave(done) {
        this.playAction('leave', done);
        this.props.beforeLeave();
        this.fakeAnimationEvent();
    };

    AnimateChild.prototype.componentDidLeave = function componentDidLeave() {
        this.props.afterLeave();
    };

    AnimateChild.prototype.onAnimateEnd = function onAnimateEnd(e) {
        if (e && e.target !== this.node) {
            return;
        }
        clearTimeout(this.timeout);
        if (this._done) {
            this._done();
        }
        e && e.stopPropagation();
    };

    AnimateChild.prototype.playAction = function playAction(type, done) {
        var node = (0, _reactDom.findDOMNode)(this),
            animation = this.props.animation,
            res = animation[type];


        if (typeof res === 'string') {
            Object.keys(animation).forEach(function (key) {
                if (typeof animation[key] === 'string') {
                    removeClass(node, animation[key]);
                    removeClass(node, animation[key] + '-active');
                }
            });
            addClass(node, res);
            this.addActiveClass(node, res + '-active');
            this._done = done;
        } else if (typeof res === 'function') {
            res(node, done);
        } else {
            done();
        }
        this.node = node;
    };

    AnimateChild.prototype.addActiveClass = function addActiveClass(node, className) {
        this.timeout = setTimeout(function () {
            addClass(node, className);
        }, 20);
    };

    AnimateChild.prototype.render = function render() {
        return this.props.children;
    };

    return AnimateChild;
}(_react2['default'].Component), _class.propTypes = {
    beforeAppear: _react.PropTypes.func,
    afterAppear: _react.PropTypes.func,
    beforeEnter: _react.PropTypes.func,
    afterEnter: _react.PropTypes.func,
    beforeLeave: _react.PropTypes.func,
    afterLeave: _react.PropTypes.func,
    children: _react.PropTypes.any,
    useTransition: _react.PropTypes.bool,
    animationAppear: _react.PropTypes.bool
}, _class.defaultProps = {
    animationAppear: true
}, _temp);

/* eslint-disable react/no-multi-comp*/

AnimateChild.displayName = 'AnimateChild';
var SingeChildWrapper = (_temp2 = _class2 = function (_React$Component2) {
    _inherits(SingeChildWrapper, _React$Component2);

    function SingeChildWrapper() {
        _classCallCheck(this, SingeChildWrapper);

        return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
    }

    SingeChildWrapper.prototype.render = function render() {
        var children = _react2['default'].Children.toArray(this.props.children);
        return children[0] || null;
    };

    return SingeChildWrapper;
}(_react2['default'].Component), _class2.propTypes = {
    children: _react.PropTypes.any
}, _temp2);
SingeChildWrapper.displayName = 'SingeChildWrapper';
var Animate = (_temp3 = _class3 = function (_React$Component3) {
    _inherits(Animate, _React$Component3);

    function Animate() {
        _classCallCheck(this, Animate);

        return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
    }

    Animate.prototype.render = function render() {
        var _props = this.props,
            animation = _props.animation,
            children = _props.children,
            component = _props.component,
            animationAppear = _props.animationAppear,
            afterAppear = _props.afterAppear,
            afterEnter = _props.afterEnter,
            afterLeave = _props.afterLeave,
            singleMode = _props.singleMode,
            useTransition = _props.useTransition,
            beforeAppear = _props.beforeAppear,
            beforeEnter = _props.beforeEnter,
            beforeLeave = _props.beforeLeave,
            others = _objectWithoutProperties(_props, ['animation', 'children', 'component', 'animationAppear', 'afterAppear', 'afterEnter', 'afterLeave', 'singleMode', 'useTransition', 'beforeAppear', 'beforeEnter', 'beforeLeave']),
            attrs = {
            afterAppear: afterAppear,
            afterEnter: afterEnter,
            afterLeave: afterLeave,
            beforeAppear: beforeAppear,
            beforeEnter: beforeEnter,
            beforeLeave: beforeLeave,
            animationAppear: animationAppear,
            animation: this.normalizeAnimation(animation)
        },
            length = _react2['default'].Children.count(children),
            animateChildren = _react2['default'].Children.map(children, function (child, index) {
            var key = child.key;
            if (!key) {
                key = 'animate-' + index;
            }
            return _react2['default'].createElement(
                AnimateChild,
                _extends({}, attrs, { key: key, useTransition: useTransition }),
                child
            );
        });

        if (!component && length <= 1 && singleMode) {
            component = SingeChildWrapper;
        }

        return _react2['default'].createElement(
            _reactAddonsTransitionGroup2['default'],
            _extends({ component: component }, others),
            animateChildren
        );
    };

    Animate.prototype.normalizeAnimation = function normalizeAnimation(animation) {
        if (typeof animation === 'string') {
            return {
                appear: animation + '-appear',
                enter: animation + '-enter',
                leave: animation + '-leave'
            };
        }
        return animation;
    };

    return Animate;
}(_react2['default'].Component), _class3.propTypes = {
    animation: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
    beforeAppear: _react.PropTypes.func,
    afterAppear: _react.PropTypes.func,
    beforeEnter: _react.PropTypes.func,
    afterEnter: _react.PropTypes.func,
    beforeLeave: _react.PropTypes.func,
    afterLeave: _react.PropTypes.func,
    children: _react.PropTypes.any,
    component: _react.PropTypes.any,
    singleMode: _react.PropTypes.bool,
    useTransition: _react.PropTypes.bool,
    animationAppear: _react.PropTypes.bool
}, _class3.defaultProps = {
    animation: {
        appear: noop,
        enter: noop,
        leave: noop
    },
    beforeAppear: noop,
    afterAppear: noop,
    beforeEnter: noop,
    afterEnter: noop,
    beforeLeave: noop,
    afterLeave: noop,
    singleMode: true,
    animationAppear: true,
    useTransition: false
}, _temp3);
Animate.displayName = 'Animate';
exports['default'] = Animate;


Animate.names = _names2['default'];
module.exports = exports['default'];

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(109);

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = __webpack_require__(11);

var _menuItem2 = _interopRequireDefault(_menuItem);

var _popupMenuItem = __webpack_require__(110);

var _popupMenuItem2 = _interopRequireDefault(_popupMenuItem);

var _menuDivider = __webpack_require__(107);

var _menuDivider2 = _interopRequireDefault(_menuDivider);

var _checkboxMenuItem = __webpack_require__(106);

var _checkboxMenuItem2 = _interopRequireDefault(_checkboxMenuItem);

var _radioMenuItem = __webpack_require__(111);

var _radioMenuItem2 = _interopRequireDefault(_radioMenuItem);

var _menuGroup = __webpack_require__(108);

var _menuGroup2 = _interopRequireDefault(_menuGroup);

var _subMenu = __webpack_require__(47);

var _subMenu2 = _interopRequireDefault(_subMenu);

var _container = __webpack_require__(8);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_menu2['default'].Item = _menuItem2['default'];
_menu2['default'].Divider = _menuDivider2['default'];
_menu2['default'].CheckboxItem = _checkboxMenuItem2['default'];
_menu2['default'].RadioItem = _radioMenuItem2['default'];
_menu2['default'].PopupItem = _popupMenuItem2['default'];
_menu2['default'].Group = _menuGroup2['default'];
_menu2['default'].SubMenu = _subMenu2['default'];
_menu2['default'].Container = _container2['default'];

exports['default'] = _menu2['default'];
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _item = __webpack_require__(21);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Common = function (_Item) {
    _inherits(Common, _Item);

    function Common(props, context) {
        _classCallCheck(this, Common);

        var _this = _possibleConstructorReturn(this, _Item.call(this, props, context));

        _this.textAlignCenterClassName = context.prefix + 'navigation-item-align';
        _this.activeDirectionClassName = context.prefix + 'navigation-item-selected';
        return _this;
    }

    // click默认处理函数
    // 调用顶层navigation onItemClick 方法
    // 转化click事件为select事件


    Common.prototype.onClick = function onClick(e) {
        var _props = this.props,
            onClick = _props.onClick,
            onSelect = _props.onSelect,
            selected = _props.selected,
            focused = _props.focused,
            selectedStyle = _props.selectedStyle,
            itemid = _props.itemid,
            hasChildren = _props.hasChildren;

        var context = this.context,
            argv = [itemid, this].concat([].slice.call(arguments));

        argv.splice(2, 0, this);

        onClick.apply(this, argv);
        context.onItemClick.apply(context.rootNavigation, argv);

        if (hasChildren && (selected || !focused)) {
            return this;
        }

        if (hasChildren) {
            if (this.inItemContent(e.target)) {
                return this;
            }
        }

        onSelect.apply(this, argv);

        if (selectedStyle) {
            context.onItemSelect.apply(context.rootNavigation, argv);
        }
    };

    Common.prototype.render = function render(className) {
        var _classNames;

        var _props2 = this.props,
            selected = _props2.selected,
            activeDirection = _props2.activeDirection,
            contentAlign = _props2.contentAlign,
            menuAlign = _props2.menuAlign,
            context = this.context;


        contentAlign = menuAlign || contentAlign || context.contentAlign;
        activeDirection = activeDirection || context.activeDirection;

        var classes = void 0,
            alignClassName = this.textAlignCenterClassName + '-' + contentAlign,
            activeClassName = this.activeDirectionClassName + '-' + activeDirection;

        classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this.selectedClassName, selected), _defineProperty(_classNames, activeClassName, activeDirection && selected), _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, alignClassName, true), _classNames));

        return _Item.prototype.render.call(this, classes);
    };

    return Common;
}(_item2['default']);

exports['default'] = Common;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _navigation = __webpack_require__(22);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Vertical = function (_Navigation) {
    _inherits(Vertical, _Navigation);

    function Vertical(props, context) {
        _classCallCheck(this, Vertical);

        var _this = _possibleConstructorReturn(this, _Navigation.call(this, props, context));

        var prefix = context.prefix;


        prefix = (prefix || props.prefix) + 'navigation';

        _this.childrenShowClassName = prefix + '-children-show';
        _this.onMenuBlur = _this.onMenuBlur.bind(_this);
        _this.state.focusedKey = null;
        return _this;
    }

    Vertical.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var state = {};

        _Navigation.prototype.componentWillReceiveProps.call(this, nextProps);

        if (nextProps.focusedKey) {
            state.focusedKey = nextProps.focusedKey;
        }

        this.setState(state);
    };

    /**
     * 注册失去焦点，收起菜单操作
     * @method componentDidMount
     */


    Vertical.prototype.componentDidMount = function componentDidMount() {
        _Navigation.prototype.componentDidMount.call(this);

        var dispear = this.context.isBlurDispear || this.props.isBlurDispear;

        dispear = this.props.blurHide === undefined ? dispear : this.props.blurHide;

        if (dispear) {
            document.body.addEventListener('click', this.onMenuBlur, false);
        }
    };

    /**
     * 移除失去焦点，收起菜单操作
     * @method componentWillUnMount
     */


    Vertical.prototype.componentWillUnmount = function componentWillUnmount() {
        var dispear = this.context.isBlurDispear || this.props.isBlurDispear;

        if (dispear) {
            document.body.removeEventListener('click', this.onMenuBlur, false);
        }
    };

    /**
     * 在导航外触发click，收起菜单处理函数
     * @method onMenuBlur
     */


    Vertical.prototype.onMenuBlur = function onMenuBlur(e) {
        var dispear = this.context.isBlurDispear || this.props.isBlurDispear,
            refs = this.refs;

        if (dispear && refs.navigation) {
            if (!this.inNavigation(e.target)) {
                if (this.state.focusedKey) {
                    this.setState({
                        focusedKey: null
                    });
                }
            }
        }
    };

    /**
     * 由item子组件mouseLeave触发处理函数;该函数处理focusedKey状态;如果trigger为hover才会处理
     * @method onMenuBlur
     */


    Vertical.prototype.onItemMouseEnter = function onItemMouseEnter(itemid) {
        var trigger = this.context.trigger;


        trigger = trigger || this.props.trigger;

        if (trigger === 'hover') {
            if (itemid === this.state.focusedKey) {
                return this;
            }

            _Navigation.prototype.onItemMouseEnter.apply(this, arguments);

            if (this.props.selectedStyle) {
                this.setState({
                    focusedKey: itemid
                });
            }
        }
    };

    Vertical.prototype.onItemMouseLeave = function onItemMouseLeave() {
        var trigger = this.context.trigger;


        trigger = trigger || this.props.trigger;

        if (trigger === 'hover') {

            _Navigation.prototype.onItemMouseLeave.apply(this, arguments);

            if (this.props.selectedStyle) {
                this.setState({
                    focusedKey: null
                });
            }
        }
    };

    Vertical.prototype.onItemClick = function onItemClick(itemid, item) {
        var focused = item.props.focused;
        var trigger = this.context.trigger;


        trigger = trigger || this.props.trigger;

        if (trigger === 'click') {
            if (itemid === this.state.focusedKey) {
                if (focused) {
                    this.setState({
                        focusedKey: null
                    });
                }
            } else {
                this.setState({
                    focusedKey: itemid
                });
            }
        }

        _Navigation.prototype.onItemClick.apply(this, arguments);
    };

    Vertical.prototype.onItemSelect = function onItemSelect(itemid) {
        if (itemid === this.state.selectedKey) {
            return this;
        }

        _Navigation.prototype.onItemSelect.apply(this, arguments);

        if (this.props.selectedStyle) {
            this.setState({
                selectedKey: itemid
            });
        }
    };

    Vertical.prototype.cloneChildProperty = function cloneChildProperty(child, key) {
        var props = _Navigation.prototype.cloneChildProperty.call(this, child, key),
            context = this.context,
            navigation = context.rootNavigation || this,
            isMount = this.isMount,
            state = void 0;

        state = navigation.getRootState ? navigation.getRootState() : this.state;

        if (!isMount) {
            if (child.props.focused) {
                state.focusedKey = key;
            }
        }

        props.focused = !isMount ? child.props.focused : key === state.focusedKey;

        return props;
    };

    return Vertical;
}(_navigation2['default']);

exports['default'] = Vertical;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var navigationPropTypes = {
    rootNavigation: _react.PropTypes.any,
    rootMount: _react.PropTypes.bool,
    navigation: _react.PropTypes.any,
    branchPadding: _react.PropTypes.any,
    prefix: _react.PropTypes.string,
    type: _react.PropTypes.string,
    leaf: _react.PropTypes.string,
    activeDirection: _react.PropTypes.string,
    contentAlign: _react.PropTypes.string,
    trigger: _react.PropTypes.string,
    title: _react.PropTypes.string,
    hasLeaf: _react.PropTypes.bool,
    selectedStyle: _react.PropTypes.bool,
    isStopPropagation: _react.PropTypes.bool,
    isBlurDispear: _react.PropTypes.bool,
    onItemClick: _react.PropTypes.func,
    onItemMouseEnter: _react.PropTypes.func,
    onItemMouseLeave: _react.PropTypes.func,
    onItemMouseMove: _react.PropTypes.func,
    onItemSelect: _react.PropTypes.func,
    onItemFold: _react.PropTypes.func,
    onItemUnFold: _react.PropTypes.func,
    getRootState: _react.PropTypes.func,
    selectedKey: _react.PropTypes.any,
    openedKeys: _react.PropTypes.array,
    accordion: _react.PropTypes.bool,
    branchLevel: _react.PropTypes.number
};

var helper = {
    propTypes: navigationPropTypes,
    empty: function empty() {}
};

exports['default'] = helper;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(189);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(188);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(35);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(90);
var enumBugKeys = __webpack_require__(55);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(93);

var _button2 = _interopRequireDefault(_button);

var _group = __webpack_require__(94);

var _group2 = _interopRequireDefault(_group);

var _split = __webpack_require__(219);

var _split2 = _interopRequireDefault(_split);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_button2['default'].Group = _group2['default'];
_button2['default'].Split = _split2['default'];

exports['default'] = _button2['default'];
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(238);

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames3 = __webpack_require__(1);

var _classnames4 = _interopRequireDefault(_classnames3);

var _nextMixinUiState = __webpack_require__(48);

var _nextMixinUiState2 = _interopRequireDefault(_nextMixinUiState);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _nextUtil = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function isChecked(selectedValue, value) {
    return selectedValue.indexOf(value) > -1;
}
/** Checkbox */
var Checkbox = (_temp = _class = function (_UIState) {
    _inherits(Checkbox, _UIState);

    function Checkbox(props, context) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, _UIState.call(this, props));

        var checked = void 0,
            indeterminate = void 0,
            disabled = void 0;
        if (context.__group__) {
            indeterminate = false;
            checked = isChecked(context.selectedValue, props.value);
            disabled = context.disabled;
        } else {
            if ('checked' in props) {
                checked = props.checked;
            } else {
                checked = props.defaultChecked;
            }

            if ('indeterminate' in props) {
                indeterminate = props.indeterminate;
            } else {
                indeterminate = props.defaultIndeterminate;
            }
        }

        _this.state = {
            checked: checked,
            indeterminate: indeterminate,
            disabled: disabled
        };

        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    Checkbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
        if (nextContext.__group__) {
            var selectedValue = nextContext.selectedValue,
                disabled = nextContext.disabled;

            if ('selectedValue' in nextContext && 'disabled' in nextContext) {
                this.setState({
                    checked: isChecked(selectedValue, nextProps.value),
                    disabled: disabled
                });
            } else if ('selectedValue' in nextContext) {
                this.setState({
                    checked: isChecked(selectedValue, nextProps.value)
                });
            } else if ('disabled' in nextContext) {
                this.setState({
                    disabled: disabled
                });
            }
        } else {
            if ('checked' in nextProps) {
                this.setState({
                    checked: nextProps.checked
                });
            }
            if ('indeterminate' in nextProps) {
                this.setState({
                    indeterminate: nextProps.indeterminate
                });
            }
        }
    };

    Checkbox.prototype.onChange = function onChange(e) {
        var checked = e.target.checked;
        var value = this.props.value;

        if (this.context.__group__) {
            this.context.onChange(value, e);
        } else {
            if (!('checked' in this.props)) {
                this.setState({
                    checked: checked
                });
            }

            if (!('indeterminate' in this.props)) {
                this.setState({
                    indeterminate: false
                });
            }
            this.props.onChange(checked, e);
        }
    };

    Checkbox.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            className = _props.className,
            children = _props.children,
            defaultChecked = _props.defaultChecked,
            style = _props.style,
            others = _objectWithoutProperties(_props, ['className', 'children', 'defaultChecked', 'style']);

        var checked = this.state.checked;
        var disabled = this.state.disabled || this.props.disabled;
        var indeterminate = this.state.indeterminate;
        var newOthers = (0, _nextUtil.pickAttrs)(others);
        var prefix = this.context.prefix || this.props.prefix;

        var checkedAttr = {};
        if ('checked' in this.props) {
            checkedAttr = {
                checked: checked
            };
        } else if ('defaultChecked' in this.props) {
            checkedAttr = {
                defaultChecked: defaultChecked
            };
        }
        var input = _react2['default'].createElement('input', _extends({
            type: 'checkbox'
        }, newOthers, checkedAttr, {
            onChange: this.onChange,
            'aria-checked': checked
        }));

        var child = this.getStateElement(input);
        var cls = (0, _classnames4['default'])((_classnames = {}, _defineProperty(_classnames, prefix + 'checkbox', true), _defineProperty(_classnames, className, !!className), _defineProperty(_classnames, 'checked', checked), _defineProperty(_classnames, 'disabled', disabled), _defineProperty(_classnames, 'indeterminate', indeterminate), _defineProperty(_classnames, this.getStateClassName(), true), _classnames));
        var childrenCls = (0, _classnames4['default'])(_defineProperty({}, prefix + 'checkbox-label', !!children));
        var type = indeterminate ? 'semi-select' : 'select';

        return children ? _react2['default'].createElement(
            'label',
            { htmlFor: this.props.id },
            _react2['default'].createElement(
                'span',
                { className: cls, style: style },
                _react2['default'].createElement(
                    'span',
                    { className: prefix + 'checkbox-inner' },
                    _react2['default'].createElement(_nextIcon2['default'], { type: type, size: 'xs', className: indeterminate ? 'zoomIn' : '' })
                ),
                child
            ),
            _react2['default'].createElement(
                'span',
                { className: childrenCls },
                children
            )
        ) : _react2['default'].createElement(
            'label',
            { className: cls, style: style },
            _react2['default'].createElement(
                'span',
                { className: prefix + 'checkbox-inner' },
                _react2['default'].createElement(_nextIcon2['default'], { type: type, size: 'xs', className: indeterminate ? 'zoomIn' : '' })
            ),
            child
        );
    };

    return Checkbox;
}(_nextMixinUiState2['default']), _class.displayName = 'Checkbox', _class.propTypes = {
    /**
     * 选中状态
     */
    checked: _react.PropTypes.bool,
    /**
     * 默认选中状态
     */
    defaultChecked: _react.PropTypes.bool,
    /**
     * 禁用
     */
    disabled: _react.PropTypes.bool,
    /**
     * Checkbox 的中间状态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     */
    indeterminate: _react.PropTypes.bool,
    defaultIndeterminate: _react.PropTypes.bool,
    /**
     * 选中状态被改变的事件
     */
    onChange: _react.PropTypes.func,
    prefix: _react.PropTypes.string,
    /**
     * 自定义类名
     */
    className: _react.PropTypes.string,
    style: _react.PropTypes.object
}, _class.defaultProps = {
    defaultChecked: false,
    defaultIndeterminate: false,
    onChange: function onChange() {},
    prefix: 'next-'
}, _class.contextTypes = {
    onChange: _react.PropTypes.func,
    __group__: _react.PropTypes.bool,
    selectedValue: _react.PropTypes.array,
    disabled: _react.PropTypes.bool,
    prefix: _react.PropTypes.string
}, _temp);
exports['default'] = Checkbox;
module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset/;

var getComputedStyle = function getComputedStyle(node) {
    return node.nodeType == 1 ? node.ownerDocument.defaultView.getComputedStyle(node, null) : {};
},
    removePixel = {
    left: true,
    top: true
},
    getStyleValue = function getStyleValue(node, type, value) {
    type = type.toLowerCase();
    if (value === 'auto') {
        if (type === 'height') {
            return node.offsetHeight;
        }
        if (type === 'width') {
            return node.offsetWidth;
        }
    }
    if (!(type in removePixel)) {
        removePixel[type] = PIXEL_PATTERN.test(type);
    }
    return removePixel[type] ? parseFloat(value) || 0 : value;
},
    floatMap = {
    cssFloat: 1,
    styleFloat: 1,
    float: 1
};

function camelize(name) {
    return name.replace(/-(.)/g, function ($0, $1) {
        return $1.toUpperCase();
    });
}

function hyphenate(name) {
    return name.replace(/[A-Z]/g, function ($1) {
        return '-' + $1.toLowerCase();
    });
}

function getStyle(node, name) {
    var length = arguments.length,
        style = getComputedStyle(node);

    name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;

    return length === 1 ? style : getStyleValue(node, name, style.getPropertyValue(hyphenate(name)) || node.style[camelize(name)]);
}

function setStyle(node, name, value) {
    var length = arguments.length;
    name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;
    if (length === 3) {
        if (typeof value === 'number' && PIXEL_PATTERN.test(name)) {
            value = value + 'px';
        }
        return node.style[camelize(name)] = value; // IE8 support.
    }
    for (var x in name) {
        setStyle(node, x, name[x]);
    }
    return getComputedStyle(node);
}

function getOuterWidth(el) {
    if (el === document.body) {
        return document.documentElement.clientWidth;
    }
    return el.offsetWidth;
}

function getOuterHeight(el) {
    if (el === document.body) {
        return window.innerHeight || document.documentElement.clientHeight;
    }
    return el.offsetHeight;
}

function getDocSize() {
    var width = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
        height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

    return {
        width: width,
        height: height
    };
}

function getClientSize() {
    var width = document.documentElement.clientWidth,
        height = window.innerHeight || document.documentElement.clientHeight;

    return {
        width: width,
        height: height
    };
}

function getScroll() {
    return {
        scrollLeft: Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
        scrollTop: Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    };
}

function getOffset(node) {
    var box = node.getBoundingClientRect(),
        docElem = document.documentElement;

    return {
        left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
        top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
    };
}

module.exports = {
    set: setStyle,
    get: getStyle,
    getOuterWidth: getOuterWidth,
    getOuterHeight: getOuterHeight,
    getDocSize: getDocSize,
    getClientSize: getClientSize,
    getScroll: getScroll,
    getOffset: getOffset
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _nextUtil = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function preventDefault(e) {
    e.preventDefault();
}

/** Input */
var Input = (_temp = _class = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        _this.state = {
            value: typeof value === 'undefined' ? '' : value
        };
        return _this;
    }

    Input.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: typeof nextProps.value === 'undefined' ? '' : nextProps.value
            });
        }
    };

    Input.prototype.handleKeyDown = function handleKeyDown(e) {
        if (e.keyCode === 13) {
            this.props.onPressEnter(e);
        }
        this.props.onKeyDown(e);
    };

    Input.prototype.onChange = function onChange(e) {
        var value = e.target.value;
        if (!('value' in this.props)) {

            // Fix: textarea dit not support maxLength in ie9
            if (this.isIe() && this.props.maxLength && this.props.multiple) {
                var maxLength = parseInt(this.props.maxLength);
                var len = this.getValueLength(value, true);
                if (len > maxLength) {
                    value = value.replace(/\n/g, '\n\n');
                    value = value.substr(0, maxLength);
                    value = value.replace(/\n\n/g, '\n');
                }
            }

            this.setState({
                value: value
            });
        }

        if (this.props.trim) {
            value = value.trim();
        }

        this.props.onChange(value, e);
    };

    Input.prototype.onFocus = function onFocus(e) {
        this.setState({
            focus: true
        });
        this.props.onFocus(e);
    };

    Input.prototype.onBlur = function onBlur(e) {
        this.setState({
            focus: false
        });
        this.props.onBlur(e);
    };

    Input.prototype.onClear = function onClear(e) {
        if (this.props.disabled) {
            return;
        }

        // 非受控模式清空内部数据
        if (!('value' in this.props)) {
            this.setState({
                value: ''
            });
        }
        this.props.onChange('', e);
        this.refs.input.focus();
    };

    Input.prototype.ieGT9 = function ieGT9() {
        if (typeof document === 'undefined') {
            return false;
        }
        var documentMode = document.documentMode || 0;
        return documentMode > 9;
    };

    Input.prototype.isIe = function isIe() {
        if (typeof document === 'undefined') {
            return false;
        }
        var documentMode = document.documentMode || 0;
        return documentMode !== 0;
    };

    Input.prototype.renderInput = function renderInput() {
        var _classNames;

        var nstyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var nclassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


        // placeholder 在ie9以上会直接触发onChange，影响校验
        var placeholder = this.props.placeholder;
        if (placeholder && this.ieGT9()) {
            placeholder = null;
        }

        /*eslint-disable */

        var _props = this.props,
            multiple = _props.multiple,
            size = _props.size,
            className = _props.className,
            children = _props.children,
            htmlType = _props.htmlType,
            maxLen = _props.maxLen,
            maxLength = _props.maxLength,
            state = _props.state,
            onChange = _props.onChange,
            style = _props.style,
            addonBefore = _props.addonBefore,
            addonAfter = _props.addonAfter,
            onPressEnter = _props.onPressEnter,
            hasFeedback = _props.hasFeedback,
            others = _objectWithoutProperties(_props, ['multiple', 'size', 'className', 'children', 'htmlType', 'maxLen', 'maxLength', 'state', 'onChange', 'style', 'addonBefore', 'addonAfter', 'onPressEnter', 'hasFeedback']);

        /*eslint-enable */


        var prefix = this.context.prefix || this.props.prefix;

        var type = multiple ? 'multiple' : 'single',
            TagName = multiple ? 'textarea' : 'input',
            props = _extends({}, others);

        props.onChange = this.onChange.bind(this);
        props.value = this.state.value;
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        delete props.defaultValue;

        !multiple && delete props.rows;

        var classInput = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'input', true), _defineProperty(_classNames, prefix + 'input-' + type, true), _defineProperty(_classNames, prefix + 'input-' + size, !!size && type === 'single'), _defineProperty(_classNames, 'disabled', !!this.props.disabled), _defineProperty(_classNames, 'clear', this.props.hasClear), _defineProperty(_classNames, 'error', this.props.state === 'error'), _defineProperty(_classNames, 'focus', this.state.focus), _defineProperty(_classNames, 'hidden', this.props.htmlType === 'hidden'), _defineProperty(_classNames, 'noborder', this.props.htmlType === 'file'), _defineProperty(_classNames, nclassName, !!nclassName), _classNames));

        var inputStyle = {
            textIndent: this.props.textIndent
        };

        return _react2['default'].createElement(
            'span',
            { className: classInput, style: nstyle },
            _react2['default'].createElement(TagName, _extends({}, (0, _nextUtil.pickAttrs)(props), { style: inputStyle, type: htmlType, maxLength: maxLen ? maxLen : maxLength, height: '100%',
                onKeyDown: this.handleKeyDown.bind(this), onFocus: this.onFocus.bind(this),
                onBlur: this.onBlur.bind(this), key: 'input', ref: 'input' })),
            this.renderControl()
        );
    };

    // `Enter` was considered to be two chars in chrome , but one char in ie.
    // so we make all `Enter` to be two chars


    Input.prototype.getValueLength = function getValueLength(value) {
        var multiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var nv = '' + value;
        var strLen = this.props.getValueLength(nv);
        if (typeof strLen !== 'number') {
            strLen = nv.length;
        }
        if (!multiple) {
            return strLen;
        } else {
            if (this.isIe()) {
                return strLen + nv.split('\n').length - 1;
            }
            return strLen;
        }
    };

    Input.prototype.renderControl = function renderControl() {
        var _classNames2;

        var maxLength = parseInt(this.props.maxLength || this.props.maxLen),
            hasLimitHint = this.props.hasLimitHint || this.props.maxLen;

        this.props.maxLen && _nextUtil.log.deprecated('maxLen', 'maxLength', 'Input');

        var prefix = this.context.prefix || this.props.prefix;

        var _props2 = this.props,
            hasClear = _props2.hasClear,
            readOnly = _props2.readOnly,
            state = _props2.state;

        var len = maxLength > 0 && this.state.value ? this.getValueLength(this.state.value, this.props.multiple) : 0;

        var classesLenWrap = (0, _classnames2['default'])((_classNames2 = {}, _defineProperty(_classNames2, prefix + 'input-len', true), _defineProperty(_classNames2, 'error', len > maxLength), _classNames2));

        var icon = null;
        //多行模式下面没有 success/loading 状态
        if (state && !this.props.multiple) {
            if (state === 'success') {
                icon = _react2['default'].createElement(_nextIcon2['default'], { type: 'success' });
            } else if (state === 'loading') {
                icon = _react2['default'].createElement(_nextIcon2['default'], { type: 'loading' });
            }
        }

        var clearWrap = hasClear && !readOnly && '' + this.state.value ? _react2['default'].createElement(_nextIcon2['default'], { type: 'delete-filling', onClick: this.onClear.bind(this), onMouseDown: preventDefault }) : null;
        var lenWrap = maxLength && hasLimitHint ? _react2['default'].createElement(
            'span',
            { className: classesLenWrap },
            len,
            '/',
            maxLength
        ) : null;

        return clearWrap || lenWrap || icon ? _react2['default'].createElement(
            'span',
            { className: prefix + 'input-control' },
            clearWrap,
            lenWrap,
            icon
        ) : null;
    };

    Input.prototype.getInputNode = function getInputNode() {
        return this.refs.input;
    };

    Input.prototype.render = function render() {
        var _classNames3, _classNames4, _classNames5;

        var props = this.props;
        var prefix = this.context.prefix || this.props.prefix;

        var wrapperClassName = (0, _classnames2['default'])((_classNames3 = {}, _defineProperty(_classNames3, prefix + 'input-group', true), _defineProperty(_classNames3, '' + props.size, !!props.size), _defineProperty(_classNames3, 'disabled', this.props.disabled), _defineProperty(_classNames3, this.props.className, !!this.props.className), _classNames3));

        var addonClassName = prefix + 'input-addon';
        var classesAddonBefore = (0, _classnames2['default'])((_classNames4 = {}, _defineProperty(_classNames4, '' + addonClassName, true), _defineProperty(_classNames4, addonClassName + '-before', true), _classNames4));
        var classesAddonAfter = (0, _classnames2['default'])((_classNames5 = {}, _defineProperty(_classNames5, '' + addonClassName, true), _defineProperty(_classNames5, addonClassName + '-after', true), _classNames5));
        var addonBefore = props.addonBefore ? _react2['default'].createElement(
            'span',
            { className: classesAddonBefore },
            props.addonBefore
        ) : null;

        var addonAfter = props.addonAfter ? _react2['default'].createElement(
            'span',
            { className: classesAddonAfter },
            props.addonAfter
        ) : null;

        // style or className is added on Addon instead of input
        if (addonBefore || addonAfter) {
            return _react2['default'].createElement(
                'span',
                { className: wrapperClassName, style: this.props.style },
                addonBefore,
                this.renderInput(),
                addonAfter
            );
        } else {
            return this.renderInput(this.props.style, this.props.className);
        }
    };

    return Input;
}(_react2['default'].Component), _class.propTypes = {
    /**
     * 当前的value 值
     */
    value: _react.PropTypes.any,
    /**
     * 初始化的value 值
     */
    defaultValue: _react.PropTypes.any,
    /**
     * 尺寸 设置文本域大小
     */
    size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * 状态 设置文本域禁用状态
     */
    disabled: _react.PropTypes.bool,
    /**
     * 是否为多行，不选则为单行
     */
    multiple: _react.PropTypes.bool,
    maxLen: _react.PropTypes.number, //TODO: will removed in 1.0 version
    /**
     * 最大长度
     */
    maxLength: _react.PropTypes.number,
    /**
     * 是否展现最大长度样式
     */
    hasLimitHint: _react.PropTypes.bool,
    /**
     * 是否出现clear按钮
     */
    hasClear: _react.PropTypes.bool,
    /**
     * 状态（multiple模式不支持 loading/success 状态)
     */
    state: _react.PropTypes.oneOf(['', 'error', 'loading', 'success']),
    style: _react.PropTypes.object,
    /**
     * 原生type
     */
    htmlType: _react.PropTypes.string,
    /**
     * 只读(继承自原生input)
     */
    readOnly: _react.PropTypes.bool,
    /**
     * onChange返回会自动去除头尾空字符
     */
    trim: _react.PropTypes.bool,
    /**
     * 自定义class
     */
    className: _react.PropTypes.string,
    /**
     * 文本域前附加内容
     */
    addonBefore: _react.PropTypes.node,
    /**
     * 文本域后附加内容
     */
    addonAfter: _react.PropTypes.node,
    prefix: _react.PropTypes.string,
    placeholder: _react.PropTypes.string,
    /**
     * 按下回车的回调
     */
    onPressEnter: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    /**
     * 失去焦点时候触发的回调
     */
    onBlur: _react.PropTypes.func,
    onKeyDown: _react.PropTypes.func,
    /**
     * 发生改变的时候触发的回调
     * @param {String} value 数据
     * @param {Event} e DOM事件对象
     */
    onChange: _react.PropTypes.func,
    /**
     * 自定义字符串计算长度方式
     * @param {String} value 数据
     * @returns {Number} 自定义长度
     */
    getValueLength: _react.PropTypes.func,
    /**
     * multiple多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)
     */
    rows: _react.PropTypes.number,
    /**
     * 文字缩进
     */
    textIndent: _react.PropTypes.number
}, _class.defaultProps = {
    htmlType: 'text',
    disabled: false,
    prefix: 'next-',
    multiple: false,
    hasFeedback: false,
    maxLen: null,
    maxLength: null,
    hasLimitHint: false,
    hasClear: false,
    readOnly: false,
    trim: false,
    state: '',
    size: 'medium',
    onPressEnter: function onPressEnter() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onKeyDown: function onKeyDown() {},
    onChange: function onChange() {},
    getValueLength: function getValueLength() {},

    rows: 4
}, _class.contextTypes = {
    prefix: _react2['default'].PropTypes.string
}, _temp);
Input.displayName = 'Input';
exports['default'] = Input;
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /* eslint-disable react/prop-types */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _nextUtil = __webpack_require__(2);

var _nextDom = __webpack_require__(6);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _nextAnimate = __webpack_require__(26);

var _nextAnimate2 = _interopRequireDefault(_nextAnimate);

var _container = __webpack_require__(8);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes;
var Component = _container2['default'];

var SubMenu = (_temp = _class = function (_Component) {
    _inherits(SubMenu, _Component);

    SubMenu.prototype.getChildContext = function getChildContext() {

        var parentIndex = normalizeInfo(this.context, 'parentIndex', this.props.index),
            parentLabel = normalizeInfo(this.context, 'parentLabel', this.props.label || this.props.children);

        return {
            parentIndex: parentIndex,
            parentLabel: parentLabel
        };
    };

    function SubMenu(props) {
        _classCallCheck(this, SubMenu);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        ['onDocumentClick', 'onSubMenuClick', 'onSubMenuMouseEnter', 'onSubMenuMouseLeave', 'onContentMouseEnter', 'onContentMouseLeave', 'onKeyDown'].forEach(function (method) {
            _this[method] = _this[method].bind(_this);
        });
        var root = _this.getRoot();
        if (!root) {
            throw new Error('SubMenu should use under Menu.');
        }
        _this.Menu = root.constructor;
        _this.MenuItem = root.constructor.Item;
        return _this;
    }

    SubMenu.prototype.normalizeVisible = function normalizeVisible() {
        return 'visible' in this.props ? this.props.visible : this.props.openKeys.indexOf(this.props.index) > -1;
    };

    SubMenu.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            className = _props.className,
            label = _props.label,
            animation = _props.animation,
            disabled = _props.disabled,
            children = _props.children,
            indentSize = _props.indentSize,
            mode = _props.mode,
            triggerType = _props.triggerType,
            selectable = _props.selectable,
            align = _props.align,
            others = _objectWithoutProperties(_props, ['className', 'label', 'animation', 'disabled', 'children', 'indentSize', 'mode', 'triggerType', 'selectable', 'align']),
            prefix = this.getPrefix(),
            visible = this.normalizeVisible(),
            cls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefix + 'menu-submenu-item', mode === 'inline'), _defineProperty(_classnames, prefix + 'menu-submenu-item-popup', mode === 'popup'), _defineProperty(_classnames, 'opened', visible), _defineProperty(_classnames, align, align), _defineProperty(_classnames, 'disabled', disabled), _defineProperty(_classnames, className, className), _classnames)),
            Menu = this.Menu,
            MenuItem = this.MenuItem,
            child = _react2['default'].createElement(Menu, null),
            icon = void 0,
            events = void 0,
            contentEvents = void 0;

        if (mode === 'inline') {
            icon = _react2['default'].createElement(_nextIcon2['default'], { type: 'arrow-down', className: visible ? 'opened' : '', size: 'xs' });
        } else {
            icon = _react2['default'].createElement(_nextIcon2['default'], { type: 'arrow-right', size: 'xs' });
        }

        if (triggerType === 'click') {
            events = {
                onClick: this.onSubMenuClick
            };
        } else {
            events = {
                onMouseEnter: this.onSubMenuMouseEnter,
                onMouseLeave: this.onSubMenuMouseLeave,
                onClick: function onClick(e) {
                    return e && e.stopPropagation();
                }
            };
            contentEvents = {
                onMouseEnter: this.onContentMouseEnter,
                onMouseLeave: this.onContentMouseLeave
            };
        }

        child = _react2['default'].cloneElement(child, _extends({
            mode: mode,
            animation: animation
        }, others, contentEvents, {
            indentSize: mode === 'inline' ? indentSize + child.props.indentSize : indentSize,
            ref: 'content',
            children: children,
            hasSubMenu: true,
            parent: this
        }));

        if (animation) {
            var oneTransitionEnd = function oneTransitionEnd(node, done) {
                var handler = function handler(e) {
                    if (e.target === node) {
                        [animation['in'], animation['in'] + '-active', animation.out, animation.out + '-active'].forEach(function (className) {
                            _nextDom.classList.removeClass(node, className);
                        });
                        _nextDom.style.set(node, 'height', null);
                        _nextDom.events.off(node, _nextUtil.support.transition.end, handler);
                        done();
                    }
                };
                _nextDom.events.on(node, _nextUtil.support.transition.end, handler);
            };
            var enterHook = function enterHook(node, done) {
                _nextDom.classList.addClass(node, 'out-screen');
                _nextDom.classList.removeClass(node, 'hide');
                var height = node.offsetHeight + 'px';
                _nextDom.classList.addClass(node, animation['in']);
                _nextDom.classList.removeClass(node, 'out-screen');
                setTimeout(function () {
                    _nextDom.classList.addClass(node, animation['in'] + '-active');
                    _nextDom.style.set(node, 'height', height);
                }, 1);

                oneTransitionEnd(node, done);
            };
            var leaveHook = function leaveHook(node, done) {
                var height = node.offsetHeight + 'px';
                _nextDom.style.set(node, 'height', height);
                _nextDom.classList.addClass(node, animation.out);
                setTimeout(function () {
                    _nextDom.classList.addClass(node, animation.out + '-active');
                    _nextDom.style.set(node, 'height', 0);
                }, 1);

                oneTransitionEnd(node, done);
            };
            var animationConfig = void 0;
            if (mode === 'inline') {
                animationConfig = {
                    enter: enterHook,
                    leave: leaveHook,
                    appear: enterHook
                };
            } else {
                animationConfig = {
                    enter: animation['in'],
                    leave: animation.out,
                    appear: animation['in']
                };
            }
            if (mode === 'popup') {
                child = _react2['default'].createElement(
                    'div',
                    { className: prefix + 'menu-wrapper' },
                    child
                );
            }
            child = _react2['default'].createElement(
                _nextAnimate2['default'],
                { animation: animationConfig, useTransition: true },
                visible ? child : null
            );
        } else {
            child = _react2['default'].cloneElement(child, {
                style: {
                    display: visible ? '' : 'none'
                }
            });
        }

        if (selectable && triggerType === 'click') {
            icon = _react2['default'].cloneElement(icon, events);
            return (
                // 设置needIndent为false
                // 使用subMenu的title来控制
                _react2['default'].createElement(
                    MenuItem,
                    _extends({}, others, { className: cls,
                        'aria-haspopup': true,
                        parent: this,
                        onKeyDown: this.onKeyDown,
                        indentSize: indentSize,
                        needIndent: false,
                        label: label }),
                    _react2['default'].createElement(
                        'div',
                        { className: prefix + 'menu-submenu-title',
                            style: { paddingLeft: indentSize } },
                        label,
                        icon
                    ),
                    child
                )
            );
        } else {
            return _react2['default'].createElement(
                'li',
                { className: cls,
                    'aria-haspopup': true,
                    onKeyDown: this.onKeyDown },
                _react2['default'].createElement(
                    'div',
                    _extends({ className: prefix + 'menu-submenu-title'
                    }, events, {
                        style: { paddingLeft: indentSize } }),
                    label,
                    icon
                ),
                child
            );
        }
    };

    SubMenu.prototype.componentDidMount = function componentDidMount() {
        if (this.props.mode === 'popup') {
            _nextDom.events.on(document, 'click', this.onDocumentClick);
        }
    };

    SubMenu.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.mode === 'popup') {
            _nextDom.events.off(document, 'click', this.onDocumentClick);
        }
    };

    SubMenu.prototype.onDocumentClick = function onDocumentClick(e) {
        var node = (0, _reactDom.findDOMNode)(this.getRoot()),
            target = e.target;

        if (!(node && node.contains(target))) {
            this.onVisibleChange(false, 'fromDoc');
        }
    };

    SubMenu.prototype.onSubMenuClick = function onSubMenuClick(index, e) {
        var visible = !this.normalizeVisible();
        this.onVisibleChange(visible);
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            index.stopPropagation();
        }
    };

    SubMenu.prototype.onSubMenuMouseEnter = function onSubMenuMouseEnter(e, type) {
        var _this2 = this;

        this.onContentMouseEnter();
        this._subMenuEnterTimeout = setTimeout(function () {
            _this2.onVisibleChange(true, type);
        }, 150);
    };

    SubMenu.prototype.onSubMenuMouseLeave = function onSubMenuMouseLeave(e, type) {
        var _this3 = this;

        this._subMenuEnterTimeout && clearTimeout(this._subMenuEnterTimeout);
        this._subMenuTimeout = setTimeout(function () {
            _this3.onVisibleChange(false, type);
        }, 150);
    };

    SubMenu.prototype.onContentMouseEnter = function onContentMouseEnter() {
        this._subMenuTimeout && clearTimeout(this._subMenuTimeout);
    };

    SubMenu.prototype.onContentMouseLeave = function onContentMouseLeave(e) {
        this._subMenuEnterTimeout && clearTimeout(this._subMenuEnterTimeout);
        this.onSubMenuMouseLeave(e, 'fromContent');
    };

    SubMenu.prototype.onVisibleChange = function onVisibleChange(visible, type) {
        var _this4 = this;

        if (type === 'fromDoc') {
            this.getRoot().onOpen(this.props.index, visible);
        } else {
            var parentIndexes = this.getParentByType(SubMenu).map(function (parent) {
                return parent.props.index || parent.key;
            });
            var indexes = [this.props.index];

            if (!visible && !this._openByKeyBoard && type === 'fromContent') {
                indexes = indexes.concat(parentIndexes);
            }
            indexes.forEach(function (index) {
                _this4.getRoot().onOpen(index, visible);
            });
            this._openByKeyBoard = false;
        }
    };

    SubMenu.prototype.onKeyDown = function onKeyDown(e) {
        if (e.keyCode === _nextUtil.keyCode.ENTER || e.keyCode === _nextUtil.keyCode.SPACE) {
            this.onSubMenuClick(e);
        }
    };

    SubMenu.prototype.getContentNode = function getContentNode() {
        return _reactDom2['default'].findDOMNode(this.refs.content);
    };

    return SubMenu;
}(Component), _class._menuItem = true, _class._subMenu = true, _class.propTypes = {
    /**
    * 子菜单的标签
    */
    label: PropTypes.any,
    /**
    * 设置子菜单的显示状态
    */
    visible: PropTypes.bool,
    /**
    * 设置子菜单表现的形式
    */
    mode: PropTypes.oneOf(['inline', 'popup']),
    /**
    * 设置子菜单显示触发的类型
    */
    triggerType: PropTypes.oneOf(['click', 'hover']),
    /**
    * 设置子菜单的label是否可以被选中
    */
    selectable: PropTypes.bool,
    /**
     * 设置子菜单的跟随类型
     */
    align: PropTypes.oneOf(['outside', 'follow'])
}, _class.defaultProps = {
    label: 'sub-item',
    animation: { 'in': 'slide-down', out: 'slide-up' },
    mode: 'inline',
    triggerType: 'click',
    selectable: false,
    align: 'follow',
    prefix: 'next-'
}, _class.contextTypes = {
    parentIndex: PropTypes.array,
    parentLabel: PropTypes.array,
    prefix: PropTypes.string
}, _class.childContextTypes = {
    parentIndex: PropTypes.array,
    parentLabel: PropTypes.array
}, _temp);
SubMenu.displayName = 'SubMenu';
exports['default'] = SubMenu;


function normalizeInfo(context, name, value) {
    var meta = void 0;
    if (context[name]) {
        meta = [].concat(_toConsumableArray(context[name]));
        meta.push(value);
    } else {
        meta = [value];
    }
    return meta;
}
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _nextUtil = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes,
    noop = function noop() {},
    makeChain = _nextUtil.func.makeChain;
//UIState 为一些特殊元素的状态响应提供了标准的方式，
//尤其适合CSS无法完全定制的控件，比如checkbox，radio等。

var UIState = function (_Component) {
	_inherits(UIState, _Component);

	function UIState(props) {
		_classCallCheck(this, UIState);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.state = {};
		['_onUIMouseEnter', '_onUIMouseLeave', '_onUIFocus', '_onUIBlur'].forEach(function (item) {
			_this[item] = _this[item].bind(_this);
		});
		return _this;
	}

	// base 事件绑定的元素


	UIState.prototype.getStateElement = function getStateElement(base) {
		var _props = this.props,
		    onMouseEnter = _props.onMouseEnter,
		    onMouseLeave = _props.onMouseLeave,
		    onFocus = _props.onFocus,
		    onBlur = _props.onBlur;

		return _react2['default'].cloneElement(base, {
			onMouseEnter: makeChain(this._onUIMouseEnter, onMouseEnter),
			onMouseLeave: makeChain(this._onUIMouseLeave, onMouseLeave),
			onFocus: makeChain(this._onUIFocus, onFocus),
			onBlur: makeChain(this._onUIBlur, onBlur)
		});
	};

	UIState.prototype.getStateClassName = function getStateClassName() {
		var _state = this.state,
		    hovered = _state.hovered,
		    focused = _state.focused;

		return (0, _classnames2['default'])({
			hovered: hovered,
			focused: focused
		});
	};

	UIState.prototype._onUIMouseEnter = function _onUIMouseEnter() {
		if (!this.props.disabled && !this.state.disabled) {
			this.setState({
				hovered: true
			});
		}
	};

	UIState.prototype._onUIMouseLeave = function _onUIMouseLeave() {
		this.setState({
			hovered: false
		});
	};

	UIState.prototype._onUIFocus = function _onUIFocus() {
		if (!this.props.disabled && !this.state.disabled) {
			this.setState({
				focused: true
			});
		}
	};

	UIState.prototype._onUIBlur = function _onUIBlur() {
		this.setState({
			focused: false
		});
	};

	return UIState;
}(_react.Component);

UIState.displayName = 'UIState';
exports['default'] = UIState;
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _class, _temp; //将DOM元素渲染到指定的容器

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes,
    Children = _react2['default'].Children;

//<body> [containerNode]
//  <div>
//      <content></content>  [contentNode]
// </div>  [wrapperNode]
// </body>
/** Overlay.Gateway */
var Gateway = (_temp = _class = function (_React$Component) {
    _inherits(Gateway, _React$Component);

    function Gateway() {
        _classCallCheck(this, Gateway);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Gateway.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
        if (this.wrapper && newProps.container !== this.props.container) {
            this.getContainerNode(newProps).appendChild(this.wrapper);
        }
    };

    Gateway.prototype.componentDidMount = function componentDidMount() {
        this._renderOverlay();
    };

    Gateway.prototype.componentDidUpdate = function componentDidUpdate() {
        this._renderOverlay();
    };

    Gateway.prototype.componentWillUnmount = function componentWillUnmount() {
        this._unRenderWrapper();
    };

    Gateway.prototype._renderOverlay = function _renderOverlay() {
        var children = this.props.children ? Children.only(this.props.children) : null;
        if (children) {
            this._renderWrapper();
            this._overlay = _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, children, this.wrapper);
        } else {
            this._unRenderWrapper();
        }
    };

    Gateway.prototype._renderWrapper = function _renderWrapper() {
        if (!this.wrapper) {
            this.wrapper = document.createElement('div');
            this.getContainerNode().appendChild(this.wrapper);
        }
    };

    Gateway.prototype._unRenderWrapper = function _unRenderWrapper() {
        if (this.wrapper) {
            _reactDom2['default'].unmountComponentAtNode(this.wrapper);
            this.getContainerNode().removeChild(this.wrapper);
            this._overlay = null;
            this.wrapper = null;
        }
    };

    Gateway.prototype.getContainerNode = function getContainerNode(props) {
        var _ref = props || this.props,
            container = _ref.container;

        if (typeof container === 'function') {
            container = container();
        }
        if (typeof container === 'string') {
            container = document.getElementById(container);
        } else {
            try {
                container = _reactDom2['default'].findDOMNode(container);
            } catch (err) {
                // regardless of error
            }
        }
        return container;
    };

    Gateway.prototype.getContentNode = function getContentNode() {
        if (this._overlay) {
            return _reactDom2['default'].findDOMNode(this._overlay);
        }
    };

    Gateway.prototype.getWrapperNode = function getWrapperNode() {
        return this.wrapper;
    };

    Gateway.prototype.render = function render() {
        return null;
    };

    return Gateway;
}(_react2['default'].Component), _class.propTypes = {
    /**
     * 指定渲染children的容器
     */
    container: PropTypes.any,
    children: PropTypes.any
}, _class.defaultProps = {
    container: function container() {
        return document.body;
    }
}, _temp);
Gateway.displayName = 'Gateway';
exports['default'] = Gateway;
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nextDom = __webpack_require__(6);

var _nextUtil = __webpack_require__(2);

var _classnames3 = __webpack_require__(1);

var _classnames4 = _interopRequireDefault(_classnames3);

var _manager = __webpack_require__(112);

var _manager2 = _interopRequireDefault(_manager);

var _gateway = __webpack_require__(49);

var _gateway2 = _interopRequireDefault(_gateway);

var _position = __webpack_require__(51);

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes,
    Children = _react2['default'].Children,
    makeChain = _nextUtil.func.makeChain,
    noop = function noop() {},
    saveLastFocusNode = _nextUtil.focus.saveLastFocusNode,
    getFocusNodeList = _nextUtil.focus.getFocusNodeList,
    backLastFocusNode = _nextUtil.focus.backLastFocusNode,
    ANIMATION_CLS = 'animated';

// <Overlay>
//  <content></content>
// </Overlay>
/** Overlay */
var Overlay = (_temp = _class = function (_React$Component) {
    _inherits(Overlay, _React$Component);

    Overlay.prototype.getPrefix = function getPrefix() {
        return this.context.prefix || this.props.prefix;
    };

    function Overlay(props, context) {
        _classCallCheck(this, Overlay);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {
            visible: props.visible
        };
        _this.Manager = _manager2['default'];
        _this._onDocumentKeyDown = _this._onDocumentKeyDown.bind(_this);
        _this._onDocumentClick = _this._onDocumentClick.bind(_this);
        _this._onMaskClick = _this._onMaskClick.bind(_this);
        _this._onPosition = _this._onPosition.bind(_this);
        _this._safeClickNode = [];
        return _this;
    }

    Overlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.animation) {
            if (!this.state.visible && nextProps.visible) {
                this.enter();
            } else if (this.state.visible && !nextProps.visible) {
                this.leave();
            } else if (this.hasEntered) {
                this.keep();
            }
        } else {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    Overlay.prototype.componentWillMount = function componentWillMount() {
        if (this.props.visible && this.props.animation) {
            this.enter();
        }
        this.onAnimateEnd = this.onAnimateEnd.bind(this);
        this._throwPropEvents(this.props, this.state);
    };

    Overlay.prototype._initAnimationEvents = function _initAnimationEvents() {
        var node = this.getContentNode();
        if (node && this.props.animation) {
            if (_nextUtil.support.animation) {
                this._animation = _nextDom.events.on(node, _nextUtil.support.animation.end, this.onAnimateEnd);
            } else {
                if (this._animation) {
                    clearTimeout(this._animation);
                }
                this._animation = setTimeout(this.onAnimateEnd, 10);
            }
        }
    };

    Overlay.prototype.enter = function enter() {
        var _this2 = this;

        this.setState({
            visible: true,
            animationType: 'in'
        }, function () {
            _this2.onEntering && _this2.onEntering();
        });
    };

    Overlay.prototype.leave = function leave() {
        if (this._animation) {
            this.setState({
                animationType: 'out'
            });
            this.onLeaving && this.onLeaving();
        } else {
            this.setState({
                visible: false
            });
        }
    };

    Overlay.prototype.keep = function keep() {
        this.setState({
            animationType: 'none'
        });
    };

    Overlay.prototype.onAnimateEnd = function onAnimateEnd() {
        if (this.state.animationType === 'out') {
            this.setState({
                visible: false
            });
            this.onLeaved && this.onLeaved();
            this.hasEntered = false;
        } else {
            this.onEntered && this.onEntered();
            this.hasEntered = true;
        }
    };

    Overlay.prototype.getAnimationCls = function getAnimationCls(config) {
        var className = void 0;
        switch (this.state.animationType) {
            case 'in':
                className = ANIMATION_CLS + ' ' + config['in'];
                break;
            case 'out':
                className = ANIMATION_CLS + ' ' + config.out;
                break;
            case 'none':
                className = '';
        }
        return className;
    };

    Overlay.prototype.getContentNode = function getContentNode() {
        return _reactDom2['default'].findDOMNode(this.getContent());
    };

    Overlay.prototype.getContent = function getContent() {
        return this.refs[this.contentRef];
    };

    Overlay.prototype.getWrapperNode = function getWrapperNode() {
        return this.refs.gateway.getContentNode();
    };

    Overlay.prototype.getContentRef = function getContentRef(child) {
        return child.ref ? child.ref : 'content';
    };

    Overlay.prototype.render = function render() {
        /* eslint-disable no-unused-vars */
        var _props = this.props,
            animation = _props.animation,
            cache = _props.cache,
            container = _props.container,
            className = _props.className,
            hasMask = _props.hasMask,
            shouldUpdatePosition = _props.shouldUpdatePosition,
            target = _props.target,
            offset = _props.offset,
            align = _props.align,
            onPosition = _props.onPosition,
            beforePosition = _props.beforePosition,
            needAdjust = _props.needAdjust,
            children = _props.children,
            safeId = _props.safeId,
            canCloseByOutSideClick = _props.canCloseByOutSideClick,
            canCloseByEsc = _props.canCloseByEsc,
            visible = _props.visible,
            beforeOpen = _props.beforeOpen,
            beforeClose = _props.beforeClose,
            afterOpen = _props.afterOpen,
            afterClose = _props.afterClose,
            onOpen = _props.onOpen,
            onClose = _props.onClose,
            onRequestClose = _props.onRequestClose,
            wrapperCls = _props.wrapperClassName,
            others = _objectWithoutProperties(_props, ['animation', 'cache', 'container', 'className', 'hasMask', 'shouldUpdatePosition', 'target', 'offset', 'align', 'onPosition', 'beforePosition', 'needAdjust', 'children', 'safeId', 'canCloseByOutSideClick', 'canCloseByEsc', 'visible', 'beforeOpen', 'beforeClose', 'afterOpen', 'afterClose', 'onOpen', 'onClose', 'onRequestClose', 'wrapperClassName']),
            prefix = this.getPrefix(),
            animationCls = void 0,
            cls = void 0,
            child = void 0,
            wrapperClassName = void 0,
            style = {
            display: this.state.visible ? '' : 'none'
        };

        children = this.state.visible || cache && this._isMounted ? children : null;
        onPosition = makeChain(this._onPosition, onPosition);

        if (animation) {
            animationCls = this.getAnimationCls(animation);
        } else {
            animationCls = false;
        }
        if (children) {
            var _classnames, _classnames2;

            child = Children.only(children);
            // eslint-disable-next-line
            cls = (0, _classnames4['default'])((_classnames = {}, _defineProperty(_classnames, prefix + 'overlay-inner', true), _defineProperty(_classnames, animationCls, animationCls), _defineProperty(_classnames, child.props.className, child.props.className), _defineProperty(_classnames, className, className), _classnames)), wrapperClassName = (0, _classnames4['default'])((_classnames2 = {}, _defineProperty(_classnames2, prefix + 'overlay-wrapper', true), _defineProperty(_classnames2, wrapperCls, wrapperCls), _classnames2));

            this.contentRef = this.getContentRef(child);

            children = _react2['default'].cloneElement(child, {
                className: cls,
                ref: this.contentRef,
                id: child.props.id ? child.props.id : safeId
            });

            if (this.state.animationType === 'out') {
                shouldUpdatePosition = false;
            }

            if (this.props.align) {
                children = _react2['default'].createElement(
                    _position2['default'],
                    {
                        target: target,
                        offset: offset,
                        align: align,
                        beforePosition: beforePosition,
                        onPosition: onPosition,
                        needAdjust: needAdjust,
                        shouldUpdatePosition: shouldUpdatePosition },
                    children
                );
            }
            children = _react2['default'].createElement(
                'div',
                { className: wrapperClassName, style: style },
                hasMask ? _react2['default'].createElement('div', { className: prefix + 'overlay-backdrop', onClick: this._onMaskClick }) : null,
                children
            );
        }
        return _react2['default'].createElement(
            _gateway2['default'],
            { container: container, ref: 'gateway' },
            children
        );
    };

    Overlay.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
        this._throwPropEvents(nextProps, nextState);
        this._isMounted = true;
    };

    Overlay.prototype._throwPropEvents = function _throwPropEvents(props, state) {
        if (state.visible) {
            props.beforeOpen();
        } else {
            props.beforeClose();
        }
    };

    Overlay.prototype.componentDidMount = function componentDidMount() {
        if (this.props.canCloseByEsc) {
            _nextDom.events.on(document, 'keydown', this._onDocumentKeyDown);
        }

        if (this.props.canCloseByOutSideClick) {
            _nextDom.events.on(document, 'click', this._onDocumentClick);
        }
        //如果设置了动画，需要等到动画执行完毕再设置焦点
        //使用onEntered方法
        this.componentDidUpdate();
    };

    Overlay.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        var wrapperNode = this.getWrapperNode();
        if (!this.props.animation) {
            this._setFocusNode(prevProps, prevState);
            if (this.state.visible) {
                this.props.onOpen();
                this.props.afterOpen();
                wrapperNode && _nextDom.classList.addClass(wrapperNode, 'opened');
                _manager2['default'].addOverlay(this);
            } else if (prevState && prevState.visible === true) {
                this.props.onClose();
                this.props.afterClose();
                wrapperNode && _nextDom.classList.removeClass(wrapperNode, 'opened');
                _manager2['default'].removeOverlay(this);
            }
        }
        this.prevProps = prevProps;
        this.prevState = prevState;
        this._initAnimationEvents();
    };

    Overlay.prototype.onEntering = function onEntering() {
        var wrapperNode = this.getWrapperNode();
        this.props.onOpen();
        _nextDom.classList.addClass(wrapperNode, 'opened');
    };

    Overlay.prototype.onLeaving = function onLeaving() {
        var wrapperNode = this.getWrapperNode();
        this.props.onClose();
        _nextDom.classList.removeClass(wrapperNode, 'opened');
    };

    Overlay.prototype.onEntered = function onEntered() {
        this._setFocusNode(this.prevProps, this.prevState);
        this.props.afterOpen();
        _manager2['default'].addOverlay(this);
    };

    Overlay.prototype.onLeaved = function onLeaved() {
        this._setFocusNode(this.prevProps, this.prevState);
        this.props.afterClose();
        _manager2['default'].removeOverlay(this);
    };

    //保留弹出层之前的焦点
    //当弹层消失的时候返回之前的焦点


    Overlay.prototype._setFocusNode = function _setFocusNode(prevProps, prevState) {
        var _this3 = this;

        var oldState = prevState || {};
        if (this.props.autoFocus) {
            if (this.state.visible && !this._hasFocused) {
                saveLastFocusNode();
                //这个时候很可能上一个弹层的关闭事件还未触发，导致焦点已经back触发的元素
                //这里延时处理一下，延时的时间为document.click捕获触发的延时时间
                this.focusTimeout = setTimeout(function () {
                    var node = _this3.getContentNode();

                    if (node) {
                        var focusNodeList = getFocusNodeList(node);
                        if (focusNodeList.length) {
                            focusNodeList[0].focus();
                        }
                        _this3._hasFocused = true;
                    }
                }, 100);
            } else if (!this.state.visible && this._hasFocused) {
                backLastFocusNode();
                this._hasFocused = false;
            }
        }
    };

    Overlay.prototype.componentWillUnmount = function componentWillUnmount() {
        _manager2['default'].removeOverlay(this);
        this._isMounted = false;
        if (this.props.canCloseByEsc) {
            _nextDom.events.off(document, 'keydown', this._onDocumentKeyDown);
        }
        if (this.props.canCloseByOutSideClick) {
            _nextDom.events.off(document, 'click', this._onDocumentClick);
        }
        if (this.focusTimeout) {
            clearTimeout(this.focusTimeout);
        }
        if (this._animation) {
            if (this._animation.off) {
                this._animation.off();
            } else {
                clearTimeout(this._animation);
            }
            this._animation = null;
        }
    };

    Overlay.prototype._onMaskClick = function _onMaskClick(e) {
        if (this.props.canCloseByMask) {
            this.props.onRequestClose('maskClick', e);
        }
    };

    Overlay.prototype._getSafeNode = function _getSafeNode(safeNode) {
        if (typeof safeNode === 'function') {
            safeNode = safeNode(this.props);
        }
        if (typeof safeNode === 'string') {
            safeNode = document.getElementById(safeNode);
        } else {
            try {
                safeNode = _reactDom2['default'].findDOMNode(safeNode);
            } catch (e) {
                // regardless of error
            }
        }

        return safeNode;
    };

    Overlay.prototype._onDocumentKeyDown = function _onDocumentKeyDown(e) {
        if (e.keyCode === 27 && this.state.visible) {
            if (this.Manager && this.Manager.isCurrentOverlay(this) || !this.Manager) {
                this.props.onRequestClose('keyboard', e);
            }
        }
    };

    Overlay.prototype._onDocumentClick = function _onDocumentClick(e) {

        if (this.state.visible) {
            this.initSafeNode();
            for (var i = 0; i < this._safeClickNode.length; i++) {
                var node = this._safeClickNode[i],
                    nodeGroup = node.getAttribute('data-overlay-group'),
                    _target = e.target,
                    targetGroup = _target.getAttribute && _target.getAttribute('data-overlay-group') || '';
                if (node.contains(_target) || nodeGroup === targetGroup || node === _target || !document.documentElement.contains(e.target)) {
                    return;
                }
            }
            this.props.onRequestClose('docClick', e);
        }
    };

    Overlay.prototype.initSafeNode = function initSafeNode() {
        var node = this.getWrapperNode && this.getWrapperNode() || _reactDom2['default'].findDOMNode(this),
            safeNode = this.props.safeNode;


        if (Array.isArray(safeNode)) {
            safeNode.push(node);
        } else {
            safeNode = [node, safeNode];
        }
        this.addNodeForSafeClick(safeNode);
    };

    Overlay.prototype.addNodeForSafeClick = function addNodeForSafeClick(node) {
        var _this4 = this;

        if (Array.isArray(node)) {
            node.forEach(function (n) {
                _this4.addNodeForSafeClick(n);
            });
        } else {
            var safeNode = this._getSafeNode(node);
            if (safeNode && this._safeClickNode.indexOf(safeNode) === -1) {
                this._safeClickNode.push(safeNode);
            }
        }
    };

    Overlay.prototype._onPosition = function _onPosition(res) {
        if (this.state.visible) {
            // 很可能我们访问不到contentNode节点，尤其当contentNode的ref为函数的时候
            var contentNode = this.getContentNode();
            if (contentNode) {
                var align = res.align[0];
                var className = contentNode.className.split(' ');
                className.forEach(function (cls) {
                    if (cls.indexOf('position') > -1) {
                        _nextDom.classList.removeClass(contentNode, cls);
                    }
                });
                _nextDom.classList.addClass(contentNode, this.props.prefix + 'position-' + align);
            }
        }
    };

    return Overlay;
}(_react2['default'].Component), _class.propTypes = {
    /**
     * 是否显示浮层,如果此属性为false，浮层不会被渲染
     */
    visible: PropTypes.bool,
    /**
     * 是否支持esc按键关闭浮层
     */
    canCloseByEsc: PropTypes.bool,
    /**
     * 点击浮层外的区域是否关闭浮层
     */
    canCloseByOutSideClick: PropTypes.bool,
    /**
     * 点击遮罩区域是否关闭浮层
     */
    canCloseByMask: PropTypes.bool,
    /**
     * 配置动画的播放方式
     * @param {String} in 进场动画
     * @param {String} out 出场动画
     */
    animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    /**
     * 配置浮层定位的参照元素
     */
    target: PropTypes.any,
    /**
     * 浮层相对于target的定位, 详见Guide的align说明部分
     */
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * 浮层相对于target定位的微调
     */
    offset: PropTypes.array,
    beforeClose: PropTypes.func,
    /**
     * 浮层打开后触发的事件
     */
    afterOpen: PropTypes.func,
    /**
     * 浮层关闭后触发的事件
     */
    afterClose: PropTypes.func,
    beforeOpen: PropTypes.func,
    /**
     * 浮层请求关闭触发的事件
     * @param {String} reason 浮层关闭的来源
     * @param {Event} e DOM事件
     */
    onRequestClose: PropTypes.func,
    /**
     * 浮层定位完成后触发的事件
     */
    onPosition: PropTypes.func,
    /**
     * 浮层打开的时候是否让里面的元素自动获取焦点
     */
    autoFocus: PropTypes.bool,
    /**
     * 是否显示遮罩
     */
    hasMask: PropTypes.bool,
    prefix: PropTypes.string,
    cache: PropTypes.bool,
    safeId: PropTypes.string,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    /**
     * 安全节点,当点击document的时候,如果包含该节点则不会关闭浮层, 如果是函数需要返回ref, 如果是字符串则是该DOM的id, 也可以直接传入DOM节点
     */
    safeNode: PropTypes.any,
    /**
     * 浮层的根节点的样式类
     */
    wrapperClassName: PropTypes.string,
    container: PropTypes.any,
    shouldUpdatePosition: PropTypes.bool,
    beforePosition: PropTypes.func,
    needAdjust: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any
}, _class.defaultProps = {
    align: 'tl bl',
    offset: [0, 0],
    visible: false,
    canCloseByEsc: true,
    canCloseByOutSideClick: true,
    canCloseByMask: true,
    target: _position2['default'].VIEWPORT,
    animation: {
        'in': 'expandInDown',
        out: 'expandOutUp'
    },
    beforeClose: noop,
    afterClose: noop,
    onRequestClose: noop,
    beforeOpen: noop,
    onOpen: noop,
    onClose: noop,
    afterOpen: noop,
    onPosition: noop,
    autoFocus: false,
    hasMask: false,
    prefix: 'next-',
    cache: false,
    safeId: null
}, _class.contextTypes = {
    prefix: PropTypes.string
}, _temp);
Overlay.displayName = 'Overlay';
exports['default'] = Overlay;
module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nextDom = __webpack_require__(6);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes,
    Children = _react2['default'].Children,
    place = _nextDom.position.place,
    noop = function noop() {};
/** Overlay.Position */
var Position = (_temp = _class = function (_React$Component) {
    _inherits(Position, _React$Component);

    function Position(props) {
        _classCallCheck(this, Position);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        ['resize', 'setPosition'].forEach(function (method) {
            _this[method] = _this[method].bind(_this);
        });
        return _this;
    }

    Position.prototype.resize = function resize() {
        var _this2 = this;

        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout(function () {
            _this2.setPosition();
        }, 200);
    };

    Position.prototype.render = function render() {
        var _classnames;

        var child = Children.only(this.props.children),
            propClassName = this.props.className,
            childClassName = child.props.className,
            className = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, propClassName, propClassName), _defineProperty(_classnames, childClassName, childClassName), _classnames));

        return _react2['default'].cloneElement(child, {
            className: className
        });
    };

    Position.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('align' in nextProps && nextProps.align !== this.props.align || nextProps.shouldUpdatePosition) {
            this.shouldUpdatePosition = true;
        }
    };

    Position.prototype.componentDidMount = function componentDidMount() {
        this.setPosition();
        if (this.props.needListenResize) {
            _nextDom.events.on(window, 'resize', this.resize);
        }
    };

    Position.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.needListenResize) {
            _nextDom.events.off(window, 'resize', this.resize);
        }
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
    };

    Position.prototype.componentDidUpdate = function componentDidUpdate() {
        if (this.shouldUpdatePosition) {
            this.setPosition();
            this.shouldUpdatePosition = false;
        }
    };

    Position.prototype.setPosition = function setPosition() {
        var align = this.props.align,
            offset = this.props.offset,
            contentNode = this.getContentNode(),
            target = this.getTarget();

        this.props.beforePosition();
        if (target && contentNode) {
            var resultAlign = place(contentNode, target, align, offset, this.props.needAdjust, this.props.isRtl);
            var left = _nextDom.style.get(contentNode, 'left'),
                top = _nextDom.style.get(contentNode, 'top');

            this.props.onPosition({
                left: left,
                top: top,
                align: resultAlign.split(' ')
            }, contentNode);
        }
    };

    Position.prototype.getContentNode = function getContentNode() {
        return _reactDom2['default'].findDOMNode(this);
    };

    Position.prototype.getTarget = function getTarget() {
        var target = this.props.target;
        if (!target) {
            return null;
        }
        if (typeof target === 'function') {
            target = target(this.props);
        }
        if (typeof target === 'string' && target !== _nextDom.position.VIEWPORT) {
            target = document.getElementById(target);
        } else {
            try {
                target = _reactDom2['default'].findDOMNode(target);
            } catch (err) {
                // continue regardless of error
            }
        }
        return target;
    };

    return Position;
}(_react2['default'].Component), _class.propTypes = {
    /**
     * 定位参照的元素
     */
    target: PropTypes.any,
    /**
     * 定位的目标元素
     */
    contentNode: PropTypes.any,
    /**
     * 定位的方式
     */
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    offset: PropTypes.array,
    beforePosition: PropTypes.func,
    onPosition: PropTypes.func,
    /**
     * 是否自动调整定位的位置
     */
    needAdjust: PropTypes.bool,
    /**
     * 是否监听Resize事件
     */
    needListenResize: PropTypes.bool,
    /**
     * 强制更新定位信息
     */
    shouldUpdatePosition: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
    isRtl: PropTypes.bool
}, _class.defaultProps = {
    align: 'tl bl',
    offset: [0, 0],
    isRtl: false,
    beforePosition: noop,
    onPosition: noop,
    needAdjust: true,
    needListenResize: true,
    shouldUpdatePosition: false
}, _temp);
Position.displayName = 'Position';
exports['default'] = Position;


Position.VIEWPORT = _nextDom.position.VIEWPORT;
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames5 = __webpack_require__(1);

var _classnames6 = _interopRequireDefault(_classnames5);

var _nextMixinUiState = __webpack_require__(48);

var _nextMixinUiState2 = _interopRequireDefault(_nextMixinUiState);

var _nextUtil = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Radio = (_temp = _class = function (_UIState) {
    _inherits(Radio, _UIState);

    function Radio(props, context) {
        _classCallCheck(this, Radio);

        var _this = _possibleConstructorReturn(this, _UIState.call(this, props));

        var checked = void 0,
            disabled = void 0;
        if (context.__group__) {
            checked = context.selectedValue === props.value;
            disabled = context.disabled;
        } else if ('checked' in props) {
            checked = props.checked;
        } else {
            checked = props.defaultChecked;
        }
        _this.state = {
            checked: checked,
            disabled: disabled,
            isMouseDown: false
        };

        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    Radio.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
        if (nextContext.__group__) {
            var selectedValue = nextContext.selectedValue,
                disabled = nextContext.disabled;

            if ('selectedValue' in nextContext && 'disabled' in nextContext) {
                this.setState({
                    checked: selectedValue === nextProps.value,
                    disabled: disabled
                });
            }
        } else if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked
            });
        }
    };

    Radio.prototype.onChange = function onChange(e) {
        var checked = e.target.checked;
        var value = this.props.value;

        if (this.context.__group__) {
            this.context.onChange(value, e);
        } else if (this.state.checked !== checked) {
            if (!('checked' in this.props)) {
                this.setState({
                    checked: checked
                });
            }
            this.props.onChange(checked, e);
        }
    };

    Radio.prototype.render = function render() {
        var _classnames, _classnames2, _classnames3;

        var _props = this.props,
            className = _props.className,
            children = _props.children,
            style = _props.style,
            other = _objectWithoutProperties(_props, ['className', 'children', 'style']);

        var checked = this.state.checked;
        var disabled = this.state.disabled || this.props.disabled;
        var isButton = this.context.isButton;
        var newOther = (0, _nextUtil.pickAttrs)(other);
        var prefix = this.context.prefix || this.props.prefix;

        var input = _react2['default'].createElement('input', _extends({
            type: 'radio'
        }, newOther, {
            disabled: disabled,
            checked: checked,
            onChange: this.onChange,
            'aria-checked': checked

        }));

        var child = this.getStateElement(input);
        var cls = (0, _classnames6['default'])((_classnames = {}, _defineProperty(_classnames, prefix + 'radio', true), _defineProperty(_classnames, className, !!className), _defineProperty(_classnames, 'checked', checked), _defineProperty(_classnames, 'disabled', disabled), _defineProperty(_classnames, this.getStateClassName(), true), _classnames));
        var clsInner = (0, _classnames6['default'])((_classnames2 = {}, _defineProperty(_classnames2, prefix + 'radio-inner', true), _defineProperty(_classnames2, 'press', checked), _defineProperty(_classnames2, 'unpress', !checked), _classnames2));
        var clsWrapper = (0, _classnames6['default'])((_classnames3 = {}, _defineProperty(_classnames3, prefix + 'radio-wrapper', true), _defineProperty(_classnames3, className, !!className), _defineProperty(_classnames3, 'checked', checked), _defineProperty(_classnames3, 'disabled', disabled), _defineProperty(_classnames3, this.getStateClassName(), true), _classnames3));
        var childrenCls = (0, _classnames6['default'])(_defineProperty({}, prefix + 'radio-label', !!children));

        var radioComp = !isButton ? _react2['default'].createElement(
            'span',
            { className: cls, style: style
            },
            _react2['default'].createElement('span', { className: clsInner }),
            child
        ) : _react2['default'].createElement(
            'span',
            { className: prefix + 'radio-single-input'
            },
            child
        );

        return children ? _react2['default'].createElement(
            'label',
            {
                className: isButton ? clsWrapper : '', style: isButton ? style : {} },
            radioComp,
            _react2['default'].createElement(
                'span',
                { htmlFor: this.props.id, className: childrenCls },
                children
            )
        ) : _react2['default'].createElement(
            'label',
            {
                className: isButton ? clsWrapper : '', style: isButton ? style : {} },
            radioComp
        );
    };

    return Radio;
}(_nextMixinUiState2['default']), _class.displayName = 'Radio', _class.propTypes = {
    checked: _react.PropTypes.bool,
    defaultChecked: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    prefix: _react.PropTypes.string,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object
}, _class.defaultProps = {
    onChange: function onChange() {},
    prefix: 'next-'
}, _class.contextTypes = {
    onChange: _react.PropTypes.func,
    __group__: _react.PropTypes.bool,
    isButton: _react.PropTypes.bool,
    selectedValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.bool]),
    disabled: _react.PropTypes.bool,
    prefix: _react.PropTypes.string
}, _temp);
exports['default'] = Radio;
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = __webpack_require__(44);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxGroup = __webpack_require__(100);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_checkbox2['default'].Group = _checkboxGroup2['default'];

exports['default'] = _checkbox2['default'];
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var core = __webpack_require__(34);
var ctx = __webpack_require__(196);
var hide = __webpack_require__(15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(16).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(18)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(62)('keys');
var uid = __webpack_require__(39);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(35);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var core = __webpack_require__(34);
var LIBRARY = __webpack_require__(58);
var wksExt = __webpack_require__(66);
var defineProperty = __webpack_require__(16).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(18);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radio = __webpack_require__(52);

var _radio2 = _interopRequireDefault(_radio);

var _radioGroup = __webpack_require__(114);

var _radioGroup2 = _interopRequireDefault(_radioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_radio2['default'].Group = _radioGroup2['default'];

exports['default'] = _radio2['default'];
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nextUtil = __webpack_require__(2);

var _separator = __webpack_require__(135);

var _separator2 = _interopRequireDefault(_separator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Item = (_temp = _class = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Item.prototype.render = function render() {
        var _classNames;

        var prefix = this.context.prefix || this.props.prefix;
        /* eslint-disable no-unused-vars */

        var _props = this.props,
            propsPrefix = _props.prefix,
            className = _props.className,
            children = _props.children,
            href = _props.href,
            _props$link = _props.link,
            link = _props$link === undefined ? href : _props$link,
            activated = _props.activated,
            separator = _props.separator,
            others = _objectWithoutProperties(_props, ['prefix', 'className', 'children', 'href', 'link', 'activated', 'separator']);
        /* eslint-enable */


        var classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'breadcrumb-text', true), _defineProperty(_classNames, className, className), _defineProperty(_classNames, 'activated', activated), _classNames));

        href && _nextUtil.log.deprecated('href', 'link', 'Breadcrumb.Item');

        return _react2['default'].createElement(
            'div',
            { className: prefix + 'breadcrumb-item' },
            link ? _react2['default'].createElement(
                'a',
                _extends({ href: link, className: classes }, others),
                children
            ) : _react2['default'].createElement(
                'span',
                _extends({ className: classes }, others),
                children
            ),
            activated ? null : _react2['default'].createElement(
                _separator2['default'],
                null,
                separator
            )
        );
    };

    return Item;
}(_react2['default'].Component), _class.contextTypes = {
    prefix: _react2['default'].PropTypes.string
}, _class.propTypes = {
    prefix: _react2['default'].PropTypes.string,
    href: _react2['default'].PropTypes.string, // TODO: deprecated in 1.0 release
    link: _react2['default'].PropTypes.string,
    activated: _react2['default'].PropTypes.bool,
    separator: _react2['default'].PropTypes.any,
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.any
}, _class.defaultProps = {
    prefix: 'next-',
    activated: false,
    separator: ''
}, _temp);
Item.displayName = 'Item';
exports['default'] = Item;
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _helper = __webpack_require__(31);

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Group = (_temp = _class = function (_React$Component) {
    _inherits(Group, _React$Component);

    function Group(props, context) {
        _classCallCheck(this, Group);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        var prefix = context.prefix + 'navigation';

        _this.groupClassName = prefix + '-group';
        _this.titleClassName = prefix + '-group-title';
        _this.contentClassName = prefix + '-group-content';
        return _this;
    }

    Group.prototype.renderTitle = function renderTitle() {
        var title = this.props.title;


        return _react2['default'].createElement(
            'div',
            { className: this.titleClassName },
            title
        );
    };

    Group.prototype.renderChildren = function renderChildren() {
        var children = this.props.children;


        return _react2['default'].createElement(
            'ul',
            { className: this.contentClassName },
            children
        );
    };

    Group.prototype.renderContent = function renderContent() {
        var _classNames;

        var _props = this.props,
            className = _props.className,
            style = _props.style;


        var classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this.groupClassName, true), _defineProperty(_classNames, className, !!className), _classNames));

        return _react2['default'].createElement(
            'li',
            { className: classes, style: style },
            this.renderTitle(),
            this.renderChildren()
        );
    };

    Group.prototype.render = function render() {
        return this.renderContent();
    };

    return Group;
}(_react2['default'].Component), _class.contextTypes = _helper2['default'].propTypes, _class.propTypes = {
    className: _react.PropTypes.string,
    title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    children: _react.PropTypes.any
}, _temp);
Group.displayName = 'Group';
exports['default'] = Group;
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _item = __webpack_require__(21);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Normal = function (_Item) {
    _inherits(Normal, _Item);

    function Normal(props, context) {
        _classCallCheck(this, Normal);

        var _this = _possibleConstructorReturn(this, _Item.call(this, props, context));

        _this.activeDirectionClassName = context.prefix + 'navigation-item-selected';
        return _this;
    }

    Normal.prototype.onClick = function onClick() {
        var _props = this.props,
            onClick = _props.onClick,
            onSelect = _props.onSelect,
            selected = _props.selected,
            selectedStyle = _props.selectedStyle,
            itemid = _props.itemid;

        var context = this.context,
            argv = [itemid, this].concat([].slice.call(arguments));

        argv.splice(2, 0, this);

        onClick.apply(this, argv);
        context.onItemClick.apply(context.rootNavigation, argv);

        if (selected) {
            return this;
        }

        onSelect.apply(this, argv);

        if (selectedStyle) {
            context.onItemSelect.apply(context.rootNavigation, argv);
        }
    };

    Normal.prototype.render = function render() {
        var _classNames;

        var _props2 = this.props,
            selected = _props2.selected,
            activeDirection = _props2.activeDirection,
            context = this.context,
            classes = void 0,
            activeClassName = void 0;


        activeDirection = activeDirection || context.activeDirection;
        activeClassName = this.activeDirectionClassName + '-' + activeDirection;

        classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this.selectedClassName, selected), _defineProperty(_classNames, activeClassName, selected && activeDirection), _classNames));

        return _Item.prototype.render.call(this, classes);
    };

    return Normal;
}(_item2['default']);

exports['default'] = Normal;
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _navigation = __webpack_require__(22);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Normal = function (_Navigation) {
    _inherits(Normal, _Navigation);

    function Normal() {
        _classCallCheck(this, Normal);

        return _possibleConstructorReturn(this, _Navigation.apply(this, arguments));
    }

    /**
     * 由item子组件click触发select处理函数
     * @method onItemSelect
     */
    Normal.prototype.onItemSelect = function onItemSelect(itemid) {
        if (itemid === this.state.selectedKey) {
            return this;
        }

        _Navigation.prototype.onItemSelect.apply(this, arguments);

        if (this.props.selectedStyle) {
            this.setState({
                selectedKey: itemid
            });
        }
    };

    return Normal;
}(_navigation2['default']);

exports['default'] = Normal;


Normal.defaultProps.type = 'normal';
module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.makeChain = function (left, right) {
    var args = [].slice.call(arguments, 0);
    if (args.length == 2 && !right || args.length == 1) {
        return left;
    }
    return function () {
        for (var i = args.length - 1; i >= 0; i--) {
            if (args[i] && typeof args[i] == 'function') {
                args[i].apply(this, arguments);
            }
        }
    };
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nextOverlay = __webpack_require__(9);

var _nextOverlay2 = _interopRequireDefault(_nextOverlay);

var _nextUtil = __webpack_require__(2);

var _nextDom = __webpack_require__(6);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _inner = __webpack_require__(136);

var _inner2 = _interopRequireDefault(_inner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes,
    noop = function noop() {},
    limitTabRange = _nextUtil.focus.limitTabRange,
    makeChain = _nextUtil.func.makeChain,
    parseComboOption = function parseComboOption(option) {
    if (option === true || option === false) {
        return option;
    }
    var res = {};
    option.split(',').forEach(function (o) {
        var key = o.replace(/^\s*|\s*$/g, '');
        res[key] = true;
    });
    return res;
};

var hasScroll = function hasScroll() {
    var doc = document.documentElement;
    return doc.scrollHeight > doc.clientHeight;
};
// <Dialog>
//      <Dialog.Header></Dialog.Header>
//      <Dialog.Body></Dialog.Body>
//      <Dialog.Footer></Dialog.Footer>
// </Dialog>

var Dialog = (_temp = _class = function (_React$Component) {
    _inherits(Dialog, _React$Component);

    Dialog.prototype.getPrefix = function getPrefix() {
        return this.context.prefix || this.props.prefix;
    };

    function Dialog(props, context) {
        _classCallCheck(this, Dialog);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.adjustPosition = _this.adjustPosition.bind(_this);
        _this.onClose = _this.onClose.bind(_this);
        _this.onCloseButtonClick = _this.onCloseButtonClick.bind(_this);
        _this.beforeOpen = _this.beforeOpen.bind(_this);
        _this.afterClose = _this.afterClose.bind(_this);
        _this.beforePosition = _this.beforePosition.bind(_this);
        _this.onWindowResize = _this.onWindowResize.bind(_this);
        return _this;
    }

    Dialog.prototype.componentDidMount = function componentDidMount() {
        _nextDom.events.on(document, 'keydown', this.onKeyDown);
        _nextDom.events.on(window, 'resize', this.onWindowResize);
        this.adjustPosition();
    };

    Dialog.prototype.componentDidUpdate = function componentDidUpdate() {
        this.adjustPosition();
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        _nextDom.events.off(document, 'keydown', this.onKeyDown);
        _nextDom.events.off(window, 'resize', this.onWindowResize);
        this.afterClose();
    };

    Dialog.prototype.onWindowResize = function onWindowResize() {
        this._hasWindowResize = true;
    };

    Dialog.prototype.render = function render() {
        var _classnames;

        /* eslint-disable no-unused-vars, react/prop-types */
        var _props = this.props,
            prefix = _props.prefix,
            closable = _props.closable,
            children = _props.children,
            className = _props.className,
            footerAlign = _props.footerAlign,
            onClose = _props.onClose,
            style = _props.style,
            role = _props.role,
            wrapperClassName = _props.wrapperClassName,
            others = _objectWithoutProperties(_props, ['prefix', 'closable', 'children', 'className', 'footerAlign', 'onClose', 'style', 'role', 'wrapperClassName']),
            props = _extends({
            align: 'cc cc'
        }, others, this.mapClosableToConfig(closable)),
            onPosition = makeChain(this.onPosition, this.props.onPosition);

        delete props.closable;

        var wrapperClassNameMix = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.getPrefix() + 'dialog-wrapper', true), _defineProperty(_classnames, wrapperClassName, wrapperClassName), _classnames));

        props.wrapperClassName = wrapperClassNameMix;

        var beforeOpen = makeChain(this.beforeOpen, this.props.beforeOpen),
            afterClose = makeChain(this.afterClose, this.props.afterClose);

        others = (0, _nextUtil.pickAttrs)(others);

        return _react2['default'].createElement(
            _nextOverlay2['default'],
            _extends({}, props, {
                onRequestClose: this.onClose,
                beforeOpen: beforeOpen,
                afterClose: afterClose,
                onPosition: this.adjustPosition,
                beforePosition: this.beforePosition,
                canCloseByOutSideClick: false,
                needAdjust: false,
                ref: 'overlay' }),
            _react2['default'].createElement(
                _inner2['default'],
                _extends({}, others, {
                    onClose: this.onCloseButtonClick,
                    className: className,
                    footerAlign: footerAlign,
                    closable: closable,
                    style: style,
                    role: role,
                    'aria-hidden': !this.props.visible }),
                children
            )
        );
    };

    Dialog.prototype.beforeOpen = function beforeOpen() {
        var value = {
            overflowY: 'hidden'
        };
        if (hasScroll()) {
            value.paddingRight = (0, _nextUtil.scrollbar)().width + 'px';
        }
        _nextDom.style.set(document.body, value);
    };

    Dialog.prototype.afterClose = function afterClose() {
        _nextDom.style.set(document.body, {
            overflowY: 'auto',
            paddingRight: 0
        });
    };

    Dialog.prototype.onClose = function onClose() {
        this.props.onClose('fromKeyboard');
    };

    Dialog.prototype.onCloseButtonClick = function onCloseButtonClick() {
        var res = this.mapClosableToConfig(this.props.closable);

        if (res.canCloseByCloseClick) {
            this.props.onClose('fromCloseBtn');
        }
    };

    Dialog.prototype.onKeyDown = function onKeyDown(e) {
        var node = this.refs.overlay.getContentNode();
        if (node) {
            limitTabRange(node, e);
        }
    };

    Dialog.prototype.beforePosition = function beforePosition() {
        if (this.props.visible) {
            var content = this.refs.overlay ? this.refs.overlay.getContent() : '';
            if (content) {
                var body = content.getBody();
                var node = this.refs.overlay.getContentNode();
                if (this._lastDialogHeight !== node.clientHeight || this._hasWindowResize) {
                    this.revertSize(node, body);
                    this._hasWindowResize = false;
                }
            }
        }
    };

    Dialog.prototype.adjustPosition = function adjustPosition() {
        var minMargin = this.props.minMargin;

        if (this.props.visible) {
            var content = this.refs.overlay ? this.refs.overlay.getContent() : '',
                dialogHeight = void 0;

            if (content) {
                var body = content.getBody();
                var node = this.refs.overlay.getContentNode();
                var top = _nextDom.style.get(node, 'top');
                var height = _nextDom.style.get(node, 'height'),
                    clientHeight = window.innerHeight || document.documentElement.clientHeight;

                if (top <= minMargin) {
                    _nextDom.style.set(node, 'top', minMargin + 'px');
                    if (clientHeight <= height + minMargin) {
                        dialogHeight = clientHeight - minMargin * 2;
                        this.adjustSize(node, dialogHeight);
                    } else if (body.scrollHeight === body.clientHeight) {
                        this.revertSize(node, body);
                    }
                } else if (clientHeight <= height + top) {
                    dialogHeight = clientHeight - top;
                    this.adjustSize(node, dialogHeight);
                }
                this._lastDialogHeight = node.clientHeight;
            }
        }
    };

    Dialog.prototype.adjustSize = function adjustSize(node, dialogHeight) {
        var content = this.refs.overlay.getContent(),
            body = content.getBody(),
            header = content.getHeader(),
            footer = content.getFooter();

        var headerHeight = 0,
            footerHeight = 0;

        if (header) {
            headerHeight = _nextDom.style.get(header, 'height');
        }
        if (footer) {
            footerHeight = _nextDom.style.get(footer, 'height');
        }
        var dialogPadding = _nextDom.style.get(node, 'padding-top') + _nextDom.style.get(node, 'padding-bottom'),
            maxBodyHeight = dialogHeight - headerHeight - footerHeight - dialogPadding;

        if (maxBodyHeight < 0) {
            maxBodyHeight = 1;
        }
        _nextDom.style.set(body, {
            'max-height': maxBodyHeight + 'px',
            'overflow-y': 'auto'
        });
    };

    Dialog.prototype.revertSize = function revertSize(node, body) {

        _nextDom.style.set(node, 'height', 'auto');
        _nextDom.style.set(body, {
            'max-height': 'none'
        });
    };

    Dialog.prototype.mapClosableToConfig = function mapClosableToConfig(closable) {
        var res = {},
            map = ['esc', 'outSide', 'close', 'mask'];

        closable = parseComboOption(closable);
        map.forEach(function (o) {
            var value = closable === true ? true : closable[o] || false;
            var key = o.charAt(0).toUpperCase() + o.substr(1);
            if (o === 'esc' || o === 'mask') {
                res['canCloseBy' + key] = value;
            } else {
                res['canCloseBy' + key + 'Click'] = value;
            }
        });
        return res;
    };

    return Dialog;
}(_react2['default'].Component), _class.propTypes = {
    prefix: PropTypes.string,
    hasMask: PropTypes.bool,
    onClose: PropTypes.func,
    closable: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    minMargin: PropTypes.number
}, _class.defaultProps = {
    prefix: 'next-',
    hasMask: true,
    animation: {
        'in': 'fadeInDown',
        out: 'fadeOutUp'
    },
    onClose: noop,
    closable: 'esc,close',
    autoFocus: true,
    minMargin: 40
}, _class.contextTypes = {
    prefix: PropTypes.string
}, _temp);
Dialog.displayName = 'Dialog';
exports['default'] = Dialog;
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes,
    toUpperCase = function toUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
};

['header', 'footer', 'body'].forEach(function (cls) {
    var _class, _temp;

    exports[toUpperCase(cls)] = (_temp = _class = function (_Component) {
        _inherits(_class, _Component);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        _class.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                others = _objectWithoutProperties(_props, ['children']);

            var prefix = this.context.prefix || this.props.prefix;
            return _react2['default'].createElement(
                'div',
                _extends({}, others, { className: prefix + 'dialog-' + cls }),
                children
            );
        };

        return _class;
    }(_react.Component), _class.propTypes = {
        prefix: PropTypes.string,
        children: PropTypes.any
    }, _class.defaultProps = {
        prefix: 'next-'
    }, _class.contextTypes = {
        prefix: PropTypes.string
    }, _class.dialogMark = cls, _temp);
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESCAPE: 27,
    SPACE: 32,
    END: 35,
    HOME: 36,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(220);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(224);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);

/***/ }),
/* 80 */,
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);


/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || __WEBPACK_IMPORTED_MODULE_0__util__["f" /* isEmptyValue */](value, type || rule.type))) {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* format */](options.messages.required, rule.fullField));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (required);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(187);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),
/* 83 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(35);
var document = __webpack_require__(10).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(24)(function () {
  return Object.defineProperty(__webpack_require__(84)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(83);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(58);
var $export = __webpack_require__(56);
var redefine = __webpack_require__(91);
var hide = __webpack_require__(15);
var has = __webpack_require__(12);
var Iterators = __webpack_require__(57);
var $iterCreate = __webpack_require__(200);
var setToStringTag = __webpack_require__(60);
var getPrototypeOf = __webpack_require__(207);
var ITERATOR = __webpack_require__(18)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(33);
var dPs = __webpack_require__(204);
var enumBugKeys = __webpack_require__(55);
var IE_PROTO = __webpack_require__(61)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(84)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(198).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(90);
var hiddenKeys = __webpack_require__(55).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(17);
var arrayIndexOf = __webpack_require__(195)(false);
var IE_PROTO = __webpack_require__(61)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(54);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _nextUtil = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/** Button **/
var Button = (_temp = _class = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Button.prototype.onMouseUp = function onMouseUp(e) {
        _reactDom2['default'].findDOMNode(this).blur();

        if (this.props.onMouseUp) {
            this.props.onMouseUp(e);
        }
    };

    Button.prototype.getType = function getType() {
        var shape = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'normal';
        var type = arguments[1];

        var typeMap = {
            ghost: {
                primary: 'dark',
                secondary: 'dark',
                normal: 'light',
                dark: 'dark',
                light: 'light'
            },
            warning: {
                primary: 'primary',
                secondary: 'normal',
                normal: 'normal',
                dark: 'primary',
                light: 'normal'
            },
            normal: {
                primary: 'primary',
                secondary: 'secondary',
                normal: 'normal',
                dark: 'primary',
                light: 'normal'
            }
        };
        var shapeMap = typeMap[shape] || typeMap.normal;

        return shapeMap[type];
    };

    Button.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            className = _props.className,
            type = _props.type,
            size = _props.size,
            htmlType = _props.htmlType,
            loading = _props.loading,
            children = _props.children,
            shape = _props.shape,
            component = _props.component,
            others = _objectWithoutProperties(_props, ['className', 'type', 'size', 'htmlType', 'loading', 'children', 'shape', 'component']);

        var prefix = this.context.prefix || this.props.prefix;
        var pickProps = (0, _nextUtil.pickAttrs)(others);
        var realType = this.getType(shape, type);

        // 样式
        var btnCls = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'btn', true), _defineProperty(_classNames, prefix + 'btn-' + shape, shape), _defineProperty(_classNames, prefix + 'btn-' + realType, realType), _defineProperty(_classNames, prefix + 'btn-' + size, size), _defineProperty(_classNames, prefix + 'btn-loading', loading), _defineProperty(_classNames, className, className), _classNames));

        var count = _react.Children.count(children);
        var cloneChildren = _react.Children.map(children, function (child, index) {
            if (child && child.type === _nextIcon2['default']) {
                var _classNames2;

                var iconCls = (0, _classnames2['default'])((_classNames2 = {}, _defineProperty(_classNames2, prefix + 'icon-first', count > 1 && index === 0), _defineProperty(_classNames2, prefix + 'icon-last', count > 1 && index === count - 1), _defineProperty(_classNames2, prefix + 'icon-alone', count === 1), _defineProperty(_classNames2, child.props.className, !!child.props.className), _classNames2));

                var iconSize = {
                    large: 'small',
                    medium: 'xs',
                    small: 'xs'
                }[size];

                return _react2['default'].cloneElement(child, {
                    className: iconCls,
                    size: child.props.size || iconSize
                });
            }

            return child;
        });

        // 自定义属性
        var TagName = component;
        var finalAttrs = {
            type: htmlType,
            className: btnCls
        };

        if (TagName === 'a') {
            delete finalAttrs.type;

            // a 标签在禁用状态下无跳转
            if (pickProps.disabled && pickProps.href) {
                delete pickProps.href;
            }
        }

        // 设置特殊tag name没有浏览器默认禁用行为
        if (pickProps.disabled) {
            delete pickProps.onClick;
        }

        return _react2['default'].createElement(
            TagName,
            _extends({}, pickProps, finalAttrs, { onMouseUp: this.onMouseUp.bind(this) }),
            cloneChildren
        );
    };

    return Button;
}(_react.Component), _class.propTypes = {
    /**
     * 组件样式的品牌前缀
     */
    prefix: _react.PropTypes.string,
    /**
     * 按钮的类型
     */
    type: _react.PropTypes.oneOf(['primary', 'secondary', 'normal', 'dark', 'light']),
    /**
     * 按钮的尺寸
     */
    size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * 按钮的形状
     */
    shape: _react.PropTypes.oneOf(['ghost', 'text', 'warning']),
    /**
     * 设置 `button` 标签的原生 `type` 值
     */
    htmlType: _react.PropTypes.string,
    /**
     * 设置标签类型
     */
    component: _react.PropTypes.oneOf(['button', 'span', 'a', 'div']),
    /**
     * 设置按钮的载入状态
     */
    loading: _react.PropTypes.bool,
    /**
     * 点击按钮的回调
     * Function() => void
     */
    onClick: _react.PropTypes.func,
    /**
     * 自定义样式
     */
    className: _react.PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-',
    type: 'normal',
    size: 'medium',
    htmlType: 'button',
    component: 'button',
    loading: false,
    onClick: function onClick() {}
}, _class.contextTypes = {
    prefix: _react.PropTypes.string
}, _temp);
Button.displayName = 'Button';
exports['default'] = Button;
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _nextUtil = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/** Button.Group **/
var ButtonGroup = (_temp = _class = function (_Component) {
    _inherits(ButtonGroup, _Component);

    function ButtonGroup() {
        _classCallCheck(this, ButtonGroup);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ButtonGroup.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            className = _props.className,
            children = _props.children,
            size = _props.size,
            others = _objectWithoutProperties(_props, ['className', 'children', 'size']);

        var prefix = this.context.prefix || this.props.prefix;

        var groupCls = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'btn-group', true), _defineProperty(_classNames, className, className), _classNames));

        var cloneChildren = _react.Children.map(children, function (child) {
            if (child) {
                return _react2['default'].cloneElement(child, {
                    size: size
                });
            }
        });

        return _react2['default'].createElement(
            'div',
            _extends({}, (0, _nextUtil.pickAttrs)(others), { className: groupCls }),
            cloneChildren
        );
    };

    return ButtonGroup;
}(_react.Component), _class.propTypes = {
    prefix: _react.PropTypes.string,
    /**
     * 统一设置 Button 组件的按钮大小
     */
    size: _react.PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-',
    size: 'medium'
}, _class.contextTypes = {
    prefix: _react.PropTypes.string
}, _temp);
ButtonGroup.displayName = 'ButtonGroup';
exports['default'] = ButtonGroup;
module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nextOverlay = __webpack_require__(9);

var _nextOverlay2 = _interopRequireDefault(_nextOverlay);

var _func = __webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2.default.PropTypes,
    Children = _react2.default.Children,
    Popup = _nextOverlay2.default.Popup,
    noop = function noop() {};

var Dropdown = (_temp = _class = function (_React$Component) {
	_inherits(Dropdown, _React$Component);

	function Dropdown(props) {
		_classCallCheck(this, Dropdown);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.state = {
			visible: props.visible || props.defaultVisible || false
		};
		return _this;
	}

	Dropdown.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		if ('visible' in nextProps) {
			this.setState({ visible: nextProps.visible });
		}
	};

	Dropdown.prototype.render = function render() {
		var child = Children.only(this.props.children),
		    content = _react2.default.cloneElement(child, {
			onClick: (0, _func.makeChain)(this.onMenuClick.bind(this), child.props.onClick)
		});

		return _react2.default.createElement(
			Popup,
			_extends({}, this.props, {
				canCloseByOutSideClick: true,
				visible: this.state.visible,
				onVisibleChange: this.onVisibleChange.bind(this)
			}),
			content
		);
	};

	Dropdown.prototype.onMenuClick = function onMenuClick() {
		if (!('visible' in this.props)) {
			this.setState({
				visible: false
			});
		}
		this.props.onVisibleChange(false, 'fromContent');
	};

	Dropdown.prototype.onVisibleChange = function onVisibleChange(visible) {
		if (!('visible' in this.props)) {
			this.setState({ visible: visible });
		}
		this.props.onVisibleChange(visible);
	};

	return Dropdown;
}(_react2.default.Component), _class.propTypes = {
	trigger: PropTypes.any,
	onVisibleChange: PropTypes.func,
	align: PropTypes.string
}, _class.defaultProps = {
	prefix: 'next-',
	onVisibleChange: noop
}, _temp);
Dropdown.displayName = 'Dropdown';
exports.default = Dropdown;
module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
var ieVersion = exports.ieVersion = typeof document === 'undefined' ? false : document.documentMode;
/* eslint-enable */

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);

/***/ }),
/* 98 */
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var enter = ['pulse', 'shake', 'press', 'buttonClick', 'expandInDown', 'bounceIn', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp', 'zoomIn', 'zoomInQuick', 'zoomInPulse', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp'];
var leave = ['pulse', 'shake', 'press', 'buttonClick', 'expandOutUp', 'bounceOut', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp', 'zoomOut', 'zoomOutQuick', 'zoomOutPulse', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp'];

exports['default'] = {
    enter: enter,
    leave: leave
};
module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _checkbox = __webpack_require__(44);

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/** Checkbox.Group */
var CheckboxGroup = (_temp = _class = function (_Component) {
    _inherits(CheckboxGroup, _Component);

    function CheckboxGroup(props) {
        _classCallCheck(this, CheckboxGroup);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        var value = [];
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        if (!Array.isArray(value)) {
            if (value === null || value === undefined) {
                value = [];
            } else {
                value = [value];
            }
        }
        _this.state = {
            value: [].concat(_toConsumableArray(value)),
            disabled: props.disabled
        };

        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    CheckboxGroup.prototype.getChildContext = function getChildContext() {
        return {
            __group__: true,
            onChange: this.onChange,
            selectedValue: this.state.value,
            disabled: this.state.disabled
        };
    };

    CheckboxGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            var value = nextProps.value;

            if (!Array.isArray(value)) {
                if (value === null || value === undefined) {
                    value = [];
                } else {
                    value = [value];
                }
            }
            this.setState({
                value: value
            });
        }
        if ('disabled' in nextProps) {
            this.setState({
                disabled: nextProps.disabled
            });
        }
    };

    CheckboxGroup.prototype.onChange = function onChange(currentValue, e) {
        var value = this.state.value;

        var index = value.indexOf(currentValue);
        var valTemp = [].concat(_toConsumableArray(value));

        if (index === -1) {
            valTemp.push(currentValue);
        } else {
            valTemp.splice(index, 1);
        }

        if (!('value' in this.props)) {
            this.setState({ value: valTemp });
        }
        this.props.onChange(valTemp, e);
    };

    CheckboxGroup.prototype.render = function render() {
        var _this2 = this,
            _classnames;

        var _props = this.props,
            className = _props.className,
            style = _props.style;

        var disabled = this.state.disabled;
        var prefix = this.context.prefix || this.props.prefix;

        // 如果内嵌标签跟dataSource同时存在，以内嵌标签为主
        var children = void 0;
        if (this.props.children) {
            children = this.props.children;
        } else {
            children = this.props.dataSource.map(function (item, index) {
                var option = item;
                if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') {
                    option = {
                        label: item,
                        value: item,
                        disabled: disabled
                    };
                }
                var checked = _this2.state.value && _this2.state.value.indexOf(option.value) > -1;

                return _react2['default'].createElement(
                    'label',
                    { key: index },
                    _react2['default'].createElement(_checkbox2['default'], {
                        value: option.value,
                        checked: checked,
                        disabled: disabled || option.disabled
                    }),
                    _react2['default'].createElement(
                        'span',
                        { className: prefix + 'checkbox-label' },
                        option.label
                    )
                );
            });
        }

        var cls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefix + 'checkbox-group', true), _defineProperty(_classnames, className, !!className), _defineProperty(_classnames, 'disabled', disabled), _classnames));

        return _react2['default'].createElement(
            'span',
            { className: cls, style: style },
            children
        );
    };

    return CheckboxGroup;
}(_react.Component), _class.propTypes = {
    /**
     * 整体禁用
     */
    disabled: _react.PropTypes.bool,
    /**
     * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` 或者 `[{value: 'apple', label: '苹果',}, {value: 'pear', label: '梨'}, {value: 'orange', label: '橙子'}]`
     */
    dataSource: _react.PropTypes.arrayOf(_react.PropTypes.any),
    /**
     * 被选中的值列表
     */
    value: _react.PropTypes.array,
    /**
     * 默认被选中的值列表
     */
    defaultValue: _react.PropTypes.array,
    /**
     * 自定义类名
     */
    className: _react.PropTypes.string,
    children: _react.PropTypes.arrayOf(_react.PropTypes.element),
    /**
     * 选中状态被改变的事件
     */
    onChange: _react.PropTypes.func,
    prefix: _react.PropTypes.string,
    style: _react.PropTypes.object
}, _class.defaultProps = {
    dataSource: [],
    onChange: function onChange() {},
    prefix: 'next-'
}, _class.contextTypes = {
    prefix: _react.PropTypes.string
}, _class.childContextTypes = {
    onChange: _react.PropTypes.func,
    __group__: _react.PropTypes.bool,
    selectedValue: _react.PropTypes.array,
    disabled: _react.PropTypes.bool
}, _temp);
CheckboxGroup.displayName = 'CheckboxGroup';
exports['default'] = CheckboxGroup;
module.exports = exports['default'];

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function addClass(node, className) {
    if (node.classList) {
        node.classList.add(className);
    } else if (!hasClass(node, className)) {
        node.className = node.className + ' ' + className;
    }
}

function hasClass(node, className) {
    if (node.classList) {
        return node.classList.contains(className);
    } else {
        return node.className.indexOf(className) > -1;
    }
}

function removeClass(node, className) {
    if (node.classList) {
        node.classList.remove(className);
    } else if (hasClass(node, className)) {
        node.className = node.className.replace(className, '').replace(/\s+/g, ' ').trim();
    }
}

module.exports = {
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EVENT_PREFIX = 'next-';

function on(node, eventName, handler, useCapture) {
    if (node.addEventListener) {
        node.addEventListener(eventName, handler, useCapture);
    } else if (node.attachEvent) {
        var nextEvent = getNextEventName(eventName);
        if (Array.isArray(node[nextEvent])) {
            if (node[nextEvent].indexOf(handler) === -1) {
                node[nextEvent].push(handler);
            }
        } else {
            node[nextEvent] = [handler];
            node.attachEvent('on' + eventName, function () {
                node[nextEvent].forEach(function (handler) {
                    handler && handler.call(node, shimEvent(window.event, node));
                });
            });
        }
    }

    return {
        off: function off() {
            _off(node, eventName, handler, useCapture);
        }
    };
}

function _off(node, eventName, handler, useCapture) {
    if (node.removeEventListener) {
        node.removeEventListener(eventName, handler, useCapture);
    } else {
        var nextEvent = getNextEventName(eventName);
        if (Array.isArray(node[nextEvent])) {
            var index = node[nextEvent].indexOf(handler);
            if (index > -1) {
                node[nextEvent].splice(index, 1);
            }
        }
    }
}

function shimEvent(e, currentTarget) {
    if (!e.target) {
        e.target = e.srcElement;
        e.currentTarget = currentTarget;
        e.relatedTarge = e.type === 'mouseover' ? e.fromElement : e.toElement;
        e.stopPropagation = function () {
            e.cancelBubble = true;
        };
        e.preventDefault = function () {
            e.returnValue = false;
        };
    }

    return e;
}

function getNextEventName(eventName) {
    return '' + EVENT_PREFIX + eventName;
}

module.exports = {
    on: on,
    off: _off
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class, _temp;

var _css = __webpack_require__(45);

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VIEWPORT = 'viewport';

// IE8 not support pageXOffset
var getPageX = function getPageX() {
    return window.pageXOffset || document.documentElement.scrollLeft;
};
var getPageY = function getPageY() {
    return window.pageYOffset || document.documentElement.scrollTop;
};

var getElementRect = function getElementRect(elem) {
    var offsetTop = 0,
        offsetLeft = 0,
        offsetHeight = elem.offsetHeight,
        offsetWidth = elem.offsetWidth;

    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
        if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft;
        }
    } while ((elem = elem.offsetParent) !== null);

    return {
        top: offsetTop - (document.documentElement.scrollTop || document.body.scrollTop),
        left: offsetLeft - (document.documentElement.scrollLeft || document.body.scrollLeft),
        height: offsetHeight,
        width: offsetWidth
    };
};

var Position = (_temp = _class = function () {
    function Position(config) {
        _classCallCheck(this, Position);

        this.pinElement = config.pinElement;
        this.baseElement = config.baseElement;
        this.align = config.align || 'tl tl';
        this.offset = config.offset || [0, 0];
        this.needAdjust = config.needAdjust || false;
        this.isRtl = config.isRtl || false;
    }

    Position.prototype.setPosition = function setPosition() {
        var pinElement = this.pinElement;
        var baseElement = this.baseElement;
        var expectedAlign = this._getExpectedAlign();
        var isPinFixed = void 0,
            isBaseFixed = void 0,
            firstPositionResult = void 0;
        if (pinElement === VIEWPORT) {
            return;
        }
        if (_css2['default'].get(pinElement, 'position') !== 'fixed') {
            _css2['default'].set(pinElement, 'position', 'absolute');
            isPinFixed = false;
        } else {
            isPinFixed = true;
        }
        if (baseElement === VIEWPORT || _css2['default'].get(baseElement, 'position') !== 'fixed') {
            isBaseFixed = false;
        } else {
            isBaseFixed = true;
        }
        // 根据期望的定位
        for (var i = 0; i < expectedAlign.length; i++) {
            var align = expectedAlign[i];
            var pinElementPoints = this._normalizePosition(pinElement, align.split(' ')[0], isPinFixed);
            var baseElementPoints = this._normalizePosition(baseElement, align.split(' ')[1], isPinFixed);
            var pinElementParentOffset = this._getParentOffset(pinElement);
            var baseElementOffset = isPinFixed && isBaseFixed ? this._getLeftTop(baseElement) : baseElementPoints.offset();
            var top = baseElementOffset.top + baseElementPoints.y - pinElementParentOffset.top - pinElementPoints.y + this.offset[1];
            var left = baseElementOffset.left + baseElementPoints.x - pinElementParentOffset.left - pinElementPoints.x + this.offset[0];
            _css2['default'].set(pinElement, {
                left: left + 'px',
                top: top + 'px'
            });
            if (!firstPositionResult) {
                firstPositionResult = {
                    left: left,
                    top: top
                };
            }
            if (this._isInViewport(pinElement)) {
                return align;
            }
        }

        var inViewportLeft = this._makeElementInViewport(pinElement, firstPositionResult.left, 'Left', isPinFixed);
        var inViewportTop = this._makeElementInViewport(pinElement, firstPositionResult.top, 'Top', isPinFixed);

        _css2['default'].set(pinElement, {
            left: inViewportLeft + 'px',
            top: inViewportTop + 'px'
        });

        return expectedAlign[0];
    };

    Position.prototype._getParentOffset = function _getParentOffset(element) {
        var parent = element.offsetParent || document.documentElement;
        var offset = void 0;
        if (parent === document.body && _css2['default'].get(parent, 'position') === 'static') {
            offset = {
                top: 0,
                left: 0
            };
        } else {
            offset = this._getElementOffset(parent);
        }

        offset.top += parseFloat(_css2['default'].get(parent, 'border-top-width'), 10);
        offset.left += parseFloat(_css2['default'].get(parent, 'border-left-width'), 10);

        return offset;
    };

    Position.prototype._makeElementInViewport = function _makeElementInViewport(pinElement, number, type, isPinFixed) {
        var result = number,
            docElement = document.documentElement,
            offsetParent = pinElement.offsetParent || document.documentElement;

        if (result < 0) {
            if (isPinFixed) {
                result = 0;
            } else if (offsetParent === document.body && _css2['default'].get(offsetParent, 'position') === 'static') {
                //Only when div's offsetParent is document.body, we set new position result.
                result = Math.max(docElement['scroll' + type], document.body['scroll' + type]);
            }
        }
        return result;
    };

    Position.prototype._normalizePosition = function _normalizePosition(element, align, isPinFixed) {
        var points = this._normalizeElement(element, isPinFixed);
        this._normalizeXY(points, align);
        return points;
    };

    Position.prototype._normalizeXY = function _normalizeXY(points, align) {
        var x = align.split('')[1];
        var y = align.split('')[0];
        points.x = this._xyConverter(x, points, 'width');
        points.y = this._xyConverter(y, points, 'height');
        return points;
    };

    Position.prototype._xyConverter = function _xyConverter(align, points, type) {
        var res = align.replace(/t|l/gi, '0%').replace(/c/gi, '50%').replace(/b|r/gi, '100%').replace(/(\d+)%/gi, function (m, d) {
            return points.size()[type] * (d / 100);
        });
        return parseFloat(res, 10) || 0;
    };

    Position.prototype._getLeftTop = function _getLeftTop(element) {
        return {
            left: parseFloat(_css2['default'].get(element, 'left')) || 0,
            top: parseFloat(_css2['default'].get(element, 'top')) || 0
        };
    };

    Position.prototype._normalizeElement = function _normalizeElement(element, isPinFixed) {
        var _this = this;

        var result = {
            element: element,
            x: 0,
            y: 0
        },
            isViewport = element === VIEWPORT,
            docElement = document.documentElement;

        result.offset = function () {
            if (isPinFixed) {
                return {
                    left: 0,
                    top: 0
                };
            } else if (isViewport) {
                return {
                    left: getPageX(),
                    top: getPageY()
                };
            } else {
                return _this._getElementOffset(element);
            }
        };

        result.size = function () {
            if (isViewport) {
                return {
                    width: docElement.clientWidth,
                    height: docElement.clientHeight
                };
            } else {
                return {
                    width: element.offsetWidth,
                    height: element.offsetHeight
                };
            }
        };
        return result;
    };

    Position.prototype._getElementOffset = function _getElementOffset(element) {
        var rect = element.getBoundingClientRect();
        var docElement = document.documentElement;
        var body = document.body;
        var docClientLeft = docElement.clientLeft || body.clientLeft || 0;
        var docClientTop = docElement.clientTop || body.clientTop || 0;

        return {
            left: rect.left + (getPageX() - docClientLeft),
            top: rect.top + (getPageY() - docClientTop)
        };
    };
    // According to the location of the overflow to calculate the desired positioning


    Position.prototype._getExpectedAlign = function _getExpectedAlign() {
        var align = this.isRtl ? this._replaceAlignDir(this.align, /l|r/g, { l: 'r', r: 'l' }) : this.align;
        var expectedAlign = [align];

        if (this.needAdjust) {
            if (/t|b/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /t|b/g, { t: 'b', b: 't' }));
            }
            if (/l|r/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /l|r/g, { l: 'r', r: 'l' }));
            }
            if (/c/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, { c: 'l' }));
                expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, { c: 'r' }));
            }
            expectedAlign.push(this._replaceAlignDir(align, /l|r|t|b/g, { l: 'r', r: 'l', t: 'b', b: 't' }));
        }
        return expectedAlign;
    };
    // Transform align order.


    Position.prototype._replaceAlignDir = function _replaceAlignDir(align, regExp, map) {
        return align.replace(regExp, function (res) {
            return map[res];
        });
    };
    // Detecting element is in the window， we want to adjust position later.


    Position.prototype._isInViewport = function _isInViewport(element) {
        var viewportSize = {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
        //Avoid animate problem that use offsetWidth instead of getBoundingClientRect.
        var elementRect = getElementRect(element);
        return elementRect.left >= 0 && elementRect.left + element.offsetWidth <= viewportSize.width && elementRect.top >= 0 && elementRect.top + element.offsetHeight <= viewportSize.height;
    };

    return Position;
}(), _class.VIEWPORT = VIEWPORT, _temp);


Position.place = function (pinElement, baseElement, align, offset, needAdjust, isRtl) {
    return new Position({
        pinElement: pinElement,
        baseElement: baseElement,
        align: align,
        offset: offset,
        needAdjust: needAdjust,
        isRtl: isRtl
    }).setPosition();
};

exports['default'] = Position;
module.exports = exports['default'];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = __webpack_require__(227);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(225);

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    Row: _row2['default'],
    Col: _col2['default']
};
module.exports = exports['default'];

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Icon = (_temp = _class = function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Icon.prototype.render = function render() {
        var _cx;

        var prefix = this.context.prefix || this.props.prefix;
        // eslint-disable-next-line

        var _props = this.props,
            propsPrefix = _props.prefix,
            type = _props.type,
            size = _props.size,
            className = _props.className,
            other = _objectWithoutProperties(_props, ['prefix', 'type', 'size', 'className']);

        var sizeCls = {
            xxs: 'xxs',
            xs: 'xs',
            small: 'small',
            medium: 'medium',
            large: 'large',
            xl: 'xl',
            xxl: 'xxl',
            xxxl: 'xxxl'
        }[size];

        var classes = (0, _classnames2['default'])((_cx = {}, _defineProperty(_cx, prefix + 'icon', true), _defineProperty(_cx, prefix + 'icon-' + type, !!type), _defineProperty(_cx, prefix + 'icon-' + sizeCls, !!size), _defineProperty(_cx, className, !!className), _cx));
        return _react2['default'].createElement('i', _extends({}, other, { className: classes }));
    };

    return Icon;
}(_react.Component), _class.contextTypes = {
    prefix: _react.PropTypes.string
}, _class.propTypes = {
    prefix: _react.PropTypes.string,
    type: _react.PropTypes.string,
    size: _react.PropTypes.oneOf(['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl']),
    className: _react.PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-',
    size: 'medium'
}, _temp);
Icon.displayName = 'Icon';
exports['default'] = Icon;
module.exports = exports['default'];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nextCheckbox = __webpack_require__(53);

var _nextCheckbox2 = _interopRequireDefault(_nextCheckbox);

var _menuItem = __webpack_require__(11);

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes;
var noop = function noop() {};

/** Menu.CheckboxItem */
var CheckedMenuItem = (_temp = _class = function (_React$Component) {
    _inherits(CheckedMenuItem, _React$Component);

    function CheckedMenuItem(props) {
        _classCallCheck(this, CheckedMenuItem);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    CheckedMenuItem.prototype.render = function render() {
        var _props = this.props,
            disabled = _props.disabled,
            checked = _props.checked,
            index = _props.index,
            selectedKeys = _props.selectedKeys;

        if (typeof checked === 'undefined') {
            checked = selectedKeys.indexOf(index) > -1;
        }
        this.checked = checked;
        return _react2['default'].createElement(
            _menuItem2['default'],
            _extends({}, this.props, { hasSelectedIcon: false, onClick: this.onClick, role: 'menuitemcheckbox' }),
            _react2['default'].createElement(_nextCheckbox2['default'], { checked: checked, onChange: noop, disabled: disabled, tabIndex: '-1' }),
            this.props.children
        );
    };

    CheckedMenuItem.prototype.onClick = function onClick(e) {
        if (!this.props.disabled) {
            this.props.onChange(!this.checked, e);
        }
    };

    return CheckedMenuItem;
}(_react2['default'].Component), _class._menuItem = true, _class.propTypes = _extends({}, _menuItem2['default'].propTypes, {
    /**
    * 默认是否选中当前菜单项
    */
    checked: PropTypes.bool,
    /**
    * 选择被改变的时候触发的事件
     * @param {Boolean} checked 是否选中
    */
    onChange: PropTypes.func
}), _class.defaultProps = _extends({}, _menuItem2['default'].defaultProps, {
    onChange: noop,
    __checkboxItem: true
}), _temp);
CheckedMenuItem.displayName = 'CheckedMenuItem';
exports['default'] = CheckedMenuItem;
module.exports = exports['default'];

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes;

var MenuDivider = (_temp = _class = function (_React$Component) {
    _inherits(MenuDivider, _React$Component);

    function MenuDivider() {
        _classCallCheck(this, MenuDivider);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    MenuDivider.prototype.render = function render() {
        var prefix = this.context.prefix || this.props.prefix;
        var className = prefix + 'menu-divider';

        return _react2['default'].createElement('li', { className: className });
    };

    return MenuDivider;
}(_react2['default'].Component), _class._menuItem = true, _class.propTypes = {
    prefix: PropTypes.string
}, _class.defaultProps = {
    disabled: true,
    prefix: 'next-'
}, _temp);
MenuDivider.displayName = 'MenuDivider';
exports['default'] = MenuDivider;
module.exports = exports['default'];

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _nextUtil = __webpack_require__(2);

var _container = __webpack_require__(8);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/** Menu.Group */
var MenuGroup = (_temp = _class = function (_Container) {
    _inherits(MenuGroup, _Container);

    function MenuGroup() {
        _classCallCheck(this, MenuGroup);

        return _possibleConstructorReturn(this, _Container.apply(this, arguments));
    }

    MenuGroup.prototype.render = function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            className = _props.className,
            label = _props.label,
            children = _props.children,
            focusedKey = _props.focusedKey,
            selectedKeys = _props.selectedKeys,
            openKeys = _props.openKeys,
            direction = _props.direction,
            others = _objectWithoutProperties(_props, ['className', 'label', 'children', 'focusedKey', 'selectedKeys', 'openKeys', 'direction']),
            prefix = this.getPrefix();

        var cls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefix + 'menu-group', true), _defineProperty(_classnames, className, className), _classnames));

        children = _react2['default'].Children.map(children, function (child, index) {
            if (child) {
                var key = child.props.index || child.key;
                if (typeof key === 'undefined' || key === null) {
                    key = index.toString();
                }
                return _react2['default'].cloneElement(child, {
                    ref: key,
                    index: key,
                    parent: _this2,
                    animation: child.props.animation ? child.props.animation : _this2.props.animation,
                    indentSize: _this2.props.indentSize + 20,
                    selectedKeys: selectedKeys,
                    focusedKey: focusedKey,
                    openKeys: openKeys,
                    direction: direction
                });
            }
        });

        others = (0, _nextUtil.pickAttrs)(others);

        return _react2['default'].createElement(
            'li',
            { className: cls },
            _react2['default'].createElement(
                'div',
                { className: prefix + 'menu-group-title' },
                label
            ),
            _react2['default'].createElement(
                'ul',
                others,
                children
            )
        );
    };

    return MenuGroup;
}(_container2['default']), _class.propTypes = {
    prefix: _react.PropTypes.string,
    /**
     * 分组的标签
     */
    label: _react.PropTypes.any
}, _class.defaultProps = {
    label: 'menu-group',
    prefix: 'next-'
}, _temp);
exports['default'] = MenuGroup;
module.exports = exports['default'];

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nextUtil = __webpack_require__(2);

var _nextDom = __webpack_require__(6);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _container = __webpack_require__(8);

var _container2 = _interopRequireDefault(_container);

var _subMenu = __webpack_require__(47);

var _subMenu2 = _interopRequireDefault(_subMenu);

var _menuItem = __webpack_require__(11);

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Component = _container2['default'];
var PropTypes = _react2['default'].PropTypes,
    Children = _react2['default'].Children,
    noop = function noop() {},
    makeChain = _nextUtil.func.makeChain,
    getOffset = _nextDom.style.getOffset;

var KEY_CODE_MAPS = {};

for (var key in _nextUtil.keyCode) {
    var lowerCaseKey = key.toLowerCase().replace('_arrow', '');
    KEY_CODE_MAPS[_nextUtil.keyCode[key]] = lowerCaseKey.charAt(0).toUpperCase() + lowerCaseKey.substr(1);
}
/** Menu */
var Menu = (_temp = _class = function (_Component) {
    _inherits(Menu, _Component);

    function Menu(props, context) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.children = [];
        _this.state = {
            selectedKeys: _this.normalizeKeys(props.selectedKeys || props.defaultSelectedKeys),
            openKeys: _this.normalizeKeys(props.openKeys || props.defaultOpenKeys),
            focusedKey: props.focusedKey
        };
        ['onMouseLeave', 'onItemClick', 'onSelect', 'onFocus', 'onOpen', 'onKeyNavNodeKeyDown', 'onKeyNavNodeFocus'].forEach(function (method) {
            _this[method] = _this[method].bind(_this);
        });
        return _this;
    }

    Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('selectedKeys' in nextProps) {
            this.setState({
                selectedKeys: this.normalizeKeys(nextProps.selectedKeys)
            });
        }
        if ('openKeys' in nextProps) {
            this.setState({
                openKeys: this.normalizeKeys(nextProps.openKeys)
            });
        }
        if ('focusedKey' in nextProps) {
            this.setState({
                focusedKey: nextProps.focusedKey
            });
        }
    };

    Menu.prototype.normalizeKeys = function normalizeKeys(keys) {
        if (!Array.isArray(keys)) {
            if (keys != null) {
                keys = [keys];
            } else {
                keys = [];
            }
        } else {
            keys = [].concat(_toConsumableArray(keys));
        }
        return keys;
    };

    Menu.prototype.render = function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            className = _props.className,
            hasIcon = _props.hasIcon,
            children = _props.children,
            header = _props.header,
            footer = _props.footer,
            indentSize = _props.indentSize,
            multipleCol = _props.multipleCol,
            direction = _props.direction,
            others = _objectWithoutProperties(_props, ['className', 'hasIcon', 'children', 'header', 'footer', 'indentSize', 'multipleCol', 'direction']),
            _state = this.state,
            selectedKeys = _state.selectedKeys,
            openKeys = _state.openKeys,
            focusedKey = _state.focusedKey,
            prefix = this.getPrefix(),
            cls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefix + 'menu', true), _defineProperty(_classnames, 'multiple-col', multipleCol), _defineProperty(_classnames, prefix + 'menu-has-icon', hasIcon), _defineProperty(_classnames, direction, direction), _defineProperty(_classnames, className, className), _classnames)),
            hasSubMenu = (Children.toArray(children).some(function (child) {
            var type = child.type;
            return type._subMenu;
        }) || this.props.hasSubMenu) && direction !== 'hoz';

        this.childrenMeta = [];

        var contentChildren = Children.map(children, function (child, index) {
            if (child) {
                var _key = child.props.index || child.key;
                if (typeof _key === 'undefined' || _key === null) {
                    _key = index.toString();
                }
                return _react2['default'].cloneElement(child, {
                    ref: _key,
                    index: _key,
                    parent: _this2,
                    animation: _this2.props.animation,
                    indentSize: hasSubMenu && indentSize ? indentSize : null,
                    hasIcon: hasIcon,
                    selectedKeys: selectedKeys,
                    focusedKey: focusedKey,
                    openKeys: openKeys,
                    direction: direction
                });
            }
        });
        others = (0, _nextUtil.pickAttrs)(others);
        var root = _react2['default'].createElement(
            'div',
            _extends({ tabIndex: 0
            }, others, {
                className: cls,
                onMouseLeave: this.onMouseLeave }),
            header ? _react2['default'].createElement(
                'div',
                { className: prefix + 'menu-header' },
                header
            ) : null,
            _react2['default'].createElement(
                'ul',
                { className: prefix + 'menu-content' },
                contentChildren
            ),
            footer ? _react2['default'].createElement(
                'div',
                { className: prefix + 'menu-footer' },
                footer
            ) : null
        );

        return this.getKeyNavNode(root);
    };

    Menu.prototype.onMouseLeave = function onMouseLeave(e) {
        this.setState({
            focusedKey: null
        });
        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    };

    Menu.prototype.onItemClick = function onItemClick(e, index, type, menuInc) {
        var selectedKeys = this.state.selectedKeys,
            selectMode = this.props.selectMode,
            keyIndex = void 0,
            stateSelectKeys = void 0;


        selectedKeys = [].concat(_toConsumableArray(selectedKeys));

        if (menuInc.props.__radioItem) {
            type = 'single';
        }

        if (menuInc.props.__checkboxItem) {
            type = 'multiple';
        }

        //使用Menu的selectMode
        if (typeof selectMode !== 'undefined') {
            type = selectMode;
        }
        if (type === 'multiple') {
            keyIndex = selectedKeys.indexOf(index);
            if (keyIndex === -1) {
                selectedKeys.push(index);
            } else {
                selectedKeys.splice(keyIndex, 1);
                this.props.onDeselect(index);
            }
            stateSelectKeys = selectedKeys;
        } else {
            selectedKeys = index;
            stateSelectKeys = [selectedKeys];
        }
        if (!('focusedKey' in this.props)) {
            this.setState({
                focusedKey: index
            });
        }
        this.props.onFocus(e, index);
        if (type !== 'click') {
            if (this.props.shallowSelect && menuInc.context.parentIndex) {
                stateSelectKeys = [menuInc.context.parentIndex[0]];
            }
            if (!('selectedKeys' in this.props)) {
                this.setState({
                    selectedKeys: stateSelectKeys
                });
            }
            this.props.onSelect(stateSelectKeys, menuInc, {
                keyPath: menuInc.context.parentIndex,
                label: menuInc.context.parentLabel
            });
        } else {
            this.props.onClick(selectedKeys, menuInc, {
                keyPath: menuInc.context.parentIndex,
                label: menuInc.context.parentLabel
            }, e);
        }
    };

    Menu.prototype.onSelect = function onSelect(selectedKeys) {
        var _props2;

        this.setState({
            selectedKeys: selectedKeys
        });

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        (_props2 = this.props).onSelect.apply(_props2, [selectedKeys].concat(args));
    };

    Menu.prototype.onFocus = function onFocus(index) {
        this.setState({
            focusedKey: index
        });
        this.props.onFocus(index);
    };

    Menu.prototype.onOpen = function onOpen(openKeys, visible) {
        var _this3 = this;

        var stateOpenKeys = this.state.openKeys,
            openMode = this.props.openMode;


        stateOpenKeys = [].concat(_toConsumableArray(stateOpenKeys));

        if (Array.isArray(openKeys)) {
            stateOpenKeys = [].concat(_toConsumableArray(openKeys));
        } else {
            if (openMode === 'single') {
                stateOpenKeys = stateOpenKeys.filter(function (key) {
                    // 首先找到跟当前key匹配到的subMenu
                    // 在寻找subMenu下面的子节点的key
                    // 如果当前key是子节点的父节点，则不需要隐藏
                    var subMenu = _this3.getChildrenIncByType(_subMenu2['default']).filter(function (child) {
                        return (child.props.index || child.key) == key;
                    })[0];
                    if (subMenu) {
                        var childKeys = subMenu.getChildrenIncByType(_subMenu2['default']).map(function (child) {
                            return child.props.index || child.key;
                        });
                        return childKeys.indexOf(openKeys) > -1;
                    } else {
                        return false;
                    }
                });
            }

            var index = stateOpenKeys.indexOf(openKeys);
            if (index === -1 && visible) {
                stateOpenKeys.push(openKeys);
            } else if (index !== -1 && !visible) {
                stateOpenKeys.splice(index, 1);
            }
            if (!('openKeys' in this.props)) {
                this.setState({
                    openKeys: stateOpenKeys
                });
            }
            this.props.onOpen(stateOpenKeys);
        }
    };

    Menu.prototype.componentDidMount = function componentDidMount() {
        _nextDom.events.on(window, 'blur', this.onKeyNavNodeBlur);
        this.focusChildAddTimeout();
    };

    Menu.prototype.focusChildAddTimeout = function focusChildAddTimeout() {
        var _this4 = this;

        // 让focusKey对应的focusNode获取焦点
        // 在Overlay中由于节点可能设置了autoFocus，所以要设置比Overlay的autoFocus的功能延时
        // 要长
        // 在didMount的时候获取焦点的功能应该放置到使用者去主动调用
        // 1.0的时候移除该功能，放置到Select或者Dropdown中手动调用
        setTimeout(function () {
            _this4._focusChild();
        }, 200);
    };

    Menu.prototype._focusChild = function _focusChild() {
        var child = this.getCurrentChild();
        if (child) {
            if (this.props.autoFocus) {
                var node = child.node;
                node && node.focus();
            } else {
                // Scroll dom to viewport.
                this.scrollTo(child.node);
            }
        }
    };

    Menu.prototype.componentWillUnmount = function componentWillUnmount() {
        _nextDom.events.off(window, 'blur', this.onKeyNavNodeBlur);
        if (this._keyNodeBlurTimeout) {
            clearTimeout(this._keyNodeBlurTimeout);
        }
    };

    Menu.prototype.getKeyNavNode = function getKeyNavNode(node) {
        return _react2['default'].cloneElement(node, {
            onKeyDown: makeChain(this.onKeyNavNodeKeyDown, node.props.onKeyDown),
            onFocus: makeChain(this.onKeyNavNodeFocus, node.props.onFocus)
        });
    };

    Menu.prototype.onKeyNavNodeKeyDown = function onKeyNavNodeKeyDown(e) {
        var key = KEY_CODE_MAPS[e.keyCode];
        var method = this['_on' + key + 'Key'];
        if (method) {
            method.call(this, e);
        } else {
            this._onKeyBoardSearch(e);
        }
        e.stopPropagation();
    };

    Menu.prototype.addChildMeta = function addChildMeta(meta) {
        if (this.childrenMeta.indexOf(meta) === -1) {
            this.childrenMeta.push(meta);
        }
    };

    Menu.prototype.removeChildMeta = function removeChildMeta(meta) {
        var index = this.childrenMeta.indexOf(meta);
        if (index > -1) {
            this.childrenMeta.splice(index, 1);
        }
    };

    Menu.prototype._onKeyBoardSearch = function _onKeyBoardSearch(e) {
        var key = String.fromCharCode(e.keyCode).toLowerCase(),
            children = this.getChildrenMeta(),
            currentChild = void 0;

        children.forEach(function (child) {
            if (typeof child.children === 'string' && child.children.charAt(0).toLowerCase() === key) {
                if (!currentChild) {
                    currentChild = child;
                }
            }
        });

        this.focusChild(currentChild);
    };

    Menu.prototype.onKeyNavNodeFocus = function onKeyNavNodeFocus(e) {
        if (this.state.focusedKey == null && this.props.autoFocusFirstItem) {
            this._onDownKey(e);
        }
    };

    Menu.prototype._onUpKey = function _onUpKey(e) {
        var child = void 0;
        if (this.state.focusedKey == null) {
            child = this._getLastChild();
        } else {
            child = this._getPrevChild();
        }
        this.focusChild(child);
        e.preventDefault();
    };

    Menu.prototype._onEnterKey = function _onEnterKey(e) {
        if (this.props.onKeyNavNodeEnter) {
            this.props.onKeyNavNodeEnter(e, this.getCurrentChild());
        }
    };

    Menu.prototype._onDownKey = function _onDownKey(e) {
        var child = void 0;
        if (this.state.focusedKey == null) {
            child = this._getFirstChild();
        } else {
            child = this._getNextChild();
        }
        this.focusChild(child);
        e.preventDefault();
    };

    Menu.prototype._onHomeKey = function _onHomeKey() {
        var child = this._getFirstChild();
        this.focusChild(child);
    };

    Menu.prototype._onEndKey = function _onEndKey() {
        var child = this._getLastChild();
        this.focusChild(child);
    };

    Menu.prototype.focusChild = function focusChild(child) {
        var _this5 = this;

        if (child) {
            this.setState({
                focusedKey: child.index
            }, function () {
                _this5._focusChild();
            });
        }
    };

    Menu.prototype.unFocusChild = function unFocusChild(child) {
        this.setState({
            focusedKey: null
        });
        if (child) {
            var node = child.node;
            node && node.blur();
        }
    };

    Menu.prototype.scrollTo = function scrollTo(node) {
        if (node) {
            var rootNode = _reactDom2['default'].findDOMNode(this),
                rootNodeOffsetTop = getOffset(rootNode).top,
                scrollTop = rootNode.scrollTop,
                nodeOffsetTop = getOffset(node).top,
                rootNodeHeight = rootNode.clientHeight;

            if (nodeOffsetTop + node.clientHeight > rootNodeHeight + rootNodeOffsetTop) {
                rootNode.scrollTop = scrollTop + (nodeOffsetTop + node.clientHeight) - (rootNodeHeight + rootNodeOffsetTop);
            } else if (nodeOffsetTop < rootNodeOffsetTop) {
                rootNode.scrollTop = node.offsetTop;
            }
        }
    };

    Menu.prototype.getChildrenMeta = function getChildrenMeta() {
        var result = [],
            children = this.childrenMeta;

        children.forEach(function (child) {
            if (!child.disabled) {
                result.push(child);
            }
        });
        return result;
    };

    Menu.prototype.getCurrentChild = function getCurrentChild() {
        var _this6 = this;

        var children = this.getChildrenMeta(),
            currentChild = void 0;

        children.forEach(function (child) {
            if (child.index === _this6.state.focusedKey) {
                currentChild = child;
            }
        });
        return currentChild;
    };

    Menu.prototype._getFirstChild = function _getFirstChild() {
        var children = this.getChildrenMeta();
        return children[0];
    };

    /**
     * 获取最后一个直系子级
     * @returns {*}
     * @private
     */


    Menu.prototype._getLastChild = function _getLastChild() {
        var children = this.getChildrenMeta();
        return children[children.length - 1];
    };

    Menu.prototype._getChildByStep = function _getChildByStep(step) {
        if (this.state.focusedKey != null) {
            var children = this.getChildrenMeta(),
                _key3 = this.state.focusedKey,
                index = void 0;

            children.forEach(function (child, i) {
                if (child.index === _key3) {
                    index = i;
                }
            });
            if (index == null) {
                return children[0];
            }
            if (step == 1 && index + 1 === children.length) {
                index = -1;
            }
            if (step == -1 && index - 1 < 0) {
                index = children.length;
            }
            return children[index + step];
        }
    };
    /**
     * 获取当前子级的下一个子级
     * @returns {*}
     * @private
     */


    Menu.prototype._getNextChild = function _getNextChild() {
        return this._getChildByStep(1);
    };

    /**
     * 获取当前子级的上一个子级
     * @returns {*}
     * @private
     */


    Menu.prototype._getPrevChild = function _getPrevChild() {
        return this._getChildByStep(-1);
    };

    return Menu;
}(Component), _class.Item = _menuItem2['default'], _class.SubMenu = _subMenu2['default'], _class._menu = true, _class.propTypes = {
    /**
    * 当前选中的菜单项, 设置此属性，组件的选中变为受控状态
    */
    selectedKeys: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
    /**
    * 初始化选中的菜单项，只在组件初次render的时候生效
    */
    defaultSelectedKeys: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
    /**
    * 菜单选择的模式，支持单选和多选
    */
    selectMode: PropTypes.oneOf(['single', 'multiple']),
    /**
    * 当前打开的菜单项，设置此属性，组件的打开变为受控状态
    */
    openKeys: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
    /**
    * 初始化打开的菜单项，只在组件初次render的时候生效
    */
    defaultOpenKeys: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
    /**
     * 子菜单同时打开模式，是多个还是一个
     */
    openMode: PropTypes.oneOf(['single', 'multiple']),
    /**
    * 如果此属性为true，表明只会选中第一级的菜单
    */
    shallowSelect: PropTypes.bool,
    className: PropTypes.string,
    prefix: PropTypes.string,
    /**
    * 选中/取消选中了任意MenuItem
     * @param {Array} selectedKeys 选中的菜单的key
     * @param {MenuItem} menuItem 当前点击的菜单项的实例
     * @param {Object} meta 选中菜单项的上下级关系
    */
    onSelect: PropTypes.func,
    /**
     * 取消选中的菜单项
     * @param {String} selectedKey 取消选中的菜单项的key
     */
    onDeselect: PropTypes.func,
    /**
    * 点击菜单项触发的事件
     * @param {Array} selectedKeys 点击的菜单项的key
     * @param {MenuItem} menuItem 当前点击的菜单项的实例
     * @param {Object} meta 选中菜单项的上下级关系
    */
    onClick: PropTypes.func,
    /**
    * 打开子菜单的时候触发的事件
     * @param {Array} openKeys 打开的子菜单的key
    */
    onOpen: PropTypes.func,
    /**
     * 是否带有菜单的图标
     */
    hasIcon: PropTypes.bool,
    /**
    * 级联菜单下面缩进的尺寸
    */
    indentSize: PropTypes.number,
    /**
    * 配置菜单的头部
    */
    header: PropTypes.any,
    /**
    * 配置菜单的底部
    */
    footer: PropTypes.any,
    /**
    * 是否启用多列模式
    */
    multipleCol: PropTypes.bool,
    /**
     * 是否让第一个菜单自动获取焦点
     */
    autoFocusFirstItem: PropTypes.bool,
    /**
     * 是否启用设置焦点功能
     */
    autoFocus: PropTypes.bool,
    focusedKey: PropTypes.node,
    /**
     * 菜单的方向
     */
    direction: PropTypes.oneOf(['ver', 'hoz'])
}, _class.defaultProps = {
    prefix: 'next-',
    onSelect: function onSelect() {},
    onDeselect: function onDeselect() {},
    onOpen: function onOpen() {},
    onClick: noop,
    onFocus: function onFocus() {},
    hasIcon: false,
    defaultSelectedKeys: [],
    defaultOpenKeys: [],
    indentSize: 20,
    openMode: 'multiple',
    multipleCol: false,
    autoFocusFirstItem: false,
    direction: 'ver',
    autoFocus: true
}, _class.contextTypes = {
    prefix: PropTypes.string
}, _temp);
Menu.displayName = 'Menu';
exports['default'] = Menu;
module.exports = exports['default'];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2; /* eslint-disable react/prop-types */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _nextOverlay = __webpack_require__(9);

var _nextUtil = __webpack_require__(2);

var _nextDom = __webpack_require__(6);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _menuItem = __webpack_require__(11);

var _menuItem2 = _interopRequireDefault(_menuItem);

var _container = __webpack_require__(8);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var makeChain = _nextUtil.func.makeChain;
var Component = _container2['default'];

var PopupMenuItem = (_temp2 = _class = function (_Component) {
    _inherits(PopupMenuItem, _Component);

    function PopupMenuItem() {
        var _temp, _this, _ret;

        _classCallCheck(this, PopupMenuItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onVisibleChange = function (visible, type) {
            var childrenIndexes = _this.getChildrenByType(PopupMenuItem).map(function (child) {
                return child.props.index || child.key;
            }),
                parentIndexes = _this.getParentByType(PopupMenuItem).map(function (parent) {
                return parent.props.index || parent.key;
            }),
                openKeys = _this.getRoot().state.openKeys,
                childVisible = childrenIndexes.some(function (index) {
                return openKeys.indexOf(index) > -1;
            });

            var indexes = [_this.props.index];
            // 如果是隐藏该弹出菜单
            // 且这个隐藏是因为鼠标移出了其弹出内容区域或者点击了document
            // 需要将其父菜单一并隐藏
            if (!visible && !_this._openByKeyBoard && ['fromContent', 'docClick'].indexOf(type) > -1) {
                indexes = indexes.concat(parentIndexes);
            }
            if (!(!visible && childVisible)) {
                indexes.forEach(function (index) {
                    _this.getRoot().onOpen(index, visible);
                });
                _this._openByKeyBoard = false;
            }
        }, _this.onKeyDown = function (e) {
            if (e.keyCode === _nextUtil.keyCode.RIGHT_ARROW) {
                _this.getRoot().onOpen(_this.props.index, true);
                _this._openByKeyBoard = true;
            }
        }, _this.syncWidth = function () {
            var autoWidth = _this.props.autoWidth;


            if (autoWidth) {
                var menuItemNode = _this.getMenuItemNode();
                var contentNode = _this.getContentNode();
                var menuItemWidth = menuItemNode.clientWidth;
                var contentNodeWidth = contentNode.clientWidth;
                if (menuItemWidth > contentNodeWidth) {
                    _nextDom.style.set(contentNode, 'width', menuItemWidth + 'px');
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    PopupMenuItem.prototype.getChildContext = function getChildContext() {

        var parentIndex = normalizeInfo(this.context, 'parentIndex', this.props.index),
            parentLabel = normalizeInfo(this.context, 'parentLabel', this.props.label || this.props.children);

        return {
            parentIndex: parentIndex,
            parentLabel: parentLabel
        };
    };

    PopupMenuItem.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            className = _props.className,
            label = _props.label,
            animation = _props.animation,
            children = _props.children,
            openKeys = _props.openKeys,
            selectedKeys = _props.selectedKeys,
            index = _props.index,
            focusedKey = _props.focusedKey,
            direction = _props.direction,
            hasSelectedIcon = _props.hasSelectedIcon,
            others = _objectWithoutProperties(_props, ['className', 'label', 'animation', 'children', 'openKeys', 'selectedKeys', 'index', 'focusedKey', 'direction', 'hasSelectedIcon']),
            prefix = this.getPrefix(),
            visible = 'visible' in this.props ? this.props.visible : openKeys.indexOf(index) > -1,
            cls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefix + 'menu-popup-item', true), _defineProperty(_classnames, 'opened', visible), _defineProperty(_classnames, className, className), _classnames)),
            child = _react2['default'].Children.only(children),
            hasPopup = child ? true : null,
            item = _react2['default'].createElement(
            _menuItem2['default'],
            { openKeys: openKeys,
                selectedKeys: selectedKeys,
                focusedKey: focusedKey,
                index: index,
                hasSelectedIcon: hasSelectedIcon,
                className: cls, 'aria-haspopup': hasPopup, parent: this,
                onKeyDown: this.onKeyDown, onBlur: this.onBlur },
            label,
            direction === 'hoz' ? _react2['default'].createElement(_nextIcon2['default'], { type: 'arrow-down', size: 'xs' }) : _react2['default'].createElement(_nextIcon2['default'], { type: 'arrow-right', size: 'xs' })
        ),
            cloneChild = _react2['default'].cloneElement(child, {
            onKeyDown: makeChain(this._onChildKeyDown.bind(this), child.props.onKeyDown),
            parent: this,
            openKeys: openKeys,
            selectedKeys: selectedKeys
        });

        var alignAndOffset = this.getAlignAndOffset();

        return _react2['default'].createElement(
            _nextOverlay.Popup,
            _extends({}, others, alignAndOffset, {
                trigger: item,
                visible: visible,
                animation: animation,
                onOpen: this.syncWidth,
                autoFocus: true,
                ref: 'popup',
                onVisibleChange: this.onVisibleChange }),
            cloneChild
        );
    };

    PopupMenuItem.prototype._onChildKeyDown = function _onChildKeyDown(e) {
        if (e.keyCode === _nextUtil.keyCode.LEFT_ARROW) {
            this.getRoot().onOpen(this.props.index, false);
        }
    };

    PopupMenuItem.prototype.getAlignAndOffset = function getAlignAndOffset() {
        var _props2 = this.props,
            align = _props2.align,
            offset = _props2.offset,
            direction = _props2.direction,
            result = {
            hoz: {
                align: 'tl bl',
                offset: [0, 0]
            },
            ver: {
                align: 'tl tr',
                offset: [2, 0]
            }
        };

        if (typeof align !== 'undefined') {
            result[direction].align = align;
        }
        if (typeof offset !== 'undefined') {
            result[direction].offset = offset;
        }
        return result[direction];
    };

    PopupMenuItem.prototype.getContentNode = function getContentNode() {
        return this.refs.popup.overlay.getContentNode();
    };

    PopupMenuItem.prototype.getMenuItemNode = function getMenuItemNode() {
        return (0, _reactDom.findDOMNode)(this.refs.popup.refs.trigger);
    };

    return PopupMenuItem;
}(Component), _class._menuItem = true, _class._popupMenuItem = true, _class.propTypes = {
    /**
    * 禁用当前菜单项, 被禁用不会触发事件
    */
    disabled: _react.PropTypes.bool,
    /**
    * 菜单项的标签
    */
    label: _react.PropTypes.any,
    /**
     * 是否自动让弹出层的宽度和菜单项保持一致，逻辑是如果弹出层的宽度比菜单项小的话和菜单项保持一致，如果宽度大于菜单项则不做处理
     */
    autoWidth: _react.PropTypes.bool
}, _class.defaultProps = {
    disabled: false,
    label: 'popup-item',
    autoWidth: false,
    prefix: 'next-'
}, _class.contextTypes = {
    parentIndex: _react.PropTypes.array,
    parentLabel: _react.PropTypes.array,
    prefix: _react.PropTypes.string
}, _class.childContextTypes = {
    parentIndex: _react.PropTypes.array,
    parentLabel: _react.PropTypes.array
}, _temp2);
PopupMenuItem.displayName = 'PopupMenuItem';
exports['default'] = PopupMenuItem;


function normalizeInfo(context, name, value) {
    var meta = void 0;
    if (context[name]) {
        meta = [].concat(_toConsumableArray(context[name]));
        meta.push(value);
    } else {
        meta = [value];
    }
    return meta;
}
module.exports = exports['default'];

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nextRadio = __webpack_require__(67);

var _nextRadio2 = _interopRequireDefault(_nextRadio);

var _menuItem = __webpack_require__(11);

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes;
var noop = function noop() {};

var RadioMenuItem = (_temp = _class = function (_React$Component) {
    _inherits(RadioMenuItem, _React$Component);

    function RadioMenuItem(props) {
        _classCallCheck(this, RadioMenuItem);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    RadioMenuItem.prototype.render = function render() {
        var _props = this.props,
            disabled = _props.disabled,
            checked = _props.checked,
            index = _props.index,
            selectedKeys = _props.selectedKeys;

        if (typeof checked === 'undefined') {
            checked = selectedKeys.indexOf(index) > -1;
        }
        return _react2['default'].createElement(
            _menuItem2['default'],
            _extends({}, this.props, { hasSelectedIcon: false, onClick: this.onClick, role: 'menuitemradiobutton' }),
            _react2['default'].createElement(_nextRadio2['default'], { checked: checked, onChange: noop, disabled: disabled, tabIndex: '-1' }),
            this.props.children
        );
    };

    RadioMenuItem.prototype.onClick = function onClick(e) {
        if (!this.props.disabled) {
            this.props.onChange(true, e);
        }
    };

    return RadioMenuItem;
}(_react2['default'].Component), _class._menuItem = true, _class.propTypes = _extends({}, _menuItem2['default'].propTypes, {
    /**
    * 默认是否选中当前菜单项
    */
    checked: PropTypes.bool,
    group: PropTypes.string,
    /**
    * 选择被改变的时候触发的事件
     * @param {Boolean} checked 是否选中
    */
    onChange: PropTypes.func
}), _class.defaultProps = _extends({}, _menuItem2['default'].defaultProps, {
    group: 'group',
    onChange: noop,
    __radioItem: true
}), _temp);
RadioMenuItem.displayName = 'RadioMenuItem';
exports['default'] = RadioMenuItem;
module.exports = exports['default'];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Manager = {
    allOverlays: [],

    addOverlay: function addOverlay(overlay) {
        this.removeOverlay(overlay);
        this.allOverlays.push(overlay);
    },
    isCurrentOverlay: function isCurrentOverlay(overlay) {
        return !!this.allOverlays.length && this.allOverlays[this.allOverlays.length - 1] === overlay;
    },
    removeOverlay: function removeOverlay(overlay) {
        var i = this.allOverlays.indexOf(overlay);
        if (i > -1) {
            this.allOverlays.splice(i, 1);
        }
    }
};

exports["default"] = Manager;
module.exports = exports["default"];

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nextUtil = __webpack_require__(2);

var _overlay = __webpack_require__(50);

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes,
    Children = _react2['default'].Children,
    noop = function noop() {},
    makeChain = _nextUtil.func.makeChain;

// <Popup trigger={}>
//  <content></content>
// </Popup>

// <PopupMenuItem trigger={}>
//   {menu}
// </PopupMenuItem>

/** Overlay.Popup (未列举部分参照Overlay) */
var Popup = (_temp = _class = function (_React$Component) {
    _inherits(Popup, _React$Component);

    function Popup(props) {
        _classCallCheck(this, Popup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            visible: props.visible || props.defaultVisible
        };

        ['_onTriggerClick', '_onTriggerFocus', '_onTriggerBlur', '_onContentMouseDown', '_onTriggerMouseEnter', '_onTriggerMouseLeave', '_onContentMouseEnter', '_onContentMouseLeave', '_onTriggerKeyDown'].forEach(function (method) {
            _this[method] = _this[method].bind(_this);
        });
        return _this;
    }

    Popup.prototype.handleVisibleChange = function handleVisibleChange(visible, type, e) {
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible
            });
        }

        this.props.onVisibleChange(visible, type, e);
    };

    Popup.prototype.render = function render() {
        return this.getTrigger();
    };

    Popup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    Popup.prototype.componentWillMount = function componentWillMount() {
        this.uniqueOverlayKey = getUniqueKey();
    };

    Popup.prototype.addNodeForSafeClick = function addNodeForSafeClick(node) {
        this.overlay.addNodeForSafeClick(node);
    };

    Popup.prototype.getContent = function getContent() {
        var content = Children.only(this.props.children),
            props = {};

        switch (this.props.triggerType) {
            case 'focus':
                props = {
                    onMouseDown: makeChain(this._onContentMouseDown, content.props.onMouseDown)
                };
                break;
            case 'click':
                props = {};
                break;
            case 'hover':
                props = {
                    onMouseEnter: makeChain(this._onContentMouseEnter, content.props.onMouseEnter),
                    onMouseLeave: makeChain(this._onContentMouseLeave, content.props.onMouseLeave)
                };

        }
        return _react2['default'].cloneElement(content, props);
    };

    Popup.prototype.getTrigger = function getTrigger() {
        var _props = this.props,
            trigger = _props.trigger,
            disabled = _props.disabled,
            props = {};


        if (!disabled) {
            switch (this.props.triggerType) {
                case 'click':
                    props = {
                        onClick: makeChain(this._onTriggerClick, trigger.props.onClick),
                        onKeyDown: makeChain(this._onTriggerKeyDown, trigger.props.onKeyDown),
                        ref: 'trigger'
                    };
                    break;
                case 'focus':
                    props = {
                        onFocus: makeChain(this._onTriggerFocus, trigger.props.onFocus),
                        onBlur: makeChain(this._onTriggerBlur, trigger.props.onBlur),
                        ref: 'trigger'
                    };
                    break;
                case 'hover':
                    props = {
                        onMouseEnter: makeChain(this._onTriggerMouseEnter, trigger.props.onMouseEnter),
                        onMouseLeave: makeChain(this._onTriggerMouseLeave, trigger.props.onMouseLeave),
                        onClick: makeChain(this.clearDocumentTimeout, trigger.props.onClick),
                        ref: 'trigger'
                    };
                    break;
                default:
                    props = {
                        ref: 'trigger'
                    };
            }
        }
        return _react2['default'].cloneElement(trigger, props);
    };

    Popup.prototype.componentDidMount = function componentDidMount() {
        this._renderOverlay();
        this.componentDidUpdate();
    };

    Popup.prototype.componentDidUpdate = function componentDidUpdate() {
        this._renderOverlay();
        this.addNodeForSafeClick(_reactDom2['default'].findDOMNode(this.refs.trigger));
    };

    Popup.prototype.componentWillUnmount = function componentWillUnmount() {
        var _this2 = this;

        ['_timer', '_hideTimer', '_showTimer'].forEach(function (time) {
            _this2[time] && clearTimeout(_this2[time]);
        });
        this._unRenderOverlay();
    };

    Popup.prototype._renderOverlay = function _renderOverlay() {
        var _this3 = this;

        if (!this.wrapper) {
            this.wrapper = document.createElement('div');
        }

        var _props2 = this.props,
            autoFocus = _props2.autoFocus,
            target = _props2.target,
            others = _objectWithoutProperties(_props2, ['autoFocus', 'target']);

        if (typeof target === 'undefined') {
            target = function target() {
                return _this3.refs.trigger;
            };
        }
        var overlay = _react2['default'].createElement(
            _overlay2['default'],
            _extends({}, others, {
                visible: this.state.visible,
                target: target,
                key: this.uniqueOverlayKey,
                autoFocus: autoFocus,
                onRequestClose: function onRequestClose(reason, e) {
                    return _this3.handleVisibleChange(false, reason, e);
                } }),
            this.getContent()
        );

        this.overlay = _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, overlay, this.wrapper);
    };

    Popup.prototype._unRenderOverlay = function _unRenderOverlay() {
        if (this.wrapper) {
            _reactDom2['default'].unmountComponentAtNode(this.wrapper);
            this.wrapper = null;
            this.overlay = null;
        }
    };

    Popup.prototype._onTriggerClick = function _onTriggerClick(event, other) {
        // Hack menu item problem
        // Will be remove at 2.x
        var e = event;
        if (other && other.stopPropagation) {
            e = other;
        }
        e.stopPropagation();
        var target = e.target;
        if (target.tagName.toLowerCase() === 'a') {
            e.preventDefault();
        }
        this.handleVisibleChange(!this.state.visible, 'fromTrigger', e);
    };

    Popup.prototype._onTriggerFocus = function _onTriggerFocus(e) {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }
        this.handleVisibleChange(true, 'fromTrigger', e);
        e.stopPropagation();
    };

    Popup.prototype._onTriggerBlur = function _onTriggerBlur(e) {
        var _this4 = this;

        if (this._timer) {
            clearTimeout(this._timer);
        }
        this._timer = setTimeout(function () {
            if (!_this4._isForwardContent) {
                _this4.handleVisibleChange(false, 'fromTrigger', e);
            }
            _this4._isForwardContent = false;
        }, this.props.delay);
    };

    Popup.prototype._onContentMouseDown = function _onContentMouseDown() {
        this._isForwardContent = true;
    };

    Popup.prototype._onTriggerMouseEnter = function _onTriggerMouseEnter(e) {
        var _this5 = this;

        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
        }
        this._showTimer = setTimeout(function () {
            _this5.handleVisibleChange(true, 'fromTrigger', e);
        }, this.props.delay);
    };

    Popup.prototype._onTriggerMouseLeave = function _onTriggerMouseLeave(e, type) {
        var _this6 = this;

        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (this.state.visible) {
            this._hideTimer = setTimeout(function () {
                _this6.handleVisibleChange(false, type || 'fromTrigger', e);
            }, this.props.delay);
        }
    };

    Popup.prototype._onTriggerKeyDown = function _onTriggerKeyDown(e) {
        // space
        // enter
        if (e.keyCode === 32 || e.keyCode === 13) {
            this._onTriggerClick(e);
        }
    };

    Popup.prototype._onContentMouseEnter = function _onContentMouseEnter() {
        clearTimeout(this._hideTimer);
    };

    Popup.prototype._onContentMouseLeave = function _onContentMouseLeave(e) {
        this._onTriggerMouseLeave(e, 'fromContent');
    };

    return Popup;
}(_react2['default'].Component), _class.propTypes = {
    align: PropTypes.string,
    offset: PropTypes.array,
    /**
     * 触发弹层显示或者隐藏的元素
     */
    trigger: PropTypes.any,
    /**
     * 触发弹层显示的类型
     */
    triggerType: PropTypes.node,
    /**
     * 弹层当前显示的状态
     */
    visible: PropTypes.bool,
    /**
     * 弹层默认显示的状态
     */
    defaultVisible: PropTypes.bool,
    /**
     * 设置此属性，弹层无法打开
     */
    disabled: PropTypes.bool,
    /**
     * 弹层在触发以后的延时显示
     */
    delay: PropTypes.number,
    canCloseByOutSideClick: PropTypes.bool,
    /**
     * 弹层在显示和隐藏触发的事件
     * @param {Boolean} visible 弹层是否隐藏和显示
     * @param {String} type 触发弹层显示和隐藏的来源
     * @param {Event} e DOM事件
     */
    onVisibleChange: PropTypes.func,
    children: PropTypes.any,
    autoFocus: PropTypes.bool,
    animation: PropTypes.object,
    target: PropTypes.any
}, _class.defaultProps = {
    triggerType: 'hover',
    trigger: _react2['default'].createElement('div', null),
    align: 'tl bl',
    offset: [0, 0],
    disabled: false,
    delay: 200,
    canCloseByOutSideClick: true,
    onVisibleChange: noop,
    animation: {
        'in': 'expandInDown',
        out: 'expandOutUp'
    }
}, _temp);
Popup.displayName = 'Popup';
exports['default'] = Popup;


var uuid = 0;

function getUniqueKey() {
    return 'overlay-' + uuid++;
}
module.exports = exports['default'];

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _radio = __webpack_require__(52);

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var RadioGroup = (_temp = _class = function (_Component) {
    _inherits(RadioGroup, _Component);

    function RadioGroup(props) {
        _classCallCheck(this, RadioGroup);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        var value = '';
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        _this.state = {
            value: value,
            disabled: props.disabled //TODO:disabled 没有必要放在state里，后面要改掉
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    RadioGroup.prototype.getChildContext = function getChildContext() {
        return {
            __group__: true,
            isButton: this.props.shape === 'button',
            onChange: this.onChange,
            selectedValue: this.state.value,
            disabled: this.state.disabled
        };
    };

    RadioGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var value = nextProps.value,
            disabled = nextProps.disabled;


        if ('value' in nextProps && 'disabled' in nextProps) {
            if (value === undefined) {
                value = '';
            }
            this.setState({
                value: value,
                disabled: disabled
            });
        } else if ('value' in nextProps) {
            if (value === undefined) {
                value = '';
            }
            this.setState({
                value: value
            });
        } else if ('disabled' in nextProps) {
            this.setState({
                disabled: disabled
            });
        }
    };

    RadioGroup.prototype.onChange = function onChange(currentValue, e) {

        if (!('value' in this.props)) {
            this.setState({ value: currentValue });
        }
        this.props.onChange(currentValue, e);
    };

    RadioGroup.prototype.render = function render() {
        var _this2 = this,
            _classnames;

        var _props = this.props,
            className = _props.className,
            shape = _props.shape,
            size = _props.size,
            id = _props.id,
            style = _props.style;

        var disabled = this.state.disabled;
        var prefix = this.context.prefix || this.props.prefix;

        var children = void 0;
        if (this.props.children) {
            children = this.props.children;
        } else {
            children = this.props.dataSource.map(function (item, index) {
                var option = item;
                if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') {
                    option = {
                        label: item,
                        value: item,
                        disabled: disabled
                    };
                }
                var checked = _this2.state.value === option.value;
                return _react2['default'].createElement(
                    _radio2['default'],
                    {
                        key: index,
                        value: option.value,
                        checked: checked,
                        disabled: disabled || option.disabled
                    },
                    option.label
                );
            });
        }

        var cls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefix + 'radio-group', true), _defineProperty(_classnames, prefix + 'radio-button', shape === 'button'), _defineProperty(_classnames, prefix + 'radio-button-' + size, shape === 'button'), _defineProperty(_classnames, className, !!className), _defineProperty(_classnames, 'disabled', disabled), _classnames));

        return _react2['default'].createElement(
            'div',
            { id: id, className: cls, style: style },
            children
        );
    };

    return RadioGroup;
}(_react.Component), _class.propTypes = {
    shape: _react.PropTypes.string,
    size: _react.PropTypes.string,
    dataSource: _react.PropTypes.arrayOf(_react.PropTypes.any),
    className: _react.PropTypes.string,
    id: _react.PropTypes.string,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.element), _react.PropTypes.element]),
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.bool]),
    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.bool]),
    onChange: _react.PropTypes.func,
    prefix: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    style: _react.PropTypes.object
}, _class.defaultProps = {
    dataSource: [],
    onChange: function onChange() {},
    prefix: 'next-'
}, _class.contextTypes = {
    prefix: _react.PropTypes.string
}, _class.childContextTypes = {
    onChange: _react.PropTypes.func,
    __group__: _react.PropTypes.bool,
    isButton: _react.PropTypes.bool,
    selectedValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.bool]),
    disabled: _react.PropTypes.bool
}, _temp);
RadioGroup.displayName = 'RadioGroup';
exports['default'] = RadioGroup;
module.exports = exports['default'];

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.toArray = function (children) {
    var ret = [];
    _react2['default'].Children.forEach(children, function (child) {
        ret.push(child);
    });
    return ret;
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hidden(node) {
    return node.style.display == 'none';
}

function visible(node) {
    while (node) {
        if (node === document.body) {
            break;
        }
        if (hidden(node)) {
            return false;
        }
        node = node.parentNode;
    }
    return true;
}

function focusable(node) {
    var nodeName = node.nodeName.toLowerCase(),
        tabIndex = parseInt(node.getAttribute('tabindex'), 10),
        hasTabIndex = !isNaN(tabIndex) && tabIndex > -1;

    if (visible(node)) {
        if (['input', 'select', 'textarea', 'button'].indexOf(nodeName) > -1) {
            return !node.disabled;
        } else if (nodeName == 'a') {
            return node.getAttribute('href') || hasTabIndex;
        } else {
            return hasTabIndex;
        }
    }
}

function getFocusNodeList(node) {
    var res = [],
        nodeList = node.querySelectorAll('*'),
        length = nodeList.length;

    for (var i = 0; i < length; i++) {
        var item = nodeList[i];
        if (focusable(item)) {
            var method = item.getAttribute('data-auto-focus') ? 'unshift' : 'push';
            res[method](item);
        }
    }

    if (focusable(node)) {
        res.unshift(node);
    }
    return res;
}

var lastFocusElement = null;

function saveLastFocusNode() {
    lastFocusElement = document.activeElement;
}

function clearLastFocusNode() {
    lastFocusElement = null;
}

function backLastFocusNode() {
    if (lastFocusElement) {
        try {
            // 元素可能已经被移动了
            lastFocusElement.focus();
        } catch (e) {}
    }
}

function limitTabRange(node, e) {
    if (e.keyCode == 9) {
        var tabNodeList = getFocusNodeList(node),
            lastTabNode = tabNodeList[e.shiftKey ? 0 : tabNodeList.length - 1],
            leavingTab = lastTabNode === document.activeElement || node === document.activeElement;

        if (leavingTab) {
            var target = tabNodeList[e.shiftKey ? tabNodeList.length - 1 : 0];
            target.focus();
            e.preventDefault();
        }
    }
}

exports.saveLastFocusNode = saveLastFocusNode;
exports.clearLastFocusNode = clearLastFocusNode;
exports.backLastFocusNode = backLastFocusNode;
exports.getFocusNodeList = getFocusNodeList;
exports.limitTabRange = limitTabRange;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.deprecated = function (props, instead, component) {
    if (window && window.console && window.console.error) {
        window.console.error('Warning: ' + props + ' is deprecated at [ ' + component + ' ], use [ ' + instead + ' ] instead of it.');
    }
};

exports.warning = function (msg) {
    if (window && window.console && window.console.error) {
        window.console.error('Warning: ' + msg);
    }
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value);
    }
    if (_typeof('test'.__proto__) === 'object') {
        return value.__proto__;
    }
    return false;
}

var toString = Object.prototype.toString;
var hasOwn = Object.prototype.hasOwnProperty;

function isPlainObject(o) {
    if (!o || toString.call(o) !== '[object Object]' || o.nodeType || o === o.window) {
        return false;
    }

    var proto = getPrototype(o),
        funcToString = Function.prototype.toString,
        objectCtorString = funcToString.call(Object),
        constructor = void 0;

    if (proto === null) {
        return true;
    }
    var Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor === 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.isPlainObject = isPlainObject;

function equal(objA, objB, compare, compareContext, deep) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) {
        return !!ret;
    }
    if (objA === objB) {
        return true;
    }
    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    var len = keysA.length;

    if (len !== keysB.length) {
        return false;
    }
    compareContext = compareContext || null;
    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < len; i++) {
        var key = keysA[i];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];

        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (deep) {
            if (_ret === false || _ret === void 0 && equal(valueA, valueB, compare, compareContext, deep)) {
                return false;
            }
        } else {
            if (_ret === false || _ret === void 0 && valueA !== valueB) {
                return false;
            }
        }
    }
    return true;
}

exports.shallowEqual = function (objA, objB, compare, compareContext) {
    return equal(objA, objB, compare, compareContext, false);
};

exports.deepEqual = function (objA, objB, compare, compareContext) {
    return equal(objA, objB, compare, compareContext, true);
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attributes = 'accept acceptCharset accessKey action allowFullScreen allowTransparency\nalt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\ncharSet checked classID className colSpan cols content contentEditable contextMenu\ncontrols coords crossOrigin data dateTime default defer dir disabled download draggable\nencType form formAction formEncType formMethod formNoValidate formTarget frameBorder\nheaders height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\nis keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\nmediaGroup method min minLength multiple muted name noValidate nonce open\noptimum pattern placeholder poster preload radioGroup readOnly rel required\nreversed role rowSpan rows sandbox scope scoped scrolling seamless selected\nshape size sizes span spellCheck src srcDoc srcLang srcSet start step style\nsummary tabIndex target title type useMap value width wmode wrap'.replace(/\s+/g, ' ').replace(/\t|\n|\r/g, '').split(' ');

var eventsName = 'onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError'.replace(/\s+/g, ' ').replace(/\t|\n|\r/g, '').split(' ');

var attrsPrefix = ['data-', 'aria-'];

module.exports = function (props) {
    var attrs = {};
    for (var key in props) {
        if (attributes.indexOf(key) > -1 || eventsName.indexOf(key) > -1) {
            attrs[key] = props[key];
        } else if (attrsPrefix.map(function (prefix) {
            return new RegExp('^' + prefix);
        }).some(function (reg) {
            return key.replace(reg, '') != key;
        })) {
            attrs[key] = props[key];
        }
    }
    return attrs;
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Class, props) {
    var propTypes = Class.propTypes;
    var others = {};
    for (var key in props) {
        if (!(key in propTypes)) {
            others[key] = props[key];
        }
    }
    return others;
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    var scrollDiv = document.createElement('div'),
        scrollbarWidth,
        scrollbarHeight;

    scrollDiv.style.position = 'absolute';
    scrollDiv.style.width = '100px';
    scrollDiv.style.height = '100px';
    scrollDiv.style.overflow = 'scroll';
    scrollDiv.style.top = '-9999px';

    document.body.appendChild(scrollDiv);
    scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    //TODO: adapter old verison.
    return {
        width: scrollbarWidth,
        height: scrollbarWidth
    };
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canUseDOM = __webpack_require__(115);

var animationEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'animation': 'animationend'
};
var transitionEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'OTransition': 'oTransitionEnd',
    'transition': 'transitionend'
};

function supportEnd(names) {
    var el = document.createElement('div');
    for (var name in names) {
        if (names.hasOwnProperty(name) && el.style[name] !== undefined) {
            return {
                end: names[name]
            };
        }
    }
    return false;
}

function supportCss(names) {
    var el = document.createElement('div');
    var ret = false;

    for (var key in names) {
        names[key].forEach(function (item) {
            // It will be throw error when set unknown property under IE8.
            try {
                el.style[key] = item;
                ret = ret || el.style[key] == item;
            } catch (e) {}
        });
    }

    return ret;
}

var support = exports;

if (canUseDOM()) {
    support.animation = supportEnd(animationEndEventNames);
    support.transition = supportEnd(transitionEventNames);
    support.flex = supportCss({
        'display': ['flex', '-webkit-flex', '-moz-flex', '-ms-flexbox']
    });
} else {
    support.animation = false;
    support.transition = false;
    support.flex = false;
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



module.exports = __webpack_require__(125);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(98);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(25);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(127);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(126);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         true ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  true ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/**
 * Created by Administrator on 2017/3/10.
 */
//定义app 的memu 和路由
var App = {
    name: '精准省钱推广',
    home: '/app/home',
    chanels: [{
        key: '0',
        //icon:'atm',
        text: '客服帮助',
        url: 'http://amos.alicdn.com/msg.aw?v=2&uid=杭州亦迅科技有限公司&site=cnalichn&s=10&charset=UTF-8',
        visible: 'navigation-item-right',
        active: false,
        items: [{ key: '00', icon: '', text: '在线客服', url: 'http://amos.alicdn.com/msg.aw?v=2&uid=杭州亦迅科技有限公司&site=cnalichn&s=10&charset=UTF-8', visible: '', selected: false, target: 'blank' }, { key: '01', icon: '', text: '帮助文档', url: '/app/help/docs', visible: '', selected: false, target: 'blank' }]
    }, {
        key: '1',
        icon: '',
        text: '首页',
        url: '/app/home',
        visible: 'hidden',
        active: false,
        items: []
    }, {
        key: '2',
        icon: '',
        text: '打单发货',
        url: '/app/print',
        visible: 'hidden',
        active: true,
        items: []
    }, {
        key: '3',
        icon: '',
        text: '打印设置',
        url: '/app/print/setting',
        visible: 'hidden',
        active: false,
        items: []
    }, {
        key: '4',
        icon: '',
        text: '企业推广',
        url: '/app/yinliu/company',
        visible: '',
        active: false,
        items: []
    }, {
        key: '5',
        icon: '',
        text: '业务推广',
        url: '/app/yinliu/business',
        visible: '',
        active: false,
        items: []
    }, {
        key: '6',
        icon: '',
        text: '产品推广',
        url: '/app/yinliu/product',
        visible: '',
        active: false,
        items: []
    }, {
        key: '7',
        icon: '',
        text: '百站分享',
        url: '/app/yinliu/share',
        visible: '',
        active: false,
        items: []
    }, {
        key: '-1',
        icon: '',
        text: '服务市场',
        url: 'https://mfuwu.1688.com/offer/top/search.htm',
        target: 'blank',
        visible: 'navigation-item-right ',
        active: false,
        items: []
    }]
};


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qnui_lib_navigation__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qnui_lib_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qnui_lib_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qnui_lib_icon__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qnui_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qnui_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qnui_lib_menu__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qnui_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_qnui_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qnui_lib_breadcrumb__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qnui_lib_breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_qnui_lib_breadcrumb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBar; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Administrator on 2017/3/6.
 */







var propTypes = {
    hasBrand: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
    selectedChanelKey: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
    selectedItemKey: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

var defaultProps = {
    hasBrand: true,
    selectedChanelKey: '0',
    selectedItemKey: '0'
};
var name = __WEBPACK_IMPORTED_MODULE_6__app__["a" /* App */].name,
    chanels = __WEBPACK_IMPORTED_MODULE_6__app__["a" /* App */].chanels;

var NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: 'onMenuItemClick',
        value: function onMenuItemClick(item) {
            var url = item.url,
                target = item.target;

            if (target == 'blank') {
                window.open(url, '_blank');
            } else {
                window.location.href = url;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                selectedChanelKey = _props.selectedChanelKey,
                selectedItemKey = _props.selectedItemKey,
                hasBrand = _props.hasBrand;

            var brandItems = [{ key: 'home', text: name, url: __WEBPACK_IMPORTED_MODULE_6__app__["a" /* App */].home }];
            if (chanels[selectedChanelKey]) {
                chanels[selectedChanelKey].active = true;
                var chanel = chanels[selectedChanelKey];
                brandItems.push({ key: 'chanel', text: chanel.text, url: chanel.url });
            }
            if (chanels[selectedChanelKey].items[selectedItemKey]) {
                chanels[selectedChanelKey].items[selectedItemKey].selected = true;
                var item = chanels[selectedChanelKey].items[selectedItemKey];
                brandItems.push({ key: 'item', text: item.text, url: item.url });
            }

            var brandStyle = hasBrand ? { display: 'block' } : { display: 'none' };
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_qnui_lib_navigation___default.a,
                    {
                        type: 'filling',
                        activeDirection: 'bottom'
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        { className: 'navigation-logo-zone' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_qnui_lib_icon___default.a, { type: 'all' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            null,
                            name
                        )
                    ),
                    chanels.map(function (chanel) {
                        var tpl = '';
                        if (chanel.items.length > 0) {
                            tpl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2_qnui_lib_navigation__["Item"],
                                {
                                    key: chanel.key,
                                    text: chanel.text,
                                    icon: chanel.icon,
                                    selected: chanel.active,
                                    className: chanel.visible
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_4_qnui_lib_menu___default.a,
                                    null,
                                    chanel.items.map(function (item) {
                                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            __WEBPACK_IMPORTED_MODULE_4_qnui_lib_menu___default.a.Item,
                                            { className: item.visible, key: item.key, selected: item.selected, onClick: _this2.onMenuItemClick.bind(_this2, item) },
                                            item.text
                                        );
                                    })
                                )
                            );
                            return tpl;
                        }

                        tpl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_qnui_lib_navigation__["Item"], {
                            key: chanel.key,
                            text: chanel.text,
                            icon: chanel.icon,
                            selected: chanel.active,
                            link: chanel.url,
                            target: chanel.target,
                            className: chanel.visible
                        });

                        return tpl;
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_qnui_lib_breadcrumb___default.a,
                    { className: 'brandbar', style: brandStyle },
                    brandItems.map(function (data) {
                        var tpl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_5_qnui_lib_breadcrumb___default.a.Item,
                            { key: data.key, link: data.url },
                            data.text
                        );
                        return tpl;
                    })
                )
            );
        }
    }]);

    return NavBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;


/***/ }),
/* 130 */,
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = __webpack_require__(132);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _item = __webpack_require__(68);

var _item2 = _interopRequireDefault(_item);

var _number = __webpack_require__(134);

var _number2 = _interopRequireDefault(_number);

var _keyword = __webpack_require__(133);

var _keyword2 = _interopRequireDefault(_keyword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_breadcrumb2['default'].Item = _item2['default'];
_breadcrumb2['default'].Number = _number2['default'];
_breadcrumb2['default'].Keyword = _keyword2['default'];

exports['default'] = _breadcrumb2['default'];
module.exports = exports['default'];

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _item = __webpack_require__(68);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Breadcrumb = (_temp = _class = function (_React$Component) {
    _inherits(Breadcrumb, _React$Component);

    function Breadcrumb() {
        _classCallCheck(this, Breadcrumb);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Breadcrumb.prototype.render = function render() {
        var _classNames;

        var prefix = this.context.prefix || this.props.prefix;
        /* eslint-disable no-unused-vars */

        var _props = this.props,
            propsPrefix = _props.prefix,
            className = _props.className,
            children = _props.children,
            maxNode = _props.maxNode,
            separator = _props.separator,
            others = _objectWithoutProperties(_props, ['prefix', 'className', 'children', 'maxNode', 'separator']);
        /* eslint-enable */


        var items = void 0;
        var length = _react2['default'].Children.count(children);

        if (maxNode > 1 && length > maxNode) {
            var breakpointer = length - maxNode + 1;
            items = [];

            _react2['default'].Children.forEach(children, function (item, i) {
                if (i === 0) {
                    items.push(_react2['default'].cloneElement(item, {
                        separator: separator,
                        key: i
                    }));
                } else if (i === breakpointer) {
                    items.push(_react2['default'].cloneElement(item, {
                        separator: separator,
                        activated: i === length - 1,
                        className: prefix + 'breadcrumb-text-ellipsis',
                        key: i
                    }, '...'));
                } else if (i > breakpointer) {
                    items.push(_react2['default'].cloneElement(item, {
                        separator: separator,
                        activated: i === length - 1,
                        key: i
                    }));
                }
            });
        } else {
            items = _react2['default'].Children.map(children, function (item, i) {
                return _react2['default'].cloneElement(item, {
                    separator: separator,
                    activated: i === length - 1,
                    key: i
                });
            });
        }

        var classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'breadcrumb', true), _defineProperty(_classNames, className, className), _classNames));

        return _react2['default'].createElement(
            'div',
            _extends({ className: classes }, others),
            items
        );
    };

    return Breadcrumb;
}(_react2['default'].Component), _class.contextTypes = {
    prefix: _react2['default'].PropTypes.string
}, _class.propTypes = {
    prefix: _react2['default'].PropTypes.string,
    children: function children(props, propName) {
        _react2['default'].Children.forEach(props[propName], function (child) {
            if (child.type !== _item2['default']) {
                throw new Error('Breadcrumb\'s children must be Breadcrumb.Item!');
            }
        });
    },
    maxNode: _react2['default'].PropTypes.number,
    separator: _react2['default'].PropTypes.any,
    className: _react2['default'].PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-',
    maxNode: 0,
    separator: _react2['default'].createElement(_nextIcon2['default'], { size: 'xs', type: 'arrow-right' })
}, _temp);
Breadcrumb.displayName = 'Breadcrumb';
exports['default'] = Breadcrumb;
module.exports = exports['default'];

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Keyword = (_temp = _class = function (_React$Component) {
    _inherits(Keyword, _React$Component);

    function Keyword() {
        _classCallCheck(this, Keyword);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Keyword.prototype.render = function render() {
        var _classNames;

        var prefix = this.context.prefix || this.props.prefix;
        /* eslint-disable no-unused-vars */

        var _props = this.props,
            propsPrefix = _props.prefix,
            className = _props.className,
            children = _props.children,
            others = _objectWithoutProperties(_props, ['prefix', 'className', 'children']);
        /* eslint-enable */


        var classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'breadcrumb-text-keyword', true), _defineProperty(_classNames, className, className), _classNames));

        return _react2['default'].createElement(
            'span',
            _extends({ className: classes }, others),
            children
        );
    };

    return Keyword;
}(_react2['default'].Component), _class.contextTypes = {
    prefix: _react2['default'].PropTypes.string
}, _class.propTypes = {
    prefix: _react2['default'].PropTypes.string,
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.any
}, _class.defaultProps = {
    prefix: 'next-'
}, _temp);
Keyword.displayName = 'Keyword';
exports['default'] = Keyword;
module.exports = exports['default'];

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Number = (_temp = _class = function (_React$Component) {
    _inherits(Number, _React$Component);

    function Number() {
        _classCallCheck(this, Number);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Number.prototype.render = function render() {
        var _classNames;

        var prefix = this.context.prefix || this.props.prefix;
        /* eslint-disable no-unused-vars */

        var _props = this.props,
            propsPrefix = _props.prefix,
            className = _props.className,
            children = _props.children,
            others = _objectWithoutProperties(_props, ['prefix', 'className', 'children']);
        /* eslint-enable */


        var classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'breadcrumb-text-number', true), _defineProperty(_classNames, className, className), _classNames));

        return _react2['default'].createElement(
            'span',
            _extends({ className: classes }, others),
            children
        );
    };

    return Number;
}(_react2['default'].Component), _class.contextTypes = {
    prefix: _react2['default'].PropTypes.string
}, _class.propTypes = {
    prefix: _react2['default'].PropTypes.string,
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.any
}, _class.defaultProps = {
    prefix: 'next-'
}, _temp);
Number.displayName = 'Number';
exports['default'] = Number;
module.exports = exports['default'];

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Separator = (_temp = _class = function (_React$Component) {
    _inherits(Separator, _React$Component);

    function Separator() {
        _classCallCheck(this, Separator);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Separator.prototype.render = function render() {
        var _classNames;

        var prefix = this.context.prefix || this.props.prefix;
        /* eslint-disable no-unused-vars */

        var _props = this.props,
            propsPrefix = _props.prefix,
            className = _props.className,
            children = _props.children,
            others = _objectWithoutProperties(_props, ['prefix', 'className', 'children']);
        /* eslint-enable */


        var classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'breadcrumb-separator', true), _defineProperty(_classNames, className, className), _classNames));

        return _react2['default'].createElement(
            'div',
            _extends({ className: classes }, others),
            children
        );
    };

    return Separator;
}(_react2['default'].Component), _class.contextTypes = {
    prefix: _react2['default'].PropTypes.string
}, _class.propTypes = {
    prefix: _react2['default'].PropTypes.string,
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.any
}, _class.defaultProps = {
    prefix: 'next-'
}, _temp);
Separator.displayName = 'Separator';
exports['default'] = Separator;
module.exports = exports['default'];

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _nextUtil = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes,
    Children = _react2['default'].Children,
    noop = function noop() {},
    getPrivateDialogProperty = function getPrivateDialogProperty(name) {
    return '_dialog' + (name.charAt(0).toUpperCase() + name.substr(1)) + 'Id';
};
var uuid = 0;

var DialogInner = (_temp = _class = function (_React$Component) {
    _inherits(DialogInner, _React$Component);

    function DialogInner(props, context) {
        _classCallCheck(this, DialogInner);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        ['header', 'body', 'footer'].forEach(function (name) {
            _this[getPrivateDialogProperty(name)] = 'dialog-' + name + '-' + uuid++;
        });
        return _this;
    }

    DialogInner.prototype.render = function render() {
        var _classNames;

        /* eslint-disable no-unused-vars, react/prop-types */
        var _props = this.props,
            children = _props.children,
            className = _props.className,
            footerAlign = _props.footerAlign,
            closable = _props.closable,
            role = _props.role,
            others = _objectWithoutProperties(_props, ['children', 'className', 'footerAlign', 'closable', 'role']),
            prefix = this.context.prefix || this.props.prefix,
            content = this._getContent(),
            cls = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'dialog', true), _defineProperty(_classNames, footerAlign, footerAlign), _defineProperty(_classNames, className, className), _classNames)),
            closeContent = closable ? _react2['default'].createElement(
            'a',
            { href: 'javascript:;', className: prefix + 'dialog-close',
                onClick: this.onClose.bind(this) },
            _react2['default'].createElement(_nextIcon2['default'], { type: 'close', size: 'small' })
        ) : null;

        others = (0, _nextUtil.pickAttrs)(others);

        return _react2['default'].createElement(
            'div',
            _extends({}, others, {
                className: cls,
                role: role,
                'aria-labelledby': content.header ? content.header.props.id : '' }),
            content.header,
            content.body,
            content.footer,
            closeContent
        );
    };

    DialogInner.prototype._getContent = function _getContent() {
        var _this2 = this;

        var children = this.props.children,
            result = {};

        Children.forEach(children, function (child) {
            if (child && child.type.dialogMark) {
                var name = child.type.dialogMark.toLowerCase();
                result[name] = _react2['default'].cloneElement(child, {
                    ref: name,
                    id: _this2[getPrivateDialogProperty(name)]
                });
            }
        });
        return result;
    };

    DialogInner.prototype.getHeader = function getHeader() {
        return _reactDom2['default'].findDOMNode(this.refs.header);
    };

    DialogInner.prototype.getBody = function getBody() {
        return _reactDom2['default'].findDOMNode(this.refs.body);
    };

    DialogInner.prototype.getFooter = function getFooter() {
        return _reactDom2['default'].findDOMNode(this.refs.footer);
    };

    DialogInner.prototype.onClose = function onClose(e) {
        this.props.onClose('fromCloseBtn');
        e.preventDefault();
    };

    return DialogInner;
}(_react2['default'].Component), _class.propTypes = {
    prefix: PropTypes.string,
    footerAlign: PropTypes.oneOf(['left', 'center', 'right']),
    className: PropTypes.string,
    closable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    children: PropTypes.any,
    onClose: PropTypes.func
}, _class.defaultProps = {
    prefix: 'next-',
    onClose: noop,
    footerAlign: 'right',
    role: 'dialog',
    closable: true
}, _class.contextTypes = {
    prefix: PropTypes.string
}, _temp);
DialogInner.displayName = 'DialogInner';
exports['default'] = DialogInner;
module.exports = exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = {
    'en-us': {
        ok: 'Ok',
        cancel: 'Cancel'
    },
    'zh-cn': {
        ok: '确认',
        cancel: '取消'
    },
    'zh-tw': {
        ok: '確認',
        cancel: '取消'
    }
};
module.exports = exports['default'];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var typesMap = {
    success: 'success',
    prompt: 'warning',
    error: 'error',
    help: 'help',
    loading: 'loading'
};

var ieVersion = typeof document === 'undefined' ? false : document.documentMode;

var Feedback = (_temp = _class = function (_Component) {
    _inherits(Feedback, _Component);

    function Feedback() {
        _classCallCheck(this, Feedback);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Feedback.prototype.render = function render() {
        var _classNames;

        var prefix = this.context.prefix || this.props.prefix;
        /* eslint-disable no-unused-vars */

        var _props = this.props,
            propsPrefix = _props.prefix,
            type = _props.type,
            shape = _props.shape,
            size = _props.size,
            visible = _props.visible,
            title = _props.title,
            children = _props.children,
            className = _props.className,
            others = _objectWithoutProperties(_props, ['prefix', 'type', 'shape', 'size', 'visible', 'title', 'children', 'className']);
        /* eslint-enable */


        var feedbackPrefix = prefix + 'feedback';
        var iconType = typesMap[type];
        var classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, feedbackPrefix, true), _defineProperty(_classNames, feedbackPrefix + '-' + type, type), _defineProperty(_classNames, feedbackPrefix + '-' + shape, shape), _defineProperty(_classNames, feedbackPrefix + '-' + size, size), _defineProperty(_classNames, feedbackPrefix + '-title-content', !!title), _defineProperty(_classNames, feedbackPrefix + '-only-content', !title && !!children), _defineProperty(_classNames, feedbackPrefix + '-ie8', ieVersion === 8), _defineProperty(_classNames, feedbackPrefix + '-hide', !visible), _defineProperty(_classNames, className, className), _classNames));

        return _react2['default'].createElement(
            'div',
            _extends({}, others, { className: classes }),
            _react2['default'].createElement(_nextIcon2['default'], { className: feedbackPrefix + '-symbol', type: iconType }),
            title && _react2['default'].createElement(
                'div',
                { className: feedbackPrefix + '-title' },
                title
            ),
            children && _react2['default'].createElement(
                'div',
                { className: feedbackPrefix + '-content' },
                children
            )
        );
    };

    return Feedback;
}(_react.Component), _class.contextTypes = {
    prefix: _react2['default'].PropTypes.string
}, _class.propTypes = {
    prefix: _react2['default'].PropTypes.string,
    type: _react2['default'].PropTypes.oneOf(['success', 'error', 'prompt', 'help', 'loading']),
    shape: _react2['default'].PropTypes.oneOf(['inline', 'addon', 'toast']),
    size: _react2['default'].PropTypes.oneOf(['medium', 'large']),
    visible: _react2['default'].PropTypes.bool,
    className: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.any,
    children: _react2['default'].PropTypes.any
}, _class.defaultProps = {
    prefix: 'next-',
    type: 'success',
    shape: 'inline',
    size: 'medium',
    visible: true,
    title: ''
}, _temp);
Feedback.displayName = 'Feedback';
exports['default'] = Feedback;
module.exports = exports['default'];

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(142);

var _index2 = _interopRequireDefault(_index);

var _group = __webpack_require__(69);

var _group2 = _interopRequireDefault(_group);

var _index3 = __webpack_require__(149);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _index4['default'];


_index4['default'].Group = _group2['default'];
_index4['default'].Item = _index2['default'];
module.exports = exports['default'];

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _common = __webpack_require__(29);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Filling = function (_Common) {
    _inherits(Filling, _Common);

    function Filling(props, context) {
        _classCallCheck(this, Filling);

        var _this = _possibleConstructorReturn(this, _Common.call(this, props, context));

        _this.menuShowClassName = context.prefix + 'navigation-item-children-menu-show';
        return _this;
    }

    Filling.prototype.render = function render() {
        var focused = this.props.focused;

        var className = void 0;

        if (focused) {
            className = this.menuShowClassName;
        }

        return _Common.prototype.render.call(this, className);
    };

    return Filling;
}(_common2['default']);

exports['default'] = Filling;
module.exports = exports['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _normal = __webpack_require__(70);

var _normal2 = _interopRequireDefault(_normal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var IconOnly = function (_Normal) {
    _inherits(IconOnly, _Normal);

    function IconOnly() {
        _classCallCheck(this, IconOnly);

        return _possibleConstructorReturn(this, _Normal.apply(this, arguments));
    }

    IconOnly.prototype.renderText = function renderText() {};

    IconOnly.prototype.renderLeafIcon = function renderLeafIcon() {};

    return IconOnly;
}(_normal2['default']);

exports['default'] = IconOnly;
module.exports = exports['default'];

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _slip = __webpack_require__(144);

var _slip2 = _interopRequireDefault(_slip);

var _tree = __webpack_require__(146);

var _tree2 = _interopRequireDefault(_tree);

var _line = __webpack_require__(143);

var _line2 = _interopRequireDefault(_line);

var _text = __webpack_require__(145);

var _text2 = _interopRequireDefault(_text);

var _filling = __webpack_require__(140);

var _filling2 = _interopRequireDefault(_filling);

var _normal = __webpack_require__(70);

var _normal2 = _interopRequireDefault(_normal);

var _icononly = __webpack_require__(141);

var _icononly2 = _interopRequireDefault(_icononly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ItemMain = (_temp = _class = function (_React$Component) {
    _inherits(ItemMain, _React$Component);

    function ItemMain() {
        _classCallCheck(this, ItemMain);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    ItemMain.prototype.render = function render() {
        var type = this.context.type.toLowerCase();
        var component = ItemMain.typeMap[type];

        if (component) {
            return _react2['default'].createElement(component, this.props, this.props.children);
        }
    };

    return ItemMain;
}(_react2['default'].Component), _class.componentMark = 'item-main', _class.propTypes = {
    children: _react.PropTypes.any
}, _class.typeMap = {
    line: _line2['default'],
    text: _text2['default'],
    slip: _slip2['default'],
    tree: _tree2['default'],
    normal: _normal2['default'],
    filling: _filling2['default'],
    icononly: _icononly2['default']
}, _temp);
ItemMain.displayName = 'ItemMain';
exports['default'] = ItemMain;


ItemMain.contextTypes = {
    type: _react.PropTypes.string
};
module.exports = exports['default'];

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _common = __webpack_require__(29);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Line = function (_Common) {
    _inherits(Line, _Common);

    function Line(props, context) {
        _classCallCheck(this, Line);

        var _this = _possibleConstructorReturn(this, _Common.call(this, props, context));

        _this.menuShowClassName = context.prefix + 'navigation-item-children-menu-show';
        return _this;
    }

    Line.prototype.render = function render() {
        var focused = this.props.focused;

        var className = void 0;

        if (focused) {
            className = this.menuShowClassName;
        }

        return _Common.prototype.render.call(this, className);
    };

    return Line;
}(_common2['default']);

exports['default'] = Line;
module.exports = exports['default'];

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _item = __webpack_require__(21);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Slip = function (_Item) {
    _inherits(Slip, _Item);

    function Slip(props, context) {
        _classCallCheck(this, Slip);

        var _this = _possibleConstructorReturn(this, _Item.call(this, props, context));

        var prefix = context.prefix;


        _this.activeClassName = prefix + 'navigation-item-active';
        return _this;
    }

    // onMouseEnter默认处理函数
    // 调用上层navigation onItemMouseEnter 方法


    Slip.prototype.onMouseEnter = function onMouseEnter() {
        var _props = this.props,
            onMouseEnter = _props.onMouseEnter,
            itemid = _props.itemid;


        var argv = [].slice.call(arguments),
            context = this.context.navigation;

        argv = [itemid, this].concat(argv);

        onMouseEnter.apply(this, [itemid, this].concat(argv));
        context.onItemMouseEnter.apply(context, argv);
    };

    /**
     * onMouseMove默认处理函数;调用上层navigation onItemMouseMove 方法
     * @method onMouseMove
     */


    Slip.prototype.onMouseMove = function onMouseMove() {
        var _props2 = this.props,
            onMouseMove = _props2.onMouseMove,
            itemid = _props2.itemid;


        var argv = [].slice.call(arguments),
            context = this.context.navigation;

        argv = [itemid, this].concat(argv);

        onMouseMove.apply(this, [itemid, this].concat(argv));
        context.onItemMouseMove.apply(context, argv);
    };

    /**
     * onMouseLeave默认处理函数;调用上层navigation onItemMouseLeave 方法
     * @method onMouseLeave
     */


    Slip.prototype.onMouseLeave = function onMouseLeave() {
        var _props3 = this.props,
            onMouseLeave = _props3.onMouseLeave,
            itemid = _props3.itemid;


        var argv = [].slice.call(arguments),
            context = this.context.navigation;

        argv = [itemid, this].concat(argv);

        onMouseLeave.apply(this, [itemid, this].concat(argv));
        context.onItemMouseLeave.apply(context, argv);
    };

    Slip.prototype.renderChildren = function renderChildren() {};

    Slip.prototype.render = function render() {
        var selected = this.props.selected;

        var className = void 0;

        if (selected) {
            className = this.activeClassName;
        }

        return _Item.prototype.render.call(this, className);
    };

    return Slip;
}(_item2['default']);

exports['default'] = Slip;
module.exports = exports['default'];

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _common = __webpack_require__(29);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Text = function (_Common) {
    _inherits(Text, _Common);

    function Text(props, context) {
        _classCallCheck(this, Text);

        var _this = _possibleConstructorReturn(this, _Common.call(this, props, context));

        _this.menuShowClassName = context.prefix + 'navigation-item-children-menu-show';
        return _this;
    }

    Text.prototype.render = function render() {
        var focused = this.props.focused;

        var className = void 0;

        if (focused) {
            className = this.menuShowClassName;
        }

        return _Common.prototype.render.call(this, className);
    };

    return Text;
}(_common2['default']);

exports['default'] = Text;
module.exports = exports['default'];

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _item = __webpack_require__(21);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Tree = function (_Item) {
    _inherits(Tree, _Item);

    function Tree(props, context) {
        _classCallCheck(this, Tree);

        var _this = _possibleConstructorReturn(this, _Item.call(this, props, context));

        var prefix = context.prefix + 'navigation';

        _this.openedClassName = prefix + '-item-opened';
        _this.leafAtFrontClassName = prefix + '-item-front';
        _this.treeTitleClassName = prefix + '-item-tree-title';
        _this.activeDirectionClassName = prefix + '-item-selected';

        _this.state = {
            opened: _this.props.opened
        };
        return _this;
    }

    Tree.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('opened' in nextProps) {
            this.setState({
                opened: nextProps.opened
            });
        }
    };

    // 处理tree触发click事件函数
    // 根据是否有hasChildren属性判断是select事件还是fold/unfold事件


    Tree.prototype.onClick = function onClick(e) {
        var _props = this.props,
            hasChildren = _props.hasChildren,
            onClick = _props.onClick,
            onSelect = _props.onSelect,
            onFold = _props.onFold,
            onUnFold = _props.onUnFold,
            selected = _props.selected,
            selectedStyle = _props.selectedStyle,
            itemid = _props.itemid;


        var context = this.context,
            prefix = context.prefix,
            navigation = context.navigation,
            rootNavigation = context.rootNavigation,
            accordion = context.accordion,
            argv = [itemid, this].concat([].slice.call(arguments)),
            index = void 0,
            cls = e.target.className;

        if (typeof cls === 'string') {
            if (cls.indexOf(prefix + 'navigation-item-leaf-icon') === -1) {
                onClick.apply(this, argv);
                context.onItemClick.apply(context.rootNavigation, argv);
            }
        }

        if (hasChildren === 'tree') {
            this.setState({
                opened: !this.state.opened
            });

            if (this.state.opened) {
                onFold.apply(this, argv);
                context.onItemFold.apply(context.rootNavigation, argv);

                // 手风琴逻辑
                if (accordion) {
                    if (navigation) {
                        if (navigation.state.openedKey === itemid) {
                            navigation.state.openedKey = null;
                        }
                    }
                }
            } else {
                // 手风琴逻辑
                if (accordion) {
                    if (navigation) {
                        if (navigation.state.openedKey === itemid) {
                            navigation.state.openedKey = null;
                        } else {
                            if (navigation.state.openedKey) {
                                index = rootNavigation.state.openedKeys.indexOf(navigation.state.openedKey);

                                if (index > -1) {
                                    rootNavigation.state.openedKeys.splice(index, 1);
                                    navigation.state.openedKey = itemid;
                                }
                            } else {
                                navigation.state.openedKey = itemid;
                            }
                        }
                    }
                }

                onUnFold.apply(this, argv);
                context.onItemUnFold.apply(context.rootNavigation, argv);
            }
        } else {
            if (!selected) {
                onSelect.apply(this, argv);

                if (selectedStyle) {
                    context.onItemSelect.apply(context.rootNavigation, argv);
                }
            }
        }

        e.stopPropagation();
    };

    // 渲染子组件图标函数


    Tree.prototype.renderLeafIcon = function renderLeafIcon() {
        var hasChildren = this.props.hasChildren;

        var cmp = void 0;

        if (hasChildren) {
            cmp = _Item.prototype.renderLeafIcon.call(this);

            if (cmp) {
                return _react2['default'].cloneElement(cmp, {
                    onClick: function onClick(e) {
                        e.preventDefault();
                    }
                });
            }
        }
    };

    Tree.prototype.render = function render() {
        var _classNames;

        var _props2 = this.props,
            leafAtFront = _props2.leafAtFront,
            selected = _props2.selected,
            hasChildren = _props2.hasChildren;
        var activeDirection = this.props.activeDirection;

        var context = this.context,
            activeClassName = void 0;

        activeDirection = activeDirection || context.activeDirection;
        activeClassName = this.activeDirectionClassName + '-' + activeDirection;

        var name = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this.selectedClassName, selected), _defineProperty(_classNames, this.openedClassName, this.state.opened), _defineProperty(_classNames, activeClassName, activeDirection && selected), _defineProperty(_classNames, this.leafAtFrontClassName, leafAtFront), _defineProperty(_classNames, this.treeTitleClassName, hasChildren), _classNames));

        return _Item.prototype.render.call(this, name);
    };

    return Tree;
}(_item2['default']);

exports['default'] = Tree;
module.exports = exports['default'];

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _vertical = __webpack_require__(30);

var _vertical2 = _interopRequireDefault(_vertical);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Filling = function (_Vertical) {
  _inherits(Filling, _Vertical);

  function Filling() {
    _classCallCheck(this, Filling);

    return _possibleConstructorReturn(this, _Vertical.apply(this, arguments));
  }

  return Filling;
}(_vertical2['default']);

exports['default'] = Filling;


Filling.defaultProps.type = 'filling';
module.exports = exports['default'];

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _normal = __webpack_require__(71);

var _normal2 = _interopRequireDefault(_normal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Icononly = function (_Normal) {
  _inherits(Icononly, _Normal);

  function Icononly() {
    _classCallCheck(this, Icononly);

    return _possibleConstructorReturn(this, _Normal.apply(this, arguments));
  }

  return Icononly;
}(_normal2['default']);

exports['default'] = Icononly;


Icononly.defaultProps.type = 'icononly';
module.exports = exports['default'];

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _line = __webpack_require__(150);

var _line2 = _interopRequireDefault(_line);

var _text = __webpack_require__(152);

var _text2 = _interopRequireDefault(_text);

var _filling = __webpack_require__(147);

var _filling2 = _interopRequireDefault(_filling);

var _tree = __webpack_require__(153);

var _tree2 = _interopRequireDefault(_tree);

var _slip = __webpack_require__(151);

var _slip2 = _interopRequireDefault(_slip);

var _normal = __webpack_require__(71);

var _normal2 = _interopRequireDefault(_normal);

var _icononly = __webpack_require__(148);

var _icononly2 = _interopRequireDefault(_icononly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var NavigationMain = (_temp = _class = function (_React$Component) {
    _inherits(NavigationMain, _React$Component);

    function NavigationMain(props, context) {
        _classCallCheck(this, NavigationMain);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        if (!context.main) {
            _this.state = {
                selectedKey: props.selectedKey,
                openedKeys: props.openedKeys,
                type: props.type,
                nestingPath: []
            };
        }
        return _this;
    }

    NavigationMain.prototype.getChildContext = function getChildContext() {
        return {
            main: this.context.main || this
        };
    };

    NavigationMain.prototype.collectKey = function collectKey(children) {
        var _this2 = this;

        var openedKeys = void 0,
            selectedKey = void 0,
            _handle = void 0;

        _handle = function handle(children) {
            _react2['default'].Children.forEach(children, function (child, i) {
                if (child === null || child === undefined) {
                    return _this2;
                }

                if (typeof child.type === 'function') {
                    if (child.type.componentMark === 'item-main') {

                        if (child.props.opened) {
                            openedKeys = openedKeys || [];
                            openedKeys.push(child.props.itemid || child.key);
                        }

                        if (child.props.selected) {
                            selectedKey = child.props.itemid || child.key;
                        }
                    }
                }

                if (child.props) {
                    if (child.props.children) {
                        return _handle(child.props.children);
                    }
                }
            });
        };

        _handle(children);

        return {
            selectedKey: selectedKey,
            openedKeys: openedKeys
        };
    };

    NavigationMain.prototype.componentWillMount = function componentWillMount() {
        var key = void 0;

        if (!this.context.main) {
            key = this.collectKey(this.props.children);

            if (!this.state.selectedKey) {
                this.state.selectedKey = key.selectedKey;
            }

            if (!this.state.openedKeys) {
                this.state.openedKeys = key.openedKeys;
            }
        }
    };

    NavigationMain.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var key = void 0,
            state = {},
            recently = void 0,
            current = void 0;

        if (!this.context.main) {
            key = this.collectKey(nextProps.children);

            if (nextProps.selectedKey) {
                state.selectedKey = nextProps.selectedKey;
            } else {
                state.selectedKey = key.selectedKey;
            }

            if (nextProps.openedKeys) {
                state.openedKeys = nextProps.openedKeys;
            } else {
                current = key.openedKeys;
                recently = this.collectKey(this.props.children).openedKeys;

                if (!(current === recently)) {
                    if (current === undefined || recently === undefined) {
                        state.openedKeys = current || [];
                    } else {
                        if (!(current.length === recently.length)) {
                            current = current.sort();
                            recently = recently.sort();

                            if (current.some(function (key, i) {
                                return !(key === recently[i]);
                            })) {
                                state.openedKeys = current;
                            }
                        }
                    }
                }
            }

            if (nextProps.type) {
                state.type = nextProps.type;
            }

            this.setState(state);

            if (nextProps.type) {
                if (!(this.state.type === nextProps.type)) {
                    this.onChangeType(this.state.type, nextProps.type);
                }
            }
        }
    };

    NavigationMain.prototype.onChangeType = function onChangeType(type, nextType) {
        var hasTree = type === 'tree' || nextType === 'tree',
            toTree = hasTree ? nextType === 'tree' : false,
            state = this.state,
            length = state.nestingPath ? state.nestingPath.length : 0,
            item = void 0;

        if (hasTree) {
            if (state.nestingPath) {
                if (state.nestingPath.length > 0) {
                    if (toTree) {
                        item = state.nestingPath[length - 1];
                    } else {
                        item = state.nestingPath[0];
                    }

                    if (item.props.selectedStyle) {
                        if (length === 1) {
                            if (item.props.hasChildren) {
                                return this.setState({
                                    selectedKey: null
                                });
                            }
                        }

                        this.setState({
                            selectedKey: item.props.itemid
                        });
                    }
                }
            }
        }
    };

    NavigationMain.prototype.cloneProperty = function cloneProperty() {
        var props = this.props,
            newProps = {},
            empty = function empty() {},
            onSelect = void 0,
            onUnFold = void 0,
            onFold = void 0;

        Object.keys(props).forEach(function (key) {
            newProps[key] = props[key];
        });

        onSelect = newProps['onSelect'] || empty;
        onUnFold = newProps['onUnFold'] || empty;
        onFold = newProps['onFold'] || empty;

        newProps['onSelect'] = function (itemid, item) {
            var selectedStyle = item.props.selectedStyle,
                state = this.state;


            state.nestingPath = item.nestingPath;

            if (selectedStyle) {
                state.selectedKey = itemid;
            }

            onSelect.apply(null, arguments);
        }.bind(this);

        newProps['onFold'] = function (itemid) {
            if (!this.state.openedKeys) {
                this.state.openedKeys = [];
            }

            var index = this.state.openedKeys.indexOf(itemid);

            if (index > -1) {
                this.state.openedKeys.splice(index, 1);

                this.setState({
                    openedKeys: this.state.openedKeys
                });
            }

            onFold.apply(null, arguments);
        }.bind(this);

        newProps['onUnFold'] = function (itemid) {
            if (!this.state.openedKeys) {
                this.state.openedKeys = [];
            }

            var hasThisKey = this.state.openedKeys.indexOf(itemid) > -1;

            if (!hasThisKey) {
                this.state.openedKeys.push(itemid);
            }

            this.setState({
                openedKeys: this.state.openedKeys
            });

            onUnFold.apply(null, arguments);
        }.bind(this);

        newProps['selectedKey'] = this.state.selectedKey;
        newProps['openedKeys'] = this.state.openedKeys;
        newProps['type'] = this.state.type;

        return newProps;
    };

    NavigationMain.prototype.render = function render() {
        var context = this.context;
        var type = context.type || this.props.type;
        var component = void 0;
        var props = context.main ? this.props : this.cloneProperty();

        type = type.toLowerCase();
        component = NavigationMain.typeMap[type];

        if (component) {
            return _react2['default'].createElement(component, props, this.props.children);
        }
    };

    return NavigationMain;
}(_react2['default'].Component), _class.componentMark = 'navigation-main', _class.typeMap = {
    line: _line2['default'],
    text: _text2['default'],
    slip: _slip2['default'],
    tree: _tree2['default'],
    normal: _normal2['default'],
    filling: _filling2['default'],
    icononly: _icononly2['default']
}, _temp);
NavigationMain.displayName = 'NavigationMain';
exports['default'] = NavigationMain;


NavigationMain.propTypes = {
    type: _react.PropTypes.string,
    children: _react.PropTypes.any
};

NavigationMain.defaultProps = {
    type: 'text'
};

NavigationMain.contextTypes = {
    type: _react.PropTypes.string,
    main: _react.PropTypes.any
};

NavigationMain.childContextTypes = {
    main: _react.PropTypes.any
};
module.exports = exports['default'];

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _vertical = __webpack_require__(30);

var _vertical2 = _interopRequireDefault(_vertical);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Line = function (_Vertical) {
  _inherits(Line, _Vertical);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _Vertical.apply(this, arguments));
  }

  return Line;
}(_vertical2['default']);

exports['default'] = Line;


Line.defaultProps.type = 'line';
module.exports = exports['default'];

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _navigation = __webpack_require__(22);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Slip = function (_Navigation) {
    _inherits(Slip, _Navigation);

    function Slip(props, context) {
        _classCallCheck(this, Slip);

        var _this = _possibleConstructorReturn(this, _Navigation.call(this, props, context));

        var prefix = context.prefix;


        prefix = (prefix || props.prefix) + 'navigation';

        _this.containerClassName = prefix + '-slip-container';
        _this.mainClassName = prefix + '-slip-main';
        _this.selectedClassName = prefix + '-slip-selected';

        _this.state.content = null;
        return _this;
    }

    Slip.prototype.setContent = function setContent(content) {
        this.setState({
            content: content
        });
    };

    Slip.prototype.onMainMouseLeave = function onMainMouseLeave() {
        this.setState({
            selectedKey: null,
            content: null
        });
    };

    Slip.prototype.onItemSelect = function onItemSelect(itemid, item) {
        var onSelect = this.props.onSelect;

        var content = item.props.childrenContent,
            root = this.context.rootNavigation;

        this.setState({
            selectedKey: itemid,
            content: content
        });

        onSelect.apply(this, arguments);

        if (root) {
            root.props.onSelect.apply(root, arguments);
        }
    };

    Slip.prototype.onItemMouseEnter = function onItemMouseEnter(itemid) {
        var context = this.context.rootNavigation || this,
            argv = [].slice.call(arguments);

        argv.splice(2, 0, this);

        _Navigation.prototype.onItemMouseEnter.apply(this, argv);

        if (itemid === this.state.selectedKey) {
            return this;
        }

        context.onItemSelect.apply(this, argv);
    };

    Slip.prototype.onItemMouseLeave = function onItemMouseLeave() {
        var argv = [].slice.call(arguments);

        argv.splice(2, 0, this);

        this.props.onMouseMove.apply(this, argv);
    };

    /**
     * 克隆item属性数据;根据状态处理props对应的值
     * @method cloneChildProperty
     * @return {Object}
     */


    Slip.prototype.cloneChildProperty = function cloneChildProperty(child, key) {
        var state = void 0,
            isMount = this.isMount;

        state = this.state;

        if (!isMount) {
            if (child.props.selected) {
                state.selectedKey = key;
            }
        }

        return {
            key: key,
            itemid: key,
            childrenContent: child.props.children,
            selected: !isMount ? child.props.selected : key === state.selectedKey,
            hasChildren: child.props.children ? this.context.type || this.props.type : undefined
        };
    };

    /**
     * 克隆container
     * @method cloneContainer
     * @return {Object}
     */


    Slip.prototype.cloneContainer = function cloneContainer() {
        var _classNames;

        var container = this.props.container;

        var classes = void 0;

        if (!container) {
            return undefined;
        }

        classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this.containerClassName, true), _defineProperty(_classNames, container.props.className, !!container.props.className), _classNames));

        return _react2['default'].cloneElement(container, {
            className: classes
        }, this.state.content);
    };

    /**
     * 渲染container
     * @method renderContainer
     * @return {Object}
     */


    Slip.prototype.renderContainer = function renderContainer() {
        var container = this.cloneContainer();

        if (container) {
            return container;
        }

        return _react2['default'].createElement(
            'div',
            { className: this.containerClassName },
            this.state.content
        );
    };

    Slip.prototype.render = function render() {
        var _classNames2;

        var classes = void 0,
            eventsBind = void 0;

        eventsBind = {
            onMouseLeave: this.onMainMouseLeave.bind(this)
        };

        classes = (0, _classnames2['default'])((_classNames2 = {}, _defineProperty(_classNames2, this.mainClassName, true), _defineProperty(_classNames2, this.selectedClassName, !!this.state.selectedKey), _classNames2));

        return _react2['default'].createElement(
            'div',
            _extends({
                style: this.props.style,
                className: classes
            }, eventsBind),
            _Navigation.prototype.render.call(this),
            this.renderContainer()
        );
    };

    return Slip;
}(_navigation2['default']);

exports['default'] = Slip;


Slip.defaultProps.type = 'slip';
module.exports = exports['default'];

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _vertical = __webpack_require__(30);

var _vertical2 = _interopRequireDefault(_vertical);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Text = function (_Vertical) {
  _inherits(Text, _Vertical);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _Vertical.apply(this, arguments));
  }

  return Text;
}(_vertical2['default']);

exports['default'] = Text;


Text.defaultProps.type = 'text';
module.exports = exports['default'];

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _navigation = __webpack_require__(22);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Tree = function (_Navigation) {
    _inherits(Tree, _Navigation);

    function Tree(props, context) {
        _classCallCheck(this, Tree);

        var _this = _possibleConstructorReturn(this, _Navigation.call(this, props, context));

        _this.state.openedKeys = _this.props.openedKeys || [];
        _this.state.openedKey = null;

        _this.theSameLevelKeys = [];
        return _this;
    }
    // 由item子组件click触发select处理函数
    // 分局子组件selected状态决定是否调用该处理函数


    Tree.prototype.onItemSelect = function onItemSelect(itemid) {
        if (itemid === this.state.itemid) {
            return this;
        }

        _Navigation.prototype.onItemSelect.apply(this, arguments);

        if (this.props.selectedStyle) {
            this.setState({
                selectedKey: itemid
            });
        }
    };

    Tree.prototype.componentWillMount = function componentWillMount() {
        var branchLevel = this.props.branchLevel || this.context.branchLevel || 0;

        this.context.branchLevel = branchLevel + 1;

        this.branchLevel = this.context.branchLevel;
    };

    Tree.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var state = {};

        _Navigation.prototype.componentWillReceiveProps.call(this, nextProps);

        if (nextProps.openedKeys) {
            state.openedKeys = nextProps.openedKeys;
        }

        this.setState(state);
    };

    // 折叠处理函数
    // 仅限Tree组件事件


    Tree.prototype.onItemFold = function onItemFold(itemid) {
        var argv = [].slice.call(arguments);
        var index = this.state.openedKeys.indexOf(itemid);

        if (index > -1) {
            this.state.openedKeys.splice(index, 1);
        }

        argv.splice(2, 0, this);

        this.props.onFold.apply(this, argv);
    };

    // 展开处理函数
    // 仅限Tree组件


    Tree.prototype.onItemUnFold = function onItemUnFold(itemid) {
        var argv = [].slice.call(arguments);
        var hasThisKey = this.state.openedKeys.indexOf(itemid) > -1;

        if (!hasThisKey) {
            this.state.openedKeys.push(itemid);
        }

        argv.splice(2, 0, this);

        this.props.onUnFold.apply(this, argv);
    };

    /**
     * 克隆子组件属性值;根据状态设置新的属性值；一般用来处理selected、opened、focused属性
     * 克隆子组件函数;过滤掉undefined，null情况
     * @method cloneChildProperty
     * @return {Object}
     */


    Tree.prototype.cloneChildProperty = function cloneChildProperty(child, key, _cloneChildProperty) {
        var props = _Navigation.prototype.cloneChildProperty.call(this, child, key, _cloneChildProperty),
            isMount = this.isMount,
            context = this.context,
            navigation = context.rootNavigation || this,
            hasOpenedKey = context.openedKeys || this.props.openedKeys,
            opened = void 0,
            state = void 0;

        state = navigation ? navigation.getRootState() : this.state;

        if (this.theSameLevelKeys.indexOf(key) === -1) {
            this.theSameLevelKeys.push(key);
        }

        if (!isMount) {
            if (!hasOpenedKey) {
                if (typeof child.props.opened === 'string') {
                    if (child.props.opened === 'true') {
                        state.openedKeys.push(key);
                        this.state.openedKey = key;
                    }
                } else {
                    if (child.props.opened) {
                        state.openedKeys.push(key);
                        this.state.openedKey = key;
                    }
                }
            }
        }

        if (state.openedKeys.indexOf(key) > -1) {
            opened = true;
            this.state.openedKey = key;
        } else {
            opened = false;
        }

        props.opened = opened;
        props.branchLevel = this.branchLevel;

        return props;
    };

    return Tree;
}(_navigation2['default']);

exports['default'] = Tree;


Tree.defaultProps.type = 'tree';
module.exports = exports['default'];

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextNavigation = __webpack_require__(139);

var _nextNavigation2 = _interopRequireDefault(_nextNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var QNNavigation = _nextNavigation2['default'];

QNNavigation.Group = _nextNavigation.Group;
QNNavigation.Item = _nextNavigation.Item;

exports['default'] = QNNavigation;
module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(104);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154);

/***/ }),
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator___ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages__ = __webpack_require__(166);






/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
function Schema(descriptor) {
  this.rules = null;
  this._messages = __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* messages */];
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* deepMerge */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__messages__["b" /* newMessages */])(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((typeof rules === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(rules)) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z = void 0;
    var item = void 0;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_) {
    var _this = this;

    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oc = arguments[2];

    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    function complete(results) {
      var i = void 0;
      var field = void 0;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          errors = errors.concat.apply(errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        for (i = 0; i < errors.length; i++) {
          field = errors[i].field;
          fields[field] = fields[field] || [];
          fields[field].push(errors[i]);
        }
      }
      callback(errors, fields);
    }

    if (options.messages) {
      var messages = this.messages();
      if (messages === __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* messages */]) {
        messages = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__messages__["b" /* newMessages */])();
      }
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* deepMerge */])(messages, options.messages);
      options.messages = messages;
    } else {
      options.messages = this.messages();
    }
    var arr = void 0;
    var value = void 0;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* asyncMap */])(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(rule.fields) === 'object' || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, schema, {
          fullField: rule.fullField + '.' + key
        });
      }

      function cb() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (errors.length) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* warning */])('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* complementError */])(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* complementError */])(rule));
            } else if (options.error) {
              errors = [options.error(rule, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["e" /* format */])(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }

          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldsSchema, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            doIt(errs && errs.length ? errors.concat(errs) : errs);
          });
        }
      }

      var res = rule.validator(rule, data.value, cb, data.source, options);
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !__WEBPACK_IMPORTED_MODULE_3__validator___["a" /* default */].hasOwnProperty(rule.type)) {
      throw new Error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["e" /* format */])('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return __WEBPACK_IMPORTED_MODULE_3__validator___["a" /* default */].required;
    }
    return __WEBPACK_IMPORTED_MODULE_3__validator___["a" /* default */][this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  __WEBPACK_IMPORTED_MODULE_3__validator___["a" /* default */][type] = validator;
};

Schema.messages = __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* messages */];

/* harmony default export */ __webpack_exports__["default"] = (Schema);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = newMessages;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messages; });
function newMessages() {
  return {
    'default': 'Validation error on field %s',
    required: '%s is required',
    'enum': '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = newMessages();

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);

var ENUM = 'enum';

/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* format */](options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (enumerable);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);


/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      if (!rule.pattern.test(value)) {
        errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* format */](options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* format */](options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (pattern);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);


/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number';
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  }
  // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type
  if (!key) {
    return false;
  }
  if (str || arr) {
    val = value.length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* format */](options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* format */](options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* format */](options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* format */](options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (range);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__required__ = __webpack_require__(81);




/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object: function object(value) {
    return (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(value)) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};

/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__required__["a" /* default */])(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* format */](options.messages.types[ruleType], rule.fullField, rule.type));
    }
    // straight typeof check
  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(value)) !== rule.type) {
    errors.push(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* format */](options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (type);

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);


/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* format */](options.messages.whitespace, rule.fullField));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (whitespace);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);


/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value, 'array') && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, 'array');
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value, 'array')) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (array);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rule___ = __webpack_require__(7);



/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_1__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_1__rule___["a" /* default */].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (boolean);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value)) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      if (value) {
        __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (date);

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);


var ENUM = 'enum';

/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */][ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (enumerable);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (floatFn);

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__method__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boolean__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__regexp__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__integer__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__float__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__array__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__object__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__enum__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pattern__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__date__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__required__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__type__ = __webpack_require__(186);















/* harmony default export */ __webpack_exports__["a"] = ({
  string: __WEBPACK_IMPORTED_MODULE_0__string__["a" /* default */],
  method: __WEBPACK_IMPORTED_MODULE_1__method__["a" /* default */],
  number: __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */],
  boolean: __WEBPACK_IMPORTED_MODULE_3__boolean__["a" /* default */],
  regexp: __WEBPACK_IMPORTED_MODULE_4__regexp__["a" /* default */],
  integer: __WEBPACK_IMPORTED_MODULE_5__integer__["a" /* default */],
  float: __WEBPACK_IMPORTED_MODULE_6__float__["a" /* default */],
  array: __WEBPACK_IMPORTED_MODULE_7__array__["a" /* default */],
  object: __WEBPACK_IMPORTED_MODULE_8__object__["a" /* default */],
  'enum': __WEBPACK_IMPORTED_MODULE_9__enum__["a" /* default */],
  pattern: __WEBPACK_IMPORTED_MODULE_10__pattern__["a" /* default */],
  date: __WEBPACK_IMPORTED_MODULE_11__date__["a" /* default */],
  url: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
  hex: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
  email: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
  required: __WEBPACK_IMPORTED_MODULE_12__required__["a" /* default */]
});

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (integer);

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (method);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (number);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (object);

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value, 'string') && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value, 'string')) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (pattern);

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value)) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (regexp);

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rule___ = __webpack_require__(7);



function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(value);
  __WEBPACK_IMPORTED_MODULE_1__rule___["a" /* default */].required(rule, value, source, errors, options, type);
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (required);

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value, 'string') && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, 'string');
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value, 'string')) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (string);

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value, ruleType) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, ruleType);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["f" /* isEmptyValue */])(value, ruleType)) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (type);

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(190), __esModule: true };

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(191), __esModule: true };

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(192), __esModule: true };

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(212);
module.exports = __webpack_require__(34).Object.assign;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(215);
__webpack_require__(213);
__webpack_require__(216);
__webpack_require__(217);
module.exports = __webpack_require__(34).Symbol;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(214);
__webpack_require__(218);
module.exports = __webpack_require__(66).f('iterator');


/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(17);
var toLength = __webpack_require__(210);
var toAbsoluteIndex = __webpack_require__(209);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(193);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(36);
var gOPS = __webpack_require__(59);
var pIE = __webpack_require__(37);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(10).document;
module.exports = document && document.documentElement;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(83);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(88);
var descriptor = __webpack_require__(38);
var setToStringTag = __webpack_require__(60);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(18)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(39)('meta');
var isObject = __webpack_require__(35);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(16).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(24)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(36);
var gOPS = __webpack_require__(59);
var pIE = __webpack_require__(37);
var toObject = __webpack_require__(92);
var IObject = __webpack_require__(86);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(24)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16);
var anObject = __webpack_require__(33);
var getKeys = __webpack_require__(36);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(37);
var createDesc = __webpack_require__(38);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(64);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(85);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(17);
var gOPN = __webpack_require__(89).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(92);
var IE_PROTO = __webpack_require__(61)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(63);
var defined = __webpack_require__(54);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(63);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(63);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(194);
var step = __webpack_require__(201);
var Iterators = __webpack_require__(57);
var toIObject = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(87)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(56);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(203) });


/***/ }),
/* 213 */
/***/ (function(module, exports) {



/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(208)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(87)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(10);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(56);
var redefine = __webpack_require__(91);
var META = __webpack_require__(202).KEY;
var $fails = __webpack_require__(24);
var shared = __webpack_require__(62);
var setToStringTag = __webpack_require__(60);
var uid = __webpack_require__(39);
var wks = __webpack_require__(18);
var wksExt = __webpack_require__(66);
var wksDefine = __webpack_require__(65);
var enumKeys = __webpack_require__(197);
var isArray = __webpack_require__(199);
var anObject = __webpack_require__(33);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(64);
var createDesc = __webpack_require__(38);
var _create = __webpack_require__(88);
var gOPNExt = __webpack_require__(206);
var $GOPD = __webpack_require__(205);
var $DP = __webpack_require__(16);
var $keys = __webpack_require__(36);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(89).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(37).f = $propertyIsEnumerable;
  __webpack_require__(59).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(58)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65)('asyncIterator');


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65)('observable');


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(211);
var global = __webpack_require__(10);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(57);
var TO_STRING_TAG = __webpack_require__(18)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _nextDropdown = __webpack_require__(95);

var _nextDropdown2 = _interopRequireDefault(_nextDropdown);

var _button = __webpack_require__(93);

var _button2 = _interopRequireDefault(_button);

var _group = __webpack_require__(94);

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/** Button.Split **/
var SplitButton = (_temp = _class = function (_Component) {
    _inherits(SplitButton, _Component);

    function SplitButton() {
        _classCallCheck(this, SplitButton);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    SplitButton.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            className = _props.className,
            type = _props.type,
            shape = _props.shape,
            menu = _props.menu,
            size = _props.size,
            disabled = _props.disabled,
            trigger = _props.trigger,
            align = _props.align,
            offset = _props.offset,
            children = _props.children,
            onClick = _props.onClick,
            style = _props.style,
            others = _objectWithoutProperties(_props, ['className', 'type', 'shape', 'menu', 'size', 'disabled', 'trigger', 'align', 'offset', 'children', 'onClick', 'style']);

        var prefix = this.context.prefix || this.props.prefix;

        var splitCls = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'btn-split', true), _defineProperty(_classNames, className, className), _classNames));
        var iconSize = {
            large: 'small',
            medium: 'xs',
            small: 'xs'
        }[size];
        var splitTrigger = _react2['default'].createElement(
            _button2['default'],
            { type: type, disabled: disabled, size: size, shape: shape },
            _react2['default'].createElement(_nextIcon2['default'], { type: 'arrow-down', size: iconSize, className: prefix + 'icon-split' })
        );

        return _react2['default'].createElement(
            _group2['default'],
            _extends({}, others, { size: size, className: splitCls, style: style }),
            _react2['default'].createElement(
                _button2['default'],
                _extends({ type: type, disabled: disabled, shape: shape, onClick: onClick.bind(this) }, others),
                children
            ),
            _react2['default'].createElement(
                _nextDropdown2['default'],
                { align: align, offset: offset, triggerType: trigger, trigger: splitTrigger },
                menu
            )
        );
    };

    return SplitButton;
}(_react.Component), _class.propTypes = {
    /**
     * 样式品牌前缀
     */
    prefix: _react.PropTypes.string,
    /**
     * Dropdown 的对齐方式，参考 [Dropdown](http://gitlab.alibaba-inc.com/next/dropdown)
     */
    align: _react.PropTypes.string,
    /**
     * Dropdown 的位置偏移，参考 [Dropdown](http://gitlab.alibaba-inc.com/next/dropdown)
     */
    offset: _react.PropTypes.array,
    /**
     * 类型，同 Button
     */
    type: _react.PropTypes.oneOf(['primary', 'secondary', 'normal', 'dark', 'light']),
    /**
     * 外观，同 Button
     */
    shape: _react.PropTypes.oneOf(['ghost', 'text', 'warning']),
    /**
     * 尺寸，同 Button
     */
    size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Dropdown 触发方式，参考 [Dropdown](http://gitlab.alibaba-inc.com/next/dropdown)
     */
    trigger: _react.PropTypes.oneOf(['click', 'hover']),
    /**
     * 弹出的内容，参考 [Dropdown](http://gitlab.alibaba-inc.com/next/dropdown)
     */
    menu: _react.PropTypes.any,
    /**
     * 点击按钮的回调
     * Function() => void
     */
    onClick: _react.PropTypes.func,
    style: _react.PropTypes.object
}, _class.defaultProps = {
    prefix: 'next-',
    align: 'tr br',
    offset: [0, 4],
    type: 'normal',
    size: 'medium',
    trigger: 'click',
    onClick: function onClick() {},
    style: null
}, _class.contextTypes = {
    prefix: _react.PropTypes.string
}, _temp);
SplitButton.displayName = 'SplitButton';
exports['default'] = SplitButton;
module.exports = exports['default'];

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _asyncValidator = __webpack_require__(165);

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

var _objectAssign = __webpack_require__(42);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nextUtil = __webpack_require__(2);

var _utils = __webpack_require__(221);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function noop() {}

var initMeta = {
    state: '',
    valueName: 'value',
    trigger: 'onChange'
};

var Field = function () {
    function Field(com, options) {
        var _this = this;

        _classCallCheck(this, Field);

        this.com = com;
        this.fieldsMeta = {};
        this.cachedBind = {}; //解决每次函数新增的问题
        this.onChange = noop;
        this.parseName = false;
        this.forceUpdate = false;
        this.scrollToFirstError = false; //TODO: set true in 1.0 version
        this.autoUnmount = false; //TODO: set true in 1.0 version
        this.deepReset = false; //TODO: set true in 1.0 version

        if (!this.com) {
            _nextUtil.log.warning('`this` is missing in `Field`, you should use like `new Field(this)`');
        }

        if (options) {
            if (options.onChange) {
                this.onChange = options.onChange;
            }

            ['parseName', 'forceUpdate', 'scrollToFirstError', 'autoUnmount', 'deepReset'].forEach(function (m) {
                if (m in options && options[m]) {
                    _this[m] = true;
                }
            });
        }

        ['init', 'getValue', 'getValues', 'setValue', 'setValues', 'getError', 'setError', 'setErrors', 'validate', 'getState', 'isValidating', 'reset', 'remove'].forEach(function (m) {
            _this[m] = _this[m].bind(_this);
        });
    }

    Field.prototype.init = function init(name) {
        var _this2 = this;

        var fieldOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _fieldOption$valueNam = fieldOption.valueName,
            valueName = _fieldOption$valueNam === undefined ? 'value' : _fieldOption$valueNam,
            _fieldOption$trigger = fieldOption.trigger,
            trigger = _fieldOption$trigger === undefined ? 'onChange' : _fieldOption$trigger,
            _fieldOption$rules = fieldOption.rules,
            rules = _fieldOption$rules === undefined ? null : _fieldOption$rules,
            initValue = fieldOption.initValue,
            _fieldOption$normaliz = fieldOption.normalize,
            normalize = _fieldOption$normaliz === undefined ? null : _fieldOption$normaliz,
            _fieldOption$getValue = fieldOption.getValueFromEvent,
            getValueFromEvent = _fieldOption$getValue === undefined ? normalize : _fieldOption$getValue,
            _fieldOption$props = fieldOption.props,
            props = _fieldOption$props === undefined ? {} : _fieldOption$props;

        var originalProps = (0, _objectAssign2['default'])({}, props);

        if (!(name in this.fieldsMeta)) {
            this.fieldsMeta[name] = _extends({}, initMeta, { initValue: initValue });
        }
        var fieldMeta = this.fieldsMeta[name];

        normalize && _nextUtil.log.deprecated('normalize', 'getValueFromEvent', 'Field');

        valueName in props && _nextUtil.log.warning('`init` will override `props.' + valueName + '`, don\'t set it directly, and you can use `setValue` to change it');
        var defaultValueName = 'default' + valueName[0].toUpperCase() + valueName.slice(1);

        typeof initValue !== 'undefined' && defaultValueName in props && _nextUtil.log.warning('`option.initValue` will take place of `' + defaultValueName + ', they can\'t be used toghter');

        (0, _objectAssign2['default'])(fieldMeta, {
            valueName: valueName,
            getValueFromEvent: getValueFromEvent,
            rules: rules,
            rulesMap: rules ? this._getRulesMap(name, rules, trigger) : null //map the rules by the key of trigger
        });

        // 兼容defaultValue逻辑：存在defaultValue的时候，value不能赋值，否则defaultValue不生效
        if (!('value' in fieldMeta)) {
            if (typeof initValue !== 'undefined') {
                fieldMeta.value = initValue;
            } else if (defaultValueName in props) {
                fieldMeta.value = props[defaultValueName];
            }
        }

        var inputProps = {
            'data-meta': 'Field',
            id: name, //TODO: will be remove at 1.0 version
            ref: this.autoUnmount ? this._getCacheBind(name, name + '__ref', this._saveRef) : name };

        if ('value' in fieldMeta) {
            inputProps[valueName] = fieldMeta.value;
        }

        if (rules) {
            var _loop = function _loop(action) {
                inputProps[action] = function () {
                    _this2._onChangeValidate(name, action);
                    action in props && typeof props[action] === 'function' && props[action].apply(props, arguments);
                    _this2._reRender();
                };
            };

            for (var action in fieldMeta.rulesMap) {
                _loop(action);
            }
        }

        // trigger here maybe replace action, but validator won't be lost, it will still be checked in _onChange
        inputProps[trigger] = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            _this2._onChange.apply(_this2, [name, trigger].concat(args));
            trigger in props && typeof props[trigger] === 'function' && props[trigger].apply(props, args);
            _this2.onChange(name, fieldMeta.value);
            _this2._reRender();
        };

        delete originalProps[defaultValueName];
        delete originalProps[valueName];

        return (0, _objectAssign2['default'])(originalProps, inputProps);
    };

    // 提取rule里面的trigger并且做映射


    Field.prototype._getRulesMap = function _getRulesMap(name, rules, trigger) {
        var rulesMap = {};

        // 根据trigger做校验分组
        if (rules.length) {
            for (var i = 0; i < rules.length; i++) {
                this._validateMap(rulesMap, rules[i], trigger);
            }
        } else if (!Array.isArray(rules)) {
            this._validateMap(rulesMap, rules, trigger);
        }

        return rulesMap;
    };

    // 根据trigger做校验分组


    Field.prototype._validateMap = function _validateMap(rulesMap, rule, defaultTrigger) {

        if (!('trigger' in rule)) {
            rule.trigger = [defaultTrigger];
        }

        if (typeof rule.trigger === 'string') {
            rule.trigger = [rule.trigger];
        }

        for (var i = 0; i < rule.trigger.length; i++) {
            var trigger = rule.trigger[i];

            if (trigger in rulesMap) {
                rulesMap[trigger].push(rule);
            } else {
                rulesMap[trigger] = [rule];
            }
        }
        delete rule.trigger;
    };

    //手动修改触发


    Field.prototype._onChange = function _onChange(name, action) {
        for (var _len2 = arguments.length, others = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            others[_key2 - 2] = arguments[_key2];
        }

        var e = others[0];
        var fieldMeta = this._get(name);

        if (!fieldMeta) {
            return;
        }

        fieldMeta.value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(this, others) : (0, _utils.getValueFromEvent)(e);

        this._resetError(name);
        var rulesMap = fieldMeta.rulesMap;

        if (rulesMap && action in rulesMap) {
            this._validate(rulesMap[action], name, fieldMeta.value);
        }
    };

    //校验事件触发


    Field.prototype._onChangeValidate = function _onChangeValidate(name, action) {
        var fieldMeta = this._get(name);

        var rulesMap = fieldMeta.rulesMap;

        if (action in rulesMap) {
            this._validate(rulesMap[action], name, this.getValue(name));
        }
    };

    Field.prototype._getCacheBind = function _getCacheBind(name, action, fn) {
        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
        if (!cache[action]) {
            cache[action] = fn.bind(this, name);
        }
        return cache[action];
    };

    Field.prototype._saveRef = function _saveRef(name, component) {
        if (!component) {
            // after destroy, delete data
            delete this.fieldsMeta[name];
            return;
        }
        var fieldMeta = this._get(name);
        if (fieldMeta) {
            fieldMeta.ref = component;
        }
    };

    // 会做初始化value兼容检测


    Field.prototype.getValue = function getValue(name) {
        var field = this._get(name);

        if (field) {
            if ('value' in field) {
                return field.value;
            } else if (this.com && this.com.refs) {
                //TODO: removed in 1.0BR
                var ref = this.com.refs[name] || field.ref; // 第一次ref很可能取不到
                if (ref) {

                    var value = (0, _utils.getDefaultValue)(ref, field.valueName);
                    field.value = value;
                    if (typeof value !== 'undefined') {
                        field.initValue = value;
                    }

                    return field.value;
                }
            }
        }

        return undefined;
    };

    Field.prototype.getValues = function getValues(names) {
        var _this3 = this;

        var fields = names || this.getNames();
        var allValues = {};

        fields.forEach(function (f) {
            if (!_this3.parseName) {
                allValues[f] = _this3.getValue(f);
            } else {
                allValues = (0, _utils.setIn)(allValues, f, _this3.getValue(f));
            }
        });
        return allValues;
    };

    Field.prototype.setValue = function setValue(name, value) {
        var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (name in this.fieldsMeta) {
            this.fieldsMeta[name].value = value;
            // this.onChange({[name]:value});     //人为set不应该属于onChange事件
            reRender && this._reRender();
        } else {
            this.fieldsMeta[name] = {
                value: value
            };
        }
    };

    Field.prototype.setValues = function setValues() {
        var _this4 = this;

        var fieldsValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!this.parseName) {
            for (var name in fieldsValue) {
                this.setValue(name, fieldsValue[name], false);
            }
        } else {
            var fields = this.getNames();
            fields.forEach(function (name) {
                var value = (0, _utils.getIn)(fieldsValue, name);
                if (value !== undefined) {
                    _this4.setValue(name, value, false);
                }
            });
        }
        this._reRender();
    };

    Field.prototype.setError = function setError(name, errors) {
        var err = Array.isArray(errors) ? errors : errors ? [errors] : [];
        if (name in this.fieldsMeta) {
            this.fieldsMeta[name].errors = err;
        } else {
            this.fieldsMeta[name] = {
                errors: err
            };
        }

        if (this.fieldsMeta[name].errors && this.fieldsMeta[name].errors.length > 0) {
            this.fieldsMeta[name].state = 'error';
        } else {
            this.fieldsMeta[name].state = '';
        }

        this._reRender();
    };

    Field.prototype.setErrors = function setErrors() {
        var fieldsErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        for (var name in fieldsErrors) {
            this.setError(name, fieldsErrors[name]);
        }
    };

    Field.prototype.getError = function getError(name) {
        var field = this._get(name);
        if (field && field.errors && field.errors.length) {
            return field.errors;
        }

        return null;
    };

    Field.prototype.getErrors = function getErrors(names) {
        var _this5 = this;

        var fields = names || this.getNames();
        var allErrors = {};
        fields.forEach(function (f) {
            allErrors[f] = _this5.getError(f);
        });
        return allErrors;
    };

    Field.prototype.getState = function getState(name) {
        var field = this._get(name);

        if (field && field.state) {
            return field.state;
        }

        return '';
    };

    //TODO: isValidating can be replace by getState, and will be removed at 1.0 version


    Field.prototype.isValidating = function isValidating(name) {
        var field = this._get(name);

        return !!field && !!field.state === 'validating';
    };

    //手动触发校验


    Field.prototype.validate = function validate(ns, opt, cb) {
        var _this6 = this;

        var _getParams = (0, _utils.getParams)(ns, opt, cb),
            names = _getParams.names,
            options = _getParams.options,
            callback = _getParams.callback;

        var fieldNames = names || this.getNames();

        var descriptor = {};
        var values = {};

        var hasRule = false;
        for (var i = 0; i < fieldNames.length; i++) {
            var name = fieldNames[i];
            var fieldMeta = this._get(name);

            if (!fieldMeta) continue;

            if (fieldMeta.rules && (Array.isArray(fieldMeta.rules) && fieldMeta.rules.length || Object.prototype.toString.call(fieldMeta.rules) === '[object Object]')) {
                descriptor[name] = fieldMeta.rules;
                values[name] = this.getValue(name);
                hasRule = true;

                // 清空错误
                fieldMeta.errors = [];
                fieldMeta.state = '';
            }
        }

        if (!hasRule) {
            callback && callback(null, this.getValues(fieldNames));
            return;
        }

        var validate = new _asyncValidator2['default'](descriptor);

        validate.validate(values, options, function (errors) {
            var errorsGroup = null;
            if (errors && errors.length) {
                errorsGroup = {};
                errors.forEach(function (e) {
                    var fieldName = e.field;
                    if (!errorsGroup[fieldName]) {
                        errorsGroup[fieldName] = {
                            errors: []
                        };
                    }
                    var fieldErrors = errorsGroup[fieldName].errors;
                    fieldErrors.push(e.message);
                });
            }
            if (errorsGroup) {
                // 更新每个field里面error信息
                for (var _i in errorsGroup) {
                    var field = _this6._get(_i);
                    field.errors = errorsGroup[_i].errors;
                    field.state = 'error';
                }
            }

            //没有错误的修改状态为成功
            for (var _i2 = 0; _i2 < fieldNames.length; _i2++) {
                var _name = fieldNames[_i2];
                var _fieldMeta = _this6._get(_name);
                if (_fieldMeta.rules && !(errorsGroup && _name in errorsGroup)) {
                    _fieldMeta.state = 'success';
                }
            }

            callback && callback(errorsGroup, _this6.getValues(fieldNames));
            _this6._reRender();

            if (errorsGroup && _this6.scrollToFirstError) {
                var firstNode = void 0;
                var firstTop = void 0;
                for (var _i3 in errorsGroup) {
                    var instance = _this6.com.refs[_i3] || _this6._get(_i3).ref;
                    var node = _reactDom2['default'].findDOMNode(instance);
                    if (!node) {
                        return;
                    }
                    var top = node.getBoundingClientRect().top;
                    if (firstTop === undefined || firstTop > top) {
                        firstTop = top;
                        firstNode = node;
                    }
                }
                if (firstNode && firstNode.scrollIntoView) {
                    firstNode.scrollIntoView();
                }
            }
        });
    };

    /**
     * clear form OR reset to default
     * @param ns
     * @param backToDefault
     */


    Field.prototype.reset = function reset(ns) {
        var _this7 = this;

        var backToDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var changed = false;
        if (typeof ns === 'string') {
            ns = [ns];
        } else if (typeof ns === 'boolean') {
            backToDefault = ns;
            ns = null;
        }

        var names = ns || Object.keys(this.fieldsMeta);
        names.forEach(function (name) {
            var field = _this7._get(name);
            _this7.getValue(name);
            if (field) {
                changed = true;

                if (_this7.deepReset) {
                    //有默认值的情况
                    if (backToDefault && 'initValue' in field) {
                        field.value = field.initValue;
                    } else {
                        field.value = undefined;
                    }
                } else {
                    /* eslint-disable no-lonely-if */
                    if ('initValue' in field) {
                        if (backToDefault === false) {
                            if (typeof field.value === 'string') {
                                field.value = '';
                            } else {
                                field.value = field.initValue;
                            }
                        } else {
                            field.value = field.initValue;
                        }
                    } else {
                        // 没有设置默认值的情况
                        /* eslint-disable no-lonely-if */
                        if (typeof field.value === 'boolean') {
                            field.value = false;
                        } else if (typeof field.value === 'string') {
                            field.value = '';
                        } else {
                            field.value = undefined;
                        }
                    }
                }

                field.state = '';

                // delete field.value;
                delete field.errors;
                delete field.rules;
                delete field.rulesMap;
            }
        });
        if (changed) {
            this._reRender();
        }
    };

    //单个校验


    Field.prototype._validate = function _validate(rule, name, value) {
        var _this8 = this;

        var field = this._get(name);
        field.state = 'validating';

        var validate = new _asyncValidator2['default'](_defineProperty({}, name, rule));

        validate.validate(_defineProperty({}, name, value), function (errors) {

            if (errors && errors.length) {
                field.errors = (0, _utils.getErrorStrs)(errors);
                field.state = 'error';
            } else {
                field.errors = []; //清空错误
                field.state = 'success';
            }

            _this8._reRender();
        });
    };

    Field.prototype._resetError = function _resetError(name) {
        var field = this._get(name);
        delete field.errors; //清空错误
        field.state = '';
    };

    Field.prototype.getNames = function getNames() {
        var fieldsMeta = this.fieldsMeta;
        return fieldsMeta ? Object.keys(fieldsMeta).filter(function () {
            return true;
        }) : [];
    };

    //触发render重绘组件


    Field.prototype._reRender = function _reRender() {
        if (this.com) {
            if (!this.forceUpdate && this.com.setState) {
                this.com.setState({});
            } else if (this.com.forceUpdate) {
                this.com.forceUpdate(); //forceUpdate 对性能有较大的影响，成指数上升
            }
        }
    };

    Field.prototype._get = function _get(name) {
        return name in this.fieldsMeta ? this.fieldsMeta[name] : null;
    };

    Field.prototype._getAll = function _getAll() {
        return this.fieldsMeta;
    };

    Field.prototype.remove = function remove(ns) {
        var _this9 = this;

        if (typeof ns === 'string') {
            ns = [ns];
        }
        var names = ns || Object.keys(this.fieldsMeta);
        names.forEach(function (name) {
            if (name in _this9.fieldsMeta) {
                delete _this9.fieldsMeta[name];
            }
        });
    };

    return Field;
}();

exports['default'] = Field;
module.exports = exports['default'];

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getValueFromEvent = getValueFromEvent;
exports.getDefaultValue = getDefaultValue;
exports.getErrorStrs = getErrorStrs;
exports.isEmptyObject = isEmptyObject;
exports.flattenArray = flattenArray;
exports.mirror = mirror;
exports.hasRules = hasRules;
exports.getParams = getParams;
exports.getValueByStringKey = getValueByStringKey;
exports.setValueByStringKey = setValueByStringKey;
exports.setIn = setIn;
exports.getIn = getIn;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getValueFromEvent(e) {
    // support custom element
    if (!e || !e.target) {
        return e;
    }
    var target = e.target;


    if (target.type === 'checkbox') {
        return target.checked;
    } else if (target.type === 'radio') {
        //兼容radioGroup
        if (target.value) {
            return target.value;
        } else {
            return target.checked;
        }
    }
    return target.value;
}

function getDefaultValue(ref, valueName) {
    if (!ref) {
        return undefined;
    }

    if (ref.nodeType && ref.nodeType === 1) {
        //原生
        if (ref.nodeName === 'INPUT') {
            switch (ref.type) {
                case 'checkbox':
                case 'radio':
                    if ('defaultChecked' in ref) {
                        return ref.defaultChecked;
                    }
                    break;
            }
        }

        if ('defaultValue' in ref) {
            return ref.defaultValue;
        } else if ('value' in ref) {
            //原生的select设置defaultValue，但是ref上面只有value属性
            return ref.value;
        }
    } else {
        var defaultValue = 'default' + valueName.substring(0, 1).toUpperCase() + valueName.substring(1);
        if (defaultValue in ref.props) {
            return ref.props[defaultValue];
        }

        if ('defaultValue' in ref.props) {
            return ref.props.defaultValue;
        } else if ('defaultChecked' in ref.props) {
            return ref.props.defaultChecked;
        }
    }

    return undefined;
}
function getErrorStrs(errors) {
    if (errors) {
        return errors.map(function (e) {
            if ('message' in e) {
                return e.message;
            }
            return e;
        });
    }
    return errors;
}

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

function flattenArray(arr) {
    return Array.prototype.concat.apply([], arr);
}

function mirror(obj) {
    return obj;
}

function hasRules(validate) {
    if (validate) {
        return validate.some(function (item) {
            return !!item.rules && item.rules.length;
        });
    }
    return false;
}

function getParams(ns, opt, cb) {
    var names = typeof ns === 'string' ? [ns] : ns;
    var callback = cb;
    var options = opt;
    if (cb === undefined) {
        if (typeof names === 'function') {
            callback = names;
            options = {};
            names = undefined;
        } else if (Array.isArray(names)) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            } else {
                options = options || {};
            }
        } else {
            callback = options;
            options = names || {};
            names = undefined;
        }
    }
    return {
        names: names,
        callback: callback,
        options: options
    };
}

/**
 * get value from key like 'a.b.c'
 * @param obj
 * @param strKey like a.b.c
 * @returns {*}
 */
function getValueByStringKey(obj) {
    var strKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (!strKey) {
        return obj;
    }

    return strKey.split('.').reduce(function (previousValue, currentValue) {
        return previousValue[currentValue];
    }, obj);
}

/**
 * set value by key like 'a.b.c'
 * @param obj a.b.c = value
 * @param strKey
 * @param value
 */
function setValueByStringKey(obj) {
    var strKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var value = arguments[2];

    if (!strKey) {
        return obj;
    }

    return strKey.split('.').reduce(function (previousValue, currentValue, i, arr) {
        if (!(currentValue in previousValue)) {
            previousValue[currentValue] = {};
        }
        if (i === arr.length - 1) {
            previousValue[currentValue] = value;
        }
        return previousValue[currentValue];
    }, obj);
}

var setInWithPath = function setInWithPath(state, value, path, pathIndex) {
    if (pathIndex >= path.length) {
        return value;
    }

    var first = path[pathIndex];
    var next = setInWithPath(state && state[first], value, path, pathIndex + 1);

    if (!state) {
        var initialized = isNaN(first) ? {} : [];
        initialized[first] = next;
        return initialized;
    }

    if (Array.isArray(state)) {
        var copy = [].concat(state);
        copy[first] = next;
        return copy;
    }

    return _extends({}, state, _defineProperty({}, first, next));
};

function setIn(state, name, value) {
    return setInWithPath(state, value, name.replace(/\[/, '.').replace(/\]/, '').split('.'), 0);
}

function getIn(state, name) {
    if (!state) {
        return state;
    }

    var path = name.replace(/\[/, '.').replace(/\]/, '').split('.');
    var length = path.length;
    if (!length) {
        return undefined;
    }

    var result = state;
    for (var i = 0; i < length && !!result; ++i) {
        result = result[path[i]];
    }

    return result;
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _nextGrid = __webpack_require__(104);

var _nextUtil = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function prefixFn(prefix) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return args.map(function (s) {
        return prefix + 'form-item-' + s;
    }).join(' ');
}

/** Form.Item */
var FormItem = (_temp = _class = function (_React$Component) {
    _inherits(FormItem, _React$Component);

    function FormItem() {
        _classCallCheck(this, FormItem);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    FormItem.prototype._getLayoutClass = function _getLayoutClass(colDef) {
        var _classNames;

        if (!colDef) {
            return '';
        }

        var span = colDef.span,
            offset = colDef.offset,
            fixedSpan = colDef.fixedSpan;

        /*eslint-enable */

        var prefix = this.context.prefix || this.props.prefix;

        return (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'col-' + span, span), _defineProperty(_classNames, prefix + 'col-offset-' + offset, offset), _defineProperty(_classNames, prefix + 'col-fixed-' + fixedSpan, fixedSpan), _classNames));
    };

    FormItem.prototype.getHelpMsg = function getHelpMsg() {
        var context = this.context;
        var props = this.props;
        if (props.help === undefined && context.field) {
            return this.getId() ? context.field.getError(this.getId()) : '';
        }

        return props.help;
    };

    FormItem.prototype.getOnlyControl = function getOnlyControl() {
        var children = _react2['default'].Children.toArray(this.props.children);
        var child = children.filter(function (c) {
            return c.props && 'data-meta' in c.props;
        })[0];
        return child !== undefined ? child : null;
    };

    FormItem.prototype.getChildProp = function getChildProp(prop) {
        var child = this.getOnlyControl();
        return child && child.props && child.props[prop];
    };

    FormItem.prototype.getId = function getId() {
        return this.getChildProp('id');
    };

    FormItem.prototype.renderHelp = function renderHelp() {
        var prefix = this.context.prefix || this.props.prefix;
        var help = this.getHelpMsg();
        return _react2['default'].createElement(
            'div',
            { className: help ? prefixFn(prefix, 'explain') : '', key: 'help' },
            help
        );
    };

    FormItem.prototype.getValidateStatus = function getValidateStatus() {
        var getState = this.context.field.getState;

        var field = this.getId();
        if (!field) {
            return '';
        }
        var state = getState(field);

        if (state === 'validating') {
            return 'loading';
        } else {
            return state;
        }
    };

    FormItem.prototype.renderValidateWrapper = function renderValidateWrapper(validateStatus, help, extra) {
        var _cls;

        var props = this.props;
        var prefix = this.context.prefix || this.props.prefix;

        var cls = (_cls = {}, _defineProperty(_cls, this._getLayoutClass(props.wrapperCol), this.context.labelAlign !== 'top'), _defineProperty(_cls, prefix + 'form-item-control', true), _cls);

        var childrenProps = { size: this.props.size || this.context.size };
        if (props.hasFeedback) {
            if (validateStatus === 'success' || validateStatus === 'loading') {
                childrenProps.state = validateStatus;
            }
        }

        var children = _react2['default'].Children.map(props.children, function (child) {
            if (child && typeof child.type === 'function') {
                return _react2['default'].cloneElement(child, childrenProps);
            }
            return child;
        });

        return _react2['default'].createElement(
            'div',
            { className: (0, _classnames2['default'])(cls), key: 'item' },
            children,
            ' ',
            help,
            ' ',
            extra
        );
    };

    FormItem.prototype.getRules = function getRules(name) {
        return this.context.field && this.context.field._get(name) && this.context.field._get(name).rules;
    };

    FormItem.prototype.isRequired = function isRequired() {
        if (this.context.field) {
            var rules = this.getRules(this.getId()) || null;
            if (!rules) {
                return false;
            }
            if (rules.required) {
                return true;
            } else {
                return rules.some(function (rule) {
                    return rule.required;
                });
            }
        }
        return false;
    };

    FormItem.prototype.renderLabel = function renderLabel() {
        var _classNames2;

        var props = this.props;
        var prefix = this.context.prefix || this.props.prefix;
        var labelCol = props.labelCol;
        var required = props.required === undefined ? this.isRequired() : props.required;

        var className = (0, _classnames2['default'])((_classNames2 = {}, _defineProperty(_classNames2, this._getLayoutClass(labelCol), true), _defineProperty(_classNames2, prefix + 'form-item-label', true), _classNames2));

        return props.label !== undefined ? _react2['default'].createElement(
            'label',
            { htmlFor: props.id || this.getId(), required: required, className: className, key: 'label' },
            props.label
        ) : null;
    };

    FormItem.prototype.renderChildren = function renderChildren(validateStatus) {
        return [this.renderLabel(), this.renderValidateWrapper(validateStatus, this.context.labelAlign !== 'inset' && this.props.labelAlign !== 'inset' ? this.renderHelp() : null, this.props.extra)];
    };

    FormItem.prototype.renderFormItem = function renderFormItem(validateStatus, children) {
        var _classNames3;

        var _props = this.props,
            className = _props.className,
            labelAlign = _props.labelAlign,
            style = _props.style,
            others = _objectWithoutProperties(_props, ['className', 'labelAlign', 'style']);

        var prefix = this.context.prefix || this.props.prefix;

        var itemClassName = (0, _classnames2['default'])((_classNames3 = {}, _defineProperty(_classNames3, prefix + 'form-item', true), _defineProperty(_classNames3, prefix + 'row', this.context.direction === 'ver' && this.context.labelAlign === 'left'), _defineProperty(_classNames3, 'has-success', validateStatus === 'success'), _defineProperty(_classNames3, 'has-error', validateStatus === 'error'), _defineProperty(_classNames3, '' + className, !!className), _classNames3));

        if (this.context.labelAlign === 'inset' || labelAlign === 'inset') {
            return _react2['default'].createElement(
                'div',
                { className: itemClassName, style: style },
                _react2['default'].createElement(
                    _nextGrid.Row,
                    { className: prefix + 'form-item-inset' },
                    children
                ),
                this.renderHelp()
            );
        }

        return _react2['default'].createElement(
            'div',
            _extends({ className: itemClassName, style: style }, (0, _nextUtil.pickAttrs)(others)),
            children
        );
    };

    FormItem.prototype.render = function render() {

        var validateStatus = this.props.validateStatus === undefined && this.context.field ? this.getValidateStatus() : this.props.validateStatus;

        var children = this.renderChildren(validateStatus);
        return this.renderFormItem(validateStatus, children);
    };

    return FormItem;
}(_react2['default'].Component), _class.propTypes = {
    prefix: _react2['default'].PropTypes.string,
    /**
     * label 标签的文本
     */
    label: _react2['default'].PropTypes.node,
    /**
     * label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效
     */
    labelCol: _react2['default'].PropTypes.object,
    /**
     * 提示信息，如不设置，则会根据校验规则自动生成. 如果设置会受控（ps: 可以利用这点自定义错误位置,详细看demo自定义错误)
     */
    help: _react2['default'].PropTypes.node,
    /**
     * 校验状态，如不设置，则会根据校验规则自动生成
     */
    validateStatus: _react2['default'].PropTypes.oneOf(['', 'success', 'error', 'loading']),
    /**
     * 配合 validateStatus 属性使用，是否展示校验状态图标, 目前只有Input支持
     */
    hasFeedback: _react2['default'].PropTypes.bool,
    /**
     * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
     */
    wrapperCol: _react2['default'].PropTypes.object,
    /**
     * 扩展class
     */
    className: _react2['default'].PropTypes.string,
    style: _react2['default'].PropTypes.object,
    id: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node,
    /**
     * 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面
     */
    extra: _react2['default'].PropTypes.node,
    /**
     * 单个FormItem的size自定义，优先级高于Form的size, 并且当组件与 FormItem 一起使用时，组件自身设置 size 属性无效。
     */
    size: _react2['default'].PropTypes.oneOf(['', 'large', 'small', 'medium']),
    labelAlign: _react2['default'].PropTypes.oneOf(['', 'top', 'left', 'inset'])
}, _class.defaultProps = {
    hasFeedback: false,
    prefix: 'next-'
}, _class.contextTypes = {
    field: _react2['default'].PropTypes.object,
    direction: _react2['default'].PropTypes.oneOf(['hoz', 'ver']),
    labelAlign: _react2['default'].PropTypes.oneOf(['top', 'left', 'inset']),
    prefix: _react2['default'].PropTypes.string,
    size: _react2['default'].PropTypes.oneOf(['small', 'medium', 'large'])
}, _temp);
FormItem.displayName = 'FormItem';
exports['default'] = FormItem;
module.exports = exports['default'];

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _nextUtil = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/** Form */
var Form = (_temp = _class = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Form.prototype.getChildContext = function getChildContext() {
        return {
            field: this.props.field,
            direction: this.props.direction,
            labelAlign: this.props.labelAlign,
            size: this.props.size
        };
    };

    Form.prototype.render = function render() {
        var _classNames;

        /*eslint-disable */
        var _props = this.props,
            className = _props.className,
            field = _props.field,
            direction = _props.direction,
            size = _props.size,
            labelAlign = _props.labelAlign,
            labelTextAlign = _props.labelTextAlign,
            others = _objectWithoutProperties(_props, ['className', 'field', 'direction', 'size', 'labelAlign', 'labelTextAlign']);

        /*eslint-enable */


        var prefix = this.context.prefix || this.props.prefix;

        // inset 模式统一左对齐
        var labelAlignReal = labelAlign === 'inset' ? 'left' : labelAlign;

        var formClassName = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefix + 'form', true), _defineProperty(_classNames, prefix + 'form-' + labelAlignReal, labelAlignReal), _defineProperty(_classNames, prefix + 'form-label-' + labelTextAlign, !!labelTextAlign), _defineProperty(_classNames, prefix + 'form-hoz', direction === 'hoz'), _defineProperty(_classNames, '' + direction, true), _defineProperty(_classNames, prefix + 'form-' + size, size), _defineProperty(_classNames, className, !!className), _classNames));

        return _react2['default'].createElement(
            'form',
            _extends({}, (0, _nextUtil.pickAttrs)(others), { className: formClassName }),
            this.props.children
        );
    };

    return Form;
}(_react2['default'].Component), _class.propTypes = {
    prefix: _react2['default'].PropTypes.string,
    /**
     * 扩展class
     */
    className: _react2['default'].PropTypes.string,
    /**
     * 表单展示方向
     */
    direction: _react2['default'].PropTypes.oneOf(['hoz', 'ver']),
    /**
     * 单个FormItem的size自定义，优先级高于Form的size, 并且当组件与 FormItem 一起使用时，组件自身设置 size 属性无效。
     */
    size: _react2['default'].PropTypes.oneOf(['large', 'small', 'medium']),
    /**
     * 标签的位置
     */
    labelAlign: _react2['default'].PropTypes.oneOf(['top', 'left', 'inset']),
    /**
     * 标签的左右对齐方式
     */
    labelTextAlign: _react2['default'].PropTypes.oneOf(['', 'left', 'right']),
    /**
     * 经 `new Field(this)` 初始化后，直接传给 Form 即可 用到表单校验则不可忽略此项
     */
    field: _react2['default'].PropTypes.any,
    /**
     * form内有 `htmlType="submit"` 的元素的时候会触发
     */
    onSubmit: _react2['default'].PropTypes.func,
    children: _react2['default'].PropTypes.any
}, _class.defaultProps = {
    prefix: 'next-',
    onSubmit: function onSubmit(e) {
        e.preventDefault();
    },

    size: 'medium',
    direction: 'ver',
    labelAlign: 'left'
}, _class.contextTypes = {
    prefix: _react2['default'].PropTypes.string
}, _class.childContextTypes = {
    field: _react2['default'].PropTypes.object,
    direction: _react2['default'].PropTypes.oneOf(['hoz', 'ver']),
    labelAlign: _react2['default'].PropTypes.oneOf(['top', 'left', 'inset']),
    size: _react2['default'].PropTypes.oneOf(['large', 'small', 'medium'])
}, _temp);
Form.displayName = 'Form';
exports['default'] = Form;
module.exports = exports['default'];

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = __webpack_require__(223);

var _form2 = _interopRequireDefault(_form);

var _formItem = __webpack_require__(222);

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_form2['default'].Item = _formItem2['default'];

exports['default'] = _form2['default'];
module.exports = exports['default'];

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _nextUtil = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var breakPoints = ['xxs', 'xs', 's', 'm', 'l', 'xl'];

var Col = (_temp = _class = function (_Component) {
    _inherits(Col, _Component);

    function Col() {
        _classCallCheck(this, Col);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Col.prototype.render = function render() {
        var _this2 = this,
            _extends2;

        var prefix = this.context.prefix || this.props.prefix;
        /* eslint-disable no-unused-vars */

        var _props = this.props,
            propsPrefix = _props.prefix,
            span = _props.span,
            offset = _props.offset,
            fixedSpan = _props.fixedSpan,
            offsetFixed = _props.offsetFixed,
            _props$fixedOffset = _props.fixedOffset,
            fixedOffset = _props$fixedOffset === undefined ? offsetFixed : _props$fixedOffset,
            hidden = _props.hidden,
            align = _props.align,
            xxs = _props.xxs,
            xs = _props.xs,
            s = _props.s,
            m = _props.m,
            l = _props.l,
            xl = _props.xl,
            className = _props.className,
            children = _props.children,
            others = _objectWithoutProperties(_props, ['prefix', 'span', 'offset', 'fixedSpan', 'offsetFixed', 'fixedOffset', 'hidden', 'align', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'className', 'children']);
        /* eslint-enable no-unused-vars */

        offsetFixed && _nextUtil.log.deprecated('offsetFixed', 'fixedOffset', 'Grid.Col');

        var pointClassObj = breakPoints.reduce(function (ret, point) {
            var pointProps = {};
            if (_typeof(_this2.props[point]) === 'object') {
                pointProps = _this2.props[point];
            } else {
                pointProps.span = _this2.props[point];
            }

            ret[prefix + 'col-' + point + '-' + pointProps.span] = !!pointProps.span;
            ret[prefix + 'col-' + point + '-offset-' + pointProps.offset] = !!pointProps.offset;

            return ret;
        }, {});

        var hiddenClassObj = void 0;
        if (hidden === true) {
            hiddenClassObj = _defineProperty({}, prefix + 'col-hidden', true);
        } else if (typeof hidden === 'string') {
            hiddenClassObj = _defineProperty({}, prefix + 'col-' + hidden + '-hidden', !!hidden);
        } else if (Array.isArray(hidden)) {
            hiddenClassObj = hidden.reduce(function (ret, point) {
                ret[prefix + 'col-' + point + '-hidden'] = !!point;
                return ret;
            }, {});
        }

        var classes = (0, _classnames2['default'])(_extends((_extends2 = {}, _defineProperty(_extends2, prefix + 'col', true), _defineProperty(_extends2, prefix + 'col-' + span, !!span), _defineProperty(_extends2, prefix + 'col-fixed-' + fixedSpan, !!fixedSpan), _defineProperty(_extends2, prefix + 'col-offset-' + offset, !!offset), _defineProperty(_extends2, prefix + 'col-offset-fixed-' + fixedOffset, !!fixedOffset), _defineProperty(_extends2, prefix + 'col-' + align, !!align), _extends2), pointClassObj, hiddenClassObj, _defineProperty({}, className, className)));

        return _react2['default'].createElement(
            'div',
            _extends({ className: classes }, others),
            children
        );
    };

    return Col;
}(_react.Component), _class.contextTypes = {
    prefix: _react.PropTypes.string
}, _class.propTypes = {
    prefix: _react.PropTypes.string,
    span: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    fixedSpan: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    offset: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    // TODO: deprecated in 1.0 release
    offsetFixed: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    fixedOffset: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    xxs: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.object]),
    xs: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.object]),
    s: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.object]),
    m: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.object]),
    l: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.object]),
    xl: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.object]),
    hidden: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.array]),
    align: _react.PropTypes.oneOf(['top', 'center', 'bottom', 'baseline', 'stretch']),
    className: _react.PropTypes.string,
    children: _react.PropTypes.any
}, _class.defaultProps = {
    prefix: 'next-'
}, _temp);
Col.displayName = 'Col';
exports['default'] = Col;
module.exports = exports['default'];

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nextDom = __webpack_require__(6);

var _utils = __webpack_require__(96);

/* istanbul ignore next */
(function () {
    if (_utils.ieVersion && _utils.ieVersion <= 8 && window && document) {
        _nextDom.events.on(window, 'resize', hackMediaQuery);
        hackMediaQuery();
    }

    function hackMediaQuery() {
        var replace = '';
        var together = [];

        var bps = [344, 504, 752, 1022, 1232, 1532];
        var innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        for (var i = 0; i < bps.length; i++) {
            var current = bps[i];
            var next = bps[i + 1];
            if (innerWidth >= current && (!next || innerWidth < next)) {
                replace = 'next-w' + current;
                together = bps.slice(0, i + 1).map(function (bp) {
                    return 'next-w' + bp + '-together';
                });
                break;
            }
        }

        var classNames = document.body.className;
        classNames.split(' ').forEach(function (className) {
            if (/next-w\d+/.test(className)) {
                _nextDom.classList.removeClass(document.body, className);
            }
        });

        _nextDom.classList.addClass(document.body, replace);
        together.forEach(function (className) {
            return _nextDom.classList.addClass(document.body, className);
        });
    }
})();

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(96);

__webpack_require__(226);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Row = (_temp = _class = function (_Component) {
    _inherits(Row, _Component);

    function Row() {
        _classCallCheck(this, Row);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Row.prototype.render = function render() {
        var _extends3;

        var prefix = this.context.prefix || this.props.prefix;
        /* eslint-disable no-unused-vars */

        var _props = this.props,
            propsPrefix = _props.prefix,
            type = _props.type,
            fixedWidth = _props.fixedWidth,
            justify = _props.justify,
            align = _props.align,
            className = _props.className,
            children = _props.children,
            others = _objectWithoutProperties(_props, ['prefix', 'type', 'fixedWidth', 'justify', 'align', 'className', 'children']);
        /* eslint-enable no-unused-vars */

        var typeClassesObj = {};
        if (type) {
            var types = Array.isArray(type) ? type : [type];
            typeClassesObj = types.reduce(function (ret, type) {
                if (type) {
                    ret[prefix + 'row-' + type] = true;
                }
                return ret;
            }, {});
        }

        var classes = (0, _classnames2['default'])(_extends(_defineProperty({}, prefix + 'row', true), typeClassesObj, (_extends3 = {}, _defineProperty(_extends3, prefix + 'row-fixed-' + fixedWidth, !!fixedWidth), _defineProperty(_extends3, prefix + 'row-justify-' + justify, !!justify), _defineProperty(_extends3, prefix + 'row-align-' + align, !!align), _defineProperty(_extends3, prefix + 'row-ie8', _utils.ieVersion && _utils.ieVersion <= 8), _defineProperty(_extends3, className, !!className), _extends3)));

        return _react2['default'].createElement(
            'div',
            _extends({ className: classes }, others),
            children
        );
    };

    return Row;
}(_react.Component), _class.contextTypes = {
    prefix: _react.PropTypes.string
}, _class.propTypes = {
    prefix: _react.PropTypes.string,
    // TODO 1.x default layout -> fluid
    // 'fluid', 'fixed', 'wrap', 'no-wrap', 'no-padding', 'across'
    type: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string]),
    fixedWidth: _react.PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl']),
    align: _react.PropTypes.oneOf(['top', 'center', 'bottom', 'baseline', 'stretch']),
    // TODO 1.x start -> left / end -> right
    justify: _react.PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
    className: _react.PropTypes.string,
    children: _react.PropTypes.any
}, _class.defaultProps = {
    prefix: 'next-'
}, _temp);
Row.displayName = 'Row';
exports['default'] = Row;
module.exports = exports['default'];

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable */



/**
 * Recursive cloning array.
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function deepCloneArray(arr) {
	var clone = [];
	arr.forEach(function (item, index) {
		if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && item !== null) {
			if (Array.isArray(item)) {
				clone[index] = deepCloneArray(item);
			} else {
				clone[index] = deepExtend({}, item);
			}
		} else {
			clone[index] = item;
		}
	});
	return clone;
}

/**
 * Extening object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = function deepExtend() /*obj_1, [obj_2], [obj_N]*/{
	if (arguments.length < 1 || _typeof(arguments[0]) !== 'object') {
		return false;
	}

	if (arguments.length < 2) {
		return arguments[0];
	}

	var target = arguments[0];

	// convert arguments to array and cut off target object
	var args = Array.prototype.slice.call(arguments, 1);

	var val, src, clone;

	args.forEach(function (obj) {
		// skip argument if isn't an object, is null, or is an array
		if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null || Array.isArray(obj)) {
			return;
		}

		Object.keys(obj).forEach(function (key) {
			src = target[key]; // source value
			val = obj[key]; // new value

			// recursion prevention
			if (val === target) {
				return;

				/**
     * if new value isn't object then just overwrite by new value
     * instead of extending.
     */
			} else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object' || val === null) {
				target[key] = val;
				return;

				// just clone arrays (and recursive clone objects inside)
			} else if (Array.isArray(val)) {
				target[key] = deepCloneArray(val);
				return;
			} else if ((typeof src === 'undefined' ? 'undefined' : _typeof(src)) !== 'object' || src === null || Array.isArray(src)) {
				target[key] = deepExtend({}, val);
				return;

				// source value and new value is objects both, extending...
			} else {
				target[key] = deepExtend(src, val);
				return;
			}
		});
	});

	return target;
};

exports['default'] = deepExtend;
module.exports = exports['default'];

/***/ }),
/* 229 */,
/* 230 */,
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _feedback = __webpack_require__(138);

var _feedback2 = _interopRequireDefault(_feedback);

var _toast = __webpack_require__(241);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_feedback2['default'].toast = _toast2['default'];

exports['default'] = _feedback2['default'];
module.exports = exports['default'];

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(242);

/***/ }),
/* 233 */,
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reflux__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CompanyActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BusinessActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BaseProductActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareActions; });
/**
 * Created by Administrator on 2017/3/20.
 */

var CompanyActions = __WEBPACK_IMPORTED_MODULE_0_reflux___default.a.createActions({
    //获取地址列表
    getCompanyInfo: {},
    //保存
    save: {},
    //域名是否推广
    getDomain: {}

});

var BusinessActions = __WEBPACK_IMPORTED_MODULE_0_reflux___default.a.createActions({
    //获取业务列表
    get: {},
    //删除
    delete: {},
    //批量删除
    deleteAll: {},
    //选择记录
    selectRows: {},
    //添加
    add: {},
    //输入
    input: {},
    //编辑
    edit: {},
    //保存编辑
    save: {},
    //取消编辑
    cancel: {},
    //editor prop to state
    propsToState: {}

});

var ProductActions = __WEBPACK_IMPORTED_MODULE_0_reflux___default.a.createActions({
    //获取推广产品列表
    get: {},
    //删除
    delete: {},
    //批量删除
    deleteAll: {},
    //选择记录
    selectRows: {},
    //分页
    changePage: {},
    //选择页面大小
    setPageSize: {},
    //获取所有业务
    getBusinesses: {},
    //选择查询业务
    selectBusiness: {},
    //添加
    add: {},
    //获取所有产品
    baseProductsGet: {},
    //输入
    input: {},
    //查询产品
    search: {},
    //保存编辑
    save: {},
    //取消编辑
    cancel: {},
    //下载商品
    download: {},
    //close downloader
    closeDownloader: {}
});

var BaseProductActions = __WEBPACK_IMPORTED_MODULE_0_reflux___default.a.createActions({
    //获取推广产品列表
    get: {},
    //选择记录
    selectRows: {},
    //分页
    changePage: {},
    //选择页面大小
    setPageSize: {},
    //输入
    input: {},
    //查询产品
    search: {},
    //保存编辑
    save: {},
    //取消编辑
    cancel: {},
    //获取所有业务
    getBusinesses: {},
    //选择业务
    selectBusiness: {}
});

var ShareActions = __WEBPACK_IMPORTED_MODULE_0_reflux___default.a.createActions({
    //获取推广产品列表
    getProducts: {},

    //选择记录
    selectRows: {},
    //分页
    changePage: {},
    //选择页面大小
    setPageSize: {},

    //输入
    input: {},
    //查询产品
    search: {},
    //下载商品
    download: {},
    //close downloader
    closeDownloader: {},
    //获取所有分享网站
    getSites: {},
    //分享面板
    openSharer: {},
    //关闭面板
    closeSharer: {},
    //分享
    share: {}
});



/***/ }),
/* 235 */,
/* 236 */,
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class, _temp;

var _nextButton = __webpack_require__(40);

var _nextButton2 = _interopRequireDefault(_nextButton);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nextLocaleProvider = __webpack_require__(19);

var _nextLocaleProvider2 = _interopRequireDefault(_nextLocaleProvider);

var _base = __webpack_require__(74);

var _base2 = _interopRequireDefault(_base);

var _content = __webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PropTypes = _react2['default'].PropTypes,
    noop = function noop() {};

var Dialog = (_temp = _class = function (_Component) {
    _inherits(Dialog, _Component);

    function Dialog() {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Dialog.prototype.render = function render() {
        /* eslint-disable no-unused-vars, react/prop-types */
        var _props = this.props,
            title = _props.title,
            children = _props.children,
            footer = _props.footer,
            onOk = _props.onOk,
            onCancel = _props.onCancel,
            locale = _props.locale,
            others = _objectWithoutProperties(_props, ['title', 'children', 'footer', 'onOk', 'onCancel', 'locale']),
            prefix = this.context.prefix || this.props.prefix,
            buttons = _react2['default'].createElement(
            'span',
            null,
            _react2['default'].createElement(
                _nextButton2['default'],
                { type: 'primary', onClick: onOk },
                locale.ok
            ),
            _react2['default'].createElement(
                _nextButton2['default'],
                { onClick: onCancel },
                locale.cancel
            )
        ),
            headerNode = title ? _react2['default'].createElement(
            _content.Header,
            null,
            title
        ) : null,
            footerNode = footer === false ? null : _react2['default'].createElement(
            _content.Footer,
            null,
            footer ? footer : buttons
        );

        return _react2['default'].createElement(
            _base2['default'],
            others,
            headerNode,
            _react2['default'].createElement(
                _content.Body,
                null,
                children
            ),
            footerNode
        );
    };

    return Dialog;
}(_react.Component), _class.propTypes = {
    prefix: PropTypes.string,
    title: PropTypes.any,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    locale: PropTypes.object
}, _class.defaultProps = {
    onOk: noop,
    onCancel: noop
}, _class.contextTypes = {
    prefix: PropTypes.string
}, _temp);
Dialog.displayName = 'Dialog';
exports['default'] = (0, _nextLocaleProvider2['default'])(Dialog);
module.exports = exports['default'];

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialog = __webpack_require__(237);

var _dialog2 = _interopRequireDefault(_dialog);

var _base = __webpack_require__(74);

var _base2 = _interopRequireDefault(_base);

var _content = __webpack_require__(75);

var _inner = __webpack_require__(136);

var _inner2 = _interopRequireDefault(_inner);

var _util = __webpack_require__(239);

var _index = __webpack_require__(137);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_dialog2['default'].Header = _content.Header;
_dialog2['default'].Body = _content.Body;
_dialog2['default'].Footer = _content.Footer;
_dialog2['default'].alert = _util.alert;
_dialog2['default'].confirm = _util.confirm;
_dialog2['default'].Inner = _inner2['default'];
_dialog2['default'].Base = _base2['default'];
_dialog2['default'].LOCALE = _index2['default'];

exports['default'] = _dialog2['default'];
module.exports = exports['default'];

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nextButton = __webpack_require__(40);

var _nextButton2 = _interopRequireDefault(_nextButton);

var _nextFeedback = __webpack_require__(231);

var _nextFeedback2 = _interopRequireDefault(_nextFeedback);

var _nextLocaleProvider = __webpack_require__(19);

var _nextLocaleProvider2 = _interopRequireDefault(_nextLocaleProvider);

var _base = __webpack_require__(74);

var _base2 = _interopRequireDefault(_base);

var _content = __webpack_require__(75);

var _index = __webpack_require__(137);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var wrapper = function wrapper(fn, callback) {
    return function () {
        var res = void 0;
        if (typeof fn === 'function') {
            res = fn();
        }
        if (res && res.then) {
            res.then(function (result) {
                if (result !== false) {
                    callback();
                }
            });
        } else if (res !== false) {
            callback();
        }
    };
},
    feedbackMaps = {
    alert: 'prompt',
    confirm: 'help'
};

var Modal = (_temp = _class = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            visible: false
        };
        _this.close = _this.close.bind(_this);
        return _this;
    }

    /* eslint-disable react/no-did-mount-set-state */
    // preact compat
    // see https://github.com/developit/preact/issues/556
    // 我们通过触发componentWillReceiveProps绕过这个问题


    Modal.prototype.componentDidMount = function componentDidMount() {
        this.setState({
            visible: true
        });
    };

    Modal.prototype.render = function render() {
        /* eslint-disable react/prop-types */
        var _props = this.props,
            onOk = _props.onOk,
            onCancel = _props.onCancel,
            afterClose = _props.afterClose,
            className = _props.className,
            title = _props.title,
            type = _props.type,
            content = _props.content,
            locale = _props.locale,
            onClose = _props.onClose,
            needWrapper = _props.needWrapper,
            footer = _props.footer,
            others = _objectWithoutProperties(_props, ['onOk', 'onCancel', 'afterClose', 'className', 'title', 'type', 'content', 'locale', 'onClose', 'needWrapper', 'footer']);

        locale = locale || {
            ok: 'Ok',
            cancel: 'Cancel'
        };

        var Ok = wrapper(onOk, this.close),
            Cancel = wrapper(onCancel, this.close),
            Close = wrapper(onClose, this.close);

        return _react2['default'].createElement(
            _base2['default'],
            _extends({ onClose: Close,
                visible: this.state.visible,
                className: className,
                afterClose: afterClose,
                role: 'alertdialog'
            }, others),
            _react2['default'].createElement(
                _content.Header,
                null,
                title
            ),
            _react2['default'].createElement(
                _content.Body,
                null,
                _react2['default'].createElement(
                    'div',
                    { className: 'next-dialog-' + type },
                    needWrapper ? _react2['default'].createElement(_nextFeedback2['default'], { type: feedbackMaps[type], size: 'large', shape: 'addon', title: content }) : content
                )
            ),
            _react2['default'].createElement(
                _content.Footer,
                null,
                footer ? footer : [_react2['default'].createElement(
                    _nextButton2['default'],
                    { type: 'primary', onClick: Ok, key: 'ok' },
                    locale.ok
                ), type === 'confirm' ? _react2['default'].createElement(
                    _nextButton2['default'],
                    { type: 'normal', onClick: Cancel, key: 'cancel' },
                    locale.cancel
                ) : null]
            )
        );
    };

    Modal.prototype.close = function close() {
        if (this.state.visible) {
            this.setState({
                visible: false
            });
        }
    };

    return Modal;
}(_react2['default'].Component), _class.propTypes = {
    needWrapper: _react.PropTypes.bool
}, _class.defaultProps = {
    needWrapper: true
}, _temp);
Modal.displayName = 'Modal';


var LocaleModal = (0, _nextLocaleProvider2['default'])(Modal);
LocaleModal.LOCALE = _index2['default'];

var render = function render(config) {
    var container = document.createElement('div');
    var unMount = function unMount() {
        if (config && config.afterClose && typeof config.afterClose === 'function') {
            config.afterClose();
        }
        _reactDom2['default'].unmountComponentAtNode(container);
        container.parentNode.removeChild(container);
    };
    var instance = void 0;
    document.body.appendChild(container);
    _reactDom2['default'].render(_react2['default'].createElement(LocaleModal, _extends({}, config, { afterClose: unMount })), container, function () {
        instance = this;
    });
    return {
        hide: function hide() {
            var inc = instance && instance.getInstance();
            inc && inc.close();
        }
    };
};

Object.keys(feedbackMaps).forEach(function (method) {
    exports[method] = function (config) {
        config = config || {};
        config.type = method;
        return render(config);
    };
});

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nextOverlay = __webpack_require__(9);

var _nextOverlay2 = _interopRequireDefault(_nextOverlay);

var _feedback = __webpack_require__(138);

var _feedback2 = _interopRequireDefault(_feedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Mask = (_temp2 = _class = function (_React$Component) {
    _inherits(Mask, _React$Component);

    function Mask() {
        var _temp, _this, _ret;

        _classCallCheck(this, Mask);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            visible: true
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Mask.prototype.render = function render() {
        var prefix = this.context.prefix || this.props.prefix;
        /* eslint-disable no-unused-vars */

        var _props = this.props,
            propsPrefix = _props.prefix,
            type = _props.type,
            content = _props.content,
            align = _props.align,
            offset = _props.offset,
            hasMask = _props.hasMask,
            afterClose = _props.afterClose,
            animation = _props.animation,
            others = _objectWithoutProperties(_props, ['prefix', 'type', 'content', 'align', 'offset', 'hasMask', 'afterClose', 'animation']);
        /* eslint-enable */


        var visible = this.state.visible;

        return _react2['default'].createElement(
            _nextOverlay2['default'],
            { animation: animation, visible: visible, align: align, offset: offset, hasMask: hasMask, afterClose: afterClose },
            _react2['default'].createElement(_feedback2['default'], _extends({}, others, { prefix: prefix, type: type, shape: 'toast',
                title: content, className: prefix + 'feedback-wrapper' }))
        );
    };

    return Mask;
}(_react2['default'].Component), _class.contextTypes = {
    prefix: _react2['default'].PropTypes.string
}, _class.propTypes = {
    prefix: _react2['default'].PropTypes.string,
    type: _react2['default'].PropTypes.string,
    content: _react2['default'].PropTypes.node,
    align: _react2['default'].PropTypes.string,
    offset: _react2['default'].PropTypes.array,
    hasMask: _react2['default'].PropTypes.bool,
    afterClose: _react2['default'].PropTypes.func,
    animation: _react2['default'].PropTypes.object
}, _class.defaultProps = {
    prefix: 'next-',
    align: 'cc cc',
    offset: [0, 0],
    hasMask: false,
    animation: {
        'in': 'pulse',
        out: 'zoomOut'
    }
}, _temp2);
Mask.displayName = 'Mask';
exports['default'] = Mask;


Mask.create = function (props) {
    /* eslint-disable no-unused-vars */
    var duration = props.duration,
        afterClose = props.afterClose,
        others = _objectWithoutProperties(props, ['duration', 'afterClose']);
    /* eslint-enable no-unused-vars */

    var div = document.createElement('div');
    document.body.appendChild(div);

    var closeChain = function closeChain() {
        _reactDom2['default'].unmountComponentAtNode(div);
        document.body.removeChild(div);

        afterClose && afterClose();
    };

    var mask = void 0;
    _reactDom2['default'].render(_react2['default'].createElement(Mask, _extends({ afterClose: closeChain }, others)), div, function () {
        mask = this;
    });

    return {
        component: mask,
        destroy: function destroy() {
            return mask && mask.setState({
                visible: false
            });
        }
    };
};
module.exports = exports['default'];

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _mask = __webpack_require__(240);

var _mask2 = _interopRequireDefault(_mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var instance = void 0;
var hidingToast = void 0;

function handleConfig(config, type) {
    var newConfig = {};

    if (typeof config === 'string' || (0, _react.isValidElement)(config)) {
        newConfig.content = config;
    } else if (isObject(config)) {
        newConfig = _extends({}, config);
    }
    if (typeof newConfig.duration !== 'number') {
        newConfig.duration = 3000;
    }
    if (type) {
        newConfig.type = type;
    }

    return newConfig;
}

function isObject(obj) {
    return {}.toString.call(obj) === '[object Object]';
}

function open(config, type) {
    close();
    config = handleConfig(config, type);
    instance = _mask2['default'].create(config);
    if (config.duration > 0) {
        hidingToast && clearTimeout(hidingToast);
        hidingToast = setTimeout(close, config.duration);
    }
}

function close() {
    instance && instance.destroy();
    instance = null;
}

var toast = {
    show: function show(config) {
        open(config);
    },
    hide: function hide() {
        close();
    }
};
var types = ['success', 'prompt', 'error', 'help', 'loading'];
types.forEach(function (type) {
    toast[type] = function (config) {
        return open(config, type);
    };
});

exports['default'] = toast;
module.exports = exports['default'];

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notice = __webpack_require__(243);

var _notice2 = _interopRequireDefault(_notice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _notice2['default'];
module.exports = exports['default'];

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _nextIcon = __webpack_require__(3);

var _nextIcon2 = _interopRequireDefault(_nextIcon);

var _nextAnimate = __webpack_require__(26);

var _nextAnimate2 = _interopRequireDefault(_nextAnimate);

var _nextUtil = __webpack_require__(2);

var _nextDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var noop = function noop() {};

var typesMap = {
    prompt: 'prompt',
    warning: 'warning',
    system: 'warning'
};

var oneTransitionEnd = function oneTransitionEnd(node, done) {
    var handler = function handler(e) {
        if (e.target === node) {
            ['notice-enter', 'notice-enter-active', 'notice-leave', 'notice-leave-active'].forEach(function (className) {
                _nextDom.classList.removeClass(node, className);
            });
            _nextDom.style.set(node, 'height', null);
            _nextDom.events.off(node, _nextUtil.support.transition.end, handler);
            done();
        }
    };
    _nextDom.events.on(node, _nextUtil.support.transition.end, handler);
};
var enterHook = function enterHook(node, done) {
    _nextDom.classList.addClass(node, 'out-screen');
    _nextDom.classList.removeClass(node, 'hide');
    var height = node.offsetHeight + 'px';
    _nextDom.classList.addClass(node, 'notice-enter');
    _nextDom.classList.removeClass(node, 'out-screen');
    setTimeout(function () {
        _nextDom.classList.addClass(node, 'notice-enter-active');
        _nextDom.style.set(node, 'height', height);
    }, 1);

    oneTransitionEnd(node, done);
};
var leaveHook = function leaveHook(node, done) {
    var height = node.offsetHeight + 'px';
    _nextDom.style.set(node, 'height', height);
    _nextDom.classList.addClass(node, 'notice-leave');
    setTimeout(function () {
        _nextDom.classList.addClass(node, 'notice-leave-active');
        _nextDom.style.set(node, 'height', 0);
    }, 1);

    oneTransitionEnd(node, done);
};

var Notice = (_temp = _class = function (_Component) {
    _inherits(Notice, _Component);

    function Notice(props, context) {
        _classCallCheck(this, Notice);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.state = {
            visible: 'visible' in props ? props.visible : props.defaultVisible
        };
        _this.handleClose = _this.handleClose.bind(_this);
        _this.visibleChanged = _this.state.visible;
        return _this;
    }

    Notice.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible
            });
            if (nextProps.visible !== this.props.visible) {
                this.visibleChanged = true;
            }
        }
    };

    Notice.prototype.handleClose = function handleClose() {
        if (!('visible' in this.props)) {
            this.setState({
                visible: false
            });
            this.visibleChanged = true;
        }

        var _props = this.props,
            onClose = _props.onClose,
            afterClose = _props.afterClose,
            animation = _props.animation;

        onClose();
        if (!_nextUtil.support.transition || !animation) {
            afterClose();
        }
    };

    Notice.prototype.render = function render() {
        var _cx;

        var prefix = this.context.prefix || this.props.prefix;
        /* eslint-disable no-unused-vars */

        var _props2 = this.props,
            propsPrefix = _props2.prefix,
            type = _props2.type,
            shape = _props2.shape,
            size = _props2.size,
            className = _props2.className,
            title = _props2.title,
            children = _props2.children,
            visible = _props2.visible,
            defaultVisible = _props2.defaultVisible,
            closable = _props2.closable,
            onClose = _props2.onClose,
            afterClose = _props2.afterClose,
            specifcIconType = _props2.iconType,
            animation = _props2.animation,
            others = _objectWithoutProperties(_props2, ['prefix', 'type', 'shape', 'size', 'className', 'title', 'children', 'visible', 'defaultVisible', 'closable', 'onClose', 'afterClose', 'iconType', 'animation']);
        /* eslint-enable no-unused-vars */


        var noticePrefix = prefix + 'notice';
        var iconType = specifcIconType || typesMap[type];
        var classes = (0, _classnames2['default'])((_cx = {}, _defineProperty(_cx, noticePrefix, true), _defineProperty(_cx, noticePrefix + '-' + type, type), _defineProperty(_cx, noticePrefix + '-' + shape, shape), _defineProperty(_cx, noticePrefix + '-' + size, size), _defineProperty(_cx, noticePrefix + '-title-content', !!title), _defineProperty(_cx, noticePrefix + '-only-content', !title && !!children), _defineProperty(_cx, 'hide', _nextUtil.support.transition && animation && this.visibleChanged && this.state.visible), _defineProperty(_cx, className, className), _cx));

        var notice = this.state.visible ? _react2['default'].createElement(
            'div',
            _extends({}, others, { className: classes }),
            _react2['default'].createElement(_nextIcon2['default'], { className: noticePrefix + '-symbol', type: iconType }),
            closable && shape !== 'addon' && _react2['default'].createElement(
                'a',
                { href: 'javascript:;', className: noticePrefix + '-close', onClick: this.handleClose },
                _react2['default'].createElement(_nextIcon2['default'], { type: 'close' })
            ),
            title && _react2['default'].createElement(
                'div',
                { className: noticePrefix + '-title' },
                title
            ),
            children && _react2['default'].createElement(
                'div',
                { className: noticePrefix + '-content' },
                children
            )
        ) : null;

        if (_nextUtil.support.transition && animation) {
            var hooks = {
                appear: enterHook,
                enter: enterHook,
                leave: leaveHook
            };
            return _react2['default'].createElement(
                _nextAnimate2['default'],
                { useTransition: true, animation: hooks, afterLeave: afterClose },
                notice
            );
        }

        return notice;
    };

    return Notice;
}(_react.Component), _class.contextTypes = {
    prefix: _react2['default'].PropTypes.string
}, _class.propTypes = {
    prefix: _react.PropTypes.string,
    type: _react.PropTypes.oneOf(['prompt', 'warning', 'system']),
    shape: _react.PropTypes.oneOf(['standalone', 'addon']),
    size: _react.PropTypes.oneOf(['medium', 'large']),
    className: _react.PropTypes.string,
    title: _react.PropTypes.any,
    children: _react.PropTypes.any,
    defaultVisible: _react.PropTypes.bool,
    visible: _react.PropTypes.bool,
    closable: _react.PropTypes.bool,
    onClose: _react.PropTypes.func,
    afterClose: _react.PropTypes.func,
    iconType: _react.PropTypes.string,
    animation: _react.PropTypes.bool
}, _class.defaultProps = {
    prefix: 'next-',
    type: 'prompt',
    shape: 'standalone',
    size: 'medium',
    title: '',
    defaultVisible: true,
    closable: false,
    onClose: noop,
    afterClose: noop,
    animation: true
}, _temp);
Notice.displayName = 'Notice';
exports['default'] = Notice;
module.exports = exports['default'];

/***/ }),
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_common_navBar__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_yinliu_company_company__ = __webpack_require__(439);
/**
 * Created by Administrator on 2017/3/10.
 */






__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__lib_common_navBar__["a" /* NavBar */], { selectedChanelKey: 4, selectedItemKey: 1, hasBrand: true }), document.getElementById('nav'));
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__lib_yinliu_company_company__["a" /* Company */], null), document.getElementById('app'));

/***/ }),
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qnui_lib_button__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qnui_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qnui_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qnui_lib_notice__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qnui_lib_notice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_qnui_lib_notice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qnui_lib_grid__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qnui_lib_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_qnui_lib_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_qnui_lib_input__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_qnui_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_qnui_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_qnui_lib_field__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_qnui_lib_field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_qnui_lib_field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__action_yinliu_yinliuActions__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_yinliu_companyStore__ = __webpack_require__(451);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Administrator on 2017/4/4.
 */






//import Icon from 'qnui/lib/icon';


//import Dialog from 'qnui/lib/dialog';


//import Radio, { Group as RadioGroup } from 'qnui/lib/radio';

//import Select from 'qnui/lib/select';



var Company = function (_Reflux$Component) {
    _inherits(Company, _Reflux$Component);

    function Company(props) {
        _classCallCheck(this, Company);

        var _this = _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).call(this, props));

        _this.stores = [__WEBPACK_IMPORTED_MODULE_10__store_yinliu_companyStore__["a" /* CompanyStore */]];
        _this.field = new __WEBPACK_IMPORTED_MODULE_8_qnui_lib_field___default.a(_this, {
            onChange: function onChange(name, value) {
                switch (name) {
                    case 'domain':
                        _this.getDomain(value);break;
                }
            }
        });

        return _this;
    }

    _createClass(Company, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getCompany();
        }

        //域名是否推广

    }, {
        key: 'getDomain',
        value: function getDomain(value) {
            var _this2 = this;

            var data = {
                'params': JSON.stringify({ domain: value })
            };
            $.ajax({
                url: '/app/yinliu/company/domain/get',
                data: data,
                type: 'POST',
                dataType: 'json'
            }).done(function (response) {
                var domain = _this2.state.domain;

                domain.exists = false;
                if (response) {
                    domain.exists = true;
                    _this2.field.setError('domain', '域名已经被注册');
                }
                _this2.setState({ domain: domain });
            }).fail(function (response) {
                Dialog.alert({
                    content: '域名获取失败',
                    closable: true,
                    title: '提示',
                    onOk: function onOk() {
                        //Dialog.alert({content:'alert content'});
                    }
                });
                console.log('请求失败' + response);
            });
        }
    }, {
        key: 'getCompany',
        value: function getCompany() {
            var _this3 = this;

            // CompanyActions.getCompanyInfo();

            $.ajax({
                url: '/app/yinliu/company/get',
                data: '',
                type: 'POST',
                dataType: 'json'
            }).done(function (response) {

                if (!response) {
                    return;
                }
                for (var r in response) {
                    if (!response[r]) {
                        response[r] = '';
                    }
                }
                _this3.field.setValues(response);
                var domain = _this3.state.domain;

                domain.disabled = true;
                _this3.setState({ company: response, domain: domain });
            }).fail(function (response) {
                Dialog.alert({
                    content: '请求失败',
                    closable: true,
                    title: '提示',
                    onOk: function onOk() {
                        //Dialog.alert({content:'alert content'});
                    }
                });
                console.log('请求失败' + response);
            });
        }
        //保存推广

    }, {
        key: 'save',
        value: function save() {
            var domainExists = this.field.getState('domain');
            if (domainExists == 'error') {
                return;
            }
            // let {company} = this.state;
            // if(company.id){
            //    // this.field.setValues(company);
            // }
            this.field.validate(function (errors, values) {
                if (errors) {
                    return;
                }
                console.log(values);
                __WEBPACK_IMPORTED_MODULE_9__action_yinliu_yinliuActions__["e" /* CompanyActions */].save(values);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var init = this.field.init;
            var _state = this.state,
                company = _state.company,
                domain = _state.domain;

            var formItemLayout = {
                labelCol: {
                    span: 6
                },
                wrapperCol: {
                    span: 14
                }
            };
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_qnui_lib_notice___default.a,
                    { title: '\u6E29\u99A8\u63D0\u793A', type: 'warning', iconType: 'lights' },
                    '1.\u6211\u4EEC\u5C06\u4E3A\u60A8\u514D\u8D39\u5EFA\u7ACB\u4F01\u4E1A\u7F51\u7AD9\u5E76\u5728\u767E\u5EA6\uFF0C360\u7B49\u5927\u641C\u7D22\u5F15\u64CE\u63A8\u5E7F\uFF0C\u8BF7\u60A8\u51C6\u786E\u8BE6\u7EC6\u586B\u5199\u4E0B\u9762\u7684\u5185\u5BB9;2.\u7F51\u7AD9\u57DF\u540D\u4E00\u65E6\u786E\u5B9A\u4E0D\u80FD\u4FEE\u6539\uFF0C\u8BF7\u60A8\u5C3D\u91CF\u8BBE\u7F6E\u5BB9\u6613\u8BB0\u5FC6\u7684\u57DF\u540D'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: { width: 650, marginTop: 20 } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form___default.a,
                        { field: this.field },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__["Item"],
                            _extends({
                                label: '\u7F51\u7AD9\u57DF\u540D\uFF1A'
                            }, formItemLayout, {
                                hasFeedback: true
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_qnui_lib_input___default.a, _extends({
                                placeholder: '\u82F1\u6587\u6216\u62FC\u97F3\uFF08\u8BBE\u7F6E\u540E\u4E0D\u80FD\u66F4\u6539\uFF09',
                                addonBefore: 'http://',
                                addonAfter: '.imemeda.net'
                                //value={company.domain}
                                , maxLength: 50,
                                hasLimitHint: true,
                                disabled: domain.disabled
                            }, init('domain', {
                                // initValue:'company.domain',
                                rules: [{ required: true, message: '英文或者拼音域名' }]
                            })))
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__["Item"],
                            _extends({
                                label: '\u516C\u53F8\u540D\u79F0\uFF1A'
                            }, formItemLayout, {
                                hasFeedback: true
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_qnui_lib_input___default.a, _extends({ maxLength: 30, hasLimitHint: true, placeholder: '\u516C\u53F8\u540D\u79F0'
                                // value={company.company_name}
                            }, init('company_name', {
                                rules: [{ required: true, message: '公司名称不能为空' }]
                            })))
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__["Item"],
                            _extends({
                                label: '\u4E3B\u8425\u4E1A\u52A1\uFF1A'
                            }, formItemLayout),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_qnui_lib_input___default.a, _extends({ multiple: true, maxLength: 50, hasLimitHint: true, placeholder: '\u4E1A\u52A1\u4E00 , \u4E1A\u52A1\u4E8C , \u4E1A\u52A1\u4E09(\u591A\u4E2A\u4E1A\u52A1\u7528\u9017\u53F7 \u201C \uFF0C\u201D \u9694\u5F00)'
                                //  value={company.business}
                            }, init('business', {
                                rules: [{ required: true, message: '主营业务不能为空' }]
                            })))
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__["Item"],
                            _extends({
                                label: '\u516C\u53F8\u7B80\u4ECB\uFF1A'
                            }, formItemLayout),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_qnui_lib_input___default.a, _extends({ multiple: true, maxLength: 100, hasLimitHint: true, placeholder: '\u67D0\u67D0\u516C\u53F8\u662F\u676D\u5DDE\u4E3B\u8981\u7ECF\u8425\u4E1A\u52A1\u4E00,\u4E1A\u52A1\u4E8C\u7684\u516C\u53F8'
                                //  value={company.introduction}
                            }, init('introduction', {
                                rules: [{ required: true, message: '公司简介不能为空' }]
                            })))
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__["Item"],
                            _extends({
                                label: '\u8BE6\u7EC6\u4ECB\u7ECD\uFF1A'
                            }, formItemLayout),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_qnui_lib_input___default.a, _extends({ multiple: true, maxLength: 500, hasLimitHint: true, placeholder: '\u516C\u53F8\u8BE6\u7EC6\u4ECB\u7ECD'
                                //  value={company.detail}
                            }, init('detail', {
                                rules: [{ required: true, message: '公司详细介绍不能为空' }]
                            })))
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__["Item"],
                            _extends({
                                label: '\u516C\u53F8\u5730\u5740\uFF1A'
                            }, formItemLayout, {
                                hasFeedback: true
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_qnui_lib_input___default.a, _extends({ maxLength: 100, hasLimitHint: true, placeholder: '\u516C\u53F8\u5730\u5740'
                                //   value={company.address}
                            }, init('address', {
                                rules: [{ required: true, message: '公司地址不能为空' }]
                            })))
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__["Item"],
                            _extends({
                                label: '\u56FA\u5B9A\u7535\u8BDD\uFF1A'
                            }, formItemLayout, {
                                hasFeedback: true
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_qnui_lib_input___default.a, _extends({ maxLength: 11, hasLimitHint: true, placeholder: '\u56FA\u5B9A\u7535\u8BDD\u4E3A11\u4F4D'
                                //   value={company.phone}
                            }, init('phone', {
                                rules: [{ required: false, min: 11, message: '固定电话为11位' }]
                            })))
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__["Item"],
                            _extends({
                                label: '\u8054\u7CFB\u624B\u673A\uFF1A'
                            }, formItemLayout, {
                                hasFeedback: true
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_qnui_lib_input___default.a, _extends({ maxLength: 11, hasLimitHint: true, placeholder: '\u8054\u7CFB\u624B\u673A\u53F7\u4E3A11\u4F4D'
                                //    value={company.mobile}
                            }, init('mobile', {
                                rules: [{ required: false, min: 11, message: '联系手机号为11位' }]
                            })))
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__["Item"],
                            _extends({
                                label: '\u963F\u91CC\u5E97\u94FA\uFF1A'
                            }, formItemLayout, {
                                hasFeedback: true
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_qnui_lib_input___default.a, _extends({ maxLength: 100, hasLimitHint: true, placeholder: '\u963F\u91CC\u5E97\u94FA\u7F51\u5740'
                                //   value={company.shop_url}
                            }, init('shop_url', {
                                rules: [{ required: true, message: '阿里店铺网址不能为空' }]
                            })))
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_qnui_lib_form__["Item"],
                            { wrapperCol: { offset: 6 } },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_3_qnui_lib_button___default.a,
                                { type: 'primary', onClick: this.save.bind(this) },
                                '\u514D\u8D39\u5EFA\u7AD9\u63A8\u5E7F'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Company;
}(__WEBPACK_IMPORTED_MODULE_1_reflux___default.a.Component);



/***/ }),
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reflux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qnui_lib_dialog__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qnui_lib_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qnui_lib_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__action_yinliu_yinliuActions__ = __webpack_require__(234);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyStore; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Administrator on 2017/3/12.
 */




var CompanyStore = function (_Reflux$Store) {
    _inherits(CompanyStore, _Reflux$Store);

    function CompanyStore() {
        _classCallCheck(this, CompanyStore);

        var _this = _possibleConstructorReturn(this, (CompanyStore.__proto__ || Object.getPrototypeOf(CompanyStore)).call(this));

        _this.listenables = [__WEBPACK_IMPORTED_MODULE_2__action_yinliu_yinliuActions__["e" /* CompanyActions */]];
        _this.state = {
            company: {
                domain: '',
                company_name: '',
                business: '',
                introduction: '',
                detail: '',
                address: '',
                mobile: '',
                phone: '',
                shop_url: ''
            },
            domain: {
                disabled: false,
                exists: false
            }
        };
        return _this;
    }

    //域名是否推广


    _createClass(CompanyStore, [{
        key: 'onGetDomain',
        value: function onGetDomain(domain) {
            var _this2 = this;

            var data = {
                'params': JSON.stringify({ domain: domain })
            };
            $.ajax({
                url: '/app/yinliu/company/domain/get',
                data: data,
                type: 'POST',
                dataType: 'json'
            }).done(function (response) {
                var domain = _this2.state.domain;

                domain.exists = false;
                if (response) {
                    domain.exists = true;
                }
                _this2.setState({ domain: domain });
            }).fail(function (response) {
                __WEBPACK_IMPORTED_MODULE_1_qnui_lib_dialog___default.a.alert({
                    content: '域名获取失败',
                    closable: true,
                    title: '提示',
                    onOk: function onOk() {
                        //Dialog.alert({content:'alert content'});
                    }
                });
                console.log('请求失败' + response);
            });
        }

        //获取企业推广信息

    }, {
        key: 'onGetCompanyInfo',
        value: function onGetCompanyInfo() {
            var _this3 = this;

            $.ajax({
                url: '/app/yinliu/company/get',
                data: '',
                type: 'POST',
                dataType: 'json'
            }).done(function (response) {

                if (!response) {
                    return;
                }
                for (var r in response) {
                    if (!response[r]) {
                        response[r] = '';
                    }
                }
                var domain = _this3.state.domain;

                domain.disabled = false;
                _this3.setState({ company: response, domain: domain });
            }).fail(function (response) {
                __WEBPACK_IMPORTED_MODULE_1_qnui_lib_dialog___default.a.alert({
                    content: '请求失败',
                    closable: true,
                    title: '提示',
                    onOk: function onOk() {
                        //Dialog.alert({content:'alert content'});
                    }
                });
                console.log('请求失败' + response);
            });
        }

        //建站推广

    }, {
        key: 'onSave',
        value: function onSave(company) {
            var _this4 = this;

            var domain = company.domain;

            domain = domain + '.imemeda.net';
            company.site_address = domain;
            var data = {
                'params': JSON.stringify({ company: company })
            };
            $.ajax({
                url: '/app/yinliu/company/set',
                data: data,
                type: 'POST',
                dataType: 'json'
            }).done(function (response) {
                var msg = '恭喜您，企业网站建站成功，我们将为您大力推广该企业网站，地址：http://' + response.site_address;
                if (!response) {
                    msg = '操作失败';
                }

                __WEBPACK_IMPORTED_MODULE_1_qnui_lib_dialog___default.a.alert({
                    content: msg,
                    closable: true,
                    title: '提示',
                    onOk: function onOk() {
                        //Dialog.alert({content:'alert content'});
                    }
                });

                var domain = _this4.state.domain;

                domain.disabled = true;
                _this4.setState({ domain: domain });
                //CompanyActions.getCompanyInfo();
            }).fail(function (response) {
                __WEBPACK_IMPORTED_MODULE_1_qnui_lib_dialog___default.a.alert({
                    content: '请求失败',
                    closable: true,
                    title: '提示',
                    onOk: function onOk() {
                        //Dialog.alert({content:'alert content'});
                    }
                });
                console.log('请求失败' + response);
            });
        }
    }]);

    return CompanyStore;
}(__WEBPACK_IMPORTED_MODULE_0_reflux___default.a.Store);



/***/ }),
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(418);


/***/ })
],[604]);