import 'styles/css/manage.css';
import { useEffect, useState } from "react";
import UserList from 'components/manage/UserList';
import getUserList from 'apis/manage/getUserList';

// user 목록 관리 HOOK
const UserListHook = () => {
    
    const [memberData, setMemDate] = useState([]);

    useEffect(()=>{
        getUserList(setMemDate); // list API 요청
    },[])

    return(
      <>
        {memberData.map((mem) =>{
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

export default UserListHook;
