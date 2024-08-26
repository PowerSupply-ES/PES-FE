import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// MUI이용 로그인 form
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "assets/images/sign_logo.png";
import Copyright from "./Copyright";
import useSignIn from "hooks/sign/useSignIn";
const defaultTheme = createTheme();
function LoginTemp() {
    const { formData, handleSubmit, handleInputChange } = useSignIn();
    return (_jsx(ThemeProvider, { theme: defaultTheme, children: _jsxs(Container, { component: "main", maxWidth: "xs", children: [_jsx(CssBaseline, {}), _jsxs(Box, { sx: {
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }, children: [_jsx(Avatar, { sx: { m: 1, width: 56, height: 56 }, src: logo }), _jsx(Typography, { component: "h1", variant: "h5", children: "Login" }), _jsxs(Box, { component: "form", onSubmit: handleSubmit, sx: { mt: 1 }, children: [_jsx(TextField, { margin: "normal", value: formData.memberId, onChange: handleInputChange, fullWidth: true, id: "memberId", label: "ID", name: "memberId", autoComplete: "memberId", autoFocus: true, required: true, placeholder: "\uD559\uBC88\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694" }), _jsx(TextField, { margin: "normal", value: formData.memberPw, onChange: handleInputChange, fullWidth: true, name: "memberPw", label: "password", type: "password", id: "memberPw", autoComplete: "password", required: true, placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694" }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 }, children: "Login" }), _jsxs(Grid, { container: true, children: [_jsx(Grid, { item: true, xs: true }), _jsx(Grid, { item: true, children: _jsx(Link, { href: "/signup", variant: "body2", children: "아이디가 없으신가요? 회원가입" }) })] })] })] }), _jsx(Copyright, { sx: { mt: 8, mb: 4 } })] }) }));
}
export default LoginTemp;
