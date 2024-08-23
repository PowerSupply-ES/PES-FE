import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import MemberStatus from "components/question/MemberStatus";
import CodeEditor from "components/problem/CodeEditor";


import { StyledQuestion } from 'styles/styledComponent/Question-styled';
import { StyledProblem } from "styles/styledComponent/Problem-styled";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
    let url = new URL(window.location.href);
    let answerId = url
        .pathname
        .split('/')[2];

    const problemId = sessionStorage.getItem('problemId');
    // console.log("problemId = ",problemId);

    const navigate = useNavigate();

    const [state, setState] = useState("");
    const [title, setTitle] = useState([]);
    const [code, setCode] = useState("");
    const [qnA, setQnA] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [passCount, setPassCount] = useState(0);
    const [problem, setProblem] = useState([]);

    const textFst = useRef("");
    const textSec = useRef("");

    const [selectedOption, setSelectedOption] = useState(null);
    const[isDropdownOpen,setIsDropdownOpen] = useState(false);

    const [buttonColor1, setButtonColor1] = useState('rgba(4, 202, 0, 0.6)');
    const [buttonColor2, setButtonColor2] = useState('rgba(244, 117, 117, 0.6)');


    const passButtonClick = () => {
        // 다른 버튼 색상 초기화
        setButtonColor2('rgba(244, 117, 117, 0.6)');
        // 현재 버튼 색깔 변경
        setButtonColor1('rgba(4, 202, 0, 1)');
    }
    const failButtonClick = () => {
        // 다른 버튼 색상 초기화
        setButtonColor1('rgba(4, 202, 0, 0.6)');
        // 현재 버튼 색깔 변경
        setButtonColor2('rgba(244, 117, 117, 1)');
    }

    const toggleDropdown = () => {
        if (!isDropdownOpen) {
            getProblem();
        }
        setIsDropdownOpen((상태)=>!상태);
    }
    
    useEffect(() => {
        if (state === "comment" || state === "success" || state === "fail") {
            getFeedback();
        }
    }, [state]);

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
    const handleOption = (option) => {
        setSelectedOption(option);
    }
    
    function FstHandler(e) {
        textFst.current = e.target.value;
    }

    function SecHandler(e) {
        textSec.current = e.target.value;
    }

    // 답변 제출
    function submitAnswer() {
        if (!textFst.current || !textSec.current) {
            alert("내용을 입력해주세요!");
        }
        else {
            const isConfirmed = window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?");
    
            if (isConfirmed) {
                postAnswer(textFst.current, textSec.current);
            }
        }
    }
    

    // 댓글 제출
    function submitComment() {
        if (!textFst.current) {
            alert("내용을 입력해주세요!");
        }
        if (!selectedOption) {
            alert("통과 여부를 선택해주세요!");
        }
        else {
            const isConfirmed = window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?");
    
            if (isConfirmed) {
                postFeedback(textFst.current, selectedOption);
            }
        }
    }

    // 댓글 제출 결과 alert
    function getAlert(response) {
        if (response === 400) {
            alert("이미 댓글을 달았습니다.");
        }
        else if (response === 403) {
            alert("접근할 수 있는 사용자가 아닙니다.");
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
            // console.log("response.code = ", response.code);

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

            alert("성공적으로 답변을 등록했습니다.");
            window.location.reload(); 

        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("이미 답변이 등록되어 있습니다.");
            } 
            else if (error.response && error.response.status === 403) {
                alert("접근할 수 있는 사용자가 아닙니다.");
                // navigate("/signin");
            }
            else {
                console.log(error);
            }
        }
    }

    // 댓글 불러오기 (get)
    const getFeedback = useCallback(async () => {
        try {
            const {data: response} = await axios.get(`/api/comment/${answerId}`, {withCredentials: true});
            let passCount = 0;
            setFeedbacks(response);
            for (let i = 0; i < response.length; i++) {
                if (response[i].commentPassFail === 1) {
                    passCount++;
                }
            }
            setPassCount(passCount);
        } catch (error) {
            console.log(error);
        }
    }, [answerId]);

    // 댓글 달기 (post)
    async function postFeedback(comment, selected) {
        try {
            const response = await axios.post(
                `/api/comment/${answerId}`,
                {
                    comment: comment,
                    commentPassFail: selected
                }
            )
            getFeedback();
            // 예외 처리 (400, 403 에러) 함수
            getAlert(response.status); 
            window.location.reload(); 
        } catch (error) {
            // 403에러 예외처리 추가 by.성임
            if (error.response && error.response.status === 403) {
                alert("권한이 없습니다!");
            } 
            else if(error.response && error.response.status === 400){
                alert("이미 댓글을 달았어요!");
            }
            else {
                console.log(error);
            }
        }
    }

    function renderNewlines(text) {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    }

    const getProblem = useCallback(async () => {
            try {
                const {data: response} = await axios.get(
                    `/api2/problem/${problemId}`,
                    {withCredentials: true}
                );
                setProblem(response);
            } catch (error) {
                console.log(error);
            }
    }, [problemId]);
    
    function renderAnswerUI() {
        // console.log("code = ",code);

        return (
            <StyledQuestion className="problem_answer_section">
                <StyledProblem className="problem_header_section" state={state}>
                    <div className="problem_header">
                        <div className="problem_group">
                            <div className="problem_id">문제{problemId}</div>
                            <div className="header_title">{title.problemTitle}</div>
                            <div className="header_answer_state">
                                {state === "success" ? "성공" : state === "fail" ? "실패" : "미완료"}
                            </div>
                        </div>

                    </div>
                    <div className="button_group">
                            <button className="button_problem" onClick={toggleDropdown}>문제보기
                                 {isDropdownOpen && (
                                    <div className='dropdown_content'>
                                        {/* 띄워쓰기 표현_ by성임*/}
                                        <div className="content" style={{ whiteSpace: 'pre'}}>
                                            {problem.problemContent && renderNewlines(problem.problemContent)}
                                        </div>

                                        <div className="sample_inputs">
                                            <h3>Sample Inputs:</h3>
                                                {problem.sampleInputs && problem.sampleInputs.map((input, index) => (
                                                <React.Fragment key={index}>
                                                    {renderNewlines(input)}
                                                </React.Fragment>
                                            ))}
                                        </div>
                        
                                        <div className="sample_outputs" style={{ whiteSpace: 'pre'}}>
                                            <h3>Sample Outputs:</h3>
                                            {problem.sampleOutputs && problem.sampleOutputs.map((output, index) => (
                                                <React.Fragment key={index}>
                                                    {renderNewlines(output)}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                 )}
                                </button>
                            {(state === "success" || state === "fail") && (
                                <button className="button_solution" onClick={() => navigate(`/solution/${problemId}`)}>다른 풀이 보기</button> 
                            )}
                        </div>
                </StyledProblem>
                <div className="code_question_container">
                    <div className="code_container">
                        {/* 에디터로 수정_by성임 */}
                        <CodeEditor
                            onChange={setCode}
                            readOnly={true} // 코드 수정 비활성화
                            code={code}
                            >
                        </CodeEditor>
                        {/* {code} */}
                    </div>
                    <div className="question_container">
                    {
                    (!qnA.answerFst || !qnA.answerSec) 
                    // answerState: question (qnA만 있음, 답변해야 하는 상태)
                        ? <> 
                        <div className="question_layout">
                            <div className="question_header"> 
                                <div className="question_id">질문 1</div>
                                <div className="header_title">{qnA.questionContentFst}</div>
                            </div>
                            <textarea className="answer_input" onChange={FstHandler}/>
                        </div>

                        <div className="question_layout">
                            <div className="question_header">
                                <div className="question_id">질문 2</div>
                                <div className="header_title">{qnA.questionContentSec}</div>
                            </div>
                            <textarea className="answer_input" onChange={SecHandler}/>
                        </div>
                        </>
                        // answerState: comment (qnA O / qnA.answerFst, qnA.answerSec O / feedback 0개 or 1개)
                        // answerState: success
                        // answerState: fail
                    : <> 
                        <div className="question_header"> 
                            <div className="question_id">질문 1</div>
                            <div className="header_title">{qnA.questionContentFst}</div>
                        </div>

                        {/* 줄바꿈 반영하기_ by성임 */}
                        <div className="answer_input display">
                            {renderNewlines(qnA.answerFst)}
                        </div>
                        
                        <div className="question_header"> 
                            <div className="question_id">질문 2</div>
                            <div className="header_title">{qnA.questionContentSec}</div>
                        </div>
                        <div className="answer_input display">
                            {renderNewlines(qnA.answerSec)}
                        </div>
                    </>
                    }
                    </div>
                </div>                

                {(state === "question") && (!qnA.answerFst || !qnA.answerSec) && (
                    <div className="btn_container">
                        <button className="button answer" onClick={submitAnswer}>답변하기</button> 
                    </div>
                )}
            </StyledQuestion>
        );
    }

    function renderFeedbackUI(memberStatus) {

        const feedbackArray = feedbacks
            ? Object.values(feedbacks)
            : [];
            
        return (
            <StyledQuestion className="feedback_section_1">
                <hr style={{height:2, border:"none", backgroundColor: "gray", marginTop:100}}></hr>

                <div className="feedback_section">
                    {/* 신입생 : comment상태일때, feedback 없을때 */}
                    {(memberStatus === "신입생") && (feedbackArray.length <= 0) && (state === "comment") && (
                        <div className="feedback_waiting_bar" onClick={() => navigate(`/`)}>피드백을 기다리는 중입니다...</div>
                    )}
                    
                    {/* 신입생 : feedback 있을때 */}
                    {feedbackArray.length > 0 && (
                        feedbackArray.map((feedback, index) => (
                        <div className="feedback_container" key={index}>
                            {(feedback.commentPassFail === 1) ? <div className="feedback_result_pass">PASS</div> : <div className="feedback_result_fail">FAIL</div>}
                            <div className="question_header">
                                <div className="feedback_index">{`Feedback ${index+1}`}</div>
                                <div className="feedback_writer">{feedback.writerGen}기</div>
                                <div className="feedback_writer">{feedback.writerName}</div>
                            </div>

                            {/* 줄바꿈 반영하기_ by성임 */}
                            <div className="feedback_content display">
                                {renderNewlines(feedback.commentContent)}
                            </div>
                        </div>
                        ))
                    )}

                    {/* 재학생_ feedback 선택 */}
                    {(memberStatus === "재학생" || memberStatus === "관리자") && (feedbackArray.length <= 1) && (state === "comment") && (
                        <div className="feed_section">
                            <div className="question_header">
                                <div className="feedback_index">Feedback</div>
                            </div>
                            <textarea className="feedback_content input" 
                                placeholder = "피드백을 입력해주세요."
                                onChange={FstHandler}/>
                            {/* PASS FAIL 선택 */}
                            <div className="feedback_select_section">
                                <div className="button_container">
                                    <div className="select_button pass" isSelected={selectedOption === '1' } 
                                    style={{ color: buttonColor1 }} 
                                    onClick={() => {
                                        handleOption('1'); 
                                        passButtonClick();
                                        }}>
                                            PASS</div>
                                    <div className="select_button fail" isSelected={selectedOption === '0'} 
                                    style={{ color: buttonColor2 }} 
                                    onClick={() => {
                                        handleOption('0');
                                        failButtonClick();
                                        }}>
                                            FAIL</div>
                                </div>
                                <p className="select_comment">PASS 혹은 FAIL을 선택해주세요.</p>
                            </div>
                            <button className="feedback_button" onClick={submitComment}>답변하기</button>
                        </div>
                    )}
                </div>

                {(feedbackArray.length >= 2) && (
                    <div className="result_container">
                        <div className={((passCount >= 1) && (feedbackArray.length > 1)) ? 'result success' : 'result fail'} 
                            onClick={() => navigate(`/`)}>
                            {((passCount >= 1) && (feedbackArray.length > 1)) ? 
                                `축하합니다! 성공적으로 통과했습니다!  ( ${passCount}/2 )` : `질문테스트에 통과하지 못했습니다.  ( ${passCount}/2 )`}
                        </div>
                        <p>클릭시 홈화면으로 이동합니다</p>
                    </div>
                )}

            </StyledQuestion>
        );
    }

    return(
        <div className={state === "success" ? "successPage" : state === "fail" ? "failPage" : "nonePage"}>                  
            <MemberStatus>
                {(memberStatus) => {
                    if (!memberStatus) {
                        return <div className="loading">Loading...</div>;
                    }

                    return (
                        <div>
                            {renderAnswerUI()}
                            {renderFeedbackUI(memberStatus)}
                        </div>
                    );
                }}
            </MemberStatus>
        </div>
    );
}

export default QuestionPage;

    // 렌더링 시, answerState 필요
    // 질문 줄 때 (get /question) 같이 넘겨줌

    // getCode와 getQuestions는 항상 call
    // getFeedback은 아래 상태일 때만 call

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