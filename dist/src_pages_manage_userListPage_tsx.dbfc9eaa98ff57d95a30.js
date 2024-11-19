"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_manage_userListPage_tsx"],{

/***/ "./src/apis/manage/getUsersList.ts":
/*!*****************************************!*\
  !*** ./src/apis/manage/getUsersList.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 회원목록 api호출
const getUsersList = async setMemDate => {
  const uri = `api/admin/memberlist`;
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(uri);
    const memList = res.data;
    setMemDate([...memList]);
  } catch (error) {
    console.error(error);
  }
  // TODO : 예외처리하기
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUsersList);

/***/ }),

/***/ "./src/hooks/manage/useUserList.ts":
/*!*****************************************!*\
  !*** ./src/hooks/manage/useUserList.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_manage_getUsersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/manage/getUsersList */ "./src/apis/manage/getUsersList.ts");
/* harmony import */ var styles_css_manage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/css/manage.css */ "./src/styles/css/manage.css");




// user 목록 관리 HOOK
const useUserList = () => {
  const [memberData, setMemDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,apis_manage_getUsersList__WEBPACK_IMPORTED_MODULE_1__["default"])(setMemDate); // list API 요청
  }, []);
  return memberData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserList);

/***/ }),

/***/ "./src/pages/manage/userListPage.tsx":
/*!*******************************************!*\
  !*** ./src/pages/manage/userListPage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styles_css_manage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/css/manage.css */ "./src/styles/css/manage.css");
/* harmony import */ var components_manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/manage */ "./src/components/manage/index.ts");
/* harmony import */ var hooks_manage_useUserList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/manage/useUserList */ "./src/hooks/manage/useUserList.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





const UserListPage = () => {
  // 사용자 리스트 get HOOK
  const memberData = (0,hooks_manage_useUserList__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "content_container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "manageuser_container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "userlist_wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "list_container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "title_wrapper",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "title_state",
                children: "\uC0C1\uD0DC"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "title_name",
                children: "\uC774\uB984"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "title_stunum",
                children: "\uD559\uBC88"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "title_studep",
                children: "\uD559\uACFC"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "title_none",
                children: " "
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_manage__WEBPACK_IMPORTED_MODULE_1__.UserList, {
              memberData: memberData
            })]
          })
        })
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserListPage);

/***/ })

}]);
//# sourceMappingURL=src_pages_manage_userListPage_tsx.dbfc9eaa98ff57d95a30.js.map