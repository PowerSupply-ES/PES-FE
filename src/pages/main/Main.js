import React from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../App.css';
import img1 from '../../assets/images/main_1.png';
import img2 from '../../assets/images/main_2.png';
import img3 from '../../assets/images/main_3.png';
import img4 from '../../assets/images/main_4.png';


function Main() {

  const status = sessionStorage.getItem('status');

  return (
    <div className='mainPage'>
      <Header></Header>
    
      <div className='content'>

        <div className='content1'>
          <img src={img1} ></img>
          <div className='main_btn'>
            {/* status 값이 있으면 btn1만 렌더링, 없으면 btn1과 btn2 모두 렌더링 */}
            {status ? (
              <>
              <a href="/list" className='btn1'>바로가기</a>
              <a href="/menual" className='btn3'>소개보기</a>
              </>
            ) : (
              <>
                <a href="/list" className='btn1'>바로가기</a>
                <a href="/signin" className='btn2'>로그인</a>
              </>
            )}
          </div>
        </div>
        
        <div className='content2'>
          <img src={img2} ></img>
        </div>
        <div className='content3'>
          <img src={img3} ></img>
        </div>

        <div className='content4'>
          <img src={img4} ></img>
        </div>

      </div>

      <Footer></Footer>
    </div>
  );
}




export default Main;