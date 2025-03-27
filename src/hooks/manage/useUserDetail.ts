import { useState, useEffect } from "react";
import getUserDetail from "apis/manage/getUserDetail";
import { UserDetail } from "model/userType"; 

const useUserDetail = () => {
  const [userData, setUserData] = useState<UserDetail | null>(null);

  useEffect(() => {
    getUserDetail(setUserData);
  }, []);

  // TODO : 회원수정, 회원삭제 로직 추가하기

  return { userData };
};
export default useUserDetail;
