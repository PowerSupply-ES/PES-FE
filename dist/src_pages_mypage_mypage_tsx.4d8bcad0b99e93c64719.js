"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_mypage_mypage_tsx"],{

/***/ "./src/apis/mypage/getMyFeed.ts":
/*!**************************************!*\
  !*** ./src/apis/mypage/getMyFeed.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 내 feedback GET요청
const getMyFeed = async setMyFeedback => {
  const uri = "api/mypage/myfeedback";
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(uri);
    setMyFeedback(response.data);
  } catch (error) {
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
      //axios error인지 확인
      // 서버가 응답을 반환했지만 상태 코드가 오류를 나타내는 경우
      console.error("Axios 오류 발생:", error.response?.status, error.response?.statusText);
    } else if (error instanceof Error) {
      //js오류인지 확인
      // 요청이 서버로 전송되었지만 응답을 받지 못한 경우
      console.error("일반 오류 발생:", error.message);
    } else {
      console.error("알 수 없는 오류 발생:", error);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMyFeed);

/***/ }),

/***/ "./src/apis/mypage/getMyInfo.ts":
/*!**************************************!*\
  !*** ./src/apis/mypage/getMyInfo.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 내 정보 GET 요청
const getMyInfo = async setMemberData => {
  const uri = "/api/mypage/information";
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(uri);
    setMemberData(response.data);
  } catch (error) {
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
      //axios error인지 확인
      // 서버가 응답을 반환했지만 상태 코드가 오류를 나타내는 경우
      console.error("Axios 오류 발생:", error.response?.status, error.response?.statusText);
    } else if (error instanceof Error) {
      //js오류인지 확인
      // 요청이 서버로 전송되었지만 응답을 받지 못한 경우
      console.error("일반 오류 발생:", error.message);
    } else {
      console.error("알 수 없는 오류 발생:", error);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMyInfo);

/***/ }),

/***/ "./src/apis/mypage/getMyProb.ts":
/*!**************************************!*\
  !*** ./src/apis/mypage/getMyProb.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 내가 푼 문제 GET요청
const getMyProb = async setMyProb => {
  const uri = "api/mypage/mysolve";
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(uri);
    setMyProb(response.data);
  } catch (error) {
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
      //axios error인지 확인
      // 서버가 응답을 반환했지만 상태 코드가 오류를 나타내는 경우
      console.error("Axios 오류 발생:", error.response?.status, error.response?.statusText);
    } else if (error instanceof Error) {
      //js오류인지 확인
      // 요청이 서버로 전송되었지만 응답을 받지 못한 경우
      console.error("일반 오류 발생:", error.message);
    } else {
      console.error("알 수 없는 오류 발생:", error);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMyProb);

/***/ }),

/***/ "./src/apis/mypage/index.ts":
/*!**********************************!*\
  !*** ./src/apis/mypage/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMyFeed: () => (/* reexport safe */ _getMyFeed__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   getMyInfo: () => (/* reexport safe */ _getMyInfo__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   getMyProb: () => (/* reexport safe */ _getMyProb__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _getMyFeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMyFeed */ "./src/apis/mypage/getMyFeed.ts");
/* harmony import */ var _getMyInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMyInfo */ "./src/apis/mypage/getMyInfo.ts");
/* harmony import */ var _getMyProb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMyProb */ "./src/apis/mypage/getMyProb.ts");
// apis/mypage 디렉토리 export 관리




/***/ }),

/***/ "./src/components/mypage/MemberFeed.tsx":
/*!**********************************************!*\
  !*** ./src/components/mypage/MemberFeed.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyFeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyFeed */ "./src/components/mypage/MyFeed.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



// 사용자 작성 피드백 목록 컴포넌트
const MemberFeed = _ref => {
  let {
    myFeedback,
    navigate
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bottom",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "feed_top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mypage_btn",
        children: "my feedback"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "feedNum",
        children: [myFeedback.length, "\uAC1C"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "myFeedback",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MyFeed__WEBPACK_IMPORTED_MODULE_1__["default"], {
        myFeedback: myFeedback,
        navigate: navigate
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberFeed);

/***/ }),

/***/ "./src/components/mypage/MemberInfo.tsx":
/*!**********************************************!*\
  !*** ./src/components/mypage/MemberInfo.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa6 */ "./node_modules/react-icons/fa6/index.mjs");
/* harmony import */ var styles_css_mypage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/css/mypage.css */ "./src/styles/css/mypage.css");
/* harmony import */ var styles_css_manage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/css/manage.css */ "./src/styles/css/manage.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





// 사용자 정보 컴포넌트

const MemberInfo = _ref => {
  let {
    memberName,
    memberId,
    memberEmail,
    memberGen,
    memberStatus,
    memberMajor,
    memberPhone
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "left",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "memberInfo",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "info_name",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__.FaCircleUser, {
          size: 40,
          style: {
            color: "grey"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: memberName
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: "\uD559 \uBC88"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: memberId
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: "\uC774\uBA54\uC77C"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: memberEmail
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: "\uAE30 \uC218"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: memberGen
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: "\uC0C1 \uD0DC"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: memberStatus
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: "\uD559 \uACFC"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: memberMajor
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: "\uC804\uD654 \uBC88\uD638"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: memberPhone
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberInfo);

/***/ }),

/***/ "./src/components/mypage/MemberProb.tsx":
/*!**********************************************!*\
  !*** ./src/components/mypage/MemberProb.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyProb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyProb */ "./src/components/mypage/MyProb.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



// 사용자 푼 문제 목록 컴포넌트
const MemberProb = _ref => {
  let {
    myProb,
    navigate
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "top",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "prob_top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mypage_btn",
        children: "\uB0B4\uAC00 \uD47C \uBB38\uC81C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "probNum",
        children: [myProb.length, "\uAC1C"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "myProblem",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MyProb__WEBPACK_IMPORTED_MODULE_1__["default"], {
        myProb: myProb,
        navigate: navigate
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberProb);

/***/ }),

/***/ "./src/components/mypage/MyFeed.tsx":
/*!******************************************!*\
  !*** ./src/components/mypage/MyFeed.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


// 내 피드백 컴포넌트
const MyFeed = _ref => {
  let {
    myFeedback,
    navigate
  } = _ref;
  const gotoFeed = problemId => {
    navigate(`/question/${problemId}`);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "FeedList",
    children: myFeedback.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "noFeed",
      children: "\uC544\uC9C1 \uB0A8\uAE34 \uD53C\uB4DC\uBC31\uC774 \uC5C6\uC5B4\uC694!"
    }) : myFeedback.map(it => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "feeds",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "problemId",
        children: it.answerId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        className: "memberGenName",
        children: [it.memberGen, "\uAE30\xA0", it.memberName]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "commentContent",
        onClick: () => gotoFeed(it.answerId),
        children: it.commentContent
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: `${it.commentPassFail === 1 ? "btn_success" : it.commentPassFail === 0 ? "btn_fail" : "btn_state"}`,
        children: it.commentPassFail === 1 ? "success" : it.commentPassFail === 0 ? "fail" : it.commentPassFail
      })]
    }, it.answerId))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyFeed);

/***/ }),

/***/ "./src/components/mypage/MyFeedList.tsx":
/*!**********************************************!*\
  !*** ./src/components/mypage/MyFeedList.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _MemberFeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemberFeed */ "./src/components/mypage/MemberFeed.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// MyFeedList 타입 정의

;

// 내 피드백 list
const MyFeedList = _ref => {
  let {
    myFeedback
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MemberFeed__WEBPACK_IMPORTED_MODULE_1__["default"], {
    myFeedback: myFeedback,
    navigate: navigate
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyFeedList);

/***/ }),

/***/ "./src/components/mypage/MyInfo.tsx":
/*!******************************************!*\
  !*** ./src/components/mypage/MyInfo.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MemberInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemberInfo */ "./src/components/mypage/MemberInfo.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



// MyInfo 타입 정의

const MyInfo = _ref => {
  let {
    memberData
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MemberInfo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    memberName: memberData.memberName,
    memberId: memberData.memberId,
    memberEmail: memberData.memberEmail,
    memberGen: memberData.memberGen,
    memberStatus: memberData.memberStatus,
    memberMajor: memberData.memberMajor,
    memberPhone: memberData.memberPhone
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyInfo);

/***/ }),

/***/ "./src/components/mypage/MyProb.tsx":
/*!******************************************!*\
  !*** ./src/components/mypage/MyProb.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


// 내가 푼 문제 컴포넌트
const MyProb = _ref => {
  let {
    myProb,
    navigate
  } = _ref;
  const gotoProb = problemId => {
    navigate(`/question/${problemId}`);
    // question/answerid
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "problemList",
    children: myProb.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "noProblems",
      children: "\uC544\uC9C1 \uD47C \uBB38\uC81C\uAC00 \uC5C6\uC5B4\uC694!"
    }) : myProb.map(it => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "problems",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "problemId",
        children: it.problemId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "problemTitle",
        onClick: () => gotoProb(it.answerId),
        children: it.problemTitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        className: "finalScore",
        children: [it.finalScore, "\uC810"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "dash",
        children: "/"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        className: "problemScore",
        children: [it.problemScore, "\uC810"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: `${it.answerState === "success" ? "btn_success" : it.answerState === "fail" ? "btn_fail" : "btn_state"}`,
        children: it.answerState === "question" ? "질문대기" : it.answerState === "comment" ? "피드백대기" : it.answerState
      })]
    }, it.answerId))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyProb);

/***/ }),

/***/ "./src/components/mypage/MyProbList.tsx":
/*!**********************************************!*\
  !*** ./src/components/mypage/MyProbList.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _MemberProb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemberProb */ "./src/components/mypage/MemberProb.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// MyProbList 타입 정의

;

// 내가 푼 문제 목록
const MyProbList = _ref => {
  let {
    myProb
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MemberProb__WEBPACK_IMPORTED_MODULE_1__["default"], {
    myProb: myProb,
    navigate: navigate
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyProbList);

/***/ }),

/***/ "./src/components/mypage/index.ts":
/*!****************************************!*\
  !*** ./src/components/mypage/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyFeedList: () => (/* reexport safe */ _MyFeedList__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   MyInfo: () => (/* reexport safe */ _MyInfo__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   MyProbList: () => (/* reexport safe */ _MyProbList__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _MyFeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyFeed */ "./src/components/mypage/MyFeed.tsx");
/* harmony import */ var _MyFeedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyFeedList */ "./src/components/mypage/MyFeedList.tsx");
/* harmony import */ var _MyInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyInfo */ "./src/components/mypage/MyInfo.tsx");
/* harmony import */ var _MyProb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyProb */ "./src/components/mypage/MyProb.tsx");
/* harmony import */ var _MyProbList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyProbList */ "./src/components/mypage/MyProbList.tsx");
// components/mypage 디렉토리 export 관리






/***/ }),

/***/ "./src/hooks/mypage/useMypage.ts":
/*!***************************************!*\
  !*** ./src/hooks/mypage/useMypage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var apis_mypage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/mypage */ "./src/apis/mypage/index.ts");



// 마이페이지 api HOOK
const useMypage = status => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();

  // 내정보
  const [memberData, setMemberData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  // 내문제리스트
  const [myProb, setMyProb] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  // 내피드백리스트
  const [myFeedback, setMyFeedback] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  // 관련 API요청 HOOK
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // 비로그인시
    if (status === null || status === undefined) {
      alert("로그인 해주세요");
      navigate("/signin");
      return;
    }

    // 로그인 상태일 때 API 요청
    const fetchData = async () => {
      try {
        (0,apis_mypage__WEBPACK_IMPORTED_MODULE_1__.getMyInfo)(setMemberData); // 내 정보 GET요청
        (0,apis_mypage__WEBPACK_IMPORTED_MODULE_1__.getMyProb)(setMyProb); // 내가 푼 문제 GET요청
        (0,apis_mypage__WEBPACK_IMPORTED_MODULE_1__.getMyFeed)(setMyFeedback); // 내 feedback GET요청
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };
    fetchData();
  }, [navigate]); // navigate가 최신상태인지 확인

  return {
    memberData,
    myProb,
    myFeedback
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMypage);

/***/ }),

/***/ "./src/pages/mypage/mypage.tsx":
/*!*************************************!*\
  !*** ./src/pages/mypage/mypage.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_css_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/css/App.css */ "./src/styles/css/App.css");
/* harmony import */ var styles_css_mypage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/css/mypage.css */ "./src/styles/css/mypage.css");
/* harmony import */ var components_mypage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/mypage */ "./src/components/mypage/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var hooks_mypage_useMypage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/mypage/useMypage */ "./src/hooks/mypage/useMypage.ts");
/* harmony import */ var components_common_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/Loading */ "./src/components/common/Loading.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// 마이페이지








// RootState 임포트

// MyPage 컴포넌트 Props 타입

const MyPage = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  const {
    memberStatus
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.user); // redux에서 가져오기
  const {
    status
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.sign);

  // useMypage HOOK 호출
  const {
    memberData,
    myProb,
    myFeedback
  } = (0,hooks_mypage_useMypage__WEBPACK_IMPORTED_MODULE_4__["default"])(status);
  if (!memberData) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "content_mypage",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "mypage_content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_mypage__WEBPACK_IMPORTED_MODULE_3__.MyInfo, {
          memberData: memberData
        }), memberStatus === "관리자" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          className: "btn_goto_manage",
          onClick: () => navigate('/manageUser'),
          children: "\uAD00\uB9AC\uC790\uBAA8\uB4DC"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_mypage__WEBPACK_IMPORTED_MODULE_3__.MyProbList, {
          myProb: myProb
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_mypage__WEBPACK_IMPORTED_MODULE_3__.MyFeedList, {
          myFeedback: myFeedback
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyPage);

/***/ }),

/***/ "./src/styles/css/App.css":
/*!********************************!*\
  !*** ./src/styles/css/App.css ***!
  \********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/css/mypage.css":
/*!***********************************!*\
  !*** ./src/styles/css/mypage.css ***!
  \***********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_pages_mypage_mypage_tsx.4d8bcad0b99e93c64719.js.map