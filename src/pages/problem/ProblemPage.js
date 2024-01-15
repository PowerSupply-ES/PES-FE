import { AdPart, ProblemItem } from "components";
import styled from "styled-components";
import { Problems } from "./test";

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
        {Problems.map((problem) => (
            <ProblemItem
            pid = {problem.problem_id}
            ptitle = {problem.title}
            grade = {problem.grade}
            state = {problem.state}
        />
        ))}
      </div>
    );
};

export default ProblemPage;