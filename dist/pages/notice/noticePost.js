import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "styles/css/notice.css";
import { PiNotePencilFill } from "react-icons/pi";
import { goBack } from "components/common/Common";
import useNoticePost from "hooks/notice/useNoticePost";
const NoticePost = () => {
    const { notice, handleInputChange, handleSubmit } = useNoticePost();
    return (
    // 관리자만 접근할 수 있도록 수정하기
    _jsx("div", { className: "info_body", children: _jsxs("div", { className: "content_register", children: [_jsxs("div", { className: "header", children: [_jsx(PiNotePencilFill, { size: 30 }), _jsx("p", { children: "\uACF5\uC9C0\uC0AC\uD56D \uB4F1\uB85D" })] }), _jsx("div", { className: "btn_back", children: _jsx("button", { onClick: () => goBack(), children: "\uB4A4\uB85C\uAC00\uAE30" }) }), _jsxs("form", { className: "check_container", children: [_jsx("input", { type: "checkbox", id: "important", name: "isImportant", value: notice.isImportant, onChange: handleInputChange }), _jsx("label", { htmlFor: "important", children: "\uC911\uC694" })] }), _jsx("input", { className: "title_container", onChange: handleInputChange, value: notice.title, name: "title", required: true, placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694" }), _jsx("textarea", { className: "input_container", onChange: handleInputChange, value: notice.content, name: "content", required: true, placeholder: "\uBCF8\uBB38\uC744 \uC785\uB825\uD558\uC138\uC694" }), _jsx("div", { className: "btn_container", children: _jsx("button", { className: "btn_submit", onClick: () => {
                            handleSubmit();
                        }, children: "\uB4F1\uB85D\uD558\uAE30" }) })] }) }));
};
export default NoticePost;
