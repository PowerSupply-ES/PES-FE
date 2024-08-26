import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledListPage } from "styles/styledComponent/ListPage-styled";
import RankingItem from "./RankingItem";
import GetSeniorsRank from "apis/ranking/GetSeniorsRank";
const SeniorRank = () => {
    // 재학생 순위 get Api 호출
    const { newRank } = GetSeniorsRank();
    return (_jsxs(StyledListPage, { children: [_jsx(RankingItem, { rank: "\uC21C\uC704", memberName: "\uC774\uB984", score: "\uB2F5\uBCC0\uC218", style: "margin-bottom: 10px;" }), _jsx("div", { className: "ranking-list", children: newRank.map((rank, index) => (_jsx(RankingItem, { rank: rank.rank, memberName: rank.memberName, score: `${rank.score}개` }, index))) })] }));
};
export default SeniorRank;
