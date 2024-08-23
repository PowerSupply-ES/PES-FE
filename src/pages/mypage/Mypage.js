import MypageHook from "hooks/mypage/MypageHook";
import { FaCircleUser } from "react-icons/fa6";
import 'styles/css/App.css';
import 'styles/css/mypage.css';

const MyPage = () => {
    const {memberData, myProb, myFeedback} = MypageHook();

    return (
      <div className='content_mypage'>
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