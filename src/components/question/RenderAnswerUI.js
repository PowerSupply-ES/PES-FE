import React, {useRef} from 'react'
import ProbHeader from "components/question/ProbHeader";
import ProbCode from "components/question/ProbCode";
import { StyledQuestion } from 'styles/styledComponent/Question-styled';

// 답변(answer) 렌더링 함수
const RenderAnswerUI = (navigate, code, qnA, state, setCode, textFst, FstHandler, postAnswer) => {

    const textSec = useRef("");
    const SecHandler = (e) => {
        textSec.current = e.target.value;
    }
    // 답변 제출 함수
    const submitAnswer = () => {
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

    return (
        <StyledQuestion className="problem_answer_section">

            {/* 문제 헤더 컴포넌트 */}
            <ProbHeader code={code} navigate={navigate}/>

            {/* 코드 출력 컴포넌트 */}
            <ProbCode FstHandler={FstHandler} SecHandler={SecHandler} code={code} qnA={qnA} setCode={setCode}/>     

            {(state === "question") && (!qnA.answerFst || !qnA.answerSec) && (
                <div className="btn_container">
                    <button className="button answer" onClick={submitAnswer}>답변하기</button> 
                </div>
            )}
        </StyledQuestion>
    );
}

export default RenderAnswerUI
