import { useEffect, useState } from "react";
import getNoticeDetail from "apis/notice/getNoticeDetail";
import { NoticeDetailType } from "model/noticeType";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

// user 세부정보 호출 HOOK
const useNoticeDetail = () => {
  const { memberStatus } : { memberStatus: string | null} = useSelector((state: RootState) => state.user); // redux에서 가져오기
  const [noticeDetail, setDetail] = useState<NoticeDetailType | null>(null); //공지사항 세부정보
  const [isEditing, setIsEditing] = useState<boolean>(false); //수정상태

  let url = new URL(window.location.href);
  let noticeId: number = parseInt(url.pathname.split("/")[2]); // number 타입으로 넘기기위해 int로 변환

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
