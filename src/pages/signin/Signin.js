import React, { useState, useEffect } from 'react';
import serverConfig from '../../config';
import '../../styles/intro.css';



const Signin = () => {
    const [formData, setFormData] = useState({
      memberEmail: '',
      memberPw: ''
    });


    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    };


    const handleSubmit = (e) => {
      // e.preventDefault();

      const uri = '/api/signin';

      fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((response) => {
        if (!response.ok) {
          console.log('응답:', response);
          throw new Error('네트워크 응답이 실패했다고.');
        }
        return response.json();
      })
      .then((responseData) => {
        const resultMessage = '로그인 성공: ' + responseData.message;
        alert(resultMessage);
        window.location.href = '/main';

        localStorage.setItem('status', true);
        localStorage.setItem('memberEmail', responseData.memberEmail);
        
        
      })
      .catch((error) => {
        const errorMessage = '오류 발생: ' + error.message;
        alert(errorMessage);
      });
    };


  return (
    <div className="login-container">
      <h1>로그인</h1>
      {/* onsubmit 이벤트 발생시 handlesubmit 함수호출 */}
      <form onSubmit={handleSubmit}> 
        <div className="input-container">
          <label htmlFor="memberEmail">이메일</label>
          <input
            type="text"
            id="memberEmail"
            name="memberEmail"
            value={formData.memberEmail}
            onChange={handleChange} // 입력값변경처리
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="memberPw">비밀번호</label>
          <input
            type="password"
            id="memberPw"
            name="memberPw"
            value={formData.memberPw}
            onChange={handleChange}
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
