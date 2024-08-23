// 내 feedback GET요청
const getMyFeed = (setMyFeedback) => {
    const uri = 'api/mypage/myfeedback';
  
    fetch(`${uri}`, {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          console.log('서버응답:', response);
          throw new Error(`데이터 가져오기 실패: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setMyFeedback(data);
        console.log("data : ", data);
      })
      .catch(error => {
        console.error('데이터 가져오기 실패:', error);
      });
}

export default getMyFeed
