import React, { useState, useEffect } from 'react';
import serverConfig from '../config';
import '../css/signin.css';


const Signin = () => {
  const [memberEmail, setMemberEmail] = useState('');
  const [memberPw, setMemberPw] = useState('');

  const handleFormSubmit = async (event) => {

    // POST 요청에 보낼 데이터를 JavaScript 객체로 준비
    const formData = {
      memberEmail: memberEmail,
      memberPw: memberPw
    };


    try {
      const response = await fetch(`${serverConfig.serverUrl}/api/signin`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });


      if (!response.ok) {
        throw new Error('네트워크 응답이 실패했습니다.');
      }

      const responseData = await response.json();

      // if (responseData.message) {
      //   localStorage.setItem('stuNum', memberEmail);
      // }

        //   const actualToken = document.cookie.replace(/(?:(?:^|.*;\s*)Authorization\s*=\s*([^;]*).*$)|^.*$/, "$1");
        //   localStorage.setItem('storageToken', actualToken);

      // 페이지 이동
      // window.location.href = `${serverConfig.serverUrl}/Main`;
      window.location.href = `${serverConfig.serverUrl}/Main`;


    } catch (error) {
      const errorMessage = '로그인 실패';
      console.error(errorMessage);
    }
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-container">
          <label htmlFor="member_email">이메일</label>
          <input
            type="text"
            id="member_email"
            name="member_email"
            value={memberEmail}
            onChange={(e) => setMemberEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={memberPw}
            onChange={(e) => setMemberPw(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn_intro">
          로그인
        </button>
        <div className="move">
          <a href="signup">회원가입하기</a>
          <a href="#">비밀번호찾기</a>
        </div>
      </form>
    </div>
  );
};

export default Signin;
