import { StyledRankingItem } from "styles/styledComponent/RankingItem-styled";
import React from "react";

// RankingItem props 타입
interface RankingItemProps {
  rank: number;
  memberName: string;
  score: string;
  style?: React.CSSProperties;
}

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
