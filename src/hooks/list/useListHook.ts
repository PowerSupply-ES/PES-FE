import { useState, useEffect } from "react";
import getList from "apis/list/getList";
import { Problem } from "model/problemType"; 
import { UseListHookReturn } from "model/userType";
import { useLocation } from "react-router-dom";

// 문제 list 호출 HOOK
const useListHook = (): UseListHookReturn => {
  const memberStatus = sessionStorage.getItem("memberStatus") || '';

  const [list, setList] = useState<Problem[]>([]);
  const [selectedOption, setSelectedOption] = useState<'junior' | 'senior'>("junior");
  const [juniorButtonVariant, setJuniorButtonVariant] = useState<'solid' | 'soft'>("solid");
  const [seniorButtonVariant, setSeniorButtonVariant] = useState<'solid' | 'soft'>("soft");

  const location = useLocation();

  useEffect(() => {
    getList(setList, location);
  }, [memberStatus, location]);

  // junior, senior 선택에 따른 버튼상태 변화
  const handleOption = (option: 'junior' | 'senior') => {
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
