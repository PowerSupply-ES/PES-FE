import axios from "axios";

// 코드 제출 post 요청
const postSubmitCode = async (request: string, problemId: number) => {
  try {
    const response = await axios.post(`/api2/submit/${problemId}`, {
      code: request,
      problemId: problemId,
    });
    return { data: response.data, status: response.status };
  } catch (error: unknown) {
    console.log(error);

    // error가 AxiosError인지 확인
    if (axios.isAxiosError(error)) {
      return { status: error.response ? error.response.status : 500 };
    } else {
      // 예상하지 못한 다른 에러의 경우
      return { status: 500 };
    }
  }
};

export default postSubmitCode;
