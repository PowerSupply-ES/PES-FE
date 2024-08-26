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
// 회원목록 api호출
const getUsersList = (setMemDate) => __awaiter(void 0, void 0, void 0, function* () {
    const uri = `api/admin/memberlist`;
    try {
        const res = yield axios.get(uri);
        const memList = res.data;
        setMemDate([...memList]);
    }
    catch (error) {
        console.error(error);
    }
    // TODO : 예외처리하기
});
export default getUsersList;
