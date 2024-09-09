import axios from "axios";
import { QuesAnswerType } from "model/questionType";

// 질문, 답변 블러오기 (get)
const getQues = async (answerId: number): Promise<QuesAnswerType> => {
  try {
    const response = await axios.get<QuesAnswerType>(`/api/answer/${answerId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export default getQues;
