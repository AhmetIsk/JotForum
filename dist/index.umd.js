(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.JotForum = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var n,u$1,i$1,t$1,o$1,r$1={},f$1=[],e$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c$1(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n);}function a$1(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v$1(n,f,i,t,null)}function v$1(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function y$1(n){return n.children}function p$1(n,l){this.props=n,this.context=l;}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k$1(l){(!l.__d&&(l.__d=!0)&&u$1.push(l)&&!b$1.__r++||t$1!==n.debounceRendering)&&((t$1=n.debounceRendering)||i$1)(b$1);}function b$1(){for(var n;b$1.__r=u$1.length;)n=u$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),u$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c$1({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)));});}function m$1(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f$1,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(y$1,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null;}I(n,k,_=_||r$1,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g$1(k,s,n):s=x$1(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_));}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L$1(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h]);}function g$1(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g$1(t,l,u):x$1(u,t,t,n.__k,t.__e,l));return l}function w$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w$2(n,l);}):l.push(n)),l}function x$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function A$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C$1(n,o,l[o],u[o],i);}function P$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e$1.test(l)?u:u+"px";}function C$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H$1:$$1,o):n.removeEventListener(l,o?H$1:$$1,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function $$1(l){this.l[l.type+!1](n.event?n.event(l):l);}function H$1(l){this.l[l.type+!0](n.event?n.event(l):l);}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p$1(g,x),v.constructor=P,v.render=M$1),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c$1({},v.__s)),c$1(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c$1(c$1({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y$1&&null==a.key?a.props.children:a,m$1(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j$1(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i);}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j$1(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1;}if(null===_)p===d||c&&n.data===d||(n.data=d);else {if(o=o&&f$1.slice.call(n.childNodes),v=(p=u.props||r$1).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}if(A$1(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m$1(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C$1(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C$1(n,"checked",k,p.checked,!1));}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L$1(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L$1(t[r],u,i);null!=o&&s(o);}function M$1(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a$1(y$1,null,[l]),o||r$1,r$1,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f$1.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l);}function q(n,l){var u={__c:l="__cC"+o$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n},__v:0},p$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c$1({},this.state),"function"==typeof n&&(n=n(c$1({},u),this.props)),n&&c$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k$1(this));},p$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k$1(this));},p$1.prototype.render=y$1,u$1=[],i$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b$1.__r=0,o$1=0;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var regenerator = runtime_1;

  var t,u,r,o=0,i=[],c=n.__b,f=n.__r,e=n.diffed,a=n.__c,v=n.unmount;function m(t,r){n.__h&&n.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w$1,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!n.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i));}function F$1(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[];}catch(u){t.__H.__h=[],n.__e(u,t.__v);}}),i=[];}n.__b=function(n){u=null,c&&c(n);},n.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[]);},n.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===n.requestAnimationFrame||((r=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x)),u=void 0;},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return !n.__||j(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),a&&a(t,u);},n.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g);}catch(t){n.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j(n){var t=u;n.__c=n.__(),u=t;}function k(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

  function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}(E.prototype=new p$1).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=n.__b;n.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var A=n.__e;n.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);};var O=n.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function F(){this.u=null,this.o=null;}n.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new p$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&a$1(y$1,null,n.fallback);return u&&(u.__h=null),[a$1(y$1,null,t.__e?null:n.children),u]};var M=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(F.prototype=new p$1).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),M(t,n,r)):u();};e?e(o):o();}},F.prototype.render=function(n){this.u=null,this.o=new Map;var t=w$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){M(n,e,t);});};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};p$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(p$1.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=n.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}n.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var G={configurable:!0,get:function(){return this.class}},J=n.vnode;n.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=w$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=w$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r;}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=W,J&&J(n);};var K=n.__r;n.__r=function(n){K&&K(n);};"object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()};

  function Avatar(props) {
    var avatarStyle = {
      borderRadius: "50%",
      width: "50px"
    };
    var url = props.imageURL; // url = url.replace(/\"/g, "");

    console.log(url);
    return a$1("img", {
      style: avatarStyle,
      src: "".concat(url)
    });
  }

  var DataContext = /*#__PURE__*/q(); // This context provider is passed to any component requiring the context

  var FetchData = function FetchData(_ref) {
    var children = _ref.children;

    var _useState = l(null),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1];

    var _useState3 = l(""),
        _useState4 = _slicedToArray(_useState3, 2),
        formID = _useState4[0],
        setFormID = _useState4[1];

    return a$1(DataContext.Provider, {
      value: {
        data: data,
        setData: setData,
        formID: formID,
        setFormID: setFormID
      }
    }, children);
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var miniJFApi = /*#__PURE__*/function () {
    function miniJFApi(apiKey) {
      _classCallCheck(this, miniJFApi);

      this.apiKey = apiKey;
    }

    _createClass(miniJFApi, [{
      key: "getElement",
      value: function getElement(id) {
        return document.getElementById(id);
      }
    }, {
      key: "getForms",
      value: function () {
        var _getForms = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          var response;
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch("https://cors-anywhere.herokuapp.com/https://api.jotform.com/user/forms?apikey=".concat(apiKey, "&orderby=id"));

                case 2:
                  response = _context.sent;
                  return _context.abrupt("return", response.json());

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function getForms() {
          return _getForms.apply(this, arguments);
        }

        return getForms;
      }()
    }, {
      key: "buildFormData",
      value: function buildFormData(formData, data, parentKey) {
        var _this = this;

        if (data && _typeof(data) === 'object' && !(data instanceof Date) && !(data instanceof File)) {
          Object.keys(data).forEach(function (key) {
            _this.buildFormData(formData, data[key], parentKey ? "".concat(parentKey, "[").concat(key, "]") : key);
          });
        } else {
          var value = data == null ? '' : data;
          formData.append(parentKey, value);
        }
      }
    }, {
      key: "jsonToFormData",
      value: function jsonToFormData(data) {
        var formData = new FormData();
        this.buildFormData(formData, data);
        return formData;
      }
    }, {
      key: "createForm",
      value: function () {
        var _createForm = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(data) {
          var exists, results, i;
          return regenerator.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // var formData = new FormData();
                  // var properties = {
                  // title: "testy test"
                  // };
                  // formData.append("properties", properties);
                  exists = false;
                  _context2.next = 3;
                  return this.getForms();

                case 3:
                  results = _context2.sent;
                  // async fetch(`https://cors-anywhere.herokuapp.com/https://api.jotform.com/user/forms?apikey=${apiKey}&orderby=id`).then(response => response.json())
                  // .then(result => {
                  //     for (let i in result.content) {
                  //         if (result.content[i].title === data && result.content[i].status === "ENABLED") {
                  //           console.log('found')
                  //           exists = true;
                  //           break;
                  //         }
                  //     }
                  // }
                  // );
                  console.log(results);
                  _context2.t0 = regenerator.keys(results.content);

                case 6:
                  if ((_context2.t1 = _context2.t0()).done) {
                    _context2.next = 15;
                    break;
                  }

                  i = _context2.t1.value;

                  if (!(results.content[i].title === data && results.content[i].status === "ENABLED")) {
                    _context2.next = 13;
                    break;
                  }

                  data = results.content[i].id;
                  console.log('found');
                  exists = true;
                  return _context2.abrupt("break", 15);

                case 13:
                  _context2.next = 6;
                  break;

                case 15:
                  console.log(data);

                  if (exists) {
                    _context2.next = 20;
                    break;
                  }

                  _context2.next = 19;
                  return fetch("https://cors-anywhere.herokuapp.com/https://api.jotform.com/form?apikey=".concat(apiKey), {
                    "headers": {
                      "accept": "application/json, text/javascript, */*; q=0.01",
                      "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
                      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                      "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                      "sec-ch-ua-mobile": "?0",
                      "sec-fetch-dest": "empty",
                      "sec-fetch-mode": "cors",
                      "sec-fetch-site": "same-origin",
                      "x-requested-with": "XMLHttpRequest"
                    },
                    "referrer": "https://cors-anywhere.herokuapp.com/https://api.jotform.com/docs/",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": "questions%5B1%5D%5Btype%5D=control_textarea&questions%5B1%5D%5Btext%5D=Type+your+comment&questions%5B1%5D%5Border%5D=2&questions%5B1%5D%5Bname%5D=CommentBox&properties%5Btitle%5D=".concat(data, "&questions%5B2%5D%5Btype%5D=control_fullname&questions%5B2%5D%5Btext%5D=Full+Name&questions%5B2%5D%5Border%5D=3&questions%5B2%5D%5Bname%5D=NameBox&questions%5B3%5D%5Btype%5D=control_textbox&questions%5B3%5D%5Btext%5D=Replied+Api&questions%5B3%5D%5Border%5D=3&questions%5B3%5D%5Bname%5D=RepliedBox&questions%5B4%5D%5Btype%5D=control_fileupload&questions%5B4%5D%5Btext%5D=Avatar+Upload&questions%5B4%5D%5Border%5D=4&questions%5B4%5D%5Bname%5D=FileUpload&questions%5B7%5D%5Btype%5D=control_number&questions%5B7%5D%5Btext%5D=Reply+Num&questions%5B7%5D%5Border%5D=7&questions%5B7%5D%5Bname%5D=replyNum"),
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "omit"
                  }).then(function (response) {
                    return response.json();
                  }).then(function (data1) {
                    console.log('Success:', data1);
                    data = data1.content.id;
                  })["catch"](function (error) {
                    console.error('Error:', error);
                  });

                case 19:

                case 20:
                  return _context2.abrupt("return", data);

                case 21:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function createForm(_x) {
          return _createForm.apply(this, arguments);
        }

        return createForm;
      }()
    }, {
      key: "addQuestion",
      value: function addQuestion() {
        fetch("https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/211726571802958/questions?apikey=".concat(apiKey), {
          "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
          },
          "referrer": "https://cors-anywhere.herokuapp.com/https://api.jotform.com/docs/",
          "referrerPolicy": "strict-origin-when-cross-origin",
          "body": "question%5Btype%5D=control_textarea",
          "method": "POST",
          "mode": "cors",
          "credentials": "omit"
        });
      }
    }, {
      key: "addSubmission",
      value: function addSubmission(data, formID, fetchData) {
        fetch("https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/".concat(formID, "/submissions?apikey=").concat(apiKey), {
          "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
          },
          "referrer": "https://cors-anywhere.herokuapp.com/https://api.jotform.com/docs/",
          "referrerPolicy": "strict-origin-when-cross-origin",
          "body": JSON.stringify(data),
          "method": "POST",
          "mode": "cors",
          "credentials": "omit"
        }).then(function (response) {
          return response.json();
        }).then(function (data1) {
          console.log('Success:', data1);
          fetch("https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/".concat(formID, "/submissions?apikey=").concat(apiKey, "&orderby=id")).then(function (response) {
            if (response.ok) {
              return response.json();
            }

            throw response;
          }).then(function (data2) {
            console.log('ben degistim 55555', data2);
            fetchData.setData(data2);
            console.log(fetchData.data);
          })["catch"](function (error) {
            console.error("Error fetching data: ", error);
          });
        })["catch"](function (error) {
          console.error('Error:', error);
        });
      }
    }, {
      key: "getAllSubmissions",
      value: function getAllSubmissions(cb) {
        fetch("https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/211726571802958/submissions?apikey=".concat(apiKey, "&orderby=id"), {
          "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
          },
          "referrer": "https://cors-anywhere.herokuapp.com/https://api.jotform.com/docs/",
          "referrerPolicy": "strict-origin-when-cross-origin",
          "body": null,
          "method": "GET",
          "mode": "cors",
          "credentials": "omit"
        }).then(function (response) {
          return response.json();
        }).then(function (outcome) {
          return cb(outcome);
        }); // .then(json => {
        //   console.log('Success:', json);
        // //   (json.content).forEach(element => {
        // //     data.push( element.answers[1].name );
        // //     data.push(element.answers[1].order);
        // //     data.push( element.answers[1].type);
        // //     data.push( element.answers[1].answer);  
        // //   });
        //   for (let i in json.content) {
        //     data.push( json.content[i].answers[1].name );
        //     data.push(json.content[i].answers[1].order);
        //     data.push( json.content[i].answers[1].type);
        //     data.push( json.content[i].answers[1].answer);  
        //   }
        //   console.log(data);
        //   return "data";
        // })
        // .catch((error) => {
        //   console.error('Error:', error);
        // });
      }
    }]);

    return miniJFApi;
  }();

  var toBase64$1 = function toBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        return resolve(reader.result);
      };

      reader.onerror = function (error) {
        return reject(error);
      };
    });
  };

  function CommentInput(props) {
    var fetchData = F$1(DataContext);
    var formID = fetchData.formID;
    var replyNumber = 0;
    var parentID = 1;

    var _useState = l(""),
        _useState2 = _slicedToArray(_useState, 2),
        comment = _useState2[0],
        setComment = _useState2[1];

    var _useState3 = l(""),
        _useState4 = _slicedToArray(_useState3, 2),
        name = _useState4[0],
        setName = _useState4[1];

    var _useState5 = l(null),
        _useState6 = _slicedToArray(_useState5, 2),
        selectedFile = _useState6[0],
        setSelectedFile = _useState6[1];

    var handleChange = function handleChange(e) {
      setComment(e.target.value);
    };

    var handleNameChange = function handleNameChange(e) {
      setName(e.target.value);
    };

    var handleImageChange = function handleImageChange(e) {
      setSelectedFile(e.target.files[0]);
    };

    var api = new miniJFApi(props.apiKey);

    var handleSubmit = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(e) {
        var myfile, data2;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault(); // props.addComment(comment, name);

                _context.next = 3;
                return toBase64$1(selectedFile);

              case 3:
                myfile = _context.sent;
                console.log(selectedFile);
                data2 = {
                  "1": comment,
                  "2": name,
                  "3": parentID,
                  "5": myfile,
                  "7": replyNumber
                };
                api.addSubmission(data2, formID, fetchData); // console.log("data is =>", comment);
                // setComment(""); // can we use useEffect to clean comment after submission

                console.log("data is sent");
                setComment("");
                setName("");
                setSelectedFile(null);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handleSubmit(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var padding = {
      padding: "0 20px 0 0"
    };
    var inputStyle = {
      display: "flex",
      width: "100%"
    };
    var buttonStyle = {
      backgroundColor: "#EB8230",
      width: "100px",
      height: "30px",
      borderRadius: "5px",
      color: "white",
      cursor: "pointer"
    };
    var inputBox = {
      backgroundColor: "#FAFAFA",
      borderRadius: "5px",
      padding: "20px",
      width: "60%",
      display: "flex",
      justifyContent: "center"
    };
    var fontType = {
      padding: "2px",
      fontFamily: "Arial",
      fontSize: "1em",
      weight: "Bold"
    };
    var divStyle = {
      display: "flex",
      justifyContent: "center",
      padding: "20px"
    };
    return a$1("div", {
      style: inputBox
    }, a$1("form", {
      onSubmit: handleSubmit
    }, a$1("p", {
      style: fontType
    }, "Please pick an image (only image format is accepted):"), a$1("input", {
      style: inputStyle,
      type: "file",
      id: "myFile",
      name: "filename",
      onChange: handleImageChange,
      accept: "image/*"
    }), a$1("p", {
      style: fontType
    }, "Please type your comment:"), a$1("textarea", {
      value: comment,
      onChange: handleChange,
      placeholder: props.text,
      required: true,
      style: inputStyle
    }), a$1("div", null, a$1("p", {
      style: fontType
    }, "Login with"), a$1("br", null), a$1("span", {
      style: "display: flex"
    }, a$1("a", {
      style: padding,
      href: "https://blog.disqus.com/"
    }, a$1("img", {
      src: "data:image/png;base64,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",
      style: "width: 40px"
    })), a$1("a", {
      style: padding,
      href: "https://www.facebook.com/"
    }, a$1("img", {
      src: "https://toppng.com/uploads/preview/banner-transparent-library-svg-vector-freebie-supply-facebook-icon-circle-sv-11563249283vosqx88wgx.png",
      style: "width: 40px"
    })), a$1("a", {
      style: padding,
      href: "https://twitter.com/login"
    }, a$1("img", {
      src: "data:image/png;base64,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",
      style: "width: 40px"
    })), a$1("a", {
      style: padding,
      href: "https://myaccount.google.com/"
    }, a$1("img", {
      src: "data:image/png;base64,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",
      style: "width: 40px"
    }))), a$1("div", null, a$1("p", {
      style: fontType
    }, "or enter your name:"), a$1("span", null, a$1("input", {
      type: "text",
      value: name,
      onChange: handleNameChange,
      placeholder: "Name",
      required: true,
      style: inputStyle
    })))), a$1("div", {
      style: divStyle
    }, a$1("button", {
      style: buttonStyle
    }, "Send"))));
  }

  function ReplyBox(props) {
    var comment = props.comment;
    var authorStyle = {
      padding: "10px",
      display: "flex",
      gap: "20px"
    };
    var boxStyle = {
      padding: "10px",
      margin: "10px",
      backgroundColor: "#FAFAFA",
      gap: "10px",
      borderRadius: "5px" // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

    };
    var commentStyle = {
      backgroundColor: "#FFFFFF",
      padding: "10px",
      fontFamily: "Arial",
      fontSize: "13px",
      fontStyle: "italic",
      fontWeight: "lighter"
    };
    var paragraph = {
      fontFamily: "Arial",
      fontSize: "1em",
      color: "#787878",
      fontWeight: "Bold"
    };
    var reply = {
      padding: "0% 0% 0% 10%"
    };
    return a$1("div", {
      style: reply
    }, a$1("div", {
      style: boxStyle
    }, a$1("div", {
      style: authorStyle
    }, a$1(Avatar, {
      imageURL: comment[2]
    }), a$1("p", {
      style: paragraph
    }, "created by ", comment[1], " at ", comment[3])), a$1("div", {
      style: commentStyle
    }, a$1("p", null, " ", JSON.stringify(comment[0]), " "))));
  }

  var toBase64 = function toBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        return resolve(reader.result);
      };

      reader.onerror = function (error) {
        return reject(error);
      };
    });
  };

  function ReplyInput(props) {
    var repliedID = props.repliedCommentID;
    var replyNumber = 0;
    var fetchData = F$1(DataContext);
    var formID = fetchData.formID;

    var _useState = l(""),
        _useState2 = _slicedToArray(_useState, 2),
        comment = _useState2[0],
        setComment = _useState2[1];

    var _useState3 = l(""),
        _useState4 = _slicedToArray(_useState3, 2),
        name = _useState4[0],
        setName = _useState4[1];

    var _useState5 = l(null),
        _useState6 = _slicedToArray(_useState5, 2),
        selectedFile = _useState6[0],
        setSelectedFile = _useState6[1];

    var handleChange = function handleChange(e) {
      setComment(e.target.value);
    };

    var handleNameChange = function handleNameChange(e) {
      setName(e.target.value);
    };

    var handleImageChange = function handleImageChange(e) {
      setSelectedFile(e.target.files[0]);
    };

    var api = new miniJFApi(props.apiKey);

    var handleSubmit = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(e) {
        var myfile, data2;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault(); // props.addComment(comment, name);

                _context.next = 3;
                return toBase64(selectedFile);

              case 3:
                myfile = _context.sent;
                console.log(selectedFile);
                data2 = {
                  "1": comment,
                  "2": name,
                  "3": repliedID,
                  "5": myfile,
                  "7": replyNumber
                };
                console.log(comment);
                console.log(name);
                console.log(repliedID);
                console.log("data whole");
                api.addSubmission(data2, formID, fetchData); // console.log("data is =>", comment);
                // setComment(""); // can we use useEffect to clean comment after submission

                console.log("data is sent");
                setComment("");
                setName("");
                setSelectedFile(null);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handleSubmit(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var padding = {
      padding: "0 20px 0 0"
    };
    var inputStyle = {
      display: "flex",
      width: "100%",
      justifyContent: "center"
    };
    var buttonStyle = {
      backgroundColor: "#787878",
      width: "100px",
      height: "30px",
      borderRadius: "5px",
      color: "white",
      cursor: "pointer"
    };
    var inputBox = {
      backgroundColor: "#FAFAFA",
      borderRadius: "5px",
      padding: "20px",
      display: "block",
      width: "80%"
    };
    var fontType = {
      padding: "2px",
      fontFamily: "Arial",
      fontSize: "1em",
      weight: "Bold"
    };
    var divStyle = {
      display: "flex",
      justifyContent: "flex-end",
      padding: "20px"
    };
    var formGrid = {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "50px"
    };
    return a$1("div", {
      style: inputBox
    }, a$1("form", {
      onSubmit: handleSubmit,
      style: formGrid
    }, a$1("div", null, a$1("p", {
      style: fontType
    }, "Please pick an image (only image format is accepted):"), a$1("input", {
      style: inputStyle,
      type: "file",
      id: "myFile",
      name: "filename",
      onChange: handleImageChange,
      accept: "image/*"
    })), a$1("div", null, a$1("p", {
      style: fontType
    }, "Please type your comment:"), a$1("textarea", {
      value: comment,
      onChange: handleChange,
      placeholder: props.text,
      required: true,
      style: inputStyle
    })), a$1("div", null, a$1("p", {
      style: fontType
    }, "Login with"), a$1("br", null), a$1("span", {
      style: "display: flex"
    }, a$1("a", {
      style: padding,
      href: "https://blog.disqus.com/"
    }, a$1("img", {
      src: "data:image/png;base64,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",
      style: "width: 40px"
    })), a$1("a", {
      style: padding,
      href: "https://www.facebook.com/"
    }, a$1("img", {
      src: "https://toppng.com/uploads/preview/banner-transparent-library-svg-vector-freebie-supply-facebook-icon-circle-sv-11563249283vosqx88wgx.png",
      style: "width: 40px"
    })), a$1("a", {
      style: padding,
      href: "https://twitter.com/login"
    }, a$1("img", {
      src: "data:image/png;base64,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",
      style: "width: 40px"
    })), a$1("a", {
      style: padding,
      href: "https://myaccount.google.com/"
    }, a$1("img", {
      src: "data:image/png;base64,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",
      style: "width: 40px"
    }))), a$1("div", null, a$1("p", {
      style: fontType
    }, "or enter your name:"), a$1("span", null, a$1("input", {
      type: "text",
      value: name,
      onChange: handleNameChange,
      placeholder: "Name",
      required: true,
      style: inputStyle
    })))), a$1("div", {
      style: divStyle
    }, a$1("button", {
      style: buttonStyle
    }, "Reply"))));
  }

  var moment = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
      module.exports = factory() ;
  }(this, (function () {
      var hookCallback;

      function hooks() {
          return hookCallback.apply(null, arguments);
      }

      // This is done to register the method called with moment()
      // without creating circular dependencies.
      function setHookCallback(callback) {
          hookCallback = callback;
      }

      function isArray(input) {
          return (
              input instanceof Array ||
              Object.prototype.toString.call(input) === '[object Array]'
          );
      }

      function isObject(input) {
          // IE8 will treat undefined and null as object if it wasn't for
          // input != null
          return (
              input != null &&
              Object.prototype.toString.call(input) === '[object Object]'
          );
      }

      function hasOwnProp(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
      }

      function isObjectEmpty(obj) {
          if (Object.getOwnPropertyNames) {
              return Object.getOwnPropertyNames(obj).length === 0;
          } else {
              var k;
              for (k in obj) {
                  if (hasOwnProp(obj, k)) {
                      return false;
                  }
              }
              return true;
          }
      }

      function isUndefined(input) {
          return input === void 0;
      }

      function isNumber(input) {
          return (
              typeof input === 'number' ||
              Object.prototype.toString.call(input) === '[object Number]'
          );
      }

      function isDate(input) {
          return (
              input instanceof Date ||
              Object.prototype.toString.call(input) === '[object Date]'
          );
      }

      function map(arr, fn) {
          var res = [],
              i;
          for (i = 0; i < arr.length; ++i) {
              res.push(fn(arr[i], i));
          }
          return res;
      }

      function extend(a, b) {
          for (var i in b) {
              if (hasOwnProp(b, i)) {
                  a[i] = b[i];
              }
          }

          if (hasOwnProp(b, 'toString')) {
              a.toString = b.toString;
          }

          if (hasOwnProp(b, 'valueOf')) {
              a.valueOf = b.valueOf;
          }

          return a;
      }

      function createUTC(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, true).utc();
      }

      function defaultParsingFlags() {
          // We need to deep clone this object.
          return {
              empty: false,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: false,
              invalidEra: null,
              invalidMonth: null,
              invalidFormat: false,
              userInvalidated: false,
              iso: false,
              parsedDateParts: [],
              era: null,
              meridiem: null,
              rfc2822: false,
              weekdayMismatch: false,
          };
      }

      function getParsingFlags(m) {
          if (m._pf == null) {
              m._pf = defaultParsingFlags();
          }
          return m._pf;
      }

      var some;
      if (Array.prototype.some) {
          some = Array.prototype.some;
      } else {
          some = function (fun) {
              var t = Object(this),
                  len = t.length >>> 0,
                  i;

              for (i = 0; i < len; i++) {
                  if (i in t && fun.call(this, t[i], i, t)) {
                      return true;
                  }
              }

              return false;
          };
      }

      function isValid(m) {
          if (m._isValid == null) {
              var flags = getParsingFlags(m),
                  parsedParts = some.call(flags.parsedDateParts, function (i) {
                      return i != null;
                  }),
                  isNowValid =
                      !isNaN(m._d.getTime()) &&
                      flags.overflow < 0 &&
                      !flags.empty &&
                      !flags.invalidEra &&
                      !flags.invalidMonth &&
                      !flags.invalidWeekday &&
                      !flags.weekdayMismatch &&
                      !flags.nullInput &&
                      !flags.invalidFormat &&
                      !flags.userInvalidated &&
                      (!flags.meridiem || (flags.meridiem && parsedParts));

              if (m._strict) {
                  isNowValid =
                      isNowValid &&
                      flags.charsLeftOver === 0 &&
                      flags.unusedTokens.length === 0 &&
                      flags.bigHour === undefined;
              }

              if (Object.isFrozen == null || !Object.isFrozen(m)) {
                  m._isValid = isNowValid;
              } else {
                  return isNowValid;
              }
          }
          return m._isValid;
      }

      function createInvalid(flags) {
          var m = createUTC(NaN);
          if (flags != null) {
              extend(getParsingFlags(m), flags);
          } else {
              getParsingFlags(m).userInvalidated = true;
          }

          return m;
      }

      // Plugins that add properties should also add the key here (null value),
      // so we can properly clone ourselves.
      var momentProperties = (hooks.momentProperties = []),
          updateInProgress = false;

      function copyConfig(to, from) {
          var i, prop, val;

          if (!isUndefined(from._isAMomentObject)) {
              to._isAMomentObject = from._isAMomentObject;
          }
          if (!isUndefined(from._i)) {
              to._i = from._i;
          }
          if (!isUndefined(from._f)) {
              to._f = from._f;
          }
          if (!isUndefined(from._l)) {
              to._l = from._l;
          }
          if (!isUndefined(from._strict)) {
              to._strict = from._strict;
          }
          if (!isUndefined(from._tzm)) {
              to._tzm = from._tzm;
          }
          if (!isUndefined(from._isUTC)) {
              to._isUTC = from._isUTC;
          }
          if (!isUndefined(from._offset)) {
              to._offset = from._offset;
          }
          if (!isUndefined(from._pf)) {
              to._pf = getParsingFlags(from);
          }
          if (!isUndefined(from._locale)) {
              to._locale = from._locale;
          }

          if (momentProperties.length > 0) {
              for (i = 0; i < momentProperties.length; i++) {
                  prop = momentProperties[i];
                  val = from[prop];
                  if (!isUndefined(val)) {
                      to[prop] = val;
                  }
              }
          }

          return to;
      }

      // Moment prototype object
      function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);
          if (!this.isValid()) {
              this._d = new Date(NaN);
          }
          // Prevent infinite loop in case updateOffset creates new moment
          // objects.
          if (updateInProgress === false) {
              updateInProgress = true;
              hooks.updateOffset(this);
              updateInProgress = false;
          }
      }

      function isMoment(obj) {
          return (
              obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
          );
      }

      function warn(msg) {
          if (
              hooks.suppressDeprecationWarnings === false &&
              typeof console !== 'undefined' &&
              console.warn
          ) {
              console.warn('Deprecation warning: ' + msg);
          }
      }

      function deprecate(msg, fn) {
          var firstTime = true;

          return extend(function () {
              if (hooks.deprecationHandler != null) {
                  hooks.deprecationHandler(null, msg);
              }
              if (firstTime) {
                  var args = [],
                      arg,
                      i,
                      key;
                  for (i = 0; i < arguments.length; i++) {
                      arg = '';
                      if (typeof arguments[i] === 'object') {
                          arg += '\n[' + i + '] ';
                          for (key in arguments[0]) {
                              if (hasOwnProp(arguments[0], key)) {
                                  arg += key + ': ' + arguments[0][key] + ', ';
                              }
                          }
                          arg = arg.slice(0, -2); // Remove trailing comma and space
                      } else {
                          arg = arguments[i];
                      }
                      args.push(arg);
                  }
                  warn(
                      msg +
                          '\nArguments: ' +
                          Array.prototype.slice.call(args).join('') +
                          '\n' +
                          new Error().stack
                  );
                  firstTime = false;
              }
              return fn.apply(this, arguments);
          }, fn);
      }

      var deprecations = {};

      function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(name, msg);
          }
          if (!deprecations[name]) {
              warn(msg);
              deprecations[name] = true;
          }
      }

      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;

      function isFunction(input) {
          return (
              (typeof Function !== 'undefined' && input instanceof Function) ||
              Object.prototype.toString.call(input) === '[object Function]'
          );
      }

      function set(config) {
          var prop, i;
          for (i in config) {
              if (hasOwnProp(config, i)) {
                  prop = config[i];
                  if (isFunction(prop)) {
                      this[i] = prop;
                  } else {
                      this['_' + i] = prop;
                  }
              }
          }
          this._config = config;
          // Lenient ordinal parsing accepts just a number in addition to
          // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
          // TODO: Remove "ordinalParse" fallback in next major release.
          this._dayOfMonthOrdinalParseLenient = new RegExp(
              (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                  '|' +
                  /\d{1,2}/.source
          );
      }

      function mergeConfigs(parentConfig, childConfig) {
          var res = extend({}, parentConfig),
              prop;
          for (prop in childConfig) {
              if (hasOwnProp(childConfig, prop)) {
                  if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                      res[prop] = {};
                      extend(res[prop], parentConfig[prop]);
                      extend(res[prop], childConfig[prop]);
                  } else if (childConfig[prop] != null) {
                      res[prop] = childConfig[prop];
                  } else {
                      delete res[prop];
                  }
              }
          }
          for (prop in parentConfig) {
              if (
                  hasOwnProp(parentConfig, prop) &&
                  !hasOwnProp(childConfig, prop) &&
                  isObject(parentConfig[prop])
              ) {
                  // make sure changes to properties don't modify parent config
                  res[prop] = extend({}, res[prop]);
              }
          }
          return res;
      }

      function Locale(config) {
          if (config != null) {
              this.set(config);
          }
      }

      var keys;

      if (Object.keys) {
          keys = Object.keys;
      } else {
          keys = function (obj) {
              var i,
                  res = [];
              for (i in obj) {
                  if (hasOwnProp(obj, i)) {
                      res.push(i);
                  }
              }
              return res;
          };
      }

      var defaultCalendar = {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
      };

      function calendar(key, mom, now) {
          var output = this._calendar[key] || this._calendar['sameElse'];
          return isFunction(output) ? output.call(mom, now) : output;
      }

      function zeroFill(number, targetLength, forceSign) {
          var absNumber = '' + Math.abs(number),
              zerosToFill = targetLength - absNumber.length,
              sign = number >= 0;
          return (
              (sign ? (forceSign ? '+' : '') : '-') +
              Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
              absNumber
          );
      }

      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          formatFunctions = {},
          formatTokenFunctions = {};

      // token:    'M'
      // padded:   ['MM', 2]
      // ordinal:  'Mo'
      // callback: function () { this.month() + 1 }
      function addFormatToken(token, padded, ordinal, callback) {
          var func = callback;
          if (typeof callback === 'string') {
              func = function () {
                  return this[callback]();
              };
          }
          if (token) {
              formatTokenFunctions[token] = func;
          }
          if (padded) {
              formatTokenFunctions[padded[0]] = function () {
                  return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
              };
          }
          if (ordinal) {
              formatTokenFunctions[ordinal] = function () {
                  return this.localeData().ordinal(
                      func.apply(this, arguments),
                      token
                  );
              };
          }
      }

      function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
              return input.replace(/^\[|\]$/g, '');
          }
          return input.replace(/\\/g, '');
      }

      function makeFormatFunction(format) {
          var array = format.match(formattingTokens),
              i,
              length;

          for (i = 0, length = array.length; i < length; i++) {
              if (formatTokenFunctions[array[i]]) {
                  array[i] = formatTokenFunctions[array[i]];
              } else {
                  array[i] = removeFormattingTokens(array[i]);
              }
          }

          return function (mom) {
              var output = '',
                  i;
              for (i = 0; i < length; i++) {
                  output += isFunction(array[i])
                      ? array[i].call(mom, format)
                      : array[i];
              }
              return output;
          };
      }

      // format date using native date object
      function formatMoment(m, format) {
          if (!m.isValid()) {
              return m.localeData().invalidDate();
          }

          format = expandFormat(format, m.localeData());
          formatFunctions[format] =
              formatFunctions[format] || makeFormatFunction(format);

          return formatFunctions[format](m);
      }

      function expandFormat(format, locale) {
          var i = 5;

          function replaceLongDateFormatTokens(input) {
              return locale.longDateFormat(input) || input;
          }

          localFormattingTokens.lastIndex = 0;
          while (i >= 0 && localFormattingTokens.test(format)) {
              format = format.replace(
                  localFormattingTokens,
                  replaceLongDateFormatTokens
              );
              localFormattingTokens.lastIndex = 0;
              i -= 1;
          }

          return format;
      }

      var defaultLongDateFormat = {
          LTS: 'h:mm:ss A',
          LT: 'h:mm A',
          L: 'MM/DD/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A',
      };

      function longDateFormat(key) {
          var format = this._longDateFormat[key],
              formatUpper = this._longDateFormat[key.toUpperCase()];

          if (format || !formatUpper) {
              return format;
          }

          this._longDateFormat[key] = formatUpper
              .match(formattingTokens)
              .map(function (tok) {
                  if (
                      tok === 'MMMM' ||
                      tok === 'MM' ||
                      tok === 'DD' ||
                      tok === 'dddd'
                  ) {
                      return tok.slice(1);
                  }
                  return tok;
              })
              .join('');

          return this._longDateFormat[key];
      }

      var defaultInvalidDate = 'Invalid date';

      function invalidDate() {
          return this._invalidDate;
      }

      var defaultOrdinal = '%d',
          defaultDayOfMonthOrdinalParse = /\d{1,2}/;

      function ordinal(number) {
          return this._ordinal.replace('%d', number);
      }

      var defaultRelativeTime = {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          w: 'a week',
          ww: '%d weeks',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
      };

      function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction(output)
              ? output(number, withoutSuffix, string, isFuture)
              : output.replace(/%d/i, number);
      }

      function pastFuture(diff, output) {
          var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
          return isFunction(format) ? format(output) : format.replace(/%s/i, output);
      }

      var aliases = {};

      function addUnitAlias(unit, shorthand) {
          var lowerCase = unit.toLowerCase();
          aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
      }

      function normalizeUnits(units) {
          return typeof units === 'string'
              ? aliases[units] || aliases[units.toLowerCase()]
              : undefined;
      }

      function normalizeObjectUnits(inputObject) {
          var normalizedInput = {},
              normalizedProp,
              prop;

          for (prop in inputObject) {
              if (hasOwnProp(inputObject, prop)) {
                  normalizedProp = normalizeUnits(prop);
                  if (normalizedProp) {
                      normalizedInput[normalizedProp] = inputObject[prop];
                  }
              }
          }

          return normalizedInput;
      }

      var priorities = {};

      function addUnitPriority(unit, priority) {
          priorities[unit] = priority;
      }

      function getPrioritizedUnits(unitsObj) {
          var units = [],
              u;
          for (u in unitsObj) {
              if (hasOwnProp(unitsObj, u)) {
                  units.push({ unit: u, priority: priorities[u] });
              }
          }
          units.sort(function (a, b) {
              return a.priority - b.priority;
          });
          return units;
      }

      function isLeapYear(year) {
          return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      }

      function absFloor(number) {
          if (number < 0) {
              // -0 -> 0
              return Math.ceil(number) || 0;
          } else {
              return Math.floor(number);
          }
      }

      function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion,
              value = 0;

          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
              value = absFloor(coercedNumber);
          }

          return value;
      }

      function makeGetSet(unit, keepTime) {
          return function (value) {
              if (value != null) {
                  set$1(this, unit, value);
                  hooks.updateOffset(this, keepTime);
                  return this;
              } else {
                  return get(this, unit);
              }
          };
      }

      function get(mom, unit) {
          return mom.isValid()
              ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
              : NaN;
      }

      function set$1(mom, unit, value) {
          if (mom.isValid() && !isNaN(value)) {
              if (
                  unit === 'FullYear' &&
                  isLeapYear(mom.year()) &&
                  mom.month() === 1 &&
                  mom.date() === 29
              ) {
                  value = toInt(value);
                  mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                      value,
                      mom.month(),
                      daysInMonth(value, mom.month())
                  );
              } else {
                  mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
              }
          }
      }

      // MOMENTS

      function stringGet(units) {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
              return this[units]();
          }
          return this;
      }

      function stringSet(units, value) {
          if (typeof units === 'object') {
              units = normalizeObjectUnits(units);
              var prioritized = getPrioritizedUnits(units),
                  i;
              for (i = 0; i < prioritized.length; i++) {
                  this[prioritized[i].unit](units[prioritized[i].unit]);
              }
          } else {
              units = normalizeUnits(units);
              if (isFunction(this[units])) {
                  return this[units](value);
              }
          }
          return this;
      }

      var match1 = /\d/, //       0 - 9
          match2 = /\d\d/, //      00 - 99
          match3 = /\d{3}/, //     000 - 999
          match4 = /\d{4}/, //    0000 - 9999
          match6 = /[+-]?\d{6}/, // -999999 - 999999
          match1to2 = /\d\d?/, //       0 - 99
          match3to4 = /\d\d\d\d?/, //     999 - 9999
          match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
          match1to3 = /\d{1,3}/, //       0 - 999
          match1to4 = /\d{1,4}/, //       0 - 9999
          match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
          matchUnsigned = /\d+/, //       0 - inf
          matchSigned = /[+-]?\d+/, //    -inf - inf
          matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
          matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
          matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
          // any word (or two) characters or numbers including two/three word month in arabic.
          // includes scottish gaelic two word and hyphenated months
          matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          regexes;

      regexes = {};

      function addRegexToken(token, regex, strictRegex) {
          regexes[token] = isFunction(regex)
              ? regex
              : function (isStrict, localeData) {
                    return isStrict && strictRegex ? strictRegex : regex;
                };
      }

      function getParseRegexForToken(token, config) {
          if (!hasOwnProp(regexes, token)) {
              return new RegExp(unescapeFormat(token));
          }

          return regexes[token](config._strict, config._locale);
      }

      // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
      function unescapeFormat(s) {
          return regexEscape(
              s
                  .replace('\\', '')
                  .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                      matched,
                      p1,
                      p2,
                      p3,
                      p4
                  ) {
                      return p1 || p2 || p3 || p4;
                  })
          );
      }

      function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }

      var tokens = {};

      function addParseToken(token, callback) {
          var i,
              func = callback;
          if (typeof token === 'string') {
              token = [token];
          }
          if (isNumber(callback)) {
              func = function (input, array) {
                  array[callback] = toInt(input);
              };
          }
          for (i = 0; i < token.length; i++) {
              tokens[token[i]] = func;
          }
      }

      function addWeekParseToken(token, callback) {
          addParseToken(token, function (input, array, config, token) {
              config._w = config._w || {};
              callback(input, config._w, config, token);
          });
      }

      function addTimeToArrayFromToken(token, input, config) {
          if (input != null && hasOwnProp(tokens, token)) {
              tokens[token](input, config._a, config, token);
          }
      }

      var YEAR = 0,
          MONTH = 1,
          DATE = 2,
          HOUR = 3,
          MINUTE = 4,
          SECOND = 5,
          MILLISECOND = 6,
          WEEK = 7,
          WEEKDAY = 8;

      function mod(n, x) {
          return ((n % x) + x) % x;
      }

      var indexOf;

      if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
      } else {
          indexOf = function (o) {
              // I know
              var i;
              for (i = 0; i < this.length; ++i) {
                  if (this[i] === o) {
                      return i;
                  }
              }
              return -1;
          };
      }

      function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
              return NaN;
          }
          var modMonth = mod(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1
              ? isLeapYear(year)
                  ? 29
                  : 28
              : 31 - ((modMonth % 7) % 2);
      }

      // FORMATTING

      addFormatToken('M', ['MM', 2], 'Mo', function () {
          return this.month() + 1;
      });

      addFormatToken('MMM', 0, 0, function (format) {
          return this.localeData().monthsShort(this, format);
      });

      addFormatToken('MMMM', 0, 0, function (format) {
          return this.localeData().months(this, format);
      });

      // ALIASES

      addUnitAlias('month', 'M');

      // PRIORITY

      addUnitPriority('month', 8);

      // PARSING

      addRegexToken('M', match1to2);
      addRegexToken('MM', match1to2, match2);
      addRegexToken('MMM', function (isStrict, locale) {
          return locale.monthsShortRegex(isStrict);
      });
      addRegexToken('MMMM', function (isStrict, locale) {
          return locale.monthsRegex(isStrict);
      });

      addParseToken(['M', 'MM'], function (input, array) {
          array[MONTH] = toInt(input) - 1;
      });

      addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
          var month = config._locale.monthsParse(input, token, config._strict);
          // if we didn't find a month name, mark the date as invalid.
          if (month != null) {
              array[MONTH] = month;
          } else {
              getParsingFlags(config).invalidMonth = input;
          }
      });

      // LOCALES

      var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
              '_'
          ),
          defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
              '_'
          ),
          MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          defaultMonthsShortRegex = matchWord,
          defaultMonthsRegex = matchWord;

      function localeMonths(m, format) {
          if (!m) {
              return isArray(this._months)
                  ? this._months
                  : this._months['standalone'];
          }
          return isArray(this._months)
              ? this._months[m.month()]
              : this._months[
                    (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                        ? 'format'
                        : 'standalone'
                ][m.month()];
      }

      function localeMonthsShort(m, format) {
          if (!m) {
              return isArray(this._monthsShort)
                  ? this._monthsShort
                  : this._monthsShort['standalone'];
          }
          return isArray(this._monthsShort)
              ? this._monthsShort[m.month()]
              : this._monthsShort[
                    MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
                ][m.month()];
      }

      function handleStrictParse(monthName, format, strict) {
          var i,
              ii,
              mom,
              llc = monthName.toLocaleLowerCase();
          if (!this._monthsParse) {
              // this is not used
              this._monthsParse = [];
              this._longMonthsParse = [];
              this._shortMonthsParse = [];
              for (i = 0; i < 12; ++i) {
                  mom = createUTC([2000, i]);
                  this._shortMonthsParse[i] = this.monthsShort(
                      mom,
                      ''
                  ).toLocaleLowerCase();
                  this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
              }
          }

          if (strict) {
              if (format === 'MMM') {
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._longMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              }
          } else {
              if (format === 'MMM') {
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._longMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._longMonthsParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  return ii !== -1 ? ii : null;
              }
          }
      }

      function localeMonthsParse(monthName, format, strict) {
          var i, mom, regex;

          if (this._monthsParseExact) {
              return handleStrictParse.call(this, monthName, format, strict);
          }

          if (!this._monthsParse) {
              this._monthsParse = [];
              this._longMonthsParse = [];
              this._shortMonthsParse = [];
          }

          // TODO: add sorting
          // Sorting makes sure if one month (or abbr) is a prefix of another
          // see sorting in computeMonthsParse
          for (i = 0; i < 12; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, i]);
              if (strict && !this._longMonthsParse[i]) {
                  this._longMonthsParse[i] = new RegExp(
                      '^' + this.months(mom, '').replace('.', '') + '$',
                      'i'
                  );
                  this._shortMonthsParse[i] = new RegExp(
                      '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                      'i'
                  );
              }
              if (!strict && !this._monthsParse[i]) {
                  regex =
                      '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                  this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
              }
              // test the regex
              if (
                  strict &&
                  format === 'MMMM' &&
                  this._longMonthsParse[i].test(monthName)
              ) {
                  return i;
              } else if (
                  strict &&
                  format === 'MMM' &&
                  this._shortMonthsParse[i].test(monthName)
              ) {
                  return i;
              } else if (!strict && this._monthsParse[i].test(monthName)) {
                  return i;
              }
          }
      }

      // MOMENTS

      function setMonth(mom, value) {
          var dayOfMonth;

          if (!mom.isValid()) {
              // No op
              return mom;
          }

          if (typeof value === 'string') {
              if (/^\d+$/.test(value)) {
                  value = toInt(value);
              } else {
                  value = mom.localeData().monthsParse(value);
                  // TODO: Another silent failure?
                  if (!isNumber(value)) {
                      return mom;
                  }
              }
          }

          dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
          return mom;
      }

      function getSetMonth(value) {
          if (value != null) {
              setMonth(this, value);
              hooks.updateOffset(this, true);
              return this;
          } else {
              return get(this, 'Month');
          }
      }

      function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
      }

      function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
              if (!hasOwnProp(this, '_monthsRegex')) {
                  computeMonthsParse.call(this);
              }
              if (isStrict) {
                  return this._monthsShortStrictRegex;
              } else {
                  return this._monthsShortRegex;
              }
          } else {
              if (!hasOwnProp(this, '_monthsShortRegex')) {
                  this._monthsShortRegex = defaultMonthsShortRegex;
              }
              return this._monthsShortStrictRegex && isStrict
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex;
          }
      }

      function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
              if (!hasOwnProp(this, '_monthsRegex')) {
                  computeMonthsParse.call(this);
              }
              if (isStrict) {
                  return this._monthsStrictRegex;
              } else {
                  return this._monthsRegex;
              }
          } else {
              if (!hasOwnProp(this, '_monthsRegex')) {
                  this._monthsRegex = defaultMonthsRegex;
              }
              return this._monthsStrictRegex && isStrict
                  ? this._monthsStrictRegex
                  : this._monthsRegex;
          }
      }

      function computeMonthsParse() {
          function cmpLenRev(a, b) {
              return b.length - a.length;
          }

          var shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom;
          for (i = 0; i < 12; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, i]);
              shortPieces.push(this.monthsShort(mom, ''));
              longPieces.push(this.months(mom, ''));
              mixedPieces.push(this.months(mom, ''));
              mixedPieces.push(this.monthsShort(mom, ''));
          }
          // Sorting makes sure if one month (or abbr) is a prefix of another it
          // will match the longer piece.
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          for (i = 0; i < 12; i++) {
              shortPieces[i] = regexEscape(shortPieces[i]);
              longPieces[i] = regexEscape(longPieces[i]);
          }
          for (i = 0; i < 24; i++) {
              mixedPieces[i] = regexEscape(mixedPieces[i]);
          }

          this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp(
              '^(' + longPieces.join('|') + ')',
              'i'
          );
          this._monthsShortStrictRegex = new RegExp(
              '^(' + shortPieces.join('|') + ')',
              'i'
          );
      }

      // FORMATTING

      addFormatToken('Y', 0, 0, function () {
          var y = this.year();
          return y <= 9999 ? zeroFill(y, 4) : '+' + y;
      });

      addFormatToken(0, ['YY', 2], 0, function () {
          return this.year() % 100;
      });

      addFormatToken(0, ['YYYY', 4], 0, 'year');
      addFormatToken(0, ['YYYYY', 5], 0, 'year');
      addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

      // ALIASES

      addUnitAlias('year', 'y');

      // PRIORITIES

      addUnitPriority('year', 1);

      // PARSING

      addRegexToken('Y', matchSigned);
      addRegexToken('YY', match1to2, match2);
      addRegexToken('YYYY', match1to4, match4);
      addRegexToken('YYYYY', match1to6, match6);
      addRegexToken('YYYYYY', match1to6, match6);

      addParseToken(['YYYYY', 'YYYYYY'], YEAR);
      addParseToken('YYYY', function (input, array) {
          array[YEAR] =
              input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken('YY', function (input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken('Y', function (input, array) {
          array[YEAR] = parseInt(input, 10);
      });

      // HELPERS

      function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
      }

      // HOOKS

      hooks.parseTwoDigitYear = function (input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
      };

      // MOMENTS

      var getSetYear = makeGetSet('FullYear', true);

      function getIsLeapYear() {
          return isLeapYear(this.year());
      }

      function createDate(y, m, d, h, M, s, ms) {
          // can't just apply() to create a date:
          // https://stackoverflow.com/q/181348
          var date;
          // the date constructor remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              // preserve leap years using a full 400 year cycle, then reset
              date = new Date(y + 400, m, d, h, M, s, ms);
              if (isFinite(date.getFullYear())) {
                  date.setFullYear(y);
              }
          } else {
              date = new Date(y, m, d, h, M, s, ms);
          }

          return date;
      }

      function createUTCDate(y) {
          var date, args;
          // the Date.UTC function remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              args = Array.prototype.slice.call(arguments);
              // preserve leap years using a full 400 year cycle, then reset
              args[0] = y + 400;
              date = new Date(Date.UTC.apply(null, args));
              if (isFinite(date.getUTCFullYear())) {
                  date.setUTCFullYear(y);
              }
          } else {
              date = new Date(Date.UTC.apply(null, arguments));
          }

          return date;
      }

      // start-of-first-week - start-of-year
      function firstWeekOffset(year, dow, doy) {
          var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
              fwd = 7 + dow - doy,
              // first-week day local weekday -- which local weekday is fwd
              fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

          return -fwdlw + fwd - 1;
      }

      // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7,
              weekOffset = firstWeekOffset(year, dow, doy),
              dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
              resYear,
              resDayOfYear;

          if (dayOfYear <= 0) {
              resYear = year - 1;
              resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
              resYear = year + 1;
              resDayOfYear = dayOfYear - daysInYear(year);
          } else {
              resYear = year;
              resDayOfYear = dayOfYear;
          }

          return {
              year: resYear,
              dayOfYear: resDayOfYear,
          };
      }

      function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy),
              week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
              resWeek,
              resYear;

          if (week < 1) {
              resYear = mom.year() - 1;
              resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
              resWeek = week - weeksInYear(mom.year(), dow, doy);
              resYear = mom.year() + 1;
          } else {
              resYear = mom.year();
              resWeek = week;
          }

          return {
              week: resWeek,
              year: resYear,
          };
      }

      function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy),
              weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      }

      // FORMATTING

      addFormatToken('w', ['ww', 2], 'wo', 'week');
      addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

      // ALIASES

      addUnitAlias('week', 'w');
      addUnitAlias('isoWeek', 'W');

      // PRIORITIES

      addUnitPriority('week', 5);
      addUnitPriority('isoWeek', 5);

      // PARSING

      addRegexToken('w', match1to2);
      addRegexToken('ww', match1to2, match2);
      addRegexToken('W', match1to2);
      addRegexToken('WW', match1to2, match2);

      addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
          input,
          week,
          config,
          token
      ) {
          week[token.substr(0, 1)] = toInt(input);
      });

      // HELPERS

      // LOCALES

      function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }

      var defaultLocaleWeek = {
          dow: 0, // Sunday is the first day of the week.
          doy: 6, // The week that contains Jan 6th is the first week of the year.
      };

      function localeFirstDayOfWeek() {
          return this._week.dow;
      }

      function localeFirstDayOfYear() {
          return this._week.doy;
      }

      // MOMENTS

      function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, 'd');
      }

      function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, 'd');
      }

      // FORMATTING

      addFormatToken('d', 0, 'do', 'day');

      addFormatToken('dd', 0, 0, function (format) {
          return this.localeData().weekdaysMin(this, format);
      });

      addFormatToken('ddd', 0, 0, function (format) {
          return this.localeData().weekdaysShort(this, format);
      });

      addFormatToken('dddd', 0, 0, function (format) {
          return this.localeData().weekdays(this, format);
      });

      addFormatToken('e', 0, 0, 'weekday');
      addFormatToken('E', 0, 0, 'isoWeekday');

      // ALIASES

      addUnitAlias('day', 'd');
      addUnitAlias('weekday', 'e');
      addUnitAlias('isoWeekday', 'E');

      // PRIORITY
      addUnitPriority('day', 11);
      addUnitPriority('weekday', 11);
      addUnitPriority('isoWeekday', 11);

      // PARSING

      addRegexToken('d', match1to2);
      addRegexToken('e', match1to2);
      addRegexToken('E', match1to2);
      addRegexToken('dd', function (isStrict, locale) {
          return locale.weekdaysMinRegex(isStrict);
      });
      addRegexToken('ddd', function (isStrict, locale) {
          return locale.weekdaysShortRegex(isStrict);
      });
      addRegexToken('dddd', function (isStrict, locale) {
          return locale.weekdaysRegex(isStrict);
      });

      addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
          var weekday = config._locale.weekdaysParse(input, token, config._strict);
          // if we didn't get a weekday name, mark the date as invalid
          if (weekday != null) {
              week.d = weekday;
          } else {
              getParsingFlags(config).invalidWeekday = input;
          }
      });

      addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
          week[token] = toInt(input);
      });

      // HELPERS

      function parseWeekday(input, locale) {
          if (typeof input !== 'string') {
              return input;
          }

          if (!isNaN(input)) {
              return parseInt(input, 10);
          }

          input = locale.weekdaysParse(input);
          if (typeof input === 'number') {
              return input;
          }

          return null;
      }

      function parseIsoWeekday(input, locale) {
          if (typeof input === 'string') {
              return locale.weekdaysParse(input) % 7 || 7;
          }
          return isNaN(input) ? null : input;
      }

      // LOCALES
      function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
      }

      var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
              '_'
          ),
          defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          defaultWeekdaysRegex = matchWord,
          defaultWeekdaysShortRegex = matchWord,
          defaultWeekdaysMinRegex = matchWord;

      function localeWeekdays(m, format) {
          var weekdays = isArray(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                    m && m !== true && this._weekdays.isFormat.test(format)
                        ? 'format'
                        : 'standalone'
                ];
          return m === true
              ? shiftWeekdays(weekdays, this._week.dow)
              : m
              ? weekdays[m.day()]
              : weekdays;
      }

      function localeWeekdaysShort(m) {
          return m === true
              ? shiftWeekdays(this._weekdaysShort, this._week.dow)
              : m
              ? this._weekdaysShort[m.day()]
              : this._weekdaysShort;
      }

      function localeWeekdaysMin(m) {
          return m === true
              ? shiftWeekdays(this._weekdaysMin, this._week.dow)
              : m
              ? this._weekdaysMin[m.day()]
              : this._weekdaysMin;
      }

      function handleStrictParse$1(weekdayName, format, strict) {
          var i,
              ii,
              mom,
              llc = weekdayName.toLocaleLowerCase();
          if (!this._weekdaysParse) {
              this._weekdaysParse = [];
              this._shortWeekdaysParse = [];
              this._minWeekdaysParse = [];

              for (i = 0; i < 7; ++i) {
                  mom = createUTC([2000, 1]).day(i);
                  this._minWeekdaysParse[i] = this.weekdaysMin(
                      mom,
                      ''
                  ).toLocaleLowerCase();
                  this._shortWeekdaysParse[i] = this.weekdaysShort(
                      mom,
                      ''
                  ).toLocaleLowerCase();
                  this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
              }
          }

          if (strict) {
              if (format === 'dddd') {
                  ii = indexOf.call(this._weekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else if (format === 'ddd') {
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              }
          } else {
              if (format === 'dddd') {
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else if (format === 'ddd') {
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              } else {
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                      return ii;
                  }
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
              }
          }
      }

      function localeWeekdaysParse(weekdayName, format, strict) {
          var i, mom, regex;

          if (this._weekdaysParseExact) {
              return handleStrictParse$1.call(this, weekdayName, format, strict);
          }

          if (!this._weekdaysParse) {
              this._weekdaysParse = [];
              this._minWeekdaysParse = [];
              this._shortWeekdaysParse = [];
              this._fullWeekdaysParse = [];
          }

          for (i = 0; i < 7; i++) {
              // make the regex if we don't have it already

              mom = createUTC([2000, 1]).day(i);
              if (strict && !this._fullWeekdaysParse[i]) {
                  this._fullWeekdaysParse[i] = new RegExp(
                      '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                      'i'
                  );
                  this._shortWeekdaysParse[i] = new RegExp(
                      '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                      'i'
                  );
                  this._minWeekdaysParse[i] = new RegExp(
                      '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                      'i'
                  );
              }
              if (!this._weekdaysParse[i]) {
                  regex =
                      '^' +
                      this.weekdays(mom, '') +
                      '|^' +
                      this.weekdaysShort(mom, '') +
                      '|^' +
                      this.weekdaysMin(mom, '');
                  this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
              }
              // test the regex
              if (
                  strict &&
                  format === 'dddd' &&
                  this._fullWeekdaysParse[i].test(weekdayName)
              ) {
                  return i;
              } else if (
                  strict &&
                  format === 'ddd' &&
                  this._shortWeekdaysParse[i].test(weekdayName)
              ) {
                  return i;
              } else if (
                  strict &&
                  format === 'dd' &&
                  this._minWeekdaysParse[i].test(weekdayName)
              ) {
                  return i;
              } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                  return i;
              }
          }
      }

      // MOMENTS

      function getSetDayOfWeek(input) {
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }
          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (input != null) {
              input = parseWeekday(input, this.localeData());
              return this.add(input - day, 'd');
          } else {
              return day;
          }
      }

      function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }
          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, 'd');
      }

      function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }

          // behaves the same as moment#day except
          // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
          // as a setter, sunday should belong to the previous week.

          if (input != null) {
              var weekday = parseIsoWeekday(input, this.localeData());
              return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
              return this.day() || 7;
          }
      }

      function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
              }
              if (isStrict) {
                  return this._weekdaysStrictRegex;
              } else {
                  return this._weekdaysRegex;
              }
          } else {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  this._weekdaysRegex = defaultWeekdaysRegex;
              }
              return this._weekdaysStrictRegex && isStrict
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex;
          }
      }

      function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
              }
              if (isStrict) {
                  return this._weekdaysShortStrictRegex;
              } else {
                  return this._weekdaysShortRegex;
              }
          } else {
              if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                  this._weekdaysShortRegex = defaultWeekdaysShortRegex;
              }
              return this._weekdaysShortStrictRegex && isStrict
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex;
          }
      }

      function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
              }
              if (isStrict) {
                  return this._weekdaysMinStrictRegex;
              } else {
                  return this._weekdaysMinRegex;
              }
          } else {
              if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                  this._weekdaysMinRegex = defaultWeekdaysMinRegex;
              }
              return this._weekdaysMinStrictRegex && isStrict
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex;
          }
      }

      function computeWeekdaysParse() {
          function cmpLenRev(a, b) {
              return b.length - a.length;
          }

          var minPieces = [],
              shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom,
              minp,
              shortp,
              longp;
          for (i = 0; i < 7; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, 1]).day(i);
              minp = regexEscape(this.weekdaysMin(mom, ''));
              shortp = regexEscape(this.weekdaysShort(mom, ''));
              longp = regexEscape(this.weekdays(mom, ''));
              minPieces.push(minp);
              shortPieces.push(shortp);
              longPieces.push(longp);
              mixedPieces.push(minp);
              mixedPieces.push(shortp);
              mixedPieces.push(longp);
          }
          // Sorting makes sure if one weekday (or abbr) is a prefix of another it
          // will match the longer piece.
          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);

          this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;

          this._weekdaysStrictRegex = new RegExp(
              '^(' + longPieces.join('|') + ')',
              'i'
          );
          this._weekdaysShortStrictRegex = new RegExp(
              '^(' + shortPieces.join('|') + ')',
              'i'
          );
          this._weekdaysMinStrictRegex = new RegExp(
              '^(' + minPieces.join('|') + ')',
              'i'
          );
      }

      // FORMATTING

      function hFormat() {
          return this.hours() % 12 || 12;
      }

      function kFormat() {
          return this.hours() || 24;
      }

      addFormatToken('H', ['HH', 2], 0, 'hour');
      addFormatToken('h', ['hh', 2], 0, hFormat);
      addFormatToken('k', ['kk', 2], 0, kFormat);

      addFormatToken('hmm', 0, 0, function () {
          return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });

      addFormatToken('hmmss', 0, 0, function () {
          return (
              '' +
              hFormat.apply(this) +
              zeroFill(this.minutes(), 2) +
              zeroFill(this.seconds(), 2)
          );
      });

      addFormatToken('Hmm', 0, 0, function () {
          return '' + this.hours() + zeroFill(this.minutes(), 2);
      });

      addFormatToken('Hmmss', 0, 0, function () {
          return (
              '' +
              this.hours() +
              zeroFill(this.minutes(), 2) +
              zeroFill(this.seconds(), 2)
          );
      });

      function meridiem(token, lowercase) {
          addFormatToken(token, 0, 0, function () {
              return this.localeData().meridiem(
                  this.hours(),
                  this.minutes(),
                  lowercase
              );
          });
      }

      meridiem('a', true);
      meridiem('A', false);

      // ALIASES

      addUnitAlias('hour', 'h');

      // PRIORITY
      addUnitPriority('hour', 13);

      // PARSING

      function matchMeridiem(isStrict, locale) {
          return locale._meridiemParse;
      }

      addRegexToken('a', matchMeridiem);
      addRegexToken('A', matchMeridiem);
      addRegexToken('H', match1to2);
      addRegexToken('h', match1to2);
      addRegexToken('k', match1to2);
      addRegexToken('HH', match1to2, match2);
      addRegexToken('hh', match1to2, match2);
      addRegexToken('kk', match1to2, match2);

      addRegexToken('hmm', match3to4);
      addRegexToken('hmmss', match5to6);
      addRegexToken('Hmm', match3to4);
      addRegexToken('Hmmss', match5to6);

      addParseToken(['H', 'HH'], HOUR);
      addParseToken(['k', 'kk'], function (input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(['a', 'A'], function (input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
      });
      addParseToken(['h', 'hh'], function (input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmmss', function (input, array, config) {
          var pos1 = input.length - 4,
              pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
      });
      addParseToken('Hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken('Hmmss', function (input, array, config) {
          var pos1 = input.length - 4,
              pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
      });

      // LOCALES

      function localeIsPM(input) {
          // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
          // Using charAt should be more compatible.
          return (input + '').toLowerCase().charAt(0) === 'p';
      }

      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
          // Setting the hour should keep the time, because the user explicitly
          // specified which hour they want. So trying to maintain the same hour (in
          // a new timezone) makes sense. Adding/subtracting hours does not follow
          // this rule.
          getSetHour = makeGetSet('Hours', true);

      function localeMeridiem(hours, minutes, isLower) {
          if (hours > 11) {
              return isLower ? 'pm' : 'PM';
          } else {
              return isLower ? 'am' : 'AM';
          }
      }

      var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,

          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,

          week: defaultLocaleWeek,

          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,

          meridiemParse: defaultLocaleMeridiemParse,
      };

      // internal storage for locale config files
      var locales = {},
          localeFamilies = {},
          globalLocale;

      function commonPrefix(arr1, arr2) {
          var i,
              minl = Math.min(arr1.length, arr2.length);
          for (i = 0; i < minl; i += 1) {
              if (arr1[i] !== arr2[i]) {
                  return i;
              }
          }
          return minl;
      }

      function normalizeLocale(key) {
          return key ? key.toLowerCase().replace('_', '-') : key;
      }

      // pick the locale from the array
      // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
      // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
      function chooseLocale(names) {
          var i = 0,
              j,
              next,
              locale,
              split;

          while (i < names.length) {
              split = normalizeLocale(names[i]).split('-');
              j = split.length;
              next = normalizeLocale(names[i + 1]);
              next = next ? next.split('-') : null;
              while (j > 0) {
                  locale = loadLocale(split.slice(0, j).join('-'));
                  if (locale) {
                      return locale;
                  }
                  if (
                      next &&
                      next.length >= j &&
                      commonPrefix(split, next) >= j - 1
                  ) {
                      //the next array item is better than a shallower substring of this one
                      break;
                  }
                  j--;
              }
              i++;
          }
          return globalLocale;
      }

      function loadLocale(name) {
          var oldLocale = null,
              aliasedRequire;
          // TODO: Find a better way to register and load all the locales in Node
          if (
              locales[name] === undefined &&
              'object' !== 'undefined' &&
              module &&
              module.exports
          ) {
              try {
                  oldLocale = globalLocale._abbr;
                  aliasedRequire = commonjsRequire;
                  aliasedRequire('./locale/' + name);
                  getSetGlobalLocale(oldLocale);
              } catch (e) {
                  // mark as not found to avoid repeating expensive file require call causing high CPU
                  // when trying to find en-US, en_US, en-us for every format call
                  locales[name] = null; // null means not found
              }
          }
          return locales[name];
      }

      // This function will load locale and then set the global locale.  If
      // no arguments are passed in, it will simply return the current global
      // locale key.
      function getSetGlobalLocale(key, values) {
          var data;
          if (key) {
              if (isUndefined(values)) {
                  data = getLocale(key);
              } else {
                  data = defineLocale(key, values);
              }

              if (data) {
                  // moment.duration._locale = moment._locale = data;
                  globalLocale = data;
              } else {
                  if (typeof console !== 'undefined' && console.warn) {
                      //warn user if arguments are passed but the locale could not be set
                      console.warn(
                          'Locale ' + key + ' not found. Did you forget to load it?'
                      );
                  }
              }
          }

          return globalLocale._abbr;
      }

      function defineLocale(name, config) {
          if (config !== null) {
              var locale,
                  parentConfig = baseConfig;
              config.abbr = name;
              if (locales[name] != null) {
                  deprecateSimple(
                      'defineLocaleOverride',
                      'use moment.updateLocale(localeName, config) to change ' +
                          'an existing locale. moment.defineLocale(localeName, ' +
                          'config) should only be used for creating a new locale ' +
                          'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                  );
                  parentConfig = locales[name]._config;
              } else if (config.parentLocale != null) {
                  if (locales[config.parentLocale] != null) {
                      parentConfig = locales[config.parentLocale]._config;
                  } else {
                      locale = loadLocale(config.parentLocale);
                      if (locale != null) {
                          parentConfig = locale._config;
                      } else {
                          if (!localeFamilies[config.parentLocale]) {
                              localeFamilies[config.parentLocale] = [];
                          }
                          localeFamilies[config.parentLocale].push({
                              name: name,
                              config: config,
                          });
                          return null;
                      }
                  }
              }
              locales[name] = new Locale(mergeConfigs(parentConfig, config));

              if (localeFamilies[name]) {
                  localeFamilies[name].forEach(function (x) {
                      defineLocale(x.name, x.config);
                  });
              }

              // backwards compat for now: also set the locale
              // make sure we set the locale AFTER all child locales have been
              // created, so we won't end up with the child locale set.
              getSetGlobalLocale(name);

              return locales[name];
          } else {
              // useful for testing
              delete locales[name];
              return null;
          }
      }

      function updateLocale(name, config) {
          if (config != null) {
              var locale,
                  tmpLocale,
                  parentConfig = baseConfig;

              if (locales[name] != null && locales[name].parentLocale != null) {
                  // Update existing child locale in-place to avoid memory-leaks
                  locales[name].set(mergeConfigs(locales[name]._config, config));
              } else {
                  // MERGE
                  tmpLocale = loadLocale(name);
                  if (tmpLocale != null) {
                      parentConfig = tmpLocale._config;
                  }
                  config = mergeConfigs(parentConfig, config);
                  if (tmpLocale == null) {
                      // updateLocale is called for creating a new locale
                      // Set abbr so it will have a name (getters return
                      // undefined otherwise).
                      config.abbr = name;
                  }
                  locale = new Locale(config);
                  locale.parentLocale = locales[name];
                  locales[name] = locale;
              }

              // backwards compat for now: also set the locale
              getSetGlobalLocale(name);
          } else {
              // pass null for config to unupdate, useful for tests
              if (locales[name] != null) {
                  if (locales[name].parentLocale != null) {
                      locales[name] = locales[name].parentLocale;
                      if (name === getSetGlobalLocale()) {
                          getSetGlobalLocale(name);
                      }
                  } else if (locales[name] != null) {
                      delete locales[name];
                  }
              }
          }
          return locales[name];
      }

      // returns locale data
      function getLocale(key) {
          var locale;

          if (key && key._locale && key._locale._abbr) {
              key = key._locale._abbr;
          }

          if (!key) {
              return globalLocale;
          }

          if (!isArray(key)) {
              //short-circuit everything else
              locale = loadLocale(key);
              if (locale) {
                  return locale;
              }
              key = [key];
          }

          return chooseLocale(key);
      }

      function listLocales() {
          return keys(locales);
      }

      function checkOverflow(m) {
          var overflow,
              a = m._a;

          if (a && getParsingFlags(m).overflow === -2) {
              overflow =
                  a[MONTH] < 0 || a[MONTH] > 11
                      ? MONTH
                      : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                      ? DATE
                      : a[HOUR] < 0 ||
                        a[HOUR] > 24 ||
                        (a[HOUR] === 24 &&
                            (a[MINUTE] !== 0 ||
                                a[SECOND] !== 0 ||
                                a[MILLISECOND] !== 0))
                      ? HOUR
                      : a[MINUTE] < 0 || a[MINUTE] > 59
                      ? MINUTE
                      : a[SECOND] < 0 || a[SECOND] > 59
                      ? SECOND
                      : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                      ? MILLISECOND
                      : -1;

              if (
                  getParsingFlags(m)._overflowDayOfYear &&
                  (overflow < YEAR || overflow > DATE)
              ) {
                  overflow = DATE;
              }
              if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                  overflow = WEEK;
              }
              if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                  overflow = WEEKDAY;
              }

              getParsingFlags(m).overflow = overflow;
          }

          return m;
      }

      // iso 8601 regex
      // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
          isoDates = [
              ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
              ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
              ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
              ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
              ['YYYY-DDD', /\d{4}-\d{3}/],
              ['YYYY-MM', /\d{4}-\d\d/, false],
              ['YYYYYYMMDD', /[+-]\d{10}/],
              ['YYYYMMDD', /\d{8}/],
              ['GGGG[W]WWE', /\d{4}W\d{3}/],
              ['GGGG[W]WW', /\d{4}W\d{2}/, false],
              ['YYYYDDD', /\d{7}/],
              ['YYYYMM', /\d{6}/, false],
              ['YYYY', /\d{4}/, false],
          ],
          // iso time formats and regexes
          isoTimes = [
              ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
              ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
              ['HH:mm:ss', /\d\d:\d\d:\d\d/],
              ['HH:mm', /\d\d:\d\d/],
              ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
              ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
              ['HHmmss', /\d\d\d\d\d\d/],
              ['HHmm', /\d\d\d\d/],
              ['HH', /\d\d/],
          ],
          aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
          // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
          rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          obsOffsets = {
              UT: 0,
              GMT: 0,
              EDT: -4 * 60,
              EST: -5 * 60,
              CDT: -5 * 60,
              CST: -6 * 60,
              MDT: -6 * 60,
              MST: -7 * 60,
              PDT: -7 * 60,
              PST: -8 * 60,
          };

      // date from iso format
      function configFromISO(config) {
          var i,
              l,
              string = config._i,
              match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
              allowTime,
              dateFormat,
              timeFormat,
              tzFormat;

          if (match) {
              getParsingFlags(config).iso = true;

              for (i = 0, l = isoDates.length; i < l; i++) {
                  if (isoDates[i][1].exec(match[1])) {
                      dateFormat = isoDates[i][0];
                      allowTime = isoDates[i][2] !== false;
                      break;
                  }
              }
              if (dateFormat == null) {
                  config._isValid = false;
                  return;
              }
              if (match[3]) {
                  for (i = 0, l = isoTimes.length; i < l; i++) {
                      if (isoTimes[i][1].exec(match[3])) {
                          // match[2] should be 'T' or space
                          timeFormat = (match[2] || ' ') + isoTimes[i][0];
                          break;
                      }
                  }
                  if (timeFormat == null) {
                      config._isValid = false;
                      return;
                  }
              }
              if (!allowTime && timeFormat != null) {
                  config._isValid = false;
                  return;
              }
              if (match[4]) {
                  if (tzRegex.exec(match[4])) {
                      tzFormat = 'Z';
                  } else {
                      config._isValid = false;
                      return;
                  }
              }
              config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
              configFromStringAndFormat(config);
          } else {
              config._isValid = false;
          }
      }

      function extractFromRFC2822Strings(
          yearStr,
          monthStr,
          dayStr,
          hourStr,
          minuteStr,
          secondStr
      ) {
          var result = [
              untruncateYear(yearStr),
              defaultLocaleMonthsShort.indexOf(monthStr),
              parseInt(dayStr, 10),
              parseInt(hourStr, 10),
              parseInt(minuteStr, 10),
          ];

          if (secondStr) {
              result.push(parseInt(secondStr, 10));
          }

          return result;
      }

      function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);
          if (year <= 49) {
              return 2000 + year;
          } else if (year <= 999) {
              return 1900 + year;
          }
          return year;
      }

      function preprocessRFC2822(s) {
          // Remove comments and folding whitespace and replace multiple-spaces with a single space
          return s
              .replace(/\([^)]*\)|[\n\t]/g, ' ')
              .replace(/(\s\s+)/g, ' ')
              .replace(/^\s\s*/, '')
              .replace(/\s\s*$/, '');
      }

      function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
              // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
              var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                  weekdayActual = new Date(
                      parsedInput[0],
                      parsedInput[1],
                      parsedInput[2]
                  ).getDay();
              if (weekdayProvided !== weekdayActual) {
                  getParsingFlags(config).weekdayMismatch = true;
                  config._isValid = false;
                  return false;
              }
          }
          return true;
      }

      function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
              return obsOffsets[obsOffset];
          } else if (militaryOffset) {
              // the only allowed military tz is Z
              return 0;
          } else {
              var hm = parseInt(numOffset, 10),
                  m = hm % 100,
                  h = (hm - m) / 100;
              return h * 60 + m;
          }
      }

      // date and time from ref 2822 format
      function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i)),
              parsedArray;
          if (match) {
              parsedArray = extractFromRFC2822Strings(
                  match[4],
                  match[3],
                  match[2],
                  match[5],
                  match[6],
                  match[7]
              );
              if (!checkWeekday(match[1], parsedArray, config)) {
                  return;
              }

              config._a = parsedArray;
              config._tzm = calculateOffset(match[8], match[9], match[10]);

              config._d = createUTCDate.apply(null, config._a);
              config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

              getParsingFlags(config).rfc2822 = true;
          } else {
              config._isValid = false;
          }
      }

      // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
      function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);
          if (matched !== null) {
              config._d = new Date(+matched[1]);
              return;
          }

          configFromISO(config);
          if (config._isValid === false) {
              delete config._isValid;
          } else {
              return;
          }

          configFromRFC2822(config);
          if (config._isValid === false) {
              delete config._isValid;
          } else {
              return;
          }

          if (config._strict) {
              config._isValid = false;
          } else {
              // Final attempt, use Input Fallback
              hooks.createFromInputFallback(config);
          }
      }

      hooks.createFromInputFallback = deprecate(
          'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
              'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
              'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
          function (config) {
              config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
          }
      );

      // Pick the first defined of two or three arguments.
      function defaults(a, b, c) {
          if (a != null) {
              return a;
          }
          if (b != null) {
              return b;
          }
          return c;
      }

      function currentDateArray(config) {
          // hooks is actually the exported moment object
          var nowValue = new Date(hooks.now());
          if (config._useUTC) {
              return [
                  nowValue.getUTCFullYear(),
                  nowValue.getUTCMonth(),
                  nowValue.getUTCDate(),
              ];
          }
          return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      }

      // convert an array to a date.
      // the array should mirror the parameters below
      // note: all values past the year are optional and will default to the lowest possible value.
      // [year, month, day , hour, minute, second, millisecond]
      function configFromArray(config) {
          var i,
              date,
              input = [],
              currentDate,
              expectedWeekday,
              yearToUse;

          if (config._d) {
              return;
          }

          currentDate = currentDateArray(config);

          //compute day of the year from weeks and weekdays
          if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
              dayOfYearFromWeekInfo(config);
          }

          //if the day of the year is set, figure out what it is
          if (config._dayOfYear != null) {
              yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

              if (
                  config._dayOfYear > daysInYear(yearToUse) ||
                  config._dayOfYear === 0
              ) {
                  getParsingFlags(config)._overflowDayOfYear = true;
              }

              date = createUTCDate(yearToUse, 0, config._dayOfYear);
              config._a[MONTH] = date.getUTCMonth();
              config._a[DATE] = date.getUTCDate();
          }

          // Default to current date.
          // * if no year, month, day of month are given, default to today
          // * if day of month is given, default month and year
          // * if month is given, default only year
          // * if year is given, don't default anything
          for (i = 0; i < 3 && config._a[i] == null; ++i) {
              config._a[i] = input[i] = currentDate[i];
          }

          // Zero out whatever was not defaulted, including time
          for (; i < 7; i++) {
              config._a[i] = input[i] =
                  config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
          }

          // Check for 24:00:00.000
          if (
              config._a[HOUR] === 24 &&
              config._a[MINUTE] === 0 &&
              config._a[SECOND] === 0 &&
              config._a[MILLISECOND] === 0
          ) {
              config._nextDay = true;
              config._a[HOUR] = 0;
          }

          config._d = (config._useUTC ? createUTCDate : createDate).apply(
              null,
              input
          );
          expectedWeekday = config._useUTC
              ? config._d.getUTCDay()
              : config._d.getDay();

          // Apply timezone offset from input. The actual utcOffset can be changed
          // with parseZone.
          if (config._tzm != null) {
              config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }

          if (config._nextDay) {
              config._a[HOUR] = 24;
          }

          // check for mismatching day of week
          if (
              config._w &&
              typeof config._w.d !== 'undefined' &&
              config._w.d !== expectedWeekday
          ) {
              getParsingFlags(config).weekdayMismatch = true;
          }
      }

      function dayOfYearFromWeekInfo(config) {
          var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

          w = config._w;
          if (w.GG != null || w.W != null || w.E != null) {
              dow = 1;
              doy = 4;

              // TODO: We need to take the current isoWeekYear, but that depends on
              // how we interpret now (local, utc, fixed offset). So create
              // a now version of current config (take local/utc/offset flags, and
              // create now).
              weekYear = defaults(
                  w.GG,
                  config._a[YEAR],
                  weekOfYear(createLocal(), 1, 4).year
              );
              week = defaults(w.W, 1);
              weekday = defaults(w.E, 1);
              if (weekday < 1 || weekday > 7) {
                  weekdayOverflow = true;
              }
          } else {
              dow = config._locale._week.dow;
              doy = config._locale._week.doy;

              curWeek = weekOfYear(createLocal(), dow, doy);

              weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

              // Default to current week.
              week = defaults(w.w, curWeek.week);

              if (w.d != null) {
                  // weekday -- low day numbers are considered next week
                  weekday = w.d;
                  if (weekday < 0 || weekday > 6) {
                      weekdayOverflow = true;
                  }
              } else if (w.e != null) {
                  // local weekday -- counting starts from beginning of week
                  weekday = w.e + dow;
                  if (w.e < 0 || w.e > 6) {
                      weekdayOverflow = true;
                  }
              } else {
                  // default to beginning of week
                  weekday = dow;
              }
          }
          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
              getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
              getParsingFlags(config)._overflowWeekday = true;
          } else {
              temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
              config._a[YEAR] = temp.year;
              config._dayOfYear = temp.dayOfYear;
          }
      }

      // constant that refers to the ISO standard
      hooks.ISO_8601 = function () {};

      // constant that refers to the RFC 2822 form
      hooks.RFC_2822 = function () {};

      // date from string and format string
      function configFromStringAndFormat(config) {
          // TODO: Move this to another part of the creation flow to prevent circular deps
          if (config._f === hooks.ISO_8601) {
              configFromISO(config);
              return;
          }
          if (config._f === hooks.RFC_2822) {
              configFromRFC2822(config);
              return;
          }
          config._a = [];
          getParsingFlags(config).empty = true;

          // This array is used to make a Date, either with `new Date` or `Date.UTC`
          var string = '' + config._i,
              i,
              parsedInput,
              tokens,
              token,
              skipped,
              stringLength = string.length,
              totalParsedInputLength = 0,
              era;

          tokens =
              expandFormat(config._f, config._locale).match(formattingTokens) || [];

          for (i = 0; i < tokens.length; i++) {
              token = tokens[i];
              parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                  [])[0];
              if (parsedInput) {
                  skipped = string.substr(0, string.indexOf(parsedInput));
                  if (skipped.length > 0) {
                      getParsingFlags(config).unusedInput.push(skipped);
                  }
                  string = string.slice(
                      string.indexOf(parsedInput) + parsedInput.length
                  );
                  totalParsedInputLength += parsedInput.length;
              }
              // don't parse if it's not a known token
              if (formatTokenFunctions[token]) {
                  if (parsedInput) {
                      getParsingFlags(config).empty = false;
                  } else {
                      getParsingFlags(config).unusedTokens.push(token);
                  }
                  addTimeToArrayFromToken(token, parsedInput, config);
              } else if (config._strict && !parsedInput) {
                  getParsingFlags(config).unusedTokens.push(token);
              }
          }

          // add remaining unparsed input length to the string
          getParsingFlags(config).charsLeftOver =
              stringLength - totalParsedInputLength;
          if (string.length > 0) {
              getParsingFlags(config).unusedInput.push(string);
          }

          // clear _12h flag if hour is <= 12
          if (
              config._a[HOUR] <= 12 &&
              getParsingFlags(config).bigHour === true &&
              config._a[HOUR] > 0
          ) {
              getParsingFlags(config).bigHour = undefined;
          }

          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem;
          // handle meridiem
          config._a[HOUR] = meridiemFixWrap(
              config._locale,
              config._a[HOUR],
              config._meridiem
          );

          // handle era
          era = getParsingFlags(config).era;
          if (era !== null) {
              config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
          }

          configFromArray(config);
          checkOverflow(config);
      }

      function meridiemFixWrap(locale, hour, meridiem) {
          var isPm;

          if (meridiem == null) {
              // nothing to do
              return hour;
          }
          if (locale.meridiemHour != null) {
              return locale.meridiemHour(hour, meridiem);
          } else if (locale.isPM != null) {
              // Fallback
              isPm = locale.isPM(meridiem);
              if (isPm && hour < 12) {
                  hour += 12;
              }
              if (!isPm && hour === 12) {
                  hour = 0;
              }
              return hour;
          } else {
              // this is not supposed to happen
              return hour;
          }
      }

      // date from string and array of format strings
      function configFromStringAndArray(config) {
          var tempConfig,
              bestMoment,
              scoreToBeat,
              i,
              currentScore,
              validFormatFound,
              bestFormatIsValid = false;

          if (config._f.length === 0) {
              getParsingFlags(config).invalidFormat = true;
              config._d = new Date(NaN);
              return;
          }

          for (i = 0; i < config._f.length; i++) {
              currentScore = 0;
              validFormatFound = false;
              tempConfig = copyConfig({}, config);
              if (config._useUTC != null) {
                  tempConfig._useUTC = config._useUTC;
              }
              tempConfig._f = config._f[i];
              configFromStringAndFormat(tempConfig);

              if (isValid(tempConfig)) {
                  validFormatFound = true;
              }

              // if there is any input that was not parsed add a penalty for that format
              currentScore += getParsingFlags(tempConfig).charsLeftOver;

              //or tokens
              currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

              getParsingFlags(tempConfig).score = currentScore;

              if (!bestFormatIsValid) {
                  if (
                      scoreToBeat == null ||
                      currentScore < scoreToBeat ||
                      validFormatFound
                  ) {
                      scoreToBeat = currentScore;
                      bestMoment = tempConfig;
                      if (validFormatFound) {
                          bestFormatIsValid = true;
                      }
                  }
              } else {
                  if (currentScore < scoreToBeat) {
                      scoreToBeat = currentScore;
                      bestMoment = tempConfig;
                  }
              }
          }

          extend(config, bestMoment || tempConfig);
      }

      function configFromObject(config) {
          if (config._d) {
              return;
          }

          var i = normalizeObjectUnits(config._i),
              dayOrDate = i.day === undefined ? i.date : i.day;
          config._a = map(
              [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
              function (obj) {
                  return obj && parseInt(obj, 10);
              }
          );

          configFromArray(config);
      }

      function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));
          if (res._nextDay) {
              // Adding is smart enough around DST
              res.add(1, 'd');
              res._nextDay = undefined;
          }

          return res;
      }

      function prepareConfig(config) {
          var input = config._i,
              format = config._f;

          config._locale = config._locale || getLocale(config._l);

          if (input === null || (format === undefined && input === '')) {
              return createInvalid({ nullInput: true });
          }

          if (typeof input === 'string') {
              config._i = input = config._locale.preparse(input);
          }

          if (isMoment(input)) {
              return new Moment(checkOverflow(input));
          } else if (isDate(input)) {
              config._d = input;
          } else if (isArray(format)) {
              configFromStringAndArray(config);
          } else if (format) {
              configFromStringAndFormat(config);
          } else {
              configFromInput(config);
          }

          if (!isValid(config)) {
              config._d = null;
          }

          return config;
      }

      function configFromInput(config) {
          var input = config._i;
          if (isUndefined(input)) {
              config._d = new Date(hooks.now());
          } else if (isDate(input)) {
              config._d = new Date(input.valueOf());
          } else if (typeof input === 'string') {
              configFromString(config);
          } else if (isArray(input)) {
              config._a = map(input.slice(0), function (obj) {
                  return parseInt(obj, 10);
              });
              configFromArray(config);
          } else if (isObject(input)) {
              configFromObject(config);
          } else if (isNumber(input)) {
              // from milliseconds
              config._d = new Date(input);
          } else {
              hooks.createFromInputFallback(config);
          }
      }

      function createLocalOrUTC(input, format, locale, strict, isUTC) {
          var c = {};

          if (format === true || format === false) {
              strict = format;
              format = undefined;
          }

          if (locale === true || locale === false) {
              strict = locale;
              locale = undefined;
          }

          if (
              (isObject(input) && isObjectEmpty(input)) ||
              (isArray(input) && input.length === 0)
          ) {
              input = undefined;
          }
          // object construction must be done this way.
          // https://github.com/moment/moment/issues/1423
          c._isAMomentObject = true;
          c._useUTC = c._isUTC = isUTC;
          c._l = locale;
          c._i = input;
          c._f = format;
          c._strict = strict;

          return createFromConfig(c);
      }

      function createLocal(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, false);
      }

      var prototypeMin = deprecate(
              'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                  var other = createLocal.apply(null, arguments);
                  if (this.isValid() && other.isValid()) {
                      return other < this ? this : other;
                  } else {
                      return createInvalid();
                  }
              }
          ),
          prototypeMax = deprecate(
              'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                  var other = createLocal.apply(null, arguments);
                  if (this.isValid() && other.isValid()) {
                      return other > this ? this : other;
                  } else {
                      return createInvalid();
                  }
              }
          );

      // Pick a moment m from moments so that m[fn](other) is true for all
      // other. This relies on the function fn to be transitive.
      //
      // moments should either be an array of moment objects or an array, whose
      // first element is an array of moment objects.
      function pickBy(fn, moments) {
          var res, i;
          if (moments.length === 1 && isArray(moments[0])) {
              moments = moments[0];
          }
          if (!moments.length) {
              return createLocal();
          }
          res = moments[0];
          for (i = 1; i < moments.length; ++i) {
              if (!moments[i].isValid() || moments[i][fn](res)) {
                  res = moments[i];
              }
          }
          return res;
      }

      // TODO: Use [].sort instead?
      function min() {
          var args = [].slice.call(arguments, 0);

          return pickBy('isBefore', args);
      }

      function max() {
          var args = [].slice.call(arguments, 0);

          return pickBy('isAfter', args);
      }

      var now = function () {
          return Date.now ? Date.now() : +new Date();
      };

      var ordering = [
          'year',
          'quarter',
          'month',
          'week',
          'day',
          'hour',
          'minute',
          'second',
          'millisecond',
      ];

      function isDurationValid(m) {
          var key,
              unitHasDecimal = false,
              i;
          for (key in m) {
              if (
                  hasOwnProp(m, key) &&
                  !(
                      indexOf.call(ordering, key) !== -1 &&
                      (m[key] == null || !isNaN(m[key]))
                  )
              ) {
                  return false;
              }
          }

          for (i = 0; i < ordering.length; ++i) {
              if (m[ordering[i]]) {
                  if (unitHasDecimal) {
                      return false; // only allow non-integers for smallest unit
                  }
                  if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                      unitHasDecimal = true;
                  }
              }
          }

          return true;
      }

      function isValid$1() {
          return this._isValid;
      }

      function createInvalid$1() {
          return createDuration(NaN);
      }

      function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration),
              years = normalizedInput.year || 0,
              quarters = normalizedInput.quarter || 0,
              months = normalizedInput.month || 0,
              weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
              days = normalizedInput.day || 0,
              hours = normalizedInput.hour || 0,
              minutes = normalizedInput.minute || 0,
              seconds = normalizedInput.second || 0,
              milliseconds = normalizedInput.millisecond || 0;

          this._isValid = isDurationValid(normalizedInput);

          // representation for dateAddRemove
          this._milliseconds =
              +milliseconds +
              seconds * 1e3 + // 1000
              minutes * 6e4 + // 1000 * 60
              hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
          // Because of dateAddRemove treats 24 hours as different from a
          // day when working around DST, we need to store them separately
          this._days = +days + weeks * 7;
          // It is impossible to translate months into days without knowing
          // which months you are are talking about, so we have to store
          // it separately.
          this._months = +months + quarters * 3 + years * 12;

          this._data = {};

          this._locale = getLocale();

          this._bubble();
      }

      function isDuration(obj) {
          return obj instanceof Duration;
      }

      function absRound(number) {
          if (number < 0) {
              return Math.round(-1 * number) * -1;
          } else {
              return Math.round(number);
          }
      }

      // compare two arrays, return the number of differences
      function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length),
              lengthDiff = Math.abs(array1.length - array2.length),
              diffs = 0,
              i;
          for (i = 0; i < len; i++) {
              if (
                  (dontConvert && array1[i] !== array2[i]) ||
                  (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
              ) {
                  diffs++;
              }
          }
          return diffs + lengthDiff;
      }

      // FORMATTING

      function offset(token, separator) {
          addFormatToken(token, 0, 0, function () {
              var offset = this.utcOffset(),
                  sign = '+';
              if (offset < 0) {
                  offset = -offset;
                  sign = '-';
              }
              return (
                  sign +
                  zeroFill(~~(offset / 60), 2) +
                  separator +
                  zeroFill(~~offset % 60, 2)
              );
          });
      }

      offset('Z', ':');
      offset('ZZ', '');

      // PARSING

      addRegexToken('Z', matchShortOffset);
      addRegexToken('ZZ', matchShortOffset);
      addParseToken(['Z', 'ZZ'], function (input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
      });

      // HELPERS

      // timezone chunker
      // '+10:00' > ['10',  '00']
      // '-1530'  > ['-15', '30']
      var chunkOffset = /([\+\-]|\d\d)/gi;

      function offsetFromString(matcher, string) {
          var matches = (string || '').match(matcher),
              chunk,
              parts,
              minutes;

          if (matches === null) {
              return null;
          }

          chunk = matches[matches.length - 1] || [];
          parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
          minutes = +(parts[1] * 60) + toInt(parts[2]);

          return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
      }

      // Return a moment from input, that is local/utc/zone equivalent to model.
      function cloneWithOffset(input, model) {
          var res, diff;
          if (model._isUTC) {
              res = model.clone();
              diff =
                  (isMoment(input) || isDate(input)
                      ? input.valueOf()
                      : createLocal(input).valueOf()) - res.valueOf();
              // Use low-level api, because this fn is low-level api.
              res._d.setTime(res._d.valueOf() + diff);
              hooks.updateOffset(res, false);
              return res;
          } else {
              return createLocal(input).local();
          }
      }

      function getDateOffset(m) {
          // On Firefox.24 Date#getTimezoneOffset returns a floating point.
          // https://github.com/moment/moment/pull/1871
          return -Math.round(m._d.getTimezoneOffset());
      }

      // HOOKS

      // This function will be called whenever a moment is mutated.
      // It is intended to keep the offset in sync with the timezone.
      hooks.updateOffset = function () {};

      // MOMENTS

      // keepLocalTime = true means only change the timezone, without
      // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
      // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
      // +0200, so we adjust the time as needed, to be valid.
      //
      // Keeping the time actually adds/subtracts (one hour)
      // from the actual represented time. That is why we call updateOffset
      // a second time. In case it wants us to change the offset again
      // _changeInProgress == true case, then we have to adjust, because
      // there is no such time in the given timezone.
      function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset = this._offset || 0,
              localAdjust;
          if (!this.isValid()) {
              return input != null ? this : NaN;
          }
          if (input != null) {
              if (typeof input === 'string') {
                  input = offsetFromString(matchShortOffset, input);
                  if (input === null) {
                      return this;
                  }
              } else if (Math.abs(input) < 16 && !keepMinutes) {
                  input = input * 60;
              }
              if (!this._isUTC && keepLocalTime) {
                  localAdjust = getDateOffset(this);
              }
              this._offset = input;
              this._isUTC = true;
              if (localAdjust != null) {
                  this.add(localAdjust, 'm');
              }
              if (offset !== input) {
                  if (!keepLocalTime || this._changeInProgress) {
                      addSubtract(
                          this,
                          createDuration(input - offset, 'm'),
                          1,
                          false
                      );
                  } else if (!this._changeInProgress) {
                      this._changeInProgress = true;
                      hooks.updateOffset(this, true);
                      this._changeInProgress = null;
                  }
              }
              return this;
          } else {
              return this._isUTC ? offset : getDateOffset(this);
          }
      }

      function getSetZone(input, keepLocalTime) {
          if (input != null) {
              if (typeof input !== 'string') {
                  input = -input;
              }

              this.utcOffset(input, keepLocalTime);

              return this;
          } else {
              return -this.utcOffset();
          }
      }

      function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
      }

      function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
              this.utcOffset(0, keepLocalTime);
              this._isUTC = false;

              if (keepLocalTime) {
                  this.subtract(getDateOffset(this), 'm');
              }
          }
          return this;
      }

      function setOffsetToParsedOffset() {
          if (this._tzm != null) {
              this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === 'string') {
              var tZone = offsetFromString(matchOffset, this._i);
              if (tZone != null) {
                  this.utcOffset(tZone);
              } else {
                  this.utcOffset(0, true);
              }
          }
          return this;
      }

      function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
              return false;
          }
          input = input ? createLocal(input).utcOffset() : 0;

          return (this.utcOffset() - input) % 60 === 0;
      }

      function isDaylightSavingTime() {
          return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
          );
      }

      function isDaylightSavingTimeShifted() {
          if (!isUndefined(this._isDSTShifted)) {
              return this._isDSTShifted;
          }

          var c = {},
              other;

          copyConfig(c, this);
          c = prepareConfig(c);

          if (c._a) {
              other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
              this._isDSTShifted =
                  this.isValid() && compareArrays(c._a, other.toArray()) > 0;
          } else {
              this._isDSTShifted = false;
          }

          return this._isDSTShifted;
      }

      function isLocal() {
          return this.isValid() ? !this._isUTC : false;
      }

      function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
      }

      function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }

      // ASP.NET json date format regex
      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
          // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
          // and further modified to allow for strings containing both week and day
          isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function createDuration(input, key) {
          var duration = input,
              // matching against regexp is expensive, do it on demand
              match = null,
              sign,
              ret,
              diffRes;

          if (isDuration(input)) {
              duration = {
                  ms: input._milliseconds,
                  d: input._days,
                  M: input._months,
              };
          } else if (isNumber(input) || !isNaN(+input)) {
              duration = {};
              if (key) {
                  duration[key] = +input;
              } else {
                  duration.milliseconds = +input;
              }
          } else if ((match = aspNetRegex.exec(input))) {
              sign = match[1] === '-' ? -1 : 1;
              duration = {
                  y: 0,
                  d: toInt(match[DATE]) * sign,
                  h: toInt(match[HOUR]) * sign,
                  m: toInt(match[MINUTE]) * sign,
                  s: toInt(match[SECOND]) * sign,
                  ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
              };
          } else if ((match = isoRegex.exec(input))) {
              sign = match[1] === '-' ? -1 : 1;
              duration = {
                  y: parseIso(match[2], sign),
                  M: parseIso(match[3], sign),
                  w: parseIso(match[4], sign),
                  d: parseIso(match[5], sign),
                  h: parseIso(match[6], sign),
                  m: parseIso(match[7], sign),
                  s: parseIso(match[8], sign),
              };
          } else if (duration == null) {
              // checks for null or undefined
              duration = {};
          } else if (
              typeof duration === 'object' &&
              ('from' in duration || 'to' in duration)
          ) {
              diffRes = momentsDifference(
                  createLocal(duration.from),
                  createLocal(duration.to)
              );

              duration = {};
              duration.ms = diffRes.milliseconds;
              duration.M = diffRes.months;
          }

          ret = new Duration(duration);

          if (isDuration(input) && hasOwnProp(input, '_locale')) {
              ret._locale = input._locale;
          }

          if (isDuration(input) && hasOwnProp(input, '_isValid')) {
              ret._isValid = input._isValid;
          }

          return ret;
      }

      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;

      function parseIso(inp, sign) {
          // We'd normally use ~~inp for this, but unfortunately it also
          // converts floats to ints.
          // inp may be undefined, so careful calling replace on it.
          var res = inp && parseFloat(inp.replace(',', '.'));
          // apply sign while we're at it
          return (isNaN(res) ? 0 : res) * sign;
      }

      function positiveMomentsDifference(base, other) {
          var res = {};

          res.months =
              other.month() - base.month() + (other.year() - base.year()) * 12;
          if (base.clone().add(res.months, 'M').isAfter(other)) {
              --res.months;
          }

          res.milliseconds = +other - +base.clone().add(res.months, 'M');

          return res;
      }

      function momentsDifference(base, other) {
          var res;
          if (!(base.isValid() && other.isValid())) {
              return { milliseconds: 0, months: 0 };
          }

          other = cloneWithOffset(other, base);
          if (base.isBefore(other)) {
              res = positiveMomentsDifference(base, other);
          } else {
              res = positiveMomentsDifference(other, base);
              res.milliseconds = -res.milliseconds;
              res.months = -res.months;
          }

          return res;
      }

      // TODO: remove 'name' arg after deprecation is removed
      function createAdder(direction, name) {
          return function (val, period) {
              var dur, tmp;
              //invert the arguments, but complain about it
              if (period !== null && !isNaN(+period)) {
                  deprecateSimple(
                      name,
                      'moment().' +
                          name +
                          '(period, number) is deprecated. Please use moment().' +
                          name +
                          '(number, period). ' +
                          'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                  );
                  tmp = val;
                  val = period;
                  period = tmp;
              }

              dur = createDuration(val, period);
              addSubtract(this, dur, direction);
              return this;
          };
      }

      function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds = duration._milliseconds,
              days = absRound(duration._days),
              months = absRound(duration._months);

          if (!mom.isValid()) {
              // No op
              return;
          }

          updateOffset = updateOffset == null ? true : updateOffset;

          if (months) {
              setMonth(mom, get(mom, 'Month') + months * isAdding);
          }
          if (days) {
              set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
          }
          if (milliseconds) {
              mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
          }
          if (updateOffset) {
              hooks.updateOffset(mom, days || months);
          }
      }

      var add = createAdder(1, 'add'),
          subtract = createAdder(-1, 'subtract');

      function isString(input) {
          return typeof input === 'string' || input instanceof String;
      }

      // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
      function isMomentInput(input) {
          return (
              isMoment(input) ||
              isDate(input) ||
              isString(input) ||
              isNumber(input) ||
              isNumberOrStringArray(input) ||
              isMomentInputObject(input) ||
              input === null ||
              input === undefined
          );
      }

      function isMomentInputObject(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input),
              propertyTest = false,
              properties = [
                  'years',
                  'year',
                  'y',
                  'months',
                  'month',
                  'M',
                  'days',
                  'day',
                  'd',
                  'dates',
                  'date',
                  'D',
                  'hours',
                  'hour',
                  'h',
                  'minutes',
                  'minute',
                  'm',
                  'seconds',
                  'second',
                  's',
                  'milliseconds',
                  'millisecond',
                  'ms',
              ],
              i,
              property;

          for (i = 0; i < properties.length; i += 1) {
              property = properties[i];
              propertyTest = propertyTest || hasOwnProp(input, property);
          }

          return objectTest && propertyTest;
      }

      function isNumberOrStringArray(input) {
          var arrayTest = isArray(input),
              dataTypeTest = false;
          if (arrayTest) {
              dataTypeTest =
                  input.filter(function (item) {
                      return !isNumber(item) && isString(input);
                  }).length === 0;
          }
          return arrayTest && dataTypeTest;
      }

      function isCalendarSpec(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input),
              propertyTest = false,
              properties = [
                  'sameDay',
                  'nextDay',
                  'lastDay',
                  'nextWeek',
                  'lastWeek',
                  'sameElse',
              ],
              i,
              property;

          for (i = 0; i < properties.length; i += 1) {
              property = properties[i];
              propertyTest = propertyTest || hasOwnProp(input, property);
          }

          return objectTest && propertyTest;
      }

      function getCalendarFormat(myMoment, now) {
          var diff = myMoment.diff(now, 'days', true);
          return diff < -6
              ? 'sameElse'
              : diff < -1
              ? 'lastWeek'
              : diff < 0
              ? 'lastDay'
              : diff < 1
              ? 'sameDay'
              : diff < 2
              ? 'nextDay'
              : diff < 7
              ? 'nextWeek'
              : 'sameElse';
      }

      function calendar$1(time, formats) {
          // Support for single parameter, formats only overload to the calendar function
          if (arguments.length === 1) {
              if (!arguments[0]) {
                  time = undefined;
                  formats = undefined;
              } else if (isMomentInput(arguments[0])) {
                  time = arguments[0];
                  formats = undefined;
              } else if (isCalendarSpec(arguments[0])) {
                  formats = arguments[0];
                  time = undefined;
              }
          }
          // We want to compare the start of today, vs this.
          // Getting start-of-today depends on whether we're local/utc/offset or not.
          var now = time || createLocal(),
              sod = cloneWithOffset(now, this).startOf('day'),
              format = hooks.calendarFormat(this, sod) || 'sameElse',
              output =
                  formats &&
                  (isFunction(formats[format])
                      ? formats[format].call(this, now)
                      : formats[format]);

          return this.format(
              output || this.localeData().calendar(format, this, createLocal(now))
          );
      }

      function clone() {
          return new Moment(this);
      }

      function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
              return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
              return this.valueOf() > localInput.valueOf();
          } else {
              return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
      }

      function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
              return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
              return this.valueOf() < localInput.valueOf();
          } else {
              return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
      }

      function isBetween(from, to, units, inclusivity) {
          var localFrom = isMoment(from) ? from : createLocal(from),
              localTo = isMoment(to) ? to : createLocal(to);
          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
              return false;
          }
          inclusivity = inclusivity || '()';
          return (
              (inclusivity[0] === '('
                  ? this.isAfter(localFrom, units)
                  : !this.isBefore(localFrom, units)) &&
              (inclusivity[1] === ')'
                  ? this.isBefore(localTo, units)
                  : !this.isAfter(localTo, units))
          );
      }

      function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input),
              inputMs;
          if (!(this.isValid() && localInput.isValid())) {
              return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
              return this.valueOf() === localInput.valueOf();
          } else {
              inputMs = localInput.valueOf();
              return (
                  this.clone().startOf(units).valueOf() <= inputMs &&
                  inputMs <= this.clone().endOf(units).valueOf()
              );
          }
      }

      function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
      }

      function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
      }

      function diff(input, units, asFloat) {
          var that, zoneDelta, output;

          if (!this.isValid()) {
              return NaN;
          }

          that = cloneWithOffset(input, this);

          if (!that.isValid()) {
              return NaN;
          }

          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

          units = normalizeUnits(units);

          switch (units) {
              case 'year':
                  output = monthDiff(this, that) / 12;
                  break;
              case 'month':
                  output = monthDiff(this, that);
                  break;
              case 'quarter':
                  output = monthDiff(this, that) / 3;
                  break;
              case 'second':
                  output = (this - that) / 1e3;
                  break; // 1000
              case 'minute':
                  output = (this - that) / 6e4;
                  break; // 1000 * 60
              case 'hour':
                  output = (this - that) / 36e5;
                  break; // 1000 * 60 * 60
              case 'day':
                  output = (this - that - zoneDelta) / 864e5;
                  break; // 1000 * 60 * 60 * 24, negate dst
              case 'week':
                  output = (this - that - zoneDelta) / 6048e5;
                  break; // 1000 * 60 * 60 * 24 * 7, negate dst
              default:
                  output = this - that;
          }

          return asFloat ? output : absFloor(output);
      }

      function monthDiff(a, b) {
          if (a.date() < b.date()) {
              // end-of-month calculations work correct when the start month has more
              // days than the end month.
              return -monthDiff(b, a);
          }
          // difference in months
          var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
              // b is in (anchor - 1 month, anchor + 1 month)
              anchor = a.clone().add(wholeMonthDiff, 'months'),
              anchor2,
              adjust;

          if (b - anchor < 0) {
              anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
              // linear across the month
              adjust = (b - anchor) / (anchor - anchor2);
          } else {
              anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
              // linear across the month
              adjust = (b - anchor) / (anchor2 - anchor);
          }

          //check for negative zero, return zero if negative zero
          return -(wholeMonthDiff + adjust) || 0;
      }

      hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
      hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

      function toString() {
          return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      }

      function toISOString(keepOffset) {
          if (!this.isValid()) {
              return null;
          }
          var utc = keepOffset !== true,
              m = utc ? this.clone().utc() : this;
          if (m.year() < 0 || m.year() > 9999) {
              return formatMoment(
                  m,
                  utc
                      ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                      : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
              );
          }
          if (isFunction(Date.prototype.toISOString)) {
              // native implementation is ~50x faster, use it when we can
              if (utc) {
                  return this.toDate().toISOString();
              } else {
                  return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                      .toISOString()
                      .replace('Z', formatMoment(m, 'Z'));
              }
          }
          return formatMoment(
              m,
              utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
          );
      }

      /**
       * Return a human readable representation of a moment that can
       * also be evaluated to get a new moment which is the same
       *
       * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
       */
      function inspect() {
          if (!this.isValid()) {
              return 'moment.invalid(/* ' + this._i + ' */)';
          }
          var func = 'moment',
              zone = '',
              prefix,
              year,
              datetime,
              suffix;
          if (!this.isLocal()) {
              func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
              zone = 'Z';
          }
          prefix = '[' + func + '("]';
          year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
          datetime = '-MM-DD[T]HH:mm:ss.SSS';
          suffix = zone + '[")]';

          return this.format(prefix + year + datetime + suffix);
      }

      function format(inputString) {
          if (!inputString) {
              inputString = this.isUtc()
                  ? hooks.defaultFormatUtc
                  : hooks.defaultFormat;
          }
          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
      }

      function from(time, withoutSuffix) {
          if (
              this.isValid() &&
              ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
          ) {
              return createDuration({ to: this, from: time })
                  .locale(this.locale())
                  .humanize(!withoutSuffix);
          } else {
              return this.localeData().invalidDate();
          }
      }

      function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
      }

      function to(time, withoutSuffix) {
          if (
              this.isValid() &&
              ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
          ) {
              return createDuration({ from: this, to: time })
                  .locale(this.locale())
                  .humanize(!withoutSuffix);
          } else {
              return this.localeData().invalidDate();
          }
      }

      function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
      }

      // If passed a locale key, it will set the locale for this
      // instance.  Otherwise, it will return the locale configuration
      // variables for this instance.
      function locale(key) {
          var newLocaleData;

          if (key === undefined) {
              return this._locale._abbr;
          } else {
              newLocaleData = getLocale(key);
              if (newLocaleData != null) {
                  this._locale = newLocaleData;
              }
              return this;
          }
      }

      var lang = deprecate(
          'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
          function (key) {
              if (key === undefined) {
                  return this.localeData();
              } else {
                  return this.locale(key);
              }
          }
      );

      function localeData() {
          return this._locale;
      }

      var MS_PER_SECOND = 1000,
          MS_PER_MINUTE = 60 * MS_PER_SECOND,
          MS_PER_HOUR = 60 * MS_PER_MINUTE,
          MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

      // actual modulo - handles negative numbers (for dates before 1970):
      function mod$1(dividend, divisor) {
          return ((dividend % divisor) + divisor) % divisor;
      }

      function localStartOfDate(y, m, d) {
          // the date constructor remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              // preserve leap years using a full 400 year cycle, then reset
              return new Date(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
              return new Date(y, m, d).valueOf();
          }
      }

      function utcStartOfDate(y, m, d) {
          // Date.UTC remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
              // preserve leap years using a full 400 year cycle, then reset
              return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
              return Date.UTC(y, m, d);
          }
      }

      function startOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === undefined || units === 'millisecond' || !this.isValid()) {
              return this;
          }

          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
              case 'year':
                  time = startOfDate(this.year(), 0, 1);
                  break;
              case 'quarter':
                  time = startOfDate(
                      this.year(),
                      this.month() - (this.month() % 3),
                      1
                  );
                  break;
              case 'month':
                  time = startOfDate(this.year(), this.month(), 1);
                  break;
              case 'week':
                  time = startOfDate(
                      this.year(),
                      this.month(),
                      this.date() - this.weekday()
                  );
                  break;
              case 'isoWeek':
                  time = startOfDate(
                      this.year(),
                      this.month(),
                      this.date() - (this.isoWeekday() - 1)
                  );
                  break;
              case 'day':
              case 'date':
                  time = startOfDate(this.year(), this.month(), this.date());
                  break;
              case 'hour':
                  time = this._d.valueOf();
                  time -= mod$1(
                      time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                      MS_PER_HOUR
                  );
                  break;
              case 'minute':
                  time = this._d.valueOf();
                  time -= mod$1(time, MS_PER_MINUTE);
                  break;
              case 'second':
                  time = this._d.valueOf();
                  time -= mod$1(time, MS_PER_SECOND);
                  break;
          }

          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
      }

      function endOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === undefined || units === 'millisecond' || !this.isValid()) {
              return this;
          }

          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
              case 'year':
                  time = startOfDate(this.year() + 1, 0, 1) - 1;
                  break;
              case 'quarter':
                  time =
                      startOfDate(
                          this.year(),
                          this.month() - (this.month() % 3) + 3,
                          1
                      ) - 1;
                  break;
              case 'month':
                  time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                  break;
              case 'week':
                  time =
                      startOfDate(
                          this.year(),
                          this.month(),
                          this.date() - this.weekday() + 7
                      ) - 1;
                  break;
              case 'isoWeek':
                  time =
                      startOfDate(
                          this.year(),
                          this.month(),
                          this.date() - (this.isoWeekday() - 1) + 7
                      ) - 1;
                  break;
              case 'day':
              case 'date':
                  time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                  break;
              case 'hour':
                  time = this._d.valueOf();
                  time +=
                      MS_PER_HOUR -
                      mod$1(
                          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                          MS_PER_HOUR
                      ) -
                      1;
                  break;
              case 'minute':
                  time = this._d.valueOf();
                  time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                  break;
              case 'second':
                  time = this._d.valueOf();
                  time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                  break;
          }

          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
      }

      function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 60000;
      }

      function unix() {
          return Math.floor(this.valueOf() / 1000);
      }

      function toDate() {
          return new Date(this.valueOf());
      }

      function toArray() {
          var m = this;
          return [
              m.year(),
              m.month(),
              m.date(),
              m.hour(),
              m.minute(),
              m.second(),
              m.millisecond(),
          ];
      }

      function toObject() {
          var m = this;
          return {
              years: m.year(),
              months: m.month(),
              date: m.date(),
              hours: m.hours(),
              minutes: m.minutes(),
              seconds: m.seconds(),
              milliseconds: m.milliseconds(),
          };
      }

      function toJSON() {
          // new Date(NaN).toJSON() === null
          return this.isValid() ? this.toISOString() : null;
      }

      function isValid$2() {
          return isValid(this);
      }

      function parsingFlags() {
          return extend({}, getParsingFlags(this));
      }

      function invalidAt() {
          return getParsingFlags(this).overflow;
      }

      function creationData() {
          return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
          };
      }

      addFormatToken('N', 0, 0, 'eraAbbr');
      addFormatToken('NN', 0, 0, 'eraAbbr');
      addFormatToken('NNN', 0, 0, 'eraAbbr');
      addFormatToken('NNNN', 0, 0, 'eraName');
      addFormatToken('NNNNN', 0, 0, 'eraNarrow');

      addFormatToken('y', ['y', 1], 'yo', 'eraYear');
      addFormatToken('y', ['yy', 2], 0, 'eraYear');
      addFormatToken('y', ['yyy', 3], 0, 'eraYear');
      addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

      addRegexToken('N', matchEraAbbr);
      addRegexToken('NN', matchEraAbbr);
      addRegexToken('NNN', matchEraAbbr);
      addRegexToken('NNNN', matchEraName);
      addRegexToken('NNNNN', matchEraNarrow);

      addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
          input,
          array,
          config,
          token
      ) {
          var era = config._locale.erasParse(input, token, config._strict);
          if (era) {
              getParsingFlags(config).era = era;
          } else {
              getParsingFlags(config).invalidEra = input;
          }
      });

      addRegexToken('y', matchUnsigned);
      addRegexToken('yy', matchUnsigned);
      addRegexToken('yyy', matchUnsigned);
      addRegexToken('yyyy', matchUnsigned);
      addRegexToken('yo', matchEraYearOrdinal);

      addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
      addParseToken(['yo'], function (input, array, config, token) {
          var match;
          if (config._locale._eraYearOrdinalRegex) {
              match = input.match(config._locale._eraYearOrdinalRegex);
          }

          if (config._locale.eraYearOrdinalParse) {
              array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
          } else {
              array[YEAR] = parseInt(input, 10);
          }
      });

      function localeEras(m, format) {
          var i,
              l,
              date,
              eras = this._eras || getLocale('en')._eras;
          for (i = 0, l = eras.length; i < l; ++i) {
              switch (typeof eras[i].since) {
                  case 'string':
                      // truncate time
                      date = hooks(eras[i].since).startOf('day');
                      eras[i].since = date.valueOf();
                      break;
              }

              switch (typeof eras[i].until) {
                  case 'undefined':
                      eras[i].until = +Infinity;
                      break;
                  case 'string':
                      // truncate time
                      date = hooks(eras[i].until).startOf('day').valueOf();
                      eras[i].until = date.valueOf();
                      break;
              }
          }
          return eras;
      }

      function localeErasParse(eraName, format, strict) {
          var i,
              l,
              eras = this.eras(),
              name,
              abbr,
              narrow;
          eraName = eraName.toUpperCase();

          for (i = 0, l = eras.length; i < l; ++i) {
              name = eras[i].name.toUpperCase();
              abbr = eras[i].abbr.toUpperCase();
              narrow = eras[i].narrow.toUpperCase();

              if (strict) {
                  switch (format) {
                      case 'N':
                      case 'NN':
                      case 'NNN':
                          if (abbr === eraName) {
                              return eras[i];
                          }
                          break;

                      case 'NNNN':
                          if (name === eraName) {
                              return eras[i];
                          }
                          break;

                      case 'NNNNN':
                          if (narrow === eraName) {
                              return eras[i];
                          }
                          break;
                  }
              } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                  return eras[i];
              }
          }
      }

      function localeErasConvertYear(era, year) {
          var dir = era.since <= era.until ? +1 : -1;
          if (year === undefined) {
              return hooks(era.since).year();
          } else {
              return hooks(era.since).year() + (year - era.offset) * dir;
          }
      }

      function getEraName() {
          var i,
              l,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].name;
              }
              if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].name;
              }
          }

          return '';
      }

      function getEraNarrow() {
          var i,
              l,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].narrow;
              }
              if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].narrow;
              }
          }

          return '';
      }

      function getEraAbbr() {
          var i,
              l,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].abbr;
              }
              if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].abbr;
              }
          }

          return '';
      }

      function getEraYear() {
          var i,
              l,
              dir,
              val,
              eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
              dir = eras[i].since <= eras[i].until ? +1 : -1;

              // truncate time
              val = this.clone().startOf('day').valueOf();

              if (
                  (eras[i].since <= val && val <= eras[i].until) ||
                  (eras[i].until <= val && val <= eras[i].since)
              ) {
                  return (
                      (this.year() - hooks(eras[i].since).year()) * dir +
                      eras[i].offset
                  );
              }
          }

          return this.year();
      }

      function erasNameRegex(isStrict) {
          if (!hasOwnProp(this, '_erasNameRegex')) {
              computeErasParse.call(this);
          }
          return isStrict ? this._erasNameRegex : this._erasRegex;
      }

      function erasAbbrRegex(isStrict) {
          if (!hasOwnProp(this, '_erasAbbrRegex')) {
              computeErasParse.call(this);
          }
          return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }

      function erasNarrowRegex(isStrict) {
          if (!hasOwnProp(this, '_erasNarrowRegex')) {
              computeErasParse.call(this);
          }
          return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }

      function matchEraAbbr(isStrict, locale) {
          return locale.erasAbbrRegex(isStrict);
      }

      function matchEraName(isStrict, locale) {
          return locale.erasNameRegex(isStrict);
      }

      function matchEraNarrow(isStrict, locale) {
          return locale.erasNarrowRegex(isStrict);
      }

      function matchEraYearOrdinal(isStrict, locale) {
          return locale._eraYearOrdinalRegex || matchUnsigned;
      }

      function computeErasParse() {
          var abbrPieces = [],
              namePieces = [],
              narrowPieces = [],
              mixedPieces = [],
              i,
              l,
              eras = this.eras();

          for (i = 0, l = eras.length; i < l; ++i) {
              namePieces.push(regexEscape(eras[i].name));
              abbrPieces.push(regexEscape(eras[i].abbr));
              narrowPieces.push(regexEscape(eras[i].narrow));

              mixedPieces.push(regexEscape(eras[i].name));
              mixedPieces.push(regexEscape(eras[i].abbr));
              mixedPieces.push(regexEscape(eras[i].narrow));
          }

          this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
          this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
          this._erasNarrowRegex = new RegExp(
              '^(' + narrowPieces.join('|') + ')',
              'i'
          );
      }

      // FORMATTING

      addFormatToken(0, ['gg', 2], 0, function () {
          return this.weekYear() % 100;
      });

      addFormatToken(0, ['GG', 2], 0, function () {
          return this.isoWeekYear() % 100;
      });

      function addWeekYearFormatToken(token, getter) {
          addFormatToken(0, [token, token.length], 0, getter);
      }

      addWeekYearFormatToken('gggg', 'weekYear');
      addWeekYearFormatToken('ggggg', 'weekYear');
      addWeekYearFormatToken('GGGG', 'isoWeekYear');
      addWeekYearFormatToken('GGGGG', 'isoWeekYear');

      // ALIASES

      addUnitAlias('weekYear', 'gg');
      addUnitAlias('isoWeekYear', 'GG');

      // PRIORITY

      addUnitPriority('weekYear', 1);
      addUnitPriority('isoWeekYear', 1);

      // PARSING

      addRegexToken('G', matchSigned);
      addRegexToken('g', matchSigned);
      addRegexToken('GG', match1to2, match2);
      addRegexToken('gg', match1to2, match2);
      addRegexToken('GGGG', match1to4, match4);
      addRegexToken('gggg', match1to4, match4);
      addRegexToken('GGGGG', match1to6, match6);
      addRegexToken('ggggg', match1to6, match6);

      addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
          input,
          week,
          config,
          token
      ) {
          week[token.substr(0, 2)] = toInt(input);
      });

      addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
          week[token] = hooks.parseTwoDigitYear(input);
      });

      // MOMENTS

      function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(
              this,
              input,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
          );
      }

      function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(
              this,
              input,
              this.isoWeek(),
              this.isoWeekday(),
              1,
              4
          );
      }

      function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
      }

      function getISOWeeksInISOWeekYear() {
          return weeksInYear(this.isoWeekYear(), 1, 4);
      }

      function getWeeksInYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }

      function getWeeksInWeekYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }

      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;
          if (input == null) {
              return weekOfYear(this, dow, doy).year;
          } else {
              weeksTarget = weeksInYear(input, dow, doy);
              if (week > weeksTarget) {
                  week = weeksTarget;
              }
              return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
      }

      function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
              date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
      }

      // FORMATTING

      addFormatToken('Q', 0, 'Qo', 'quarter');

      // ALIASES

      addUnitAlias('quarter', 'Q');

      // PRIORITY

      addUnitPriority('quarter', 7);

      // PARSING

      addRegexToken('Q', match1);
      addParseToken('Q', function (input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
      });

      // MOMENTS

      function getSetQuarter(input) {
          return input == null
              ? Math.ceil((this.month() + 1) / 3)
              : this.month((input - 1) * 3 + (this.month() % 3));
      }

      // FORMATTING

      addFormatToken('D', ['DD', 2], 'Do', 'date');

      // ALIASES

      addUnitAlias('date', 'D');

      // PRIORITY
      addUnitPriority('date', 9);

      // PARSING

      addRegexToken('D', match1to2);
      addRegexToken('DD', match1to2, match2);
      addRegexToken('Do', function (isStrict, locale) {
          // TODO: Remove "ordinalParse" fallback in next major release.
          return isStrict
              ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
              : locale._dayOfMonthOrdinalParseLenient;
      });

      addParseToken(['D', 'DD'], DATE);
      addParseToken('Do', function (input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
      });

      // MOMENTS

      var getSetDayOfMonth = makeGetSet('Date', true);

      // FORMATTING

      addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

      // ALIASES

      addUnitAlias('dayOfYear', 'DDD');

      // PRIORITY
      addUnitPriority('dayOfYear', 4);

      // PARSING

      addRegexToken('DDD', match1to3);
      addRegexToken('DDDD', match3);
      addParseToken(['DDD', 'DDDD'], function (input, array, config) {
          config._dayOfYear = toInt(input);
      });

      // HELPERS

      // MOMENTS

      function getSetDayOfYear(input) {
          var dayOfYear =
              Math.round(
                  (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
              ) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
      }

      // FORMATTING

      addFormatToken('m', ['mm', 2], 0, 'minute');

      // ALIASES

      addUnitAlias('minute', 'm');

      // PRIORITY

      addUnitPriority('minute', 14);

      // PARSING

      addRegexToken('m', match1to2);
      addRegexToken('mm', match1to2, match2);
      addParseToken(['m', 'mm'], MINUTE);

      // MOMENTS

      var getSetMinute = makeGetSet('Minutes', false);

      // FORMATTING

      addFormatToken('s', ['ss', 2], 0, 'second');

      // ALIASES

      addUnitAlias('second', 's');

      // PRIORITY

      addUnitPriority('second', 15);

      // PARSING

      addRegexToken('s', match1to2);
      addRegexToken('ss', match1to2, match2);
      addParseToken(['s', 'ss'], SECOND);

      // MOMENTS

      var getSetSecond = makeGetSet('Seconds', false);

      // FORMATTING

      addFormatToken('S', 0, 0, function () {
          return ~~(this.millisecond() / 100);
      });

      addFormatToken(0, ['SS', 2], 0, function () {
          return ~~(this.millisecond() / 10);
      });

      addFormatToken(0, ['SSS', 3], 0, 'millisecond');
      addFormatToken(0, ['SSSS', 4], 0, function () {
          return this.millisecond() * 10;
      });
      addFormatToken(0, ['SSSSS', 5], 0, function () {
          return this.millisecond() * 100;
      });
      addFormatToken(0, ['SSSSSS', 6], 0, function () {
          return this.millisecond() * 1000;
      });
      addFormatToken(0, ['SSSSSSS', 7], 0, function () {
          return this.millisecond() * 10000;
      });
      addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
          return this.millisecond() * 100000;
      });
      addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
          return this.millisecond() * 1000000;
      });

      // ALIASES

      addUnitAlias('millisecond', 'ms');

      // PRIORITY

      addUnitPriority('millisecond', 16);

      // PARSING

      addRegexToken('S', match1to3, match1);
      addRegexToken('SS', match1to3, match2);
      addRegexToken('SSS', match1to3, match3);

      var token, getSetMillisecond;
      for (token = 'SSSS'; token.length <= 9; token += 'S') {
          addRegexToken(token, matchUnsigned);
      }

      function parseMs(input, array) {
          array[MILLISECOND] = toInt(('0.' + input) * 1000);
      }

      for (token = 'S'; token.length <= 9; token += 'S') {
          addParseToken(token, parseMs);
      }

      getSetMillisecond = makeGetSet('Milliseconds', false);

      // FORMATTING

      addFormatToken('z', 0, 0, 'zoneAbbr');
      addFormatToken('zz', 0, 0, 'zoneName');

      // MOMENTS

      function getZoneAbbr() {
          return this._isUTC ? 'UTC' : '';
      }

      function getZoneName() {
          return this._isUTC ? 'Coordinated Universal Time' : '';
      }

      var proto = Moment.prototype;

      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      if (typeof Symbol !== 'undefined' && Symbol.for != null) {
          proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
              return 'Moment<' + this.format() + '>';
          };
      }
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate(
          'dates accessor is deprecated. Use date instead.',
          getSetDayOfMonth
      );
      proto.months = deprecate(
          'months accessor is deprecated. Use month instead',
          getSetMonth
      );
      proto.years = deprecate(
          'years accessor is deprecated. Use year instead',
          getSetYear
      );
      proto.zone = deprecate(
          'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
          getSetZone
      );
      proto.isDSTShifted = deprecate(
          'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
          isDaylightSavingTimeShifted
      );

      function createUnix(input) {
          return createLocal(input * 1000);
      }

      function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
      }

      function preParsePostFormat(string) {
          return string;
      }

      var proto$1 = Locale.prototype;

      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;

      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;

      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;

      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;

      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;

      function get$1(format, index, field, setter) {
          var locale = getLocale(),
              utc = createUTC().set(setter, index);
          return locale[field](utc, format);
      }

      function listMonthsImpl(format, index, field) {
          if (isNumber(format)) {
              index = format;
              format = undefined;
          }

          format = format || '';

          if (index != null) {
              return get$1(format, index, field, 'month');
          }

          var i,
              out = [];
          for (i = 0; i < 12; i++) {
              out[i] = get$1(format, i, field, 'month');
          }
          return out;
      }

      // ()
      // (5)
      // (fmt, 5)
      // (fmt)
      // (true)
      // (true, 5)
      // (true, fmt, 5)
      // (true, fmt)
      function listWeekdaysImpl(localeSorted, format, index, field) {
          if (typeof localeSorted === 'boolean') {
              if (isNumber(format)) {
                  index = format;
                  format = undefined;
              }

              format = format || '';
          } else {
              format = localeSorted;
              index = format;
              localeSorted = false;

              if (isNumber(format)) {
                  index = format;
                  format = undefined;
              }

              format = format || '';
          }

          var locale = getLocale(),
              shift = localeSorted ? locale._week.dow : 0,
              i,
              out = [];

          if (index != null) {
              return get$1(format, (index + shift) % 7, field, 'day');
          }

          for (i = 0; i < 7; i++) {
              out[i] = get$1(format, (i + shift) % 7, field, 'day');
          }
          return out;
      }

      function listMonths(format, index) {
          return listMonthsImpl(format, index, 'months');
      }

      function listMonthsShort(format, index) {
          return listMonthsImpl(format, index, 'monthsShort');
      }

      function listWeekdays(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
      }

      function listWeekdaysShort(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
      }

      function listWeekdaysMin(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
      }

      getSetGlobalLocale('en', {
          eras: [
              {
                  since: '0001-01-01',
                  until: +Infinity,
                  offset: 1,
                  name: 'Anno Domini',
                  narrow: 'AD',
                  abbr: 'AD',
              },
              {
                  since: '0000-12-31',
                  until: -Infinity,
                  offset: 1,
                  name: 'Before Christ',
                  narrow: 'BC',
                  abbr: 'BC',
              },
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (number) {
              var b = number % 10,
                  output =
                      toInt((number % 100) / 10) === 1
                          ? 'th'
                          : b === 1
                          ? 'st'
                          : b === 2
                          ? 'nd'
                          : b === 3
                          ? 'rd'
                          : 'th';
              return number + output;
          },
      });

      // Side effect imports

      hooks.lang = deprecate(
          'moment.lang is deprecated. Use moment.locale instead.',
          getSetGlobalLocale
      );
      hooks.langData = deprecate(
          'moment.langData is deprecated. Use moment.localeData instead.',
          getLocale
      );

      var mathAbs = Math.abs;

      function abs() {
          var data = this._data;

          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);

          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);

          return this;
      }

      function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);

          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;

          return duration._bubble();
      }

      // supports only 2.0-style add(1, 's') or add(duration)
      function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
      }

      // supports only 2.0-style subtract(1, 's') or subtract(duration)
      function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
      }

      function absCeil(number) {
          if (number < 0) {
              return Math.floor(number);
          } else {
              return Math.ceil(number);
          }
      }

      function bubble() {
          var milliseconds = this._milliseconds,
              days = this._days,
              months = this._months,
              data = this._data,
              seconds,
              minutes,
              hours,
              years,
              monthsFromDays;

          // if we have a mix of positive and negative values, bubble down first
          // check: https://github.com/moment/moment/issues/2166
          if (
              !(
                  (milliseconds >= 0 && days >= 0 && months >= 0) ||
                  (milliseconds <= 0 && days <= 0 && months <= 0)
              )
          ) {
              milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
              days = 0;
              months = 0;
          }

          // The following code bubbles up values, see the tests for
          // examples of what that means.
          data.milliseconds = milliseconds % 1000;

          seconds = absFloor(milliseconds / 1000);
          data.seconds = seconds % 60;

          minutes = absFloor(seconds / 60);
          data.minutes = minutes % 60;

          hours = absFloor(minutes / 60);
          data.hours = hours % 24;

          days += absFloor(hours / 24);

          // convert days to months
          monthsFromDays = absFloor(daysToMonths(days));
          months += monthsFromDays;
          days -= absCeil(monthsToDays(monthsFromDays));

          // 12 months -> 1 year
          years = absFloor(months / 12);
          months %= 12;

          data.days = days;
          data.months = months;
          data.years = years;

          return this;
      }

      function daysToMonths(days) {
          // 400 years have 146097 days (taking into account leap year rules)
          // 400 years have 12 months === 4800
          return (days * 4800) / 146097;
      }

      function monthsToDays(months) {
          // the reverse of daysToMonths
          return (months * 146097) / 4800;
      }

      function as(units) {
          if (!this.isValid()) {
              return NaN;
          }
          var days,
              months,
              milliseconds = this._milliseconds;

          units = normalizeUnits(units);

          if (units === 'month' || units === 'quarter' || units === 'year') {
              days = this._days + milliseconds / 864e5;
              months = this._months + daysToMonths(days);
              switch (units) {
                  case 'month':
                      return months;
                  case 'quarter':
                      return months / 3;
                  case 'year':
                      return months / 12;
              }
          } else {
              // handle milliseconds separately because of floating point math errors (issue #1867)
              days = this._days + Math.round(monthsToDays(this._months));
              switch (units) {
                  case 'week':
                      return days / 7 + milliseconds / 6048e5;
                  case 'day':
                      return days + milliseconds / 864e5;
                  case 'hour':
                      return days * 24 + milliseconds / 36e5;
                  case 'minute':
                      return days * 1440 + milliseconds / 6e4;
                  case 'second':
                      return days * 86400 + milliseconds / 1000;
                  // Math.floor prevents floating point math errors here
                  case 'millisecond':
                      return Math.floor(days * 864e5) + milliseconds;
                  default:
                      throw new Error('Unknown unit ' + units);
              }
          }
      }

      // TODO: Use this.as('ms')?
      function valueOf$1() {
          if (!this.isValid()) {
              return NaN;
          }
          return (
              this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6
          );
      }

      function makeAs(alias) {
          return function () {
              return this.as(alias);
          };
      }

      var asMilliseconds = makeAs('ms'),
          asSeconds = makeAs('s'),
          asMinutes = makeAs('m'),
          asHours = makeAs('h'),
          asDays = makeAs('d'),
          asWeeks = makeAs('w'),
          asMonths = makeAs('M'),
          asQuarters = makeAs('Q'),
          asYears = makeAs('y');

      function clone$1() {
          return createDuration(this);
      }

      function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + 's']() : NaN;
      }

      function makeGetter(name) {
          return function () {
              return this.isValid() ? this._data[name] : NaN;
          };
      }

      var milliseconds = makeGetter('milliseconds'),
          seconds = makeGetter('seconds'),
          minutes = makeGetter('minutes'),
          hours = makeGetter('hours'),
          days = makeGetter('days'),
          months = makeGetter('months'),
          years = makeGetter('years');

      function weeks() {
          return absFloor(this.days() / 7);
      }

      var round = Math.round,
          thresholds = {
              ss: 44, // a few seconds to seconds
              s: 45, // seconds to minute
              m: 45, // minutes to hour
              h: 22, // hours to day
              d: 26, // days to month/week
              w: null, // weeks to month
              M: 11, // months to year
          };

      // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
          return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }

      function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
          var duration = createDuration(posNegDuration).abs(),
              seconds = round(duration.as('s')),
              minutes = round(duration.as('m')),
              hours = round(duration.as('h')),
              days = round(duration.as('d')),
              months = round(duration.as('M')),
              weeks = round(duration.as('w')),
              years = round(duration.as('y')),
              a =
                  (seconds <= thresholds.ss && ['s', seconds]) ||
                  (seconds < thresholds.s && ['ss', seconds]) ||
                  (minutes <= 1 && ['m']) ||
                  (minutes < thresholds.m && ['mm', minutes]) ||
                  (hours <= 1 && ['h']) ||
                  (hours < thresholds.h && ['hh', hours]) ||
                  (days <= 1 && ['d']) ||
                  (days < thresholds.d && ['dd', days]);

          if (thresholds.w != null) {
              a =
                  a ||
                  (weeks <= 1 && ['w']) ||
                  (weeks < thresholds.w && ['ww', weeks]);
          }
          a = a ||
              (months <= 1 && ['M']) ||
              (months < thresholds.M && ['MM', months]) ||
              (years <= 1 && ['y']) || ['yy', years];

          a[2] = withoutSuffix;
          a[3] = +posNegDuration > 0;
          a[4] = locale;
          return substituteTimeAgo.apply(null, a);
      }

      // This function allows you to set the rounding function for relative time strings
      function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === undefined) {
              return round;
          }
          if (typeof roundingFunction === 'function') {
              round = roundingFunction;
              return true;
          }
          return false;
      }

      // This function allows you to set a threshold for relative time strings
      function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === undefined) {
              return false;
          }
          if (limit === undefined) {
              return thresholds[threshold];
          }
          thresholds[threshold] = limit;
          if (threshold === 's') {
              thresholds.ss = limit - 1;
          }
          return true;
      }

      function humanize(argWithSuffix, argThresholds) {
          if (!this.isValid()) {
              return this.localeData().invalidDate();
          }

          var withSuffix = false,
              th = thresholds,
              locale,
              output;

          if (typeof argWithSuffix === 'object') {
              argThresholds = argWithSuffix;
              argWithSuffix = false;
          }
          if (typeof argWithSuffix === 'boolean') {
              withSuffix = argWithSuffix;
          }
          if (typeof argThresholds === 'object') {
              th = Object.assign({}, thresholds, argThresholds);
              if (argThresholds.s != null && argThresholds.ss == null) {
                  th.ss = argThresholds.s - 1;
              }
          }

          locale = this.localeData();
          output = relativeTime$1(this, !withSuffix, th, locale);

          if (withSuffix) {
              output = locale.pastFuture(+this, output);
          }

          return locale.postformat(output);
      }

      var abs$1 = Math.abs;

      function sign(x) {
          return (x > 0) - (x < 0) || +x;
      }

      function toISOString$1() {
          // for ISO strings we do not use the normal bubbling rules:
          //  * milliseconds bubble up until they become hours
          //  * days do not bubble at all
          //  * months bubble up until they become years
          // This is because there is no context-free conversion between hours and days
          // (think of clock changes)
          // and also not between days and months (28-31 days per month)
          if (!this.isValid()) {
              return this.localeData().invalidDate();
          }

          var seconds = abs$1(this._milliseconds) / 1000,
              days = abs$1(this._days),
              months = abs$1(this._months),
              minutes,
              hours,
              years,
              s,
              total = this.asSeconds(),
              totalSign,
              ymSign,
              daysSign,
              hmsSign;

          if (!total) {
              // this is the same as C#'s (Noda) and python (isodate)...
              // but not other JS (goog.date)
              return 'P0D';
          }

          // 3600 seconds -> 60 minutes -> 1 hour
          minutes = absFloor(seconds / 60);
          hours = absFloor(minutes / 60);
          seconds %= 60;
          minutes %= 60;

          // 12 months -> 1 year
          years = absFloor(months / 12);
          months %= 12;

          // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
          s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

          totalSign = total < 0 ? '-' : '';
          ymSign = sign(this._months) !== sign(total) ? '-' : '';
          daysSign = sign(this._days) !== sign(total) ? '-' : '';
          hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

          return (
              totalSign +
              'P' +
              (years ? ymSign + years + 'Y' : '') +
              (months ? ymSign + months + 'M' : '') +
              (days ? daysSign + days + 'D' : '') +
              (hours || minutes || seconds ? 'T' : '') +
              (hours ? hmsSign + hours + 'H' : '') +
              (minutes ? hmsSign + minutes + 'M' : '') +
              (seconds ? hmsSign + s + 'S' : '')
          );
      }

      var proto$2 = Duration.prototype;

      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;

      proto$2.toIsoString = deprecate(
          'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
          toISOString$1
      );
      proto$2.lang = lang;

      // FORMATTING

      addFormatToken('X', 0, 0, 'unix');
      addFormatToken('x', 0, 0, 'valueOf');

      // PARSING

      addRegexToken('x', matchSigned);
      addRegexToken('X', matchTimestamp);
      addParseToken('X', function (input, array, config) {
          config._d = new Date(parseFloat(input) * 1000);
      });
      addParseToken('x', function (input, array, config) {
          config._d = new Date(toInt(input));
      });

      //! moment.js

      hooks.version = '2.29.1';

      setHookCallback(createLocal);

      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto;

      // currently HTML5 input type only supports 24-hour formats
      hooks.HTML5_FMT = {
          DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
          DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
          DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
          DATE: 'YYYY-MM-DD', // <input type="date" />
          TIME: 'HH:mm', // <input type="time" />
          TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
          TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
          WEEK: 'GGGG-[W]WW', // <input type="week" />
          MONTH: 'YYYY-MM', // <input type="month" />
      };

      return hooks;

  })));
  });

  function CommentBox(props) {
    var _useState = l([]),
        _useState2 = _slicedToArray(_useState, 2);
        _useState2[0];
        _useState2[1];

    var _useState3 = l(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isReplied = _useState4[0],
        setIsReplied = _useState4[1];

    var apiKey = props.apiKey;

    var _useState5 = l(props.commentsReplies),
        _useState6 = _slicedToArray(_useState5, 2),
        allComments = _useState6[0],
        setAllComments = _useState6[1];

    F$1(DataContext);
    var commentsReplies = props.commentsReplies;
    var comment = props.comment;
    var date = moment().subtract(comment[3]);

    if (commentsReplies.length > 0) {
      setIsReplied(true);
    }

    var _useState7 = l(false),
        _useState8 = _slicedToArray(_useState7, 2),
        isActive = _useState8[0],
        setIsActive = _useState8[1];

    var _useState9 = l(false),
        _useState10 = _slicedToArray(_useState9, 2),
        isReplies = _useState10[0],
        setIsReplies = _useState10[1];

    var authorStyle = {
      padding: "10px",
      display: "flex",
      gap: "20px"
    };
    var boxStyle = {
      padding: "10px",
      margin: "10px",
      backgroundColor: "#FAFAFA",
      gap: "10px",
      borderRadius: "5px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    };
    var commentStyle = {
      backgroundColor: "#FFFFFF",
      padding: "10px",
      fontFamily: "Arial",
      fontSize: "1em",
      fontStyle: "italic",
      fontWeight: "lighter"
    };
    var reactions = {
      display: "flex",
      justifyContent: "flex-end",
      gap: "30px",
      cursor: "pointer",
      fontFamily: "Arial",
      color: "#787878",
      fontWeight: "Bold"
    };
    var reply = {
      display: "flex",
      justifyContent: "flex-start",
      gap: "30px",
      cursor: "pointer",
      fontFamily: "Arial",
      color: "#787878",
      fontWeight: "Bold"
    };
    var hide = {
      display: "flex",
      justifyContent: "flex-start",
      gap: "30px"
    };
    var paragraph = {
      fontFamily: "Arial",
      fontSize: "1em",
      color: "#787878",
      fontWeight: "Bold"
    };
    y(function () {
      setAllComments(commentsReplies.map(function (comment) {
        console.log('ingredients', comment);
        return a$1(ReplyBox, {
          comment: comment
        });
      }));
    }, [props.commentsReplies]);
    return a$1("div", null, a$1("div", {
      style: boxStyle
    }, a$1("div", {
      style: authorStyle
    }, a$1(Avatar, {
      imageURL: comment[2]
    }), a$1("p", {
      style: paragraph
    }, "created by ", comment[1], " at ", date)), a$1("div", {
      style: commentStyle
    }, a$1("p", null, " ", JSON.stringify(comment[0]), " ")), a$1("div", {
      style: reactions
    }, a$1("a", null, "Like "), a$1("a", null, "Dislike ")), a$1("div", {
      style: hide
    }, a$1("div", {
      className: "accordion"
    }, a$1("div", {
      className: "accordion-item"
    }, a$1("div", {
      className: "accordion-title",
      onClick: function onClick() {
        return setIsActive(!isActive);
      }
    }, a$1("div", {
      style: reply
    }, a$1("a", null, "Reply ", isActive ? '-' : '+'))), isActive && a$1(ReplyInput, {
      repliedCommentID: comment[4],
      text: "Join the discussion...",
      apiKey: apiKey
    }))), a$1("div", {
      className: "accordion"
    }, a$1("div", {
      className: "accordion-item"
    }, a$1("div", {
      className: "accordion-title",
      onClick: function onClick() {
        return setIsReplies(!isReplies);
      }
    }, a$1("div", {
      style: reply
    }, isReplied && a$1("a", null, "Show Comments ", isReplies ? '-' : '+'))))))), isReplies && allComments);
  }

  function App(props) {
    var fetchData = F$1(DataContext);
    var apiKey = props.apiKey;
    var pageName = props.page;

    var _useState = l([]),
        _useState2 = _slicedToArray(_useState, 2);
        _useState2[0];
        _useState2[1];

    var _useState3 = l(null),
        _useState4 = _slicedToArray(_useState3, 2),
        formID = _useState4[0],
        setFormID = _useState4[1];

    var _useState5 = l(null),
        _useState6 = _slicedToArray(_useState5, 2),
        allComments = _useState6[0],
        setAllComments = _useState6[1];

    var api = new miniJFApi(apiKey);
    api.getForms();

    var createForm = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var result;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return api.createForm(pageName);

              case 2:
                result = _context.sent;
                console.log(result);
                setFormID(result);
                fetchData.setFormID(result);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function createForm() {
        return _ref.apply(this, arguments);
      };
    }();

    createForm();

    var _useState7 = l(null),
        _useState8 = _slicedToArray(_useState7, 2),
        data = _useState8[0],
        setData = _useState8[1];

    var _useState9 = l(true),
        _useState10 = _slicedToArray(_useState9, 2),
        loading = _useState10[0],
        setLoading = _useState10[1];

    var _useState11 = l(null),
        _useState12 = _slicedToArray(_useState11, 2),
        error = _useState12[0],
        setError = _useState12[1];

    y(function () {
      fetch("https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/".concat(formID, "/submissions?apikey=").concat(apiKey, "&orderby=id")).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw response;
      }).then(function (data) {
        setData(data);
        console.log('ben degistim', data);
        fetchData.setData(data); // setData(fetchData.data);
      })["catch"](function (error) {
        console.error("Error fetching data: ", error);
        setError(error);
      })["finally"](function () {
        setLoading(false);
      }); // console.log(fetchData.data)
    }, [formID]);
    if (loading) return "Loading...";
    if (error) return "Error!";
    console.log(data);
    y(function () {
      var data = fetchData.data;
      var commentString = [];
      var replies = [];

      for (var i in data.content) {
        if (data.content[i].status === "ACTIVE") {
          if (data.content[i].answers[3].answer == "1") {
            var _data$content$i$answe;

            // if  parent id is equal to 1 which means  it is comment, not
            commentString.push([data.content[i].answers[1].answer, data.content[i].answers[2].answer, (_data$content$i$answe = data.content[i].answers[5]) === null || _data$content$i$answe === void 0 ? void 0 : _data$content$i$answe.answer, data.content[i].created_at, data.content[i].id, data.content[i].answers[3].answer]);
          } else {
            var _data$content$i$answe2;

            replies.push([data.content[i].answers[1].answer, data.content[i].answers[2].answer, (_data$content$i$answe2 = data.content[i].answers[5]) === null || _data$content$i$answe2 === void 0 ? void 0 : _data$content$i$answe2.answer, data.content[i].created_at, data.content[i].id, data.content[i].answers[3].answer]);
          }
        }
      }

      setAllComments(commentString.map(function (comment) {
        console.log('ingredients', comment); //  if reply exists

        if (comment[5] !== "0") {
          var commentsReplies = [];

          for (var _i in replies) {
            if (replies[_i][5] == comment[4]) {
              commentsReplies.unshift(replies[_i]);
              console.log("synchronized", commentsReplies);
            }
          }

          return a$1(CommentBox, {
            apiKey: apiKey,
            comment: comment,
            commentsReplies: commentsReplies
          });
        } else {
          return a$1(CommentBox, {
            apiKey: apiKey,
            comment: comment,
            commentsReplies: []
          });
        }
      }));
    }, [fetchData.data]); // const allComments = string.map((comment) => {
    //   return (
    //     [<Avatar imageURL={JSON.stringify(comment[2])}/>,
    //     <h3> {JSON.stringify(comment[0])} created by {JSON.stringify(comment[1])} at {JSON.stringify(comment[3])} who {JSON.stringify(comment[2])} </h3>
    //     ])
    //   }
    // );

    var year = new Date().getFullYear();
    var copyRightStyle = {
      color: "rgba(0,0,0,.7)",
      textShadow: "0 1px rgba(255, 255, 255, 0.1)",
      textAlign: "center",
      padding: "30px"
    };
    var header = {
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      gap: "20px"
    };
    var headingStyle = {
      color: "#EB8230",
      fontFamily: "Arial",
      fontWeight: "Bold",
      fontStyle: "italic"
    };
    var pStyle = {
      color: "#787878",
      fontFamily: "Arial",
      fontStyle: "italic",
      padding: "10px"
    };
    return a$1("div", null, a$1("div", {
      style: header
    }, a$1("img", {
      style: "width: 60px",
      src: "https://www.jotform.com/wepay/assets/img/podo.png?v=1.0.0.0"
    }), a$1("h1", {
      style: headingStyle
    }, "Welcome to JotForum Demo")), a$1("p", {
      style: pStyle
    }, "JotForum is a forum tool that allows people to communicate with each other. Library works after installing via npm and declaring in your html or js files. You need to provide your JotForm api key for initialization. Then, JotForum creates a form with the name which is same with your file name. Each time a user comments or replies, the data is sent via jotform api to the created form. If the form is already created with given name, current submissions (comments & replies) are displayed."), a$1("div", {
      style: header
    }, a$1(CommentInput, {
      text: "Join the discussion...",
      apiKey: apiKey,
      formID: formID
    })), a$1("div", null, a$1("h2", {
      style: pStyle
    }, "Comments"), a$1("p", null, " ", allComments)), a$1("div", null, a$1("p", {
      style: copyRightStyle
    }, "\xA9 Copyright ", year, " JotForm. All rights reserved.")));
  }

  var JotForum = function JotForum(address, apiKey, page) {
    _classCallCheck(this, JotForum);

    N(a$1(FetchData, null, a$1(App, {
      apiKey: apiKey,
      page: page
    })), address);
  };

  return JotForum;

})));
