import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "apis/sign/postLogin";

// 로그인 관련 HOOK
const useSignIn = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      memberId: "",
      memberPw: "",
    });
  
    // 로그인 폼이 제출될 때 호출
    const handleSubmit = async (e) => {
      // 기본 제출 동작 막기
      e.preventDefault();
  
      try {
        const responseData = await postLogin(formData);
        const resultMessage = responseData.message;
        alert(resultMessage);
        navigate("/");
        window.location.reload(); // 페이지 새로 고침
  
        sessionStorage.setItem("status", true);
        sessionStorage.setItem("memberId", formData.memberId);
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
export default useSignIn;