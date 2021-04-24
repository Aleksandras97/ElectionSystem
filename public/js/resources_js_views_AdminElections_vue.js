(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AdminElections_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminElections.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminElections.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _vue_adminElectionListView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue/adminElectionListView */ "./resources/js/vue/adminElectionListView.vue");
/* harmony import */ var _vue_addElectionForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue/addElectionForm */ "./resources/js/vue/addElectionForm.vue");
/* harmony import */ var _composables_makePagination_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../composables/makePagination.js */ "./resources/js/composables/makePagination.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AddElectionForm: _vue_addElectionForm__WEBPACK_IMPORTED_MODULE_3__.default,
    AdminElectionListView: _vue_adminElectionListView__WEBPACK_IMPORTED_MODULE_2__.default
  },
  setup: function setup() {
    var search = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)('');

    var _makePagination = (0,_composables_makePagination_js__WEBPACK_IMPORTED_MODULE_4__.makePagination)(),
        paginate = _makePagination.paginate,
        pagination = _makePagination.pagination;

    var state = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      elections: {},
      pagination: {},
      loading: false
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(function () {
      if (state.search) {
        searchElections(state.search);
      } else {
        getElections();
      }
    });

    function searchElections(_x, _x2) {
      return _searchElections.apply(this, arguments);
    }

    function _searchElections() {
      _searchElections = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(val, page_url) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page_url = page_url || 'api/search/elections/' + val;
                _context.next = 3;
                return axios.get(page_url).then(function (response) {
                  state.elections = response.data.data;
                  (0,_composables_makePagination_js__WEBPACK_IMPORTED_MODULE_4__.makePagination)(response.data);
                })["catch"](function (error) {
                  return console.log(error);
                })["finally"](function () {
                  return state.loading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _searchElections.apply(this, arguments);
    }

    function getElections(_x3) {
      return _getElections.apply(this, arguments);
    }

    function _getElections() {
      _getElections = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(page_url) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                page_url = page_url || 'api/elections';
                state.loading = true;
                _context2.next = 4;
                return axios.get(page_url).then(function (response) {
                  state.elections = response.data.data;
                  paginate(response.data);
                })["catch"](function (error) {
                  return console.log(error);
                })["finally"](function () {
                  return state.loading = false;
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _getElections.apply(this, arguments);
    }

    return {
      state: state,
      getElections: getElections,
      pagination: pagination
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/Modal.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/Modal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ['close-modal'],
  setup: function setup(_, _ref) {
    var emit = _ref.emit;

    function close() {
      emit('close-modal');
    }

    return {
      close: close
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/addElectionForm.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/addElectionForm.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _composables_Notify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../composables/Notify.js */ "./resources/js/composables/Notify.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: {
    'election-add': null
  },
  setup: function setup(_, _ref) {
    var emit = _ref.emit;
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();

    var _Notification = (0,_composables_Notify_js__WEBPACK_IMPORTED_MODULE_1__.Notification)(),
        SendNotification = _Notification.SendNotification;

    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      election: {
        election_name: "",
        election_date: ""
      },
      errors: {},
      loading: false
    });
    setTimeout(function () {
      store.dispatch('removeNotification');
    }, 3000);

    function addElection() {
      state.loading = true;
      axios.post('api/elections', {
        election_name: state.election.election_name,
        election_date: state.election.election_date
      }).then(function (response) {
        if (response.status === 201) {
          state.election.election_name = "";
          state.errors = "";
          SendNotification('green', 'Successfully added election');
          emit('election-add');
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          state.errors = error.response.data.errors;
        }
      })["finally"](function () {
        return state.loading = false;
      });
    }

    return {
      state: state,
      addElection: addElection
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminElectionListView.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminElectionListView.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adminListElection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminListElection */ "./resources/js/vue/adminListElection.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AdminListElection: _adminListElection__WEBPACK_IMPORTED_MODULE_0__.default
  },
  emits: {
    'reload-elections': null
  },
  props: {
    elections: Object
  },
  setup: function setup() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminListElection.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminListElection.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./resources/js/vue/Modal.vue");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _composables_makePagination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../composables/makePagination.js */ "./resources/js/composables/makePagination.js");
/* harmony import */ var _composables_Notify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../composables/Notify.js */ "./resources/js/composables/Notify.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Modal: _Modal__WEBPACK_IMPORTED_MODULE_2__.default
  },
  emits: {
    'elections-update': null
  },
  props: {
    election: Object
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_5__.useStore)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

    var _makePagination = (0,_composables_makePagination_js__WEBPACK_IMPORTED_MODULE_3__.makePagination)(),
        paginate = _makePagination.paginate,
        pagination = _makePagination.pagination;

    var _Notification = (0,_composables_Notify_js__WEBPACK_IMPORTED_MODULE_4__.Notification)(),
        SendNotification = _Notification.SendNotification; // const goToCandidates = (id) => {
    //     router.push({path: `/admin/${id}/candidates`})
    // }


    var isEditModalOpen = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var isAddCandidateModalOpen = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      election: {},
      allCandidates: {},
      candidates: {},
      candidate: null,
      errors: {},
      loading: false
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      state.election = props.election;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onUpdated)(function () {
      state.election = props.election;
    });

    function getAllCandidates(_x) {
      return _getAllCandidates.apply(this, arguments);
    }

    function _getAllCandidates() {
      _getAllCandidates = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(page_url) {
        var allCandidates, electionCandidates;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page_url = page_url || "api/elections/".concat(state.election.id, "/candidates");
                state.loading = true;
                _context.prev = 2;
                allCandidates = axios.get("api/all/candidates").then(function (response) {
                  state.allCandidates = response.data.data;
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  return state.loading = false;
                });
                electionCandidates = axios.get(page_url).then(function (response) {
                  state.candidates = response.data.data;
                  paginate(response.data);
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  return state.loading = false;
                });
                _context.next = 7;
                return Promise.all([allCandidates, electionCandidates]);

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));
      return _getAllCandidates.apply(this, arguments);
    }

    function addCandidateToElection() {
      state.loading = true;
      axios.post("api/elections/".concat(state.election.id, "/candidates"), {
        candidate_id: state.candidate
      }).then(function (response) {
        if (response.status === 201) {
          getAllCandidates();
          SendNotification('green', "Successfully add candidate to election");
        }
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        return state.loading = false;
      });
    }

    function deleteElection() {
      state.loading = true;
      axios["delete"]('api/elections/' + props.election.id).then(function (response) {
        if (response.status === 204) {
          emit('elections-update');
          SendNotification('green', "Successfully deleted election");
        }
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        return state.loading = false;
      });
    }

    function editElection() {
      state.loading = true;
      axios.put('api/elections/' + props.election.id, {
        election_name: state.election.election_name,
        election_date: state.election.election_date
      }).then(function (response) {
        if (response.status === 200) {
          state.errors = "";
          emit('elections-update');
          isEditModalOpen.value = false;
          SendNotification('green', "Successfully updated election");
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          state.errors = error.response.data.errors;
        }
      })["finally"](function () {
        return state.loading = false;
      });
    }

    return {
      deleteElection: deleteElection,
      isEditModalOpen: isEditModalOpen,
      isAddCandidateModalOpen: isAddCandidateModalOpen,
      state: state,
      editElection: editElection,
      getAllCandidates: getAllCandidates,
      addCandidateToElection: addCandidateToElection,
      pagination: pagination
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminElections.vue?vue&type=template&id=72cf6a4a":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminElections.vue?vue&type=template&id=72cf6a4a ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container mx-auto px-4 sm:px-8"
};
var _hoisted_2 = {
  "class": "py-8"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "text-2xl font-semibold leading-tight"
}, "Elections")], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "my-2 flex sm:flex-row flex-col"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex flex-row mb-1 sm:mb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "relative"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
  "class": "h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", null, "5"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", null, "20")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "fill-current h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "relative"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
  "class": "h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", null, "All"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", null, "Active"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", null, "Inactive")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "fill-current h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
})])])])], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "block relative"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "h-full absolute inset-y-0 left-0 flex items-center pl-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  viewBox: "0 0 24 24",
  "class": "h-4 w-4 fill-current text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
})])], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
};
var _hoisted_9 = {
  "class": "inline-block min-w-full shadow rounded-lg overflow-hidden"
};
var _hoisted_10 = {
  "class": "min-w-full leading-normal"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
}, " Election "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
}, " Date "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
}, " Edit "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
}, " Delete "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
}, " Candidates ")])], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          "
};
var _hoisted_13 = {
  "class": "text-xs xs:text-sm text-gray-900"
};
var _hoisted_14 = {
  "class": "inline-flex mt-2 xs:mt-0"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Prev ");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Next ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AddElectionForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AddElectionForm");

  var _component_admin_election_list_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("admin-election-list-view");

  var _component_font_awesome_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("font-awesome-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.state.search = $event;
    }),
    placeholder: "Search",
    "class": "appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.state.search]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AddElectionForm, {
    onElectionAdd: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.getElections();
    })
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_admin_election_list_view, {
    elections: _ctx.state.elections,
    onReloadElections: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.getElections();
    })
  }, null, 8
  /* PROPS */
  , ["elections"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_13, " Showing " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pagination.current_page) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pagination.last_page) + " Entries ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": ["bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded", {
      'opacity-50': !_ctx.pagination.prev_page_url
    }],
    disabled: !_ctx.pagination.prev_page_url,
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.getElections(_ctx.pagination.prev_page_url);
    })
  }, [_hoisted_15, _ctx.state.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_font_awesome_icon, {
    key: 0,
    "class": "animate-spin",
    icon: "spinner"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , ["disabled"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": ["bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded", {
      'opacity-50': !_ctx.pagination.next_page_url
    }],
    disabled: !_ctx.pagination.next_page_url,
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return _ctx.getElections(_ctx.pagination.next_page_url);
    })
  }, [_hoisted_16, _ctx.state.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_font_awesome_icon, {
    key: 0,
    "class": "animate-spin",
    icon: "spinner"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , ["disabled"])])])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/Modal.vue?vue&type=template&id=76a18236":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/Modal.vue?vue&type=template&id=76a18236 ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "absolute inset-0"
};
var _hoisted_2 = {
  "class": "flex h-full"
};
var _hoisted_3 = {
  "class": "z-30 m-auto bg-white p-2 rounded shadow w-1/5"
};
var _hoisted_4 = {
  "class": "p-2 border"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Modal Title");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Provide data here");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.close && $setup.close.apply($setup, arguments);
    }),
    "class": "z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {
    "class": "text-blue-500 text-2xl"
  }, function () {
    return [_hoisted_5];
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "body", {}, function () {
    return [_hoisted_6];
  })])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/addElectionForm.vue?vue&type=template&id=80e38cb2":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/addElectionForm.vue?vue&type=template&id=80e38cb2 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-start mb-1 sm:mb-0"
};
var _hoisted_2 = {
  "class": "relative "
};
var _hoisted_3 = {
  key: 0,
  "class": "mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded"
};
var _hoisted_4 = {
  "class": "mb-6 mr-2 pt-3 rounded bg-gray-200"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "block text-gray-700 text-sm font-bold mb-2 ml-3",
  "for": "election_name"
}, "Name", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "relative "
};
var _hoisted_7 = {
  key: 0,
  "class": "mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded"
};
var _hoisted_8 = {
  "class": "mb-6 mr-2 pt-3 rounded bg-gray-200"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "block text-gray-700 text-sm font-bold mb-2 ml-3",
  "for": "election_date"
}, "Date", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "relative"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_font_awesome_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("font-awesome-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [$setup.state.errors && $setup.state.errors.election_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.state.errors.election_name[0]), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    name: "election_name",
    id: "election_name",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.state.election.election_name = $event;
    }),
    placeholder: "Election Name",
    "class": "login-input"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.state.election.election_name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [$setup.state.errors && $setup.state.errors.election_date ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.state.errors.election_date[0]), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "date",
    id: "election_date",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.state.election.election_date = $event;
    }),
    placeholder: "Election Date",
    "class": "login-input"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.state.election.election_date]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.addElection();
    }),
    "class": [[$setup.state.election.election_name ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500'], " text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"]
  }, [_hoisted_11, $setup.state.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_font_awesome_icon, {
    key: 0,
    "class": "animate-spin",
    icon: "spinner"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminElectionListView.vue?vue&type=template&id=a2c18098":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminElectionListView.vue?vue&type=template&id=a2c18098 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AdminListElection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AdminListElection");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.elections, function (election, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AdminListElection, {
      election: election,
      onElectionsUpdate: _cache[1] || (_cache[1] = function ($event) {
        return _ctx.$emit('reload-elections');
      })
    }, null, 8
    /* PROPS */
    , ["election"])]);
  }), 128
  /* KEYED_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminListElection.vue?vue&type=template&id=b2ad3522":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminListElection.vue?vue&type=template&id=b2ad3522 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};
var _hoisted_2 = {
  "class": "flex items-center"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex-shrink-0 w-10 h-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "w-full h-full rounded-full",
  src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "ml-3"
};
var _hoisted_5 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};
var _hoisted_6 = {
  "class": "text-gray-900 whitespace-no-wrap"
};
var _hoisted_7 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};
var _hoisted_8 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ");

var _hoisted_10 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Candidates ");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit Election ");

var _hoisted_13 = {
  "class": "flex justify-center p-2"
};
var _hoisted_14 = {
  "class": "block"
};
var _hoisted_15 = {
  "class": "flex justify-start mb-1 sm:mb-0"
};
var _hoisted_16 = {
  "class": "relative "
};
var _hoisted_17 = {
  key: 0,
  "class": "mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded"
};
var _hoisted_18 = {
  "class": "mb-6 mr-2 pt-3 rounded bg-gray-200"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "block text-gray-700 text-sm font-bold mb-2 ml-3",
  "for": "name"
}, "Name", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "relative"
};
var _hoisted_21 = {
  key: 0,
  "class": "mb-2 mr-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded"
};
var _hoisted_22 = {
  "class": " mb-6 mr-2 pt-3 rounded bg-gray-200"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "block text-gray-700 text-sm font-bold mb-2 ml-3",
  "for": "date"
}, "Date", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "flex justify-end my-2 sm:mb-0"
};
var _hoisted_25 = {
  "class": "relative"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ");

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Candidates ");

var _hoisted_28 = {
  "class": "grid grid-cols-2 gap-4 p-2"
};
var _hoisted_29 = {
  "class": "border"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "font-bold text-2xl p-1 mb-2 text-center"
}, "List of candidates", -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "font-bold"
};
var _hoisted_32 = {
  "class": "px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          "
};
var _hoisted_33 = {
  "class": "text-xs xs:text-sm text-gray-900"
};
var _hoisted_34 = {
  "class": "inline-flex mt-2 xs:mt-0"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Prev ");

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Next ");

var _hoisted_37 = {
  "class": "flex justify-center border"
};
var _hoisted_38 = {
  "class": "block w-full"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "font-bold text-2xl p-1 mb-2 text-center"
}, "Add candidate", -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "mx-2 mb-1 sm:mb-0"
};
var _hoisted_41 = {
  "class": "relative"
};
var _hoisted_42 = {
  "class": "mb-6 mr-2 pt-3 rounded bg-gray-200"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "block text-gray-700 text-sm font-bold mb-2 ml-3",
  "for": "candidate"
}, "Candidate", -1
/* HOISTED */
);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "test", -1
/* HOISTED */
);

var _hoisted_45 = {
  "class": "flex justify-center my-2 sm:mb-0"
};
var _hoisted_46 = {
  "class": "relative"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_font_awesome_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("font-awesome-icon");

  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
    "class": "text-gray-900 whitespace-no-wrap hover:text-blue-300 hover:font-bold cursor-pointer",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.goToCandidates($props.election.id);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.election.election_name), 1
  /* TEXT */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.election.election_date), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.isEditModalOpen = true;
    })
  }, " Edit ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": "bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.deleteElection();
    })
  }, [_hoisted_9, _ctx.state.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_font_awesome_icon, {
    key: 0,
    "class": "animate-spin",
    icon: "spinner"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": "bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.isAddCandidateModalOpen = true, _ctx.getAllCandidates();
    })
  }, [_hoisted_11, _ctx.state.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_font_awesome_icon, {
    key: 0,
    "class": "animate-spin",
    icon: "spinner"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _ctx.isEditModalOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    key: 0,
    onCloseModal: _cache[9] || (_cache[9] = function ($event) {
      return _ctx.isEditModalOpen = false;
    })
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [_ctx.state.errors && _ctx.state.errors.election_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.state.errors.election_name[0]), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return _ctx.state.election.election_name = $event;
        }),
        id: "name",
        placeholder: "Election Name",
        "class": "login-input"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.state.election.election_name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [_ctx.state.errors && _ctx.state.errors.election_date ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.state.errors.election_date[0]), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
        type: "date",
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return _ctx.state.election.election_date = $event;
        }),
        id: "date",
        placeholder: "Election Date",
        "class": "login-input"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.state.election.election_date]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        onClick: _cache[7] || (_cache[7] = function ($event) {
          return _ctx.editElection();
        }),
        "class": [[_ctx.state.election.election_name ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500'], " text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"]
      }, [_hoisted_26, _ctx.state.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_font_awesome_icon, {
        key: 0,
        "class": "animate-spin",
        icon: "spinner"
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        onClick: _cache[8] || (_cache[8] = function ($event) {
          return _ctx.isEditModalOpen = false;
        }),
        "class": "bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500  text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
      }, "Cancel")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <button @click=\"deletePost\" class=\"bg-red-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full\">Delete</button>")])];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.isAddCandidateModalOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    key: 1,
    onCloseModal: _cache[15] || (_cache[15] = function ($event) {
      return _ctx.isAddCandidateModalOpen = false;
    })
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_27];
    }),
    body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_29, [_hoisted_30, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.state.candidates, function (candidate, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
          "class": "p-2",
          key: index,
          value: candidate.id
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(candidate.firstname), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(candidate.lastname), 1
        /* TEXT */
        )], 8
        /* PROPS */
        , ["value"]);
      }), 128
      /* KEYED_FRAGMENT */
      )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_33, " Showing " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pagination.current_page) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pagination.last_page) + " Entries ", 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        "class": ["bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded", {
          'opacity-50': !_ctx.pagination.prev_page_url
        }],
        disabled: !_ctx.pagination.prev_page_url,
        onClick: _cache[10] || (_cache[10] = function ($event) {
          return _ctx.getAllCandidates(_ctx.pagination.prev_page_url);
        })
      }, [_hoisted_35, _ctx.state.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_font_awesome_icon, {
        key: 0,
        "class": "animate-spin",
        icon: "spinner"
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , ["disabled"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        "class": ["bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 text-white font-bold py-1 px-4 ml-3 border-b-4 rounded", {
          'opacity-50': !_ctx.pagination.next_page_url
        }],
        disabled: !_ctx.pagination.next_page_url,
        onClick: _cache[11] || (_cache[11] = function ($event) {
          return _ctx.getAllCandidates(_ctx.pagination.next_page_url);
        })
      }, [_hoisted_36, _ctx.state.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_font_awesome_icon, {
        key: 0,
        "class": "animate-spin",
        icon: "spinner"
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , ["disabled"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
        "class": "login-input",
        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
          return _ctx.state.candidate = $event;
        }),
        id: "candidate",
        name: "candidate"
      }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.state.allCandidates, function (candidate, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
          key: index,
          value: candidate.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(candidate.firstname) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(candidate.lastname), 9
        /* TEXT, PROPS */
        , ["value"]);
      }), 128
      /* KEYED_FRAGMENT */
      )), _hoisted_44], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.state.candidate]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        onClick: _cache[13] || (_cache[13] = function () {
          return _ctx.addCandidateToElection && _ctx.addCandidateToElection.apply(_ctx, arguments);
        }),
        "class": [[_ctx.state.election.election_name ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500'], " text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"]
      }, [_hoisted_47, _ctx.state.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_font_awesome_icon, {
        key: 0,
        "class": "animate-spin",
        icon: "spinner"
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        onClick: _cache[14] || (_cache[14] = function ($event) {
          return _ctx.isAddCandidateModalOpen = false;
        }),
        "class": "bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500  text-white font-bold py-1 px-4 ml-3 border-b-4 rounded"
      }, "Cancel")])])])])])];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/composables/Notify.js":
/*!********************************************!*\
  !*** ./resources/js/composables/Notify.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notification": () => (/* binding */ Notification)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");

function Notification() {
  var store = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.useStore)();

  function SendNotification(type, message) {
    var notification = {
      id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
      type: type,
      message: message
    };
    store.dispatch('addNotification', notification);
    setTimeout(function () {
      store.dispatch('removeNotification', notification);
    }, 3000);
  }

  return {
    SendNotification: SendNotification
  };
}

/***/ }),

/***/ "./resources/js/composables/makePagination.js":
/*!****************************************************!*\
  !*** ./resources/js/composables/makePagination.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makePagination": () => (/* binding */ makePagination)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function makePagination() {
  var pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});

  function paginate(data) {
    var pag = {
      current_page: data.meta.current_page,
      last_page: data.meta.last_page,
      prev_page_url: data.links.prev,
      next_page_url: data.links.next
    };
    pagination.value = pag;
  }

  return {
    paginate: paginate,
    pagination: pagination
  };
}

/***/ }),

/***/ "./resources/js/views/AdminElections.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/AdminElections.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminElections_vue_vue_type_template_id_72cf6a4a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminElections.vue?vue&type=template&id=72cf6a4a */ "./resources/js/views/AdminElections.vue?vue&type=template&id=72cf6a4a");
/* harmony import */ var _AdminElections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminElections.vue?vue&type=script&lang=js */ "./resources/js/views/AdminElections.vue?vue&type=script&lang=js");



_AdminElections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _AdminElections_vue_vue_type_template_id_72cf6a4a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_AdminElections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/AdminElections.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AdminElections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/vue/Modal.vue":
/*!************************************!*\
  !*** ./resources/js/vue/Modal.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_vue_vue_type_template_id_76a18236__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=76a18236 */ "./resources/js/vue/Modal.vue?vue&type=template&id=76a18236");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js */ "./resources/js/vue/Modal.vue?vue&type=script&lang=js");



_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Modal_vue_vue_type_template_id_76a18236__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/vue/Modal.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/vue/addElectionForm.vue":
/*!**********************************************!*\
  !*** ./resources/js/vue/addElectionForm.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addElectionForm_vue_vue_type_template_id_80e38cb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addElectionForm.vue?vue&type=template&id=80e38cb2 */ "./resources/js/vue/addElectionForm.vue?vue&type=template&id=80e38cb2");
/* harmony import */ var _addElectionForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addElectionForm.vue?vue&type=script&lang=js */ "./resources/js/vue/addElectionForm.vue?vue&type=script&lang=js");



_addElectionForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _addElectionForm_vue_vue_type_template_id_80e38cb2__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_addElectionForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/vue/addElectionForm.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_addElectionForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/vue/adminElectionListView.vue":
/*!****************************************************!*\
  !*** ./resources/js/vue/adminElectionListView.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adminElectionListView_vue_vue_type_template_id_a2c18098__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminElectionListView.vue?vue&type=template&id=a2c18098 */ "./resources/js/vue/adminElectionListView.vue?vue&type=template&id=a2c18098");
/* harmony import */ var _adminElectionListView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminElectionListView.vue?vue&type=script&lang=js */ "./resources/js/vue/adminElectionListView.vue?vue&type=script&lang=js");



_adminElectionListView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _adminElectionListView_vue_vue_type_template_id_a2c18098__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_adminElectionListView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/vue/adminElectionListView.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_adminElectionListView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/vue/adminListElection.vue":
/*!************************************************!*\
  !*** ./resources/js/vue/adminListElection.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adminListElection_vue_vue_type_template_id_b2ad3522__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminListElection.vue?vue&type=template&id=b2ad3522 */ "./resources/js/vue/adminListElection.vue?vue&type=template&id=b2ad3522");
/* harmony import */ var _adminListElection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminListElection.vue?vue&type=script&lang=js */ "./resources/js/vue/adminListElection.vue?vue&type=script&lang=js");



_adminListElection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _adminListElection_vue_vue_type_template_id_b2ad3522__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_adminListElection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/vue/adminListElection.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_adminListElection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/AdminElections.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/views/AdminElections.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminElections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminElections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminElections.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminElections.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/vue/Modal.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./resources/js/vue/Modal.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/Modal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/vue/addElectionForm.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/vue/addElectionForm.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_addElectionForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_addElectionForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./addElectionForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/addElectionForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/vue/adminElectionListView.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/vue/adminElectionListView.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_adminElectionListView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_adminElectionListView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./adminElectionListView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminElectionListView.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/vue/adminListElection.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/vue/adminListElection.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_adminListElection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_adminListElection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./adminListElection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminListElection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/AdminElections.vue?vue&type=template&id=72cf6a4a":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/AdminElections.vue?vue&type=template&id=72cf6a4a ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminElections_vue_vue_type_template_id_72cf6a4a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminElections_vue_vue_type_template_id_72cf6a4a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminElections.vue?vue&type=template&id=72cf6a4a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminElections.vue?vue&type=template&id=72cf6a4a");


/***/ }),

/***/ "./resources/js/vue/Modal.vue?vue&type=template&id=76a18236":
/*!******************************************************************!*\
  !*** ./resources/js/vue/Modal.vue?vue&type=template&id=76a18236 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_76a18236__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_76a18236__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=template&id=76a18236 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/Modal.vue?vue&type=template&id=76a18236");


/***/ }),

/***/ "./resources/js/vue/addElectionForm.vue?vue&type=template&id=80e38cb2":
/*!****************************************************************************!*\
  !*** ./resources/js/vue/addElectionForm.vue?vue&type=template&id=80e38cb2 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_addElectionForm_vue_vue_type_template_id_80e38cb2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_addElectionForm_vue_vue_type_template_id_80e38cb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./addElectionForm.vue?vue&type=template&id=80e38cb2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/addElectionForm.vue?vue&type=template&id=80e38cb2");


/***/ }),

/***/ "./resources/js/vue/adminElectionListView.vue?vue&type=template&id=a2c18098":
/*!**********************************************************************************!*\
  !*** ./resources/js/vue/adminElectionListView.vue?vue&type=template&id=a2c18098 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_adminElectionListView_vue_vue_type_template_id_a2c18098__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_adminElectionListView_vue_vue_type_template_id_a2c18098__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./adminElectionListView.vue?vue&type=template&id=a2c18098 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminElectionListView.vue?vue&type=template&id=a2c18098");


/***/ }),

/***/ "./resources/js/vue/adminListElection.vue?vue&type=template&id=b2ad3522":
/*!******************************************************************************!*\
  !*** ./resources/js/vue/adminListElection.vue?vue&type=template&id=b2ad3522 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_adminListElection_vue_vue_type_template_id_b2ad3522__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_adminListElection_vue_vue_type_template_id_b2ad3522__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./adminListElection.vue?vue&type=template&id=b2ad3522 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/adminListElection.vue?vue&type=template&id=b2ad3522");


/***/ })

}]);