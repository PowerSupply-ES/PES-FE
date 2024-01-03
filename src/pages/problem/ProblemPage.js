import { AdPart, ProblemItem } from "components";
import styled from "styled-components";

const Filter = styled.div`
    width: 1376px;
    height: 62px;
    margin: auto;
    display: flex;
    align-items: center;
    margin-bottom: 48px;
`
const Button = styled.button`
    height: 42px;
    background-color: #FFFFFF;
    color: #6A6B6F;
    font-weight: bold;
    font-size: 28px;
    border-radius: 5px;
    border: 2px solid #DEDEDE;
    margin-right: 20px;
    text-align: center;

    &:hover {
        background-color: #FFAC30;
        color: white;
    }

    &:focus {
        background-color: #FFAC30;
        color: white;
        outline: none;
    }
`

const ProblemPage = () => {
    return (
      <div>
        <AdPart/>
        <Filter>
            <Button>푼 문제 보기</Button>
            <Button>안 푼 문제 보기</Button>
            <Button>풀이 중인 문제 보기</Button>
            <Button>FAIL</Button>
            <Button>CLEAR</Button>
        </Filter>
        <ProblemItem
            pid = {`1001`}
            ptitle = {`Hello World`}
            grade = "50"
            problemcolor = "#04CA00"
            buttoncolor = "#5094f9"
            state = "challenge"
        />
        <ProblemItem
            pid = {`1002`}
            ptitle = {`터렛`}
            grade = "50"
            problemcolor = "#FF8412"
            buttoncolor = "#FF8412"
            state = "RETRY"
        />
        <ProblemItem
            pid = {`1003`}
            ptitle = {`피보나치 함수`}
            grade = "50"
            fontcolor = "#6A6B6F"
            state = "challenge"
        />
        <ProblemItem
            pid = {`1004`}
            ptitle = {`어린 왕자`}
            grade = "50"
            fontcolor = "#6A6B6F"
            state = "challenge"
            lock = "true"
        />
      </div>
    );
};

export default ProblemPage;