"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_main_mainPage_tsx"],{

/***/ "./src/assets/images/index.ts":
/*!************************************!*\
  !*** ./src/assets/images/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   img_backImage: () => (/* reexport default export from named module */ _backImg_webp__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   img_backImage_right: () => (/* reexport default export from named module */ _backImg_right_webp__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   img_main_2: () => (/* reexport default export from named module */ _main_2_webp__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   img_main_3: () => (/* reexport default export from named module */ _main_3_webp__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   img_main_4: () => (/* reexport default export from named module */ _main_4_webp__WEBPACK_IMPORTED_MODULE_4__)
/* harmony export */ });
/* harmony import */ var _backImg_right_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backImg_right.webp */ "./src/assets/images/backImg_right.webp");
/* harmony import */ var _backImg_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backImg.webp */ "./src/assets/images/backImg.webp");
/* harmony import */ var _main_2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main_2.webp */ "./src/assets/images/main_2.webp");
/* harmony import */ var _main_3_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main_3.webp */ "./src/assets/images/main_3.webp");
/* harmony import */ var _main_4_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main_4.webp */ "./src/assets/images/main_4.webp");
/* harmony import */ var _sign_logo_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign_logo.webp */ "./src/assets/images/sign_logo.webp");
// assets/images 디렉토리 export 관리







// export {default as img_fail_feed} from './fail_feedback.png';
// export {default as img_fail} from './fail.png';
// export {default as img_main_1} from './main_1.png';
// export {default as img_pass_feed} from './pass_feedback.png';
// export {default as img_pass} from './pass.png';
// export {default as img_probList} from './probList.png';
// export {default as img_solving} from './solving.png';
// export {default as img_solvingList} from './solvingList.png';

/***/ }),

/***/ "./src/components/main/MovingImage.tsx":
/*!*********************************************!*\
  !*** ./src/components/main/MovingImage.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images */ "./src/assets/images/index.ts");
/* harmony import */ var hooks_home_useMovingImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/home/useMovingImages */ "./src/hooks/home/useMovingImages.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





// RootState 임포트

// 홈화면 첫번째 슬라이딩 이미지 애니메이션
const MovingImage = () => {
  const {
    animationFinished
  } = (0,hooks_home_useMovingImages__WEBPACK_IMPORTED_MODULE_2__["default"])(); // 슬라이딩 HOOK
  const {
    status
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.sign); // redux에서 가져오기

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "content0",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: assets_images__WEBPACK_IMPORTED_MODULE_1__.img_backImage,
      className: "bg-img",
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: assets_images__WEBPACK_IMPORTED_MODULE_1__.img_backImage_right,
      className: "moving-img",
      alt: "Moving graphic showing animation",
      style: {
        opacity: `${animationFinished ? 1 : 0}`,
        transition: "opacity 1s ease-in-out"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "main_btn",
      style: {
        opacity: `${animationFinished ? 1 : 0}`,
        transition: "opacity 1s ease-in-out"
      },
      children: status ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
          href: "/list",
          className: "btn1",
          children: "\uBC14\uB85C\uAC00\uAE30"
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
          href: "/list",
          className: "btn1",
          children: "\uBC14\uB85C\uAC00\uAE30"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
          href: "/signin",
          className: "btn2",
          children: "\uB85C\uADF8\uC778"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovingImage);

/***/ }),

/***/ "./src/components/main/ScrollImage.tsx":
/*!*********************************************!*\
  !*** ./src/components/main/ScrollImage.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images */ "./src/assets/images/index.ts");
/* harmony import */ var hooks_home_useScrollImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/home/useScrollImages */ "./src/hooks/home/useScrollImages.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// 스크롤에 따른 홈화면 애니메이션 효과

const ScrollImage = () => {
  const {
    opacity2,
    opacity3,
    opacity4
  } = (0,hooks_home_useScrollImages__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "scroll_container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "content2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: assets_images__WEBPACK_IMPORTED_MODULE_1__.img_main_2,
        alt: "introduce Image1",
        className: "scroll-img",
        style: {
          opacity: opacity2,
          transition: "opacity 2s ease"
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "content3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: assets_images__WEBPACK_IMPORTED_MODULE_1__.img_main_3,
        alt: "introduce Image2",
        className: "scroll-img",
        style: {
          opacity: opacity3,
          transition: "opacity 3s ease"
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "content4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: assets_images__WEBPACK_IMPORTED_MODULE_1__.img_main_4,
        alt: "introduce Image3",
        className: "scroll-img",
        style: {
          opacity: opacity4,
          transition: "opacity 4s ease"
        }
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollImage);

/***/ }),

/***/ "./src/components/main/index.ts":
/*!**************************************!*\
  !*** ./src/components/main/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovingImage: () => (/* reexport safe */ _MovingImage__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ScrollImage: () => (/* reexport safe */ _ScrollImage__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _MovingImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingImage */ "./src/components/main/MovingImage.tsx");
/* harmony import */ var _ScrollImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollImage */ "./src/components/main/ScrollImage.tsx");
// components/main 디렉토리 export 관리



/***/ }),

/***/ "./src/hooks/home/useMovingImages.ts":
/*!*******************************************!*\
  !*** ./src/hooks/home/useMovingImages.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useMovingImages = () => {
  // 이미지 움직임(progress증가시키면서 움직이기)
  const [animationProgress, setAnimationProgress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  // 애니메이션 완료 여부
  const [animationFinished, setAnimationFinished] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // 페이지 로드될 때 애니메이션 효과를 주기 위한 useEffect 사용
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!animationFinished) {
      // 애니메이션 효과를 위해 setInterval 사용
      // setInterval : 일정 시간 간격으로 animationProgress를 업데이트
      const interval = setInterval(() => {
        // 현재 progress 상태를 가져옴
        const currentProgress = animationProgress;

        // progress를 0.1씩 증가
        const newProgress = currentProgress + 0.1;

        // 변경된 progress를 상태에 적용
        setAnimationProgress(newProgress);

        // progress가 거의 1에 도달했을 때 애니메이션 종료
        if (newProgress >= 0.99) {
          setAnimationFinished(true);
          clearInterval(interval); // 애니메이션 종료
        }
      });

      // 컴포넌트가 언마운트될 때 interval 정리
      return () => clearInterval(interval);
    }
  }, [animationProgress, animationFinished]);
  return {
    animationFinished
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMovingImages);

/***/ }),

/***/ "./src/hooks/home/useScrollImages.ts":
/*!*******************************************!*\
  !*** ./src/hooks/home/useScrollImages.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useScrollImages = () => {
  const [opacity2, setOpacity2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [opacity3, setOpacity3] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [opacity4, setOpacity4] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollRange = window.innerHeight / 2;

    // 스크롤범위 벗어난경우 투명도1
    const newOpacity2 = scrollPosition > scrollRange ? 1 : 0;
    const newOpacity3 = scrollPosition > scrollRange * 2 ? 1 : 0;
    const newOpacity4 = scrollPosition > scrollRange * 3 ? 1 : 0;
    setOpacity2(newOpacity2);
    setOpacity3(newOpacity3);
    setOpacity4(newOpacity4);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    opacity2,
    opacity3,
    opacity4
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScrollImages);

/***/ }),

/***/ "./src/pages/main/mainPage.tsx":
/*!*************************************!*\
  !*** ./src/pages/main/mainPage.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/main */ "./src/components/main/index.ts");
/* harmony import */ var styles_css_App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/css/App.css */ "./src/styles/css/App.css");
/* harmony import */ var styles_css_mainAnimation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/css/mainAnimation.css */ "./src/styles/css/mainAnimation.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





const MainPage = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "mainPage",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_main__WEBPACK_IMPORTED_MODULE_1__.MovingImage, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_main__WEBPACK_IMPORTED_MODULE_1__.ScrollImage, {})]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ }),

/***/ "./src/styles/css/App.css":
/*!********************************!*\
  !*** ./src/styles/css/App.css ***!
  \********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/css/mainAnimation.css":
/*!******************************************!*\
  !*** ./src/styles/css/mainAnimation.css ***!
  \******************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/images/backImg.webp":
/*!****************************************!*\
  !*** ./src/assets/images/backImg.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/backImg.16b46f89.webp";

/***/ }),

/***/ "./src/assets/images/backImg_right.webp":
/*!**********************************************!*\
  !*** ./src/assets/images/backImg_right.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/backImg_right.a2469fae.webp";

/***/ }),

/***/ "./src/assets/images/main_2.webp":
/*!***************************************!*\
  !*** ./src/assets/images/main_2.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/main_2.1a4d8bce.webp";

/***/ }),

/***/ "./src/assets/images/main_3.webp":
/*!***************************************!*\
  !*** ./src/assets/images/main_3.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/main_3.adab9384.webp";

/***/ }),

/***/ "./src/assets/images/main_4.webp":
/*!***************************************!*\
  !*** ./src/assets/images/main_4.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/main_4.be9a05c5.webp";

/***/ }),

/***/ "./src/assets/images/sign_logo.webp":
/*!******************************************!*\
  !*** ./src/assets/images/sign_logo.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/sign_logo.31bc8606.webp";

/***/ })

}]);
//# sourceMappingURL=src_pages_main_mainPage_tsx.55b3ba9d87613144064e.js.map