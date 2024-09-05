import getSoluList from "apis/solution/getSoluList";
import { SolutionList } from "model/Store";
import { useState, useEffect, useCallback } from "react";

// 풀이 get HOOk
const useSoluList = (problemId: number): SolutionList[] => {
  const [solveData, setSolveData] = useState<SolutionList[]>([]);

  // 풀이 get API
  const sendGetSolve = useCallback(async () => {
    try {
      const res = await getSoluList(problemId);
      setSolveData(res);
    } catch (error: unknown) {
      console.error("데이터 가져오기 실패:", error);
    }
  }, [problemId]);

  useEffect(() => {
    sendGetSolve();
  }, [sendGetSolve]);

  return solveData;
};

export default useSoluList;
