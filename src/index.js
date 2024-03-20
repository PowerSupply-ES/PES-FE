import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from 'components/main/ScrollToTop';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
