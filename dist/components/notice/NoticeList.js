import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { transferTime } from "components/common/Common";
// 공지사항 컴포넌트
const NoticeList = ({ noticeList, navigate }) => {
    // 해당 공지사항으로 이동 함수
    const gotoNotice = (noticeId) => {
        console.log("noticeId: ", noticeId);
        navigate(`notice/${noticeId}`);
    };
    // TODO : 함수 말고 API로 대체하기
    const isNewNotice = (createdTime) => {
        const currentTime = new Date(); //현재시간
        const noticeTime = new Date(createdTime); //공지사항 생성시간
        const difference = currentTime - noticeTime; //시간 차
        // 생성시간이 하루 이내인지 확인
        const oneDay = 24 * 60 * 60 * 1000; //하루의 밀리초
        return Math.floor(difference / oneDay) <= 1;
    };
    return (_jsx("div", { className: "info_list", children: noticeList.map((it, index) => (_jsxs("div", { className: "info", children: [_jsx("div", { className: "title_0", children: it.isImportant ? (_jsx("div", { className: "imp", children: "\uC911\uC694" })) : isNewNotice(it.createdTime) ? (_jsx("div", { className: "new", children: "new" })) : ("") }), _jsx("div", { className: "title_1", children: it.noticeId }), _jsx("div", { className: "title_2", onClick: () => gotoNotice(it.noticeId), children: index }), _jsx("div", { className: "title_3", children: transferTime(it.createdTime) }), _jsx("div", { className: "title_4", children: it.noticeHit })] }, it.noticeId))) }));
};
export default NoticeList;
