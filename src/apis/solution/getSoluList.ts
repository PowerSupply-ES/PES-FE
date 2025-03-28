import axios from "axios";
import { SolutionList } from "model/userType";

// 풀이 get API
const getSoluList = async (problemId: number): Promise<SolutionList[]> => {
  const uri = "/api/answerlist/";

  try {
    const response = await axios.get<SolutionList[]>(`${uri}${problemId}`);
    return response.data;
  } catch (error: unknown) {
    console.error("데이터 가져오기 실패:", error);
    return []; // 오류 발생 시 빈 배열 반환
  }
};

export default getSoluList;
