// 회원상세페이지
import '../../styles/css/manage.css';
import SideTab from "components/manage/SideTab";


function UserDetail(){

    return(
        <div className="content_container">

            {/* 본문 */}
            <div className="manageuser_container">
                {/* 좌측 메뉴탭 */}
                <SideTab></SideTab>

                {/* 우측 유저 정보 */}
                <div className="userlist_wrapper">
                    <div className="list_container">

                    </div>
                </div>

            </div>


        </div>
    )
}

export default UserDetail;