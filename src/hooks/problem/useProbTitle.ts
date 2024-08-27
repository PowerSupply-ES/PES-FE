import getProbTitle from "apis/problem/getProbTitle";
import { useState, useEffect, useCallback } from "react";
import { ProblemTitle } from "model/Store";

// 문제 제목 get HOOK
const useProbTitle = (problemId: number): ProblemTitle | null => {
  const [title, setTitle] = useState<ProblemTitle | null>(null);

  // problemId가 변경되지 않는 한, 매번 동일한 함수로 재사용
  const fetchTitle = useCallback(async () => {
    try {
      const res = await getProbTitle(problemId);
      setTitle(res);
    } catch (error: unknown) {
      console.error(error);
    }
  }, [problemId]);

  useEffect(() => {
    fetchTitle();
  }, [fetchTitle]);

  return title;
};

export default useProbTitle;
