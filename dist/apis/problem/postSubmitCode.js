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
// 코드 제출 post 요청
const postSubmitCode = (request, problemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.post(`/api2/submit/${problemId}`, {
            code: request,
            problemId: problemId,
        });
        return { data: response.data, status: response.status };
    }
    catch (error) {
        console.log(error);
        // error가 AxiosError인지 확인
        if (axios.isAxiosError(error)) {
            return { status: error.response ? error.response.status : 500 };
        }
        else {
            // 예상하지 못한 다른 에러의 경우
            return { status: 500 };
        }
    }
});
export default postSubmitCode;
