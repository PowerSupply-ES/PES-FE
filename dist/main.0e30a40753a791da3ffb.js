"use strict";(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[792],{8807:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(3719),o=t.n(r);const a=async e=>{console.log("logout!!");try{const n=await o().post("/api/logout",{headers:{"Content-Type":"application/json"}});sessionStorage.clear(),localStorage.clear(),alert(n.data.message),e("/"),window.location.reload()}catch(n){o().isAxiosError(n)?n.response?(console.error("로그아웃 실패:",n.response.status,n.response.statusText),alert(`로그아웃 실패: 서버 응답 에러 (${n.response.status})`),e("/")):n.request?(console.error("로그아웃 실패: 요청이 실패했습니다."),alert("로그아웃 실패: 서버 응답 없음.")):(console.error("로그아웃 실패:",n.message),alert("로그아웃 실패: 요청 설정 에러.")):(console.error("로그아웃 실패 (일반 에러):",n.message),alert("로그아웃 실패: 알 수 없는 오류가 발생했습니다."))}}},3124:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(3113),o=t(1250),a=t(4848);const s=()=>(0,a.jsx)(i,{children:(0,a.jsx)(r.A,{color:"#a1d2fa",cssOverride:{},height:15,loading:!0,margin:2,radius:2,speedMultiplier:1,width:5})}),i=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: auto;
`},8398:(e,n,t)=>{t.d(n,{IU:()=>G,rm:()=>j,Ag:()=>q,w2:()=>s});var r=t(1594),o=t(7767),a=(t(1684),t(4848));const s=e=>{let{memberData:n}=e;const t=(0,o.Zp)();return(0,a.jsx)(a.Fragment,{children:n.map((e=>(0,a.jsxs)("ul",{className:"list_wrapper",children:[(0,a.jsx)("li",{className:"신입생"===e.memberStatus?"title_state_new":"재학생"===e.memberStatus?"title_state_old":"관리자"===e.memberStatus?"title_state_manage":"",children:e.memberStatus}),(0,a.jsx)("li",{className:"title_name",children:e.memberName}),(0,a.jsx)("li",{className:"title_stunum",children:e.memberId}),(0,a.jsx)("li",{className:"title_studep",children:e.memberMajor}),(0,a.jsx)("li",{className:"title_none",children:(0,a.jsx)("button",{className:"info_btn",onClick:()=>{return n=e.memberId,sessionStorage.setItem("memberId",n),void t(`/manageUser/${n}`);var n},children:"정보"})})]},e.memberId)))})};var i=t(7465),l=t(4090),c=t(7211),p=t(7873),d=t(2241),m=t(815),x=t(785),h=t(6204),g=t(357),u=t(4007),f=t(5948);const _=[{text:"회원 관리",icon:(0,a.jsx)(g.A,{}),path:"/manageUser"},{text:"문제 관리",icon:(0,a.jsx)(u.A,{}),path:"/manageProb"},{text:"피드백 관리",icon:(0,a.jsx)(h.A,{}),path:"/manageFeed"}],b=[{text:"Home",icon:(0,a.jsx)(x.A,{}),path:"/"},{text:"About",icon:(0,a.jsx)(f.A,{})}];function j(){const e=(0,o.Zp)(),n=(0,o.zy)();return(0,a.jsxs)(m.A,{sx:{flexGrow:1,p:1,justifyContent:"space-between"},children:[(0,a.jsx)(i.A,{dense:!0,children:_.map(((t,r)=>(0,a.jsx)(l.Ay,{disablePadding:!0,sx:{display:"block"},children:(0,a.jsxs)(c.A,{selected:n.pathname===t.path,sx:{minHeight:52,px:2},onClick:()=>{t.path&&e(t.path)},children:[(0,a.jsx)(p.A,{children:t.icon}),(0,a.jsx)(d.A,{primary:t.text})]})},r)))}),(0,a.jsx)(i.A,{dense:!0,children:b.map(((t,r)=>(0,a.jsx)(l.Ay,{disablePadding:!0,sx:{display:"block"},children:(0,a.jsxs)(c.A,{selected:n.pathname===t.path,sx:{minHeight:52,px:2},onClick:()=>{t.path&&e(t.path)},children:[(0,a.jsx)(p.A,{children:t.icon}),(0,a.jsx)(d.A,{primary:t.text})]})},r)))})]})}var w=t(8807),y=t(1848),A=t(1347),v=t(1543),N=t(8708),k=t(3896),z=t(1431),S=t(2249),I=t(6721),C=t(7130),P=t(5174);const T=(0,y.Ay)(k.A)({margin:"2px 0"});function q(){const e=(0,o.Zp)(),[n,t]=(0,r.useState)(null),s=Boolean(n),i=()=>{t(null)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G,{"aria-label":"Open menu",onClick:e=>{t(e.currentTarget)},sx:{borderColor:"transparent"},children:(0,a.jsx)(P.A,{})}),(0,a.jsxs)(N.A,{anchorEl:n,id:"menu",open:s,onClose:i,onClick:i,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},sx:{[`& .${S.A.root}`]:{padding:"4px"},[`& .${z.A.root}`]:{padding:0},[`& .${A.A.root}`]:{margin:"4px -4px"}},children:[(0,a.jsx)(T,{onClick:i,children:"Add another account"}),(0,a.jsx)(v.A,{}),(0,a.jsxs)(T,{onClick:()=>(0,w.A)(e),sx:{[`& .${I.A.root}`]:{ml:"auto",minWidth:0}},children:[(0,a.jsx)(d.A,{children:"Logout"}),(0,a.jsx)(p.A,{children:(0,a.jsx)(C.A,{fontSize:"small"})})]})]})]})}var E=t(2970),F=t(5723),$=t(1641);function G(e){let{showBadge:n=!1,...t}=e;return(0,a.jsx)(E.A,{color:"error",variant:"dot",invisible:!n,sx:{[`& .${F.A.badge}`]:{right:2,top:2}},children:(0,a.jsx)($.A,{size:"small",...t})})}},2980:(e,n,t)=>{var r=t(5338),o=t(1594),a=t.n(o),s=t(7767);var i=t(1716),l=t(8782),c=t(4519),p=t(8161),d=t(9823),m=t(423),x=t(4848);const h=(0,i.A)(),g=(e,n)=>({flex:"initial",fontSize:"26px",color:e===n?"primary.main":"inherit","&::after":{content:'""',display:e===n?"block":"none",height:"2.5px",borderTopLeftRadius:"3px",borderTopRightRadius:"3px",backgroundColor:"primary.main",marginTop:"8px"}}),u=()=>{const{index:e,toggleTab:n}=(()=>{const e=(0,s.zy)(),n=(0,s.Zp)(),[t,r]=(0,o.useState)(0);return(0,o.useEffect)((()=>{"/"===e.pathname?r(0):"/list"===e.pathname?r(1):"/notice"===e.pathname?r(2):r(0)}),[e.pathname,t]),{index:t,toggleTab:e=>{r(e),console.log("value = ",e),1===e?n("/list"):2===e&&n("/notice")}}})();return(0,x.jsxs)(l.A,{theme:h,children:[(0,x.jsx)(c.Ay,{}),(0,x.jsx)(p.A,{sx:{flexGrow:1,mt:2,overflow:"hidden"},children:(0,x.jsxs)(d.A,{"aria-label":"Pipeline",value:e,onChange:(e,t)=>{if(null!=t){const e="number"==typeof t?t:parseInt(t,10);isNaN(e)||n(e)}},sx:{display:"flex",justifyContent:"flex-start",pt:1},children:[(0,x.jsx)(m.A,{label:"문제",value:1,sx:g(e,1)}),(0,x.jsx)(m.A,{label:"공지사항",value:2,sx:g(e,2)})]})})]})},f=()=>{const e=(0,s.Zp)();return(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("a",{className:"logout",href:"/signin",style:{textDecoration:"none",color:"#555555"},children:"로그인"}),(0,x.jsxs)("div",{className:"navbar",children:[(0,x.jsx)("p",{className:"logo",onClick:()=>e("/"),children:"PES"}),(0,x.jsx)(u,{})]})]})};var _=t(9197),b=t(8807),j=t(3719),w=t.n(j);const y=()=>{const e=(0,s.Zp)(),[n,t]=(0,o.useState)(!1),[r,a]=(0,o.useState)({memberName:"",memberScore:0,memberStatus:"",memberGen:0,hasNewNotices:!1});return(0,o.useEffect)((()=>{(async e=>{let{navigate:n,setMemberData:t}=e;const r=sessionStorage.getItem("memberEmail");try{const e=(await w().get("/api/exp",{params:{memberEmail:r}})).data;t(e),sessionStorage.setItem("memberName",e.memberName),sessionStorage.setItem("memberStatus",e.memberStatus),sessionStorage.setItem("hasNewNotices",e.hasNewNotices.toString()),console.log("hasNewNotices = ",e.hasNewNotices)}catch(e){w().isAxiosError(e)?e.response?403===e.response.status?(alert("로그인이 만료됐습니다!"),sessionStorage.clear(),localStorage.clear(),n("/signin")):console.error("데이터 가져오기 실패:",e.response.status,e.response.statusText):e.request?console.error("데이터 가져오기 실패: 요청이 실패했습니다."):console.error("데이터 가져오기 실패:",e.message):console.error("데이터 가져오기 실패:",e.message)}})({navigate:e,setMemberData:a})}),[e]),(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("div",{className:"btns",children:(0,x.jsxs)("button",{className:"userId",onClick:()=>{t((e=>!e))},children:[r.memberName,"님",n&&(0,x.jsxs)("div",{className:"dropdown-content",children:[(0,x.jsx)(_.d$e,{size:60,style:{color:"lightgray"}}),(0,x.jsxs)("div",{className:"memberName",children:[r.memberName,"님"]}),(0,x.jsxs)("div",{className:"navbarInfo",children:[(0,x.jsx)("div",{className:"memberStatus",children:r.memberStatus}),(0,x.jsxs)("div",{className:"memberGen",children:[r.memberGen,"기"]}),(0,x.jsxs)("div",{className:"memberScore",children:["현재",(0,x.jsx)("p",{children:r.memberScore}),"점"]})]}),(0,x.jsxs)("div",{className:"navbar_bottom",children:[(0,x.jsx)("a",{className:"btn_mypage",href:"/mypage",children:"마이페이지"}),(0,x.jsx)("a",{onClick:()=>{console.log("로그아웃"),(0,b.A)(e)},className:"btn_top_logout",children:"로그아웃"})]})]})]})}),(0,x.jsxs)("div",{className:"navbar",children:[(0,x.jsx)("p",{className:"logo",onClick:()=>e("/"),children:"PES"}),(0,x.jsx)(u,{})]})]})};var A=t(8027),v=t(6512),N=t(1735);const k=()=>{const e=(0,s.Zp)(),n=sessionStorage.getItem("status");return(0,x.jsxs)("div",{className:"footer",children:[(0,x.jsxs)("div",{className:"footer_left",children:[(0,x.jsx)("p",{className:"logo",children:"PES"}),(0,x.jsxs)("div",{className:"info",children:[(0,x.jsxs)("div",{className:"phone",children:[(0,x.jsx)(v.lSi,{size:24})," ",(0,x.jsx)("p",{children:"123qpq@naver.com"})]}),(0,x.jsxs)("div",{className:"address",children:[(0,x.jsx)(A.vq8,{size:20}),(0,x.jsx)("p",{children:"경북 경산시 대학로 280 생산기술연구원 G15 213호"})]})]})]}),(0,x.jsxs)("div",{className:"footer_right",children:[(0,x.jsx)("p",{className:"about",children:"About The Club"}),(0,x.jsx)("p",{className:"info1",children:"영남대학교 로봇공학과 동아리 PowerSupply의"}),(0,x.jsx)("p",{className:"info2",children:"교육시스템 개발팀 PES"}),(0,x.jsxs)("div",{className:"sns",children:[(0,x.jsx)("a",{href:"https://www.instagram.com/team.pes23/",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(N.cli,{size:36})}),(0,x.jsx)("a",{href:"https://github.com/PowerSupply-ES",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(A.hL4,{size:30})})]}),n?(0,x.jsx)("div",{onClick:()=>(0,b.A)(e),className:"footer_logout",children:"로그아웃"}):(0,x.jsx)(x.Fragment,{})]})]})};var z=t(5072),S=t.n(z),I=t(7825),C=t.n(I),P=t(7659),T=t.n(P),q=t(5056),E=t.n(q),F=t(540),$=t.n(F),G=t(1113),R=t.n(G),Z=t(6222),B={};B.styleTagTransform=R(),B.setAttributes=E(),B.insert=T().bind(null,"head"),B.domAPI=C(),B.insertStyleElement=$(),S()(Z.A,B),Z.A&&Z.A.locals&&Z.A.locals;var U=t(579),M={};M.styleTagTransform=R(),M.setAttributes=E(),M.insert=T().bind(null,"head"),M.domAPI=C(),M.insertStyleElement=$(),S()(U.A,M),U.A&&U.A.locals&&U.A.locals;var O=t(4824),D={};D.styleTagTransform=R(),D.setAttributes=E(),D.insert=T().bind(null,"head"),D.domAPI=C(),D.insertStyleElement=$(),S()(O.A,D),O.A&&O.A.locals&&O.A.locals;const L=()=>{const e=sessionStorage.getItem("status");return(0,x.jsxs)("div",{children:[e?(0,x.jsx)(y,{}):(0,x.jsx)(f,{}),(0,x.jsx)(s.sv,{}),(0,x.jsx)(k,{})]})};var H=t(8398),W=t(1848),K=t(675),V=t(1791),J=t(9419),Q=t(815),X=t(3551);const Y=(0,W.Ay)(V.Ay)({width:240,flexShrink:0,boxSizing:"border-box",mt:10,[`& .${J.A.paper}`]:{width:240,boxSizing:"border-box"}});function ee(){return(0,x.jsxs)(Y,{variant:"permanent",sx:{display:{xs:"none",md:"block"},[`& .${J.A.paper}`]:{backgroundColor:"background.paper"}},children:[(0,x.jsx)(p.A,{sx:{display:"flex",mt:"40px",p:1.5}}),(0,x.jsx)(H.rm,{}),(0,x.jsxs)(Q.A,{direction:"row",sx:{p:2,gap:1,alignItems:"center",borderTop:"1px solid",borderColor:"divider"},children:[(0,x.jsx)(K.A,{sizes:"small",alt:"Riley Carter",sx:{width:36,height:36}}),(0,x.jsxs)(p.A,{sx:{mr:"auto"},children:[(0,x.jsx)(X.A,{variant:"body2",sx:{fontWeight:500,lineHeight:"16px"},children:"관리자"}),(0,x.jsx)(X.A,{variant:"caption",sx:{color:"text.secondary"},children:"csi9926@gmail.com"})]}),(0,x.jsx)(H.Ag,{})]})]})}var ne=t(6990),te=t(9828),re=t(8532),oe=t(2070);const ae=(0,W.Ay)(te.A)((e=>{let{theme:n}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0,borderBottom:"1px solid",borderColor:n.palette.divider,backgroundColor:n.palette.background.paper,boxShadow:"none",backgroundImage:"none",zIndex:n.zIndex.drawer+1,flex:"0 0 auto"}}));function se(e){let{children:n}=e;const t=(0,s.Zp)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(p.A,{sx:{height:"100vh",display:"flex",flexDirection:"column"},children:[(0,x.jsx)(ae,{children:(0,x.jsx)(re.A,{variant:"dense",disableGutters:!0,sx:{display:"flex",justifyContent:"space-between",width:"98%",p:"8px 12px"},children:(0,x.jsx)(ne.A,{variant:"text",size:"small","aria-label":"Back to MyPage",startIcon:(0,x.jsx)(oe.A,{}),component:"a",onClick:()=>t("/mypage"),sx:{display:{xs:"none",sm:"flex"}},children:"Back to MyPage"})})}),(0,x.jsxs)(p.A,{sx:{display:"flex",flexGrow:1},children:[(0,x.jsx)(ee,{}),(0,x.jsx)(p.A,{sx:{flexGrow:1,overflow:"auto",width:"calc(100% - 240px)"},children:n})]})]})})}const ie=()=>(0,x.jsx)(se,{children:(0,x.jsx)(s.sv,{})}),le=e=>{let{children:n}=e;const t="관리자"===sessionStorage.getItem("memberStatus"),r=(0,s.Zp)();return(0,o.useEffect)((()=>{t||(alert("권한이 없습니다!"),r(-1))}),[t,r]),t?n:null};var ce=t(3124);const pe=a().lazy((()=>Promise.all([t.e(729),t.e(658),t.e(420),t.e(424),t.e(517),t.e(515),t.e(247),t.e(605),t.e(43),t.e(650),t.e(538),t.e(765),t.e(282),t.e(855),t.e(673),t.e(825),t.e(642),t.e(722),t.e(871),t.e(3),t.e(622)]).then(t.bind(t,7622)))),de=a().lazy((()=>t.e(520).then(t.bind(t,520)))),me=a().lazy((()=>t.e(838).then(t.bind(t,3838)))),xe=a().lazy((()=>Promise.all([t.e(729),t.e(658),t.e(420),t.e(424),t.e(517),t.e(515),t.e(247),t.e(605),t.e(43),t.e(650),t.e(538),t.e(765),t.e(282),t.e(855),t.e(673),t.e(825),t.e(642),t.e(722),t.e(871),t.e(3),t.e(817)]).then(t.bind(t,4817)))),he=a().lazy((()=>Promise.all([t.e(729),t.e(658),t.e(420),t.e(424),t.e(517),t.e(515),t.e(247),t.e(605),t.e(43),t.e(650),t.e(538),t.e(765),t.e(282),t.e(855),t.e(673),t.e(825),t.e(642),t.e(722),t.e(871),t.e(3),t.e(167)]).then(t.bind(t,9548)))),ge=a().lazy((()=>t.e(191).then(t.bind(t,4905)))),ue=a().lazy((()=>t.e(385).then(t.bind(t,1385)))),fe=a().lazy((()=>t.e(773).then(t.bind(t,4773)))),_e=a().lazy((()=>Promise.all([t.e(729),t.e(658),t.e(420),t.e(424),t.e(517),t.e(515),t.e(247),t.e(605),t.e(43),t.e(650),t.e(538),t.e(765),t.e(282),t.e(855),t.e(673),t.e(825),t.e(642),t.e(722),t.e(871),t.e(3),t.e(239)]).then(t.bind(t,6239)))),be=a().lazy((()=>Promise.all([t.e(729),t.e(658),t.e(420),t.e(424),t.e(517),t.e(515),t.e(247),t.e(605),t.e(43),t.e(650),t.e(538),t.e(765),t.e(282),t.e(855),t.e(673),t.e(825),t.e(642),t.e(722),t.e(871),t.e(3),t.e(849)]).then(t.bind(t,1849)))),je=a().lazy((()=>Promise.all([t.e(729),t.e(658),t.e(420),t.e(424),t.e(517),t.e(515),t.e(247),t.e(605),t.e(43),t.e(650),t.e(538),t.e(765),t.e(282),t.e(855),t.e(673),t.e(825),t.e(642),t.e(722),t.e(871),t.e(3),t.e(992)]).then(t.bind(t,3992)))),we=a().lazy((()=>t.e(706).then(t.bind(t,1706)))),ye=a().lazy((()=>t.e(188).then(t.bind(t,8188)))),Ae=a().lazy((()=>t.e(136).then(t.bind(t,9136)))),ve=a().lazy((()=>t.e(116).then(t.bind(t,8116)))),Ne=()=>(0,x.jsx)("div",{className:"App",style:{backgroundColor:"#f5f5f5"},children:(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)(ce.A,{}),children:(0,x.jsxs)(s.BV,{children:[(0,x.jsxs)(s.qh,{path:"/",element:(0,x.jsx)(L,{}),children:[(0,x.jsx)(s.qh,{path:"",element:(0,x.jsx)(ge,{})}),(0,x.jsx)(s.qh,{path:"/signin",element:(0,x.jsx)(xe,{})}),(0,x.jsx)(s.qh,{path:"/signup",element:(0,x.jsx)(he,{})}),(0,x.jsx)(s.qh,{path:"/mypage",element:(0,x.jsx)(ue,{})}),(0,x.jsx)(s.qh,{path:"/notice",element:(0,x.jsx)(_e,{})}),(0,x.jsx)(s.qh,{path:"/postNotice",element:(0,x.jsx)(be,{})}),(0,x.jsx)(s.qh,{path:"/solution/:id",element:(0,x.jsx)(fe,{})}),(0,x.jsx)(s.qh,{path:"/list",element:(0,x.jsx)(pe,{})}),(0,x.jsx)(s.qh,{path:"/problem/:id",element:(0,x.jsx)(de,{})}),(0,x.jsx)(s.qh,{path:"/question/:id",element:(0,x.jsx)(me,{})}),(0,x.jsx)(s.qh,{path:"/notice/:id",element:(0,x.jsx)(je,{})}),(0,x.jsx)(s.qh,{path:"/manageUser/:id",element:(0,x.jsx)(ve,{})})]}),(0,x.jsxs)(s.qh,{path:"/",element:(0,x.jsx)(ie,{}),children:[(0,x.jsx)(s.qh,{path:"/manageUser",element:(0,x.jsx)(le,{children:(0,x.jsx)(we,{})})}),(0,x.jsx)(s.qh,{path:"/manageProb",element:(0,x.jsx)(le,{children:(0,x.jsx)(ye,{})})}),(0,x.jsx)(s.qh,{path:"/manageFeed",element:(0,x.jsx)(le,{children:(0,x.jsx)(Ae,{})})})]})]})})});var ke=t(4976),ze=t(5737),Se={};Se.styleTagTransform=R(),Se.setAttributes=E(),Se.insert=T().bind(null,"head"),Se.domAPI=C(),Se.insertStyleElement=$(),S()(ze.A,Se),ze.A&&ze.A.locals&&ze.A.locals;const Ie=document.getElementById("root");r.createRoot(Ie).render((0,x.jsx)(ke.Kd,{children:(0,x.jsx)(Ne,{})}))},5737:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(1601),o=t.n(r),a=t(6314),s=t.n(a)()(o());s.push([e.id,"@font-face {\n    font-family: 'Pretendard-Regular';\n    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');\n    font-weight: 400;\n    font-style: normal;\n}",""]);const i=s},579:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(1601),o=t.n(r),a=t(6314),s=t.n(a)()(o());s.push([e.id,'@charset "UTF-8";\n/* ---------- footer ---------- */\n.footer {\n  max-height: 240px;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  width: 100%;\n  background-color: #272727;\n  margin-top: 300px;\n  display: flex;\n  padding: 20px 0;\n}\n.footer :not(.logo, .info1, .info2, .footer_logout) {\n  color: rgba(255, 255, 255, 0.9254901961);\n}\n\n.mainPage .footer {\n  margin-top: 0; /* mainPage 클래스 안에 속해있을 때 margin-top 효과 제거 */\n}\n\n.footer_left {\n  width: 60%;\n}\n.footer_left .info {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  margin-left: 40px;\n}\n.footer_left .info * {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.footer_left .info * p {\n  margin-left: 12px;\n}\n.footer_left .logo {\n  width: 140px;\n  height: 100px;\n  font-size: 40px;\n  font-weight: bold;\n  margin-top: 28px;\n  color: rgba(255, 255, 255, 0.9254901961);\n}\n\n.footer_right {\n  height: 80%;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  margin-top: 12px;\n}\n.footer_right .sns {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 12px;\n  cursor: pointer;\n}\n.footer_right .sns *:first-child {\n  margin-right: 12px;\n}\n\n.info1,\n.info2 {\n  color: #c8c4c4;\n  opacity: 57%;\n}\n\n.about {\n  margin-bottom: 8px;\n}\n\n.footer_logout {\n  text-align: right;\n  margin: 8px 20px 0 0;\n  color: #d4d4d4;\n  cursor: pointer;\n}',""]);const i=s},7679:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(1601),o=t.n(r),a=t(6314),s=t.n(a)()(o());s.push([e.id,'@charset "UTF-8";\n.content_container {\n  height: calc(100vh - 200px); /* header, footer 높이 뺀 값 */\n}\n.content_container .manageuser_container {\n  display: flex;\n  height: calc(100vh + 100px);\n}\n.content_container .manageuser_container .userlist_wrapper {\n  flex: 9;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n  background-color: #e9e9eb;\n  padding-bottom: 40px;\n  overflow-y: auto;\n}\n.content_container .manageuser_container .userlist_wrapper::-webkit-scrollbar {\n  width: 10px;\n}\n.content_container .manageuser_container .userlist_wrapper::-webkit-scrollbar-thumb {\n  background: #c0c0c0; /* 스크롤바 색상 */\n  border-radius: 10px; /* 스크롤바 둥근 테두리 */\n}\n.content_container .manageuser_container .userlist_wrapper::-webkit-scrollbar-track {\n  background: rgba(231, 230, 246, 0.5882352941); /*스크롤바 뒷 배경 색상*/\n}\n.content_container .manageuser_container .userlist_wrapper .list_container {\n  width: 72%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper {\n  background-color: #f8f8f8;\n  border-top: solid #acacac 1px;\n  border-bottom: solid #acacac 1px;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper {\n  background-color: #ffffff;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper button {\n  height: 28px;\n  width: 80px;\n  border: solid 1px;\n  border-radius: 20px;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  margin-left: 8px;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .info_btn {\n  background-color: #434349;\n  opacity: 80%;\n  border-color: #434349;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .info_btn:hover {\n  background-color: #434349;\n  opacity: 95%;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_new {\n  color: #ffb862;\n  font-weight: 600;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_old {\n  color: rgba(50, 83, 255, 0.768627451);\n  font-weight: 600;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_manage {\n  color: white;\n  background-color: #434349;\n  padding: 4px 0px;\n  font-size: 15px;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_name {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.7490196078);\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_stunum,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_studep {\n  color: rgba(0, 0, 0, 0.7490196078);\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper {\n  display: inherit;\n  height: 40px;\n  align-items: center;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_state,\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_state_new,\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_state_old,\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_state_manage,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_new,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_old,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_manage {\n  flex: 1.5;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_name,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_name {\n  flex: 2;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_stunum,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_stunum {\n  flex: 2;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_studep,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_studep {\n  flex: 2;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_none,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_none {\n  flex: 2;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}',""]);const i=s},4824:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(1601),o=t.n(r),a=t(6314),s=t.n(a)()(o());s.push([e.id,'@charset "UTF-8";\n/* -----네비게이션바----- */\n.logout,\n.userId,\n.userLevel {\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px 30px;\n  color: white;\n  border: solid white;\n  border-radius: 10px;\n  font-family: var(--Font1);\n}\n\n.logout {\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #ffffff;\n  margin: 15px 50px 0px auto;\n  color: #555555;\n  font-weight: bold;\n  font-size: 17px;\n  border: solid 3px #7d7d7d;\n  border-radius: 80px;\n}\n.logout:hover {\n  background-color: #414141;\n  border-color: #414141;\n  color: #ffffff;\n}\n\n.container > .btns > .userId {\n  width: -moz-fit-content;\n  width: fit-content;\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: bold;\n  background-color: rgba(90, 44, 218, 0.8235294118);\n  border-radius: 80px;\n}\n.container > .btns > .userId:hover {\n  background-color: rgba(120, 119, 119, 0.8549019608);\n}\n\n.userLevel {\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #000000;\n  color: #ffffff;\n  padding: 5px 10px;\n}\n\n.btns {\n  display: flex;\n  margin: 20px 60px 0px auto;\n}\n\n.container {\n  display: flex;\n  flex-direction: column; /* 수직으로 배치 */\n  align-items: center;\n  background-color: #ffffff;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.navbar {\n  display: flex;\n  width: 90%;\n  margin: 0px auto;\n  align-items: center;\n}\n.navbar * {\n  display: flex;\n}\n.navbar .logo {\n  width: 120px;\n  height: 80px;\n  margin-right: 20px;\n  font-size: 40px;\n  font-weight: bold;\n  color: rgba(28, 28, 29, 0.7647058824);\n  cursor: pointer;\n}\n\n.menu1,\n.menu2,\n.menu3 {\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 26px;\n  margin-left: 56px;\n  margin-bottom: 20px;\n  font-weight: bold;\n  color: #686868;\n}\n\n.menu1:hover {\n  border-radius: 5px;\n  color: #000000;\n}\n\n.menu3 {\n  padding: 20px 0;\n  padding-bottom: 0;\n}\n\n.noticeAlertBtn {\n  background-color: rgb(255, 89, 89);\n  border: solid rgb(255, 89, 89);\n  width: 23px;\n  height: 23px;\n  padding: 8px;\n  border-radius: 40px;\n  color: white;\n  font-weight: 600;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 5px;\n}',""]);const i=s},6222:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(1601),o=t.n(r),a=t(6314),s=t.n(a)()(o());s.push([e.id,".dropdown-content {\n  position: absolute;\n  top: 60px;\n  right: 30px;\n  width: 240px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 0;\n  background-color: #fefdfd;\n  border: solid 2px rgb(200, 200, 200);\n  border-radius: 4px;\n  padding-top: 16px;\n  z-index: 999;\n  font-family: var(--Font1);\n}\n.dropdown-content .memberName {\n  color: rgb(37, 37, 37);\n  font-size: 17px;\n  margin: 16px 0;\n  font-size: 20px;\n  font-weight: bold;\n}\n.dropdown-content .navbar_bottom {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  width: 100%;\n  font-size: 14px;\n  color: #000000;\n  opacity: 75%;\n  border-top: solid 3px #d7d6d6;\n}\n.dropdown-content .navbar_bottom * {\n  width: 100%;\n  padding: 10px 8px;\n}\n.dropdown-content .navbar_bottom .btn_mypage {\n  border-right: solid 3px #d7d6d6;\n}\n\n.navbarInfo {\n  width: 30%;\n  text-align: left;\n}\n.navbarInfo * {\n  font-size: 15px;\n  color: #808080;\n}\n.navbarInfo .memberScore {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.navbarInfo .memberScore p {\n  color: #04ca00;\n  font-weight: bold;\n  margin-left: 8px;\n}\n\n.userImage {\n  width: 100px;\n  height: 100px;\n  background-color: rgb(212, 212, 212);\n  border-radius: 8px;\n  margin: 8px;\n}\n\n.btn_mypage,\n.btn_top_logout {\n  font-size: 13px;\n}\n.btn_mypage :hover,\n.btn_top_logout :hover {\n  color: #000000;\n  font-weight: bold;\n  background-color: #ebebeb;\n}",""]);const i=s},1684:(e,n,t)=>{var r=t(5072),o=t.n(r),a=t(7825),s=t.n(a),i=t(7659),l=t.n(i),c=t(5056),p=t.n(c),d=t(540),m=t.n(d),x=t(1113),h=t.n(x),g=t(7679),u={};u.styleTagTransform=h(),u.setAttributes=p(),u.insert=l().bind(null,"head"),u.domAPI=s(),u.insertStyleElement=m(),o()(g.A,u),g.A&&g.A.locals&&g.A.locals},1594:e=>{e.exports=React},5206:e=>{e.exports=ReactDOM},3719:e=>{e.exports=axios}},e=>{e.O(0,[729,658,420,424,517,515,247,605,43,650,538,765,282,855,673,825,642,722,871,3],(()=>e(e.s=2980))),e.O()}]);