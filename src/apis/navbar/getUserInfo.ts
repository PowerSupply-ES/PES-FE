import axios from "axios";
import { UserInfo, GetUserInfoProps } from "model/userType";
import { userInfoAction } from "stores/actions/userAction";

// 상단바 user 정보 API 요청
const getUserInfo = async ({
  navigate,
  setMemberData,
  dispatch,
}: GetUserInfoProps) => {
  const uri = "/api/exp";
  const memberEmail = sessionStorage.getItem("memberEmail");

  try {
    const response = await axios.get<UserInfo>(uri, {
      params: { memberEmail },
    });

    // 데이터 처리
    const data = response.data;
    setMemberData(data);
    
    dispatch( // sessionStorage 저장에서 Redux 저장으로 변경
      userInfoAction({
        memberName: data.memberName,
        memberStatus: data.memberStatus,
        hasNewNotices: data.hasNewNotices,
        memberScore: data.memberScore,
        memberGen: data.memberGen,
      })
    );

  } catch (error: unknown) {
    // Axios에러인 경우
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // 서버 응답이 있는 경우
        if (error.response.status === 403) {
          alert("로그인이 만료됐습니다!");
          localStorage.clear();
          navigate("/signin");
        } else {
          console.error(
            "데이터 가져오기 실패:",
            error.response.status,
            error.response.statusText
          );
        }
      } else if (error.request) {
        // 요청이 이루어졌으나 응답이 없는 경우
        console.error("데이터 가져오기 실패: 요청이 실패했습니다.");
      } else {
        // 설정 중 오류 발생
        console.error("데이터 가져오기 실패:", error.message);
      }
    } else {
      // Axios 에러가 아닌 경우
      console.error("데이터 가져오기 실패:", (error as Error).message);
    }
  }
};

export default getUserInfo;
