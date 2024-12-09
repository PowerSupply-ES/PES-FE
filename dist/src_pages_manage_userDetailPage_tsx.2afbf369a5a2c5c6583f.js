"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_manage_userDetailPage_tsx"],{

/***/ "./src/apis/manage/deleteMem.ts":
/*!**************************************!*\
  !*** ./src/apis/manage/deleteMem.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 회원 delete API
const deleteMem = async navigate => {
  let url = new URL(window.location.href);
  let memberId = url.pathname.split("/")[2];
  const uri = `/api/admin/member/${memberId}`;
  const confirmDelete = window.confirm("정말 해당 회원을 삭제하시겠습니까?");

  // 삭제 취소 시
  if (!confirmDelete) {
    return;
  }
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](uri);

    // 성공 시
    if (res.status === 200) {
      alert("회원이 성공적으로 삭제되었습니다.");
      navigate("/manageUser"); // 삭제 후 목록 페이지로 이동
    }
  } catch (error) {
    // axios에러 && response있는 경우
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error) && error.response) {
      const statusCode = error.response.status;

      // 403: 권한 없음 (관리자가 아님)
      if (statusCode === 403) {
        alert("권한이 없습니다. 관리자 계정으로 로그인 해주세요.");
      }
      // 404: 해당 memberId가 없음
      else if (statusCode === 404) {
        alert("해당 회원을 찾을 수 없습니다. memberId를 확인해 주세요.");
      }
      // 그 외 서버 오류
      else {
        alert("회원 삭제에 실패했습니다. 다시 시도해 주세요.");
      }
    } else {
      // 서버 응답이 없거나 다른 문제가 발생한 경우
      console.error(error);
      alert("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteMem);

/***/ }),

/***/ "./src/apis/manage/fetchMem.ts":
/*!*************************************!*\
  !*** ./src/apis/manage/fetchMem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 회원 등업 update API
const fetchMem = async (navigate, memberStatus) => {
  let url = new URL(window.location.href);
  let memberId = url.pathname.split("/")[2];
  const uri = `/api/admin/member/${memberId}`;

  // 관리자 vs 재학생 vs 관리자 중 선택하기
  const levelUpLevel = memberStatus === "신입생" ? "재학생" : memberStatus === "재학생" ? "관리자" : memberStatus === "관리자" ? "재학생" : "";
  const confirmDelete = window.confirm(`해당 회원을 ${levelUpLevel} 등급으로 변경하시겠습니까?`);

  // 수정 취소 시
  if (!confirmDelete) {
    return;
  }
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(uri, {
      memberStatus: `${levelUpLevel}`
    });

    // 성공 시
    if (res.status === 200) {
      alert("회원등급이 성공적으로 변경되었습니다.");
      navigate("/manageUser");
    } else {
      alert("회원등급 변경에 실패했습니다. 다시 시도해 주세요1.");
    }
  } catch (error) {
    // axios에러 && response있는 경우
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error) && error.response) {
      const statusCode = error.response.status;

      // 403: 권한 없음 (관리자가 아님)
      if (statusCode === 403) {
        alert("권한이 없습니다. 관리자 계정으로 로그인 해주세요.");
      }
      // 404: 해당 memberId가 없음
      else if (statusCode === 404) {
        alert("해당 회원을 찾을 수 없습니다. memberId를 확인해 주세요.");
      }
      // 그 외 서버 오류
      else {
        alert("서버오류가 발생했습니다.");
      }
    } else {
      // 서버 응답이 없거나 다른 문제가 발생한 경우
      console.error(error);
      alert("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMem);

/***/ }),

/***/ "./src/apis/manage/getUserDetail.ts":
/*!******************************************!*\
  !*** ./src/apis/manage/getUserDetail.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 회원 상세 정보 get API
const getUserDetail = async setMemberData => {
  let url = new URL(window.location.href);
  let memberId = url.pathname.split("/")[2];
  const uri = `/api/admin/member/${memberId}`;
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(uri);
    const memDetail = res.data;

    // `mySolveResponse`와 `myFeedbackResponse`가 없을 경우 기본값 설정
    const userDetail = {
      ...memDetail,
      mySolveResponse: memDetail.mySolveResponse || [],
      // 기본값으로 빈 배열
      myFeedbackResponse: memDetail.myFeedbackResponse || [] // 기본값으로 빈 배열
    };
    setMemberData(userDetail);
  } catch (error) {
    console.error(error);
  }
  // TODO : 예외처리하기
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserDetail);

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
/* harmony import */ var styles_css_manageUser_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/css/manageUser.css */ "./src/styles/css/manageUser.css");
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

/***/ "./src/hooks/manage/useUserDetail.ts":
/*!*******************************************!*\
  !*** ./src/hooks/manage/useUserDetail.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_manage_getUserDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/manage/getUserDetail */ "./src/apis/manage/getUserDetail.ts");


const useUserDetail = () => {
  const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,apis_manage_getUserDetail__WEBPACK_IMPORTED_MODULE_1__["default"])(setUserData);
  }, []);

  // TODO : 회원수정, 회원삭제 로직 추가하기

  return {
    userData
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserDetail);

/***/ }),

/***/ "./src/pages/manage/userDetailPage.tsx":
/*!*********************************************!*\
  !*** ./src/pages/manage/userDetailPage.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_css_manageUser_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/css/manageUser.css */ "./src/styles/css/manageUser.css");
/* harmony import */ var hooks_manage_useUserDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/manage/useUserDetail */ "./src/hooks/manage/useUserDetail.ts");
/* harmony import */ var components_mypage_MemberInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/mypage/MemberInfo */ "./src/components/mypage/MemberInfo.tsx");
/* harmony import */ var components_mypage_MemberProb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/mypage/MemberProb */ "./src/components/mypage/MemberProb.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var components_mypage_MemberFeed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/mypage/MemberFeed */ "./src/components/mypage/MemberFeed.tsx");
/* harmony import */ var apis_manage_deleteMem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apis/manage/deleteMem */ "./src/apis/manage/deleteMem.ts");
/* harmony import */ var apis_manage_fetchMem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apis/manage/fetchMem */ "./src/apis/manage/fetchMem.ts");
/* harmony import */ var components_common_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/common/Loading */ "./src/components/common/Loading.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// 회원상세페이지











const UserDetail = () => {
  const {
    userData
  } = (0,hooks_manage_useUserDetail__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  return (
    /*#__PURE__*/
    // TODO: 템플릿 적용 
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "content_container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "manageuser_container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "userlist_wrapper",
          children: !userData ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "mypage_content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "userinfo_container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(components_mypage_MemberInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
                memberName: userData.memberName,
                memberId: userData.memberId,
                memberEmail: userData.memberEmail,
                memberGen: userData.memberGen,
                memberStatus: userData.memberStatus,
                memberMajor: userData.memberMajor,
                memberPhone: userData.memberPhone
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "manage_btn_container",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
                  className: "levelup_btn",
                  onClick: () => (0,apis_manage_fetchMem__WEBPACK_IMPORTED_MODULE_7__["default"])(navigate, userData.memberStatus),
                  children: "\uB4F1\uAE09\uBCC0\uACBD"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
                  className: "btn_deletemem",
                  onClick: () => (0,apis_manage_deleteMem__WEBPACK_IMPORTED_MODULE_6__["default"])(navigate),
                  children: "\uD68C\uC6D0 \uC0AD\uC81C"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "right",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(components_mypage_MemberProb__WEBPACK_IMPORTED_MODULE_4__["default"], {
                myProb: userData.mySolveResponse,
                navigate: navigate
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(components_mypage_MemberFeed__WEBPACK_IMPORTED_MODULE_5__["default"], {
                myFeedback: userData.myFeedbackResponse,
                navigate: navigate
              })]
            })]
          })
        })
      })
    })
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserDetail);

/***/ }),

/***/ "./src/styles/css/mypage.css":
/*!***********************************!*\
  !*** ./src/styles/css/mypage.css ***!
  \***********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_pages_manage_userDetailPage_tsx.2afbf369a5a2c5c6583f.js.map