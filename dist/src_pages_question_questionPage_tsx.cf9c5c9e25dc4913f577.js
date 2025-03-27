"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_question_questionPage_tsx"],{

/***/ "./src/apis/problem/getProbContent.ts":
/*!********************************************!*\
  !*** ./src/apis/problem/getProbContent.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


// 문제 내용 get 요청
const getProbContent = async problemId => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api2/problem/${problemId}`, {
      withCredentials: true
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProbContent);

/***/ }),

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

/***/ "./src/apis/problem/postSubmitCode.ts":
/*!********************************************!*\
  !*** ./src/apis/problem/postSubmitCode.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


// 코드 제출 post 요청
const postSubmitCode = async (request, problemId) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api2/submit/${problemId}`, {
      code: request,
      problemId: problemId
    });
    return {
      data: response.data,
      status: response.status
    };
  } catch (error) {
    console.log(error);

    // error가 AxiosError인지 확인
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
      return {
        status: error.response ? error.response.status : 500
      };
    } else {
      // 예상하지 못한 다른 에러의 경우
      return {
        status: 500
      };
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postSubmitCode);

/***/ }),

/***/ "./src/apis/question/getCode.ts":
/*!**************************************!*\
  !*** ./src/apis/question/getCode.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


// 사용자가 작성한 코드 불러오기 (get)
const getCode = async answerId => {
  try {
    const {
      data: response
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api2/question/${answerId}`, {
      withCredentials: true
    });
    return response.code;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCode);

/***/ }),

/***/ "./src/apis/question/getFeed.ts":
/*!**************************************!*\
  !*** ./src/apis/question/getFeed.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 댓글 불러오기 (get)
const getFeed = async answerId => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/comment/${answerId}`, {
      withCredentials: true
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFeed);

/***/ }),

/***/ "./src/apis/question/getQues.ts":
/*!**************************************!*\
  !*** ./src/apis/question/getQues.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 질문, 답변 블러오기 (get)
const getQues = async answerId => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/answer/${answerId}`, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getQues);

/***/ }),

/***/ "./src/apis/question/index.ts":
/*!************************************!*\
  !*** ./src/apis/question/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCode: () => (/* reexport safe */ _getCode__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   getFeed: () => (/* reexport safe */ _getFeed__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   getQues: () => (/* reexport safe */ _getQues__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   postAnswers: () => (/* reexport safe */ _postAnswers__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   postFeed: () => (/* reexport safe */ _postFeed__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _getCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCode */ "./src/apis/question/getCode.ts");
/* harmony import */ var _getFeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFeed */ "./src/apis/question/getFeed.ts");
/* harmony import */ var _getQues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getQues */ "./src/apis/question/getQues.ts");
/* harmony import */ var _postAnswers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postAnswers */ "./src/apis/question/postAnswers.ts");
/* harmony import */ var _postFeed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postFeed */ "./src/apis/question/postFeed.ts");
// apis/question 디렉토리 export 관리






/***/ }),

/***/ "./src/apis/question/postAnswers.ts":
/*!******************************************!*\
  !*** ./src/apis/question/postAnswers.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


// 질문 답변하기 (post)
const postAnswers = async (answerId, answerFst, answerSec) => {
  try {
    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/answer/${answerId}`, {
      answerFst,
      answerSec
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postAnswers);

/***/ }),

/***/ "./src/apis/question/postFeed.ts":
/*!***************************************!*\
  !*** ./src/apis/question/postFeed.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


// 댓글 달기 (post)
const postFeed = async (answerId, comment, selected) => {
  try {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/comment/${answerId}`, {
      comment,
      // 댓글
      commentPassFail: selected
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postFeed);

/***/ }),

/***/ "./src/components/common/Common.tsx":
/*!******************************************!*\
  !*** ./src/components/common/Common.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goBack: () => (/* binding */ goBack),
/* harmony export */   renderNewlines: () => (/* binding */ renderNewlines),
/* harmony export */   renderStyledNewlines: () => (/* binding */ renderStyledNewlines),
/* harmony export */   transferTime: () => (/* binding */ transferTime)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

// ===== 공용 함수 지정 =====

// --- Time에서 "T" 제거하여 표시하는 함수

const transferTime = time => {
  if (!time) return ""; // 시간이 없는 경우 처리

  return time.replace("T", " ");
};

// --- 뒤로가기 함수
const goBack = () => {
  window.history.back();
};

// --- '\n' 기준으로 줄바꿈하는 함수
// React.ReactNode : JSX반환타입
const renderNewlines = text => {
  return text.split("\n").map((line, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [line, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {})]
  }, index));
};

// --- '\n\n' 기준으로 줄바꿈하는 함수
const renderStyledNewlines = text => {
  const lines = text.split("\n\n"); // 각 줄을 분할
  return lines.map((line, index) => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
      children: [line, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {})]
    }, index);
  });
};

/***/ }),

/***/ "./src/components/question/ProbCode.tsx":
/*!**********************************************!*\
  !*** ./src/components/question/ProbCode.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/Common */ "./src/components/common/Common.tsx");
/* harmony import */ var components_common_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/Loading */ "./src/components/common/Loading.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const CodeEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("src_components_problem_CodeEditor_tsx"), __webpack_require__.e("src_libs_ace_js")]).then(__webpack_require__.bind(__webpack_require__, /*! components/problem/CodeEditor */ "./src/components/problem/CodeEditor.tsx"))); // Lazy Loading 적용

// 작성했던 코드 출력 컴포넌트
const ProbCode = _ref => {
  let {
    FstHandler,
    SecHandler,
    code,
    qnA,
    setCode,
    problemId
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "code_question_container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "code_container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CodeEditor, {
          onChange: setCode,
          readOnly: true,
          code: code
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "question_container",
      children: qnA.answerState === "question" ?
      /*#__PURE__*/
      // 기존 : !qnA.answerState || !qnA.answerSec
      // answerState: question (qnA만 있음, 답변해야 하는 상태)
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "question_layout",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "question_header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "question_id",
              children: "\uC9C8\uBB38 1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "header_title",
              children: qnA.questionContentFst
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
            className: "answer_input",
            onChange: FstHandler
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "question_layout",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "question_header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "question_id",
              children: "\uC9C8\uBB38 2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "header_title",
              children: qnA.questionContentSec
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
            className: "answer_input",
            onChange: SecHandler
          })]
        })]
      }) :
      /*#__PURE__*/
      // < answerState 참고 >
      // answerState: comment (qnA O / qnA.answerFst, qnA.answerSec O / feedback 0개 or 1개)
      // answerState: success
      // answerState: fail
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "question_header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "question_id",
            children: "\uC9C8\uBB38 1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "header_title",
            children: qnA.questionContentFst
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "answer_input display",
          children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_1__.renderNewlines)(qnA.answerFst)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "question_header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "question_id",
            children: "\uC9C8\uBB38 2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "header_title",
            children: qnA.questionContentSec
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "answer_input display",
          children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_1__.renderNewlines)(qnA.answerSec)
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProbCode);

/***/ }),

/***/ "./src/components/question/ProbHeader.tsx":
/*!************************************************!*\
  !*** ./src/components/question/ProbHeader.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_problem_useProbPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/problem/useProbPage */ "./src/hooks/problem/useProbPage.ts");
/* harmony import */ var components_common_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/Common */ "./src/components/common/Common.tsx");
/* harmony import */ var styles_styledComponent_Problem_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/styledComponent/Problem-styled */ "./src/styles/styledComponent/Problem-styled.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





// 문제 헤더 컴포넌트
const ProbHeader = _ref => {
  let {
    state,
    navigate,
    problemId
  } = _ref;
  const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // problem 제목, 내용 HOOK 호출 - null이나 undefined일때 -1전달
  const {
    title,
    problem
  } = (0,hooks_problem_useProbPage__WEBPACK_IMPORTED_MODULE_1__["default"])(problemId ?? -1);

  // 문제보기 dropdown 상태관리 함수
  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  // title과 problem이 null일 경우 기본값 설정 - TODO: 중복 수정하기
  const titleText = title ? title.problemTitle : "제목 없음";
  const problemContent = problem ? problem.problemContent : "문제 내용 없음";
  const sampleInputs = problem ? problem.sampleInputs : [];
  const sampleOutputs = problem ? problem.sampleOutputs : [];

  // problemId가 null이거나 -1인 경우 예외처리
  if (problemId === null || problemId === -1) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styles_styledComponent_Problem_styled__WEBPACK_IMPORTED_MODULE_3__.StyledProblem, {
      className: "problem_header_section",
      state: state,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "problem_header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "problem_group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "problem_id",
            children: "\uC54C\uC218\uC5C6\uC74C"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "header_title",
            children: "\uC81C\uBAA9 \uC5C6\uC74C"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "header_answer_state",
            children: "\uC54C\uC218\uC5C6\uC74C"
          })]
        })
      })
    });
  }
  // 정상적인 경우
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(styles_styledComponent_Problem_styled__WEBPACK_IMPORTED_MODULE_3__.StyledProblem, {
    className: "problem_header_section",
    state: state,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "problem_header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "problem_group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "problem_id",
          children: ["\uBB38\uC81C", problemId !== null ? problemId : "정보 없음"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "header_title",
          children: titleText
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "header_answer_state",
          children: state === "success" ? "성공" : state === "fail" ? "실패" : "미완료"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "button_group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        className: "button_problem",
        onClick: toggleDropdown,
        children: ["\uBB38\uC81C\uBCF4\uAE30", isDropdownOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dropdown_content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "content",
            style: {
              whiteSpace: "pre"
            },
            children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_2__.renderNewlines)(problemContent)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "sample_inputs",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              children: "Sample Inputs:"
            }), sampleInputs.map((input, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
              children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_2__.renderNewlines)(input)
            }, index))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "sample_outputs",
            style: {
              whiteSpace: "pre"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              children: "Sample Outputs:"
            }), sampleOutputs.map((output, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
              children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_2__.renderNewlines)(output)
            }, index))]
          })]
        })]
      }), (state === "success" || state === "fail") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: "button_solution",
        onClick: () => navigate(`/solution/${problemId}`),
        children: "\uB2E4\uB978 \uD480\uC774 \uBCF4\uAE30"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProbHeader);

/***/ }),

/***/ "./src/components/question/RenderAnswerUI.tsx":
/*!****************************************************!*\
  !*** ./src/components/question/RenderAnswerUI.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/question */ "./src/components/question/index.ts");
/* harmony import */ var styles_styledComponent_Question_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/styledComponent/Question-styled */ "./src/styles/styledComponent/Question-styled.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// 답변(answer) 렌더링 컴포넌트
const RenderAnswerUI = _ref => {
  let {
    navigate,
    code,
    qnA,
    state,
    setCode,
    textFst,
    handleTextFstChange,
    // 질문1 입력 핸들러
    postAnswer
  } = _ref;
  // problemId 가져오기 - 이동하기
  const problemId = Number(sessionStorage.getItem("problemId"));
  const [textSec, setTextSec] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  // 질문2 입력 핸들러
  const handleTextSecChange = e => {
    setTextSec(e.target.value);
  };

  // 답변 제출 함수
  const submitAnswer = () => {
    if (!textFst || !textSec) {
      // 수정: !textSec.current -> !textSec
      alert("내용을 입력해주세요!");
    } else {
      const isConfirmed = window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?");
      if (isConfirmed) {
        postAnswer(textFst, textSec); // 수정: textFst.current, textSec.current -> textFst.current.value, textSec
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(styles_styledComponent_Question_styled__WEBPACK_IMPORTED_MODULE_2__.StyledQuestion, {
    className: "problem_answer_section",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(components_question__WEBPACK_IMPORTED_MODULE_1__.ProbHeader, {
      state: state,
      navigate: navigate,
      problemId: problemId
    }), "  ", qnA && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(components_question__WEBPACK_IMPORTED_MODULE_1__.ProbCode, {
      FstHandler: handleTextFstChange,
      SecHandler: handleTextSecChange,
      code: code,
      qnA: qnA,
      setCode: setCode,
      problemId: problemId
    }), state === "question" && (!qnA.answerFst || !qnA.answerSec) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "btn_container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "button answer",
        onClick: submitAnswer,
        children: "\uB2F5\uBCC0\uD558\uAE30"
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderAnswerUI);

/***/ }),

/***/ "./src/components/question/RenderFeed.tsx":
/*!************************************************!*\
  !*** ./src/components/question/RenderFeed.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/Common */ "./src/components/common/Common.tsx");
/* harmony import */ var styles_styledComponent_Question_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/styledComponent/Question-styled */ "./src/styles/styledComponent/Question-styled.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// feedback 렌더링 컴포넌트
const RenderFeed = _ref => {
  let {
    // RenderFeed props 타입
    navigate,
    state,
    textFst,
    handleTextFstChange,
    memberStatus,
    feedbacks,
    passCount,
    postFeedback
  } = _ref;
  const [buttonColor1, setButtonColor1] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("rgba(4, 202, 0, 0.6)");
  const [buttonColor2, setButtonColor2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("rgba(244, 117, 117, 0.6)");
  const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // pass버튼 클릭 핸들러
  const passButtonClick = () => {
    setButtonColor2("rgba(244, 117, 117, 0.6)"); // 다른 버튼 색상 초기화
    setButtonColor1("rgba(4, 202, 0, 1)"); // 현재 버튼 색깔 변경
  };

  // fail버튼 클릭 핸들러
  const failButtonClick = () => {
    setButtonColor1("rgba(4, 202, 0, 0.6)"); // 다른 버튼 색상 초기화
    setButtonColor2("rgba(244, 117, 117, 1)"); // 현재 버튼 색깔 변경
  };

  // pass, fail 선택 핸들러
  const handleOption = option => {
    setSelectedOption(option);
  };

  // 댓글 제출 함수 - TODO : return확인 요함
  const submitComment = () => {
    if (!textFst || !textFst) {
      alert("내용을 입력해주세요!");
      return;
    }
    if (!selectedOption) {
      alert("통과 여부를 선택해주세요!");
      return;
    }
    const isConfirmed = window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?");
    if (isConfirmed) {
      postFeedback(textFst, parseInt(selectedOption, 10));
    }
  };

  // 객체 값을 배열로 변환
  const feedbackArray = feedbacks ? Object.values(feedbacks) : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(styles_styledComponent_Question_styled__WEBPACK_IMPORTED_MODULE_2__.StyledQuestion, {
    className: "feedback_section_1",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("hr", {
      style: {
        height: 2,
        border: "none",
        backgroundColor: "gray",
        marginTop: 100
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "feedback_section",
      children: [memberStatus === "신입생" && feedbackArray.length <= 0 && state === "comment" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "feedback_waiting_bar",
        onClick: () => navigate(`/`),
        children: "\uD53C\uB4DC\uBC31\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC911\uC785\uB2C8\uB2E4..."
      }), feedbackArray.length > 0 && feedbackArray.map((feedback, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "feedback_container",
        children: [feedback.commentPassFail === 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "feedback_result_pass",
          children: "PASS"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "feedback_result_fail",
          children: "FAIL"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "question_header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "feedback_index",
            children: `Feedback ${index + 1}`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "feedback_writer",
            children: [feedback.writerGen, "\uAE30"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "feedback_writer",
            children: feedback.writerName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "feedback_content display",
          children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_1__.renderNewlines)(feedback.commentContent)
        })]
      }, index)), (memberStatus === "재학생" || memberStatus === "관리자") && feedbackArray.length <= 1 && state === "comment" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "feed_section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "question_header",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "feedback_index",
            children: "Feedback"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
          className: "feedback_content input",
          placeholder: "\uD53C\uB4DC\uBC31\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          onChange: handleTextFstChange
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "feedback_select_section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "button_container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "select_button pass"
              // isSelected={selectedOption === "1"}
              ,
              style: {
                color: buttonColor1
              },
              onClick: () => {
                handleOption("1");
                passButtonClick();
              },
              children: "PASS"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "select_button fail"
              // isSelected={selectedOption === "0"}
              ,
              style: {
                color: buttonColor2
              },
              onClick: () => {
                handleOption("0");
                failButtonClick();
              },
              children: "FAIL"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "select_comment",
            children: "PASS \uD639\uC740 FAIL\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: "feedback_button",
          onClick: submitComment,
          children: "\uB2F5\uBCC0\uD558\uAE30"
        })]
      })]
    }), feedbackArray.length >= 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "result_container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: passCount >= 1 && feedbackArray.length > 1 ? "result success" : "result fail",
        onClick: () => navigate(`/`),
        children: passCount >= 1 && feedbackArray.length > 1 ? `축하합니다! 성공적으로 통과했습니다!  ( ${passCount}/2 )` : `질문테스트에 통과하지 못했습니다.  ( ${passCount}/2 )`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: "\uD074\uB9AD\uC2DC \uD648\uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderFeed);

/***/ }),

/***/ "./src/components/question/index.ts":
/*!******************************************!*\
  !*** ./src/components/question/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProbCode: () => (/* reexport safe */ _ProbCode__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ProbHeader: () => (/* reexport safe */ _ProbHeader__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _ProbCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProbCode */ "./src/components/question/ProbCode.tsx");
/* harmony import */ var _ProbHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProbHeader */ "./src/components/question/ProbHeader.tsx");
/* harmony import */ var _RenderAnswerUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderAnswerUI */ "./src/components/question/RenderAnswerUI.tsx");
/* harmony import */ var _RenderFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RenderFeed */ "./src/components/question/RenderFeed.tsx");
// components/question 디렉토리 export 관리





/***/ }),

/***/ "./src/hooks/problem/index.ts":
/*!************************************!*\
  !*** ./src/hooks/problem/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useProbContent: () => (/* reexport safe */ _useProbContent__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useProbTitle: () => (/* reexport safe */ _useProbTitle__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   useSubmitCode: () => (/* reexport safe */ _useSubmitCode__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _useProbContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useProbContent */ "./src/hooks/problem/useProbContent.ts");
/* harmony import */ var _useProbTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useProbTitle */ "./src/hooks/problem/useProbTitle.ts");
/* harmony import */ var _useSubmitCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSubmitCode */ "./src/hooks/problem/useSubmitCode.ts");
// hooks/problem 디렉토리 export 관리




/***/ }),

/***/ "./src/hooks/problem/useProbContent.ts":
/*!*********************************************!*\
  !*** ./src/hooks/problem/useProbContent.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_problem_getProbContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/problem/getProbContent */ "./src/apis/problem/getProbContent.ts");


// 문제 내용 get HOOK
const useProbContent = problemId => {
  const [problem, setProblem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const fetchProblem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      const response = await (0,apis_problem_getProbContent__WEBPACK_IMPORTED_MODULE_1__["default"])(problemId);
      setProblem(response);
    } catch (error) {
      console.error(error);
    }
  }, [problemId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchProblem();
  }, [fetchProblem]);
  return problem;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProbContent);

/***/ }),

/***/ "./src/hooks/problem/useProbPage.ts":
/*!******************************************!*\
  !*** ./src/hooks/problem/useProbPage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/hooks/problem/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
// 문제 관련 HOOK 반환타입


// 문제 관련 HOOK 관리 - ProblemPage에 사용
const useProbPage = problemId => {
  const title = (0,_index__WEBPACK_IMPORTED_MODULE_0__.useProbTitle)(problemId); // 문제 제목 get HOOK
  const problem = (0,_index__WEBPACK_IMPORTED_MODULE_0__.useProbContent)(problemId); // 문제 내용 get HOOK
  const {
    textHandler,
    submitCode,
    detail
  } = (0,_index__WEBPACK_IMPORTED_MODULE_0__.useSubmitCode)(problemId); // 문제 post 요청
  const {
    status
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.sign); // redux에서 가져오기

  const isLogin = status;
  return {
    title,
    problem,
    detail,
    isLogin,
    textHandler,
    submitCode
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProbPage);

/***/ }),

/***/ "./src/hooks/problem/useProbTitle.ts":
/*!*******************************************!*\
  !*** ./src/hooks/problem/useProbTitle.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_problem_getProbTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/problem/getProbTitle */ "./src/apis/problem/getProbTitle.ts");


// 문제 제목 get HOOK
const useProbTitle = problemId => {
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // problemId가 변경되지 않는 한, 동일한 함수로 재사용
  const fetchTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      const titleData = await (0,apis_problem_getProbTitle__WEBPACK_IMPORTED_MODULE_1__["default"])(problemId);
      if (titleData) {
        setTitle(titleData); // titleData가 존재할 때만 state 업데이트
      } else {
        setTitle(null);
      }
    } catch (error) {
      console.error(error);
      setTitle(null);
    }
  }, [problemId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchTitle();
  }, [fetchTitle]);
  return title;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProbTitle);

/***/ }),

/***/ "./src/hooks/problem/useSubmitCode.ts":
/*!********************************************!*\
  !*** ./src/hooks/problem/useSubmitCode.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var apis_problem_postSubmitCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/problem/postSubmitCode */ "./src/apis/problem/postSubmitCode.ts");




// 문제 post 요청
const useSubmitCode = problemId => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const text = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(""); // 코드 입력을 위한 useRef
  const [detail, setDetail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // 틀린 이유 저장하는 state

  // 수정코드_by성임
  function textHandler(newCode) {
    text.current = newCode;
  }
  const submitCode = async () => {
    if (!text.current) {
      alert("코드를 입력해주세요!");
    } else {
      const {
        data: response,
        status
      } = await (0,apis_problem_postSubmitCode__WEBPACK_IMPORTED_MODULE_1__["default"])(text.current, problemId);
      if (!response) {
        alert("오류!");
      } else if (status === 201) {
        console.log(response);
        alert("문제를 맞혔습니다! 질의응답 페이지로 이동합니다.");
        sessionStorage.setItem("problemId", problemId.toString());
        navigate(`/question/${response.answer_id}`);
      } else if (status === 202) {
        setDetail(response.detail);
        alert("문제를 틀렸습니다! 다시 풀어보세요.");
      } else if (status === 500) {
        alert(`server가 응답하지 않네요! 관리자에게 상황을 공유해주세요! : ${response.message}`);
      }
    }
  };
  return {
    detail,
    textHandler,
    submitCode
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSubmitCode);

/***/ }),

/***/ "./src/hooks/question/useQuestionHook.ts":
/*!***********************************************!*\
  !*** ./src/hooks/question/useQuestionHook.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apis_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apis/question */ "./src/apis/question/index.ts");



// 질문테스트(question) 관련 HOOK들 관리
const useQuestionHook = (answerId, getAlert, problemId) => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [qnA, setQnA] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [feedbacks, setFeedbacks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [passCount, setPassCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  // 사용자 코드 get HOOK
  const getCodes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      const code = await (0,apis_question__WEBPACK_IMPORTED_MODULE_2__.getCode)(answerId); // get API 호출
      if (code !== null && code !== undefined) {
        setCode(code);
      }
    } catch (error) {
      console.log(error);
    }
  }, [answerId]);

  // 질문, 답변 get HOOK
  const getQuestions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      const response = await (0,apis_question__WEBPACK_IMPORTED_MODULE_2__.getQues)(answerId);
      setQnA(response);
      setState(response.answerState || ""); // 기본값으로 빈 문자열 설정
    } catch (error) {
      console.log(error);
    }
  }, [answerId]);

  // 답변 post HOOK
  const postAnswer = async (answerFst, answerSec) => {
    try {
      await (0,apis_question__WEBPACK_IMPORTED_MODULE_2__.postAnswers)(answerId, answerFst, answerSec);
      alert("성공적으로 답변을 등록했습니다.");
      window.location.reload();
    } catch (error) {
      // error가 AxiosError인지 확인
      if (axios__WEBPACK_IMPORTED_MODULE_1___default().isAxiosError(error)) {
        const status = error.response ? error.response.status : null;
        if (status === 400) {
          alert("이미 답변이 등록되어 있습니다.");
        } else if (status === 403) {
          alert("접근할 수 있는 사용자가 아닙니다.");
        } else {
          console.log("알 수 없는 서버 오류가 발생했습니다.", error);
        }
      } else {
        // AxiosError가 아닌 다른 오류 처리
        console.log("예상하지 못한 오류가 발생했습니다.", error);
      }
    }
  };

  // 댓글 get HOOK
  const getFeedback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      const response = await (0,apis_question__WEBPACK_IMPORTED_MODULE_2__.getFeed)(answerId); // get API 호출
      let passCount = 0;
      setFeedbacks(response);
      for (let i = 0; i < response.length; i++) {
        if (response[i].commentPassFail === 1) {
          passCount++;
        }
      }
      setPassCount(passCount);
    } catch (error) {
      console.log(error);
    }
  }, [answerId]);

  // 댓글 post HOOK
  const postFeedback = async (comment, selected) => {
    try {
      const response = await (0,apis_question__WEBPACK_IMPORTED_MODULE_2__.postFeed)(answerId, comment, selected);
      getFeedback();
      getAlert(response.status);
      window.location.reload();
    } catch (error) {
      if (axios__WEBPACK_IMPORTED_MODULE_1___default().isAxiosError(error)) {
        // AxiosError 타입 확인 후 처리
        const status = error.response?.status;
        if (status === 403) {
          // 403에러 예외처리 추가 by.성임
          alert("권한이 없습니다!");
        } else if (status === 400) {
          alert("이미 댓글을 달았어요!");
        } else {
          console.log("알 수 없는 오류가 발생했습니다.", error);
        }
      } else {
        console.log("예상하지 못한 오류가 발생했습니다.", error);
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getCodes();
    getQuestions();
  }, [getCodes, getQuestions]);

  // 피드백 가져오기 HOOK
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state === "comment" || state === "success" || state === "fail") {
      getFeedback();
    }
  }, [state, getFeedback]);
  return {
    code,
    qnA,
    state,
    feedbacks,
    passCount,
    getCodes,
    getQuestions,
    postAnswer,
    postFeedback,
    setCode
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useQuestionHook);

/***/ }),

/***/ "./src/pages/question/questionPage.tsx":
/*!*********************************************!*\
  !*** ./src/pages/question/questionPage.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var hooks_question_useQuestionHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/question/useQuestionHook */ "./src/hooks/question/useQuestionHook.ts");
/* harmony import */ var components_question_RenderAnswerUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/question/RenderAnswerUI */ "./src/components/question/RenderAnswerUI.tsx");
/* harmony import */ var components_question_RenderFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/question/RenderFeed */ "./src/components/question/RenderFeed.tsx");
/* harmony import */ var components_common_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Loading */ "./src/components/common/Loading.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








// RootState 임포트

const QuestionPage = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();

  // questionId 저장 - 사용자 풀이에 사용
  let url = new URL(window.location.href);
  let answerId = Number(url.pathname.split("/")[2]);

  // problemId 가져오기 - 해당 문제 정보에 사용
  const problemId = Number(sessionStorage.getItem("problemId"));

  // 첫번재 답변 관리 - useRef로 필요 시점에만 상태 관리
  const [textFst, setTextFst] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  // 첫번재 답변 작성 핸들러
  const handleTextFstChange = e => {
    setTextFst(e.target.value);
  };

  // 댓글 제출 결과 alert 함수
  const getAlert = responseStatus => {
    if (responseStatus === 400) {
      alert("이미 댓글을 달았습니다.");
    } else if (responseStatus === 403) {
      alert("접근할 수 있는 사용자가 아닙니다.");
    }
  };

  // question 관련 HOOK 호출
  const {
    code,
    qnA,
    state,
    feedbacks,
    passCount,
    postFeedback,
    postAnswer,
    setCode
  } = (0,hooks_question_useQuestionHook__WEBPACK_IMPORTED_MODULE_1__["default"])(answerId, getAlert, problemId);

  // useMemberStatus HOOK 호출 -> 수정: sessionStorage 사용 -> redux사용
  const {
    memberStatus
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.user); // redux에서 가져오기

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (memberStatus === '' || memberStatus === null) {
      alert("풀이 열람 권한이 없습니다!");
      navigate(-1);
    }
  }, [memberStatus, qnA, navigate]);
  if (qnA === null) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {});
  }
  return (
    /*#__PURE__*/
    // 성공 or 실패에 따른 배경색
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: state === "success" ? "successPage" : state === "fail" ? "failPage" : "nonePage",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        children: qnA ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_question_RenderAnswerUI__WEBPACK_IMPORTED_MODULE_2__["default"], {
            navigate: navigate,
            code: code,
            qnA: qnA,
            state: state,
            setCode: setCode,
            textFst: textFst,
            handleTextFstChange: handleTextFstChange,
            postAnswer: postAnswer
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_question_RenderFeed__WEBPACK_IMPORTED_MODULE_3__["default"], {
            navigate: navigate,
            memberStatus: memberStatus,
            feedbacks: feedbacks,
            passCount: passCount,
            state: state,
            postFeedback: postFeedback,
            textFst: textFst,
            handleTextFstChange: handleTextFstChange
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })
    })
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionPage);

/***/ }),

/***/ "./src/styles/styledComponent/Problem-styled.tsx":
/*!*******************************************************!*\
  !*** ./src/styles/styledComponent/Problem-styled.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyledProblem: () => (/* binding */ StyledProblem)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledProblem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    .problem_header {
        width: 80%;
        height: 78px;
        display: flex;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 16px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        justify-content: space-between;
    }
    .button_group{
        width: 80%;
        margin: 0 auto 32px;
        justify-content: right;
    }
    .problem_group {
        display: flex;
        align-items: center;
    }
    .problem_id {
        width: 80px;
        height: fit-content;
        font-size: 19px;

        padding: 8px 0;
        font-weight: bold;
        // background-color: #ffffff;
        background-color:#3B3B3B;
        color : #ffffff;
        border:solid 3px #3B3B3B; opacity:80%;
        border-radius : 50px;
        text-align: center;
        margin-right: 20px;
        box-shadow: 1px 3px #CCC9C9;
    }
    .header_title {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin-right: 8px;
    }
    .header_score {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin-left: 20px;
    }
    .header_answer_state {
        width: fit-content;
        padding: 8px 16px;
        // color: ${props => props.state === "success" ? "#5094F9" : props.state === "fail" ? "rgba(235, 52, 52, 0.8)" : "#6A6B6F"};
        // background-color: #ffffff;

        /* border: solid 3px ${props => props.state === "success" ? "#5094F9" : props.state === "fail" ? "rgba(235, 52, 52, 0.8)" : "#DEDEDE"};
        background-color: ${props => props.state === "success" ? "#0025cae0; opacity:70%;" : props.state === "fail" ? "rgb(255, 53, 53, 0.9)" : "#3B3B3B; opacity:70%"}; */
        
        color: ${props => props.state === "success" ? "#0025cae0; opacity:70%;" : props.state === "fail" ? "rgb(255, 53, 53, 0.9)" : "#3B3B3B; opacity:70%"};
        border: solid 3px ${props => props.state === "success" ? "#0025cae0; opacity:70%;" : props.state === "fail" ? "rgb(246, 73, 73, 0.9)" : "#3B3B3B; opacity:70%"};

        font-size: 19px;
        font-weight: bold;
        margin-right: 10px;
        border-radius : 50px;
        box-sizing: border-box;
        box-shadow: 1px 2px #CCC9C9;
    }
    .description {
        width: 1376px;
        font-size: 20px;
        align-items: center;
        margin: auto;
        background-color: beige;
        text-align: left;
    }

    .problem_section{
        width:80%;
        height:100vh;
        margin: 60px auto 0;
        display: flex;
        justify-content: space-between;
        margin-bottom:20px;
    }

    &.problem_header_section {
        z-index: 998;
        position: relative;
    }

    .code_section{
        flex: 5;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: auto 0;
        height:100%;
    }

    .content_container {
        width: 40%;
        height: auto;
        justify-content: center;
        flex: 4;

        display: flex;
        flex-direction: column;
        margin-right: 60px;
        // background-color: #ffffff;
        // border-radius : 20px;
        // box-shadow: 1px 3px #CCC9C9;
        //   overflow-y: auto;

    }
    .content_container > .top,
    .content_container > .bottom{
        background-color: #ffffff;
        border-radius : 20px;
        box-shadow: 1px 3px #CCC9C9;
        overflow-y: auto;
        padding:12px;
        width: 100%;

        min-height: 240px;
    }

    // 스크롤바 디자인
    ::-webkit-scrollbar {
    width: 10px;  
    }
    ::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    }
    ::-webkit-scrollbar-track {
    background: #e7e6f696;  /*스크롤바 뒷 배경 색상*/
    }

    .content_container > .top{

        text-align: left;
        margin: 0 auto 4px;
        border-bottom: solid 1px;
        height: 45%;
    }
    .content_container > .bottom{
        height: 55%;

    }
    .content_container > .bottom > .sample_inputs {
        width: 90%;
        display:flex;
        flex-direction:column;
        align-items: start;

        text-align: left;
        margin: auto;
    }
    .underline
    {
        font-size:18px;
        text-decoration:underline;
        text-underline-offset : 6px;
        text-decoration-color: #5094F9; opacity:70%;

        color:#000000;
     
        font-size: 19px;
        // font-weight: bold;
        margin-bottom: 12px;
    }
    .top > .prob_text{
        font-weight:bold;
    }
    .sample_inputs > .input_text{
        font-weight:bold;
    }
    .sample_outputs > .output_text{
        font-weight:bold;
    }

    // input요소들 중 순서에 따라 색깔 부여
    .input_text > *:nth-child(1),
    .output_text > *:nth-child(1){
        color: rgb(124, 124, 124);
    }
    .input_text > *:nth-child(2n),
    .output_text > *:nth-child(2n){
        color: #a1a1ff;
    }
    .input_text > *:nth-child(3n),
    .output_text > *:nth-child(3n){
        color: #d783ff;
    }

    .content_container > .bottom > .sample_outputs {
        width: 90%;
        text-align: left;
        margin: auto;
    }
    .sample_outputs > .underline{
        margin-top:40px;
    }


    .code_input {
        width: 100%;
        height: 100%;
        min-height: 564px;
        font-size: 18px;
        // color: #ffffff;
        display: flex;
        justify-content: center;
        background-color: #3e3e3e;
        overflow-y: auto;

        border-radius : 20px;
        padding: 16px 8px 0 12px;
        box-shadow: 1px 3px #CCC9C9;
        box-sizing: border-box;
    }
    .submit_button {
        width: fit-content;
        height: fit-content;
        background-color: #9747FF;
        color: white;
        font-size: 20px;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: center;
        margin: 80px auto 40px;
        padding: 4px 36px;
        align-items: center;
        cursor: pointer;
        box-shadow: 1px 3px #CCC9C9;
    }
    .submit_button.disabled {
        background-color: #dedede;
        cursor: not-allowed;
    }

    .code_container {
        width: 1376px;
        height: auto;
        display: flex;
        align-items: center;
        margin: auto;
        border-radius: 5px;
        background-color: beige;
        font-size: 20px;
        white-space: pre-line; 
    }
   
    .title {
        width: fit-content;
        display: flex;
        font-size: 24px;
        font-weight: bold;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .result_container {
        width: 1376px;
    height: auto;
    background-color: #eee;
    margin: 0 auto;
    margin-bottom: 20px;
    font-size: 20px;
    white-space: pre-line; 
    text-align: left;
    }
    .loading {
        height: 1500px
    }
    .detail_container {
        width: 100%;
        height: auto;
        justify-content: center;
        text-align: left;
        margin-top: 40px;
    }
    .detail_content {
        min-height: 150px;
        text-align: left;
        padding: 16px 8px 0 12px;
        box-shadow: 1px 3px #CCC9C9;
        box-sizing: border-box;
        background-color: rgba(109, 99, 228, 0.3);
        font-size: 20px;
        border-radius: 15px;
    }
`;

/***/ }),

/***/ "./src/styles/styledComponent/Question-styled.tsx":
/*!********************************************************!*\
  !*** ./src/styles/styledComponent/Question-styled.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyledQuestion: () => (/* binding */ StyledQuestion)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledQuestion = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  .code_question_container {
    width: 95%;
    display: flex;
    justify-content: center;
    gap: 5%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .code_container {
    width: 40%;
    height: 564px;
    font-size: 20px;
  }
  .question_container {
    width: 40%;
  }
  .question_layout {
    width: 100%;
  }
  .question_header {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    margin: 20px auto 0;
  }
  .question_id {
    width: 80px;
    padding: 8px 0;
    height: fit-contents;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #325cc7;
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
    border-radius: 50px;
    background-color: #ffffff;
    box-shadow: 1px 3px #ccc9c9;
  }
  .header_title {
    font-size: 20px;
    font-weight: bold;
    flex: 1;
    text-align: left;
  }
  .answer_input {
    width: 100%;
    height: 181px;
    font-size: 20px;
    display: flex;
    background-color: #ffffff;
    border: solid #ffffff;
    border-radius: 20px;
    box-shadow: 1px 3px #ccc9c9;
    overflow-wrap: break-word;
    padding: 4px 12px;
  }
  .answer_input.display {
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
    /* 내용 초과시 스크롤바 */
    overflow-y: auto;
  }

  /* 스크롤바 */
  .answer_input.display::-webkit-scrollbar {
    width: 10px;
  }
  .answer_input.display::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .answer_input.display::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  /* 스크롤바 */
  .answer_input::-webkit-scrollbar {
    width: 10px;
  }
  .answer_input::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .answer_input::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  .button_group {
    display: flex;
  }
  .button {
    width: fit-content;
    height: fit-content;
    padding: 8px 32px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 3px #ccc9c9;
  }
  .button.answer {
    background-color: #ac6dfd;
    margin: 60px auto;
    &:hover {
      background-color: #9747ff;
    }
  }
  .btn_container {
    display: flex;
    justify-content: center;

    width: 80%;
    margin: 28px auto;
  }

  .button_problem {
    width: fit-content;
    height: fit-content;
    position: relative;
    padding: 8px 20px;
    color: white;
    font-weight: bold;
    border-radius: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 3px #ccc9c9;

    background-color: #3b3b3b;
    font-size: 16px;
  }
  .button_problem:hover {
    background-color: #3b3b3b;
    opacity: 80%;
  }
  .button_solution {
    width: fit-content;
    height: fit-content;
    padding: 8px 20px;
    color: white;
    font-weight: bold;
    border-radius: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 3px #ccc9c9;

    background-color: rgba(109, 99, 228, 0.6);
    margin-left: 20px;
    font-size: 16px;
  }
  .button_solution:hover {
    background-color: rgba(109, 99, 228, 0.8);
  }
  /* feedback (comment) */
  .feedback_section {
    width: 80%;
    justify-content: space-between;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
  }
  .feedback_waiting_bar {
    width: 60%;
    margin: 100px auto;
    padding: 12px 0;
    background-color: rgba(109, 99, 228, 0.6);
    color: #ffffff;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 1px 3px #ccc9c9;

    cursor: pointer;
  }
  .feedback_container {
    margin-top: 88px;
    width: 45%;
  }
  .feedback_result_pass,
  .feedback_result_fail {
    width: 100px;
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .feedback_result_pass {
    color: #04ca00;
  }
  .feedback_result_fail {
    color: rgba(244, 117, 117, 0.9);
  }
  .feedback_index {
    width: fit-content;
    height: fit-content;
    padding: 8px 24px;
    border-radius: 50px;
    text-align: center;
    // background-color: #9747FF; opacity:60%;
    background-color: #3b3b3b;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
  }
  .feedback_writer {
    margin-left: 20px;
    font-size: 20px;
    color: #3e3e3e;
    font-weight: bold;
  }
  .feedback_content {
    width: 100%;
    font-size: 20px;
    background-color: #ffffff;
    border: solid #ffffff;
    border-radius: 20px;
    box-shadow: 1px 3px #ccc9c9;
    overflow-wrap: break-word;
    margin-top: 10px;
    color: #3e3e3e;
  }
  .feed_section {
    width: 40%;
  }
  .feedback_content.input {
    height: 270px;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
  }
  .feedback_content.display {
    height: 250px;
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
    /* 내용 초과시 스크롤바 */
    overflow-y: auto;
  }

  .feedback_content.display::-webkit-scrollbar {
    width: 10px;
  }
  .feedback_content.display::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .feedback_content.display::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  // 수정하기
  .feedback_content::-webkit-scrollbar {
    width: 10px;
  }
  .feedback_content::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .feedback_content::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  .feedback_select_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button_container {
    width: fit-content;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 40px 0 40px;
  }
  .select_button {
    font-size: 36px;
    font-weight: bold;
    cursor: pointer;
  }
  .select_button.pass {
    color: ${props => props.isSelected ? "rgba(4, 202, 0, 1)" : "rgba(4, 202, 0, 0.6)"};
    &:hover {
      color: rgba(4, 202, 0, 1);
    }
    margin-right: 20px;
  }
  .select_button.fail {
    color: ${props => props.isSelected ? "rgba(244, 117, 117, 1)" : "rgba(244, 117, 117, 0.6)"};
    &:hover {
      color: rgba(244, 117, 117, 1);
    }
  }
  .select_comment {
    font-size: 20px;
    color: #6f6f6f;
  }
  .feedback_button {
    width: 100%;
    height: fit-content;
    padding: 10px 0;
    border: solid 1px rgba(109, 99, 228, 0.6);
    border-radius: 60px;
    background-color: rgba(109, 99, 228, 0.6);
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
  }
  .feedback_button:hover {
    background-color: rgba(109, 99, 228, 1);
  }

  .result_container > p {
    color: #665f5f;
    opacity: 60%;
  }
  .result.success {
    width: 70%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 120px auto 10px;
    padding: 12px 0;

    // background-color: #04ca00; opacity:57%;
    background-color: #0025cae0;
    opacity: 57%;
    color: #ffffff;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 1px 3px #ccc9c9;
    cursor: pointer;
    &:hover {
      background-color: #0025cae0;
      opacity: 70%;
    }
  }
  .result.fail {
    width: 70%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 120px auto 10px;
    padding: 12px 0;

    background-color: rgba(244, 117, 117, 0.8);
    color: #ffffff;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 1px 3px #ccc9c9;

    cursor: pointer;
  }
  .result.fail:hover {
    background-color: rgba(244, 117, 117, 1);
  }
  .loading {
    height: 1500px;
  }

  .dropdown_content {
    background-color: #fefdfd;
    border: 2px solid #c8c8c8;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin-right: 0;
    padding: 40px 20px;
    position: absolute;
    top: 40px;
    right: -10px;

    width: 520px;
    min-width: 200px;
    z-index: 999;
    color: black;

    // 글자 튀어나옴 방지_ by성임
    word-break: break-all;
  }

  .dropdown_content > .content {
    text-align: left;
  }

  .sample_inputs {
    text-align: left;
  }
  .sample_outputs {
    text-align: left;
  }
`;

/***/ })

}]);
//# sourceMappingURL=src_pages_question_questionPage_tsx.cf9c5c9e25dc4913f577.js.map