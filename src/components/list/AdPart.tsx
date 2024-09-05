import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const AdPart:React.FC = () => {
  // 카카오 에드핏 광고
  // useRef훅이 div HTML 요소를 참조하기 때문에 HTMLDivElement를 타입으로 지정
  const scriptElement = useRef<HTMLDivElement | null>(null);

  // script 태그를 동적으로 추가
  useEffect(() => {
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

  return (
    <AdContainer>
      <div ref={scriptElement}>
        <ins
          className="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit="DAN-vGny0Q5scRDlw6pg"
          data-ad-width="728"
          data-ad-height="90"
        />
      </div>
    </AdContainer>
  );
};

export default AdPart;

const AdContainer = styled.div`
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
