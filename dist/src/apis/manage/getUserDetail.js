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
const getUserDetail = (setMemberData) => __awaiter(void 0, void 0, void 0, function* () {
    let url = new URL(window.location.href);
    let memberId = url.pathname.split("/")[2];
    const uri = `/api/admin/member/${memberId}`;
    try {
        const res = yield axios.get(uri);
        const memDetail = res.data;
        setMemberData(memDetail);
    }
    catch (error) {
        console.error(error);
    }
    // TODO : 예외처리하기
});
export default getUserDetail;
