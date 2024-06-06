import {useState, useEffect} from "react";
import axios from "axios";
import AdPart from "components/list/AdPart";
import ProblemItem from "components/list/ListItem";
import Header from "components/main/Header";
import Footer from "components/footer/Footer";
import JuniorRank from "components/ranking/JuniorRank";
import SeniorRank from "components/ranking/SeniorRank";
import { StyledListPage } from "styles/styledComponent/ListPage-styled";

const ListPage = () => {
    const memberStatus = sessionStorage.getItem('memberStatus');
    
    const [list, setList] = useState([]);
    const [selectedOption, setSelectedOption] = useState('junior');

    const [juniorButtonColor, setJuniorButtonColor] = useState('rgba(109, 99, 228, 0.9)');
    const [seniorButtonColor, setSeniorButtonColor] = useState('rgba(109, 99, 228, 0.5)');

    const juniorButtonClick = () => {
        setSeniorButtonColor('rgba(109, 99, 228, 0.5)');
        setJuniorButtonColor('rgba(109, 99, 228, 0.9)');
    }
    const seniorButtonClick = () => {
        setJuniorButtonColor('rgba(109, 99, 228, 0.5)');
        setSeniorButtonColor('rgba(109, 99, 228, 0.9)');
    }

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
    }

    return (
        <div>
            <Header/>
            <AdPart/>
            <StyledListPage style={{width: "100%", display: "flex", justifyContent: "center"}}>
                {/* 문제 섹션 */}
                <div className="list_container">
                    <div className="container_header">📌 문제</div>
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

                {/* 랭킹 섹션 */}
                <div className="ranking_container">
                    <div className="container_header">🏆 랭킹</div>
                    {/* 신입생, 재학생 선택 버튼 */}
                    <div className="student_container">
                        <button className="student_button" 
                        style={{backgroundColor: juniorButtonColor}} 
                        onClick={() => {
                            handleOption('junior'); 
                            juniorButtonClick();
                        }}>
                            신입생</button>
                        <button className="student_button" 
                        style={{backgroundColor: seniorButtonColor}} 
                        onClick={() => {
                            handleOption('senior'); 
                            seniorButtonClick();
                        }}>
                            재학생</button>
                    </div>
                    {selectedOption === 'junior' && <JuniorRank />}
                    {selectedOption === 'senior' && <SeniorRank />}
                </div>
            </StyledListPage>
            <Footer></Footer>
        </div>
    );
};

export default ListPage;