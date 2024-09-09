// 사용자 관련 타입 정의
import { NavigateFunction } from "react-router-dom";


// 로그인 폼 데이터 타입
export type SignInFormData = {
  memberId: string;
  memberPw: string;
}
// 회원가입 폼 데이터 타입
export type SignupFormData = {
  memberPw: string;
  memberId: string;
  memberEmail: string;
  memberName: string;
  memberGen: number;
  memberMajor: string;
  memberPhone: string;
}


// user 정보 관리
export type UserInfo = {
  memberName: string;
  memberStatus: string;
  memberGen: number;
  memberScore: number;
  hasNewNotices: boolean;
};

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


// 사용자_관리자모드
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

// 랭킹 리스트 타입
export type MemberRankList = {
  memberName: string;
  score: number;
  rank: number;
}

// 풀이(solution) 타입
export type SolutionList = {
  answerId: number;
  memberGen: number;
  memberName: string;
  commentCount: number;
  answerState: string;
}