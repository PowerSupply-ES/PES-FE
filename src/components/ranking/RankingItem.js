import { StyledRankingItem } from "styles/styledComponent/RankingItem-styled";

const RankingItem = (props) => {
    return (
        <StyledRankingItem>
            <div className="ranking_id">{props.rank}</div>
            <div className="member_name">{props.memberName}</div>
            <div className="score">{props.score}</div>
        </StyledRankingItem>
    );
}

export default RankingItem;