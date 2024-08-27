import axios from "axios";

// 문제 제목 get 요청
const getProbTitle = async (problemId: number) => {
  try {
    const { data } = await axios.get(`/api2/problemtitle/${problemId}`, {
      withCredentials: true,
    });
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export default getProbTitle;
