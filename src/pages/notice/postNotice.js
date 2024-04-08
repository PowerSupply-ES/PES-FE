import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../styles/notice.css';
import { PiNotePencilFill } from "react-icons/pi";


const PostNotice = () => {
    
    const [notice, setNotice]= useState({
        noticeId :'',
        title :'',
        writerGen :'',
        writer :'',
        noticeHit :'',
        isImportant :'',
        createdTime :''
    });

    const submitNotice = () =>{
        const uri = 'api/notice';

        fetch(uri, {
            headers: {
                method: 'POST',
                'Content-Type': 'application/json',
            }
        })
        .then((response)=>{
            if (!response.ok) {
                // console.log('서버응답:', response);
                if (response.status === 403) {
                    throw new Error('권한이 없습니다');
                } else {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
            }
            return response.json();
        })
        .then((responseData) => {
            const resultMessage = responseData.message;
            alert(resultMessage);
            window.location.href = '../notice';
        })
          .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }


    //입력필드 값 변경될때마다 호출
    const handleInputChange = (e) => {
        setNotice({
        // notice복사, 변경된 필드만 업데이트
        ...notice,
        [e.target.name]: e.target.value
        });
    };

    // 폼이 제출될 때 호출
    const handleSubmit = (e) => {
        submitNotice();
    };

    const goBack = () =>{
        window.history.back();
    }
    

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
                    <button onClick={()=>goBack()}>
                        뒤로가기
                    </button>
                </div>

                {/* 제목 */}
                <input 
                    className='title_container'
                    onChange={handleInputChange} /* 입력 값이 변경될 때 핸들러 추가 */
                    value={notice.title}
                    name="title"
                    required
                    placeholder='제목을 입력하세요'>
                </input>

                {/* 본문 */}
                <textarea 
                    className='input_container'
                    onChange={handleInputChange} /* 입력 값이 변경될 때 핸들러 추가 */
                    value={notice.content}
                    name="content"
                    required
                    placeholder='본문을 입력하세요'>
                </textarea>

                <div className='btn_container'>
                    <button className='btn_submit' onClick={() => {
                        handleSubmit();
                    }}>
                        등록하기
                    </button>
                </div>



            </div>

            <Footer></Footer>

        </div>
    )

}
export default PostNotice