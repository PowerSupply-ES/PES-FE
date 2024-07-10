import React from 'react';
import { useState, useEffect } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import '../../styles/css/App.css';
import '../../styles/css/mypage.css';


const MyPage = () => {
    //정보리스트
    const [memberData, setMemberData] = useState();

    //내문제리스트
    const [myProb, setMyProb] = useState([]);
  
    //내피드백리스트
    const [myFeedback, setMyFeedback] = useState([]);
  
    // 내 정보 GET 요청
    const sendGetInfo = () => {
      const uri = '/api/mypage/information';
  
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
  
    // 내가 푼 문제 GET요청
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


    // 내 feedback GET요청
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
          console.log("data : ", data);
        })
        .catch(error => {
          console.error('데이터 가져오기 실패:', error);
        });
    };


    useEffect(() => {
      sendGetInfo();
      // 로그인 상태를 체크하여 로그인되어 있지 않다면 리스트 페이지로 이동하고 알림창 띄우기
      if (sessionStorage.getItem('status') === null || sessionStorage.getItem('status') === undefined) {
        console.log('로그인 안돼있음');
        
        alert("로그인 해주세요.");
        window.location.href = 'main';
        return; // 함수를 여기서 종료시킴
      }
      sendGetProb();
      sendGetFeedback();
    }, []);
    

  
    return (
      <div>

        <div className='content_mypage'>

          {/* <h2>My 페이지</h2> */}
          <div className='mypage_content'>
            <div className='left'>
              {/* 사용자 정보 */}
              <div className="memberInfo">
                <div className='info_name'>
                  <FaCircleUser size={40} style={{color:'grey'}}></FaCircleUser>
                  <p>{memberData.memberName}</p>
                  {/* <p>님</p> */}
                </div>
                <div className='text'><div>학 번</div><p>{memberData.memberId}</p></div>
                <div className='text'><div>이메일</div><p>{memberData.memberEmail}</p></div>
                <div className='text'><div>기 수</div><p>{memberData.memberGen}</p></div>
                <div className='text'><div>상 태</div><p>{memberData.memberStatus}</p></div>
                <div className='text'><div>학 과</div><p>{memberData.memberMajor}</p></div>
                <div className='text'><div>전화 번호</div><p>{memberData.memberPhone}</p></div>
              </div>
            </div>

            <div className='right'>
              {/* 내가 푼 문제 */}
              <div className='top'>
                <div className='prob_top'>
                  <div className='mypage_btn'>내가 푼 문제</div>
                  <div className='probNum'>{myProb.length}개</div>
                  
                </div>
                
                <div className='myProblem'>
                  <MyProblem myProb={myProb}></MyProblem>
                </div>
              </div>
              

              {/* 내 피드백 */}
              {/* 신입생,재학생에 따라 feedback 띄워주기 */}
              <div className='bottom'>
                <div className='feed_top'>
                  <div className='mypage_btn'>my feedback</div>
                  <div className='feedNum'>{myFeedback.length}개</div>
                </div>
                

                <div className='myFeedback'>
                 <MyFeed myFeedback={myFeedback}></MyFeed>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  };


  // 내가 푼 문제 컴포넌트
  function MyProblem({myProb}){

    const gotoProb = ( problemId ) =>{
      console.log('problemId: ',problemId);
      window.location=`question/${problemId}`;
      // question/answerid
    }
    return (
    <div className="problemList">
      {myProb.length === 0 ? (
        <div className="noProblems">
          아직 푼 문제가 없어요!
        </div>
      ) : (
        myProb.map((it) => (
          <div className="problems" key={it.answerId}>
            <p className="problemId">{it.problemId}</p>
            <p className="problemTitle" onClick={() => gotoProb(it.answerId)}>
              {it.problemTitle}
            </p>

            <p className="finalScore">{it.finalScore}점</p>
            <p className="dash">/</p>
            <p className="problemScore">{it.problemScore}점</p>

            <div
              className={`${
                it.answerState === 'success'
                  ? 'btn_success'
                  : it.answerState === 'fail'
                  ? 'btn_fail'
                  : 'btn_state'
              }`}
            >
            {it.answerState==='question'
              ?'질문대기'
              :it.answerState==='comment'
              ?'피드백대기'
              :it.answerState}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

  // 내 피드백 컴포넌트
  function MyFeed({myFeedback}){

    const gotoFeed = ( problemId ) =>{
      console.log('problemId: ',problemId);
      window.location=`question/${problemId}`;
      // question/answerid
    }
    return (
      // 클래스이름 수정하기
    <div className ='FeedList' >
      {myFeedback.length === 0 ? (
        <div className="noFeed">
          아직 받은 피드백이 없어요!
        </div>
      ) : (
      myFeedback.map((it) => (
        <div className='feeds' key={it.answerId}>
          <p className='problemId'>{it.answerId}</p>

          <p className='memberGenName'>{it.memberGen}기&nbsp;&nbsp;
            {it.memberName}
          </p>

          <p className='commentContent' 
            onClick={() => gotoFeed(it.answerId)}>
            {it.commentContent}
          </p>

          <div className={`${
            it.commentPassFail === 1 
            ? 'btn_success' 
            : it.commentPassFail === 0
            ? 'btn_fail' 
            : 'btn_state'
          }`}
          >
            {it.commentPassFail === 1 ? "success"
            :it.commentPassFail === 0 ? "fail"
            :it.commentPassFail}
            </div>
        </div>

      ))
    )
    }
    </div>
  );
  }

  
export default MyPage;