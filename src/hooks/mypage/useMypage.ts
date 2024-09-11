import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {getMyInfo, getMyProb, getMyFeed} from "apis/mypage";
import { MyFeedback, MemberDetail, UseMypageReturnType } from "model/userType";
import { Problem } from "model/problemType";



const useMypage = ():UseMypageReturnType => {
  const navigate = useNavigate();

  //정보리스트
  const [memberData, setMemberData] = useState<MemberDetail>();
  //내문제리스트
  const [myProb, setMyProb] = useState<Problem[]>([]);
  //내피드백리스트
  const [myFeedback, setMyFeedback] = useState<MyFeedback[]>([]);

  // 관련 API요청 HOOK
  useEffect(() => {
    getMyInfo(setMemberData); // 내 정보 GET 요청

    // 비로그인시
    if (
      sessionStorage.getItem("status") === null ||
      sessionStorage.getItem("status") === undefined
    ) {
      console.log("로그인 안돼있음");

      alert("로그인 해주세요.");
      navigate("/signin");
      return;
    }
    getMyProb(setMyProb); // 내가 푼 문제 GET요청
    getMyFeed(setMyFeedback); // 내 feedback GET요청
  }, [navigate]); // navigate가 최신상태인지 확인

  return { memberData, myProb, myFeedback };
};

export default useMypage;
