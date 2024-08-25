var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        // 기본 제출 동작 막기
        e.preventDefault();
        try {
            const responseData = yield postLogin(formData);
            const resultMessage = responseData.message;
            alert(resultMessage);
            navigate("/");
            window.location.reload(); // 페이지 새로 고침
            sessionStorage.setItem("status", true);
            sessionStorage.setItem("memberId", formData.memberId);
        }
        catch (error) {
            alert(error.message);
        }
    });
    //입력필드 값 변경될때마다 호출
    const handleInputChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    return { formData, handleSubmit, handleInputChange };
};
export default useSignIn;
