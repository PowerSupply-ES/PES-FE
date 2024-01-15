/* backend 연동 전 UX/UI 확인 및 코드 작성용 */

const Users = [
    {
        id: 1,
        state: "baekjoon", // 풀 수 있는 문제 (백준 링크)
    },
    {
        id: 2,
        problem_id: 1000,
        title: "문제 제목",
        grade: 50,
        state: "solved", // 성공한 문제 (자기 문제 페이지로 연결)
    },
    {
        id: 3,
        problem_id: 1000,
        title: "문제 제목",
        grade: 50,
        state: "challenge", // 자기 질문에 답변 완료한 경우 (다른 사람 문제 페이지로 연결)
    },
    {
        id: 4,
        problem_id: 1000,
        title: "문제 제목",
        grade: 50,
        state: "retry", // 코멘트에 실패한 경우
    },
    {
        id: 5,
        problem_id: 1000,
        title: "문제 제목",
        grade: 50,
        state: "locked", // 아직 열리지 않은 문제 (선택 불가)
    },
]

export { Problems }