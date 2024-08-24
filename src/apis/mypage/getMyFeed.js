import axios from "axios";

// 내 feedback GET요청
const getMyFeed = async (setMyFeedback) => {
    const uri = 'api/mypage/myfeedback';
  
    try{
      const response = await axios.get(uri);
      setMyFeedback(response.data);
      console.log("response : ", response.data);
    }catch(error){
      if (error.response) {
        // 서버가 응답을 반환했지만 상태 코드가 오류를 나타내는 경우
        console.error("데이터 가져오기 실패:", error.response.status, error.response.statusText);
      } else if (error.request) {
        // 요청이 서버로 전송되었지만 응답을 받지 못한 경우
        console.error("데이터 가져오기 실패: 요청이 실패했습니다.");
      } else {
        // 요청 설정 중 오류 발생
        console.error("데이터 가져오기 실패:", error.message);
      }
    }
};

export default getMyFeed;