"use strict";(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[167],{3767:(n,e,t)=>{t.d(e,{A:()=>a});var i=t(5932),r=t(5001),o=t(4848);const a=n=>(0,o.jsxs)(i.A,{variant:"body2",color:"text.secondary",align:"center",...n,children:["Goto HOME © ",(0,o.jsx)(r.A,{color:"inherit",href:"https://pes23.com/",children:"pes23.com"})," ",(new Date).getFullYear(),"."]})},9548:(n,e,t)=>{t.r(e),t.d(e,{default:()=>C});var i=t(1594),r=(t(6699),t(1131)),o=t(3767),a=t(7767),s=t(3719),l=t.n(s);const m=()=>{const n=(0,a.Zp)(),[e,t]=(0,i.useState)({memberId:"",memberEmail:"",memberPw:"",memberName:"",memberGen:0,memberMajor:"",memberPhone:""}),r=n=>[".net",".com"].some((e=>n.endsWith(e)));return{formData:e,handleSubmit:async t=>{t.preventDefault();try{const t=await(async(n,e)=>{if(e(n.memberEmail))if(/^[a-zA-Z가-힣]+$/.test(n.memberName))try{return(await l().post("api/signup",n,{headers:{"Content-Type":"application/json"}})).data}catch(n){if(l().isAxiosError(n)){const e=n;if(e.response){if(400===e.response.status)throw new Error("이미 사용 중인 이메일입니다.");throw new Error(`${e.response.status} ${e.response.statusText}`)}}throw new Error("네트워크 오류가 발생했습니다")}else alert("이름은 문자로 입력해주세요");else alert("이메일 형식이 아닙니다")})(e,r);if(t&&t.message){const e=t.message;alert(e),n("/signin")}}catch(n){n instanceof Error?alert(n.message):alert("알 수 없는 오류가 발생했습니다.")}},handleInputChange:n=>{t({...e,[n.target.name]:n.target.value})}}};var p=t(675),d=t(6990),c=t(4519),u=t(9890),x=t(5001),h=t(8239),g=t(8161),b=t(5932),f=t(7951),y=t(1716),j=t(8782),A=t(4848);const w=(0,y.A)(),v=()=>{const{formData:n,handleSubmit:e,handleInputChange:t}=m();return(0,A.jsx)(j.A,{theme:w,children:(0,A.jsxs)(f.A,{component:"main",maxWidth:"xs",children:[(0,A.jsx)(c.Ay,{}),(0,A.jsxs)(g.A,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,A.jsx)(p.A,{sx:{m:1,width:56,height:56},src:r}),(0,A.jsx)(b.A,{component:"h1",variant:"h5",children:"Sign Up"}),(0,A.jsxs)(g.A,{component:"form",noValidate:!0,onSubmit:e,sx:{mt:3},children:[(0,A.jsxs)(h.Ay,{container:!0,spacing:2,children:[(0,A.jsx)(h.Ay,{item:!0,xs:12,children:(0,A.jsx)(u.A,{value:n.memberName,id:"memberName",label:"이름",name:"memberName",autoComplete:"memberName",fullWidth:!0,required:!0,onChange:t,placeholder:"이름을 입력해주세요",autoFocus:!0})}),(0,A.jsx)(h.Ay,{item:!0,xs:12,children:(0,A.jsx)(u.A,{value:n.memberEmail,type:"email",id:"memberEmail",label:"이메일",name:"memberEmail",autoComplete:"memberEmail",fullWidth:!0,required:!0,onChange:t,placeholder:"이메일을 입력해주세요(@형식)"})}),(0,A.jsx)(h.Ay,{item:!0,xs:12,children:(0,A.jsx)(u.A,{value:n.memberId,id:"memberId",label:"아이디(학번)",name:"memberId",autoComplete:"memberId",fullWidth:!0,required:!0,onChange:t,placeholder:"학번을 입력해주세요"})}),(0,A.jsx)(h.Ay,{item:!0,xs:12,children:(0,A.jsx)(u.A,{value:n.memberPw,type:"password",id:"memberPw",label:"비밀번호",name:"memberPw",autoComplete:"memberPw",fullWidth:!0,required:!0,onChange:t,placeholder:"비밀번호를 입력해주세요"})}),(0,A.jsx)(h.Ay,{item:!0,xs:12,children:(0,A.jsx)(u.A,{value:n.memberPhone,id:"memberPhone",label:"전화번호",name:"memberPhone",autoComplete:"tel",fullWidth:!0,required:!0,onChange:t,placeholder:"전화번호를 입력해주세요"})}),(0,A.jsx)(h.Ay,{item:!0,xs:12,sm:6,children:(0,A.jsx)(u.A,{value:n.memberGen,id:"memberGen",label:"기수",name:"memberGen",autoComplete:"memberGen",fullWidth:!0,required:!0,onChange:t,placeholder:"24년 기준 35기"})}),(0,A.jsx)(h.Ay,{item:!0,xs:12,sm:6,children:(0,A.jsx)(u.A,{value:n.memberMajor,id:"memberMajor",label:"학과",name:"memberMajor",autoComplete:"memberMajor",required:!0,fullWidth:!0,onChange:t,placeholder:"ex)ㅇㅇ학과"})})]}),(0,A.jsx)(d.A,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,A.jsx)(h.Ay,{container:!0,justifyContent:"flex-end",children:(0,A.jsx)(h.Ay,{item:!0,children:(0,A.jsx)(x.A,{href:"/signin",variant:"body2",children:"아이디가 있나요? 로그인"})})})]})]}),(0,A.jsx)(o.A,{sx:{mt:8,mb:4}})]})})},C=()=>(0,A.jsx)("div",{className:"sign-wrapper2",children:(0,A.jsx)(v,{})})},7682:(n,e,t)=>{t.d(e,{A:()=>s});var i=t(1601),r=t.n(i),o=t(6314),a=t.n(o)()(r());a.push([n.id,'@charset "UTF-8";\n/* 로그인, 회원가입 공통body */\n.sign-wrapper {\n  height: 100vh;\n  margin-bottom: -300px;\n  background-color: rgba(255, 255, 255, 0.5960784314);\n  padding-top: 40px;\n}\n\n.sign-wrapper2 {\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: -300px;\n  background-color: rgba(255, 255, 255, 0.5960784314);\n  padding: 100px;\n}\n\nh2 {\n  /* display: flex;\n    justify-content: center; */\n  color: #424242;\n  font-size: 32px;\n}\n\n#signin-form,\n#signup-form {\n  margin-top: 20px;\n}\n\n.login-container {\n  width: 380px;\n  height: 76%;\n  border: solid 2px #c3c2c2;\n  border-radius: 10px;\n  background-color: #f6f8fa;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n.login-container h4 {\n  color: #949494;\n  margin: 12px auto 32px;\n}\n.login-container form {\n  width: 100%;\n  margin-top: 10px;\n}\n.login-container a {\n  margin: 24px 15px 25px auto;\n  font-size: 13px;\n  color: #6b6b6b;\n}\n\n.signup-container {\n  width: 380px;\n  /* width: 38vh; */\n  height: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: solid 2px #c3c2c2;\n  border-radius: 10px;\n  background-color: #f6f8fa;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n.signup-container h4 {\n  color: #949494;\n  margin: 12px auto 40px;\n}\n.signup-container form {\n  width: 100%;\n  margin-top: 10px;\n}\n.signup-container a {\n  margin: 24px 15px 25px auto;\n  font-size: 13px;\n  color: #6b6b6b;\n}\n\n.login-input {\n  width: 100%;\n  margin: 0 auto 12px;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.login-input label {\n  width: 70%;\n  display: block;\n  margin: 3px;\n  color: #3d3d3d;\n  font-weight: bold;\n  font-size: 14px;\n}\n.login-input input[type=text],\n.login-input input[type=password] {\n  width: 68%;\n  padding: 10px;\n  border: 1px solid #5094f9;\n  border-radius: 10px;\n  background-color: #ffffff;\n  margin-top: 4px;\n}\n\n.signup-input {\n  width: 80%;\n  margin: 0 auto 15px;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.signup-input label {\n  width: 25%;\n  display: block;\n  margin: 3px;\n  color: #3d3d3d;\n  font-weight: bold;\n  font-size: 14px;\n}\n.signup-input input[type=text],\n.signup-input input[type=password],\n.signup-input input[type=email],\n.signup-input input[type=tel],\n.signup-input input[type=number] {\n  width: 60%;\n  padding: 10px;\n  border: 1px solid #5094f9;\n  border-radius: 10px;\n  background-color: #ffffff;\n}\n\n/* 로그인,회원가입 버튼 */\n.btn_signin,\n.btn_signup {\n  display: flex;\n  justify-content: center;\n  width: 75%;\n  background-color: rgba(90, 44, 218, 0.6);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  font-size: 14px;\n}\n.btn_signin:hover,\n.btn_signup:hover {\n  background-color: rgba(90, 44, 218, 0.7764705882);\n}\n\n.btn_signup {\n  margin: 40px auto 40px;\n}\n\n.btn_signin {\n  margin: 52px auto 0;\n}\n\n/* --------------로그인 페이지-------------- */\n/* 회원가입링크 */\n.move {\n  display: flex;\n  justify-content: center;\n}\n.move a {\n  margin: 24px 30px 45px 0;\n  font-size: 14px;\n}\n.move a:last-child {\n  margin-right: 0; /* 마지막 요소의 오른쪽 마진을 0으로 설정하여 간격 조절 */\n}\n\n/* 링크 스타일 수정 */\na {\n  color: #555; /* 글자색을 검은색으로 설정 */\n  cursor: pointer;\n}',""]);const s=a},6699:(n,e,t)=>{var i=t(5072),r=t.n(i),o=t(7825),a=t.n(o),s=t(7659),l=t.n(s),m=t(5056),p=t.n(m),d=t(540),c=t.n(d),u=t(1113),x=t.n(u),h=t(7682),g={};g.styleTagTransform=x(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=c(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals},1131:(n,e,t)=>{n.exports=t.p+"images/sign_logo.7953da17.png"}}]);