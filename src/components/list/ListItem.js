import { useNavigate } from "react-router-dom";
import { StyledListItem } from "styles/styledComponent/ListItem-styled";
import Button from "@mui/joy/Button";

const ProblemItem = (props) => {
  const navigate = useNavigate();
  const memberStatus = sessionStorage.getItem("memberStatus");

  const goToProb = (answerId) => {
    if (answerId) {
      sessionStorage.setItem("problemId", props.pid);
      navigate(`/question/${props.answerId}`);
    } else {
      navigate(`/problem/${props.pid}`);
    }
  };

  //추가 by성임
  // status가 "재학생"일 때는 props.state 값을 "pass"로 설정,
  //그 외에는 props.state 값 그대로 사용
  const state = memberStatus === "재학생" || "관리자" ? "success" : props.state;

  return (
    <StyledListItem state={state}>
      <div className="container" state={state}>
        <div
          className="problem_id"
          state={state}
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
          state={state}
          onClick={() => navigate(`/solution/${props.pid}`)}
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

export default ProblemItem;
