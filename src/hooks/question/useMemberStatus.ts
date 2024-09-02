import { useEffect, useState } from "react";
import axios from "axios";

// 상단 사용자 정보 HOOK
const useMemberStatus = (): string | null  => {
  const [memberStatus, setMemberStatus] = useState<string | null>(null);

  const uri = "api/exp";
  const memberEmail = sessionStorage.getItem("memberEmail");

  useEffect(() => {
    const userInfo = async () => {


      fetch(`${uri}?memberEmail=${memberEmail}`, {
        method: "GET",
      })
        try {
          const response = await axios.get(`${uri}?memberEmail=${memberEmail}`);
          // 응답의 data를 바로 사용
          setMemberStatus(response.data.memberStatus);
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            // Axios의 에러 처리
            console.error(`데이터 가져오기 실패: ${error.response?.status} ${error.message}`);
          } else {
            // Axios 이외의 에러 처리
            console.error("데이터 가져오기 실패:", error);
          }
        }
    };

    userInfo();
  }, [memberEmail]);

  return memberStatus;
};

export default useMemberStatus;
