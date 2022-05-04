module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/categories.js":
/*!***********************************!*\
  !*** ./src/actions/categories.js ***!
  \***********************************/
/*! exports provided: getListCategories, getListCategoriesSuccess, getListCategoriesError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListCategories", function() { return getListCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListCategoriesSuccess", function() { return getListCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListCategoriesError", function() { return getListCategoriesError; });
/* harmony import */ var _contans_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contans/categories */ "./src/contans/categories.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const getListCategories = params => {
  return _objectSpread({
    type: _contans_categories__WEBPACK_IMPORTED_MODULE_0__["GET_LIST_CATEGORIES"]
  }, params);
};
const getListCategoriesSuccess = data => {
  return {
    type: _contans_categories__WEBPACK_IMPORTED_MODULE_0__["GET_LIST_CATEGORIES_SUCCESS"],
    data
  };
};
const getListCategoriesError = mess => {
  return {
    type: _contans_categories__WEBPACK_IMPORTED_MODULE_0__["GET_LIST_CATEGORIES_ERROR"],
    mess
  };
};

/***/ }),

/***/ "./src/actions/product.js":
/*!********************************!*\
  !*** ./src/actions/product.js ***!
  \********************************/
/*! exports provided: getProduct, getProductSuccess, getProductError, getHomeProduct, getHomeProductSuccess, getHomeProductError, getHomePropose, getHomeProposeSuccess, getHomeProposeError, getProductFeature, getProductFeatureSuccess, getProductFeatureError, getProductSuggest, getProductSuggestSuccess, getProductSuggestError, getProductDetail, getProductDetailSuccess, getProductDetailError, searchProduct, searchProductSuccess, searchProductError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuccess", function() { return getProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductError", function() { return getProductError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProduct", function() { return getHomeProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProductSuccess", function() { return getHomeProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProductError", function() { return getHomeProductError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomePropose", function() { return getHomePropose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProposeSuccess", function() { return getHomeProposeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProposeError", function() { return getHomeProposeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFeature", function() { return getProductFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFeatureSuccess", function() { return getProductFeatureSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFeatureError", function() { return getProductFeatureError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuggest", function() { return getProductSuggest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuggestSuccess", function() { return getProductSuggestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuggestError", function() { return getProductSuggestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetail", function() { return getProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailSuccess", function() { return getProductDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailError", function() { return getProductDetailError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProduct", function() { return searchProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProductSuccess", function() { return searchProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProductError", function() { return searchProductError; });
/* harmony import */ var _contans_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contans/product */ "./src/contans/product.js");

const getProduct = (offset, page) => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT"],
  offset,
  page
});
const getProductSuccess = (data, total) => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_SUCCESS"],
  data: data,
  total: total
});
const getProductError = errMess => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_ERROR"],
  errMess
}); // ===========================

const getHomeProduct = offset => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT"],
  offset
});
const getHomeProductSuccess = data => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_SUCCESS"],
  data: data
});
const getHomeProductError = errMess => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_ERROR"],
  errMess
}); // ===========================

const getHomePropose = offset => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE"],
  offset
});
const getHomeProposeSuccess = data => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_SUCCESS"],
  data: data
});
const getHomeProposeError = errMess => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_ERROR"],
  errMess
}); // ===========================

const getProductFeature = offset => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE"],
  offset
});
const getProductFeatureSuccess = data => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_SUCCESS"],
  data: data
});
const getProductFeatureError = errMess => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_ERROR"],
  errMess
}); // ===========================

const getProductSuggest = offset => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST"],
  offset
});
const getProductSuggestSuccess = data => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_SUCCESS"],
  data: data
});
const getProductSuggestError = errMess => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_ERROR"],
  errMess
}); // ===========================

const getProductDetail = alias => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL"],
  alias: alias
});
const getProductDetailSuccess = data => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_SUCCESS"],
  data: data
});
const getProductDetailError = errMess => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_ERROR"],
  errMess
}); // ===========================

const searchProduct = (name, offset) => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT"],
  name,
  offset
});
const searchProductSuccess = data => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_SUCCESS"],
  data: data
});
const searchProductError = errMess => ({
  type: _contans_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/contans/categories.js":
/*!***********************************!*\
  !*** ./src/contans/categories.js ***!
  \***********************************/
/*! exports provided: GET_LIST_CATEGORIES, GET_LIST_CATEGORIES_SUCCESS, GET_LIST_CATEGORIES_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_CATEGORIES", function() { return GET_LIST_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_CATEGORIES_SUCCESS", function() { return GET_LIST_CATEGORIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_CATEGORIES_ERROR", function() { return GET_LIST_CATEGORIES_ERROR; });
const GET_LIST_CATEGORIES = "GET_LIST_CATEGORIES";
const GET_LIST_CATEGORIES_SUCCESS = "GET_LIST_CATEGORIES_SUCCESS";
const GET_LIST_CATEGORIES_ERROR = "GET_LIST_CATEGORIES_ERROR";

/***/ }),

/***/ "./src/contans/product.js":
/*!********************************!*\
  !*** ./src/contans/product.js ***!
  \********************************/
/*! exports provided: GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_HOME_PRODUCT, GET_HOME_PRODUCT_SUCCESS, GET_HOME_PRODUCT_ERROR, GET_HOME_PROPOSE, GET_HOME_PROPOSE_SUCCESS, GET_HOME_PROPOSE_ERROR, GET_DETAIL, GET_DETAIL_SUCCESS, GET_DETAIL_ERROR, GET_SUGGEST, GET_SUGGEST_SUCCESS, GET_SUGGEST_ERROR, GET_FEATURE, GET_FEATURE_SUCCESS, GET_FEATURE_ERROR, SEARCH_PRODUCT, SEARCH_PRODUCT_SUCCESS, SEARCH_PRODUCT_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT", function() { return GET_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_SUCCESS", function() { return GET_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_ERROR", function() { return GET_PRODUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PRODUCT", function() { return GET_HOME_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PRODUCT_SUCCESS", function() { return GET_HOME_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PRODUCT_ERROR", function() { return GET_HOME_PRODUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PROPOSE", function() { return GET_HOME_PROPOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PROPOSE_SUCCESS", function() { return GET_HOME_PROPOSE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PROPOSE_ERROR", function() { return GET_HOME_PROPOSE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL", function() { return GET_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_SUCCESS", function() { return GET_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_ERROR", function() { return GET_DETAIL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGEST", function() { return GET_SUGGEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGEST_SUCCESS", function() { return GET_SUGGEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGEST_ERROR", function() { return GET_SUGGEST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FEATURE", function() { return GET_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FEATURE_SUCCESS", function() { return GET_FEATURE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FEATURE_ERROR", function() { return GET_FEATURE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT", function() { return SEARCH_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_SUCCESS", function() { return SEARCH_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_ERROR", function() { return SEARCH_PRODUCT_ERROR; });
const GET_PRODUCT = "PRODUCT/GET_PRODUCT";
const GET_PRODUCT_SUCCESS = "PRODUCT/GET_PRODUCT_SUCCESS";
const GET_PRODUCT_ERROR = "PRODUCT/GET_PRODUCT_ERROR";
const GET_HOME_PRODUCT = "PRODUCT/GET_HOME_PRODUCT";
const GET_HOME_PRODUCT_SUCCESS = "PRODUCT/GET_HOME_PRODUCT_SUCCESS";
const GET_HOME_PRODUCT_ERROR = "PRODUCT/GET_HOME_PRODUCT_ERROR";
const GET_HOME_PROPOSE = "PRODUCT/GET_HOME_PROPOSE";
const GET_HOME_PROPOSE_SUCCESS = "PRODUCT/GET_HOME_PROPOSE_SUCCESS";
const GET_HOME_PROPOSE_ERROR = "PRODUCT/GET_HOME_PROPOSE_ERROR";
const GET_DETAIL = "PRODUCT/GET_DETAIL";
const GET_DETAIL_SUCCESS = "PRODUCT/GET_DETAIL_SUCCESS";
const GET_DETAIL_ERROR = "PRODUCT/GET_DETAIL_ERROR";
const GET_SUGGEST = "PRODUCT/GET_SUGGEST";
const GET_SUGGEST_SUCCESS = "PRODUCT/GET_SUGGEST_SUCCESS";
const GET_SUGGEST_ERROR = "PRODUCT/GET_SUGGEST_ERROR";
const GET_FEATURE = "PRODUCT/GET_FEATURE";
const GET_FEATURE_SUCCESS = "PRODUCT/GET_FEATURE_SUCCESS";
const GET_FEATURE_ERROR = "PRODUCT/GET_FEATURE_ERROR";
const SEARCH_PRODUCT = "PRODUCT/SEARCH_PRODUCT";
const SEARCH_PRODUCT_SUCCESS = "PRODUCT/SEARCH_PRODUCT_SUCCESS";
const SEARCH_PRODUCT_ERROR = "PRODUCT/SEARCH_PRODUCT_ERROR";

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/product */ "./src/actions/product.js");
/* harmony import */ var _actions_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/categories */ "./src/actions/categories.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./src/store.js");


var _jsxFileName = "D:\\CY-Company\\FileProject\\NextJS_Project\\NextJS-1\\next-cy\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MyApp = ({
  Component,
  pageProps
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_4__["getProduct"])());
    dispatch(Object(_actions_categories__WEBPACK_IMPORTED_MODULE_5__["getListCategories"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "demo app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const pageProps = _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {});

  if (ctx.req) {
    ctx.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_6__["END"]);
    await ctx.store.sagaTask.toPromise();
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_7__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./src/reducers/categories.js":
/*!************************************!*\
  !*** ./src/reducers/categories.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contans_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contans/categories */ "./src/contans/categories.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  data: [],
  mess: null
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case _contans_categories__WEBPACK_IMPORTED_MODULE_0__["GET_LIST_CATEGORIES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _contans_categories__WEBPACK_IMPORTED_MODULE_0__["GET_LIST_CATEGORIES_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.data
      });

    case _contans_categories__WEBPACK_IMPORTED_MODULE_0__["GET_LIST_CATEGORIES_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        mess: action.mess
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (categoriesReducer);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/reducers/product.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./src/reducers/categories.js");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  product: _product__WEBPACK_IMPORTED_MODULE_1__["default"],
  categories: _categories__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/product.js":
/*!*********************************!*\
  !*** ./src/reducers/product.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contans_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contans/product */ "./src/contans/product.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  product: {
    loading: false,
    data: [],
    total: 0,
    errMess: null
  },
  productFeature: {
    loading: false,
    data: [],
    errMess: null
  },
  productSuggest: {
    loading: false,
    data: [],
    errMess: null
  },
  homeProduct: {
    loading: false,
    data: [],
    errMess: null
  },
  homePropose: {
    loading: false,
    data: [],
    errMess: null
  },
  productDetail: {
    loading: false,
    data: {},
    errMess: null
  },
  productSearch: {
    val: "",
    loading: false,
    data: [],
    errMess: null
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.product));

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: true
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homeProduct: _objectSpread(_objectSpread({}, state.homeProduct), {}, {
          loading: true
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homeProduct: _objectSpread(_objectSpread({}, state.homeProduct), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homeProduct: _objectSpread(_objectSpread({}, state.homeProduct), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: true
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homePropose: _objectSpread(_objectSpread({}, state.homePropose), {}, {
          loading: true
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homePropose: _objectSpread(_objectSpread({}, state.homePropose), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homePropose: _objectSpread(_objectSpread({}, state.homePropose), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSearch: _objectSpread(_objectSpread({}, state.productSearch), {}, {
          val: action.name,
          loading: true
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSearch: _objectSpread(_objectSpread({}, state.productSearch), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_ERROR"]:
      return _objectSpread(_objectSpread({}, initialState), {}, {
        productSearch: _objectSpread(_objectSpread({}, initialState.productSearch), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSuggest: _objectSpread(_objectSpread({}, state.productSuggest), {}, {
          val: action.name,
          loading: true
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSuggest: _objectSpread(_objectSpread({}, state.productSuggest), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_ERROR"]:
      return _objectSpread(_objectSpread({}, initialState), {}, {
        productSuggest: _objectSpread(_objectSpread({}, initialState.productSuggest), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productFeature: _objectSpread(_objectSpread({}, state.productFeature), {}, {
          val: action.name,
          loading: true
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productFeature: _objectSpread(_objectSpread({}, state.productFeature), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contans_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_ERROR"]:
      return _objectSpread(_objectSpread({}, initialState), {}, {
        productFeature: _objectSpread(_objectSpread({}, initialState.productFeature), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (productReducer);

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/sagas/product.js");

 // import BannerSaga from "./banner";

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_product__WEBPACK_IMPORTED_MODULE_1__["default"])() // BannerSaga(),
  ]);
}

/***/ }),

/***/ "./src/sagas/product.js":
/*!******************************!*\
  !*** ./src/sagas/product.js ***!
  \******************************/
/*! exports provided: getProduct, getDetail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/product */ "./src/actions/product.js");
/* harmony import */ var _contans_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contans/product */ "./src/contans/product.js");




function* getProduct(action) {
  const url = `products/get?active=1&id_parent=0&id_website=4`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductError"])(error.message));
  }
}
function* getDetail(action) {
  const url = `/products/detail?alias=${action.alias}`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductDetailSuccess"])(response.data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductDetailError"])(error.message));
  }
}
function* ProductSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contans_product__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT"], getProduct), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contans_product__WEBPACK_IMPORTED_MODULE_3__["GET_DETAIL"], getDetail)]);
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./src/sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");






const makeStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
  const middleware = [sagaMiddleware];
  middleware.push(redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a);
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return request; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

async function parseJSON(response) {
  const data = await response.json();

  if (response.status >= 400) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
}

const isNode = true;
const nodeOptions = !isNode ? {} : {
  agent: new (__webpack_require__(/*! https */ "https").Agent)({
    rejectUnauthorized: false
  }),
  headers: {
    "Content-Type": "application/json",
    Cookie: global.cookie
  }
};
function request(path, options = {}) {
  const url = `${"http://192.168.1.38:80/api"}/${path}`;
  return fetch(url, _objectSpread(_objectSpread({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }, nodeOptions), options)).then(parseJSON);
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YW5zL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhbnRzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2Nsb25lRGVlcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWxvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJnZXRMaXN0Q2F0ZWdvcmllcyIsInBhcmFtcyIsInR5cGUiLCJUWVBFIiwiR0VUX0xJU1RfQ0FURUdPUklFUyIsImdldExpc3RDYXRlZ29yaWVzU3VjY2VzcyIsImRhdGEiLCJnZXRMaXN0Q2F0ZWdvcmllc0Vycm9yIiwibWVzcyIsImdldFByb2R1Y3QiLCJvZmZzZXQiLCJwYWdlIiwiZ2V0UHJvZHVjdFN1Y2Nlc3MiLCJ0b3RhbCIsImdldFByb2R1Y3RFcnJvciIsImVyck1lc3MiLCJnZXRIb21lUHJvZHVjdCIsImdldEhvbWVQcm9kdWN0U3VjY2VzcyIsImdldEhvbWVQcm9kdWN0RXJyb3IiLCJnZXRIb21lUHJvcG9zZSIsImdldEhvbWVQcm9wb3NlU3VjY2VzcyIsImdldEhvbWVQcm9wb3NlRXJyb3IiLCJnZXRQcm9kdWN0RmVhdHVyZSIsImdldFByb2R1Y3RGZWF0dXJlU3VjY2VzcyIsImdldFByb2R1Y3RGZWF0dXJlRXJyb3IiLCJnZXRQcm9kdWN0U3VnZ2VzdCIsImdldFByb2R1Y3RTdWdnZXN0U3VjY2VzcyIsImdldFByb2R1Y3RTdWdnZXN0RXJyb3IiLCJnZXRQcm9kdWN0RGV0YWlsIiwiYWxpYXMiLCJnZXRQcm9kdWN0RGV0YWlsU3VjY2VzcyIsImdldFByb2R1Y3REZXRhaWxFcnJvciIsInNlYXJjaFByb2R1Y3QiLCJuYW1lIiwic2VhcmNoUHJvZHVjdFN1Y2Nlc3MiLCJzZWFyY2hQcm9kdWN0RXJyb3IiLCJHRVRfTElTVF9DQVRFR09SSUVTX1NVQ0NFU1MiLCJHRVRfTElTVF9DQVRFR09SSUVTX0VSUk9SIiwiR0VUX1BST0RVQ1QiLCJHRVRfUFJPRFVDVF9TVUNDRVNTIiwiR0VUX1BST0RVQ1RfRVJST1IiLCJHRVRfSE9NRV9QUk9EVUNUIiwiR0VUX0hPTUVfUFJPRFVDVF9TVUNDRVNTIiwiR0VUX0hPTUVfUFJPRFVDVF9FUlJPUiIsIkdFVF9IT01FX1BST1BPU0UiLCJHRVRfSE9NRV9QUk9QT1NFX1NVQ0NFU1MiLCJHRVRfSE9NRV9QUk9QT1NFX0VSUk9SIiwiR0VUX0RFVEFJTCIsIkdFVF9ERVRBSUxfU1VDQ0VTUyIsIkdFVF9ERVRBSUxfRVJST1IiLCJHRVRfU1VHR0VTVCIsIkdFVF9TVUdHRVNUX1NVQ0NFU1MiLCJHRVRfU1VHR0VTVF9FUlJPUiIsIkdFVF9GRUFUVVJFIiwiR0VUX0ZFQVRVUkVfU1VDQ0VTUyIsIkdFVF9GRUFUVVJFX0VSUk9SIiwiU0VBUkNIX1BST0RVQ1QiLCJTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTIiwiU0VBUkNIX1BST0RVQ1RfRVJST1IiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXEiLCJzdG9yZSIsIkVORCIsInNhZ2FUYXNrIiwidG9Qcm9taXNlIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJjYXRlZ29yaWVzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0IiwicHJvZHVjdFJlZHVjZXIiLCJjYXRlZ29yaWVzIiwicHJvZHVjdEZlYXR1cmUiLCJwcm9kdWN0U3VnZ2VzdCIsImhvbWVQcm9kdWN0IiwiaG9tZVByb3Bvc2UiLCJwcm9kdWN0RGV0YWlsIiwicHJvZHVjdFNlYXJjaCIsInZhbCIsIkhZRFJBVEUiLCJjbG9uZURlZXAiLCJwYXlsb2FkIiwicm9vdFNhZ2EiLCJhbGwiLCJQcm9kdWN0U2FnYSIsInVybCIsInJlc3BvbnNlIiwiY2FsbCIsIlJlcXVlc3QiLCJwdXQiLCJlcnJvciIsIm1lc3NhZ2UiLCJnZXREZXRhaWwiLCJ0YWtlTGF0ZXN0IiwibWFrZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicHVzaCIsImxvZ2dlciIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwicmVxdWlyZSIsInBhcnNlSlNPTiIsImpzb24iLCJzdGF0dXMiLCJFcnJvciIsImlzTm9kZSIsIm5vZGVPcHRpb25zIiwiYWdlbnQiLCJBZ2VudCIsInJlamVjdFVuYXV0aG9yaXplZCIsImhlYWRlcnMiLCJDb29raWUiLCJnbG9iYWwiLCJjb29raWUiLCJyZXF1ZXN0IiwicGF0aCIsIm9wdGlvbnMiLCJwcm9jZXNzIiwiZmV0Y2giLCJBY2NlcHQiLCJjcmVkZW50aWFscyIsInRoZW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVPLE1BQU1BLGlCQUFpQixHQUFJQyxNQUFELElBQVk7QUFDekM7QUFDSUMsUUFBSSxFQUFFQyx1RUFBd0JDO0FBRGxDLEtBRU9ILE1BRlA7QUFJSCxDQUxNO0FBT0EsTUFBTUksd0JBQXdCLEdBQUlDLElBQUQsSUFBVTtBQUM5QyxTQUFPO0FBQ0hKLFFBQUksRUFBRUMsK0VBREg7QUFFSEc7QUFGRyxHQUFQO0FBSUgsQ0FMTTtBQU9BLE1BQU1DLHNCQUFzQixHQUFJQyxJQUFELElBQVU7QUFDNUMsU0FBTztBQUNITixRQUFJLEVBQUVDLDZFQURIO0FBRUhLO0FBRkcsR0FBUDtBQUlILENBTE0sQzs7Ozs7Ozs7Ozs7O0FDaEJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1DLFVBQVUsR0FBRyxDQUFDQyxNQUFELEVBQVNDLElBQVQsTUFBbUI7QUFDM0NULE1BQUksRUFBRUMsNERBRHFDO0FBRTNDTyxRQUYyQztBQUczQ0M7QUFIMkMsQ0FBbkIsQ0FBbkI7QUFLQSxNQUFNQyxpQkFBaUIsR0FBRyxDQUFDTixJQUFELEVBQU9PLEtBQVAsTUFBa0I7QUFDakRYLE1BQUksRUFBRUMsb0VBRDJDO0FBRWpERyxNQUFJLEVBQUVBLElBRjJDO0FBR2pETyxPQUFLLEVBQUVBO0FBSDBDLENBQWxCLENBQTFCO0FBS0EsTUFBTUMsZUFBZSxHQUFJQyxPQUFELEtBQWM7QUFDM0NiLE1BQUksRUFBRUMsa0VBRHFDO0FBRTNDWTtBQUYyQyxDQUFkLENBQXhCLEMsQ0FLUDs7QUFFTyxNQUFNQyxjQUFjLEdBQUlOLE1BQUQsS0FBYTtBQUN6Q1IsTUFBSSxFQUFFQyxpRUFEbUM7QUFFekNPO0FBRnlDLENBQWIsQ0FBdkI7QUFJQSxNQUFNTyxxQkFBcUIsR0FBSVgsSUFBRCxLQUFXO0FBQzlDSixNQUFJLEVBQUVDLHlFQUR3QztBQUU5Q0csTUFBSSxFQUFFQTtBQUZ3QyxDQUFYLENBQTlCO0FBSUEsTUFBTVksbUJBQW1CLEdBQUlILE9BQUQsS0FBYztBQUMvQ2IsTUFBSSxFQUFFQyx1RUFEeUM7QUFFL0NZO0FBRitDLENBQWQsQ0FBNUIsQyxDQUtQOztBQUVPLE1BQU1JLGNBQWMsR0FBSVQsTUFBRCxLQUFhO0FBQ3pDUixNQUFJLEVBQUVDLGlFQURtQztBQUV6Q087QUFGeUMsQ0FBYixDQUF2QjtBQUlBLE1BQU1VLHFCQUFxQixHQUFJZCxJQUFELEtBQVc7QUFDOUNKLE1BQUksRUFBRUMseUVBRHdDO0FBRTlDRyxNQUFJLEVBQUVBO0FBRndDLENBQVgsQ0FBOUI7QUFJQSxNQUFNZSxtQkFBbUIsR0FBSU4sT0FBRCxLQUFjO0FBQy9DYixNQUFJLEVBQUVDLHVFQUR5QztBQUUvQ1k7QUFGK0MsQ0FBZCxDQUE1QixDLENBS1A7O0FBRU8sTUFBTU8saUJBQWlCLEdBQUlaLE1BQUQsS0FBYTtBQUM1Q1IsTUFBSSxFQUFFQyw0REFEc0M7QUFFNUNPO0FBRjRDLENBQWIsQ0FBMUI7QUFJQSxNQUFNYSx3QkFBd0IsR0FBSWpCLElBQUQsS0FBVztBQUNqREosTUFBSSxFQUFFQyxvRUFEMkM7QUFFakRHLE1BQUksRUFBRUE7QUFGMkMsQ0FBWCxDQUFqQztBQUlBLE1BQU1rQixzQkFBc0IsR0FBSVQsT0FBRCxLQUFjO0FBQ2xEYixNQUFJLEVBQUVDLGtFQUQ0QztBQUVsRFk7QUFGa0QsQ0FBZCxDQUEvQixDLENBS1A7O0FBRU8sTUFBTVUsaUJBQWlCLEdBQUlmLE1BQUQsS0FBYTtBQUM1Q1IsTUFBSSxFQUFFQyw0REFEc0M7QUFFNUNPO0FBRjRDLENBQWIsQ0FBMUI7QUFJQSxNQUFNZ0Isd0JBQXdCLEdBQUlwQixJQUFELEtBQVc7QUFDakRKLE1BQUksRUFBRUMsb0VBRDJDO0FBRWpERyxNQUFJLEVBQUVBO0FBRjJDLENBQVgsQ0FBakM7QUFJQSxNQUFNcUIsc0JBQXNCLEdBQUlaLE9BQUQsS0FBYztBQUNsRGIsTUFBSSxFQUFFQyxrRUFENEM7QUFFbERZO0FBRmtELENBQWQsQ0FBL0IsQyxDQUtQOztBQUVPLE1BQU1hLGdCQUFnQixHQUFJQyxLQUFELEtBQVk7QUFDMUMzQixNQUFJLEVBQUVDLDJEQURvQztBQUUxQzBCLE9BQUssRUFBRUE7QUFGbUMsQ0FBWixDQUF6QjtBQUlBLE1BQU1DLHVCQUF1QixHQUFJeEIsSUFBRCxLQUFXO0FBQ2hESixNQUFJLEVBQUVDLG1FQUQwQztBQUVoREcsTUFBSSxFQUFFQTtBQUYwQyxDQUFYLENBQWhDO0FBSUEsTUFBTXlCLHFCQUFxQixHQUFJaEIsT0FBRCxLQUFjO0FBQ2pEYixNQUFJLEVBQUVDLGlFQUQyQztBQUVqRFk7QUFGaUQsQ0FBZCxDQUE5QixDLENBS1A7O0FBRU8sTUFBTWlCLGFBQWEsR0FBRyxDQUFDQyxJQUFELEVBQU92QixNQUFQLE1BQW1CO0FBQzlDUixNQUFJLEVBQUVDLCtEQUR3QztBQUU5QzhCLE1BRjhDO0FBRzlDdkI7QUFIOEMsQ0FBbkIsQ0FBdEI7QUFLQSxNQUFNd0Isb0JBQW9CLEdBQUk1QixJQUFELEtBQVc7QUFDN0NKLE1BQUksRUFBRUMsdUVBRHVDO0FBRTdDRyxNQUFJLEVBQUVBO0FBRnVDLENBQVgsQ0FBN0I7QUFJQSxNQUFNNkIsa0JBQWtCLEdBQUlwQixPQUFELEtBQWM7QUFDOUNiLE1BQUksRUFBRUMscUVBRHdDO0FBRTlDWTtBQUY4QyxDQUFkLENBQTNCLEM7Ozs7Ozs7Ozs7OztBQ3ZHUDtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1YLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1nQywyQkFBMkIsR0FBRyw2QkFBcEM7QUFDQSxNQUFNQyx5QkFBeUIsR0FBRywyQkFBbEMsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQyxXQUFXLEdBQUcscUJBQXBCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsNkJBQTVCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsMkJBQTFCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsMEJBQXpCO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsa0NBQWpDO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsZ0NBQS9CO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsMEJBQXpCO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsa0NBQWpDO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsZ0NBQS9CO0FBRUEsTUFBTUMsVUFBVSxHQUFHLG9CQUFuQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLDRCQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLDBCQUF6QjtBQUVBLE1BQU1DLFdBQVcsR0FBRyxxQkFBcEI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyw2QkFBNUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRywyQkFBMUI7QUFFQSxNQUFNQyxXQUFXLEdBQUcscUJBQXBCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsNkJBQTVCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsMkJBQTFCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLHdCQUF2QjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLGdDQUEvQjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLDhCQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUMsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDMUMsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZEYsWUFBUSxDQUFDckQsbUVBQVUsRUFBWCxDQUFSO0FBQ0FxRCxZQUFRLENBQUM5RCw2RUFBaUIsRUFBbEIsQ0FBUjtBQUNDLEdBSE0sRUFHSixFQUhJLENBQVQ7QUFLQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQSxrQkFERjtBQWFELENBckJEOztBQXVCQTJELEtBQUssQ0FBQ00sZUFBTixHQUF3QixPQUFPO0FBQUVMLFdBQUY7QUFBYU07QUFBYixDQUFQLEtBQThCO0FBQ3BELFFBQU1MLFNBQVMscUJBQ1RELFNBQVMsQ0FBQ0ssZUFBVixHQUE0QixNQUFNTCxTQUFTLENBQUNLLGVBQVYsQ0FBMEJDLEdBQTFCLENBQWxDLEdBQW1FLEVBRDFELENBQWY7O0FBR0EsTUFBSUEsR0FBRyxDQUFDQyxHQUFSLEVBQWE7QUFDWEQsT0FBRyxDQUFDRSxLQUFKLENBQVVOLFFBQVYsQ0FBbUJPLDhDQUFuQjtBQUNBLFVBQU1ILEdBQUcsQ0FBQ0UsS0FBSixDQUFVRSxRQUFWLENBQW1CQyxTQUFuQixFQUFOO0FBQ0Q7O0FBQ0QsU0FBTztBQUFFVjtBQUFGLEdBQVA7QUFDRCxDQVREOztBQVdlVyw2R0FBTyxDQUFDQyxTQUFSLENBQWtCZCxLQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBRUEsTUFBTWUsWUFBWSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUUsS0FEUTtBQUVqQnJFLE1BQUksRUFBRSxFQUZXO0FBR2pCRSxNQUFJLEVBQUU7QUFIVyxDQUFyQjs7QUFNQSxNQUFNb0UsaUJBQWlCLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHSCxZQUFULEVBQXVCSSxNQUF2QixLQUFrQztBQUN4RCxVQUFRQSxNQUFNLENBQUM1RSxJQUFmO0FBQ0ksU0FBS0MsdUVBQUw7QUFDSSw2Q0FDTzBFLEtBRFA7QUFFSUYsZUFBTyxFQUFFO0FBRmI7O0FBS0osU0FBS3hFLCtFQUFMO0FBQ0ksNkNBQ08wRSxLQURQO0FBRUlGLGVBQU8sRUFBRSxLQUZiO0FBR0lyRSxZQUFJLEVBQUV3RSxNQUFNLENBQUN4RTtBQUhqQjs7QUFNSixTQUFLSCw2RUFBTDtBQUNJLDZDQUNPMEUsS0FEUDtBQUVJRixlQUFPLEVBQUUsS0FGYjtBQUdJbkUsWUFBSSxFQUFFc0UsTUFBTSxDQUFDdEU7QUFIakI7O0FBTUo7QUFDSSxhQUFPcUUsS0FBUDtBQXRCUjtBQXdCSCxDQXpCRDs7QUEyQmVELGdGQUFmLEU7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUEsTUFBTUcsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxTQUFPLEVBQUVDLGdEQUR5QjtBQUVsQ0MsWUFBVSxFQUFFUCxtREFBaUJBO0FBRkssQ0FBRCxDQUFuQztBQUtlRywwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTCxZQUFZLEdBQUc7QUFDbkJPLFNBQU8sRUFBRTtBQUNQTixXQUFPLEVBQUUsS0FERjtBQUVQckUsUUFBSSxFQUFFLEVBRkM7QUFHUE8sU0FBSyxFQUFFLENBSEE7QUFJUEUsV0FBTyxFQUFFO0FBSkYsR0FEVTtBQU9uQnFFLGdCQUFjLEVBQUU7QUFDZFQsV0FBTyxFQUFFLEtBREs7QUFFZHJFLFFBQUksRUFBRSxFQUZRO0FBR2RTLFdBQU8sRUFBRTtBQUhLLEdBUEc7QUFZbkJzRSxnQkFBYyxFQUFFO0FBQ2RWLFdBQU8sRUFBRSxLQURLO0FBRWRyRSxRQUFJLEVBQUUsRUFGUTtBQUdkUyxXQUFPLEVBQUU7QUFISyxHQVpHO0FBaUJuQnVFLGFBQVcsRUFBRTtBQUNYWCxXQUFPLEVBQUUsS0FERTtBQUVYckUsUUFBSSxFQUFFLEVBRks7QUFHWFMsV0FBTyxFQUFFO0FBSEUsR0FqQk07QUFzQm5Cd0UsYUFBVyxFQUFFO0FBQ1haLFdBQU8sRUFBRSxLQURFO0FBRVhyRSxRQUFJLEVBQUUsRUFGSztBQUdYUyxXQUFPLEVBQUU7QUFIRSxHQXRCTTtBQTJCbkJ5RSxlQUFhLEVBQUU7QUFDYmIsV0FBTyxFQUFFLEtBREk7QUFFYnJFLFFBQUksRUFBRSxFQUZPO0FBR2JTLFdBQU8sRUFBRTtBQUhJLEdBM0JJO0FBZ0NuQjBFLGVBQWEsRUFBRTtBQUNiQyxPQUFHLEVBQUUsRUFEUTtBQUViZixXQUFPLEVBQUUsS0FGSTtBQUdickUsUUFBSSxFQUFFLEVBSE87QUFJYlMsV0FBTyxFQUFFO0FBSkk7QUFoQ0ksQ0FBckI7O0FBd0NBLE1BQU1tRSxjQUFjLEdBQUcsQ0FBQ0wsS0FBSyxHQUFHSCxZQUFULEVBQXVCSSxNQUF2QixLQUFrQztBQUN2RCxVQUFRQSxNQUFNLENBQUM1RSxJQUFmO0FBQ0UsU0FBS3lGLDBEQUFMO0FBQ0UsNkNBQVlkLEtBQVosR0FBc0JlLHVEQUFTLENBQUNkLE1BQU0sQ0FBQ2UsT0FBUCxDQUFlWixPQUFoQixDQUEvQjs7QUFFRixTQUFLOUUsNERBQUw7QUFDRSw2Q0FDSzBFLEtBREw7QUFFRUksZUFBTyxrQ0FDRkosS0FBSyxDQUFDSSxPQURKO0FBRUxOLGlCQUFPLEVBQUU7QUFGSjtBQUZUOztBQU9GLFNBQUt4RSxvRUFBTDtBQUNFLDZDQUNLMEUsS0FETDtBQUVFSSxlQUFPLGtDQUNGSixLQUFLLENBQUNJLE9BREo7QUFFTE4saUJBQU8sRUFBRSxLQUZKO0FBR0xyRSxjQUFJLEVBQUV3RSxNQUFNLENBQUN4RSxJQUhSO0FBSUxPLGVBQUssRUFBRWlFLE1BQU0sQ0FBQ2pFO0FBSlQ7QUFGVDs7QUFTRixTQUFLVixrRUFBTDtBQUNFLDZDQUNLMEUsS0FETDtBQUVFSSxlQUFPLGtDQUNGSixLQUFLLENBQUNJLE9BREo7QUFFTE4saUJBQU8sRUFBRSxLQUZKO0FBR0w1RCxpQkFBTyxFQUFFK0QsTUFBTSxDQUFDL0Q7QUFIWDtBQUZUOztBQVNGLFNBQUtaLGlFQUFMO0FBQ0UsNkNBQ0swRSxLQURMO0FBRUVTLG1CQUFXLGtDQUNOVCxLQUFLLENBQUNTLFdBREE7QUFFVFgsaUJBQU8sRUFBRTtBQUZBO0FBRmI7O0FBT0YsU0FBS3hFLHlFQUFMO0FBQ0UsNkNBQ0swRSxLQURMO0FBRUVTLG1CQUFXLGtDQUNOVCxLQUFLLENBQUNTLFdBREE7QUFFVFgsaUJBQU8sRUFBRSxLQUZBO0FBR1RyRSxjQUFJLEVBQUV3RSxNQUFNLENBQUN4RTtBQUhKO0FBRmI7O0FBUUYsU0FBS0gsdUVBQUw7QUFDRSw2Q0FDSzBFLEtBREw7QUFFRVMsbUJBQVcsa0NBQ05ULEtBQUssQ0FBQ1MsV0FEQTtBQUVUWCxpQkFBTyxFQUFFLEtBRkE7QUFHVDVELGlCQUFPLEVBQUUrRCxNQUFNLENBQUMvRDtBQUhQO0FBRmI7O0FBUUYsU0FBS1osMkRBQUw7QUFDRSw2Q0FDSzBFLEtBREw7QUFFRVcscUJBQWEsa0NBQ1JYLEtBQUssQ0FBQ1csYUFERTtBQUVYYixpQkFBTyxFQUFFO0FBRkU7QUFGZjs7QUFPRixTQUFLeEUsbUVBQUw7QUFDRSw2Q0FDSzBFLEtBREw7QUFFRVcscUJBQWEsa0NBQ1JYLEtBQUssQ0FBQ1csYUFERTtBQUVYYixpQkFBTyxFQUFFLEtBRkU7QUFHWHJFLGNBQUksRUFBRXdFLE1BQU0sQ0FBQ3hFO0FBSEY7QUFGZjs7QUFRRixTQUFLSCxpRUFBTDtBQUNFLDZDQUNLMEUsS0FETDtBQUVFVyxxQkFBYSxrQ0FDUlgsS0FBSyxDQUFDVyxhQURFO0FBRVhiLGlCQUFPLEVBQUUsS0FGRTtBQUdYNUQsaUJBQU8sRUFBRStELE1BQU0sQ0FBQy9EO0FBSEw7QUFGZjs7QUFRRixTQUFLWixpRUFBTDtBQUNFLDZDQUNLMEUsS0FETDtBQUVFVSxtQkFBVyxrQ0FDTlYsS0FBSyxDQUFDVSxXQURBO0FBRVRaLGlCQUFPLEVBQUU7QUFGQTtBQUZiOztBQU9GLFNBQUt4RSx5RUFBTDtBQUNFLDZDQUNLMEUsS0FETDtBQUVFVSxtQkFBVyxrQ0FDTlYsS0FBSyxDQUFDVSxXQURBO0FBRVRaLGlCQUFPLEVBQUUsS0FGQTtBQUdUckUsY0FBSSxFQUFFd0UsTUFBTSxDQUFDeEU7QUFISjtBQUZiOztBQVFGLFNBQUtILHVFQUFMO0FBQ0UsNkNBQ0swRSxLQURMO0FBRUVVLG1CQUFXLGtDQUNOVixLQUFLLENBQUNVLFdBREE7QUFFVFosaUJBQU8sRUFBRSxLQUZBO0FBR1Q1RCxpQkFBTyxFQUFFK0QsTUFBTSxDQUFDL0Q7QUFIUDtBQUZiOztBQVNGLFNBQUtaLCtEQUFMO0FBQ0UsNkNBQ0swRSxLQURMO0FBRUVZLHFCQUFhLGtDQUNSWixLQUFLLENBQUNZLGFBREU7QUFFWEMsYUFBRyxFQUFFWixNQUFNLENBQUM3QyxJQUZEO0FBR1gwQyxpQkFBTyxFQUFFO0FBSEU7QUFGZjs7QUFRRixTQUFLeEUsdUVBQUw7QUFDRSw2Q0FDSzBFLEtBREw7QUFFRVkscUJBQWEsa0NBQ1JaLEtBQUssQ0FBQ1ksYUFERTtBQUVYZCxpQkFBTyxFQUFFLEtBRkU7QUFHWHJFLGNBQUksRUFBRXdFLE1BQU0sQ0FBQ3hFO0FBSEY7QUFGZjs7QUFRRixTQUFLSCxxRUFBTDtBQUNFLDZDQUNLdUUsWUFETDtBQUVFZSxxQkFBYSxrQ0FDUmYsWUFBWSxDQUFDZSxhQURMO0FBRVhkLGlCQUFPLEVBQUUsS0FGRTtBQUdYNUQsaUJBQU8sRUFBRStELE1BQU0sQ0FBQy9EO0FBSEw7QUFGZjs7QUFTRixTQUFLWiw0REFBTDtBQUNFLDZDQUNLMEUsS0FETDtBQUVFUSxzQkFBYyxrQ0FDVFIsS0FBSyxDQUFDUSxjQURHO0FBRVpLLGFBQUcsRUFBRVosTUFBTSxDQUFDN0MsSUFGQTtBQUdaMEMsaUJBQU8sRUFBRTtBQUhHO0FBRmhCOztBQVFGLFNBQUt4RSxvRUFBTDtBQUNFLDZDQUNLMEUsS0FETDtBQUVFUSxzQkFBYyxrQ0FDVFIsS0FBSyxDQUFDUSxjQURHO0FBRVpWLGlCQUFPLEVBQUUsS0FGRztBQUdackUsY0FBSSxFQUFFd0UsTUFBTSxDQUFDeEU7QUFIRDtBQUZoQjs7QUFRRixTQUFLSCxrRUFBTDtBQUNFLDZDQUNLdUUsWUFETDtBQUVFVyxzQkFBYyxrQ0FDVFgsWUFBWSxDQUFDVyxjQURKO0FBRVpWLGlCQUFPLEVBQUUsS0FGRztBQUdaNUQsaUJBQU8sRUFBRStELE1BQU0sQ0FBQy9EO0FBSEo7QUFGaEI7O0FBU0YsU0FBS1osNERBQUw7QUFDRSw2Q0FDSzBFLEtBREw7QUFFRU8sc0JBQWMsa0NBQ1RQLEtBQUssQ0FBQ08sY0FERztBQUVaTSxhQUFHLEVBQUVaLE1BQU0sQ0FBQzdDLElBRkE7QUFHWjBDLGlCQUFPLEVBQUU7QUFIRztBQUZoQjs7QUFRRixTQUFLeEUsb0VBQUw7QUFDRSw2Q0FDSzBFLEtBREw7QUFFRU8sc0JBQWMsa0NBQ1RQLEtBQUssQ0FBQ08sY0FERztBQUVaVCxpQkFBTyxFQUFFLEtBRkc7QUFHWnJFLGNBQUksRUFBRXdFLE1BQU0sQ0FBQ3hFO0FBSEQ7QUFGaEI7O0FBUUYsU0FBS0gsa0VBQUw7QUFDRSw2Q0FDS3VFLFlBREw7QUFFRVUsc0JBQWMsa0NBQ1RWLFlBQVksQ0FBQ1UsY0FESjtBQUVaVCxpQkFBTyxFQUFFLEtBRkc7QUFHWjVELGlCQUFPLEVBQUUrRCxNQUFNLENBQUMvRDtBQUhKO0FBRmhCOztBQVNGO0FBQ0UsYUFBTzhELEtBQVA7QUFwTUo7QUFzTUQsQ0F2TUQ7O0FBeU1lSyw2RUFBZixFOzs7Ozs7Ozs7Ozs7QUNyUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBRWUsVUFBVVksUUFBVixHQUFxQjtBQUNsQyxRQUFNQyw4REFBRyxDQUFDLENBQ1JDLHdEQUFXLEVBREgsQ0FFUjtBQUZRLEdBQUQsQ0FBVDtBQUlELEM7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQU9BO0FBRU8sVUFBVXZGLFVBQVYsQ0FBcUJxRSxNQUFyQixFQUE2QjtBQUNsQyxRQUFNbUIsR0FBRyxHQUFJLGdEQUFiOztBQUNBLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUgsR0FBVixDQUEzQjtBQUNBLFVBQU1JLDhEQUFHLENBQUN6RiwwRUFBaUIsQ0FBQ3NGLFFBQUQsQ0FBbEIsQ0FBVDtBQUNELEdBSEQsQ0FHRSxPQUFPSSxLQUFQLEVBQWM7QUFDZCxVQUFNRCw4REFBRyxDQUFDdkYsd0VBQWUsQ0FBQ3dGLEtBQUssQ0FBQ0MsT0FBUCxDQUFoQixDQUFUO0FBQ0Q7QUFDRjtBQUVNLFVBQVVDLFNBQVYsQ0FBb0IxQixNQUFwQixFQUE0QjtBQUNqQyxRQUFNbUIsR0FBRyxHQUFJLDBCQUF5Qm5CLE1BQU0sQ0FBQ2pELEtBQU0sRUFBbkQ7O0FBQ0EsTUFBSTtBQUNGLFVBQU1xRSxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUgsR0FBVixDQUEzQjtBQUNBLFVBQU1JLDhEQUFHLENBQUN2RSxnRkFBdUIsQ0FBQ29FLFFBQVEsQ0FBQzVGLElBQVYsQ0FBeEIsQ0FBVDtBQUNELEdBSEQsQ0FHRSxPQUFPZ0csS0FBUCxFQUFjO0FBQ2QsVUFBTUQsOERBQUcsQ0FBQ3RFLDhFQUFxQixDQUFDdUUsS0FBSyxDQUFDQyxPQUFQLENBQXRCLENBQVQ7QUFDRDtBQUNGO0FBRWMsVUFBVVAsV0FBVixHQUF3QjtBQUNyQyxRQUFNRCw4REFBRyxDQUFDLENBQ1IsTUFBTVUscUVBQVUsQ0FBQ25FLDREQUFELEVBQWM3QixVQUFkLENBRFIsRUFFUixNQUFNZ0cscUVBQVUsQ0FBQzFELDJEQUFELEVBQWF5RCxTQUFiLENBRlIsQ0FBRCxDQUFUO0FBSUQsQzs7Ozs7Ozs7Ozs7O0FDdENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sTUFBTUUsU0FBUyxHQUFJQyxPQUFELElBQWE7QUFDcEMsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxVQUFVLEdBQUcsQ0FBQ0YsY0FBRCxDQUFuQjtBQUNBRSxZQUFVLENBQUNDLElBQVgsQ0FBZ0JDLG1EQUFoQjtBQUNBLFFBQU01QyxLQUFLLEdBQUc2Qyx5REFBVyxDQUFDbEMsaURBQUQsRUFBY21DLDZEQUFlLENBQUMsR0FBR0osVUFBSixDQUE3QixDQUF6QjtBQUNBMUMsT0FBSyxDQUFDRSxRQUFOLEdBQWlCc0MsY0FBYyxDQUFDTyxHQUFmLENBQW1CckIsOENBQW5CLENBQWpCO0FBQ0EsU0FBTzFCLEtBQVA7QUFDRCxDQVBNO0FBU0EsTUFBTUksT0FBTyxHQUFHNEMsd0VBQWEsQ0FBQ1YsU0FBRCxFQUFZO0FBQUVXLE9BQUssRUFBRTtBQUFULENBQVosQ0FBN0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlBDLG1CQUFPLENBQUMsMENBQUQsQ0FBUDs7QUFFQSxlQUFlQyxTQUFmLENBQXlCckIsUUFBekIsRUFBbUM7QUFDakMsUUFBTTVGLElBQUksR0FBRyxNQUFNNEYsUUFBUSxDQUFDc0IsSUFBVCxFQUFuQjs7QUFDQSxNQUFJdEIsUUFBUSxDQUFDdUIsTUFBVCxJQUFtQixHQUF2QixFQUE0QjtBQUMxQixVQUFNbkIsS0FBSyxHQUFHLElBQUlvQixLQUFKLENBQVVwSCxJQUFJLENBQUNpRyxPQUFmLENBQWQ7QUFDQSxVQUFNRCxLQUFOO0FBQ0Q7O0FBQ0QsU0FBT2hHLElBQVA7QUFDRDs7QUFFRCxNQUFNcUgsTUFBTSxPQUFaO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUNELE1BQUQsR0FDaEIsRUFEZ0IsR0FFaEI7QUFDRUUsT0FBSyxFQUFFLEtBQUtQLG1CQUFPLENBQUMsb0JBQUQsQ0FBUCxDQUFpQlEsS0FBdEIsRUFBNkI7QUFDbENDLHNCQUFrQixFQUFFO0FBRGMsR0FBN0IsQ0FEVDtBQUlFQyxTQUFPLEVBQUU7QUFDUCxvQkFBZ0Isa0JBRFQ7QUFFUEMsVUFBTSxFQUFFQyxNQUFNLENBQUNDO0FBRlI7QUFKWCxDQUZKO0FBWWUsU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLE9BQU8sR0FBRyxFQUFqQyxFQUFxQztBQUNsRCxRQUFNckMsR0FBRyxHQUFJLEdBQUVzQyw0QkFBb0IsSUFBR0YsSUFBSyxFQUEzQztBQUNBLFNBQU9HLEtBQUssQ0FBQ3ZDLEdBQUQ7QUFDVitCLFdBQU8sRUFBRTtBQUNQUyxZQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQURDO0FBS1ZDLGVBQVcsRUFBRTtBQUxILEtBTVBkLFdBTk8sR0FPUFUsT0FQTyxFQUFMLENBUUpLLElBUkksQ0FRQ3BCLFNBUkQsQ0FBUDtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNELGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW5zL2NhdGVnb3JpZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMaXN0Q2F0ZWdvcmllcyA9IChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVFlQRS5HRVRfTElTVF9DQVRFR09SSUVTLFxyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGlzdENhdGVnb3JpZXNTdWNjZXNzID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVFlQRS5HRVRfTElTVF9DQVRFR09SSUVTX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGlzdENhdGVnb3JpZXNFcnJvciA9IChtZXNzKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRZUEUuR0VUX0xJU1RfQ0FURUdPUklFU19FUlJPUixcclxuICAgICAgICBtZXNzLFxyXG4gICAgfTtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFucy9wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdCA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVCxcclxuICBvZmZzZXQsXHJcbiAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNUX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVF9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhvbWVQcm9kdWN0ID0gKG9mZnNldCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9IT01FX1BST0RVQ1QsXHJcbiAgb2Zmc2V0LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEhvbWVQcm9kdWN0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPRFVDVF9TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb2R1Y3RFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPRFVDVF9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhvbWVQcm9wb3NlID0gKG9mZnNldCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9IT01FX1BST1BPU0UsXHJcbiAgb2Zmc2V0LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEhvbWVQcm9wb3NlU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPUE9TRV9TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb3Bvc2VFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPUE9TRV9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RGZWF0dXJlID0gKG9mZnNldCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9GRUFUVVJFLFxyXG4gIG9mZnNldCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RmVhdHVyZVN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9GRUFUVVJFX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RmVhdHVyZUVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfRkVBVFVSRV9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdWdnZXN0ID0gKG9mZnNldCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TVUdHRVNULFxyXG4gIG9mZnNldCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VnZ2VzdFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TVUdHRVNUX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VnZ2VzdEVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU1VHR0VTVF9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3REZXRhaWwgPSAoYWxpYXMpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfREVUQUlMLFxyXG4gIGFsaWFzOiBhbGlhcyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RGV0YWlsU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0RFVEFJTF9TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdERldGFpbEVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfREVUQUlMX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoUHJvZHVjdCA9IChuYW1lLCBvZmZzZXQpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5TRUFSQ0hfUFJPRFVDVCxcclxuICBuYW1lLFxyXG4gIG9mZnNldCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZWFyY2hQcm9kdWN0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNlYXJjaFByb2R1Y3RFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuU0VBUkNIX1BST0RVQ1RfRVJST1IsXHJcbiAgZXJyTWVzcyxcclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBHRVRfTElTVF9DQVRFR09SSUVTID0gXCJHRVRfTElTVF9DQVRFR09SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfTElTVF9DQVRFR09SSUVTX1NVQ0NFU1MgPSBcIkdFVF9MSVNUX0NBVEVHT1JJRVNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0xJU1RfQ0FURUdPUklFU19FUlJPUiA9IFwiR0VUX0xJU1RfQ0FURUdPUklFU19FUlJPUlwiO1xyXG4iLCJleHBvcnQgY29uc3QgR0VUX1BST0RVQ1QgPSBcIlBST0RVQ1QvR0VUX1BST0RVQ1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX1BST0RVQ1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfRVJST1IgPSBcIlBST0RVQ1QvR0VUX1BST0RVQ1RfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfSE9NRV9QUk9EVUNUID0gXCJQUk9EVUNUL0dFVF9IT01FX1BST0RVQ1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX1BST0RVQ1RfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfSE9NRV9QUk9EVUNUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX1BST0RVQ1RfRVJST1IgPSBcIlBST0RVQ1QvR0VUX0hPTUVfUFJPRFVDVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX1BST1BPU0UgPSBcIlBST0RVQ1QvR0VUX0hPTUVfUFJPUE9TRVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUFJPUE9TRV9TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9IT01FX1BST1BPU0VfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUFJPUE9TRV9FUlJPUiA9IFwiUFJPRFVDVC9HRVRfSE9NRV9QUk9QT1NFX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0RFVEFJTCA9IFwiUFJPRFVDVC9HRVRfREVUQUlMXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfREVUQUlMX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX0RFVEFJTF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfREVUQUlMX0VSUk9SID0gXCJQUk9EVUNUL0dFVF9ERVRBSUxfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU1VHR0VTVCA9IFwiUFJPRFVDVC9HRVRfU1VHR0VTVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NVR0dFU1RfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfU1VHR0VTVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU1VHR0VTVF9FUlJPUiA9IFwiUFJPRFVDVC9HRVRfU1VHR0VTVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GRUFUVVJFID0gXCJQUk9EVUNUL0dFVF9GRUFUVVJFXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkVBVFVSRV9TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9GRUFUVVJFX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GRUFUVVJFX0VSUk9SID0gXCJQUk9EVUNUL0dFVF9GRUFUVVJFX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1QgPSBcIlBST0RVQ1QvU0VBUkNIX1BST0RVQ1RcIjtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1MgPSBcIlBST0RVQ1QvU0VBUkNIX1BST0RVQ1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RfRVJST1IgPSBcIlBST0RVQ1QvU0VBUkNIX1BST0RVQ1RfRVJST1JcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0IH0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdFwiXHJcbmltcG9ydCB7Z2V0TGlzdENhdGVnb3JpZXN9IGZyb20gXCIuLi9hY3Rpb25zL2NhdGVnb3JpZXNcIjtcclxuXHJcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRQcm9kdWN0KCkpO1xyXG4gICAgZGlzcGF0Y2goZ2V0TGlzdENhdGVnb3JpZXMoKSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cInVzZXItc2NhbGFibGU9bm8sIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPmRlbW8gYXBwPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgQ29tcG9uZW50LCBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHBhZ2VQcm9wcyA9IHtcclxuICAgIC4uLihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge30pLFxyXG4gIH07XHJcbiAgaWYgKGN0eC5yZXEpIHtcclxuICAgIGN0eC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgYXdhaXQgY3R4LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFucy9jYXRlZ29yaWVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgbWVzczogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGNhdGVnb3JpZXNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0xJU1RfQ0FURUdPUklFUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9MSVNUX0NBVEVHT1JJRVNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9MSVNUX0NBVEVHT1JJRVNfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzczogYWN0aW9uLm1lc3MsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3JpZXNSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCBjYXRlZ29yaWVzUmVkdWNlciBmcm9tIFwiLi9jYXRlZ29yaWVzXCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgcHJvZHVjdDogcHJvZHVjdFJlZHVjZXIsXHJcbiAgY2F0ZWdvcmllczogY2F0ZWdvcmllc1JlZHVjZXJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFucy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwcm9kdWN0OiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgdG90YWw6IDAsXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgcHJvZHVjdEZlYXR1cmU6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgcHJvZHVjdFN1Z2dlc3Q6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgaG9tZVByb2R1Y3Q6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgaG9tZVByb3Bvc2U6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgcHJvZHVjdERldGFpbDoge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkYXRhOiB7fSxcclxuICAgIGVyck1lc3M6IG51bGwsXHJcbiAgfSxcclxuICBwcm9kdWN0U2VhcmNoOiB7XHJcbiAgICB2YWw6IFwiXCIsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgcHJvZHVjdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmNsb25lRGVlcChhY3Rpb24ucGF5bG9hZC5wcm9kdWN0KSB9O1xyXG5cclxuICAgIGNhc2UgVFlQRS5HRVRfUFJPRFVDVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0LFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX1BST0RVQ1RfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPTUVfUFJPRFVDVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBob21lUHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuaG9tZVByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPTUVfUFJPRFVDVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGhvbWVQcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ob21lUHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfSE9NRV9QUk9EVUNUX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGhvbWVQcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ob21lUHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfREVUQUlMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0RFVEFJTF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0RFVEFJTF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9IT01FX1BST1BPU0U6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaG9tZVByb3Bvc2U6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmhvbWVQcm9wb3NlLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9IT01FX1BST1BPU0VfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBob21lUHJvcG9zZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuaG9tZVByb3Bvc2UsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPTUVfUFJPUE9TRV9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBob21lUHJvcG9zZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuaG9tZVByb3Bvc2UsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLlNFQVJDSF9QUk9EVUNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTZWFyY2g6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RTZWFyY2gsXHJcbiAgICAgICAgICB2YWw6IGFjdGlvbi5uYW1lLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLlNFQVJDSF9QUk9EVUNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdFNlYXJjaDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFNlYXJjaCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5TRUFSQ0hfUFJPRFVDVF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5pbml0aWFsU3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdFNlYXJjaDoge1xyXG4gICAgICAgICAgLi4uaW5pdGlhbFN0YXRlLnByb2R1Y3RTZWFyY2gsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9TVUdHRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTdWdnZXN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0U3VnZ2VzdCxcclxuICAgICAgICAgIHZhbDogYWN0aW9uLm5hbWUsXHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX1NVR0dFU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U3VnZ2VzdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFN1Z2dlc3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX1NVR0dFU1RfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTdWdnZXN0OiB7XHJcbiAgICAgICAgICAuLi5pbml0aWFsU3RhdGUucHJvZHVjdFN1Z2dlc3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9GRUFUVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RGZWF0dXJlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RmVhdHVyZSxcclxuICAgICAgICAgIHZhbDogYWN0aW9uLm5hbWUsXHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0ZFQVRVUkVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RmVhdHVyZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdEZlYXR1cmUsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0ZFQVRVUkVfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RGZWF0dXJlOiB7XHJcbiAgICAgICAgICAuLi5pbml0aWFsU3RhdGUucHJvZHVjdEZlYXR1cmUsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBQcm9kdWN0U2FnYSBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbi8vIGltcG9ydCBCYW5uZXJTYWdhIGZyb20gXCIuL2Jhbm5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBQcm9kdWN0U2FnYSgpLFxyXG4gICAgLy8gQmFubmVyU2FnYSgpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UHJvZHVjdFN1Y2Nlc3MsXHJcbiAgZ2V0UHJvZHVjdEVycm9yLFxyXG4gIGdldFByb2R1Y3REZXRhaWxTdWNjZXNzLFxyXG4gIGdldFByb2R1Y3REZXRhaWxFcnJvcixcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9kdWN0XCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVCwgR0VUX0RFVEFJTCB9IGZyb20gXCIuLi9jb250YW5zL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0UHJvZHVjdChhY3Rpb24pIHtcclxuICBjb25zdCB1cmwgPSBgcHJvZHVjdHMvZ2V0P2FjdGl2ZT0xJmlkX3BhcmVudD0wJmlkX3dlYnNpdGU9NGA7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgeWllbGQgcHV0KGdldFByb2R1Y3RTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0RXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXREZXRhaWwoYWN0aW9uKSB7XHJcbiAgY29uc3QgdXJsID0gYC9wcm9kdWN0cy9kZXRhaWw/YWxpYXM9JHthY3Rpb24uYWxpYXN9YDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdERldGFpbFN1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdERldGFpbEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBQcm9kdWN0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChHRVRfUFJPRFVDVCwgZ2V0UHJvZHVjdCksXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9ERVRBSUwsIGdldERldGFpbCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwicmVkdXgtbG9nZ2VyXCI7XHJcblxyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4vc2FnYXNcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZSA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgbWlkZGxld2FyZS5wdXNoKGxvZ2dlcik7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuIiwicmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwYXJzZUpTT04ocmVzcG9uc2UpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XHJcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5jb25zdCBpc05vZGUgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG5jb25zdCBub2RlT3B0aW9ucyA9ICFpc05vZGVcclxuICA/IHt9XHJcbiAgOiB7XHJcbiAgICAgIGFnZW50OiBuZXcgKHJlcXVpcmUoXCJodHRwc1wiKS5BZ2VudCkoe1xyXG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQ29va2llOiBnbG9iYWwuY29va2llLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3QocGF0aCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vJHtwYXRofWA7XHJcbiAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgLi4ubm9kZU9wdGlvbnMsXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH0pLnRoZW4ocGFyc2VKU09OKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=