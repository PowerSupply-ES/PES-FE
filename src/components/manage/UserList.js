import { useNavigate } from 'react-router-dom';
import '../../styles/css/manage.css';
import { useState } from "react";

function UserList(){
    
    const navigate = useNavigate();
    const [memDate, setMemDate] = useState();


    const gotoDetail = () =>{
        sessionStorage.setItem('memId', memDate.memberId);
        navigate(`/manageUser/${memDate.memberId}`);
        
    }


    return(
        <div className="list_wrapper">
            <div className="title_state">재학생</div>
            <div className="title_name">최성임</div>
            <div className="title_stunum">21910867</div>
            <div className="title_studep">생명과학과</div>
            <div className="title_none">
                <button className="levelup_btn">등업</button>
                <button className="info_btn" onClick={()=>{}}>정보</button>
            </div>      
        </div>
    )
}

export default UserList;