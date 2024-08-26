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


// 공지사항 list 타입
export type NoticeList = {
  noticeId: number;
  title: string;
  writerGen: number;
  writer: string;
  noticeHit: number;
  isImportant: boolean;
  isNewNotice: boolean;
  createdTime: string; //LocalDateTime 타입
}