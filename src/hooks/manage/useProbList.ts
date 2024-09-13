import getList from "apis/list/getList";
import { Problem } from "model/problemType";
import { ProbListHookReturn } from "model/userType";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// 관리자 - 문제 list 호출 HOOK
const useProbList = (): ProbListHookReturn => {
  const memberStatus = sessionStorage.getItem("memberStatus") || "";
  const [list, setList] = useState<Problem[]>([]);
  const location = useLocation();

  useEffect(() => {
    getList(setList, location);
  }, [memberStatus, location]);

  return { list };
};

export default useProbList;
