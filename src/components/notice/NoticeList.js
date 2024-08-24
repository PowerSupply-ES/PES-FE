import {transferTime} from "components/common/Common"

// 공지사항 컴포넌트
const NoticeList = ({noticeList, navigate}) => {

    // 해당 공지사항으로 이동 함수
    const gotoNotice = (noticeId) => {
        console.log('noticeId: ',noticeId);
        navigate(`notice/${noticeId}`);
    }


    // TODO : 함수 말고 API로 대체하기
    const isNewNotice = (createdTime) =>{ 
        const currentTime = new Date();  //현재시간
        const noticeTime = new Date(createdTime);  //공지사항 생성시간

        const difference = currentTime - noticeTime  //시간 차

        // 생성시간이 하루 이내인지 확인
        const oneDay = 24 * 60 * 60 * 1000  //하루의 밀리초
        return Math.floor(difference/oneDay) <= 1;
    }

    return (
        <div className='info_list'>
            
        {noticeList.map((it, index) =>(
            <div className='info' key={it.noticeId}>

                <div className='title_0'>
                    {/* TODO : 중요, new 버튼 둘 중 하나 선택*/}
                    {it.isImportant ? <div className='imp'>중요</div>
                    : isNewNotice(it.createdTime) ? <div className='new'>new</div>
                    : ''
                    }
                </div>

                {/* 공지사항id */}
                <div className='title_1'>
                    {it.noticeId}
                </div>

                {/* TODO : infoDetail 연결제대로하기*/}
                {/* 제목 */}
                <div className='title_2' onClick={() => gotoNotice(it.noticeId)}>
                    {/* {it.title} */}
                    {index}
                </div>

                {/* 작성날짜 */}
                <div className='title_3'>
                    {transferTime(it.createdTime)}
                </div>

                {/* 조회수 */}
                <div className='title_4'>
                    {it.noticeHit}
                </div>
            </div>
        ))}
    </div>
    )
}

export default NoticeList