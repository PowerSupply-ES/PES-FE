import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
// 하단 copyright
const Copyright = (props) => {
    return (_jsxs(Typography, Object.assign({ variant: "body2", color: "text.secondary", align: "center" }, props, { children: ["Goto HOME © ", _jsx(Link, { color: "inherit", href: "https://pes23.com/", children: "pes23.com" }), " ", new Date().getFullYear(), "."] })));
};
export default Copyright;
