import styled from "styled-components";
import {useState, useEffect} from "react";
import AdPart from "components/list/AdPart";
import ProblemItem from "components/list/ListItem";
import Header from "components/main/Header";
import Footer from "components/footer/Footer";
import { HiQuestionMarkCircle } from "react-icons/hi";

import axios from "axios";

const Filter = styled.div `
    width: 80%;
    height: 62px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 48px;
`
const Button = styled.button `
    height: fit-content;
    background-color: #FFFFFF;
    color: #6A6B6F;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid #DEDEDE;
    margin-right: 20px;
    text-align: center;
    padding: 3px;

    &:hover {
        background-color: #6D63E4;opacity : 0.5;
        color: white;
    }

    &:focus {
        background-color: #6D63E4;opacity : 0.5;
        color: white;
        outline: none;
    }
`
const Icon = styled.div `
    width: 80%;
    margin:auto;
    display:flex;
    justify-content: right;
    padding: 40px 40px 20px 0;
    cursor:pointer;

`


const ListPage = () => {

    const [list, setList] = useState([]);

    // 문제 목록 불러오기 (get)
    async function getList() {
        try {
            const config = {
                withCredentials: true,
            };
    
            const { data: response } = await axios.get(
                `/api/problemlist`,
                config
            );
            // console.log(response);
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
            <Header/>
            <AdPart/>
            {/* <Icon>
                <HiQuestionMarkCircle size={36}></HiQuestionMarkCircle>
            </Icon> */}
            {/*
            <Filter>
                <Button>푼 문제 보기</Button>
                <Button>안 푼 문제 보기</Button>
                <Button>풀이 중인 문제 보기</Button>
                <Button>FAIL</Button>
                <Button>CLEAR</Button>
            </Filter>
            */}
            
            {
                list.map((problem) => (
                    <ProblemItem
                        pid={problem.problemId}
                        ptitle={problem.problemTitle}
                        grade={problem.problemScore}
                        answerId={problem.answerId}
                        state={problem.answerState}/>
                ))
            }
            <Footer></Footer>
        </div>
    );
};

export default ListPage;