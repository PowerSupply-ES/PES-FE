import { useNavigate } from 'react-router-dom';
import '../../styles/css/manage.css';

function UserList({memberStatus, memberName, memberId, memberMajor}){
    const navigate = useNavigate();
    
    // 페이지 이동
    const gotoDetail = () =>{
        console.log("click!!");
        sessionStorage.setItem('memberId', memberId);
        navigate(`/manageUser/${memberId}`);
    }

    return(
        <>
            <ul className="list_wrapper">
                {/* memberStatus에 따라 색상부여 */}
                <li className=
                    {memberStatus=="신입생" ? "title_state_new" 
                    : memberStatus=="재학생" ? "title_state_old"
                    : memberStatus=="관리자" ? "title_state_manage"
                    : ""
                }
                >{memberStatus}</li>
                <li className="title_name">{memberName}</li>
                <li className="title_stunum">{memberId}</li>   {/* 회원id */}
                <li className="title_studep">{memberMajor}</li>
                <li className="title_none">
                    <button className="levelup_btn">등업</button>
                    <button className="info_btn" onClick={gotoDetail}>정보</button>
                    {/* <button className="del_btn">삭제</button> */}
                </li>      
            </ul>
        </>
    )
}

export default UserList;