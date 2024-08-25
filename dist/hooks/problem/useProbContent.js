var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getProbContent from "apis/problem/getProbContent";
import { useState, useEffect, useCallback } from "react";
// 문제 내용 get HOOK
const useProbContent = (problemId) => __awaiter(void 0, void 0, void 0, function* () {
    const [problem, setProblem] = useState([]);
    const fetchProblem = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield getProbContent(problemId);
            setProblem(response);
        }
        catch (error) {
            console.error(error);
        }
    }), [problemId]);
    useEffect(() => {
        fetchProblem();
    }, [fetchProblem]);
    return problem;
});
export default useProbContent;
