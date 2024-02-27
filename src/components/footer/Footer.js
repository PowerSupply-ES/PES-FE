import React from 'react';

function Footer() {

  return (
    <div>
        <Bottom></Bottom>

    </div>
  );
}

function Bottom(){ 
    return(
      <div className='footer'>

        <div className='footer_left'>
          <p className='logo'>PES</p>
          <div className='info'>
            <div className='icon_phone'> <p>010-8012-0865</p></div>
            <div className='icon_address'> <p>경북 경산시 대학로 280 생산기술연구원 G15 213호</p></div>
            <div className='icon_email'> <p>csi9926@gmail.com</p></div>
            
          </div>
        </div>
        <div className='footer_right'>
            <p className='about'>About The Club</p>
            <p className='info1'>영남대학교 로봇공학과 동아리 PowerSupply의</p>
            <p className='info2'>교육시스템 개발팀 PES</p>
            <div className='icon_sns'></div>
        
            <div className='footer_logout'>로그아웃</div>
        </div>

      </div>
    )
}

export default Footer;