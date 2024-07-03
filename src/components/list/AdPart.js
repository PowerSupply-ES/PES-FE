import styled from "styled-components";
import {useRef, useEffect} from "react";

import '../../styles/css/App.css';


const AdContainer = styled.div`
    display:flex;
    align-items: center;
    background-color: #272727;
    justify-content:center;
    width:100%;
    height: 90px;
    padding:20px 0;
    margin: auto;
    margin-bottom: 48px;
`

const AdPart = () => {
    //카카오 에드핏 광고
    const scriptElement = useRef(null);

    // script 태그를 동적으로 추가
    useEffect(() => {
        const script = document.createElement("script");
        script.setAttribute(
        "src",
        "https://t1.daumcdn.net/kas/static/ba.min.js"
        );
        script.setAttribute(
        "charset",
        "utf-8"
        );
        script.setAttribute("async", "true");
        scriptElement.current?.appendChild(script);
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