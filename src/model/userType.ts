// 사용자 관련 타입 정의
import { NavigateFunction } from "react-router-dom";
import { Problem } from "./problemType";
import { SxProps, Theme } from "@mui/material/styles";


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

// 로그인 응답 데이터 타입
export type SignupResponseData = {
  message: string;
}

// getUserInfo props 타입
export type GetUserInfoProps = {
  navigate: NavigateFunction;
  setMemberData: (data: UserInfo) => void;
}

// user 정보 관리
export type UserInfo = {
  memberName: string;
  memberStatus: string;
  memberGen: number;
  memberScore: number;
  hasNewNotices: boolean;
};
// 사용자 정보 props 타입
export type MemberInfoProps = {
  memberName: string;
  memberId: string;
  memberEmail: string;
  memberGen: number;
  memberStatus: string;
  memberMajor: string;
  memberPhone: string;
}
// memberData 상태관리 HOOK setMemDate 타입
export type SetMemDetail = React.Dispatch<React.SetStateAction<MemberDetail | null>>;

// 내 memberData 상태관리 HOOK setMemberData 타입
export type SetMyDetail = React.Dispatch<React.SetStateAction<MemberDetail | undefined>>;


// UserList 컴포넌트의 props 타입 정의
export type UserListProps = {
  memberData: Member[];
}
// 회원 데이터 상태관리 훅 setMemDate의 타입
export type SetMemDate = React.Dispatch<React.SetStateAction<Member[]>>;

// myfeedback
export type MyFeedback = {  // TODO : 마이페이지로 이동
  answerId: number;
  memberName: string;
  memberGen: number;
  commentPassFail: number;
  commentContent: string;
}
// MyFeed props 데이터 타입
export type MyFeedProps = {
  myFeedback: MyFeedback[];
  navigate: NavigateFunction
}
// myFeedback 상태관리 HOOK setMyFeedback 타입
export type SetMyFeed = React.Dispatch<React.SetStateAction<MyFeedback[]>>;

// MyProb props 데이터 타입
export type MyProbProps = {
  myProb: Problem[];
  navigate: NavigateFunction;
}
// myProb 상태관리 HOOK setMyProb 타입
export type SetMyProblem = React.Dispatch<React.SetStateAction<Problem[]>>;

// useMypage HOOK 반환 타입
export type UseMypageReturnType = {
  memberData: MemberDetail | undefined;
  myProb: Problem[];
  myFeedback: MyFeedback[];
}


// 사용자_관리자모드
// 관리자페이지 mui props
export type TemplateFrameProps = {
  children: React.ReactNode;
}

// 마이페이지 - 사용자 정보
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
}

// 관리자 - 사용자 상세정보
export interface UserDetail extends MemberDetail {
  mySolveResponse: Problem[]; 
  myFeedbackResponse: MyFeedback[];
}
// UserData 상태관리 HOOK setUserDate 타입
export type SetUserDetail = React.Dispatch<React.SetStateAction<UserDetail | null>>;

// HOOK 반환 타입 정의
export type UseListHookReturn = {
  list: Problem[];
  selectedOption: string;
  juniorButtonVariant: string;
  seniorButtonVariant: string;
  handleOption: (option: 'junior' | 'senior') => void;
}
// 관리자 - 문제 list HOOK 반환 타입 정의
export type ProbListHookReturn ={
  list: Problem[];
}

// 랭킹 리스트 타입
export type MemberRankList = {
  memberName: string;
  score: number;
  rank: number;
}
// RankingItem props 타입
export type RankingItemProps = {
  rank: number;
  memberName: string;
  score: string;
  style?: React.CSSProperties;
}

// 풀이(solution) 타입
export type SolutionList = {
  answerId: number;
  memberGen: number;
  memberName: string;
  commentCount: number;
  answerState: string;
}
// SolvingList props 타입
export type SolvingListProps = {
  solveData: SolutionList[];
}

// 로그인 하단 스타일 속성 타입
export type CopyrightProps = {
  sx?: SxProps<Theme>;
}