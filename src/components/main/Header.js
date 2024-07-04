import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/css/topDropdown.css'; 
import '../../styles/css/navbar.css'; 
import '../../styles/css/footer.css'; 
// import Logout from 'components/logout/Logout';


import { Outlet, useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import Footer from 'components/footer/Footer';


function Header() {

  const status = sessionStorage.getItem('status');

  return (
    <div>
        {/* 로그인이 완료되었는지에 따라 다른 Header를 렌더링 */}
        {status ? <Header1 /> : <Header0 />}
        <Outlet/>
        <Footer></Footer>

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
           <p className='logo' onClick={()=>navigate('/')}>PES</p>
           <a className='menu1' onClick={()=>navigate('/list')}>문제</a>
           <a className='menu2' onClick={()=>navigate('/menual')}>소개</a>
           <a className='menu3' onClick={()=>navigate('/notice')}>공지사항</a>

         </div>

       </div>
    )
}

// 로그인o 넷바
function Header1(){ 
  const navigate = useNavigate();

 const [isDropdownOpen,setIsDropdownOpen] = useState(false);
 const [memberData, setMemberData] = useState({
  memberName: '',
  memberScore: '',
  memberStatus: '',
  memberGen:'',
  hasNewNotices: false,
  });
  

 const toggleDropdown = () =>{
   setIsDropdownOpen((state)=>!state);
 }
  const uri = '../api/exp';
  const memberEmail = sessionStorage.getItem('memberEmail');


  // 넷바 사용자 정보
  const userInfo = () =>{
    fetch(`${uri}?memberEmail=${memberEmail}`, {
      method: 'GET',
    })
      .then(response => {
        if(response.status === 403){
          alert("로그인이 만료됐습니다!");
          // logoutUser();
          sessionStorage.clear();
          localStorage.clear();
          navigate('/signin');
        }
        else if (!response.ok) {
          console.log('서버응답:', response);
          throw new Error(`데이터 가져오기 실패: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setMemberData(data);
        sessionStorage.setItem('memberName', data.memberName);
        sessionStorage.setItem('memberStatus', data.memberStatus);
        sessionStorage.setItem('hasNewNotices', data.hasNewNotices);
        // sessionStorage.setItem(
        //   {'memberName': data.memberName, 
        //   'memberStatus': data.memberStatus,
        //   'hasNewNotices': data.hasNewNotices,
        // });


      })
      .catch(error => {
        console.error('데이터 가져오기 실패:', error);
      });

  };
  useEffect(() => {
    userInfo();
  }, []);

  
  //로그아웃 api호출 함수
  const logoutUser = () => {
    const uri = '../api/logout';
  
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (!response.ok) {
          console.error('로그아웃 실패:', response.status, response.statusText);
          throw new Error(`로그아웃 실패: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        // 로컬 스토리지 클리어
        sessionStorage.clear();
        localStorage.clear();
        alert(data.message);

        window.location.href = '../';
      })
      .catch(error => {
        console.error('로그아웃 실패:', error);
      });
  };


  const handleLogoutClick = () => {
    console.log("로그아웃");
    logoutUser();
  };

 return(
   //토글버튼
  <div className='container'>

     <div className='btns'>
       {/* <div className='userLevel'>level</div> */}
       <button className='userId' onClick={toggleDropdown}>
          {memberData.memberName}님
         {isDropdownOpen &&(
           <div className='dropdown-content'>
              {/* <div className='userImage'></div> */}
              {/* <FaUserCircle size={92}></FaUserCircle> */}
              {/* <FaRobot size={72}></FaRobot> */}
              <FaCircleUser size={60} style={{color:'lightgray'}}></FaCircleUser>

              <div className='memberName'>{memberData.memberName}님</div>
              
              <div className='navbarInfo'>
                <div className='memberStatus'>{memberData.memberStatus}</div>
                <div className='memberGen'>{memberData.memberGen}기</div>
                <div className='memberScore'>현재<p>{memberData.memberScore}</p>점</div>
              </div>
              <div className='navbar_bottom'>
                <a className='btn_mypage' href="/mypage">마이페이지</a>
                <a onClick={handleLogoutClick} className='btn_top_logout'>로그아웃</a>    
              </div>
           </div>
         )}
       </button>
       
    </div>
     
    <div className='navbar'>
      <a className='logo' onClick={()=>navigate('/')}>PES</a>
      <a className='menu1' onClick={()=>navigate('/list')}>문제</a>
      <a className='menu2' onClick={()=>navigate('/menual')}>소개</a>
      <div>
        <a className='menu3' onClick={()=>navigate('/notice')}>공지사항</a>
         {/* 새로운 공지사항 있을때 아이콘 표시 */}
         {/* {memberData.hasNewNotices ? 
          (<button className='noticeAlertBtn' onClick={()=>navigate('/notice')}>N</button>) 
          : (<></>)
          } */}
        

      </div>
       
    </div>
  </div>
 )
}


export default Header;