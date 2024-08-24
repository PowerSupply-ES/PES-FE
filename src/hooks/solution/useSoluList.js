import getSoluList from "apis/solution/getSoluList";
import { useState, useEffect, useCallback } from "react";

// 풀이 get HOOk
const useSoluList = (problemId) => {
  const [solveData, setSolveData] = useState([]);

  // 풀이 get API
  const sendGetSolve = useCallback(async () => {
    try {
      const res = await getSoluList(problemId);
      setSolveData(res);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  }, [problemId]);

  useEffect(() => {
    sendGetSolve();
  }, [sendGetSolve]);

  return solveData;
};

export default useSoluList;
