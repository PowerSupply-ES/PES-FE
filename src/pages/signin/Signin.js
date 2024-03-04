import React, { useState } from 'react';
import '../../styles/intro.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    memberId: '',
    memberPw: ''
  });

  const uri = 'api/signin';

  const postSignin = () => {
    fetch(uri, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (!response.ok) {
        console.log('서버응답:', response);
        if (response.status === 401) {
          throw new Error('일치하는 정보가 없습니다');
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      }
      return response.json();
    })
    .then((responseData) => {
      const resultMessage = responseData.message;
      alert(resultMessage);
      window.location.href = '/list';

      sessionStorage.setItem('status', true);
      sessionStorage.setItem('memberId', formData.memberId);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }
  // useEffect(() => {
  //   postSignin();
  // }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSignin();
  };
  
  const goBack = () =>{
    window.history.back();
  }
    

  return (
    <div className='intro'>
      <div className='introduce'>
        <p>PowerSupply Education System</p>
        <h2>PowerSupply에 오신 것을<br></br> 환영합니다</h2>
        <p>지금 바로 시작해보세요</p>
      </div>

      <div className="login-container">
        <a onClick={()=>goBack()}>뒤로가기</a>
        <h2>PES</h2>
        <h4>로그인</h4>

        <form onSubmit={handleSubmit}> 
          <div className="login-input">
            <label htmlFor="memberId">아이디(학번)</label>
            <input
              type="text"
              id="memberId"
              name="memberId"
              value={formData.memberId}
              placeholder='학번을 입력해주세요'
              onChange={handleInputChange} /* 입력 값이 변경될 때 핸들러 추가 */
              required
            />
          </div>
          <div className="login-input">
            <label htmlFor="memberPw">비밀번호</label>
            <input
              type="password"
              id="memberPw"
              name="memberPw"
              value={formData.memberPw}
              placeholder='비밀번호를 입력해주세요'

              onChange={handleInputChange} /* 입력 값이 변경될 때 핸들러 추가 */
              required
            />
          </div>
          <button type="submit" className="btn_signin">
            로그인
          </button>
          <div className="move">
            <a href="signup">회원가입하기</a>
            {/* <a href="#">비밀번호찾기</a> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
