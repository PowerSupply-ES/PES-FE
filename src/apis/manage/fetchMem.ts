import axios from "axios";
import { NavigateFunction } from "react-router-dom";

// 회원 등업 update API
const fetchMem = async (navigate: NavigateFunction): Promise<void> => {
  let url = new URL(window.location.href);
  let memberId = url.pathname.split("/")[2];

  const uri = `/api/admin/member/${memberId}`;

  // TODO : 관리자 vs 재학생 중 선택하기
  const confirmDelete = window.confirm(
    '해당 회원을 "재학생"으로 등업하시겠습니까?'
  );

  // 수정 취소 시
  if (!confirmDelete) {
    return;
  }

  try {
    const res = await axios.put(uri, {
      memberStatus: "재학생",
    });
    console.log("res는용 = ", res);

    // 성공 시
    if (res.status === 200) {
      alert("회원이 성공적으로 등업되었습니다.");
      navigate("/manageUser");
    } else {
      alert("회원 등업에 실패했습니다. 다시 시도해 주세요1.");
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
        alert("회원 등업에 실패했습니다. 다시 시도해 주세요2.");
      }
    } else {
      // 서버 응답이 없거나 다른 문제가 발생한 경우
      console.error(error);
      alert("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  }
};

export default fetchMem;
