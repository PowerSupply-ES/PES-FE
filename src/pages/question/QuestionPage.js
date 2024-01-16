import styled from "styled-components";
import {useState, useEffect} from "react";
import axios from "axios";
import serverConfig from '../../config';

// 문제 헤더 - 번호, 제목
const Header = styled.div `
    width: 1376px;
    height: 78px;
    display: flex;
    align-items: center;
    margin: auto;
`
const ProbId = styled.span `
    width: 100px;
    height: 60px;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
`
const HeaderTitle = styled.span `
    font-size: 28px;
    font-weight: bold;
    flex: 1;
    text-align: left;
`
// 문제 설명
const Description = styled.div `
    width: 1376px;
    font-size: 20px;
    align-items: center;
    margin: auto;
    background-color: beige;
    text-align: left;
`
const ContentContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 1376px;
    margin: auto;
    padding: 20px;
`;
const InputData = styled.div `
    width: 300px;
    height: 300px;
    font-size: 20px;
    text-align: center;
    align-items: center;
    background-color: lavender;
`
const OutputData = styled.div `
    width: 300px;
    height: 300px;
    font-size: 20px;
    text-align: center;
    align-items: center;
    background-color: lavender;
`
// 코드 작성 칸
const CodeInput = styled.textarea `
    width: 1376px;
    height: 300px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: beige;
    overflow-wrap: break-word;
`
// 문제 제출 버튼
const SubmitBtn = styled.button `
    width: 100px;
    height: 52px;
    background-color: #FF8412;
    color: white;
    font-size: 28px;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
    align-items: center;
    cursor: pointer;
`
// 코드 보여주는 칸
const CodeContainer = styled.div `
    width: 1376px;
    height: auto;
    display: flex;
    align-items: center;
    margin: auto;
    border-radius: 5px;
    background-color: beige;
    font-size: 20px;
    white-space: pre-line; 
`
const QuestionHeader = styled.div ` // 질문1,2에 대한 컨테이너
    width: 1376px;
    height: 80px;
    display: flex;
    align-items: center;
    margin: auto;
`
const QuestionId = styled.div `
    width: 100px;
    height: 60px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 5px;
    border: 2px solid #325cc7;
    color: #325cc7;
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;
`
const AnswerInput = styled.textarea `
    width: 1376px;
    height: 250px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: beige;
    overflow-wrap: break-word;
`
const AnswerBtn = styled.button `
    width: 216px;
    height: 60px;
    background-color: #FFAC30;
    color: white;
    font-size: 28px;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
    align-items: center;
    cursor: pointer;
`
const Title = styled.span `
    width: 1376px;
    display: flex;
    font-size: 28px;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 10px;
`
const ResultContainer = styled.div `
    width: 1376px;
    height: auto;
    background-color: #eee;
    margin: 0 auto;
    margin-bottom: 20px;
    font-size: 20px;
    white-space: pre-line; 
    text-align: left;
`
// table
const StyledTable = styled.table `
  width: 200px;
  margin-top: 20px;
  border-collapse: collapse;
  text-align: left;
`;
const StyledThTd = styled.td `
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 1em;
`;
const StyledTh = styled.th `
  background-color: #f2f2f2;
`;
const StyledTrEven = styled.tr `
  background-color: #f9f9f9;
`;

const QuestionPage = () => {

    const [problem, setProblem] = useState([]);
    const [code, setCode] = useState("");
    const [request, setRequest] = useState("");
    const [result, setResult] = useState("");
    const [qnA, setQnA] = useState([]);
    const [answerFst, setAnswerFst] = useState("");
    const [answerSec, setAnswerSec] = useState("");
    const [feedbacks, setFeedbacks] = useState([]);

    const userName = "minjeong";
    var answerId = 1;
    var email = "minjeongs0202@gmail.com";
    var email2 = "mcmong@naver.com";

    var url = new URL(window.location.href);
    var problemId = url
        .pathname
        .split('/')[2];

    function submitCode() {
        const data = {
            request: request,
            problemId: problemId,
            userName: userName
        };
        if (!request) {
            alert("코드를 입력해주세요!");
        }
        else {
            postCode(request, problemId, userName);
        }
    }

    function submitAnswer() {
        if (!answerFst || !answerSec) {
            alert("내용을 입력해주세요!");
        }
        else {
            postAnswer(email, answerFst, answerSec);
        }
    }

    // 문제 불러오기 (get)
    async function getTest() {
        try {
            const {data: response} = await axios.get(
                serverConfig.pythonUrl + `/api2/problem/${problemId}`,
                {withCredentials: true}
            );
            setProblem(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTest();
    }, []);

    // 코드 제출하기 (post)
    async function postCode(request, problemId, userName) {
        try {
            const {data: response} = await axios.post(
                serverConfig.pythonUrl + `/api2/submit/${problemId}/${userName}`,
                {
                    code: request,
                    problemId: problemId,
                    userName: userName
                }
            )
            // console.log(response);
            setResult(response.detail);
            getCode();
        } catch (error) {
            console.log(error);
        }
    }

    // 사용자가 작성한 코드 불러오기 (get)
    async function getCode() {
        try {
            const {data: response} = await axios.get(
                serverConfig.pythonUrl + `/api2/answer/${problemId}/${userName}`,
                {withCredentials: true}
            );
            setCode(response.detail);
        } catch (error) {
            console.log(error);
        }
    }

    // 질문, 답변 블러오기 (get)
    async function getQuestions() {
        try {
            const {data: response} = await axios.get(
                `/api/answer/${answerId}`,
                {withCredentials: true}
            );
            setQnA(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getQuestions();
    }, []);

    // 질문 답변하기 (post)
    async function postAnswer(email, answerFst, answerSec) {
        try {
            const {data: response} = await axios.post(
                `/api/answer/${answerId}?memberEmail=${email}`,
                {
                    answerFst: answerFst,
                    answerSec: answerSec
                }
            )
            getQuestions();
        } catch (error) {
            console.log(error);
        }
    }

    // 피드백 불러오기 (get)
    async function getFeedback() {
        try {
            const {data: response} = await axios.get(`/api/comment/${answerId}`, {withCredentials: true});
            // writerEmail
            // writerName
            // commentContent
            setFeedbacks(response);
            console.log("getFeedback response: " + response);
            console.log("getFeedback type: " + typeof(response));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFeedback();
    }, []);

    // 피드백 달기 (post) 
    async function postFeedback(email2, comment) {
        try {
            const {data: response} = await axios.post(
                `/api/comment/${answerId}?memberEmail=${email}`,
                {
                    comment: comment
                }
            )
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    // 문제 UI
    function renderProbUI() {

        const inputArray = problem.sample_inputs
            ? Object.values(problem.sample_inputs)
            : [];

        const outputArray = problem.sample_outputs
            ? Object.values(problem.sample_outputs)
            : [];

        return (
            <div>
                <Header>
                    <ProbId>{problemId}</ProbId>
                    <HeaderTitle>{problem.title}</HeaderTitle>
                </Header>
                <Description>{problem.context}</Description>
                <ContentContainer>
                    <h2>Sample Inputs:
                    </h2>
                    <InputData>
                        {inputArray.map((i) => (<p>{i.map((k) => (`${k} `))}</p>))}
                    </InputData>
                    <h2>Sample Outputs:
                    </h2>
                    <OutputData>
                        {outputArray.map((i) => (<p>{i}</p>))}
                    </OutputData>
                </ContentContainer>
                <Title>코드 입력</Title>
                {
                    code
                        ? (<CodeContainer>{code}</CodeContainer>)
                        : (
                            <> <CodeInput placeholder = "코드를 입력해주세요." onChange = {
                                (e) => setRequest(e.target.value)
                            }/> <SubmitBtn onClick={() => submitCode()}>제출</SubmitBtn>
                        </>
                        )
                }
                {
                    result
                        ? (<><Title> 결과</Title> < ResultContainer > {
                            result
                        }</ResultContainer></>)
                        : (<div/>)
                }
            </div>
        );
    }

    // 질문 UI
    function renderAnswerUI() {
        return (
            <div>
                {
                    (!qnA.answerFst || !qnA.answerSec)
                        ? <> < QuestionHeader > <QuestionId>질문 1</QuestionId>
                        <HeaderTitle>{qnA.questionContentFst}</HeaderTitle>
                    </QuestionHeader>
                    <AnswerInput onChange={(e) => setAnswerFst(e.target.value)}/>
                    <QuestionHeader>
                        <QuestionId>질문 2</QuestionId>
                        <HeaderTitle>{qnA.questionContentSec}</HeaderTitle>
                    </QuestionHeader>
                    <AnswerInput onChange={(e) => setAnswerSec(e.target.value)}/>
                    <AnswerBtn onClick={() => submitAnswer()}>답변하기</AnswerBtn> </>
                    : <>
                    < QuestionHeader > <QuestionId>질문 1</QuestionId>
                        <HeaderTitle>{qnA.questionContentFst}</HeaderTitle>
                    </QuestionHeader>
                            <CodeContainer>{qnA.answerFst}</CodeContainer>
                            < QuestionHeader > <QuestionId>질문 1</QuestionId>
                        <HeaderTitle>{qnA.questionContentFst}</HeaderTitle>
                    </QuestionHeader>
                            <CodeContainer>{qnA.answerSec}</CodeContainer>
                        </>
                }
            </div>
        );
    }

    // 피드백 UI
    function renderFeedbackUI() {
        return (
            <div>
                <QuestionHeader>
                    <Title>피드백 달기</Title>
                </QuestionHeader>
                <AnswerInput></AnswerInput>
                <AnswerBtn>답변하기</AnswerBtn>
            </div>
        );
    }

    return (
        <div>
            {renderProbUI()}
            {renderAnswerUI()}
            {renderFeedbackUI()}
        </div>
    );
};

export default QuestionPage;