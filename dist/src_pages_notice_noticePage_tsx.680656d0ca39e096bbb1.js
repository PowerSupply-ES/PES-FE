"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_notice_noticePage_tsx"],{

/***/ "./src/apis/notice/getNoticeList.ts":
/*!******************************************!*\
  !*** ./src/apis/notice/getNoticeList.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 공지사항 리스트 get API 요청
const getNoticeList = async setNoticeList => {
  const uri = "api/notice";
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(uri);
    if (response.status === 204) {
      console.log("공지사항이 아직 없습니다!");
      setNoticeList([]); // 빈 배열로 설정
      return;
    }
    setNoticeList(response.data);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNoticeList);

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

/***/ "./src/components/notice/NoticeList.tsx":
/*!**********************************************!*\
  !*** ./src/components/notice/NoticeList.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/Common */ "./src/components/common/Common.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



// 공지사항 컴포넌트
const NoticeList = _ref => {
  let {
    noticeList,
    navigate
  } = _ref;
  // 해당 공지사항으로 이동 함수
  const gotoNotice = noticeId => {
    console.log("noticeId: ", noticeId);
    navigate(`/notice/${noticeId}`);
  };

  // TODO : 함수 말고 API로 대체하기
  const isNewNotice = createdTime => {
    const currentTime = new Date(); //현재시간
    const noticeTime = new Date(createdTime); //공지사항 생성시간
    const difference = currentTime.getTime() - noticeTime.getTime(); //시간 차

    // 생성시간이 하루 이내인지 확인
    const oneDay = 24 * 60 * 60 * 1000; //하루의 밀리초
    return Math.floor(difference / oneDay) <= 1;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "info_list",
    children: noticeList.map((it, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "info",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "title_0",
        children: it.isImportant ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "imp",
          children: "\uC911\uC694"
        }) : isNewNotice(it.createdTime) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "new",
          children: "new"
        }) : ""
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "title_1",
        children: it.noticeId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "title_2",
        onClick: () => gotoNotice(it.noticeId),
        children: it.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "title_3",
        children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_1__.transferTime)(it.createdTime)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "title_4",
        children: it.noticeHit
      })]
    }, it.noticeId))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoticeList);

/***/ }),

/***/ "./src/pages/notice/noticePage.tsx":
/*!*****************************************!*\
  !*** ./src/pages/notice/noticePage.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var styles_css_notice_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/css/notice.css */ "./src/styles/css/notice.css");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.mjs");
/* harmony import */ var react_icons_pi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/pi */ "./node_modules/react-icons/pi/index.mjs");
/* harmony import */ var apis_notice_getNoticeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apis/notice/getNoticeList */ "./src/apis/notice/getNoticeList.ts");
/* harmony import */ var components_notice_NoticeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notice/NoticeList */ "./src/components/notice/NoticeList.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









// RootState 임포트

const NoticePage = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const {
    memberStatus
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.user); // redux에서 가져오기

  // 공지사항 리스트
  const [noticeList, setNoticeList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,apis_notice_getNoticeList__WEBPACK_IMPORTED_MODULE_2__["default"])(setNoticeList); // 리스트 가져오기
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "info_body",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "content_info",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiSpeakerphone, {
          size: 30
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: "\uACF5\uC9C0\uC0AC\uD56D"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: memberStatus === "관리자" ? "add_info" : "no_button"
        // TODO : 등록하기 uri수정하기
        ,
        onClick: () => navigate("/postNotice"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_pi__WEBPACK_IMPORTED_MODULE_8__.PiNotePencilFill, {
          size: 25
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: "\uB4F1\uB85D\uD558\uAE30"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "info_title",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "title_0",
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "title_1",
          children: "\uBC88\uD638"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "title_2",
          children: "\uC81C\uBAA9"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "title_3",
          children: "\uC791\uC131 \uB0A0\uC9DC"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "title_4",
          children: "\uC870\uD68C \uC218"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_notice_NoticeList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        noticeList: noticeList,
        navigate: navigate
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoticePage);

/***/ }),

/***/ "./src/styles/css/notice.css":
/*!***********************************!*\
  !*** ./src/styles/css/notice.css ***!
  \***********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_pages_notice_noticePage_tsx.680656d0ca39e096bbb1.js.map