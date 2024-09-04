import axios from "axios";

// 풀이 get API
const getSoluList = async (problemId) => {
  const uri = "../api/answerlist/";

  try {
    const response = await axios.get(`${uri}${problemId}`);
    console.log("서버응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
  }
};

export default getSoluList;
