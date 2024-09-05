import axios from "axios";

// 문제 제목 get 요청
const getProbTitle = async (problemId: number) => {
  try {
    const res = await axios.get(`/api2/problemtitle/${problemId}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error: unknown) {
    console.log(error);
  }
  console.log("problemId:", problemId);
};

export default getProbTitle;
