var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getProbTitle from "apis/problem/getProbTitle";
import { useState, useEffect, useCallback } from "react";
// 문제제목 get HOOk
const useSoluProb = (problemId) => {
    const [problemData, setProblemData] = useState(undefined);
    // 문제제목 get API
    const sendGetProblem = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield getProbTitle(problemId);
            setProblemData(res);
        }
        catch (error) {
            // TODO : 예외처리 자세히
            console.error("데이터 가져오기 실패:", error);
        }
    }), [problemId]);
    useEffect(() => {
        sendGetProblem();
    }, [sendGetProblem]);
    return problemData;
};
export default useSoluProb;
