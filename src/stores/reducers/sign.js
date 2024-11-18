// sign 관련 reducer

// 로그인 기본 상태
const initialSignin  = {
    status: false,
    memberId: null,
};

// 로그인 Reducer 정의
function reducer(currentState = initialSignin , action){
    const newState = {...currentState} // 불변성을 위해 복제본
  
    switch(action.type){
      case('LOGIN'):
        newState.isAuthenticated = true;
        newState.memberId = action.payload; // memberId 저장
        break;
      case "LOGOUT":
        newState.isAuthenticated = false;
        newState.memberId = null;
        break;
      default:
        break;
    } 
    return newState;
  }