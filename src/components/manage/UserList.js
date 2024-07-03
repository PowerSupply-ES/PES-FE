import { useNavigate } from 'react-router-dom';
import '../../styles/css/manage.css';
import { useEffect, useState } from "react";
import axios from 'axios';

function UserList(){
    
    const navigate = useNavigate();
    const [memDate, setMemDate] = useState([]);

    // 회원목록 api호출
    const getUserList= async() =>{
        const uri = `../api/admin/memberlist`

        try{
            const res = await axios.get(uri);
            const memList = res.data;
            setMemDate([...memList]);
            console.log("memList = ",memList);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        getUserList();
    },[])

    // 페이지 이동
    const gotoDetail = () =>{
        sessionStorage.setItem('memId', memDate.memberId);
        navigate(`/manageUser/${memDate.memberId}`);
    }

    return(
        <>
        {memDate.map((mem) =>{
            return(
                <ul className="list_wrapper">
        
                <li className="title_state">{mem.memberStatus}</li>
                <li className="title_name">{mem.memberName}</li>
                <li className="title_stunum">{mem.memberId}</li>   {/* 회원id */}
                <li className="title_studep">{mem.memberMajor}</li>
                <li className="title_none">
                    <button className="levelup_btn">등업</button>
                    <button className="info_btn" onClick={()=>{}}>정보</button>
                </li>      
            </ul>
            )
        })}
        </>
        
    )
}

export default UserList;