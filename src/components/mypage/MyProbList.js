import useMypage from "hooks/mypage/useMypage";
import MyProb from "./MyProb";
import { useNavigate } from "react-router-dom";

// 내가 푼 문제 list
const MyProbList = () => {
  const navigate = useNavigate();
  const { myProb } = useMypage();

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
  );
};

export default MyProbList;
