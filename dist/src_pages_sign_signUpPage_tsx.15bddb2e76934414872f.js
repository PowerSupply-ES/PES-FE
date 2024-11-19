"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_sign_signUpPage_tsx"],{

/***/ "./src/apis/sign/postSignup.ts":
/*!*************************************!*\
  !*** ./src/apis/sign/postSignup.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const postSignup = async (formData, isEmailValid) => {
  // 이메일 형식이 유효한지 체크
  if (!isEmailValid(formData.memberEmail)) {
    alert("이메일 형식이 아닙니다");
    return;
  }

  // 이름이 문자로만 입력되었는지 체크
  if (!/^[a-zA-Z가-힣]+$/.test(formData.memberName)) {
    alert("이름은 문자로 입력해주세요");
    return;
  }
  // TODO : 전화번호 형식이 맞는지 체크
  // TODO : 아이디가 숫자로만 입력되었는지 체크

  const uri = "api/signup";

  // 회원가입 요청 api
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(uri, formData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res.data;
  } catch (error) {
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
      // AxiosError인 경우
      const axiosError = error;
      if (axiosError.response) {
        if (axiosError.response.status === 400) {
          throw new Error("이미 사용 중인 이메일입니다.");
        }
        throw new Error(`${axiosError.response.status} ${axiosError.response.statusText}`);
      }
    }
    // AxiosError가 아닌 경우
    throw new Error("네트워크 오류가 발생했습니다");
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postSignup);

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

/***/ "./src/components/sign/SignupTemp.tsx":
/*!********************************************!*\
  !*** ./src/components/sign/SignupTemp.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_images_sign_logo_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/sign_logo.webp */ "./src/assets/images/sign_logo.webp");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Copyright */ "./src/components/sign/Copyright.tsx");
/* harmony import */ var hooks_sign_useSignup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/sign/useSignup */ "./src/hooks/sign/useSignup.ts");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// MUI이용 회원가입 form




// import InputMask from "react-input-mask";












const defaultTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();
const SignupTemp = () => {
  const {
    formData,
    handleSubmit,
    handleInputChange
  } = (0,hooks_sign_useSignup__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
          children: "Sign Up"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
          component: "form",
          noValidate: true,
          onSubmit: handleSubmit,
          sx: {
            mt: 3
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            container: true,
            spacing: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
                value: formData.memberName,
                id: "memberName",
                label: "\uC774\uB984",
                name: "memberName",
                autoComplete: "memberName",
                fullWidth: true,
                required: true,
                onChange: handleInputChange,
                placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
                autoFocus: true
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
                value: formData.memberEmail,
                type: "email",
                id: "memberEmail",
                label: "\uC774\uBA54\uC77C",
                name: "memberEmail",
                autoComplete: "memberEmail",
                fullWidth: true,
                required: true,
                onChange: handleInputChange,
                placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694(@\uD615\uC2DD)"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
                value: formData.memberId,
                id: "memberId",
                label: "\uC544\uC774\uB514(\uD559\uBC88)",
                name: "memberId",
                autoComplete: "memberId",
                fullWidth: true,
                required: true,
                onChange: handleInputChange,
                placeholder: "\uD559\uBC88\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
                value: formData.memberPw,
                type: "password",
                id: "memberPw",
                label: "\uBE44\uBC00\uBC88\uD638",
                name: "memberPw",
                autoComplete: "memberPw",
                fullWidth: true,
                required: true,
                onChange: handleInputChange,
                placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
                value: formData.memberPhone,
                id: "memberPhone",
                label: "\uC804\uD654\uBC88\uD638",
                name: "memberPhone",
                autoComplete: "tel",
                fullWidth: true,
                required: true,
                onChange: handleInputChange,
                placeholder: "\uC804\uD654\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
              item: true,
              xs: 12,
              sm: 6,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
                value: formData.memberGen,
                id: "memberGen",
                label: "\uAE30\uC218",
                name: "memberGen",
                autoComplete: "memberGen",
                fullWidth: true,
                required: true,
                onChange: handleInputChange,
                placeholder: "24\uB144 \uAE30\uC900 35\uAE30"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
              item: true,
              xs: 12,
              sm: 6,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
                value: formData.memberMajor,
                id: "memberMajor",
                label: "\uD559\uACFC",
                name: "memberMajor",
                autoComplete: "memberMajor",
                required: true,
                fullWidth: true,
                onChange: handleInputChange,
                placeholder: "ex)\u3147\u3147\uD559\uACFC"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
            type: "submit",
            fullWidth: true,
            variant: "contained",
            sx: {
              mt: 3,
              mb: 2
            },
            children: "Sign Up"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            container: true,
            justifyContent: "flex-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
              item: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_15__["default"], {
                href: "/signin",
                variant: "body2",
                children: "\uC544\uC774\uB514\uAC00 \uC788\uB098\uC694? \uB85C\uADF8\uC778"
              })
            })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupTemp);

/***/ }),

/***/ "./src/hooks/sign/useSignup.ts":
/*!*************************************!*\
  !*** ./src/hooks/sign/useSignup.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var apis_sign_postSignup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/sign/postSignup */ "./src/apis/sign/postSignup.ts");



// 회원가입 관련 HOOK
const useSignup = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    memberId: "",
    memberEmail: "",
    memberPw: "",
    memberName: "",
    memberGen: 0,
    memberMajor: "",
    memberPhone: ""
  });

  // 이메일 형식 검사
  const isEmailValid = email => {
    // 이메일이 .net 또는 .com 으로 끝나는지 확인
    // some() : 하나라도 일치하면 true반환
    const validEndings = [".net", ".com"];
    const hasValidEnding = validEndings.some(ending => email.endsWith(ending));
    return hasValidEnding;
  };

  // 회원가입 폼이 제출될 때 호출
  const handleSubmit = async e => {
    e.preventDefault(); // 기본 제출 동작 막기

    try {
      const responseData = await (0,apis_sign_postSignup__WEBPACK_IMPORTED_MODULE_1__["default"])(formData, isEmailValid);

      // responseData가 undefined 아닌지 확인
      if (responseData && responseData.message) {
        const resultMessage = responseData.message;
        alert(resultMessage);
        navigate("/signin");
      }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSignup);

/***/ }),

/***/ "./src/pages/sign/signUpPage.tsx":
/*!***************************************!*\
  !*** ./src/pages/sign/signUpPage.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_css_intro_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/css/intro.css */ "./src/styles/css/intro.css");
/* harmony import */ var components_sign_SignupTemp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/sign/SignupTemp */ "./src/components/sign/SignupTemp.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const Signup = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "sign-wrapper2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(components_sign_SignupTemp__WEBPACK_IMPORTED_MODULE_2__["default"], {})
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);

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
//# sourceMappingURL=src_pages_sign_signUpPage_tsx.15bddb2e76934414872f.js.map