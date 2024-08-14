// 회원상세페이지
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import 'styles/css/manage.css';
import 'styles/css/mypage.css';
import SideTab from "components/manage/SideTab";
import { FaCircleUser } from "react-icons/fa6";


function UserDetail(){
    let url = new URL(window.location.href);
    let memberId = url
        .pathname
        .split('/')[2];

    const [memberData, setMemberData] = useState();

    // 내 정보 GET 요청
    const sendGetInfo = async() => {
        const uri = `/api/admin/member/${memberId}`;
    
        try{
            const res = await axios.get(uri);
            const memDetail = res.data;
            setMemberData(memDetail);
        }catch(error){
            console.error(error);
        }
        //예외처리하기
    };

    useEffect(()=>{
        sendGetInfo();
    },[])


    return(
        <div className="content_container">

            {/* 본문 */}
            <div className="manageuser_container">
                {/* 좌측 메뉴탭 */}
                <SideTab></SideTab>

                {/* 우측 유저 정보 */}
                <div className="userlist_wrapper">
                    {/* <div className="list_container"> */}


                    

                        {!memberData ? (
                            <div>Loading...</div>
                        ) : (
                            <div className='mypage_content'>
                                <div className='left'>
                                    {/* 사용자 정보 */}
                                    <div className="memberInfo">
                                        <div className='info_name'>
                                        <FaCircleUser size={40} style={{color:'grey'}}></FaCircleUser>
                                        <p>{memberData.memberName}</p>
                                        {/* <p>님</p> */}
                                        </div>
                                        <div className='text'><div>학 번</div><p>{memberData.memberId}</p></div>
                                        <div className='text'><div>이메일</div><p>{memberData.memberEmail}</p></div>
                                        <div className='text'><div>기 수</div><p>{memberData.memberGen}</p></div>
                                        <div className='text'><div>상 태</div><p>{memberData.memberStatus}</p></div>
                                        <div className='text'><div>학 과</div><p>{memberData.memberMajor}</p></div>
                                        <div className='text'><div>전화 번호</div><p>{memberData.memberPhone}</p></div>
                                    </div>
                                    <div cclassName='manage_btn_container'>
                                        <button className='btn_editmem'>회원 수정</button>
                                        <button className='btn_deletemem'>회원 삭제</button>
                                    </div>
                                </div>


                                <div className='right'>
                                    {/* 내가 푼 문제 */}
                                    <div className='top'>
                                        <div className='prob_top'>
                                            <div className='mypage_btn'>푼 문제</div>
                                            <div className='probNum'>몇 개</div>
                                        </div>
                                        
                                        <div className='myProblem'>
                                        {/* <MyProblem myProb={myProb}></MyProblem> */}
                                        </div>
                                    </div>
                                    

                                    {/* 내 피드백 */}
                                    {/* 신입생,재학생에 따라 feedback 띄워주기 */}
                                    <div className='bottom'>
                                        <div className='feed_top'>
                                            <div className='mypage_btn'>feedback</div>
                                            <div className='feedNum'>몇 개</div>
                                        </div>
                                        

                                        <div className='myFeedback'>
                                        {/* <MyFeed myFeedback={myFeedback}></MyFeed> */}
                                        </div>
                                    </div>          
                            </div>
                            </div>

                        )}

                         {/* </div> */}
                    </div>
                </div>
                

            </div>


    )
}

export default UserDetail;