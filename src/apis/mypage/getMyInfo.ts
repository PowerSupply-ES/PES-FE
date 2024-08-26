import axios from "axios";
import { MemberDetail } from "model/Store";

// memberData 상태관리 HOOK setMemberData 타입
type SetMyDetail = React.Dispatch<React.SetStateAction<MemberDetail | undefined>>;

// 내 정보 GET 요청
const getMyInfo = async (setMemberData: SetMyDetail): Promise<void> => {
  const uri = "/api/mypage/information";

  try {
    const response = await axios.get<MemberDetail>(uri);
    setMemberData(response.data);
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

export default getMyInfo;