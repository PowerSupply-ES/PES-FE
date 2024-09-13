import ProblemList from "components/problem/ProblemList";
import useProbList from "hooks/manage/useProbList";
import React from "react";

// 문제관리 페이지
const UserProbPage: React.FC = () => {
  const { list } = useProbList();
  return <ProblemList problmeList={list} />;
};

export default UserProbPage;
