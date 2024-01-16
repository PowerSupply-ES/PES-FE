import styled from "styled-components";
import {useState, useEffect} from "react";
import {Problems} from "./test";
import AdPart from "components/problem/AdPart";
import ProblemItem from "components/problem/ProblemItem";
import axios from "axios";
import serverConfig from '../../config';

const Filter = styled.div `
    width: 1376px;
    height: 62px;
    margin: auto;
    display: flex;
    align-items: center;
    margin-bottom: 48px;
`
const Button = styled.button `
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

    const [list, setList] = useState([]);

    // 문제 목록 불러오기 (get)
    async function getList() {
        try {
            const {data: response} = await axios.get(
                `/api/problemlist`,
                {withCredentials: true}
            );
            setList(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getList();
    }, []);

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
            {
                list.map((problem) => (
                    <ProblemItem
                        pid={problem.problemId}
                        ptitle={problem.problemTitle}
                        grade={problem.problemScore}
                        state="challenge"/>
                ))
            }
        </div>
    );
};

export default ProblemPage;