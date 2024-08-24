import { useNavigate } from "react-router-dom";
import {
  Container,
  ProblemId,
  ProblemTitle,
  Grade,
  Button,
} from "styles/styledComponent/ProblemItem-styled";

const ProblemItem = (props) => {
  const navigate = useNavigate();

  return (
    <Container state={props.state}>
      <ProblemId
        state={props.state}
        onClick={() => {
          navigate(`/question/${props.pid}`);
        }}
      >
        {props.pid}
      </ProblemId>
      <ProblemTitle
        onClick={() => {
          navigate(`/question/${props.pid}`);
        }}
      >
        {props.ptitle}
      </ProblemTitle>
      <Grade>점수 {props.grade}</Grade>
      <Button
        state={props.state}
        onClick={() => navigate(`/solution/${props.pid}`)}
      >
        {props.state === "retry" ? "RE TRY" : "풀이보기"}
      </Button>
    </Container>
  );
};

export default ProblemItem;
