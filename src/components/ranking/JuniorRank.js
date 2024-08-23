import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { StyledListPage } from "styles/styledComponent/ListPage-styled";
import RankingItem from "./RankingItem";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

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

      const response = await axios.get(`/api/rank/junior`, config);

      if (response.status !== 204) setNewRank(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [memberGen]);

  useEffect(() => {
    getNewRank();
  }, [getNewRank]);

  const handleSelectChange = (value) => {
    setMemberGen(parseInt(value, 10));
  };

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
      <RankingItem
        rank="순위"
        memberName="이름"
        score="점수"
      />
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
