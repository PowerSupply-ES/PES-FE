import axios from "axios";
import { Problem } from "model/Store";

// 문제 목록 불러오기 (get)
const getList = async (setList: React.Dispatch<React.SetStateAction<Problem[]>>): Promise<void> => {
  try {
    const config = {
      withCredentials: true,
    };

    const response = await axios.get<Problem[]>(`/api/problemlist`, config);
    setList(response.data);
  } catch (error: unknown) {
    console.log("Failed to fetch list:", error);
  }
};
export default getList;
