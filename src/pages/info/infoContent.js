import React from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../styles/info.css';
import { HiSpeakerphone } from "react-icons/hi";


const InfoContent = () => {
    return (
        <div className='info_body'>
            <Header></Header>

            <div className='content_info'> 
                <div className='header'>
                    <HiSpeakerphone size={30}/> 
                    <p>v1.5 업데이트 내용</p>
                </div>
                {/* 관리자만 띄우게 수정하기 */}
                <div className='add_info'>
                    <div>등록하기</div>
                </div>

                <div className='info_title'>
                    <div className='title_0'> </div>
                    <div className='title_1'>번호</div>
                    <div className='title_2'>제목</div>
                    <div className='title_3'>작성 날짜</div>
                    <div className='title_4'>조회 수</div>
                </div>
                
            </div>

            <Footer></Footer>

        </div>
    )

}
export default InfoContent