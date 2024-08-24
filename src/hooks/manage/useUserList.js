import 'styles/css/manage.css';
import { useEffect, useState } from "react";
import getUserList from 'apis/manage/getUserList';

// user 목록 관리 HOOK
const useUserList = () => {
    
    const [memberData, setMemDate] = useState([]);

    useEffect(()=>{
        getUserList(setMemDate); // list API 요청
    },[])

    return memberData;
}

export default useUserList;