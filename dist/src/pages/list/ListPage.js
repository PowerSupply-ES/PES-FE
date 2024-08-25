import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AdPart from "components/list/AdPart";
import ProblemItem from "components/list/ListItem";
import JuniorRank from "components/ranking/JuniorRank";
import SeniorRank from "components/ranking/SeniorRank";
import { StyledListPage } from "styles/styledComponent/ListPage-styled";
import Button from "@mui/joy/Button";
import useListHook from "hooks/list/useListHook";
const ListPage = () => {
    const { list, selectedOption, juniorButtonVariant, seniorButtonVariant, handleOption, } = useListHook();
    return (_jsxs("div", { children: [_jsx(AdPart, {}), _jsxs(StyledListPage, { style: { width: "100%", display: "flex", justifyContent: "center" }, children: [_jsxs("div", { className: "list_container", children: [_jsx("div", { className: "container_header", children: "\uD83D\uDDA5\uFE0F \uBB38\uC81C" }), _jsx("div", { className: "problem_wrapper", children: list.map((problem) => (_jsx(ProblemItem, { pid: problem.problemId, ptitle: problem.problemTitle, grade: problem.problemScore, answerId: problem.answerId, state: problem.answerState }))) })] }), _jsxs("div", { className: "ranking_container", children: [_jsx("div", { className: "container_header", children: "\uD83C\uDFC6 \uB7AD\uD0B9" }), _jsxs("div", { className: "student_container", children: [_jsxs(Button, { className: "student_button", color: "primary", size: "lg", variant: juniorButtonVariant, onClick: () => {
                                            handleOption("junior");
                                        }, children: [" ", "\uC2E0\uC785\uC0DD"] }), _jsxs(Button, { className: "student_button", color: "primary", size: "lg", variant: seniorButtonVariant, onClick: () => {
                                            handleOption("senior");
                                        }, children: [" ", "\uC7AC\uD559\uC0DD"] })] }), selectedOption === "junior" && _jsx(JuniorRank, {}), selectedOption === "senior" && _jsx(SeniorRank, {})] })] })] }));
};
export default ListPage;
