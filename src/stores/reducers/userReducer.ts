/* user관련 reducer 관리 */
import { UserAction } from "stores/actions/userAction";
import { UserInfo } from "model/userType";

// initialSignin 타입
export type SignState = {
  status: boolean;
  memberId: string | null;
};
// sign 기본 상태
const initialSignin: SignState = {
  status: false,
  memberId: "",
};

// userInfo 기본 상태
const initialInfo: UserInfo = {
  memberName: "",
  memberStatus: "",
  hasNewNotices: false,
  memberGen: 0,
  memberScore: 0,
};

// sign Reducer
export const signReducer = (
  currentState: SignState = initialSignin,
  action: UserAction
): SignState => {
  switch (action.type) {
    case "LOGIN":
      return { ...currentState, status: true, memberId: action.payload };
    case "LOGOUT":
      return { ...currentState, status: false, memberId: null };
    default:
      return currentState;
  }
};

// userInfo Reducer
export const userInfoReducer = (
  currentState: UserInfo = initialInfo,
  action: UserAction
): UserInfo => {
  switch (action.type) {
    case "SET_USER_INFO":
      return { ...currentState, ...action.payload };
    default:
      return currentState;
  }
};
