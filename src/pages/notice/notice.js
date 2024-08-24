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

  return (
    <div className="info_body">
      <div className="content_info">
        <div className="header">
          <HiSpeakerphone size={30} />
          <p>공지사항</p>
        </div>

        {/* TODO : 관리자에만 띄우기 */}
        <div
          className={memberStatus === "관리자" ? "add_info" : "no_button"}
          // TODO : 등록하기 uri수정하기
          onClick={() => navigate("/postNotice")}
        >
          <PiNotePencilFill size={25} />
          <p>등록하기</p>
        </div>

        <div className="info_title">
          <div className="title_0"> </div>
          <div className="title_1">번호</div>
          <div className="title_2">제목</div>
          <div className="title_3">작성 날짜</div>
          <div className="title_4">조회 수</div>
        </div>

        {/* 공지사항리스트 컴포넌트 */}
        <NoticeList noticeList={noticeList} navigate={navigate}></NoticeList>
      </div>
    </div>
  );
};
export default Notice;
