// problem 변수 타입
export type Problem = {
  problemId: number;
  problemTitle: string;
  problemScore: number;
  answerId: number;
  answerState: string;
};

// 사용자 변수 타입
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
