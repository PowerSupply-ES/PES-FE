import React, {useState } from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../styles/notice.css';
import { PiNotePencilFill } from "react-icons/pi";


const PostNotice = () => {
    
    const [notice, setNotice]= useState({
        title :'',
        content:'',
        isImportant :false, //초기값 false로 설정
    });

    const submitNotice = () =>{
        const uri = 'api/notice';

        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(notice),
        })
        .then((response)=>{
            if (!response.ok) {
                // console.log('서버응답:', response);
                console.log(notice);

                if (response.status === 403) {
                    throw new Error('권한이 없습니다');
                } else if(response.status === 201){
                    throw new Error('공지사항이 성공적으로 등록되었습니다!');
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


    //입력필드 값 변경될때마다 호출
    const handleInputChange = (e) => {
        const { name, value, type } = e.target;

        // 입력 요소의 타입이 체크박스이고 checked 속성이 있다면 해당 값에 따라 isImportant 값을 변경
        const newValue=type==='checkbox'
            ? !notice.isImportant
            : value

        setNotice({
            // notice복사, 변경된 필드만 업데이트
            ...notice,
            [name]:newValue
        });
    };

    // 폼이 제출될 때 호출
    const handleSubmit = () => {
        submitNotice();
    };

    const goBack = () =>{
        window.history.back();
    }
    

    return (
        // 관리자만 접근할 수 있도록 수정하기
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

                {/* 체크박스 */}
                <form className='check_container'>
                    <input 
                        type='checkbox' 
                        id='important' 
                        name='isImportant' 
                        value={notice.isImportant}
                        onChange={handleInputChange}
                        />
                    <label htmlFor="important">중요</label>
                </form>

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