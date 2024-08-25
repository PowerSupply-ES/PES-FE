var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getFeed from "apis/question/getFeed";
import getCode from "apis/question/getCode";
import { useState, useEffect, useCallback } from "react";
import getQues from "apis/question/getQues";
import postAnswers from "apis/question/postAnswers";
import postFeed from "apis/question/postFeed";
// 질문테스트(question) 관련 HOOK 관리
const useQuestionHook = (answerId, getAlert) => {
    const [state, setState] = useState("");
    const [code, setCode] = useState("");
    const [qnA, setQnA] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [passCount, setPassCount] = useState(0);
    // 사용자 코드 get HOOK
    const getCodes = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const code = yield getCode(answerId); // get API 호출
            setCode(code);
        }
        catch (error) {
            console.log(error);
        }
    }), [answerId]);
    // 질문, 답변 get HOOK
    const getQuestions = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield getQues(answerId);
            setQnA(response);
            setState(response.answerState);
        }
        catch (error) {
            console.log(error);
        }
    }), [answerId]);
    // 답변 post HOOK
    const postAnswer = (answerFst, answerSec) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield postAnswers(answerId, answerFst, answerSec);
            alert("성공적으로 답변을 등록했습니다.");
            window.location.reload();
        }
        catch (error) {
            if (error.response && error.response.status === 400) {
                alert("이미 답변이 등록되어 있습니다.");
            }
            else if (error.response && error.response.status === 403) {
                alert("접근할 수 있는 사용자가 아닙니다.");
            }
            else {
                console.log(error);
            }
        }
    });
    // 댓글 get HOOK
    const getFeedback = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield getFeed(answerId); // get API 호출
            let passCount = 0;
            setFeedbacks(response);
            for (let i = 0; i < response.length; i++) {
                if (response[i].commentPassFail === 1) {
                    passCount++;
                }
            }
            setPassCount(passCount);
        }
        catch (error) {
            console.log(error);
        }
    }), [answerId]);
    // 댓글 post HOOK
    const postFeedback = (comment, selected) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield postFeed(answerId, comment, selected);
            getFeedback();
            getAlert(response.status);
            window.location.reload();
        }
        catch (error) {
            // 403에러 예외처리 추가 by.성임
            if (error.response && error.response.status === 403) {
                alert("권한이 없습니다!");
            }
            else if (error.response && error.response.status === 400) {
                alert("이미 댓글을 달았어요!");
            }
            else {
                console.log(error);
            }
        }
    });
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
