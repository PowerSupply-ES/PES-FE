import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'components/main/ScrollToTop';
import "./styles/css/Font.css";

// 호환성 문제로 주석처리
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
ReactDOM.render(
  <BrowserRouter>
    {/* 렌더링 2번일어나서 주석처리 */}
    {/* <React.StrictMode> */} 
      <ScrollToTop/>
      <App />
    {/* </React.StrictMode> */}

  </BrowserRouter>,
    document.getElementById('root') //추가

);

