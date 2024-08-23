// ===== 공용 함수 지정 =====

// Time에서 "T" 제거하여 표시하는 함수
export const transferTime = (time) => {
    if (!time) return ""; // 시간이 없는 경우 처리
    
    return time.replace("T", " ");
}

// 뒤로가기 함수
export const goBack = () =>{
    window.history.back();
}