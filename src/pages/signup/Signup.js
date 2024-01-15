import React, { useState, useEffect } from 'react';
import serverConfig from '../config';
import '../css/signin.css';

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


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serverUrl = serverConfig.serverUrl;
    const uri = '/api/signup';

    fetch(serverUrl + uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('네트워크 응답이 실패했습니다.');
        }
        return response.json();
      })
      .then((responseData) => {
        const resultMessage = '회원가입 성공: ' + responseData.message;
        alert(resultMessage);
        window.location.href = serverUrl + '/signin';
      })
      .catch((error) => {
        const errorMessage = '오류 발생: ' + error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="signup-container">
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>


        {/* input fields */}
        <div className="input-container">
          <label htmlFor="memberName"> 이름</label>
          <input
            type="text"
            id="memberName"
            name="memberName"
            value={formData.memberName}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="memberPw"> 비밀번호</label>
          <input
            type="text"
            id="memberPw"
            name="memberPw"
            value={formData.memberPw}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn_intro">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
