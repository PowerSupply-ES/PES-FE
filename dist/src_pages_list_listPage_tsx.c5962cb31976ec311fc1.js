"use strict";
(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_pages_list_listPage_tsx"],{

/***/ "./src/apis/list/getList.ts":
/*!**********************************!*\
  !*** ./src/apis/list/getList.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 문제 목록 불러오기 (get)
// TODO: 관리자 문제불러오기 타입은 SoluProb로
const getList = async (setList, location) => {
  // 조건에 따라 uri를 설정
  const uri = location.pathname === "/manageProb" ? `/api/admin/problemlist` : `/api/problemlist`;
  try {
    const config = {
      withCredentials: true
    };
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(uri, config);
    setList(response.data);
  } catch (error) {
    console.log("Failed to fetch list:", error);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getList);

/***/ }),

/***/ "./src/apis/ranking/getJuniorRank.ts":
/*!*******************************************!*\
  !*** ./src/apis/ranking/getJuniorRank.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 재학생 rank GET 요청
const getJuniorRank = async memberGen => {
  try {
    const config = {
      withCredentials: true,
      params: {
        memberGen
      }
    };
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/rank/junior`, config);
    if (response.status !== 204) {
      return response.data;
    }
    return []; // 데이터가 없을 때 빈 배열 반환
  } catch (error) {
    console.log(error);
    return []; // 오류 발생 시 빈 배열 반환
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getJuniorRank);

/***/ }),

/***/ "./src/apis/ranking/getSeniorRank.ts":
/*!*******************************************!*\
  !*** ./src/apis/ranking/getSeniorRank.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


// 재학생 등수 GET
const GetSeniorsRank = () => {
  const [newRank, setNewRank] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  // GET api 호출
  const getSeniorRank = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      const config = {
        withCredentials: true
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/rank/senior`, config);
      if (response.status !== 204) setNewRank(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getSeniorRank();
  }, [getSeniorRank]);
  return {
    newRank
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetSeniorsRank);

/***/ }),

/***/ "./src/components/list/AdPart.tsx":
/*!****************************************!*\
  !*** ./src/components/list/AdPart.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const AdPart = () => {
  // 카카오 에드핏 광고
  // useRef훅이 div HTML 요소를 참조하기 때문에 HTMLDivElement를 타입으로 지정
  const scriptElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // script 태그를 동적으로 추가
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://t1.daumcdn.net/kas/static/ba.min.js");
    script.setAttribute("charset", "utf-8");
    script.setAttribute("async", "true");

    // ref의 현재 값 변수에 저장
    const currentScriptElement = scriptElement.current;
    if (currentScriptElement) {
      currentScriptElement.appendChild(script);
    }

    // cleanup 함수 -  불필요한 script태그
    return () => {
      if (currentScriptElement) {
        currentScriptElement.removeChild(script);
      }
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AdContainer, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      ref: scriptElement,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ins", {
        className: "kakao_ad_area",
        style: {
          display: "none"
        },
        "data-ad-unit": "DAN-vGny0Q5scRDlw6pg",
        "data-ad-width": "728",
        "data-ad-height": "90"
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdPart);
const AdContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  align-items: center;
  background-color: #272727;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 20px 0;
  margin: auto;
  margin-bottom: 48px;
`;

/***/ }),

/***/ "./src/components/list/ListItem.tsx":
/*!******************************************!*\
  !*** ./src/components/list/ListItem.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var styles_styledComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/styledComponent */ "./src/styles/styledComponent/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



// import Button from "@mui/material/Button";


// RootState 임포트

const ListItem = props => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const {
    memberStatus
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.user); // redux에서 가져오기

  // 해당 문제로 이동 메서드
  const goToProb = answerId => {
    // problemId 저장
    const problemId = props.pid.toString();
    sessionStorage.setItem("problemId", problemId);
    if (location.pathname === "/manageProb") {
      // 관리자 페이지에서는 probDetail로 이동
      navigate(`/manageProb/${problemId}`);
    } else if (answerId) {
      navigate(`/question/${props.answerId}`);
    } else {
      navigate(`/problem/${props.pid}`);
    }
  };

  //추가 by성임
  // status가 "재학생"일 때는 props.state 값을 "success"로 설정,
  // 그 외에는 props.state 값 그대로 사용
  const state = memberStatus === "재학생" || memberStatus === "관리자" ? "success" : props.state;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(styles_styledComponent__WEBPACK_IMPORTED_MODULE_1__.StyledListItem, {
    state: state,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "problem_id",
        onClick: () => {
          goToProb(props.answerId);
        },
        children: props.pid
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "problem_title",
        onClick: () => {
          goToProb(props.answerId);
        },
        children: props.ptitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "grade",
        children: ["\uC810\uC218 ", props.grade]
      }), location.pathname !== "/manageProb" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        className: "button",
        onClick: () => navigate(`/solution/${props.pid}`),
        disabled: state === null // state가 null일 때 버튼 비활성화
        ,
        children: "\uD480\uC774\uBCF4\uAE30"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./src/components/list/index.ts":
/*!**************************************!*\
  !*** ./src/components/list/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdPart: () => (/* reexport safe */ _AdPart__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ListItem: () => (/* reexport safe */ _ListItem__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _AdPart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdPart */ "./src/components/list/AdPart.tsx");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItem */ "./src/components/list/ListItem.tsx");
// components/list 디렉토리 export 관리



/***/ }),

/***/ "./src/components/problem/ProblemList.tsx":
/*!************************************************!*\
  !*** ./src/components/problem/ProblemList.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/list */ "./src/components/list/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



// 문제lit 컴포넌트
const ProblemList = _ref => {
  let {
    problmeList
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "problem_wrapper",
    children: problmeList.map(problem => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_list__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
      pid: problem.problemId,
      ptitle: problem.problemTitle,
      grade: problem.problemScore,
      answerId: problem.answerId,
      state: problem.answerState
      // (memberStatus==="재학생" || memberStatus==="관리자")
      //     ? "solved"
      //     : problem.answerState
    }, problem.problemId))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProblemList);

/***/ }),

/***/ "./src/components/ranking/JuniorRank.tsx":
/*!***********************************************!*\
  !*** ./src/components/ranking/JuniorRank.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RankingItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RankingItem */ "./src/components/ranking/RankingItem.tsx");
/* harmony import */ var hooks_rank_useJuniorRank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/rank/useJuniorRank */ "./src/hooks/rank/useJuniorRank.ts");
/* harmony import */ var styles_styledComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/styledComponent */ "./src/styles/styledComponent/index.ts");
/* harmony import */ var _mui_joy_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/joy/Select */ "./node_modules/@mui/joy/Select/Select.js");
/* harmony import */ var _mui_joy_Option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/joy/Option */ "./node_modules/@mui/joy/Option/Option.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const JuniorRank = () => {
  // 신입생 순위 get Api 호출
  const {
    newRank,
    handleSelectChange,
    memberGen
  } = (0,hooks_rank_useJuniorRank__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(styles_styledComponent__WEBPACK_IMPORTED_MODULE_2__.StyledListPage, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_joy_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: "35\uAE30",
      className: "select_box",
      value: memberGen.toString(),
      onChange: e => handleSelectChange,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_joy_Option__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: "35",
        children: "35\uAE30"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(styles_styledComponent__WEBPACK_IMPORTED_MODULE_2__.RankingItemStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "ranking_id",
        children: "\uC21C\uC704"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "member_name",
        children: "\uC774\uB984"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "score",
        children: "\uC810\uC218"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "ranking-list",
      children: newRank.map((rank, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RankingItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
        rank: rank.rank,
        memberName: rank.memberName,
        score: `${rank.score}점`
      }, index))
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JuniorRank);

/***/ }),

/***/ "./src/components/ranking/RankingItem.tsx":
/*!************************************************!*\
  !*** ./src/components/ranking/RankingItem.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_styledComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/styledComponent */ "./src/styles/styledComponent/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



// 랭킹 요소 컴포넌트
const RankingItem = _ref => {
  let {
    rank,
    memberName,
    score,
    style
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(styles_styledComponent__WEBPACK_IMPORTED_MODULE_1__.StyledRankingItem, {
    style: style,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "ranking_id",
      children: rank
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "member_name",
      children: memberName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "score",
      children: score
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RankingItem);

/***/ }),

/***/ "./src/components/ranking/SeniorRank.tsx":
/*!***********************************************!*\
  !*** ./src/components/ranking/SeniorRank.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RankingItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RankingItem */ "./src/components/ranking/RankingItem.tsx");
/* harmony import */ var apis_ranking_getSeniorRank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apis/ranking/getSeniorRank */ "./src/apis/ranking/getSeniorRank.ts");
/* harmony import */ var styles_styledComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/styledComponent */ "./src/styles/styledComponent/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





const SeniorRank = () => {
  // 재학생 순위 get Api 호출
  const {
    newRank
  } = (0,apis_ranking_getSeniorRank__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(styles_styledComponent__WEBPACK_IMPORTED_MODULE_3__.StyledListPage, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(styles_styledComponent__WEBPACK_IMPORTED_MODULE_3__.RankingItemStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "ranking_id",
        children: "\uC21C\uC704"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "member_name",
        children: "\uC774\uB984"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "score",
        children: "\uC810\uC218"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "ranking-list",
      children: newRank.map((rank, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RankingItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        rank: rank.rank,
        memberName: rank.memberName,
        score: `${rank.score}개`
      }, index))
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeniorRank);

/***/ }),

/***/ "./src/components/ranking/index.ts":
/*!*****************************************!*\
  !*** ./src/components/ranking/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JuniorRank: () => (/* reexport safe */ _JuniorRank__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   SeniorRank: () => (/* reexport safe */ _SeniorRank__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _JuniorRank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JuniorRank */ "./src/components/ranking/JuniorRank.tsx");
/* harmony import */ var _RankingItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RankingItem */ "./src/components/ranking/RankingItem.tsx");
/* harmony import */ var _SeniorRank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SeniorRank */ "./src/components/ranking/SeniorRank.tsx");
// components/ranking 디렉토리 export 관리




/***/ }),

/***/ "./src/hooks/list/useListHook.ts":
/*!***************************************!*\
  !*** ./src/hooks/list/useListHook.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_list_getList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/list/getList */ "./src/apis/list/getList.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");




// 문제 list 호출 HOOK
const useListHook = () => {
  const {
    memberStatus
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user) || ''; // redux에서 가져오기

  const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("junior");
  const [juniorButtonVariant, setJuniorButtonVariant] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("solid");
  const [seniorButtonVariant, setSeniorButtonVariant] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("soft");
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,apis_list_getList__WEBPACK_IMPORTED_MODULE_1__["default"])(setList, location);
  }, [memberStatus, location]);

  // junior, senior 선택에 따른 버튼상태 변화
  const handleOption = option => {
    setSelectedOption(option);
    if (option === "junior") {
      setJuniorButtonVariant("solid");
      setSeniorButtonVariant("soft");
    } else if (option === "senior") {
      setJuniorButtonVariant("soft");
      setSeniorButtonVariant("solid");
    }
  };
  return {
    list,
    selectedOption,
    juniorButtonVariant,
    seniorButtonVariant,
    handleOption
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useListHook);

/***/ }),

/***/ "./src/hooks/rank/useJuniorRank.ts":
/*!*****************************************!*\
  !*** ./src/hooks/rank/useJuniorRank.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_ranking_getJuniorRank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis/ranking/getJuniorRank */ "./src/apis/ranking/getJuniorRank.ts");


// 신입생 등수 GET
const useJuniorRank = () => {
  const [memberGen, setMemberGen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(35); // memberGen 35기로 기본 설정
  const [newRank, setNewRank] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const handleSelectChange = e => {
    setMemberGen(parseInt(e.target.value, 10));
  };

  // get API 호출
  const fetchNewRank = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    if (memberGen) {
      // memberGen이 유효할 때만 호출
      const data = await (0,apis_ranking_getJuniorRank__WEBPACK_IMPORTED_MODULE_1__["default"])(memberGen);
      setNewRank(data);
    }
  }, [memberGen]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchNewRank();
  }, [fetchNewRank]);
  return {
    newRank,
    handleSelectChange,
    memberGen
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useJuniorRank);

/***/ }),

/***/ "./src/pages/list/listPage.tsx":
/*!*************************************!*\
  !*** ./src/pages/list/listPage.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ranking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ranking */ "./src/components/ranking/index.ts");
/* harmony import */ var components_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/list */ "./src/components/list/index.ts");
/* harmony import */ var styles_styledComponent_ListPage_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/styledComponent/ListPage-styled */ "./src/styles/styledComponent/ListPage-styled.tsx");
/* harmony import */ var hooks_list_useListHook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/list/useListHook */ "./src/hooks/list/useListHook.ts");
/* harmony import */ var components_problem_ProblemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/problem/ProblemList */ "./src/components/problem/ProblemList.tsx");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








// Props 타입(현재는 props가 없으므로 빈 객체로 정의)

const ListPage = () => {
  const {
    list,
    selectedOption,
    juniorButtonVariant,
    seniorButtonVariant,
    handleOption
  } = (0,hooks_list_useListHook__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_list__WEBPACK_IMPORTED_MODULE_2__.AdPart, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(styles_styledComponent_ListPage_styled__WEBPACK_IMPORTED_MODULE_3__.StyledListPage, {
      style: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "list_container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "container_header",
          children: "\uD83D\uDDA5\uFE0F \uBB38\uC81C"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_problem_ProblemList__WEBPACK_IMPORTED_MODULE_5__["default"], {
          problmeList: list
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "ranking_container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "container_header",
          children: "\uD83C\uDFC6 \uB7AD\uD0B9"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "student_container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: `student_button ${selectedOption === "junior" ? "student_button_active" : ""}`,
            color: "primary",
            size: "large",
            variant: juniorButtonVariant,
            onClick: () => handleOption("junior"),
            sx: {
              minWidth: "fit-content"
            },
            children: "\uC2E0\uC785\uC0DD"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: `student_button ${selectedOption === "senior" ? "student_button_active" : ""}`,
            color: "primary",
            size: "large",
            variant: seniorButtonVariant,
            onClick: () => handleOption("senior"),
            sx: {
              minWidth: "fit-content"
            },
            children: "\uC7AC\uD559\uC0DD"
          })]
        }), selectedOption === "junior" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_ranking__WEBPACK_IMPORTED_MODULE_1__.JuniorRank, {}), selectedOption === "senior" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_ranking__WEBPACK_IMPORTED_MODULE_1__.SeniorRank, {})]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListPage);

/***/ }),

/***/ "./src/styles/styledComponent/ListItem-styled.tsx":
/*!********************************************************!*\
  !*** ./src/styles/styledComponent/ListItem-styled.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyledListItem: () => (/* binding */ StyledListItem)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  .container {
    display: flex;
    flex-direction: row;
    height: fit-content;
    min-width: fit-content;
    align-items: center;
    margin: auto;
    padding: 8px 16px 8px 0px;
    border-radius: 8px;

    background-color: ${props => props.state === null ? "#DEDEDE" : props.state === "comment" ? "rgba(243, 242, 242, 0.737)" : props.state === "question" ? "rgba(243, 242, 242, 0.737)" : "white"};
    transition: background-color 0.3s; 
    &:hover {
      background-color: ${props => props.state === null ? "#DEDEDE" : "rgba(243, 242, 242, 0.737)"};
    }
  }

  .problem_id {
    width: 100px;
    height: 34px;
    color: ${props => props.state === "success" ? "#04CA00" : props.state === "fail" ? "#FF8412" : "black"};
    font-size: 18px;
    text-align: center;
    line-height: 34px;
  }

  .problem_title {
    flex: 1;
    font-size: 20px;
    text-align: left;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }

    color: #000000;
    opacity: 70%;
  }

  .grade {
    height: 34px;
    font-size: 16px;
    margin-right: 20px;
    line-height: 34px;
    font-weight: bold;
    color: #000000;
    opacity: 60%;
  }

  .button {
    width: fit-content;
    min-width: fit-content;
    height: fit-content;    
    padding: 7px 30px;
    box-shadow: 1px 1px #ccc9c9;

    color: ${props => props.state === "success" || props.state === "fail" ? "white" : "#56565692"};

    background-color: ${props => props.state === "success" ? "rgba(109, 99, 228, 0.8)" : props.state === "fail" ? "rgba(244, 117, 117, 0.8)" :
// 문제를 푼상태는 버튼 흰색(comment이나 question)
props.state === "comment" || "question" ? "white" :
// : props.state === null ? "#d6d6d6cc"
// 그외는 회색
0};
    &:hover {
      background-color: ${props => props.state === "success" ? "rgba(109, 99, 228, 1.0)" : props.state === "fail" ? "rgba(244, 117, 117, 1.0)" : ""};
    }
    border-radius: 8px;
    font-size: 17px;
    font-weight: bold;

    text-align: center;
    border: ${props => props.state === "success" || props.state === "fail" ? "none" : props.state === null ? "#d6d6d6cc" : "2px solid #DEDEDE"};
    transition: background-color 0.3s;
    margin-right: 14px;
    pointer-events: ${props => props.state === "success" || props.state === "fail" ? "auto" : "none"};
  }
`;

/***/ }),

/***/ "./src/styles/styledComponent/ListPage-styled.tsx":
/*!********************************************************!*\
  !*** ./src/styles/styledComponent/ListPage-styled.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RankingItemStyled: () => (/* binding */ RankingItemStyled),
/* harmony export */   StyledListPage: () => (/* binding */ StyledListPage)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


// List페이지 스타일
const StyledListPage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  
  .list_wrapper {
    display: flex;
    
  }
  .list_container {
    margin-right: 5%;
    width: 60%;
  }

  .ranking_container {
    width: 20%;
    min-width: fit-content;

  }

  .container_header {
    margin-bottom: 20px;
    font-weight: bold;
    align-items: center;
    font-size: 30px;
    display: flex;
    width: 100%;
  }

  .student_container {
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;
    font-size: 18px;
    display: flex;
    width: 100%;
  }

  .student_button {
    width: 48%;
    height: fit-content;
    padding: 7px 30px;
    box-shadow: rgb(204, 201, 201) 1px 1px;
    border-radius: 8px;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    font-family: "Pretendard-Regular";
  }

  /* 클릭된 버튼 스타일 */
  .student_button_active {
    background-color: #cccccc;
    color: #fff;
  }

  .select_box {
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    height: 40px;
    display: flex;
    width: 50%;
  }

  .ranking-list {
    max-height: 400px;
    overflow-y: auto;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }
  .problem_wrapper {
    height: fit-content;
    background-color: white;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }
`;

// 랭킹 제목 스타일
const RankingItemStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-bottom: 1px;
  padding: 0 10px;
  align-items: center;
  font-size: 18px;
  height: 40px;
  display: flex;
  background-color: white;
  width: 100%;
  border-radius: 8px;

  .ranking_id {
    width: 20%;
    margin-right: 2px;
  }
  .member_name {
    text-align: left;
    flex: 1 1 0%;
  }
  .score {
    width: 20%;
  }
`;

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

/***/ }),

/***/ "./src/styles/styledComponent/Question-styled.tsx":
/*!********************************************************!*\
  !*** ./src/styles/styledComponent/Question-styled.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyledQuestion: () => (/* binding */ StyledQuestion)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledQuestion = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  .code_question_container {
    width: 95%;
    display: flex;
    justify-content: center;
    gap: 5%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .code_container {
    width: 40%;
    height: 564px;
    font-size: 20px;
  }
  .question_container {
    width: 40%;
  }
  .question_layout {
    width: 100%;
  }
  .question_header {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    margin: 20px auto 0;
  }
  .question_id {
    width: 80px;
    padding: 8px 0;
    height: fit-contents;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #325cc7;
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
    border-radius: 50px;
    background-color: #ffffff;
    box-shadow: 1px 3px #ccc9c9;
  }
  .header_title {
    font-size: 20px;
    font-weight: bold;
    flex: 1;
    text-align: left;
  }
  .answer_input {
    width: 100%;
    height: 181px;
    font-size: 20px;
    display: flex;
    background-color: #ffffff;
    border: solid #ffffff;
    border-radius: 20px;
    box-shadow: 1px 3px #ccc9c9;
    overflow-wrap: break-word;
    padding: 4px 12px;
  }
  .answer_input.display {
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
    /* 내용 초과시 스크롤바 */
    overflow-y: auto;
  }

  /* 스크롤바 */
  .answer_input.display::-webkit-scrollbar {
    width: 10px;
  }
  .answer_input.display::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .answer_input.display::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  /* 스크롤바 */
  .answer_input::-webkit-scrollbar {
    width: 10px;
  }
  .answer_input::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .answer_input::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  .button_group {
    display: flex;
  }
  .button {
    width: fit-content;
    height: fit-content;
    padding: 8px 32px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 3px #ccc9c9;
  }
  .button.answer {
    background-color: #ac6dfd;
    margin: 60px auto;
    &:hover {
      background-color: #9747ff;
    }
  }
  .btn_container {
    display: flex;
    justify-content: center;

    width: 80%;
    margin: 28px auto;
  }

  .button_problem {
    width: fit-content;
    height: fit-content;
    position: relative;
    padding: 8px 20px;
    color: white;
    font-weight: bold;
    border-radius: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 3px #ccc9c9;

    background-color: #3b3b3b;
    font-size: 16px;
  }
  .button_problem:hover {
    background-color: #3b3b3b;
    opacity: 80%;
  }
  .button_solution {
    width: fit-content;
    height: fit-content;
    padding: 8px 20px;
    color: white;
    font-weight: bold;
    border-radius: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 3px #ccc9c9;

    background-color: rgba(109, 99, 228, 0.6);
    margin-left: 20px;
    font-size: 16px;
  }
  .button_solution:hover {
    background-color: rgba(109, 99, 228, 0.8);
  }
  /* feedback (comment) */
  .feedback_section {
    width: 80%;
    justify-content: space-between;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
  }
  .feedback_waiting_bar {
    width: 60%;
    margin: 100px auto;
    padding: 12px 0;
    background-color: rgba(109, 99, 228, 0.6);
    color: #ffffff;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 1px 3px #ccc9c9;

    cursor: pointer;
  }
  .feedback_container {
    margin-top: 88px;
    width: 45%;
  }
  .feedback_result_pass,
  .feedback_result_fail {
    width: 100px;
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .feedback_result_pass {
    color: #04ca00;
  }
  .feedback_result_fail {
    color: rgba(244, 117, 117, 0.9);
  }
  .feedback_index {
    width: fit-content;
    height: fit-content;
    padding: 8px 24px;
    border-radius: 50px;
    text-align: center;
    // background-color: #9747FF; opacity:60%;
    background-color: #3b3b3b;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
  }
  .feedback_writer {
    margin-left: 20px;
    font-size: 20px;
    color: #3e3e3e;
    font-weight: bold;
  }
  .feedback_content {
    width: 100%;
    font-size: 20px;
    background-color: #ffffff;
    border: solid #ffffff;
    border-radius: 20px;
    box-shadow: 1px 3px #ccc9c9;
    overflow-wrap: break-word;
    margin-top: 10px;
    color: #3e3e3e;
  }
  .feed_section {
    width: 40%;
  }
  .feedback_content.input {
    height: 270px;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
  }
  .feedback_content.display {
    height: 250px;
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
    /* 내용 초과시 스크롤바 */
    overflow-y: auto;
  }

  .feedback_content.display::-webkit-scrollbar {
    width: 10px;
  }
  .feedback_content.display::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .feedback_content.display::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  // 수정하기
  .feedback_content::-webkit-scrollbar {
    width: 10px;
  }
  .feedback_content::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .feedback_content::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  .feedback_select_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button_container {
    width: fit-content;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 40px 0 40px;
  }
  .select_button {
    font-size: 36px;
    font-weight: bold;
    cursor: pointer;
  }
  .select_button.pass {
    color: ${props => props.isSelected ? "rgba(4, 202, 0, 1)" : "rgba(4, 202, 0, 0.6)"};
    &:hover {
      color: rgba(4, 202, 0, 1);
    }
    margin-right: 20px;
  }
  .select_button.fail {
    color: ${props => props.isSelected ? "rgba(244, 117, 117, 1)" : "rgba(244, 117, 117, 0.6)"};
    &:hover {
      color: rgba(244, 117, 117, 1);
    }
  }
  .select_comment {
    font-size: 20px;
    color: #6f6f6f;
  }
  .feedback_button {
    width: 100%;
    height: fit-content;
    padding: 10px 0;
    border: solid 1px rgba(109, 99, 228, 0.6);
    border-radius: 60px;
    background-color: rgba(109, 99, 228, 0.6);
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
  }
  .feedback_button:hover {
    background-color: rgba(109, 99, 228, 1);
  }

  .result_container > p {
    color: #665f5f;
    opacity: 60%;
  }
  .result.success {
    width: 70%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 120px auto 10px;
    padding: 12px 0;

    // background-color: #04ca00; opacity:57%;
    background-color: #0025cae0;
    opacity: 57%;
    color: #ffffff;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 1px 3px #ccc9c9;
    cursor: pointer;
    &:hover {
      background-color: #0025cae0;
      opacity: 70%;
    }
  }
  .result.fail {
    width: 70%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 120px auto 10px;
    padding: 12px 0;

    background-color: rgba(244, 117, 117, 0.8);
    color: #ffffff;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 1px 3px #ccc9c9;

    cursor: pointer;
  }
  .result.fail:hover {
    background-color: rgba(244, 117, 117, 1);
  }
  .loading {
    height: 1500px;
  }

  .dropdown_content {
    background-color: #fefdfd;
    border: 2px solid #c8c8c8;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin-right: 0;
    padding: 40px 20px;
    position: absolute;
    top: 40px;
    right: -10px;

    width: 520px;
    min-width: 200px;
    z-index: 999;
    color: black;

    // 글자 튀어나옴 방지_ by성임
    word-break: break-all;
  }

  .dropdown_content > .content {
    text-align: left;
  }

  .sample_inputs {
    text-align: left;
  }
  .sample_outputs {
    text-align: left;
  }
`;

/***/ }),

/***/ "./src/styles/styledComponent/RankingItem-styled.tsx":
/*!***********************************************************!*\
  !*** ./src/styles/styledComponent/RankingItem-styled.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyledRankingItem: () => (/* binding */ StyledRankingItem)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


// 랭킹 요소 스타일
const StyledRankingItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-bottom: 1px;
  align-items: center;
  font-size: 18px;
  height: 40px;
  display: flex;
  background-color: white;
  width: 100%;
  border-radius: 8px;

  .ranking_id {
    width: 20%;
  }
  .member_name {
    text-align: left;
    flex: 1 1 0%;
  }
  .score {
    width: 20%;
    min-width: fit-content;
  }
`;

/***/ }),

/***/ "./src/styles/styledComponent/index.ts":
/*!*********************************************!*\
  !*** ./src/styles/styledComponent/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RankingItemStyled: () => (/* reexport safe */ _ListPage_styled__WEBPACK_IMPORTED_MODULE_1__.RankingItemStyled),
/* harmony export */   StyledListItem: () => (/* reexport safe */ _ListItem_styled__WEBPACK_IMPORTED_MODULE_0__.StyledListItem),
/* harmony export */   StyledListPage: () => (/* reexport safe */ _ListPage_styled__WEBPACK_IMPORTED_MODULE_1__.StyledListPage),
/* harmony export */   StyledRankingItem: () => (/* reexport safe */ _RankingItem_styled__WEBPACK_IMPORTED_MODULE_4__.StyledRankingItem)
/* harmony export */ });
/* harmony import */ var _ListItem_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem-styled */ "./src/styles/styledComponent/ListItem-styled.tsx");
/* harmony import */ var _ListPage_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListPage-styled */ "./src/styles/styledComponent/ListPage-styled.tsx");
/* harmony import */ var _Problem_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Problem-styled */ "./src/styles/styledComponent/Problem-styled.tsx");
/* harmony import */ var _Question_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Question-styled */ "./src/styles/styledComponent/Question-styled.tsx");
/* harmony import */ var _RankingItem_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RankingItem-styled */ "./src/styles/styledComponent/RankingItem-styled.tsx");
// styles/styledComponent 디렉토리 export 관리



// export { Container, ProblemId, ProblemTitle, Grade, Button } from './ProblemItem-styled';  // 삭제예정



/***/ })

}]);
//# sourceMappingURL=src_pages_list_listPage_tsx.c5962cb31976ec311fc1.js.map