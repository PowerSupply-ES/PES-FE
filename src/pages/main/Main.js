import React from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../App.css';
import img1 from '../../assets/images/coding.jpg';

function Main() {

  const status = sessionStorage.getItem('status');

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
            {/* status 값이 있으면 btn1만 렌더링, 없으면 btn1과 btn2 모두 렌더링 */}
            {status ? (
              <a href="/list" className='btn1'>바로가기</a>
            ) : (
              <>
                <a href="/list" className='btn1'>바로가기</a>
                <a href="/signin" className='btn2'>로그인</a>
              </>
            )}
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