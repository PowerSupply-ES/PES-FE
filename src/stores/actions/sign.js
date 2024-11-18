// sign 관련 액션 관리

// 로그인
export const loginAction = (memberId) => ({
    type: "LOGIN",
    payload: memberId,
});
  

// TODO: 로그아웃
export const logoutAction = () => ({
type: "LOGOUT",
});
