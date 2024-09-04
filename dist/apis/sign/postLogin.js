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
const postLogin = (formData) => __awaiter(void 0, void 0, void 0, function* () {
    const uri = "api/signin";
    // 로그인 요청 api
    try {
        const res = yield axios.post(uri, formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 401) {
                throw new Error("일치하는 정보가 없습니다");
            }
            else if (error.response) {
                throw new Error(`${error.response.status} ${error.response.statusText}`);
            }
        }
        throw new Error("네트워크 오류가 발생했습니다");
    }
});
export default postLogin;
