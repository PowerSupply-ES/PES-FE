import serverConfig from './config.js';

document.addEventListener("DOMContentLoaded", function(event) {

    const storageToken = localStorage.getItem('storageToken');
    const seniorNum = localStorage.getItem('stuNum');
    console.log(`학번: ${seniorNum}`);
    
    const serverUrl = serverConfig.serverUrl; // serverUrl을 정의

    var url = new URL(window.location.href);
    var problemId = url.pathname.split('/')[2];
    var memberStuNum = url.pathname.split('/')[3];
    let memstate;

    console.log(`problemId : ${problemId}`);
    console.log(`memberStuNum : ${memberStuNum}`);
    
    async function fetchUserInfo(storageToken) {
        const userInfoUri = 'api/myuser';
        try {
            const response = await fetch(serverUrl + userInfoUri, {
                method: 'GET',
                headers: {
                    'Authorization': storageToken
                }
            });

            if (!response.ok) {
                throw new Error('사용자 정보 가져오기 실패');
            }

            const data = await response.json();
            
            memstate = data.memberStatus;
        } catch (error) {
            console.error('사용자 정보 가져오기 오류:', error);
        }
    }

    fetchUserInfo(storageToken);

    // answerState(문제상태)에 관련된 모든 것들
    async function getState(problemId, memberStuNum) {
        const stateUri = `api/problem/${problemId}/${memberStuNum}`;
            try {
                const response = await fetch(serverUrl + stateUri, {
                    method: 'GET'
                });
        
                if (!response.ok) {
                    // Handle error here
                    console.log("서버 응답 오류");
                    return;
                }
        
                if (response.status == 204) {
                    console.log(response.status);
                    fetchProblem(problemId, "first");
                    submitGitAddr();
                }
                else if (response.status == 200) {
                    console.log(response.status);
                    const data = await response.json();
                    if (data.answerState == "1") { // 임시로 1
                        // 실패 페이지
                        console.log("문제 실패 페이지");
                        fetchProblem(problemId, "1");
                        submitGitAddr();
                    }
                    else if (data.answerState == "Grading") { // Grading인지 InProgress인지 확인 필요!
                        // 문제 풀기 화면 떠야 함 + 채점중
                        console.log("채점중");
                        fetchProblem(problemId, "Grading");
                    }
                    else if (data.answerState == "Answerme") {
                        // 질문 열어보기 떠야 함 + 질문 2개, 답변창, 답변하기 ok
                        console.log("답변하기 페이지");
                        fetchProblem(problemId, "Answerme");
                        document.querySelector('.question_content_1').innerHTML = data.questionContentFst;
                        document.querySelector('.question_content_2').innerHTML = data.questionContentSec;
                        openQuestion(); // 질문 열어보기 버튼
                        document.querySelector('.btn_answer').addEventListener('click', () => {
                            const valFst = String(document.querySelector("#content_answer_1").value).trim();
                            const valSec = String(document.querySelector("#content_answer_2").value).trim();
                            const data = { answerFst: valFst, answerSec: valSec };
                            postAnswer(data);
                        })
                    }
                    else if (data.answerState == "UnderReview") {
                        // 질문 2개, 답변내용, 저장완료, 피드백 댓글창 떠야함
                        console.log("피드백 기다리는 중");
                        fetchProblem(problemId, "UnderReview");
                        document.querySelector('.question_content_1').innerHTML = data.questionContentFst;
                        document.querySelector('.question_content_2').innerHTML = data.questionContentSec;
                        document.querySelector('.btn_answer').innerHTML = '저장 완료';
                        document.querySelector('.btn_answer').style.background = "#DEDEDE";
                        document.querySelector('.btn_answer').style.color = "#151f36";
                        document.querySelector('#content_answer_1').style.display = 'none';
                        document.querySelector('#content_answer_2').style.display = 'none';
                        document.querySelector('.container_questions').style.display = 'block';
                        
                        const fstElement = document.createElement('input');
                        fstElement.classList.add('content_answer');
                        fstElement.innerHTML = data.answerFst;
                        document.querySelector('.container_question_1').appendChild(fstElement);
        
                        const secElement = document.createElement('input');
                        secElement.classList.add('content_answer');
                        secElement.innerHTML = data.answerSec;
                        document.querySelector('.container_question_2').appendChild(secElement);
        
                        getComment();
                    }
                    else if (data.answerState == "Success") {
                        // 질문 2개, 답변내용, 저장완료, 피드백 댓글 3개 결과 뜸
                        console.log("최종 성공");
                        fetchProblem(problemId, "Success");
                        document.querySelector('.question_content_1').innerHTML = data.questionContentFst;
                        document.querySelector('.question_content_2').innerHTML = data.questionContentSec;
                        document.querySelector('.btn_answer').innerHTML = '저장 완료';
                        document.querySelector('.btn_answer').style.background = "#DEDEDE";
                        document.querySelector('.btn_answer').style.color = "#151f36";
                        document.querySelector('#content_answer_1').style.display = 'none';
                        document.querySelector('#content_answer_2').style.display = 'none';
                        document.querySelector('.container_questions').style.display = 'block';
                        
                        const fstElement = document.createElement('div');
                        fstElement.classList.add('content_answer');
                        fstElement.innerHTML = data.answerFst;
                        document.querySelector('.container_question_1').appendChild(fstElement);
        
                        const secElement = document.createElement('div');
                        secElement.classList.add('content_answer');
                        secElement.innerHTML = data.answerSec;
                        document.querySelector('.container_question_2').appendChild(secElement);
                        
                        getComment();
                    }
                    else if (data.answerState == "Failure") {
                        // 질문 2개, 답변내용, 저장완료, 피드백 댓글 3개 결과 뜸
                        console.log("최종 실패");
                        fetchProblem(problemId, "Failure");
                        document.querySelector('.question_content_1').innerHTML = data.questionContentFst;
                        document.querySelector('.question_content_2').innerHTML = data.questionContentSec;
                        document.querySelector('.btn_answer').innerHTML = '저장 완료';
                        document.querySelector('.btn_answer').style.background = "#DEDEDE";
                        document.querySelector('.btn_answer').style.color = "#151f36";
                        document.querySelector('#content_answer_1').style.display = 'none';
                        document.querySelector('#content_answer_2').style.display = 'none';
                        document.querySelector('.container_questions').style.display = 'block';
                        
                        const fstElement = document.createElement('div');
                        fstElement.classList.add('content_answer');
                        fstElement.innerHTML = data.answerFst;
                        document.querySelector('.container_question_1').appendChild(fstElement);
        
                        const secElement = document.createElement('div');
                        secElement.classList.add('content_answer');
                        secElement.innerHTML = data.answerSec;
                        document.querySelector('.container_question_2').appendChild(secElement);
        
                        getComment();
                    }
                }
            } catch (error) {
                console.error("데이터를 가져오는 중 오류 발생:", error);
            }
    }
    
    
    // 문제 띄우기 get : ok
    async function fetchProblem(problemId, state) {
        const problemUri = `api/problem/${problemId}`;
        
        try {
            const response = await fetch(serverUrl + problemUri, {
                method: 'GET'
            });
    
            if (!response.ok) {
                throw new Error('문제 가져오기 실패');
            }
    
            const data = await response.json();
    
            const header = document.createElement('div'); // 질문 헤더
            header.classList.add('header_prob');
            const title = document.createElement('div'); // title
            title.classList.add('title_prob');
            const id = document.createElement('div'); // 질문1 표시
            id.classList.add('title_prob_id');
            const name = document.createElement('h2'); // 질문 제목
            name.classList.add('title_prob_name');
            const complete = document.createElement('div'); // 완료 상태
            complete.classList.add('title_is_complete'); 
            const content = document.createElement('div'); // 질문 내용
            content.classList.add('content_prob');
    
            title.appendChild(id);
            title.appendChild(name);
            title.appendChild(complete);
            header.appendChild(title);
    
            if (state == "first") {
                complete.innerHTML = "미완료";
            }
            else if (state == "1") {
                complete.innerHTML = "오답";
            }
            else if (state == "Grading") {
                complete.innerHTML = "채점중";
            }
            else if (state == "Answerme") {
                complete.innerHTML = "답변중";
            }
            else if (state == "UnderReview") {
                complete.innerHTML = "리뷰중";
            }
            else if (state == "Success") {
                complete.innerHTML = "완료";
            }
            else if (state == "Failure") {
                complete.innerHTML = "실패";
            }
    
            id.innerHTML = "질문" + problemId;
            name.innerHTML = data.problemTitle;
            content.innerHTML = data.problemContent.replace(/\n/g, '<br>'); // \n을 <br>태그로 치횐
    

            // 이미지 컨테이너 요소 생성
            const image_prob = document.createElement('div');
            image_prob.classList.add('image_prob');

            //예시
            const example_prob = document.createElement('div');
            example_prob.classList.add('example_prob');
            example_prob.textContent = `example )`;  


            // 이미지 엘리먼트 생성
            const image = document.createElement('img');
            image.src = `/img/${problemId}.jpg`; // 실제 이미지 경로로 변경

            // 이미지를 contentImage에 추가
            image_prob.appendChild(example_prob);
            image_prob.appendChild(image);



            document.querySelector('.container_problem').appendChild(header);
            document.querySelector('.container_problem').appendChild(content);
            document.querySelector('.container_problem').appendChild(image_prob);

            
        } catch (error) {
            console.error("데이터를 가져오는 중 오류 발생:", error);
        }
    }
    
    // 질문 열어보기 버튼 관리 : ok
    const openQuestion = () => {
    
        const openBtn = document.querySelector('.btn_open_questions');
        const questions = document.querySelector('.container_questions');
        openBtn.style.display = 'block';
    
        openBtn.addEventListener('click', () => {
            if (questions.style.display === 'block') {
                questions.style.display = 'none';
                openBtn.innerHTML = "질문 열어보기";
            } else {
                questions.style.display = 'block';
                openBtn.innerHTML = "질문 닫기";
            }
        });
    //    document.querySelector('.test2').appendChild(openElement);
    }
    
    // 답변하기 post : ok
    function postAnswer(data) {
        const submitUri = `api/answer/${problemId}/${memberStuNum}`;
    
        fetch(serverUrl + submitUri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': storageToken
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('fetch 실패');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.message);
            location.reload(true);
        })
        .catch(error => {
            console.error("데이터를 가져오는 중 오류 발생:", error);
        });
    }
    
    // 댓글보기 : ok
    function getComment() {
        const getCommentUri = `api/comment/${problemId}/${memberStuNum}`;
        let feedbackId = 0;
        let passCount = 0;
    
        const ulElement = document.querySelector('.container_feedbacks');
        ulElement.style.display = 'block';
    
        fetch(serverUrl + getCommentUri, {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
            }
            return response.json();
        })
        .then((data) => {
            if (!data) {
                console.error("데이터가 비어있습니다.");
                if (!(memstate === '신입생')) {
                    displayComment();
                }
            }
    
            data.forEach((item) => {
                feedbackId++;
                const memberName = item.memberName;
                const commentPassFail = item.commentPassFail;
                const commentContent = item.commentContent;
    
                const liElement = document.createElement('div');
                liElement.classList.add('container_feedback');
    
                const divElement = document.createElement('div');
                divElement.classList.add('header_feedback');
    
                const idElement = document.createElement('div');
                idElement.classList.add('header_feedback_id');
                idElement.innerHTML = `Feedback ${feedbackId}) `;
    
                const nameElement = document.createElement('div');
                nameElement.classList.add('header_feedback_name');
                nameElement.innerHTML = memberName;
    
                const passElement = document.createElement('div');
                passElement.classList.add('header_pass_fail');
                passElement.innerHTML = (commentPassFail == 0) ? 'FAIL' : 'PASS';
                passElement.style.color = (commentPassFail == 0) ? "#CA0000" : "#04CA00";
    
                divElement.appendChild(idElement);
                divElement.appendChild(nameElement);
                divElement.appendChild(passElement);
    
                const contentElement = document.createElement('div');
                contentElement.classList.add('content_feedback');
                contentElement.innerHTML = commentContent;
    
                liElement.appendChild(divElement);
                liElement.appendChild(contentElement);
    
                ulElement.appendChild(liElement);
    
                if (commentPassFail == 1) {
                    passCount++;
                }
            })
    
            if (data.length < 3) {
                displayComment();
                console.log(`댓글 갯수: ${data.length}`);
            }
            else if (data.length >= 3 && passCount > 1) {
                const passBnt = document.createElement('div');
                passBnt.classList.add('pass_comment');
                passBnt.innerHTML = `축하합니다! 성공적으로 통과했습니다! (${passCount}/3)`; // passCount 넘어오는 거
    
                passBnt.addEventListener('click', () => {
                    window.location.href = serverUrl + 'main';
                })
    
                document.querySelector('.container_pass').appendChild(passBnt);
            }
            else if (data.length >= 3 && passCount < 2) {
                const passBnt = document.createElement('div');
                passBnt.classList.add('fail_comment');
                passBnt.innerHTML = `질문테스트에 통과하지 못했습니다. (${passCount}/3)`;
    
                passBnt.addEventListener('click', () => {
                    window.location.href = serverUrl + 'main';
                })
    
                document.querySelector('.container_pass').appendChild(passBnt);
            }
            else {
                console.log(`passCount6: ${passCount}`);
            }
        })
        .catch(error => {
            console.error("데이터를 가져오는 중 오류 발생:", error);
            console.log(error.message);
        });
    
    }
    
    // 댓글창 display : ok
    function displayComment() {

        const selected = document.querySelector('#rating-select');

        if (memstate != '신입생') {
            document.querySelector('.container_feedback_enroll').style.display = 'block';
            document.querySelector('.btn_feedback').addEventListener('click', () => {
                const passVal = Number(selected.options[selected.selectedIndex].value);
                const trimVal = String(document.querySelector('#content_feedback').value).trim();
                const data = { writer: seniorNum, commentPassFail: passVal, commentContent: trimVal};
                document.querySelector('#content_feedback').value = "";
                // console.log(typeof(passVal));
                postFeedback(data);
            });
        }
    }
    
    // 댓글 달기 post : ok
    function postFeedback(data) {
        const submitUri = `api/comment/${problemId}/${memberStuNum}`;
    
        fetch(serverUrl + submitUri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': storageToken
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('fetch 실패');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.message);
            location.reload(true);
        })
        .catch(error => {
            console.error("데이터를 가져오는 중 오류 발생:", error);
        });
    }
    
    getState(problemId, memberStuNum); // 처음에 answerState 값 가져옴
});