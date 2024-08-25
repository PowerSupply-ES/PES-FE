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
// 내 정보 GET 요청
const getMyInfo = (setMemberData) => __awaiter(void 0, void 0, void 0, function* () {
    const uri = "/api/mypage/information";
    try {
        const response = yield axios.get(uri);
        setMemberData(response.data);
    }
    catch (error) {
        if (error.response) {
            // 서버가 응답을 반환했지만 상태 코드가 오류를 나타내는 경우
            console.error("데이터 가져오기 실패:", error.response.status, error.response.statusText);
        }
        else if (error.request) {
            // 요청이 서버로 전송되었지만 응답을 받지 못한 경우
            console.error("데이터 가져오기 실패: 요청이 실패했습니다.");
        }
        else {
            // 요청 설정 중 오류 발생
            console.error("데이터 가져오기 실패:", error.message);
        }
    }
});
export default getMyInfo;
