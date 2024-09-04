import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaCircleUser } from "react-icons/fa6";
import useMypage from "hooks/mypage/useMypage";
const MyInfo = () => {
    const { memberData } = useMypage();
    if (!memberData) {
        return _jsx("div", { children: "Loading..." });
    }
    return (_jsx("div", { className: "left", children: _jsxs("div", { className: "memberInfo", children: [_jsxs("div", { className: "info_name", children: [_jsx(FaCircleUser, { size: 40, style: { color: "grey" } }), _jsx("p", { children: memberData.memberName })] }), _jsxs("div", { className: "text", children: [_jsx("div", { children: "\uD559 \uBC88" }), _jsx("p", { children: memberData.memberId })] }), _jsxs("div", { className: "text", children: [_jsx("div", { children: "\uC774\uBA54\uC77C" }), _jsx("p", { children: memberData.memberEmail })] }), _jsxs("div", { className: "text", children: [_jsx("div", { children: "\uAE30 \uC218" }), _jsx("p", { children: memberData.memberGen })] }), _jsxs("div", { className: "text", children: [_jsx("div", { children: "\uC0C1 \uD0DC" }), _jsx("p", { children: memberData.memberStatus })] }), _jsxs("div", { className: "text", children: [_jsx("div", { children: "\uD559 \uACFC" }), _jsx("p", { children: memberData.memberMajor })] }), _jsxs("div", { className: "text", children: [_jsx("div", { children: "\uC804\uD654 \uBC88\uD638" }), _jsx("p", { children: memberData.memberPhone })] })] }) }));
};
export default MyInfo;
