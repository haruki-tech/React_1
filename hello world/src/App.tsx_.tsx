import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0d6aef76"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/home/haruki/hello-world/src/App.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import reactLogo from "/src/assets/react.svg?import";
import "/src/App.css";
function App() {
  return /* @__PURE__ */ jsxDEV("div", { className: "App", children: [
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ jsxDEV("img", { src: "/vite.svg", className: "logo", alt: "Vite logo" }, void 0, false, {
        fileName: "/home/haruki/hello-world/src/App.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/haruki/hello-world/src/App.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("a", { href: "https://reactjs.org", target: "_blank", children: /* @__PURE__ */ jsxDEV("img", { src: reactLogo, className: "logo react", alt: "React logo" }, void 0, false, {
        fileName: "/home/haruki/hello-world/src/App.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/haruki/hello-world/src/App.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/haruki/hello-world/src/App.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("h1", { children: "Hello, World!" }, void 0, false, {
      fileName: "/home/haruki/hello-world/src/App.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/haruki/hello-world/src/App.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/haruki/hello-world/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBUVU7QUFSVixPQUFPQSxvQkFBZTtBQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUMsT0FBTztBQUVQLFNBQVNDLE1BQU07QUFDYixTQUNFLHVCQUFDLFNBQUksV0FBVSxPQUNiO0FBQUEsMkJBQUMsU0FDQztBQUFBLDZCQUFDLE9BQUUsTUFBSyxzQkFBcUIsUUFBTyxVQUNsQyxpQ0FBQyxTQUFJLEtBQUksYUFBWSxXQUFVLFFBQU8sS0FBSSxlQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXFELEtBRHZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLE1BQ0EsdUJBQUMsT0FBRSxNQUFLLHVCQUFzQixRQUFPLFVBQ25DLGlDQUFDLFNBQUksS0FBS0QsV0FBVyxXQUFVLGNBQWEsS0FBSSxnQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE0RCxLQUQ5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxTQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FPQTtBQUFBLElBQ0EsdUJBQUMsUUFBRyw2QkFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWlCO0FBQUEsT0FUbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVVBO0FBRUo7QUFBQ0UsS0FkUUQ7QUFnQlQsZUFBZUE7QUFBRyxJQUFBQztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsicmVhY3RMb2dvIiwiQXBwIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3RMb2dvIGZyb20gJy4vYXNzZXRzL3JlYWN0LnN2ZydcbmltcG9ydCAnLi9BcHAuY3NzJ1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZpdGVqcy5kZXZcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi92aXRlLnN2Z1wiIGNsYXNzTmFtZT1cImxvZ29cIiBhbHQ9XCJWaXRlIGxvZ29cIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3JlYWN0TG9nb30gY2xhc3NOYW1lPVwibG9nbyByZWFjdFwiIGFsdD1cIlJlYWN0IGxvZ29cIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMT5IZWxsbywgV29ybGQhPC9oMT5cbiAgICA8L2Rpdj5cbiApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbiJdLCJmaWxlIjoiL2hvbWUvaGFydWtpL2hlbGxvLXdvcmxkL3NyYy9BcHAudHN4In0=