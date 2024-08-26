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
// 풀이 get API
const getSoluList = (problemId) => __awaiter(void 0, void 0, void 0, function* () {
    const uri = "../api/answerlist/";
    try {
        const response = yield axios.get(`${uri}${problemId}`);
        console.log("서버응답:", response.data);
        return response.data;
    }
    catch (error) {
        console.error("데이터 가져오기 실패:", error);
    }
});
export default getSoluList;
