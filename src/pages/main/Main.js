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

        <div className='content0'></div>
        <div className='content1'>
          <img src={img1} ></img>
        </div>



      </div>

    </div>
  );
}




export default Main;