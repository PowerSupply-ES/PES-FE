import React from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../App.css';
import img1 from '../../assets/images/coding.jpg';

function Main() {
  return (
    <div>
      <Header></Header>
    
      <div className='content'>

        <div className='content0'>
          <div className='ps'>
            <p className='p1'>PowerSupply Education System</p>
            <p className='p2'>우리는 지속 가능한 교육 시스템을 만듭니다</p>
          </div>
          
          <div className='main_btn'>
            <a href="/list" className='btn1'>바로가기</a>
            <a href="/Signin" className='btn2'>로그인</a>
          </div>

        </div>
        <div className='content1'>
          <img src={img1} ></img>
        </div>



      </div>

      <Footer></Footer>
    </div>
  );
}




export default Main;