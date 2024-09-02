import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import useSignup from "hooks/sign/useSignup";
const defaultTheme = createTheme();
const SignupTemp = () => {
    const { formData, handleSubmit, handleInputChange } = useSignup();
    return (_jsx(ThemeProvider, { theme: defaultTheme, children: _jsxs(Container, { component: "main", maxWidth: "xs", children: [_jsx(CssBaseline, {}), _jsxs(Box, { sx: {
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }, children: [_jsx(Avatar, { sx: { m: 1, width: 56, height: 56 }, src: logo }), _jsx(Typography, { component: "h1", variant: "h5", children: "Sign Up" }), _jsxs(Box, { component: "form", noValidate: true, onSubmit: handleSubmit, sx: { mt: 3 }, children: [_jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { value: formData.memberName, id: "memberName", label: "\uC774\uB984", name: "memberName", autoComplete: "memberName", fullWidth: true, required: true, onChange: handleInputChange, placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694", autoFocus: true }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { value: formData.memberEmail, type: "email", id: "memberEmail", label: "\uC774\uBA54\uC77C", name: "memberEmail", autoComplete: "memberEmail", fullWidth: true, required: true, onChange: handleInputChange, placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694(@\uD615\uC2DD)" }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { value: formData.memberId, id: "memberId", label: "\uC544\uC774\uB514(\uD559\uBC88)", name: "memberId", autoComplete: "memberId", fullWidth: true, required: true, onChange: handleInputChange, placeholder: "\uD559\uBC88\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694" }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { value: formData.memberPw, type: "password", id: "memberPw", label: "\uBE44\uBC00\uBC88\uD638", name: "memberPw", autoComplete: "memberPw", fullWidth: true, required: true, onChange: handleInputChange, placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694" }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { value: formData.memberPhone, id: "memberPhone", label: "\uC804\uD654\uBC88\uD638", name: "memberPhone", autoComplete: "tel", fullWidth: true, required: true, onChange: handleInputChange, placeholder: "\uC804\uD654\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694" }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { value: formData.memberGen, id: "memberGen", label: "\uAE30\uC218", name: "memberGen", autoComplete: "memberGen", fullWidth: true, required: true, onChange: handleInputChange, placeholder: "24\uB144 \uAE30\uC900 35\uAE30" }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { value: formData.memberMajor, id: "memberMajor", label: "\uD559\uACFC", name: "memberMajor", autoComplete: "memberMajor", required: true, fullWidth: true, onChange: handleInputChange, placeholder: "ex)\u3147\u3147\uD559\uACFC" }) })] }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 }, children: "Sign Up" }), _jsx(Grid, { container: true, justifyContent: "flex-end", children: _jsx(Grid, { item: true, children: _jsx(Link, { href: "#", variant: "body2", children: "\uC544\uC774\uB514\uAC00 \uC788\uB098\uC694? \uB85C\uADF8\uC778" }) }) })] })] }), _jsx(Copyright, { sx: { mt: 8, mb: 4 } })] }) }));
};
export default SignupTemp;
