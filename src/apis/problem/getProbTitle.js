import axios from "axios";

// 문제 제목 get 요청
const getProbTitle = async (problemId) => {
  try {
    const { data } = await axios.get(`/api2/problemtitle/${problemId}`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getProbTitle;
