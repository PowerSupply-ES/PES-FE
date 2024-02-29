import React from 'react';
import { useState, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";




function Header() {

  const status = sessionStorage.getItem('status');
  // const memberEmail = localStorage.getItem('memberEmail');

  return (
    <div>
        {/* 로그인이 완료되었는지에 따라 다른 Header를 렌더링 */}
        {status ? <Header1 /> : <Header0 />}

    </div>
  );
}


// 로그인x 넷바
function Header0(){ 

  const navigate = useNavigate();
  
    return(
       <div className='container'>
         <a className='logout' href="/signin">로그인</a>

         <div className='navbar'>
           <p className='logo' onClick={()=>navigate('/main')}>PES</p>
           <a className='menu1' onClick={()=>navigate('/list')}>문제</a>
         </div>

       </div>
    )
}

// 로그인o 넷바
function Header1(){ 
  const navigate = useNavigate();

 const[isDropdownOpen,setIsDropdownOpen] = useState(false);
 const toggleDropdown = () =>{
   setIsDropdownOpen((상태)=>!상태);
 }

  const uri = '../api/exp';
  const memberEmail = sessionStorage.getItem('memberEmail');
 
  const [memberData, setMemberData] = useState({
    memberName: '',
    memberScore: '',
    memberData: ''
  });


  // 넷바 사용자 정보
  const userInfo = () =>{
    fetch(`${uri}?memberEmail=${memberEmail}`, {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          console.log('서버응답:', response);
          throw new Error(`데이터 가져오기 실패: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setMemberData(data);
        sessionStorage.setItem('memberName', data.memberName);
      })
      .catch(error => {
        console.error('데이터 가져오기 실패:', error);
      });

  };

  useEffect(() => {
    userInfo();
  }, []);


 const logout = () =>{
  // 쿠키 제거
      // 과거의 날짜로 설정하여 쿠키를 즉시 만료
      document.cookie = "Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=pes23.com";  
      // 로컬 스토리지 클리어
      sessionStorage.clear();
      localStorage.clear();
      alert('로그아웃되었습니다.');
      window.location.href = '../main';
  }

 return(
   //토글버튼
   <div className='container'>
     <div className='btns'>
       <div className='userLevel'>level</div>
       <button className='userId' onClick={toggleDropdown}>
          {memberEmail}님
         {isDropdownOpen &&(
           <div className='dropdown-content'>
              {/* <div className='userImage'></div> */}
              {/* <FaUserCircle size={92}></FaUserCircle> */}
              {/* <FaRobot size={72}></FaRobot> */}
              <FaCircleUser size={60} style={{color:'lightgray'}}></FaCircleUser>

              <div className='memberName'>{memberData.memberName}님</div>
              <div className='memberStatus'>{memberData.memberStatus}</div>
              <div className='memberScore'>
                현재<p>{memberData.memberScore}</p>점
              </div>

              <div>
                <a className='btn_mypage' href="/mypage">마이페이지</a>
                <a onClick={logout} className='btn_logout'>로그아웃</a>
              </div>
           </div>
         )}
       </button>
       
     </div>
     
     <div className='navbar'>
       <a className='logo' onClick={()=>navigate('/main')}>PES</a>
        {/* 주석처리하기! */}
       {/* <a className='menu2' onClick={()=>navigate('/solution')}>풀이</a> */}
       <a className='menu1' onClick={()=>navigate('/list')}>문제</a>
     </div>
   </div>
 )
}


export default Header;