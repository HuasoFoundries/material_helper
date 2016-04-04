!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], ["5"], function($__System) {

!function(e){function n(e,n){for(var t=e.split(".");t.length;)n=n[t.shift()];return n}function t(n){if(Object.keys)Object.keys(e).forEach(n);else for(var t in e)f.call(e,t)&&n(t)}function r(n){t(function(t){if(-1==a.call(l,t)){try{var r=e[t]}catch(o){l.push(t)}n(t,r)}})}var o,i=$__System,f=Object.prototype.hasOwnProperty,a=Array.prototype.indexOf||function(e){for(var n=0,t=this.length;t>n;n++)if(this[n]===e)return n;return-1},l=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(t,i,f){var a=e.define;e.define=void 0,e.exports=void 0,e.module&&e.module.exports&&(e.module=void 0);var l;if(f){l={};for(var u in f)l[u]=e[u],e[u]=f[u]}return i||(o={},r(function(e,n){o[e]=n})),function(){var t;if(i)t=n(i,e);else{var f,u,s={};r(function(e,n){o[e]!==n&&"undefined"!=typeof n&&(s[e]=n,"undefined"!=typeof f?u||f===n||(u=!0):f=n)}),t=u?s:f}if(l)for(var c in l)e[c]=l[c];return e.define=a,t}}}))}("undefined"!=typeof self?self:global);
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(s),i=(r[1].split(",")[n]||"require").replace(p,""),t=c[i]||(c[i]=new RegExp(u+i+a,"g"));t.lastIndex=0;for(var o,f=[];o=t.exec(e);)f.push(o[2]||o[3]);return f}function r(e,n,i,t){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var f=o.get(e);return f.__useDefault?f["default"]:f}throw new TypeError("Invalid require")}for(var l=[],u=0;u<e.length;u++)l.push(o["import"](e[u],t));Promise.all(l).then(function(e){n&&n.apply(null,e)},i)}function i(i,t,l){"string"!=typeof i&&(l=t,t=i,i=null),t instanceof Array||(l=t,t=["require","exports","module"].splice(0,l.length)),"function"!=typeof l&&(l=function(e){return function(){return e}}(l)),void 0===t[t.length-1]&&t.pop();var u,a,s;-1!=(u=f.call(t,"require"))&&(t.splice(u,1),i||(t=t.concat(n(l.toString(),u)))),-1!=(a=f.call(t,"exports"))&&t.splice(a,1),-1!=(s=f.call(t,"module"))&&t.splice(s,1);var p={name:i,deps:t,execute:function(n,i,f){for(var p=[],c=0;c<t.length;c++)p.push(n(t[c]));f.uri=f.id,f.config=function(){},-1!=s&&p.splice(s,0,f),-1!=a&&p.splice(a,0,i),-1!=u&&p.splice(u,0,function(e,i,t){return"string"==typeof e&&"function"!=typeof i?n(e):r.call(o,e,i,t,f.id)});var d=l.apply(-1==a?e:i,p);return"undefined"==typeof d&&f&&(d=f.exports),"undefined"!=typeof d?d:void 0}};if(i)d.anonDefine||d.isBundle?(d.anonDefine&&d.anonDefine.name&&o.registerDynamic(d.anonDefine.name,d.anonDefine.deps,!1,d.anonDefine.execute),d.anonDefine=null):d.anonDefine=p,d.isBundle=!0,o.registerDynamic(i,p.deps,!1,p.execute);else{if(d.anonDefine)throw new TypeError("Multiple defines for anonymous module");d.anonDefine=p}}function t(n){d.anonDefine=null,d.isBundle=!1;var r=e.module,t=e.exports,o=e.define;return e.module=void 0,e.exports=void 0,e.define=i,function(){e.define=o,e.module=r,e.exports=t}}var o=$__System,f=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,u="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",a="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",s=/\(([^\)]*)\)/,p=/^\s+|\s+$/g,c={};i.amd={};var d={isBundle:!1,anonDefine:null};o.set("@@amd-helpers",o.newModule({createDefine:t,require:r,define:i,lastModule:d})),o.amdDefine=i,o.amdRequire=r}("undefined"!=typeof self?self:global);
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
;
(function(window) {
  if (window.jQuery) {
    return;
  }
  var $ = function(selector, context) {
    return new $.fn.init(selector, context);
  };
  $.isWindow = function(obj) {
    return obj != null && obj == obj.window;
  };
  $.type = function(obj) {
    if (obj == null) {
      return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
  };
  $.isArray = Array.isArray || function(obj) {
    return $.type(obj) === "array";
  };
  function isArraylike(obj) {
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
  $.isPlainObject = function(obj) {
    var key;
    if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
      return false;
    }
    try {
      if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
      }
    } catch (e) {
      return false;
    }
    for (key in obj) {}
    return key === undefined || hasOwn.call(obj, key);
  };
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
  $.data = function(node, key, value) {
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
    } else if (key !== undefined) {
      var id = node[$.expando] || (node[$.expando] = ++$.uuid);
      cache[id] = cache[id] || {};
      cache[id][key] = value;
      return value;
    }
  };
  $.removeData = function(node, keys) {
    var id = node[$.expando],
        store = id && cache[id];
    if (store) {
      $.each(keys, function(_, key) {
        delete store[key];
      });
    }
  };
  $.extend = function() {
    var src,
        copyIsArray,
        copy,
        name,
        options,
        clone,
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
  $.queue = function(elem, type, data) {
    function $makeArray(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArraylike(Object(arr))) {
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
  $.dequeue = function(elems, type) {
    $.each(elems.nodeType ? [elems] : elems, function(i, elem) {
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
  $.fn = $.prototype = {
    init: function(selector) {
      if (selector.nodeType) {
        this[0] = selector;
        return this;
      } else {
        throw new Error("Not a DOM node.");
      }
    },
    offset: function() {
      var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
        top: 0,
        left: 0
      };
      return {
        top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
        left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
      };
    },
    position: function() {
      function offsetParent() {
        var offsetParent = this.offsetParent || document;
        while (offsetParent && (!offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static")) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || document;
      }
      var elem = this[0],
          offsetParent = offsetParent.apply(elem),
          offset = this.offset(),
          parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {
            top: 0,
            left: 0
          } : $(offsetParent).offset();
      offset.top -= parseFloat(elem.style.marginTop) || 0;
      offset.left -= parseFloat(elem.style.marginLeft) || 0;
      if (offsetParent.style) {
        parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
        parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
      }
      return {
        top: offset.top - parentOffset.top,
        left: offset.left - parentOffset.left
      };
    }
  };
  var cache = {};
  $.expando = "velocity" + (new Date().getTime());
  $.uuid = 0;
  var class2type = {},
      hasOwn = class2type.hasOwnProperty,
      toString = class2type.toString;
  var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
  for (var i = 0; i < types.length; i++) {
    class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
  }
  $.fn.init.prototype = $.fn;
  window.Velocity = {Utilities: $};
})(window);
;
(function(factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define("2", [], factory);
  } else {
    factory();
  }
}(function() {
  return function(global, window, document, undefined) {
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
    var rAFShim = (function() {
      var timeLast = 0;
      return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        var timeCurrent = (new Date()).getTime(),
            timeDelta;
        timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
        timeLast = timeCurrent + timeDelta;
        return setTimeout(function() {
          callback(timeCurrent + timeDelta);
        }, timeDelta);
      };
    })();
    function compactSparseArray(array) {
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
    function sanitizeElements(elements) {
      if (Type.isWrapped(elements)) {
        elements = [].slice.call(elements);
      } else if (Type.isNode(elements)) {
        elements = [elements];
      }
      return elements;
    }
    var Type = {
      isString: function(variable) {
        return (typeof variable === "string");
      },
      isArray: Array.isArray || function(variable) {
        return Object.prototype.toString.call(variable) === "[object Array]";
      },
      isFunction: function(variable) {
        return Object.prototype.toString.call(variable) === "[object Function]";
      },
      isNode: function(variable) {
        return variable && variable.nodeType;
      },
      isNodeList: function(variable) {
        return typeof variable === "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) && variable.length !== undefined && (variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
      },
      isWrapped: function(variable) {
        return variable && (variable.jquery || (window.Zepto && window.Zepto.zepto.isZ(variable)));
      },
      isSVG: function(variable) {
        return window.SVGElement && (variable instanceof window.SVGElement);
      },
      isEmptyObject: function(variable) {
        for (var name in variable) {
          return false;
        }
        return true;
      }
    };
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
      jQuery.fn.velocity = jQuery.fn.animate;
      return;
    }
    var DURATION_DEFAULT = 400,
        EASING_DEFAULT = "swing";
    var Velocity = {
      State: {
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isAndroid: /Android/i.test(navigator.userAgent),
        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
        isChrome: window.chrome,
        isFirefox: /Firefox/i.test(navigator.userAgent),
        prefixElement: document.createElement("div"),
        prefixMatches: {},
        scrollAnchor: null,
        scrollPropertyLeft: null,
        scrollPropertyTop: null,
        isTicking: false,
        calls: []
      },
      CSS: {},
      Utilities: $,
      Redirects: {},
      Easings: {},
      Promise: window.Promise,
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
        _cacheValues: true
      },
      init: function(element) {
        $.data(element, "velocity", {
          isSVG: Type.isSVG(element),
          isAnimating: false,
          computedStyle: null,
          tweensContainer: null,
          rootPropertyValueCache: {},
          transformCache: {}
        });
      },
      hook: null,
      mock: false,
      version: {
        major: 1,
        minor: 2,
        patch: 2
      },
      debug: false
    };
    if (window.pageYOffset !== undefined) {
      Velocity.State.scrollAnchor = window;
      Velocity.State.scrollPropertyLeft = "pageXOffset";
      Velocity.State.scrollPropertyTop = "pageYOffset";
    } else {
      Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
      Velocity.State.scrollPropertyLeft = "scrollLeft";
      Velocity.State.scrollPropertyTop = "scrollTop";
    }
    function Data(element) {
      var response = $.data(element, "velocity");
      return response === null ? undefined : response;
    }
    ;
    function generateStep(steps) {
      return function(p) {
        return Math.round(p * steps) * (1 / steps);
      };
    }
    function generateBezier(mX1, mY1, mX2, mY2) {
      var NEWTON_ITERATIONS = 4,
          NEWTON_MIN_SLOPE = 0.001,
          SUBDIVISION_PRECISION = 0.0000001,
          SUBDIVISION_MAX_ITERATIONS = 10,
          kSplineTableSize = 11,
          kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
          float32ArraySupported = "Float32Array" in window;
      if (arguments.length !== 4) {
        return false;
      }
      for (var i = 0; i < 4; ++i) {
        if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
          return false;
        }
      }
      mX1 = Math.min(mX1, 1);
      mX2 = Math.min(mX2, 1);
      mX1 = Math.max(mX1, 0);
      mX2 = Math.max(mX2, 0);
      var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
      function A(aA1, aA2) {
        return 1.0 - 3.0 * aA2 + 3.0 * aA1;
      }
      function B(aA1, aA2) {
        return 3.0 * aA2 - 6.0 * aA1;
      }
      function C(aA1) {
        return 3.0 * aA1;
      }
      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }
      function getSlope(aT, aA1, aA2) {
        return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
      }
      function newtonRaphsonIterate(aX, aGuessT) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0.0)
            return aGuessT;
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      function calcSampleValues() {
        for (var i = 0; i < kSplineTableSize; ++i) {
          mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
      }
      function binarySubdivide(aX, aA, aB) {
        var currentX,
            currentT,
            i = 0;
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
      function getTForX(aX) {
        var intervalStart = 0.0,
            currentSample = 1,
            lastSample = kSplineTableSize - 1;
        for (; currentSample != lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
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
        if (mX1 != mY1 || mX2 != mY2)
          calcSampleValues();
      }
      var f = function(aX) {
        if (!_precomputed)
          precompute();
        if (mX1 === mY1 && mX2 === mY2)
          return aX;
        if (aX === 0)
          return 0;
        if (aX === 1)
          return 1;
        return calcBezier(getTForX(aX), mY1, mY2);
      };
      f.getControlPoints = function() {
        return [{
          x: mX1,
          y: mY1
        }, {
          x: mX2,
          y: mY2
        }];
      };
      var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
      f.toString = function() {
        return str;
      };
      return f;
    }
    var generateSpringRK4 = (function() {
      function springAccelerationForState(state) {
        return (-state.tension * state.x) - (state.friction * state.v);
      }
      function springEvaluateStateWithDerivative(initialState, dt, derivative) {
        var state = {
          x: initialState.x + derivative.dx * dt,
          v: initialState.v + derivative.dv * dt,
          tension: initialState.tension,
          friction: initialState.friction
        };
        return {
          dx: state.v,
          dv: springAccelerationForState(state)
        };
      }
      function springIntegrateState(state, dt) {
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
      return function springRK4Factory(tension, friction, duration) {
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
            have_duration,
            dt,
            last_state;
        tension = parseFloat(tension) || 500;
        friction = parseFloat(friction) || 20;
        duration = duration || null;
        initState.tension = tension;
        initState.friction = friction;
        have_duration = duration !== null;
        if (have_duration) {
          time_lapsed = springRK4Factory(tension, friction);
          dt = time_lapsed / duration * DT;
        } else {
          dt = DT;
        }
        while (true) {
          last_state = springIntegrateState(last_state || initState, dt);
          path.push(1 + last_state.x);
          time_lapsed += 16;
          if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
            break;
          }
        }
        return !have_duration ? time_lapsed : function(percentComplete) {
          return path[(percentComplete * (path.length - 1)) | 0];
        };
      };
    }());
    Velocity.Easings = {
      linear: function(p) {
        return p;
      },
      swing: function(p) {
        return 0.5 - Math.cos(p * Math.PI) / 2;
      },
      spring: function(p) {
        return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
      }
    };
    $.each([["ease", [0.25, 0.1, 0.25, 1.0]], ["ease-in", [0.42, 0.0, 1.00, 1.0]], ["ease-out", [0.00, 0.0, 0.58, 1.0]], ["ease-in-out", [0.42, 0.0, 0.58, 1.0]], ["easeInSine", [0.47, 0, 0.745, 0.715]], ["easeOutSine", [0.39, 0.575, 0.565, 1]], ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]], ["easeInQuad", [0.55, 0.085, 0.68, 0.53]], ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]], ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]], ["easeInCubic", [0.55, 0.055, 0.675, 0.19]], ["easeOutCubic", [0.215, 0.61, 0.355, 1]], ["easeInOutCubic", [0.645, 0.045, 0.355, 1]], ["easeInQuart", [0.895, 0.03, 0.685, 0.22]], ["easeOutQuart", [0.165, 0.84, 0.44, 1]], ["easeInOutQuart", [0.77, 0, 0.175, 1]], ["easeInQuint", [0.755, 0.05, 0.855, 0.06]], ["easeOutQuint", [0.23, 1, 0.32, 1]], ["easeInOutQuint", [0.86, 0, 0.07, 1]], ["easeInExpo", [0.95, 0.05, 0.795, 0.035]], ["easeOutExpo", [0.19, 1, 0.22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [0.6, 0.04, 0.98, 0.335]], ["easeOutCirc", [0.075, 0.82, 0.165, 1]], ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]], function(i, easingArray) {
      Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
    });
    function getEasing(value, duration) {
      var easing = value;
      if (Type.isString(value)) {
        if (!Velocity.Easings[value]) {
          easing = false;
        }
      } else if (Type.isArray(value) && value.length === 1) {
        easing = generateStep.apply(null, value);
      } else if (Type.isArray(value) && value.length === 2) {
        easing = generateSpringRK4.apply(null, value.concat([duration]));
      } else if (Type.isArray(value) && value.length === 4) {
        easing = generateBezier.apply(null, value);
      } else {
        easing = false;
      }
      if (easing === false) {
        if (Velocity.Easings[Velocity.defaults.easing]) {
          easing = Velocity.defaults.easing;
        } else {
          easing = EASING_DEFAULT;
        }
      }
      return easing;
    }
    var CSS = Velocity.CSS = {
      RegEx: {
        isHex: /^#([A-f\d]{3}){1,2}$/i,
        valueUnwrap: /^[A-z]+\((.*)\)$/i,
        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
      },
      Lists: {
        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
      },
      Hooks: {
        templates: {
          "textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
          "boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
          "clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
          "backgroundPosition": ["X Y", "0% 0%"],
          "transformOrigin": ["X Y Z", "50% 50% 0px"],
          "perspectiveOrigin": ["X Y", "50% 50%"]
        },
        registered: {},
        register: function() {
          for (var i = 0; i < CSS.Lists.colors.length; i++) {
            var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
            CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
          }
          var rootProperty,
              hookTemplate,
              hookNames;
          if (IE) {
            for (rootProperty in CSS.Hooks.templates) {
              hookTemplate = CSS.Hooks.templates[rootProperty];
              hookNames = hookTemplate[0].split(" ");
              var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);
              if (hookNames[0] === "Color") {
                hookNames.push(hookNames.shift());
                defaultValues.push(defaultValues.shift());
                CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
              }
            }
          }
          for (rootProperty in CSS.Hooks.templates) {
            hookTemplate = CSS.Hooks.templates[rootProperty];
            hookNames = hookTemplate[0].split(" ");
            for (var i in hookNames) {
              var fullHookName = rootProperty + hookNames[i],
                  hookPosition = i;
              CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
            }
          }
        },
        getRoot: function(property) {
          var hookData = CSS.Hooks.registered[property];
          if (hookData) {
            return hookData[0];
          } else {
            return property;
          }
        },
        cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
          if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
            rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
          }
          if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
            rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
          }
          return rootPropertyValue;
        },
        extractValue: function(fullHookName, rootPropertyValue) {
          var hookData = CSS.Hooks.registered[fullHookName];
          if (hookData) {
            var hookRoot = hookData[0],
                hookPosition = hookData[1];
            rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
            return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
          } else {
            return rootPropertyValue;
          }
        },
        injectValue: function(fullHookName, hookValue, rootPropertyValue) {
          var hookData = CSS.Hooks.registered[fullHookName];
          if (hookData) {
            var hookRoot = hookData[0],
                hookPosition = hookData[1],
                rootPropertyValueParts,
                rootPropertyValueUpdated;
            rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
            rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
            rootPropertyValueParts[hookPosition] = hookValue;
            rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
            return rootPropertyValueUpdated;
          } else {
            return rootPropertyValue;
          }
        }
      },
      Normalizations: {
        registered: {
          clip: function(type, element, propertyValue) {
            switch (type) {
              case "name":
                return "clip";
              case "extract":
                var extracted;
                if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                  extracted = propertyValue;
                } else {
                  extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
                  extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
                }
                return extracted;
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
                if (!(extracted || extracted === 0)) {
                  var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                  if (blurComponent) {
                    extracted = blurComponent[1];
                  } else {
                    extracted = 0;
                  }
                }
                return extracted;
              case "inject":
                if (!parseFloat(propertyValue)) {
                  return "none";
                } else {
                  return "blur(" + propertyValue + ")";
                }
            }
          },
          opacity: function(type, element, propertyValue) {
            if (IE <= 8) {
              switch (type) {
                case "name":
                  return "filter";
                case "extract":
                  var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);
                  if (extracted) {
                    propertyValue = extracted[1] / 100;
                  } else {
                    propertyValue = 1;
                  }
                  return propertyValue;
                case "inject":
                  element.style.zoom = 1;
                  if (parseFloat(propertyValue) >= 1) {
                    return "";
                  } else {
                    return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
                  }
              }
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
        register: function() {
          if (!(IE <= 9) && !Velocity.State.isGingerbread) {
            CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
          }
          for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
            (function() {
              var transformName = CSS.Lists.transformsBase[i];
              CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
                switch (type) {
                  case "name":
                    return "transform";
                  case "extract":
                    if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
                      return /^scale/i.test(transformName) ? 1 : 0;
                    } else {
                      return Data(element).transformCache[transformName].replace(/[()]/g, "");
                    }
                  case "inject":
                    var invalid = false;
                    switch (transformName.substr(0, transformName.length - 1)) {
                      case "translate":
                        invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
                        break;
                      case "scal":
                      case "scale":
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
                      Data(element).transformCache[transformName] = "(" + propertyValue + ")";
                    }
                    return Data(element).transformCache[transformName];
                }
              };
            })();
          }
          for (var i = 0; i < CSS.Lists.colors.length; i++) {
            (function() {
              var colorName = CSS.Lists.colors[i];
              CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
                switch (type) {
                  case "name":
                    return colorName;
                  case "extract":
                    var extracted;
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
                      if (/^[A-z]+$/i.test(propertyValue)) {
                        if (colorNames[propertyValue] !== undefined) {
                          converted = colorNames[propertyValue];
                        } else {
                          converted = colorNames.black;
                        }
                      } else if (CSS.RegEx.isHex.test(propertyValue)) {
                        converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
                      } else if (!(/^rgba?\(/i.test(propertyValue))) {
                        converted = colorNames.black;
                      }
                      extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                    }
                    if (!(IE <= 8) && extracted.split(" ").length === 3) {
                      extracted += " 1";
                    }
                    return extracted;
                  case "inject":
                    if (IE <= 8) {
                      if (propertyValue.split(" ").length === 4) {
                        propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
                      }
                    } else if (propertyValue.split(" ").length === 3) {
                      propertyValue += " 1";
                    }
                    return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                }
              };
            })();
          }
        }
      },
      Names: {
        camelCase: function(property) {
          return property.replace(/-(\w)/g, function(match, subMatch) {
            return subMatch.toUpperCase();
          });
        },
        SVGAttribute: function(property) {
          var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
          if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
            SVGAttributes += "|transform";
          }
          return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
        },
        prefixCheck: function(property) {
          if (Velocity.State.prefixMatches[property]) {
            return [Velocity.State.prefixMatches[property], true];
          } else {
            var vendors = ["", "Webkit", "Moz", "ms", "O"];
            for (var i = 0,
                vendorsLength = vendors.length; i < vendorsLength; i++) {
              var propertyPrefixed;
              if (i === 0) {
                propertyPrefixed = property;
              } else {
                propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
                  return match.toUpperCase();
                });
              }
              if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
                Velocity.State.prefixMatches[property] = propertyPrefixed;
                return [propertyPrefixed, true];
              }
            }
            return [property, false];
          }
        }
      },
      Values: {
        hexToRgb: function(hex) {
          var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
              rgbParts;
          hex = hex.replace(shortformRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
          });
          rgbParts = longformRegex.exec(hex);
          return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
        },
        isCSSNullValue: function(value) {
          return (value == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
        },
        getUnitType: function(property) {
          if (/^(rotate|skew)/i.test(property)) {
            return "deg";
          } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
            return "";
          } else {
            return "px";
          }
        },
        getDisplayType: function(element) {
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
          } else {
            return "block";
          }
        },
        addClass: function(element, className) {
          if (element.classList) {
            element.classList.add(className);
          } else {
            element.className += (element.className.length ? " " : "") + className;
          }
        },
        removeClass: function(element, className) {
          if (element.classList) {
            element.classList.remove(className);
          } else {
            element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
          }
        }
      },
      getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
        function computePropertyValue(element, property) {
          var computedValue = 0;
          if (IE <= 8) {
            computedValue = $.css(element, property);
          } else {
            var toggleDisplay = false;
            if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
              toggleDisplay = true;
              CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
            }
            function revertDisplay() {
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
            if (Data(element) === undefined) {
              computedStyle = window.getComputedStyle(element, null);
            } else if (!Data(element).computedStyle) {
              computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null);
            } else {
              computedStyle = Data(element).computedStyle;
            }
            if (property === "borderColor") {
              property = "borderTopColor";
            }
            if (IE === 9 && property === "filter") {
              computedValue = computedStyle.getPropertyValue(property);
            } else {
              computedValue = computedStyle[property];
            }
            if (computedValue === "" || computedValue === null) {
              computedValue = element.style[property];
            }
            revertDisplay();
          }
          if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
            var position = computePropertyValue(element, "position");
            if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
              computedValue = $(element).position()[property] + "px";
            }
          }
          return computedValue;
        }
        var propertyValue;
        if (CSS.Hooks.registered[property]) {
          var hook = property,
              hookRoot = CSS.Hooks.getRoot(hook);
          if (rootPropertyValue === undefined) {
            rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]);
          }
          if (CSS.Normalizations.registered[hookRoot]) {
            rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
          }
          propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);
        } else if (CSS.Normalizations.registered[property]) {
          var normalizedPropertyName,
              normalizedPropertyValue;
          normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
          if (normalizedPropertyName !== "transform") {
            normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]);
            if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
              normalizedPropertyValue = CSS.Hooks.templates[property][1];
            }
          }
          propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
        }
        if (!/^[\d-]/.test(propertyValue)) {
          if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
            if (/^(height|width)$/i.test(property)) {
              try {
                propertyValue = element.getBBox()[property];
              } catch (error) {
                propertyValue = 0;
              }
            } else {
              propertyValue = element.getAttribute(property);
            }
          } else {
            propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]);
          }
        }
        if (CSS.Values.isCSSNullValue(propertyValue)) {
          propertyValue = 0;
        }
        if (Velocity.debug >= 2)
          console.log("Get " + property + ": " + propertyValue);
        return propertyValue;
      },
      setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
        var propertyName = property;
        if (property === "scroll") {
          if (scrollData.container) {
            scrollData.container["scroll" + scrollData.direction] = propertyValue;
          } else {
            if (scrollData.direction === "Left") {
              window.scrollTo(propertyValue, scrollData.alternateValue);
            } else {
              window.scrollTo(scrollData.alternateValue, propertyValue);
            }
          }
        } else {
          if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
            CSS.Normalizations.registered[property]("inject", element, propertyValue);
            propertyName = "transform";
            propertyValue = Data(element).transformCache[property];
          } else {
            if (CSS.Hooks.registered[property]) {
              var hookName = property,
                  hookRoot = CSS.Hooks.getRoot(property);
              rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot);
              propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
              property = hookRoot;
            }
            if (CSS.Normalizations.registered[property]) {
              propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
              property = CSS.Normalizations.registered[property]("name", element);
            }
            propertyName = CSS.Names.prefixCheck(property)[0];
            if (IE <= 8) {
              try {
                element.style[propertyName] = propertyValue;
              } catch (error) {
                if (Velocity.debug)
                  console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
              }
            } else if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
              element.setAttribute(property, propertyValue);
            } else {
              element.style[propertyName] = propertyValue;
            }
            if (Velocity.debug >= 2)
              console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
          }
        }
        return [propertyName, propertyValue];
      },
      flushTransformCache: function(element) {
        var transformString = "";
        if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && Data(element).isSVG) {
          function getTransformFloat(transformProperty) {
            return parseFloat(CSS.getPropertyValue(element, transformProperty));
          }
          var SVGTransforms = {
            translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
            skewX: [getTransformFloat("skewX")],
            skewY: [getTransformFloat("skewY")],
            scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
            rotate: [getTransformFloat("rotateZ"), 0, 0]
          };
          $.each(Data(element).transformCache, function(transformName) {
            if (/^translate/i.test(transformName)) {
              transformName = "translate";
            } else if (/^scale/i.test(transformName)) {
              transformName = "scale";
            } else if (/^rotate/i.test(transformName)) {
              transformName = "rotate";
            }
            if (SVGTransforms[transformName]) {
              transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
              delete SVGTransforms[transformName];
            }
          });
        } else {
          var transformValue,
              perspective;
          $.each(Data(element).transformCache, function(transformName) {
            transformValue = Data(element).transformCache[transformName];
            if (transformName === "transformPerspective") {
              perspective = transformValue;
              return true;
            }
            if (IE === 9 && transformName === "rotateZ") {
              transformName = "rotate";
            }
            transformString += transformName + transformValue + " ";
          });
          if (perspective) {
            transformString = "perspective" + perspective + " " + transformString;
          }
        }
        CSS.setPropertyValue(element, "transform", transformString);
      }
    };
    CSS.Hooks.register();
    CSS.Normalizations.register();
    Velocity.hook = function(elements, arg2, arg3) {
      var value = undefined;
      elements = sanitizeElements(elements);
      $.each(elements, function(i, element) {
        if (Data(element) === undefined) {
          Velocity.init(element);
        }
        if (arg3 === undefined) {
          if (value === undefined) {
            value = Velocity.CSS.getPropertyValue(element, arg2);
          }
        } else {
          var adjustedSet = Velocity.CSS.setPropertyValue(element, arg2, arg3);
          if (adjustedSet[0] === "transform") {
            Velocity.CSS.flushTransformCache(element);
          }
          value = adjustedSet;
        }
      });
      return value;
    };
    var animate = function() {
      function getChain() {
        if (isUtility) {
          return promiseData.promise || null;
        } else {
          return elementsWrapped;
        }
      }
      var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
          isUtility,
          elementsWrapped,
          argumentIndex;
      var elements,
          propertiesMap,
          options;
      if (Type.isWrapped(this)) {
        isUtility = false;
        argumentIndex = 0;
        elements = this;
        elementsWrapped = this;
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
      var elementsLength = elements.length,
          elementsIndex = 0;
      if (!/^(stop|finish|finishAll)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
        var startingArgumentPosition = argumentIndex + 1;
        options = {};
        for (var i = startingArgumentPosition; i < arguments.length; i++) {
          if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
            options.duration = arguments[i];
          } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
            options.easing = arguments[i];
          } else if (Type.isFunction(arguments[i])) {
            options.complete = arguments[i];
          }
        }
      }
      var promiseData = {
        promise: null,
        resolver: null,
        rejecter: null
      };
      if (isUtility && Velocity.Promise) {
        promiseData.promise = new Velocity.Promise(function(resolve, reject) {
          promiseData.resolver = resolve;
          promiseData.rejecter = reject;
        });
      }
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
          $.each(elements, function(i, element) {
            if (Data(element) && Data(element).delayTimer) {
              clearTimeout(Data(element).delayTimer.setTimeout);
              if (Data(element).delayTimer.next) {
                Data(element).delayTimer.next();
              }
              delete Data(element).delayTimer;
            }
            if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
              $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                if (Type.isFunction(item)) {
                  item();
                }
              });
              $.queue(element, Type.isString(options) ? options : "", []);
            }
          });
          var callsToStop = [];
          $.each(Velocity.State.calls, function(i, activeCall) {
            if (activeCall) {
              $.each(activeCall[1], function(k, activeElement) {
                var queueName = (options === undefined) ? "" : options;
                if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
                  return true;
                }
                $.each(elements, function(l, element) {
                  if (element === activeElement) {
                    if (options === true || Type.isString(options)) {
                      $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                        if (Type.isFunction(item)) {
                          item(null, true);
                        }
                      });
                      $.queue(element, Type.isString(options) ? options : "", []);
                    }
                    if (propertiesMap === "stop") {
                      if (Data(element) && Data(element).tweensContainer && queueName !== false) {
                        $.each(Data(element).tweensContainer, function(m, activeTween) {
                          activeTween.endValue = activeTween.currentValue;
                        });
                      }
                      callsToStop.push(i);
                    } else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
                      activeCall[2].duration = 1;
                    }
                  }
                });
              });
            }
          });
          if (propertiesMap === "stop") {
            $.each(callsToStop, function(i, j) {
              completeCall(j, true);
            });
            if (promiseData.promise) {
              promiseData.resolver(elements);
            }
          }
          return getChain();
        default:
          if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
            action = "start";
          } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
            var opts = $.extend({}, options),
                durationOriginal = opts.duration,
                delayOriginal = opts.delay || 0;
            if (opts.backwards === true) {
              elements = $.extend(true, [], elements).reverse();
            }
            $.each(elements, function(elementIndex, element) {
              if (parseFloat(opts.stagger)) {
                opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
              } else if (Type.isFunction(opts.stagger)) {
                opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
              }
              if (opts.drag) {
                opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
                opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
              }
              Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
            });
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
      var call = [];
      function processElement() {
        var element = this,
            opts = $.extend({}, Velocity.defaults, options),
            tweensContainer = {},
            elementUnitConversionData;
        if (Data(element) === undefined) {
          Velocity.init(element);
        }
        if (parseFloat(opts.delay) && opts.queue !== false) {
          $.queue(element, opts.queue, function(next) {
            Velocity.velocityQueueEntryFlag = true;
            Data(element).delayTimer = {
              setTimeout: setTimeout(next, parseFloat(opts.delay)),
              next: next
            };
          });
        }
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
            opts.duration = parseFloat(opts.duration) || 1;
        }
        if (Velocity.mock !== false) {
          if (Velocity.mock === true) {
            opts.duration = opts.delay = 1;
          } else {
            opts.duration *= parseFloat(Velocity.mock) || 1;
            opts.delay *= parseFloat(Velocity.mock) || 1;
          }
        }
        opts.easing = getEasing(opts.easing, opts.duration);
        if (opts.begin && !Type.isFunction(opts.begin)) {
          opts.begin = null;
        }
        if (opts.progress && !Type.isFunction(opts.progress)) {
          opts.progress = null;
        }
        if (opts.complete && !Type.isFunction(opts.complete)) {
          opts.complete = null;
        }
        if (opts.display !== undefined && opts.display !== null) {
          opts.display = opts.display.toString().toLowerCase();
          if (opts.display === "auto") {
            opts.display = Velocity.CSS.Values.getDisplayType(element);
          }
        }
        if (opts.visibility !== undefined && opts.visibility !== null) {
          opts.visibility = opts.visibility.toString().toLowerCase();
        }
        opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);
        function buildQueue(next) {
          if (opts.begin && elementsIndex === 0) {
            try {
              opts.begin.call(elements, elements);
            } catch (error) {
              setTimeout(function() {
                throw error;
              }, 1);
            }
          }
          if (action === "scroll") {
            var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
                scrollOffset = parseFloat(opts.offset) || 0,
                scrollPositionCurrent,
                scrollPositionCurrentAlternate,
                scrollPositionEnd;
            if (opts.container) {
              if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
                opts.container = opts.container[0] || opts.container;
                scrollPositionCurrent = opts.container["scroll" + scrollDirection];
                scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset;
              } else {
                opts.container = null;
              }
            } else {
              scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]];
              scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]];
              scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset;
            }
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
            if (Velocity.debug)
              console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
          } else if (action === "reverse") {
            if (!Data(element).tweensContainer) {
              $.dequeue(element, opts.queue);
              return;
            } else {
              if (Data(element).opts.display === "none") {
                Data(element).opts.display = "auto";
              }
              if (Data(element).opts.visibility === "hidden") {
                Data(element).opts.visibility = "visible";
              }
              Data(element).opts.loop = false;
              Data(element).opts.begin = null;
              Data(element).opts.complete = null;
              if (!options.easing) {
                delete opts.easing;
              }
              if (!options.duration) {
                delete opts.duration;
              }
              opts = $.extend({}, Data(element).opts, opts);
              var lastTweensContainer = $.extend(true, {}, Data(element).tweensContainer);
              for (var lastTween in lastTweensContainer) {
                if (lastTween !== "element") {
                  var lastStartValue = lastTweensContainer[lastTween].startValue;
                  lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
                  lastTweensContainer[lastTween].endValue = lastStartValue;
                  if (!Type.isEmptyObject(options)) {
                    lastTweensContainer[lastTween].easing = opts.easing;
                  }
                  if (Velocity.debug)
                    console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
                }
              }
              tweensContainer = lastTweensContainer;
            }
          } else if (action === "start") {
            var lastTweensContainer;
            if (Data(element).tweensContainer && Data(element).isAnimating === true) {
              lastTweensContainer = Data(element).tweensContainer;
            }
            function parsePropertyValue(valueData, skipResolvingEasing) {
              var endValue = undefined,
                  easing = undefined,
                  startValue = undefined;
              if (Type.isArray(valueData)) {
                endValue = valueData[0];
                if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
                  startValue = valueData[1];
                } else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1])) || Type.isArray(valueData[1])) {
                  easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
                  if (valueData[2] !== undefined) {
                    startValue = valueData[2];
                  }
                }
              } else {
                endValue = valueData;
              }
              if (!skipResolvingEasing) {
                easing = easing || opts.easing;
              }
              if (Type.isFunction(endValue)) {
                endValue = endValue.call(element, elementsIndex, elementsLength);
              }
              if (Type.isFunction(startValue)) {
                startValue = startValue.call(element, elementsIndex, elementsLength);
              }
              return [endValue || 0, easing, startValue];
            }
            $.each(propertiesMap, function(property, value) {
              if (RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(property)) {
                var valueData = parsePropertyValue(value, true),
                    endValue = valueData[0],
                    easing = valueData[1],
                    startValue = valueData[2];
                if (CSS.RegEx.isHex.test(endValue)) {
                  var colorComponents = ["Red", "Green", "Blue"],
                      endValueRGB = CSS.Values.hexToRgb(endValue),
                      startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
                  for (var i = 0; i < colorComponents.length; i++) {
                    var dataArray = [endValueRGB[i]];
                    if (easing) {
                      dataArray.push(easing);
                    }
                    if (startValueRGB !== undefined) {
                      dataArray.push(startValueRGB[i]);
                    }
                    propertiesMap[property + colorComponents[i]] = dataArray;
                  }
                  delete propertiesMap[property];
                }
              }
            });
            for (var property in propertiesMap) {
              var valueData = parsePropertyValue(propertiesMap[property]),
                  endValue = valueData[0],
                  easing = valueData[1],
                  startValue = valueData[2];
              property = CSS.Names.camelCase(property);
              var rootProperty = CSS.Hooks.getRoot(property),
                  rootPropertyValue = false;
              if (!Data(element).isSVG && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
                if (Velocity.debug)
                  console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
                continue;
              }
              if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
                startValue = 0;
              }
              if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
                if (startValue === undefined) {
                  startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
                }
                rootPropertyValue = Data(element).rootPropertyValueCache[rootProperty];
              } else {
                if (CSS.Hooks.registered[property]) {
                  if (startValue === undefined) {
                    rootPropertyValue = CSS.getPropertyValue(element, rootProperty);
                    startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
                  } else {
                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
                  }
                } else if (startValue === undefined) {
                  startValue = CSS.getPropertyValue(element, property);
                }
              }
              var separatedValue,
                  endValueUnitType,
                  startValueUnitType,
                  operator = false;
              function separateValue(property, value) {
                var unitType,
                    numericValue;
                numericValue = (value || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(match) {
                  unitType = match;
                  return "";
                });
                if (!unitType) {
                  unitType = CSS.Values.getUnitType(property);
                }
                return [numericValue, unitType];
              }
              separatedValue = separateValue(property, startValue);
              startValue = separatedValue[0];
              startValueUnitType = separatedValue[1];
              separatedValue = separateValue(property, endValue);
              endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
                operator = subMatch;
                return "";
              });
              endValueUnitType = separatedValue[1];
              startValue = parseFloat(startValue) || 0;
              endValue = parseFloat(endValue) || 0;
              if (endValueUnitType === "%") {
                if (/^(fontSize|lineHeight)$/.test(property)) {
                  endValue = endValue / 100;
                  endValueUnitType = "em";
                } else if (/^scale/.test(property)) {
                  endValue = endValue / 100;
                  endValueUnitType = "";
                } else if (/(Red|Green|Blue)$/i.test(property)) {
                  endValue = (endValue / 100) * 255;
                  endValueUnitType = "";
                }
              }
              function calculateUnitRatios() {
                var sameRatioIndicators = {
                  myParent: element.parentNode || document.body,
                  position: CSS.getPropertyValue(element, "position"),
                  fontSize: CSS.getPropertyValue(element, "fontSize")
                },
                    samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
                    sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);
                callUnitConversionData.lastParent = sameRatioIndicators.myParent;
                callUnitConversionData.lastPosition = sameRatioIndicators.position;
                callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
                var measurement = 100,
                    unitRatios = {};
                if (!sameEmRatio || !samePercentRatio) {
                  var dummy = Data(element).isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
                  Velocity.init(dummy);
                  sameRatioIndicators.myParent.appendChild(dummy);
                  $.each(["overflow", "overflowX", "overflowY"], function(i, property) {
                    Velocity.CSS.setPropertyValue(dummy, property, "hidden");
                  });
                  Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
                  Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
                  Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
                  $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
                    Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
                  });
                  Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
                  unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement;
                  unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement;
                  unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement;
                  sameRatioIndicators.myParent.removeChild(dummy);
                } else {
                  unitRatios.emToPx = callUnitConversionData.lastEmToPx;
                  unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
                  unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
                }
                if (callUnitConversionData.remToPx === null) {
                  callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16;
                }
                if (callUnitConversionData.vwToPx === null) {
                  callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100;
                  callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100;
                }
                unitRatios.remToPx = callUnitConversionData.remToPx;
                unitRatios.vwToPx = callUnitConversionData.vwToPx;
                unitRatios.vhToPx = callUnitConversionData.vhToPx;
                if (Velocity.debug >= 1)
                  console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
                return unitRatios;
              }
              if (/[\/*]/.test(operator)) {
                endValueUnitType = startValueUnitType;
              } else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
                if (endValue === 0) {
                  endValueUnitType = startValueUnitType;
                } else {
                  elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
                  var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";
                  switch (startValueUnitType) {
                    case "%":
                      startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                      break;
                    case "px":
                      break;
                    default:
                      startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
                  }
                  switch (endValueUnitType) {
                    case "%":
                      startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                      break;
                    case "px":
                      break;
                    default:
                      startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
                  }
                }
              }
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
              tweensContainer[property] = {
                rootPropertyValue: rootPropertyValue,
                startValue: startValue,
                currentValue: startValue,
                endValue: endValue,
                unitType: endValueUnitType,
                easing: easing
              };
              if (Velocity.debug)
                console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
            }
            tweensContainer.element = element;
          }
          if (tweensContainer.element) {
            CSS.Values.addClass(element, "velocity-animating");
            call.push(tweensContainer);
            if (opts.queue === "") {
              Data(element).tweensContainer = tweensContainer;
              Data(element).opts = opts;
            }
            Data(element).isAnimating = true;
            if (elementsIndex === elementsLength - 1) {
              Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver]);
              if (Velocity.State.isTicking === false) {
                Velocity.State.isTicking = true;
                tick();
              }
            } else {
              elementsIndex++;
            }
          }
        }
        if (opts.queue === false) {
          if (opts.delay) {
            setTimeout(buildQueue, opts.delay);
          } else {
            buildQueue();
          }
        } else {
          $.queue(element, opts.queue, function(next, clearQueue) {
            if (clearQueue === true) {
              if (promiseData.promise) {
                promiseData.resolver(elements);
              }
              return true;
            }
            Velocity.velocityQueueEntryFlag = true;
            buildQueue(next);
          });
        }
        if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
          $.dequeue(element);
        }
      }
      $.each(elements, function(i, element) {
        if (Type.isNode(element)) {
          processElement.call(element);
        }
      });
      var opts = $.extend({}, Velocity.defaults, options),
          reverseCallsCount;
      opts.loop = parseInt(opts.loop);
      reverseCallsCount = (opts.loop * 2) - 1;
      if (opts.loop) {
        for (var x = 0; x < reverseCallsCount; x++) {
          var reverseOptions = {
            delay: opts.delay,
            progress: opts.progress
          };
          if (x === reverseCallsCount - 1) {
            reverseOptions.display = opts.display;
            reverseOptions.visibility = opts.visibility;
            reverseOptions.complete = opts.complete;
          }
          animate(elements, "reverse", reverseOptions);
        }
      }
      return getChain();
    };
    Velocity = $.extend(animate, Velocity);
    Velocity.animate = animate;
    var ticker = window.requestAnimationFrame || rAFShim;
    if (!Velocity.State.isMobile && document.hidden !== undefined) {
      document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
          ticker = function(callback) {
            return setTimeout(function() {
              callback(true);
            }, 16);
          };
          tick();
        } else {
          ticker = window.requestAnimationFrame || rAFShim;
        }
      });
    }
    function tick(timestamp) {
      if (timestamp) {
        var timeCurrent = (new Date).getTime();
        var callsLength = Velocity.State.calls.length;
        if (callsLength > 10000) {
          Velocity.State.calls = compactSparseArray(Velocity.State.calls);
        }
        for (var i = 0; i < callsLength; i++) {
          if (!Velocity.State.calls[i]) {
            continue;
          }
          var callContainer = Velocity.State.calls[i],
              call = callContainer[0],
              opts = callContainer[2],
              timeStart = callContainer[3],
              firstTick = !!timeStart,
              tweenDummyValue = null;
          if (!timeStart) {
            timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
          }
          var percentComplete = Math.min((timeCurrent - timeStart) / opts.duration, 1);
          for (var j = 0,
              callLength = call.length; j < callLength; j++) {
            var tweensContainer = call[j],
                element = tweensContainer.element;
            if (!Data(element)) {
              continue;
            }
            var transformPropertyExists = false;
            if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
              if (opts.display === "flex") {
                var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                $.each(flexValues, function(i, flexValue) {
                  CSS.setPropertyValue(element, "display", flexValue);
                });
              }
              CSS.setPropertyValue(element, "display", opts.display);
            }
            if (opts.visibility !== undefined && opts.visibility !== "hidden") {
              CSS.setPropertyValue(element, "visibility", opts.visibility);
            }
            for (var property in tweensContainer) {
              if (property !== "element") {
                var tween = tweensContainer[property],
                    currentValue,
                    easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
                if (percentComplete === 1) {
                  currentValue = tween.endValue;
                } else {
                  var tweenDelta = tween.endValue - tween.startValue;
                  currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
                  if (!firstTick && (currentValue === tween.currentValue)) {
                    continue;
                  }
                }
                tween.currentValue = currentValue;
                if (property === "tween") {
                  tweenDummyValue = currentValue;
                } else {
                  if (CSS.Hooks.registered[property]) {
                    var hookRoot = CSS.Hooks.getRoot(property),
                        rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];
                    if (rootPropertyValueCache) {
                      tween.rootPropertyValue = rootPropertyValueCache;
                    }
                  }
                  var adjustedSetData = CSS.setPropertyValue(element, property, tween.currentValue + (parseFloat(currentValue) === 0 ? "" : tween.unitType), tween.rootPropertyValue, tween.scrollData);
                  if (CSS.Hooks.registered[property]) {
                    if (CSS.Normalizations.registered[hookRoot]) {
                      Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
                    } else {
                      Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
                    }
                  }
                  if (adjustedSetData[0] === "transform") {
                    transformPropertyExists = true;
                  }
                }
              }
            }
            if (opts.mobileHA) {
              if (Data(element).transformCache.translate3d === undefined) {
                Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
                transformPropertyExists = true;
              }
            }
            if (transformPropertyExists) {
              CSS.flushTransformCache(element);
            }
          }
          if (opts.display !== undefined && opts.display !== "none") {
            Velocity.State.calls[i][2].display = false;
          }
          if (opts.visibility !== undefined && opts.visibility !== "hidden") {
            Velocity.State.calls[i][2].visibility = false;
          }
          if (opts.progress) {
            opts.progress.call(callContainer[1], callContainer[1], percentComplete, Math.max(0, (timeStart + opts.duration) - timeCurrent), timeStart, tweenDummyValue);
          }
          if (percentComplete === 1) {
            completeCall(i);
          }
        }
      }
      if (Velocity.State.isTicking) {
        ticker(tick);
      }
    }
    function completeCall(callIndex, isStopped) {
      if (!Velocity.State.calls[callIndex]) {
        return false;
      }
      var call = Velocity.State.calls[callIndex][0],
          elements = Velocity.State.calls[callIndex][1],
          opts = Velocity.State.calls[callIndex][2],
          resolver = Velocity.State.calls[callIndex][4];
      var remainingCallsExist = false;
      for (var i = 0,
          callLength = call.length; i < callLength; i++) {
        var element = call[i].element;
        if (!isStopped && !opts.loop) {
          if (opts.display === "none") {
            CSS.setPropertyValue(element, "display", opts.display);
          }
          if (opts.visibility === "hidden") {
            CSS.setPropertyValue(element, "visibility", opts.visibility);
          }
        }
        if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
          if (Data(element)) {
            Data(element).isAnimating = false;
            Data(element).rootPropertyValueCache = {};
            var transformHAPropertyExists = false;
            $.each(CSS.Lists.transforms3D, function(i, transformName) {
              var defaultValue = /^scale/.test(transformName) ? 1 : 0,
                  currentValue = Data(element).transformCache[transformName];
              if (Data(element).transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
                transformHAPropertyExists = true;
                delete Data(element).transformCache[transformName];
              }
            });
            if (opts.mobileHA) {
              transformHAPropertyExists = true;
              delete Data(element).transformCache.translate3d;
            }
            if (transformHAPropertyExists) {
              CSS.flushTransformCache(element);
            }
            CSS.Values.removeClass(element, "velocity-animating");
          }
        }
        if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
          try {
            opts.complete.call(elements, elements);
          } catch (error) {
            setTimeout(function() {
              throw error;
            }, 1);
          }
        }
        if (resolver && opts.loop !== true) {
          resolver(elements);
        }
        if (Data(element) && opts.loop === true && !isStopped) {
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
          Velocity(element, "reverse", {
            loop: true,
            delay: opts.delay
          });
        }
        if (opts.queue !== false) {
          $.dequeue(element, opts.queue);
        }
      }
      Velocity.State.calls[callIndex] = false;
      for (var j = 0,
          callsLength = Velocity.State.calls.length; j < callsLength; j++) {
        if (Velocity.State.calls[j] !== false) {
          remainingCallsExist = true;
          break;
        }
      }
      if (remainingCallsExist === false) {
        Velocity.State.isTicking = false;
        delete Velocity.State.calls;
        Velocity.State.calls = [];
      }
    }
    global.Velocity = Velocity;
    if (global !== window) {
      global.fn.velocity = animate;
      global.fn.velocity.defaults = Velocity.defaults;
    }
    $.each(["Down", "Up"], function(i, direction) {
      Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
        var opts = $.extend({}, options),
            begin = opts.begin,
            complete = opts.complete,
            computedValues = {
              height: "",
              marginTop: "",
              marginBottom: "",
              paddingTop: "",
              paddingBottom: ""
            },
            inlineValues = {};
        if (opts.display === undefined) {
          opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
        }
        opts.begin = function() {
          begin && begin.call(elements, elements);
          for (var property in computedValues) {
            inlineValues[property] = element.style[property];
            var propertyValue = Velocity.CSS.getPropertyValue(element, property);
            computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
          }
          inlineValues.overflow = element.style.overflow;
          element.style.overflow = "hidden";
        };
        opts.complete = function() {
          for (var property in inlineValues) {
            element.style[property] = inlineValues[property];
          }
          complete && complete.call(elements, elements);
          promiseData && promiseData.resolver(elements);
        };
        Velocity(element, computedValues, opts);
      };
    });
    $.each(["In", "Out"], function(i, direction) {
      Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
        var opts = $.extend({}, options),
            propertiesMap = {opacity: (direction === "In") ? 1 : 0},
            originalComplete = opts.complete;
        if (elementsIndex !== elementsSize - 1) {
          opts.complete = opts.begin = null;
        } else {
          opts.complete = function() {
            if (originalComplete) {
              originalComplete.call(elements, elements);
            }
            promiseData && promiseData.resolver(elements);
          };
        }
        if (opts.display === undefined) {
          opts.display = (direction === "In" ? "auto" : "none");
        }
        Velocity(this, propertiesMap, opts);
      };
    });
    return Velocity;
  }((window.jQuery || window.Zepto || window), window, document);
}));

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("3", ["2"], function(main) {
  return main;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("4", ["5"], function() {
  'use strict';
  var Waves = Waves || {};
  var $$ = document.querySelectorAll.bind(document);
  function isWindow(obj) {
    return obj !== null && obj === obj.window;
  }
  function getWindow(elem) {
    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }
  function offset(elem) {
    var docElem,
        win,
        box = {
          top: 0,
          left: 0
        },
        doc = elem && elem.ownerDocument;
    docElem = doc.documentElement;
    if (typeof elem.getBoundingClientRect !== typeof undefined) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    };
  }
  function convertStyle(obj) {
    var style = '';
    for (var a in obj) {
      if (obj.hasOwnProperty(a)) {
        style += (a + ':' + obj[a] + ';');
      }
    }
    return style;
  }
  var Effect = {
    duration: 750,
    show: function(e, element) {
      if (e.button === 2) {
        return false;
      }
      var el = element || this;
      var ripple = document.createElement('div');
      ripple.className = 'waves-ripple';
      el.appendChild(ripple);
      var pos = offset(el);
      var relativeY = (e.pageY - pos.top);
      var relativeX = (e.pageX - pos.left);
      var scale = 'scale(' + ((el.clientWidth / 100) * 10) + ')';
      if ('touches' in e) {
        relativeY = (e.touches[0].pageY - pos.top);
        relativeX = (e.touches[0].pageX - pos.left);
      }
      ripple.setAttribute('data-hold', Date.now());
      ripple.setAttribute('data-scale', scale);
      ripple.setAttribute('data-x', relativeX);
      ripple.setAttribute('data-y', relativeY);
      var rippleStyle = {
        'top': relativeY + 'px',
        'left': relativeX + 'px'
      };
      ripple.className = ripple.className + ' waves-notransition';
      ripple.setAttribute('style', convertStyle(rippleStyle));
      ripple.className = ripple.className.replace('waves-notransition', '');
      rippleStyle['-webkit-transform'] = scale;
      rippleStyle['-moz-transform'] = scale;
      rippleStyle['-ms-transform'] = scale;
      rippleStyle['-o-transform'] = scale;
      rippleStyle.transform = scale;
      rippleStyle.opacity = '1';
      rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      ripple.setAttribute('style', convertStyle(rippleStyle));
    },
    hide: function(e) {
      TouchHandler.touchup(e);
      var el = this;
      var width = el.clientWidth * 1.4;
      var ripple = null;
      var ripples = el.getElementsByClassName('waves-ripple');
      if (ripples.length > 0) {
        ripple = ripples[ripples.length - 1];
      } else {
        return false;
      }
      var relativeX = ripple.getAttribute('data-x');
      var relativeY = ripple.getAttribute('data-y');
      var scale = ripple.getAttribute('data-scale');
      var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
      var delay = 350 - diff;
      if (delay < 0) {
        delay = 0;
      }
      setTimeout(function() {
        var style = {
          'top': relativeY + 'px',
          'left': relativeX + 'px',
          'opacity': '0',
          '-webkit-transition-duration': Effect.duration + 'ms',
          '-moz-transition-duration': Effect.duration + 'ms',
          '-o-transition-duration': Effect.duration + 'ms',
          'transition-duration': Effect.duration + 'ms',
          '-webkit-transform': scale,
          '-moz-transform': scale,
          '-ms-transform': scale,
          '-o-transform': scale,
          'transform': scale
        };
        ripple.setAttribute('style', convertStyle(style));
        setTimeout(function() {
          try {
            el.removeChild(ripple);
          } catch (e) {
            return false;
          }
        }, Effect.duration);
      }, delay);
    },
    wrapInput: function(elements) {
      for (var a = 0; a < elements.length; a++) {
        var el = elements[a];
        if (el.tagName.toLowerCase() === 'input') {
          var parent = el.parentNode;
          if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
            continue;
          }
          var wrapper = document.createElement('i');
          wrapper.className = el.className + ' waves-input-wrapper';
          var elementStyle = el.getAttribute('style');
          if (!elementStyle) {
            elementStyle = '';
          }
          wrapper.setAttribute('style', elementStyle);
          el.className = 'waves-button-input';
          el.removeAttribute('style');
          parent.replaceChild(wrapper, el);
          wrapper.appendChild(el);
        }
      }
    }
  };
  var TouchHandler = {
    touches: 0,
    allowEvent: function(e) {
      var allow = true;
      if (e.type === 'touchstart') {
        TouchHandler.touches += 1;
      } else if (e.type === 'touchend' || e.type === 'touchcancel') {
        setTimeout(function() {
          if (TouchHandler.touches > 0) {
            TouchHandler.touches -= 1;
          }
        }, 500);
      } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
        allow = false;
      }
      return allow;
    },
    touchup: function(e) {
      TouchHandler.allowEvent(e);
    }
  };
  function getWavesEffectElement(e) {
    if (TouchHandler.allowEvent(e) === false) {
      return null;
    }
    var element = null;
    var target = e.target || e.srcElement;
    while (target.parentElement !== null) {
      if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
        element = target;
        break;
      } else if (target.classList.contains('waves-effect')) {
        element = target;
        break;
      }
      target = target.parentElement;
    }
    return element;
  }
  function showEffect(e) {
    var element = getWavesEffectElement(e);
    if (element !== null) {
      Effect.show(e, element);
      if ('ontouchstart' in window) {
        element.addEventListener('touchend', Effect.hide, false);
        element.addEventListener('touchcancel', Effect.hide, false);
      }
      element.addEventListener('mouseup', Effect.hide, false);
      element.addEventListener('mouseleave', Effect.hide, false);
    }
  }
  Waves.displayEffect = function(options) {
    options = options || {};
    if ('duration' in options) {
      Effect.duration = options.duration;
    }
    Effect.wrapInput($$('.waves-effect'));
    if ('ontouchstart' in window) {
      document.body.addEventListener('touchstart', showEffect, false);
    }
    document.body.addEventListener('mousedown', showEffect, false);
  };
  Waves.attach = function(element) {
    if (element.tagName.toLowerCase() === 'input') {
      Effect.wrapInput([element]);
      element = element.parentElement;
    }
    if ('ontouchstart' in window) {
      element.addEventListener('touchstart', showEffect, false);
    }
    element.addEventListener('mousedown', showEffect, false);
  };
  document.addEventListener('DOMContentLoaded', function() {
    Waves.displayEffect();
  }, false);
  return Waves;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("6", ["5"], function(jQuery) {
  jQuery.extend(jQuery.easing, {easeInOutMaterial: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return c / 2 * t * t + b;
      return c / 4 * ((t -= 2) * t * t + 2) + b;
    }});
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("7", ["5"], function($) {
  $(document).ready(function() {
    $.fn.reverse = [].reverse;
    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn', function(e) {
      var $this = $(this);
      openFABMenu($this);
    });
    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn', function(e) {
      var $this = $(this);
      closeFABMenu($this);
    });
  });
  $.fn.extend({
    openFAB: function() {
      var $this = $(this);
      openFABMenu($this);
    },
    closeFAB: function() {
      closeFABMenu($this);
    }
  });
  var openFABMenu = function(btn) {
    $this = btn;
    if ($this.hasClass('active') === false) {
      $this.addClass('active');
      $this.find('ul .btn-floating').velocity({
        scaleY: ".4",
        scaleX: ".4",
        translateY: "40px"
      }, {duration: 0});
      var time = 0;
      $this.find('ul .btn-floating').reverse().each(function() {
        $(this).velocity({
          opacity: "1",
          scaleX: "1",
          scaleY: "1",
          translateY: "0"
        }, {
          duration: 80,
          delay: time
        });
        time += 40;
      });
    }
  };
  var closeFABMenu = function(btn) {
    $this = btn;
    $this.removeClass('active');
    var time = 0;
    $this.find('ul .btn-floating').velocity("stop", true);
    $this.find('ul .btn-floating').velocity({
      opacity: "0",
      scaleX: ".4",
      scaleY: ".4",
      translateY: "40px"
    }, {duration: 80});
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("8", ["5"], function($) {
  $(document).ready(function() {
    $(document).on('click.card', '.card', function(e) {
      if ($(this).find('> .card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          $(this).find('.card-reveal').velocity({translateY: 0}, {
            duration: 225,
            queue: false,
            easing: 'easeInOutQuad',
            complete: function() {
              $(this).css({display: 'none'});
            }
          });
        } else if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i'))) {
          $(this).find('.card-reveal').css({display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {
            duration: 300,
            queue: false,
            easing: 'easeInOutQuad'
          });
        }
      }
    });
  });
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("9", ["5"], function($) {
  $.fn.characterCounter = function() {
    return this.each(function() {
      var itHasLengthAttribute = $(this).attr('length') !== undefined;
      if (itHasLengthAttribute) {
        $(this).on('input', updateCounter);
        $(this).on('focus', updateCounter);
        $(this).on('blur', removeCounterElement);
        addCounterElement($(this));
      }
    });
  };
  function updateCounter() {
    var maxLength = +$(this).attr('length'),
        actualLength = +$(this).val().length,
        isValidLength = actualLength <= maxLength;
    $(this).parent().find('span[class="character-counter"]').html(actualLength + '/' + maxLength);
    addInputStyle(isValidLength, $(this));
  }
  function addCounterElement($input) {
    var $counterElement = $('<span/>').addClass('character-counter').css('float', 'right').css('font-size', '12px').css('height', 1);
    $input.parent().append($counterElement);
  }
  function removeCounterElement() {
    $(this).parent().find('span[class="character-counter"]').html('');
  }
  function addInputStyle(isValidLength, $input) {
    var inputHasInvalidClass = $input.hasClass('invalid');
    if (isValidLength && inputHasInvalidClass) {
      $input.removeClass('invalid');
    } else if (!isValidLength && !inputHasInvalidClass) {
      $input.removeClass('valid');
      $input.addClass('invalid');
    }
  }
  $(document).ready(function() {
    $('input, textarea').characterCounter();
  });
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("a", ["5"], function($) {
  $(document).ready(function() {
    $(document).on('click.chip', '.chip .material-icons', function(e) {
      $(this).parent().remove();
    });
  });
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("b", ["5"], function($) {
  $.fn.scrollTo = function(elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };
  $.fn.dropdown = function(option) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrain_width: true,
      hover: false,
      gutter: 0,
      belowOrigin: false,
      alignment: 'left'
    };
    this.each(function() {
      var origin = $(this);
      var options = $.extend({}, defaults, option);
      var activates = $("#" + origin.attr('data-activates'));
      function updateOptions() {
        if (origin.data('induration') !== undefined)
          options.inDuration = origin.data('inDuration');
        if (origin.data('outduration') !== undefined)
          options.outDuration = origin.data('outDuration');
        if (origin.data('constrainwidth') !== undefined)
          options.constrain_width = origin.data('constrainwidth');
        if (origin.data('hover') !== undefined)
          options.hover = origin.data('hover');
        if (origin.data('gutter') !== undefined)
          options.gutter = origin.data('gutter');
        if (origin.data('beloworigin') !== undefined)
          options.belowOrigin = origin.data('beloworigin');
        if (origin.data('alignment') !== undefined)
          options.alignment = origin.data('alignment');
      }
      updateOptions();
      origin.after(activates);
      function placeDropdown() {
        updateOptions();
        activates.addClass('active');
        if (options.constrain_width === true) {
          activates.css('width', origin.outerWidth());
        } else {
          activates.css('white-space', 'nowrap');
        }
        var offset = 0;
        if (options.belowOrigin === true) {
          offset = origin.height();
        }
        var offsetLeft = origin.offset().left;
        var activatesLeft,
            width_difference,
            gutter_spacing;
        if (offsetLeft + activates.innerWidth() > $(window).width()) {
          options.alignment = 'right';
        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
          options.alignment = 'left';
        }
        if (options.alignment === 'left') {
          width_difference = 0;
          gutter_spacing = options.gutter;
          activatesLeft = origin.position().left + width_difference + gutter_spacing;
          activates.css({left: activatesLeft});
        } else if (options.alignment === 'right') {
          var offsetRight = $(window).width() - offsetLeft - origin.innerWidth();
          width_difference = 0;
          gutter_spacing = options.gutter;
          activatesLeft = ($(window).width() - origin.position().left - origin.innerWidth()) + gutter_spacing;
          activates.css({right: activatesLeft});
        }
        activates.css({
          position: 'absolute',
          top: origin.position().top + offset
        });
        activates.stop(true, true).css('opacity', 0).slideDown({
          queue: false,
          duration: options.inDuration,
          easing: 'easeOutCubic',
          complete: function() {
            $(this).css('height', '');
          }
        }).animate({opacity: 1}, {
          queue: false,
          duration: options.inDuration,
          easing: 'easeOutSine'
        });
      }
      function hideDropdown() {
        activates.fadeOut(options.outDuration);
        activates.removeClass('active');
      }
      if (options.hover) {
        var open = false;
        origin.unbind('click.' + origin.attr('id'));
        origin.on('mouseenter', function(e) {
          if (open === false) {
            placeDropdown();
            open = true;
          }
        });
        origin.on('mouseleave', function(e) {
          var toEl = e.toElement || e.relatedTarget;
          if (!$(toEl).closest('.dropdown-content').is(activates)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });
        activates.on('mouseleave', function(e) {
          var toEl = e.toElement || e.relatedTarget;
          if (!$(toEl).closest('.dropdown-button').is(origin)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });
      } else {
        origin.unbind('click.' + origin.attr('id'));
        origin.bind('click.' + origin.attr('id'), function(e) {
          if (origin[0] == e.currentTarget && ($(e.target).closest('.dropdown-content').length === 0)) {
            e.preventDefault();
            placeDropdown();
          } else {
            if (origin.hasClass('active')) {
              hideDropdown();
              $(document).unbind('click.' + activates.attr('id'));
            }
          }
          if (activates.hasClass('active')) {
            $(document).bind('click.' + activates.attr('id'), function(e) {
              if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length > 0)) {
                hideDropdown();
                $(document).unbind('click.' + activates.attr('id'));
              }
            });
          }
        });
      }
      origin.on('open', placeDropdown);
      origin.on('close', hideDropdown);
    });
  };
  $(document).ready(function() {
    $('.dropdown-button').dropdown();
  });
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("c", ["5"], function(jQuery) {
  jQuery.easing['jswing'] = jQuery.easing['swing'];
  jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
      return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return c / 2 * t * t + b;
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return c / 2 * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
      return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return c / 2 * t * t * t * t + b;
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return c / 2 * t * t * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
      return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
      return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
      if (t == 0)
        return b;
      if (t == d)
        return b + c;
      if ((t /= d / 2) < 1)
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0)
        return b;
      if ((t /= d) == 1)
        return b + c;
      if (!p)
        p = d * .3;
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else
        var s = p / (2 * Math.PI) * Math.asin(c / a);
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0)
        return b;
      if ((t /= d) == 1)
        return b + c;
      if (!p)
        p = d * .3;
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else
        var s = p / (2 * Math.PI) * Math.asin(c / a);
      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0)
        return b;
      if ((t /= d / 2) == 2)
        return b + c;
      if (!p)
        p = d * (.3 * 1.5);
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else
        var s = p / (2 * Math.PI) * Math.asin(c / a);
      if (t < 1)
        return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
      if (s == undefined)
        s = 1.70158;
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
      if (s == undefined)
        s = 1.70158;
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
      if (s == undefined)
        s = 1.70158;
      if ((t /= d / 2) < 1)
        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
      return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
      return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
      if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
      } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
      } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
      } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
      }
    },
    easeInOutBounce: function(x, t, b, c, d) {
      if (t < d / 2)
        return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
      return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
  });
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
(function(window, document, exportName, undefined) {
  'use strict';
  var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
  var TEST_ELEMENT = document.createElement('div');
  var TYPE_FUNCTION = 'function';
  var round = Math.round;
  var abs = Math.abs;
  var now = Date.now;
  function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
  }
  function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
      each(arg, context[fn], context);
      return true;
    }
    return false;
  }
  function each(obj, iterator, context) {
    var i;
    if (!obj) {
      return;
    }
    if (obj.forEach) {
      obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
      i = 0;
      while (i < obj.length) {
        iterator.call(context, obj[i], i, obj);
        i++;
      }
    } else {
      for (i in obj) {
        obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
      }
    }
  }
  function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
      var e = new Error('get-stack-trace');
      var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
      var log = window.console && (window.console.warn || window.console.log);
      if (log) {
        log.call(window.console, deprecationMessage, stack);
      }
      return method.apply(this, arguments);
    };
  }
  var assign;
  if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  } else {
    assign = Object.assign;
  }
  var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
      if (!merge || (merge && dest[keys[i]] === undefined)) {
        dest[keys[i]] = src[keys[i]];
      }
      i++;
    }
    return dest;
  }, 'extend', 'Use `assign`.');
  var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
  }, 'merge', 'Use `assign`.');
  function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;
    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;
    if (properties) {
      assign(childP, properties);
    }
  }
  function bindFn(fn, context) {
    return function boundFn() {
      return fn.apply(context, arguments);
    };
  }
  function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
      return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
  }
  function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
  }
  function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
      target.addEventListener(type, handler, false);
    });
  }
  function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
      target.removeEventListener(type, handler, false);
    });
  }
  function hasParent(node, parent) {
    while (node) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  function inStr(str, find) {
    return str.indexOf(find) > -1;
  }
  function splitStr(str) {
    return str.trim().split(/\s+/g);
  }
  function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
      return src.indexOf(find);
    } else {
      var i = 0;
      while (i < src.length) {
        if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
          return i;
        }
        i++;
      }
      return -1;
    }
  }
  function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
  }
  function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;
    while (i < src.length) {
      var val = key ? src[i][key] : src[i];
      if (inArray(values, val) < 0) {
        results.push(src[i]);
      }
      values[i] = val;
      i++;
    }
    if (sort) {
      if (!key) {
        results = results.sort();
      } else {
        results = results.sort(function sortUniqueArray(a, b) {
          return a[key] > b[key];
        });
      }
    }
    return results;
  }
  function prefixed(obj, property) {
    var prefix,
        prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);
    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
      prefix = VENDOR_PREFIXES[i];
      prop = (prefix) ? prefix + camelProp : property;
      if (prop in obj) {
        return prop;
      }
      i++;
    }
    return undefined;
  }
  var _uniqueId = 1;
  function uniqueId() {
    return _uniqueId++;
  }
  function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
  }
  var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
  var SUPPORT_TOUCH = ('ontouchstart' in window);
  var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
  var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
  var INPUT_TYPE_TOUCH = 'touch';
  var INPUT_TYPE_PEN = 'pen';
  var INPUT_TYPE_MOUSE = 'mouse';
  var INPUT_TYPE_KINECT = 'kinect';
  var COMPUTE_INTERVAL = 25;
  var INPUT_START = 1;
  var INPUT_MOVE = 2;
  var INPUT_END = 4;
  var INPUT_CANCEL = 8;
  var DIRECTION_NONE = 1;
  var DIRECTION_LEFT = 2;
  var DIRECTION_RIGHT = 4;
  var DIRECTION_UP = 8;
  var DIRECTION_DOWN = 16;
  var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
  var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
  var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
  var PROPS_XY = ['x', 'y'];
  var PROPS_CLIENT_XY = ['clientX', 'clientY'];
  function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;
    this.domHandler = function(ev) {
      if (boolOrFn(manager.options.enable, [manager])) {
        self.handler(ev);
      }
    };
    this.init();
  }
  Input.prototype = {
    handler: function() {},
    init: function() {
      this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },
    destroy: function() {
      this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
  };
  function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;
    if (inputClass) {
      Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
      Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
      Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
      Type = MouseInput;
    } else {
      Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
  }
  function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));
    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;
    if (isFirst) {
      manager.session = {};
    }
    input.eventType = eventType;
    computeInputData(manager, input);
    manager.emit('hammer.input', input);
    manager.recognize(input);
    manager.session.prevInput = input;
  }
  function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;
    if (!session.firstInput) {
      session.firstInput = simpleCloneInputData(input);
    }
    if (pointersLength > 1 && !session.firstMultiple) {
      session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
      session.firstMultiple = false;
    }
    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;
    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);
    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length > session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);
    computeIntervalInputData(session, input);
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
      target = input.srcEvent.target;
    }
    input.target = target;
  }
  function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};
    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
      prevDelta = session.prevDelta = {
        x: prevInput.deltaX || 0,
        y: prevInput.deltaY || 0
      };
      offset = session.offsetDelta = {
        x: center.x,
        y: center.y
      };
    }
    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
  }
  function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity,
        velocityX,
        velocityY,
        direction;
    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
      var deltaX = input.deltaX - last.deltaX;
      var deltaY = input.deltaY - last.deltaY;
      var v = getVelocity(deltaTime, deltaX, deltaY);
      velocityX = v.x;
      velocityY = v.y;
      velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
      direction = getDirection(deltaX, deltaY);
      session.lastInterval = input;
    } else {
      velocity = last.velocity;
      velocityX = last.velocityX;
      velocityY = last.velocityY;
      direction = last.direction;
    }
    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
  }
  function simpleCloneInputData(input) {
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
      pointers[i] = {
        clientX: round(input.pointers[i].clientX),
        clientY: round(input.pointers[i].clientY)
      };
      i++;
    }
    return {
      timeStamp: now(),
      pointers: pointers,
      center: getCenter(pointers),
      deltaX: input.deltaX,
      deltaY: input.deltaY
    };
  }
  function getCenter(pointers) {
    var pointersLength = pointers.length;
    if (pointersLength === 1) {
      return {
        x: round(pointers[0].clientX),
        y: round(pointers[0].clientY)
      };
    }
    var x = 0,
        y = 0,
        i = 0;
    while (i < pointersLength) {
      x += pointers[i].clientX;
      y += pointers[i].clientY;
      i++;
    }
    return {
      x: round(x / pointersLength),
      y: round(y / pointersLength)
    };
  }
  function getVelocity(deltaTime, x, y) {
    return {
      x: x / deltaTime || 0,
      y: y / deltaTime || 0
    };
  }
  function getDirection(x, y) {
    if (x === y) {
      return DIRECTION_NONE;
    }
    if (abs(x) >= abs(y)) {
      return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
  }
  function getDistance(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.sqrt((x * x) + (y * y));
  }
  function getAngle(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
  }
  function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
  }
  function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
  }
  var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
  };
  var MOUSE_ELEMENT_EVENTS = 'mousedown';
  var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
  function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;
    this.allow = true;
    this.pressed = false;
    Input.apply(this, arguments);
  }
  inherit(MouseInput, Input, {handler: function MEhandler(ev) {
      var eventType = MOUSE_INPUT_MAP[ev.type];
      if (eventType & INPUT_START && ev.button === 0) {
        this.pressed = true;
      }
      if (eventType & INPUT_MOVE && ev.which !== 1) {
        eventType = INPUT_END;
      }
      if (!this.pressed || !this.allow) {
        return;
      }
      if (eventType & INPUT_END) {
        this.pressed = false;
      }
      this.callback(this.manager, eventType, {
        pointers: [ev],
        changedPointers: [ev],
        pointerType: INPUT_TYPE_MOUSE,
        srcEvent: ev
      });
    }});
  var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
  };
  var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT
  };
  var POINTER_ELEMENT_EVENTS = 'pointerdown';
  var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
  if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
  }
  function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;
    Input.apply(this, arguments);
    this.store = (this.manager.session.pointerEvents = []);
  }
  inherit(PointerEventInput, Input, {handler: function PEhandler(ev) {
      var store = this.store;
      var removePointer = false;
      var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
      var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
      var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
      var isTouch = (pointerType == INPUT_TYPE_TOUCH);
      var storeIndex = inArray(store, ev.pointerId, 'pointerId');
      if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
        if (storeIndex < 0) {
          store.push(ev);
          storeIndex = store.length - 1;
        }
      } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        removePointer = true;
      }
      if (storeIndex < 0) {
        return;
      }
      store[storeIndex] = ev;
      this.callback(this.manager, eventType, {
        pointers: store,
        changedPointers: [ev],
        pointerType: pointerType,
        srcEvent: ev
      });
      if (removePointer) {
        store.splice(storeIndex, 1);
      }
    }});
  var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
  var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
  function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;
    Input.apply(this, arguments);
  }
  inherit(SingleTouchInput, Input, {handler: function TEhandler(ev) {
      var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
      if (type === INPUT_START) {
        this.started = true;
      }
      if (!this.started) {
        return;
      }
      var touches = normalizeSingleTouches.call(this, ev, type);
      if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
        this.started = false;
      }
      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }});
  function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);
    if (type & (INPUT_END | INPUT_CANCEL)) {
      all = uniqueArray(all.concat(changed), 'identifier', true);
    }
    return [all, changed];
  }
  var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
  function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
    Input.apply(this, arguments);
  }
  inherit(TouchInput, Input, {handler: function MTEhandler(ev) {
      var type = TOUCH_INPUT_MAP[ev.type];
      var touches = getTouches.call(this, ev, type);
      if (!touches) {
        return;
      }
      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }});
  function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
      targetIds[allTouches[0].identifier] = true;
      return [allTouches, allTouches];
    }
    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;
    targetTouches = allTouches.filter(function(touch) {
      return hasParent(touch.target, target);
    });
    if (type === INPUT_START) {
      i = 0;
      while (i < targetTouches.length) {
        targetIds[targetTouches[i].identifier] = true;
        i++;
      }
    }
    i = 0;
    while (i < changedTouches.length) {
      if (targetIds[changedTouches[i].identifier]) {
        changedTargetTouches.push(changedTouches[i]);
      }
      if (type & (INPUT_END | INPUT_CANCEL)) {
        delete targetIds[changedTouches[i].identifier];
      }
      i++;
    }
    if (!changedTargetTouches.length) {
      return;
    }
    return [uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
  }
  function TouchMouseInput() {
    Input.apply(this, arguments);
    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
  }
  inherit(TouchMouseInput, Input, {
    handler: function TMEhandler(manager, inputEvent, inputData) {
      var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
          isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);
      if (isTouch) {
        this.mouse.allow = false;
      } else if (isMouse && !this.mouse.allow) {
        return;
      }
      if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
        this.mouse.allow = true;
      }
      this.callback(manager, inputEvent, inputData);
    },
    destroy: function destroy() {
      this.touch.destroy();
      this.mouse.destroy();
    }
  });
  var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
  var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
  var TOUCH_ACTION_COMPUTE = 'compute';
  var TOUCH_ACTION_AUTO = 'auto';
  var TOUCH_ACTION_MANIPULATION = 'manipulation';
  var TOUCH_ACTION_NONE = 'none';
  var TOUCH_ACTION_PAN_X = 'pan-x';
  var TOUCH_ACTION_PAN_Y = 'pan-y';
  function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
  }
  TouchAction.prototype = {
    set: function(value) {
      if (value == TOUCH_ACTION_COMPUTE) {
        value = this.compute();
      }
      if (NATIVE_TOUCH_ACTION && this.manager.element.style) {
        this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
      }
      this.actions = value.toLowerCase().trim();
    },
    update: function() {
      this.set(this.manager.options.touchAction);
    },
    compute: function() {
      var actions = [];
      each(this.manager.recognizers, function(recognizer) {
        if (boolOrFn(recognizer.options.enable, [recognizer])) {
          actions = actions.concat(recognizer.getTouchAction());
        }
      });
      return cleanTouchActions(actions.join(' '));
    },
    preventDefaults: function(input) {
      if (NATIVE_TOUCH_ACTION) {
        return;
      }
      var srcEvent = input.srcEvent;
      var direction = input.offsetDirection;
      if (this.manager.session.prevented) {
        srcEvent.preventDefault();
        return;
      }
      var actions = this.actions;
      var hasNone = inStr(actions, TOUCH_ACTION_NONE);
      var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
      var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
      if (hasNone) {
        var isTapPointer = input.pointers.length === 1;
        var isTapMovement = input.distance < 2;
        var isTapTouchTime = input.deltaTime < 250;
        if (isTapPointer && isTapMovement && isTapTouchTime) {
          return;
        }
      }
      if (hasPanX && hasPanY) {
        return;
      }
      if (hasNone || (hasPanY && direction & DIRECTION_HORIZONTAL) || (hasPanX && direction & DIRECTION_VERTICAL)) {
        return this.preventSrc(srcEvent);
      }
    },
    preventSrc: function(srcEvent) {
      this.manager.session.prevented = true;
      srcEvent.preventDefault();
    }
  };
  function cleanTouchActions(actions) {
    if (inStr(actions, TOUCH_ACTION_NONE)) {
      return TOUCH_ACTION_NONE;
    }
    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
    if (hasPanX && hasPanY) {
      return TOUCH_ACTION_NONE;
    }
    if (hasPanX || hasPanY) {
      return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
      return TOUCH_ACTION_MANIPULATION;
    }
    return TOUCH_ACTION_AUTO;
  }
  var STATE_POSSIBLE = 1;
  var STATE_BEGAN = 2;
  var STATE_CHANGED = 4;
  var STATE_ENDED = 8;
  var STATE_RECOGNIZED = STATE_ENDED;
  var STATE_CANCELLED = 16;
  var STATE_FAILED = 32;
  function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});
    this.id = uniqueId();
    this.manager = null;
    this.options.enable = ifUndefined(this.options.enable, true);
    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
  }
  Recognizer.prototype = {
    defaults: {},
    set: function(options) {
      assign(this.options, options);
      this.manager && this.manager.touchAction.update();
      return this;
    },
    recognizeWith: function(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
        return this;
      }
      var simultaneous = this.simultaneous;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      if (!simultaneous[otherRecognizer.id]) {
        simultaneous[otherRecognizer.id] = otherRecognizer;
        otherRecognizer.recognizeWith(this);
      }
      return this;
    },
    dropRecognizeWith: function(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
        return this;
      }
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      delete this.simultaneous[otherRecognizer.id];
      return this;
    },
    requireFailure: function(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
        return this;
      }
      var requireFail = this.requireFail;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      if (inArray(requireFail, otherRecognizer) === -1) {
        requireFail.push(otherRecognizer);
        otherRecognizer.requireFailure(this);
      }
      return this;
    },
    dropRequireFailure: function(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
        return this;
      }
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      var index = inArray(this.requireFail, otherRecognizer);
      if (index > -1) {
        this.requireFail.splice(index, 1);
      }
      return this;
    },
    hasRequireFailures: function() {
      return this.requireFail.length > 0;
    },
    canRecognizeWith: function(otherRecognizer) {
      return !!this.simultaneous[otherRecognizer.id];
    },
    emit: function(input) {
      var self = this;
      var state = this.state;
      function emit(event) {
        self.manager.emit(event, input);
      }
      if (state < STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }
      emit(self.options.event);
      if (input.additionalEvent) {
        emit(input.additionalEvent);
      }
      if (state >= STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }
    },
    tryEmit: function(input) {
      if (this.canEmit()) {
        return this.emit(input);
      }
      this.state = STATE_FAILED;
    },
    canEmit: function() {
      var i = 0;
      while (i < this.requireFail.length) {
        if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
          return false;
        }
        i++;
      }
      return true;
    },
    recognize: function(inputData) {
      var inputDataClone = assign({}, inputData);
      if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
        this.reset();
        this.state = STATE_FAILED;
        return;
      }
      if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
        this.state = STATE_POSSIBLE;
      }
      this.state = this.process(inputDataClone);
      if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
        this.tryEmit(inputDataClone);
      }
    },
    process: function(inputData) {},
    getTouchAction: function() {},
    reset: function() {}
  };
  function stateStr(state) {
    if (state & STATE_CANCELLED) {
      return 'cancel';
    } else if (state & STATE_ENDED) {
      return 'end';
    } else if (state & STATE_CHANGED) {
      return 'move';
    } else if (state & STATE_BEGAN) {
      return 'start';
    }
    return '';
  }
  function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
      return 'down';
    } else if (direction == DIRECTION_UP) {
      return 'up';
    } else if (direction == DIRECTION_LEFT) {
      return 'left';
    } else if (direction == DIRECTION_RIGHT) {
      return 'right';
    }
    return '';
  }
  function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
      return manager.get(otherRecognizer);
    }
    return otherRecognizer;
  }
  function AttrRecognizer() {
    Recognizer.apply(this, arguments);
  }
  inherit(AttrRecognizer, Recognizer, {
    defaults: {pointers: 1},
    attrTest: function(input) {
      var optionPointers = this.options.pointers;
      return optionPointers === 0 || input.pointers.length === optionPointers;
    },
    process: function(input) {
      var state = this.state;
      var eventType = input.eventType;
      var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
      var isValid = this.attrTest(input);
      if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
        return state | STATE_CANCELLED;
      } else if (isRecognized || isValid) {
        if (eventType & INPUT_END) {
          return state | STATE_ENDED;
        } else if (!(state & STATE_BEGAN)) {
          return STATE_BEGAN;
        }
        return state | STATE_CHANGED;
      }
      return STATE_FAILED;
    }
  });
  function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);
    this.pX = null;
    this.pY = null;
  }
  inherit(PanRecognizer, AttrRecognizer, {
    defaults: {
      event: 'pan',
      threshold: 10,
      pointers: 1,
      direction: DIRECTION_ALL
    },
    getTouchAction: function() {
      var direction = this.options.direction;
      var actions = [];
      if (direction & DIRECTION_HORIZONTAL) {
        actions.push(TOUCH_ACTION_PAN_Y);
      }
      if (direction & DIRECTION_VERTICAL) {
        actions.push(TOUCH_ACTION_PAN_X);
      }
      return actions;
    },
    directionTest: function(input) {
      var options = this.options;
      var hasMoved = true;
      var distance = input.distance;
      var direction = input.direction;
      var x = input.deltaX;
      var y = input.deltaY;
      if (!(direction & options.direction)) {
        if (options.direction & DIRECTION_HORIZONTAL) {
          direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
          hasMoved = x != this.pX;
          distance = Math.abs(input.deltaX);
        } else {
          direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
          hasMoved = y != this.pY;
          distance = Math.abs(input.deltaY);
        }
      }
      input.direction = direction;
      return hasMoved && distance > options.threshold && direction & options.direction;
    },
    attrTest: function(input) {
      return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },
    emit: function(input) {
      this.pX = input.deltaX;
      this.pY = input.deltaY;
      var direction = directionStr(input.direction);
      if (direction) {
        input.additionalEvent = this.options.event + direction;
      }
      this._super.emit.call(this, input);
    }
  });
  function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(PinchRecognizer, AttrRecognizer, {
    defaults: {
      event: 'pinch',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function() {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function(input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },
    emit: function(input) {
      if (input.scale !== 1) {
        var inOut = input.scale < 1 ? 'in' : 'out';
        input.additionalEvent = this.options.event + inOut;
      }
      this._super.emit.call(this, input);
    }
  });
  function PressRecognizer() {
    Recognizer.apply(this, arguments);
    this._timer = null;
    this._input = null;
  }
  inherit(PressRecognizer, Recognizer, {
    defaults: {
      event: 'press',
      pointers: 1,
      time: 251,
      threshold: 9
    },
    getTouchAction: function() {
      return [TOUCH_ACTION_AUTO];
    },
    process: function(input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTime = input.deltaTime > options.time;
      this._input = input;
      if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
        this.reset();
      } else if (input.eventType & INPUT_START) {
        this.reset();
        this._timer = setTimeoutContext(function() {
          this.state = STATE_RECOGNIZED;
          this.tryEmit();
        }, options.time, this);
      } else if (input.eventType & INPUT_END) {
        return STATE_RECOGNIZED;
      }
      return STATE_FAILED;
    },
    reset: function() {
      clearTimeout(this._timer);
    },
    emit: function(input) {
      if (this.state !== STATE_RECOGNIZED) {
        return;
      }
      if (input && (input.eventType & INPUT_END)) {
        this.manager.emit(this.options.event + 'up', input);
      } else {
        this._input.timeStamp = now();
        this.manager.emit(this.options.event, this._input);
      }
    }
  });
  function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(RotateRecognizer, AttrRecognizer, {
    defaults: {
      event: 'rotate',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function() {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function(input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
  });
  function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(SwipeRecognizer, AttrRecognizer, {
    defaults: {
      event: 'swipe',
      threshold: 10,
      velocity: 0.3,
      direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
      pointers: 1
    },
    getTouchAction: function() {
      return PanRecognizer.prototype.getTouchAction.call(this);
    },
    attrTest: function(input) {
      var direction = this.options.direction;
      var velocity;
      if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
        velocity = input.overallVelocity;
      } else if (direction & DIRECTION_HORIZONTAL) {
        velocity = input.overallVelocityX;
      } else if (direction & DIRECTION_VERTICAL) {
        velocity = input.overallVelocityY;
      }
      return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },
    emit: function(input) {
      var direction = directionStr(input.offsetDirection);
      if (direction) {
        this.manager.emit(this.options.event + direction, input);
      }
      this.manager.emit(this.options.event, input);
    }
  });
  function TapRecognizer() {
    Recognizer.apply(this, arguments);
    this.pTime = false;
    this.pCenter = false;
    this._timer = null;
    this._input = null;
    this.count = 0;
  }
  inherit(TapRecognizer, Recognizer, {
    defaults: {
      event: 'tap',
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 9,
      posThreshold: 10
    },
    getTouchAction: function() {
      return [TOUCH_ACTION_MANIPULATION];
    },
    process: function(input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTouchTime = input.deltaTime < options.time;
      this.reset();
      if ((input.eventType & INPUT_START) && (this.count === 0)) {
        return this.failTimeout();
      }
      if (validMovement && validTouchTime && validPointers) {
        if (input.eventType != INPUT_END) {
          return this.failTimeout();
        }
        var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
        var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
        this.pTime = input.timeStamp;
        this.pCenter = input.center;
        if (!validMultiTap || !validInterval) {
          this.count = 1;
        } else {
          this.count += 1;
        }
        this._input = input;
        var tapCount = this.count % options.taps;
        if (tapCount === 0) {
          if (!this.hasRequireFailures()) {
            return STATE_RECOGNIZED;
          } else {
            this._timer = setTimeoutContext(function() {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.interval, this);
            return STATE_BEGAN;
          }
        }
      }
      return STATE_FAILED;
    },
    failTimeout: function() {
      this._timer = setTimeoutContext(function() {
        this.state = STATE_FAILED;
      }, this.options.interval, this);
      return STATE_FAILED;
    },
    reset: function() {
      clearTimeout(this._timer);
    },
    emit: function() {
      if (this.state == STATE_RECOGNIZED) {
        this._input.tapCount = this.count;
        this.manager.emit(this.options.event, this._input);
      }
    }
  });
  function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
  }
  Hammer.VERSION = '2.0.6';
  Hammer.defaults = {
    domEvents: false,
    touchAction: TOUCH_ACTION_COMPUTE,
    enable: true,
    inputTarget: null,
    inputClass: null,
    preset: [[RotateRecognizer, {enable: false}], [PinchRecognizer, {enable: false}, ['rotate']], [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}], [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']], [TapRecognizer], [TapRecognizer, {
      event: 'doubletap',
      taps: 2
    }, ['tap']], [PressRecognizer]],
    cssProps: {
      userSelect: 'none',
      touchSelect: 'none',
      touchCallout: 'none',
      contentZooming: 'none',
      userDrag: 'none',
      tapHighlightColor: 'rgba(0,0,0,0)'
    }
  };
  var STOP = 1;
  var FORCED_STOP = 2;
  function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(this.options.recognizers, function(item) {
      var recognizer = this.add(new (item[0])(item[1]));
      item[2] && recognizer.recognizeWith(item[2]);
      item[3] && recognizer.requireFailure(item[3]);
    }, this);
  }
  Manager.prototype = {
    set: function(options) {
      assign(this.options, options);
      if (options.touchAction) {
        this.touchAction.update();
      }
      if (options.inputTarget) {
        this.input.destroy();
        this.input.target = options.inputTarget;
        this.input.init();
      }
      return this;
    },
    stop: function(force) {
      this.session.stopped = force ? FORCED_STOP : STOP;
    },
    recognize: function(inputData) {
      var session = this.session;
      if (session.stopped) {
        return;
      }
      this.touchAction.preventDefaults(inputData);
      var recognizer;
      var recognizers = this.recognizers;
      var curRecognizer = session.curRecognizer;
      if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
        curRecognizer = session.curRecognizer = null;
      }
      var i = 0;
      while (i < recognizers.length) {
        recognizer = recognizers[i];
        if (session.stopped !== FORCED_STOP && (!curRecognizer || recognizer == curRecognizer || recognizer.canRecognizeWith(curRecognizer))) {
          recognizer.recognize(inputData);
        } else {
          recognizer.reset();
        }
        if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
          curRecognizer = session.curRecognizer = recognizer;
        }
        i++;
      }
    },
    get: function(recognizer) {
      if (recognizer instanceof Recognizer) {
        return recognizer;
      }
      var recognizers = this.recognizers;
      for (var i = 0; i < recognizers.length; i++) {
        if (recognizers[i].options.event == recognizer) {
          return recognizers[i];
        }
      }
      return null;
    },
    add: function(recognizer) {
      if (invokeArrayArg(recognizer, 'add', this)) {
        return this;
      }
      var existing = this.get(recognizer.options.event);
      if (existing) {
        this.remove(existing);
      }
      this.recognizers.push(recognizer);
      recognizer.manager = this;
      this.touchAction.update();
      return recognizer;
    },
    remove: function(recognizer) {
      if (invokeArrayArg(recognizer, 'remove', this)) {
        return this;
      }
      recognizer = this.get(recognizer);
      if (recognizer) {
        var recognizers = this.recognizers;
        var index = inArray(recognizers, recognizer);
        if (index !== -1) {
          recognizers.splice(index, 1);
          this.touchAction.update();
        }
      }
      return this;
    },
    on: function(events, handler) {
      var handlers = this.handlers;
      each(splitStr(events), function(event) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      });
      return this;
    },
    off: function(events, handler) {
      var handlers = this.handlers;
      each(splitStr(events), function(event) {
        if (!handler) {
          delete handlers[event];
        } else {
          handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
        }
      });
      return this;
    },
    emit: function(event, data) {
      if (this.options.domEvents) {
        triggerDomEvent(event, data);
      }
      var handlers = this.handlers[event] && this.handlers[event].slice();
      if (!handlers || !handlers.length) {
        return;
      }
      data.type = event;
      data.preventDefault = function() {
        data.srcEvent.preventDefault();
      };
      var i = 0;
      while (i < handlers.length) {
        handlers[i](data);
        i++;
      }
    },
    destroy: function() {
      this.element && toggleCssProps(this, false);
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    }
  };
  function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
      return;
    }
    each(manager.options.cssProps, function(value, name) {
      element.style[prefixed(element.style, name)] = add ? value : '';
    });
  }
  function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
  }
  assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,
    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,
    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,
    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,
    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,
    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,
    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
  });
  var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {}));
  freeGlobal.Hammer = Hammer;
  if (typeof define === 'function' && define.amd) {
    define("d", [], function() {
      return Hammer;
    });
  } else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
  } else {
    window[exportName] = Hammer;
  }
})(window, document, 'Hammer');

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("e", ["d"], function(main) {
  return main;
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define("f", ["5", "e"], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('hammerjs'));
  } else {
    factory(jQuery, Hammer);
  }
}(function($, Hammer) {
  function hammerify(el, options) {
    var $el = $(el);
    if (!$el.data("hammer")) {
      $el.data("hammer", new Hammer($el[0], options));
    }
  }
  $.fn.hammer = function(options) {
    return this.each(function() {
      hammerify(this, options);
    });
  };
  Hammer.Manager.prototype.emit = (function(originalEmit) {
    return function(type, data) {
      originalEmit.call(this, type, data);
      $(this.element).trigger({
        type: type,
        gesture: data
      });
    };
  })(Hammer.Manager.prototype.emit);
}));

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("10", ["5"], function($) {
  var _stack = 0,
      _lastID = 0,
      _generateID = function() {
        _lastID++;
        return 'materialize-lean-overlay-' + _lastID;
      };
  $.fn.extend({openModal: function(options) {
      $('body').css('overflow', 'hidden');
      var defaults = {
        opacity: 0.5,
        in_duration: 350,
        out_duration: 250,
        ready: undefined,
        complete: undefined,
        dismissible: true,
        starting_top: '4%'
      },
          overlayID = _generateID(),
          $modal = $(this),
          $overlay = $('<div class="lean-overlay"></div>'),
          lStack = (++_stack);
      $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);
      $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);
      $("body").append($overlay);
      options = $.extend(defaults, options);
      if (options.dismissible) {
        $overlay.click(function() {
          $modal.closeModal(options);
        });
        $(document).on('keyup.leanModal' + overlayID, function(e) {
          if (e.keyCode === 27) {
            $modal.closeModal(options);
          }
        });
      }
      $modal.find(".modal-close").on('click.close', function(e) {
        $modal.closeModal(options);
      });
      $overlay.css({
        display: "block",
        opacity: 0
      });
      $modal.css({
        display: "block",
        opacity: 0
      });
      $overlay.velocity({opacity: options.opacity}, {
        duration: options.in_duration,
        queue: false,
        ease: "easeOutCubic"
      });
      $modal.data('associated-overlay', $overlay[0]);
      if ($modal.hasClass('bottom-sheet')) {
        $modal.velocity({
          bottom: "0",
          opacity: 1
        }, {
          duration: options.in_duration,
          queue: false,
          ease: "easeOutCubic",
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready();
            }
          }
        });
      } else {
        $.Velocity.hook($modal, "scaleX", 0.7);
        $modal.css({top: options.starting_top});
        $modal.velocity({
          top: "10%",
          opacity: 1,
          scaleX: '1'
        }, {
          duration: options.in_duration,
          queue: false,
          ease: "easeOutCubic",
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready();
            }
          }
        });
      }
    }});
  $.fn.extend({closeModal: function(options) {
      var defaults = {
        out_duration: 250,
        complete: undefined
      },
          $modal = $(this),
          overlayID = $modal.data('overlay-id'),
          $overlay = $('#' + overlayID);
      options = $.extend(defaults, options);
      $('body').css('overflow', '');
      $modal.find('.modal-close').off('click.close');
      $(document).off('keyup.leanModal' + overlayID);
      $overlay.velocity({opacity: 0}, {
        duration: options.out_duration,
        queue: false,
        ease: "easeOutQuart"
      });
      if ($modal.hasClass('bottom-sheet')) {
        $modal.velocity({
          bottom: "-100%",
          opacity: 0
        }, {
          duration: options.out_duration,
          queue: false,
          ease: "easeOutCubic",
          complete: function() {
            $overlay.css({display: "none"});
            if (typeof(options.complete) === "function") {
              options.complete();
            }
            $overlay.remove();
            _stack--;
          }
        });
      } else {
        $modal.velocity({
          top: options.starting_top,
          opacity: 0,
          scaleX: 0.7
        }, {
          duration: options.out_duration,
          complete: function() {
            $(this).css('display', 'none');
            if (typeof(options.complete) === "function") {
              options.complete();
            }
            $overlay.remove();
            _stack--;
          }
        });
      }
    }});
  $.fn.extend({leanModal: function(option) {
      return this.each(function() {
        var defaults = {starting_top: '4%'},
            options = $.extend(defaults, option);
        $(this).click(function(e) {
          options.starting_top = ($(this).offset().top - $(window).scrollTop()) / 1.15;
          var modal_id = $(this).attr("href") || '#' + $(this).data('target');
          $(modal_id).openModal(options);
          e.preventDefault();
        });
      });
    }});
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("11", ["5"], function($) {
  $.fn.materialbox = function() {
    return this.each(function() {
      if ($(this).hasClass('initialized')) {
        return;
      }
      $(this).addClass('initialized');
      var overlayActive = false;
      var doneAnimating = true;
      var inDuration = 275;
      var outDuration = 200;
      var origin = $(this);
      var placeholder = $('<div></div>').addClass('material-placeholder');
      var originalWidth = 0;
      var originalHeight = 0;
      origin.wrap(placeholder);
      origin.on('click', function() {
        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.width();
        var originalHeight = origin.height();
        if (doneAnimating === false) {
          returnToOriginal();
          return false;
        } else if (overlayActive && doneAnimating === true) {
          returnToOriginal();
          return false;
        }
        doneAnimating = false;
        origin.addClass('active');
        overlayActive = true;
        placeholder.css({
          width: placeholder[0].getBoundingClientRect().width,
          height: placeholder[0].getBoundingClientRect().height,
          position: 'relative',
          top: 0,
          left: 0
        });
        origin.css({
          position: 'absolute',
          'z-index': 1000
        }).data('width', originalWidth).data('height', originalHeight);
        var overlay = $('<div id="materialbox-overlay"></div>').css({opacity: 0}).click(function() {
          if (doneAnimating === true)
            returnToOriginal();
        });
        $('body').append(overlay);
        overlay.velocity({opacity: 1}, {
          duration: inDuration,
          queue: false,
          easing: 'easeOutQuad'
        });
        if (origin.data('caption') !== "") {
          var $photo_caption = $('<div class="materialbox-caption"></div>');
          $photo_caption.text(origin.data('caption'));
          $('body').append($photo_caption);
          $photo_caption.css({"display": "inline"});
          $photo_caption.velocity({opacity: 1}, {
            duration: inDuration,
            queue: false,
            easing: 'easeOutQuad'
          });
        }
        var ratio = 0;
        var widthPercent = originalWidth / windowWidth;
        var heightPercent = originalHeight / windowHeight;
        var newWidth = 0;
        var newHeight = 0;
        if (widthPercent > heightPercent) {
          ratio = originalHeight / originalWidth;
          newWidth = windowWidth * 0.9;
          newHeight = windowWidth * 0.9 * ratio;
        } else {
          ratio = originalWidth / originalHeight;
          newWidth = (windowHeight * 0.9) * ratio;
          newHeight = windowHeight * 0.9;
        }
        if (origin.hasClass('responsive-img')) {
          origin.velocity({
            'max-width': newWidth,
            'width': originalWidth
          }, {
            duration: 0,
            queue: false,
            complete: function() {
              origin.css({
                left: 0,
                top: 0
              }).velocity({
                height: newHeight,
                width: newWidth,
                left: $(document).scrollLeft() + windowWidth / 2 - origin.parent('.material-placeholder').offset().left - newWidth / 2,
                top: $(document).scrollTop() + windowHeight / 2 - origin.parent('.material-placeholder').offset().top - newHeight / 2
              }, {
                duration: inDuration,
                queue: false,
                easing: 'easeOutQuad',
                complete: function() {
                  doneAnimating = true;
                }
              });
            }
          });
        } else {
          origin.css('left', 0).css('top', 0).velocity({
            height: newHeight,
            width: newWidth,
            left: $(document).scrollLeft() + windowWidth / 2 - origin.parent('.material-placeholder').offset().left - newWidth / 2,
            top: $(document).scrollTop() + windowHeight / 2 - origin.parent('.material-placeholder').offset().top - newHeight / 2
          }, {
            duration: inDuration,
            queue: false,
            easing: 'easeOutQuad',
            complete: function() {
              doneAnimating = true;
            }
          });
        }
      });
      $(window).scroll(function() {
        if (overlayActive) {
          returnToOriginal();
        }
      });
      $(document).keyup(function(e) {
        if (e.keyCode === 27 && doneAnimating === true) {
          if (overlayActive) {
            returnToOriginal();
          }
        }
      });
      function returnToOriginal() {
        doneAnimating = false;
        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.data('width');
        var originalHeight = origin.data('height');
        origin.velocity("stop", true);
        $('#materialbox-overlay').velocity("stop", true);
        $('.materialbox-caption').velocity("stop", true);
        $('#materialbox-overlay').velocity({opacity: 0}, {
          duration: outDuration,
          queue: false,
          easing: 'easeOutQuad',
          complete: function() {
            overlayActive = false;
            $(this).remove();
          }
        });
        origin.velocity({
          width: originalWidth,
          height: originalHeight,
          left: 0,
          top: 0
        }, {
          duration: outDuration,
          queue: false,
          easing: 'easeOutQuad'
        });
        $('.materialbox-caption').velocity({opacity: 0}, {
          duration: outDuration,
          queue: false,
          easing: 'easeOutQuad',
          complete: function() {
            placeholder.css({
              height: '',
              width: '',
              position: '',
              top: '',
              left: ''
            });
            origin.css({
              height: '',
              top: '',
              left: '',
              width: '',
              'max-width': '',
              position: '',
              'z-index': ''
            });
            origin.removeClass('active');
            doneAnimating = true;
            $(this).remove();
          }
        });
      }
    });
  };
  $(document).ready(function() {
    $('.materialboxed').materialbox();
  });
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("12", ["5"], function($) {
  $.fn.parallax = function() {
    var window_width = $(window).width();
    return this.each(function(i) {
      var $this = $(this);
      $this.addClass('parallax');
      function updateParallax(initial) {
        var container_height;
        if (window_width < 601) {
          container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
        } else {
          container_height = ($this.height() > 0) ? $this.height() : 500;
        }
        var $img = $this.children("img").first();
        var img_height = $img.height();
        var parallax_dist = img_height - container_height;
        var bottom = $this.offset().top + container_height;
        var top = $this.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
        var parallax = Math.round((parallax_dist * percentScrolled));
        if (initial) {
          $img.css('display', 'block');
        }
        if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
          $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
        }
      }
      $this.children("img").one("load", function() {
        updateParallax(true);
      }).each(function() {
        if (this.complete)
          $(this).load();
      });
      $(window).scroll(function() {
        window_width = $(window).width();
        updateParallax(false);
      });
      $(window).resize(function() {
        window_width = $(window).width();
        updateParallax(false);
      });
    });
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("13", ["5"], function($) {
  $(document).ready(function() {
    $.fn.pushpin = function(options) {
      var defaults = {
        top: 0,
        bottom: Infinity,
        offset: 0
      };
      options = $.extend(defaults, options);
      $index = 0;
      return this.each(function() {
        var $uniqueId = Materialize.guid(),
            $this = $(this),
            $original_offset = $(this).offset().top;
        function removePinClasses(object) {
          object.removeClass('pin-top');
          object.removeClass('pinned');
          object.removeClass('pin-bottom');
        }
        function updateElements(objects, scrolled) {
          objects.each(function() {
            if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {
              removePinClasses($(this));
              $(this).css('top', options.offset);
              $(this).addClass('pinned');
            }
            if (scrolled < options.top && !$(this).hasClass('pin-top')) {
              removePinClasses($(this));
              $(this).css('top', 0);
              $(this).addClass('pin-top');
            }
            if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {
              removePinClasses($(this));
              $(this).addClass('pin-bottom');
              $(this).css('top', options.bottom - $original_offset);
            }
          });
        }
        updateElements($this, $(window).scrollTop());
        $(window).on('scroll.' + $uniqueId, function() {
          var $scrolled = $(window).scrollTop() + options.offset;
          updateElements($this, $scrolled);
        });
      });
    };
  });
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("14", ["5"], function($) {
  var jWindow = $(window);
  var elements = [];
  var elementsInView = [];
  var isSpying = false;
  var ticks = 0;
  var unique_id = 1;
  var offset = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  function findElements(top, right, bottom, left) {
    var hits = $();
    $.each(elements, function(i, element) {
      if (element.height() > 0) {
        var elTop = element.offset().top,
            elLeft = element.offset().left,
            elRight = elLeft + element.width(),
            elBottom = elTop + element.height();
        var isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < top);
        if (isIntersect) {
          hits.push(element);
        }
      }
    });
    return hits;
  }
  function onScroll() {
    ++ticks;
    var top = jWindow.scrollTop(),
        left = jWindow.scrollLeft(),
        right = left + jWindow.width(),
        bottom = top + jWindow.height();
    var intersections = findElements(top + offset.top + 200, right + offset.right, bottom + offset.bottom, left + offset.left);
    $.each(intersections, function(i, element) {
      var lastTick = element.data('scrollSpy:ticks');
      if (typeof lastTick != 'number') {
        element.triggerHandler('scrollSpy:enter');
      }
      element.data('scrollSpy:ticks', ticks);
    });
    $.each(elementsInView, function(i, element) {
      var lastTick = element.data('scrollSpy:ticks');
      if (typeof lastTick == 'number' && lastTick !== ticks) {
        element.triggerHandler('scrollSpy:exit');
        element.data('scrollSpy:ticks', null);
      }
    });
    elementsInView = intersections;
  }
  function onWinSize() {
    jWindow.trigger('scrollSpy:winSize');
  }
  var getTime = (Date.now || function() {
    return new Date().getTime();
  });
  function throttle(func, wait, options) {
    var context,
        args,
        result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : getTime();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = getTime();
      if (!previous && options.leading === false)
        previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  }
  ;
  $.scrollSpy = function(selector, options) {
    var visible = [];
    selector = $(selector);
    selector.each(function(i, element) {
      elements.push($(element));
      $(element).data("scrollSpy:id", i);
      $('a[href=#' + $(element).attr('id') + ']').click(function(e) {
        e.preventDefault();
        var offset = $(this.hash).offset().top + 1;
        $('html, body').animate({scrollTop: offset - 200}, {
          duration: 400,
          queue: false,
          easing: 'easeOutCubic'
        });
      });
    });
    options = options || {throttle: 100};
    offset.top = options.offsetTop || 0;
    offset.right = options.offsetRight || 0;
    offset.bottom = options.offsetBottom || 0;
    offset.left = options.offsetLeft || 0;
    var throttledScroll = throttle(onScroll, options.throttle || 100);
    var readyScroll = function() {
      $(document).ready(throttledScroll);
    };
    if (!isSpying) {
      jWindow.on('scroll', readyScroll);
      jWindow.on('resize', readyScroll);
      isSpying = true;
    }
    setTimeout(readyScroll, 0);
    selector.on('scrollSpy:enter', function() {
      visible = $.grep(visible, function(value) {
        return value.height() != 0;
      });
      var $this = $(this);
      if (visible[0]) {
        $('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
        if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
          visible.unshift($(this));
        } else {
          visible.push($(this));
        }
      } else {
        visible.push($(this));
      }
      $('a[href=#' + visible[0].attr('id') + ']').addClass('active');
    });
    selector.on('scrollSpy:exit', function() {
      visible = $.grep(visible, function(value) {
        return value.height() != 0;
      });
      if (visible[0]) {
        $('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
        var $this = $(this);
        visible = $.grep(visible, function(value) {
          return value.attr('id') != $this.attr('id');
        });
        if (visible[0]) {
          $('a[href=#' + visible[0].attr('id') + ']').addClass('active');
        }
      }
    });
    return selector;
  };
  $.winSizeSpy = function(options) {
    $.winSizeSpy = function() {
      return jWindow;
    };
    options = options || {throttle: 100};
    return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
  };
  $.fn.scrollSpy = function(options) {
    return $.scrollSpy($(this), options);
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("15", ["5"], function($) {
  var methods = {
    init: function(options) {
      var defaults = {
        menuWidth: 240,
        edge: 'left',
        closeOnClick: false
      };
      options = $.extend(defaults, options);
      $(this).each(function() {
        var $this = $(this);
        var menu_id = $("#" + $this.attr('data-activates'));
        if (options.menuWidth != 240) {
          menu_id.css('width', options.menuWidth);
        }
        var dragTarget = $('<div class="drag-target"></div>');
        $('body').append(dragTarget);
        if (options.edge == 'left') {
          menu_id.css('left', -1 * (options.menuWidth + 10));
          dragTarget.css({'left': 0});
        } else {
          menu_id.addClass('right-aligned').css('right', -1 * (options.menuWidth + 10)).css('left', '');
          dragTarget.css({'right': 0});
        }
        if (menu_id.hasClass('fixed')) {
          if (window.innerWidth > 992) {
            menu_id.css('left', 0);
          }
        }
        if (menu_id.hasClass('fixed')) {
          $(window).resize(function() {
            if (window.innerWidth > 992) {
              if ($('#sidenav-overlay').css('opacity') !== 0 && menuOut) {
                removeMenu(true);
              } else {
                menu_id.removeAttr('style');
                menu_id.css('width', options.menuWidth);
              }
            } else if (menuOut === false) {
              if (options.edge === 'left')
                menu_id.css('left', -1 * (options.menuWidth + 10));
              else
                menu_id.css('right', -1 * (options.menuWidth + 10));
            }
          });
        }
        if (options.closeOnClick === true) {
          menu_id.on("click.itemclick", "a:not(.collapsible-header)", function() {
            removeMenu();
          });
        }
        function removeMenu(restoreNav) {
          panning = false;
          menuOut = false;
          $('body').css('overflow', '');
          $('#sidenav-overlay').velocity({opacity: 0}, {
            duration: 200,
            queue: false,
            easing: 'easeOutQuad',
            complete: function() {
              $(this).remove();
            }
          });
          if (options.edge === 'left') {
            dragTarget.css({
              width: '',
              right: '',
              left: '0'
            });
            menu_id.velocity({left: -1 * (options.menuWidth + 10)}, {
              duration: 200,
              queue: false,
              easing: 'easeOutCubic',
              complete: function() {
                if (restoreNav === true) {
                  menu_id.removeAttr('style');
                  menu_id.css('width', options.menuWidth);
                }
              }
            });
          } else {
            dragTarget.css({
              width: '',
              right: '0',
              left: ''
            });
            menu_id.velocity({right: -1 * (options.menuWidth + 10)}, {
              duration: 200,
              queue: false,
              easing: 'easeOutCubic',
              complete: function() {
                if (restoreNav === true) {
                  menu_id.removeAttr('style');
                  menu_id.css('width', options.menuWidth);
                }
              }
            });
          }
        }
        var panning = false;
        var menuOut = false;
        dragTarget.on('click', function() {
          removeMenu();
        });
        dragTarget.hammer({prevent_default: false}).bind('pan', function(e) {
          if (e.gesture.pointerType == "touch") {
            var direction = e.gesture.direction;
            var x = e.gesture.center.x;
            var y = e.gesture.center.y;
            var velocityX = e.gesture.velocityX;
            $('body').css('overflow', 'hidden');
            if ($('#sidenav-overlay').length === 0) {
              var overlay = $('<div id="sidenav-overlay"></div>');
              overlay.css('opacity', 0).click(function() {
                removeMenu();
              });
              $('body').append(overlay);
            }
            if (options.edge === 'left') {
              if (x > options.menuWidth) {
                x = options.menuWidth;
              } else if (x < 0) {
                x = 0;
              }
            }
            if (options.edge === 'left') {
              if (x < (options.menuWidth / 2)) {
                menuOut = false;
              } else if (x >= (options.menuWidth / 2)) {
                menuOut = true;
              }
              menu_id.css('left', (x - options.menuWidth));
            } else {
              if (x < (window.innerWidth - options.menuWidth / 2)) {
                menuOut = true;
              } else if (x >= (window.innerWidth - options.menuWidth / 2)) {
                menuOut = false;
              }
              var rightPos = -1 * (x - options.menuWidth / 2);
              if (rightPos > 0) {
                rightPos = 0;
              }
              menu_id.css('right', rightPos);
            }
            var overlayPerc;
            if (options.edge === 'left') {
              overlayPerc = x / options.menuWidth;
              $('#sidenav-overlay').velocity({opacity: overlayPerc}, {
                duration: 50,
                queue: false,
                easing: 'easeOutQuad'
              });
            } else {
              overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
              $('#sidenav-overlay').velocity({opacity: overlayPerc}, {
                duration: 50,
                queue: false,
                easing: 'easeOutQuad'
              });
            }
          }
        }).bind('panend', function(e) {
          if (e.gesture.pointerType == "touch") {
            var velocityX = e.gesture.velocityX;
            panning = false;
            if (options.edge === 'left') {
              if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {
                menu_id.velocity({left: 0}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad'
                });
                $('#sidenav-overlay').velocity({opacity: 1}, {
                  duration: 50,
                  queue: false,
                  easing: 'easeOutQuad'
                });
                dragTarget.css({
                  width: '50%',
                  right: 0,
                  left: ''
                });
              } else if (!menuOut || velocityX > 0.3) {
                $('body').css('overflow', '');
                menu_id.velocity({left: -1 * (options.menuWidth + 10)}, {
                  duration: 200,
                  queue: false,
                  easing: 'easeOutQuad'
                });
                $('#sidenav-overlay').velocity({opacity: 0}, {
                  duration: 200,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function() {
                    $(this).remove();
                  }
                });
                dragTarget.css({
                  width: '10px',
                  right: '',
                  left: 0
                });
              }
            } else {
              if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {
                menu_id.velocity({right: 0}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad'
                });
                $('#sidenav-overlay').velocity({opacity: 1}, {
                  duration: 50,
                  queue: false,
                  easing: 'easeOutQuad'
                });
                dragTarget.css({
                  width: '50%',
                  right: '',
                  left: 0
                });
              } else if (!menuOut || velocityX < -0.3) {
                $('body').css('overflow', '');
                menu_id.velocity({right: -1 * (options.menuWidth + 10)}, {
                  duration: 200,
                  queue: false,
                  easing: 'easeOutQuad'
                });
                $('#sidenav-overlay').velocity({opacity: 0}, {
                  duration: 200,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function() {
                    $(this).remove();
                  }
                });
                dragTarget.css({
                  width: '10px',
                  right: 0,
                  left: ''
                });
              }
            }
          }
        });
        $this.click(function() {
          if (menuOut === true) {
            menuOut = false;
            panning = false;
            removeMenu();
          } else {
            $('body').css('overflow', 'hidden');
            $('body').append(dragTarget);
            if (options.edge === 'left') {
              dragTarget.css({
                width: '50%',
                right: 0,
                left: ''
              });
              menu_id.velocity({left: 0}, {
                duration: 300,
                queue: false,
                easing: 'easeOutQuad'
              });
            } else {
              dragTarget.css({
                width: '50%',
                right: '',
                left: 0
              });
              menu_id.velocity({right: 0}, {
                duration: 300,
                queue: false,
                easing: 'easeOutQuad'
              });
              menu_id.css('left', '');
            }
            var overlay = $('<div id="sidenav-overlay"></div>');
            overlay.css('opacity', 0).click(function() {
              menuOut = false;
              panning = false;
              removeMenu();
              overlay.velocity({opacity: 0}, {
                duration: 300,
                queue: false,
                easing: 'easeOutQuad',
                complete: function() {
                  $(this).remove();
                }
              });
            });
            $('body').append(overlay);
            overlay.velocity({opacity: 1}, {
              duration: 300,
              queue: false,
              easing: 'easeOutQuad',
              complete: function() {
                menuOut = true;
                panning = false;
              }
            });
          }
          return false;
        });
      });
    },
    show: function() {
      this.trigger('click');
    },
    hide: function() {
      $('#sidenav-overlay').trigger('click');
    }
  };
  $.fn.sideNav = function(methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + methodOrOptions + ' does not exist on jQuery.sideNav');
    }
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("16", ["5"], function($) {
  var methods = {
    init: function(options) {
      var defaults = {
        indicators: true,
        height: 400,
        transition: 500,
        interval: 6000
      };
      options = $.extend(defaults, options);
      return this.each(function() {
        var $this = $(this);
        var $slider = $this.find('ul.slides').first();
        var $slides = $slider.find('li');
        var $active_index = $slider.find('.active').index();
        var $active;
        if ($active_index != -1) {
          $active = $slides.eq($active_index);
        }
        function captionTransition(caption, duration) {
          if (caption.hasClass("center-align")) {
            caption.velocity({
              opacity: 0,
              translateY: -100
            }, {
              duration: duration,
              queue: false
            });
          } else if (caption.hasClass("right-align")) {
            caption.velocity({
              opacity: 0,
              translateX: 100
            }, {
              duration: duration,
              queue: false
            });
          } else if (caption.hasClass("left-align")) {
            caption.velocity({
              opacity: 0,
              translateX: -100
            }, {
              duration: duration,
              queue: false
            });
          }
        }
        function moveToSlide(index) {
          if (index >= $slides.length)
            index = 0;
          else if (index < 0)
            index = $slides.length - 1;
          $active_index = $slider.find('.active').index();
          if ($active_index != index) {
            $active = $slides.eq($active_index);
            $caption = $active.find('.caption');
            $active.removeClass('active');
            $active.velocity({opacity: 0}, {
              duration: options.transition,
              queue: false,
              easing: 'easeOutQuad',
              complete: function() {
                $slides.not('.active').velocity({
                  opacity: 0,
                  translateX: 0,
                  translateY: 0
                }, {
                  duration: 0,
                  queue: false
                });
              }
            });
            captionTransition($caption, options.transition);
            if (options.indicators) {
              $indicators.eq($active_index).removeClass('active');
            }
            $slides.eq(index).velocity({opacity: 1}, {
              duration: options.transition,
              queue: false,
              easing: 'easeOutQuad'
            });
            $slides.eq(index).find('.caption').velocity({
              opacity: 1,
              translateX: 0,
              translateY: 0
            }, {
              duration: options.transition,
              delay: options.transition,
              queue: false,
              easing: 'easeOutQuad'
            });
            $slides.eq(index).addClass('active');
            if (options.indicators) {
              $indicators.eq(index).addClass('active');
            }
          }
        }
        if (!$this.hasClass('fullscreen')) {
          if (options.indicators) {
            $this.height(options.height + 40);
          } else {
            $this.height(options.height);
          }
          $slider.height(options.height);
        }
        $slides.find('.caption').each(function() {
          captionTransition($(this), 0);
        });
        $slides.find('img').each(function() {
          $(this).css('background-image', 'url(' + $(this).attr('src') + ')');
          $(this).attr('src', 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
        });
        if (options.indicators) {
          var $indicators = $('<ul class="indicators"></ul>');
          $slides.each(function(index) {
            var $indicator = $('<li class="indicator-item"></li>');
            $indicator.click(function() {
              var $parent = $slider.parent();
              var curr_index = $parent.find($(this)).index();
              moveToSlide(curr_index);
              clearInterval($interval);
              $interval = setInterval(function() {
                $active_index = $slider.find('.active').index();
                if ($slides.length == $active_index + 1)
                  $active_index = 0;
                else
                  $active_index += 1;
                moveToSlide($active_index);
              }, options.transition + options.interval);
            });
            $indicators.append($indicator);
          });
          $this.append($indicators);
          $indicators = $this.find('ul.indicators').find('li.indicator-item');
        }
        if ($active) {
          $active.show();
        } else {
          $slides.first().addClass('active').velocity({opacity: 1}, {
            duration: options.transition,
            queue: false,
            easing: 'easeOutQuad'
          });
          $active_index = 0;
          $active = $slides.eq($active_index);
          if (options.indicators) {
            $indicators.eq($active_index).addClass('active');
          }
        }
        $active.find('img').each(function() {
          $active.find('.caption').velocity({
            opacity: 1,
            translateX: 0,
            translateY: 0
          }, {
            duration: options.transition,
            queue: false,
            easing: 'easeOutQuad'
          });
        });
        $interval = setInterval(function() {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index + 1);
        }, options.transition + options.interval);
        var panning = false;
        var swipeLeft = false;
        var swipeRight = false;
        $this.hammer({prevent_default: false}).bind('pan', function(e) {
          if (e.gesture.pointerType === "touch") {
            clearInterval($interval);
            var direction = e.gesture.direction;
            var x = e.gesture.deltaX;
            var velocityX = e.gesture.velocityX;
            $curr_slide = $slider.find('.active');
            $curr_slide.velocity({translateX: x}, {
              duration: 50,
              queue: false,
              easing: 'easeOutQuad'
            });
            if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
              swipeRight = true;
            } else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
              swipeLeft = true;
            }
            var next_slide;
            if (swipeLeft) {
              next_slide = $curr_slide.next();
              if (next_slide.length === 0) {
                next_slide = $slides.first();
              }
              next_slide.velocity({opacity: 1}, {
                duration: 300,
                queue: false,
                easing: 'easeOutQuad'
              });
            }
            if (swipeRight) {
              next_slide = $curr_slide.prev();
              if (next_slide.length === 0) {
                next_slide = $slides.last();
              }
              next_slide.velocity({opacity: 1}, {
                duration: 300,
                queue: false,
                easing: 'easeOutQuad'
              });
            }
          }
        }).bind('panend', function(e) {
          if (e.gesture.pointerType === "touch") {
            $curr_slide = $slider.find('.active');
            panning = false;
            curr_index = $slider.find('.active').index();
            if (!swipeRight && !swipeLeft) {
              $curr_slide.velocity({translateX: 0}, {
                duration: 300,
                queue: false,
                easing: 'easeOutQuad'
              });
            } else if (swipeLeft) {
              moveToSlide(curr_index + 1);
              $curr_slide.velocity({translateX: -1 * $this.innerWidth()}, {
                duration: 300,
                queue: false,
                easing: 'easeOutQuad',
                complete: function() {
                  $curr_slide.velocity({
                    opacity: 0,
                    translateX: 0
                  }, {
                    duration: 0,
                    queue: false
                  });
                }
              });
            } else if (swipeRight) {
              moveToSlide(curr_index - 1);
              $curr_slide.velocity({translateX: $this.innerWidth()}, {
                duration: 300,
                queue: false,
                easing: 'easeOutQuad',
                complete: function() {
                  $curr_slide.velocity({
                    opacity: 0,
                    translateX: 0
                  }, {
                    duration: 0,
                    queue: false
                  });
                }
              });
            }
            swipeLeft = false;
            swipeRight = false;
            clearInterval($interval);
            $interval = setInterval(function() {
              $active_index = $slider.find('.active').index();
              if ($slides.length == $active_index + 1)
                $active_index = 0;
              else
                $active_index += 1;
              moveToSlide($active_index);
            }, options.transition + options.interval);
          }
        });
        $this.on('sliderPause', function() {
          clearInterval($interval);
        });
        $this.on('sliderStart', function() {
          clearInterval($interval);
          $interval = setInterval(function() {
            $active_index = $slider.find('.active').index();
            if ($slides.length == $active_index + 1)
              $active_index = 0;
            else
              $active_index += 1;
            moveToSlide($active_index);
          }, options.transition + options.interval);
        });
      });
    },
    pause: function() {
      $(this).trigger('sliderPause');
    },
    start: function() {
      $(this).trigger('sliderStart');
    }
  };
  $.fn.slider = function(methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
    }
  };
});

_removeDefine();
})();
$__System.registerDynamic("17", ["5"], false, function(__require, __exports, __module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    (function($) {
      var methods = {
        init: function() {
          return this.each(function() {
            var $this = $(this),
                window_width = $(window).width();
            $this.width('100%');
            var $active,
                $content,
                $links = $this.find('li.tab a'),
                $tabs_width = $this.width(),
                $tab_width = $this.find('li').first().outerWidth(),
                $index = 0;
            $active = $($links.filter('[href="' + location.hash + '"]'));
            if ($active.length === 0) {
              $active = $(this).find('li.tab a.active').first();
            }
            if ($active.length === 0) {
              $active = $(this).find('li.tab a').first();
            }
            $active.addClass('active');
            $index = $links.index($active);
            if ($index < 0) {
              $index = 0;
            }
            $content = $($active[0].hash);
            $this.append('<div class="indicator"></div>');
            var $indicator = $this.find('.indicator');
            if ($this.is(":visible")) {
              $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
              $indicator.css({"left": $index * $tab_width});
            }
            $(window).resize(function() {
              $tabs_width = $this.width();
              $tab_width = $this.find('li').first().outerWidth();
              if ($index < 0) {
                $index = 0;
              }
              if ($tab_width !== 0 && $tabs_width !== 0) {
                $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
                $indicator.css({"left": $index * $tab_width});
              }
            });
            $links.not($active).each(function() {
              $(this.hash).hide();
            });
            $this.on('click', 'a', function(e) {
              if ($(this).parent().hasClass('disabled')) {
                e.preventDefault();
                return;
              }
              $tabs_width = $this.width();
              $tab_width = $this.find('li').first().outerWidth();
              $active.removeClass('active');
              $content.hide();
              $active = $(this);
              $content = $(this.hash);
              $links = $this.find('li.tab a');
              $active.addClass('active');
              var $prev_index = $index;
              $index = $links.index($(this));
              if ($index < 0) {
                $index = 0;
              }
              $content.show();
              if (($index - $prev_index) >= 0) {
                $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad'
                });
                $indicator.velocity({"left": $index * $tab_width}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad',
                  delay: 90
                });
              } else {
                $indicator.velocity({"left": $index * $tab_width}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad'
                });
                $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad',
                  delay: 90
                });
              }
              e.preventDefault();
            });
          });
        },
        select_tab: function(id) {
          this.find('a[href="#' + id + '"]').trigger('click');
        }
      };
      $.fn.tabs = function(methodOrOptions) {
        if (methods[methodOrOptions]) {
          return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
          return methods.init.apply(this, arguments);
        } else {
          $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
        }
      };
      $(document).ready(function() {
        $('ul.tabs').tabs();
      });
    }(jQuery));
  })();
  return _retrieveGlobal();
});

(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("1", ["5", "3", "e", "4", "6", "7", "8", "9", "a", "b", "c", "f", "10", "11", "12", "13", "14", "15", "16", "17"], function($, Velocity, hammerjs, Waves) {
  var Materialize = {};
  Materialize.guid = (function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return function() {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
  })();
  Materialize.elementOrParentIsFixed = function(element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function() {
      if ($(this).css("position") === "fixed") {
        isFixed = true;
        return false;
      }
    });
    return isFixed;
  };
  Materialize.fadeInImage = function(selector) {
    var element = $(selector);
    element.css({opacity: 0});
    $(element).velocity({opacity: 1}, {
      duration: 650,
      queue: false,
      easing: 'easeOutSine'
    });
    $(element).velocity({opacity: 1}, {
      duration: 1300,
      queue: false,
      easing: 'swing',
      step: function(now, fx) {
        fx.start = 100;
        var grayscale_setting = now / 100;
        var brightness_setting = 150 - (100 - now) / 1.75;
        if (brightness_setting < 100) {
          brightness_setting = 100;
        }
        if (now >= 0) {
          $(this).css({
            "-webkit-filter": "grayscale(" + grayscale_setting + ")" + "brightness(" + brightness_setting + "%)",
            "filter": "grayscale(" + grayscale_setting + ")" + "brightness(" + brightness_setting + "%)"
          });
        }
      }
    });
  };
  Materialize.showStaggeredList = function(selector) {
    var time = 0;
    $(selector).find('li').velocity({translateX: "-100px"}, {duration: 0});
    $(selector).find('li').each(function() {
      $(this).velocity({
        opacity: "1",
        translateX: "0"
      }, {
        duration: 800,
        delay: time,
        easing: [60, 10]
      });
      time += 120;
    });
  };
  Materialize.scrollFire = function(options) {
    var didScroll = false;
    window.addEventListener("scroll", function() {
      didScroll = true;
    });
    var conditionallyFire = function(windowScroll, value) {
      var selector = value.selector,
          offset = value.offset,
          callback = value.callback;
      var currentElement = document.querySelector(selector);
      if (currentElement !== null) {
        var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;
        if (windowScroll > (elementOffset + offset) && value.done !== true) {
          var callbackFunc = callback;
          callbackFunc();
          value.done = true;
        }
      }
    };
    setInterval(function() {
      if (didScroll) {
        didScroll = false;
        var windowScroll = window.pageYOffset + window.innerHeight;
        for (var i = 0; i < options.length; i++) {
          var value = options[i];
          conditionallyFire(windowScroll, value);
        }
      }
    }, 100);
  };
  Materialize.input_selector = ['input[type=text]', 'input[type=password]', 'input[type=email]', 'input[type=url]', 'input[type=tel]', 'input[type=number]', 'input[type=search]', 'textarea'].join(',');
  Materialize.updateTextFields = function() {
    $(Materialize.input_selector).each(function(index, element) {
      if ($(element).val().length > 0 || $(this).attr('placeholder') !== undefined || $(element)[0].validity.badInput === true) {
        $(this).siblings('label').addClass('active');
      } else {
        $(this).siblings('label, i').removeClass('active');
      }
    });
  };
  var validate_field = function(object) {
    var hasLength = object.attr('length') !== undefined;
    var lenAttr = parseInt(object.attr('length'), 10);
    var len = object.val().length;
    if (object.val().length === 0 && object[0].validity.badInput === false) {
      if (object.hasClass('validate')) {
        object.removeClass('valid');
        object.removeClass('invalid');
      }
    } else if (object.hasClass('validate')) {
      if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {
        object.removeClass('invalid');
        object.addClass('valid');
      } else {
        object.removeClass('valid');
        object.addClass('invalid');
      }
    }
  };
  var activateOption = function(collection, newOption) {
    collection.find('li.active').removeClass('active');
    $(newOption).addClass('active');
    collection.scrollTo(newOption);
  };
  $.fn.collapsible = function(options) {
    var defaults = {accordion: undefined};
    options = $.extend(defaults, options);
    return this.each(function() {
      var $this = $(this);
      var $panel_headers = $(this).find('> li > .collapsible-header');
      var collapsible_type = $this.data("collapsible");
      $this.off('click.collapse', '.collapsible-header');
      $panel_headers.off('click.collapse');
      function accordionOpen(object) {
        $panel_headers = $this.find('> li > .collapsible-header');
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        } else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')) {
          object.siblings('.collapsible-body').stop(true, false).slideDown({
            duration: 350,
            easing: "easeOutQuart",
            queue: false,
            complete: function() {
              $(this).css('height', '');
            }
          });
        } else {
          object.siblings('.collapsible-body').stop(true, false).slideUp({
            duration: 350,
            easing: "easeOutQuart",
            queue: false,
            complete: function() {
              $(this).css('height', '');
            }
          });
        }
        $panel_headers.not(object).removeClass('active').parent().removeClass('active');
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true, false).slideUp({
          duration: 350,
          easing: "easeOutQuart",
          queue: false,
          complete: function() {
            $(this).css('height', '');
          }
        });
      }
      function expandableOpen(object) {
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        } else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')) {
          object.siblings('.collapsible-body').stop(true, false).slideDown({
            duration: 350,
            easing: "easeOutQuart",
            queue: false,
            complete: function() {
              $(this).css('height', '');
            }
          });
        } else {
          object.siblings('.collapsible-body').stop(true, false).slideUp({
            duration: 350,
            easing: "easeOutQuart",
            queue: false,
            complete: function() {
              $(this).css('height', '');
            }
          });
        }
      }
      function getPanelHeader(object) {
        return object.closest('li > .collapsible-header');
      }
      function isChildrenOfPanelHeader(object) {
        var panelHeader = getPanelHeader(object);
        return panelHeader.length > 0;
      }
      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
        $panel_headers = $this.find('> li > .collapsible-header');
        $panel_headers.on('click.collapse', function(e) {
          var element = $(e.target);
          if (isChildrenOfPanelHeader(element)) {
            element = getPanelHeader(element);
          }
          element.toggleClass('active');
          accordionOpen(element);
        });
        accordionOpen($panel_headers.filter('.active').first());
      } else {
        $panel_headers.each(function() {
          $(this).on('click.collapse', function(e) {
            var element = $(e.target);
            if (isChildrenOfPanelHeader(element)) {
              element = getPanelHeader(element);
            }
            element.toggleClass('active');
            expandableOpen(element);
          });
          if ($(this).hasClass('active')) {
            expandableOpen($(this));
          }
        });
      }
    });
  };
  $.fn.material_select = function(callback) {
    $(this).each(function() {
      var $select = $(this);
      if ($select.hasClass('browser-default')) {
        return;
      }
      var lastID = $select.data('select-id');
      if (lastID) {
        $select.parent().find('span.caret').remove();
        $select.parent().find('input').remove();
        $select.unwrap();
        $('ul#select-options-' + lastID).remove();
      }
      if (callback === 'destroy') {
        $select.data('select-id', null).removeClass('initialized');
        return;
      }
      var uniqueID = Materialize.guid();
      $select.data('select-id', uniqueID);
      var wrapper = $('<div class="select-wrapper"></div>');
      wrapper.addClass($select.attr('class'));
      var options = $('<ul id="select-options-' + uniqueID + '" class="dropdown-content select-dropdown"></ul>');
      var selectOptions = $select.children('option');
      var label;
      if ($select.find('option:selected') !== undefined) {
        label = $select.find('option:selected');
      } else {
        label = options.first();
      }
      selectOptions.each(function() {
        options.append($('<li class="' + (($(this).is(':disabled')) ? 'disabled' : '') + '"><span>' + $(this).html() + '</span></li>'));
      });
      options.find('li').each(function(i) {
        var $curr_select = $select;
        $(this).click(function() {
          if (!$(this).hasClass('disabled')) {
            $curr_select.find('option').eq(i).prop('selected', true);
            $curr_select.trigger('change');
            $curr_select.siblings('input.select-dropdown').val($(this).text());
            if (typeof callback !== 'undefined') {
              callback();
            }
          }
        });
      });
      $select.wrap(wrapper);
      var dropdownIcon = $('<span class="caret">&#9660;</span>');
      if ($select.is(':disabled')) {
        dropdownIcon.addClass('disabled');
      }
      var sanitizedLabelHtml = label.html().replace(/"/g, '&quot;');
      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID + '" value="' + sanitizedLabelHtml + '"/>');
      $select.before($newSelect);
      $newSelect.before(dropdownIcon);
      $('body').append(options);
      if (!$select.is(':disabled')) {
        $newSelect.dropdown({"hover": false});
      }
      if ($select.attr('tabindex')) {
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
      }
      $select.addClass('initialized');
      $newSelect.on('focus', function() {
        $(this).trigger('open');
        label = $(this).val();
        var selectedOption = options.find('li').filter(function() {
          return $(this).text().toLowerCase() === label.toLowerCase();
        })[0];
        activateOption(options, selectedOption);
      });
      $newSelect.on('blur', function() {
        $(this).trigger('close');
      });
      var filterQuery = [];
      var onKeyDown = function(event) {
        var newOption,
            activeOption;
        if (event.which === 9) {
          $newSelect.trigger('close');
          return;
        }
        if (event.which === 40 && !options.is(":visible")) {
          $newSelect.trigger('open');
          return;
        }
        if (event.which === 13 && !options.is(":visible")) {
          return;
        }
        event.preventDefault();
        var letter = String.fromCharCode(event.which).toLowerCase();
        var nonLetters = [9, 13, 27, 38, 40];
        if (letter && (nonLetters.indexOf(event.which) === -1)) {
          filterQuery.push(letter);
          var string = filterQuery.join("");
          newOption = options.find('li').filter(function() {
            return $(this).text().toLowerCase().indexOf(string) === 0;
          })[0];
          if (newOption) {
            activateOption(options, newOption);
          }
        }
        if (event.which === 13) {
          activeOption = options.find('li.active:not(.disabled)')[0];
          if (activeOption) {
            $(activeOption).trigger('click');
            $newSelect.trigger('close');
          }
        }
        if (event.which === 40) {
          newOption = options.find('li.active').next('li:not(.disabled)')[0];
          if (newOption) {
            activateOption(options, newOption);
          }
        }
        if (event.which === 27) {
          $newSelect.trigger('close');
        }
        if (event.which === 38) {
          newOption = options.find('li.active').prev('li:not(.disabled)')[0];
          if (newOption) {
            activateOption(options, newOption);
          }
        }
        setTimeout(function() {
          filterQuery = [];
        }, 1000);
      };
      $newSelect.on('keydown', onKeyDown);
    });
  };
  $(document).ready(function() {
    var swipeLeft = false;
    var swipeRight = false;
    $('.dismissable').each(function() {
      $(this).hammer({prevent_default: false}).bind('pan', function(e) {
        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          var direction = e.gesture.direction;
          var x = e.gesture.deltaX;
          var velocityX = e.gesture.velocityX;
          $this.velocity({translateX: x}, {
            duration: 50,
            queue: false,
            easing: 'easeOutQuad'
          });
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {
            swipeLeft = true;
          }
          if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {
            swipeRight = true;
          }
        }
      }).bind('panend', function(e) {
        if (Math.abs(e.gesture.deltaX) < ($(this).innerWidth() / 2)) {
          swipeRight = false;
          swipeLeft = false;
        }
        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          if (swipeLeft || swipeRight) {
            var fullWidth;
            if (swipeLeft) {
              fullWidth = $this.innerWidth();
            } else {
              fullWidth = -1 * $this.innerWidth();
            }
            $this.velocity({translateX: fullWidth}, {
              duration: 100,
              queue: false,
              easing: 'easeOutQuad',
              complete: function() {
                $this.css('border', 'none');
                $this.velocity({
                  height: 0,
                  padding: 0
                }, {
                  duration: 200,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function() {
                    $this.remove();
                  }
                });
              }
            });
          } else {
            $this.velocity({translateX: 0}, {
              duration: 100,
              queue: false,
              easing: 'easeOutQuad'
            });
          }
          swipeLeft = false;
          swipeRight = false;
        }
      });
    });
    $('input[autofocus]').siblings('label, i').addClass('active');
    $(document).on('change', Materialize.input_selector, function() {
      if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label').addClass('active');
      }
      validate_field($(this));
    });
    Materialize.updateTextFields();
    $(document).on('reset', function(e) {
      var formReset = $(e.target);
      if (formReset.is('form')) {
        formReset.find(Materialize.input_selector).removeClass('valid').removeClass('invalid');
        formReset.find(Materialize.input_selector).each(function() {
          if ($(this).attr('value') === '') {
            $(this).siblings('label, i').removeClass('active');
          }
        });
        formReset.find('select.initialized').each(function() {
          var reset_text = formReset.find('option[selected]').text();
          formReset.siblings('input.select-dropdown').val(reset_text);
        });
      }
    });
    $(document).on('focus', Materialize.input_selector, function() {
      $(this).siblings('label, i').addClass('active');
    });
    $(document).on('blur', Materialize.input_selector, function() {
      var $inputElement = $(this);
      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        $inputElement.siblings('label, i').removeClass('active');
      }
      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') !== undefined) {
        $inputElement.siblings('i').removeClass('active');
      }
      validate_field($inputElement);
    });
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }
    var text_area_selector = '.materialize-textarea';
    function textareaAutoResize($textarea) {
      var fontFamily = $textarea.css('font-family');
      var fontSize = $textarea.css('font-size');
      if (fontSize) {
        hiddenDiv.css('font-size', fontSize);
      }
      if (fontFamily) {
        hiddenDiv.css('font-family', fontFamily);
      }
      if ($textarea.attr('wrap') === "off") {
        hiddenDiv.css('overflow-wrap', "normal").css('white-space', "pre");
      }
      hiddenDiv.text($textarea.val() + '\n');
      var content = hiddenDiv.html().replace(/\n/g, '<br>');
      hiddenDiv.html(content);
      if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width());
      } else {
        hiddenDiv.css('width', $(window).width() / 2);
      }
      $textarea.css('height', hiddenDiv.height());
    }
    $(text_area_selector).each(function() {
      var $textarea = $(this);
      if ($textarea.val().length) {
        textareaAutoResize($textarea);
      }
    });
    $('body').on('keyup keydown autoresize', text_area_selector, function() {
      textareaAutoResize($(this));
    });
    $(document).on('change', '.file-field input[type="file"]', function() {
      var file_field = $(this).closest('.file-field');
      var path_input = file_field.find('input.file-path');
      var files = $(this)[0].files;
      var file_names = [];
      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }
      path_input.val(file_names.join(", "));
      path_input.trigger('change');
    });
  });
  return Materialize;
});

_removeDefine();
})();
})
(function(factory) {
  define(["jquery"], factory);
});
//# sourceMappingURL=material_helper.js.map