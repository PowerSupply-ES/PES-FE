import React from 'react';
import { useState, useEffect } from 'react';
import Header from 'components/main/Header';
import serverConfig from '../../config';
import '../../App.css';

const MyPage = () => {
    const [memberData, setMemberData] = useState({
      memberEmail: '',
      memberName: '',
      memberGen: '',
      memberStatus: '',
      memberMajor: '',
      memberPhone: '',
      // memberScore: ''
    });
  
    // const serverUrl = serverConfig.serverUrl;
    const uri = 'api/mypage';
  
    const sendGetRequest = () => {
  
      fetch(`${uri}`, {
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
            <div><p>이메일</p><p>{memberData.memberEmail}</p></div>
            <div><p>이름</p><p>{memberData.memberName}</p></div>
            <div><p>기수</p><p>{memberData.memberGen}</p></div>
            <div><p>상태</p><p>{memberData.memberStatus}</p></div>
            <div><p>학과</p><p>{memberData.memberMajor}</p></div>
            <div><p>전화번호</p><p>{memberData.memberPhone}</p></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MyPage;