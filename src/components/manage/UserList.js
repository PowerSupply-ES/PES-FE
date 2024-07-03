import { useNavigate } from 'react-router-dom';
import '../../styles/css/manage.css';

function UserList({memberStatus, memberName, memberId, memberMajor}){
    const navigate = useNavigate();
    
    // 페이지 이동
    const gotoDetail = () =>{
        sessionStorage.setItem('memberId', memberId);
        navigate(`/manageUser/${memberId}`);
    }

    return(
        <>
            <div className="list_wrapper">
                <div className="title_state">{memberStatus}</div>
                <div className="title_name">{memberName}</div>
                <div className="title_stunum">{memberId}</div>   {/* 회원id */}
                <div className="title_studep">{memberMajor}</div>
                <div className="title_none">
                    <button className="levelup_btn">등업</button>
                    <button className="info_btn" onClick={()=>gotoDetail}>정보</button>
                    <button className="del_btn">삭제</button>
                </div>      
            </div>
        </>
    )
}

export default UserList;