!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t);var i=t("h6c0i"),r={formEl:document.querySelector(".form")},u=0,a=0,l=0;function f(e,n){var o=Math.random()>.3;return new Promise((function(t,i){o?t({position:e,delayValue:n}):i({position:e,delayValue:n})}))}r.formEl.addEventListener("submit",(function(e){e.preventDefault(),function(){var e=r.formEl.elements,n=e.delay,o=e.step,t=e.amount;a=Number(n.value),l=Number(o.value),u=Number(t.value);for(var c=1;c<=u;c+=1)f(c,a).then((function(e){var n=e.position,o=e.delayValue;setTimeout((function(){i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))}),o)})).catch((function(e){var n=e.position,o=e.delayValue;setTimeout((function(){i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}),o)})),a+=l}(),r.formEl.reset()}))}();
//# sourceMappingURL=03-promises.06742489.js.map