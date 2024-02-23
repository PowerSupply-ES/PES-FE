import React from 'react';
import { useState, useEffect } from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../App.css';

const MyPage = () => {
    //정보리스트
    const [memberData, setMemberData] = useState({
      memberEmail: '',
      memberName: '',
      memberGen: '',
      memberStatus: '',
      memberMajor: '',
      memberPhone: '',
      // memberScore: ''
    });

    //내문제리스트
    const [myProb, setMyProb] = useState({
      problemId: '',
      problemTitle: '',
      problemScore: '',
      answerId: '',
      answerState: '',
      finalScore: ''
    });
  
    //내피드백리스트
    const [myFeedback, setMyFeedback] = useState({
      answerId: '',
      memberGen: '',
      mameberName: '',
      commentPassFail: '',
      commentContent: ''
    });


    // const serverUrl = serverConfig.serverUrl;
  
    // 내 정보
    const sendGetInfo = () => {
      const uri = 'api/mypage/information';
  
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
  
    // 내가 푼 문제
    const sendGetProb = () => {
      const uri = 'api/mypage/mysolve';
  
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
          setMyProb(data);
        })
        .catch(error => {
          console.error('데이터 가져오기 실패:', error);
        });
    };


    // 내 feedback
    const sendGetFeedback = () => {
      const uri = 'api/mypage/myfeedback';
  
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
          setMyFeedback(data);
        })
        .catch(error => {
          console.error('데이터 가져오기 실패:', error);
        });
    };


    useEffect(() => {
      sendGetInfo();
      sendGetProb();
      sendGetFeedback();
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
                
                <div className='myProblem'>
                  <div><p>{myProb.problemId}</p></div>
                  <div><p>{myProb.problemTitle}</p></div>
                  <div><p>{myProb.problemScore}</p></div>
                  <div><p>{myProb.answerId}</p></div>
                  <div><p>{myProb.answerState}</p></div>
                  <div><p>{myProb.finalScore}</p></div>
                </div>
              </div>
              

              {/* 내 피드백 */}
              {/* 신입생,재학생에 따라 feedback 띄워주기 */}
              <div className='bottom'>
                <div className='mypage_btn'>my feedback</div>
                <div className='myFeedback'>
                  <div><p>{myFeedback.answerId}</p></div>
                  <div><p>{myFeedback.memberGen}</p></div>
                  <div><p>{myFeedback.mameberName}</p></div>
                  <div><p>{myFeedback.commentPassFail}</p></div>
                  <div><p>{myFeedback.commentContent}</p></div>
                  
                </div>
              </div>

            </div>

          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };
  
  export default MyPage;