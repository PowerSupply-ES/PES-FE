import axios from "axios";

// 문제 목록 불러오기 (get)
const getList = async (setList) => {
  try {
    const config = {
      withCredentials: true,
    };

    const { data: response } = await axios.get(`/api/problemlist`, config);
    setList(response);
  } catch (error) {
    console.log("Failed to fetch list:", error);
  }
};
export default getList;
