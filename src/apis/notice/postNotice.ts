import axios from "axios";
import { PostNoticeType } from "model/Store";
import { NavigateFunction } from "react-router-dom";

// 공지사항 post API 호출
const postNotice = async (notice: PostNoticeType, navigate:NavigateFunction) => {
  const uri = "api/notice";

  try {
    const response = await axios.post(uri, notice, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      alert("공지사항이 성공적으로 등록되었습니다!");
      navigate("/notice");
    }
  } catch (error: unknown) {
    // axios에서 발생한 오류인 경우
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // 서버가 응답을 반환한 경우
        if (error.response.status === 403) {
          alert("권한이 없습니다");
        } else {
          alert(
            `서버 응답 오류: ${error.response.status} ${error.response.statusText}`
          );
        }
      } else if (error.request) {
        // 요청이 이루어졌으나 응답이 없는 경우
        alert("서버 응답이 없습니다.");
      } else {
        // 설정 중 오류 발생
        alert(`요청 실패: ${error.message}`);
      }
    }
    else { // axios와 무관한 오류인 경우
      alert(`알 수 없는 오류 발생: ${(error as Error).message}`);
    }
  }
};

export default postNotice;
