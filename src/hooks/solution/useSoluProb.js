import getSoluProb from "apis/solution/getSoluProb";
import { useState, useEffect, useCallback } from "react";

// 문제 get HOOk
const useSoluProb = (problemId) => {
  const [problemData, setProblemData] = useState({});

  // 문제 get API
  const sendGetProblem = useCallback(async () => {
    try {
      const res = await getSoluProb(problemId);
      setProblemData(res);
    } catch (error) {
      // TODO : 예외처리 자세히
      console.error("데이터 가져오기 실패:", error);
    }
  }, [problemId]);

  useEffect(() => {
    sendGetProblem();
  }, [sendGetProblem]);

  return problemData;
};

export default useSoluProb;
