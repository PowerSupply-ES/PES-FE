import { useEffect, useState } from "react";
import axios from "axios";

// 상단 사용자 정보 HOOK
const useMemberStatus = (): string | null => {
  const [memberStatus, setMemberStatus] = useState<string | null>(null);

  const uri = "api/exp";
  const memberEmail = sessionStorage.getItem("memberEmail");

  useEffect(() => {
    const userInfo = async () => {
      try {
        const response = await axios.get(`${uri}?memberEmail=${memberEmail}`);
        if (response.data && response.data.memberStatus) {
          setMemberStatus(response.data.memberStatus);
        } else {
          setMemberStatus(null); // 데이터가 없을 경우 null로 설정
        }
      } catch (error: unknown) {
        console.error("데이터 가져오기 실패:", error);
        setMemberStatus(null); // 에러 발생 시 null로 설정
      }
    };

    if (memberEmail) {
      userInfo();
    }
  }, [memberEmail]);

  return memberStatus;
};

export default useMemberStatus;
