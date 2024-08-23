import postLogout from 'apis/common/postLogout';
import 'styles/css/manage.css';

const SideTab = () => {
    return(
        <div className="tab_wrapper">
            <div className="tab_btn_wrapper">
                <button>회원 관리</button>
                <button>문제 관리</button>
                <button>피드백 관리</button>
            </div>
            <a className="btn_mng_logout" onClick={postLogout} href="/">로그아웃</a>
        </div>
    )
}

export default SideTab;