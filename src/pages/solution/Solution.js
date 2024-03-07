import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import serverConfig from '../../config';


function Solution() {
  const url = new URL(window.location.href);
  const problemId = url
      .pathname
      .split('/')[2];


  const [problemData, setProblemData] = useState({
    problemId: '',
    problemTitle: '',
    problemScore:''
  });
  
  //문제 불러오기
  const sendGetProblem = useCallback(async() => {
    const serverUrl = serverConfig.serverUrl;
    const uri = `/api2/problemtitle/`;

    fetch(`${serverUrl}${uri}${problemId}`, {
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
        setProblemData(data);

      })
      .catch(error => {
        console.error('데이터 가져오기 실패:', error);
      });


      console.log('problemId:', problemId);
      
  }, [problemId]);

  useEffect(() => {
    sendGetProblem();
  }, [sendGetProblem]);

  
  //풀이 불러오기
  const [solveData, setSolveData] = useState([]);

  const sendGetSolve = useCallback(async() => {

    const uri = '../api/answerlist/';

    fetch(`${uri}${problemId}`, {
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
        setSolveData(data);
        console.log('서버응답:', data);

      })
      .catch(error => {
        console.error('데이터 가져오기 실패:', error);
      });
  }, [problemId]);

  useEffect(() => {
    sendGetSolve();
  }, [sendGetSolve]);

  return (
    <>
      <Header></Header>

      <div className="solution_container">
        <div className="solution_bar">
          <div className="solution">
            <div className='left'>
              <div className="solution_num">{problemData.problemId}</div>
              <div className="solution_title">{problemData.problemTitle}</div>
            </div>
            
            <div className="prob_score">{problemData.problemScore}<p>점</p></div>

          </div>
        </div>

        <div className="pass_num"></div>

        {/* 풀이 목록 */}
        <SolvingList solveData={solveData}></SolvingList>
      </div>
      <Footer></Footer>
    </>
  );
}

// 풀이목록 컴포넌트
function SolvingList({ solveData }) {

  const gotoProblem = ( answerId ) =>{
    console.log('answerId: ',answerId);
    window.location=`../question/${answerId}`;
  }


  return (
    <div className="solving_list">
      {solveData.map((it) => (
        <div className="solving" key={it.answerId}>
          <div className="left">
            <div className="userGen">{it.memberGen}<p>기 </p></div>
            <div className="userName">{it.memberName}</div>
          </div>
          <div className="right">
            {/* <div className="process_num">1/2</div> */}
            <button className="btn_goto_challenge" onClick={() => gotoProblem(it.answerId)}>풀이보기</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Solution;
