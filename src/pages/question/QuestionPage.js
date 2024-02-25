import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Header from "components/main/Header";
import { StyledQuestion } from 'styles/Question-styled';
import { StyledProblem } from "styles/Problem-styled";

const OPTIONS =    [
    { value: 0, name: "fail"},
    { value: 1, name: "pass"},
];

const QuestionPage = () => {
    var url = new URL(window.location.href);
    var answerId = url
        .pathname
        .split('/')[2];
    var passCount = 0;
    const problemId = sessionStorage.getItem('problemId');
    const userName = sessionStorage.getItem('memberName');

    const [state, setState] = useState("");
    const [title, setTitle] = useState([]);
    const [problem, setProblem] = useState([]);
    const [code, setCode] = useState("");
    const [qnA, setQnA] = useState([]);
    const [answerFst, setAnswerFst] = useState("");
    const [answerSec, setAnswerSec] = useState("");
    const [feedbacks, setFeedbacks] = useState([]);
    const [comment, setComment] = useState("");
    const [selected, setSelected] = useState(0);
    const textFst = useRef("");
    const textSec = useRef("");
    
    // 렌더링 시, answerState 필요
    // 질문 줄 때 (get /question) 같이 넘겨줌

    // getCode와 getQuestions는 항상 call
    // getFeedback은 아래 상태일 때만 call

    if (state === "comment" || "success" || "fail") {
        getFeedback();
    }

    // answerState 구분
    // - 질문 상태(question): 코드가 정상적으로 실행되어 질문에 답해야하는 상태 → 질문 테스트로 이동
    // => qnA O
    // - 커멘트 상태(comment): 커멘트를 기다리는 상태 → 질문테스트 답변 결과로 이동
    // => qnA O / qnA.answerFst, qnA.answerSec O / feedback 있을 수도 없을 수도
    // - 성공 상태(success): 모든 커멘트 sucess → 다른 사람의 코드도 확인 가능
    // - 실패 상태(fail): 실패 상태, 커멘트 중 fail있음→ 다른 사람의 코드 확인 가능

    // 피드백 구분
    // 모든 커멘트 pass
    // fail 있는 경우
    // 신입생, 본인 글에는 댓글 달 수 없음 처리
    // 댓글 중복으로 달 수 없음 처리
    // 2명까지만 달 수 있음 처리

    // 문제 제목 불러오기 (get)
    const getTitle = useCallback(async () => {
            try {
                const {data: response} = await axios.get(
                    `/api2/problemtitle/${problemId}`,
                    {withCredentials: true}
                );
                setTitle(response);
            } catch (error) {
                console.log(error);
            }
    }, [problemId]);

    useEffect(() => {
        getTitle();
    }, [getTitle]);

    // pass, fail 선택
    const SelectBox = (props) => {
        return (
            <select onChange={ e => setSelected(e.target.value)} value={selected}>
                {props.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        );
    };
    
    function FstHandler(e) {
        textFst.current = e.target.value;
    }

    function SecHandler(e) {
        textSec.current = e.target.value;
    }

    // 답변 제출
    function submitAnswer() {
        setAnswerFst(textFst.current);
        setAnswerSec(textSec.current);
        if (!answerFst || !answerSec) {
            alert("내용을 입력해주세요!");
        }
        else {
            postAnswer(answerFst, answerSec);
        }
    }

    // 댓글 제출
    function submitComment() {
        setComment(textFst.current);
        if (!comment) {
            alert("내용을 입력해주세요!");
        }
        if (!selected) {
            alert("통과 여부를 선택해주세요!");
        }
        else {
            postFeedback(comment, selected);
        }
    }

    // 댓글 제출 결과 alert
    function getAlert(response) {
        if (response === 400) {
            alert("이미 댓글을 달았습니다.");
        }
        else if (response === 403) {
            alert("댓글을 달 수 없습니다.");
        }
    }

    // 사용자가 작성한 코드 불러오기 (get)
    const getCode = useCallback(async () => {
        try {
            const {data: response} = await axios.get(
                `/api2/question/${answerId}`, 
                {withCredentials: true}
            );
            setCode(response.code);
        } catch (error) {
            console.log(error);
        }
    }, [answerId]);

    useEffect(() => {
        getCode();
    }, [getCode]);

    // 질문, 답변 블러오기 (get)
    const getQuestions = useCallback(async () => {
        try {
            const {data: response} = await axios.get(
                `/api/answer/${answerId}`,
                {withCredentials: true}
            );
            setQnA(response);
            setState(response.answerState);
        } catch (error) {
            console.log(error);
        }
    }, [answerId]);

    useEffect(() => {
        getQuestions();
    }, [getQuestions]);

    // 질문 답변하기 (post)
    async function postAnswer(answerFst, answerSec) {
        try {
            await axios.post(
                `/api/answer/${answerId}`,
                {
                    answerFst: answerFst,
                    answerSec: answerSec
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    // 댓글 불러오기 (get)
    async function getFeedback() {
        try {
            const {data: response} = await axios.get(`/api/comment/${answerId}`, {withCredentials: true});
            // writerEmail
            // writerName
            // commentContent
            // pass, fail 여부 받아야 할 듯? (최종 success, fail 결과 출력을 위해서)
            setFeedbacks(response);
            for (let i = 0; i < response.length; i++) {
                if (response[i].commentPassFail === 1) {
                    passCount++;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    // 댓글 달기 (post)
    async function postFeedback(comment, selected) {
        try {
            const {data: response} = await axios.post(
                `/api/comment/${answerId}`,
                {
                    comment: comment,
                    commentPassFail: selected
                }
            )
            getFeedback();
            getAlert(response);
        } catch (error) {
            console.log(error);
        }
    }
    
    function renderAnswerUI() {
        return (
            <StyledQuestion>
                <StyledProblem>
                    <div className="problem_header">
                        <span className="problem_id">{problemId}</span>
                        <span className="header_title">{title.problemTitle}</span>
                        <span>{title.problemScore}</span>
                        <div className="code_container">{code}</div>
                    </div>
                </StyledProblem>
                {
                    (!qnA.answerFst || !qnA.answerSec) 
                    // answerState: question (qnA만 있음, 답변해야 하는 상태)
                        ? <> <div className="question_header"> <div className="question_id">질문 1</div>
                        <span className="header_title">{qnA.questionContentFst}</span>
                    </div>
                    <textarea className="answer_input" onChange={FstHandler}/>
                    <div className="question_header">
                        <div className="question_id">질문 2</div>
                        <span className="header_title">{qnA.questionContentSec}</span>
                    </div>
                    <textarea className="answer_input" onChange={SecHandler}/>
                    <button className="answer_button" onClick={submitAnswer}>답변하기</button> </>
                    // answerState: comment (qnA O / qnA.answerFst, qnA.answerSec O / feedback 0개 or 1개)
                    // answerState: success
                    // answerState: fail
                    : <> 
                    <div className="question_header"> <div className="question_id">질문 1</div>
                        <span className="header_title">{qnA.questionContentFst}</span>
                    </div>
                        <div className="code_container">{qnA.answerFst}</div>
                        <div className="question_header"> <div className="question_id">질문 2</div>
                        <span className="header_title">{qnA.questionContentSec}</span>
                    </div>
                            <div className="code_container">{qnA.answerSec}</div>
                        </>
                }
            </StyledQuestion>
        );
    }

    function renderFeedbackUI() {

        const feedbackArray = feedbacks
            ? Object.values(feedbacks)
            : [];
            
        return (
            <StyledQuestion>
            {feedbackArray.length > 0 && (
                feedbackArray.map((feedback, index) => (
                    <div key={index}>
                        <div className="question_header">
                        <span className="title">{`이메일: ${feedback.writerEmail}`}</span>
                        <span className="title">{`Writer Name: ${feedback.writerName}`}</span>
                        </div>
                        <div className="feedback_container">{feedback.commentContent}</div>
                        {(feedback.commentPassFail === 1) ? <><div>pass</div></> : <><div>fail</div></>}
                    </div>
                ))
            )}

            {(feedbackArray.length <= 1) && (state === "comment") && (
                <div>
                    <div className="question_header">
                        <SelectBox options={OPTIONS} defaultValue="pass"></SelectBox>
                    </div>
                    <textarea className="answer_input" onChange={FstHandler}/>
                    <button className="answer_button" onClick={submitComment}>답변하기</button>
                </div>
            )}

            {(passCount >= 2) ? <><div>pass</div></> : <><div>fail</div></>}
            </StyledQuestion>
        );
    }

    return(
        <div>
            <Header/>
            {renderAnswerUI()}
            {renderFeedbackUI()}
        </div>
    );
}

export default QuestionPage;