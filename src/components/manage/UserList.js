import '../../styles/css/manage.css';

function UserList(){
    return(
        <div className="list_wrapper">
            <div className="title_state">재학생</div>
            <div className="title_name">최성임</div>
            <div className="title_stunum">21910867</div>
            <div className="title_studep">생명과학과</div>
            <div className="title_none">
                <button className="levelup_btn">등업</button>
                <button className="info_btn">정보</button>
            </div>      
        </div>
    )
}

export default UserList;