import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledListPage, RankingItemStyled } from "styles/styledComponent/ListPage-styled";
import RankingItem from "./RankingItem";
import GetSeniorsRank from "apis/ranking/getSeniorRank";
const SeniorRank = () => {
    // 재학생 순위 get Api 호출
    const { newRank } = GetSeniorsRank();
    return (_jsxs(StyledListPage, { children: [_jsxs(RankingItemStyled, { children: [_jsx("div", { className: "ranking_id", children: "\uC21C\uC704" }), _jsx("div", { className: "member_name", children: "\uC774\uB984" }), _jsx("div", { className: "score", children: "\uC810\uC218" })] }), _jsx("div", { className: "ranking-list", children: newRank.map((rank, index) => (_jsx(RankingItem, { rank: rank.rank, memberName: rank.memberName, score: `${rank.score}개` }, index))) })] }));
};
export default SeniorRank;
