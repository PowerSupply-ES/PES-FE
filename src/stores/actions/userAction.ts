/* user 관련 액션 관리 */
import { UserInfo } from "model/userType";

// 로그인
export const loginAction = (memberId: string) => ({
  type: "LOGIN" as const,
  payload: memberId,
});

// 로그아웃
export const logoutAction = () => ({
  type: "LOGOUT" as const,
});

// 사용자 정보
export const userInfoAction = (userInfo: UserInfo) => ({
  type: "SET_USER_INFO" as const,
  payload: userInfo,
});


// 액션 타입 정의
export type UserAction =
| { type: "LOGIN"; payload: string }
| { type: "LOGOUT" }
| { type: "SET_USER_INFO"; payload: UserInfo };