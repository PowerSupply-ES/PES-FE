import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { useRef, useEffect } from "react";
import "styles/css/App.css";
const AdPart = () => {
    //카카오 에드핏 광고
    const scriptElement = useRef(null);
    // script 태그를 동적으로 추가
    useEffect(() => {
        var _a;
        const script = document.createElement("script");
        script.setAttribute("src", "https://t1.daumcdn.net/kas/static/ba.min.js");
        script.setAttribute("charset", "utf-8");
        script.setAttribute("async", "true");
        (_a = scriptElement.current) === null || _a === void 0 ? void 0 : _a.appendChild(script);
    }, []);
    return (_jsx(AdContainer, { children: _jsx("div", { ref: scriptElement, children: _jsx("ins", { className: "kakao_ad_area", style: { display: "none" }, "data-ad-unit": "DAN-vGny0Q5scRDlw6pg", "data-ad-width": "728", "data-ad-height": "90" }) }) }));
};
export default AdPart;
const AdContainer = styled.div `
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
