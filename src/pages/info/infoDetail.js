import React from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../styles/info.css';
import { HiSpeakerphone } from "react-icons/hi";


const InfoDetail = () => {












    
    return (
        <div className='info_body'>
            <Header></Header>

            <div className='content_Detail'> 
                {/* 제목 */}
                <div className='header'>
                    <HiSpeakerphone size={30}/> 
                    <p>v1.5 업데이트 내용</p>
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
                    이번 업데이트에서는 이거랑 저거랑 수정했고
                    이런저런 기능이 추가됐습니다
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
export default InfoDetail