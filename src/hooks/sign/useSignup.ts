import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignup from "apis/sign/postSignup";
import { SignupFormData } from "model/Store";

// 회원가입 관련 HOOK
const useSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupFormData>({
    memberId: "",
    memberEmail: "",
    memberPw: "",
    memberName: "",
    memberGen: 0,
    memberMajor: "",
    memberPhone: "",
  });

  // 이메일 형식 검사
  const isEmailValid = (email: string) => {
    // 이메일이 .net 또는 .com 으로 끝나는지 확인
    // some() : 하나라도 일치하면 true반환
    const validEndings = [".net", ".com"];
    const hasValidEnding = validEndings.some((ending) => 
      email.endsWith(ending)
    );

    return hasValidEnding;
  };

  // 회원가입 폼이 제출될 때 호출
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // 기본 제출 동작 막기

    try {
      const responseData = await postSignup(formData, isEmailValid);
      
      // responseData가 undefined 아닌지 확인
      if (responseData && responseData.message) {
        const resultMessage = responseData.message;
        alert(resultMessage);
        navigate("/signin");
      }
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
export default useSignup;
