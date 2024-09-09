import axios from "axios";
import { Problem } from "model/problemType"; 

// myProb 상태관리 HOOK setMyProb 타입
type SetMyProblem = React.Dispatch<React.SetStateAction<Problem[]>>;

// 내가 푼 문제 GET요청
const getMyProb = async (setMyProb: SetMyProblem): Promise<void> => {
  const uri = "api/mypage/mysolve";

  try {
    const response = await axios.get<Problem[]>(uri);
    setMyProb(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {  //axios error인지 확인
      // 서버가 응답을 반환했지만 상태 코드가 오류를 나타내는 경우
      console.error(
        "Axios 오류 발생:",
        error.response?.status,
        error.response?.statusText
      );
    } else if (error instanceof Error) {  //js오류인지 확인
      // 요청이 서버로 전송되었지만 응답을 받지 못한 경우
      console.error("일반 오류 발생:", error.message);
    } else {
      console.error("알 수 없는 오류 발생:", error);
    }
  }
};

export default getMyProb;
