import { StyledListPage, RankingItemStyled } from "styles/styledComponent/ListPage-styled";
import RankingItem from "./RankingItem";
import GetSeniorsRank from "apis/ranking/getSeniorRank";
import React from "react";

const SeniorRank: React.FC = () => {
  // 재학생 순위 get Api 호출
  const { newRank } = GetSeniorsRank();

  return (
    <StyledListPage>

      {/* 제목 */}
      <RankingItemStyled >
        <div className="ranking_id">순위</div>
        <div className="member_name">이름</div>
        <div className="score">점수</div>
      </RankingItemStyled>

      <div className="ranking-list">
        {newRank.map((rank, index) => (
          <RankingItem
            key={index}
            rank={rank.rank}
            memberName={rank.memberName}
            score={`${rank.score}개`}
          />
        ))}
      </div>
    </StyledListPage>
  );
};

export default SeniorRank;
