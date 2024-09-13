import React from "react";
import { useNavigate } from "react-router-dom";
import MemberFeed from "./MemberFeed";
import { MyFeedback } from "model/userType";

// MyFeedList 타입 정의
interface MyFeedListProps {
  myFeedback: MyFeedback[];
};

// 내 피드백 list
const MyFeedList:React.FC<MyFeedListProps> = ({ myFeedback }) => {
  const navigate = useNavigate();

  return (
    <MemberFeed myFeedback={myFeedback} navigate={navigate}/>
  );
};

export default MyFeedList;
