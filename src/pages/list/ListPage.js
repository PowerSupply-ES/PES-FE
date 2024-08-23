import {useState, useEffect} from "react";
import axios from "axios";
import AdPart from "components/list/AdPart";
import ProblemItem from "components/list/ListItem";
import JuniorRank from "components/ranking/JuniorRank";
import SeniorRank from "components/ranking/SeniorRank";
import { StyledListPage } from "styles/styledComponent/ListPage-styled"
import Button from '@mui/joy/Button';


const ListPage = () => {
    const memberStatus = sessionStorage.getItem('memberStatus');
    
    const [list, setList] = useState([]);
    const [selectedOption, setSelectedOption] = useState('junior');
    const [juniorButtonVariant, setJuniorButtonVariant] = useState('solid');
    const [seniorButtonVariant, setSeniorButtonVariant] = useState('soft');


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
            setList(response);
            console.log("memberStatus = ",memberStatus);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getList();
    }, [memberStatus]);

    // junior, senior 선택
    const handleOption = (option) => {
        setSelectedOption(option);

        if (option === 'junior') {
            setJuniorButtonVariant('solid');
            setSeniorButtonVariant('soft');
        } else if (option === 'senior') {
            setJuniorButtonVariant('soft');
            setSeniorButtonVariant('solid');
        }
    }

    return (
        <div>
            <AdPart/>
            <StyledListPage style={{width: "100%", display: "flex", justifyContent: "center"}}>
                {/* 문제 섹션 */}
                <div className="list_container">
                    <div className="container_header">🖥️ 문제</div>
                    <div className="problem_wrapper">
                    {
                        list.map((problem) => (
                        <ProblemItem
                            pid={problem.problemId}
                            ptitle={problem.problemTitle}
                            grade={problem.problemScore}
                            answerId={problem.answerId}
                            state={problem.answerState}
                            // (memberStatus==="재학생" || memberStatus==="관리자") 
                            //     ? "solved"
                            //     : problem.answerState
                                />
                        ))
                    }
                    </div>
                </div>

                {/* 랭킹 섹션 */}
                <div className="ranking_container">
                    <div className="container_header">🏆 랭킹</div>
                    {/* 신입생, 재학생 선택 버튼 */}
                    <div className="student_container">
                        <Button
                            className="student_button"
                            color="primary"
                            size="lg"
                            variant={juniorButtonVariant}
                            onClick={() => {
                                handleOption('junior'); 
                        }}> 신입생</Button>

                        <Button
                            className="student_button"
                            color="primary"
                            size="lg"
                            variant={seniorButtonVariant}
                            onClick={() => {
                                handleOption('senior'); 
                        }}> 재학생</Button>
                        
                    </div>
                    
                    {selectedOption === 'junior' && <JuniorRank />}
                    {selectedOption === 'senior' && <SeniorRank />}
                </div>
            </StyledListPage>
        </div>
    );
};

export default ListPage;