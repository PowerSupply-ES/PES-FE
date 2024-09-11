import {useProbContent, useProbTitle, useSubmitCode} from "./index";
import { UseProbPageReturnType } from "model/problemType";
// 문제 관련 HOOK 반환타입

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
