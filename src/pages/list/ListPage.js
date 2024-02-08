import styled from "styled-components";
import {useState, useEffect} from "react";
import AdPart from "components/list/AdPart";
import ProblemItem from "components/list/ListItem";
import Header from "components/main/Header";
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

const ListPage = () => {

    const [list, setList] = useState([]);
    const memberEmail = localStorage.getItem('memberEmail');

    // 문제 목록 불러오기 (get)
    async function getList() {
        console.log("memberEmail: " + memberEmail)
        try {
            const config = {
                withCredentials: true,
            };
    
            if (memberEmail) {
                config.params = { memberEmail };
            }
    
            const { data: response } = await axios.get(
                `/api/problemlist`,
                config
            );
            console.log(response);
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
                        state={problem.answerState}/>
                ))
            }
        </div>
    );
};

export default ListPage;