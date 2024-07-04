import '../../styles/css/manage.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import UserList from './UserList';

function GetUserList(){
    
    const [memDate, setMemDate] = useState([]);

    // 회원목록 api호출
    const getUserList= async() =>{
        const uri = `../api/admin/memberlist`

        try{
            const res = await axios.get(uri);
            const memList = res.data;
            setMemDate([...memList]);
        }catch(error){
            console.error(error);
        }
    }
    //예외처리하기

    useEffect(()=>{
        getUserList();
    },[])

    
    return(
        <>
        {memDate.map((mem) =>{
            return(
                <UserList 
                    memberStatus={mem.memberStatus} 
                    memberName={mem.memberName} 
                    memberId={mem.memberId} 
                    memberMajor={mem.memberMajor}>
                </UserList>   
            )
        })}
        </>
    )
}

export default GetUserList;