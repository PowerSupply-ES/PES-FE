import React from "react";
import { useNavigate } from "react-router-dom";
import MemberProb from "./MemberProb";
import { Problem } from "model/problemType";

// MyProbList 타입 정의
interface MyProbListProps {
  myProb: Problem[]
};

// 내가 푼 문제 목록
const MyProbList: React.FC<MyProbListProps> = ({ myProb }) => {
  const navigate = useNavigate();

  return (
    <MemberProb myProb={myProb} navigate={navigate}/>
  );
};

export default MyProbList;
