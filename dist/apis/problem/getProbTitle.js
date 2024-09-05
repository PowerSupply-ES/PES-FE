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
// 문제 제목 get 요청
const getProbTitle = (problemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield axios.get(`/api2/problemtitle/${problemId}`, {
            withCredentials: true,
        });
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
});
export default getProbTitle;