import { useState, useEffect } from "react";
import axios from "axios";
import Header from "components/main/Header";
import { StyledProblem } from 'styles/Problem-styled';
import { useNavigate } from "react-router-dom";

const ProblemPage = () => {
    const navigate = useNavigate();

    var url = new URL(window.location.href);
    var problemId = url
        .pathname
        .split('/')[2];

    const [answerId, setAnswerId] = useState();
    const [problem, setProblem] = useState([]);
    const [request, setRequest] = useState("");
    const [result, setResult] = useState();

    function submitCode() {
        if (!request) {
            alert("코드를 입력해주세요!");
        }
        else {
            postCode(request, problemId);
            if (answerId) {
                alert("문제를 맞혔습니다! 질의응답 페이지로 이동합니다.");
                navigate(`/question/${answerId}`);
            }
            else {
                window.location.reload();
            }
        }
    }

    // 문제 불러오기 (get)
    async function getProblem() {
            try {
                const {data: response} = await axios.get(
                    `/api2/problem/${problemId}`,
                    {withCredentials: true}
                );
                setProblem(response);
            } catch (error) {
                console.log(error);
            }
    }

    useEffect(() => {
        getProblem();
    }, []);
    
    // 코드 제출하기 (post)
    async function postCode(request, problemId, memberEmail) {
        try {
            const {data: response} = await axios.post(
                `/api2/submit/${problemId}/${memberEmail}`,
                {
                    code: request,
                    problemId: problemId,
                    userEmail: memberEmail
                }
            )
            console.log(response);
            setResult(response.detail);
            setAnswerId(response.answerId);
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
                    <span className="problem_id">{problemId}</span>
                    <span className="header_title">{problem.title}</span>
                </div>
                <div className="description">{problem.context}</div>
                <div className="content_container">
                    <h2>Sample Inputs:
                    </h2>
                    <div className="input_data">
                        {inputArray.map((i) => (<p>{i.map((k) => (`${k} `))}</p>))}
                    </div>
                    <h2>Sample Outputs:
                    </h2>
                    <div className="output_data">
                        {outputArray.map((i) => (<p>{i}</p>))}
                    </div>
                </div>
                <span className="title">코드 입력</span>
                <textarea className="code_input" placeholder = "코드를 입력해주세요." 
                        onChange = {(e) => setRequest(e.target.value)}/> 
                <button className="submit_button" onClick={() => submitCode()}>제출</button>
            </StyledProblem>
        );
    }
    
    return (
        <div>
            <Header/>
            {renderProbUI()}
        </div>
    );
}

export default ProblemPage;