import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Header from "components/main/Header";
import { StyledProblem } from 'styles/Problem-styled';
import Footer from "components/footer/Footer";
import { useNavigate } from "react-router-dom";

// 에디터에 사용할 언어 및 테마를 불러옴.
import "ace-builds";
import "ace-builds/webpack-resolver";
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-c_cpp'; // C/C++ 언어 모드 추가
import 'ace-builds/src-noconflict/theme-monokai';


const ProblemPage = () => {
    const navigate = useNavigate();

    var url = new URL(window.location.href);
    var problemId = url
        .pathname
        .split('/')[2];

    const [title, setTitle] = useState([]);
    const [problem, setProblem] = useState([]);
    const [request, setRequest] = useState("");
    const [detail, setDetail] = useState("");

    async function submitCode() {
        if (!request) {
            alert("코드를 입력해주세요!");
        }
        else {
            const response = await postCode(request, problemId);
            if (response.answerId) {
                alert("문제를 맞혔습니다! 질의응답 페이지로 이동합니다.");
                console.log(response);
                localStorage.setItem('problemId', problemId);
                navigate(`/question/${response.answerId}`);
            }
            else {
                setDetail(response.detail);
                alert("문제를 틀렸습니다! 다시 풀어보세요.");
                console.log(response);
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
            const {data: response} = await axios.post(
                `/api2/submit/${problemId}`,
                {
                    code: request,
                    problemId: problemId,
                }
            )
            // console.log(response);
            
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    function renderProbUI() {
        const inputArray = problem.sample_inputs
            ? Object.values(problem.sample_inputs)
            : [];

        const outputArray = problem.sample_outputs
            ? Object.values(problem.sample_outputs)
            : [];

        return (
            <StyledProblem>
                <div className="problem_header">
                    <div className="problem_id">문제{problemId}</div>
                    <div className="header_title">제목{title.problemTitle}</div>
                    <div>점수{title.problemScore}</div>
                </div>

                <div className="promblem_section">

                    <div className="content_container">
                        <div className="title">{problem.problemContent}</div>
                        {/* 변경 코드 */}
                        <div>{problem.sampleInputs}</div>
                        <div>{problem.sampleOutputs}</div>

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
                    </div>

                    <div className="code_section">
                        <div className="title">코드 입력</div>
                        {/* 원래코드 */}
                        {/* <textarea className="code_input" placeholder = "코드를 입력해주세요." 
                            onChange = {(e) => setRequest(e.target.value)}/>  */}
                            

                        {/* 변경코드 */}
                        <AceEditor 
                            className="code_input" 
                            mode="c_cpp"
                            theme="monokai"
                            placeholder = "코드를 입력해주세요." 
                            onChange={(e) => setRequest(e.target.value)}
                            value={request}
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
                       
                    

                    </div>

                    { (detail) &&
                        <div>{detail}
                        </div>
                    }
                </div>
                
                <button className="submit_button" onClick={() => submitCode()}>제출</button>
            </StyledProblem>
        );
    }
    
    return (
        <div>
            <Header/>
            {renderProbUI()}
            <Footer></Footer>

        </div>
    );
}

export default ProblemPage;
