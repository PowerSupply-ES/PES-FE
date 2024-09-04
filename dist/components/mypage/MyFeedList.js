import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import MyFeed from "./MyFeed";
import useMypage from "hooks/mypage/useMypage";
;
// 내 피드백 list
const MyFeedList = () => {
    const navigate = useNavigate();
    const { myFeedback } = useMypage();
    return (
    // TODO : 신입생,재학생에 따라 feedback 띄워주기
    _jsxs("div", { className: "bottom", children: [_jsxs("div", { className: "feed_top", children: [_jsx("div", { className: "mypage_btn", children: "my feedback" }), _jsxs("div", { className: "feedNum", children: [myFeedback.length, "\uAC1C"] })] }), _jsx("div", { className: "myFeedback", children: _jsx(MyFeed, { myFeedback: myFeedback, navigate: navigate }) })] }));
};
export default MyFeedList;
