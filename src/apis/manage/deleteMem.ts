import axios from "axios";
import { NavigateFunction } from "react-router-dom";

const deleteMem = async (navigate: NavigateFunction): Promise<void> => {
  let url = new URL(window.location.href);
  let memberId = url.pathname.split("/")[2];

  const uri = `/api/admin/member/${memberId}`;

  const confirmDelete = window.confirm("정말 해당 회원을 삭제하시겠습니까?");

  // 삭제 취소 시
  if (!confirmDelete) {
    return;
  }

  try {
    const res = await axios.delete(uri);

    // 성공 시
    if (res.status === 200) {
      alert("회원이 성공적으로 삭제되었습니다.");
      navigate("/manageUser"); // 삭제 후 목록 페이지로 이동
    }
  } catch (error: unknown) {
    // axios에러 && response있는 경우
    if (axios.isAxiosError(error) && error.response) {
      const statusCode = error.response.status;

      // 403: 권한 없음 (관리자가 아님)
      if (statusCode === 403) {
        alert("권한이 없습니다. 관리자 계정으로 로그인 해주세요.");
      }
      // 404: 해당 memberId가 없음
      else if (statusCode === 404) {
        alert("해당 회원을 찾을 수 없습니다. memberId를 확인해 주세요.");
      }
      // 그 외 서버 오류
      else {
        alert("회원 삭제에 실패했습니다. 다시 시도해 주세요.");
      }
    } else {
      // 서버 응답이 없거나 다른 문제가 발생한 경우
      console.error(error);
      alert("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  }
};

export default deleteMem;
