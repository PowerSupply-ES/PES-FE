import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import getProbTitle from "apis/problem/getProbTitle";
import getProbContent from "apis/problem/getProbContent";
import postSubmitCode from "apis/problem/postSubmitCode";

const useProbPage = (problemId) => {

    const navigate = useNavigate();
    const text = useRef("");

    const [title, setTitle] = useState([]);
    const [problem, setProblem] = useState([]);
    const [detail, setDetail] = useState(null);
    const isLogin = sessionStorage.getItem('status');

    // 수정코드_by성임
    function textHandler(newCode) {
        text.current = newCode;
    }
    
    // 문제 제목 get HOOK
    const fetchTitle = useCallback(async () => {
        try{
            const res = await getProbTitle(problemId);
            setTitle(res);
        } catch(error) {
            console.error(error);
        }
    }, [problemId]);


    // 문제 내용 get HOOK
    const fetchProblem = useCallback(async () => {
        try {
            const response = await getProbContent(problemId);
            setProblem(response);
        } catch (error) {
            console.error(error);
        }
    }, [problemId]);


    // 문제 post 요청
    const submitCode = async () => {
        if (!text.current) {
            alert("코드를 입력해주세요!");
        }
        else {
            const { data: response, status} = await postSubmitCode(text.current, problemId);

            if (!response) {
                alert("오류!");
                // navigate("/signin");
            }
            else if (status === 201) {
                console.log(response);
                alert("문제를 맞혔습니다! 질의응답 페이지로 이동합니다.");
                sessionStorage.setItem('problemId', problemId);
                navigate(`/question/${response.answer_id}`);
            }
            else if (status === 202) {
                setDetail(response.detail);
                alert("문제를 틀렸습니다! 다시 풀어보세요.");
            }
            else if (status === 500){
                alert("server가 응답하지 않네요! 관리자에게 상황을 공유해주세요! : ", response.message);
            }
        }
    };

    useEffect(() => {
        fetchTitle();
        fetchProblem();
    }, [fetchTitle, fetchProblem]);

    return {
        title,
        problem,
        detail,
        isLogin,
        textHandler,
        submitCode,
    };
};

export default useProbPage
