import axios from "axios";

// 질문 답변하기 (post)
const postAnswers = async (answerId, answerFst, answerSec) => {
  try {
    await axios.post(`/api/answer/${answerId}`, {
      answerFst: answerFst,
      answerSec: answerSec,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default postAnswers;
