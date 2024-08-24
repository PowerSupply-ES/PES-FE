import axios from "axios";

// 코드 제출 post 요청
const postSubmitCode = async (request, problemId) => {
  try {
    const response = await axios.post(`/api2/submit/${problemId}`, {
      code: request,
      problemId: problemId,
    });
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error);
    return { status: error.response ? error.response.status : 500 };
  }
};

export default postSubmitCode;
