!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,d=l||c||Function("return this")(),s=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function O(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function E(e){return c=e,f=setTimeout(S,t),d?O(e):a}function L(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function S(){var e=p();if(L(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-l);return s?m(n,u-(e-c)):n}(e))}function T(e){return f=void 0,b&&r?O(e):(r=i=void 0,a)}function A(){var e=p(),n=L(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return E(l);if(s)return f=setTimeout(S,t),O(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(y(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),A.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},A.flush=function(){return void 0===f?a:T(p())},A}function g(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=g(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var O=document.querySelector(".feedback-form"),E=O.elements;E.email,E.message;null!==localStorage.getItem("LOCALSTORAGE_KEY")&&(input.value=localStorage.getItem("LOCALSTORAGE_KEY")),input.addEventListener("input",(function(e){localStorage.setItem("LOCALSTORAGE_KEY",input.value)})),null!==localStorage.getItem("LOCALSTORAGE_KEY")&&(textarea.value=localStorage.getItem("LOCALSTORAGE_KEY")),textarea.addEventListener("input",(function(e){localStorage.setItem("LOCALSTORAGE_KEY",textarea.value)})),O.addEventListener("input",_.throttle((function(){console.log("Input handler call every 500ms")}),500)),O.addEventListener("submit",(function(e){localStorage.removeItem("LOCALSTORAGE_KEY")}))}();
//# sourceMappingURL=03-feedback.1776bfaf.js.map
