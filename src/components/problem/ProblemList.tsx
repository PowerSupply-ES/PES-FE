import { ListItem } from "components/list";
import { Problem } from "model/problemType";
import React from "react";

interface ProblemListProps {
  problmeList: Problem[];
}

// 문제lit 컴포넌트
const ProblemList: React.FC<ProblemListProps> = ({ problmeList }) => {
  return (
    <div className="problem_wrapper">
      {problmeList.map((problem: Problem) => (
        <ListItem
          key={problem.problemId}
          pid={problem.problemId}
          ptitle={problem.problemTitle}
          grade={problem.problemScore}
          answerId={problem.answerId}
          state={problem.answerState}
          // (memberStatus==="재학생" || memberStatus==="관리자")
          //     ? "solved"
          //     : problem.answerState
        />
      ))}
    </div>
  );
};

export default ProblemList;
