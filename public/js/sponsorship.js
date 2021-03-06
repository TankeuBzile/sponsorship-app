/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SingleCountDownComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SingleCountDownComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'single-count-down',
  props: {
    time: {
      type: String
    }
  },
  data: function data() {
    return {
      now: parseInt(this.time)
    };
  },
  mounted: function mounted() {
    var _this = this;

    var interval = window.setInterval(function () {
      _this.now = _this.now - 1;

      if (_this.seconds == 3) {
        $('#player')[0].play();
      }

      if (_this.seconds == 0) {
        clearInterval(interval);
        $.get("/sponsorship/join", function () {}).done(function () {
          $('#single-countdown').css('display', 'none');
        }).fail(function () {}).always(function () {});
        $.get("/sponsorship/begin");
      }
    }, 1000);
  },
  computed: {
    seconds: function seconds() {
      return this.now;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SponsorshipComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SponsorshipComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'single-countdown',
  props: {
    /*time: {
        type: String
    }*/
  },
  data:
  /*() {
  return */
  {
    img_url_child: window.location.hostname + "/Images/user.jpg",
    img_url_parent: window.location.hostname + "/Images/user.jpg",
    img_child1: window.location.hostname + "/Images/user.jpg",
    img_child2: window.location.hostname + "/Images/user.jpg",
    img_child3: window.location.hostname + "/Images/user.jpg",
    //http://192.168.8.2
    name_parent: "Parrain",
    name_child: "Filleul",
    //isAnimatedParent : false,
    // isAnimatedChild : false,
    //activedAnimation : false,
    tmp: null //  }

  },
  mounted: function mounted() {
    var _this = this;

    window.Echo.channel('sponsorship').listen('SponsorshipEvent', function (e) {
      _this.img_url_child = e.data.avatar_child;
      _this.tmp = e.data.avatar_child;
      _this.img_url_parent = e.data.avatar_parent;
      _this.tmp = e.data.avatar_parent;
      _this.name_parent = e.data.name_parent;
      _this.name_child = e.data.name_child;
    });
  },
  computed: {
    isAnimatedParent: function isAnimatedParent() {
      return this.img_url_parent != window.location.hostname + "/Images/user.jpg" || this.img_url_parent != this.tmp ? true : false;
    },
    isAnimatedChild: function isAnimatedChild() {
      return this.img_url_child != window.location.hostname + "/Images/user.jpg" || this.img_url_child != this.tmp ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SingleCountDownComponent.vue?vue&type=template&id=0a13bd02&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SingleCountDownComponent.vue?vue&type=template&id=0a13bd02& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "s-color-green", attrs: { id: "single-count-down" } },
    [_vm._v("\n\n    " + _vm._s(_vm.seconds) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SponsorshipComponent.vue?vue&type=template&id=7584ba9c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SponsorshipComponent.vue?vue&type=template&id=7584ba9c& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row justify-content-center" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-md-10 col-lg-12 col-sm-12 flex-center group-affiliate"
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-1 col-md-1" }, [
            _c("div", { staticClass: "col-lg-5  group-children" }, [
              _c("img", {
                staticClass: "all-chilren",
                attrs: { src: _vm.img_child1, alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-5 group-children" }, [
              _c("img", {
                staticClass: "all-chilren",
                attrs: { src: _vm.img_child2, alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-5 group-children" }, [
              _c("img", {
                staticClass: "all-chilren",
                attrs: { src: _vm.img_child3, alt: "" }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "animated col-lg-5 col-md-5 offset-lg-1 offset-md-1 group-parent",
              class: {
                bounceInRight: _vm.isAnimatedParent,
                zoomOut: !_vm.isAnimatedParent
              },
              attrs: { id: "style-parent" }
            },
            [
              _c("img", {
                staticClass: "parent-img",
                attrs: { src: _vm.img_url_parent, alt: "" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "animated col-lg-5 col-md-5 group-child",
              class: {
                bounceInRight: _vm.isAnimatedChild,
                zoomOut: !_vm.isAnimatedChild
              }
            },
            [
              _c("img", {
                staticClass: "child-img",
                attrs: { src: _vm.img_url_child, alt: "" }
              })
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-10 col-lg-10 col-sm-12 flex-center" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6 col-md-6" }, [
          _c("p", { staticClass: "typo-comic name-parent" }, [
            _vm._v(_vm._s(_vm.name_parent))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 col-md-6" }, [
          _c("p", { staticClass: "typo-comic name-child" }, [
            _vm._v(_vm._s(_vm.name_child))
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-md-10 col-lg-10 col-sm-12 flex-center group-percent-evolution"
      },
      [
        _c("p", { staticClass: "typo-comic-20px s-color-green" }, [
          _vm._v("Evolution "),
          _c("i", [_vm._v("%")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/SingleCountDownComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/SingleCountDownComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleCountDownComponent_vue_vue_type_template_id_0a13bd02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleCountDownComponent.vue?vue&type=template&id=0a13bd02& */ "./resources/js/components/SingleCountDownComponent.vue?vue&type=template&id=0a13bd02&");
/* harmony import */ var _SingleCountDownComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleCountDownComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SingleCountDownComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleCountDownComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleCountDownComponent_vue_vue_type_template_id_0a13bd02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleCountDownComponent_vue_vue_type_template_id_0a13bd02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SingleCountDownComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SingleCountDownComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/SingleCountDownComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCountDownComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SingleCountDownComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SingleCountDownComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCountDownComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SingleCountDownComponent.vue?vue&type=template&id=0a13bd02&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/SingleCountDownComponent.vue?vue&type=template&id=0a13bd02& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCountDownComponent_vue_vue_type_template_id_0a13bd02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SingleCountDownComponent.vue?vue&type=template&id=0a13bd02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SingleCountDownComponent.vue?vue&type=template&id=0a13bd02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCountDownComponent_vue_vue_type_template_id_0a13bd02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCountDownComponent_vue_vue_type_template_id_0a13bd02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SponsorshipComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/SponsorshipComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SponsorshipComponent_vue_vue_type_template_id_7584ba9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SponsorshipComponent.vue?vue&type=template&id=7584ba9c& */ "./resources/js/components/SponsorshipComponent.vue?vue&type=template&id=7584ba9c&");
/* harmony import */ var _SponsorshipComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SponsorshipComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SponsorshipComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SponsorshipComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SponsorshipComponent_vue_vue_type_template_id_7584ba9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SponsorshipComponent_vue_vue_type_template_id_7584ba9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SponsorshipComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SponsorshipComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/SponsorshipComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorshipComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SponsorshipComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SponsorshipComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorshipComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SponsorshipComponent.vue?vue&type=template&id=7584ba9c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/SponsorshipComponent.vue?vue&type=template&id=7584ba9c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorshipComponent_vue_vue_type_template_id_7584ba9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SponsorshipComponent.vue?vue&type=template&id=7584ba9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SponsorshipComponent.vue?vue&type=template&id=7584ba9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorshipComponent_vue_vue_type_template_id_7584ba9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorshipComponent_vue_vue_type_template_id_7584ba9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/sponsorship.js":
/*!*************************************!*\
  !*** ./resources/js/sponsorship.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SingleCountDownComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SingleCountDownComponent */ "./resources/js/components/SingleCountDownComponent.vue");
/* harmony import */ var _components_SponsorshipComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SponsorshipComponent */ "./resources/js/components/SponsorshipComponent.vue");


var simpleCountDown = new Vue({
  //el: '#app',
  components: {
    'SingleCountDown': _components_SingleCountDownComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});
var sponsorshipVue = new Vue({
  //el: '#app',
  components: {
    'sponsorship': _components_SponsorshipComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});
window.Echo.channel('sponsorship').listen('StartCountDownSponsorshipEvent', function (e) {
  simpleCountDown.$mount('#simple-countdown');
  $("#client-loader").css('display', 'none');
  $("#text-wait").css('display', 'none');
}).listen('JoinSponsorshipEvent', function (e) {
  //simpleCountDown.$destroy();
  $("#cover").css('display', 'none');
  sponsorshipVue.$mount('#sponsorship-mount');
});
$(document).ready(function () {
  $("#btn-start-sponsorship").on("click", function (e) {
    e.preventDefault();
    $.get("/sponsorship/starting", function () {
      $("#btn-start-sponsorship").css('display', 'none');
      $("#admin-loader").css('display', 'inline-block');
    }).done(function () {
      $("#admin-loader").css('display', 'none');
    }).fail(function () {
      $("#btn-start-sponsorship").css('display', 'inline-block');
    }).always(function () {
      console.log("finished");
    });
  });
});

/***/ }),

/***/ 2:
/*!*******************************************!*\
  !*** multi ./resources/js/sponsorship.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\sponsorship-app\resources\js\sponsorship.js */"./resources/js/sponsorship.js");


/***/ })

/******/ });