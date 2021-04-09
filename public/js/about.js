(self["webpackChunk"] = self["webpackChunk"] || []).push([["about"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/showProperty.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/showProperty.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Nav.vue */ "./resources/js/vue/Nav.vue");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading */ "./resources/js/vue/components/loading.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Property',
  components: {
    Loading: _loading__WEBPACK_IMPORTED_MODULE_1__.default,
    Nav: _Nav_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      id: this.$route.params.id,
      property: {},
      loading: true
    };
  },
  created: function created() {
    var _this = this;

    axios.get(this.id).then(function (res) {
      if (res.status == 200) {
        _this.property = res.data;
        console.log(_this.property);
      }
    }).then(function () {
      _this.loading = false;
    })["catch"](function (err) {
      console.log(err);
    });
  }
});

/***/ }),

/***/ "./resources/js/vue/components/showProperty.vue":
/*!******************************************************!*\
  !*** ./resources/js/vue/components/showProperty.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _showProperty_vue_vue_type_template_id_b26e8e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showProperty.vue?vue&type=template&id=b26e8e98& */ "./resources/js/vue/components/showProperty.vue?vue&type=template&id=b26e8e98&");
/* harmony import */ var _showProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showProperty.vue?vue&type=script&lang=js& */ "./resources/js/vue/components/showProperty.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _showProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _showProperty_vue_vue_type_template_id_b26e8e98___WEBPACK_IMPORTED_MODULE_0__.render,
  _showProperty_vue_vue_type_template_id_b26e8e98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/components/showProperty.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/components/showProperty.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/vue/components/showProperty.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./showProperty.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/showProperty.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/vue/components/showProperty.vue?vue&type=template&id=b26e8e98&":
/*!*************************************************************************************!*\
  !*** ./resources/js/vue/components/showProperty.vue?vue&type=template&id=b26e8e98& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showProperty_vue_vue_type_template_id_b26e8e98___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showProperty_vue_vue_type_template_id_b26e8e98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showProperty_vue_vue_type_template_id_b26e8e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./showProperty.vue?vue&type=template&id=b26e8e98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/showProperty.vue?vue&type=template&id=b26e8e98&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/showProperty.vue?vue&type=template&id=b26e8e98&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/showProperty.vue?vue&type=template&id=b26e8e98& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "p-4" },
    [
      _c("Nav"),
      _vm._v(" "),
      _c("div", [
        _c("p", { staticClass: "text-xl font-semibold" }, [
          _vm._v(_vm._s(_vm.property.type))
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-gray-400 text-sm mt-3" }, [
          _c("span", {
            staticClass: "iconify inline red",
            attrs: {
              "data-icon": "ant-design:star-filled",
              "data-inline": "false"
            }
          }),
          _vm._v(" " + _vm._s(_vm.property.rating))
        ])
      ]),
      _vm._v(" "),
      _vm.loading ? _c("Loading") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);