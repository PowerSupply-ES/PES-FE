import getUserDetail from 'apis/manage/getUserDetail';
import { useState, useEffect } from 'react';

const useUserDetail = () => {
    const [memberData, setMemberData] = useState();

    useEffect(()=>{
        getUserDetail(setMemberData);
    },[])

    // TODO : 회원수정, 회원삭제 로직 추가하기

    return { memberData}
}
export default useUserDetail;