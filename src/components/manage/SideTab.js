import 'styles/css/manage.css';

function SideTab(){
    return(
        <div className="tab_wrapper">
            <div className="tab_btn_wrapper">
                <button>회원 관리</button>
                <button>문제 관리</button>
                <button>피드백 관리</button>
            </div>
            <a className="btn_mng_logout">로그아웃</a>
        </div>
    )
}

export default SideTab;