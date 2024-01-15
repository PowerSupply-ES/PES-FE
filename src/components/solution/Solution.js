import React from 'react';
import { useState } from 'react';

function Solution() {
  return (
    <div className="solution_container">
      
        {/* 풀이 타이틀 */}
        <div className="solution_bar">
          {/* 타이틀 */}
          <div className="solution">
              <div className="solution_num">1001</div>
              <div className="solution_title">Analysis를 인당 2개씩 채워오세요!</div>
          </div>
      
          {/* 버튼 */}
          <div className="solutionBtn">
              <button className="btn_baekjoon">baekjoon</button>
              <button className="btn_challenge">challenge</button>
          </div>
        </div>


        {/* 성공인원수 */}
        <div className="pass_num">성공한 인원 수 8/20</div>

        {/* 풀이 목록 */}
        <SolvingList></SolvingList>

    </div>
  );
}

  
  
// 풀이목록 컴포넌트
function SolvingList(){
  return(
    <div className="solving_list">
      <div className="solving">

        <div className="left">
          <div className="userNum">제출번호</div>    
          <div className="userName">유저 아이디</div> 
        </div>
            
        <div className="right">
          <div className="process_num">1/2</div>  
          <div className="btn_goto_challenge">challenge</div>
        </div>
      </div>
    </div>
  )
}



export default Solution;