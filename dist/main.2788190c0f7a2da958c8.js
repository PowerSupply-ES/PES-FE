"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["main"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/header/Header */ "./src/components/header/Header.tsx");
/* harmony import */ var components_manage_ManageMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/manage/ManageMenu */ "./src/components/manage/ManageMenu.tsx");
/* harmony import */ var components_common_AdminRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/AdminRoute */ "./src/components/common/AdminRoute.tsx");
/* harmony import */ var components_common_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Loading */ "./src/components/common/Loading.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







// 동적 임포트

const ListPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_b"), __webpack_require__.e("vendors-node_modules_mui_b"), __webpack_require__.e("vendors-node_modules_mui_joy_c"), __webpack_require__.e("vendors-node_modules_mui_material_A"), __webpack_require__.e("vendors-node_modules_mui_material_F"), __webpack_require__.e("vendors-node_modules_mui_material_I"), __webpack_require__.e("vendors-node_modules_mui_material_N"), __webpack_require__.e("vendors-node_modules_mui_material_S"), __webpack_require__.e("vendors-node_modules_mui_m"), __webpack_require__.e("vendors-node_modules_m"), __webpack_require__.e("vendors-node_modules_po"), __webpack_require__.e("vendors-node_modules_react-d"), __webpack_require__.e("vendors-node_modules_react-icons_bi_index_mjs-e2be3311"), __webpack_require__.e("vendors-node_modules_react-icons_fa6_index_mjs-2ccc4c3d"), __webpack_require__.e("vendors-node_modules_react-icons_fa_index_mjs-1d109d6b"), __webpack_require__.e("vendors-node_modules_react-icons_hi_index_mjs-8f79acfa"), __webpack_require__.e("vendors-node_modules_react-icons_io_index_mjs-ef604261"), __webpack_require__.e("vendors-node_modules_react-icons_pi_index_mjs-6cf69589"), __webpack_require__.e("vendors-node_modules_react-"), __webpack_require__.e("vendors-node_modules_redux-"), __webpack_require__.e("vendors-node_modules_remix-run_router_dist_router_js-864d8ce6"), __webpack_require__.e("vendors-node_modules_s"), __webpack_require__.e("src_pages_list_listPage_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! pages/list/listPage */ "./src/pages/list/listPage.tsx")));
const ProblemPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_problem_problemPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! pages/problem/problemPage */ "./src/pages/problem/problemPage.tsx")));
const QuestionPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_question_questionPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! pages/question/questionPage */ "./src/pages/question/questionPage.tsx")));
const Signin = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_b"), __webpack_require__.e("vendors-node_modules_mui_b"), __webpack_require__.e("vendors-node_modules_mui_joy_c"), __webpack_require__.e("vendors-node_modules_mui_material_A"), __webpack_require__.e("vendors-node_modules_mui_material_F"), __webpack_require__.e("vendors-node_modules_mui_material_I"), __webpack_require__.e("vendors-node_modules_mui_material_N"), __webpack_require__.e("vendors-node_modules_mui_material_S"), __webpack_require__.e("vendors-node_modules_mui_m"), __webpack_require__.e("vendors-node_modules_m"), __webpack_require__.e("vendors-node_modules_po"), __webpack_require__.e("vendors-node_modules_react-d"), __webpack_require__.e("vendors-node_modules_react-icons_bi_index_mjs-e2be3311"), __webpack_require__.e("vendors-node_modules_react-icons_fa6_index_mjs-2ccc4c3d"), __webpack_require__.e("vendors-node_modules_react-icons_fa_index_mjs-1d109d6b"), __webpack_require__.e("vendors-node_modules_react-icons_hi_index_mjs-8f79acfa"), __webpack_require__.e("vendors-node_modules_react-icons_io_index_mjs-ef604261"), __webpack_require__.e("vendors-node_modules_react-icons_pi_index_mjs-6cf69589"), __webpack_require__.e("vendors-node_modules_react-"), __webpack_require__.e("vendors-node_modules_redux-"), __webpack_require__.e("vendors-node_modules_remix-run_router_dist_router_js-864d8ce6"), __webpack_require__.e("vendors-node_modules_s"), __webpack_require__.e("src_pages_sign_signInPage_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! pages/sign/signInPage */ "./src/pages/sign/signInPage.tsx")));
const Signup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_b"), __webpack_require__.e("vendors-node_modules_mui_b"), __webpack_require__.e("vendors-node_modules_mui_joy_c"), __webpack_require__.e("vendors-node_modules_mui_material_A"), __webpack_require__.e("vendors-node_modules_mui_material_F"), __webpack_require__.e("vendors-node_modules_mui_material_I"), __webpack_require__.e("vendors-node_modules_mui_material_N"), __webpack_require__.e("vendors-node_modules_mui_material_S"), __webpack_require__.e("vendors-node_modules_mui_m"), __webpack_require__.e("vendors-node_modules_m"), __webpack_require__.e("vendors-node_modules_po"), __webpack_require__.e("vendors-node_modules_react-d"), __webpack_require__.e("vendors-node_modules_react-icons_bi_index_mjs-e2be3311"), __webpack_require__.e("vendors-node_modules_react-icons_fa6_index_mjs-2ccc4c3d"), __webpack_require__.e("vendors-node_modules_react-icons_fa_index_mjs-1d109d6b"), __webpack_require__.e("vendors-node_modules_react-icons_hi_index_mjs-8f79acfa"), __webpack_require__.e("vendors-node_modules_react-icons_io_index_mjs-ef604261"), __webpack_require__.e("vendors-node_modules_react-icons_pi_index_mjs-6cf69589"), __webpack_require__.e("vendors-node_modules_react-"), __webpack_require__.e("vendors-node_modules_redux-"), __webpack_require__.e("vendors-node_modules_remix-run_router_dist_router_js-864d8ce6"), __webpack_require__.e("vendors-node_modules_s"), __webpack_require__.e("src_pages_sign_signUpPage_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! pages/sign/signUpPage */ "./src/pages/sign/signUpPage.tsx")));
const MainPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_main_mainPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! pages/main/mainPage */ "./src/pages/main/mainPage.tsx")));
const Mypage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_mypage_mypage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! pages/mypage/mypage */ "./src/pages/mypage/mypage.tsx")));
const SolutionPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_solution_solutionPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! pages/solution/solutionPage */ "./src/pages/solution/solutionPage.tsx")));
// const Menual = React.lazy(() => import("pages/menual/menualPage"));
const NoticePage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_b"), __webpack_require__.e("vendors-node_modules_mui_b"), __webpack_require__.e("vendors-node_modules_mui_joy_c"), __webpack_require__.e("vendors-node_modules_mui_material_A"), __webpack_require__.e("vendors-node_modules_mui_material_F"), __webpack_require__.e("vendors-node_modules_mui_material_I"), __webpack_require__.e("vendors-node_modules_mui_material_N"), __webpack_require__.e("vendors-node_modules_mui_material_S"), __webpack_require__.e("vendors-node_modules_mui_m"), __webpack_require__.e("vendors-node_modules_m"), __webpack_require__.e("vendors-node_modules_po"), __webpack_require__.e("vendors-node_modules_react-d"), __webpack_require__.e("vendors-node_modules_react-icons_bi_index_mjs-e2be3311"), __webpack_require__.e("vendors-node_modules_react-icons_fa6_index_mjs-2ccc4c3d"), __webpack_require__.e("vendors-node_modules_react-icons_fa_index_mjs-1d109d6b"), __webpack_require__.e("vendors-node_modules_react-icons_hi_index_mjs-8f79acfa"), __webpack_require__.e("vendors-node_modules_react-icons_io_index_mjs-ef604261"), __webpack_require__.e("vendors-node_modules_react-icons_pi_index_mjs-6cf69589"), __webpack_require__.e("vendors-node_modules_react-"), __webpack_require__.e("vendors-node_modules_redux-"), __webpack_require__.e("vendors-node_modules_remix-run_router_dist_router_js-864d8ce6"), __webpack_require__.e("vendors-node_modules_s"), __webpack_require__.e("src_pages_notice_noticePage_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! pages/notice/noticePage */ "./src/pages/notice/noticePage.tsx")));
const NoticePost = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_b"), __webpack_require__.e("vendors-node_modules_mui_b"), __webpack_require__.e("vendors-node_modules_mui_joy_c"), __webpack_require__.e("vendors-node_modules_mui_material_A"), __webpack_require__.e("vendors-node_modules_mui_material_F"), __webpack_require__.e("vendors-node_modules_mui_material_I"), __webpack_require__.e("vendors-node_modules_mui_material_N"), __webpack_require__.e("vendors-node_modules_mui_material_S"), __webpack_require__.e("vendors-node_modules_mui_m"), __webpack_require__.e("vendors-node_modules_m"), __webpack_require__.e("vendors-node_modules_po"), __webpack_require__.e("vendors-node_modules_react-d"), __webpack_require__.e("vendors-node_modules_react-icons_bi_index_mjs-e2be3311"), __webpack_require__.e("vendors-node_modules_react-icons_fa6_index_mjs-2ccc4c3d"), __webpack_require__.e("vendors-node_modules_react-icons_fa_index_mjs-1d109d6b"), __webpack_require__.e("vendors-node_modules_react-icons_hi_index_mjs-8f79acfa"), __webpack_require__.e("vendors-node_modules_react-icons_io_index_mjs-ef604261"), __webpack_require__.e("vendors-node_modules_react-icons_pi_index_mjs-6cf69589"), __webpack_require__.e("vendors-node_modules_react-"), __webpack_require__.e("vendors-node_modules_redux-"), __webpack_require__.e("vendors-node_modules_remix-run_router_dist_router_js-864d8ce6"), __webpack_require__.e("vendors-node_modules_s"), __webpack_require__.e("src_pages_notice_noticePostPage_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! pages/notice/noticePostPage */ "./src/pages/notice/noticePostPage.tsx")));
const NoticeDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_b"), __webpack_require__.e("vendors-node_modules_mui_b"), __webpack_require__.e("vendors-node_modules_mui_joy_c"), __webpack_require__.e("vendors-node_modules_mui_material_A"), __webpack_require__.e("vendors-node_modules_mui_material_F"), __webpack_require__.e("vendors-node_modules_mui_material_I"), __webpack_require__.e("vendors-node_modules_mui_material_N"), __webpack_require__.e("vendors-node_modules_mui_material_S"), __webpack_require__.e("vendors-node_modules_mui_m"), __webpack_require__.e("vendors-node_modules_m"), __webpack_require__.e("vendors-node_modules_po"), __webpack_require__.e("vendors-node_modules_react-d"), __webpack_require__.e("vendors-node_modules_react-icons_bi_index_mjs-e2be3311"), __webpack_require__.e("vendors-node_modules_react-icons_fa6_index_mjs-2ccc4c3d"), __webpack_require__.e("vendors-node_modules_react-icons_fa_index_mjs-1d109d6b"), __webpack_require__.e("vendors-node_modules_react-icons_hi_index_mjs-8f79acfa"), __webpack_require__.e("vendors-node_modules_react-icons_io_index_mjs-ef604261"), __webpack_require__.e("vendors-node_modules_react-icons_pi_index_mjs-6cf69589"), __webpack_require__.e("vendors-node_modules_react-"), __webpack_require__.e("vendors-node_modules_redux-"), __webpack_require__.e("vendors-node_modules_remix-run_router_dist_router_js-864d8ce6"), __webpack_require__.e("vendors-node_modules_s"), __webpack_require__.e("src_pages_notice_noticeDetailPage_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! pages/notice/noticeDetailPage */ "./src/pages/notice/noticeDetailPage.tsx")));
const UserListPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_manage_userListPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! pages/manage/userListPage */ "./src/pages/manage/userListPage.tsx")));
const UserProbPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_manage_userProbPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! pages/manage/userProbPage */ "./src/pages/manage/userProbPage.tsx")));
const UserFeedPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_manage_userFeedPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! pages/manage/userFeedPage */ "./src/pages/manage/userFeedPage.tsx")));
const UserDetailPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_manage_userDetailPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! pages/manage/userDetailPage */ "./src/pages/manage/userDetailPage.tsx")));
const App = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "App",
    style: {
      backgroundColor: "#f5f5f5"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
      children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
          path: "/",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MainPage, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/signin",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Signin, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/signup",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Signup, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/mypage",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Mypage, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/notice",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(NoticePage, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/postNotice",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(NoticePost, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/solution/:id",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SolutionPage, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/list",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ListPage, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/problem/:id",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ProblemPage, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/question/:id",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(QuestionPage, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/notice/:id",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(NoticeDetail, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/manageUser/:id",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(UserDetailPage, {})
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
          path: "/",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_manage_ManageMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/manageUser",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_common_AdminRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(UserListPage, {})
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/manageProb",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_common_AdminRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(UserProbPage, {})
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
            path: "/manageFeed",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_common_AdminRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(UserFeedPage, {})
            })
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/apis/common/postLogout.ts":
/*!***************************************!*\
  !*** ./src/apis/common/postLogout.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_actions_userAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stores/actions/userAction */ "./src/stores/actions/userAction.ts");

 // logout 액션 추가

//로그아웃 api호출 함수
const postLogout = async (navigate, dispatch) => {
  const uri = "/api/logout";
  console.log("logout!!");
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(uri, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    dispatch((0,stores_actions_userAction__WEBPACK_IMPORTED_MODULE_1__.logoutAction)()); // 로그인 액션 디스패치

    // 로컬 스토리지 클리어
    localStorage.clear();
    sessionStorage.clear();
    alert(response.data.message);
    navigate("/");
    window.location.reload(); // 페이지 새로 고침
  } catch (error) {
    // axios 에러인 경우
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
      if (error.response) {
        // 서버가 응답을 반환했지만 오류 상태 코드
        console.error("로그아웃 실패:", error.response.status, error.response.statusText);
        alert(`로그아웃 실패: 서버 응답 에러 (${error.response.status})`);
        navigate("/");
      } else if (error.request) {
        // 요청이 서버로 전송되었지만 응답을 받지 못한 경우
        console.error("로그아웃 실패: 요청이 실패했습니다.");
        alert("로그아웃 실패: 서버 응답 없음.");
      } else {
        // 요청 설정 중 오류 발생
        console.error("로그아웃 실패:", error.message);
        alert("로그아웃 실패: 요청 설정 에러.");
      }
    } else {
      // axios 외의 다른 일반적인 에러 처리
      console.error("로그아웃 실패 (일반 에러):", error.message);
      alert("로그아웃 실패: 알 수 없는 오류가 발생했습니다.");
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLogout);

/***/ }),

/***/ "./src/apis/navbar/getUserInfo.ts":
/*!****************************************!*\
  !*** ./src/apis/navbar/getUserInfo.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_actions_userAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stores/actions/userAction */ "./src/stores/actions/userAction.ts");



// 상단바 user 정보 API 요청
const getUserInfo = async _ref => {
  let {
    navigate,
    setMemberData,
    dispatch
  } = _ref;
  const uri = "/api/exp";
  const memberEmail = sessionStorage.getItem("memberEmail");
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(uri, {
      params: {
        memberEmail
      }
    });

    // 데이터 처리
    const data = response.data;
    setMemberData(data);
    dispatch(
    // sessionStorage 저장에서 Redux 저장으로 변경
    (0,stores_actions_userAction__WEBPACK_IMPORTED_MODULE_1__.userInfoAction)({
      memberName: data.memberName,
      memberStatus: data.memberStatus,
      hasNewNotices: data.hasNewNotices,
      memberScore: data.memberScore,
      memberGen: data.memberGen
    }));
    console.log("hasNewNotices = ", data.hasNewNotices);
  } catch (error) {
    // Axios에러인 경우
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
      if (error.response) {
        // 서버 응답이 있는 경우
        if (error.response.status === 403) {
          alert("로그인이 만료됐습니다!");
          localStorage.clear();
          navigate("/signin");
        } else {
          console.error("데이터 가져오기 실패:", error.response.status, error.response.statusText);
        }
      } else if (error.request) {
        // 요청이 이루어졌으나 응답이 없는 경우
        console.error("데이터 가져오기 실패: 요청이 실패했습니다.");
      } else {
        // 설정 중 오류 발생
        console.error("데이터 가져오기 실패:", error.message);
      }
    } else {
      // Axios 에러가 아닌 경우
      console.error("데이터 가져오기 실패:", error.message);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserInfo);

/***/ }),

/***/ "./src/components/common/AdminRoute.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/AdminRoute.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
// 관리자 이외 접근 보호용 컴포넌트



const AdminRoute = _ref => {
  let {
    children
  } = _ref;
  const {
    memberStatus
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.user); // redux에서 가져오기

  const isAdmin = memberStatus === '관리자';
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // 관리자가 아닐 경우 이전 페이지로 이동
    if (!isAdmin) {
      alert("권한이 없습니다!");
      navigate(-1);
    }
  }, [isAdmin, navigate]);

  // 관리자인 경우 children 컴포넌트 그대로 렌더링
  return isAdmin ? children : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminRoute);

/***/ }),

/***/ "./src/components/common/Loading.tsx":
/*!*******************************************!*\
  !*** ./src/components/common/Loading.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/FadeLoader.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// 로딩 페이지



const Loading = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoadingPage, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spinners__WEBPACK_IMPORTED_MODULE_1__["default"], {
      color: "#a1d2fa",
      cssOverride: {},
      height: 15,
      loading: true,
      margin: 2,
      radius: 2,
      speedMultiplier: 1,
      width: 5
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);
const LoadingPage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: auto;
`;

/***/ }),

/***/ "./src/components/footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/footer/Footer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.mjs");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.mjs");
/* harmony import */ var apis_common_postLogout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/common/postLogout */ "./src/apis/common/postLogout.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const Footer = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  const {
    status
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.sign); // redux에서 가져오기

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "footer",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "footer_left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "logo",
        children: "PES"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "info",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "phone",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoIosMail, {
            size: 24
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: "123qpq@naver.com"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "address",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaMapMarkerAlt, {
            size: 20
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: "\uACBD\uBD81 \uACBD\uC0B0\uC2DC \uB300\uD559\uB85C 280 \uC0DD\uC0B0\uAE30\uC220\uC5F0\uAD6C\uC6D0 G15 213\uD638"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "footer_right",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "about",
        children: "About The Club"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "info1",
        children: "\uC601\uB0A8\uB300\uD559\uAD50 \uB85C\uBD07\uACF5\uD559\uACFC \uB3D9\uC544\uB9AC PowerSupply\uC758"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "info2",
        children: "\uAD50\uC721\uC2DC\uC2A4\uD15C \uAC1C\uBC1C\uD300 PES"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "sns",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "https://www.instagram.com/team.pes23/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiLogoInstagramAlt, {
            size: 36
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "https://github.com/PowerSupply-ES",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaGithub, {
            size: 30
          })
        })]
      }), status ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        onClick: () => (0,apis_common_postLogout__WEBPACK_IMPORTED_MODULE_1__["default"])(navigate, dispatch),
        className: "footer_logout",
        children: "\uB85C\uADF8\uC544\uC6C3"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/Header.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/header */ "./src/components/header/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var components_footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/footer/Footer */ "./src/components/footer/Footer.tsx");
/* harmony import */ var styles_css_topDropdown_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/css/topDropdown.css */ "./src/styles/css/topDropdown.css");
/* harmony import */ var styles_css_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/css/footer.css */ "./src/styles/css/footer.css");
/* harmony import */ var styles_css_navbar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/css/navbar.css */ "./src/styles/css/navbar.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// RootState 임포트





const Header = () => {
  const {
    status
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.sign); // useSelector에서 RootState를 사용하여 sign 상태의 status를 가져옴

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [status ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_header__WEBPACK_IMPORTED_MODULE_1__.HeaderForUser, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_header__WEBPACK_IMPORTED_MODULE_1__.HeaderForAny, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Outlet, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/header/HeaderForAny.tsx":
/*!************************************************!*\
  !*** ./src/components/header/HeaderForAny.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var components_header_MenuBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/header/MenuBar */ "./src/components/header/MenuBar.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// 로그인x 경우 넷바

const HeaderForAny = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      className: "logout",
      href: "/signin",
      style: {
        textDecoration: 'none',
        color: '#555555'
      },
      children: "\uB85C\uADF8\uC778"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "navbar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "logo",
        onClick: () => navigate("/"),
        children: "PES"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_header_MenuBar__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderForAny);

/***/ }),

/***/ "./src/components/header/HeaderForUser.tsx":
/*!*************************************************!*\
  !*** ./src/components/header/HeaderForUser.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa6 */ "./node_modules/react-icons/fa6/index.mjs");
/* harmony import */ var components_header_MenuBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/header/MenuBar */ "./src/components/header/MenuBar.tsx");
/* harmony import */ var apis_common_postLogout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apis/common/postLogout */ "./src/apis/common/postLogout.ts");
/* harmony import */ var apis_navbar_getUserInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apis/navbar/getUserInfo */ "./src/apis/navbar/getUserInfo.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








// 로그인o 경우 넷바

const HeaderForUser = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // user 정보 관리
  const [memberData, setMemberData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    memberName: "",
    memberScore: 0,
    memberStatus: "",
    memberGen: 0,
    hasNewNotices: false
  });

  // 상단바 드롭다운 클릭
  const toggleDropdown = () => {
    setIsDropdownOpen(state => !state);
  };

  // 넷바 사용자 정보 요청
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,apis_navbar_getUserInfo__WEBPACK_IMPORTED_MODULE_3__["default"])({
      navigate,
      setMemberData,
      dispatch
    });
  }, [navigate]);

  // 로그아웃 호출 함수
  const handleLogoutClick = () => {
    console.log("로그아웃");
    (0,apis_common_postLogout__WEBPACK_IMPORTED_MODULE_2__["default"])(navigate, dispatch); // dispatch 전달
  };
  return (
    /*#__PURE__*/
    //토글버튼 클릭 시
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "btns",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: "userId",
          onClick: toggleDropdown,
          children: [memberData.memberName, "\uB2D8", isDropdownOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "dropdown-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__.FaCircleUser, {
              size: 60,
              style: {
                color: "lightgray"
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "memberName",
              children: [memberData.memberName, "\uB2D8"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "navbarInfo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "memberStatus",
                children: memberData.memberStatus
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "memberGen",
                children: [memberData.memberGen, "\uAE30"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "memberScore",
                children: ["\uD604\uC7AC", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  children: memberData.memberScore
                }), "\uC810"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "navbar_bottom",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                className: "btn_mypage",
                href: "/mypage",
                children: "\uB9C8\uC774\uD398\uC774\uC9C0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                onClick: handleLogoutClick,
                className: "btn_top_logout",
                children: "\uB85C\uADF8\uC544\uC6C3"
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "navbar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "logo",
          onClick: () => navigate("/"),
          children: "PES"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_header_MenuBar__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
      })]
    })
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderForUser);

/***/ }),

/***/ "./src/components/header/MenuBar.tsx":
/*!*******************************************!*\
  !*** ./src/components/header/MenuBar.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_menu_useMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/menu/useMenu */ "./src/hooks/menu/useMenu.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// MUI 테마 생성

const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])();
const MenuBar = () => {
  // 훅 사용
  const {
    index,
    toggleTab
  } = (0,hooks_menu_useMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    theme: theme,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        flexGrow: 1,
        mt: 2,
        overflow: "hidden"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        "aria-label": "Pipeline",
        value: index,
        onChange: (event, value) => {
          // value가 string | number | null이므로, 10진수로 변환
          if (value !== undefined && value !== null) {
            const numericValue = typeof value === "number" ? value : parseInt(value, 10);
            // number타입일때 탭이동
            if (!isNaN(numericValue)) {
              toggleTab(numericValue);
            }
          }
        },
        sx: {
          display: 'flex',
          justifyContent: 'flex-start',
          pt: 1
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          label: "\uBB38\uC81C",
          value: 1,
          sx: getTabStyle(index, 1)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          label: "\uACF5\uC9C0\uC0AC\uD56D",
          value: 2,
          sx: getTabStyle(index, 2)
        })]
      })
    })]
  });
};

// Tab의 스타일 설정 함수
const getTabStyle = (currentIndex, tabIndex) => ({
  flex: 'initial',
  fontSize: '26px',
  color: currentIndex === tabIndex ? 'primary.main' : 'inherit',
  '&::after': {
    content: '""',
    display: currentIndex === tabIndex ? 'block' : 'none',
    height: '2.5px',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    backgroundColor: 'primary.main',
    marginTop: '8px'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuBar);

/***/ }),

/***/ "./src/components/header/index.ts":
/*!****************************************!*\
  !*** ./src/components/header/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderForAny: () => (/* reexport safe */ _HeaderForAny__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   HeaderForUser: () => (/* reexport safe */ _HeaderForUser__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _HeaderForAny__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderForAny */ "./src/components/header/HeaderForAny.tsx");
/* harmony import */ var _HeaderForUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderForUser */ "./src/components/header/HeaderForUser.tsx");
/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar */ "./src/components/header/MenuBar.tsx");
// components/header 디렉토리 export 관리




/***/ }),

/***/ "./src/components/manage/ManageMenu.tsx":
/*!**********************************************!*\
  !*** ./src/components/manage/ManageMenu.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TemplateFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplateFrame */ "./src/components/manage/TemplateFrame.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// ManageMenu props 타입 정의

;

// 관리자모드 사이드바 공통컴포넌트 
const ManageMenu = () => {
  return (
    /*#__PURE__*/
    // MUI 템플릿 적용
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TemplateFrame__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Outlet, {})
    })
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageMenu);

/***/ }),

/***/ "./src/components/manage/MenuButton.tsx":
/*!**********************************************!*\
  !*** ./src/components/manage/MenuButton.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuButton)
/* harmony export */ });
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Badge */ "./node_modules/@mui/material/Badge/Badge.js");
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Badge */ "./node_modules/@mui/material/Badge/badgeClasses.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// 관리자 버튼 클릭 MUI 컴포넌트



function MenuButton(_ref) {
  let {
    showBadge = false,
    ...props
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "error",
    variant: "dot",
    invisible: !showBadge,
    sx: {
      [`& .${_mui_material_Badge__WEBPACK_IMPORTED_MODULE_2__["default"].badge}`]: {
        right: 2,
        top: 2
      }
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "small",
      ...props
    })
  });
}

/***/ }),

/***/ "./src/components/manage/MenuContent.tsx":
/*!***********************************************!*\
  !*** ./src/components/manage/MenuContent.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuContent)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemButton */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_icons_material_HomeRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/HomeRounded */ "./node_modules/@mui/icons-material/HomeRounded.js");
/* harmony import */ var _mui_icons_material_AnalyticsRounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/AnalyticsRounded */ "./node_modules/@mui/icons-material/AnalyticsRounded.js");
/* harmony import */ var _mui_icons_material_PeopleRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/PeopleRounded */ "./node_modules/@mui/icons-material/PeopleRounded.js");
/* harmony import */ var _mui_icons_material_AssignmentRounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/AssignmentRounded */ "./node_modules/@mui/icons-material/AssignmentRounded.js");
/* harmony import */ var _mui_icons_material_InfoRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/InfoRounded */ "./node_modules/@mui/icons-material/InfoRounded.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// 관리자 SideMenu 탭 MUI 컴포넌트












// import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
// import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

// 탭 메뉴 목록

const mainListItems = [{
  text: '회원 관리',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_PeopleRounded__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
  path: '/manageUser'
}, {
  text: '문제 관리',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_AssignmentRounded__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
  path: '/manageProb'
}, {
  text: '피드백 관리',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_AnalyticsRounded__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
  path: '/manageFeed'
}];
const secondaryListItems = [{
  text: 'Home',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_HomeRounded__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
  path: '/'
},
// { text: 'Settings', icon: <SettingsRoundedIcon /> },
{
  text: 'About',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_InfoRounded__WEBPACK_IMPORTED_MODULE_5__["default"], {})
} // TODO : 경로 추가
//{ text: 'Info', icon: <HelpRoundedIcon /> },
];
function MenuContent() {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)();

  // TODO : 공통부분 컴포넌트로 제작
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      flexGrow: 1,
      p: 1,
      justifyContent: 'space-between'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
      dense: true,
      children: mainListItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        disablePadding: true,
        sx: {
          display: 'block'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          selected: location.pathname === item.path // 현재 경로와 메뉴 경로 비교
          ,
          sx: {
            minHeight: 52,
            px: 2 // 좌우 패딩
          },
          onClick: () => {
            if (item.path) {
              navigate(item.path); // 경로가 있으면 해당 경로로 이동
            }
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: item.icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
            primary: item.text
          })]
        })
      }, index))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
      dense: true,
      children: secondaryListItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        disablePadding: true,
        sx: {
          display: 'block'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          selected: location.pathname === item.path,
          sx: {
            minHeight: 52,
            px: 2
          },
          onClick: () => {
            if (item.path) {
              navigate(item.path);
            }
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: item.icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
            primary: item.text
          })]
        })
      }, index))
    })]
  });
}

/***/ }),

/***/ "./src/components/manage/OptionsMenu.tsx":
/*!***********************************************!*\
  !*** ./src/components/manage/OptionsMenu.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OptionsMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var apis_common_postLogout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/common/postLogout */ "./src/apis/common/postLogout.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/components/manage/index.ts");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/dividerClasses.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/paperClasses.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/listClasses.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_icons_material_LogoutRounded__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/LogoutRounded */ "./node_modules/@mui/icons-material/LogoutRounded.js");
/* harmony import */ var _mui_icons_material_MoreVertRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/MoreVertRounded */ "./node_modules/@mui/icons-material/MoreVertRounded.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// 관리자 SideMenu 하단 옵션 컴포넌트















const MenuItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["default"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"])({
  margin: '2px 0'
});
function OptionsMenu() {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.MenuButton, {
      "aria-label": "Open menu",
      onClick: handleClick,
      sx: {
        borderColor: 'transparent'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_MoreVertRounded__WEBPACK_IMPORTED_MODULE_7__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
      anchorEl: anchorEl,
      id: "menu",
      open: open,
      onClose: handleClose,
      onClick: handleClose,
      transformOrigin: {
        horizontal: 'right',
        vertical: 'top'
      },
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom'
      },
      sx: {
        [`& .${_mui_material_List__WEBPACK_IMPORTED_MODULE_9__["default"].root}`]: {
          padding: '4px'
        },
        [`& .${_mui_material_Paper__WEBPACK_IMPORTED_MODULE_10__["default"].root}`]: {
          padding: 0
        },
        [`& .${_mui_material_Divider__WEBPACK_IMPORTED_MODULE_11__["default"].root}`]: {
          margin: '4px -4px'
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MenuItem, {
        onClick: handleClose,
        children: "Add another account"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(MenuItem
      // 로그아웃
      , {
        onClick: () => (0,apis_common_postLogout__WEBPACK_IMPORTED_MODULE_1__["default"])(navigate),
        sx: {
          [`& .${_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__["default"].root}`]: {
            ml: 'auto',
            minWidth: 0
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__["default"], {
          children: "Logout"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_LogoutRounded__WEBPACK_IMPORTED_MODULE_16__["default"], {
            fontSize: "small"
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/components/manage/SideMenu.tsx":
/*!********************************************!*\
  !*** ./src/components/manage/SideMenu.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideMenu)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/components/manage/index.ts");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/drawerClasses.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// 관리자 SideMenu MUI 컴포넌트







// import Divider from "@mui/material/Divider";
// import SelectContent from "./SelectContent";

const drawerWidth = 240;
const Drawer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"])({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"].paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box"
  }
});
function SideMenu() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Drawer, {
    variant: "permanent",
    sx: {
      display: {
        xs: "none",
        md: "block"
      },
      [`& .${_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"].paper}`]: {
        backgroundColor: "background.paper"
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        display: "flex",
        mt: "40px",
        p: 1.5
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_0__.MenuContent, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__["default"], {
      direction: "row",
      sx: {
        p: 2,
        gap: 1,
        alignItems: "center",
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        sizes: "small",
        alt: "Riley Carter"
        // src="/static/images/avatar/7.jpg"
        ,
        sx: {
          width: 36,
          height: 36
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
          mr: "auto"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "body2",
          sx: {
            fontWeight: 500,
            lineHeight: "16px"
          },
          children: "\uAD00\uB9AC\uC790"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "caption",
          sx: {
            color: "text.secondary"
          },
          children: "csi9926@gmail.com"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_0__.OptionsMenu, {})]
    })]
  });
}

/***/ }),

/***/ "./src/components/manage/TemplateFrame.tsx":
/*!*************************************************!*\
  !*** ./src/components/manage/TemplateFrame.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemplateFrame)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideMenu */ "./src/components/manage/SideMenu.tsx");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_icons_material_ArrowBackRounded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ArrowBackRounded */ "./node_modules/@mui/icons-material/ArrowBackRounded.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// 관리자 페이지 MUI 템플릿








// import FormControl from "@mui/material/FormControl";
// import IconButton from "@mui/material/IconButton";
// import getDashboardTheme from './theme/getDashboardTheme';

const StyledAppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref => {
  let {
    theme
  } = _ref;
  return {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
    borderBottom: "1px solid",
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none",
    backgroundImage: "none",
    zIndex: theme.zIndex.drawer + 1,
    flex: "0 0 auto"
  };
});
function TemplateFrame(_ref2) {
  let {
    children
  } = _ref2;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledAppBar, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "dense",
          disableGutters: true,
          sx: {
            display: "flex",
            justifyContent: "space-between",
            width: "98%",
            p: "8px 12px"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            variant: "text",
            size: "small",
            "aria-label": "Back to MyPage",
            startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_ArrowBackRounded__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
            component: "a",
            onClick: () => navigate("/mypage"),
            sx: {
              display: {
                xs: "none",
                sm: "flex"
              }
            },
            children: "Back to MyPage"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
          display: "flex",
          flexGrow: 1
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SideMenu__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            width: "calc(100% - 240px)"
          },
          children: children
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/components/manage/UserList.tsx":
/*!********************************************!*\
  !*** ./src/components/manage/UserList.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var styles_css_manage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/css/manage.css */ "./src/styles/css/manage.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// 회원목록 컴포넌트
const UserList = _ref => {
  let {
    memberData
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();

  // 페이지 이동
  const gotoDetail = memberId => {
    sessionStorage.setItem("memberId", memberId);
    navigate(`/manageUser/${memberId}`);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: memberData.map(mem => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
      className: "list_wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
        className: mem.memberStatus === "신입생" ? "title_state_new" : mem.memberStatus === "재학생" ? "title_state_old" : mem.memberStatus === "관리자" ? "title_state_manage" : "",
        children: mem.memberStatus
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
        className: "title_name",
        children: mem.memberName
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
        className: "title_stunum",
        children: mem.memberId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
        className: "title_studep",
        children: mem.memberMajor
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
        className: "title_none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          className: "info_btn",
          onClick: () => gotoDetail(mem.memberId),
          children: "\uC815\uBCF4"
        })
      })]
    }, mem.memberId))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);

/***/ }),

/***/ "./src/components/manage/index.ts":
/*!****************************************!*\
  !*** ./src/components/manage/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuButton: () => (/* reexport safe */ _MenuButton__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   MenuContent: () => (/* reexport safe */ _MenuContent__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   OptionsMenu: () => (/* reexport safe */ _OptionsMenu__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   UserList: () => (/* reexport safe */ _UserList__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList */ "./src/components/manage/UserList.tsx");
/* harmony import */ var _MenuContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuContent */ "./src/components/manage/MenuContent.tsx");
/* harmony import */ var _OptionsMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionsMenu */ "./src/components/manage/OptionsMenu.tsx");
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuButton */ "./src/components/manage/MenuButton.tsx");
// components/manage 디렉토리 export 관리





/***/ }),

/***/ "./src/hooks/menu/useMenu.ts":
/*!***********************************!*\
  !*** ./src/hooks/menu/useMenu.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");



// 메뉴바 페이지 이동 HOOK
const useMenu = () => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();

  // 현재 경로에 따라 초기 탭 인덱스 설정
  // const getInitialIndex = (): number | null => {
  //   if (location.pathname === "/list")
  //     return 1;
  //   else if (location.pathname === "/notice") 
  //     return 2;
  //   else
  //     return null; // 홈이나 기타 경로인 경우 탭이 선택되지 않도록
  // };

  // 탭 구분위한 index state
  const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  // 탭 이동
  const toggleTab = value => {
    setIndex(value);
    console.log("value = ", value);
    if (value === 1) {
      navigate("/list");
    } else if (value === 2) {
      navigate("/notice");
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // 경로가 '/'일 때 아무 탭도 선택되지 않도록 설정
    if (location.pathname === "/") {
      setIndex(0);
    } else if (location.pathname === "/list") {
      setIndex(1);
    } else if (location.pathname === "/notice") {
      setIndex(2);
    } else {
      setIndex(0); // 기타 경로일 경우 기본값으로 설정
    }
  }, [location.pathname, index]);
  return {
    index,
    toggleTab
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMenu);

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var stores_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stores/store */ "./src/stores/store.ts");
/* harmony import */ var components_common_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Loading */ "./src/components/common/Loading.tsx");
/* harmony import */ var styles_css_Font_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/css/Font.css */ "./src/styles/css/Font.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const rootElement = document.getElementById("root");
const root = react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot(rootElement);
root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {
  store: stores_store__WEBPACK_IMPORTED_MODULE_3__["default"],
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__.PersistGate, {
    loading: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_common_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
    persistor: stores_store__WEBPACK_IMPORTED_MODULE_3__.persistor,
    children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    })]
  })
}));

/***/ }),

/***/ "./src/stores/actions/userAction.ts":
/*!******************************************!*\
  !*** ./src/stores/actions/userAction.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginAction: () => (/* binding */ loginAction),
/* harmony export */   logoutAction: () => (/* binding */ logoutAction),
/* harmony export */   userInfoAction: () => (/* binding */ userInfoAction)
/* harmony export */ });
/* user 관련 액션 관리 */

// 로그인
const loginAction = memberId => ({
  type: "LOGIN",
  payload: memberId
});

// 로그아웃
const logoutAction = () => ({
  type: "LOGOUT"
});

// 사용자 정보
const userInfoAction = userInfo => ({
  type: "SET_USER_INFO",
  payload: userInfo
});

// 액션 타입 정의

/***/ }),

/***/ "./src/stores/reducers/userReducer.ts":
/*!********************************************!*\
  !*** ./src/stores/reducers/userReducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   signReducer: () => (/* binding */ signReducer),
/* harmony export */   userInfoReducer: () => (/* binding */ userInfoReducer)
/* harmony export */ });
/* user관련 reducer 관리 */

// initialSignin 타입

// sign 기본 상태
const initialSignin = {
  status: false,
  memberId: ""
};

// userInfo 기본 상태
const initialInfo = {
  memberName: "",
  memberStatus: "",
  hasNewNotices: false,
  memberGen: 0,
  memberScore: 0
};

// sign Reducer
const signReducer = function () {
  let currentState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialSignin;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case "LOGIN":
      return {
        ...currentState,
        status: true,
        memberId: action.payload
      };
    case "LOGOUT":
      return {
        ...currentState,
        status: false,
        memberId: null
      };
    default:
      return currentState;
  }
};

// userInfo Reducer
const userInfoReducer = function () {
  let currentState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialInfo;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...currentState,
        ...action.payload
      };
    case "LOGOUT":
      return {
        ...currentState,
        memberName: "",
        memberStatus: "",
        hasNewNotices: false,
        memberGen: 0,
        memberScore: 0
      };
    default:
      return currentState;
  }
};

/***/ }),

/***/ "./src/stores/store.ts":
/*!*****************************!*\
  !*** ./src/stores/store.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   persistor: () => (/* binding */ persistor)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/dist/redux.mjs");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var stores_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stores/reducers/userReducer */ "./src/stores/reducers/userReducer.ts");



// Provider: state값 전달역할 /useSelector: 어떤 state값 쓸지 선택 / useDispatch: state값 변경

// SignState 타입 import
// UserInfo 타입 import

// 전체 state 타입 정의

// redux-persist 설정
const persistConfig = {
  key: "root",
  // 로컬스토리지에 저장되는 키 이름
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__["default"],
  // localStorage 사용
  whitelist: ["sign", "user"] // 어떤 리듀서 persist할지
};

// Reducers 한꺼번에 관리
const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
  sign: stores_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__.signReducer,
  user: stores_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__.userInfoReducer
});

// redux-persist로 rootReducer 감싸기
// TODO: any type 변경하기
const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, rootReducer);

// Redux DevTools 설정
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(persistedReducer, devTools && devTools());

// persistStore 생성
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistStore)(store);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/styles/css/Font.css":
/*!*********************************!*\
  !*** ./src/styles/css/Font.css ***!
  \*********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/css/footer.css":
/*!***********************************!*\
  !*** ./src/styles/css/footer.css ***!
  \***********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/css/manage.css":
/*!***********************************!*\
  !*** ./src/styles/css/manage.css ***!
  \***********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/css/navbar.css":
/*!***********************************!*\
  !*** ./src/styles/css/navbar.css ***!
  \***********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/css/topDropdown.css":
/*!****************************************!*\
  !*** ./src/styles/css/topDropdown.css ***!
  \****************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = axios;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_b","vendors-node_modules_mui_b","vendors-node_modules_mui_joy_c","vendors-node_modules_mui_material_A","vendors-node_modules_mui_material_F","vendors-node_modules_mui_material_I","vendors-node_modules_mui_material_N","vendors-node_modules_mui_material_S","vendors-node_modules_mui_m","vendors-node_modules_m","vendors-node_modules_po","vendors-node_modules_react-d","vendors-node_modules_react-icons_bi_index_mjs-e2be3311","vendors-node_modules_react-icons_fa6_index_mjs-2ccc4c3d","vendors-node_modules_react-icons_fa_index_mjs-1d109d6b","vendors-node_modules_react-icons_hi_index_mjs-8f79acfa","vendors-node_modules_react-icons_io_index_mjs-ef604261","vendors-node_modules_react-icons_pi_index_mjs-6cf69589","vendors-node_modules_react-","vendors-node_modules_redux-","vendors-node_modules_remix-run_router_dist_router_js-864d8ce6","vendors-node_modules_s"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.2788190c0f7a2da958c8.js.map