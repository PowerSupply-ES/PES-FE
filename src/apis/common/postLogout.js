import axios from "axios";

//로그아웃 api호출 함수
const postLogout = async (navigate) => {
  const uri = "/api/logout";

  try{
    const response = await axios.post(uri, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 로컬 스토리지 클리어
    sessionStorage.clear();
    localStorage.clear();
    alert(response.data.message);

    navigate('/');
    window.location.reload(); // 페이지 새로 고침

  }catch (error) {
    if (error.response) {
      // 서버가 응답을 반환했지만 오류 상태 코드
      console.error("로그아웃 실패:", error.response.status, error.response.statusText);
    } else if (error.request) {
      // 요청이 서버로 전송되었지만 응답을 받지 못한 경우
      console.error("로그아웃 실패: 요청이 실패했습니다.");
    } else {
      // 요청 설정 중 오류 발생
      console.error("로그아웃 실패:", error.message);
    }
  }
};

export default postLogout;