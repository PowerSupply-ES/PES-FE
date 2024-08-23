// 공지사항 세부사항 get API
const getNoticeDetail = (setDetail, noticeId, uri) => {

    fetch(`${uri}${noticeId}`,{
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
          throw new Error(`데이터 가져오기 실패: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
    .then(data => {
        setDetail(data);
    })
    .catch(error => {
        console.error('데이터 가져오기 실패:', error);
    });
}

export default getNoticeDetail