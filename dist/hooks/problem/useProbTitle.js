var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getProbTitle from "apis/problem/getProbTitle";
import { useState, useEffect, useCallback } from "react";
// 문제 제목 get HOOK
const useProbTitle = (problemId) => {
    const [title, setTitle] = useState(null);
    // problemId가 변경되지 않는 한, 동일한 함수로 재사용
    const fetchTitle = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const titleData = yield getProbTitle(problemId);
            if (titleData) {
                setTitle(titleData); // titleData가 존재할 때만 state 업데이트
            }
            else {
                setTitle(null);
            }
        }
        catch (error) {
            console.error(error);
            setTitle(null);
        }
    }), [problemId]);
    useEffect(() => {
        fetchTitle();
    }, [fetchTitle]);
    return title;
};
export default useProbTitle;
