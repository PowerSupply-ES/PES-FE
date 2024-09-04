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
// 공지사항 리스트 get API 요청
const getNoticeList = (setNoticeList) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const uri = "api/notice";
    try {
        const response = yield axios.get(uri);
        if (response.status === 204) {
            console.log("공지사항이 아직 없습니다!");
            setNoticeList([]); // 빈 배열로 설정
            return;
        }
        setNoticeList(response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) { //axios error인지 확인
            // 서버가 응답을 반환했지만 상태 코드가 오류를 나타내는 경우
            console.error("Axios 오류 발생:", (_a = error.response) === null || _a === void 0 ? void 0 : _a.status, (_b = error.response) === null || _b === void 0 ? void 0 : _b.statusText);
        }
        else if (error instanceof Error) { //js오류인지 확인
            // 요청이 서버로 전송되었지만 응답을 받지 못한 경우
            console.error("일반 오류 발생:", error.message);
        }
        else {
            console.error("알 수 없는 오류 발생:", error);
        }
    }
});
export default getNoticeList;
