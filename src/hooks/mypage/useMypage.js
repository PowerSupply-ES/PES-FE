import { useState, useEffect } from "react";
import getMyInfo from "apis/mypage/getMyInfo";
import getMyProb from "apis/mypage/getMyProb";
import getMyFeed from "apis/mypage/getMyFeed";

const useMypage = () => {
  //정보리스트
  const [memberData, setMemberData] = useState([]);
  //내문제리스트
  const [myProb, setMyProb] = useState([]);
  //내피드백리스트
  const [myFeedback, setMyFeedback] = useState([]);

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
      window.location.href = "main";
      return;
    }
    getMyProb(setMyProb); // 내가 푼 문제 GET요청
    getMyFeed(setMyFeedback); // 내 feedback GET요청
  }, []);

  return { memberData, myProb, myFeedback };
};

export default useMypage;
