import 'styles/css/notice.css';
import { HiSpeakerphone } from "react-icons/hi";
import { transferTime, goBack } from "components/common/Common"
import delNotice from 'apis/notice/delNotice';
import fetchNotice from 'apis/notice/fetchNotice';
import useNoticeDetail from 'hooks/notice/useNoticeDetail';

const NoticeDetail = () => {

    const {memberStatus, noticeDetail, isEditing, toggleEditing, setDetail, uri, noticeId} = useNoticeDetail();

    return (
        <div className='info_body'>

            <div className='content_Detail'> 
                {/* 제목 */}
                <div className='header'>
                    <HiSpeakerphone size={30}/> 

                    {/* 수정 가능 상태에 따라 보여지는 내용 조절 */}
                    {isEditing 
                    ? (
                        <textarea 
                            className='textarea_header' 
                            value={noticeDetail.title} 
                            onChange={(e) => setDetail(prevState => ({ ...prevState, title: e.target.value }))}
                        />
                    ) 
                    : (
                        <p>{noticeDetail.title}</p>
                    )}

                </div>

                {/* 공지사항 정보 */}
                <div className='noticeInfo-container'>
                    <ul className ='noticeInfo'>
                        {/* 작성자정보 */}
                        <li><p>작성자</p>{noticeDetail.writerGen}기 {noticeDetail.writer}</li>
                        {/* 시간 정보 */}
                        <li><p>생성시간</p>{transferTime(noticeDetail.createdTime)}</li>
                        <li><p>수정시간</p>{transferTime(noticeDetail.updatedTime)}</li>
                        {/* 조회수정보 */}
                        <li><p>조회수</p>{noticeDetail.noticeHit}회</li>
                    </ul>
                </div>

                {/* 버튼 */}
                <div className='btn_back'>
                    <button onClick={()=>goBack()}>
                        뒤로가기
                    </button>
                </div>

                {/* 본문 */}
                <div className='text_container'>
                    {/* 수정 가능 상태에 따라 보여지는 내용 조절 */}
                    {isEditing 
                    ? (
                        <textarea 
                            className='textarea_content' 
                            value={noticeDetail.content} 
                            onChange={(e) => setDetail(prevState => ({ ...prevState, content: e.target.value }))}
                        />
                    ) 
                    : (
                        <p className='text'>{noticeDetail.content}</p> //줄바꿈인식, 내용초과시 break, scroll기능넣기
                    )}
                </div>
                
                {/* 관리자용버튼_state에 따라 보여지기 */}
                <div className={memberStatus==='관리자' ? 'btn_container':'no_button'}>
                    {/* 수정 중 상태에 따라 버튼 대체 */}
                    {isEditing 
                    ? (<button className='btn_modify' onClick={fetchNotice(uri, noticeId, noticeDetail)}>저장하기</button>)
                    :(<button className='btn_submit' onClick={toggleEditing}>수정하기</button>) 
                    }
                    
                    <button className='btn_delete' onClick={()=>delNotice(uri, noticeId)}>삭제하기</button>
                </div>
                
            </div>

        </div>
    )

}
export default NoticeDetail