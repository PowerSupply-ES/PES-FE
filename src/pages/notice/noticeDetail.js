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

    const getNoticeDetail = () => {
        const uri = '/api/notice/';
        

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

    const goBack = () =>{
        window.history.back();
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
                        <li><p>생성시간</p>{noticeDetail.createdTime}</li>
                        <li><p>수정시간</p>{noticeDetail.updatedTime}</li>
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
                    <button className='btn_delete'>삭제하기</button>
                </div>
                
            </div>

            <Footer></Footer>

        </div>
    )

}
export default NoticeDetail