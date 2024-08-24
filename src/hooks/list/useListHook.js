import { useState, useEffect } from "react";
import getList from "apis/list/getList";

// 문제 list 호출 HOOK
const useListHook = () => {
  const memberStatus = sessionStorage.getItem("memberStatus");

  const [list, setList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("junior");
  const [juniorButtonVariant, setJuniorButtonVariant] = useState("solid");
  const [seniorButtonVariant, setSeniorButtonVariant] = useState("soft");

  useEffect(() => {
    getList(setList);
  }, [memberStatus]);

  // junior, senior 선택
  const handleOption = (option) => {
    setSelectedOption(option);

    if (option === "junior") {
      setJuniorButtonVariant("solid");
      setSeniorButtonVariant("soft");
    } else if (option === "senior") {
      setJuniorButtonVariant("soft");
      setSeniorButtonVariant("solid");
    }
  };

  return {
    list,
    selectedOption,
    juniorButtonVariant,
    seniorButtonVariant,
    handleOption,
  };
};
export default useListHook;
