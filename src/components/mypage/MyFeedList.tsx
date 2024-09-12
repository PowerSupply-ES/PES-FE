import React from "react";
import { useNavigate } from "react-router-dom";
import useMypage from "hooks/mypage/useMypage";
import MemberFeed from "./MemberFeed";

// MyFeedList 타입 정의
interface MyFeedListProps {};

// 내 피드백 list
const MyFeedList:React.FC<MyFeedListProps> = () => {
  const navigate = useNavigate();
  const { myFeedback } = useMypage();

  return (
    <MemberFeed myFeedback={myFeedback} navigate={navigate}/>
  );
};

export default MyFeedList;
