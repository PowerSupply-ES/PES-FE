import React from 'react';
import AdPart from "components/list/AdPart";
import { useNavigate } from 'react-router-dom';
import 'styles/css/menual.css';


import img_probList from 'assets/images/probList.png';
import img_solving from 'assets/images/solving.png';
import img_pass from 'assets/images/pass.png';
import img_pass_feed from 'assets/images/pass_feedback.png';
import img_fail from 'assets/images/fail.png';
import img_fail_feed from 'assets/images/fail_feedback.png';
import img_solvingList from 'assets/images/solvingList.png';


const Menual = () => {
  const navigate = useNavigate();

    return (
      <div>
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
            {/* <div className='title'>문제 풀기</div> */}


            <div className='img_container'>
                <img src={img_probList} className='img1'></img>
            </div>
            <div className='prob_info'><h2>문제Step.</h2>문제와 질문테스트 통과 시<br></br>
            다른 사람의 풀이들을 열람할 수 있어요
            </div>


            
        </div>


        {/* 문제 풀이 */}
        <div className='menual_solve'>
            <div className='solve_info'><h2>풀이Step.</h2>문제에 대한 예시를 보고<br></br>
                우측에 코드를 입력하여 문제풀이해요
            </div>
            <div className='img_container'>
              <img src={img_solving} className='img2'></img>
            </div>
            
        </div>



        {/* 질문 테스트*/}
             {/* pass */}
        <div className='menual_ques_pass'>
            <div className='ques_info'>
              <h2>질문Step.</h2>
              문제풀이 후, 2개 질문에 답변 시<br></br>
              재학생들의 피드백이 이루어집니다
            </div>

            <div className='case_container'>
            <div className='ques_case'>질문테스트 통과 시</div>
            </div>
            <div className='img_container'>
              <img src={img_pass} className='img3'></img>
              <p>1명 이상의 재학생에게 PASS를 받으면<br></br>
              통과!!
              </p>
              <img src={img_pass_feed} className='img4'></img>

            </div>
        </div>
              {/* fail */}
        <div className='menual_ques_fail'>
          <div className='case_container'>
            <div className='ques_case'>질문테스트 실패 시</div>
          </div>

            <div className='img_container'>
              <img src={img_fail} className='img5'></img>
              <p>1명 이상의 재학생에게 PASS를 받지 못하면<br></br>
              실패..
              </p>
              <img src={img_fail_feed} className='img6'></img>

            </div>
        </div>


        {/* 풀이 보기 */}
        <div className='menual_solving'>
            <div className='img_container'>
              <img src={img_solvingList} className='img7'></img>
            </div>
            <div className='solve_info'>
                다른 학생들의 풀이도 볼 수 있어요
            </div>
            
        </div>

        {/* 마무리멘트 */}
        <div className='finish'>
            <div className='info'>
                그럼, 시작해보세요!
            </div>
            <a onClick={()=>navigate('/list')}>문제 풀러 가기</a>
        </div>


        {/* feedback_재학생 */}
      </div>
    );
  };

  
export default Menual;