import axios from 'axios';

// 회원목록 api호출
const getUserList = async(setMemDate) => {
    
    const uri = `api/admin/memberlist`

    try{
        const res = await axios.get(uri);
        const memList = res.data;
        setMemDate([...memList]);
    }catch(error){
        console.error(error);
    }
    // TODO : 예외처리하기
}
export default getUserList;
