import { useState, useEffect, useCallback } from "react";
import getProbTitle from "apis/problem/getProbTitle";
import { ProblemTitle } from "model/problemType";

// 문제 제목 get HOOK
const useProbTitle = (problemId: number): ProblemTitle | null => {
  const [title, setTitle] = useState<ProblemTitle | null>(null);

  // problemId가 변경되지 않는 한, 동일한 함수로 재사용
  const fetchTitle = useCallback(async () => {
    try {
      const titleData = await getProbTitle(problemId);
      if (titleData) {
        setTitle(titleData); // titleData가 존재할 때만 state 업데이트
      } else {
        setTitle(null);
      }
    } catch (error: unknown) {
      console.error(error);
      setTitle(null);
    }
  }, [problemId]);

  useEffect(() => {
    fetchTitle();
  }, [fetchTitle]);

  return title;
};

export default useProbTitle;
