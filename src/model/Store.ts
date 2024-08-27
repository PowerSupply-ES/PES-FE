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

// ProblemTitle 타입
export type ProblemTitle = Pick<Problem, 'problemId' | 'problemTitle' | 'problemScore'>;

// ProblemContent 타입
export type ProblemContent = {
  problemId: number;
  problemContent: string;
  
  // renderStyledNewlines함수사용 위해 배열로 변환
  sampleInputs: string[]; 
  sampleOutputs: string[]; 
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



// 공통 공지사항 속성
export type CommonNotice = {
  title: string;
  writerGen: number;
  writer: string;
  noticeHit?: number;
  isImportant: boolean;
  createdTime: string; // LocalDateTime 타입
};

// NoticeList 타입
export interface NoticeListType extends CommonNotice {
  noticeId: number;
  isNewNotice: boolean;
}
// NoticeList props 타입
export interface NoticeListProps{
  noticeList: NoticeListType[];
  navigate: NavigateFunction;
}
// NoticeDetail 타입
export interface NoticeDetailType extends CommonNotice{
  updatedTime?: string; //LocalDateTime 타입
  content: string;
}

// PostNotice 타입
export type PostNoticeType = {
  title: string;
  content: string;
  isImportant: boolean;
}