import React, { useEffect, useState } from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../styles/info.css';
import { HiSpeakerphone } from "react-icons/hi";


const NoticeDetail = () => {

    const [infoDetail, setDetail] =useState();

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
    }, [])

    return (
        <div className='info_body'>
            <Header></Header>

            <div className='content_Detail'> 
                {/* 제목 */}
                <div className='header'>
                    <HiSpeakerphone size={30}/> 
                    <p>{infoDetail.title}</p>
                </div>
                
                {/* 버튼 */}
                <div className='btn_back'>
                    <button>
                        뒤로가기
                    </button>
                </div>

                {/* 본문 */}
                <div className='text_container'>
                    {/* 줄바꿈인식, 내용초과시 break, scroll기능넣기 */}
                    <p className='text'>
                        {infoDetail.content}
                    </p>
                </div>
                
                {/* 관리자용버튼_state에 따라 보여지기 */}
                <div className='btn_container'>
                    <button className='btn_modify'>수정하기</button>
                    <button className='btn_delete'>삭제하기</button>
                </div>
                
                
            </div>

            <Footer></Footer>

        </div>
    )

}
export default NoticeDetail