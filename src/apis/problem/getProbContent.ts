import axios from "axios";

// 문제 내용 get 요청
const getProbContent = async (problemId: number) => {
  try {
    const { data } = await axios.get(`/api2/problem/${problemId}`, {
      withCredentials: true,
    });
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export default getProbContent;
