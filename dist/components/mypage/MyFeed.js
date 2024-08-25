import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// 내 피드백 컴포넌트
const MyFeed = ({ myFeedback, navigate }) => {
    const gotoFeed = (problemId) => {
        console.log("problemId: ", problemId);
        navigate(`question/${problemId}`);
    };
    return (_jsx("div", { className: "FeedList", children: myFeedback.length === 0 ? (_jsx("div", { className: "noFeed", children: "\uC544\uC9C1 \uBC1B\uC740 \uD53C\uB4DC\uBC31\uC774 \uC5C6\uC5B4\uC694!" })) : (myFeedback.map((it) => (_jsxs("div", { className: "feeds", children: [_jsx("p", { className: "problemId", children: it.answerId }), _jsxs("p", { className: "memberGenName", children: [it.memberGen, "\uAE30\u00A0\u00A0", it.memberName] }), _jsx("p", { className: "commentContent", onClick: () => gotoFeed(it.answerId), children: it.commentContent }), _jsx("div", { className: `${it.commentPassFail === 1
                        ? "btn_success"
                        : it.commentPassFail === 0
                            ? "btn_fail"
                            : "btn_state"}`, children: it.commentPassFail === 1
                        ? "success"
                        : it.commentPassFail === 0
                            ? "fail"
                            : it.commentPassFail })] }, it.answerId)))) }));
};
export default MyFeed;
