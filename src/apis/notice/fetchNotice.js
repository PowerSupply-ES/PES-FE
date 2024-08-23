// 공지사항 수정 API 요청
const fetchNotice = (uri, noticeId, noticeDetail) => {

    fetch(`${uri}${noticeId}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(noticeDetail),
    })
    .then((response)=>{
        if(response.status === 403){
            alert('권한이 없습니다');
        }
        else if(response.status === 404){
            alert('해당 공지사항이 존재하지 않습니다');
        }
        else if(response.status === 200){
            alert('공지사항이 성공적으로 수정되었습니다!');
            window.location.href = '/notice';
        }
        else if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);  
        }
    })
    .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
    });
}

export default fetchNotice
