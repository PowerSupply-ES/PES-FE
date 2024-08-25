import AdPart from "components/list/AdPart";
import ProblemItem from "components/list/ListItem";
import JuniorRank from "components/ranking/JuniorRank";
import SeniorRank from "components/ranking/SeniorRank";
import { StyledListPage } from "styles/styledComponent/ListPage-styled";
import Button from "@mui/material/Button";
import useListHook from "hooks/list/useListHook";
import { Problem } from "model/Store";
import React from "react";

// Props 타입(현재는 props가 없으므로 빈 객체로 정의)
interface ListPageProps {}

const ListPage: React.FC<ListPageProps> = () => {
  const {
    list,
    selectedOption,
    juniorButtonVariant,
    seniorButtonVariant,
    handleOption,
  } = useListHook();

  return (
    <div>
      <AdPart />
      <StyledListPage
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        {/* 문제 섹션 */}
        <div className="list_container">
          <div className="container_header">🖥️ 문제</div>
          <div className="problem_wrapper">
            {list.map((problem: Problem) => (
              <ProblemItem
                key={problem.problemId}
                pid={problem.problemId}
                ptitle={problem.problemTitle}
                grade={problem.problemScore}
                answerId={problem.answerId}
                state={problem.answerState}
                // (memberStatus==="재학생" || memberStatus==="관리자")
                //     ? "solved"
                //     : problem.answerState
              />
            ))}
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
              size="large"
              variant={juniorButtonVariant as "contained" | "outlined" | "text"} // Cast to valid MUI variants
              onClick={() => handleOption("junior")}
            >
              신입생
            </Button>

            <Button
              className="student_button"
              color="primary"
              size="large"
              variant={seniorButtonVariant as "contained" | "outlined" | "text"} // Cast to valid MUI variants
              onClick={() => handleOption("senior")}
            >
              재학생
            </Button>
          </div>

          {selectedOption === "junior" && <JuniorRank />}
          {selectedOption === "senior" && <SeniorRank />}
        </div>
      </StyledListPage>
    </div>
  );
};

export default ListPage;
