// MUI이용 로그인 form
import React from "react";
import logo from "assets/images/sign_logo.webp";
import Copyright from "./Copyright";
import useSignIn from "hooks/sign/useSignIn";

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

const defaultTheme = createTheme();

const LoginTemp: React.FC = () => {
  const { formData, handleSubmit, handleInputChange } = useSignIn();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, width: 56, height: 56 }} src={logo} />

          <Typography component="h1" variant="h5">
            Login
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              value={formData.memberId}
              onChange={handleInputChange}
              fullWidth
              id="memberId"
              label="ID"
              name="memberId"
              autoComplete="memberId"
              autoFocus
              required
              placeholder="학번을 입력해주세요"
            />
            <TextField
              margin="normal"
              value={formData.memberPw}
              onChange={handleInputChange}
              fullWidth
              name="memberPw"
              label="password"
              type="password"
              id="memberPw"
              autoComplete="password"
              required
              placeholder="비밀번호를 입력해주세요"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"아이디가 없으신가요? 회원가입"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default LoginTemp;
