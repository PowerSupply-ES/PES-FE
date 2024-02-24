import { useNavigate } from "react-router-dom";
import { StyledListItem } from "styles/ListItem-styled";

const ProblemItem = (props) => {
    const navigate = useNavigate();

    function goTo(answerId) {
        if (answerId) {
            localStorage.setItem('problemId', props.pid);
            navigate(`/question/${props.answerId}`);
        }
        else {
            navigate(`/problem/${props.pid}`);
        }
    }

    return (
        <StyledListItem>
            <div className="container" state={props.state}>
                <div className="problem_id" state={props.state} onClick={() => { goTo(props.answerId); }}>{props.pid}</div>
                <div className="problem_title" onClick={() => { goTo(props.answerId); }}>{props.ptitle}</div>
                <div className="grade">점수 {props.grade}</div>
                { (props.state === "success" || props.state === "fail") && 
                    <button className="button" onClick={() => navigate(`/solution/${props.pid}`)}>
                        {props.state === "retry" ? "RE TRY" : "풀이보기"}
                    </button>
                }
            </div>
        </StyledListItem>

    );
}

export default ProblemItem;