"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_problem_problemPage_tsx"],{

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

/***/ "./src/pages/problem/problemPage.tsx":
/*!*******************************************!*\
  !*** ./src/pages/problem/problemPage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_styledComponent_Problem_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/styledComponent/Problem-styled */ "./src/styles/styledComponent/Problem-styled.tsx");
/* harmony import */ var hooks_problem_useProbPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/problem/useProbPage */ "./src/hooks/problem/useProbPage.ts");
/* harmony import */ var components_common_Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/Common */ "./src/components/common/Common.tsx");
/* harmony import */ var components_common_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Loading */ "./src/components/common/Loading.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const CodeEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("src_components_problem_CodeEditor_tsx"), __webpack_require__.e("src_libs_ace_js")]).then(__webpack_require__.bind(__webpack_require__, /*! components/problem/CodeEditor */ "./src/components/problem/CodeEditor.tsx")));
const ProblemPage = () => {
  let url = new URL(window.location.href);
  let problemId = Number(url.pathname.split("/")[2]); // 문자열을 숫자로 변환

  // 관련 HOOK 호출
  const {
    title,
    problem,
    detail,
    isLogin,
    textHandler,
    submitCode
  } = (0,hooks_problem_useProbPage__WEBPACK_IMPORTED_MODULE_2__["default"])(problemId);

  // 문제 UI 렌더링 함수
  const renderProbUI = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(styles_styledComponent_Problem_styled__WEBPACK_IMPORTED_MODULE_1__.StyledProblem, {
      state: "null",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "problem_header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "problem_group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "problem_id",
            children: ["\uBB38\uC81C", problemId]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "header_title",
            children: title?.problemTitle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "header_answer_state",
            children: "\uBBF8\uC644\uB8CC"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "problem_section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "content_container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "top",
            style: {
              whiteSpace: "pre"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "underline",
              children: "\uBB38\uC81C"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "prob_text",
              children: problem?.problemContent && (0,components_common_Common__WEBPACK_IMPORTED_MODULE_3__.renderNewlines)(problem.problemContent)
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "bottom",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "sample_inputs",
              style: {
                whiteSpace: "pre"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "underline",
                children: "Sample Inputs"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "input_text",
                children: problem?.sampleInputs && problem.sampleInputs.map((input, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
                  children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_3__.renderStyledNewlines)(input)
                }, index))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "sample_outputs",
              style: {
                whiteSpace: "pre"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "underline",
                children: "Sample Outputs"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "output_text",
                children: problem?.sampleOutputs && problem.sampleOutputs.map((output, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
                  children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_3__.renderStyledNewlines)(output)
                }, index))
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "code_section",
          children: isLogin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CodeEditor, {
                code: "" // 현재 코드 상태
                ,
                onChange: textHandler // 코드 변경 핸들러
                ,
                readOnly: false // 읽기 전용 여부
              })
            }), detail !== null && detail !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "detail_container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                children: "\uD2C0\uB9B0 \uC774\uC720"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "detail_content",
                children: detail
              })]
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
            disabled: true,
            className: "code_input",
            placeholder: "\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD574\uC8FC\uC138\uC694."
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        className: isLogin ? "submit_button" : "submit_button disabled",
        onClick: () =>
        //기존코드
        //isLogin && submitCode()

        //수정코드 by성임
        {
          if (isLogin) {
            if (window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?")) {
              submitCode();
            }
          }
        },
        children: "\uC81C\uCD9C"
      })]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    children: title && problem ? renderProbUI() : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {})
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProblemPage);

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

/***/ })

}]);
//# sourceMappingURL=src_pages_problem_problemPage_tsx.11d93a318848f57521d7.js.map