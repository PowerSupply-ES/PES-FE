// 공지사항 리스트 get API 요청
const getNoticeList = (setNoticeList) => {
    const uri = 'api/notice'
        
    fetch(`${uri}`,{
        method :'GET'
    })
    .then(response => {
        if(!response.ok){
            console.log('서버응답:', response);
            throw new Error(`데이터 가져오기 실패: ${response.status} ${response.statusText}`);
        }
        else if(response.status==204){
            console.log("공지사항이 아직 없습니다!");
        }
        return response.json();
    })
    .then(data => {
        setNoticeList(data);
    })
    .catch(error => {
        console.error('데이터 가져오기 실패:', error);
    });
}

export default getNoticeList
