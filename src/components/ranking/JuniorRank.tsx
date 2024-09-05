import { StyledListPage, RankingItemStyled } from "styles/styledComponent";
import RankingItem from "./RankingItem";
import useJuniorRank from "hooks/rank/useJuniorRank";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const JuniorRank = () => {
  // 신입생 순위 get Api 호출
  const { newRank, handleSelectChange, memberGen } = useJuniorRank();

  return (
    <StyledListPage>
      <Select
        placeholder="35기"
        className="select_box"
        value={memberGen.toString()}
        onChange={(e) => handleSelectChange}
      >
        <Option value="35">35기</Option>
        {/* TODO: 기수 추가하기 */}
      </Select>
      
      {/* 제목 */}
      <RankingItemStyled >
        <div className="ranking_id">순위</div>
        <div className="member_name">이름</div>
        <div className="score">점수</div>
      </RankingItemStyled>


      <div className="ranking-list">
        {newRank.map((rank, index) => (
          <RankingItem
            key={index}
            rank={rank.rank}
            memberName={rank.memberName}
            score={`${rank.score}점`}
          />
        ))}
      </div>
    </StyledListPage>
  );
};

export default JuniorRank;
