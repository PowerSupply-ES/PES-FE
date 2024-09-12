import React from "react";
import { useNavigate } from "react-router-dom";
import useMypage from "hooks/mypage/useMypage";
import MemberProb from "./MemberProb";

// MyProbList 타입 정의
interface MyProbListProps {};

// 내가 푼 문제 목록
const MyProbList: React.FC<MyProbListProps> = () => {
  const navigate = useNavigate();
  const { myProb } = useMypage();

  return (
    <MemberProb myProb={myProb} navigate={navigate}/>
  );
};

export default MyProbList;
