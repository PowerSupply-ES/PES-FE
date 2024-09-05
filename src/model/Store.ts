import { ChangeEvent, RefObject } from "react";
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
  navigate: NavigateFunction
}
// problemList 타입 - TODO: 적절히 사용 요망
// export type ProblemList = {
//   problem: Problem;
//   answerCount?: number;  // 푼사람 수
// };

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


// ProblemItem 컴포넌트 props 타입
export interface ProblemItemProps {
  pid: number;
  ptitle: string;
  grade: number;
  answerId: number | null;
  state: string;
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


// 댓글(comment) 타입
export type CommentListType = {
  writerId: string;
  writerGen: number;
  writerName: string;
  commentContent: string;
  commentPassFail: number;
}

// 질문, 답변 타입
export type QuesAnswerType = {
  questionContentFst: string;
  questionContentSec: string;
  answerFst: string;
  answerSec: string;
  answerState: string;
}
// question hook 반환타입
export interface UseQuestionHookResult {
  code: string;
  qnA: QuesAnswerType | null;
  state: string;
  feedbacks: CommentListType[];
  passCount: number;
  getCodes: () => void;
  getQuestions: () => void;
  postAnswer: (answerFst: string, answerSec: string) => void;
  postFeedback: (comment: string, selected: number) => void;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

// RenderAnswerUI props 타입
export interface RenderAnswerUIProps {
  navigate: (path: string) => void;
  code: string;
  qnA: QuesAnswerType;
  state: string;
  setCode: (code: string) => void;
  textFst: RefObject<HTMLTextAreaElement>
  handleTextFstChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  postAnswer: (textFst: string, textSec: string) => void;
}




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


// 랭킹 리스트 타입
export type MemberRankList = {
  memberName: string;
  score: number;
  rank: number;
}