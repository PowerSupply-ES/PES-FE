import axios from "axios"

// 댓글 불러오기 (get)
const getFeed = async (answerId) => {
    try {
        const data= await axios.get(
            `/api/comment/${answerId}`, 
            {withCredentials: true});
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default getFeed;