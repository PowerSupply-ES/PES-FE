import axios from "axios";
import { MemberRankList } from "model/userType";

// 재학생 rank GET 요청
const getJuniorRank = async (memberGen: number) => {
  try {
    const config = {
      withCredentials: true,
      params: {
        memberGen,
      },
    };

    const response = await axios.get<MemberRankList[]>(
      `/api/rank/junior`,
      config
    );

    if (response.status !== 204) {
      return response.data;
    }
    return []; // 데이터가 없을 때 빈 배열 반환
  } catch (error: unknown) {
    console.log(error);
    return []; // 오류 발생 시 빈 배열 반환
  }
};
export default getJuniorRank;
