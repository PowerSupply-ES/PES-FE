import axios from "axios";

// 문제 내용 get 요청
const getProbContent = async (problemId) => {
  try {
    const { data } = await axios.get(`/api2/problem/${problemId}`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getProbContent;
