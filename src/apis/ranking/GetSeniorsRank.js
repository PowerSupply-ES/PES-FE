import {useState, useEffect, useCallback} from "react";
import axios from "axios";

// 재학생 등수 GET
const GetSeniorsRank = () => {
    const [newRank, setNewRank] = useState([]);

    // GET api 호출
    const getSeniorRank = useCallback(async () => {
        try {
            const config = {
                withCredentials: true,
            };
        
            const response = await axios.get(
                `/api/rank/senior`,
                config
            );

            if (response.status !== 204)
                setNewRank(response.data);
        
            } catch (error) {
            console.log(error);
        }
    }, []); 

    useEffect(() => {
        getSeniorRank();
    }, [getSeniorRank]);
    
    return {newRank};
}

export default GetSeniorsRank;