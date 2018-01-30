/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Yisec is a web component frame **/
(function (global, factory) {
    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.Yisec = {});
})(this, function (exports) {
    'use strict';

    /**
     * 所有注册组件缓存
     */

    var registerComponents = {};
    /**
     * 添加全局组件
     * @param name
     * @param Com
     */
    function register(name, Com) {
        registerComponents[name] = Com;
    }

    function getType(arg) {
        return Object.prototype.toString.call(arg).match(/\s(.+)]/)[1].toLowerCase();
    }
    function isFunction() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return args.every(function (arg) {
            return getType(arg) === 'function';
        });
    }
    function isArray() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return args.every(function (arg) {
            return getType(arg) === 'array';
        });
    }

    function isString() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        return args.every(function (arg) {
            return getType(arg) === 'string';
        });
    }

    function isPromise() {
        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
        }

        return args.every(function (arg) {
            return getType(arg) === 'promise';
        });
    }
    /**
     * 转classname
     * @param v
     */
    function toClassNames(v) {
        switch (getType(v)) {
            case 'array':
                {
                    return v.map(toClassNames).join(' ');
                }
            case 'object':
                {
                    return Object.keys(v).map(function (key) {
                        return v[key] ? key : '';
                    }).join(' ');
                }
            case 'string':
                {
                    return v;
                }
            default:
                {
                    return '';
                }
        }
    }
    // setTimeout的封装

    // 移除重复元素
    function uniqueArr() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var newArr = [];
        arr.forEach(function (item) {
            if (!newArr.includes(item)) {
                newArr.push(item);
            }
        });
        return newArr;
    }
    function merge() {
        for (var _len7 = arguments.length, anys = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            anys[_key7] = arguments[_key7];
        }

        var base = anys[0];
        anys.slice(1).forEach(function (any) {
            Object.keys(any).forEach(function (key) {
                if (base[key] === undefined) {
                    base[key] = any[key];
                }
            });
        });
        return base;
    }
    /**
     * 绑定this
     * @param fn
     * @param ctx
     */
    function bindContext(fn, ctx) {
        if (getType(fn).includes('function')) {
            fn = fn.bind(ctx);
        }
        return fn;
    }
    function uuid() {
        var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

        var S = '0123456789qwertyuioopasdfghjklzxcvbnmQWERTYUIOOPASDFGHJKLZXCVBNM';
        var LEN = S.length - 1;
        return ' '.repeat(len).split('').map(function () {
            return S[Math.round(Math.random() * LEN)];
        }).join('');
    }
    function getComponent() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var ctxs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        for (var i = 0; i < ctxs.length; i++) {
            if (ctxs[i].components && ctxs[i].components[name]) {
                return ctxs[i].components[name];
            }
        }
        return registerComponents[name];
    }
    function getParentCtx() {
        var ctxs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        for (var i = 0; i < ctxs.length; i++) {
            if (ctxs[i] instanceof Component) {
                return ctxs[i];
            }
        }
        // 永远不会执行到这里
        return new Component();
    }
    // 如果arr中存在keys中的元素，那么keys中的元素排序提前
    function resortArr() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var newArr = [];
        keys.forEach(function (i) {
            if (arr.includes(i)) {
                newArr.push(i);
            }
        });
        arr.forEach(function (i) {
            if (!keys.includes(i)) {
                newArr.push(i);
            }
        });
        return newArr;
    }
    function isComponent(component, ast) {
        if (isPromise(component) || isFunction(component) || isString(component)) {
            return true;
        }
        console.error(component, ast.tagName + ' should be a Component!!! \u60A8\u53EF\u4EE5\u5728\u7EC4\u4EF6\u7684Components\u5C5E\u6027\u4E2D\u6DFB\u52A0\u5B50\u7EC4\u4EF6\uFF0C\u6216\u8005\u901A\u8FC7Yisec.register\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6');
        return false;
    }

    var eventCache = {};
    var gloablEventCache = {};
    var $root = document.documentElement;
    function on(element, key, fn) {
        if (!eventCache[key]) {
            gloablEventCache[key] = function (event) {
                var target = event.target;
                var cache = eventCache[key];
                // 需要考虑的问题是，如何处理stopPropogation
                var stopPropagation = event.stopPropagation;
                var isStop = false; // 是否阻止冒泡
                // 更改
                event.stopPropagation = function () {
                    stopPropagation.call(event);
                    isStop = true;
                };
                for (var i = 0; i < cache.length; i++) {
                    var _cache$i = cache[i],
                        _element = _cache$i.element,
                        _fn2 = _cache$i.fn;

                    if (_element === target || target instanceof Node && _element.contains(target)) {
                        _fn2.call(_element, event);
                        if (isStop) {
                            isStop = false;
                            break;
                        }
                    }
                }
            };
            $root.addEventListener(key, gloablEventCache[key]);
        }
        var cache = eventCache[key] = eventCache[key] || [];
        // 从组件角度来讲，都是先添加父元素，后添加子元素，因此事件的触发顺序是先触发子元素，再触发父元素的
        // 因为这里每次都塞到头部
        cache.unshift({ element: element, fn: fn });
    }
    function off(element, key, fn) {
        Object.keys(eventCache).forEach(function (_key) {
            if (_key === key || key === undefined) {
                // 移除缓存
                eventCache[_key] = eventCache[_key].filter(function (_ref) {
                    var _ele = _ref.element,
                        _fn = _ref.fn;

                    if (_ele === element && (_fn === fn || fn === undefined)) {
                        return false;
                    }
                    return true;
                });
                // 事件被卸载完毕处理
                if (eventCache[_key].length === 0) {
                    $root.removeEventListener(_key, gloablEventCache[_key]);
                    delete gloablEventCache[_key];
                    delete eventCache[_key];
                }
            }
        });
    }

    var classCallCheck = function classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    var createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var defineProperty = function defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    };

    var inherits = function inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };

    var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    };

    var slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var toConsumableArray = function toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }return arr2;
        } else {
            return Array.from(arr);
        }
    };

    var BubbleEventList = ['click', 'dblclick', 'touchstart', 'touchmove', 'touchend', 'mousedown', 'mousemove', 'mouseup', 'keydown', 'keyup', 'hover'];

    var YSEvents = function () {
        function YSEvents() {
            classCallCheck(this, YSEvents);

            this.cache = [];
        }
        // 事件绑定


        createClass(YSEvents, [{
            key: 'on',
            value: function on$$1(element, key, fn) {
                if (!isFunction(fn)) {
                    console.error(fn, 'should be a Function');
                    return;
                }
                // 可冒泡的事件，绑定到documentElement上去，避免重复绑定事件
                if (BubbleEventList.includes(key)) {
                    on(element, key, fn);
                } else {
                    this.cache.push([key, fn]);
                    element.addEventListener(key, fn);
                }
                return this;
            }
            // 事件移除

        }, {
            key: 'off',
            value: function off$$1(element, key, fn) {
                this.cache = this.cache.filter(function (_ref) {
                    var _ref2 = slicedToArray(_ref, 2),
                        _key = _ref2[0],
                        _fn = _ref2[1];

                    if (key === _key && fn === _fn || // 卸载指定key,fn的事件
                    key === _key && fn === undefined // 卸载指定key的事件
                    || key === undefined && fn === undefined // 卸载所有事件
                    ) {
                            element.removeEventListener(_key, _fn);
                            return false;
                        }
                });
                off(element, key, fn);
                return this;
            }
        }]);
        return YSEvents;
    }();

    var queue = [];
    var timeout = void 0;
    var isUpdating = false;
    function addUpdateQueue() {
        var _queue;

        var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        if (isUpdating) {
            // 如果已进入更新之中，则所有因为更新加入队列之中的任务都会立即执行
            list.forEach(function (fn) {
                return fn();
            });
            return;
        }
        clearTimeout(timeout);
        (_queue = queue).push.apply(_queue, toConsumableArray(list));
        // setTimeout执行时间明显比0ms要长很多，但是Performance并没有记录函数执行
        // 经排查发现是mac上chrome的页面滚动阻塞了异步事件的执行
        timeout = setTimeout(forceUpdate, 0);
    }
    function forceUpdate() {
        var afterFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

        // console.log('setTimeout等待时长', Date.now() - realtime)
        isUpdating = true;
        var haveExec = [];
        queue.forEach(function (fn) {
            // 查看是否执行
            if (!haveExec.includes(fn)) {
                haveExec.push(fn);
                fn();
            }
        });
        isUpdating = false;
        queue = [];
        // console.log('执行时长', Date.now() - time)
        afterFn();
    }

    // yisec指令前缀
    var DIRECTIVE_PREV = 'ys:';
    var DIRECTIVE_EXPR = 'ys:expr:';
    // 组件挂载到dom上的key
    var COMPONENT_DOM_HOOK = '__yisec_component_hook__';
    var OBSERVE_ID = '__observeID__';
    var HANDLE_CLASS_FN_NME = '__postClassNames__';

    var Observe = function Observe() {
        classCallCheck(this, Observe);
    };
    var defaultCurrent = function defaultCurrent() {
        return function () {};
    };
    // observer数据get时，进行依赖手机
    var currentFn = defaultCurrent;
    function resetCurrentFn() {
        currentFn = defaultCurrent;
    }
    /**
     * 依赖
     * @class Depends
     */
    var Depends = function () {
        function Depends(root, key) {
            classCallCheck(this, Depends);

            this.list = [];
            this.root = root;
            this.key = key;
        }

        createClass(Depends, [{
            key: "collect",
            value: function collect() {
                var _this = this;

                if (currentFn !== defaultCurrent) {
                    currentFn(function (fn) {
                        // 获取依赖函数，并返回移除依赖函数
                        !_this.list.includes(fn) && _this.list.push(fn);
                        return function () {
                            _this.list = _this.list.filter(function (i) {
                                return i !== fn;
                            });
                        };
                    }, this);
                }
            }
        }, {
            key: "run",
            value: function run(key) {
                addUpdateQueue(this.list, this.key);
            }
        }]);
        return Depends;
    }();

    var ObserveId = function ObserveId() {
        classCallCheck(this, ObserveId);

        this.id = uuid() + ObserveId.id++;
        this.keys = [];
    };

    ObserveId.id = 0;
    function addObserverId(newObj) {
        if (newObj[OBSERVE_ID] instanceof ObserveId) {
            return;
        }
        Object.defineProperty(newObj, OBSERVE_ID, {
            value: new ObserveId(),
            configurable: false,
            writable: false,
            enumerable: false
        });
    }
    function addObserve(ctx, key) {
        var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ctx[key];
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { deep: false };

        addObserverId(ctx);
        // 这里隐含了一个bug，如果state,prop被更改，就懵逼了，因此设置state、props writable: false
        if (ctx[OBSERVE_ID].keys.includes(key)) {
            ctx[key] = defaultValue; // 数据已监听，则更新
            return;
        } else {
            ctx[OBSERVE_ID].keys.push(key);
        }
        var value = bindContext(defaultValue, ctx);
        // 依赖此key的函数
        var depends = new Depends(ctx, key);
        var isResetValue = true;
        // 默认bind this
        Object.defineProperty(ctx, key, {
            get: function get$$1() {
                // 收集依赖
                depends.collect();
                // 只有在被获取的时候，才会对数据进行observe
                if (isResetValue && options.deep) {
                    value = observer(value, Object.assign({}, options, { parentDepend: depends }));
                }
                isResetValue = false;
                return value;
            },
            set: function set$$1(newValue) {
                // 每次值更新都会触发更新
                isResetValue = true;
                value = bindContext(newValue, ctx);
                // 触发依赖函数更新
                depends.run();
            },

            enumerable: true
        });
    }
    /**
     * 监听数组
     * @param arr
     * @param parentDepends
     */
    function observeArr() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var options = arguments[1];

        // 判断是否observe过
        if (isObserve(arr)) {
            return arr;
        }
        var newArr = arr.map(function (item) {
            return observer(item);
        });
        Object.defineProperty(newArr, OBSERVE_ID, {
            value: new ObserveId(),
            enumerable: false,
            writable: false,
            configurable: false
        });
        ['splice', 'push', 'shift', 'unshift', 'pop'].forEach(function (key) {
            var value = [][key].bind(newArr);
            // 如果数组长度被修改，通知他的父元节点
            Object.defineProperty(newArr, key, {
                get: function get$$1() {
                    return function () {
                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }

                        if (options.deep) {
                            if (key == 'push' || key == 'unshift') {
                                args = args.map(function (i) {
                                    return observer(i);
                                });
                            } else if (key == 'splice') {
                                args = args.slice(0, 2).concat(args.slice(2).map(function (i) {
                                    return observer(i);
                                }));
                            }
                        }
                        var result = value.apply(undefined, toConsumableArray(args));
                        // 对于数组的变化，直接出发调用数组的依赖
                        options.parentDepend && options.parentDepend.run();
                        return result;
                    };
                },

                enumerable: false
            });
        });
        return newArr;
    }
    /**
     * 监听对象
     * @param obj
     * @param init
     */
    function observeObj() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments[1];

        var newObj = new Observe();
        // 添加id
        addObserverId(newObj);
        Object.keys(obj).forEach(function (key) {
            addObserve(newObj, key, obj[key], options);
        });
        return newObj;
    }
    function isObserve(obj) {
        return obj instanceof Observe || isArray(obj) && obj[OBSERVE_ID] instanceof Observe;
    }
    /**
     * 构造一个新的observe对象
     * @param {objet} obj
     * @returns
     */
    function observer(obj) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { deep: false };

        if (isObserve(obj)) {
            return obj;
        }
        switch (getType(obj)) {
            case 'array':
                return observeArr(obj, options);
            case 'object':
                return observeObj(obj, options);
            default:
                return obj;
        }
    }
    function observerDeep(obj) {
        return observer(obj, { deep: true });
    }
    /**
     * 接受函数，当依赖的数据发生变化后，会立即执行函数
     *
     * @param {function} fn
     * @returns
     */
    function autorun(fn) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var destoryDepends = [];
        var depends = [];
        // 销毁依赖
        var destory = function destory() {
            destoryDepends.forEach(function (fn) {
                return fn();
            });
            destoryDepends = [];
            depends.splice(0, depends.length);
        };
        var wrapFn = function wrapFn() {
            // 显示之前依赖
            // console.log('before', depends.map(i => i.key))
            destory(); // 销毁上次依赖监听
            // 收集本次依赖
            currentFn = function currentFn(getDestory, depend) {
                destoryDepends.push(getDestory(wrapFn));
                depends.push(depend);
                return wrapFn;
            };
            var result = fn();
            // 重置回默认值
            resetCurrentFn();
            // 显示之前依赖
            // console.log('after', depends.map(i => i.key))
            isFunction(options.callback) && options.callback(result);
        };
        // wrapFn.options = options
        // 立即执行
        wrapFn();
        return destory;
    }

    var cache = {};
    function parseExpr(body) {
        if (cache[body]) {
            return cache[body];
        }
        // 去除字符串，剩下的都是变量
        // 对于关键字new 和 对象的支持很懵逼
        var params = (body.replace(/'[^']*'|"[^"]*"/g, ' ') // 移除字符串 'ddd' "ddd"
        .replace(/([A-Za-z_$][A-Za-z0-9_$]*\s*)?:/g, '') // 移除对象key { aa: }
        .match(/\.?[A-Za-z_$][A-Za-z0-9_$]*\s*/g) || [] // 获取所有变量 .?aa
        ).filter(function (i) {
            return !/^\.|new\s+/.test(i);
        }) // 去除.aa new
        .map(function (i) {
            return i.trim();
        }); // 去除空格
        params = uniqueArr(params);
        var result = {
            params: params,
            body: body,
            fn: new (Function.prototype.bind.apply(Function, [null].concat(toConsumableArray(params), ['return ' + body])))()
        };
        cache[body] = result;
        return result;
    }

    // 分割表达式，只处理不重复的分隔符|
    var parseFilterCache = {};
    function parseFilter() {
        var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (parseFilterCache[str]) {
            return parseFilterCache[str];
        }
        var exprArr = [];
        var current = '';
        var index = 0;
        while (index < str.length) {
            var char = str[index];
            // 前后不能是| |
            if (char === '|' && str[index - 1] !== '|' && str[index + 1] !== '|') {
                exprArr.push(current);
                index += 1;
                current = '';
                continue;
            } else if (char === "'" || char === '"') {
                var _ref = str.slice(index).match(/^'[^']*'|^"[^"]*"/) || [],
                    _ref2 = slicedToArray(_ref, 1),
                    _ref2$ = _ref2[0],
                    matchStr = _ref2$ === undefined ? '' : _ref2$;

                current += matchStr;
                index += matchStr.length;
                continue;
            }
            current += char;
            index += 1;
        }
        exprArr.push(current);
        var result = {
            expr: exprArr[0],
            pipes: exprArr.slice(1).map(function (i) {
                return i.trim();
            }).filter(function (i) {
                return i;
            })
        };
        parseFilterCache[str] = result;
        return result;
    }

    var pipes = [];
    function addPipe() {
        pipes.push.apply(pipes, arguments);
    }
    /**
     * pipe 上一个函数返回结果作为下一个函数的输入
     * @param fns
     */
    function handlePipe() {
        for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
            fns[_key] = arguments[_key];
        }

        return function (arg) {
            var result = arg;
            fns.forEach(function (fn) {
                result = fn(result);
            });
            return result;
        };
    }
    function getPipes(exprs, ctxs) {
        return handlePipe.apply(undefined, toConsumableArray(exprs.map(function (expr) {
            return execExprIm(expr, [].concat(toConsumableArray(ctxs), pipes, [window]));
        })));
    }
    /**
     * 从作用域链中获取指定key的值
     * @param key
     * @param ctxs
     */
    function getValue(key, ctxs) {
        for (var i = 0; i < ctxs.length; i++) {
            if (ctxs[i].hasOwnProperty(key) || ctxs[i][key] !== undefined) {
                return ctxs[i][key];
            }
        }
        if (key === 'true') {
            return true;
        }
        if (key === 'false') {
            return false;
        }
        return window[key];
    }
    function execExprIm() {
        var expr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var ctxs = arguments[1];

        var _parseFilter = parseFilter(expr),
            inputExpr = _parseFilter.expr,
            pipeExprs = _parseFilter.pipes;
        // 我们不合并对象，因为对象可能是observable的，这里通过with嵌套的形式


        var parseResult = parseExpr(inputExpr);
        var input = parseResult.fn.apply(parseResult, toConsumableArray(parseResult.params.map(function (key) {
            return getValue(key, ctxs);
        })));
        // with语句的性能太差，弃之
        // const names = ctxs.map((i, index) => '__with__local__' + index)
        // let body = `return ${inputExpr}`
        // names.reverse().forEach(i => {
        //     body = `with (${i}) {
        //         ${body}
        //      }`
        // })
        // const input = new Function(...names, body)(...ctxs)
        if (pipes.length) {
            return getPipes(pipeExprs, ctxs)(input);
        }
        return input;
    }
    /**
     * 执行表达式
     * @param {string} expr
     * @param {any[]} ctxs
     * @param {(result: any) => void} fn
     * @returns
     */
    function execExpr(expr, ctxs, fn) {
        var oldValue = void 0;
        var newValueCache = void 0;
        var execTime = 0;
        function isEqual(newValue, oldValue) {
            if (newValue !== oldValue) {
                return false;
            }
            // 数组一直变化
            if (isArray(newValue)) {
                return false;
            }
            return true;
        }
        return fn && autorun(function () {
            return execExprIm(expr, ctxs);
        }, {
            callback: function callback(newValue) {
                oldValue = newValueCache;
                newValueCache = newValue;
                var equal = isEqual(newValue, oldValue);
                if (!isEqual(newValue, oldValue)) {
                    execTime += 1;
                    fn(newValue, oldValue, execTime);
                }
            },
            expr: expr
        });
    }
    // 执行一次，获取值
    function execExprOnce(expr, ctxs) {
        var returnValue = void 0;
        if (!expr.trim()) {
            return undefined;
        }
        execExpr(expr, ctxs, function (value) {
            returnValue = value;
        })();
        return returnValue;
    }

    // 通过插件处理classNames
    function handleClassNames(str, ctx) {
        return ctx[HANDLE_CLASS_FN_NME] ? ctx[HANDLE_CLASS_FN_NME](str) : str;
    }
    // 更新dom上的className
    function updateClassName(element, classNames, key, classes, ctx) {
        classNames[key] = handleClassNames(classes, ctx);
        var classStr = Object.keys(classNames).map(function (key) {
            return classNames[key];
        }).map(function (i) {
            return i || '';
        }).join(' ').trim();
        if (element instanceof HTMLElement) {
            element.className = classStr;
        } else if (element instanceof SVGElement) {
            // SVGElement 的className属性为read only，因此这里使用setAttribute
            element.setAttribute('class', classStr);
        }
    }
    // 获取class属性
    function getClassProperties(type) {
        type += type ? '-' : '';
        return ["" + DIRECTIVE_EXPR + type + "class", ":" + type + "class", type + "class"];
    }
    // 测试props上是否存在指定的属性
    function testClass(vdom) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var ast = vdom.ast,
            element = vdom.dom;

        var classProperties = getClassProperties(type);
        return Object.keys(ast.props).some(function (key) {
            return classProperties.includes(key);
        });
    }
    // class
    // enter-class
    // leave-class
    function handleClass(vdom, ctxs, key) {
        var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        var node = vdom.ast,
            element = vdom.dom;

        var value = node.props[key];
        var classNames = vdom.classNames;

        var ctx = getParentCtx(ctxs);
        type += type ? '-' : '';
        if (key === ":" + type + "class" || key === "ys:expr:" + type + "class") {
            vdom.exprs.push(execExpr(value, ctxs, function (newValue, oldValue) {
                updateClassName(element, classNames, key, toClassNames(newValue), ctx);
            }));
            return true;
        } else if (key === type + "class") {
            updateClassName(element, classNames, key, value, ctx);
            return true;
        }
        return false;
    }

    function handleEnter(vdom) {
        if (vdom.dom && testClass(vdom, 'enter')) {
            getClassProperties('enter').forEach(function (key) {
                handleClass(vdom, vdom.ctxs, key, 'enter');
            });
        }
    }
    /**
     * 判断dom是否可以异步卸载
     * @param vdom
     */
    function handleLeave(vdom) {
        var leaveTime = vdom.ast.props.leaveTime;

        if (vdom.dom && leaveTime && testClass(vdom, 'leave')) {
            // vdom.dom.className += ` ${leaveClass}`
            getClassProperties('leave').forEach(function (key) {
                handleClass(vdom, vdom.ctxs, key, 'leave');
            });
            return new Promise(function (res) {
                setTimeout(res, Number(leaveTime));
            });
        }
        return true;
    }

    var VirtualDOM = function () {
        function VirtualDOM(parent) {
            classCallCheck(this, VirtualDOM);

            this.exprs = [];
            this.events = new YSEvents();
            this.children = [];
            this.ctxs = [];
            this.unmounted = false;
            this.classNames = {};
            if (parent) {
                this.parent = parent;
                this.parent.children.push(this);
            }
        }
        // dom create 回调


        createClass(VirtualDOM, [{
            key: "oncreate",
            value: function oncreate() {
                var dom = this.dom;

                if (dom) {
                    var _ast$props$ = this.ast.props[DIRECTIVE_EXPR + "oncreate"],
                        fnExpr = _ast$props$ === undefined ? '' : _ast$props$;

                    var fn = execExprOnce(fnExpr, this.ctxs);
                    // add enter class
                    handleEnter(this);
                    fn && fn(dom, this);
                }
            }
            // onupdate(key, newValue, olValue) {
            //     const { dom } = this;
            //     const { onupdate: fn } = this.ast.props
            //     if (dom && fn) {
            //         fn(key, newValue, olValue)
            //     }
            // }
            // dom unmount 回调

        }, {
            key: "onunmount",
            value: function onunmount() {
                var dom = this.dom;
                // add leave class

                if (dom) {
                    var _ast$props$2 = this.ast.props[DIRECTIVE_EXPR + "onunmount"],
                        fnExpr = _ast$props$2 === undefined ? '' : _ast$props$2;

                    var fn = execExprOnce(fnExpr, this.ctxs);
                    var resultResult = handleLeave(this);
                    var fnResult = fn && fn(dom);
                    // 判断执行结果中是否有Promise
                    var pList = [resultResult, fnResult].filter(function (r) {
                        return r instanceof Promise;
                    });
                    if (pList.length) {
                        // 等待所有任务结束
                        Promise.all(pList).then(function () {
                            dom.parentElement && dom.parentElement.removeChild(dom);
                        });
                    } else {
                        dom.parentElement && dom.parentElement.removeChild(dom);
                    }
                }
            }
            // 卸载vdom

        }, {
            key: "unmount",
            value: function unmount() {
                // 关闭依赖追踪
                this.exprs.forEach(function (fn) {
                    return fn();
                });
                this.dom instanceof HTMLElement && this.events.off(this.dom);
                // 如果是组件，卸载组件
                this.component && this.component.__willUnmount();
                // vdom已卸载
                this.unmounted = true;
            }
        }]);
        return VirtualDOM;
    }();
    var TokenElement = function TokenElement(type, index, value) {
        var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;
        var isExpr = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        classCallCheck(this, TokenElement);

        this.type = type;
        this.index = index;
        this.value = value;
        this.origin = origin;
        this.isExpr = isExpr;
    };
    /**
     * AST节点
     * @class ASTNode
     */
    var ASTNode = function ASTNode() {
        var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        classCallCheck(this, ASTNode);

        this.children = []; // 子节点
        this.props = {}; // props
        this.type = 'element'; // 节点类型
        this.exprs = [];
        this.isSVG = false; // 是不是svg节点
        this.tagName = tagName;
        // 判断是不是组件
        if (/^[A-Z]/.test(tagName)) {
            this.type = 'component';
        }
    };

    // 组件卸载，其实不应该一个元素一个元素的从dom移除，而应该整体性移除
    // 因为AST与真实的dom之间还存在差距，因此我们在AST的基础之上，根据指令等其他条件又生成了一个真实DOM的映射树
    // 用来处理DOM的增删
    // 卸载元素/组件的时候，需要卸载相对应的事件/与数据监听
    function unmountNode(vdom) {
        var removeDOM = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        // 如果当前节点有真实dom映射，则子节点不再操作dom移除，提升性能
        vdom.children.forEach(function (i) {
            return unmountNode(i, removeDOM && !vdom.dom);
        });
        vdom.unmount();
        // 如果vdom上有leave leaveTime
        removeDOM && vdom.onunmount();
        if (vdom.parent) {
            vdom.parent.children = vdom.parent.children.filter(function (i) {
                return i !== vdom;
            });
        }
    }
    /**
     * 卸载子元素
     * @param {any} ele
     */
    function unmountChildren(vdom) {
        vdom.children.forEach(function (child) {
            unmountNode(child);
        });
        vdom.children = [];
    }

    var Component = function () {
        function Component() {
            var _this = this;

            classCallCheck(this, Component);

            // 模板
            this.template = '';
            // 状态
            this.state = {};
            // props
            this.props = {};
            // 子组件
            this.components = {};
            // 子组件
            this.children = [];
            // 指定dom
            this.refs = {};
            this.vdom = new VirtualDOM();
            // 方便template直接获取经过复杂计算的数据
            this.computed = {};
            // 向父组件派发事件
            this.$emit = function (key) {
                for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    data[_key - 1] = arguments[_key];
                }

                var parent = _this.parent;
                var stopBubble = false;
                while (!stopBubble && parent) {
                    var fn = parent[key];
                    if (isFunction(fn)) {
                        stopBubble = fn.call.apply(fn, [parent].concat(data)) === false;
                    }
                    parent = parent.parent;
                }
            };
            // 向子组件派发事件
            this.$emitChildren = function (key) {
                for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    data[_key2 - 1] = arguments[_key2];
                }

                function children(node) {
                    node.children.forEach(function (item) {
                        var fn = item[key];
                        isFunction(fn) && fn.call.apply(fn, [item].concat(data));
                        children(item);
                    });
                }
                children(_this);
            };
            // 向同级组件派发事件
            this.$emitSiblings = function (key) {
                for (var _len3 = arguments.length, data = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                    data[_key3 - 1] = arguments[_key3];
                }

                _this.parent && _this.parent.children.forEach(function (item) {
                    if (item !== _this) {
                        var fn = item[key];
                        isFunction(fn) && fn.call.apply(fn, [item].concat(data));
                    }
                });
            };
        }

        createClass(Component, [{
            key: "render",
            value: function render() {
                return this.template;
            }
        }, {
            key: "willMount",
            value: function willMount() {}
        }, {
            key: "didMount",
            value: function didMount() {}
        }, {
            key: "didUpdate",
            value: function didUpdate() {}
            // 内部方法，触发组件卸载

        }, {
            key: "__willUnmount",
            value: function __willUnmount() {
                var _this2 = this;

                this.children.forEach(function (com) {
                    return com.__willUnmount();
                });
                this.willUnmount();
                unmountNode(this.vdom);
                this.children = [];
                if (this.parent) {
                    this.parent.children = this.parent.children.filter(function (i) {
                        return i !== _this2;
                    });
                }
            }
        }, {
            key: "willUnmount",
            value: function willUnmount() {}
        }]);
        return Component;
    }();

    Component.defaultProps = {};

    // 支持嵌套的表达式匹配， 主要为了支持<span>{{a: b}}</span>
    // 性能优化，这可在startToken match后，查看后面是否有arr.length数量的endToken
    function getMatched() {
        var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '<%';
        var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '%>';
        var str = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        var START_LEN = start.length;
        var END_LEN = end.length;
        var index = 0;
        var arr = [];
        var result = {
            matchStr: '',
            value: ''
        };
        if (!str.startsWith(start)) {
            return result;
        }
        while (index < str.length) {
            // startToken
            if (str.slice(index, index + START_LEN) === start) {
                arr.push(false);
                index += START_LEN;
                continue;
            } else if (str.slice(index, index + END_LEN) === end) {
                index += END_LEN;
                arr.pop();
                if (arr.length === 0) {
                    var matchStr = str.slice(0, index);
                    return {
                        matchStr: matchStr,
                        value: matchStr.slice(START_LEN, -END_LEN)
                    };
                }
                continue;
            }
            // index++
            index += 1;
        }
        // 匹配失败
        return result;
    }

    // 解析template
    // 有时候我们不想使用jsx，不想使用babel编译💊
    // 那就使用类似vue angular之类的字符串模板吧
    // 使用模板编译的好处有哪些？，模板本身可以作为资源加载，也就是View层
    // 自身的逻辑层可以作为控制器
    // 再加一个Model作为数据来源
    var selfCloseElements = ['img', 'br', 'hr', 'input'];
    // 我们应该在解析关键字的同时，保留原始字符串
    var M = {
        get SELF_CLOSE() {
            return (/^(\/\s*>)\s*/
            );
        },
        get CLOSE_START() {
            return (/^(<\s*\/)\s*/
            );
        },
        get TAG_CLOSE() {
            return (/^(>)\s*/
            );
        },
        get OPEN_START() {
            return (/^(<)\s*/
            );
        },
        get EQ() {
            return (/^(=)\s*/
            );
        },
        get TAG_NAME() {
            return (/^([a-zA-Z]-?([a-zA-Z0-9]-?)*)\s*/
            ); // Ass-dd-09
        },
        get PROPERTY_NAME() {
            return (/^([a-zA-Z@:]-?([a-zA-Z0-9:]-?)*)\s*/
            ); // @:-aaaa
        },
        get PROPERTY_VALUE() {
            return (/^"([^"]*)"\s*/
            ); // 支持 "xxx" {xc}
        },
        get EXPR() {
            return (/^{{2}(((?!}{2}).)*)\}{2}\s*/
            );
        },
        get STRING() {
            return (/^[\s\S][^<{]*/
            );
        }
    };
    /**
     * 字符串转token
     *
     * @param {string} [str='']
     * @returns {TokenElement[]}
     */
    function getToken() {
        var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var token = [];
        var localStr = str;
        var index = 0;
        // closeStart
        // 获取token，并记解析位置
        function removePreSpace() {
            var _ref = localStr.match(/^\s+/) || [''],
                _ref2 = slicedToArray(_ref, 1),
                space = _ref2[0];

            index += space.length;
            localStr = localStr.slice(space.length);
        }
        function getPrev(index) {
            return token[token.length - index] || {};
        }
        function next() {
            removePreSpace();
            if (localStr.length == 0) return;
            // />
            if (M.SELF_CLOSE.test(localStr)) {
                var _ref3 = localStr.match(M.SELF_CLOSE) || ['', ''],
                    _ref4 = slicedToArray(_ref3, 2),
                    matchStr = _ref4[0],
                    value = _ref4[1];

                token.push(new TokenElement('SELF_CLOSE', index, value, matchStr));
                index += value.length;
                localStr = localStr.slice(value.length);
                return next();
            }
            // </
            if (M.CLOSE_START.test(localStr)) {
                var _ref5 = localStr.match(M.CLOSE_START) || ['', ''],
                    _ref6 = slicedToArray(_ref5, 2),
                    _matchStr = _ref6[0],
                    _value = _ref6[1];

                token.push(new TokenElement('CLOSE_START', index, _value));
                index += _value.length;
                localStr = localStr.slice(_value.length);
                return next();
            }
            // <
            if (M.OPEN_START.test(localStr)) {
                var _ref7 = localStr.match(M.OPEN_START) || ['', ''],
                    _ref8 = slicedToArray(_ref7, 2),
                    _matchStr2 = _ref8[0],
                    _value2 = _ref8[1];

                token.push(new TokenElement('OPEN_START', index, _value2, _matchStr2));
                index += _value2.length;
                localStr = localStr.slice(_value2.length);
                return next();
            }
            // >
            if (M.TAG_CLOSE.test(localStr)) {
                var _ref9 = localStr.match(M.TAG_CLOSE) || ['', ''],
                    _ref10 = slicedToArray(_ref9, 2),
                    _matchStr3 = _ref10[0],
                    _value3 = _ref10[1];

                token.push(new TokenElement('TAG_CLOSE', index, _value3, _matchStr3));
                index += _value3.length;
                localStr = localStr.slice(_value3.length);
                return next();
            }
            // =
            if (M.EQ.test(localStr)) {
                var _ref11 = localStr.match(M.EQ) || ['', ''],
                    _ref12 = slicedToArray(_ref11, 2),
                    _matchStr4 = _ref12[0],
                    _value4 = _ref12[1];

                token.push(new TokenElement('EQ', index, _value4, _matchStr4));
                index += _value4.length;
                localStr = localStr.slice(_value4.length);
                return next();
            }
            // Aaa-bb 向前读一位需要是 OPEN_START | CLOSE_START
            if (M.TAG_NAME.test(localStr) && (getPrev(1).type == 'OPEN_START' || getPrev(1).type == 'CLOSE_START')) {
                var _ref13 = localStr.match(M.TAG_NAME) || ['', ''],
                    _ref14 = slicedToArray(_ref13, 2),
                    _matchStr5 = _ref14[0],
                    _value5 = _ref14[1];

                token.push(new TokenElement('TAG_NAME', index, _value5, _matchStr5));
                index += _value5.length;
                localStr = localStr.slice(_value5.length);
                return next();
            }
            // :@Aaa-bb
            if (M.PROPERTY_NAME.test(localStr)) {
                var _ref15 = localStr.match(M.PROPERTY_NAME) || ['', ''],
                    _ref16 = slicedToArray(_ref15, 2),
                    _matchStr6 = _ref16[0],
                    _value6 = _ref16[1];

                token.push(new TokenElement('PROPERTY_NAME', index, _value6, _matchStr6));
                index += _value6.length;
                localStr = localStr.slice(_value6.length);
                return next();
            }
            // 属性value ""
            if (M.PROPERTY_VALUE.test(localStr) && getPrev(1).type == 'EQ' // 向前读一位需要是 EQ
            && getPrev(2).type == 'PROPERTY_NAME' // 向前读2位需要是 PROPERTY_NAME
            ) {
                    // 向前读，需要是
                    var _ref17 = localStr.match(M.PROPERTY_VALUE) || ['', ''],
                        _ref18 = slicedToArray(_ref17, 2),
                        _matchStr7 = _ref18[0],
                        _value7 = _ref18[1];

                    token.push(new TokenElement('PROPERTY_VALUE', index, _value7, _matchStr7));
                    index += _matchStr7.length;
                    localStr = localStr.slice(_matchStr7.length);
                    return next();
                }
            // 表达式
            if (/^{.*}/.test(localStr)) {
                var _getMatched = getMatched('{', '}', localStr),
                    _matchStr8 = _getMatched.matchStr,
                    _value8 = _getMatched.value;

                if (_matchStr8) {
                    token.push(new TokenElement('EXPR', index, _value8, _matchStr8, true));
                    index += _matchStr8.length;
                    localStr = localStr.slice(_matchStr8.length);
                    return next();
                }
            }
            // 文本节点
            if (M.STRING.test(localStr)) {
                var _ref19 = localStr.match(M.STRING) || [''],
                    _ref20 = slicedToArray(_ref19, 1),
                    _value9 = _ref20[0];

                token.push(new TokenElement('STRING', index, _value9));
                index += _value9.length;
                localStr = localStr.slice(_value9.length);
                return next();
            }
        }
        next();
        return token;
    }
    /**
     * 处理解析错误
     *
     * @param {any} token
     * @param {any} template
     * @param {any} message
     */
    function handleASTError(token) {
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        var str = template.slice(0, token.index);
        var enter = str.match(/\n/g) || [];
        var row = enter ? enter.length + 1 : 1;
        var column = str.length - Math.max(str.lastIndexOf('\n'), 0);
        var insertStr = ' '.repeat(column - 1) + '^';
        // 比如我可能只显示5+5的位置
        var arr = template.split(/\n/g);
        var P = Math.max(row - 5, 0);
        var startArr = arr.slice(P, row);
        var endArr = arr.slice(row, P + 5);
        var S = [].concat(toConsumableArray(startArr), [insertStr], toConsumableArray(endArr)).join('\n');
        console.error("at row:" + row + " column:" + column + " \n\n" + S + " \n\n" + message);
    }
    // 读取元素
    // token[0].type == 'OPEN_START'
    // token[1].type == 'TAG_NAME'
    // token[2].type == 'TAG_NAME' *
    //     token[3].type == 'EQ' && token[4].type == 'PROPERTY_VALUE'
    // token[0].type == 'TAG_CLOSE' || token[0].type == 'SELF_CLOSE'
    //     Element
    // token[0].type == 'CLOSE_START'
    // token[1].type == 'TAG_NAME'
    // token[2].type == 'TAG_CLOSE'
    function toAST() {
        var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        var root = new ASTNode();
        var currentNode = root;
        var index = 0;
        var currentT = void 0;
        var LEN = token.length;
        function getT(index) {
            return token[index];
        }
        next();
        function next() {
            if (index >= LEN) return;
            // 当前token
            currentT = token[index];
            // open tag | close self tag
            if (currentT.type == 'OPEN_START' && getT(index + 1).type == 'TAG_NAME') {
                // 获取
                var localIndex = index + 2;
                var props = {};
                var tagName = getT(index + 1).value;
                while (getT(localIndex).type == 'TAG_NAME' || getT(localIndex).type == 'PROPERTY_NAME') {
                    if (getT(localIndex + 1).type == 'EQ') {
                        if (['PROPERTY_VALUE', 'EXPR'].includes(getT(localIndex + 2).type)) {
                            var propertyKey = getT(localIndex).value;
                            var propertyValue = getT(localIndex + 2);
                            // 如果propertyValue是表达式，并且key不以:|ys:|@开头，追加ys:expr:表示此key是一个表达式
                            if (propertyValue.isExpr && !/^:|@|ys:/.test(propertyKey)) {
                                propertyKey = "" + DIRECTIVE_EXPR + propertyKey;
                            }
                            props[propertyKey] = propertyValue.value;
                            localIndex += 3;
                            continue;
                        } else {
                            handleASTError(getT(localIndex), template, getT(localIndex).value + " should have a value");
                        }
                    }
                    props[getT(localIndex).value] = true;
                    localIndex += 1;
                }
                var TAG_TYPE = getT(localIndex).type;
                if (TAG_TYPE == 'TAG_CLOSE' || TAG_TYPE == 'SELF_CLOSE') {
                    var node = new ASTNode(tagName);
                    node.props = props;
                    node.parent = currentNode;
                    currentNode.children.push(node);
                    if (TAG_TYPE === 'TAG_CLOSE' && !selfCloseElements.includes(tagName)) {
                        currentNode = node;
                    }
                }
                index = localIndex + 1;
            } else if (currentT.type == 'CLOSE_START' && getT(index + 1).type == 'TAG_NAME' && getT(index + 2).type == 'TAG_CLOSE') {
                if (currentNode.tagName !== getT(index + 1).value) {
                    var closeTagName = getT(index + 1).value;
                    var errMsg = "close tag name should be " + currentNode.tagName + ", but now is " + closeTagName;
                    if (!currentNode.tagName) {
                        errMsg = "close tag name is " + closeTagName + ", but the open tag name is empty!!!";
                    }
                    handleASTError(getT(index + 1), template, errMsg);
                }
                currentNode = currentNode.parent;
                index += 3;
            } else {
                var last = currentNode.children[currentNode.children.length - 1];
                if (currentT.type == 'EXPR') {
                    var _node = new ASTNode();
                    _node.value = currentT.value;
                    _node.type = 'expr';
                    _node.parent = currentNode;
                    currentNode.children.push(_node);
                } else if (last && last.type === 'text') {
                    last.value += currentT.value;
                } else {
                    var _node2 = new ASTNode();
                    _node2.type = 'text';
                    _node2.value = currentT.origin || currentT.value || '';
                    _node2.parent = currentNode;
                    currentNode.children.push(_node2);
                }
                index++;
            }
            next();
        }
        return root;
    }
    // 处理svg节点
    function handleSVG(node) {
        var isSVG = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (isSVG || node.tagName === 'svg') {
            isSVG = true;
            node.isSVG = isSVG;
        }
        node.children.forEach(function (node) {
            return handleSVG(node, isSVG);
        });
        return node;
    }
    // 处理if else
    var cache$1 = {};
    // 字符串 => ast
    var toAST$1 = function toAST$1() {
        var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        // 使用缓存，不用再ast => dom的时候对ast进行修改
        if (!cache$1[template]) {
            var node = toAST(getToken(template), template);
            // 为node添加isSVG标示
            cache$1[template] = handleSVG(node);
        }
        return cache$1[template];
    };

    var isScroll = false;
    var timeout$1 = void 0;
    window.addEventListener('scroll', function () {
        isScroll = true;
        clearTimeout(timeout$1);
        timeout$1 = setTimeout(function () {
            isScroll = false;
        }, 50);
    });
    // 事件别名
    var eventAlias = {
        enter: function enter(fn) {
            return [{
                eventName: 'keydown',
                listener: function listener(event) {
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                    }

                    if (event.keyCode == 13) {
                        fn.apply(undefined, [event].concat(args));
                    }
                }
            }];
        },
        up: function up(fn) {
            return [{
                eventName: 'keydown',
                listener: function listener(event) {
                    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                        args[_key2 - 1] = arguments[_key2];
                    }

                    if (event.keyCode == 38) {
                        fn.apply(undefined, [event].concat(args));
                    }
                }
            }];
        },
        down: function down(fn) {
            return [{
                eventName: 'keydown',
                listener: function listener(event) {
                    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                        args[_key3 - 1] = arguments[_key3];
                    }

                    if (event.keyCode == 40) {
                        fn.apply(undefined, [event].concat(args));
                    }
                }
            }];
        },
        left: function left(fn) {
            return [{
                eventName: 'keydown',
                listener: function listener(event) {
                    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                        args[_key4 - 1] = arguments[_key4];
                    }

                    if (event.keyCode == 37) {
                        fn.apply(undefined, [event].concat(args));
                    }
                }
            }];
        },
        esc: function esc(fn) {
            return [{
                eventName: 'keyup',
                listener: function listener(event) {
                    for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                        args[_key5 - 1] = arguments[_key5];
                    }

                    if (event.keyCode == 27) {
                        fn.apply(undefined, [event].concat(args));
                    }
                }
            }];
        },
        ctrlEnter: function ctrlEnter(fn) {
            var recodeKey = {
                ctrl: false,
                enter: false
            };
            return [{
                eventName: 'keydown',
                listener: function listener(event) {
                    for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                        args[_key6 - 1] = arguments[_key6];
                    }

                    if (event.keyCode == 13) {
                        recodeKey.enter = true;
                    } else if (event.keyCode == 17) {
                        recodeKey.ctrl = true;
                    }
                    recodeKey.enter && recodeKey.ctrl && fn.apply(undefined, args);
                }
            }, {
                eventName: 'keyup',
                listener: function listener(event) {
                    if (event.keyCode == 13) {
                        recodeKey.enter = false;
                    } else if (event.keyCode == 17) {
                        recodeKey.ctrl = false;
                    }
                }
            }];
        },
        click: function click(fn) {
            if (window.navigator.userAgent.toLowerCase().match(/android/) && 0) {
                var time = 0;
                var isMove = false;
                return [{
                    eventName: 'touchstart',
                    listener: function listener(event) {
                        time = Date.now();
                    }
                }, {
                    eventName: 'touchmove',
                    listener: function listener(event) {
                        isMove = true;
                    }
                }, {
                    eventName: 'touchend',
                    listener: function listener(event) {
                        !isScroll && !isMove && Date.now() - time < 200 && fn(event);
                        isMove = false;
                    }
                }];
            } else {
                return [{
                    eventName: 'click',
                    listener: fn
                }];
            }
        }
    };
    /**
     * 添加事件别名
     * @param eventName
     * @param fn
     */
    function addEventAlias(eventName, fn) {
        eventAlias[eventName] = fn;
    }

    function handleStyle(style) {
        switch (getType(style)) {
            case 'string':
                {
                    return style;
                }
            case 'array':
                {
                    return style.map(handleStyle).join(';');
                }
            case 'object':
                {
                    // 可以处理一般的css3兼容性
                    return Object.entries(style).map(function (_ref) {
                        var _ref2 = slicedToArray(_ref, 2),
                            key = _ref2[0],
                            value = _ref2[1];

                        if (isString(value)) {
                            var KEY = key.replace(/[A-Z]/g, function ($1) {
                                return '-' + $1.toLowerCase();
                            });
                            return KEY + ': ' + value;
                        }
                        return '';
                    }).filter(function (i) {
                        return i;
                    }).join(';');
                }
            default:
                {
                    return '';
                }
        }
    }

    function diff() {
        var oldArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var isKeyExist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        newArr = uniqueArr(newArr);
        // getDelete
        var deleteArr = [];
        var keepArr = [];
        var addAll = false;
        var prevIndex = -2;
        var add = void 0;
        if (!isKeyExist) {
            return {
                del: {
                    arr: oldArr
                },
                add: {
                    before: {
                        key: null,
                        arr: newArr
                    },
                    after: {
                        key: null,
                        arr: []
                    }
                },
                noChange: false
            };
        }
        for (var i = 0; i < oldArr.length; i++) {
            var item = oldArr[i];
            var INDEX = newArr.indexOf(item);
            // console.log(INDEX, item)
            if (INDEX < 0) {
                deleteArr.push(item);
            } else {
                // 判断是否在newArr中连续出现
                if (prevIndex !== -2 && prevIndex + 1 !== INDEX) {
                    addAll = true;
                    deleteArr = oldArr;
                    keepArr = [];
                    break;
                } else {
                    keepArr.push(item);
                }
                prevIndex = INDEX;
            }
        }
        if (addAll || !keepArr.length) {
            add = {
                before: {
                    key: null,
                    arr: newArr
                },
                after: {
                    key: 0,
                    arr: []
                }
            };
        } else {
            var start = newArr.indexOf(keepArr[0]);
            var end = newArr.indexOf(keepArr[keepArr.length - 1]);
            add = {
                before: {
                    key: keepArr[0],
                    arr: newArr.slice(0, start)
                },
                after: {
                    key: keepArr[keepArr.length - 1],
                    arr: newArr.slice(end + 1)
                }
            };
        }
        // 计算新增数组
        return {
            del: {
                arr: deleteArr
            },
            add: add,
            noChange: add.before.arr.length === 0 && add.after.arr.length === 0 && deleteArr.length === 0
        };
    }

    function getKeyExpr(node) {
        var child = node.children[0];
        return child && (child.props['key'] || child.props[':key'] || child.props[DIRECTIVE_PREV + "expr:key"]);
    }
    function handleFor(value, element, ctxs, vdom, node) {
        var _value$split$map = value.split(' in ').map(function (i) {
            return i.trim();
        }),
            _value$split$map2 = slicedToArray(_value$split$map, 2),
            itemIndex = _value$split$map2[0],
            arrName = _value$split$map2[1];

        var _itemIndex$replace$sp = itemIndex.replace(/(^\s*\()|(\)\s*$)/g, '').split(',').map(function (i) {
            return i.trim();
        }),
            _itemIndex$replace$sp2 = slicedToArray(_itemIndex$replace$sp, 2),
            itemName = _itemIndex$replace$sp2[0],
            indexName = _itemIndex$replace$sp2[1];

        var isExeced = false; // 是否执行过
        var cacheKeys = [];
        var cacheKeyVdom = {};
        var keyValue = getKeyExpr(node);
        vdom.exprs.push(execExpr(arrName, ctxs, function (newValue) {
            if (node.children.length > 1) {
                console.error(DIRECTIVE_PREV + "for just should have one child");
            }
            // diff cache key
            var newKeyValue = newValue.map(function (item, index) {
                var _ref;

                var key = void 0;
                execExpr(keyValue, [].concat(toConsumableArray(ctxs), [(_ref = {}, defineProperty(_ref, itemName, item), defineProperty(_ref, indexName, index), _ref)]), function (newValue) {
                    key = newValue;
                })();
                return {
                    key: key,
                    item: item
                };
            });
            // console.log(newKeyValue)
            var newKyes = newKeyValue.map(function (i) {
                return i.key;
            });

            var _diff = diff(cacheKeys, newKyes, keyValue),
                add = _diff.add,
                del = _diff.del,
                noChange = _diff.noChange;

            if (noChange) return;
            cacheKeys = newKyes;
            // 如果执行过
            if (isExeced) {
                // 存在key，卸载需要删除的key对应的vdom，否则整体卸载
                if (keyValue) {
                    del.arr.forEach(function (key) {
                        cacheKeyVdom[key] && unmountChildren(cacheKeyVdom[key].vdom);
                        delete cacheKeyVdom[key]; // 删除缓存
                    });
                } else {
                    unmountChildren(vdom);
                }
            }
            isExeced = true;
            // 我们只处理 移除 + 头尾新增的情况
            // key不发生变化的需要更新index
            // key新增的还是需要新增
            var childNode = element.childNodes && element.childNodes[0];
            newKeyValue.forEach(function (keyItem, index) {
                var key = keyItem.key,
                    item = keyItem.item;
                // 不存在就新增，存在就更新

                if (!cacheKeyVdom[key]) {
                    var dd = {};
                    indexName && (dd[indexName] = index);
                    itemName && (dd[itemName] = item);
                    var observeIndexItem = observer(dd);
                    var PE = add.before.arr.includes(key) ? {
                        appendChild: function appendChild(newNode) {
                            childNode ? element.insertBefore(newNode, childNode) : element.appendChild(newNode);
                            return newNode;
                        }
                    } : element;
                    var result = transform(node, PE, [].concat(toConsumableArray(ctxs), [observeIndexItem]), vdom);
                    // 如果没有key就不要加入缓存了
                    if (keyValue) {
                        cacheKeyVdom[key] = {
                            vdom: result,
                            observeIndexItem: observeIndexItem
                        };
                    }
                } else {
                    var hh = cacheKeyVdom[key].observeIndexItem;
                    // itemName && (hh[itemName] = item)
                    indexName && (hh[indexName] = index);
                }
            });
        }));
    }

    function handleIf(parent, node, ctxs, parentVdom) {
        var commentHook = document.createComment('ys:if 占位');
        parent.appendChild(commentHook);
        var collect = [];
        parentVdom.exprs.push(execExpr(node.props['ys:if'], ctxs, function (newValue, oldValue) {
            if (newValue) {
                addElement(function (ele, vdom) {
                    vdom && collect.push(vdom);
                    ele && commentHook.parentElement && commentHook.parentElement.insertBefore(ele, commentHook);
                }, node, ctxs, parentVdom);
            } else {
                // 如果node
                collect.forEach(function (i) {
                    return unmountNode(i);
                });
                collect = [];
            }
        }));
    }

    var NEED_RESET_KEY = [':key', DIRECTIVE_PREV + 'if', DIRECTIVE_PREV + 'show', DIRECTIVE_PREV + 'for'];
    // key发生变化后，组件重新选案
    function handleKeyChange(vdom) {
        unmountNode(vdom);
        vdom.reRender && vdom.reRender();
    }
    // 处理innerHTML
    function handleDangerousHTML(vdom) {
        var ctxs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var dom = vdom.dom;

        if (dom instanceof HTMLElement) {
            if (key === 'dangerousHTML') {
                dom.innerHTML = vdom.ast.props[key];
            } else if (key === ':dangerousHTML') {
                execExpr(vdom.ast.props[key], ctxs, function (newValue, oldValue) {
                    dom.innerHTML = newValue;
                });
            }
        }
        return false;
    }
    /**
     * 添加属性
     *
     * @param {HTMLElement} element
     * @param {any} node
     * @param {array} ctxs
     * @returns
     */
    function addProperties(element, vdom, ctxs) {
        var node = vdom.ast;

        var info = {
            transformChildren: true
        };
        resortArr(Object.keys(node.props), NEED_RESET_KEY).forEach(function (key) {
            var value = node.props[key];
            // 处理class
            if (handleClass(vdom, ctxs, key)) return;
            // 处理html
            if (handleDangerousHTML(vdom, ctxs, key)) return;
            var KEY = key.slice(1);
            // 处理事件绑定
            if (key.startsWith('@') && element instanceof HTMLElement) {
                var aliasListeners = [];
                vdom.exprs.push(execExpr(value, ctxs, function (newValue, oldValue) {
                    if (eventAlias[KEY]) {
                        // 使用事件别名
                        aliasListeners.forEach(function (aliasListener) {
                            vdom.events.off(element, aliasListener.eventName, aliasListener.listener);
                        });
                        aliasListeners = eventAlias[KEY](newValue);
                        aliasListeners.forEach(function (aliasListener) {
                            vdom.events.on(element, aliasListener.eventName, aliasListener.listener);
                        });
                    } else {
                        vdom.events.off(element, KEY, oldValue);
                        vdom.events.on(element, KEY, newValue);
                    }
                }));
            } else if (key.startsWith(':')) {
                vdom.exprs.push(execExpr(value, ctxs, function (newValue, oldValue, execTime) {
                    if (['checked', 'value'].includes(KEY)) {
                        element[KEY] = newValue;
                    } else if (KEY === 'style') {
                        newValue = handleStyle(newValue);
                    } else if (KEY === 'key' && oldValue !== newValue && execTime > 1) {
                        // 如果key发生变化，会卸载原有vdom，重新渲染
                        handleKeyChange(vdom);
                        return;
                    }
                    element.setAttribute(KEY, newValue);
                }));
            } else if (key.startsWith(DIRECTIVE_PREV)) {
                var directive = key.slice(DIRECTIVE_PREV.length);
                // 显示
                if (directive === 'show') {
                    vdom.exprs.push(execExpr(value, ctxs, function (newValue, oldValue) {
                        element.style.cssText += ';display: ' + (newValue ? 'block' : 'none') + ';';
                    }));
                } else if (directive === 'for') {
                    info.transformChildren = false;
                    handleFor(value, element, ctxs, vdom, node);
                } else if (directive === 'bgd') {
                    vdom.exprs.push(execExpr(value, ctxs, function (newValue, oldValue) {
                        element.style.cssText += ';background: url(' + newValue + ');';
                    }));
                } else if (directive === 'html') {
                    info.transformChildren = false;
                    vdom.exprs.push(execExpr(value, ctxs, function (newValue, oldValue) {
                        element.innerHTML = newValue;
                    }));
                } else if (directive.startsWith(DIRECTIVE_EXPR)) {
                    var _KEY = directive.slice(DIRECTIVE_EXPR.length);
                    execExpr(value, ctxs, function (newValue, oldValue) {
                        element.setAttribute(_KEY, newValue);
                    })();
                }
            } else if (key === 'ref') {
                switch (getType(value)) {
                    case 'string':
                        {
                            ctxs[0].refs[value] = element;
                            break;
                        }
                    case 'function':
                        {
                            value(vdom.dom);
                            break;
                        }
                }
            } else {
                element.setAttribute(key, node.props[key]);
            }
        });
        return info;
    }
    /**
     * 获取自定义组件属性
     */
    function getProps(vdom, ctxs) {
        var node = vdom.ast;

        var newProps = {};
        resortArr(Object.keys(node.props), NEED_RESET_KEY).forEach(function (key) {
            var value = node.props[key];
            if (/^@|:|ys:expr:/.test(key)) {
                var KEY = key.replace(/^@|:|ys:expr:/, '');
                vdom.exprs.push(execExpr(value, ctxs, function (newValue, oldValue, execTime) {
                    // 如果key为props，则对props进行rest操作，方便子组件对数据的获取
                    if (KEY === 'props') {
                        Object.entries(newValue).forEach(function (_ref) {
                            var _ref2 = slicedToArray(_ref, 2),
                                k = _ref2[0],
                                v = _ref2[1];

                            addObserve(newProps, k, v);
                        });
                    } else {
                        newProps[KEY] = newValue;
                    }
                    if (KEY === 'key' && oldValue !== newValue && execTime > 1) {
                        // 如果key发生变化，会卸载原有vdom，重新渲染
                        handleKeyChange(vdom);
                    }
                }));
            } else {
                newProps[key] = value;
            }
        });
        // 元素传递
        newProps['children'] = {
            node: node,
            ctxs: ctxs
        };
        newProps = observer(newProps);
        return newProps;
    }
    /**
     * 添加元素
     */
    function addElement(appendFn, ast, ctxs, parentVdom) {
        var vdom = new VirtualDOM(parentVdom);
        vdom.ast = ast;
        vdom.ctxs = ctxs;
        // 方便dom卸载后，重新渲染
        vdom.reRender = function () {
            addElement(appendFn, ast, ctxs, parentVdom);
        };
        if (/^[A-Z]/.test(ast.tagName)) {
            // 处理子组件
            var Com = getComponent(ast.tagName, ctxs);
            // 判断是否是Component的子类
            if (isComponent(Com, ast)) {
                var renderComponent = function renderComponent(Com) {
                    // 因为有可能是异步获取组件，因此这里对vdom进行判断，vdom是否已经被卸载
                    if (vdom.unmounted) {
                        console.log('vdom已被卸载，不执行渲染');
                        return;
                    }
                    // 通过创建一个Comment占位节点，可实无root渲染
                    var com = render(Com, getProps(vdom, ctxs), {
                        appendChild: appendFn
                    }, vdom);
                    com.parent = getParentCtx(ctxs);
                    com.parent.children.push(com);
                    vdom.component = com;
                    // 添加ref
                    if (ast.props.ref) {
                        ctxs[0].refs[ast.props.ref] = com;
                    }
                };
                // 如果是Promise，可执行懒加载


                appendFn(undefined, vdom);
                if (isPromise(Com)) {
                    Com.then(function (Com) {
                        renderComponent(Com);
                    });
                } else {
                    renderComponent(Com);
                }
            }
        } else if (ast.tagName === 'slot') {
            // 处理slot，获取children后，并不监听变化
            execExpr('props.children', ctxs, function (newValue) {
                transform(newValue.node, {
                    appendChild: appendFn
                }, [getProps(vdom, ctxs)].concat(toConsumableArray(newValue.ctxs)), parentVdom);
            })();
        } else if (ast.tagName === 'template') {
            appendFn(null, vdom); // 添加vdom
            transform(ast, {
                appendChild: appendFn
            }, ctxs, vdom);
        } else {
            var createE = vdom.ast.isSVG ? document.createElementNS('http://www.w3.org/2000/svg', ast.tagName) // 添加svg支持
            : document.createElement(ast.tagName);
            vdom.dom = createE;
            appendFn(createE, vdom);
            var result = addProperties(createE, vdom, ctxs);
            vdom.oncreate();
            result.transformChildren && ast.children && ast.children.length && transform(ast, createE, ctxs, vdom);
        }
        return vdom;
    }
    /**
     * ast transform to node
     *
     * @param {any} ast
     * @param {HTMLElement} element
     * @param {anray} ctxs
     */
    function transform(ast, element, ctxs) {
        var parentVdom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new VirtualDOM();

        var vdoms = ast.children.map(function (node) {
            if (node.type === 'element' || node.type === 'component') {
                // 处理ys:if指令
                if (node.props[DIRECTIVE_PREV + 'if']) {
                    handleIf(element, node, ctxs, parentVdom);
                } else {
                    return addElement(function (createE) {
                        createE && element.appendChild(createE);
                    }, node, ctxs, parentVdom);
                }
            } else {
                var vdom = new VirtualDOM(parentVdom);
                vdom.ast = ast;
                vdom.ctxs = ctxs;
                var createE = void 0;
                if (node.type === 'expr') {
                    createE = document.createTextNode('');
                    element.appendChild(createE);
                    vdom.exprs.push(execExpr(node.value, ctxs, function (newValue) {
                        createE.textContent = newValue;
                    }));
                } else {
                    createE = document.createTextNode(node.value);
                    element.appendChild(createE);
                }
                vdom.dom = createE;
                parentVdom.children.push(vdom);
                return vdom;
            }
        }).filter(function (i) {
            return i;
        });
        return {
            children: vdoms
        };
    }

    function render(Com, props, dom, vdom) {
        // 卸载原有dom上挂载的component
        if (dom instanceof HTMLElement && dom[COMPONENT_DOM_HOOK] && dom[COMPONENT_DOM_HOOK].vdom && !dom[COMPONENT_DOM_HOOK].vdom.unmounted) {
            dom[COMPONENT_DOM_HOOK].__willUnmount();
        }
        // string/function -> Component
        if (isFunction(Com)) {
            // 如果函数没有继承Component，就把它当做render方法
            if (!(Com.prototype instanceof Component)) {
                var renderFn = Com;
                Com = function (_Component) {
                    inherits(Com, _Component);

                    function Com() {
                        classCallCheck(this, Com);
                        return possibleConstructorReturn(this, (Com.__proto__ || Object.getPrototypeOf(Com)).apply(this, arguments));
                    }

                    createClass(Com, [{
                        key: 'render',
                        value: function render() {
                            return renderFn();
                        }
                    }]);
                    return Com;
                }(Component);
            }
        } else if (isString(Com)) {
            var template = Com;
            Com = function (_Component2) {
                inherits(Com, _Component2);

                function Com() {
                    classCallCheck(this, Com);

                    var _this2 = possibleConstructorReturn(this, (Com.__proto__ || Object.getPrototypeOf(Com)).apply(this, arguments));

                    _this2.template = template;
                    return _this2;
                }

                return Com;
            }(Component);
        } else {
            console.error('render first param should be a function');
        }
        var ctx = new Com();
        // 把组件实例挂载在dom上
        dom instanceof HTMLElement && (dom[COMPONENT_DOM_HOOK] = ctx);
        // state 与 props 属性不可被更改
        Object.defineProperty(ctx, 'state', {
            writable: false,
            enumerable: true,
            value: observer(ctx.state, { deep: true })
        });
        Object.defineProperty(ctx, 'props', {
            writable: false,
            enumerable: true,
            value: observer(merge(props, Com.defaultProps || {}))
        });
        // 处理computed的key，将其observer化，并挂载在组件实例上
        // 处理需要有个autorun包裹，然后
        // 需要obersev
        Object.keys(ctx.computed).forEach(function (key) {
            addObserve(ctx, key, ctx.computed[key].call(ctx));
            // 待收集依赖
            ctx.vdom.exprs.push(autorun(function () {
                return ctx.computed[key].call(ctx);
            }, {
                callback: function callback(newValue) {
                    ctx[key] = newValue;
                    return;
                }
            }));
        });
        // 即将渲染
        ctx.willMount();
        // 渲染进行中
        var ast = toAST$1(ctx.render());
        ast.ctx = ctx;
        transform(ast, dom, [ctx, ctx.state, ctx.props], ctx.vdom);
        // 渲染完毕
        ctx.didMount();
        return ctx;
    }

    var Link = function (_Component) {
        inherits(Link, _Component);

        function Link() {
            classCallCheck(this, Link);

            var _this = possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));

            _this.click = function (e) {
                var _this$props = _this.props,
                    click = _this$props.click,
                    _this$props$replace = _this$props.replace,
                    replace = _this$props$replace === undefined ? false : _this$props$replace,
                    _this$props$redirect = _this$props.redirect,
                    redirect = _this$props$redirect === undefined ? false : _this$props$redirect,
                    _this$props$href = _this$props.href,
                    href = _this$props$href === undefined ? '' : _this$props$href;

                e.preventDefault();
                click && click(e);
                if (redirect) {
                    replace ? location.replace(href) : location.href = href;
                } else if (replace) {
                    Router.replace(href);
                } else {
                    Router.push(href);
                }
            };
            return _this;
        }

        createClass(Link, [{
            key: "render",
            value: function render$$1() {
                return "\n            <a :data-href={props.href} @click={click} :class={props.class} :style={props.style}>\n                <slot />\n            </a>\n        ";
            }
        }]);
        return Link;
    }(Component);

    Link.defaultProps = {
        href: '',
        style: '',
        class: ''
    };
    // 路由匹配
    function match() {
        var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var urlItems = url.trim().split('/');
        var params = {};
        var router = '';
        var matched = Object.keys(obj).some(function (route) {
            var routeItems = route.trim().split('/');
            router = '';
            // 全局匹配的级别最低，一般用来处理404
            if (route === '*') return false;
            // 长度相等，或者路由以*为结尾并且routeItems不能比urlItems长
            if (routeItems.length === urlItems.length || routeItems[routeItems.length - 1] === '*' && routeItems.length <= urlItems.length) {
                params = {}; // 获取参数
                router = route; // 匹配到的路由地址
                return routeItems.every(function (i, index) {
                    var urlItemsItem = urlItems[index];
                    // 参数匹配
                    if (i.startsWith(':')) {
                        // 对 /:id的支持
                        var _i$slice$split = i.slice(1).split('@'),
                            _i$slice$split2 = slicedToArray(_i$slice$split, 2),
                            key = _i$slice$split2[0],
                            reg = _i$slice$split2[1];

                        params[key] = urlItemsItem;
                        // 对正则表达式的支持 /:name@aa.+
                        if (reg) {
                            return new RegExp("^" + reg + "$").test(urlItemsItem);
                        }
                        return true;
                    }
                    // * 匹配所有
                    if (i === '*') {
                        return true;
                    }
                    // 常规性匹配 Abc*
                    if (i.includes('*')) {
                        var _reg = i.replace('*', '.*');
                        return new RegExp("^" + _reg + "$").test(urlItemsItem);
                    }
                    // 纯文匹配
                    return i === urlItemsItem;
                });
            }
            return false;
        });
        if (matched) {
            return {
                params: params,
                url: url,
                router: router,
                value: obj[router]
            };
        } else if (obj['*']) {
            // 观察是否配置了全局匹配
            // 其实此时应该跳转404
            return {
                params: params,
                url: url,
                router: '*',
                value: obj['*']
            };
        }
        return null;
    }
    var Router = {
        hash: false,
        routes: {},
        $root: document.body,
        push: function push(url) {
            window.history.pushState({}, '', this.getFullPath(url));
            this.handleUrlChange(url);
        },
        replace: function replace(url) {
            window.history.replaceState({}, '', this.getFullPath(url));
            this.handleUrlChange(url);
        },
        handleUrlChange: function handleUrlChange(url) {
            var a = document.createElement('a');
            a.href = url;
            var path = a.pathname;
            var result = match(path, this.routes);
            if (result) {
                var _router = result.router,
                    params = result.params,
                    value = result.value;
                var component = value.component,
                    _value$props = value.props,
                    props = _value$props === undefined ? {} : _value$props;

                render(component, Object.assign({}, props, { params: params }), this.$root);
            }
        },
        getFullPath: function getFullPath(url) {
            return this.hash ? "" + location.pathname + location.search + "#" + url : url;
        },
        getPathname: function getPathname() {
            return (this.hash ? location.hash.slice(1) : location.pathname) || '/';
        }
    };
    function router(config) {
        register('Link', Link);
        Router = Object.assign({}, Router, config);
        window.addEventListener('popstate', function () {
            Router.handleUrlChange(Router.getPathname());
        });
        Router.handleUrlChange(Router.getPathname());
    }

    function cssModule(styles) {
        return function (target) {
            target.prototype[HANDLE_CLASS_FN_NME] = function () {
                var classNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

                return classNames.trim().split(/\s+/g).map(function (key) {
                    // 如果不存在key的映射，就返回key， 这样子即使用了module class也兼容了global class
                    return styles[key] || key;
                }).join(' ');
            };
        };
    }

    var index = {
        observer: observer,
        isObserve: isObserve,
        addObserve: addObserve,
        observerDeep: observerDeep,
        autorun: autorun,
        Component: Component,
        render: render,
        register: register,
        registerComponents: registerComponents,
        addEventAlias: addEventAlias,
        addPipe: addPipe,
        forceUpdate: forceUpdate,
        // plugins
        router: router,
        cssModule: cssModule
    };

    exports['default'] = index;
    exports.observer = observer;
    exports.isObserve = isObserve;
    exports.addObserve = addObserve;
    exports.observerDeep = observerDeep;
    exports.autorun = autorun;
    exports.Component = Component;
    exports.render = render;
    exports.register = register;
    exports.registerComponents = registerComponents;
    exports.addEventAlias = addEventAlias;
    exports.addPipe = addPipe;
    exports.forceUpdate = forceUpdate;
    exports.router = router;
    exports.cssModule = cssModule;

    Object.defineProperty(exports, '__esModule', { value: true });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_yisec__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_yisec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_yisec__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__douban__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _dec, _class2, _dec2, _class4;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







Object(__WEBPACK_IMPORTED_MODULE_0_yisec__["addPipe"])({
    date: function date(time) {
        var d = new Date(time);
        return '\u521B\u5EFA\u4E8E: ' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    },
    log: function log(any) {
        console.log('log', any);
        return any;
    }
});

var Btn = (_temp2 = _class = function (_Component) {
    _inherits(Btn, _Component);

    function Btn() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Btn);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Btn.__proto__ || Object.getPrototypeOf(Btn)).call.apply(_ref, [this].concat(args))), _this), _this.create = function () {
            console.log('哈哈哈哈哈');
        }, _this.template = '\n        <button style="background: red;" @click="click" oncreate={create}>\n            <span>\n                <slot />\n            </span>\n        </button>\n    ', _this.click = function (e) {
            _this.props.click(e);
            _this.$emit('heihei', 1, 2);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Btn;
}(__WEBPACK_IMPORTED_MODULE_0_yisec__["Component"]), _class.defaultProps = {
    title: '默认的'
}, _temp2);
var Todo = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_yisec__["cssModule"])(__WEBPACK_IMPORTED_MODULE_1__index_scss___default.a), _dec(_class2 = function (_Component2) {
    _inherits(Todo, _Component2);

    function Todo() {
        var _ref2;

        var _temp3, _this2, _ret2;

        _classCallCheck(this, Todo);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp3 = (_this2 = _possibleConstructorReturn(this, (_ref2 = Todo.__proto__ || Object.getPrototypeOf(Todo)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
            edit: false,
            store: store
        }, _this2.components = {
            Btn: Btn
        }, _this2.emit = {
            pageSwitch: function pageSwitch(state) {
                console.log('btn', state);
            },
            haha: function haha() {
                console.log(_this2.props.index, '接收到了通知');
            }
        }, _this2.toggleEdit = function () {
            if (_this2.state.edit) {
                _this2.props.item.title = _this2.refs.$title.value;
            }
            _this2.state.edit = !_this2.state.edit;
            _this2.props.save();
        }, _this2.toggle = function () {
            _this2.props.item.complete = !_this2.props.item.complete;
            _this2.props.save();
        }, _temp3), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(Todo, [{
        key: 'willMount',
        value: function willMount() {
            console.log(this.props);
        }
    }, {
        key: 'willUnmount',
        value: function willUnmount() {
            console.log('(ಥ _ ಥ)被卸载了', this.props);
        }
    }, {
        key: 'heihei',
        value: function heihei() {
            console.log('btn emit');
            this.$emitSiblings('haha', '通知兄弟们');
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            return '\n            <div = class="flex todo-item" leaveTime="300" leave-class="xxx">\n                <input type="checkbox" :checked={item.complete} @change={toggle} />\n                {index}:\n                <div class="item-text">\n                    <template ys:if={state.edit}>\n                        <input\n                            type="text"\n                            ref="$title"\n                            :value={item.title}\n                            @ctrlEnter={toggleEdit}\n                            @blur={toggleEdit}\n                            autofocus />\n                    </template>\n                    <div ys:if={!state.edit} @click={toggleEdit}>\n                        {item.title}\n                    </div>\n                </div>\n                <div>\n                    { store.time }\n                    <button @click={() => store.time++}>+1</button>\n                </div>\n                <Btn @click="del">\n                    del\n                </Btn>\n            </div>\n            <p style="font-size: 12px; color: gray; text-align: right;">{props.key|date|log}</p>\n            <slot @name={props.key}/>\n        ';
        }
    }]);

    return Todo;
}(__WEBPACK_IMPORTED_MODULE_0_yisec__["Component"])) || _class2);


__WEBPACK_IMPORTED_MODULE_0_yisec___default.a.register('Todo', Todo);

var TodoList = (_dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_yisec__["cssModule"])(__WEBPACK_IMPORTED_MODULE_1__index_scss___default.a), _dec2(_class4 = function (_Component3) {
    _inherits(TodoList, _Component3);

    function TodoList() {
        var _ref3;

        var _temp4, _this3, _ret3;

        _classCallCheck(this, TodoList);

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return _ret3 = (_temp4 = (_this3 = _possibleConstructorReturn(this, (_ref3 = TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {
            filter: 'all',
            buttons: ['all', 'active', 'complete']
            // getter
        }, _this3.computed = {
            currentItems: function currentItems() {
                var store = this.props.store;

                var type = this.state.filter;
                var result = store.items.filter(function (item) {
                    if (type === 'all') {
                        return true;
                    } else if (type === 'complete') {
                        return item.complete;
                    }
                    return !item.complete;
                });
                console.log(result);
                return result;
            },
            left: function left() {
                return store.items.length;
            }
        }, _this3.heihei = function () {
            console.log(_this3.state, '被heihei了');
        }, _this3.pageChange = function () {
            _this3.$emitChildren('pageSwitch', 'hide');
        }, _this3.changeFilter = function (type) {
            return function (event) {
                event && event.stopPropagation();
                _this3.state.filter = type;
            };
        }, _this3.del = function (id) {
            return function (event) {
                event.stopPropagation();
                var store = _this3.props.store;

                store.items = store.items.filter(function (i) {
                    return i.id != id;
                });
                store.save();
            };
        }, _this3.add = function () {
            var store = _this3.props.store;

            var id = Date.now();
            store.items.push({
                title: _this3.refs.$input.value,
                complete: false,
                id: id
            });
            _this3.refs.$input.value = '';
            store.save();
        }, _this3.slotClick = function () {
            console.log(_this3.state.filter);
        }, _temp4), _possibleConstructorReturn(_this3, _ret3);
    }
    // state 状态


    _createClass(TodoList, [{
        key: 'willMount',
        value: function willMount() {
            console.log(this.getType);
        }
    }, {
        key: 'getType',
        value: function getType(type) {
            return type;
        }
    }, {
        key: 'render',
        value: function render() {
            return '\n            <div class="main" :enter-class={[\'transition-up\']}>\n                <Link href="/douban">\u53BB\u8C46\u74E3</Link>\n                <Link href="/svg">SVG</Link>\n                <h1 class="xx haha" @click="pageChange"> Todo List </h1>\n                <input\n                    type="text"\n                    class="add-input"\n                    ref="$input"\n                    @enter="add"\n                    placeholder="add a todo item" />\n                <div ys:for="(item,index) in currentItems">\n                    <Todo :index="index" item={item} del={del(item.id)} key={item.id} save={store.save}>\n                        <p click={slotClick}>slot render { name | date }</p>\n                    </Todo>\n                </div>\n                <div ys:if={!currentItems.length}>\n                    Empty !!!\n                </div>\n                <div>\n                    {left} left\n                    <span ys:for={type in state.buttons} class="btns">\n                        <button @click={changeFilter(type)} :class={[{current: state.filter === type}]}>\n                            {getType(type)}\n                        </button>\n                    </span>\n                </div>\n            </div>\n        ';
        }
    }]);

    return TodoList;
}(__WEBPACK_IMPORTED_MODULE_0_yisec__["Component"])) || _class4);

// console.log(process.env.NAME)

// store，可直接使用

var store = Object(__WEBPACK_IMPORTED_MODULE_0_yisec__["observer"])({
    items: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].get() || [],
    time: 0,
    save: function save() {
        __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].save(this.items);
    }
}, { deep: true });

function init() {
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'referrer');
    meta.setAttribute('content', 'never');
    document.head.appendChild(meta);

    Object(__WEBPACK_IMPORTED_MODULE_0_yisec__["router"])({
        hash: true,
        $root: document.querySelector('#app'),
        routes: {
            '/': {
                component: TodoList,
                props: { store: store }
            },
            '/douban': {
                component: __WEBPACK_IMPORTED_MODULE_3__douban__["a" /* default */]
            },
            '/svg': {
                component: __WEBPACK_IMPORTED_MODULE_4__svg__["a" /* default */]
            }
        }
    });
}

init();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--2-1!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--2-1!../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "input[type=checkbox] {\n  -webkit-appearance: checkbox; }\n\n.xx-jpPMi {\n  text-align: center;\n  font-size: 40px; }\n\n.add-input-1WhsY {\n  width: 100%;\n  box-sizing: border-box; }\n\n.center-Dd86b {\n  align-items: center;\n  display: flex;\n  line-height: 1;\n  height: 40px; }\n\n.btns-1gLd5 button {\n  background: inherit;\n  border: none;\n  outline: none; }\n  .btns-1gLd5 button:hover {\n    background: red; }\n  .btns-1gLd5 button.current-3q1Rd {\n    background: pink; }\n\n.main-1AeoW {\n  max-width: 600px;\n  margin: 0 auto; }\n\n.todo-item-T1t1b {\n  padding: 10px;\n  transition: background 0.3s; }\n  .todo-item-T1t1b:hover {\n    background: #69a3d8;\n    color: #fff; }\n  .todo-item-T1t1b .item-text-pUbVK {\n    flex: 1; }\n\n.transition-up-auDQS {\n  animation: up-eaLFL 0.3s both;\n  transform: translateY(50%); }\n\n@keyframes up-eaLFL {\n  from {\n    transform: translateY(50px); }\n  to {\n    opacity: 1;\n    transform: translateY(0%); } }\n\ninput {\n  border: 1px solid #000;\n  height: 2em; }\n\n.flex {\n  display: flex; }\n\n.xxx {\n  animation: leave 0.3s both; }\n\n@keyframes leave {\n  from {\n    transform: translateX(0); }\n  to {\n    opacity: 1;\n    transform: translateX(100%); } }\n\n.title {\n  border-radius: 10px; }\n", ""]);

// exports
exports.locals = {
	"xx": "xx-jpPMi",
	"add-input": "add-input-1WhsY",
	"center": "center-Dd86b",
	"btns": "btns-1gLd5",
	"current": "current-3q1Rd",
	"main": "main-1AeoW",
	"todo-item": "todo-item-T1t1b",
	"item-text": "item-text-pUbVK",
	"transition-up": "transition-up-auDQS",
	"up": "up-eaLFL"
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var key = 'test_app';
/* harmony default export */ __webpack_exports__["a"] = ({
    save: function save(json) {
        localStorage.setItem(key, JSON.stringify(json));
    },
    get: function get() {
        var str = localStorage.getItem(key);
        try {
            return JSON.parse(str);
        } catch (err) {
            return [];
        }
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Douban; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_yisec__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_yisec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_yisec__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
var _class2, _temp3, _dec, _class4, _class5, _temp6;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





var store = Object(__WEBPACK_IMPORTED_MODULE_1_yisec__["observer"])({
    now: [],
    top250: [],
    'get-now': function getNow() {
        var _this = this;

        Object(__WEBPACK_IMPORTED_MODULE_0__ajax__["a" /* jsonp */])('https://api.douban.com/v2/movie/in_theaters', function (res) {
            _this.now = res.subjects;
        });
    },
    'get-top250': function () {
        var ajax = false;
        return function () {
            if (ajax) return;
            ajax = true;
            var url = 'https://api.douban.com/v2/movie/top250?start=' + this.top250.length + '&count=18';
            Object(__WEBPACK_IMPORTED_MODULE_0__ajax__["a" /* jsonp */])(url, function (res) {
                var _store$top;

                (_store$top = store.top250).push.apply(_store$top, _toConsumableArray(res.subjects));
                ajax = false;
            });
        };
    }()
}, { deep: true });

var Scroll = window.ss = function () {
    var cache = {};

    function trigger(key) {
        var data = {
            top: Scroll.top,
            bottom: Scroll.bottom,
            height: Scroll.height
        };
        if (key) {
            cache[key] && cache[key](data);
        } else {
            Object.keys(cache).forEach(function (key) {
                cache[key] && cache[key](data);
            });
        }
    }
    var timeout = void 0;
    window.addEventListener('scroll', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            trigger();
        }, 50);
    });

    return {
        get top() {
            return document.body.scrollTop || document.documentElement.scrollTop;
        },
        set top(newValue) {
            document.body.scrollTop = newValue;
            document.documentElement.scrollTop = newValue;
        },
        get height() {
            return document.body.scrollHeight || document.documentElement.scrollHeight;
        },
        get bottom() {
            return Scroll.height - Scroll.top - window.innerHeight;
        },
        set bottom(newValue) {
            Scroll.top = Scroll.height - window.innerHeight - newValue;
        },
        toTop: function toTop() {
            Scroll.top = 0;
        },
        toBottom: function toBottom() {
            Scroll.bottom = 0;
        },
        on: function on(key, fn) {
            var _this2 = this;

            // if ()
            cache[key] = fn;
            trigger(key);
            return function () {
                _this2.off(key);
            };
        },
        off: function off(key) {
            delete cache[key];
            return this;
        }
    };
}();

// 图墙

var Wall = function (_Component) {
    _inherits(Wall, _Component);

    function Wall() {
        var _ref;

        var _temp, _this3, _ret;

        _classCallCheck(this, Wall);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref = Wall.__proto__ || Object.getPrototypeOf(Wall)).call.apply(_ref, [this].concat(args))), _this3), _this3.onScroll = function () {
            if (Scroll.bottom < 2000) {
                _this3.props.onScroll && _this3.props.onScroll();
            }
        }, _temp), _possibleConstructorReturn(_this3, _ret);
    }

    _createClass(Wall, [{
        key: 'willMount',
        value: function willMount() {
            window.addEventListener('scroll', this.onScroll);
        }
    }, {
        key: 'willUnmoun',
        value: function willUnmoun() {
            window.removeEventListener('scroll', this.onScroll);
        }
    }, {
        key: 'render',
        value: function render() {
            return '\n            <slot/>\n        ';
        }
    }]);

    return Wall;
}(__WEBPACK_IMPORTED_MODULE_1_yisec__["Component"]);

// 图片懒加载


var Lazy = (_temp3 = _class2 = function (_Component2) {
    _inherits(Lazy, _Component2);

    function Lazy() {
        var _ref2;

        var _temp2, _this4, _ret2;

        _classCallCheck(this, Lazy);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, (_ref2 = Lazy.__proto__ || Object.getPrototypeOf(Lazy)).call.apply(_ref2, [this].concat(args))), _this4), _this4.key = 'lazy-img-' + Lazy.id++, _this4.addScroll = function (_ref3) {
            var height = _ref3.height,
                top = _ref3.top,
                bottom = _ref3.bottom;

            var rect = _this4.refs.img.getBoundingClientRect();
            var _window = window,
                innerHeight = _window.innerHeight;

            if (rect.top >= 0 && rect.top <= innerHeight || rect.bottom >= 0 && rect.bottom <= innerHeight || rect.top < 0 && rect.bottom > innerHeight) {
                var src = _this4.props.src;

                _this4.rmScroll();
                _this4.refs.img.src = src.replace('img1.', 'img3.');
            }
        }, _this4.rmScroll = function () {
            return Scroll.off(_this4.key);
        }, _temp2), _possibleConstructorReturn(_this4, _ret2);
    }

    _createClass(Lazy, [{
        key: 'didMount',
        value: function didMount() {
            Scroll.on(this.key, this.addScroll);
        }
    }, {
        key: 'willMount',
        value: function willMount() {
            this.rmScroll();
        }
    }, {
        key: 'render',
        value: function render() {
            return '\n            <img ref="img" :class={props.class} :style={props.style} referrerpolicy="never" />\n        ';
        }
    }]);

    return Lazy;
}(__WEBPACK_IMPORTED_MODULE_1_yisec__["Component"]), _class2.id = 0, _temp3);

var Movie = function (_Component3) {
    _inherits(Movie, _Component3);

    function Movie() {
        var _ref4;

        var _temp4, _this5, _ret3;

        _classCallCheck(this, Movie);

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return _ret3 = (_temp4 = (_this5 = _possibleConstructorReturn(this, (_ref4 = Movie.__proto__ || Object.getPrototypeOf(Movie)).call.apply(_ref4, [this].concat(args))), _this5), _this5.components = {
            Lazy: Lazy
        }, _this5.computed = {
            bgd: function bgd() {
                var cover = _this5.props.cover;

                return {
                    paddingTop: 190 / 135 * 100 + '%',
                    display: 'block',
                    textDecoration: 'none',
                    position: 'relative',
                    fontSize: '14px',
                    color: '#fff',
                    margin: '0 auto'
                };
            },
            isShow: function isShow() {
                return !/惊悚|恐怖/.test(_this5.props.genres.join(','));
            }
        }, _temp4), _possibleConstructorReturn(_this5, _ret3);
    }

    _createClass(Movie, [{
        key: 'render',
        value: function render() {
            // 把连续的 if elesif else 作为一个node 也可以定义一个不渲染的节点<template></template>
            return '\n            <a ys:if="isShow" target="_blank" href={url} :style={bgd}>\n                <Lazy style="position: absolute; height: 100%; width: 100%; bottom: 0;" alt="" :src="images.large" />\n                <div style="position: absolute; bottom: 0; width: 100%; box-sizing: border-box; padding: 1em; background: rgba(0, 0, 0, .6);">\n                    <h2>{original_title} { title }\uFF08{year}\uFF09</h2>\n                    <p>\u5BFC\u6F14: {directors.map(i => i.name).join(\' \')}</p>\n                    <p>\u4E3B\u6F14: {casts.map(i => i.name).join(\' \')}</p>\n                    <p>\u4FE1\u606F: {genres.join()}</p>\n                    <p>\u8BC4\u5206:\n                        <span ys:if={rating}>\n                            {rating.average}/{rating.max + \' \'}\n                        </span>\n                        <span ys:if={!rating}>\n                            \u6682\u65E0\n                        </span>\n                    </p>\n                </div>\n            </a>\n        ';
        }
    }]);

    return Movie;
}(__WEBPACK_IMPORTED_MODULE_1_yisec__["Component"]);

var Douban = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_yisec__["cssModule"])(__WEBPACK_IMPORTED_MODULE_2__index_scss___default.a), _dec(_class4 = (_temp6 = _class5 = function (_Component4) {
    _inherits(Douban, _Component4);

    function Douban() {
        var _ref5;

        var _temp5, _this6, _ret4;

        _classCallCheck(this, Douban);

        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        return _ret4 = (_temp5 = (_this6 = _possibleConstructorReturn(this, (_ref5 = Douban.__proto__ || Object.getPrototypeOf(Douban)).call.apply(_ref5, [this].concat(args))), _this6), _this6.state = {
            type: 'now'
        }, _this6.components = {
            Movie: Movie,
            Wall: Wall
        }, _this6.loadMore = function () {
            var type = _this6.state.type;

            type === 'top250' && _this6.updateData();
        }, _this6.didMount = function () {
            _this6.use(_this6.list[0])();
        }, _this6.updateData = function () {
            store['get-' + _this6.state.type]();
        }, _this6.use = function (_ref6) {
            var type = _ref6.type,
                title = _ref6.title;
            return function () {
                document.title = title;
                var preType = _this6.state.type;

                _this6[preType + 'Top'] = Scroll.top;
                _this6.state.type = type;
                if (!store[type].length) {
                    _this6.updateData();
                }
                Object(__WEBPACK_IMPORTED_MODULE_1_yisec__["forceUpdate"])();
                Scroll.top = _this6[type + 'Top'] || 0;
            };
        }, _this6.list = [{ type: 'now', title: '正在上映' }, { type: 'top250', title: 'Top250' }], _this6.render = function () {
            return '\n            <div>\n                <div style="padding-bottom: 60px; max-width: 600px;">\n                    <Wall onScroll={loadMore} ref="xx">\n                        <div ys:for={item in store[type]}>\n                            <Movie item={item} :props={item} key={item.id} />\n                        </div>\n                    </Wall>\n                </div>\n                <div class="nav" ys:for={item in list}>\n                    <div @click={use(item)}>{item.title}</div>\n                </div>\n            </div>\n        ';
        }, _temp5), _possibleConstructorReturn(_this6, _ret4);
    }

    return Douban;
}(__WEBPACK_IMPORTED_MODULE_1_yisec__["Component"]), _class5.defaultProps = {
    store: store
}, _temp6)) || _class4);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jsonp; });
var jsonp = function () {
    var id = 0;
    return function jsonp(url, callback) {
        var timeStart = Date.now();
        id += 1;
        var script = document.createElement('script');
        if (url.includes('?')) {
            url += '&callback=jsonp' + id;
        } else {
            url += '?callback=jsonp' + id;
        }
        script.src = url;
        window['jsonp' + id] = function (res) {
            console.log('请求时间', Date.now() - timeStart);
            callback && callback(res);
        };
        document.head.appendChild(script);
    };
}();



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".nav-V05ds {\n  position: fixed;\n  z-index: 20000;\n  display: flex;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background: #42bd56;\n  color: #fff;\n  align-items: stretch; }\n  .nav-V05ds div {\n    flex: 1;\n    cursor: pointer;\n    text-align: center;\n    display: flex;\n    height: auto;\n    justify-content: center;\n    align-items: center; }\n", ""]);

// exports
exports.locals = {
	"nav": "nav-V05ds"
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_yisec__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_yisec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_yisec__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _default = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_yisec__["cssModule"])(__WEBPACK_IMPORTED_MODULE_1__index_scss___default.a), _dec(_class = function (_Component) {
    _inherits(_default, _Component);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            src: ''
        }, _this.handleChange = function (e) {
            _this.state.src = URL.createObjectURL(e.target.files[0]);
        }, _this.touchend = function (e) {
            e.preventDefault();
        }, _this.click = function () {
            console.log('click');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            return '\n        <div>\n        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            width="340px" height="333px" viewBox="0 0 340 333" enable-background="new 0 0 340 333" xml:space="preserve">\n            <circle class="circle" cx="160" cy="160" r="100" stroke="#000000" stroke-width="2" fill="rgba(0, 0, 0, 0)" />\n            <path class="path" stroke="#000000" stroke-width="2" d="M 100 160 l 40 40 l 100 -70" fill="rgba(0, 0, 0, 0)" />\n        </svg>\n            <div style="overflow-x: hidden;">\n                <div class="test">\n                    <div></div>\n                </div>\n            </div>\n            <input @click={click} @touchend={touchend} style="height: 300px; background: red; display: block;" type="checkbox" />\n            <img :src="src" alt="" style="width: 100%; height: auto;">\n            <input type="file" accept="image/*" @change="handleChange" />\n\n\n            <svg width="120" height="120" viewPort="0 0 120 120" version="1.1"\n                    xmlns="http://www.w3.org/2000/svg">\n                <rect x="-100" y="10" width="100" height="100">\n                <animate attributeType="XML" attributeName="x" from="-100" to="120"\n                    dur="10s" repeatCount="indefinite"/>\n                </rect>\n            </svg>\n        </div>\n        ';
        }
    }]);

    return _default;
}(__WEBPACK_IMPORTED_MODULE_0_yisec__["Component"])) || _class);



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".test-fHCRM {\n  position: relative; }\n  .test-fHCRM div {\n    height: 200px;\n    background: blue;\n    position: relative; }\n    .test-fHCRM div::before {\n      content: \"\";\n      position: absolute;\n      top: 100%;\n      left: 0;\n      height: 20px;\n      width: 10px;\n      background: red; }\n\n.circle-1IIyP {\n  stroke-dasharray: 700;\n  stroke-dashoffset: 700;\n  animation: dash1-3HSsN 1s linear both; }\n\n@keyframes dash1-3HSsN {\n  from {\n    stroke-dashoffset: 700; }\n  to {\n    stroke-dashoffset: 0; } }\n\n.path-2gnYH {\n  stroke-dasharray: 200;\n  stroke-dashoffset: 200;\n  animation: dash-27xMm .5s 1s linear both; }\n\n@keyframes dash-27xMm {\n  from {\n    stroke-dashoffset: 200; }\n  to {\n    stroke-dashoffset: 0; } }\n", ""]);

// exports
exports.locals = {
	"test": "test-fHCRM",
	"circle": "circle-1IIyP",
	"dash1": "dash1-3HSsN",
	"path": "path-2gnYH",
	"dash": "dash-27xMm"
};

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map