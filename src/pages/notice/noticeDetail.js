import React, { useEffect, useState } from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../styles/notice.css';
import { HiSpeakerphone } from "react-icons/hi";


const NoticeDetail = () => {
    const memberStatus = sessionStorage.getItem('memberStatus');
    const [noticeDetail, setDetail] =useState([]);
    
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
        
        return time.replace("T", "");
    }

    // 뒤로가기 함수
    const goBack = () =>{
        window.history.back();
    }

    // 공지사항 제거 함수
    const DeleteNotice = () => {

        fetch(`${uri}${noticeId}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response)=>{
            if (!response.ok) {
                console.log('서버응답:', response);
                if (response.status === 403) {
                    throw new Error('권한이 없습니다');
                } else if(response.status === 200){
                    throw new Error('공지사항이 성공적으로 삭제되었습니다!');
                }else{
                    throw new Error(`${response.status} ${response.statusText}`);
                }
            }
            return response.json();
        })
        .then((responseData) => {
            if (!responseData) {
                console.log("서버의 응답이 비어있습니다.");
                return;
            }
            const resultMessage = responseData.message;
            alert(resultMessage);
            window.location.href = '/notice';
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }


    return (
        <div className='info_body'>
            <Header></Header>

            <div className='content_Detail'> 
                {/* 제목 */}
                <div className='header'>
                    <HiSpeakerphone size={30}/> 
                    <p>{noticeDetail.title}</p>
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
                    {/* 줄바꿈인식, 내용초과시 break, scroll기능넣기 */}
                    <p className='text'>{noticeDetail.content}</p>
                </div>
                
                {/* 관리자용버튼_state에 따라 보여지기 */}
                <div className={memberStatus==='관리자' ? 'btn_container':'no_button'}>
                    <button className='btn_submit'>수정하기</button>
                    <button className='btn_delete' onClick={()=>{DeleteNotice()}}>삭제하기</button>
                </div>
                
            </div>

            <Footer></Footer>

        </div>
    )

}
export default NoticeDetail