import { createStore, combineReducers } from "redux";
// Provider: state값 전달역할 /useSelector: 어떤 state값 쓸지 선택 / useDispatch: state값 변경
import sign from "stores/reducers/sign"

// Reducers 한꺼번에 관리
const rootReducer = combineReducers({
  auth: sign,
});

// Redux DevTools 설정
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(rootReducer, devTools && devTools());

export default store;