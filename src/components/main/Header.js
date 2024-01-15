import React from 'react';
import { useState } from 'react';

function Header() {
  return (
    <div>
        <Header0></Header0>

    </div>
  );
}


// 로그인x 넷바
function Header0(){ 
    return(
       <div className='container'>
         <button className='logout' href="#">로그인</button>

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
               <div>마이페이지</div>
               <div>로그아웃</div>
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