"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_notice_noticeDetailPage_tsx"],{

/***/ "./src/apis/notice/delNotice.ts":
/*!**************************************!*\
  !*** ./src/apis/notice/delNotice.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 공지사항 삭제 API 요청
const delNotice = async (uri, noticeId, navigate) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`${uri}${noticeId}`);
    if (response.status === 200) {
      alert("공지사항이 성공적으로 삭제되었습니다!");
      navigate("/notice");
    }
  } catch (error) {
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
      // axios 에러인 경우
      if (error.response) {
        // 서버 응답이 있는 경우
        if (error.response.status === 403) {
          alert("권한이 없습니다");
        } else {
          alert(`삭제 실패: ${error.response.status} ${error.response.statusText}`);
        }
      } else if (error.request) {
        // 요청이 이루어졌으나 응답이 없는 경우
        alert("삭제 실패: 요청이 실패했습니다.");
      } else {
        // 설정 중 오류 발생
        alert(`삭제 실패: ${error.message}`);
      }
    } else {
      // Axios 에러가 아닌 경우
      alert(`삭제 실패: ${String(error)}`);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delNotice);

/***/ }),

/***/ "./src/apis/notice/fetchNotice.ts":
/*!****************************************!*\
  !*** ./src/apis/notice/fetchNotice.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 공지사항 수정 API 요청
const fetchNotice = async (uri, noticeId, noticeDetail, navigate) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().patch(`${uri}${noticeId}`, noticeDetail, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status === 200) {
      alert("공지사항이 성공적으로 수정되었습니다!");
      navigate("/notice");
    }
  } catch (error) {
    // axios 에러인 경우
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
      if (error.response) {
        // 서버 응답이 있는 경우
        if (error.response.status === 403) {
          alert("권한이 없습니다");
        } else if (error.response.status === 404) {
          alert("해당 공지사항이 존재하지 않습니다");
        } else {
          alert(`수정 실패: ${error.response.status} ${error.response.statusText}`);
        }
      } else if (error.request) {
        // 요청이 이루어졌으나 응답이 없는 경우
        alert("수정 실패: 요청이 실패했습니다.");
      } else {
        // 설정 중 오류 발생
        alert(`수정 실패: ${error.message}`);
      }
    } else {
      // Axios 에러가 아닌 경우
      alert(`수정 실패: ${String(error)}`);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchNotice);

/***/ }),

/***/ "./src/apis/notice/getNoticeDetail.ts":
/*!********************************************!*\
  !*** ./src/apis/notice/getNoticeDetail.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 공지사항 세부사항 get API
const getNoticeDetail = async (setDetail, noticeId, uri) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${uri}${noticeId}`);
    setDetail(response.data);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNoticeDetail);

/***/ }),

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

/***/ "./src/apis/notice/index.ts":
/*!**********************************!*\
  !*** ./src/apis/notice/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delNotice: () => (/* reexport safe */ _delNotice__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   fetchNotice: () => (/* reexport safe */ _fetchNotice__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _delNotice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delNotice */ "./src/apis/notice/delNotice.ts");
/* harmony import */ var _fetchNotice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchNotice */ "./src/apis/notice/fetchNotice.ts");
/* harmony import */ var _getNoticeDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNoticeDetail */ "./src/apis/notice/getNoticeDetail.ts");
/* harmony import */ var _getNoticeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNoticeList */ "./src/apis/notice/getNoticeList.ts");
/* harmony import */ var _postNotice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postNotice */ "./src/apis/notice/postNotice.ts");
// apis/notice 디렉토리 export 관리






/***/ }),

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

/***/ "./src/hooks/notice/useNoticeDetail.ts":
/*!*********************************************!*\
  !*** ./src/hooks/notice/useNoticeDetail.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_notice_getNoticeDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/notice/getNoticeDetail */ "./src/apis/notice/getNoticeDetail.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");



// user 세부정보 호출 HOOK
const useNoticeDetail = () => {
  const {
    memberStatus
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user); // redux에서 가져오기
  const [noticeDetail, setDetail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); //공지사항 세부정보
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //수정상태

  let url = new URL(window.location.href);
  let noticeId = parseInt(url.pathname.split("/")[2]); // number 타입으로 넘기기위해 int로 변환

  const uri = "/api/notice/";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,apis_notice_getNoticeDetail__WEBPACK_IMPORTED_MODULE_1__["default"])(setDetail, noticeId, uri); // 공지사항 detail API요청
  }, [noticeId]);

  // 공지사항 수정 상태 관리
  const toggleEditing = () => {
    setIsEditing(prevState => !prevState);
  };
  return {
    memberStatus,
    noticeDetail,
    isEditing,
    toggleEditing,
    setDetail,
    uri,
    noticeId
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNoticeDetail);

/***/ }),

/***/ "./src/pages/notice/noticeDetailPage.tsx":
/*!***********************************************!*\
  !*** ./src/pages/notice/noticeDetailPage.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.mjs");
/* harmony import */ var styles_css_notice_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/css/notice.css */ "./src/styles/css/notice.css");
/* harmony import */ var components_common_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/Common */ "./src/components/common/Common.tsx");
/* harmony import */ var apis_notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apis/notice */ "./src/apis/notice/index.ts");
/* harmony import */ var hooks_notice_useNoticeDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/notice/useNoticeDetail */ "./src/hooks/notice/useNoticeDetail.ts");
/* harmony import */ var components_common_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/Loading */ "./src/components/common/Loading.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const NoticeDetail = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  const {
    memberStatus,
    noticeDetail,
    isEditing,
    toggleEditing,
    setDetail,
    uri,
    noticeId
  } = (0,hooks_notice_useNoticeDetail__WEBPACK_IMPORTED_MODULE_4__["default"])();

  // noticeDetail이 null인 경우
  if (!noticeDetail) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "info_body",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "content_Detail",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiSpeakerphone, {
          size: 30
        }), isEditing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
          className: "textarea_header",
          value: noticeDetail.title,
          onChange: e => setDetail(prevState => {
            if (prevState) {
              return {
                ...prevState,
                title: e.target.value
              };
            }
            return prevState; // prevState가 null인 경우 예외 처리
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          children: noticeDetail.title
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "noticeInfo-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
          className: "noticeInfo",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "leftInfo",
              children: "\uC791\uC131\uC790"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              children: [noticeDetail.writerGen, "\uAE30 ", noticeDetail.writer]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "leftInfo",
              children: "\uC0DD\uC131\uC2DC\uAC04"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_2__.transferTime)(noticeDetail.createdTime)
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "leftInfo",
              children: "\uC218\uC815\uC2DC\uAC04"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_2__.transferTime)(noticeDetail.updatedTime)
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "leftInfo",
              children: "\uC870\uD68C\uC218"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              children: [noticeDetail.noticeHit, "\uD68C"]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "btn_back",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          onClick: () => (0,components_common_Common__WEBPACK_IMPORTED_MODULE_2__.goBack)(),
          children: "\uB4A4\uB85C\uAC00\uAE30"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "text_container",
        children: isEditing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
          className: "textarea_content",
          value: noticeDetail.content,
          onChange: e => setDetail(prevState => {
            if (prevState) {
              return {
                ...prevState,
                content: e.target.value
              };
            }
            return prevState; // prevState가 null인 경우 예외처리
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "text",
          children: (0,components_common_Common__WEBPACK_IMPORTED_MODULE_2__.renderNewlines)(noticeDetail.content)
        }) // TODO : 내용초과시 break, scroll기능넣기
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: memberStatus === "관리자" ? "btn_container" : "no_button",
        children: [isEditing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          className: "btn_modify",
          onClick: () => (0,apis_notice__WEBPACK_IMPORTED_MODULE_3__.fetchNotice)(uri, noticeId, noticeDetail, navigate),
          children: "\uC800\uC7A5\uD558\uAE30"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          className: "btn_submit",
          onClick: toggleEditing,
          children: "\uC218\uC815\uD558\uAE30"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          className: "btn_delete",
          onClick: () => (0,apis_notice__WEBPACK_IMPORTED_MODULE_3__.delNotice)(uri, noticeId, navigate),
          children: "\uC0AD\uC81C\uD558\uAE30"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoticeDetail);

/***/ }),

/***/ "./src/styles/css/notice.css":
/*!***********************************!*\
  !*** ./src/styles/css/notice.css ***!
  \***********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_pages_notice_noticeDetailPage_tsx.a0951406cc8d7b57afc3.js.map