import Footer from "components/footer/Footer";
import Header from "components/main/Header";
import '../../styles/manage.css';

function ManageUser(){
    return(
        <div className="content_container">
            <Header></Header>

            {/* 본문 */}
            <div className="manageuser_container">

                {/* 좌측 메뉴탭 */}
                {/* 컴포넌트로 */}
                <div className="tab_wrapper">
                    <div className="tab_btn_wrapper">
                        <button>회원 관리</button>
                        <button>문제 관리</button>
                        <button>피드백 관리</button>
                    </div>
                    <button>로그아웃</button>
                </div>


                {/* 우측 유저 목록 */}
                <div className="userlist_wrapper">

                    {/* 제목 */}
                    <div className="title_wrapper">
                        <div>상태</div>
                        <div>이름</div>
                        <div>학번</div>
                        <div>학과</div>
                    </div>

                    {/* 회원목록 */}
                    {/* 컴포넌트로 */}
                    <div className="list_wrapper">

                        <div>재학생</div>
                        <div>최성임</div>
                        <div>21910867</div>
                        <div>생명과학과</div>

                        <button>등업</button>
                        <button>정보</button>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default ManageUser;