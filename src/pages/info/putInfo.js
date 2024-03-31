import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../styles/info.css';
import { PiNotePencilFill } from "react-icons/pi";


const PutInfo = () => {

    return (
        <div className='info_body'>
            <Header></Header>

            <div className='content_register'> 
                {/* 제목 */}
                <div className='header'>
                    <PiNotePencilFill size={30}/> 
                    <p>공지사항등록</p>
                </div>

                {/* 버튼 */}
                <div className='btn_back'>
                    <button>
                        뒤로가기
                    </button>
                </div>
                

                {/* 제목 */}




                {/* 본문 */}





            </div>

            <Footer></Footer>

        </div>
    )

}
export default PutInfo