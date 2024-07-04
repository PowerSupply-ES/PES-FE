// 회원상세페이지
import '../../styles/css/manage.css';
import '../../styles/css/mypage.css';
import SideTab from "components/manage/SideTab";
import { FaCircleUser } from "react-icons/fa6";



function UserDetail(){

    return(
        <div className="content_container">

            {/* 본문 */}
            <div className="manageuser_container">
                {/* 좌측 메뉴탭 */}
                <SideTab></SideTab>

                {/* 우측 유저 정보 */}
                <div className="userlist_wrapper">
                    {/* <div className="list_container"> */}




                    <div className='mypage_content'>

                        <div className='left'>
                            {/* 사용자 정보 */}
                            <div className="memberInfo">
                                <div className='info_name'>
                                <FaCircleUser size={40} style={{color:'grey'}}></FaCircleUser>
                                <p>memberName</p>
                                {/* <p>님</p> */}
                                </div>
                                <div className='text'><div>학 번</div><p>학 번</p></div>
                                <div className='text'><div>이메일</div><p>이메일</p></div>
                                <div className='text'><div>기 수</div><p>기 수</p></div>
                                <div className='text'><div>상 태</div><p>상 태</p></div>
                                <div className='text'><div>학 과</div><p>학 과</p></div>
                                <div className='text'><div>번 호</div><p>번 호</p></div>
                            </div>
                            <button className='btn_deletemem'>회원 삭제</button>

                        </div>


                        <div className='right'>
                            {/* 내가 푼 문제 */}
                            <div className='top'>
                                <div className='prob_top'>
                                    <div className='mypage_btn'>내가 푼 문제</div>
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
                                    <div className='mypage_btn'>my feedback</div>
                                    <div className='feedNum'>몇 개</div>
                                </div>
                                

                                <div className='myFeedback'>
                                {/* <MyFeed myFeedback={myFeedback}></MyFeed> */}
                                </div>
                            </div>

                        {/* </div> */}

                    </div>




                    </div>
                </div>

            </div>


        </div>
    )
}

export default UserDetail;