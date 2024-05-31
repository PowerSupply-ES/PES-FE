import { useNavigate } from "react-router-dom";
import { StyledListItem } from "styles/styledComponent/ListItem-styled";

const ProblemItem = (props) => {
    const navigate = useNavigate();
    const memberStatus = sessionStorage.getItem('memberStatus');

    // console.log('memberStatus = ',memberStatus);
    // console.log('props = ',props);
    // console.log('props.state = ',props.state);


    function goTo(answerId) {
        if (answerId) {
            sessionStorage.setItem('problemId', props.pid);
            navigate(`/question/${props.answerId}`);
        }
        else {
            navigate(`/problem/${props.pid}`);
        }
    }

    //추가
    // status가 "재학생"일 때는 props.state 값을 "pass"로 설정, 
    //그 외에는 props.state 값 그대로 사용
    const state =
        memberStatus === "재학생" ? "success" 
        : props.state;

    return (
        <StyledListItem state={state}>
            <div className="container" state={state}>
                <div className="problem_id" state={state} onClick={() => { goTo(props.answerId); }}>{props.pid}</div>
                <div className="problem_title" onClick={() => { goTo(props.answerId); }}>{props.ptitle}</div>
                <div className="grade">점수 {props.grade}</div>
                <button className="button" state={state} 
                    onClick={() => navigate(`/solution/${props.pid}`)}>
                    풀이보기
                </button>
            </div>
        </StyledListItem>

    );
}

export default ProblemItem;