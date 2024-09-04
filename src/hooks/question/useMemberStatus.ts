import { useEffect, useState } from "react";
import axios from "axios";

// 상단 사용자 정보 HOOK
const useMemberStatus = () => {
  const [memberStatus, setMemberStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 로딩상태관리

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
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    if (memberEmail) {
      userInfo();
    } else {
      setLoading(false); // 이메일이 없을 경우도 로딩 완료
    }
  }, [memberEmail]);

  return { memberStatus, loading };
};

export default useMemberStatus;
