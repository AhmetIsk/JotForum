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

  var n,u$1,i$1,t$1,o$1,r$1={},f$1=[],e$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c$1(n,l){for(var u in l)n[u]=l[u];return n}function s$1(n){var l=n.parentNode;l&&l.removeChild(n);}function a$1(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v$1(n,f,i,t,null)}function v$1(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h$1(){return {current:null}}function y$1(n){return n.children}function p$1(n,l){this.props=n,this.context=l;}function d$1(n,l){if(null==l)return n.__?d$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?d$1(n):null}function _$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _$1(n)}}function k$2(l){(!l.__d&&(l.__d=!0)&&u$1.push(l)&&!b$1.__r++||t$1!==n.debounceRendering)&&((t$1=n.debounceRendering)||i$1)(b$1);}function b$1(){for(var n;b$1.__r=u$1.length;)n=u$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),u$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c$1({},t)).__v=t.__v+1,I$1(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d$1(t):o,t.__h),T$2(u,t),t.__e!=o&&_$1(t)));});}function m$1(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f$1,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(y$1,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null;}I$1(n,k,_=_||r$1,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g$2(k,s,n):s=x$2(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d$1(_));}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d$1(i,h+1)),L$1(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z$1(w[h],w[++h],w[++h]);}function g$2(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g$2(t,l,u):x$2(u,t,t,n.__k,t.__e,l));return l}function w$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w$2(n,l);}):l.push(n)),l}function x$2(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function A$2(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C$1(n,o,l[o],u[o],i);}function P$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e$1.test(l)?u:u+"px";}function C$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H$1:$$1,o):n.removeEventListener(l,o?H$1:$$1,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function $$1(l){this.l[l.type+!1](n.event?n.event(l):l);}function H$1(l){this.l[l.type+!0](n.event?n.event(l):l);}function I$1(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p$1(g,x),v.constructor=P,v.render=M$1),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c$1({},v.__s)),c$1(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c$1(c$1({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y$1&&null==a.key?a.props.children:a,m$1(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j$2(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i);}}function T$2(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j$2(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1;}if(null===_)p===d||c&&n.data===d||(n.data=d);else {if(o=o&&f$1.slice.call(n.childNodes),v=(p=u.props||r$1).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}if(A$2(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m$1(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s$1(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C$1(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C$1(n,"checked",k,p.checked,!1));}return n}function z$1(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L$1(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z$1(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L$1(t[r],u,i);null!=o&&s$1(o);}function M$1(n,l,u){return this.constructor(n,u)}function N$1(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I$1(u,l=(!t&&i||u).__k=a$1(y$1,null,[l]),o||r$1,r$1,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f$1.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T$2(e,l);}function O$1(n,l){N$1(n,l,O$1);}function S$1(n,l,u){var i,t,o,r=arguments,f=c$1({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v$1(n.type,f,i||n.key,t||n.ref,null)}function q$1(n,l){var u={__c:l="__cC"+o$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k$2);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n},__v:0},p$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c$1({},this.state),"function"==typeof n&&(n=n(c$1({},u),this.props)),n&&c$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k$2(this));},p$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k$2(this));},p$1.prototype.render=y$1,u$1=[],i$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b$1.__r=0,o$1=0;

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

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
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

  var t,u,r,o=0,i=[],c=n.__b,f=n.__r,e=n.diffed,a=n.__c,v=n.unmount;function m(t,r){n.__h&&n.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w$1,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!n.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i));}function h(r,o){var i=m(t++,4);!n.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i));}function s(n){return o=5,d(function(){return {current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t());},null==u?u:u.concat(n));}function d(n,u){var r=m(t++,7);return k$1(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o=8,d(function(){return n},t)}function F$1(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T$1(t,u){n.useDebugValue&&n.useDebugValue(u?u(t):t);}function x$1(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],n.__e(u,t.__v);}}),i=[];}n.__b=function(n){u=null,c&&c(n);},n.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},n.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===n.requestAnimationFrame||((r=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x$1)),u=void 0;},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),a&&a(t,u);},n.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){n.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g$1(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j$1(n){var t=u;n.__c=n.__(),u=t;}function k$1(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

  function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,a$1(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new p$1).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=n.__b;n.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=C({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:w$2(w$2(n).map(t))},k={map:N,forEach:N,count:function(n){return n?w$2(n).length:0},only:function(n){var t=w$2(n);if(1!==t.length)throw "Children.only";return t[0]},toArray:w$2},A=n.__e;n.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);};var O=n.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function D(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n;},function(n){r=n;}),r)throw r;if(!e)throw t;return a$1(e,u)}return u.displayName="Lazy",u.__f=!0,u}function F(){this.u=null,this.o=null;}n.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new p$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&a$1(y$1,null,n.fallback);return u&&(u.__h=null),[a$1(y$1,null,t.__e?null:n.children),u]};var M=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function T(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var t=this,e=n.i;t.componentWillUnmount=function(){N$1(null,t.l),t.l=null,t.i=null;},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n);},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n);}}),N$1(a$1(T,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount();}function I(n,t){return a$1(j,{__v:n,i:t})}(F.prototype=new p$1).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),M(t,n,r)):u();};e?e(o):o();}},F.prototype.render=function(n){this.u=null,this.o=new Map;var t=w$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){M(n,e,t);});};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),N$1(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return O$1(n,t),"function"==typeof e&&e(),n?n.__c:null}p$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(p$1.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=n.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}n.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var q,G={configurable:!0,get:function(){return this.class}},J=n.vnode;n.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=w$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=w$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r;}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=W,J&&J(n);};var K=n.__r;n.__r=function(n){K&&K(n),q=n.__c;};var Q={ReactCurrentDispatcher:{current:{readContext:function(n){return q.__n[n.__c].props.value}}}};"object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()};function fn(n){return a$1.bind(null,n)}function cn(n){return !!n&&n.$$typeof===W}function an(n){return cn(n)?S$1.apply(null,arguments):n}function sn(n){return !!n.__k&&(N$1(null,n),!0)}function hn(n){return n&&(n.base||1===n.nodeType&&n)||null}var pn=function(n,t){return n(t)};var require$$0 = {useState:l,useReducer:p,useEffect:y,useLayoutEffect:h,useRef:s,useImperativeHandle:_,useMemo:d,useCallback:A$1,useContext:F$1,useDebugValue:T$1,version:"16.8.0",Children:k,render:z,hydrate:B,unmountComponentAtNode:sn,createPortal:I,createElement:a$1,createContext:q$1,createFactory:fn,cloneElement:an,createRef:h$1,Fragment:y$1,isValidElement:cn,findDOMNode:hn,Component:p$1,PureComponent:E,memo:g,forwardRef:x,unstable_batchedUpdates:pn,StrictMode:y$1,Suspense:L,SuspenseList:F,lazy:D,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Q};

  var reactResponsive = createCommonjsModule(function (module, exports) {
  !function(root, factory) {
      module.exports = factory(require$$0) ;
  }("undefined" != typeof self ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
      return function(modules) {
          function __webpack_require__(moduleId) {
              if (installedModules[moduleId]) return installedModules[moduleId].exports;
              var module = installedModules[moduleId] = {
                  i: moduleId,
                  l: !1,
                  exports: {}
              };
              return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
              module.l = !0, module.exports;
          }
          var installedModules = {};
          return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
          __webpack_require__.d = function(exports, name, getter) {
              __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                  configurable: !1,
                  enumerable: !0,
                  get: getter
              });
          }, __webpack_require__.n = function(module) {
              var getter = module && module.__esModule ? function() {
                  return module.default;
              } : function() {
                  return module;
              };
              return __webpack_require__.d(getter, "a", getter), getter;
          }, __webpack_require__.o = function(object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
          }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 7);
      }([ function(module, __webpack_exports__, __webpack_require__) {
          function _slicedToArray(arr, i) {
              return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
          }
          function _nonIterableRest() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          function _unsupportedIterableToArray(o, minLen) {
              if (o) {
                  if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
                  var n = Object.prototype.toString.call(o).slice(8, -1);
                  return "Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n ? Array.from(o) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
              }
          }
          function _arrayLikeToArray(arr, len) {
              (null == len || len > arr.length) && (len = arr.length);
              for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
              return arr2;
          }
          function _iterableToArrayLimit(arr, i) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(arr)) {
                  var _arr = [], _n = !0, _d = !1, _e = void 0;
                  try {
                      for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                      !i || _arr.length !== i); _n = !0) ;
                  } catch (err) {
                      _d = !0, _e = err;
                  } finally {
                      try {
                          _n || null == _i.return || _i.return();
                      } finally {
                          if (_d) throw _e;
                      }
                  }
                  return _arr;
              }
          }
          function _arrayWithHoles(arr) {
              if (Array.isArray(arr)) return arr;
          }
          var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__), __WEBPACK_IMPORTED_MODULE_1_matchmediaquery__ = __webpack_require__(8), __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_matchmediaquery__), __WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__ = __webpack_require__(10), __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__), __WEBPACK_IMPORTED_MODULE_4__toQuery__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_5__Context__ = __webpack_require__(6), makeQuery = function(settings) {
              return settings.query || Object(__WEBPACK_IMPORTED_MODULE_4__toQuery__.a)(settings);
          }, hyphenateKeys = function(obj) {
              if (!obj) return null;
              var keys = Object.keys(obj);
              return 0 === keys.length ? null : keys.reduce(function(result, key) {
                  return result[Object(__WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__.a)(key)] = obj[key], 
                  result;
              }, {});
          }, useIsUpdate = function() {
              var ref = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useRef(!1);
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                  ref.current = !0;
              }, []), ref.current;
          }, useDevice = function(deviceFromProps) {
              var deviceFromContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useContext(__WEBPACK_IMPORTED_MODULE_5__Context__.a), getDevice = function() {
                  return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
              }, _React$useState = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getDevice), _React$useState2 = _slicedToArray(_React$useState, 2), device = _React$useState2[0], setDevice = _React$useState2[1];
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                  var newDevice = getDevice();
                  __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default()(device, newDevice) || setDevice(newDevice);
              }, [ deviceFromProps, deviceFromContext ]), device;
          }, useQuery = function(settings) {
              var getQuery = function() {
                  return makeQuery(settings);
              }, _React$useState3 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getQuery), _React$useState4 = _slicedToArray(_React$useState3, 2), query = _React$useState4[0], setQuery = _React$useState4[1];
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                  var newQuery = getQuery();
                  query !== newQuery && setQuery(newQuery);
              }, [ settings ]), query;
          }, useMatchMedia = function(query, device) {
              var getMatchMedia = function() {
                  return __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default()(query, device || {}, !!device);
              }, _React$useState5 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getMatchMedia), _React$useState6 = _slicedToArray(_React$useState5, 2), mq = _React$useState6[0], setMq = _React$useState6[1], isUpdate = useIsUpdate();
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                  return isUpdate && setMq(getMatchMedia()), function() {
                      mq.dispose();
                  };
              }, [ query, device ]), mq;
          }, useMatches = function(mediaQuery) {
              var _React$useState7 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(mediaQuery.matches), _React$useState8 = _slicedToArray(_React$useState7, 2), matches = _React$useState8[0], setMatches = _React$useState8[1];
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                  var updateMatches = function() {
                      setMatches(mediaQuery.matches);
                  };
                  return mediaQuery.addListener(updateMatches), updateMatches(), function() {
                      mediaQuery.removeListener(updateMatches);
                  };
              }, [ mediaQuery ]), matches;
          }, useMediaQuery = function(settings, device, onChange) {
              var deviceSettings = useDevice(device), query = useQuery(settings);
              if (!query) throw new Error("Invalid or missing MediaQuery!");
              var mq = useMatchMedia(query, deviceSettings), matches = useMatches(mq), isUpdate = useIsUpdate();
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                  isUpdate && onChange && onChange(matches);
              }, [ matches ]), matches;
          };
          __webpack_exports__.a = useMediaQuery;
      }, function(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
      }, function(module, __webpack_exports__, __webpack_require__) {
          function toHyphenLower(match) {
              return "-" + match.toLowerCase();
          }
          function hyphenateStyleName(name) {
              if (cache.hasOwnProperty(name)) return cache[name];
              var hName = name.replace(uppercasePattern, toHyphenLower);
              return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
          }
          var uppercasePattern = /[A-Z]/g, msPattern = /^ms-/, cache = {};
          __webpack_exports__.a = hyphenateStyleName;
      }, function(module, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_1__mediaQuery__ = __webpack_require__(11), negate = function(cond) {
              return "not ".concat(cond);
          }, keyVal = function(k, v) {
              var realKey = Object(__WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__.a)(k);
              return "number" == typeof v && (v = "".concat(v, "px")), !0 === v ? realKey : !1 === v ? negate(realKey) : "(".concat(realKey, ": ").concat(v, ")");
          }, join = function(conds) {
              return conds.join(" and ");
          }, toQuery = function(obj) {
              var rules = [];
              return Object.keys(__WEBPACK_IMPORTED_MODULE_1__mediaQuery__.a.all).forEach(function(k) {
                  var v = obj[k];
                  null != v && rules.push(keyVal(k, v));
              }), join(rules);
          };
          __webpack_exports__.a = toQuery;
      }, function(module, exports, __webpack_require__) {
          module.exports = __webpack_require__(13);
      }, function(module, exports, __webpack_require__) {
          module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      }, function(module, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__), Context = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();
          __webpack_exports__.a = Context;
      }, function(module, __webpack_exports__, __webpack_require__) {
          Object.defineProperty(__webpack_exports__, "__esModule", {
              value: !0
          });
          var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__Component__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__toQuery__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__Context__ = __webpack_require__(6);
          __webpack_require__.d(__webpack_exports__, "default", function() {
              return __WEBPACK_IMPORTED_MODULE_1__Component__.a;
          }), __webpack_require__.d(__webpack_exports__, "useMediaQuery", function() {
              return __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a;
          }), __webpack_require__.d(__webpack_exports__, "toQuery", function() {
              return __WEBPACK_IMPORTED_MODULE_2__toQuery__.a;
          }), __webpack_require__.d(__webpack_exports__, "Context", function() {
              return __WEBPACK_IMPORTED_MODULE_3__Context__.a;
          });
      }, function(module, exports, __webpack_require__) {
          function Mql(query, values, forceStatic) {
              function addListener(listener) {
                  mql && mql.addListener(listener);
              }
              function removeListener(listener) {
                  mql && mql.removeListener(listener);
              }
              function update(evt) {
                  self.matches = evt.matches, self.media = evt.media;
              }
              function dispose() {
                  mql && mql.removeListener(update);
              }
              var self = this;
              if (dynamicMatch && !forceStatic) {
                  var mql = dynamicMatch.call(window, query);
                  this.matches = mql.matches, this.media = mql.media, mql.addListener(update);
              } else this.matches = staticMatch(query, values), this.media = query;
              this.addListener = addListener, this.removeListener = removeListener, this.dispose = dispose;
          }
          function matchMedia(query, values, forceStatic) {
              return new Mql(query, values, forceStatic);
          }
          var staticMatch = __webpack_require__(9).match, dynamicMatch = "undefined" != typeof window ? window.matchMedia : null;
          module.exports = matchMedia;
      }, function(module, exports, __webpack_require__) {
          function matchQuery(mediaQuery, values) {
              return parseQuery(mediaQuery).some(function(query) {
                  var inverse = query.inverse, typeMatch = "all" === query.type || values.type === query.type;
                  if (typeMatch && inverse || !typeMatch && !inverse) return !1;
                  var expressionsMatch = query.expressions.every(function(expression) {
                      var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
                      if (!value) return !1;
                      switch (feature) {
                        case "orientation":
                        case "scan":
                          return value.toLowerCase() === expValue.toLowerCase();

                        case "width":
                        case "height":
                        case "device-width":
                        case "device-height":
                          expValue = toPx(expValue), value = toPx(value);
                          break;

                        case "resolution":
                          expValue = toDpi(expValue), value = toDpi(value);
                          break;

                        case "aspect-ratio":
                        case "device-aspect-ratio":
                        case "device-pixel-ratio":
                          expValue = toDecimal(expValue), value = toDecimal(value);
                          break;

                        case "grid":
                        case "color":
                        case "color-index":
                        case "monochrome":
                          expValue = parseInt(expValue, 10) || 1, value = parseInt(value, 10) || 0;
                      }
                      switch (modifier) {
                        case "min":
                          return value >= expValue;

                        case "max":
                          return value <= expValue;

                        default:
                          return value === expValue;
                      }
                  });
                  return expressionsMatch && !inverse || !expressionsMatch && inverse;
              });
          }
          function parseQuery(mediaQuery) {
              return mediaQuery.split(",").map(function(query) {
                  query = query.trim();
                  var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type = captures[2], expressions = captures[3] || "", parsed = {};
                  return parsed.inverse = !!modifier && "not" === modifier.toLowerCase(), parsed.type = type ? type.toLowerCase() : "all", 
                  expressions = expressions.match(/\([^\)]+\)/g) || [], parsed.expressions = expressions.map(function(expression) {
                      var captures = expression.match(RE_MQ_EXPRESSION), feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
                      return {
                          modifier: feature[1],
                          feature: feature[2],
                          value: captures[2]
                      };
                  }), parsed;
              });
          }
          function toDecimal(ratio) {
              var numbers, decimal = Number(ratio);
              return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), 
              decimal;
          }
          function toDpi(resolution) {
              var value = parseFloat(resolution);
              switch (String(resolution).match(RE_RESOLUTION_UNIT)[1]) {
                case "dpcm":
                  return value / 2.54;

                case "dppx":
                  return 96 * value;

                default:
                  return value;
              }
          }
          function toPx(length) {
              var value = parseFloat(length);
              switch (String(length).match(RE_LENGTH_UNIT)[1]) {
                case "em":
                case "rem":
                  return 16 * value;

                case "cm":
                  return 96 * value / 2.54;

                case "mm":
                  return 96 * value / 2.54 / 10;

                case "in":
                  return 96 * value;

                case "pt":
                  return 72 * value;

                case "pc":
                  return 72 * value / 12;

                default:
                  return value;
              }
          }
          exports.match = matchQuery, exports.parse = parseQuery;
          var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
      }, function(module, exports, __webpack_require__) {
          function shallowEqualObjects(objA, objB) {
              if (objA === objB) return !0;
              if (!objA || !objB) return !1;
              var aKeys = Object.keys(objA), bKeys = Object.keys(objB), len = aKeys.length;
              if (bKeys.length !== len) return !1;
              for (var i = 0; i < len; i++) {
                  var key = aKeys[i];
                  if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) return !1;
              }
              return !0;
          }
          module.exports = shallowEqualObjects;
      }, function(module, __webpack_exports__, __webpack_require__) {
          function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                  var symbols = Object.getOwnPropertySymbols(object);
                  enumerableOnly && (symbols = symbols.filter(function(sym) {
                      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                  })), keys.push.apply(keys, symbols);
              }
              return keys;
          }
          function _objectSpread(target) {
              for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                      _defineProperty(target, key, source[key]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                  });
              }
              return target;
          }
          function _defineProperty(obj, key, value) {
              return key in obj ? Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : obj[key] = value, obj;
          }
          var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__), stringOrNumber = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([ __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number ]), matchers = {
              orientation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([ "portrait", "landscape" ]),
              scan: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([ "progressive", "interlace" ]),
              aspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
              deviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
              height: stringOrNumber,
              deviceHeight: stringOrNumber,
              width: stringOrNumber,
              deviceWidth: stringOrNumber,
              color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              colorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              monochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              resolution: stringOrNumber
          }, features = _objectSpread({
              minAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
              maxAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
              minDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
              maxDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
              minHeight: stringOrNumber,
              maxHeight: stringOrNumber,
              minDeviceHeight: stringOrNumber,
              maxDeviceHeight: stringOrNumber,
              minWidth: stringOrNumber,
              maxWidth: stringOrNumber,
              minDeviceWidth: stringOrNumber,
              maxDeviceWidth: stringOrNumber,
              minColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
              maxColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
              minColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
              maxColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
              minMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
              maxMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
              minResolution: stringOrNumber,
              maxResolution: stringOrNumber
          }, matchers), types = {
              all: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              grid: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              aural: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              braille: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              handheld: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              print: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              projection: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              screen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              tty: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              tv: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
              embossed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
          }, all = _objectSpread(_objectSpread({}, types), features);
          matchers.type = Object.keys(types), __webpack_exports__.a = {
              all: all,
              types: types,
              matchers: matchers,
              features: features
          };
      }, function(module, exports, __webpack_require__) {
          var ReactIs = __webpack_require__(4);
          module.exports = __webpack_require__(14)(ReactIs.isElement, !0);
      }, function(module, exports, __webpack_require__) {
          !function() {
              function isValidElementType(type) {
                  return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
              }
              function typeOf(object) {
                  if ("object" == typeof object && null !== object) {
                      var $$typeof = object.$$typeof;
                      switch ($$typeof) {
                        case REACT_ELEMENT_TYPE:
                          var type = object.type;
                          switch (type) {
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                              return type;

                            default:
                              var $$typeofType = type && type.$$typeof;
                              switch ($$typeofType) {
                                case REACT_CONTEXT_TYPE:
                                case REACT_FORWARD_REF_TYPE:
                                case REACT_LAZY_TYPE:
                                case REACT_MEMO_TYPE:
                                case REACT_PROVIDER_TYPE:
                                  return $$typeofType;

                                default:
                                  return $$typeof;
                              }
                          }

                        case REACT_PORTAL_TYPE:
                          return $$typeof;
                      }
                  }
              }
              function isAsyncMode(object) {
                  return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, 
                  console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), 
                  isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
              }
              function isConcurrentMode(object) {
                  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
              }
              function isContextConsumer(object) {
                  return typeOf(object) === REACT_CONTEXT_TYPE;
              }
              function isContextProvider(object) {
                  return typeOf(object) === REACT_PROVIDER_TYPE;
              }
              function isElement(object) {
                  return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
              }
              function isForwardRef(object) {
                  return typeOf(object) === REACT_FORWARD_REF_TYPE;
              }
              function isFragment(object) {
                  return typeOf(object) === REACT_FRAGMENT_TYPE;
              }
              function isLazy(object) {
                  return typeOf(object) === REACT_LAZY_TYPE;
              }
              function isMemo(object) {
                  return typeOf(object) === REACT_MEMO_TYPE;
              }
              function isPortal(object) {
                  return typeOf(object) === REACT_PORTAL_TYPE;
              }
              function isProfiler(object) {
                  return typeOf(object) === REACT_PROFILER_TYPE;
              }
              function isStrictMode(object) {
                  return typeOf(object) === REACT_STRICT_MODE_TYPE;
              }
              function isSuspense(object) {
                  return typeOf(object) === REACT_SUSPENSE_TYPE;
              }
              var hasSymbol = "function" == typeof Symbol && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121, REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118, REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119, AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
              exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, 
              exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef, 
              exports.Fragment = Fragment, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, 
              exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, 
              exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, 
              exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, 
              exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, 
              exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, 
              exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isValidElementType = isValidElementType, 
              exports.typeOf = typeOf;
          }();
      }, function(module, exports, __webpack_require__) {
          function emptyFunctionThatReturnsNull() {
              return null;
          }
          var ReactIs = __webpack_require__(4), assign = __webpack_require__(15), ReactPropTypesSecret = __webpack_require__(5), checkPropTypes = __webpack_require__(16), has = Function.call.bind(Object.prototype.hasOwnProperty), printWarning = function() {};
          printWarning = function(text) {
              var message = "Warning: " + text;
              "undefined" != typeof console && console.error(message);
              try {
                  throw new Error(message);
              } catch (x) {}
          }, module.exports = function(isValidElement, throwOnDirectAccess) {
              function getIteratorFn(maybeIterable) {
                  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                  if ("function" == typeof iteratorFn) return iteratorFn;
              }
              function is(x, y) {
                  return x === y ? 0 !== x || 1 / x == 1 / y : x !== x && y !== y;
              }
              function PropTypeError(message) {
                  this.message = message, this.stack = "";
              }
              function createChainableTypeChecker(validate) {
                  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                      if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, 
                      secret !== ReactPropTypesSecret) {
                          if (throwOnDirectAccess) {
                              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                              throw err.name = "Invariant Violation", err;
                          }
                          if ("undefined" != typeof console) {
                              var cacheKey = componentName + ":" + propName;
                              !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), 
                              manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
                          }
                      }
                      return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`." : "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
                  }
                  var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0, chainedCheckType = checkType.bind(null, !1);
                  return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
              }
              function createPrimitiveTypeChecker(expectedType) {
                  function validate(props, propName, componentName, location, propFullName, secret) {
                      var propValue = props[propName];
                      if (getPropType(propValue) !== expectedType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.");
                      return null;
                  }
                  return createChainableTypeChecker(validate);
              }
              function createArrayOfTypeChecker(typeChecker) {
                  function validate(props, propName, componentName, location, propFullName) {
                      if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                      var propValue = props[propName];
                      if (!Array.isArray(propValue)) {
                          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected an array.");
                      }
                      for (var i = 0; i < propValue.length; i++) {
                          var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                          if (error instanceof Error) return error;
                      }
                      return null;
                  }
                  return createChainableTypeChecker(validate);
              }
              function createInstanceTypeChecker(expectedClass) {
                  function validate(props, propName, componentName, location, propFullName) {
                      if (!(props[propName] instanceof expectedClass)) {
                          var expectedClassName = expectedClass.name || ANONYMOUS;
                          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getClassName(props[propName]) + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
                      }
                      return null;
                  }
                  return createChainableTypeChecker(validate);
              }
              function createEnumTypeChecker(expectedValues) {
                  function validate(props, propName, componentName, location, propFullName) {
                      for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
                      var valuesString = JSON.stringify(expectedValues, function(key, value) {
                          return "symbol" === getPreciseType(value) ? String(value) : value;
                      });
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
                  }
                  return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : (printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), 
                  emptyFunctionThatReturnsNull);
              }
              function createObjectOfTypeChecker(typeChecker) {
                  function validate(props, propName, componentName, location, propFullName) {
                      if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                      var propValue = props[propName], propType = getPropType(propValue);
                      if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");
                      for (var key in propValue) if (has(propValue, key)) {
                          var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                          if (error instanceof Error) return error;
                      }
                      return null;
                  }
                  return createChainableTypeChecker(validate);
              }
              function createUnionTypeChecker(arrayOfTypeCheckers) {
                  function validate(props, propName, componentName, location, propFullName) {
                      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                          if (null == (0, arrayOfTypeCheckers[i])(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
                      }
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
                  }
                  if (!Array.isArray(arrayOfTypeCheckers)) return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), 
                  emptyFunctionThatReturnsNull;
                  for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                      var checker = arrayOfTypeCheckers[i];
                      if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), 
                      emptyFunctionThatReturnsNull;
                  }
                  return createChainableTypeChecker(validate);
              }
              function createShapeTypeChecker(shapeTypes) {
                  function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName], propType = getPropType(propValue);
                      if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                      for (var key in shapeTypes) {
                          var checker = shapeTypes[key];
                          if (checker) {
                              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                              if (error) return error;
                          }
                      }
                      return null;
                  }
                  return createChainableTypeChecker(validate);
              }
              function createStrictShapeTypeChecker(shapeTypes) {
                  function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName], propType = getPropType(propValue);
                      if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                      var allKeys = assign({}, props[propName], shapeTypes);
                      for (var key in allKeys) {
                          var checker = shapeTypes[key];
                          if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
                          var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                          if (error) return error;
                      }
                      return null;
                  }
                  return createChainableTypeChecker(validate);
              }
              function isNode(propValue) {
                  switch (typeof propValue) {
                    case "number":
                    case "string":
                    case "undefined":
                      return !0;

                    case "boolean":
                      return !propValue;

                    case "object":
                      if (Array.isArray(propValue)) return propValue.every(isNode);
                      if (null === propValue || isValidElement(propValue)) return !0;
                      var iteratorFn = getIteratorFn(propValue);
                      if (!iteratorFn) return !1;
                      var step, iterator = iteratorFn.call(propValue);
                      if (iteratorFn !== propValue.entries) {
                          for (;!(step = iterator.next()).done; ) if (!isNode(step.value)) return !1;
                      } else for (;!(step = iterator.next()).done; ) {
                          var entry = step.value;
                          if (entry && !isNode(entry[1])) return !1;
                      }
                      return !0;

                    default:
                      return !1;
                  }
              }
              function isSymbol(propType, propValue) {
                  return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
              }
              function getPropType(propValue) {
                  var propType = typeof propValue;
                  return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
              }
              function getPreciseType(propValue) {
                  if (void 0 === propValue || null === propValue) return "" + propValue;
                  var propType = getPropType(propValue);
                  if ("object" === propType) {
                      if (propValue instanceof Date) return "date";
                      if (propValue instanceof RegExp) return "regexp";
                  }
                  return propType;
              }
              function getPostfixForTypeWarning(value) {
                  var type = getPreciseType(value);
                  switch (type) {
                    case "array":
                    case "object":
                      return "an " + type;

                    case "boolean":
                    case "date":
                    case "regexp":
                      return "a " + type;

                    default:
                      return type;
                  }
              }
              function getClassName(propValue) {
                  return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
              }
              var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator", ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
                  array: createPrimitiveTypeChecker("array"),
                  bool: createPrimitiveTypeChecker("boolean"),
                  func: createPrimitiveTypeChecker("function"),
                  number: createPrimitiveTypeChecker("number"),
                  object: createPrimitiveTypeChecker("object"),
                  string: createPrimitiveTypeChecker("string"),
                  symbol: createPrimitiveTypeChecker("symbol"),
                  any: function() {
                      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
                  }(),
                  arrayOf: createArrayOfTypeChecker,
                  element: function() {
                      function validate(props, propName, componentName, location, propFullName) {
                          var propValue = props[propName];
                          if (!isValidElement(propValue)) {
                              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement.");
                          }
                          return null;
                      }
                      return createChainableTypeChecker(validate);
                  }(),
                  elementType: function() {
                      function validate(props, propName, componentName, location, propFullName) {
                          var propValue = props[propName];
                          if (!ReactIs.isValidElementType(propValue)) {
                              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement type.");
                          }
                          return null;
                      }
                      return createChainableTypeChecker(validate);
                  }(),
                  instanceOf: createInstanceTypeChecker,
                  node: function() {
                      function validate(props, propName, componentName, location, propFullName) {
                          return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
                      }
                      return createChainableTypeChecker(validate);
                  }(),
                  objectOf: createObjectOfTypeChecker,
                  oneOf: createEnumTypeChecker,
                  oneOfType: createUnionTypeChecker,
                  shape: createShapeTypeChecker,
                  exact: createStrictShapeTypeChecker
              };
              return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, 
              ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, 
              ReactPropTypes;
          };
      }, function(module, exports, __webpack_require__) {
          function toObject(val) {
              if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(val);
          }
          /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
          var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
          module.exports = function() {
              try {
                  if (!Object.assign) return !1;
                  var test1 = new String("abc");
                  if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
                  for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
                  if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function(n) {
                      return test2[n];
                  }).join("")) return !1;
                  var test3 = {};
                  return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                      test3[letter] = letter;
                  }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
              } catch (err) {
                  return !1;
              }
          }() ? Object.assign : function(target, source) {
              for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
                  from = Object(arguments[s]);
                  for (var key in from) hasOwnProperty.call(from, key) && (to[key] = from[key]);
                  if (getOwnPropertySymbols) {
                      symbols = getOwnPropertySymbols(from);
                      for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
                  }
              }
              return to;
          };
      }, function(module, exports, __webpack_require__) {
          function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
              for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
                  var error;
                  try {
                      if ("function" != typeof typeSpecs[typeSpecName]) {
                          var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                          throw err.name = "Invariant Violation", err;
                      }
                      error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                  } catch (ex) {
                      error = ex;
                  }
                  if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), 
                  error instanceof Error && !(error.message in loggedTypeFailures)) {
                      loggedTypeFailures[error.message] = !0;
                      var stack = getStack ? getStack() : "";
                      printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
                  }
              }
          }
          var printWarning = function() {}, ReactPropTypesSecret = __webpack_require__(5), loggedTypeFailures = {}, has = Function.call.bind(Object.prototype.hasOwnProperty);
          printWarning = function(text) {
              var message = "Warning: " + text;
              "undefined" != typeof console && console.error(message);
              try {
                  throw new Error(message);
              } catch (x) {}
          }, checkPropTypes.resetWarningCache = function() {
              loggedTypeFailures = {};
          }, module.exports = checkPropTypes;
      }, function(module, __webpack_exports__, __webpack_require__) {
          function _objectWithoutProperties(source, excluded) {
              if (null == source) return {};
              var key, i, target = _objectWithoutPropertiesLoose(source, excluded);
              if (Object.getOwnPropertySymbols) {
                  var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                  for (i = 0; i < sourceSymbolKeys.length; i++) key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
              }
              return target;
          }
          function _objectWithoutPropertiesLoose(source, excluded) {
              if (null == source) return {};
              var key, i, target = {}, sourceKeys = Object.keys(source);
              for (i = 0; i < sourceKeys.length; i++) key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
              return target;
          }
          function MediaQuery(_ref) {
              var children = _ref.children, device = _ref.device, onChange = _ref.onChange, settings = _objectWithoutProperties(_ref, [ "children", "device", "onChange" ]), matches = Object(__WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a)(settings, device, onChange);
              return "function" == typeof children ? children(matches) : matches ? children : null;
          }
          __webpack_exports__.a = MediaQuery;
          var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0);
      } ]);
  });

  });

  unwrapExports(reactResponsive);
  var reactResponsive_1 = reactResponsive.useMediaQuery;
  reactResponsive.MediaQuery;

  var DataContext = /*#__PURE__*/q$1(); // This context provider is passed to any component requiring the context

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

    var _useState5 = l(""),
        _useState6 = _slicedToArray(_useState5, 2),
        apiKey = _useState6[0],
        setApiKey = _useState6[1];

    var isTabletOrMobile = reactResponsive_1({
      query: '(max-width: 767px)'
    });

    var _useState7 = l(JSON.parse(localStorage.getItem("JFUserInfo"))),
        _useState8 = _slicedToArray(_useState7, 2),
        isLoggedIn = _useState8[0],
        setIsLoggedIn = _useState8[1];

    return a$1(DataContext.Provider, {
      value: {
        data: data,
        setData: setData,
        formID: formID,
        setFormID: setFormID,
        apiKey: apiKey,
        setApiKey: setApiKey,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        isTabletOrMobile: isTabletOrMobile
      }
    }, children);
  };

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

  var objToString = function objToString(obj, key, index) {
    return Object.entries(obj).reduce(function (prevObj, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          valKey = _ref2[0],
          valValue = _ref2[1];

      return "".concat(prevObj).concat(prevObj && '&').concat(key).concat(index || index === 0 ? "[".concat(index + 1, "]") : '', "[").concat(valKey, "]=").concat(valValue);
    }, '');
  };

  var FormObjectToBody = function FormObjectToBody(obj) {
    return encodeURI(Object.keys(obj).reduce(function (prev, curr) {
      var value = obj[curr];

      if (Array.isArray(value)) {
        return "".concat(prev).concat(prev && '&').concat(value.reduce(function (valPrev, valCurr, index) {
          return "".concat(valPrev).concat(valPrev && '&').concat(objToString(valCurr, curr, index));
        }, ''));
      }

      return "".concat(prev).concat(prev && '&').concat(objToString(value, curr));
    }, ''));
  };

  var miniJFApi = /*#__PURE__*/function () {
    function miniJFApi(apiKey) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, miniJFApi);

      this.baseURL = options.baseURL || 'https://api.jotform.com/';
      this.apiKey = apiKey;
      this.fetchData = F$1(DataContext);
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
          var options,
              _options$orderby,
              orderby,
              url,
              response,
              _args = arguments;

          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                  _options$orderby = options.orderby, orderby = _options$orderby === void 0 ? 'id' : _options$orderby;
                  url = "".concat(this.baseURL, "user/forms?apikey=").concat(this.apiKey, "&orderby=").concat(orderby);
                  _context.next = 5;
                  return fetch(url);

                case 5:
                  response = _context.sent;
                  return _context.abrupt("return", response.json());

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getForms() {
          return _getForms.apply(this, arguments);
        }

        return getForms;
      }()
    }, {
      key: "createForm",
      value: function () {
        var _createForm = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
          var data,
              body,
              _args2 = arguments;
          return regenerator.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  data = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                  body = FormObjectToBody(data);
                  _context2.next = 4;
                  return fetch("".concat(this.baseURL, "form?apikey=").concat(this.apiKey), {
                    body: body,
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

                case 4:
                  return _context2.abrupt("return", data);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function createForm() {
          return _createForm.apply(this, arguments);
        }

        return createForm;
      }()
    }, {
      key: "createFormIfNotExists",
      value: function () {
        var _createFormIfNotExists = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
          var data,
              results,
              i,
              _args3 = arguments;
          return regenerator.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  data = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                  _context3.next = 3;
                  return this.getForms();

                case 3:
                  results = _context3.sent;
                  _context3.t0 = regenerator.keys(results.content);

                case 5:
                  if ((_context3.t1 = _context3.t0()).done) {
                    _context3.next = 12;
                    break;
                  }

                  i = _context3.t1.value;

                  if (!(results.content[i].title === data.properties.title && results.content[i].status === "ENABLED")) {
                    _context3.next = 10;
                    break;
                  }

                  data = results.content[i].id;
                  return _context3.abrupt("return", data);

                case 10:
                  _context3.next = 5;
                  break;

                case 12:
                  return _context3.abrupt("return", this.createForm(data));

                case 13:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function createFormIfNotExists() {
          return _createFormIfNotExists.apply(this, arguments);
        }

        return createFormIfNotExists;
      }()
    }, {
      key: "initializeForm",
      value: function () {
        var _initializeForm = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(pageName) {
          var formData, result;
          return regenerator.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  formData = {
                    questions: [{
                      type: 'control_textarea',
                      text: 'Type your comment',
                      order: 1,
                      name: 'CommentBox'
                    }, {
                      type: 'control_textbox',
                      text: 'Full Name',
                      order: 2,
                      name: 'NameBox'
                    }, {
                      type: 'control_textbox',
                      text: 'Replied API',
                      order: 3,
                      name: 'RepliedBox'
                    }, {
                      type: 'control_fileupload',
                      text: 'Avatar Upload',
                      order: 4,
                      name: 'FileUpload'
                    }, {
                      type: 'control_textbox',
                      text: 'Avatar URL',
                      order: 5,
                      name: 'URLUpload'
                    }],
                    properties: {
                      title: pageName
                    }
                  };
                  _context4.next = 3;
                  return this.createFormIfNotExists(formData);

                case 3:
                  result = _context4.sent;
                  this.fetchData.setFormID(result);
                  return _context4.abrupt("return", result);

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function initializeForm(_x) {
          return _initializeForm.apply(this, arguments);
        }

        return initializeForm;
      }()
    }, {
      key: "addSubmission",
      value: function () {
        var _addSubmission = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(data, formID, fetchData) {
          var _this = this;

          return regenerator.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  fetch("".concat(this.baseURL, "form/").concat(formID, "/submissions?apikey=").concat(this.apiKey), {
                    "body": JSON.stringify(data),
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "omit"
                  }).then(function (response) {
                    return response.json();
                  }).then(function (data1) {
                    console.log('Success:', data1);
                    fetch("".concat(_this.baseURL, "form/").concat(formID, "/submissions?apikey=").concat(_this.apiKey, "&orderby=id")).then(function (response) {
                      if (response.ok) {
                        return response.json();
                      }

                      throw response;
                    }).then(function (data2) {
                      fetchData.setData(data2);
                      console.log(data2);
                    })["catch"](function (error) {
                      console.error("Error fetching data: ", error);
                    });
                  })["catch"](function (error) {
                    console.error('Error:', error);
                  });

                case 1:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function addSubmission(_x2, _x3, _x4) {
          return _addSubmission.apply(this, arguments);
        }

        return addSubmission;
      }()
    }, {
      key: "jotformLogin",
      value: function () {
        var _jotformLogin = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(username, password) {
          var userInfo;
          return regenerator.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  userInfo = {
                    username: "",
                    avatar: ""
                  };
                  _context6.next = 3;
                  return fetch("".concat(this.baseURL, "user/login"), {
                    "body": "username=".concat(username, "&password=").concat(password, "&access=readOnly"),
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "omit"
                  }).then(function (response) {
                    if (response.ok) {
                      return response.json();
                    }

                    throw response;
                  }).then(function (data2) {
                    userInfo.username = data2.content.username;
                    var avatarUrl = data2.content.avatarUrl;
                    var avatar = avatarUrl.split('//');
                    userInfo.avatar = "https://i2.wp.com/".concat(avatar[2]);
                  })["catch"](function (error) {
                    console.error("Error fetching data: ", error);
                  });

                case 3:
                  return _context6.abrupt("return", userInfo);

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function jotformLogin(_x5, _x6) {
          return _jotformLogin.apply(this, arguments);
        }

        return jotformLogin;
      }()
    }]);

    return miniJFApi;
  }();

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
  var container = {
    width: "100%",
    display: "flex",
    justifyContent: "space-around"
  };
  var inputBox = {
    backgroundColor: "#FAFAFA",
    borderRadius: "5px",
    padding: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    gap: "30px"
  };
  var MobileInputBox = {
    backgroundColor: "#FAFAFA",
    borderRadius: "5px",
    padding: "20px",
    width: "100%",
    display: "inlineBlock",
    gap: "30px"
  };
  var fontType = {
    margin: "2px",
    fontFamily: "Arial",
    fontSize: "1em",
    fontWeight: "Bold",
    color: "#595959"
  };
  var divStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "20px"
  };
  var replyButtonStyle = {
    backgroundColor: "#787878",
    width: "100px",
    height: "30px",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer"
  };
  var replyInputBox = {
    backgroundColor: "#FAFAFA",
    borderRadius: "5px",
    padding: "20px",
    display: "block",
    width: "100%"
  };
  var mobileReplyInputBox = {
    backgroundColor: "#FAFAFA",
    borderRadius: "5px",
    padding: "20px",
    display: "inlineBlock",
    width: "100%"
  };
  var replyFormGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)"
  };
  var MobileReply = {
    "float": "center",
    margin: "0 auto"
  };

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
  var mobileHeader$1 = {
    margin: "auto",
    display: "inlineBlock",
    paddingBottom: "10px"
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
  var commentsHeader = {
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px"
  };
  var selectStyle = {
    color: "#787878",
    fontFamily: "Arial",
    fontStyle: "italic",
    fontSize: "1em"
  };

  var authorStyle = {
    padding: "10px",
    display: "flex",
    gap: "20px"
  };
  var mobileHeader = {
    margin: "auto",
    display: "inlineBlock",
    padding: "10px"
  };
  var boxStyle = {
    padding: "10px",
    margin: "10px",
    backgroundColor: "#FAFAFA",
    gap: "10px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  };
  var mobileBoxStyle = {
    padding: "0px",
    margin: "0px",
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
    padding: "10px",
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
  var avatarStyle = {
    borderRadius: "50%",
    width: "50px",
    height: "50px"
  };

  function Avatar(props) {
    var url = props.imageURL;
    return a$1("img", {
      style: avatarStyle,
      src: "".concat(url)
    });
  }

  function LoginForm(props) {
    var fetchData = F$1(DataContext);

    var _useState = l(""),
        _useState2 = _slicedToArray(_useState, 2),
        name = _useState2[0],
        setName = _useState2[1];

    var _useState3 = l(null),
        _useState4 = _slicedToArray(_useState3, 2),
        selectedFile = _useState4[0],
        setSelectedFile = _useState4[1];

    y(function () {
      if (fetchData.isLoggedIn) {
        setName(fetchData.isLoggedIn.username);
        setSelectedFile(fetchData.isLoggedIn.avatar);
      }
    }, [fetchData.isLoggedIn]);
    return a$1("div", {
      style: fetchData.isTabletOrMobile ? mobileReplyInputBox : inputBox
    }, a$1("form", {
      onSubmit: props.handleSubmit
    }, a$1("div", {
      style: authorStyle
    }, a$1(Avatar, {
      imageURL: selectedFile
    }), a$1("p", {
      style: headingStyle
    }, "Hey ", name, ", Welcome JotFormer! ")), a$1("p", {
      style: fontType
    }, "Please type your comment:"), a$1("textarea", {
      value: props.comment,
      onChange: props.handleChange,
      placeholder: props.text,
      required: true,
      style: inputStyle
    }), a$1("div", {
      style: divStyle
    }, a$1("button", {
      style: buttonStyle
    }, "Send"))));
  }

  function WithoutLogin(props) {
    var fetchData = F$1(DataContext);
    return a$1("div", {
      style: fetchData.isTabletOrMobile ? MobileInputBox : inputBox
    }, a$1("form", {
      onSubmit: props.handleSubmit
    }, a$1("p", {
      style: fontType
    }, "Please pick an image (only image format is accepted):"), a$1("input", {
      style: inputStyle,
      type: "file",
      id: "myFile",
      name: "filename",
      onChange: props.handleImageChange,
      accept: "image/*"
    }), a$1("p", {
      style: fontType
    }, "Please type your comment:"), a$1("textarea", {
      value: props.comment,
      onChange: props.handleChange,
      placeholder: props.text,
      required: true,
      style: inputStyle
    }), a$1("div", null, a$1("div", null, a$1("p", {
      style: fontType
    }, "and enter your name:"), a$1("span", null, a$1("input", {
      type: "text",
      value: props.name,
      onChange: props.handleNameChange,
      placeholder: "Name",
      required: true,
      style: inputStyle
    })))), a$1("div", {
      style: divStyle
    }, a$1("button", {
      style: buttonStyle
    }, "Send"))), a$1("form", {
      onSubmit: props.handleLogin
    }, a$1("p", {
      style: headingStyle
    }, "or Login with JotForm Account"), a$1("p", {
      style: fontType
    }, "Please type your username:"), a$1("input", {
      type: "text",
      value: props.username,
      onChange: props.handleUsernameChange,
      placeholder: "Name",
      required: true,
      style: inputStyle
    }), a$1("div", null, a$1("div", null, a$1("p", {
      style: fontType
    }, "Password:"), a$1("span", null, a$1("input", {
      type: "password",
      value: props.password,
      onChange: props.handlePasswordChange,
      placeholder: "Name",
      required: true,
      style: inputStyle
    })))), a$1("div", {
      style: divStyle
    }, a$1("button", {
      style: buttonStyle
    }, "Login"))));
  }

  function JFUserLogin(_x, _x2, _x3) {
    return _JFUserLogin.apply(this, arguments);
  }

  function _JFUserLogin() {
    _JFUserLogin = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(api, username, password) {
      var JFUserInfo;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!localStorage.getItem("JFUserInfo")) {
                _context.next = 4;
                break;
              }

              JFUserInfo = localStorage.getItem("JFUserInfo");
              _context.next = 8;
              break;

            case 4:
              _context.next = 6;
              return api.jotformLogin(username, password);

            case 6:
              JFUserInfo = _context.sent;

              if (JFUserInfo.username != null) {
                localStorage.setItem("JFUserInfo", JSON.stringify(JFUserInfo));
              }

            case 8:
              return _context.abrupt("return", JFUserInfo);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _JFUserLogin.apply(this, arguments);
  }

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
    var parentID = 1;
    var api = new miniJFApi(props.apiKey);

    var _useState = l(""),
        _useState2 = _slicedToArray(_useState, 2),
        comment = _useState2[0],
        setComment = _useState2[1];

    var _useState3 = l(""),
        _useState4 = _slicedToArray(_useState3, 2),
        name = _useState4[0],
        setName = _useState4[1];

    var _useState5 = l(""),
        _useState6 = _slicedToArray(_useState5, 2),
        username = _useState6[0],
        setUserName = _useState6[1];

    var _useState7 = l(""),
        _useState8 = _slicedToArray(_useState7, 2),
        password = _useState8[0],
        setPassword = _useState8[1];

    var _useState9 = l(null),
        _useState10 = _slicedToArray(_useState9, 2),
        selectedFile = _useState10[0],
        setSelectedFile = _useState10[1];

    var _useState11 = l(false),
        _useState12 = _slicedToArray(_useState11, 2),
        refresh = _useState12[0],
        setRefresh = _useState12[1];

    var handleChange = function handleChange(e) {
      setComment(e.target.value);
    };

    var handleNameChange = function handleNameChange(e) {
      setName(e.target.value);
    };

    var handlePasswordChange = function handlePasswordChange(e) {
      setPassword(e.target.value);
    };

    var handleUsernameChange = function handleUsernameChange(e) {
      setUserName(e.target.value);
    };

    var handleImageChange = function handleImageChange(e) {
      setSelectedFile(e.target.files[0]);
      console.log(selectedFile);
    };

    var handleSubmit = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(e) {
        var myfile, data2;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log(selectedFile);

                if (fetchData.isLoggedIn) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return toBase64$1(selectedFile);

              case 5:
                myfile = _context.sent;
                _context.next = 9;
                break;

              case 8:
                myfile = selectedFile;

              case 9:
                data2 = {
                  "1": comment,
                  "2": name,
                  "3": parentID,
                  "4": myfile,
                  "5": myfile
                };
                api.addSubmission(data2, formID, fetchData);
                setComment("");
                setName("");
                setRefresh(!refresh);

              case 14:
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

    var handleLogin = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(e) {
        var JFUserInfo;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                _context2.next = 3;
                return JFUserLogin(api, username, password);

              case 3:
                JFUserInfo = _context2.sent;
                if (JFUserInfo.username) fetchData.setIsLoggedIn(JFUserInfo);else alert("Your password or username is invalid. Please be sure that you entered correct username and password.");
                setComment("");
                setName(JFUserInfo.username);
                setSelectedFile(JFUserInfo.avatar);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function handleLogin(_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    y(function () {
      var jotformerData = JSON.parse(localStorage.getItem("JFUserInfo"));

      if (jotformerData) {
        setComment("");
        fetchData.setIsLoggedIn(jotformerData);
        setName(jotformerData.username);
        setSelectedFile(jotformerData.avatar);
      }
    }, [refresh]);
    return a$1("div", {
      style: container
    }, !fetchData.isLoggedIn ? a$1(WithoutLogin, {
      handleSubmit: handleSubmit,
      handleLogin: handleLogin,
      handleImageChange: handleImageChange,
      handleChange: handleChange,
      comment: comment,
      text: props.text,
      handleNameChange: handleNameChange,
      name: name,
      handleUsernameChange: handleUsernameChange,
      username: username,
      handlePasswordChange: handlePasswordChange,
      password: password
    }) : a$1(LoginForm, {
      handleSubmit: handleSubmit,
      handleChange: handleChange,
      comment: comment,
      text: props.text
    }));
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function ReplyWithoutLogin(props) {
    var fetchData = F$1(DataContext);
    return a$1("div", {
      style: fetchData.isTabletOrMobile ? mobileReplyInputBox : replyInputBox
    }, a$1("form", {
      onSubmit: props.handleSubmit,
      style: fetchData.isTabletOrMobile ? MobileReply : replyFormGrid
    }, a$1("div", {
      style: {
        width: "33%"
      }
    }, a$1("p", {
      style: fontType
    }, "Please pick an image (only image format is accepted):"), a$1("input", {
      style: inputStyle,
      type: "file",
      id: "myFile",
      name: "filename",
      onChange: props.handleImageChange,
      accept: "image/*"
    })), a$1("div", {
      style: {
        width: "33%"
      }
    }, a$1("p", {
      style: fontType
    }, "Please type your comment:"), a$1("textarea", {
      value: props.comment,
      onChange: props.handleChange,
      placeholder: props.text,
      required: true,
      style: inputStyle
    })), a$1("div", {
      style: {
        width: "33%"
      }
    }, a$1("div", null, a$1("p", {
      style: fontType
    }, "and enter your name:"), a$1("span", null, a$1("input", {
      type: "text",
      value: props.name,
      onChange: props.handleNameChange,
      placeholder: "Name",
      required: true,
      style: inputStyle
    })))), a$1("div", {
      style: divStyle
    }, a$1("button", {
      style: replyButtonStyle
    }, "Reply"))));
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

    var _useState7 = l(false),
        _useState8 = _slicedToArray(_useState7, 2),
        isActive = _useState8[0],
        setIsActive = _useState8[1];

    var api = new miniJFApi(props.apiKey);

    var handleChange = function handleChange(e) {
      setComment(e.target.value);
    };

    var handleNameChange = function handleNameChange(e) {
      setName(e.target.value);
    };

    var handleImageChange = function handleImageChange(e) {
      setSelectedFile(e.target.files[0]);
    };

    var handleSubmit = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(e) {
        var myfile, data2;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log('burasi', fetchData.isLoggedIn);

                if (fetchData.isLoggedIn) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return toBase64(selectedFile);

              case 5:
                myfile = _context.sent;
                _context.next = 9;
                break;

              case 8:
                myfile = selectedFile;

              case 9:
                data2 = {
                  "1": comment,
                  "2": name,
                  "3": repliedID,
                  "4": myfile,
                  "5": myfile
                };
                api.addSubmission(data2, formID, fetchData);
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

    y(function () {
      if (fetchData.isLoggedIn) {
        setName(fetchData.isLoggedIn.username);
        setSelectedFile(fetchData.isLoggedIn.avatar);
        console.log(name);
      }
    }, [fetchData.isLoggedIn]);
    y(function () {
      setIsActive(false);
    }, [fetchData.data]);
    return a$1("div", {
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
    }, a$1("a", null, "Reply ", isActive ? '-' : '+'))), isActive && (!fetchData.isLoggedIn ? a$1(ReplyWithoutLogin, {
      handleSubmit: handleSubmit,
      handleImageChange: handleImageChange,
      handleChange: handleChange,
      comment: comment,
      text: props.text,
      handleNameChange: handleNameChange,
      name: name
    }) : a$1(LoginForm, {
      handleSubmit: handleSubmit,
      handleChange: handleChange,
      comment: comment,
      text: props.text
    })))));
  }

  function CommentBox(props) {
    var apiKey = props.apiKey;
    var comment = props.comment;
    var fetchData = F$1(DataContext);
    return a$1("div", {
      style: fetchData.isTabletOrMobile ? mobileBoxStyle : boxStyle
    }, a$1("div", {
      style: fetchData.isTabletOrMobile ? mobileHeader : authorStyle
    }, a$1(Avatar, {
      imageURL: comment.avatar
    }), a$1("p", {
      style: paragraph
    }, "created by ", comment.name, " at ", comment.createdAt)), a$1("div", {
      style: commentStyle
    }, a$1("p", null, " ", JSON.stringify(comment.comment), " ")), a$1(ReplyInput, {
      repliedCommentID: comment.id,
      text: "Join the discussion...",
      apiKey: apiKey
    }));
  }

  var ReplyDisplayer = function ReplyDisplayer(_ref) {
    var comment = _ref.comment,
        allComments = _ref.allComments;
    var fetchData = F$1(DataContext);
    var apiKey = fetchData.apiKey;

    var _useState = l(false),
        _useState2 = _slicedToArray(_useState, 2),
        isReplies = _useState2[0],
        setIsReplies = _useState2[1];

    var _useState3 = l(comment.replies.length > 0),
        _useState4 = _slicedToArray(_useState3, 2),
        isReplied = _useState4[0];
        _useState4[1];

    var result = comment.replies.map(function (id) {
      var reply = allComments.find(function (post) {
        if (post.id == id) return true;
      });
      return reply;
    });
    return a$1("div", {
      style: fetchData.isTabletOrMobile ? mobileBoxStyle : boxStyle
    }, a$1(CommentBox, {
      apiKey: apiKey,
      comment: comment
    }), a$1("div", {
      className: "accordion"
    }, a$1("div", {
      className: "accordion-item"
    }, a$1("div", {
      className: "accordion-title",
      onClick: function onClick() {
        return setIsReplies(!isReplies);
      }
    }, a$1("div", {
      style: reactions
    }, isReplied && a$1("a", null, " ", isReplies ? 'Hide Comments-' : 'Show Comments+'))))), isReplies && result.map(function (reply) {
      return a$1("div", {
        style: !fetchData.isTabletOrMobile && {
          paddingLeft: "5%"
        }
      }, a$1(ReplyDisplayer, {
        comment: reply,
        allComments: allComments
      }));
    }));
  };

  function ListComments(props) {
    var fetchData = F$1(DataContext);

    var _useState = l(fetchData.data),
        _useState2 = _slicedToArray(_useState, 2),
        allComments = _useState2[0],
        setAllComments = _useState2[1];

    var _useState3 = l([]),
        _useState4 = _slicedToArray(_useState3, 2),
        comments = _useState4[0],
        setComments = _useState4[1];

    y(function () {
      var data = fetchData.data;
      var commentsRaw = [];

      for (var i in data.content) {
        if (data.content[i].status === "ACTIVE") {
          var _data$content$i$answe;

          var commentObject = {
            name: {},
            comment: {},
            avatar: {},
            createdAt: {},
            id: {},
            parentId: {},
            replies: []
          };
          commentObject.comment = data.content[i].answers[1].answer;
          commentObject.name = data.content[i].answers[2].answer;
          commentObject.avatar = (_data$content$i$answe = data.content[i].answers[5]) === null || _data$content$i$answe === void 0 ? void 0 : _data$content$i$answe.answer;
          commentObject.createdAt = data.content[i].created_at;
          commentObject.id = data.content[i].id;
          commentObject.parentId = data.content[i].answers[3].answer;
          commentsRaw.push(commentObject);
        }
      }

      var comments = commentsRaw.reduce(function (prev, comment) {
        if (comment.parentId !== 1) {
          var parentIndex = prev.findIndex(function (_ref) {
            var id = _ref.id;
            return id === comment.parentId;
          });

          if (parentIndex === -1) {
            return prev;
          }

          prev[parentIndex].replies = [].concat(_toConsumableArray(prev[parentIndex].replies), [comment.id]);
        }

        return prev;
      }, commentsRaw);
      setAllComments(comments);
    }, [fetchData.data]);
    y(function () {
      if (Array.isArray(allComments)) {
        var mappedComments = allComments.map(function (comment) {
          if (comment.parentId == 1) {
            return a$1(ReplyDisplayer, {
              comment: comment,
              allComments: allComments
            });
          }
        });
        setComments(mappedComments);
      }
    }, [allComments]);
    return a$1("div", null, comments);
  }

  function App(props) {
    var fetchData = F$1(DataContext);
    var apiKey = props.apiKey;
    fetchData.setApiKey(props.apiKey);
    var pageName = props.page;
    var api = new miniJFApi(props.apiKey);
    console.log(apiKey);

    var _useState = l(null),
        _useState2 = _slicedToArray(_useState, 2),
        formID = _useState2[0],
        setFormID = _useState2[1];

    var _useState3 = l(true),
        _useState4 = _slicedToArray(_useState3, 2),
        loading = _useState4[0],
        setLoading = _useState4[1];

    var _useState5 = l(null),
        _useState6 = _slicedToArray(_useState5, 2),
        error = _useState6[0],
        setError = _useState6[1];

    var _useState7 = l("desc"),
        _useState8 = _slicedToArray(_useState7, 2),
        asc = _useState8[0],
        setAsc = _useState8[1];

    var year = new Date().getFullYear();
    y(function () {
      var initialLoad = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          var resultFormID;
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return api.initializeForm(pageName);

                case 2:
                  resultFormID = _context.sent;
                  setFormID(resultFormID);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function initialLoad() {
          return _ref.apply(this, arguments);
        };
      }();

      initialLoad();
    }, [apiKey]);

    var handleChange = function handleChange(e) {
      e.preventDefault();
      setAsc(e.currentTarget.value);
    };

    y(function () {
      fetch("https://api.jotform.com/form/".concat(formID, "/submissions?apikey=").concat(apiKey, "&orderby=id,").concat(asc)).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw response;
      }).then(function (data) {
        fetchData.setData(data);
        console.log(data);
      })["catch"](function (error) {
        console.error("Error fetching data: ", error);
        setError(error);
      })["finally"](function () {
        setLoading(false);
      });
    }, [formID, asc]);
    if (loading) return "Loading...";
    if (error) return "Error!";
    return a$1("div", null, a$1("div", {
      style: header
    }, !fetchData.isTabletOrMobile && a$1("img", {
      style: "width: 40px; height: 50px;",
      src: "https://www.jotform.com/wepay/assets/img/podo.png?v=1.0.0.0"
    }), a$1("h3", {
      style: headingStyle
    }, "This blog is created using JotForum")), a$1("p", {
      style: pStyle
    }, "JotForum is a forum tool that allows people to communicate with each other. Library works after installing via npm and declaring in your html or js files. You need to provide your JotForm api key for initialization. Then, JotForum creates a form with the name which is same with your file name. Each time a user comments or replies, the data is sent via jotform api to the created form. If the form is already created with given name, current submissions (comments & replies) are displayed."), a$1("div", {
      style: header
    }, a$1(CommentInput, {
      text: "Join the discussion...",
      apiKey: apiKey,
      formID: formID
    })), a$1("div", null, a$1("div", {
      style: fetchData.isTabletOrMobile ? mobileHeader$1 : commentsHeader
    }, a$1("h2", {
      style: pStyle
    }, "Comments"), a$1("select", {
      style: selectStyle,
      onChange: handleChange
    }, a$1("option", {
      key: "order",
      value: "desc"
    }, "Newest Comment First"), a$1("option", {
      key: "order",
      value: "asc"
    }, "Oldest Comment First"))), a$1(ListComments, {
      asc: asc
    })), a$1("div", null, a$1("p", {
      style: copyRightStyle
    }, "\xA9 Copyright ", year, " JotForm. All rights reserved.")));
  }

  var JotForum = function JotForum(address, apiKey, page) {
    _classCallCheck(this, JotForum);

    console.log(apiKey);
    N$1(a$1(FetchData, null, a$1(App, {
      apiKey: apiKey,
      page: page
    })), address);
  };

  return JotForum;

})));
