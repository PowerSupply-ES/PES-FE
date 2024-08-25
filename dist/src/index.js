import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
// import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "styles/css/Font.css";
// 호환성 문제로 주석처리
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
ReactDOM.render(_jsx(BrowserRouter, { children: _jsx(App, {}) }), document.getElementById("root") //추가
);
