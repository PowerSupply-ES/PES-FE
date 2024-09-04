import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "styles/css/notice.css";
import { HiSpeakerphone } from "react-icons/hi";
import { PiNotePencilFill } from "react-icons/pi";
import getNoticeList from "apis/notice/getNoticeList";
import NoticeList from "components/notice/NoticeList";
const Notice = () => {
    const navigate = useNavigate();
    const memberStatus = sessionStorage.getItem("memberStatus");
    // 공지사항 리스트
    const [noticeList, setNoticeList] = useState([]);
    useEffect(() => {
        getNoticeList(setNoticeList); // 리스트 가져오기
    }, []);
    return (_jsx("div", { className: "info_body", children: _jsxs("div", { className: "content_info", children: [_jsxs("div", { className: "header", children: [_jsx(HiSpeakerphone, { size: 30 }), _jsx("p", { children: "\uACF5\uC9C0\uC0AC\uD56D" })] }), _jsxs("div", { className: memberStatus === "관리자" ? "add_info" : "no_button", 
                    // TODO : 등록하기 uri수정하기
                    onClick: () => navigate("/postNotice"), children: [_jsx(PiNotePencilFill, { size: 25 }), _jsx("p", { children: "\uB4F1\uB85D\uD558\uAE30" })] }), _jsxs("div", { className: "info_title", children: [_jsx("div", { className: "title_0", children: " " }), _jsx("div", { className: "title_1", children: "\uBC88\uD638" }), _jsx("div", { className: "title_2", children: "\uC81C\uBAA9" }), _jsx("div", { className: "title_3", children: "\uC791\uC131 \uB0A0\uC9DC" }), _jsx("div", { className: "title_4", children: "\uC870\uD68C \uC218" })] }), _jsx(NoticeList, { noticeList: noticeList, navigate: navigate })] }) }));
};
export default Notice;
