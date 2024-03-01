import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import Header from "components/main/Header";
import { StyledProblem } from 'styles/Problem-styled';
import Footer from "components/footer/Footer";
import { useNavigate } from "react-router-dom";

// 에디터에 사용할 언어 및 테마를 불러옴.
// import "ace-builds";
// import "ace-builds/webpack-resolver";
//import AceEditor from 'react-ace';
//import 'ace-builds/src-noconflict/mode-c_cpp'; // C/C++ 언어 모드 추가
//import 'ace-builds/src-noconflict/theme-monokai';
// import Editor  from '@monaco-editor/react';

const ProblemPage = () => {
    const navigate = useNavigate();

    var url = new URL(window.location.href);
    var problemId = url
        .pathname
        .split('/')[2];

    const [title, setTitle] = useState([]);
    const [problem, setProblem] = useState([]);
    const text = useRef("");
    const [detail, setDetail] = useState("");

    function textHandler(e) {
        text.current = e.target.value;
    }

    async function submitCode() {
        if (!text.current) {
            alert("코드를 입력해주세요!");
        }
        else {
            const { data: response, status} = await postCode(text.current, problemId);

            if (!response) {
                if (status === 403) {
                    alert("인증된 사용자가 아닙니다. 로그인 페이지로 돌아갑니다.");
                    navigate("/signin");
                } else {
                    alert("알 수 없는 오류가 발생했습니다. 메인 페이지로 이동합니다.");
                    navigate("/main");
                }
            }
            else if (status === 201) {
                alert("문제를 맞혔습니다! 질의응답 페이지로 이동합니다.");
                console.log(response, status);
                sessionStorage.setItem('problemId', problemId);
                navigate(`/question/${response.answerId}`);
            }
            else if (status === 202) {
                await setDetail(response.detail);
                await alert("문제를 틀렸습니다! 다시 풀어보세요.");
                console.log(response, status);
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

                <div className="promblem_section">
                    <div className="content_container">
                        <div className="content">
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
                        
                        <div className="sample_outputs">
                            <h3>Sample Outputs:</h3>
                            {problem.sampleOutputs && problem.sampleOutputs.map((output, index) => (
                                <React.Fragment key={index}>
                                    {renderNewlines(output)}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="code_section">
                        {/* 원래코드 */}
                        <textarea className="code_input" placeholder = "코드를 입력해주세요." 
                            onChange = {textHandler}/>
                        
                        { (detail) &&
                            <div className="detail_container">
                                <h3>틀린 이유</h3>
                                <div className="detail_content">{detail}</div>
                            </div>
                        }
                    </div>
                </div>
                
                <button className="submit_button" onClick={() => submitCode()}>제출</button>

                
                
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

                        {/* 원래 코드 */}
                        {/* <div className="top">
                            <h2>Sample Inputs:</h2>
                            <div className="input_data">
                                {inputArray.map((i) => (<p>{i.map((k) => (`${k} `))}</p>))}
                            </div>
                        </div>
                        <div className="bottom">
                            <h2>Sample Outputs:</h2>
                            <div className="output_data">
                                {outputArray.map((i) => (<p>{i}</p>))}
                            </div>
                        </div> */}

                        {/* AceEditor 주석 */}
                        {/*
                        <AceEditor 
                            className="code_input" 
                            mode="c_cpp"
                            theme="monokai"
                            placeholder = "코드를 입력해주세요." 
                            onChange={textHandler}
                            value={text.current}
                            name="code-editor"
                            editorProps={{ 
                                $blockScrolling: Infinity, // 스크롤 이동 허용
                                style: {
                                    background: '#ffffff',
                                    overflowY: 'auto' // 세로 스크롤이 필요할 경우 스크롤 표시
                                }
                            }}
                            fontSize={"20px"}
                            setOptions={{
                                highlightActiveLine: true, // 활성 줄 강조
                            }}
                            style={{
                                height: '100%',
                                width: '100%'
                            }}
                            
                            /> 
                        */}

                        {/* <Editor
                            height='100%'
                            width= '100%'
                            theme="vs-dark"
	@@ -195,16 +172,11 @@ const ProblemPage = () => {
                                }
                            }}
                            onChange={(newCode) => setRequest(newCode)}
                        />  */}
