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
import serverConfig from "config";
// 문제 get API
const getSoluProb = (problemId) => __awaiter(void 0, void 0, void 0, function* () {
    const serverUrl = serverConfig.serverUrl;
    const uri = `/api2/problemtitle/`;
    try {
        const response = yield axios.get(`${serverUrl}${uri}${problemId}`);
        return response.data;
    }
    catch (error) {
        // TODO : 예외처리 자세히
        console.error("데이터 가져오기 실패:", error);
    }
    console.log("problemId:", problemId);
});
export default getSoluProb;
