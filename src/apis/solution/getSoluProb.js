import axios from "axios"
import serverConfig from 'config';

// 문제 get API
const getSoluProb = async (problemId) => {
    const serverUrl = serverConfig.serverUrl;
    const uri = `/api2/problemtitle/`;

    try{
      const response = await axios.get(`${serverUrl}${uri}${problemId}`);
      return response.data;
    }catch(error){
      // TODO : 예외처리 자세히
      console.error('데이터 가져오기 실패:', error);
    }
    console.log('problemId:', problemId);
}

export default getSoluProb