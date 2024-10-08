import React from "react";
import { PiNotePencilFill } from "react-icons/pi";
import "styles/css/notice.css";
import { goBack } from "components/common/Common";
import useNoticePost from "hooks/notice/useNoticePost";

const NoticePost: React.FC = () => {
  const { notice, handleInputChange, handleSubmit } = useNoticePost();

  return (
    // 관리자만 접근할 수 있도록 수정하기
    <div className="info_body">
      <div className="content_register">
        {/* 제목 */}
        <div className="header">
          <PiNotePencilFill size={30} />
          <p>공지사항 등록</p>
        </div>

        {/* 버튼 */}
        <div className="btn_back">
          <button onClick={() => goBack()}>뒤로가기</button>
        </div>

        {/* 체크박스 */}
        <form className="check_container">
          <input
            type="checkbox"
            id="important"
            name="isImportant"
            checked={notice.isImportant}
            onChange={handleInputChange}
          />
          <label htmlFor="important">중요</label>
        </form>

        {/* 제목 */}
        <input
          className="title_container"
          onChange={handleInputChange} /* 입력 값이 변경될 때 핸들러 추가 */
          value={notice.title}
          name="title"
          required
          placeholder="제목을 입력하세요"
        ></input>

        {/* 본문 */}
        <textarea
          className="input_container"
          onChange={handleInputChange} /* 입력 값이 변경될 때 핸들러 추가 */
          value={notice.content}
          name="content"
          required
          placeholder="본문을 입력하세요"
        ></textarea>

        <div className="btn_container">
          <button
            className="btn_submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default NoticePost;
