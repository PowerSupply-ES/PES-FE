import axios from "axios";
import { SetUserDetail, UserDetail } from "model/userType";

// 회원 상세 정보 get API
const getUserDetail = async (setMemberData: SetUserDetail): Promise<void> => {
  let url = new URL(window.location.href);
  let memberId = url.pathname.split("/")[2];

  const uri = `/api/admin/member/${memberId}`;

  try {
    const res = await axios.get<UserDetail>(uri);
    const memDetail = res.data;
    
    // `mySolveResponse`와 `myFeedbackResponse`가 없을 경우 기본값 설정
    const userDetail: UserDetail = {
      ...memDetail,
      mySolveResponse: memDetail.mySolveResponse || [],  // 기본값으로 빈 배열
      myFeedbackResponse: memDetail.myFeedbackResponse || []  // 기본값으로 빈 배열
    };

    setMemberData(userDetail);
  } catch (error: unknown) {
    console.error(error);
  }
  // TODO : 예외처리하기
};
export default getUserDetail;
