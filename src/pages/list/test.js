/* backend 연동 전 UX/UI 확인 및 코드 작성용 */
// problemcolor = "#04CA00" 초록색 - solved
// problemcolor = "#FF8412" 주황색 - retry
// buttoncolor = "#5094f9" 파랑색 - baekjoon, challenge
// buttoncolor = "#FF8412" 주황색 - retry
// fontcolor = "#6A6B6F" 진회색 - locked

const Problems = [
    {
        id: 1,
        problem_id: 1,
        title: "1번 문제다~~",
        grade: 50,
        url: "",
        state: "baekjoon", // 풀 수 있는 문제 (백준 링크)
    },
    {
        id: 2,
        problem_id: 2,
        title: "2번 문제요~~",
        grade: 50,
        state: "solved", // 성공한 문제 (자기 문제 페이지로 연결)
    },
    {
        id: 3,
        problem_id: 3,
        title: "이건 3번~!",
        grade: 50,
        state: "challenge", // 자기 질문에 답변 완료한 경우 (다른 사람 문제 페이지로 연결)
    },
    {
        id: 4,
        problem_id: 4,
        title: "4번인디요",
        grade: 50,
        state: "retry", // 코멘트에 실패한 경우
    },
    {
        id: 5,
        problem_id: 5,
        title: "5번이욤~",
        grade: 50,
        state: "locked", // 아직 열리지 않은 문제 (선택 불가)
    },
]

export { Problems }