import axios from "axios";
import { SignInFormData } from "model/userType";

const postLogin = async (formData: SignInFormData) => {
  const uri = "/api/signin";

  // 로그인 요청 api
  try {
    const res = await axios.post<{ message: string }>(uri, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        throw new Error("일치하는 정보가 없습니다");
      } else if (error.response) {
        throw new Error(`${error.response.status} ${error.response.statusText}`);
      }
    }
    throw new Error("네트워크 오류가 발생했습니다");
  }
};

export default postLogin;
