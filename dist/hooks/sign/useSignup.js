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
import postSignup from "apis/sign/postSignup";
// 회원가입 관련 HOOK
const useSignup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        memberId: "",
        memberEmail: "",
        memberPw: "",
        memberName: "",
        memberGen: 0,
        memberMajor: "",
        memberPhone: "",
    });
    // 이메일 형식 검사
    const isEmailValid = (email) => {
        // 이메일이 .net 또는 .com 으로 끝나는지 확인
        // some() : 하나라도 일치하면 true반환
        const validEndings = [".net", ".com"];
        const hasValidEnding = validEndings.some((ending) => email.endsWith(ending));
        return hasValidEnding;
    };
    // 회원가입 폼이 제출될 때 호출
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault(); // 기본 제출 동작 막기
        try {
            const responseData = yield postSignup(formData, isEmailValid);
            const resultMessage = responseData.message;
            alert(resultMessage);
            navigate("/signin");
        }
        catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
            else {
                alert("알 수 없는 오류가 발생했습니다.");
            }
        }
    });
    //입력필드 값 변경될때마다 호출
    const handleInputChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    return { formData, handleSubmit, handleInputChange };
};
export default useSignup;
