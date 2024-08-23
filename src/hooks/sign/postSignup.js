import axios from 'axios';

const postSignup = async(formData, isEmailValid) => {

    // 이메일 형식이 유효한지 체크
    if (!isEmailValid(formData.memberEmail)) {
      alert('이메일 형식이 아닙니다');
      return;
    }

    // 이름이 문자로만 입력되었는지 체크
    if (!/^[a-zA-Z가-힣]+$/.test(formData.memberName)) {
      alert('이름은 문자로 입력해주세요');
      return;
    }
    // TODO : 전화번호 형식이 맞는지 체크
    // TODO : 아이디가 숫자로만 입력되었는지 체크


    const uri = 'api/signup';
    
    // 회원가입 요청 api
    try{
        const res = await axios.post(uri, formData, {
          headers: {
              'Content-Type': 'application/json',
          },
        })
        return res.data
      }catch(error){
        if(error.response && error.response.status === 400){
          throw new Error('이미 사용 중인 이메일입니다.');
        }else if(error.response){
          throw new Error(`${error.response.status} ${error.response.statusText}`);
        }else{
          throw new Error('네트워크 오류가 발생했습니다');
        }
      }

}

export default postSignup;
