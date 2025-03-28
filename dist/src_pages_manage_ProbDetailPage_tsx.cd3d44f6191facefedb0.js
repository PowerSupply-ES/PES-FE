"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_manage_ProbDetailPage_tsx"],{

/***/ "./src/pages/manage/ProbDetailPage.tsx":
/*!*********************************************!*\
  !*** ./src/pages/manage/ProbDetailPage.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/Loading */ "./src/components/common/Loading.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// 관리자_문제 상세 페이지




// ProblemContent 타입
// TODO : 타입 분리하기

const ProbDetailPage = () => {
  let url = new URL(window.location.href);
  let problemId = Number(url.pathname.split("/")[2]); // 문자열을 숫자로 변환

  const [problem, setProblem] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const getProbContent = async problemId => {
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/admin/problem/${problemId}`, {
        withCredentials: true
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProblem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    try {
      const response = await getProbContent(problemId);
      setProblem(response);
    } catch (error) {
      console.error(error);
    }
  }, [problemId]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchProblem();
  }, [fetchProblem]);
  console.log("problem", problem);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    children: problem ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: ["problemTitle : ", problem.problemTitle]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: ["context : ", problem.context]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: ["inputs : ", problem.inputs]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: ["outputs : ", problem.outputs]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: ["problemTitle : ", problem.problemTitle]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: ["problemId : ", problem.problemId]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: ["problemScore : ", problem.problemScore]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: ["sample : ", problem.sample]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], {})
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProbDetailPage);

/***/ })

}]);
//# sourceMappingURL=src_pages_manage_ProbDetailPage_tsx.cd3d44f6191facefedb0.js.map