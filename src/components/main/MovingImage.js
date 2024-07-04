import React, { useState } from 'react';
// import '../../styles/css/App.css';
import img0 from '../../assets/images/backImg.png';
import img0_0 from '../../assets/images/backImg_right.png';

const MovingImage = () => {

    // 이미지 움직임(progress증가시키면서 움직이기)
    const [animationProgress, setAnimationProgress] = useState(0);
    // 애니메이션 완료 여부
    const [animationFinished, setAnimationFinished] = useState(false);


    // 페이지 로드될 때 애니메이션 효과를 주기 위한 useEffect 사용
    React.useEffect(() => {
        if (!animationFinished) {
            
            // 애니메이션 효과를 위해 setInterval 사용
            // setInterval : 일정 시간 간격으로 animationProgress를 업데이트
            const interval = setInterval(() => {
                // 현재 progress 상태를 가져옴
                const currentProgress = animationProgress;

                // progress를 0.1씩 증가
                const newProgress = (currentProgress + 0.1);
                
                // 변경된 progress를 상태에 적용
                setAnimationProgress(newProgress);
                
                // progress가 거의 1에 도달했을 때 애니메이션 종료
                if (newProgress >= 0.99) {
                    setAnimationFinished(true);
                    clearInterval(interval); // 애니메이션 종료
                }
            });

            // 컴포넌트가 언마운트될 때 interval 정리
            return () => clearInterval(interval);
        }
    }, [animationProgress, animationFinished]); 
        // animationProgress 또는 animationFinished가 변경될 때마다 useEffect 재실행


    const status = sessionStorage.getItem('status');

    return (
        <div className="content0">
            {/* 바탕이미지 */}
            <img src={img0} className="bg-img" alt="Background Image" />
            {/* 오른쪽이미지 */}
            <img
                src={img0_0}
                className="moving-img"
                alt="Moving Image"
                style={{ 
                    opacity: `${animationFinished ? 1 : 0}`, 
                    transition: 'opacity 1s ease-in-out' 
                }}
            />

            {/* 하단버튼 */}
            <div className='main_btn' style={{ 
                    opacity: `${animationFinished ? 1 : 0}`, 
                    transition: 'opacity 1s ease-in-out' 
                }}>
                    
                {/* status 값이 있으면 btn1만 렌더링, 없으면 btn1과 btn2 모두 렌더링 */}
                {status ? (
                <>
                <a href="/list" className='btn1'>바로가기</a>
                <a href="/menual" className='btn3'>소개보기</a>
                </>
                ) : (
                <>
                    <a href="/list" className='btn1'>바로가기</a>
                    <a href="/signin" className='btn2'>로그인</a>
                </>
                )}
          </div>
        </div>
    );
};

export default MovingImage;
