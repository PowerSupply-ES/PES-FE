import React, { useState, useEffect} from 'react';
import serverConfig from '../../config';
import '../../styles/intro.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    memberEmail: '',
    memberPw: '',
    memberName: '',
    memberGen: '',
    memberMajor: '',
    memberPhone: ''
  });

  const uri = 'api/signup';

  const postSignup = () => {

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
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((responseData) => {
        const resultMessage = responseData.message;
        alert(resultMessage);
        window.location.href = '/signin';
      })
      .catch((error) => {
        const errorMessage = '오류 발생: ' + error.message;
        alert(errorMessage);
      });
  }
  // useEffect(() => {
  //   postSignup();
  // }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSignup();
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

      <div className="signup-container">
        <a onClick={()=>goBack()}>뒤로가기</a>
        <h2>PES</h2>
        <h4>회원가입</h4>
        
        <form onSubmit={handleSubmit}>

          <div className="input-container">
            <label htmlFor="memberName"> 이름</label>
            <input
              type="text"
              id="memberName"
              name="memberName"
              value={formData.memberName}
              placeholder='이름을 입력해주세요'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="memberEmail">이메일</label>
            <input
              type="text"
              id="memberEmail"
              name="memberEmail"
              value={formData.memberEmail}
              placeholder='이메일을 입력해주세요'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="memberPw"> 비밀번호</label>
            <input
              type="password"
              id="memberPw"
              name="memberPw"
              value={formData.memberPw}
              placeholder='비밀번호를 입력해주세요'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="memberGen"> 기수</label>
            <input
              type="text"
              id="memberGen"
              name="memberGen"
              value={formData.memberGen}
              placeholder='기수를 입력해주세요'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="memberMajor"> 학과</label>
            <input
              type="text"
              id="memberMajor"
              name="memberMajor"
              value={formData.memberMajor}
              placeholder='학과를 입력해주세요'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="memberPhone"> 전화번호</label>
            <input
              type="tel"
              id="memberPhone"
              name="memberPhone"
              value={formData.memberPhone}
              placeholder='전화번호를 입력해주세요'
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="btn_intro">
            회원가입
          </button>
        </form>
      </div>
    </div>

  );
};

export default Signup;
