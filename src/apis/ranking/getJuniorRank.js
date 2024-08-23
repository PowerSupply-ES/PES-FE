import axios from "axios";

// 재학생 rank GET 요청
const getJuniorRank = async(memberGen) => {
    try {
        const config = {
          withCredentials: true,
          params: {
            memberGen,
          },
        };
  
        const response = await axios.get(`/api/rank/junior`, config);
  
        if (response.status !== 204){ 
          return response.data;
        }
        return []; // 데이터가 없을 때 빈 배열 반환
        } catch (error) {
          console.log(error);
          return []; // 오류 발생 시 빈 배열 반환
    }
}
export default getJuniorRank