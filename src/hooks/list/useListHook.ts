import { useState, useEffect } from "react";
import getList from "apis/list/getList";
import { Problem } from "model/Store";

// HOOK 반환 타입 정의
interface UseListHookReturn {
  list: Problem[];
  selectedOption: string;
  juniorButtonVariant: string;
  seniorButtonVariant: string;
  handleOption: (option: 'junior' | 'senior') => void;
}

// 문제 list 호출 HOOK
const useListHook = (): UseListHookReturn => {
  const memberStatus = sessionStorage.getItem("memberStatus") || '';

  const [list, setList] = useState<Problem[]>([]);
  const [selectedOption, setSelectedOption] = useState<'junior' | 'senior'>("junior");
  const [juniorButtonVariant, setJuniorButtonVariant] = useState<'solid' | 'soft'>("solid");
  const [seniorButtonVariant, setSeniorButtonVariant] = useState<'solid' | 'soft'>("soft");

  useEffect(() => {
    getList(setList);
  }, [memberStatus]);

  // junior, senior 선택
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
