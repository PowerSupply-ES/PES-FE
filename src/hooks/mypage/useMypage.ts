import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {getMyInfo, getMyProb, getMyFeed} from "apis/mypage";
import { MyFeedback, MemberDetail, UseMypageReturnType } from "model/userType";
import { Problem } from "model/problemType";

// 마이페이지 api HOOK
const useMypage = (status: boolean):UseMypageReturnType => {
  const navigate = useNavigate();

  // 내정보
  const [memberData, setMemberData] = useState<MemberDetail>();
  // 내문제리스트
  const [myProb, setMyProb] = useState<Problem[]>([]);
  // 내피드백리스트
  const [myFeedback, setMyFeedback] = useState<MyFeedback[]>([]);

  // 관련 API요청 HOOK
  useEffect(() => {
    // 비로그인시
    if (status === null || status === undefined) {
      alert("로그인 해주세요");
      navigate("/signin");
      return;
    }

    // 로그인 상태일 때 API 요청
    const fetchData = async() => {
      try{
        getMyInfo(setMemberData); // 내 정보 GET요청
        getMyProb(setMyProb); // 내가 푼 문제 GET요청
        getMyFeed(setMyFeedback); // 내 feedback GET요청
      }catch(error){
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    }
    fetchData();
  }, [navigate]); // navigate가 최신상태인지 확인

  return { memberData, myProb, myFeedback };
};

export default useMypage;
