import { useNavigate } from "react-router-dom";
import { StyledProblemItem } from "styles/ProblemItem-styled";

const ProblemItem = (props) => {
    const navigate = useNavigate();

    return (
        <StyledProblemItem>
            <div className="container" state={props.state}>
            <span className="problem_id" state={props.state} onClick={() => { navigate(`/question/${props.pid}`); }}>{props.pid}</span>
            <span className="problem_title" onClick={() => { navigate(`/question/${props.pid}`); }}>{props.ptitle}</span>
            <span className="grade">점수 {props.grade}</span>
            <button className="button" state={props.state} onClick={() => navigate(`/solution/${props.pid}`)}>{props.state === "retry" ? "RE TRY" : "풀이보기"}</button>
            </div>
        </StyledProblemItem>

    );
}

export default ProblemItem;