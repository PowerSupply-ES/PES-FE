import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {getFeed, getCode, getQues, postAnswers, postFeed} from "apis/question";
import { CommentListType, QuesAnswerType, UseQuestionHookResult } from "model/questionType";

// 질문테스트(question) 관련 HOOK들 관리
const useQuestionHook = (
  answerId: number,
  getAlert: (responseStatus: number) => void,
  problemId: number
): UseQuestionHookResult => {
  const [state, setState] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [qnA, setQnA] = useState<QuesAnswerType | null>(null);
  const [feedbacks, setFeedbacks] = useState<CommentListType[]>([]);
  const [passCount, setPassCount] = useState<number>(0);

  // 사용자 코드 get HOOK
  const getCodes = useCallback(async () => {
    try {
      const code = await getCode(answerId); // get API 호출
      if(code !== null && code !== undefined){
        setCode(code);
      }

    } catch (error) {
      console.log(error);
    }
  }, [answerId]);

  // 질문, 답변 get HOOK
  const getQuestions = useCallback(async () => {
    try {
      const response = await getQues(answerId);
      setQnA(response);
      setState(response.answerState || ""); // 기본값으로 빈 문자열 설정
    } catch (error) {
      console.log(error);
    }
  }, [answerId]);

  // 답변 post HOOK
  const postAnswer = async (answerFst: string, answerSec: string) => {
    try {
      await postAnswers(answerId, answerFst, answerSec);
      alert("성공적으로 답변을 등록했습니다.");
      window.location.reload();
    } catch (error: unknown) {
      // error가 AxiosError인지 확인
      if (axios.isAxiosError(error)) {
        const status = error.response ? error.response.status : null;

        if (status === 400) {
          alert("이미 답변이 등록되어 있습니다.");
        } else if (status === 403) {
          alert("접근할 수 있는 사용자가 아닙니다.");
        } else {
          console.log("알 수 없는 서버 오류가 발생했습니다.", error);
        }
      } else {
        // AxiosError가 아닌 다른 오류 처리
        console.log("예상하지 못한 오류가 발생했습니다.", error);
      }
    }
  };

  // 댓글 get HOOK
  const getFeedback = useCallback(async () => {
    try {
      const response = await getFeed(answerId); // get API 호출
      let passCount = 0;
      setFeedbacks(response);
      for (let i = 0; i < response.length; i++) {
        if (response[i].commentPassFail === 1) {
          passCount++;
        }
      }
      setPassCount(passCount);
    } catch (error) {
      console.log(error);
    }
  }, [answerId]);

  // 댓글 post HOOK
  const postFeedback = async (comment: string, selected: number) => {
    try {
      const response = await postFeed(answerId, comment, selected);
      getFeedback();
      getAlert(response.status);
      window.location.reload();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // AxiosError 타입 확인 후 처리
        const status = error.response?.status;
        if (status === 403) {
          // 403에러 예외처리 추가 by.성임
          alert("권한이 없습니다!");
        } else if (status === 400) {
          alert("이미 댓글을 달았어요!");
        } else {
          console.log("알 수 없는 오류가 발생했습니다.", error);
        }
      } else {
        console.log("예상하지 못한 오류가 발생했습니다.", error);
      }
    }
  };

  useEffect(() => {
    getCodes();
    getQuestions();
  }, [getCodes, getQuestions]);

  // 피드백 가져오기 HOOK
  useEffect(() => {
    if (state === "comment" || state === "success" || state === "fail") {
      getFeedback();
    }
  }, [state, getFeedback]);

  return {
    code,
    qnA,
    state,
    feedbacks,
    passCount,
    getCodes,
    getQuestions,
    postAnswer,
    postFeedback,
    setCode,
  };
};

export default useQuestionHook;
