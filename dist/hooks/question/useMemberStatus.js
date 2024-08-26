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
function useMemberStatus({ children }) {
    const [memberStatus, setMemberStatus] = useState(null);
    const uri = "api/exp";
    const memberEmail = sessionStorage.getItem("memberEmail");
    useEffect(() => {
        const userInfo = () => __awaiter(this, void 0, void 0, function* () {
            fetch(`${uri}?memberEmail=${memberEmail}`, {
                method: "GET",
            })
                .then((response) => {
                if (!response.ok) {
                    console.log("서버응답:", response);
                    throw new Error(`데이터 가져오기 실패: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
                .then((data) => {
                setMemberStatus(data.memberStatus);
            })
                .catch((error) => {
                console.error("데이터 가져오기 실패:", error);
            });
        });
        userInfo();
    }, []);
    return children(memberStatus);
}
export default useMemberStatus;
