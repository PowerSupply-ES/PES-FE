import { useState, useEffect } from "react";

const ScrollImagesHook = () => {
    const [opacity2, setOpacity2] = useState(0);
    const [opacity3, setOpacity3] = useState(0);
    const [opacity4, setOpacity4] = useState(0);
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollRange = window.innerHeight / 2;
  
      // 스크롤범위 벗어난경우 투명도1
      const newOpacity2 = scrollPosition > scrollRange ? 1 : 0;
      const newOpacity3 = scrollPosition > scrollRange * 2 ? 1 : 0;
      const newOpacity4 = scrollPosition > scrollRange * 3 ? 1 : 0;
      setOpacity2(newOpacity2);
      setOpacity3(newOpacity3);
      setOpacity4(newOpacity4);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);   

    return { opacity2, opacity3, opacity4 };
}

export default ScrollImagesHook;