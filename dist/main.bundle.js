/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Quicksand-VariableFont_wght.ttf */ "./src/assets/Quicksand-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Quicksand';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}

:root {
    --primary: #15683f;
    --primary-light: #3a805d;
    --primary-fade: #77a085;
    --second: #d1e8fc;
    --second-light: #d9ebfc;
    --second-fade: #ebf5fd;
    --accent: #FFFFFF;
    --accent-alt: #959a9b; 
}

html {
    font-family: 'Quicksand', Helvetica, sans-serif;
    font-size: 18px;
}

body {
    height: 100%;
}

* {
    padding: 0;
    margin: 0;
}

button, input, label {
    box-sizing:content-box;
    border: none;
    background-color: inherit;
    font-family: inherit;
    font-size: inherit;
    color: inherit;

    cursor: pointer;
    display: block;
}

button:active, input:active, label:active{
    cursor: default;
}

:where(textarea),
:where(input[type="text"], input[type="search"], input[type="password"], input[type="url"]){
  appearance: none;
  border-style: solid;
  outline: none;
} 

/* input::placeholder {
    color: var(--pip-darkened);
    color-scheme: var(--pip-darkened);
} */

ul {
    list-style: none;
}

svg {
    width: 30px;
}

a {
    text-decoration: none;
    color: inherit;
}

.hidden {
    display: none;
} 

/* custom styling things */ 
body {
    display: grid;
    grid-template-rows: 1fr auto;
}

.basic-but {
    background-color: var(--second);
    color: var(--primary);
    border-radius: 8px;
}

.basic-but:hover {
    background-color: var(--second-light);
    color: var(--primary-light);
}

.basic-but:disabled, .basic-but:active {
    background-color: var(--second-fade);
    color: var(--primary-fade);

}

/* || Header */
header { 
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;

    height: 100px;

    padding: 0 40px;

    width: 100%;
    box-sizing: border-box;

    position: fixed;
    top: 0;

    color: var(--accent);
    transition: background-color 400ms linear, top 100ms ease-in, color 400ms linear;
    z-index: 4;
}

header.hidden {
    display: grid;
    
    top: -100px;
}

header:hover {
    background-color: var(--accent);
    color: black;
}

header:hover svg {
    fill: black;
}


.logo-container {
    display: flex;
    gap: 5px;
    align-items: center;
}

.logo {
    width: 110px;      
}

.logo-container h1 {
    font-size: 1.5rem;
}

header svg {
    fill: var(--accent);
}

.header-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 80px;
    justify-self: center;
}

.header-links a {
    text-decoration: none;
    width: 130px;
    color: inherit;
    box-sizing: border-box;
    text-align: center;

}

.header-links a:hover {
    /* text-shadow: 0.8px 0px 0px black, -0.8px 0px 0px black;
    letter-spacing: 1px; */

    font-weight: bolder;
}

.nav-icons {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-self: right;
}

.nav-icons button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    border-radius: 4px;
}

.nav-icons button:hover {
    background-color: var(--second);
}

.nav-icons button:hover svg {
    fill: var(--primary);
}

.nav-icons button#lang-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
}

header:hover button#lang-toggle span{
    color: var(--primary);
    font-weight: 700;
} 
/****/

/* || dropdown menu */
.menu {
    position: fixed;
    z-index: 3;

    box-sizing: border-box;
    height: 100svh;
    width: 100svw;

    display: flex;
}

.menu section.one {
    box-sizing: border-box;
    width: 30%;
    height: 100%;
    background-color: white;
    padding: 160px 140px;

    display: flex;
    flex-direction: column;
    gap: 80px;
}

.menu section.one .big-links {
    display: flex;
    flex-direction: column;
    gap: 60px;
    font-size: 2rem;
}

.menu section.one .big-links li {
    position: relative;
    height: 50px;
}

.menu section.one .big-links li:hover {
    font-weight: bold;
}

.menu section.one .big-links li::after {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: var(--primary);
    transition: width 20ms linear;
}

.menu section.one .big-links li:hover::after {
    content: "";
    display: block;
    width: 160px;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: var(--primary);
}

.menu section.one .small-links li:not(:last-child) {
    margin-bottom: 20px;
}

.menu section.two {
    width: 20%;
    box-sizing: border-box;
    left: 30%;
    padding: 160px 90px;
    background-color: var(--second-light);
    height: 100%;
}

.menu section.two .sub-links {
    display: flex;
    gap: 30px;
    flex-direction: column;
    font-weight: bold;
    font-size: 1.3rem;
}

.menu section.two .sub-links .arrow {
    color: var(--primary);
}

/****/

main {
    display: flex;
    flex-direction: column;
}

/* || hero */ 
section.hero {
    height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--accent);
}

section.hero video {
    position: absolute;
    object-fit: cover;
    z-index: -2;
    width: 100%;
    height: 100%;
}

section.hero .tinter {
    position: absolute;
    object-fit: cover;
    z-index: -1;
    width: 100%;
    height: 100%;

    background-color: #27272756;
}

.hero-text {
    display: flex;
    flex-direction: column;
    gap: 30px;

    text-align: center;
    align-items: center;
}

.hero-text h2 {
    font-size: 1.5rem;
}

.hero-text h1 {
    font-size: 4rem;
    width: 70%;
}
/****/

/* || Latest feed and slider */
.latest-feed {
    padding: 120px 17%;
    display: flex;
    flex-direction: column;
    gap: 40px;

}

.latest-feed > h3 {
    border-top: 1px solid var(--accent-alt);
    width: 400px;
    padding-top: 30px;
    font-size: 2rem;
}

.latest-feed .container {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 25px;

}

.arrow-holder {
    display: flex;
    gap: 20px;
    justify-self: right;
}

.arrow-holder button {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
}

.slider-frame {
    height: 500px;
    overflow-x: hidden; /* Removing this makes everything shift to the right (i think cause it lets slider get super big */
}

.slider {
    position: relative;
    display: flex;
    gap: 20px;
    height: 100%;
    transition: right 300ms linear; 
    right: 0%;
}

.card {
    flex: 1; 
    height: 100%;
    box-sizing: border-box;
    display: flex; 
    flex-direction: column;
    gap: 10px;
}

.card .img-holder {
    height: 60%;
    width: 100%;
    position: relative;
}

.card img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    border-bottom-left-radius: 0px;
}

.img-holder button {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    border-radius: 8px 0 8px 0;
    font-size: 30px;
}

.card h3, .card p {
    margin: 0 20px;
    width: 80%;
}

/* || Footer */ 
footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr auto;
    gap: 55px;

    padding: 40px 17%;

    background-color: var(--second);
}

footer > ul li:first-child, footer .socials h3 {
    font-weight: 700;
    font-size: inherit;
    margin-bottom: 15px;
}

footer .logo-container {
    grid-row: 1 / 2;
    grid-column: 1 / 1;
}

footer .opportunities {
    grid-row: 1 / 2;
}

footer .socials {
    grid-row: 1 / 2;
}

.socials .social-links {
    display: flex;
    gap: 15px;
}

.social-icon.x {
    width: 25px;
}

footer .boring-stuff {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    display: flex;
    justify-content: space-between;
}

footer .boring-stuff .boring-links {
    flex: 2; 

    display: flex;
    justify-content: center;
    gap: 70px;
}

.topper {
    color: var(--primary);
    font-weight: 700;
}

.topper:hover {
    color: var(--primary-light);
}

.topper:active {
    color: var(--primary-fade);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Quicksand';\n    src: url('./assets/Quicksand-VariableFont_wght.ttf') format('truetype');\n}\n\n:root {\n    --primary: #15683f;\n    --primary-light: #3a805d;\n    --primary-fade: #77a085;\n    --second: #d1e8fc;\n    --second-light: #d9ebfc;\n    --second-fade: #ebf5fd;\n    --accent: #FFFFFF;\n    --accent-alt: #959a9b; \n}\n\nhtml {\n    font-family: 'Quicksand', Helvetica, sans-serif;\n    font-size: 18px;\n}\n\nbody {\n    height: 100%;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbutton, input, label {\n    box-sizing:content-box;\n    border: none;\n    background-color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    color: inherit;\n\n    cursor: pointer;\n    display: block;\n}\n\nbutton:active, input:active, label:active{\n    cursor: default;\n}\n\n:where(textarea),\n:where(input[type=\"text\"], input[type=\"search\"], input[type=\"password\"], input[type=\"url\"]){\n  appearance: none;\n  border-style: solid;\n  outline: none;\n} \n\n/* input::placeholder {\n    color: var(--pip-darkened);\n    color-scheme: var(--pip-darkened);\n} */\n\nul {\n    list-style: none;\n}\n\nsvg {\n    width: 30px;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n.hidden {\n    display: none;\n} \n\n/* custom styling things */ \nbody {\n    display: grid;\n    grid-template-rows: 1fr auto;\n}\n\n.basic-but {\n    background-color: var(--second);\n    color: var(--primary);\n    border-radius: 8px;\n}\n\n.basic-but:hover {\n    background-color: var(--second-light);\n    color: var(--primary-light);\n}\n\n.basic-but:disabled, .basic-but:active {\n    background-color: var(--second-fade);\n    color: var(--primary-fade);\n\n}\n\n/* || Header */\nheader { \n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    align-items: center;\n\n    height: 100px;\n\n    padding: 0 40px;\n\n    width: 100%;\n    box-sizing: border-box;\n\n    position: fixed;\n    top: 0;\n\n    color: var(--accent);\n    transition: background-color 400ms linear, top 100ms ease-in, color 400ms linear;\n    z-index: 4;\n}\n\nheader.hidden {\n    display: grid;\n    \n    top: -100px;\n}\n\nheader:hover {\n    background-color: var(--accent);\n    color: black;\n}\n\nheader:hover svg {\n    fill: black;\n}\n\n\n.logo-container {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n}\n\n.logo {\n    width: 110px;      \n}\n\n.logo-container h1 {\n    font-size: 1.5rem;\n}\n\nheader svg {\n    fill: var(--accent);\n}\n\n.header-links {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 80px;\n    justify-self: center;\n}\n\n.header-links a {\n    text-decoration: none;\n    width: 130px;\n    color: inherit;\n    box-sizing: border-box;\n    text-align: center;\n\n}\n\n.header-links a:hover {\n    /* text-shadow: 0.8px 0px 0px black, -0.8px 0px 0px black;\n    letter-spacing: 1px; */\n\n    font-weight: bolder;\n}\n\n.nav-icons {\n    display: flex;\n    gap: 40px;\n    align-items: center;\n    justify-self: right;\n}\n\n.nav-icons button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 3px;\n    border-radius: 4px;\n}\n\n.nav-icons button:hover {\n    background-color: var(--second);\n}\n\n.nav-icons button:hover svg {\n    fill: var(--primary);\n}\n\n.nav-icons button#lang-toggle {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\nheader:hover button#lang-toggle span{\n    color: var(--primary);\n    font-weight: 700;\n} \n/****/\n\n/* || dropdown menu */\n.menu {\n    position: fixed;\n    z-index: 3;\n\n    box-sizing: border-box;\n    height: 100svh;\n    width: 100svw;\n\n    display: flex;\n}\n\n.menu section.one {\n    box-sizing: border-box;\n    width: 30%;\n    height: 100%;\n    background-color: white;\n    padding: 160px 140px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 80px;\n}\n\n.menu section.one .big-links {\n    display: flex;\n    flex-direction: column;\n    gap: 60px;\n    font-size: 2rem;\n}\n\n.menu section.one .big-links li {\n    position: relative;\n    height: 50px;\n}\n\n.menu section.one .big-links li:hover {\n    font-weight: bold;\n}\n\n.menu section.one .big-links li::after {\n    content: \"\";\n    display: block;\n    width: 40px;\n    height: 4px;\n    position: absolute;\n    left: 0;\n    bottom: -10px;\n    background-color: var(--primary);\n    transition: width 20ms linear;\n}\n\n.menu section.one .big-links li:hover::after {\n    content: \"\";\n    display: block;\n    width: 160px;\n    height: 4px;\n    position: absolute;\n    left: 0;\n    bottom: -10px;\n    background-color: var(--primary);\n}\n\n.menu section.one .small-links li:not(:last-child) {\n    margin-bottom: 20px;\n}\n\n.menu section.two {\n    width: 20%;\n    box-sizing: border-box;\n    left: 30%;\n    padding: 160px 90px;\n    background-color: var(--second-light);\n    height: 100%;\n}\n\n.menu section.two .sub-links {\n    display: flex;\n    gap: 30px;\n    flex-direction: column;\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.menu section.two .sub-links .arrow {\n    color: var(--primary);\n}\n\n/****/\n\nmain {\n    display: flex;\n    flex-direction: column;\n}\n\n/* || hero */ \nsection.hero {\n    height: 100svh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    color: var(--accent);\n}\n\nsection.hero video {\n    position: absolute;\n    object-fit: cover;\n    z-index: -2;\n    width: 100%;\n    height: 100%;\n}\n\nsection.hero .tinter {\n    position: absolute;\n    object-fit: cover;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n\n    background-color: #27272756;\n}\n\n.hero-text {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n\n    text-align: center;\n    align-items: center;\n}\n\n.hero-text h2 {\n    font-size: 1.5rem;\n}\n\n.hero-text h1 {\n    font-size: 4rem;\n    width: 70%;\n}\n/****/\n\n/* || Latest feed and slider */\n.latest-feed {\n    padding: 120px 17%;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n\n}\n\n.latest-feed > h3 {\n    border-top: 1px solid var(--accent-alt);\n    width: 400px;\n    padding-top: 30px;\n    font-size: 2rem;\n}\n\n.latest-feed .container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 25px;\n\n}\n\n.arrow-holder {\n    display: flex;\n    gap: 20px;\n    justify-self: right;\n}\n\n.arrow-holder button {\n    width: 40px;\n    height: 40px;\n    font-size: 1.5rem;\n}\n\n.slider-frame {\n    height: 500px;\n    overflow-x: hidden; /* Removing this makes everything shift to the right (i think cause it lets slider get super big */\n}\n\n.slider {\n    position: relative;\n    display: flex;\n    gap: 20px;\n    height: 100%;\n    transition: right 300ms linear; \n    right: 0%;\n}\n\n.card {\n    flex: 1; \n    height: 100%;\n    box-sizing: border-box;\n    display: flex; \n    flex-direction: column;\n    gap: 10px;\n}\n\n.card .img-holder {\n    height: 60%;\n    width: 100%;\n    position: relative;\n}\n\n.card img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    border-radius: 8px;\n    border-bottom-left-radius: 0px;\n}\n\n.img-holder button {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    z-index: 2;\n    border-radius: 8px 0 8px 0;\n    font-size: 30px;\n}\n\n.card h3, .card p {\n    margin: 0 20px;\n    width: 80%;\n}\n\n/* || Footer */ \nfooter {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 1fr auto;\n    gap: 55px;\n\n    padding: 40px 17%;\n\n    background-color: var(--second);\n}\n\nfooter > ul li:first-child, footer .socials h3 {\n    font-weight: 700;\n    font-size: inherit;\n    margin-bottom: 15px;\n}\n\nfooter .logo-container {\n    grid-row: 1 / 2;\n    grid-column: 1 / 1;\n}\n\nfooter .opportunities {\n    grid-row: 1 / 2;\n}\n\nfooter .socials {\n    grid-row: 1 / 2;\n}\n\n.socials .social-links {\n    display: flex;\n    gap: 15px;\n}\n\n.social-icon.x {\n    width: 25px;\n}\n\nfooter .boring-stuff {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    display: flex;\n    justify-content: space-between;\n}\n\nfooter .boring-stuff .boring-links {\n    flex: 2; \n\n    display: flex;\n    justify-content: center;\n    gap: 70px;\n}\n\n.topper {\n    color: var(--primary);\n    font-weight: 700;\n}\n\n.topper:hover {\n    color: var(--primary-light);\n}\n\n.topper:active {\n    color: var(--primary-fade);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/jeffQuery.js":
/*!**************************!*\
  !*** ./src/jeffQuery.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Factory: () => (/* binding */ Factory),
/* harmony export */   insertAfter: () => (/* binding */ insertAfter),
/* harmony export */   make: () => (/* binding */ make),
/* harmony export */   query: () => (/* binding */ query),
/* harmony export */   queryAll: () => (/* binding */ queryAll),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass)
/* harmony export */ });
// Dom manipulation
function query(selector, parent = document) {
    return parent.querySelector(selector);
}

function queryAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
}

function getNextSeparator(start, selector) {
    const nextHash = selector.indexOf('#', start);
    const nextDot = selector.indexOf('.', start);

    if (nextHash === -1) {
        return nextDot;
    }
    if (nextDot === -1) {
        return nextHash;
    }
    return nextHash > nextDot ? nextDot : nextHash;
}

function make(selector, parent) {
    let lastInd = getNextSeparator(0, selector);

    const correctedLastInd = lastInd > -1 ? lastInd : selector.length;
    const type = selector.slice(0, correctedLastInd);

    const classes = [];
    let id;
    while (lastInd > -1) {
        const ind = getNextSeparator(lastInd + 1, selector);
        const correctedInd = ind > -1 ? ind : selector.length;
        const subStr = selector.slice(lastInd + 1, correctedInd);

        if (subStr.length === 0) {
            throw console.error(
                'Usage error: Tried to use two symbols for class and/or id in a row.'
            );
        }
        const sym = selector.at(lastInd);
        if (sym === '.') {
            classes.unshift(subStr);
        } else if (id === undefined) {
            id = subStr;
        } else {
            throw console.error(
                "Argument error: elements can't have multiple ids"
            );
        }

        lastInd = ind;
    }

    const newElement = document.createElement(type);
    for (let i = 0; i < classes.length; i += 1) {
        const cls = classes[i];
        newElement.classList.add(cls);
    }
    if (id) newElement.setAttribute('id', id);
    if (parent) parent.append(newElement);
    return newElement;
}

function toggleClass(element, cls) {
    if (element.classList.contains(cls)) {
        element.classList.remove(cls);
    } else {
        element.classList.add(cls);
    }
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Object stuff
const Factory = {
    produce(proto, publicObj = {}) {
        return Object.assign(Object.create(proto), publicObj);
    },
};

// export statement



/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSlider)
/* harmony export */ });
function updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide) {
    const canSlideForward = currSlide < maxSlide - 1;
    const canSlideBack = currSlide > minSlide;

    nextButton.disabled = !canSlideForward;
    backButton.disabled = !canSlideBack;
}

function createSlider(
    nextButton,
    backButton,
    sliderElm,
    cardCount,
    cardsPerSlide
) {
    const minSlide = 0;
    const maxSlide = cardCount / cardsPerSlide;

    let currSlide = 0;

    sliderElm.style.width = `calc(100% * ${maxSlide})`;
    nextButton.addEventListener('click', () => {
        if (currSlide < maxSlide - 1) {
            currSlide += 1;
            sliderElm.style.right = `${currSlide * 100}%`;
        }
        updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
    });
    backButton.addEventListener('click', () => {
        if (currSlide > minSlide) {
            currSlide -= 1;
            sliderElm.style.right = `${currSlide * 100}%`;
        }
        updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
    });

    updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
}


/***/ }),

/***/ "./src/assets/Quicksand-VariableFont_wght.ttf":
/*!****************************************************!*\
  !*** ./src/assets/Quicksand-VariableFont_wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b964ff93d9cb23e7f4c0.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jeffQuery.js */ "./src/jeffQuery.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.js */ "./src/slider.js");




const slider = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.query)('.slider');
const sliderForward = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.query)('.arrow-holder .forward');
const sliderBack = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.query)('.arrow-holder .back');

function createCard(title, desc) {
    const card = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.make)('div.card', slider);

    const imgHolder = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.make)('div.img-holder', card);
    const img = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.make)('img', imgHolder);
    img.src =
        'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const but = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.make)('button.basic-but', imgHolder);
    but.textContent = '+';

    const h3 = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.make)('h3', card);
    h3.textContent = title;
    const p = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.make)('p', card);
    p.textContent = desc;
}

function createCards(count) {
    for (let i = 0; i < count; i += 1) {
        createCard('Test', 'This is the description for the test card');
    }
}

const cardCount = 16;
const cardsPerSlide = 4;

createCards(cardCount);
(0,_slider_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sliderForward, sliderBack, slider, cardCount, cardsPerSlide);

// hide header on scroll code
const header = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.query)('header');
let lastKnownScrollPosition;
document.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});

// return to top
const topper = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.query)('.topper');
topper.addEventListener('click', () => {
    window.scroll(0, 0);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2SkFBMkQ7QUFDdkcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGNBQWMsWUFBWSxXQUFXLFVBQVUsYUFBYSxXQUFXLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxLQUFLLFFBQVEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sV0FBVyxZQUFZLE1BQU0sVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFB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STtBQUMxQixnQkFBZ0IsbURBQUk7QUFDcEI7QUFDQTtBQUNBLGdCQUFnQixtREFBSTtBQUNwQjs7QUFFQSxlQUFlLG1EQUFJO0FBQ25CO0FBQ0EsY0FBYyxtREFBSTtBQUNsQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzREFBWTs7QUFFWjtBQUNBLGVBQWUsb0RBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGVBQWUsb0RBQUs7QUFDcEI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvamVmZlF1ZXJ5LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbjpyb290IHtcbiAgICAtLXByaW1hcnk6ICMxNTY4M2Y7XG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjM2E4MDVkO1xuICAgIC0tcHJpbWFyeS1mYWRlOiAjNzdhMDg1O1xuICAgIC0tc2Vjb25kOiAjZDFlOGZjO1xuICAgIC0tc2Vjb25kLWxpZ2h0OiAjZDllYmZjO1xuICAgIC0tc2Vjb25kLWZhZGU6ICNlYmY1ZmQ7XG4gICAgLS1hY2NlbnQ6ICNGRkZGRkY7XG4gICAgLS1hY2NlbnQtYWx0OiAjOTU5YTliOyBcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5idXR0b24sIGlucHV0LCBsYWJlbCB7XG4gICAgYm94LXNpemluZzpjb250ZW50LWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbjphY3RpdmUsIGlucHV0OmFjdGl2ZSwgbGFiZWw6YWN0aXZle1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuOndoZXJlKHRleHRhcmVhKSxcbjp3aGVyZShpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBpbnB1dFt0eXBlPVwidXJsXCJdKXtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgb3V0bGluZTogbm9uZTtcbn0gXG5cbi8qIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHZhcigtLXBpcC1kYXJrZW5lZCk7XG4gICAgY29sb3Itc2NoZW1lOiB2YXIoLS1waXAtZGFya2VuZWQpO1xufSAqL1xuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuc3ZnIHtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufSBcblxuLyogY3VzdG9tIHN0eWxpbmcgdGhpbmdzICovIFxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xufVxuXG4uYmFzaWMtYnV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5iYXNpYy1idXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xufVxuXG4uYmFzaWMtYnV0OmRpc2FibGVkLCAuYmFzaWMtYnV0OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWZhZGUpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWZhZGUpO1xuXG59XG5cbi8qIHx8IEhlYWRlciAqL1xuaGVhZGVyIHsgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoZWlnaHQ6IDEwMHB4O1xuXG4gICAgcGFkZGluZzogMCA0MHB4O1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG5cbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zIGxpbmVhciwgdG9wIDEwMG1zIGVhc2UtaW4sIGNvbG9yIDQwMG1zIGxpbmVhcjtcbiAgICB6LWluZGV4OiA0O1xufVxuXG5oZWFkZXIuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIFxuICAgIHRvcDogLTEwMHB4O1xufVxuXG5oZWFkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5oZWFkZXI6aG92ZXIgc3ZnIHtcbiAgICBmaWxsOiBibGFjaztcbn1cblxuXG4ubG9nby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiAxMTBweDsgICAgICBcbn1cblxuLmxvZ28tY29udGFpbmVyIGgxIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaGVhZGVyIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tYWNjZW50KTtcbn1cblxuLmhlYWRlci1saW5rcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdhcDogODBweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1saW5rcyBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5oZWFkZXItbGlua3MgYTpob3ZlciB7XG4gICAgLyogdGV4dC1zaGFkb3c6IDAuOHB4IDBweCAwcHggYmxhY2ssIC0wLjhweCAwcHggMHB4IGJsYWNrO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7ICovXG5cbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ubmF2LWljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG59XG5cbi5uYXYtaWNvbnMgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm5hdi1pY29ucyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZCk7XG59XG5cbi5uYXYtaWNvbnMgYnV0dG9uOmhvdmVyIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5uYXYtaWNvbnMgYnV0dG9uI2xhbmctdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5oZWFkZXI6aG92ZXIgYnV0dG9uI2xhbmctdG9nZ2xlIHNwYW57XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59IFxuLyoqKiovXG5cbi8qIHx8IGRyb3Bkb3duIG1lbnUgKi9cbi5tZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMztcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDBzdmg7XG4gICAgd2lkdGg6IDEwMHN2dztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tZW51IHNlY3Rpb24ub25lIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE2MHB4IDE0MHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogODBweDtcbn1cblxuLm1lbnUgc2VjdGlvbi5vbmUgLmJpZy1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNjBweDtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5tZW51IHNlY3Rpb24ub25lIC5iaWctbGlua3MgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5tZW51IHNlY3Rpb24ub25lIC5iaWctbGlua3MgbGk6aG92ZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWVudSBzZWN0aW9uLm9uZSAuYmlnLWxpbmtzIGxpOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDIwbXMgbGluZWFyO1xufVxuXG4ubWVudSBzZWN0aW9uLm9uZSAuYmlnLWxpbmtzIGxpOmhvdmVyOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLm1lbnUgc2VjdGlvbi5vbmUgLnNtYWxsLWxpbmtzIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tZW51IHNlY3Rpb24udHdvIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbGVmdDogMzAlO1xuICAgIHBhZGRpbmc6IDE2MHB4IDkwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWxpZ2h0KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZW51IHNlY3Rpb24udHdvIC5zdWItbGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAzMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5tZW51IHNlY3Rpb24udHdvIC5zdWItbGlua3MgLmFycm93IHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi8qKioqL1xuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIHx8IGhlcm8gKi8gXG5zZWN0aW9uLmhlcm8ge1xuICAgIGhlaWdodDogMTAwc3ZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG5zZWN0aW9uLmhlcm8gdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB6LWluZGV4OiAtMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbnNlY3Rpb24uaGVybyAudGludGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgei1pbmRleDogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNzU2O1xufVxuXG4uaGVyby10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMHB4O1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZXJvLXRleHQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaGVyby10ZXh0IGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgd2lkdGg6IDcwJTtcbn1cbi8qKioqL1xuXG4vKiB8fCBMYXRlc3QgZmVlZCBhbmQgc2xpZGVyICovXG4ubGF0ZXN0LWZlZWQge1xuICAgIHBhZGRpbmc6IDEyMHB4IDE3JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0MHB4O1xuXG59XG5cbi5sYXRlc3QtZmVlZCA+IGgzIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWFsdCk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmxhdGVzdC1mZWVkIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBnYXA6IDI1cHg7XG5cbn1cblxuLmFycm93LWhvbGRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbn1cblxuLmFycm93LWhvbGRlciBidXR0b24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnNsaWRlci1mcmFtZSB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIFJlbW92aW5nIHRoaXMgbWFrZXMgZXZlcnl0aGluZyBzaGlmdCB0byB0aGUgcmlnaHQgKGkgdGhpbmsgY2F1c2UgaXQgbGV0cyBzbGlkZXIgZ2V0IHN1cGVyIGJpZyAqL1xufVxuXG4uc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IHJpZ2h0IDMwMG1zIGxpbmVhcjsgXG4gICAgcmlnaHQ6IDAlO1xufVxuXG4uY2FyZCB7XG4gICAgZmxleDogMTsgXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5jYXJkIC5pbWctaG9sZGVyIHtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG59XG5cbi5pbWctaG9sZGVyIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMCA4cHggMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5jYXJkIGgzLCAuY2FyZCBwIHtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgICB3aWR0aDogODAlO1xufVxuXG4vKiB8fCBGb290ZXIgKi8gXG5mb290ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xuICAgIGdhcDogNTVweDtcblxuICAgIHBhZGRpbmc6IDQwcHggMTclO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kKTtcbn1cblxuZm9vdGVyID4gdWwgbGk6Zmlyc3QtY2hpbGQsIGZvb3RlciAuc29jaWFscyBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuZm9vdGVyIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcbn1cblxuZm9vdGVyIC5vcHBvcnR1bml0aWVzIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbmZvb3RlciAuc29jaWFscyB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4uc29jaWFscyAuc29jaWFsLWxpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbn1cblxuLnNvY2lhbC1pY29uLngge1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG5mb290ZXIgLmJvcmluZy1zdHVmZiB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmZvb3RlciAuYm9yaW5nLXN0dWZmIC5ib3JpbmctbGlua3Mge1xuICAgIGZsZXg6IDI7IFxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDcwcHg7XG59XG5cbi50b3BwZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udG9wcGVyOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG59XG5cbi50b3BwZXI6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1mYWRlKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQXVFO0FBQzNFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7O0lBRWQsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBOzs7R0FHRzs7QUFFSDtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdB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QjtJQUNqQixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBLGNBQWM7QUFDZDtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLFNBQVM7O0lBRVQsaUJBQWlCOztJQUVqQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxPQUFPOztJQUVQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvUXVpY2tzYW5kLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnk6ICMxNTY4M2Y7XFxuICAgIC0tcHJpbWFyeS1saWdodDogIzNhODA1ZDtcXG4gICAgLS1wcmltYXJ5LWZhZGU6ICM3N2EwODU7XFxuICAgIC0tc2Vjb25kOiAjZDFlOGZjO1xcbiAgICAtLXNlY29uZC1saWdodDogI2Q5ZWJmYztcXG4gICAgLS1zZWNvbmQtZmFkZTogI2ViZjVmZDtcXG4gICAgLS1hY2NlbnQ6ICNGRkZGRkY7XFxuICAgIC0tYWNjZW50LWFsdDogIzk1OWE5YjsgXFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24sIGlucHV0LCBsYWJlbCB7XFxuICAgIGJveC1zaXppbmc6Y29udGVudC1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUsIGlucHV0OmFjdGl2ZSwgbGFiZWw6YWN0aXZle1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbjp3aGVyZSh0ZXh0YXJlYSksXFxuOndoZXJlKGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSwgaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sIGlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sIGlucHV0W3R5cGU9XFxcInVybFxcXCJdKXtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59IFxcblxcbi8qIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1waXAtZGFya2VuZWQpO1xcbiAgICBjb2xvci1zY2hlbWU6IHZhcigtLXBpcC1kYXJrZW5lZCk7XFxufSAqL1xcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuc3ZnIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59IFxcblxcbi8qIGN1c3RvbSBzdHlsaW5nIHRoaW5ncyAqLyBcXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG59XFxuXFxuLmJhc2ljLWJ1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uYmFzaWMtYnV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4uYmFzaWMtYnV0OmRpc2FibGVkLCAuYmFzaWMtYnV0OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1mYWRlKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZmFkZSk7XFxuXFxufVxcblxcbi8qIHx8IEhlYWRlciAqL1xcbmhlYWRlciB7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcblxcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG5cXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXMgbGluZWFyLCB0b3AgMTAwbXMgZWFzZS1pbiwgY29sb3IgNDAwbXMgbGluZWFyO1xcbiAgICB6LWluZGV4OiA0O1xcbn1cXG5cXG5oZWFkZXIuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIHRvcDogLTEwMHB4O1xcbn1cXG5cXG5oZWFkZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmhlYWRlcjpob3ZlciBzdmcge1xcbiAgICBmaWxsOiBibGFjaztcXG59XFxuXFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDExMHB4OyAgICAgIFxcbn1cXG5cXG4ubG9nby1jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaGVhZGVyIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5oZWFkZXItbGlua3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDgwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWxpbmtzIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmhlYWRlci1saW5rcyBhOmhvdmVyIHtcXG4gICAgLyogdGV4dC1zaGFkb3c6IDAuOHB4IDBweCAwcHggYmxhY2ssIC0wLjhweCAwcHggMHB4IGJsYWNrO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4OyAqL1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ubmF2LWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4ubmF2LWljb25zIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm5hdi1pY29ucyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xcbn1cXG5cXG4ubmF2LWljb25zIGJ1dHRvbjpob3ZlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLm5hdi1pY29ucyBidXR0b24jbGFuZy10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmhlYWRlcjpob3ZlciBidXR0b24jbGFuZy10b2dnbGUgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn0gXFxuLyoqKiovXFxuXFxuLyogfHwgZHJvcGRvd24gbWVudSAqL1xcbi5tZW51IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAzO1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDEwMHN2aDtcXG4gICAgd2lkdGg6IDEwMHN2dztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnUgc2VjdGlvbi5vbmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNjBweCAxNDBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4MHB4O1xcbn1cXG5cXG4ubWVudSBzZWN0aW9uLm9uZSAuYmlnLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA2MHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tZW51IHNlY3Rpb24ub25lIC5iaWctbGlua3MgbGkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLm1lbnUgc2VjdGlvbi5vbmUgLmJpZy1saW5rcyBsaTpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudSBzZWN0aW9uLm9uZSAuYmlnLWxpbmtzIGxpOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogLTEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAyMG1zIGxpbmVhcjtcXG59XFxuXFxuLm1lbnUgc2VjdGlvbi5vbmUgLmJpZy1saW5rcyBsaTpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAtMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5tZW51IHNlY3Rpb24ub25lIC5zbWFsbC1saW5rcyBsaTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm1lbnUgc2VjdGlvbi50d28ge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHBhZGRpbmc6IDE2MHB4IDkwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1saWdodCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1lbnUgc2VjdGlvbi50d28gLnN1Yi1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWVudSBzZWN0aW9uLnR3byAuc3ViLWxpbmtzIC5hcnJvdyB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLyoqKiovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIHx8IGhlcm8gKi8gXFxuc2VjdGlvbi5oZXJvIHtcXG4gICAgaGVpZ2h0OiAxMDBzdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuc2VjdGlvbi5oZXJvIHZpZGVvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgei1pbmRleDogLTI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnNlY3Rpb24uaGVybyAudGludGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc1NjtcXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVyby10ZXh0IGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5oZXJvLXRleHQgaDEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcbi8qKioqL1xcblxcbi8qIHx8IExhdGVzdCBmZWVkIGFuZCBzbGlkZXIgKi9cXG4ubGF0ZXN0LWZlZWQge1xcbiAgICBwYWRkaW5nOiAxMjBweCAxNyU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNDBweDtcXG5cXG59XFxuXFxuLmxhdGVzdC1mZWVkID4gaDMge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWFsdCk7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmxhdGVzdC1mZWVkIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBnYXA6IDI1cHg7XFxuXFxufVxcblxcbi5hcnJvdy1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxufVxcblxcbi5hcnJvdy1ob2xkZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zbGlkZXItZnJhbWUge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIFJlbW92aW5nIHRoaXMgbWFrZXMgZXZlcnl0aGluZyBzaGlmdCB0byB0aGUgcmlnaHQgKGkgdGhpbmsgY2F1c2UgaXQgbGV0cyBzbGlkZXIgZ2V0IHN1cGVyIGJpZyAqL1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogcmlnaHQgMzAwbXMgbGluZWFyOyBcXG4gICAgcmlnaHQ6IDAlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGZsZXg6IDE7IFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jYXJkIC5pbWctaG9sZGVyIHtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXJkIGltZyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG59XFxuXFxuLmltZy1ob2xkZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMCA4cHggMDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uY2FyZCBoMywgLmNhcmQgcCB7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4vKiB8fCBGb290ZXIgKi8gXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAgZ2FwOiA1NXB4O1xcblxcbiAgICBwYWRkaW5nOiA0MHB4IDE3JTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kKTtcXG59XFxuXFxuZm9vdGVyID4gdWwgbGk6Zmlyc3QtY2hpbGQsIGZvb3RlciAuc29jaWFscyBoMyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuZm9vdGVyIC5sb2dvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xcbn1cXG5cXG5mb290ZXIgLm9wcG9ydHVuaXRpZXMge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbmZvb3RlciAuc29jaWFscyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnNvY2lhbHMgLnNvY2lhbC1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnNvY2lhbC1pY29uLngge1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuZm9vdGVyIC5ib3Jpbmctc3R1ZmYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuZm9vdGVyIC5ib3Jpbmctc3R1ZmYgLmJvcmluZy1saW5rcyB7XFxuICAgIGZsZXg6IDI7IFxcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA3MHB4O1xcbn1cXG5cXG4udG9wcGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG9wcGVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4udG9wcGVyOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWZhZGUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIERvbSBtYW5pcHVsYXRpb25cbmZ1bmN0aW9uIHF1ZXJ5KHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudCkge1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudCkge1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRTZXBhcmF0b3Ioc3RhcnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgbmV4dEhhc2ggPSBzZWxlY3Rvci5pbmRleE9mKCcjJywgc3RhcnQpO1xuICAgIGNvbnN0IG5leHREb3QgPSBzZWxlY3Rvci5pbmRleE9mKCcuJywgc3RhcnQpO1xuXG4gICAgaWYgKG5leHRIYXNoID09PSAtMSkge1xuICAgICAgICByZXR1cm4gbmV4dERvdDtcbiAgICB9XG4gICAgaWYgKG5leHREb3QgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBuZXh0SGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIG5leHRIYXNoID4gbmV4dERvdCA/IG5leHREb3QgOiBuZXh0SGFzaDtcbn1cblxuZnVuY3Rpb24gbWFrZShzZWxlY3RvciwgcGFyZW50KSB7XG4gICAgbGV0IGxhc3RJbmQgPSBnZXROZXh0U2VwYXJhdG9yKDAsIHNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGNvcnJlY3RlZExhc3RJbmQgPSBsYXN0SW5kID4gLTEgPyBsYXN0SW5kIDogc2VsZWN0b3IubGVuZ3RoO1xuICAgIGNvbnN0IHR5cGUgPSBzZWxlY3Rvci5zbGljZSgwLCBjb3JyZWN0ZWRMYXN0SW5kKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICBsZXQgaWQ7XG4gICAgd2hpbGUgKGxhc3RJbmQgPiAtMSkge1xuICAgICAgICBjb25zdCBpbmQgPSBnZXROZXh0U2VwYXJhdG9yKGxhc3RJbmQgKyAxLCBzZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGNvcnJlY3RlZEluZCA9IGluZCA+IC0xID8gaW5kIDogc2VsZWN0b3IubGVuZ3RoO1xuICAgICAgICBjb25zdCBzdWJTdHIgPSBzZWxlY3Rvci5zbGljZShsYXN0SW5kICsgMSwgY29ycmVjdGVkSW5kKTtcblxuICAgICAgICBpZiAoc3ViU3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAnVXNhZ2UgZXJyb3I6IFRyaWVkIHRvIHVzZSB0d28gc3ltYm9scyBmb3IgY2xhc3MgYW5kL29yIGlkIGluIGEgcm93LidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ltID0gc2VsZWN0b3IuYXQobGFzdEluZCk7XG4gICAgICAgIGlmIChzeW0gPT09ICcuJykge1xuICAgICAgICAgICAgY2xhc3Nlcy51bnNoaWZ0KHN1YlN0cik7XG4gICAgICAgIH0gZWxzZSBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWQgPSBzdWJTdHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiQXJndW1lbnQgZXJyb3I6IGVsZW1lbnRzIGNhbid0IGhhdmUgbXVsdGlwbGUgaWRzXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0SW5kID0gaW5kO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjbHMgPSBjbGFzc2VzW2ldO1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG4gICAgaWYgKGlkKSBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmFwcGVuZChuZXdFbGVtZW50KTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xzKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRBZnRlcihyZWZlcmVuY2VOb2RlLCBuZXdOb2RlKSB7XG4gICAgcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nKTtcbn1cblxuLy8gT2JqZWN0IHN0dWZmXG5jb25zdCBGYWN0b3J5ID0ge1xuICAgIHByb2R1Y2UocHJvdG8sIHB1YmxpY09iaiA9IHt9KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCBwdWJsaWNPYmopO1xuICAgIH0sXG59O1xuXG4vLyBleHBvcnQgc3RhdGVtZW50XG5leHBvcnQgeyBtYWtlLCBxdWVyeSwgcXVlcnlBbGwsIEZhY3RvcnksIHRvZ2dsZUNsYXNzLCBpbnNlcnRBZnRlciB9O1xuIiwiZnVuY3Rpb24gdXBkYXRlQnV0dG9ucyhuZXh0QnV0dG9uLCBiYWNrQnV0dG9uLCBjdXJyU2xpZGUsIG1heFNsaWRlLCBtaW5TbGlkZSkge1xuICAgIGNvbnN0IGNhblNsaWRlRm9yd2FyZCA9IGN1cnJTbGlkZSA8IG1heFNsaWRlIC0gMTtcbiAgICBjb25zdCBjYW5TbGlkZUJhY2sgPSBjdXJyU2xpZGUgPiBtaW5TbGlkZTtcblxuICAgIG5leHRCdXR0b24uZGlzYWJsZWQgPSAhY2FuU2xpZGVGb3J3YXJkO1xuICAgIGJhY2tCdXR0b24uZGlzYWJsZWQgPSAhY2FuU2xpZGVCYWNrO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTbGlkZXIoXG4gICAgbmV4dEJ1dHRvbixcbiAgICBiYWNrQnV0dG9uLFxuICAgIHNsaWRlckVsbSxcbiAgICBjYXJkQ291bnQsXG4gICAgY2FyZHNQZXJTbGlkZVxuKSB7XG4gICAgY29uc3QgbWluU2xpZGUgPSAwO1xuICAgIGNvbnN0IG1heFNsaWRlID0gY2FyZENvdW50IC8gY2FyZHNQZXJTbGlkZTtcblxuICAgIGxldCBjdXJyU2xpZGUgPSAwO1xuXG4gICAgc2xpZGVyRWxtLnN0eWxlLndpZHRoID0gYGNhbGMoMTAwJSAqICR7bWF4U2xpZGV9KWA7XG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJTbGlkZSA8IG1heFNsaWRlIC0gMSkge1xuICAgICAgICAgICAgY3VyclNsaWRlICs9IDE7XG4gICAgICAgICAgICBzbGlkZXJFbG0uc3R5bGUucmlnaHQgPSBgJHtjdXJyU2xpZGUgKiAxMDB9JWA7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQnV0dG9ucyhuZXh0QnV0dG9uLCBiYWNrQnV0dG9uLCBjdXJyU2xpZGUsIG1heFNsaWRlLCBtaW5TbGlkZSk7XG4gICAgfSk7XG4gICAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJTbGlkZSA+IG1pblNsaWRlKSB7XG4gICAgICAgICAgICBjdXJyU2xpZGUgLT0gMTtcbiAgICAgICAgICAgIHNsaWRlckVsbS5zdHlsZS5yaWdodCA9IGAke2N1cnJTbGlkZSAqIDEwMH0lYDtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVCdXR0b25zKG5leHRCdXR0b24sIGJhY2tCdXR0b24sIGN1cnJTbGlkZSwgbWF4U2xpZGUsIG1pblNsaWRlKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZUJ1dHRvbnMobmV4dEJ1dHRvbiwgYmFja0J1dHRvbiwgY3VyclNsaWRlLCBtYXhTbGlkZSwgbWluU2xpZGUpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHF1ZXJ5LCBtYWtlIH0gZnJvbSAnLi9qZWZmUXVlcnkuanMnO1xuaW1wb3J0IGNyZWF0ZVNsaWRlciBmcm9tICcuL3NsaWRlci5qcyc7XG5cbmNvbnN0IHNsaWRlciA9IHF1ZXJ5KCcuc2xpZGVyJyk7XG5jb25zdCBzbGlkZXJGb3J3YXJkID0gcXVlcnkoJy5hcnJvdy1ob2xkZXIgLmZvcndhcmQnKTtcbmNvbnN0IHNsaWRlckJhY2sgPSBxdWVyeSgnLmFycm93LWhvbGRlciAuYmFjaycpO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKHRpdGxlLCBkZXNjKSB7XG4gICAgY29uc3QgY2FyZCA9IG1ha2UoJ2Rpdi5jYXJkJywgc2xpZGVyKTtcblxuICAgIGNvbnN0IGltZ0hvbGRlciA9IG1ha2UoJ2Rpdi5pbWctaG9sZGVyJywgY2FyZCk7XG4gICAgY29uc3QgaW1nID0gbWFrZSgnaW1nJywgaW1nSG9sZGVyKTtcbiAgICBpbWcuc3JjID1cbiAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM5NTE5Ni9wZXhlbHMtcGhvdG8tMzk1MTk2LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTEnO1xuICAgIGNvbnN0IGJ1dCA9IG1ha2UoJ2J1dHRvbi5iYXNpYy1idXQnLCBpbWdIb2xkZXIpO1xuICAgIGJ1dC50ZXh0Q29udGVudCA9ICcrJztcblxuICAgIGNvbnN0IGgzID0gbWFrZSgnaDMnLCBjYXJkKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGNvbnN0IHAgPSBtYWtlKCdwJywgY2FyZCk7XG4gICAgcC50ZXh0Q29udGVudCA9IGRlc2M7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmRzKGNvdW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICAgIGNyZWF0ZUNhcmQoJ1Rlc3QnLCAnVGhpcyBpcyB0aGUgZGVzY3JpcHRpb24gZm9yIHRoZSB0ZXN0IGNhcmQnKTtcbiAgICB9XG59XG5cbmNvbnN0IGNhcmRDb3VudCA9IDE2O1xuY29uc3QgY2FyZHNQZXJTbGlkZSA9IDQ7XG5cbmNyZWF0ZUNhcmRzKGNhcmRDb3VudCk7XG5jcmVhdGVTbGlkZXIoc2xpZGVyRm9yd2FyZCwgc2xpZGVyQmFjaywgc2xpZGVyLCBjYXJkQ291bnQsIGNhcmRzUGVyU2xpZGUpO1xuXG4vLyBoaWRlIGhlYWRlciBvbiBzY3JvbGwgY29kZVxuY29uc3QgaGVhZGVyID0gcXVlcnkoJ2hlYWRlcicpO1xubGV0IGxhc3RLbm93blNjcm9sbFBvc2l0aW9uO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIGxhc3RLbm93blNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgaWYgKGxhc3RLbm93blNjcm9sbFBvc2l0aW9uID4gMTAwKSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxufSk7XG5cbi8vIHJldHVybiB0byB0b3BcbmNvbnN0IHRvcHBlciA9IHF1ZXJ5KCcudG9wcGVyJyk7XG50b3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbCgwLCAwKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9