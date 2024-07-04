import React, { useState, useEffect } from 'react';
// import '../../styles/css/App.css';


import img2 from '../../assets/images/main_2.png';
import img3 from '../../assets/images/main_3.png';
import img4 from '../../assets/images/main_4.png';

const ScrollImage = () => {
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
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // 이펙트는 마운트될 때 한 번만 실행

    return (
        <div className="scroll_container">
            <div className='content2'>
                <img src={img2} className="scroll-img" 
                style={{ opacity: opacity2, transition: 'opacity 2s ease' }} />
            </div>
            <div className='content3'>
                <img src={img3} className="scroll-img" 
                style={{ opacity: opacity3, transition: 'opacity 3s ease' }} />
            </div>
            <div className='content4'>
                <img src={img4} className="scroll-img" 
                style={{ opacity: opacity4, transition: 'opacity 4s ease' }} />
            </div>
        </div>
    );
};

export default ScrollImage;
