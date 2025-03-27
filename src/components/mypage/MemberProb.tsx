import React from 'react'
import MyProb from './MyProb'
import { MyProbProps } from 'model/userType'


// 사용자 푼 문제 목록 컴포넌트
const MemberProb: React.FC<MyProbProps> = ({ myProb, navigate }) => {
  return (
    <div className="top">
      <div className="prob_top">
        <div className="mypage_btn">내가 푼 문제</div>
        <div className="probNum">{myProb.length}개</div>
      </div>

      <div className="myProblem">
        <MyProb myProb={myProb} navigate={navigate}></MyProb>
      </div>
    </div>
  )
}

export default MemberProb
