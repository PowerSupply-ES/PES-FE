import { useState, useEffect, useCallback } from "react";
import getProbTitle from "apis/problem/getProbTitle";
import { SoluProb } from "model/problemType";
// 문제제목 get HOOk
const useSoluProb = (problemId: number): SoluProb | undefined => {
  const [problemData, setProblemData] = useState<SoluProb | undefined>(
    undefined
  );

  // 문제제목 get API
  const sendGetProblem = useCallback(async () => {
    try {
      const res = await getProbTitle(problemId);
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
