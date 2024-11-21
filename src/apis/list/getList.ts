import axios from "axios";
import { Problem } from "model/problemType";
import { Location } from "react-router-dom";

// 문제 목록 불러오기 (get)
// TODO: 관리자 문제불러오기 타입은 SoluProb로
const getList = async (
  setList: React.Dispatch<React.SetStateAction<Problem[]>>,
  location: Location<any>
): Promise<void> => {
  // 조건에 따라 uri를 설정
  const uri =
    location.pathname === "/manageFeed"
      ? `/api/admin/problemlist`
      : `/api/problemlist`;

  try {
    const config = {
      withCredentials: true,
    };

    const response = await axios.get<Problem[]>(uri, config);
    setList(response.data);
  } catch (error: unknown) {
    console.log("Failed to fetch list:", error);
  }
};
export default getList;
