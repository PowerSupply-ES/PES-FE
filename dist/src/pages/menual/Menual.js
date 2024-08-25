import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AdPart from "components/list/AdPart";
import { useNavigate } from "react-router-dom";
import "styles/css/menual.css";
import img_probList from "assets/images/probList.png";
import img_solving from "assets/images/solving.png";
import img_pass from "assets/images/pass.png";
import img_pass_feed from "assets/images/pass_feedback.png";
import img_fail from "assets/images/fail.png";
import img_fail_feed from "assets/images/fail_feedback.png";
import img_solvingList from "assets/images/solvingList.png";
// 소개 페이지
// TODO : 라이브러리 적용 및 파일 분리 예정
const Menual = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { children: [_jsx(AdPart, {}), _jsxs("div", { className: "menual_intro", children: [_jsxs("h2", { children: ["PES\uB294", _jsx("br", {}), " 3\uAC00\uC9C0 \uD575\uC2EC \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4"] }), _jsxs("div", { className: "content_menual", children: [_jsx("div", { className: "wrap_container", children: _jsxs("div", { className: "wrap", children: [_jsx("div", { className: "keyword", children: "\uCEF4\uD30C\uC77C" }), _jsxs("div", { children: ["\uC2E0\uC785\uC0DD\uC740 C\uC5B8\uC5B4\uB85C", _jsx("br", {}), "\uBB38\uC81C\uB97C \uD47C\uB2E4."] })] }) }), _jsx("div", { className: "wrap_container", children: _jsxs("div", { className: "wrap", children: [_jsx("div", { className: "keyword", children: "\uC9C8\uBB38\uACFC \uB2F5\uBCC0" }), _jsxs("div", { children: ["\uC2E0\uC785\uC0DD\uC740 \uBB38\uC81C\uC5D0 \uB300\uD55C ", _jsx("br", {}), "2\uAC00\uC9C0 \uC9C8\uBB38\uC5D0 \uB2F5\uBCC0\uC744 \uD55C\uB2E4."] })] }) }), _jsx("div", { className: "wrap_container", children: _jsxs("div", { className: "wrap", children: [_jsx("div", { className: "keyword", children: "\uD53C\uB4DC\uBC31" }), _jsxs("div", { children: ["\uC7AC\uD559\uC0DD\uC740 \uC2E0\uC785\uC0DD\uC758 \uCF54\uB4DC\uC640 \uB2F5\uBCC0\uC5D0", _jsx("br", {}), "\uD53C\uB4DC\uBC31\uC744 \uD55C\uB2E4."] })] }) })] })] }), _jsxs("div", { className: "menual_problem", children: [_jsx("div", { className: "img_container", children: _jsx("img", { src: img_probList, className: "img1" }) }), _jsxs("div", { className: "prob_info", children: [_jsx("h2", { children: "\uBB38\uC81CStep." }), "\uBB38\uC81C\uC640 \uC9C8\uBB38\uD14C\uC2A4\uD2B8 \uD1B5\uACFC \uC2DC", _jsx("br", {}), "\uB2E4\uB978 \uC0AC\uB78C\uC758 \uD480\uC774\uB4E4\uC744 \uC5F4\uB78C\uD560 \uC218 \uC788\uC5B4\uC694"] })] }), _jsxs("div", { className: "menual_solve", children: [_jsxs("div", { className: "solve_info", children: [_jsx("h2", { children: "\uD480\uC774Step." }), "\uBB38\uC81C\uC5D0 \uB300\uD55C \uC608\uC2DC\uB97C \uBCF4\uACE0", _jsx("br", {}), "\uC6B0\uCE21\uC5D0 \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC5EC \uBB38\uC81C\uD480\uC774\uD574\uC694"] }), _jsx("div", { className: "img_container", children: _jsx("img", { src: img_solving, className: "img2" }) })] }), _jsxs("div", { className: "menual_ques_pass", children: [_jsxs("div", { className: "ques_info", children: [_jsx("h2", { children: "\uC9C8\uBB38Step." }), "\uBB38\uC81C\uD480\uC774 \uD6C4, 2\uAC1C \uC9C8\uBB38\uC5D0 \uB2F5\uBCC0 \uC2DC", _jsx("br", {}), "\uC7AC\uD559\uC0DD\uB4E4\uC758 \uD53C\uB4DC\uBC31\uC774 \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4"] }), _jsx("div", { className: "case_container", children: _jsx("div", { className: "ques_case", children: "\uC9C8\uBB38\uD14C\uC2A4\uD2B8 \uD1B5\uACFC \uC2DC" }) }), _jsxs("div", { className: "img_container", children: [_jsx("img", { src: img_pass, className: "img3" }), _jsxs("p", { children: ["1\uBA85 \uC774\uC0C1\uC758 \uC7AC\uD559\uC0DD\uC5D0\uAC8C PASS\uB97C \uBC1B\uC73C\uBA74", _jsx("br", {}), "\uD1B5\uACFC!!"] }), _jsx("img", { src: img_pass_feed, className: "img4" })] })] }), _jsxs("div", { className: "menual_ques_fail", children: [_jsx("div", { className: "case_container", children: _jsx("div", { className: "ques_case", children: "\uC9C8\uBB38\uD14C\uC2A4\uD2B8 \uC2E4\uD328 \uC2DC" }) }), _jsxs("div", { className: "img_container", children: [_jsx("img", { src: img_fail, className: "img5" }), _jsxs("p", { children: ["1\uBA85 \uC774\uC0C1\uC758 \uC7AC\uD559\uC0DD\uC5D0\uAC8C PASS\uB97C \uBC1B\uC9C0 \uBABB\uD558\uBA74", _jsx("br", {}), "\uC2E4\uD328.."] }), _jsx("img", { src: img_fail_feed, className: "img6" })] })] }), _jsxs("div", { className: "menual_solving", children: [_jsx("div", { className: "img_container", children: _jsx("img", { src: img_solvingList, className: "img7" }) }), _jsx("div", { className: "solve_info", children: "\uB2E4\uB978 \uD559\uC0DD\uB4E4\uC758 \uD480\uC774\uB3C4 \uBCFC \uC218 \uC788\uC5B4\uC694" })] }), _jsxs("div", { className: "finish", children: [_jsx("div", { className: "info", children: "\uADF8\uB7FC, \uC2DC\uC791\uD574\uBCF4\uC138\uC694!" }), _jsx("a", { onClick: () => navigate("/list"), children: "\uBB38\uC81C \uD480\uB7EC \uAC00\uAE30" })] })] }));
};
export default Menual;
