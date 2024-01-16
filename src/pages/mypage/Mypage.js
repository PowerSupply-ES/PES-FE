import React from 'react';
import { useState, useEffect } from 'react';
import Header from 'components/main/Header';
import serverConfig from '../../config';
import '../../App.css';

const MyPage = () => {
    const [memberData, setMemberData] = useState({
      memberStuNum: '',
      memberName: '',
      memberGen: '',
      memberMajor: '',
      memberPhone: '',
      memberStatus: '',
      memberEmail: '',
      memberScore: '',
      memberGitUrl: '',
    });
  
    const serverUrl = serverConfig.serverUrl;
    const uri = 'api/mypage';
  
    const sendGetRequest = () => {
      const memberEmail = localStorage.getItem('memberEmail');
  
      fetch(`${uri}?memberEmail=${memberEmail}`, {
        method: 'GET',
      })
        .then(response => {
          if (!response.ok) {
            console.log('서버응답:', response);
            throw new Error(`데이터 가져오기 실패: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          setMemberData(data);
        })
        .catch(error => {
          console.error('데이터 가져오기 실패:', error);
        });
    };
  
    useEffect(() => {
      sendGetRequest();
    }, []);
  
  
    return (

      <div>
        <Header></Header>

        <div className='content_mypage'>

          <h2>마이페이지</h2>
          
          <div className="memberInfo">
            <p>이메일: {memberData.memberEmail}</p>
            <p>백준 아이디: {memberData.memberBaekId}</p>
            <p>이름: {memberData.memberName}</p>
            <p>기수: {memberData.memberGen}</p>
            <p>상태: {memberData.memberStatus}</p>
            <p>학과: {memberData.memberMajor}</p>
            <p>전화번호: {memberData.memberPhone}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MyPage;