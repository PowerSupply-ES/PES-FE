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
// 공지사항 수정 API 요청
const fetchNotice = (uri, noticeId, noticeDetail, navigate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.patch(`${uri}${noticeId}`, noticeDetail, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
            alert("공지사항이 성공적으로 수정되었습니다!");
            navigate("/notice");
        }
    }
    catch (error) {
        if (error.response) {
            // 서버 응답이 있는 경우
            if (error.response.status === 403) {
                alert("권한이 없습니다");
            }
            else if (error.response.status === 404) {
                alert("해당 공지사항이 존재하지 않습니다");
            }
            else {
                alert(`수정 실패: ${error.response.status} ${error.response.statusText}`);
            }
        }
        else if (error.request) {
            // 요청이 이루어졌으나 응답이 없는 경우
            alert("수정 실패: 요청이 실패했습니다.");
        }
        else {
            // 설정 중 오류 발생
            alert(`수정 실패: ${error.message}`);
        }
    }
});
export default fetchNotice;
