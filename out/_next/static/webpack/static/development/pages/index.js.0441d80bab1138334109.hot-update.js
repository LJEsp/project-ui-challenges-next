webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_destyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/destyle */ "./utils/destyle.js");
var _jsxFileName = "C:\\Users\\LJE\\Documents\\GitHub\\_projects\\project-ui-challenges-next\\project-ui-challenges-next\\pages\\index.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  \n  body { \n    font-family: 'Montserrat', sans-serif;  \n    font-size: 1rem;\n    padding: 2em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var links = [{
  href: "https://ljesp-project-ui-challenges-1.netlify.com/001/login",
  day: "Day 1",
  challenge: "Sign Up",
  title: "Sentiment",
  date: "December 26, 2018"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/002/login",
  day: "Day 2",
  challenge: "Credit Card Checkout",
  title: "Orbital Skies",
  date: "January 3, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/003/login",
  day: "Day 3",
  challenge: "Landing Page",
  title: "Blind Box",
  date: "January 4, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/004/login",
  day: "Day 4",
  challenge: "Calculator",
  title: "Calculatey",
  date: "January 4, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/005/login",
  day: "Day 5",
  challenge: "App Icon",
  title: "Trevert",
  date: "January 5, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/006/login",
  day: "Day 6",
  challenge: "App Icon",
  title: "Trevert",
  date: "January 5, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/007/login",
  day: "Day 7",
  challenge: "Settings",
  title: "",
  date: "January 8, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/008/login",
  day: "Day 8",
  challenge: "404",
  title: "Payapa",
  date: "January 10, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/009/login",
  day: "Day 9",
  challenge: "Music Player",
  title: "Granite",
  date: "January 10, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/010/login",
  day: "Day 10",
  challenge: "Social Share",
  title: "",
  date: "January 13, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/011/login",
  day: "Day 11",
  challenge: "Flash Message",
  title: "",
  date: "January 14, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/012/login",
  day: "Day 12",
  challenge: "E-Commerce Shop",
  title: "Ample",
  date: "January 17, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/013/login",
  day: "Day 13",
  challenge: "Direct Messaging",
  title: "Dusk",
  date: "January 21, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/014/login",
  day: "Day 14",
  challenge: "Countdown Timer",
  title: "Game of Thrones Season 8 Countdown",
  date: "January 23, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/015/login",
  day: "Day 15",
  challenge: "On/Off Switch",
  title: "",
  date: "January 23, 2019"
}, {
  href: "https://ljesp-project-ui-challenges-1.netlify.com/016/login",
  day: "Day 16",
  challenge: "Pop-Up/Overlay",
  title: "",
  date: "January 24, 2019"
}, {
  href: "/challenges/017-email-receipt",
  day: "Day 17",
  challenge: "Email Receipt",
  title: "Moonglide",
  date: "January 26, 2019"
}];
var PageStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject(), _utils_destyle__WEBPACK_IMPORTED_MODULE_4__["default"]);
var StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__StyledWrapper",
  componentId: "sc-1wbo52z-0"
})(["h1{font-size:3em;margin-bottom:1em;}nav div{width:100%;max-width:50em;display:grid;grid-template-columns:4em 1fr auto;grid-column-gap:1em;:not(:last-child){margin-bottom:1em;}}a{color:#2196f3;}"]);

var index = function index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "UI Challenges | LJEsp"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "UI Challenges"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, links.map(function (link, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, link.day), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: link.href,
      href: link.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, link.challenge, " ", link.title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "\u2014 \"", link.title, "\"") : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, link.date));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.0441d80bab1138334109.hot-update.js.map