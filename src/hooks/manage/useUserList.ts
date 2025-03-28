import { useEffect, useState } from "react";
import getUsersList from "apis/manage/getUsersList";
import { Member } from "model/userType"; 
import "styles/css/manageUser.css";

// user 목록 관리 HOOK
const useUserList = (): Member[] => {
  const [memberData, setMemDate] = useState<Member[]>([]);

  useEffect(() => {
    getUsersList(setMemDate); // list API 요청
  }, []);

  return memberData;
};

export default useUserList;
