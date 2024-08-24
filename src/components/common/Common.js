import React from "react";
// ===== 공용 함수 지정 =====

// --- Time에서 "T" 제거하여 표시하는 함수
export const transferTime = (time) => {
    if (!time) return ""; // 시간이 없는 경우 처리
    
    return time.replace("T", " ");
}

// --- 뒤로가기 함수
export const goBack = () =>{
    window.history.back();
}

// --- '\n' 기준으로 줄바꿈하는 함수
export const renderNewlines = (text) => {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
}

// --- '\n\n' 기준으로 줄바꿈하는 함수
export const renderStyledNewlines = (text) => {
    const lines = text.split('\n\n'); // 각 줄을 분할
    return lines.map((line, index) => {
    
        return (
            <span key={index}>
                {line}
                <br />
            </span>
        );
    });
}