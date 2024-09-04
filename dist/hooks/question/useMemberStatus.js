var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState } from "react";
import axios from "axios";
// 상단 사용자 정보 HOOK
const useMemberStatus = () => {
    const [memberStatus, setMemberStatus] = useState(null);
    const uri = "api/exp";
    const memberEmail = sessionStorage.getItem("memberEmail");
    useEffect(() => {
        const userInfo = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios.get(`${uri}?memberEmail=${memberEmail}`);
                if (response.data && response.data.memberStatus) {
                    setMemberStatus(response.data.memberStatus);
                }
                else {
                    setMemberStatus(null); // 데이터가 없을 경우 null로 설정
                }
            }
            catch (error) {
                console.error("데이터 가져오기 실패:", error);
                setMemberStatus(null); // 에러 발생 시 null로 설정
            }
        });
        if (memberEmail) {
            userInfo();
        }
    }, [memberEmail]);
    return memberStatus;
};
export default useMemberStatus;
