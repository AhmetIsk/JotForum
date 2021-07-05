import { createContext, useState, useContext, useEffect } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var n,u,i,t,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n);}function a(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function y(n){return n.children}function p(n,l){this.props=n,this.context=l;}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b);}function b(){for(var n;b.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)));});}function m(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null;}I(n,k,_=_||r,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_));}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h]);}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function x(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px";}function C(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H:$,o):n.removeEventListener(l,o?H:$,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function $(l){this.l[l.type+!1](n.event?n.event(l):l);}function H(l){this.l[l.type+!0](n.event?n.event(l):l);}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i);}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1;}if(null===_)p===d||c&&n.data===d||(n.data=d);else {if(o=o&&f.slice.call(n.childNodes),v=(p=u.props||r).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1));}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&s(o);}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a(y,null,[l]),o||r,r,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l);}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n},__v:0},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0;

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

function Avatar(props) {
  var avatarStyle = {
    borderRadius: "50%",
    width: "50px"
  };
  var url = props.imageURL;
  return a("img", {
    style: avatarStyle,
    src: "".concat(url)
  });
}

var DataContext = /*#__PURE__*/createContext(); // This context provider is passed to any component requiring the context

var FetchData = function FetchData(_ref) {
  var children = _ref.children;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      formID = _useState4[0],
      setFormID = _useState4[1];

  var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      apiKey = _useState6[0],
      setApiKey = _useState6[1];

  return a(DataContext.Provider, {
    value: {
      data: data,
      setData: setData,
      formID: formID,
      setFormID: setFormID,
      apiKey: apiKey,
      setApiKey: setApiKey
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
        console.log(index);
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

    this.baseURL = options.baseURL || 'https://cors-anywhere.herokuapp.com/https://api.jotform.com/';
    this.apiKey = apiKey;
    this.fetchData = useContext(DataContext);
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
                url = "".concat(this.baseURL, "user/forms?apikey=").concat(apiKey, "&orderby=").concat(orderby);
                console.log(url);
                _context.next = 6;
                return fetch(url);

              case 6:
                response = _context.sent;
                return _context.abrupt("return", response.json());

              case 8:
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
                return fetch("".concat(this.baseURL, "form?apikey=").concat(apiKey), {
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
                  "referrerPolicy": "strict-origin-when-cross-origin",
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
                console.log(result);
                return _context4.abrupt("return", result);

              case 7:
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
    key: "addQuestion",
    value: function addQuestion() {
      fetch("".concat(this.baseURL, "form/211726571802958/questions?apikey=").concat(apiKey), {
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
      var _this = this;

      fetch("".concat(this.baseURL, "form/").concat(formID, "/submissions?apikey=").concat(apiKey), {
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
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify(data),
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
      }).then(function (response) {
        return response.json();
      }).then(function (data1) {
        console.log('Success:', data1);
        fetch("".concat(_this.baseURL, "form/").concat(formID, "/submissions?apikey=").concat(apiKey, "&orderby=id")).then(function (response) {
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
  }]);

  return miniJFApi;
}();

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

function CommentInput(props) {
  var fetchData = useContext(DataContext);
  var formID = fetchData.formID;
  var parentID = 1;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      comment = _useState2[0],
      setComment = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = useState(null),
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
              e.preventDefault();
              _context.next = 3;
              return toBase64(selectedFile);

            case 3:
              myfile = _context.sent;
              console.log(selectedFile);
              data2 = {
                "1": comment,
                "2": name,
                "3": parentID,
                "4": myfile,
                "5": myfile
              };
              api.addSubmission(data2, formID, fetchData);
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
  return a("div", {
    style: inputBox
  }, a("form", {
    onSubmit: handleSubmit
  }, a("p", {
    style: fontType
  }, "Please pick an image (only image format is accepted):"), a("input", {
    style: inputStyle,
    type: "file",
    id: "myFile",
    name: "filename",
    onChange: handleImageChange,
    accept: "image/*"
  }), a("p", {
    style: fontType
  }, "Please type your comment:"), a("textarea", {
    value: comment,
    onChange: handleChange,
    placeholder: props.text,
    required: true,
    style: inputStyle
  }), a("div", null, a("p", {
    style: fontType
  }, "Login with"), a("br", null), a("span", {
    style: "display: flex"
  }, a("a", {
    style: padding,
    href: "https://blog.disqus.com/"
  }, a("img", {
    src: "data:image/png;base64,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",
    style: "width: 40px"
  })), a("a", {
    style: padding,
    href: "https://www.facebook.com/"
  }, a("img", {
    src: "https://toppng.com/uploads/preview/banner-transparent-library-svg-vector-freebie-supply-facebook-icon-circle-sv-11563249283vosqx88wgx.png",
    style: "width: 40px"
  })), a("a", {
    style: padding,
    href: "https://twitter.com/login"
  }, a("img", {
    src: "data:image/png;base64,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",
    style: "width: 40px"
  })), a("a", {
    style: padding,
    href: "https://myaccount.google.com/"
  }, a("img", {
    src: "data:image/png;base64,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",
    style: "width: 40px"
  }))), a("div", null, a("p", {
    style: fontType
  }, "or enter your name:"), a("span", null, a("input", {
    type: "text",
    value: name,
    onChange: handleNameChange,
    placeholder: "Name",
    required: true,
    style: inputStyle
  })))), a("div", {
    style: divStyle
  }, a("button", {
    style: buttonStyle
  }, "Send"))));
}

function CommentBox(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isReplied = _useState4[0];
      _useState4[1];

  var apiKey = props.apiKey;

  var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      allComments = _useState6[0];
      _useState6[1];

  useContext(DataContext);
  props.allComments;
  var comment = props.comment;

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isActive = _useState8[0],
      setIsActive = _useState8[1];

  var _useState9 = useState(false),
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
  return a("div", null, a("div", {
    style: boxStyle
  }, a("div", {
    style: authorStyle
  }, a(Avatar, {
    imageURL: comment.avatar
  }), a("p", {
    style: paragraph
  }, "created by ", comment.name, " at ", comment.createdAt)), a("div", {
    style: commentStyle
  }, a("p", null, " ", JSON.stringify(comment.comment), " ")), a("div", {
    style: reactions
  }, a("a", null, "Like "), a("a", null, "Dislike ")), a("div", {
    style: hide
  }, a("div", {
    className: "accordion"
  }, a("div", {
    className: "accordion-item"
  }, a("div", {
    className: "accordion-title",
    onClick: function onClick() {
      return setIsActive(!isActive);
    }
  }, a("div", {
    style: reply
  }, a("a", null, "Reply ", isActive ? '-' : '+'))), isActive && a(ReplyInput, {
    repliedCommentID: comment.id,
    text: "Join the discussion...",
    apiKey: apiKey
  }))), a("div", {
    className: "accordion"
  }, a("div", {
    className: "accordion-item"
  }, a("div", {
    className: "accordion-title",
    onClick: function onClick() {
      return setIsReplies(!isReplies);
    }
  }, a("div", {
    style: reply
  }, isReplied && a("a", null, "Show Comments ", isReplies ? '-' : '+'))))))), isReplies && allComments);
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

var ReplyDisplayer = function ReplyDisplayer(_ref) {
  var comment = _ref.comment,
      allComments = _ref.allComments;
  var fetchData = useContext(DataContext);
  var apiKey = fetchData.apiKey;
  console.log("once buraya girdim", comment);
  var result = comment.replies.map(function (id) {
    var reply = allComments.find(function (post) {
      if (post.id == id) return true;
    });
    return reply;
  });
  console.log(result);
  return a("div", null, a(CommentBox, {
    apiKey: apiKey,
    comment: comment
  }), result.map(function (reply) {
    return a("div", {
      style: {
        paddingLeft: "5%"
      }
    }, a(ReplyDisplayer, {
      comment: reply,
      allComments: allComments
    }));
  }));
};

function ListComments() {
  var fetchData = useContext(DataContext);

  var _useState = useState(fetchData.data),
      _useState2 = _slicedToArray(_useState, 2),
      allComments = _useState2[0],
      setAllComments = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      comments = _useState4[0],
      setComments = _useState4[1];

  useEffect(function () {
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

    console.log(commentsRaw);
    var comments = commentsRaw.reduce(function (prev, comment) {
      if (comment.parentId !== 1) {
        var parentIndex = prev.findIndex(function (_ref) {
          var id = _ref.id;
          return id === comment.parentId;
        });
        console.log(parentIndex);

        if (parentIndex === -1) {
          return prev;
        }

        console.log("once", prev[parentIndex].replies);
        prev[parentIndex].replies = [].concat(_toConsumableArray(prev[parentIndex].replies), [comment.id]);
        console.log("sonra", prev[parentIndex].replies);
      }

      return prev;
    }, commentsRaw);
    console.log(comments);
    setAllComments(comments);
  }, [fetchData.data]);
  useEffect(function () {
    if (Array.isArray(allComments)) {
      setComments(allComments.map(function (comment) {
        if (comment.parentId == 1) {
          return a(ReplyDisplayer, {
            comment: comment,
            allComments: allComments
          });
        }
      }));
    }
    console.log("all comments are here", allComments);
  }, [allComments]);
  return a("div", null, comments);
}

function App(props) {
  var fetchData = useContext(DataContext);
  fetchData.setApiKey(props.apiKey);
  var apiKey = props.apiKey;
  var pageName = props.page;
  var api = new miniJFApi(apiKey);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      formID = _useState4[0],
      setFormID = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2);
      _useState6[0];
      _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2);
      _useState8[0];
      var setData = _useState8[1];

  var _useState9 = useState(true),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = useState(null),
      _useState12 = _slicedToArray(_useState11, 2),
      error = _useState12[0],
      setError = _useState12[1];

  useEffect(function () {
    console.log("her zaman create form olusturma pls");

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
  }, []);
  useEffect(function () {
    fetch("https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/".concat(formID, "/submissions?apikey=").concat(apiKey, "&orderby=id")).then(function (response) {
      if (response.ok) {
        return response.json();
      }

      throw response;
    }).then(function (data) {
      setData(data);
      fetchData.setData(data);
    })["catch"](function (error) {
      console.error("Error fetching data: ", error);
      setError(error);
    })["finally"](function () {
      setLoading(false);
    });
  }, [formID]);
  if (loading) return "Loading...";
  if (error) return "Error!";
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
  return a("div", null, a("div", {
    style: header
  }, a("img", {
    style: "width: 60px",
    src: "https://www.jotform.com/wepay/assets/img/podo.png?v=1.0.0.0"
  }), a("h1", {
    style: headingStyle
  }, "Welcome to JotForum Demo")), a("p", {
    style: pStyle
  }, "JotForum is a forum tool that allows people to communicate with each other. Library works after installing via npm and declaring in your html or js files. You need to provide your JotForm api key for initialization. Then, JotForum creates a form with the name which is same with your file name. Each time a user comments or replies, the data is sent via jotform api to the created form. If the form is already created with given name, current submissions (comments & replies) are displayed."), a("div", {
    style: header
  }, a(CommentInput, {
    text: "Join the discussion...",
    apiKey: apiKey,
    formID: formID
  })), a("div", null, a("h2", {
    style: pStyle
  }, "Comments"), a(ListComments, null)), a("div", null, a("p", {
    style: copyRightStyle
  }, "\xA9 Copyright ", year, " JotForm. All rights reserved.")));
}

var JotForum = function JotForum(address, apiKey, page) {
  _classCallCheck(this, JotForum);

  N(a(FetchData, null, a(App, {
    apiKey: apiKey,
    page: page
  })), address);
};

export default JotForum;
