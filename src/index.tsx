// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import "styles/css/Font.css";

// const rootElement = document.getElementById("root") as HTMLElement;
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <BrowserRouter>
//     {/* <React.StrictMode> */}
//     <App />
//     {/* </React.StrictMode> */}
//   </BrowserRouter>
// );



// 기존코드
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/css/Font.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root") 
);