import axios, { AxiosError, AxiosResponse } from "axios";
import { SignupFormData, SignupResponseData } from "model/userType";


const postSignup = async (
  formData: SignupFormData,
  isEmailValid: (email: string) => boolean
): Promise<SignupResponseData | void> => {
  // 이메일 형식이 유효한지 체크
  if (!isEmailValid(formData.memberEmail)) {
    alert("이메일 형식이 아닙니다");
    return;
  }

  // 이름이 문자로만 입력되었는지 체크
  if (!/^[a-zA-Z가-힣]+$/.test(formData.memberName)) {
    alert("이름은 문자로 입력해주세요");
    return;
  }
  // TODO : 전화번호 형식이 맞는지 체크
  // TODO : 아이디가 숫자로만 입력되었는지 체크

  const uri = "api/signup";

  // 회원가입 요청 api
  try {
    const res: AxiosResponse<SignupResponseData> = await axios.post(uri, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // AxiosError인 경우
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        if (axiosError.response.status === 400) {
          throw new Error("이미 사용 중인 이메일입니다.");
        }
        throw new Error(`${axiosError.response.status} ${axiosError.response.statusText}`);
      }
    }
    // AxiosError가 아닌 경우
    throw new Error("네트워크 오류가 발생했습니다");
  }
};

export default postSignup;
