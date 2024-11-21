import { useState, useEffect, useCallback } from "react";
import getProbContent from "apis/problem/getProbContent";
import { ProblemContent } from "model/problemType";

// 문제 내용 get HOOK
const useProbContent = (problemId: number): ProblemContent | null => {
  const [problem, setProblem] = useState<ProblemContent | null>(null);

  const fetchProblem = useCallback(async () => {
    try {
      const response = await getProbContent(problemId);
      setProblem(response);
    } catch (error: unknown) {
      console.error(error);
    }
  }, [problemId]);

  useEffect(() => {
    fetchProblem();
  }, [fetchProblem]);

  return problem;
};

export default useProbContent;
