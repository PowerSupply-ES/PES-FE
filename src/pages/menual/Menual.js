import React from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import AdPart from "components/list/AdPart";

import { FaCircleUser } from "react-icons/fa6";
import '../../styles/menual.css';


const Menual = () => {

    return (
      <div>
        <Header></Header>
        <AdPart/>
                
        {/* intro */}
        <div className='menual_intro'>
            <h2>PES는<br></br> 3가지 핵심 기능을 제공합니다</h2>
            <div className='content_menual'>

                <div className='wrap_container'>
                    <div className='wrap'><div className='keyword'>컴파일</div><div>신입생은 C언어로<br></br>문제를 푼다.</div></div>
                </div>
                <div className='wrap_container'>
                    <div className='wrap'><div className='keyword'>질문과 답변</div><div>신입생은 문제에 대한 <br></br>2가지 질문에 답변을 한다.</div></div>
                </div>
                <div className='wrap_container'>
                    <div className='wrap'><div className='keyword'>피드백</div><div>재학생은 신입생의 코드와 답변에<br></br>피드백을 한다.</div></div>
                </div>
    
            </div>
        </div>



        {/* 문제 목록 */}
        <div className='menual_problem'>
            
        </div>




        {/* 문제 풀기 */}




        {/* 질문 테스트 */}


        {/* 풀이 보기 */}


        {/* 피드백 하기 */}


        <Footer></Footer>
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
    <div className ='problemList' >
      {myProb.map((it) => (

        <div className='problems' key={it.answerId}>
          <p className='problemId'>{it.problemId}</p>
          <p className='problemTitle' onClick={() => gotoProb(it.answerId)}>{it.problemTitle}</p>
          <div className={`${it.answerState === 'success' ? 'btn_success' : it.answerState === 'fail' ? 'btn_fail' : 'btn_state'}`}>
            {it.answerState}</div>
        </div>

      ))}
    </div>
  );
}

  
export default Menual;