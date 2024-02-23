import React from 'react';
import { useState, useEffect } from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
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
    const uri = 'api/mypage/information';
  
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

          <h2>My 페이지</h2>
          <div className='mypage_content'>
            <div className='left'>
              {/* 사용자 정보 */}
              <div className="memberInfo">
                <div className='info_name'><p>{memberData.memberName}</p><p>님</p></div>

                <div><p>{memberData.memberEmail}</p></div>
                <div><p>{memberData.memberGen}</p><p>기</p></div>
                <div><p>{memberData.memberStatus}</p><p>중</p></div>
                <div><p>{memberData.memberMajor}</p><p>학과</p></div>
                <div><p>{memberData.memberPhone}</p></div>
              </div>
            </div>

            <div className='right'>
              {/* 내가 푼 문제 */}
              <div className='top'>
                <div className='mypage_btn'>내가 푼 문제</div>
                <div className='myProblem'></div>
              </div>
              

              {/* 내 피드백 */}
              <div className='bottom'>
                <div className='mypage_btn'>my feedback</div>
                <div className='myFeedback'></div>
              </div>

            </div>

          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };
  
  export default MyPage;