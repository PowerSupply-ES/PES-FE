// 내 정보 GET 요청
const getMyInfo = (setMemberData) => {
    const uri = '/api/mypage/information';
  
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
        setMemberData(data);

      })
      .catch(error => {
        console.error('데이터 가져오기 실패:', error);
      });
}

export default getMyInfo