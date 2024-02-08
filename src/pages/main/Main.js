import React from 'react';
import { useState } from 'react';
import Header from 'components/main/Header';
import '../../App.css';
import img1 from '../../assets/images/coding.jpg';





function Main() {
  return (
    <div>
      <Header></Header>
    
      <div className='content'>

        <div className='content0'>
          <div className='slid'>
            <p>image</p>

          </div>
        </div>

        <div className='content1'>
          <img src={img1} ></img>
          {/* <p>우리는 지속 가능한 교육 시스템을 개발합니다</p> */}

        </div>
      </div>

    </div>
  );
}




export default Main;