import getJuniorRank from "apis/ranking/getJuniorRank";
import { useState, useEffect, useCallback } from "react";

// 신입생 등수 GET
const JuniorRank = () => {
  const [memberGen, setMemberGen] = useState(35); // memberGen 35기로 기본 설정
  const [newRank, setNewRank] = useState([]);

  const handleSelectChange = (value) => {
    setMemberGen(parseInt(value, 10));
  };


  // get API 호출
  const fetchNewRank = useCallback(async () => {
    const data = await getJuniorRank(memberGen);
    setNewRank(data);
  }, [memberGen]);

  useEffect(() => {
    fetchNewRank();
  }, [fetchNewRank]);
    
  return {newRank, handleSelectChange, memberGen}
}

export default JuniorRank;
