import { StyledListPage } from "styles/styledComponent/ListPage-styled";
import RankingItem from "./RankingItem";
import GetSeniorsRank from "apis/ranking/GetSeniorsRank";

const SeniorRank = () => {

    // 재학생 순위 get Api 호출
    const {newRank} = GetSeniorsRank();
    
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