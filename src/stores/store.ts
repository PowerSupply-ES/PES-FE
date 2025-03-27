import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// Provider: state값 전달역할 /useSelector: 어떤 state값 쓸지 선택 / useDispatch: state값 변경
import { signReducer, userInfoReducer } from "stores/reducers/userReducer";
import { SignState } from "stores/reducers/userReducer"; // SignState 타입 import
import { UserInfo } from "model/userType"; // UserInfo 타입 import

// 전체 state 타입 정의
export type RootState = {
  sign: SignState;
  user: UserInfo;
};

// redux-persist 설정
const persistConfig = {
  key: "root", // 로컬스토리지에 저장되는 키 이름
  storage, // localStorage 사용
  whitelist: ["sign", "user"], // 어떤 리듀서 persist할지
};

// Reducers 한꺼번에 관리
const rootReducer = combineReducers({
  sign: signReducer,
  user: userInfoReducer,
});

// redux-persist로 rootReducer 감싸기
// TODO: any type 변경하기
const persistedReducer = persistReducer<any,any>(persistConfig, rootReducer);

// Redux DevTools 설정
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(persistedReducer, devTools && devTools());

// persistStore 생성
export const persistor = persistStore(store);

export default store;
