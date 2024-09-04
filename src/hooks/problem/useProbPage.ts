import useProbContent from "./useProbContent";
import useProbTitle from "./useProbTitle";
import useSubmitCode from "./useSubmitCode";
import { ProblemTitle } from "model/Store";
import { ProblemContent } from "model/Store";

interface UseProbPageReturnType {
  title: ProblemTitle | null;
  problem: ProblemContent | null;
  detail: string | null;
  isLogin: string | null;
  textHandler: (text: string) => void;
  submitCode: () => void;
}

// 문제 관련 HOOK 관리 - ProblemPage에 사용
const useProbPage = (problemId: number): UseProbPageReturnType => {
  const title = useProbTitle(problemId); // 문제 제목 get HOOK
  const problem = useProbContent(problemId); // 문제 내용 get HOOK
  const { textHandler, submitCode, detail } = useSubmitCode(problemId); // 문제 post 요청
  const isLogin = sessionStorage.getItem("status");

  return {
    title,
    problem,
    detail,
    isLogin,
    textHandler,
    submitCode
  };
};

export default useProbPage;
