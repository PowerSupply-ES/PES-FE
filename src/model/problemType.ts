// 문제 관련 타입 정의
import { NavigateFunction } from "react-router-dom";

// state를 받아들이는 스타일 컴포넌트
export interface StyledProps {
  state: string;
}

// problem
export type Problem = {
  problemId: number;
  problemTitle: string;
  problemScore: number;
  answerId: number;
  answerState: string;
  finalScore?: number;
};
// MyProb props 데이터 타입
export interface MyProbProps {
  myProb: Problem[];
  navigate: NavigateFunction;
}
// solution prob 타입
export type SoluProb = Pick<
  Problem,
  "problemId" | "problemTitle" | "problemScore"
>;

// problemList 타입 - TODO: 적절히 사용 요망
// export type ProblemList = {
//   problem: Problem;
//   answerCount?: number;  // 푼사람 수
// };

// ProblemTitle 타입
export type ProblemTitle = Pick<
  Problem,
  "problemId" | "problemTitle" | "problemScore"
>;

// ProblemContent 타입
export type ProblemContent = {
  problemId: number;
  problemContent: string;

  // renderStyledNewlines함수사용 위해 배열로 변환
  sampleInputs: string[];
  sampleOutputs: string[];
};

// ProblemItem 컴포넌트 props 타입
export interface ProblemItemProps {
  pid: number;
  ptitle: string;
  grade: number;
  answerId: number | null;
  state: string;
}
