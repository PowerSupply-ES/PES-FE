import React, { useEffect, useState } from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../styles/notice.css';
import { HiSpeakerphone } from "react-icons/hi";


const NoticeDetail = () => {
    const memberStatus = sessionStorage.getItem('memberStatus');
    const [noticeDetail, setDetail] =useState([]); //공지사항 세부정보
    const [isEditing, setIsEditing] = useState(false); //수정상태
    
    let url = new URL(window.location.href);
    let noticeId = url
    .pathname
    .split('/')[2];

    const uri = '/api/notice/';

    const getNoticeDetail = () => {
        
        fetch(`${uri}${noticeId}`,{
            method: 'GET',
        })
        .then(response => {
            if (!response.ok) {
              console.log('서버응답:', response);
              throw new Error(`데이터 가져오기 실패: ${response.status} ${response.statusText}`);
            }
            return response.json();
          })
        .then(data => {
            setDetail(data);
        })
        .catch(error => {
            console.error('데이터 가져오기 실패:', error);
        });
    }
    useEffect(()=>{
        getNoticeDetail();
    }, [noticeId])

    // Time에서 "T"를 제거하여 표시 함수
    const transferTime = (time) => {
        if (!time) return ""; // 시간이 없는 경우 처리
        
        return time.replace("T", " ");
    }

    // 뒤로가기 함수
    const goBack = () =>{
        window.history.back();
    }

    // 공지사항 제거 함수
    const DeleteNotice = () => {
        fetch(`${uri}${noticeId}`,{
            method: 'DELETE',
        })
        .then((response)=>{
            if(response.status === 403){
                alert('권한이 없습니다');
            }
            else if(response.status === 200){
                alert('공지사항이 성공적으로 삭제되었습니다!');
                window.location.href = '/notice';
            }
            else if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);  
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

    // 공지사항 수정 함수
    const modifyNotice = () => {
        fetch(`${uri}${noticeId}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(noticeDetail),
        })
        .then((response)=>{
            if(response.status === 403){
                alert('권한이 없습니다');
            }
            else if(response.status === 404){
                alert('해당 공지사항이 존재하지 않습니다');
            }
            else if(response.status === 200){
                alert('공지사항이 성공적으로 수정되었습니다!');
                window.location.href = '/notice';
            }
            else if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);  
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });

    }


    // 공지사항 수정 상태 관리
    const toggleEditing = () => {
        setIsEditing(prevState => !prevState);
        console.log('isEditing = ',isEditing);
    }


    return (
        <div className='info_body'>
            <Header></Header>

            <div className='content_Detail'> 
                {/* 제목 */}
                <div className='header'>
                    <HiSpeakerphone size={30}/> 

                    {/* 수정 가능 상태에 따라 보여지는 내용 조절 */}
                    {isEditing 
                    ? (
                        <textarea 
                            // className='header' 
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
                            // className='text_container' 
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
                    ? (<button className='btn_modify' onClick={modifyNotice}>저장하기</button>)
                    :(<button className='btn_submit' onClick={toggleEditing}>수정하기</button>) 
                    }
                    
                    <button className='btn_delete' onClick={()=>DeleteNotice()}>삭제하기</button>
                </div>
                
            </div>

            <Footer></Footer>

        </div>
    )

}
export default NoticeDetail