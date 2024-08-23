// 공지사항 post API 호출
const postNotice = (notice) => {
    const uri = 'api/notice';

    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(notice),
    })
    .then((response)=>{
        if(response.status === 403){
            alert('권한이 없습니다');
        }
        else if(response.status === 201){
            alert('공지사항이 성공적으로 등록되었습니다!');
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

export default postNotice
