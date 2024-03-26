import {useState, useEffect} from "react";
import axios from "axios";
import { StyledListPage } from "styles/ListPage-styled";

const SeniorRank = (props) => {

    const [newRank, setNewRank] = useState([]);

    /*
    // 신입생 랭킹 불러오기 (get)
    const getNewRank = useCallback(async () => {
        try {
            const config = {
                withCredentials: true,
            };
        
            const response = await axios.get(
                `/api/rank`,
                config
            );

            if (response.status !== 204)
                setNewRank(response.data);
        
            } catch (error) {
            console.log(error);
        }
    }, [memberGen]); 

    useEffect(() => {
        getNewRank();
    }, [getNewRank]);
    */

    return (
        <StyledListPage>
            <RankingItem rank="순위" memberName="이름" score="답변수" style="margin-bottom: 10px;"/>
            {
                newRank.map((rank, index) => (
                <RankingItem key={index} id={index + 1} name={rank.memberName} score={`${rank.score}개`} />
                ))
            }        
        </StyledListPage>
    );
}

export default SeniorRank;