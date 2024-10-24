import React from "react";
import { useNavigate } from "react-router-dom";
import { HiSpeakerphone } from "react-icons/hi";
import "styles/css/notice.css";
import { transferTime, goBack } from "components/common/Common";
import {delNotice, fetchNotice} from "apis/notice";
import useNoticeDetail from "hooks/notice/useNoticeDetail";
import Loading from "components/common/Loading";
import { renderNewlines } from "components/common/Common";

const NoticeDetail: React.FC = () => {
  const navigate = useNavigate();

  const {
    memberStatus,
    noticeDetail,
    isEditing,
    toggleEditing,
    setDetail,
    uri,
    noticeId,
  } = useNoticeDetail();

   // noticeDetail이 null인 경우
  if (!noticeDetail) {
    return <Loading/>;
  }

  return (
    <div className="info_body">
      <div className="content_Detail">
        {/* 제목 */}
        <div className="header">
          <HiSpeakerphone size={30} />

          {/* 수정 가능 상태에 따라 보여지는 내용 조절 */}
          {isEditing ? (
            <textarea
              className="textarea_header"
              value={noticeDetail.title}
              onChange={(e) =>
                setDetail((prevState) => {
                  if(prevState){
                    return{
                      ...prevState,
                      title: e.target.value,
                    }
                  }
                  return prevState; // prevState가 null인 경우 예외 처리
                })
              }
            />
          ) : (
            <p>{noticeDetail.title}</p>
          )}
        </div>

        {/* 공지사항 정보 */}
        <div className="noticeInfo-container">
          <ul className="noticeInfo">
            {/* 작성자정보 */}
            <li>
              <p>작성자</p>
              {noticeDetail.writerGen}기 {noticeDetail.writer}
            </li>
            {/* 시간 정보 */}
            <li>
              <p>생성시간</p>
              {transferTime(noticeDetail.createdTime)}
            </li>
            <li>
              <p>수정시간</p>
              {transferTime(noticeDetail.updatedTime)}
            </li>
            {/* 조회수정보 */}
            <li>
              <p>조회수</p>
              {noticeDetail.noticeHit}회
            </li>
          </ul>
        </div>

        {/* 버튼 */}
        <div className="btn_back">
          <button onClick={() => goBack()}>뒤로가기</button>
        </div>

        {/* 본문 */}
        <div className="text_container">
          {/* 수정 가능 상태에 따라 보여지는 내용 조절 */}
          {isEditing ? (
            <textarea
              className="textarea_content"
              value={noticeDetail.content}
              onChange={(e) =>
                setDetail((prevState) => {
                  if (prevState) {
                    return {
                      ...prevState,
                      content: e.target.value,
                    };
                  }
                  return prevState; // prevState가 null인 경우 예외처리
                })
              }
            />
          ) : (
            <p className="text">{renderNewlines(noticeDetail.content)}</p> // TODO : 내용초과시 break, scroll기능넣기
          )}
        </div>

        {/* 관리자용버튼_state에 따라 보여지기 */}
        <div
          className={memberStatus === "관리자" ? "btn_container" : "no_button"}
        >
          {/* 수정 중 상태에 따라 버튼 대체 */}
          {isEditing ? (
            <button
              className="btn_modify"
              onClick={() => fetchNotice(uri, noticeId, noticeDetail, navigate)}
            >
              저장하기
            </button>
          ) : (
            <button className="btn_submit" onClick={toggleEditing}>
              수정하기
            </button>
          )}

          <button
            className="btn_delete"
            onClick={() => delNotice(uri, noticeId, navigate)}
          >
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default NoticeDetail;
