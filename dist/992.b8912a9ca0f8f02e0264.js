"use strict";(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[992],{9662:(n,t,e)=>{e.d(t,{A:()=>r});var o=e(3719),i=e.n(o);const r=async n=>{try{const t=await i().get("api/notice");if(204===t.status)return console.log("공지사항이 아직 없습니다!"),void n([]);n(t.data)}catch(n){i().isAxiosError(n)?console.error("Axios 오류 발생:",n.response?.status,n.response?.statusText):n instanceof Error?console.error("일반 오류 발생:",n.message):console.error("알 수 없는 오류 발생:",n)}}},4358:(n,t,e)=>{e.d(t,{A:()=>r});var o=e(3719),i=e.n(o);const r=async(n,t)=>{try{201===(await i().post("api/notice",n,{headers:{"Content-Type":"application/json"}})).status&&(alert("공지사항이 성공적으로 등록되었습니다!"),t("/notice"))}catch(n){i().isAxiosError(n)?n.response?403===n.response.status?alert("권한이 없습니다"):alert(`서버 응답 오류: ${n.response.status} ${n.response.statusText}`):n.request?alert("서버 응답이 없습니다."):alert(`요청 실패: ${n.message}`):alert(`알 수 없는 오류 발생: ${n.message}`)}}},6385:(n,t,e)=>{e.d(t,{$2:()=>c,OE:()=>a,i0:()=>l,zg:()=>s});var o=e(1594),i=e.n(o),r=e(4848);const s=n=>n?n.replace("T"," "):"",a=()=>{window.history.back()},l=n=>n.split("\n").map(((n,t)=>(0,r.jsxs)(i().Fragment,{children:[n,(0,r.jsx)("br",{})]},t))),c=n=>n.split("\n\n").map(((n,t)=>(0,r.jsxs)("span",{children:[n,(0,r.jsx)("br",{})]},t)))},3992:(n,t,e)=>{e.r(t),e.d(t,{default:()=>f});var o=e(1594),i=e(7767),r=e(290),s=(e(5381),e(6385)),a=e(3719),l=e.n(a);e(9662),e(4358);const c=()=>{const n=sessionStorage.getItem("memberStatus"),[t,e]=(0,o.useState)(null),[i,r]=(0,o.useState)(!1);let s=new URL(window.location.href),a=parseInt(s.pathname.split("/")[2]);const c="/api/notice/";return(0,o.useEffect)((()=>{(async(n,t,e)=>{try{n((await l().get(`${e}${t}`)).data)}catch(n){l().isAxiosError(n)?console.error("Axios 오류 발생:",n.response?.status,n.response?.statusText):n instanceof Error?console.error("일반 오류 발생:",n.message):console.error("알 수 없는 오류 발생:",n)}})(e,a,c)}),[a]),{memberStatus:n,noticeDetail:t,isEditing:i,toggleEditing:()=>{r((n=>!n))},setDetail:e,uri:c,noticeId:a}};var d=e(4848);const f=()=>{const n=(0,i.Zp)(),{memberStatus:t,noticeDetail:e,isEditing:o,toggleEditing:a,setDetail:f,uri:p,noticeId:x}=c();return e?(0,d.jsx)("div",{className:"info_body",children:(0,d.jsxs)("div",{className:"content_Detail",children:[(0,d.jsxs)("div",{className:"header",children:[(0,d.jsx)(r.jpd,{size:30}),o?(0,d.jsx)("textarea",{className:"textarea_header",value:e.title,onChange:n=>f((t=>t?{...t,title:n.target.value}:t))}):(0,d.jsx)("p",{children:e.title})]}),(0,d.jsx)("div",{className:"noticeInfo-container",children:(0,d.jsxs)("ul",{className:"noticeInfo",children:[(0,d.jsxs)("li",{children:[(0,d.jsx)("p",{children:"작성자"}),e.writerGen,"기 ",e.writer]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("p",{children:"생성시간"}),(0,s.zg)(e.createdTime)]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("p",{children:"수정시간"}),(0,s.zg)(e.updatedTime)]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("p",{children:"조회수"}),e.noticeHit,"회"]})]})}),(0,d.jsx)("div",{className:"btn_back",children:(0,d.jsx)("button",{onClick:()=>(0,s.OE)(),children:"뒤로가기"})}),(0,d.jsx)("div",{className:"text_container",children:o?(0,d.jsx)("textarea",{className:"textarea_content",value:e.content,onChange:n=>f((t=>t?{...t,content:n.target.value}:t))}):(0,d.jsx)("p",{className:"text",children:e.content})}),(0,d.jsxs)("div",{className:"관리자"===t?"btn_container":"no_button",children:[o?(0,d.jsx)("button",{className:"btn_modify",onClick:()=>(async(n,t,e,o)=>{try{200===(await l().patch(`${n}${t}`,e,{headers:{"Content-Type":"application/json"}})).status&&(alert("공지사항이 성공적으로 수정되었습니다!"),o("/notice"))}catch(n){l().isAxiosError(n)?n.response?403===n.response.status?alert("권한이 없습니다"):404===n.response.status?alert("해당 공지사항이 존재하지 않습니다"):alert(`수정 실패: ${n.response.status} ${n.response.statusText}`):n.request?alert("수정 실패: 요청이 실패했습니다."):alert(`수정 실패: ${n.message}`):alert(`수정 실패: ${String(n)}`)}})(p,x,e,n),children:"저장하기"}):(0,d.jsx)("button",{className:"btn_submit",onClick:a,children:"수정하기"}),(0,d.jsx)("button",{className:"btn_delete",onClick:()=>(async(n,t,e)=>{try{200===(await l().delete(`${n}${t}`)).status&&(alert("공지사항이 성공적으로 삭제되었습니다!"),e("/notice"))}catch(n){l().isAxiosError(n)?n.response?403===n.response.status?alert("권한이 없습니다"):alert(`삭제 실패: ${n.response.status} ${n.response.statusText}`):n.request?alert("삭제 실패: 요청이 실패했습니다."):alert(`삭제 실패: ${n.message}`):alert(`삭제 실패: ${String(n)}`)}})(p,x,n),children:"삭제하기"})]})]})}):(0,d.jsx)("div",{children:"Loading..."})}},3598:(n,t,e)=>{e.d(t,{A:()=>a});var o=e(1601),i=e.n(o),r=e(6314),s=e.n(r)()(i());s.push([n.id,'@charset "UTF-8";\n.App {\n  text-align: center;\n  font-family: "Pretendard-Regular";\n}\n\n/* -----info 페이지----- */\n.info_body {\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 100vh;\n  padding: 40px 0 80px;\n  margin-bottom: -300px;\n  background-color: #f9f9ff;\n}\n\n.content_info {\n  width: 80%;\n  margin: auto;\n  box-shadow: 0px 2px #d8d4d4;\n}\n\n.header {\n  display: flex;\n  font-size: 24px;\n  font-weight: bold;\n  margin: 40px auto;\n  width: 90%;\n  text-align: left;\n  color: #393939;\n  overflow: hidden;\n}\n.header p {\n  margin-left: 14px;\n}\n\n.add_info {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.add_info p {\n  margin-left: 10px;\n  color: #393939;\n}\n\n.no_button {\n  display: none;\n}\n\n.info_list {\n  display: flex;\n  flex-direction: column;\n}\n.info_list .info {\n  background-color: #fcfcfc;\n  font-size: 18px;\n  align-items: center;\n  display: flex;\n  color: #282828;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 12px 0px;\n  border-bottom: solid #b4b4b4 2px;\n}\n.info_list .info *:not(:last-child) {\n  margin-right: 20px;\n}\n.info_list .info .title_1 {\n  /* color: #7450e4b8; */\n  color: #939393;\n  font-weight: bold;\n  cursor: pointer;\n}\n.info_list .info .title_2 {\n  font-weight: bold;\n  cursor: pointer;\n}\n.info_list .info .title_3, .info_list .info .title_4 {\n  color: #7a7a7a;\n}\n\n.info_title {\n  background-color: #f0f0f0;\n  border-top: solid #b4b4b4 2px;\n  font-weight: bold;\n  font-size: 19px;\n  display: flex;\n  color: #282828;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 12px 0px;\n  border-bottom: solid #b4b4b4 2px;\n}\n.info_title *:not(:last-child) {\n  margin-right: 20px;\n}\n\n.title_0,\n.title_1,\n.title_4 {\n  flex: 1;\n}\n\n.title_2 {\n  flex: 3;\n}\n\n.title_3 {\n  flex: 2;\n}\n\n.title_0 {\n  /* 중요버튼 */\n  /* new버튼 */\n}\n.title_0 div {\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 50px;\n  color: #fcfcfc;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 2px 8px;\n}\n.title_0 .imp {\n  background-color: #000000;\n  border: solid #000000;\n}\n.title_0 .new {\n  background-color: #ff5f5f;\n  border: solid #ff5f5f;\n}\n\n/* -----infoDetail 페이지----- */\n.content_Detail,\n.content_register {\n  width: 80%;\n  margin: auto;\n}\n\n.check_container {\n  width: 90%;\n  margin: 20px auto 0;\n  font-size: 18px;\n  display: flex;\n  justify-content: left;\n  padding-right: 20px;\n}\n\n.check_container input {\n  margin-right: 8px;\n  width: 16px;\n}\n\n.noticeInfo {\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: left;\n}\n.noticeInfo li {\n  display: flex;\n}\n.noticeInfo li p {\n  font-weight: bold;\n  margin-right: 20px;\n  width: 60px;\n  text-align: center;\n}\n\n.noticeInfo-container {\n  width: 90%;\n  margin: auto;\n  display: flex;\n  justify-content: left;\n}\n\n.btn_back {\n  width: 90%;\n  text-align: right;\n  margin: auto;\n}\n.btn_back button {\n  cursor: pointer;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 8px 20px;\n  background-color: #686666;\n  border: solid 2px #686666;\n  border-radius: 20px;\n  color: #ffffff;\n  font-weight: bold;\n  box-shadow: 1px 2px #ccc9c9;\n  font-size: 16px;\n}\n\n.text_container {\n  width: 90%;\n  background-color: #ffffff;\n  border: solid 2px #8b8b8b;\n  border-radius: 20px;\n  color: #2f2f2f;\n  font-weight: bold;\n  height: 55vh;\n  margin: 20px auto 0;\n  overflow: hidden;\n}\n.text_container .text {\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  padding: 12px;\n}\n\n.btn_container {\n  margin-top: 40px;\n}\n\n.btn_delete,\n.btn_submit,\n.btn_modify {\n  color: #ffffff;\n  font-weight: bold;\n  border: solid 2px;\n  border-radius: 20px;\n  font-size: 18px;\n  padding: 8px 24px;\n  cursor: pointer;\n  box-shadow: 1px 2px #ccc9c9;\n}\n\n.btn_submit,\n.btn_modify {\n  background-color: #8c8c8c;\n  border-color: #8c8c8c;\n  margin-right: 16px;\n}\n\n.btn_delete {\n  background-color: #ff5f5f;\n  opacity: 80%;\n  border-color: #ff5f5f;\n}\n\n/* --공지사항 등록-- */\n.title_container {\n  width: 90%;\n  background-color: #ffffff;\n  border: solid 2px #8b8b8b;\n  border-radius: 20px;\n  margin: 20px auto 0;\n  color: #2f2f2f;\n  font-weight: bold;\n  font-size: 18px;\n  height: 40px;\n  padding: 4px 12px;\n  font-family: var(--Font1);\n}\n\n.input_container {\n  width: 90%;\n  height: 55vh;\n  background-color: #ffffff;\n  border: solid 2px #8b8b8b;\n  border-radius: 20px;\n  margin: 20px auto 0;\n  color: #2f2f2f;\n  font-weight: bold;\n  font-size: 18px;\n  padding: 20px 12px;\n  font-family: var(--Font1);\n}\n\n.textarea_content,\n.textarea_header {\n  width: 100%;\n  height: 100%;\n  padding: 8px;\n}\n\n.textarea_header {\n  border: solid 2px #8b8b8b;\n  border-radius: 20px;\n}',""]);const a=s},5381:(n,t,e)=>{var o=e(5072),i=e.n(o),r=e(7825),s=e.n(r),a=e(7659),l=e.n(a),c=e(5056),d=e.n(c),f=e(540),p=e.n(f),x=e(1113),h=e.n(x),g=e(3598),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=l().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=p(),i()(g.A,b),g.A&&g.A.locals&&g.A.locals}}]);