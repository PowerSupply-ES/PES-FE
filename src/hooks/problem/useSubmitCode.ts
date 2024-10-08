import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import postSubmitCode from "apis/problem/postSubmitCode";

// 문제 post 요청
const useSubmitCode = (problemId: number) => {
  const navigate = useNavigate();
  const text = useRef<string>(""); // 코드 입력을 위한 useRef
  const [detail, setDetail] = useState<string | null>(null); // 틀린 이유 저장하는 state

  // 수정코드_by성임
  function textHandler(newCode: string) {
    text.current = newCode;
  }

  const submitCode = async () => {
    if (!text.current) {
      alert("코드를 입력해주세요!");
    } else {
      const { data: response, status } = await postSubmitCode(
        text.current,
        problemId
      );

      if (!response) {
        alert("오류!");
      } else if (status === 201) {
        console.log(response);
        alert("문제를 맞혔습니다! 질의응답 페이지로 이동합니다.");
        sessionStorage.setItem("problemId", problemId.toString());
        navigate(`/question/${response.answer_id}`);
      } else if (status === 202) {
        setDetail(response.detail);
        alert("문제를 틀렸습니다! 다시 풀어보세요.");
      } else if (status === 500) {
        alert(
          `server가 응답하지 않네요! 관리자에게 상황을 공유해주세요! : ${response.message}`
        );
      }
    }
  };

  return { detail, textHandler, submitCode };
};

export default useSubmitCode;
