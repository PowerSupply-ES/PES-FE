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
import { useNavigate } from 'react-router-dom';
import logo from "assets/images/sign_logo.png"
import postSignup from 'hooks/sign/postSignup';
import Copyright from './Copyright';
import InputMask from 'react-input-mask';

const defaultTheme = createTheme();

function SignupTem() {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
    memberId:'',
    memberEmail: '',
    memberPw: '',
    memberName: '',
    memberGen: '',
    memberMajor: '',
    memberPhone: ''
   });
 

  // 이메일 형식 검사
  const isEmailValid = (email) => {
    // 이메일 형식 검사 정규식
    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // 이메일이 .net 또는 .com 으로 끝나는지 확인
    const validEndings = ['.net', '.com'];
    const hasValidEnding = validEndings.some(ending => email.endsWith(ending));

    // return emailRegex.test(email) && hasValidEnding;
    return hasValidEnding;
  };


  // 회원가입 폼이 제출될 때 호출
  const handleSubmit = async(e) => {
    // 기본 제출 동작 막기
    e.preventDefault();

    try{
        const responseData = await postSignup(formData, isEmailValid);
        const resultMessage = responseData.message;
        alert(resultMessage);
        navigate('/signin');
    }catch(error){
        alert(error.message);
    }
  };


  //입력필드 값 변경될때마다 호출
  const handleInputChange = (e) => {
    setFormData({
      // formData복사, 변경된 필드만 업데이트
      ...formData,
      [e.target.name]: e.target.value
    });
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
            Sign Up
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  value={formData.memberName}
                  id="memberName"
                  label="이름"
                  name="memberName"
                  autoComplete="memberName"
                  fullWidth
                  required
                  onChange={handleInputChange}
                  placeholder='이름을 입력해주세요'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={formData.memberEmail}
                  type="email"
                  id="memberEmail"
                  label="이메일"
                  name="memberEmail"
                  autoComplete="memberEmail"
                  fullWidth
                  required
                  onChange={handleInputChange}
                  placeholder='이메일을 입력해주세요(@형식)'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={formData.memberId}
                  id="memberId"
                  label="아이디(학번)"
                  name="memberId"
                  autoComplete="memberId"
                  fullWidth
                  required
                  onChange={handleInputChange}
                  placeholder='학번을 입력해주세요'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={formData.memberPw}
                  type="password"
                  id="memberPw"
                  label="비밀번호"
                  name="memberPw"
                  autoComplete="memberPw"
                  fullWidth
                  required
                  onChange={handleInputChange}
                  placeholder='비밀번호를 입력해주세요'
                />
              </Grid>


              <Grid item xs={12}>
                {/* 전화번호 형식 지정 */}
                <InputMask
                  mask="010-9999-9999"
                  value={formData.memberPhone}
                  onChange={handleInputChange}
                >
                  {(inputProps) => (
                    <TextField
                      {...inputProps}
                      label="전화번호"
                      name="memberPhone"
                      autoComplete="tel"
                      fullWidth
                      required
                    />
                  )}
                </InputMask>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  value={formData.memberGen}
                  id="memberGen"
                  label="기수"
                  name="memberGen"
                  autoComplete="memberGen"
                  fullWidth
                  required
                  onChange={handleInputChange}
                  placeholder='24년 기준 35기'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={formData.memberMajor}
                  id="memberMajor"
                  label="학과"
                  name="memberMajor"
                  autoComplete="memberMajor"
                  required
                  fullWidth
                  onChange={handleInputChange}
                  placeholder='ex)ㅇㅇ학과'
                />
              </Grid>

            </Grid>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>


            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  아이디가 있나요? 로그인
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

export default SignupTem;