import { useEffect, useState } from "react";
import getNoticeDetail from "apis/notice/getNoticeDetail";
// user 세부정보 호출 HOOK
const useNoticeDetail = () => {
    const memberStatus = sessionStorage.getItem("memberStatus");
    const [noticeDetail, setDetail] = useState([]); //공지사항 세부정보
    const [isEditing, setIsEditing] = useState(false); //수정상태
    let url = new URL(window.location.href);
    let noticeId = url.pathname.split("/")[2];
    const uri = "/api/notice/";
    useEffect(() => {
        getNoticeDetail(setDetail, noticeId, uri); // 공지사항 detail API요청
    }, [noticeId]);
    // 공지사항 수정 상태 관리
    const toggleEditing = () => {
        setIsEditing((prevState) => !prevState);
    };
    return {
        memberStatus,
        noticeDetail,
        isEditing,
        toggleEditing,
        setDetail,
        uri,
        noticeId,
    };
};
export default useNoticeDetail;
