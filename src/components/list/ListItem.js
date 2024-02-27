import { useNavigate } from "react-router-dom";
import { StyledListItem } from "styles/ListItem-styled";

const ProblemItem = (props) => {
    const navigate = useNavigate();

    function goTo(answerId) {
        if (answerId) {
            sessionStorage.setItem('problemId', props.pid);
            navigate(`/question/${props.answerId}`);
        }
        else {
            navigate(`/problem/${props.pid}`);
        }
    }

    return (
        <StyledListItem state={props.state}>
            <div className="container" state={props.state}>
                <div className="problem_id" state={props.state} onClick={() => { goTo(props.answerId); }}>{props.pid}</div>
                <div className="problem_title" onClick={() => { goTo(props.answerId); }}>{props.ptitle}</div>
                <div className="grade">점수 {props.grade}</div>
                <button className="button" state={props.state} onClick={() => navigate(`/solution/${props.pid}`)}>
                    {(props.state === "success" || props.state === "fail") ? "풀이보기" : "LOCKED"}
                </button>
            </div>
        </StyledListItem>

    );
}

export default ProblemItem;