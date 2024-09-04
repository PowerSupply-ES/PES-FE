var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getJuniorRank from "apis/ranking/getJuniorRank";
import { useState, useEffect, useCallback } from "react";
// 신입생 등수 GET
const useJuniorRank = () => {
    const [memberGen, setMemberGen] = useState(35); // memberGen 35기로 기본 설정
    const [newRank, setNewRank] = useState([]);
    const handleSelectChange = (e) => {
        setMemberGen(parseInt(e.target.value, 10));
    };
    // get API 호출
    const fetchNewRank = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (memberGen) { // memberGen이 유효할 때만 호출
            const data = yield getJuniorRank(memberGen);
            setNewRank(data);
        }
    }), [memberGen]);
    useEffect(() => {
        fetchNewRank();
    }, [fetchNewRank]);
    return { newRank, handleSelectChange, memberGen };
};
export default useJuniorRank;
