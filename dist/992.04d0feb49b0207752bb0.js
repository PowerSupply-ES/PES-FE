"use strict";(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[992],{9662:(e,s,t)=>{t.d(s,{A:()=>r});var a=t(3719),n=t.n(a);const r=async e=>{try{const s=await n().get("api/notice");if(204===s.status)return console.log("공지사항이 아직 없습니다!"),void e([]);e(s.data)}catch(e){n().isAxiosError(e)?console.error("Axios 오류 발생:",e.response?.status,e.response?.statusText):e instanceof Error?console.error("일반 오류 발생:",e.message):console.error("알 수 없는 오류 발생:",e)}}},4358:(e,s,t)=>{t.d(s,{A:()=>r});var a=t(3719),n=t.n(a);const r=async(e,s)=>{try{201===(await n().post("api/notice",e,{headers:{"Content-Type":"application/json"}})).status&&(alert("공지사항이 성공적으로 등록되었습니다!"),s("/notice"))}catch(e){n().isAxiosError(e)?e.response?403===e.response.status?alert("권한이 없습니다"):alert(`서버 응답 오류: ${e.response.status} ${e.response.statusText}`):e.request?alert("서버 응답이 없습니다."):alert(`요청 실패: ${e.message}`):alert(`알 수 없는 오류 발생: ${e.message}`)}}},6385:(e,s,t)=>{t.d(s,{$2:()=>l,OE:()=>o,i0:()=>c,zg:()=>i});var a=t(1594),n=t.n(a),r=t(4848);const i=e=>e?e.replace("T"," "):"",o=()=>{window.history.back()},c=e=>e.split("\n").map(((e,s)=>(0,r.jsxs)(n().Fragment,{children:[e,(0,r.jsx)("br",{})]},s))),l=e=>e.split("\n\n").map(((e,s)=>(0,r.jsxs)("span",{children:[e,(0,r.jsx)("br",{})]},s)))},3992:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var a=t(1594),n=t(7767),r=t(7909),i=t(6385),o=t(3719),c=t.n(o);t(9662),t(4358);const l=()=>{const e=sessionStorage.getItem("memberStatus"),[s,t]=(0,a.useState)(null),[n,r]=(0,a.useState)(!1);let i=new URL(window.location.href),o=parseInt(i.pathname.split("/")[2]);const l="/api/notice/";return(0,a.useEffect)((()=>{(async(e,s,t)=>{try{e((await c().get(`${t}${s}`)).data)}catch(e){c().isAxiosError(e)?console.error("Axios 오류 발생:",e.response?.status,e.response?.statusText):e instanceof Error?console.error("일반 오류 발생:",e.message):console.error("알 수 없는 오류 발생:",e)}})(t,o,l)}),[o]),{memberStatus:e,noticeDetail:s,isEditing:n,toggleEditing:()=>{r((e=>!e))},setDetail:t,uri:l,noticeId:o}};var d=t(3124),p=t(4848);const u=()=>{const e=(0,n.Zp)(),{memberStatus:s,noticeDetail:t,isEditing:a,toggleEditing:o,setDetail:u,uri:x,noticeId:h}=l();return t?(0,p.jsx)("div",{className:"info_body",children:(0,p.jsxs)("div",{className:"content_Detail",children:[(0,p.jsxs)("div",{className:"header",children:[(0,p.jsx)(r.jpd,{size:30}),a?(0,p.jsx)("textarea",{className:"textarea_header",value:t.title,onChange:e=>u((s=>s?{...s,title:e.target.value}:s))}):(0,p.jsx)("p",{children:t.title})]}),(0,p.jsx)("div",{className:"noticeInfo-container",children:(0,p.jsxs)("ul",{className:"noticeInfo",children:[(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:"작성자"}),t.writerGen,"기 ",t.writer]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:"생성시간"}),(0,i.zg)(t.createdTime)]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:"수정시간"}),(0,i.zg)(t.updatedTime)]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:"조회수"}),t.noticeHit,"회"]})]})}),(0,p.jsx)("div",{className:"btn_back",children:(0,p.jsx)("button",{onClick:()=>(0,i.OE)(),children:"뒤로가기"})}),(0,p.jsx)("div",{className:"text_container",children:a?(0,p.jsx)("textarea",{className:"textarea_content",value:t.content,onChange:e=>u((s=>s?{...s,content:e.target.value}:s))}):(0,p.jsx)("p",{className:"text",children:(0,i.i0)(t.content)})}),(0,p.jsxs)("div",{className:"관리자"===s?"btn_container":"no_button",children:[a?(0,p.jsx)("button",{className:"btn_modify",onClick:()=>(async(e,s,t,a)=>{try{200===(await c().patch(`${e}${s}`,t,{headers:{"Content-Type":"application/json"}})).status&&(alert("공지사항이 성공적으로 수정되었습니다!"),a("/notice"))}catch(e){c().isAxiosError(e)?e.response?403===e.response.status?alert("권한이 없습니다"):404===e.response.status?alert("해당 공지사항이 존재하지 않습니다"):alert(`수정 실패: ${e.response.status} ${e.response.statusText}`):e.request?alert("수정 실패: 요청이 실패했습니다."):alert(`수정 실패: ${e.message}`):alert(`수정 실패: ${String(e)}`)}})(x,h,t,e),children:"저장하기"}):(0,p.jsx)("button",{className:"btn_submit",onClick:o,children:"수정하기"}),(0,p.jsx)("button",{className:"btn_delete",onClick:()=>(async(e,s,t)=>{try{200===(await c().delete(`${e}${s}`)).status&&(alert("공지사항이 성공적으로 삭제되었습니다!"),t("/notice"))}catch(e){c().isAxiosError(e)?e.response?403===e.response.status?alert("권한이 없습니다"):alert(`삭제 실패: ${e.response.status} ${e.response.statusText}`):e.request?alert("삭제 실패: 요청이 실패했습니다."):alert(`삭제 실패: ${e.message}`):alert(`삭제 실패: ${String(e)}`)}})(x,h,e),children:"삭제하기"})]})]})}):(0,p.jsx)(d.A,{})}}}]);