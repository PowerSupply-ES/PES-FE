import axios from "axios";

// 질문, 답변 블러오기 (get)
const getQues = async (answerId) => {
    try {
        const data = await axios.get(
            `/api/answer/${answerId}`,
            {withCredentials: true}
        );
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default getQues;