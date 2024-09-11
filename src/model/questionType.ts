// 질문 관련 타입 정의
import { ChangeEvent, RefObject } from "react";

export interface StyledQuestionProps {
  isSelected?: boolean;
}

// 댓글(comment) 타입
export type CommentListType = {
  writerId: string;
  writerGen: number;
  writerName: string;
  commentContent: string;
  commentPassFail: number;
};

// 질문, 답변 타입
export type QuesAnswerType = {
  questionContentFst: string;
  questionContentSec: string;
  answerFst: string;
  answerSec: string;
  answerState: string;
};
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
  textFst: string;
  handleTextFstChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  postAnswer: (textFst: string, textSec: string) => void;
}
