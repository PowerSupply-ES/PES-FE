"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_notice_noticePostPage_tsx"],{

/***/ "./src/apis/notice/postNotice.ts":
/*!***************************************!*\
  !*** ./src/apis/notice/postNotice.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 공지사항 post API 호출
const postNotice = async (notice, navigate) => {
  const uri = "api/notice";
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(uri, notice, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status === 201) {
      alert("공지사항이 성공적으로 등록되었습니다!");
      navigate("/notice");
    }
  } catch (error) {
    // axios에서 발생한 오류인 경우
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
      if (error.response) {
        // 서버가 응답을 반환한 경우
        if (error.response.status === 403) {
          alert("권한이 없습니다");
        } else {
          alert(`서버 응답 오류: ${error.response.status} ${error.response.statusText}`);
        }
      } else if (error.request) {
        // 요청이 이루어졌으나 응답이 없는 경우
        alert("서버 응답이 없습니다.");
      } else {
        // 설정 중 오류 발생
        alert(`요청 실패: ${error.message}`);
      }
    } else {
      // axios와 무관한 오류인 경우
      alert(`알 수 없는 오류 발생: ${error.message}`);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postNotice);

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

/***/ "./src/hooks/notice/useNoticePost.ts":
/*!*******************************************!*\
  !*** ./src/hooks/notice/useNoticePost.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var apis_notice_postNotice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/notice/postNotice */ "./src/apis/notice/postNotice.ts");



// TODO : hook들 모두 반환타입 지정하기

// 공지사항 등록 관련 HOOK
const useNoticePost = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const [notice, setNotice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title: "",
    content: "",
    isImportant: false //초기값 false로 설정
  });

  //입력필드 값 변경될때마다 호출
  const handleInputChange = e => {
    // onChange 이벤트가 발생하는 입력 요소에 대한 이벤트 객체
    const {
      name,
      value,
      type
    } = e.target;

    // 입력 요소의 타입이 체크박스이고 checked 속성이 있다면 해당 값에 따라 isImportant 값을 변경
    const newValue = type === "checkbox" ? !notice.isImportant : value;
    setNotice({
      // notice복사, 변경된 필드만 업데이트
      ...notice,
      [name]: newValue
    });
  };

  // 폼이 제출될 때 호출
  const handleSubmit = () => {
    (0,apis_notice_postNotice__WEBPACK_IMPORTED_MODULE_1__["default"])(notice, navigate);
  };
  return {
    notice,
    handleInputChange,
    handleSubmit
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNoticePost);

/***/ }),

/***/ "./src/pages/notice/noticePostPage.tsx":
/*!*********************************************!*\
  !*** ./src/pages/notice/noticePostPage.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_pi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/pi */ "./node_modules/react-icons/pi/index.mjs");
/* harmony import */ var styles_css_notice_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/css/notice.css */ "./src/styles/css/notice.css");
/* harmony import */ var components_common_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/Common */ "./src/components/common/Common.tsx");
/* harmony import */ var hooks_notice_useNoticePost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/notice/useNoticePost */ "./src/hooks/notice/useNoticePost.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const NoticePost = () => {
  const {
    notice,
    handleInputChange,
    handleSubmit
  } = (0,hooks_notice_useNoticePost__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return (
    /*#__PURE__*/
    // 관리자만 접근할 수 있도록 수정하기
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "info_body",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "content_register",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_pi__WEBPACK_IMPORTED_MODULE_5__.PiNotePencilFill, {
            size: 30
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: "\uACF5\uC9C0\uC0AC\uD56D \uB4F1\uB85D"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "btn_back",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            onClick: () => (0,components_common_Common__WEBPACK_IMPORTED_MODULE_2__.goBack)(),
            children: "\uB4A4\uB85C\uAC00\uAE30"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
          className: "check_container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            type: "checkbox",
            id: "important",
            name: "isImportant",
            checked: notice.isImportant,
            onChange: handleInputChange
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
            htmlFor: "important",
            children: "\uC911\uC694"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          className: "title_container",
          onChange: handleInputChange /* 입력 값이 변경될 때 핸들러 추가 */,
          value: notice.title,
          name: "title",
          required: true,
          placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
          className: "input_container",
          onChange: handleInputChange /* 입력 값이 변경될 때 핸들러 추가 */,
          value: notice.content,
          name: "content",
          required: true,
          placeholder: "\uBCF8\uBB38\uC744 \uC785\uB825\uD558\uC138\uC694"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "btn_container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "btn_submit",
            onClick: () => {
              handleSubmit();
            },
            children: "\uB4F1\uB85D\uD558\uAE30"
          })
        })]
      })
    })
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoticePost);

/***/ }),

/***/ "./src/styles/css/notice.css":
/*!***********************************!*\
  !*** ./src/styles/css/notice.css ***!
  \***********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_pages_notice_noticePostPage_tsx.3346ce299e6598c01254.js.map