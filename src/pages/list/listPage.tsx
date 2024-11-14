import React from "react";
import {JuniorRank, SeniorRank} from "components/ranking";
import {AdPart} from "components/list";
import { StyledListPage } from "styles/styledComponent/ListPage-styled";
import useListHook from "hooks/list/useListHook";
import ProblemList from "components/problem/ProblemList";
import Button from "@mui/material/Button";


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
          
          {/* 문제list 컴포넌트 */}
          <ProblemList problmeList={list} />
        </div>
        

        {/* 랭킹 섹션 */}
        <div className="ranking_container">
          <div className="container_header">🏆 랭킹</div>
          {/* 신입생, 재학생 선택 버튼 */}
          <div className="student_container">
            <Button
               className={`student_button ${selectedOption === "junior" ? "student_button_active" : ""}`}
              color="primary"
              size="large"
              variant={juniorButtonVariant as "contained" | "outlined" | "text"}
              onClick={() => handleOption("junior")}
              sx={{ minWidth: "fit-content" }}
            >
              신입생
            </Button>

            <Button
              className={`student_button ${selectedOption === "senior" ? "student_button_active" : ""}`}
              color="primary"
              size="large"
              variant={seniorButtonVariant as "contained" | "outlined" | "text"}
              onClick={() => handleOption("senior")}
              sx={{ minWidth: "fit-content" }}
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
