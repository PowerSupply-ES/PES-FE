import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "apis/sign/postLogin";
import { SignInFormData } from "model/userType";

// 로그인 관련 HOOK
const useSignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignInFormData>({
    memberId: "",
    memberPw: "",
  });

  // 로그인 폼이 제출될 때 호출
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // 기본 제출 동작 막기
    e.preventDefault();

    try {
      const responseData = await postLogin(formData);
      const resultMessage = responseData.message;
      alert(resultMessage);
      navigate("/");
      window.location.reload(); // 페이지 새로고침

      sessionStorage.setItem("status", "true");
      sessionStorage.setItem("memberId", formData.memberId);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  //입력필드 값 변경될때마다 호출
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({
      // formData복사, 변경된 필드만 업데이트
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return { formData, handleSubmit, handleInputChange };
};
export default useSignIn;
