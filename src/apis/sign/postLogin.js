import axios from 'axios';

const postLogin = async(formData) => {
    const uri = 'api/signin';

    // 로그인 요청 api
    try{
      const res = await axios.post(uri, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
      })
      return res.data
    }catch(error){
      if(error.response && error.response.status === 401){
        throw new Error('일치하는 정보가 없습니다');
      }else if(error.response){
        throw new Error(`${error.response.status} ${error.response.statusText}`);
      }else{
        throw new Error('네트워크 오류가 발생했습니다');
      }
    }

}

export default postLogin;
