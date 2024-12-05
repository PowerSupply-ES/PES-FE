"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_sign_signInPage_tsx"],{

/***/ "./src/apis/sign/postLogin.ts":
/*!************************************!*\
  !*** ./src/apis/sign/postLogin.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const postLogin = async formData => {
  const uri = "/api/signin";

  // 로그인 요청 api
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(uri, formData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res.data;
  } catch (error) {
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        throw new Error("일치하는 정보가 없습니다");
      } else if (error.response) {
        throw new Error(`${error.response.status} ${error.response.statusText}`);
      }
    }
    throw new Error("네트워크 오류가 발생했습니다");
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLogin);

/***/ }),

/***/ "./src/components/sign/Copyright.tsx":
/*!*******************************************!*\
  !*** ./src/components/sign/Copyright.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



// 하단 copyright

const Copyright = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "body2",
    color: "text.secondary",
    align: "center",
    ...props,
    children: ["Goto HOME © ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: "inherit",
      href: "https://pes23.com/",
      children: "pes23.com"
    }), " ", new Date().getFullYear(), "."]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copyright);

/***/ }),

/***/ "./src/components/sign/LoginTemp.tsx":
/*!*******************************************!*\
  !*** ./src/components/sign/LoginTemp.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_images_sign_logo_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/sign_logo.webp */ "./src/assets/images/sign_logo.webp");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Copyright */ "./src/components/sign/Copyright.tsx");
/* harmony import */ var hooks_sign_useSignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/sign/useSignIn */ "./src/hooks/sign/useSignIn.ts");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// MUI이용 로그인 form















const defaultTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();
const LoginTemp = () => {
  const {
    formData,
    handleSubmit,
    handleInputChange
  } = (0,hooks_sign_useSignIn__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: defaultTheme,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "main",
      maxWidth: "xs",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
        sx: {
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
          sx: {
            m: 1,
            width: 56,
            height: 56
          },
          src: assets_images_sign_logo_webp__WEBPACK_IMPORTED_MODULE_1__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
          component: "h1",
          variant: "h5",
          children: "Login"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
          component: "form",
          onSubmit: handleSubmit,
          sx: {
            mt: 1
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
            margin: "normal",
            value: formData.memberId,
            onChange: handleInputChange,
            fullWidth: true,
            id: "memberId",
            label: "ID",
            name: "memberId",
            autoComplete: "memberId",
            autoFocus: true,
            required: true,
            placeholder: "\uD559\uBC88\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
            margin: "normal",
            value: formData.memberPw,
            onChange: handleInputChange,
            fullWidth: true,
            name: "memberPw",
            label: "password",
            type: "password",
            id: "memberPw",
            autoComplete: "password",
            required: true,
            placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            type: "submit",
            fullWidth: true,
            variant: "contained",
            sx: {
              mt: 3,
              mb: 2
            },
            children: "Login"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
            container: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
              item: true,
              xs: true
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
              item: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_15__["default"], {
                href: "/signup",
                variant: "body2",
                children: "아이디가 없으신가요? 회원가입"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Copyright__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sx: {
          mt: 8,
          mb: 4
        }
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginTemp);

/***/ }),

/***/ "./src/hooks/sign/useSignIn.ts":
/*!*************************************!*\
  !*** ./src/hooks/sign/useSignIn.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var apis_sign_postLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/sign/postLogin */ "./src/apis/sign/postLogin.ts");
/* harmony import */ var stores_actions_userAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stores/actions/userAction */ "./src/stores/actions/userAction.ts");


 // dispatch 추가

 // login 액션 추가

// 로그인 관련 HOOK
const useSignIn = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(); // dispatch 초기화
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    memberId: "",
    memberPw: ""
  });

  // 로그인 폼이 제출될 때 호출
  const handleSubmit = async e => {
    // 기본 제출 동작 막기
    e.preventDefault();
    try {
      const responseData = await (0,apis_sign_postLogin__WEBPACK_IMPORTED_MODULE_1__["default"])(formData);
      const resultMessage = responseData.message;
      alert(resultMessage);

      // 로그인 성공 후 Redux 상태 변경
      dispatch((0,stores_actions_userAction__WEBPACK_IMPORTED_MODULE_2__.loginAction)(formData.memberId)); // 로그인 액션 디스패치

      navigate("/");
      // window.location.reload(); // 페이지 새로고침
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  //입력필드 값 변경될때마다 호출
  const handleInputChange = e => {
    setFormData({
      // formData복사, 변경된 필드만 업데이트
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return {
    formData,
    handleSubmit,
    handleInputChange
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSignIn);

/***/ }),

/***/ "./src/pages/sign/signInPage.tsx":
/*!***************************************!*\
  !*** ./src/pages/sign/signInPage.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_css_intro_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/css/intro.css */ "./src/styles/css/intro.css");
/* harmony import */ var components_sign_LoginTemp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/sign/LoginTemp */ "./src/components/sign/LoginTemp.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const Signin = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "sign-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(components_sign_LoginTemp__WEBPACK_IMPORTED_MODULE_2__["default"], {})
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signin);

/***/ }),

/***/ "./src/styles/css/intro.css":
/*!**********************************!*\
  !*** ./src/styles/css/intro.css ***!
  \**********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/images/sign_logo.webp":
/*!******************************************!*\
  !*** ./src/assets/images/sign_logo.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/sign_logo.31bc8606.webp";

/***/ })

}]);
//# sourceMappingURL=src_pages_sign_signInPage_tsx.f243797a450fb2aabfd2.js.map