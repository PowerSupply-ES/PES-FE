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
            <ul className="list_wrapper">

            <li className="title_state">{memberStatus}</li>
            <li className="title_name">{memberName}</li>
            <li className="title_stunum">{memberId}</li>   {/* 회원id */}
            <li className="title_studep">{memberMajor}</li>
            <li className="title_none">
                <button className="levelup_btn">등업</button>
                <button className="info_btn" onClick={()=>{}}>정보</button>
            </li>      
            </ul>
        </>
    )
}

export default UserList;