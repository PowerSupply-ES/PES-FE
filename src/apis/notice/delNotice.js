// 공지사항 삭제 API 요청
const delNotice = (uri, noticeId) => {
    
    fetch(`${uri}${noticeId}`,{
        method: 'DELETE',
    })
    .then((response)=>{
        if(response.status === 403){
            alert('권한이 없습니다');
        }
        else if(response.status === 200){
            alert('공지사항이 성공적으로 삭제되었습니다!');
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

export default delNotice
