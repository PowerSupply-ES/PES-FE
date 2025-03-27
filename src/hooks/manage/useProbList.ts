import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import getList from "apis/list/getList";
import { Problem } from "model/problemType";
import { ProbListHookReturn } from "model/userType";

// 관리자 - 문제 list 호출 HOOK
const useProbList = (): ProbListHookReturn => {
  const { memberStatus } = useSelector((state: RootState) => state.user) || ''; // redux에서 가져오기
  const [list, setList] = useState<Problem[]>([]);
  const location = useLocation();

  useEffect(() => {
    getList(setList, location);
  }, [memberStatus, location]);

  return { list };
};

export default useProbList;
