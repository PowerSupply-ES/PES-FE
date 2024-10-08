import axios from "axios";

// 사용자가 작성한 코드 불러오기 (get)
const getCode = async (answerId: number): Promise<string> => {
  try {
    const { data: response } = await axios.get(`/api2/question/${answerId}`, {
      withCredentials: true,
    });
    return response.code;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export default getCode;
