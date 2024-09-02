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
            var _a;
            fetch(`${uri}?memberEmail=${memberEmail}`, {
                method: "GET",
            });
            try {
                const response = yield axios.get(`${uri}?memberEmail=${memberEmail}`);
                // 응답의 data를 바로 사용
                setMemberStatus(response.data.memberStatus);
            }
            catch (error) {
                if (axios.isAxiosError(error)) {
                    // Axios의 에러 처리
                    console.error(`데이터 가져오기 실패: ${(_a = error.response) === null || _a === void 0 ? void 0 : _a.status} ${error.message}`);
                }
                else {
                    // Axios 이외의 에러 처리
                    console.error("데이터 가져오기 실패:", error);
                }
            }
        });
        userInfo();
    }, [memberEmail]);
    return memberStatus;
};
export default useMemberStatus;
