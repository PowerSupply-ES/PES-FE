import React from 'react';
import { useState } from 'react';

function Header() {

  const status = localStorage.getItem('status');


  return (
    <div>
        {/* 로그인이 완료되었는지에 따라 다른 Header를 렌더링 */}
        {status ? <Header1 /> : <Header0 />}

    </div>
  );
}


// 로그인x 넷바
function Header0(){ 
    return(
       <div className='container'>
         <a className='logout' href="/signin">로그인</a>

         <div className='navbar'>
           <a className='logo' href="#">PES</a>
           <a className='menu2' href="#">풀이</a>
           <a className='menu1' href="#">문제</a>
         </div>

       </div>
    )
}

// 로그인o 넷바
function Header1(){ 
 const[isDropdownOpen,setIsDropdownOpen] = useState(false);
 const toggleDropdown = () =>{
   setIsDropdownOpen((상태)=>!상태);
 }

 const logout = () =>{
  // 쿠키 제거
      // 과거의 날짜로 설정하여 쿠키를 즉시 만료
      document.cookie = "Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      // 로컬 스토리지 클리어
      localStorage.clear();
      alert('로그아웃되었습니다.');
      window.location.href = 'signin';
  }

 return(
   //토글버튼
   <div className='container'>
     <div className='btns'>
       <button className='userLevel'>level</button>
       <button className='userId' onClick={toggleDropdown}>
         아이디
         {isDropdownOpen &&(
           <div className='dropdown-content'>
              <div className='userImage'></div>
              <div>이름</div>
              <div>레벨</div>
              <div>경험치</div>
              <div>
                <a href="/mypage">마이페이지</a>
                <button onClick={logout} className='btn_logout'>로그아웃</button>
              </div>
           </div>
         )}
       </button>
       
     </div>
     
     <div className='navbar'>
       <a className='logo' href="#">PES</a>
       <a className='menu2' href="#">풀이</a>
       <a className='menu1' href="#">문제</a>
     </div>
   </div>
 )
}


export default Header;