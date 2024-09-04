import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MyFeedList from "components/mypage/MyFeedList";
import MyInfo from "components/mypage/MyInfo";
import MyProbList from "components/mypage/MyProbList";
import "styles/css/App.css";
import "styles/css/mypage.css";
const MyPage = () => {
    return (_jsx("div", { className: "content_mypage", children: _jsxs("div", { className: "mypage_content", children: [_jsx(MyInfo, {}), _jsxs("div", { className: "right", children: [_jsx(MyProbList, {}), _jsx(MyFeedList, {})] })] }) }));
};
export default MyPage;
