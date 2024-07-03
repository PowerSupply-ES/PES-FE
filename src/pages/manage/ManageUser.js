import Header from "components/main/Header";
import '../../styles/css/manage.css';
import GetUserList from "components/manage/GetUserList";

import SideTab from "./SideTab";

function ManageUser(){
    return(
        <div className="content_container">
            <Header></Header>

            {/* 본문 */}
            <div className="manageuser_container">

                {/* 좌측 메뉴탭 */}
                <SideTab></SideTab>


                {/* 우측 유저 목록 */}
                <div className="userlist_wrapper">
                    <div className="list_container">

                        {/* 제목 */}
                        {/* 이것도UserList컴포넌트로 제작가능할듯 */}
                        <div className="title_wrapper">
                            <div className="title_state">상태</div>
                            <div className="title_name">이름</div>
                            <div className="title_stunum">학번</div>
                            <div className="title_studep">학과</div>
                            <div className="title_none"> </div>
                        </div>

                        {/* 회원목록 */}
                        <GetUserList></GetUserList>

                    </div>
                </div>


            </div>
        </div>
    )

}

export default ManageUser;