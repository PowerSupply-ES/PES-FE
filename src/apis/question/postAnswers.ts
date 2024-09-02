import axios from "axios";

// 질문 답변하기 (post)
const postAnswers = async (answerId: number, answerFst: string, answerSec: string): Promise<void> => {
  try {
    await axios.post(`/api/answer/${answerId}`, {
      answerFst,
      answerSec
    });
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};

export default postAnswers;
