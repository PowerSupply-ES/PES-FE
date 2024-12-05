import ProblemList from "components/problem/ProblemList";
import useProbList from "hooks/manage/useProbList";
import "styles/css/manageProb.css"
import React from "react";

// 문제관리 페이지
const UserProbPage: React.FC = () => {
  const { list } = useProbList();
  return(
    <div className="probWrapper">
      <ProblemList problmeList={list} />
    </div>
  );
};

export default UserProbPage;
