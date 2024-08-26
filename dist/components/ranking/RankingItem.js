import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledRankingItem } from "styles/styledComponent/RankingItem-styled";
const RankingItem = (props) => {
    return (_jsxs(StyledRankingItem, { children: [_jsx("div", { className: "ranking_id", children: props.rank }), _jsx("div", { className: "member_name", children: props.memberName }), _jsx("div", { className: "score", children: props.score })] }));
};
export default RankingItem;
