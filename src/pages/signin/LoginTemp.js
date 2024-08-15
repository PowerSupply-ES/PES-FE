import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "assets/images/sign_logo.png"


// 하단 copyright
const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Goto HOME © '}
      <Link color="inherit" href="https://pes23.com/">
        pes23.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();


function LoginTemp() {

  const [formData, setFormData] = useState({
    memberId: '',
    memberPw: ''
  });
    
  const uri = 'api/signin';

  // 로그인 요청 api
  const postSignin = () => {
    fetch(uri, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (!response.ok) {
        // console.log('서버응답:', response);
        if (response.status === 401) {
          throw new Error('일치하는 정보가 없습니다');
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      }
      return response.json();
    })
    .then((responseData) => {
      const resultMessage = responseData.message;
      alert(resultMessage);
      window.location.href = '/';

      sessionStorage.setItem('status', true);
      sessionStorage.setItem('memberId', formData.memberId);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  //입력필드 값 변경될때마다 호출
  const handleInputChange = (e) => {
    setFormData({
      // formData복사, 변경된 필드만 업데이트
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 로그인 폼이 제출될 때 호출
  const handleSubmit = (e) => {
    // 기본 제출 동작 막기
    e.preventDefault();
    postSignin();
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, width: 56, height: 56 }} src={logo}/>

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
              autoComplete="email"
              autoFocus
              required
            />
            <TextField
              margin="normal"
              value={formData.memberPw}
              onChange={handleInputChange}
              fullWidth
              name="memberPw"
              label="Password"
              type="password"
              id="memberPw"
              autoComplete="current-password"
              required
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
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
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