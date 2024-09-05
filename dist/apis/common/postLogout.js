var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
//로그아웃 api호출 함수
const postLogout = (navigate) => __awaiter(void 0, void 0, void 0, function* () {
    const uri = "/api/logout";
    try {
        const response = yield axios.post(uri, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        // 로컬 스토리지 클리어
        sessionStorage.clear();
        localStorage.clear();
        alert(response.data.message);
        navigate("/");
        window.location.reload(); // 페이지 새로 고침
    }
    catch (error) {
        // axios 에러인 경우
        if (axios.isAxiosError(error)) {
            if (error.response) {
                // 서버가 응답을 반환했지만 오류 상태 코드
                console.error("로그아웃 실패:", error.response.status, error.response.statusText);
                alert(`로그아웃 실패: 서버 응답 에러 (${error.response.status})`);
            }
            else if (error.request) {
                // 요청이 서버로 전송되었지만 응답을 받지 못한 경우
                console.error("로그아웃 실패: 요청이 실패했습니다.");
                alert("로그아웃 실패: 서버 응답 없음.");
            }
            else {
                // 요청 설정 중 오류 발생
                console.error("로그아웃 실패:", error.message);
                alert("로그아웃 실패: 요청 설정 에러.");
            }
        }
        else {
            // axios 외의 다른 일반적인 에러 처리
            console.error("로그아웃 실패 (일반 에러):", error.message);
            alert("로그아웃 실패: 알 수 없는 오류가 발생했습니다.");
        }
    }
});
export default postLogout;
