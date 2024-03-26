import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import { StyledListPage } from "styles/ListPage-styled";
import RankingItem from "./rankingItem";

const JuniorRank = () => {

    const [memberGen, setMemberGen] = useState(35); // memberGen 35기로 기본 설정
    const [newRank, setNewRank] = useState([]);

    // 신입생 랭킹 불러오기 (get)
    const getNewRank = useCallback(async () => {
        try {
            const config = {
                withCredentials: true,
                params: {
                    memberGen,
                },
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

    const handleSelectChange = (e) => {
        setMemberGen(parseInt(e.target.value, 10));
    }

    return (
        <StyledListPage>
            <select className="select_box" value={memberGen} onChange={handleSelectChange}>
                <option value="35">35기</option>
            </select>
            <RankingItem id="순위" name="이름" score="점수" style="margin-bottom: 10px;"/>
            {
                newRank.map((rank, index) => (
                <RankingItem key={index} id={index + 1} name={rank.memberName} score={`${rank.score}점`} />
                ))
            }        
        </StyledListPage>
    );
}

export default JuniorRank;