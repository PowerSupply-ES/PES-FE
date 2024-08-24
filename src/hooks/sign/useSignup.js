import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignup from "apis/sign/postSignup";

// 회원가입 관련 HOOK
const useSignup = () => {
  
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      memberId: "",
      memberEmail: "",
      memberPw: "",
      memberName: "",
      memberGen: "",
      memberMajor: "",
      memberPhone: "",
    });
  
    // 이메일 형식 검사
    const isEmailValid = (email) => {
      // 이메일 형식 검사 정규식
      // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
      // 이메일이 .net 또는 .com 으로 끝나는지 확인
      const validEndings = [".net", ".com"];
      const hasValidEnding = validEndings.some((ending) =>
        email.endsWith(ending)
      );
  
      // return emailRegex.test(email) && hasValidEnding;
      return hasValidEnding;
    };
  
    // 회원가입 폼이 제출될 때 호출
    const handleSubmit = async (e) => {
      // 기본 제출 동작 막기
      e.preventDefault();
  
      try {
        const responseData = await postSignup(formData, isEmailValid);
        const resultMessage = responseData.message;
        alert(resultMessage);
        navigate("/signin");
      } catch (error) {
        alert(error.message);
      }
    };
  
    //입력필드 값 변경될때마다 호출
    const handleInputChange = (e) => {
      setFormData({
        // formData복사, 변경된 필드만 업데이트
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  

  return {formData, handleSubmit, handleInputChange};
}
export default useSignup;