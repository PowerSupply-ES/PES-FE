// 관리자_문제 상세 페이지
import axios from "axios";
import { useCallback, useEffect, useState } from "react"

// ProblemContent 타입
// TODO : 타입 분리하기
export type ProblemContent = {
  problemId: number;
  problemTitle: string;
  problemScore: number;
  context: string;
  sample:number;
  inputs:string;
  outputs:string;

  // renderStyledNewlines함수사용 위해 배열로 변환
  //sampleInputs: string[];
  //sampleOutputs: string[];
};


const ProbDetailPage = () => {
  let url = new URL(window.location.href);
  let problemId = Number(url.pathname.split("/")[2]); // 문자열을 숫자로 변환

  const [problem, setProblem] = useState<ProblemContent | null>(null);
  
  const getProbContent = async (problemId: number) => {
    try {
      const { data } = await axios.get(`/api/admin/problem/${problemId}`, {
        withCredentials: true,
      });
      return data;
    } catch (error: unknown) {
      console.log(error);
    }
  };
  
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
  
  console.log("problem",problem);





  
  return (
    <div>
      ProbDetail페이지
    </div>
  )
}

export default ProbDetailPage
