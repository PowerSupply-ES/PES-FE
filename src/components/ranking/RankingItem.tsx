import React from "react";
import { StyledRankingItem } from "styles/styledComponent";
import { RankingItemProps } from "model/userType";


// 랭킹 요소 컴포넌트
const RankingItem: React.FC<RankingItemProps> = ({ rank, memberName, score, style }) => {
  return (
    <StyledRankingItem style={style}>
      <div className="ranking_id">{rank}</div>
      <div className="member_name">{memberName}</div>
      <div className="score">{score}</div>
    </StyledRankingItem>
  );
};

export default RankingItem;
