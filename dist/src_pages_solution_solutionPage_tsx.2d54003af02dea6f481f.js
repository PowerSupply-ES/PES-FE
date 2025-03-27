"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_solution_solutionPage_tsx"],{

/***/ "./src/apis/problem/getProbTitle.ts":
/*!******************************************!*\
  !*** ./src/apis/problem/getProbTitle.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


// 문제 제목 get 요청
const getProbTitle = async problemId => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api2/problemtitle/${problemId}`, {
      withCredentials: true
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
  console.log("problemId:", problemId);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProbTitle);

/***/ }),

/***/ "./src/apis/solution/getSoluList.ts":
/*!******************************************!*\
  !*** ./src/apis/solution/getSoluList.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 풀이 get API
const getSoluList = async problemId => {
  const uri = "/api/answerlist/";
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${uri}${problemId}`);
    return response.data;
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
    return []; // 오류 발생 시 빈 배열 반환
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSoluList);

/***/ }),

/***/ "./src/components/solution/SolvingList.tsx":
/*!*************************************************!*\
  !*** ./src/components/solution/SolvingList.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



// 풀이list 컴포넌트
const SolvingList = _ref => {
  let {
    solveData
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();

  // 해당 풀이로 이동
  const gotoProblem = answerId => {
    console.log("answerId: ", answerId);
    navigate(`/question/${answerId}`);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "solving_list",
    children: solveData.map(it =>
    // answerState가 "question"과 일치하지 않을 때에만 렌더링( 수정: answerId -> answerState )
    it.answerState !== "question" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "solving",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "userGen",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            children: it.memberGen
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            children: "\uAE30 "
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "userName",
          children: it.memberName
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "process_num",
          children: [it.commentCount, "/2"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: `${it.answerState === "success" ? "btn_success" : it.answerState === "fail" ? "btn_fail" : "btn_state"}`,
          children: it.answerState
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "btn_goto_challenge",
          onClick: () => gotoProblem(it.answerId),
          children: "\uD480\uC774\uBCF4\uAE30"
        })]
      })]
    }, it.answerId))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SolvingList);

/***/ }),

/***/ "./src/hooks/solution/index.ts":
/*!*************************************!*\
  !*** ./src/hooks/solution/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSoluList: () => (/* reexport safe */ _useSoluList__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useSoluProb: () => (/* reexport safe */ _useSoluProb__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _useSoluList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSoluList */ "./src/hooks/solution/useSoluList.ts");
/* harmony import */ var _useSoluProb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSoluProb */ "./src/hooks/solution/useSoluProb.ts");
// hooks/solution 디렉토리 export 관리



/***/ }),

/***/ "./src/hooks/solution/useSoluList.ts":
/*!*******************************************!*\
  !*** ./src/hooks/solution/useSoluList.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_solution_getSoluList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/solution/getSoluList */ "./src/apis/solution/getSoluList.ts");



// 풀이 get HOOk
const useSoluList = problemId => {
  const [solveData, setSolveData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  // 풀이 get API
  const sendGetSolve = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      const res = await (0,apis_solution_getSoluList__WEBPACK_IMPORTED_MODULE_1__["default"])(problemId);
      setSolveData(res);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  }, [problemId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    sendGetSolve();
  }, [sendGetSolve]);
  return solveData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSoluList);

/***/ }),

/***/ "./src/hooks/solution/useSoluProb.ts":
/*!*******************************************!*\
  !*** ./src/hooks/solution/useSoluProb.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_problem_getProbTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/problem/getProbTitle */ "./src/apis/problem/getProbTitle.ts");


// 문제제목 get HOOk
const useSoluProb = problemId => {
  const [problemData, setProblemData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);

  // 문제제목 get API
  const sendGetProblem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      const res = await (0,apis_problem_getProbTitle__WEBPACK_IMPORTED_MODULE_1__["default"])(problemId);
      setProblemData(res);
    } catch (error) {
      // TODO : 예외처리 자세히
      console.error("데이터 가져오기 실패:", error);
    }
  }, [problemId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    sendGetProblem();
  }, [sendGetProblem]);
  return problemData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSoluProb);

/***/ }),

/***/ "./src/pages/solution/solutionPage.tsx":
/*!*********************************************!*\
  !*** ./src/pages/solution/solutionPage.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styles_css_solution_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/css/solution.css */ "./src/styles/css/solution.css");
/* harmony import */ var components_solution_SolvingList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/solution/SolvingList */ "./src/components/solution/SolvingList.tsx");
/* harmony import */ var hooks_solution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/solution */ "./src/hooks/solution/index.ts");
/* harmony import */ var components_common_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/Loading */ "./src/components/common/Loading.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





const SolutionPage = () => {
  // TODO : split한 problemId와 solveData.problemId 구분하기
  let url = new URL(window.location.href);
  let problemId = url.pathname.split("/")[2];
  sessionStorage.setItem("problemId", problemId);

  // 인수 전달을 위한 problem 타입 가공
  const problemIdParsed = Number(problemId);
  // 문제 get API HOOk
  const problemData = (0,hooks_solution__WEBPACK_IMPORTED_MODULE_2__.useSoluProb)(problemIdParsed);
  // 풀이 get API HOOk
  const solveData = (0,hooks_solution__WEBPACK_IMPORTED_MODULE_2__.useSoluList)(problemIdParsed);

  // 조건부 렌더링
  if (!problemData || !solveData.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "solution_container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "solution_bar",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "solution",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "solution_num",
            children: problemData.problemId
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "solution_title",
            children: problemData.problemTitle
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "prob_score",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: problemData.problemScore
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: "\uC810"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "pass_num"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_solution_SolvingList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      solveData: solveData
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SolutionPage);

/***/ }),

/***/ "./src/styles/css/solution.css":
/*!*************************************!*\
  !*** ./src/styles/css/solution.css ***!
  \*************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_pages_solution_solutionPage_tsx.2d54003af02dea6f481f.js.map