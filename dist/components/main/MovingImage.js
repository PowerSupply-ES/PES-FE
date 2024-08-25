import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import img0 from "assets/images/backImg.png";
import img0_0 from "assets/images/backImg_right.png";
import useMovingImages from "hooks/home/useMovingImages";
// 홈화면 첫번째 슬라이딩 이미지 애니메이션
const MovingImage = () => {
    const { animationFinished } = useMovingImages(); // 슬라이딩 HOOK
    const status = sessionStorage.getItem("status");
    return (_jsxs("div", { className: "content0", children: [_jsx("img", { src: img0, className: "bg-img", alt: "" }), _jsx("img", { src: img0_0, className: "moving-img", alt: "Moving graphic showing animation", style: {
                    opacity: `${animationFinished ? 1 : 0}`,
                    transition: "opacity 1s ease-in-out",
                } }), _jsx("div", { className: "main_btn", style: {
                    opacity: `${animationFinished ? 1 : 0}`,
                    transition: "opacity 1s ease-in-out",
                }, children: status ? (_jsxs(_Fragment, { children: [_jsx("a", { href: "/list", className: "btn1", children: "\uBC14\uB85C\uAC00\uAE30" }), _jsx("a", { href: "/menual", className: "btn3", children: "\uC18C\uAC1C\uBCF4\uAE30" })] })) : (_jsxs(_Fragment, { children: [_jsx("a", { href: "/list", className: "btn1", children: "\uBC14\uB85C\uAC00\uAE30" }), _jsx("a", { href: "/signin", className: "btn2", children: "\uB85C\uADF8\uC778" })] })) })] }));
};
export default MovingImage;
