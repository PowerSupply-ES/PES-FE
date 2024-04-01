import React from 'react';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import MovingImage from "components/main/MovingImage";
import ScrollImage from "components/main/ScrollImage";

import '../../App.css';

function Main() {

  return (
    <div className='mainPage'>
      <Header></Header>
    
      <div className='content'>
        {/* 상단 이미지 애니메이션*/}
        <MovingImage/>

        {/* 하단 이미지 스크롤 애니메이션*/}
        <ScrollImage/>

      </div>

      <Footer></Footer>
    </div>
  );
}


export default Main;