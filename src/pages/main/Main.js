import React from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import MovingImage from "components/main/MovingImage";

import '../../App.css';

import img0 from '../../assets/images/backImg.png';
import img0_0 from '../../assets/images/backImg_right.png';

import img1 from '../../assets/images/main_1.png';
import img2 from '../../assets/images/main_2.png';
import img3 from '../../assets/images/main_3.png';
import img4 from '../../assets/images/main_4.png';


function Main() {

  
  return (
    <div className='mainPage'>
      <Header></Header>
    
      <div className='content'>
        {/* 애니메이션효과*/}
        <MovingImage/>
        
        <div className='content2'>
          <img src={img2} />
        </div>
        <div className='content3'>
          <img src={img3} />
        </div>

        <div className='content4'>
          <img src={img4} />
        </div>

      </div>

      <Footer></Footer>
    </div>
  );
}




export default Main;