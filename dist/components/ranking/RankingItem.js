import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledRankingItem } from "styles/styledComponent/RankingItem-styled";
const RankingItem = ({ rank, memberName, score, style }) => {
    return (_jsxs(StyledRankingItem, { style: style, children: [_jsx("div", { className: "ranking_id", children: rank }), _jsx("div", { className: "member_name", children: memberName }), _jsx("div", { className: "score", children: score })] }));
};
export default RankingItem;
