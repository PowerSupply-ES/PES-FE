import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../styles/notice.css';
import { PiNotePencilFill } from "react-icons/pi";


const PostNotice = () => {

    return (
        <div className='info_body'>
            <Header></Header>

            <div className='content_register'> 
                {/* 제목 */}
                <div className='header'>
                    <PiNotePencilFill size={30}/> 
                    <p>공지사항 등록</p>
                </div>

                {/* 버튼 */}
                <div className='btn_back'>
                    <button>
                        뒤로가기
                    </button>
                </div>

                {/* 제목 */}
                <input className='title_container'
                    placeholder='제목을 입력하세요'>
                </input>

                {/* 본문 */}
                <textarea className='input_container'
                    placeholder='본문을 입력하세요'>
                    {/* 줄바꿈인식, 내용초과시 break, scroll기능넣기 */}
                </textarea>
                <div className='btn_container'>
                    <button className='btn_submit'>등록하기</button>
                </div>



            </div>

            <Footer></Footer>

        </div>
    )

}
export default PostNotice