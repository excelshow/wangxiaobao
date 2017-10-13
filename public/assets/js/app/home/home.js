webpackJsonp([9],{

/***/ 1:
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

/***/ 100:
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

/***/ 101:
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

/***/ 102:
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

/***/ 103:
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

/***/ 105:
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

/***/ 106:
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

/***/ 107:
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

/***/ 108:
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

/***/ 109:
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

/***/ 11:
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

/***/ 110:
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

/***/ 111:
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

/***/ 112:
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

/***/ 113:
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

/***/ 114:
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

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
};

/***/ }),

/***/ 116:
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

/***/ 117:
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

/***/ 118:
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

/***/ 119:
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

/***/ 120:
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

/***/ 121:
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

/***/ 122:
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

/***/ 123:
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

/***/ 124:
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

/***/ 125:
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

/***/ 126:
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

/***/ 127:
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

/***/ 128:
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

/***/ 129:
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

/***/ 131:
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

/***/ 132:
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

/***/ 133:
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

/***/ 134:
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

/***/ 135:
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

/***/ 139:
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

/***/ 140:
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

/***/ 141:
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

/***/ 142:
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

/***/ 143:
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

/***/ 144:
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

/***/ 145:
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

/***/ 146:
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

/***/ 147:
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

/***/ 148:
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

/***/ 149:
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

/***/ 150:
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

/***/ 151:
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

/***/ 152:
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

/***/ 153:
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

/***/ 154:
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

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154);

/***/ }),

/***/ 2:
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

/***/ 21:
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

/***/ 22:
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

/***/ 25:
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

/***/ 26:
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

/***/ 28:
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

/***/ 29:
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

/***/ 3:
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

/***/ 30:
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

/***/ 31:
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

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_common_navBar__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_home_home__ = __webpack_require__(424);
/**
 * Created by Administrator on 2017/3/10.
 */






__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__lib_common_navBar__["a" /* NavBar */], { selectedChanelKey: 1, selectedItemKey: 1, hasBrand: true }), document.getElementById('nav'));
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__lib_home_home__["a" /* Home */], null), document.getElementById('app'));

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflux__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Administrator on 2017/3/10.
 */



var Home = function (_Reflux$Component) {
    _inherits(Home, _Reflux$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            currentStep: 0
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                '\u9996\u9875'
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_1_reflux___default.a.Component);



/***/ }),

/***/ 44:
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

/***/ 45:
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

/***/ 47:
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

/***/ 48:
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

/***/ 49:
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

/***/ 50:
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

/***/ 51:
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

/***/ 52:
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

/***/ 53:
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

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(413);


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    classList: __webpack_require__(101),
    events: __webpack_require__(102),
    position: __webpack_require__(103),
    style: __webpack_require__(45)
};

/***/ }),

/***/ 67:
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

/***/ 68:
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

/***/ 69:
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

/***/ 70:
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

/***/ 71:
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

/***/ 72:
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

/***/ 76:
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

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);

/***/ }),

/***/ 8:
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

/***/ 9:
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

/***/ 98:
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

/***/ 99:
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

/***/ })

},[599]);