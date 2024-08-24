import getProbContent from "apis/problem/getProbContent";
import { useState, useEffect, useCallback } from "react";


// 문제 내용 get HOOK
const useProbContent = async (problemId) => {
    const [problem, setProblem] = useState([]);

    const fetchProblem = useCallback(async () => {
        try {
            const response = await getProbContent(problemId);
            setProblem(response);
        } catch (error) {
            console.error(error);
        }
    }, [problemId])    

    useEffect(() => {
        fetchProblem();
    }, [fetchProblem]);

    return problem;
}

export default useProbContent