import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../styles/notice.css';
import { HiSpeakerphone } from "react-icons/hi";
import { PiNotePencilFill } from "react-icons/pi";


const Notice = () => {
    const navigate = useNavigate();
    const memberStatus = sessionStorage.getItem('memberStatus');

    // 공지사항 리스트
    const [noticeList, setNoticeList] = useState([]);

    // 리스트 가져오기
    const GetNoticeList = ()=> {
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

    useEffect(()=>{
        GetNoticeList();
    }, [])
    

    return (
        <div className='info_body'>
            <Header></Header>

            <div className='content_info'> 
                <div className='header'>
                    <HiSpeakerphone size={30}/> 
                    <p>공지사항</p>
                </div>


                {/* 관리자에만 띄우게-*/}
                <div className={memberStatus==='관리자' ? 'add_info' : 'no_button'}
                    // 등록하기 uri수정하기
                    onClick={() => navigate('/postNotice')}>
                    <PiNotePencilFill size={25}/>
                    <p>등록하기</p>
                </div>


                <div className='info_title'>
                    <div className='title_0'> </div>
                    <div className='title_1'>번호</div>
                    <div className='title_2'>제목</div>
                    <div className='title_3'>작성 날짜</div>
                    <div className='title_4'>조회 수</div>
                </div>
                

                {/* -----공지사항리스트----- */}
                <MyNotice noticeList={noticeList}></MyNotice>
            </div>

            <Footer></Footer>

        </div>
    )

    // 공지사항 컴포넌트
    function MyNotice({noticeList}){

        // 해당 공지사항 detail으로 이동
        const gotoNotice = (noticeId) => {
            console.log('noticeId: ',noticeId);
            window.location=`notice/${noticeId}`
        }

        // 공지사항 등록 일시에서 T를 공백으로 대체
        const transferTime = (time) => {
            if (!time) return "";  //시간이 없는 경우 처리
            return time.replace("T", " ");
        }

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
                
            {noticeList.map((it) =>(
                <div className='info' key={it.noticeId}>

                    <div className='title_0'>
                        {/* ---중요, new 버튼 둘 중 하나 선택---*/}
                        <div className={it.isImportant ? 'imp' : isNewNotice(it.createdTime) ? 'new' :'' }>중요</div>
                    </div>

                    {/* 공지사항id */}
                    <div className='title_1'>
                        {it.noticeId}
                    </div>

                    {/* ---infoDetail 연결제대로하기!--- */}
                    {/* 제목 */}
                    <div className='title_2' onClick={() => gotoNotice(it.noticeId)}>
                        {it.title}
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
}
export default Notice