import getProbTitle from "apis/problem/getProbTitle";
import { useState, useEffect, useCallback } from "react";

// 문제 제목 get HOOK
const useProbTitle = async (problemId) => {
    const [title, setTitle] = useState([]);

    // problemId가 변경되지 않는 한, 매번 동일한 함수로 재사용
    const fetchTitle = useCallback(async () => {
        try{
            const res = await getProbTitle(problemId);
            setTitle(res);
        } catch(error) {
            console.error(error);
        }
    }, [problemId])
    

    useEffect(() => {
        fetchTitle();
    }, [fetchTitle]);

    return title;
}

export default useProbTitle