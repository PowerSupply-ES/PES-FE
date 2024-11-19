import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledListItem } from "styles/styledComponent";
import { ProblemItemProps } from "model/problemType";
// import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { RootState } from "stores/store"; // RootState 임포트

const ListItem: React.FC<ProblemItemProps> = (props) => {
  const navigate = useNavigate();
  const { memberStatus } = useSelector((state: RootState) => state.user); // redux에서 가져오기

  // 해당 문제로 이동 메서드
  const goToProb = (answerId: number | null) => {
    if (answerId) {
      // problemId 저장
      sessionStorage.setItem("problemId", props.pid.toString()); // sessionStorage저장은 문자열로 해야함
      const problemId = sessionStorage.getItem("problemId");
      console.log("problemId = ", problemId);
      navigate(`/question/${props.answerId}`);
    } else {
      navigate(`/problem/${props.pid}`);
    }
  };

  //추가 by성임
  // status가 "재학생"일 때는 props.state 값을 "success"로 설정,
  // 그 외에는 props.state 값 그대로 사용
  const state = memberStatus === "재학생" || "관리자" ? "success" : props.state;
  // console.log("state = ", state);
  // console.log("props.state = ", props.state);
  // console.log("memberStatus = ", memberStatus);

  return (
    <StyledListItem state={state}>
      <div className="container">
        <div
          className="problem_id"
          onClick={() => {
            goToProb(props.answerId);
          }}
        >
          {props.pid}
        </div>
        <div
          className="problem_title"
          onClick={() => {
            goToProb(props.answerId);
          }}
        >
          {props.ptitle}
        </div>
        <div className="grade">점수 {props.grade}</div>
        <button
          className="button"
          onClick={() => navigate(`/solution/${props.pid}`)}
          disabled={state === null} // state가 null일 때 버튼 비활성화
        >
          풀이보기
        </button>

        {/* TODO : 비로그인 시 풀이보기 선택안되도록 */}
        {/* TODO : 상태에 따른 버튼UI 적용하기 */}
        {/* <Button
                    // className="button"
                    color="primary"
                    onClick={() => navigate(`/solution/${props.pid}`)}
                    size="lg"
                    variant="outlined"
                    state={state}
                >풀이보기</Button> */}
      </div>
    </StyledListItem>
  );
};

export default ListItem;
