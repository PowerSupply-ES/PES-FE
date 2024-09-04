import getJuniorRank from "apis/ranking/getJuniorRank";
import { useState, useEffect, useCallback } from "react";
import { MemberRankList } from "model/Store";
import { SelectChangeEvent } from "@mui/material";

// 신입생 등수 GET
const useJuniorRank = () => {
  const [memberGen, setMemberGen] = useState<number>(35); // memberGen 35기로 기본 설정
  const [newRank, setNewRank] = useState<MemberRankList[]>([]);

  const handleSelectChange = (e : SelectChangeEvent<string>) => {
    setMemberGen(parseInt(e.target.value, 10));
  };

  // get API 호출
  const fetchNewRank = useCallback(async () => {
    const data = await getJuniorRank(memberGen);
    setNewRank(data);
  }, [memberGen]);

  useEffect(() => {
    fetchNewRank();
  }, [fetchNewRank]);

  return { newRank, handleSelectChange, memberGen };
};

export default useJuniorRank;
