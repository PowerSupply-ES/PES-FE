import axios from "axios";

const getUserDetail = async(setMemberData) => {
    let url = new URL(window.location.href);
    let memberId = url
        .pathname
        .split('/')[2];

    const uri = `/api/admin/member/${memberId}`;
    
    try{
        const res = await axios.get(uri);
        const memDetail = res.data;
        setMemberData(memDetail);
    }catch(error){
        console.error(error);
    }
    // TODO : 예외처리하기
}
export default getUserDetail;