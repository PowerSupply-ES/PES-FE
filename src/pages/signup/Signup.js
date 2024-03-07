import React, { useState } from 'react';
import '../../styles/intro.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    memberId:'',
    memberEmail: '',
    memberPw: '',
    memberName: '',
    memberGen: '',
    memberMajor: '',
    memberPhone: ''
  });

  // 이메일 형식 검사
  const isEmailValid = (email) => {
    // 이메일 형식 검사 정규식
    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // 이메일이 .net 또는 .com 으로 끝나는지 확인
    const validEndings = ['.net', '.com'];
    const hasValidEnding = validEndings.some(ending => email.endsWith(ending));

    // return emailRegex.test(email) && hasValidEnding;
    return hasValidEnding;

  };
  
  const uri = 'api/signup';

  const postSignup = () => {

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


    // 전화번호 형식이 맞는지 체크?

    // 아이디가 숫자로만 입력되었는지 체크?


    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          // console.log('서버응답:', response);
          if (response.status === 400) {
            throw new Error("이미 사용 중인 이메일입니다.");
          } else {
            throw new Error(`${response.status} ${response.statusText}`);
          }
        }
        return response.json();
      })
      .then((responseData) => {
        const resultMessage = responseData.message;
        alert(resultMessage);
        window.location.href = '/signin';
      })
      .catch((error) => {
        const errorMessage = error.message;
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

          <div className="signup-input">
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
          <div className="signup-input">
            <label htmlFor="memberId">아이디(학번)</label>
            <input
              type="text"
              id="memberId"
              name="memberId"
              value={formData.memberId}
              placeholder='학번을 입력해주세요'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="signup-input">
            <label htmlFor="memberEmail">이메일</label>
            <input
              type="email"
              id="memberEmail"
              name="memberEmail"
              value={formData.memberEmail}
              placeholder='이메일을 입력해주세요'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="signup-input">
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

          <div className="signup-input">
            <label htmlFor="memberGen"> 기수</label>
            <input
              type="number"
              id="memberGen"
              name="memberGen"
              value={formData.memberGen}
              placeholder='신입생은 34기입니다'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="signup-input">
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

          <div className="signup-input">
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

          <button type="submit" className="btn_signup">
            회원가입
          </button>
        </form>
      </div>
    </div>

  );
};

export default Signup;
