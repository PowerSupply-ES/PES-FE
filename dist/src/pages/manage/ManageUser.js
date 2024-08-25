import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "styles/css/manage.css";
import SideTab from "components/manage/SideTab";
import UserList from "components/manage/UserList";
import useUserList from "hooks/manage/useUserList";
function ManageUser() {
    // 사용자 리스트 get HOOK
    const memberData = useUserList();
    return (_jsx("div", { className: "content_container", children: _jsxs("div", { className: "manageuser_container", children: [_jsx(SideTab, {}), _jsx("div", { className: "userlist_wrapper", children: _jsxs("div", { className: "list_container", children: [_jsxs("div", { className: "title_wrapper", children: [_jsx("div", { className: "title_state", children: "\uC0C1\uD0DC" }), _jsx("div", { className: "title_name", children: "\uC774\uB984" }), _jsx("div", { className: "title_stunum", children: "\uD559\uBC88" }), _jsx("div", { className: "title_studep", children: "\uD559\uACFC" }), _jsx("div", { className: "title_none", children: " " })] }), _jsx(UserList, { memberData: memberData })] }) })] }) }));
}
export default ManageUser;
