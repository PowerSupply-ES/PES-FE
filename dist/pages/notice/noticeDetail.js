import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "styles/css/notice.css";
import { HiSpeakerphone } from "react-icons/hi";
import { transferTime, goBack } from "components/common/Common";
import delNotice from "apis/notice/delNotice";
import fetchNotice from "apis/notice/fetchNotice";
import useNoticeDetail from "hooks/notice/useNoticeDetail";
import { useNavigate } from "react-router-dom";
const NoticeDetail = () => {
    const navigate = useNavigate();
    const { memberStatus, noticeDetail, isEditing, toggleEditing, setDetail, uri, noticeId, } = useNoticeDetail();
    // noticeDetail이 null인 경우
    if (!noticeDetail) {
        return _jsx("div", { children: "Loading..." });
    }
    return (_jsx("div", { className: "info_body", children: _jsxs("div", { className: "content_Detail", children: [_jsxs("div", { className: "header", children: [_jsx(HiSpeakerphone, { size: 30 }), isEditing ? (_jsx("textarea", { className: "textarea_header", value: noticeDetail.title, onChange: (e) => setDetail((prevState) => {
                                if (prevState) {
                                    return Object.assign(Object.assign({}, prevState), { title: e.target.value });
                                }
                                return prevState; // prevState가 null인 경우 예외 처리
                            }) })) : (_jsx("p", { children: noticeDetail.title }))] }), _jsx("div", { className: "noticeInfo-container", children: _jsxs("ul", { className: "noticeInfo", children: [_jsxs("li", { children: [_jsx("p", { children: "\uC791\uC131\uC790" }), noticeDetail.writerGen, "\uAE30 ", noticeDetail.writer] }), _jsxs("li", { children: [_jsx("p", { children: "\uC0DD\uC131\uC2DC\uAC04" }), transferTime(noticeDetail.createdTime)] }), _jsxs("li", { children: [_jsx("p", { children: "\uC218\uC815\uC2DC\uAC04" }), transferTime(noticeDetail.updatedTime)] }), _jsxs("li", { children: [_jsx("p", { children: "\uC870\uD68C\uC218" }), noticeDetail.noticeHit, "\uD68C"] })] }) }), _jsx("div", { className: "btn_back", children: _jsx("button", { onClick: () => goBack(), children: "\uB4A4\uB85C\uAC00\uAE30" }) }), _jsx("div", { className: "text_container", children: isEditing ? (_jsx("textarea", { className: "textarea_content", value: noticeDetail.content, onChange: (e) => setDetail((prevState) => {
                            if (prevState) {
                                return Object.assign(Object.assign({}, prevState), { content: e.target.value });
                            }
                            return prevState; // prevState가 null인 경우 예외처리
                        }) })) : (_jsx("p", { className: "text", children: noticeDetail.content }) // 줄바꿈인식, 내용초과시 break, scroll기능넣기
                    ) }), _jsxs("div", { className: memberStatus === "관리자" ? "btn_container" : "no_button", children: [isEditing ? (_jsx("button", { className: "btn_modify", onClick: () => fetchNotice(uri, noticeId, noticeDetail, navigate), children: "\uC800\uC7A5\uD558\uAE30" })) : (_jsx("button", { className: "btn_submit", onClick: toggleEditing, children: "\uC218\uC815\uD558\uAE30" })), _jsx("button", { className: "btn_delete", onClick: () => delNotice(uri, noticeId, navigate), children: "\uC0AD\uC81C\uD558\uAE30" })] })] }) }));
};
export default NoticeDetail;
