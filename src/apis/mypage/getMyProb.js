// 내가 푼 문제 GET요청
const getMyProb = (setMyProb) => {
    const uri = 'api/mypage/mysolve';
  
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
        setMyProb(data);

      })
      .catch(error => {
        console.error('데이터 가져오기 실패:', error);
      });
}

export default getMyProb
