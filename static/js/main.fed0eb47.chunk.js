(this["webpackJsonptest-service-worker"]=this["webpackJsonptest-service-worker"]||[]).push([[0],{10:function(e,o,n){},24:function(e,o,n){"use strict";n.r(o);n(1),n(9);var t=n.p+"static/media/logo.103b5fa1.svg",r=(n(10),n(2)),i=n.n(r),a=(n(13),n(0));var c=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:t,className:"App-logo",alt:"logo"}),Object(a.jsxs)("p",{children:["Edit ",Object(a.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(a.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React TEST"})]})})},s=(n(7),n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,o){navigator.serviceWorker.addEventListener("message",(function(e){if(console.log("event",e),e.data)switch(e.data){case"reload-window":window.location.reload()}})),navigator.serviceWorker.register(e).then((function(e){setInterval((function(){e.update().then((function(e){return console.info("FORCE UPDATE - resolve")}))}),o.timeoutUpdate),e.onupdatefound=function(){var n=e.installing,t=e.waiting;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log(navigator.serviceWorker.controller),i.a.notification.confirm("\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043d\u043e\u0432\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",{title:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",buttonLabels:["\u041e\u0442\u043c\u0435\u043d\u0430","\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"]}).then((function(e){1===e&&n.postMessage("SKIP_WAITING")})),console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),o&&o.onUpdate&&o.onUpdate(e)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(e))),t&&(console.log("------------------------"),console.log("\u0412\u041e\u0420\u041a\u0415\u0420 \u0416\u0414\u0415\u0422"),console.log("------------------------"))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=n(4),u=(n(22),n(23),document.getElementById("root"));i.a.disableAutoStyling(),i.a.ready((function(){Object(d.render)(Object(a.jsx)(c,{}),u);var e=document.getElementById("root-loader");e&&(e.classList.add("loader-fade-effect"),setTimeout((function(){e.remove()}),500))})),function(e){if("serviceWorker"in navigator){if(new URL("/test-service-worker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var o="".concat("/test-service-worker","/service-worker.js");s?(!function(e,o){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,o)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(o,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):l(o,e)}))}}({timeoutUpdate:1e4})},9:function(e,o,n){}},[[24,1,2]]]);
//# sourceMappingURL=main.fed0eb47.chunk.js.map