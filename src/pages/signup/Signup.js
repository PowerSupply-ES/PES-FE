import React, { useState, useEffect} from 'react';
import serverConfig from '../../config';
import '../../styles/intro.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    memberEmail: '',
    memberPw: '',
    memberName: '',
    memberBaekId: '',
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

  return (
    <div className='intro'>

      <div className="signup-container">
        <h1>회원가입</h1>
        
        <form onSubmit={handleSubmit}>

          <div className="input-container">
            <label htmlFor="memberName"> 이름</label>
            <input
              type="text"
              id="memberName"
              name="memberName"
              value={formData.memberName}
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
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="memberBaekId"> 백준 아이디</label>
            <input
              type="text"
              id="memberBaekId"
              name="memberBaekId"
              value={formData.memberBaekId}
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
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="memberPhone"> 전화번호</label>
            <input
              type="text"
              id="memberPhone"
              name="memberPhone"
              value={formData.memberPhone}
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
