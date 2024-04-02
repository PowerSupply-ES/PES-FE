import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import { StyledListPage } from "styles/ListPage-styled";
import RankingItem from "./RankingItem";

const SeniorRank = () => {

    const [newRank, setNewRank] = useState([]);

    // 재학생 랭킹 불러오기 (get)
    const getSeniorRank = useCallback(async () => {
        try {
            const config = {
                withCredentials: true,
            };
        
            const response = await axios.get(
                `/api/senior`,
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
    

    return (
        <StyledListPage>
            <RankingItem rank="순위" memberName="이름" score="답변수" style="margin-bottom: 10px;"/>
            <div className="ranking-list">
            {
                newRank.map((rank, index) => (
                <RankingItem key={index} rank={rank.rank} memberName={rank.memberName} score={`${rank.score}개`} />
                ))
            }           
            </div>
        </StyledListPage>
    );
}

export default SeniorRank;