import { useState, useEffect } from "react";

const useMovingImages = () => {
  // 이미지 움직임(progress증가시키면서 움직이기)
  const [animationProgress, setAnimationProgress] = useState(0);
  // 애니메이션 완료 여부
  const [animationFinished, setAnimationFinished] = useState(false);

  // 페이지 로드될 때 애니메이션 효과를 주기 위한 useEffect 사용
  useEffect(() => {
    if (!animationFinished) {
      // 애니메이션 효과를 위해 setInterval 사용
      // setInterval : 일정 시간 간격으로 animationProgress를 업데이트
      const interval = setInterval(() => {
        // 현재 progress 상태를 가져옴
        const currentProgress = animationProgress;

        // progress를 0.1씩 증가
        const newProgress = currentProgress + 0.1;

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

  return { animationFinished };
};

export default useMovingImages;
