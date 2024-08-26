import { NavigateFunction } from "react-router-dom";

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
  navigate: NavigateFunction
}

// 사용자
export type Member = {
  memberId: string;
  memberName: string;
  memberStatus: string;
  memberMajor: string;
};
export interface MemberDetail extends Member {
  memberEmail: string;
  memberGen: number;
  memberPhone: string;
  // TODO : mySolveResponse, myFeedbackResponse 추가
}


// myfeedback
export interface MyFeedback {
  answerId: number;
  memberName: string;
  memberGen: number;
  commentPassFail: number;
  commentContent: string;
}
// MyFeed props 데이터 타입
export interface MyFeedProps {
  myFeedback: MyFeedback[];
  navigate: NavigateFunction
}