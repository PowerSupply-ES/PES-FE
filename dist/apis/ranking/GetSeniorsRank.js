var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
// 재학생 등수 GET
const GetSeniorsRank = () => {
    const [newRank, setNewRank] = useState([]);
    // GET api 호출
    const getSeniorRank = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const config = {
                withCredentials: true,
            };
            const response = yield axios.get(`/api/rank/senior`, config);
            if (response.status !== 204)
                setNewRank(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }), []);
    useEffect(() => {
        getSeniorRank();
    }, [getSeniorRank]);
    return { newRank };
};
export default GetSeniorsRank;
