import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import Header from "components/main/Header";
import { StyledProblem } from 'styles/Problem-styled';
import Footer from "components/footer/Footer";
import { useNavigate } from "react-router-dom";
import CodeEditor from "components/problem/CodeEditor";


const ProblemPage = () => {
    const navigate = useNavigate();

    var url = new URL(window.location.href);
    var problemId = url
        .pathname
        .split('/')[2];

    const text = useRef("");

    const [title, setTitle] = useState([]);
    const [problem, setProblem] = useState([]);
    const [detail, setDetail] = useState(null);

    const isLogin = sessionStorage.getItem('status');

    // 기존코드
    // function textHandler(e) {
    //     text.current = e.target.value;
    // }

    // 수정코드_by성임
    function textHandler(newCode) {
        text.current = newCode;
    }

    async function submitCode() {
        if (!text.current) {
            alert("코드를 입력해주세요!");
        }
        else {
            const { data: response, status} = await postCode(text.current, problemId);

            if (!response) {
                alert("오류!");
                // navigate("/signin");
            }
            else if (status === 201) {
                console.log(response);
                alert("문제를 맞혔습니다! 질의응답 페이지로 이동합니다.");
                sessionStorage.setItem('problemId', problemId);
                navigate(`/question/${response.answer_id}`);
            }
            else if (status === 202) {
                await setDetail(response.detail);
                await alert("문제를 틀렸습니다! 다시 풀어보세요.");
            }
            else if (status === 500){
                alert("server가 응답하지 않네요! 관리자에게 상황을 공유해주세요! : ", response.message);
            }
        }
    }

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

    // 문제 내용 불러오기 (get)
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

    useEffect(() => {
        getProblem();
    }, [getProblem]);
    
    // 코드 제출하기 (post)
    async function postCode(request, problemId) {
        try {
            const response = await axios.post(
                `/api2/submit/${problemId}`,
                {
                    code: request,
                    problemId: problemId,
                }
            )
            
            return { data: response.data, status: response.status };

        } catch (error) {
            console.log(error);
            return { status: error.response ? error.response.status : 500 };
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
    

    function renderProbUI() {
        return (
            <StyledProblem state={"null"}>
                <div className="problem_header">
                    <div className="problem_group">
                        <div className="problem_id">문제{problemId}</div>
                        <div className="header_title">{title.problemTitle}</div>
                        <div className="header_answer_state">미완료</div>
                    </div>
                </div>

                <div className="problem_section">
                    <div className="content_container">

                        {/* 상단문제 */}
                        <div className="top">
                            <p className="underline">문제</p>
                            
                            {problem.problemContent && renderNewlines(problem.problemContent)}
                        </div>
                    

                        {/* 하단 sample input */}
                        <div className="bottom">
                            <div className="sample_inputs">
                                <p className="underline">Sample Inputs</p>
                                {problem.sampleInputs && problem.sampleInputs.map((input, index) => (
                                    <React.Fragment key={index}>
                                        {renderNewlines(input)}
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="sample_outputs" style={{ whiteSpace: 'pre' }}>
                            <p className="underline">Sample Outputs</p>
                            {problem.sampleOutputs && problem.sampleOutputs.map((output, index) => (
                                <React.Fragment key={index}>
                                    {renderNewlines(output)}
                                </React.Fragment>
                            ))}
                            </div>
                        </div> 
                    </div>


                    {/* 우측 코드 입력 */}
                    <div className="code_section">
                        {
                            isLogin ?
                            <>
                                {/* 변경코드 */}
                                <CodeEditor onChange={textHandler} />

                                {/* 원래코드 */}
                                {/* <textarea className="code_input" 
                                    placeholder = "코드를 입력해주세요." 
                                    onChange = {textHandler}/> */}
                                    
                                { (detail !== null && detail !== undefined) &&
                                    <div className="detail_container">
                                        <h3>틀린 이유</h3>
                                        <div className="detail_content">{detail}</div>
                                    </div>
                                }


                            </>
                            :
                            <textarea disabled className="code_input" placeholder = "로그인 후 이용해주세요." />
                        }
                    </div>
                </div>
                
                <button className={isLogin ? "submit_button" : "submit_button disabled"} 
                    onClick={() => 
                    //기존코드
                    //isLogin && submitCode()

                    //수정코드 by성임
                    {
                        if (isLogin) {
                            if (window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?")) {
                                submitCode();
                            }
                        }}
                    }>
                    제출
                    </button>
                
            </StyledProblem>
        );
    }
    
    return (
        <div>
            <Header/>
            {problem ? renderProbUI() : <div className="loading">Loading...</div>}
            <Footer/>
        </div>
    );
}

export default ProblemPage;