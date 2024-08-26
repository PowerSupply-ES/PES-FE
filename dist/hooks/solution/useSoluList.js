var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getSoluList from "apis/solution/getSoluList";
import { useState, useEffect, useCallback } from "react";
// 풀이 get HOOk
const useSoluList = (problemId) => {
    const [solveData, setSolveData] = useState([]);
    // 풀이 get API
    const sendGetSolve = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield getSoluList(problemId);
            setSolveData(res);
        }
        catch (error) {
            console.error("데이터 가져오기 실패:", error);
        }
    }), [problemId]);
    useEffect(() => {
        sendGetSolve();
    }, [sendGetSolve]);
    return solveData;
};
export default useSoluList;
