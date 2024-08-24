import axios from "axios";

// 공지사항 리스트 get API 요청
const getNoticeList = async (setNoticeList) => {
  const uri = "api/notice";

  try {
    const response = await axios.get(uri);

    if (response.status === 204) {
      console.log("공지사항이 아직 없습니다!");
      setNoticeList([]); // 빈 배열로 설정
      return;
    }
    setNoticeList(response.data);
  } catch (error) {
    if (error.response) {
      // 서버가 응답을 반환한 경우
      console.error(
        `데이터 가져오기 실패: ${error.response.status} ${error.response.statusText}`
      );
    } else if (error.request) {
      // 요청이 이루어졌으나 응답이 없는 경우
      console.error("데이터 가져오기 실패: 요청이 실패했습니다.");
    } else {
      // 설정 중 오류 발생
      console.error(`데이터 가져오기 실패: ${error.message}`);
    }
  }
};

export default getNoticeList;
