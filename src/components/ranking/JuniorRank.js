import { StyledListPage } from "styles/styledComponent/ListPage-styled";
import RankingItem from "./RankingItem";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import useJuniorRank from "hooks/rank/useJuniorRank";

const JuniorRank = () => {
  // 신입생 순위 get Api 호출
  const { newRank, handleSelectChange, memberGen } = useJuniorRank();

  return (
    <StyledListPage>
      <Select
        placeholder="35기"
        className="select_box"
        value={memberGen}
        onChange={handleSelectChange}
      >
        <Option value="35">35기</Option>
      </Select>
      <RankingItem rank="순위" memberName="이름" score="점수" />
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
