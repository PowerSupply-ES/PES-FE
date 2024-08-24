import axios from "axios";

// 상단바 user 정보 API 요청
const getUserInfo = async ({ navigate, setMemberData }) => {
  const uri = "api/exp";
  const memberEmail = sessionStorage.getItem("memberEmail");

  try {
    const response = await axios.get(uri, {
      params: { memberEmail },
    });

    // 데이터 처리
    const data = response.data;
    setMemberData(data);
    sessionStorage.setItem("memberName", data.memberName);
    sessionStorage.setItem("memberStatus", data.memberStatus);
    sessionStorage.setItem("hasNewNotices", data.hasNewNotices);
    console.log("hasNewNotices = ", data.hasNewNotices);
  } catch (error) {
    if (error.response) {
      // 서버 응답이 있는 경우
      if (error.response.status === 403) {
        alert("로그인이 만료됐습니다!");
        sessionStorage.clear();
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
  }
};

export default getUserInfo;
