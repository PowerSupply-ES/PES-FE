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
// 재학생 rank GET 요청
const getJuniorRank = (memberGen) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const config = {
            withCredentials: true,
            params: {
                memberGen,
            },
        };
        const response = yield axios.get(`/api/rank/junior`, config);
        if (response.status !== 204) {
            return response.data;
        }
        return []; // 데이터가 없을 때 빈 배열 반환
    }
    catch (error) {
        console.log(error);
        return []; // 오류 발생 시 빈 배열 반환
    }
});
export default getJuniorRank;
