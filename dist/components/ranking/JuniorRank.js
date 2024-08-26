import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledListPage } from "styles/styledComponent/ListPage-styled";
import RankingItem from "./RankingItem";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import useJuniorRank from "hooks/rank/useJuniorRank";
const JuniorRank = () => {
    // 신입생 순위 get Api 호출
    const { newRank, handleSelectChange, memberGen } = useJuniorRank();
    return (_jsxs(StyledListPage, { children: [_jsx(Select, { placeholder: "35\uAE30", className: "select_box", value: memberGen, onChange: handleSelectChange, children: _jsx(Option, { value: "35", children: "35\uAE30" }) }), _jsx(RankingItem, { rank: "\uC21C\uC704", memberName: "\uC774\uB984", score: "\uC810\uC218" }), _jsx("div", { className: "ranking-list", children: newRank.map((rank, index) => (_jsx(RankingItem, { rank: rank.rank, memberName: rank.memberName, score: `${rank.score}점` }, index))) })] }));
};
export default JuniorRank;
