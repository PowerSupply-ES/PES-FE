import React from 'react';
import { useState, useEffect } from 'react';
import Header from 'components/main/Header';
import serverConfig from '../../config';

function Solution() {

  const [problemData, setProblemData] = useState({
    problem_id: '',
    context: ''
  });

  

  const sendGetProblem = () => {
    const serverUrl = serverConfig.pythonUrl;

    // 코드합치면 위아래 주석바꾸기
    // const problemId = localStorage.getItem('problemId');
    const problemId= 1;

    const uri = `/api2/problem/`;

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

      console.log('problemData.problem_id:', problemData.problem_id);
      
      localStorage.setItem('problemId', problemData.problem_id);


      console.log('problemId:', problemId);
      
  };

  useEffect(() => {
    sendGetProblem();
  }, []);

  const [solveData, setSolveData] = useState([]);

  const sendGetSolve = () => {
    // 코드합치면 위아래 주석바꾸기
    // const problemId = localStorage.getItem('problemId');
    const problemId= 1
    
    const uri = 'api/answerlist/';

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
  };

  useEffect(() => {
    sendGetSolve();
  }, []);

  return (
    <>
      <Header></Header>

      <div className="solution_container">
        <div className="solution_bar">
          <div className="solution">
            <div className="solution_num">{problemData.problem_id}</div>
            <div className="solution_title">{problemData.context}</div>
          </div>
        </div>

        <div className="pass_num"></div>

        {/* 풀이 목록 */}
        <SolvingList solveData={solveData}></SolvingList>
      </div>
    </>
  );
}

// 풀이목록 컴포넌트
function SolvingList({ solveData }) {

  const gotoProblem = ( answerId ) =>{
    console.log('answerId: ',answerId);
    window.location=`question/${answerId}`;
  }


  return (
    <div className="solving_list">
      {solveData.map((it) => (
        <div className="solving" key={it.answerId}>
          <div className="left">
            <div className="userNum">{it.answerId}</div>
            <div className="userName">{it.memberEmail}</div>
          </div>
          <div className="right">
            {/* <div className="process_num">1/2</div> */}
            <button className="btn_goto_challenge" onClick={() => gotoProblem(it.answerId)}>challenge</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Solution;
