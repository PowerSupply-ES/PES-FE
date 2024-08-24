import 'styles/css/manage.css';
import { useEffect, useState } from "react";
import getUsersList from 'apis/manage/getUsersList';

// user 목록 관리 HOOK
const useUserList = () => {
    
    const [memberData, setMemDate] = useState([]);

    useEffect(()=>{
        getUsersList(setMemDate); // list API 요청
    },[])

    return memberData;
}

export default useUserList;