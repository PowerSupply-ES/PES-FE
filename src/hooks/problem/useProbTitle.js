import getProbTitle from "apis/problem/getProbTitle";
import { useState, useEffect, useCallback } from "react";

// 문제 제목 get HOOK
const useProbTitle = async (problemId) => {
    const [title, setTitle] = useState([]);

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