import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/main/Header';
import Footer from "components/footer/Footer";
import '../../styles/info.css';
import { HiSpeakerphone } from "react-icons/hi";
import { PiNotePencilFill } from "react-icons/pi";


const Info = () => {
    const navigate = useNavigate();

    // 공지사항 리스트
    const [infoList, setInfoList] = useState([]);

    // 리스트 가져오기
    const GetInfoList = ()=> {
        const uri = "api/notice"
        
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
            setInfoList(data);
        })
        .catch(error => {
            console.error('데이터 가져오기 실패:', error);
          });
    }

    useEffect(()=>{
        GetInfoList();
    })

    return (
        <div className='info_body'>
            <Header></Header>

            <div className='content_info'> 
                <div className='header'>
                    <HiSpeakerphone size={30}/> 
                    <p>공지사항</p>
                </div>
                {/* 관리자만 띄우게 수정하기 */}
                <div className='add_info'
                    onClick={() => navigate('/putInfo')}>
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
                <MyInfo infoList={infoList}></MyInfo>
            </div>

            <Footer></Footer>

        </div>
    )

    // 공지사항 컴포넌트
    function MyInfo({infoList}){

        const gotoInfo = (noticeId) => {
            console.log('noticeId: ',noticeId);
            window.location=`/api/notice/${noticeId}`
        }

        return (
            <div className='info_list'>
                
            {infoList.map((it) =>(
                <div className='info' key={it.noticeId}>

                    <div className='title_0'>
                        {/* ---버튼 둘 중 하나로 변경하기---*/}
                        {/* <div className='imp'>중요</div>
                        <div className='new'>new</div> */}
                    </div>

                    {/* 공지사항id */}
                    <div className='title_1'>
                        {it.noticeId}
                    </div>

                    {/* ---infoDetail 연결제대로하기!--- */}
                    {/* 제목 */}
                    <div className='title_2' onClick={() => gotoInfo(it.noticeId)}>
                        {it.title}
                    </div>

                    {/* 작성날짜 */}
                    <div className='title_3'>
                        {it.createdTime}
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
export default Info