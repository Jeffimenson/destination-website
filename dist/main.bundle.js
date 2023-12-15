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
    --second-light: #e5f2ff;
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
    font-weight: 700;
}

header:hover button#lang-toggle span {
    color: var(--primary);
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
    position: relative;
    left: -1000%;
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
    left: 0;
    object-fit: cover;
    z-index: -2;
    width: 100%;
    height: 100%;
}

section.hero .tinter {
    position: absolute;
    left: 0;
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

    background-color: var(--second-light);
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

@media (max-width: 900px) {
    header {
        grid-template-columns: 1fr;
    }
    
    header .header-links {
        display: none;
    }

    header .logo-container {
        justify-self: left;
    }

    body .nav-icons {
        position: fixed;
        bottom: 30px;
        left: 25%;
        gap: 0;
        width: 50%;
        justify-content: center;

    }

    body .nav-icons button {
        background-color: white;
        padding: 5px 7px;
        color: var(--primary);

    }

    body .nav-icons #lang-toggle {
        gap: 4px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;

        box-shadow: -4px 4px 5px rgba(0, 0, 0, 0.123);
    }

    body .nav-icons button svg {
        fill: var(--primary);
    }

    body .nav-icons #toggle-menu {
        order: 1;
        padding: 8px;
        background-color: var(--second);
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.123);
    }

    body .nav-icons #search {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        order: 2;
        box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.123);
    }

    .menu {
        left: 0;
        top: -100svh;
    }

    .menu:not(.hidden) + header .nav-icons button#lang-toggle {
        position: static;
    }

    .menu:not(.hidden) + header .nav-icons button:not(#toggle-menu) {
        background-color: white;
    }

    .hero-text h2 {
        font-size: 1rem;
    }

    .hero-text h1 {
        font-size: 2rem;
        width: 80vw;
    }

    .latest-feed {
        padding: 120px 10px;
    }

    .latest-feed > h3 {
        border-top: 1px solid var(--accent-alt);
        width: 230px;
        padding-top: 30px;
        font-size: 2rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Quicksand';\n    src: url('./assets/Quicksand-VariableFont_wght.ttf') format('truetype');\n}\n\n:root {\n    --primary: #15683f;\n    --primary-light: #3a805d;\n    --primary-fade: #77a085;\n    --second: #d1e8fc;\n    --second-light: #e5f2ff;\n    --second-fade: #ebf5fd;\n    --accent: #FFFFFF;\n    --accent-alt: #959a9b; \n}\n\nhtml {\n    font-family: 'Quicksand', Helvetica, sans-serif;\n    font-size: 18px;\n}\n\nbody {\n    height: 100%;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbutton, input, label {\n    box-sizing:content-box;\n    border: none;\n    background-color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    color: inherit;\n\n    cursor: pointer;\n    display: block;\n}\n\nbutton:active, input:active, label:active{\n    cursor: default;\n}\n\n:where(textarea),\n:where(input[type=\"text\"], input[type=\"search\"], input[type=\"password\"], input[type=\"url\"]){\n  appearance: none;\n  border-style: solid;\n  outline: none;\n} \n\n/* input::placeholder {\n    color: var(--pip-darkened);\n    color-scheme: var(--pip-darkened);\n} */\n\nul {\n    list-style: none;\n}\n\nsvg {\n    width: 30px;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n\n/* custom styling things */ \nbody {\n    display: grid;\n    grid-template-rows: 1fr auto;\n}\n\n.basic-but {\n    background-color: var(--second);\n    color: var(--primary);\n    border-radius: 8px;\n}\n\n.basic-but:hover {\n    background-color: var(--second-light);\n    color: var(--primary-light);\n}\n\n.basic-but:disabled, .basic-but:active {\n    background-color: var(--second-fade);\n    color: var(--primary-fade);\n\n}\n\n.hidden {\n    display: none;\n}\n\n/* || Header */\nheader { \n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    align-items: center;\n\n    height: 100px;\n\n    padding: 0 40px;\n\n    width: 100%;\n    box-sizing: border-box;\n\n    position: fixed;\n    top: 0;\n\n    color: var(--accent);\n    transition: background-color 400ms linear, top 100ms ease-in, color 400ms linear;\n    z-index: 4;\n}\n\nheader.hidden {\n    display: grid;\n    \n    top: -100px;\n}\n\nheader:hover {\n    background-color: var(--accent);\n    color: black;\n}\n\nheader:hover svg {\n    fill: black;\n}\n\n\n.logo-container {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n\n}\n\n.logo {\n    width: 110px;      \n}\n\n.logo-container h1 {\n    font-size: 1.5rem;\n}\n\nheader svg {\n    fill: var(--accent);\n}\n\n.header-links {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 80px;\n    justify-self: center;\n}\n\n.header-links a {\n    text-decoration: none;\n    width: 130px;\n    color: inherit;\n    box-sizing: border-box;\n    text-align: center;\n\n}\n\n.header-links a:hover {\n    /* text-shadow: 0.8px 0px 0px black, -0.8px 0px 0px black;\n    letter-spacing: 1px; */\n\n    font-weight: bolder;\n}\n\n.nav-icons {\n    display: flex;\n    gap: 40px;\n    align-items: center;\n    justify-self: right;\n}\n\n.nav-icons button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 3px;\n    border-radius: 4px;\n}\n\n.nav-icons button:hover {\n    background-color: var(--second);\n}\n\n.nav-icons button:hover svg {\n    fill: var(--primary);\n}\n\n.nav-icons button#lang-toggle {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-weight: 700;\n}\n\nheader:hover button#lang-toggle span {\n    color: var(--primary);\n} \n/****/\n\n/* || dropdown menu */\n.menu {\n    position: fixed;\n    z-index: 3;\n    left: 0%;\n    transition: left 200ms ease-in;\n\n    box-sizing: border-box;\n    height: 100svh;\n    width: 100svw;\n\n    display: flex;\n}\n\n.menu section.one {\n    box-sizing: border-box;\n    width: 30%;\n    height: 100%;\n    background-color: white;\n    padding: 160px 140px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 80px;\n}\n\n.menu section.one .big-links {\n    display: flex;\n    flex-direction: column;\n    gap: 60px;\n    font-size: 2rem;\n}\n\n.menu section.one .big-links li {\n    position: relative;\n    height: 50px;\n}\n\n.menu section.one .big-links li:hover {\n    font-weight: bold;\n}\n\n.menu section.one .big-links li::after {\n    content: \"\";\n    display: block;\n    width: 40px;\n    height: 4px;\n    position: absolute;\n    left: 0;\n    bottom: -10px;\n    background-color: var(--primary);\n    transition: width 20ms linear;\n}\n\n.menu section.one .big-links li:hover::after {\n    content: \"\";\n    display: block;\n    width: 160px;\n    height: 4px;\n    position: absolute;\n    left: 0;\n    bottom: -10px;\n    background-color: var(--primary);\n}\n\n.menu section.one .small-links li:not(:last-child) {\n    margin-bottom: 40px;\n}\n\n.menu section.two {\n    width: 30%;\n    box-sizing: border-box;\n    left: 30%;\n    padding: 160px 90px;\n    background-color: var(--second-light);\n    height: 100%;\n}\n\n.menu section.two .sub-links {\n    display: flex;\n    gap: 40px;\n    flex-direction: column;\n    font-weight: bold;\n    font-size: 1.3rem;\n    \n}\n\n.menu section.two .sub-links li:hover, .menu section.one .small-links li:hover {\n    color: var(--primary);\n    transition: color 100ms linear;\n}\n\n.menu section.two .sub-links .arrow {\n    color: var(--primary);\n}\n\n.menu.hidden {\n    left: -100%;\n}\n\n.menu:not(.hidden) + header {\n    background-color: transparent;\n    transition: background-color 10ms linear, top 100ms ease-in; /* redeclare transition to override some things */;\n}\n\n.menu:not(.hidden) + header .logo-container {\n    color: black;\n}\n\n.menu:not(.hidden) + header .header-links {\n    width: 0;\n    overflow: hidden;\n}\n\n.menu:not(.hidden) + header .nav-icons button {\n    background-color: var(--second);\n    transition: background-color 200ms linear;\n}\n\n.menu:not(.hidden) + header .nav-icons button svg {\n    fill: var(--primary);\n}\n\n.menu:not(.hidden) + header .nav-icons button#lang-toggle {\n    position: relative;\n    left: -1000%;\n}\n/****/\n\nmain {\n    display: flex;\n    flex-direction: column;\n}\n\n/* || hero */ \nsection.hero {\n    height: 100svh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    color: var(--accent);\n}\n\nsection.hero video {\n    position: absolute;\n    left: 0;\n    object-fit: cover;\n    z-index: -2;\n    width: 100%;\n    height: 100%;\n}\n\nsection.hero .tinter {\n    position: absolute;\n    left: 0;\n    object-fit: cover;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n\n    background-color: #27272756;\n}\n\n.hero-text {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n\n    text-align: center;\n    align-items: center;\n}\n\n.hero-text h2 {\n    font-size: 1.5rem;\n}\n\n.hero-text h1 {\n    font-size: 4rem;\n    width: 70%;\n}\n/****/\n\n/* || Latest feed and slider */\n.latest-feed {\n    padding: 120px 17%;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n\n}\n\n.latest-feed > h3 {\n    border-top: 1px solid var(--accent-alt);\n    width: 400px;\n    padding-top: 30px;\n    font-size: 2rem;\n}\n\n.latest-feed .container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 25px;\n\n}\n\n.arrow-holder {\n    display: flex;\n    gap: 20px;\n    justify-self: right;\n}\n\n.arrow-holder button {\n    width: 40px;\n    height: 40px;\n    font-size: 1.5rem;\n}\n\n.slider-frame {\n    height: 500px;\n    overflow-x: hidden; /* Removing this makes everything shift to the right (i think cause it lets slider get super big */\n}\n\n.slider {\n    position: relative;\n    display: flex;\n    gap: 20px;\n    height: 100%;\n    transition: right 300ms linear; \n    right: 0%;\n}\n\n.card {\n    flex: 1; \n    height: 100%;\n    box-sizing: border-box;\n    display: flex; \n    flex-direction: column;\n    gap: 10px;\n}\n\n.card .img-holder {\n    height: 60%;\n    width: 100%;\n    position: relative;\n}\n\n.card img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    border-radius: 8px;\n    border-bottom-left-radius: 0px;\n}\n\n.img-holder button {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    z-index: 2;\n    border-radius: 8px 0 8px 0;\n    font-size: 30px;\n}\n\n.card h3, .card p {\n    margin: 0 20px;\n    width: 80%;\n}\n\n/* || Footer */ \nfooter {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 1fr auto;\n    gap: 55px;\n\n    padding: 40px 17%;\n\n    background-color: var(--second-light);\n}\n\nfooter > ul li:first-child, footer .socials h3 {\n    font-weight: 700;\n    font-size: inherit;\n    margin-bottom: 15px;\n}\n\nfooter .logo-container {\n    grid-row: 1 / 2;\n    grid-column: 1 / 1;\n}\n\nfooter .opportunities {\n    grid-row: 1 / 2;\n}\n\nfooter .socials {\n    grid-row: 1 / 2;\n}\n\n.socials .social-links {\n    display: flex;\n    gap: 15px;\n}\n\n.social-icon.x {\n    width: 25px;\n}\n\nfooter .boring-stuff {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    display: flex;\n    justify-content: space-between;\n}\n\nfooter .boring-stuff .boring-links {\n    flex: 2; \n\n    display: flex;\n    justify-content: center;\n    gap: 70px;\n}\n\n.topper {\n    color: var(--primary);\n    font-weight: 700;\n}\n\n.topper:hover {\n    color: var(--primary-light);\n}\n\n.topper:active {\n    color: var(--primary-fade);\n}\n\n@media (max-width: 900px) {\n    header {\n        grid-template-columns: 1fr;\n    }\n    \n    header .header-links {\n        display: none;\n    }\n\n    header .logo-container {\n        justify-self: left;\n    }\n\n    body .nav-icons {\n        position: fixed;\n        bottom: 30px;\n        left: 25%;\n        gap: 0;\n        width: 50%;\n        justify-content: center;\n\n    }\n\n    body .nav-icons button {\n        background-color: white;\n        padding: 5px 7px;\n        color: var(--primary);\n\n    }\n\n    body .nav-icons #lang-toggle {\n        gap: 4px;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n\n        box-shadow: -4px 4px 5px rgba(0, 0, 0, 0.123);\n    }\n\n    body .nav-icons button svg {\n        fill: var(--primary);\n    }\n\n    body .nav-icons #toggle-menu {\n        order: 1;\n        padding: 8px;\n        background-color: var(--second);\n        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.123);\n    }\n\n    body .nav-icons #search {\n        border-top-left-radius: 0px;\n        border-bottom-left-radius: 0px;\n        order: 2;\n        box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.123);\n    }\n\n    .menu {\n        left: 0;\n        top: -100svh;\n    }\n\n    .menu:not(.hidden) + header .nav-icons button#lang-toggle {\n        position: static;\n    }\n\n    .menu:not(.hidden) + header .nav-icons button:not(#toggle-menu) {\n        background-color: white;\n    }\n\n    .hero-text h2 {\n        font-size: 1rem;\n    }\n\n    .hero-text h1 {\n        font-size: 2rem;\n        width: 80vw;\n    }\n\n    .latest-feed {\n        padding: 120px 10px;\n    }\n\n    .latest-feed > h3 {\n        border-top: 1px solid var(--accent-alt);\n        width: 230px;\n        padding-top: 30px;\n        font-size: 2rem;\n    }\n}"],"sourceRoot":""}]);
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
    let maxSlide = cardCount / cardsPerSlide;

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

    const changeCPS = (cardsPerS) => {
        maxSlide = cardCount / cardsPerS;
        sliderElm.style.width = `calc(100% * ${maxSlide})`;
        updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
    };

    return {
        changeCPS,
    };
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




// const body = query('body');

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
const sliderHandler = (0,_slider_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
    sliderForward,
    sliderBack,
    slider,
    cardCount,
    cardsPerSlide
);

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

// mobile
// const navIcons = query('.nav-icons');

const mediaQuery = window.matchMedia('(max-width: 600px)');
const mobileChecker = (e) => {
    if (e.matches) {
        sliderHandler.changeCPS(1);
    } else {
        sliderHandler.changeCPS(cardsPerSlide);
    }
};
if (mediaQuery.matches) {
    mobileChecker({ matches: true });
}
mediaQuery.addEventListener('change', mobileChecker);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2SkFBMkQ7QUFDdkcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxjQUFjLFlBQVksV0FBVyxVQUFVLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssS0FBSyxRQUFRLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLFdBQVcsWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxXQUFXLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSx5QkFBeUIsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssV0FBVyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSx3QkFBd0IsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZ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QUk7O0FBRXJCLHNCQUFzQixtREFBSTtBQUMxQixnQkFBZ0IsbURBQUk7QUFDcEI7QUFDQTtBQUNBLGdCQUFnQixtREFBSTtBQUNwQjs7QUFFQSxlQUFlLG1EQUFJO0FBQ25CO0FBQ0EsY0FBYyxtREFBSTtBQUNsQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isc0RBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxvREFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esb0JBQW9CLG9EQUFLO0FBQ3pCLGFBQWEsb0RBQUs7QUFDbEIsZUFBZSxvREFBSztBQUNwQixpQkFBaUIsb0RBQUs7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGVBQWUsb0RBQUs7QUFDcEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvamVmZlF1ZXJ5LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbjpyb290IHtcbiAgICAtLXByaW1hcnk6ICMxNTY4M2Y7XG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjM2E4MDVkO1xuICAgIC0tcHJpbWFyeS1mYWRlOiAjNzdhMDg1O1xuICAgIC0tc2Vjb25kOiAjZDFlOGZjO1xuICAgIC0tc2Vjb25kLWxpZ2h0OiAjZTVmMmZmO1xuICAgIC0tc2Vjb25kLWZhZGU6ICNlYmY1ZmQ7XG4gICAgLS1hY2NlbnQ6ICNGRkZGRkY7XG4gICAgLS1hY2NlbnQtYWx0OiAjOTU5YTliOyBcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5idXR0b24sIGlucHV0LCBsYWJlbCB7XG4gICAgYm94LXNpemluZzpjb250ZW50LWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbjphY3RpdmUsIGlucHV0OmFjdGl2ZSwgbGFiZWw6YWN0aXZle1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuOndoZXJlKHRleHRhcmVhKSxcbjp3aGVyZShpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBpbnB1dFt0eXBlPVwidXJsXCJdKXtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgb3V0bGluZTogbm9uZTtcbn0gXG5cbi8qIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHZhcigtLXBpcC1kYXJrZW5lZCk7XG4gICAgY29sb3Itc2NoZW1lOiB2YXIoLS1waXAtZGFya2VuZWQpO1xufSAqL1xuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuc3ZnIHtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG5cbi8qIGN1c3RvbSBzdHlsaW5nIHRoaW5ncyAqLyBcbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbn1cblxuLmJhc2ljLWJ1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYmFzaWMtYnV0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbn1cblxuLmJhc2ljLWJ1dDpkaXNhYmxlZCwgLmJhc2ljLWJ1dDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1mYWRlKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1mYWRlKTtcblxufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiB8fCBIZWFkZXIgKi9cbmhlYWRlciB7IFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiAxMDBweDtcblxuICAgIHBhZGRpbmc6IDAgNDBweDtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcyBsaW5lYXIsIHRvcCAxMDBtcyBlYXNlLWluLCBjb2xvciA0MDBtcyBsaW5lYXI7XG4gICAgei1pbmRleDogNDtcbn1cblxuaGVhZGVyLmhpZGRlbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBcbiAgICB0b3A6IC0xMDBweDtcbn1cblxuaGVhZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuaGVhZGVyOmhvdmVyIHN2ZyB7XG4gICAgZmlsbDogYmxhY2s7XG59XG5cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiAxMTBweDsgICAgICBcbn1cblxuLmxvZ28tY29udGFpbmVyIGgxIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaGVhZGVyIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tYWNjZW50KTtcbn1cblxuLmhlYWRlci1saW5rcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdhcDogODBweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1saW5rcyBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5oZWFkZXItbGlua3MgYTpob3ZlciB7XG4gICAgLyogdGV4dC1zaGFkb3c6IDAuOHB4IDBweCAwcHggYmxhY2ssIC0wLjhweCAwcHggMHB4IGJsYWNrO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7ICovXG5cbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ubmF2LWljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG59XG5cbi5uYXYtaWNvbnMgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm5hdi1pY29ucyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZCk7XG59XG5cbi5uYXYtaWNvbnMgYnV0dG9uOmhvdmVyIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5uYXYtaWNvbnMgYnV0dG9uI2xhbmctdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmhlYWRlcjpob3ZlciBidXR0b24jbGFuZy10b2dnbGUgc3BhbiB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufSBcbi8qKioqL1xuXG4vKiB8fCBkcm9wZG93biBtZW51ICovXG4ubWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDM7XG4gICAgbGVmdDogMCU7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAyMDBtcyBlYXNlLWluO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgICB3aWR0aDogMTAwc3Z3O1xuXG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm1lbnUgc2VjdGlvbi5vbmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTYwcHggMTQwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4MHB4O1xufVxuXG4ubWVudSBzZWN0aW9uLm9uZSAuYmlnLWxpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLm1lbnUgc2VjdGlvbi5vbmUgLmJpZy1saW5rcyBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLm1lbnUgc2VjdGlvbi5vbmUgLmJpZy1saW5rcyBsaTpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZW51IHNlY3Rpb24ub25lIC5iaWctbGlua3MgbGk6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMjBtcyBsaW5lYXI7XG59XG5cbi5tZW51IHNlY3Rpb24ub25lIC5iaWctbGlua3MgbGk6aG92ZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4ubWVudSBzZWN0aW9uLm9uZSAuc21hbGwtbGlua3MgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLm1lbnUgc2VjdGlvbi50d28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBsZWZ0OiAzMCU7XG4gICAgcGFkZGluZzogMTYwcHggOTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtbGlnaHQpO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1lbnUgc2VjdGlvbi50d28gLnN1Yi1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDQwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBcbn1cblxuLm1lbnUgc2VjdGlvbi50d28gLnN1Yi1saW5rcyBsaTpob3ZlciwgLm1lbnUgc2VjdGlvbi5vbmUgLnNtYWxsLWxpbmtzIGxpOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgbGluZWFyO1xufVxuXG4ubWVudSBzZWN0aW9uLnR3byAuc3ViLWxpbmtzIC5hcnJvdyB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4ubWVudS5oaWRkZW4ge1xuICAgIGxlZnQ6IC0xMDAlO1xufVxuXG4ubWVudTpub3QoLmhpZGRlbikgKyBoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTBtcyBsaW5lYXIsIHRvcCAxMDBtcyBlYXNlLWluOyAvKiByZWRlY2xhcmUgdHJhbnNpdGlvbiB0byBvdmVycmlkZSBzb21lIHRoaW5ncyAqLztcbn1cblxuLm1lbnU6bm90KC5oaWRkZW4pICsgaGVhZGVyIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWVudTpub3QoLmhpZGRlbikgKyBoZWFkZXIgLmhlYWRlci1saW5rcyB7XG4gICAgd2lkdGg6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1lbnU6bm90KC5oaWRkZW4pICsgaGVhZGVyIC5uYXYtaWNvbnMgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG4ubWVudTpub3QoLmhpZGRlbikgKyBoZWFkZXIgLm5hdi1pY29ucyBidXR0b24gc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLm1lbnU6bm90KC5oaWRkZW4pICsgaGVhZGVyIC5uYXYtaWNvbnMgYnV0dG9uI2xhbmctdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTEwMDAlO1xufVxuLyoqKiovXG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogfHwgaGVybyAqLyBcbnNlY3Rpb24uaGVybyB7XG4gICAgaGVpZ2h0OiAxMDBzdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbnNlY3Rpb24uaGVybyB2aWRlbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgei1pbmRleDogLTI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5zZWN0aW9uLmhlcm8gLnRpbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgei1pbmRleDogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNzU2O1xufVxuXG4uaGVyby10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMHB4O1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZXJvLXRleHQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaGVyby10ZXh0IGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgd2lkdGg6IDcwJTtcbn1cbi8qKioqL1xuXG4vKiB8fCBMYXRlc3QgZmVlZCBhbmQgc2xpZGVyICovXG4ubGF0ZXN0LWZlZWQge1xuICAgIHBhZGRpbmc6IDEyMHB4IDE3JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0MHB4O1xuXG59XG5cbi5sYXRlc3QtZmVlZCA+IGgzIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWFsdCk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmxhdGVzdC1mZWVkIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBnYXA6IDI1cHg7XG5cbn1cblxuLmFycm93LWhvbGRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbn1cblxuLmFycm93LWhvbGRlciBidXR0b24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnNsaWRlci1mcmFtZSB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIFJlbW92aW5nIHRoaXMgbWFrZXMgZXZlcnl0aGluZyBzaGlmdCB0byB0aGUgcmlnaHQgKGkgdGhpbmsgY2F1c2UgaXQgbGV0cyBzbGlkZXIgZ2V0IHN1cGVyIGJpZyAqL1xufVxuXG4uc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IHJpZ2h0IDMwMG1zIGxpbmVhcjsgXG4gICAgcmlnaHQ6IDAlO1xufVxuXG4uY2FyZCB7XG4gICAgZmxleDogMTsgXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5jYXJkIC5pbWctaG9sZGVyIHtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG59XG5cbi5pbWctaG9sZGVyIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMCA4cHggMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5jYXJkIGgzLCAuY2FyZCBwIHtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgICB3aWR0aDogODAlO1xufVxuXG4vKiB8fCBGb290ZXIgKi8gXG5mb290ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xuICAgIGdhcDogNTVweDtcblxuICAgIHBhZGRpbmc6IDQwcHggMTclO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWxpZ2h0KTtcbn1cblxuZm9vdGVyID4gdWwgbGk6Zmlyc3QtY2hpbGQsIGZvb3RlciAuc29jaWFscyBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuZm9vdGVyIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcbn1cblxuZm9vdGVyIC5vcHBvcnR1bml0aWVzIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbmZvb3RlciAuc29jaWFscyB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4uc29jaWFscyAuc29jaWFsLWxpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbn1cblxuLnNvY2lhbC1pY29uLngge1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG5mb290ZXIgLmJvcmluZy1zdHVmZiB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmZvb3RlciAuYm9yaW5nLXN0dWZmIC5ib3JpbmctbGlua3Mge1xuICAgIGZsZXg6IDI7IFxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDcwcHg7XG59XG5cbi50b3BwZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udG9wcGVyOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG59XG5cbi50b3BwZXI6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1mYWRlKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgaGVhZGVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICAgIFxuICAgIGhlYWRlciAuaGVhZGVyLWxpbmtzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBoZWFkZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICAgIH1cblxuICAgIGJvZHkgLm5hdi1pY29ucyB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICBsZWZ0OiAyNSU7XG4gICAgICAgIGdhcDogMDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICB9XG5cbiAgICBib2R5IC5uYXYtaWNvbnMgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAgIH1cblxuICAgIGJvZHkgLm5hdi1pY29ucyAjbGFuZy10b2dnbGUge1xuICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcblxuICAgICAgICBib3gtc2hhZG93OiAtNHB4IDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyMyk7XG4gICAgfVxuXG4gICAgYm9keSAubmF2LWljb25zIGJ1dHRvbiBzdmcge1xuICAgICAgICBmaWxsOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICBib2R5IC5uYXYtaWNvbnMgI3RvZ2dsZS1tZW51IHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kKTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyMyk7XG4gICAgfVxuXG4gICAgYm9keSAubmF2LWljb25zICNzZWFyY2gge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjMpO1xuICAgIH1cblxuICAgIC5tZW51IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAtMTAwc3ZoO1xuICAgIH1cblxuICAgIC5tZW51Om5vdCguaGlkZGVuKSArIGhlYWRlciAubmF2LWljb25zIGJ1dHRvbiNsYW5nLXRvZ2dsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgfVxuXG4gICAgLm1lbnU6bm90KC5oaWRkZW4pICsgaGVhZGVyIC5uYXYtaWNvbnMgYnV0dG9uOm5vdCgjdG9nZ2xlLW1lbnUpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmhlcm8tdGV4dCBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICAuaGVyby10ZXh0IGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICB9XG5cbiAgICAubGF0ZXN0LWZlZWQge1xuICAgICAgICBwYWRkaW5nOiAxMjBweCAxMHB4O1xuICAgIH1cblxuICAgIC5sYXRlc3QtZmVlZCA+IGgzIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1hbHQpO1xuICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwrREFBdUU7QUFDM0U7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHNCQUFz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SSxlQUFlO1FBQ2YsV0FBVztJQUNmOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksdUNBQXVDO1FBQ3ZDLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCc7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeTogIzE1NjgzZjtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjM2E4MDVkO1xcbiAgICAtLXByaW1hcnktZmFkZTogIzc3YTA4NTtcXG4gICAgLS1zZWNvbmQ6ICNkMWU4ZmM7XFxuICAgIC0tc2Vjb25kLWxpZ2h0OiAjZTVmMmZmO1xcbiAgICAtLXNlY29uZC1mYWRlOiAjZWJmNWZkO1xcbiAgICAtLWFjY2VudDogI0ZGRkZGRjtcXG4gICAgLS1hY2NlbnQtYWx0OiAjOTU5YTliOyBcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiwgaW5wdXQsIGxhYmVsIHtcXG4gICAgYm94LXNpemluZzpjb250ZW50LWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSwgaW5wdXQ6YWN0aXZlLCBsYWJlbDphY3RpdmV7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuOndoZXJlKHRleHRhcmVhKSxcXG46d2hlcmUoaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSwgaW5wdXRbdHlwZT1cXFwidXJsXFxcIl0pe1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn0gXFxuXFxuLyogaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXBpcC1kYXJrZW5lZCk7XFxuICAgIGNvbG9yLXNjaGVtZTogdmFyKC0tcGlwLWRhcmtlbmVkKTtcXG59ICovXFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5zdmcge1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcblxcbi8qIGN1c3RvbSBzdHlsaW5nIHRoaW5ncyAqLyBcXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG59XFxuXFxuLmJhc2ljLWJ1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uYmFzaWMtYnV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4uYmFzaWMtYnV0OmRpc2FibGVkLCAuYmFzaWMtYnV0OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1mYWRlKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZmFkZSk7XFxuXFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiB8fCBIZWFkZXIgKi9cXG5oZWFkZXIgeyBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiAxMDBweDtcXG5cXG4gICAgcGFkZGluZzogMCA0MHB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zIGxpbmVhciwgdG9wIDEwMG1zIGVhc2UtaW4sIGNvbG9yIDQwMG1zIGxpbmVhcjtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuaGVhZGVyLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIFxcbiAgICB0b3A6IC0xMDBweDtcXG59XFxuXFxuaGVhZGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5oZWFkZXI6aG92ZXIgc3ZnIHtcXG4gICAgZmlsbDogYmxhY2s7XFxufVxcblxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiAxMTBweDsgICAgICBcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmhlYWRlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4uaGVhZGVyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiA4MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1saW5rcyBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5oZWFkZXItbGlua3MgYTpob3ZlciB7XFxuICAgIC8qIHRleHQtc2hhZG93OiAwLjhweCAwcHggMHB4IGJsYWNrLCAtMC44cHggMHB4IDBweCBibGFjaztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDsgKi9cXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLm5hdi1pY29ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuXFxuLm5hdi1pY29ucyBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5uYXYtaWNvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kKTtcXG59XFxuXFxuLm5hdi1pY29ucyBidXR0b246aG92ZXIgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5uYXYtaWNvbnMgYnV0dG9uI2xhbmctdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oZWFkZXI6aG92ZXIgYnV0dG9uI2xhbmctdG9nZ2xlIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufSBcXG4vKioqKi9cXG5cXG4vKiB8fCBkcm9wZG93biBtZW51ICovXFxuLm1lbnUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDIwMG1zIGVhc2UtaW47XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMTAwc3ZoO1xcbiAgICB3aWR0aDogMTAwc3Z3O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWVudSBzZWN0aW9uLm9uZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2MHB4IDE0MHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDgwcHg7XFxufVxcblxcbi5tZW51IHNlY3Rpb24ub25lIC5iaWctbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDYwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lbnUgc2VjdGlvbi5vbmUgLmJpZy1saW5rcyBsaSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubWVudSBzZWN0aW9uLm9uZSAuYmlnLWxpbmtzIGxpOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tZW51IHNlY3Rpb24ub25lIC5iaWctbGlua3MgbGk6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAtMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDIwbXMgbGluZWFyO1xcbn1cXG5cXG4ubWVudSBzZWN0aW9uLm9uZSAuYmlnLWxpbmtzIGxpOmhvdmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLm1lbnUgc2VjdGlvbi5vbmUgLnNtYWxsLWxpbmtzIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4ubWVudSBzZWN0aW9uLnR3byB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgcGFkZGluZzogMTYwcHggOTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWxpZ2h0KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWVudSBzZWN0aW9uLnR3byAuc3ViLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIFxcbn1cXG5cXG4ubWVudSBzZWN0aW9uLnR3byAuc3ViLWxpbmtzIGxpOmhvdmVyLCAubWVudSBzZWN0aW9uLm9uZSAuc21hbGwtbGlua3MgbGk6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDEwMG1zIGxpbmVhcjtcXG59XFxuXFxuLm1lbnUgc2VjdGlvbi50d28gLnN1Yi1saW5rcyAuYXJyb3cge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5tZW51LmhpZGRlbiB7XFxuICAgIGxlZnQ6IC0xMDAlO1xcbn1cXG5cXG4ubWVudTpub3QoLmhpZGRlbikgKyBoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMG1zIGxpbmVhciwgdG9wIDEwMG1zIGVhc2UtaW47IC8qIHJlZGVjbGFyZSB0cmFuc2l0aW9uIHRvIG92ZXJyaWRlIHNvbWUgdGhpbmdzICovO1xcbn1cXG5cXG4ubWVudTpub3QoLmhpZGRlbikgKyBoZWFkZXIgLmxvZ28tY29udGFpbmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubWVudTpub3QoLmhpZGRlbikgKyBoZWFkZXIgLmhlYWRlci1saW5rcyB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWVudTpub3QoLmhpZGRlbikgKyBoZWFkZXIgLm5hdi1pY29ucyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcXG59XFxuXFxuLm1lbnU6bm90KC5oaWRkZW4pICsgaGVhZGVyIC5uYXYtaWNvbnMgYnV0dG9uIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4ubWVudTpub3QoLmhpZGRlbikgKyBoZWFkZXIgLm5hdi1pY29ucyBidXR0b24jbGFuZy10b2dnbGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0xMDAwJTtcXG59XFxuLyoqKiovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIHx8IGhlcm8gKi8gXFxuc2VjdGlvbi5oZXJvIHtcXG4gICAgaGVpZ2h0OiAxMDBzdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuc2VjdGlvbi5oZXJvIHZpZGVvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgei1pbmRleDogLTI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnNlY3Rpb24uaGVybyAudGludGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc1NjtcXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVyby10ZXh0IGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5oZXJvLXRleHQgaDEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcbi8qKioqL1xcblxcbi8qIHx8IExhdGVzdCBmZWVkIGFuZCBzbGlkZXIgKi9cXG4ubGF0ZXN0LWZlZWQge1xcbiAgICBwYWRkaW5nOiAxMjBweCAxNyU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNDBweDtcXG5cXG59XFxuXFxuLmxhdGVzdC1mZWVkID4gaDMge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWFsdCk7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmxhdGVzdC1mZWVkIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBnYXA6IDI1cHg7XFxuXFxufVxcblxcbi5hcnJvdy1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxufVxcblxcbi5hcnJvdy1ob2xkZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zbGlkZXItZnJhbWUge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIFJlbW92aW5nIHRoaXMgbWFrZXMgZXZlcnl0aGluZyBzaGlmdCB0byB0aGUgcmlnaHQgKGkgdGhpbmsgY2F1c2UgaXQgbGV0cyBzbGlkZXIgZ2V0IHN1cGVyIGJpZyAqL1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogcmlnaHQgMzAwbXMgbGluZWFyOyBcXG4gICAgcmlnaHQ6IDAlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGZsZXg6IDE7IFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jYXJkIC5pbWctaG9sZGVyIHtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXJkIGltZyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG59XFxuXFxuLmltZy1ob2xkZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMCA4cHggMDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uY2FyZCBoMywgLmNhcmQgcCB7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4vKiB8fCBGb290ZXIgKi8gXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAgZ2FwOiA1NXB4O1xcblxcbiAgICBwYWRkaW5nOiA0MHB4IDE3JTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWxpZ2h0KTtcXG59XFxuXFxuZm9vdGVyID4gdWwgbGk6Zmlyc3QtY2hpbGQsIGZvb3RlciAuc29jaWFscyBoMyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuZm9vdGVyIC5sb2dvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xcbn1cXG5cXG5mb290ZXIgLm9wcG9ydHVuaXRpZXMge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbmZvb3RlciAuc29jaWFscyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnNvY2lhbHMgLnNvY2lhbC1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnNvY2lhbC1pY29uLngge1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuZm9vdGVyIC5ib3Jpbmctc3R1ZmYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuZm9vdGVyIC5ib3Jpbmctc3R1ZmYgLmJvcmluZy1saW5rcyB7XFxuICAgIGZsZXg6IDI7IFxcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA3MHB4O1xcbn1cXG5cXG4udG9wcGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG9wcGVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4udG9wcGVyOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWZhZGUpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuICAgIFxcbiAgICBoZWFkZXIgLmhlYWRlci1saW5rcyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciAubG9nby1jb250YWluZXIge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgIGJvZHkgLm5hdi1pY29ucyB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBib3R0b206IDMwcHg7XFxuICAgICAgICBsZWZ0OiAyNSU7XFxuICAgICAgICBnYXA6IDA7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIH1cXG5cXG4gICAgYm9keSAubmF2LWljb25zIGJ1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuXFxuICAgIH1cXG5cXG4gICAgYm9keSAubmF2LWljb25zICNsYW5nLXRvZ2dsZSB7XFxuICAgICAgICBnYXA6IDRweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogLTRweCA0cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjMpO1xcbiAgICB9XFxuXFxuICAgIGJvZHkgLm5hdi1pY29ucyBidXR0b24gc3ZnIHtcXG4gICAgICAgIGZpbGw6IHZhcigtLXByaW1hcnkpO1xcbiAgICB9XFxuXFxuICAgIGJvZHkgLm5hdi1pY29ucyAjdG9nZ2xlLW1lbnUge1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyMyk7XFxuICAgIH1cXG5cXG4gICAgYm9keSAubmF2LWljb25zICNzZWFyY2gge1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICAgICAgb3JkZXI6IDI7XFxuICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIzKTtcXG4gICAgfVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAtMTAwc3ZoO1xcbiAgICB9XFxuXFxuICAgIC5tZW51Om5vdCguaGlkZGVuKSArIGhlYWRlciAubmF2LWljb25zIGJ1dHRvbiNsYW5nLXRvZ2dsZSB7XFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICB9XFxuXFxuICAgIC5tZW51Om5vdCguaGlkZGVuKSArIGhlYWRlciAubmF2LWljb25zIGJ1dHRvbjpub3QoI3RvZ2dsZS1tZW51KSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAuaGVyby10ZXh0IGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAuaGVyby10ZXh0IGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICB9XFxuXFxuICAgIC5sYXRlc3QtZmVlZCB7XFxuICAgICAgICBwYWRkaW5nOiAxMjBweCAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5sYXRlc3QtZmVlZCA+IGgzIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtYWx0KTtcXG4gICAgICAgIHdpZHRoOiAyMzBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gRG9tIG1hbmlwdWxhdGlvblxuZnVuY3Rpb24gcXVlcnkoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50KSB7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gcXVlcnlBbGwoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50KSB7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dFNlcGFyYXRvcihzdGFydCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBuZXh0SGFzaCA9IHNlbGVjdG9yLmluZGV4T2YoJyMnLCBzdGFydCk7XG4gICAgY29uc3QgbmV4dERvdCA9IHNlbGVjdG9yLmluZGV4T2YoJy4nLCBzdGFydCk7XG5cbiAgICBpZiAobmV4dEhhc2ggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBuZXh0RG90O1xuICAgIH1cbiAgICBpZiAobmV4dERvdCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIG5leHRIYXNoO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dEhhc2ggPiBuZXh0RG90ID8gbmV4dERvdCA6IG5leHRIYXNoO1xufVxuXG5mdW5jdGlvbiBtYWtlKHNlbGVjdG9yLCBwYXJlbnQpIHtcbiAgICBsZXQgbGFzdEluZCA9IGdldE5leHRTZXBhcmF0b3IoMCwgc2VsZWN0b3IpO1xuXG4gICAgY29uc3QgY29ycmVjdGVkTGFzdEluZCA9IGxhc3RJbmQgPiAtMSA/IGxhc3RJbmQgOiBzZWxlY3Rvci5sZW5ndGg7XG4gICAgY29uc3QgdHlwZSA9IHNlbGVjdG9yLnNsaWNlKDAsIGNvcnJlY3RlZExhc3RJbmQpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgIGxldCBpZDtcbiAgICB3aGlsZSAobGFzdEluZCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IGluZCA9IGdldE5leHRTZXBhcmF0b3IobGFzdEluZCArIDEsIHNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgY29ycmVjdGVkSW5kID0gaW5kID4gLTEgPyBpbmQgOiBzZWxlY3Rvci5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHN1YlN0ciA9IHNlbGVjdG9yLnNsaWNlKGxhc3RJbmQgKyAxLCBjb3JyZWN0ZWRJbmQpO1xuXG4gICAgICAgIGlmIChzdWJTdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICdVc2FnZSBlcnJvcjogVHJpZWQgdG8gdXNlIHR3byBzeW1ib2xzIGZvciBjbGFzcyBhbmQvb3IgaWQgaW4gYSByb3cuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzeW0gPSBzZWxlY3Rvci5hdChsYXN0SW5kKTtcbiAgICAgICAgaWYgKHN5bSA9PT0gJy4nKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnVuc2hpZnQoc3ViU3RyKTtcbiAgICAgICAgfSBlbHNlIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZCA9IHN1YlN0cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJBcmd1bWVudCBlcnJvcjogZWxlbWVudHMgY2FuJ3QgaGF2ZSBtdWx0aXBsZSBpZHNcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RJbmQgPSBpbmQ7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNscyA9IGNsYXNzZXNbaV07XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbiAgICBpZiAoaWQpIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuYXBwZW5kKG5ld0VsZW1lbnQpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbHMpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydEFmdGVyKHJlZmVyZW5jZU5vZGUsIG5ld05vZGUpIHtcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xufVxuXG4vLyBPYmplY3Qgc3R1ZmZcbmNvbnN0IEZhY3RvcnkgPSB7XG4gICAgcHJvZHVjZShwcm90bywgcHVibGljT2JqID0ge30pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHB1YmxpY09iaik7XG4gICAgfSxcbn07XG5cbi8vIGV4cG9ydCBzdGF0ZW1lbnRcbmV4cG9ydCB7IG1ha2UsIHF1ZXJ5LCBxdWVyeUFsbCwgRmFjdG9yeSwgdG9nZ2xlQ2xhc3MsIGluc2VydEFmdGVyIH07XG4iLCJmdW5jdGlvbiB1cGRhdGVCdXR0b25zKG5leHRCdXR0b24sIGJhY2tCdXR0b24sIGN1cnJTbGlkZSwgbWF4U2xpZGUsIG1pblNsaWRlKSB7XG4gICAgY29uc3QgY2FuU2xpZGVGb3J3YXJkID0gY3VyclNsaWRlIDwgbWF4U2xpZGUgLSAxO1xuICAgIGNvbnN0IGNhblNsaWRlQmFjayA9IGN1cnJTbGlkZSA+IG1pblNsaWRlO1xuXG4gICAgbmV4dEJ1dHRvbi5kaXNhYmxlZCA9ICFjYW5TbGlkZUZvcndhcmQ7XG4gICAgYmFja0J1dHRvbi5kaXNhYmxlZCA9ICFjYW5TbGlkZUJhY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNsaWRlcihcbiAgICBuZXh0QnV0dG9uLFxuICAgIGJhY2tCdXR0b24sXG4gICAgc2xpZGVyRWxtLFxuICAgIGNhcmRDb3VudCxcbiAgICBjYXJkc1BlclNsaWRlXG4pIHtcbiAgICBjb25zdCBtaW5TbGlkZSA9IDA7XG4gICAgbGV0IG1heFNsaWRlID0gY2FyZENvdW50IC8gY2FyZHNQZXJTbGlkZTtcblxuICAgIGxldCBjdXJyU2xpZGUgPSAwO1xuXG4gICAgc2xpZGVyRWxtLnN0eWxlLndpZHRoID0gYGNhbGMoMTAwJSAqICR7bWF4U2xpZGV9KWA7XG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJTbGlkZSA8IG1heFNsaWRlIC0gMSkge1xuICAgICAgICAgICAgY3VyclNsaWRlICs9IDE7XG4gICAgICAgICAgICBzbGlkZXJFbG0uc3R5bGUucmlnaHQgPSBgJHtjdXJyU2xpZGUgKiAxMDB9JWA7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQnV0dG9ucyhuZXh0QnV0dG9uLCBiYWNrQnV0dG9uLCBjdXJyU2xpZGUsIG1heFNsaWRlLCBtaW5TbGlkZSk7XG4gICAgfSk7XG4gICAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJTbGlkZSA+IG1pblNsaWRlKSB7XG4gICAgICAgICAgICBjdXJyU2xpZGUgLT0gMTtcbiAgICAgICAgICAgIHNsaWRlckVsbS5zdHlsZS5yaWdodCA9IGAke2N1cnJTbGlkZSAqIDEwMH0lYDtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVCdXR0b25zKG5leHRCdXR0b24sIGJhY2tCdXR0b24sIGN1cnJTbGlkZSwgbWF4U2xpZGUsIG1pblNsaWRlKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZUJ1dHRvbnMobmV4dEJ1dHRvbiwgYmFja0J1dHRvbiwgY3VyclNsaWRlLCBtYXhTbGlkZSwgbWluU2xpZGUpO1xuXG4gICAgY29uc3QgY2hhbmdlQ1BTID0gKGNhcmRzUGVyUykgPT4ge1xuICAgICAgICBtYXhTbGlkZSA9IGNhcmRDb3VudCAvIGNhcmRzUGVyUztcbiAgICAgICAgc2xpZGVyRWxtLnN0eWxlLndpZHRoID0gYGNhbGMoMTAwJSAqICR7bWF4U2xpZGV9KWA7XG4gICAgICAgIHVwZGF0ZUJ1dHRvbnMobmV4dEJ1dHRvbiwgYmFja0J1dHRvbiwgY3VyclNsaWRlLCBtYXhTbGlkZSwgbWluU2xpZGUpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGFuZ2VDUFMsXG4gICAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBxdWVyeSwgbWFrZSB9IGZyb20gJy4vamVmZlF1ZXJ5LmpzJztcbmltcG9ydCBjcmVhdGVTbGlkZXIgZnJvbSAnLi9zbGlkZXIuanMnO1xuXG4vLyBjb25zdCBib2R5ID0gcXVlcnkoJ2JvZHknKTtcblxuY29uc3Qgc2xpZGVyID0gcXVlcnkoJy5zbGlkZXInKTtcbmNvbnN0IHNsaWRlckZvcndhcmQgPSBxdWVyeSgnLmFycm93LWhvbGRlciAuZm9yd2FyZCcpO1xuY29uc3Qgc2xpZGVyQmFjayA9IHF1ZXJ5KCcuYXJyb3ctaG9sZGVyIC5iYWNrJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQodGl0bGUsIGRlc2MpIHtcbiAgICBjb25zdCBjYXJkID0gbWFrZSgnZGl2LmNhcmQnLCBzbGlkZXIpO1xuXG4gICAgY29uc3QgaW1nSG9sZGVyID0gbWFrZSgnZGl2LmltZy1ob2xkZXInLCBjYXJkKTtcbiAgICBjb25zdCBpbWcgPSBtYWtlKCdpbWcnLCBpbWdIb2xkZXIpO1xuICAgIGltZy5zcmMgPVxuICAgICAgICAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzk1MTk2L3BleGVscy1waG90by0zOTUxOTYuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MSc7XG4gICAgY29uc3QgYnV0ID0gbWFrZSgnYnV0dG9uLmJhc2ljLWJ1dCcsIGltZ0hvbGRlcik7XG4gICAgYnV0LnRleHRDb250ZW50ID0gJysnO1xuXG4gICAgY29uc3QgaDMgPSBtYWtlKCdoMycsIGNhcmQpO1xuICAgIGgzLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgY29uc3QgcCA9IG1ha2UoJ3AnLCBjYXJkKTtcbiAgICBwLnRleHRDb250ZW50ID0gZGVzYztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FyZHMoY291bnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgY3JlYXRlQ2FyZCgnVGVzdCcsICdUaGlzIGlzIHRoZSBkZXNjcmlwdGlvbiBmb3IgdGhlIHRlc3QgY2FyZCcpO1xuICAgIH1cbn1cblxuY29uc3QgY2FyZENvdW50ID0gMTY7XG5jb25zdCBjYXJkc1BlclNsaWRlID0gNDtcblxuY3JlYXRlQ2FyZHMoY2FyZENvdW50KTtcbmNvbnN0IHNsaWRlckhhbmRsZXIgPSBjcmVhdGVTbGlkZXIoXG4gICAgc2xpZGVyRm9yd2FyZCxcbiAgICBzbGlkZXJCYWNrLFxuICAgIHNsaWRlcixcbiAgICBjYXJkQ291bnQsXG4gICAgY2FyZHNQZXJTbGlkZVxuKTtcblxuLy8gaGlkZSBoZWFkZXIgb24gc2Nyb2xsIGNvZGVcbmNvbnN0IGhlYWRlciA9IHF1ZXJ5KCdoZWFkZXInKTtcbmxldCBsYXN0S25vd25TY3JvbGxQb3NpdGlvbjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBsYXN0S25vd25TY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmIChsYXN0S25vd25TY3JvbGxQb3NpdGlvbiA+IDEwMCkge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbn0pO1xuXG4vLyBtZW51IHRvZ2dsZVxuY29uc3QgbWVudVRvZ2dsZXIgPSBxdWVyeSgnI3RvZ2dsZS1tZW51Jyk7XG5jb25zdCBtZW51ID0gcXVlcnkoJy5tZW51Jyk7XG5jb25zdCByZWdTVkcgPSBxdWVyeSgnLm1lbnUtaWNvbicsIG1lbnVUb2dnbGVyKTtcbmNvbnN0IGNsb3NlU1ZHID0gcXVlcnkoJy5jbG9zZS1tZW51LWljb24nLCBtZW51VG9nZ2xlcik7XG5tZW51VG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgcmVnU1ZHLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGNsb3NlU1ZHLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbi8vIHJldHVybiB0byB0b3BcbmNvbnN0IHRvcHBlciA9IHF1ZXJ5KCcudG9wcGVyJyk7XG50b3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbCgwLCAwKTtcbn0pO1xuXG4vLyBtb2JpbGVcbi8vIGNvbnN0IG5hdkljb25zID0gcXVlcnkoJy5uYXYtaWNvbnMnKTtcblxuY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA2MDBweCknKTtcbmNvbnN0IG1vYmlsZUNoZWNrZXIgPSAoZSkgPT4ge1xuICAgIGlmIChlLm1hdGNoZXMpIHtcbiAgICAgICAgc2xpZGVySGFuZGxlci5jaGFuZ2VDUFMoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVySGFuZGxlci5jaGFuZ2VDUFMoY2FyZHNQZXJTbGlkZSk7XG4gICAgfVxufTtcbmlmIChtZWRpYVF1ZXJ5Lm1hdGNoZXMpIHtcbiAgICBtb2JpbGVDaGVja2VyKHsgbWF0Y2hlczogdHJ1ZSB9KTtcbn1cbm1lZGlhUXVlcnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgbW9iaWxlQ2hlY2tlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=