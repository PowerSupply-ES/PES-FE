import getUserDetail from "apis/manage/getUserDetail";
import { useState, useEffect } from "react";
import { MemberDetail } from "model/Store";

const useUserDetail = () => {
  const [memberData, setMemberData] = useState<MemberDetail | null>(null);

  useEffect(() => {
    getUserDetail(setMemberData);
  }, []);

  // TODO : 회원수정, 회원삭제 로직 추가하기

  return { memberData };
};
export default useUserDetail;
