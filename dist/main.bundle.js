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

.hidden {
    display: none;
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

header:hover button#lang-toggle span {
    color: var(--primary);
    font-weight: 700;
} 
/****/

/* || dropdown menu */
.menu {
    position: fixed;
    z-index: 3;
    left: 0%;
    transition: left 200ms ease-in;

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
    margin-bottom: 40px;
}

.menu section.two {
    width: 30%;
    box-sizing: border-box;
    left: 30%;
    padding: 160px 90px;
    background-color: var(--second-light);
    height: 100%;
}

.menu section.two .sub-links {
    display: flex;
    gap: 40px;
    flex-direction: column;
    font-weight: bold;
    font-size: 1.3rem;
    
}

.menu section.two .sub-links li:hover, .menu section.one .small-links li:hover {
    color: var(--primary);
    transition: color 100ms linear;
}

.menu section.two .sub-links .arrow {
    color: var(--primary);
}

.menu.hidden {
    left: -100%;
}

.menu:not(.hidden) + header {
    background-color: transparent;
    transition: background-color 10ms linear, top 100ms ease-in; /* redeclare transition to override some things */;
}

.menu:not(.hidden) + header .logo-container {
    color: black;
}

.menu:not(.hidden) + header .header-links {
    width: 0;
    overflow: hidden;
}

.menu:not(.hidden) + header .nav-icons button {
    background-color: var(--second);
    transition: background-color 200ms linear;
}

.menu:not(.hidden) + header .nav-icons button svg {
    fill: var(--primary);
}

.menu:not(.hidden) + header .nav-icons button#lang-toggle {
    height: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    fill: var(--primary);
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
}

@media (max-width: 600px) {
    header {
        grid-template-columns: 1fr 1fr;
    }
    
    header .header-links {
        display: none;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Quicksand';\n    src: url('./assets/Quicksand-VariableFont_wght.ttf') format('truetype');\n}\n\n:root {\n    --primary: #15683f;\n    --primary-light: #3a805d;\n    --primary-fade: #77a085;\n    --second: #d1e8fc;\n    --second-light: #d9ebfc;\n    --second-fade: #ebf5fd;\n    --accent: #FFFFFF;\n    --accent-alt: #959a9b; \n}\n\nhtml {\n    font-family: 'Quicksand', Helvetica, sans-serif;\n    font-size: 18px;\n}\n\nbody {\n    height: 100%;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbutton, input, label {\n    box-sizing:content-box;\n    border: none;\n    background-color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    color: inherit;\n\n    cursor: pointer;\n    display: block;\n}\n\nbutton:active, input:active, label:active{\n    cursor: default;\n}\n\n:where(textarea),\n:where(input[type=\"text\"], input[type=\"search\"], input[type=\"password\"], input[type=\"url\"]){\n  appearance: none;\n  border-style: solid;\n  outline: none;\n} \n\n/* input::placeholder {\n    color: var(--pip-darkened);\n    color-scheme: var(--pip-darkened);\n} */\n\nul {\n    list-style: none;\n}\n\nsvg {\n    width: 30px;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n\n/* custom styling things */ \nbody {\n    display: grid;\n    grid-template-rows: 1fr auto;\n}\n\n.basic-but {\n    background-color: var(--second);\n    color: var(--primary);\n    border-radius: 8px;\n}\n\n.basic-but:hover {\n    background-color: var(--second-light);\n    color: var(--primary-light);\n}\n\n.basic-but:disabled, .basic-but:active {\n    background-color: var(--second-fade);\n    color: var(--primary-fade);\n\n}\n\n.hidden {\n    display: none;\n}\n\n/* || Header */\nheader { \n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    align-items: center;\n\n    height: 100px;\n\n    padding: 0 40px;\n\n    width: 100%;\n    box-sizing: border-box;\n\n    position: fixed;\n    top: 0;\n\n    color: var(--accent);\n    transition: background-color 400ms linear, top 100ms ease-in, color 400ms linear;\n    z-index: 4;\n}\n\nheader.hidden {\n    display: grid;\n    \n    top: -100px;\n}\n\nheader:hover {\n    background-color: var(--accent);\n    color: black;\n}\n\nheader:hover svg {\n    fill: black;\n}\n\n\n.logo-container {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n\n}\n\n.logo {\n    width: 110px;      \n}\n\n.logo-container h1 {\n    font-size: 1.5rem;\n}\n\nheader svg {\n    fill: var(--accent);\n}\n\n.header-links {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 80px;\n    justify-self: center;\n}\n\n.header-links a {\n    text-decoration: none;\n    width: 130px;\n    color: inherit;\n    box-sizing: border-box;\n    text-align: center;\n\n}\n\n.header-links a:hover {\n    /* text-shadow: 0.8px 0px 0px black, -0.8px 0px 0px black;\n    letter-spacing: 1px; */\n\n    font-weight: bolder;\n}\n\n.nav-icons {\n    display: flex;\n    gap: 40px;\n    align-items: center;\n    justify-self: right;\n}\n\n.nav-icons button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 3px;\n    border-radius: 4px;\n}\n\n.nav-icons button:hover {\n    background-color: var(--second);\n}\n\n.nav-icons button:hover svg {\n    fill: var(--primary);\n}\n\n.nav-icons button#lang-toggle {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\nheader:hover button#lang-toggle span {\n    color: var(--primary);\n    font-weight: 700;\n} \n/****/\n\n/* || dropdown menu */\n.menu {\n    position: fixed;\n    z-index: 3;\n    left: 0%;\n    transition: left 200ms ease-in;\n\n    box-sizing: border-box;\n    height: 100svh;\n    width: 100svw;\n\n    display: flex;\n}\n\n.menu section.one {\n    box-sizing: border-box;\n    width: 30%;\n    height: 100%;\n    background-color: white;\n    padding: 160px 140px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 80px;\n}\n\n.menu section.one .big-links {\n    display: flex;\n    flex-direction: column;\n    gap: 60px;\n    font-size: 2rem;\n}\n\n.menu section.one .big-links li {\n    position: relative;\n    height: 50px;\n}\n\n.menu section.one .big-links li:hover {\n    font-weight: bold;\n}\n\n.menu section.one .big-links li::after {\n    content: \"\";\n    display: block;\n    width: 40px;\n    height: 4px;\n    position: absolute;\n    left: 0;\n    bottom: -10px;\n    background-color: var(--primary);\n    transition: width 20ms linear;\n}\n\n.menu section.one .big-links li:hover::after {\n    content: \"\";\n    display: block;\n    width: 160px;\n    height: 4px;\n    position: absolute;\n    left: 0;\n    bottom: -10px;\n    background-color: var(--primary);\n}\n\n.menu section.one .small-links li:not(:last-child) {\n    margin-bottom: 40px;\n}\n\n.menu section.two {\n    width: 30%;\n    box-sizing: border-box;\n    left: 30%;\n    padding: 160px 90px;\n    background-color: var(--second-light);\n    height: 100%;\n}\n\n.menu section.two .sub-links {\n    display: flex;\n    gap: 40px;\n    flex-direction: column;\n    font-weight: bold;\n    font-size: 1.3rem;\n    \n}\n\n.menu section.two .sub-links li:hover, .menu section.one .small-links li:hover {\n    color: var(--primary);\n    transition: color 100ms linear;\n}\n\n.menu section.two .sub-links .arrow {\n    color: var(--primary);\n}\n\n.menu.hidden {\n    left: -100%;\n}\n\n.menu:not(.hidden) + header {\n    background-color: transparent;\n    transition: background-color 10ms linear, top 100ms ease-in; /* redeclare transition to override some things */;\n}\n\n.menu:not(.hidden) + header .logo-container {\n    color: black;\n}\n\n.menu:not(.hidden) + header .header-links {\n    width: 0;\n    overflow: hidden;\n}\n\n.menu:not(.hidden) + header .nav-icons button {\n    background-color: var(--second);\n    transition: background-color 200ms linear;\n}\n\n.menu:not(.hidden) + header .nav-icons button svg {\n    fill: var(--primary);\n}\n\n.menu:not(.hidden) + header .nav-icons button#lang-toggle {\n    height: 0;\n    padding: 0;\n    box-sizing: border-box;\n    overflow: hidden;\n    fill: var(--primary);\n}\n/****/\n\nmain {\n    display: flex;\n    flex-direction: column;\n}\n\n/* || hero */ \nsection.hero {\n    height: 100svh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    color: var(--accent);\n}\n\nsection.hero video {\n    position: absolute;\n    object-fit: cover;\n    z-index: -2;\n    width: 100%;\n    height: 100%;\n}\n\nsection.hero .tinter {\n    position: absolute;\n    object-fit: cover;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n\n    background-color: #27272756;\n}\n\n.hero-text {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n\n    text-align: center;\n    align-items: center;\n}\n\n.hero-text h2 {\n    font-size: 1.5rem;\n}\n\n.hero-text h1 {\n    font-size: 4rem;\n    width: 70%;\n}\n/****/\n\n/* || Latest feed and slider */\n.latest-feed {\n    padding: 120px 17%;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n\n}\n\n.latest-feed > h3 {\n    border-top: 1px solid var(--accent-alt);\n    width: 400px;\n    padding-top: 30px;\n    font-size: 2rem;\n}\n\n.latest-feed .container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 25px;\n\n}\n\n.arrow-holder {\n    display: flex;\n    gap: 20px;\n    justify-self: right;\n}\n\n.arrow-holder button {\n    width: 40px;\n    height: 40px;\n    font-size: 1.5rem;\n}\n\n.slider-frame {\n    height: 500px;\n    overflow-x: hidden; /* Removing this makes everything shift to the right (i think cause it lets slider get super big */\n}\n\n.slider {\n    position: relative;\n    display: flex;\n    gap: 20px;\n    height: 100%;\n    transition: right 300ms linear; \n    right: 0%;\n}\n\n.card {\n    flex: 1; \n    height: 100%;\n    box-sizing: border-box;\n    display: flex; \n    flex-direction: column;\n    gap: 10px;\n}\n\n.card .img-holder {\n    height: 60%;\n    width: 100%;\n    position: relative;\n}\n\n.card img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    border-radius: 8px;\n    border-bottom-left-radius: 0px;\n}\n\n.img-holder button {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    z-index: 2;\n    border-radius: 8px 0 8px 0;\n    font-size: 30px;\n}\n\n.card h3, .card p {\n    margin: 0 20px;\n    width: 80%;\n}\n\n/* || Footer */ \nfooter {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 1fr auto;\n    gap: 55px;\n\n    padding: 40px 17%;\n\n    background-color: var(--second);\n}\n\nfooter > ul li:first-child, footer .socials h3 {\n    font-weight: 700;\n    font-size: inherit;\n    margin-bottom: 15px;\n}\n\nfooter .logo-container {\n    grid-row: 1 / 2;\n    grid-column: 1 / 1;\n}\n\nfooter .opportunities {\n    grid-row: 1 / 2;\n}\n\nfooter .socials {\n    grid-row: 1 / 2;\n}\n\n.socials .social-links {\n    display: flex;\n    gap: 15px;\n}\n\n.social-icon.x {\n    width: 25px;\n}\n\nfooter .boring-stuff {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    display: flex;\n    justify-content: space-between;\n}\n\nfooter .boring-stuff .boring-links {\n    flex: 2; \n\n    display: flex;\n    justify-content: center;\n    gap: 70px;\n}\n\n.topper {\n    color: var(--primary);\n    font-weight: 700;\n}\n\n.topper:hover {\n    color: var(--primary-light);\n}\n\n.topper:active {\n    color: var(--primary-fade);\n}\n\n@media (max-width: 600px) {\n    header {\n        grid-template-columns: 1fr 1fr;\n    }\n    \n    header .header-links {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
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

// menu toggle
const menuToggler = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.query)('#toggle-menu');
const menu = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.query)('.menu');
const regSVG = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.query)('.menu-icon', menuToggler);
const closeSVG = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.query)('.close-menu-icon', menuToggler);
menuToggler.addEventListener('click', () => {
    menu.classList.toggle('hidden');

    regSVG.classList.toggle('hidden');
    closeSVG.classList.toggle('hidden');
});

// return to top
const topper = (0,_jeffQuery_js__WEBPACK_IMPORTED_MODULE_1__.query)('.topper');
topper.addEventListener('click', () => {
    window.scroll(0, 0);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2SkFBMkQ7QUFDdkcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxjQUFjLFlBQVksV0FBVyxVQUFVLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssS0FBSyxRQUFRLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLFdBQVcsWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxXQUFXLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSx5QkFBeUIsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLHdCQUF3QixPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxX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WjtBQUNBLGVBQWUsb0RBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG9CQUFvQixvREFBSztBQUN6QixhQUFhLG9EQUFLO0FBQ2xCLGVBQWUsb0RBQUs7QUFDcEIsaUJBQWlCLG9EQUFLO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxlQUFlLG9EQUFLO0FBQ3BCO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2plZmZRdWVyeS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc2xpZGVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG46cm9vdCB7XG4gICAgLS1wcmltYXJ5OiAjMTU2ODNmO1xuICAgIC0tcHJpbWFyeS1saWdodDogIzNhODA1ZDtcbiAgICAtLXByaW1hcnktZmFkZTogIzc3YTA4NTtcbiAgICAtLXNlY29uZDogI2QxZThmYztcbiAgICAtLXNlY29uZC1saWdodDogI2Q5ZWJmYztcbiAgICAtLXNlY29uZC1mYWRlOiAjZWJmNWZkO1xuICAgIC0tYWNjZW50OiAjRkZGRkZGO1xuICAgIC0tYWNjZW50LWFsdDogIzk1OWE5YjsgXG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuYnV0dG9uLCBpbnB1dCwgbGFiZWwge1xuICAgIGJveC1zaXppbmc6Y29udGVudC1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b246YWN0aXZlLCBpbnB1dDphY3RpdmUsIGxhYmVsOmFjdGl2ZXtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbjp3aGVyZSh0ZXh0YXJlYSksXG46d2hlcmUoaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgaW5wdXRbdHlwZT1cInVybFwiXSl7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIG91dGxpbmU6IG5vbmU7XG59IFxuXG4vKiBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1waXAtZGFya2VuZWQpO1xuICAgIGNvbG9yLXNjaGVtZTogdmFyKC0tcGlwLWRhcmtlbmVkKTtcbn0gKi9cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbnN2ZyB7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuXG4vKiBjdXN0b20gc3R5bGluZyB0aGluZ3MgKi8gXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG59XG5cbi5iYXNpYy1idXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZCk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmJhc2ljLWJ1dDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG59XG5cbi5iYXNpYy1idXQ6ZGlzYWJsZWQsIC5iYXNpYy1idXQ6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtZmFkZSk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZmFkZSk7XG5cbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogfHwgSGVhZGVyICovXG5oZWFkZXIgeyBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGhlaWdodDogMTAwcHg7XG5cbiAgICBwYWRkaW5nOiAwIDQwcHg7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcblxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXMgbGluZWFyLCB0b3AgMTAwbXMgZWFzZS1pbiwgY29sb3IgNDAwbXMgbGluZWFyO1xuICAgIHotaW5kZXg6IDQ7XG59XG5cbmhlYWRlci5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgXG4gICAgdG9wOiAtMTAwcHg7XG59XG5cbmhlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmhlYWRlcjpob3ZlciBzdmcge1xuICAgIGZpbGw6IGJsYWNrO1xufVxuXG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbi5sb2dvIHtcbiAgICB3aWR0aDogMTEwcHg7ICAgICAgXG59XG5cbi5sb2dvLWNvbnRhaW5lciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmhlYWRlciBzdmcge1xuICAgIGZpbGw6IHZhcigtLWFjY2VudCk7XG59XG5cbi5oZWFkZXItbGlua3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBnYXA6IDgwcHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItbGlua3MgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4uaGVhZGVyLWxpbmtzIGE6aG92ZXIge1xuICAgIC8qIHRleHQtc2hhZG93OiAwLjhweCAwcHggMHB4IGJsYWNrLCAtMC44cHggMHB4IDBweCBibGFjaztcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4OyAqL1xuXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLm5hdi1pY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xufVxuXG4ubmF2LWljb25zIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5uYXYtaWNvbnMgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xufVxuXG4ubmF2LWljb25zIGJ1dHRvbjpob3ZlciBzdmcge1xuICAgIGZpbGw6IHZhcigtLXByaW1hcnkpO1xufVxuXG4ubmF2LWljb25zIGJ1dHRvbiNsYW5nLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuaGVhZGVyOmhvdmVyIGJ1dHRvbiNsYW5nLXRvZ2dsZSBzcGFuIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn0gXG4vKioqKi9cblxuLyogfHwgZHJvcGRvd24gbWVudSAqL1xuLm1lbnUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAzO1xuICAgIGxlZnQ6IDAlO1xuICAgIHRyYW5zaXRpb246IGxlZnQgMjAwbXMgZWFzZS1pbjtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDBzdmg7XG4gICAgd2lkdGg6IDEwMHN2dztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tZW51IHNlY3Rpb24ub25lIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE2MHB4IDE0MHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogODBweDtcbn1cblxuLm1lbnUgc2VjdGlvbi5vbmUgLmJpZy1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNjBweDtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5tZW51IHNlY3Rpb24ub25lIC5iaWctbGlua3MgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5tZW51IHNlY3Rpb24ub25lIC5iaWctbGlua3MgbGk6aG92ZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWVudSBzZWN0aW9uLm9uZSAuYmlnLWxpbmtzIGxpOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDIwbXMgbGluZWFyO1xufVxuXG4ubWVudSBzZWN0aW9uLm9uZSAuYmlnLWxpbmtzIGxpOmhvdmVyOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLm1lbnUgc2VjdGlvbi5vbmUgLnNtYWxsLWxpbmtzIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5tZW51IHNlY3Rpb24udHdvIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbGVmdDogMzAlO1xuICAgIHBhZGRpbmc6IDE2MHB4IDkwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWxpZ2h0KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZW51IHNlY3Rpb24udHdvIC5zdWItbGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA0MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgXG59XG5cbi5tZW51IHNlY3Rpb24udHdvIC5zdWItbGlua3MgbGk6aG92ZXIsIC5tZW51IHNlY3Rpb24ub25lIC5zbWFsbC1saW5rcyBsaTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDEwMG1zIGxpbmVhcjtcbn1cblxuLm1lbnUgc2VjdGlvbi50d28gLnN1Yi1saW5rcyAuYXJyb3cge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLm1lbnUuaGlkZGVuIHtcbiAgICBsZWZ0OiAtMTAwJTtcbn1cblxuLm1lbnU6bm90KC5oaWRkZW4pICsgaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwbXMgbGluZWFyLCB0b3AgMTAwbXMgZWFzZS1pbjsgLyogcmVkZWNsYXJlIHRyYW5zaXRpb24gdG8gb3ZlcnJpZGUgc29tZSB0aGluZ3MgKi87XG59XG5cbi5tZW51Om5vdCguaGlkZGVuKSArIGhlYWRlciAubG9nby1jb250YWluZXIge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1lbnU6bm90KC5oaWRkZW4pICsgaGVhZGVyIC5oZWFkZXItbGlua3Mge1xuICAgIHdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZW51Om5vdCguaGlkZGVuKSArIGhlYWRlciAubmF2LWljb25zIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cblxuLm1lbnU6bm90KC5oaWRkZW4pICsgaGVhZGVyIC5uYXYtaWNvbnMgYnV0dG9uIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5tZW51Om5vdCguaGlkZGVuKSArIGhlYWRlciAubmF2LWljb25zIGJ1dHRvbiNsYW5nLXRvZ2dsZSB7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZpbGw6IHZhcigtLXByaW1hcnkpO1xufVxuLyoqKiovXG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogfHwgaGVybyAqLyBcbnNlY3Rpb24uaGVybyB7XG4gICAgaGVpZ2h0OiAxMDBzdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbnNlY3Rpb24uaGVybyB2aWRlbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHotaW5kZXg6IC0yO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuc2VjdGlvbi5oZXJvIC50aW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3NTY7XG59XG5cbi5oZXJvLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDMwcHg7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlcm8tdGV4dCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5oZXJvLXRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB3aWR0aDogNzAlO1xufVxuLyoqKiovXG5cbi8qIHx8IExhdGVzdCBmZWVkIGFuZCBzbGlkZXIgKi9cbi5sYXRlc3QtZmVlZCB7XG4gICAgcGFkZGluZzogMTIwcHggMTclO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDQwcHg7XG5cbn1cblxuLmxhdGVzdC1mZWVkID4gaDMge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtYWx0KTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubGF0ZXN0LWZlZWQgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgIGdhcDogMjVweDtcblxufVxuXG4uYXJyb3ctaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xufVxuXG4uYXJyb3ctaG9sZGVyIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uc2xpZGVyLWZyYW1lIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogUmVtb3ZpbmcgdGhpcyBtYWtlcyBldmVyeXRoaW5nIHNoaWZ0IHRvIHRoZSByaWdodCAoaSB0aGluayBjYXVzZSBpdCBsZXRzIHNsaWRlciBnZXQgc3VwZXIgYmlnICovXG59XG5cbi5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogcmlnaHQgMzAwbXMgbGluZWFyOyBcbiAgICByaWdodDogMCU7XG59XG5cbi5jYXJkIHtcbiAgICBmbGV4OiAxOyBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmNhcmQgLmltZy1ob2xkZXIge1xuICAgIGhlaWdodDogNjAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbn1cblxuLmltZy1ob2xkZXIgYnV0dG9uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDhweCAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmNhcmQgaDMsIC5jYXJkIHAge1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi8qIHx8IEZvb3RlciAqLyBcbmZvb3RlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG4gICAgZ2FwOiA1NXB4O1xuXG4gICAgcGFkZGluZzogNDBweCAxNyU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xufVxuXG5mb290ZXIgPiB1bCBsaTpmaXJzdC1jaGlsZCwgZm9vdGVyIC5zb2NpYWxzIGgzIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5mb290ZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xufVxuXG5mb290ZXIgLm9wcG9ydHVuaXRpZXMge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuZm9vdGVyIC5zb2NpYWxzIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5zb2NpYWxzIC5zb2NpYWwtbGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4uc29jaWFsLWljb24ueCB7XG4gICAgd2lkdGg6IDI1cHg7XG59XG5cbmZvb3RlciAuYm9yaW5nLXN0dWZmIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuZm9vdGVyIC5ib3Jpbmctc3R1ZmYgLmJvcmluZy1saW5rcyB7XG4gICAgZmxleDogMjsgXG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNzBweDtcbn1cblxuLnRvcHBlciB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50b3BwZXI6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbn1cblxuLnRvcHBlcjphY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWZhZGUpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBoZWFkZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgfVxuICAgIFxuICAgIGhlYWRlciAuaGVhZGVyLWxpbmtzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtEQUF1RTtBQUMzRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7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OztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLE9BQU87O0lBRVAsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiAjMTU2ODNmO1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICMzYTgwNWQ7XFxuICAgIC0tcHJpbWFyeS1mYWRlOiAjNzdhMDg1O1xcbiAgICAtLXNlY29uZDogI2QxZThmYztcXG4gICAgLS1zZWNvbmQtbGlnaHQ6ICNkOWViZmM7XFxuICAgIC0tc2Vjb25kLWZhZGU6ICNlYmY1ZmQ7XFxuICAgIC0tYWNjZW50OiAjRkZGRkZGO1xcbiAgICAtLWFjY2VudC1hbHQ6ICM5NTlhOWI7IFxcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uLCBpbnB1dCwgbGFiZWwge1xcbiAgICBib3gtc2l6aW5nOmNvbnRlbnQtYm94O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b246YWN0aXZlLCBpbnB1dDphY3RpdmUsIGxhYmVsOmFjdGl2ZXtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG46d2hlcmUodGV4dGFyZWEpLFxcbjp3aGVyZShpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sIGlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXSl7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufSBcXG5cXG4vKiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcGlwLWRhcmtlbmVkKTtcXG4gICAgY29sb3Itc2NoZW1lOiB2YXIoLS1waXAtZGFya2VuZWQpO1xcbn0gKi9cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbnN2ZyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuXFxuLyogY3VzdG9tIHN0eWxpbmcgdGhpbmdzICovIFxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbn1cXG5cXG4uYmFzaWMtYnV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5iYXNpYy1idXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbi5iYXNpYy1idXQ6ZGlzYWJsZWQsIC5iYXNpYy1idXQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWZhZGUpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1mYWRlKTtcXG5cXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIHx8IEhlYWRlciAqL1xcbmhlYWRlciB7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcblxcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG5cXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXMgbGluZWFyLCB0b3AgMTAwbXMgZWFzZS1pbiwgY29sb3IgNDAwbXMgbGluZWFyO1xcbiAgICB6LWluZGV4OiA0O1xcbn1cXG5cXG5oZWFkZXIuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIHRvcDogLTEwMHB4O1xcbn1cXG5cXG5oZWFkZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmhlYWRlcjpob3ZlciBzdmcge1xcbiAgICBmaWxsOiBibGFjaztcXG59XFxuXFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDExMHB4OyAgICAgIFxcbn1cXG5cXG4ubG9nby1jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaGVhZGVyIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5oZWFkZXItbGlua3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDgwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWxpbmtzIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmhlYWRlci1saW5rcyBhOmhvdmVyIHtcXG4gICAgLyogdGV4dC1zaGFkb3c6IDAuOHB4IDBweCAwcHggYmxhY2ssIC0wLjhweCAwcHggMHB4IGJsYWNrO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4OyAqL1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ubmF2LWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4ubmF2LWljb25zIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm5hdi1pY29ucyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xcbn1cXG5cXG4ubmF2LWljb25zIGJ1dHRvbjpob3ZlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLm5hdi1pY29ucyBidXR0b24jbGFuZy10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmhlYWRlcjpob3ZlciBidXR0b24jbGFuZy10b2dnbGUgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59IFxcbi8qKioqL1xcblxcbi8qIHx8IGRyb3Bkb3duIG1lbnUgKi9cXG4ubWVudSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgbGVmdDogMCU7XFxuICAgIHRyYW5zaXRpb246IGxlZnQgMjAwbXMgZWFzZS1pbjtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAxMDBzdmg7XFxuICAgIHdpZHRoOiAxMDBzdnc7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tZW51IHNlY3Rpb24ub25lIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTYwcHggMTQwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogODBweDtcXG59XFxuXFxuLm1lbnUgc2VjdGlvbi5vbmUgLmJpZy1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNjBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVudSBzZWN0aW9uLm9uZSAuYmlnLWxpbmtzIGxpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5tZW51IHNlY3Rpb24ub25lIC5iaWctbGlua3MgbGk6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1lbnUgc2VjdGlvbi5vbmUgLmJpZy1saW5rcyBsaTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMjBtcyBsaW5lYXI7XFxufVxcblxcbi5tZW51IHNlY3Rpb24ub25lIC5iaWctbGlua3MgbGk6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogLTEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4ubWVudSBzZWN0aW9uLm9uZSAuc21hbGwtbGlua3MgbGk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5tZW51IHNlY3Rpb24udHdvIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbGVmdDogMzAlO1xcbiAgICBwYWRkaW5nOiAxNjBweCA5MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtbGlnaHQpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tZW51IHNlY3Rpb24udHdvIC5zdWItbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgXFxufVxcblxcbi5tZW51IHNlY3Rpb24udHdvIC5zdWItbGlua3MgbGk6aG92ZXIsIC5tZW51IHNlY3Rpb24ub25lIC5zbWFsbC1saW5rcyBsaTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgbGluZWFyO1xcbn1cXG5cXG4ubWVudSBzZWN0aW9uLnR3byAuc3ViLWxpbmtzIC5hcnJvdyB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLm1lbnUuaGlkZGVuIHtcXG4gICAgbGVmdDogLTEwMCU7XFxufVxcblxcbi5tZW51Om5vdCguaGlkZGVuKSArIGhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwbXMgbGluZWFyLCB0b3AgMTAwbXMgZWFzZS1pbjsgLyogcmVkZWNsYXJlIHRyYW5zaXRpb24gdG8gb3ZlcnJpZGUgc29tZSB0aGluZ3MgKi87XFxufVxcblxcbi5tZW51Om5vdCguaGlkZGVuKSArIGhlYWRlciAubG9nby1jb250YWluZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5tZW51Om5vdCguaGlkZGVuKSArIGhlYWRlciAuaGVhZGVyLWxpbmtzIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tZW51Om5vdCguaGlkZGVuKSArIGhlYWRlciAubmF2LWljb25zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xcbn1cXG5cXG4ubWVudTpub3QoLmhpZGRlbikgKyBoZWFkZXIgLm5hdi1pY29ucyBidXR0b24gc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5tZW51Om5vdCguaGlkZGVuKSArIGhlYWRlciAubmF2LWljb25zIGJ1dHRvbiNsYW5nLXRvZ2dsZSB7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeSk7XFxufVxcbi8qKioqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiB8fCBoZXJvICovIFxcbnNlY3Rpb24uaGVybyB7XFxuICAgIGhlaWdodDogMTAwc3ZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbnNlY3Rpb24uaGVybyB2aWRlbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHotaW5kZXg6IC0yO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5zZWN0aW9uLmhlcm8gLnRpbnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3NTY7XFxufVxcblxcbi5oZXJvLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8tdGV4dCBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaGVyby10ZXh0IGgxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG4vKioqKi9cXG5cXG4vKiB8fCBMYXRlc3QgZmVlZCBhbmQgc2xpZGVyICovXFxuLmxhdGVzdC1mZWVkIHtcXG4gICAgcGFkZGluZzogMTIwcHggMTclO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDQwcHg7XFxuXFxufVxcblxcbi5sYXRlc3QtZmVlZCA+IGgzIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1hbHQpO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5sYXRlc3QtZmVlZCAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAyNXB4O1xcblxcbn1cXG5cXG4uYXJyb3ctaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4uYXJyb3ctaG9sZGVyIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc2xpZGVyLWZyYW1lIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBSZW1vdmluZyB0aGlzIG1ha2VzIGV2ZXJ5dGhpbmcgc2hpZnQgdG8gdGhlIHJpZ2h0IChpIHRoaW5rIGNhdXNlIGl0IGxldHMgc2xpZGVyIGdldCBzdXBlciBiaWcgKi9cXG59XFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IHJpZ2h0IDMwMG1zIGxpbmVhcjsgXFxuICAgIHJpZ2h0OiAwJTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBmbGV4OiAxOyBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY2FyZCAuaW1nLWhvbGRlciB7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2FyZCBpbWcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxufVxcblxcbi5pbWctaG9sZGVyIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDAgOHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmNhcmQgaDMsIC5jYXJkIHAge1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLyogfHwgRm9vdGVyICovIFxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICAgIGdhcDogNTVweDtcXG5cXG4gICAgcGFkZGluZzogNDBweCAxNyU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZCk7XFxufVxcblxcbmZvb3RlciA+IHVsIGxpOmZpcnN0LWNoaWxkLCBmb290ZXIgLnNvY2lhbHMgaDMge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbmZvb3RlciAubG9nby1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcXG59XFxuXFxuZm9vdGVyIC5vcHBvcnR1bml0aWVzIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5mb290ZXIgLnNvY2lhbHMge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5zb2NpYWxzIC5zb2NpYWwtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5zb2NpYWwtaWNvbi54IHtcXG4gICAgd2lkdGg6IDI1cHg7XFxufVxcblxcbmZvb3RlciAuYm9yaW5nLXN0dWZmIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvb3RlciAuYm9yaW5nLXN0dWZmIC5ib3JpbmctbGlua3Mge1xcbiAgICBmbGV4OiAyOyBcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNzBweDtcXG59XFxuXFxuLnRvcHBlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvcHBlcjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuLnRvcHBlcjphY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1mYWRlKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIH1cXG4gICAgXFxuICAgIGhlYWRlciAuaGVhZGVyLWxpbmtzIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBEb20gbWFuaXB1bGF0aW9uXG5mdW5jdGlvbiBxdWVyeShzZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQpIHtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBxdWVyeUFsbChzZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQpIHtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0U2VwYXJhdG9yKHN0YXJ0LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IG5leHRIYXNoID0gc2VsZWN0b3IuaW5kZXhPZignIycsIHN0YXJ0KTtcbiAgICBjb25zdCBuZXh0RG90ID0gc2VsZWN0b3IuaW5kZXhPZignLicsIHN0YXJ0KTtcblxuICAgIGlmIChuZXh0SGFzaCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIG5leHREb3Q7XG4gICAgfVxuICAgIGlmIChuZXh0RG90ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gbmV4dEhhc2g7XG4gICAgfVxuICAgIHJldHVybiBuZXh0SGFzaCA+IG5leHREb3QgPyBuZXh0RG90IDogbmV4dEhhc2g7XG59XG5cbmZ1bmN0aW9uIG1ha2Uoc2VsZWN0b3IsIHBhcmVudCkge1xuICAgIGxldCBsYXN0SW5kID0gZ2V0TmV4dFNlcGFyYXRvcigwLCBzZWxlY3Rvcik7XG5cbiAgICBjb25zdCBjb3JyZWN0ZWRMYXN0SW5kID0gbGFzdEluZCA+IC0xID8gbGFzdEluZCA6IHNlbGVjdG9yLmxlbmd0aDtcbiAgICBjb25zdCB0eXBlID0gc2VsZWN0b3Iuc2xpY2UoMCwgY29ycmVjdGVkTGFzdEluZCk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgbGV0IGlkO1xuICAgIHdoaWxlIChsYXN0SW5kID4gLTEpIHtcbiAgICAgICAgY29uc3QgaW5kID0gZ2V0TmV4dFNlcGFyYXRvcihsYXN0SW5kICsgMSwgc2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBjb3JyZWN0ZWRJbmQgPSBpbmQgPiAtMSA/IGluZCA6IHNlbGVjdG9yLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc3ViU3RyID0gc2VsZWN0b3Iuc2xpY2UobGFzdEluZCArIDEsIGNvcnJlY3RlZEluZCk7XG5cbiAgICAgICAgaWYgKHN1YlN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1VzYWdlIGVycm9yOiBUcmllZCB0byB1c2UgdHdvIHN5bWJvbHMgZm9yIGNsYXNzIGFuZC9vciBpZCBpbiBhIHJvdy4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN5bSA9IHNlbGVjdG9yLmF0KGxhc3RJbmQpO1xuICAgICAgICBpZiAoc3ltID09PSAnLicpIHtcbiAgICAgICAgICAgIGNsYXNzZXMudW5zaGlmdChzdWJTdHIpO1xuICAgICAgICB9IGVsc2UgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlkID0gc3ViU3RyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICBcIkFyZ3VtZW50IGVycm9yOiBlbGVtZW50cyBjYW4ndCBoYXZlIG11bHRpcGxlIGlkc1wiXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdEluZCA9IGluZDtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2xzID0gY2xhc3Nlc1tpXTtcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICAgIGlmIChpZCkgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5hcHBlbmQobmV3RWxlbWVudCk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNscykge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbHMpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIocmVmZXJlbmNlTm9kZSwgbmV3Tm9kZSkge1xuICAgIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XG59XG5cbi8vIE9iamVjdCBzdHVmZlxuY29uc3QgRmFjdG9yeSA9IHtcbiAgICBwcm9kdWNlKHByb3RvLCBwdWJsaWNPYmogPSB7fSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvKSwgcHVibGljT2JqKTtcbiAgICB9LFxufTtcblxuLy8gZXhwb3J0IHN0YXRlbWVudFxuZXhwb3J0IHsgbWFrZSwgcXVlcnksIHF1ZXJ5QWxsLCBGYWN0b3J5LCB0b2dnbGVDbGFzcywgaW5zZXJ0QWZ0ZXIgfTtcbiIsImZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbnMobmV4dEJ1dHRvbiwgYmFja0J1dHRvbiwgY3VyclNsaWRlLCBtYXhTbGlkZSwgbWluU2xpZGUpIHtcbiAgICBjb25zdCBjYW5TbGlkZUZvcndhcmQgPSBjdXJyU2xpZGUgPCBtYXhTbGlkZSAtIDE7XG4gICAgY29uc3QgY2FuU2xpZGVCYWNrID0gY3VyclNsaWRlID4gbWluU2xpZGU7XG5cbiAgICBuZXh0QnV0dG9uLmRpc2FibGVkID0gIWNhblNsaWRlRm9yd2FyZDtcbiAgICBiYWNrQnV0dG9uLmRpc2FibGVkID0gIWNhblNsaWRlQmFjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2xpZGVyKFxuICAgIG5leHRCdXR0b24sXG4gICAgYmFja0J1dHRvbixcbiAgICBzbGlkZXJFbG0sXG4gICAgY2FyZENvdW50LFxuICAgIGNhcmRzUGVyU2xpZGVcbikge1xuICAgIGNvbnN0IG1pblNsaWRlID0gMDtcbiAgICBjb25zdCBtYXhTbGlkZSA9IGNhcmRDb3VudCAvIGNhcmRzUGVyU2xpZGU7XG5cbiAgICBsZXQgY3VyclNsaWRlID0gMDtcblxuICAgIHNsaWRlckVsbS5zdHlsZS53aWR0aCA9IGBjYWxjKDEwMCUgKiAke21heFNsaWRlfSlgO1xuICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyU2xpZGUgPCBtYXhTbGlkZSAtIDEpIHtcbiAgICAgICAgICAgIGN1cnJTbGlkZSArPSAxO1xuICAgICAgICAgICAgc2xpZGVyRWxtLnN0eWxlLnJpZ2h0ID0gYCR7Y3VyclNsaWRlICogMTAwfSVgO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUJ1dHRvbnMobmV4dEJ1dHRvbiwgYmFja0J1dHRvbiwgY3VyclNsaWRlLCBtYXhTbGlkZSwgbWluU2xpZGUpO1xuICAgIH0pO1xuICAgIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyU2xpZGUgPiBtaW5TbGlkZSkge1xuICAgICAgICAgICAgY3VyclNsaWRlIC09IDE7XG4gICAgICAgICAgICBzbGlkZXJFbG0uc3R5bGUucmlnaHQgPSBgJHtjdXJyU2xpZGUgKiAxMDB9JWA7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQnV0dG9ucyhuZXh0QnV0dG9uLCBiYWNrQnV0dG9uLCBjdXJyU2xpZGUsIG1heFNsaWRlLCBtaW5TbGlkZSk7XG4gICAgfSk7XG5cbiAgICB1cGRhdGVCdXR0b25zKG5leHRCdXR0b24sIGJhY2tCdXR0b24sIGN1cnJTbGlkZSwgbWF4U2xpZGUsIG1pblNsaWRlKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBxdWVyeSwgbWFrZSB9IGZyb20gJy4vamVmZlF1ZXJ5LmpzJztcbmltcG9ydCBjcmVhdGVTbGlkZXIgZnJvbSAnLi9zbGlkZXIuanMnO1xuXG5jb25zdCBzbGlkZXIgPSBxdWVyeSgnLnNsaWRlcicpO1xuY29uc3Qgc2xpZGVyRm9yd2FyZCA9IHF1ZXJ5KCcuYXJyb3ctaG9sZGVyIC5mb3J3YXJkJyk7XG5jb25zdCBzbGlkZXJCYWNrID0gcXVlcnkoJy5hcnJvdy1ob2xkZXIgLmJhY2snKTtcblxuZnVuY3Rpb24gY3JlYXRlQ2FyZCh0aXRsZSwgZGVzYykge1xuICAgIGNvbnN0IGNhcmQgPSBtYWtlKCdkaXYuY2FyZCcsIHNsaWRlcik7XG5cbiAgICBjb25zdCBpbWdIb2xkZXIgPSBtYWtlKCdkaXYuaW1nLWhvbGRlcicsIGNhcmQpO1xuICAgIGNvbnN0IGltZyA9IG1ha2UoJ2ltZycsIGltZ0hvbGRlcik7XG4gICAgaW1nLnNyYyA9XG4gICAgICAgICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zOTUxOTYvcGV4ZWxzLXBob3RvLTM5NTE5Ni5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0xJztcbiAgICBjb25zdCBidXQgPSBtYWtlKCdidXR0b24uYmFzaWMtYnV0JywgaW1nSG9sZGVyKTtcbiAgICBidXQudGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgICBjb25zdCBoMyA9IG1ha2UoJ2gzJywgY2FyZCk7XG4gICAgaDMudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBjb25zdCBwID0gbWFrZSgncCcsIGNhcmQpO1xuICAgIHAudGV4dENvbnRlbnQgPSBkZXNjO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkcyhjb3VudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSkge1xuICAgICAgICBjcmVhdGVDYXJkKCdUZXN0JywgJ1RoaXMgaXMgdGhlIGRlc2NyaXB0aW9uIGZvciB0aGUgdGVzdCBjYXJkJyk7XG4gICAgfVxufVxuXG5jb25zdCBjYXJkQ291bnQgPSAxNjtcbmNvbnN0IGNhcmRzUGVyU2xpZGUgPSA0O1xuXG5jcmVhdGVDYXJkcyhjYXJkQ291bnQpO1xuY3JlYXRlU2xpZGVyKHNsaWRlckZvcndhcmQsIHNsaWRlckJhY2ssIHNsaWRlciwgY2FyZENvdW50LCBjYXJkc1BlclNsaWRlKTtcblxuLy8gaGlkZSBoZWFkZXIgb24gc2Nyb2xsIGNvZGVcbmNvbnN0IGhlYWRlciA9IHF1ZXJ5KCdoZWFkZXInKTtcbmxldCBsYXN0S25vd25TY3JvbGxQb3NpdGlvbjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBsYXN0S25vd25TY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmIChsYXN0S25vd25TY3JvbGxQb3NpdGlvbiA+IDEwMCkge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbn0pO1xuXG4vLyBtZW51IHRvZ2dsZVxuY29uc3QgbWVudVRvZ2dsZXIgPSBxdWVyeSgnI3RvZ2dsZS1tZW51Jyk7XG5jb25zdCBtZW51ID0gcXVlcnkoJy5tZW51Jyk7XG5jb25zdCByZWdTVkcgPSBxdWVyeSgnLm1lbnUtaWNvbicsIG1lbnVUb2dnbGVyKTtcbmNvbnN0IGNsb3NlU1ZHID0gcXVlcnkoJy5jbG9zZS1tZW51LWljb24nLCBtZW51VG9nZ2xlcik7XG5tZW51VG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgcmVnU1ZHLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGNsb3NlU1ZHLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbi8vIHJldHVybiB0byB0b3BcbmNvbnN0IHRvcHBlciA9IHF1ZXJ5KCcudG9wcGVyJyk7XG50b3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbCgwLCAwKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9