import AdPart from "components/list/AdPart";
import ProblemItem from "components/list/ListItem";
import JuniorRank from "components/ranking/JuniorRank";
import SeniorRank from "components/ranking/SeniorRank";
import { StyledListPage } from "styles/styledComponent/ListPage-styled"
import Button from '@mui/joy/Button';
import useListHook from "hooks/list/useListHook";


const ListPage = () => {
    const { list, selectedOption, juniorButtonVariant, seniorButtonVariant, handleOption } = useListHook();

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