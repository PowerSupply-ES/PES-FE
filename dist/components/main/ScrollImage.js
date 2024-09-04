import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import img2 from "assets/images/main_2.png";
import img3 from "assets/images/main_3.png";
import img4 from "assets/images/main_4.png";
import useScrollImages from "hooks/home/useScrollImages";
// 스크롤에 따른 홈화면 애니메이션 효과
const ScrollImage = () => {
    const { opacity2, opacity3, opacity4 } = useScrollImages();
    return (_jsxs("div", { className: "scroll_container", children: [_jsx("div", { className: "content2", children: _jsx("img", { src: img2, alt: "introduce Image1", className: "scroll-img", style: { opacity: opacity2, transition: "opacity 2s ease" } }) }), _jsx("div", { className: "content3", children: _jsx("img", { src: img3, alt: "introduce Image2", className: "scroll-img", style: { opacity: opacity3, transition: "opacity 3s ease" } }) }), _jsx("div", { className: "content4", children: _jsx("img", { src: img4, alt: "introduce Image3", className: "scroll-img", style: { opacity: opacity4, transition: "opacity 4s ease" } }) })] }));
};
export default ScrollImage;
