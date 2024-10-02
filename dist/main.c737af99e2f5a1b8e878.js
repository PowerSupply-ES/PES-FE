"use strict";(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[792],{8807:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(3719),r=n.n(o);const i=async e=>{console.log("logout!!");try{const t=await r().post("/api/logout",{headers:{"Content-Type":"application/json"}});sessionStorage.clear(),localStorage.clear(),alert(t.data.message),e("/"),window.location.reload()}catch(t){r().isAxiosError(t)?t.response?(console.error("로그아웃 실패:",t.response.status,t.response.statusText),alert(`로그아웃 실패: 서버 응답 에러 (${t.response.status})`),e("/")):t.request?(console.error("로그아웃 실패: 요청이 실패했습니다."),alert("로그아웃 실패: 서버 응답 없음.")):(console.error("로그아웃 실패:",t.message),alert("로그아웃 실패: 요청 설정 에러.")):(console.error("로그아웃 실패 (일반 에러):",t.message),alert("로그아웃 실패: 알 수 없는 오류가 발생했습니다."))}}},8398:(e,t,n)=>{n.d(t,{IU:()=>T,rm:()=>w,Ag:()=>$,w2:()=>a});var o=n(1594),r=n(7767),i=(n(1684),n(4848));const a=e=>{let{memberData:t}=e;const n=(0,r.Zp)();return(0,i.jsx)(i.Fragment,{children:t.map((e=>(0,i.jsxs)("ul",{className:"list_wrapper",children:[(0,i.jsx)("li",{className:"신입생"===e.memberStatus?"title_state_new":"재학생"===e.memberStatus?"title_state_old":"관리자"===e.memberStatus?"title_state_manage":"",children:e.memberStatus}),(0,i.jsx)("li",{className:"title_name",children:e.memberName}),(0,i.jsx)("li",{className:"title_stunum",children:e.memberId}),(0,i.jsx)("li",{className:"title_studep",children:e.memberMajor}),(0,i.jsx)("li",{className:"title_none",children:(0,i.jsx)("button",{className:"info_btn",onClick:()=>{return t=e.memberId,sessionStorage.setItem("memberId",t),void n(`/manageUser/${t}`);var t},children:"정보"})})]},e.memberId)))})};var s=n(7465),l=n(4090),c=n(7211),d=n(7873),p=n(2241),x=n(815),g=n(785),f=n(6204),h=n(357),b=n(4007),u=n(5948);const m=[{text:"회원 관리",icon:(0,i.jsx)(h.A,{}),path:"/manageUser"},{text:"문제 관리",icon:(0,i.jsx)(b.A,{}),path:"/manageProb"},{text:"피드백 관리",icon:(0,i.jsx)(f.A,{}),path:"/manageFeed"}],_=[{text:"Home",icon:(0,i.jsx)(g.A,{}),path:"/"},{text:"About",icon:(0,i.jsx)(u.A,{})}];function w(){const e=(0,r.Zp)(),t=(0,r.zy)();return(0,i.jsxs)(x.A,{sx:{flexGrow:1,p:1,justifyContent:"space-between"},children:[(0,i.jsx)(s.A,{dense:!0,children:m.map(((n,o)=>(0,i.jsx)(l.Ay,{disablePadding:!0,sx:{display:"block"},children:(0,i.jsxs)(c.A,{selected:t.pathname===n.path,sx:{minHeight:52,px:2},onClick:()=>{n.path&&e(n.path)},children:[(0,i.jsx)(d.A,{children:n.icon}),(0,i.jsx)(p.A,{primary:n.text})]})},o)))}),(0,i.jsx)(s.A,{dense:!0,children:_.map(((n,o)=>(0,i.jsx)(l.Ay,{disablePadding:!0,sx:{display:"block"},children:(0,i.jsxs)(c.A,{selected:t.pathname===n.path,sx:{minHeight:52,px:2},onClick:()=>{n.path&&e(n.path)},children:[(0,i.jsx)(d.A,{children:n.icon}),(0,i.jsx)(p.A,{primary:n.text})]})},o)))})]})}var y=n(8807),j=n(1848),k=n(1347),v=n(1543),A=n(8708),z=n(3896),N=n(1431),C=n(2249),S=n(6721),I=n(7130),P=n(5174);const E=(0,j.Ay)(z.A)({margin:"2px 0"});function $(){const e=(0,r.Zp)(),[t,n]=(0,o.useState)(null),a=Boolean(t),s=()=>{n(null)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T,{"aria-label":"Open menu",onClick:e=>{n(e.currentTarget)},sx:{borderColor:"transparent"},children:(0,i.jsx)(P.A,{})}),(0,i.jsxs)(A.A,{anchorEl:t,id:"menu",open:a,onClose:s,onClick:s,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},sx:{[`& .${C.A.root}`]:{padding:"4px"},[`& .${N.A.root}`]:{padding:0},[`& .${k.A.root}`]:{margin:"4px -4px"}},children:[(0,i.jsx)(E,{onClick:s,children:"Add another account"}),(0,i.jsx)(v.A,{}),(0,i.jsxs)(E,{onClick:()=>(0,y.A)(e),sx:{[`& .${S.A.root}`]:{ml:"auto",minWidth:0}},children:[(0,i.jsx)(p.A,{children:"Logout"}),(0,i.jsx)(d.A,{children:(0,i.jsx)(I.A,{fontSize:"small"})})]})]})]})}var q=n(2970),B=n(5723),F=n(1641);function T(e){let{showBadge:t=!1,...n}=e;return(0,i.jsx)(q.A,{color:"error",variant:"dot",invisible:!t,sx:{[`& .${B.A.badge}`]:{right:2,top:2}},children:(0,i.jsx)(F.A,{size:"small",...n})})}},2980:(e,t,n)=>{var o=n(1594),r=n.n(o),i=n(5338),a=n(7767),s=n(5072),l=n.n(s),c=n(7825),d=n.n(c),p=n(7659),x=n.n(p),g=n(5056),f=n.n(g),h=n(540),b=n.n(h),u=n(1113),m=n.n(u),_=n(6222),w={};w.styleTagTransform=m(),w.setAttributes=f(),w.insert=x().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=b(),l()(_.A,w),_.A&&_.A.locals&&_.A.locals;var y=n(4824),j={};j.styleTagTransform=m(),j.setAttributes=f(),j.insert=x().bind(null,"head"),j.domAPI=d(),j.insertStyleElement=b(),l()(y.A,j),y.A&&y.A.locals&&y.A.locals;var k=n(579),v={};v.styleTagTransform=m(),v.setAttributes=f(),v.insert=x().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=b(),l()(k.A,v),k.A&&k.A.locals&&k.A.locals;var A=n(4519),z=n(1607),N=n(1643);var C=n(1250),S=n(5193),I=n(4848);const P=()=>{const{index:e,toggleTab:t}=(()=>{const e=(0,a.zy)(),t=(0,a.Zp)(),[n,r]=(0,o.useState)(0);return(0,o.useEffect)((()=>{"/"===e.pathname?r(0):"/list"===e.pathname?r(1):"/notice"===e.pathname?r(2):r(0)}),[e.pathname,n]),{index:n,toggleTab:e=>{r(e),console.log("value = ",e),1===e?t("/list"):2===e&&t("/notice")}}})();return(0,I.jsxs)(C.NP,{theme:S.w4,children:[(0,I.jsx)(A.Ay,{}),(0,I.jsx)(S.fM,{children:(0,I.jsx)(z.A,{"aria-label":"Pipeline",value:e,onChange:(e,n)=>{if(null!=n){const e="number"==typeof n?n:parseInt(n,10);isNaN(e)||t(e)}},children:(0,I.jsxs)(S.J,{index:e,children:[(0,I.jsx)(N.A,{value:1,children:"문제"}),(0,I.jsx)(N.A,{value:2,children:"공지사항"})]})})})]})},E=()=>{const e=(0,a.Zp)();return(0,I.jsxs)("div",{className:"container",children:[(0,I.jsx)("a",{className:"logout",href:"/signin",children:"로그인"}),(0,I.jsxs)("div",{className:"navbar",children:[(0,I.jsx)("p",{className:"logo",onClick:()=>e("/"),children:"PES"}),(0,I.jsx)(P,{})]})]})};var $=n(9197),q=n(8807),B=n(3719),F=n.n(B);const T=()=>{const e=(0,a.Zp)(),[t,n]=(0,o.useState)(!1),[r,i]=(0,o.useState)({memberName:"",memberScore:0,memberStatus:"",memberGen:0,hasNewNotices:!1});return(0,o.useEffect)((()=>{(async e=>{let{navigate:t,setMemberData:n}=e;const o=sessionStorage.getItem("memberEmail");try{const e=(await F().get("/api/exp",{params:{memberEmail:o}})).data;n(e),sessionStorage.setItem("memberName",e.memberName),sessionStorage.setItem("memberStatus",e.memberStatus),sessionStorage.setItem("hasNewNotices",e.hasNewNotices.toString()),console.log("hasNewNotices = ",e.hasNewNotices)}catch(e){F().isAxiosError(e)?e.response?403===e.response.status?(alert("로그인이 만료됐습니다!"),sessionStorage.clear(),localStorage.clear(),t("/signin")):console.error("데이터 가져오기 실패:",e.response.status,e.response.statusText):e.request?console.error("데이터 가져오기 실패: 요청이 실패했습니다."):console.error("데이터 가져오기 실패:",e.message):console.error("데이터 가져오기 실패:",e.message)}})({navigate:e,setMemberData:i})}),[e]),(0,I.jsxs)("div",{className:"container",children:[(0,I.jsx)("div",{className:"btns",children:(0,I.jsxs)("button",{className:"userId",onClick:()=>{n((e=>!e))},children:[r.memberName,"님",t&&(0,I.jsxs)("div",{className:"dropdown-content",children:[(0,I.jsx)($.d$e,{size:60,style:{color:"lightgray"}}),(0,I.jsxs)("div",{className:"memberName",children:[r.memberName,"님"]}),(0,I.jsxs)("div",{className:"navbarInfo",children:[(0,I.jsx)("div",{className:"memberStatus",children:r.memberStatus}),(0,I.jsxs)("div",{className:"memberGen",children:[r.memberGen,"기"]}),(0,I.jsxs)("div",{className:"memberScore",children:["현재",(0,I.jsx)("p",{children:r.memberScore}),"점"]})]}),(0,I.jsxs)("div",{className:"navbar_bottom",children:[(0,I.jsx)("a",{className:"btn_mypage",href:"/mypage",children:"마이페이지"}),(0,I.jsx)("a",{onClick:()=>{console.log("로그아웃"),(0,q.A)(e)},className:"btn_top_logout",children:"로그아웃"})]})]})]})}),(0,I.jsxs)("div",{className:"navbar",children:[(0,I.jsx)("p",{className:"logo",onClick:()=>e("/"),children:"PES"}),(0,I.jsx)(P,{})]})]})};var D=n(8027),U=n(6512),Z=n(1735);const G=()=>{const e=(0,a.Zp)(),t=sessionStorage.getItem("status");return(0,I.jsxs)("div",{className:"footer",children:[(0,I.jsxs)("div",{className:"footer_left",children:[(0,I.jsx)("p",{className:"logo",children:"PES"}),(0,I.jsxs)("div",{className:"info",children:[(0,I.jsxs)("div",{className:"phone",children:[(0,I.jsx)(U.lSi,{size:24})," ",(0,I.jsx)("p",{children:"123qpq@naver.com"})]}),(0,I.jsxs)("div",{className:"address",children:[(0,I.jsx)(D.vq8,{size:20}),(0,I.jsx)("p",{children:"경북 경산시 대학로 280 생산기술연구원 G15 213호"})]})]})]}),(0,I.jsxs)("div",{className:"footer_right",children:[(0,I.jsx)("p",{className:"about",children:"About The Club"}),(0,I.jsx)("p",{className:"info1",children:"영남대학교 로봇공학과 동아리 PowerSupply의"}),(0,I.jsx)("p",{className:"info2",children:"교육시스템 개발팀 PES"}),(0,I.jsxs)("div",{className:"sns",children:[(0,I.jsx)("a",{href:"https://www.instagram.com/team.pes23/",target:"_blank",rel:"noopener noreferrer",children:(0,I.jsx)(Z.cli,{size:36})}),(0,I.jsx)("a",{href:"https://github.com/PowerSupply-ES",target:"_blank",rel:"noopener noreferrer",children:(0,I.jsx)(D.hL4,{size:30})})]}),t?(0,I.jsx)("div",{onClick:()=>(0,q.A)(e),className:"footer_logout",children:"로그아웃"}):(0,I.jsx)(I.Fragment,{})]})]})},H=()=>{const e=sessionStorage.getItem("status");return(0,I.jsxs)("div",{children:[e?(0,I.jsx)(T,{}):(0,I.jsx)(E,{}),(0,I.jsx)(a.sv,{}),(0,I.jsx)(G,{})]})};var L=n(8398),M=n(1848),O=n(675),R=n(4172),J=n(9419),W=n(8161),X=n(815),K=n(5932);const V=(0,M.Ay)(R.Ay)({width:240,flexShrink:0,boxSizing:"border-box",mt:10,[`& .${J.A.paper}`]:{width:240,boxSizing:"border-box"}});function Q(){return(0,I.jsxs)(V,{variant:"permanent",sx:{display:{xs:"none",md:"block"},[`& .${J.A.paper}`]:{backgroundColor:"background.paper"}},children:[(0,I.jsx)(W.A,{sx:{display:"flex",mt:"40px",p:1.5}}),(0,I.jsx)(L.rm,{}),(0,I.jsxs)(X.A,{direction:"row",sx:{p:2,gap:1,alignItems:"center",borderTop:"1px solid",borderColor:"divider"},children:[(0,I.jsx)(O.A,{sizes:"small",alt:"Riley Carter",sx:{width:36,height:36}}),(0,I.jsxs)(W.A,{sx:{mr:"auto"},children:[(0,I.jsx)(K.A,{variant:"body2",sx:{fontWeight:500,lineHeight:"16px"},children:"관리자"}),(0,I.jsx)(K.A,{variant:"caption",sx:{color:"text.secondary"},children:"csi9926@gmail.com"})]}),(0,I.jsx)(L.Ag,{})]})]})}var Y=n(6990),ee=n(9828),te=n(8532),ne=n(2070);const oe=(0,M.Ay)(ee.A)((e=>{let{theme:t}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0,borderBottom:"1px solid",borderColor:t.palette.divider,backgroundColor:t.palette.background.paper,boxShadow:"none",backgroundImage:"none",zIndex:t.zIndex.drawer+1,flex:"0 0 auto"}}));function re(e){let{children:t}=e;const n=(0,a.Zp)();return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(W.A,{sx:{height:"100vh",display:"flex",flexDirection:"column"},children:[(0,I.jsx)(oe,{children:(0,I.jsx)(te.A,{variant:"dense",disableGutters:!0,sx:{display:"flex",justifyContent:"space-between",width:"98%",p:"8px 12px"},children:(0,I.jsx)(Y.A,{variant:"text",size:"small","aria-label":"Back to MyPage",startIcon:(0,I.jsx)(ne.A,{}),component:"a",onClick:()=>n("/mypage"),sx:{display:{xs:"none",sm:"flex"}},children:"Back to MyPage"})})}),(0,I.jsxs)(W.A,{sx:{display:"flex",flexGrow:1},children:[(0,I.jsx)(Q,{}),(0,I.jsx)(W.A,{sx:{flexGrow:1,overflow:"auto",width:"calc(100% - 240px)"},children:t})]})]})})}const ie=()=>(0,I.jsx)(re,{children:(0,I.jsx)(a.sv,{})}),ae=e=>{let{children:t}=e;const n="관리자"===sessionStorage.getItem("memberStatus"),r=(0,a.Zp)();return(0,o.useEffect)((()=>{n||(alert("권한이 없습니다!"),r(-1))}),[n,r]),n?t:null},se=r().lazy((()=>Promise.all([n.e(490),n.e(997),n.e(224),n.e(472),n.e(500),n.e(420),n.e(424),n.e(517),n.e(515),n.e(247),n.e(43),n.e(650),n.e(546),n.e(712),n.e(282),n.e(855),n.e(673),n.e(825),n.e(642),n.e(722),n.e(765),n.e(871),n.e(3),n.e(622)]).then(n.bind(n,7622)))),le=r().lazy((()=>n.e(520).then(n.bind(n,520)))),ce=r().lazy((()=>n.e(838).then(n.bind(n,3838)))),de=r().lazy((()=>Promise.all([n.e(490),n.e(997),n.e(224),n.e(472),n.e(500),n.e(420),n.e(424),n.e(517),n.e(515),n.e(247),n.e(43),n.e(650),n.e(546),n.e(712),n.e(282),n.e(855),n.e(673),n.e(825),n.e(642),n.e(722),n.e(765),n.e(871),n.e(3),n.e(817)]).then(n.bind(n,4817)))),pe=r().lazy((()=>Promise.all([n.e(490),n.e(997),n.e(224),n.e(472),n.e(500),n.e(420),n.e(424),n.e(517),n.e(515),n.e(247),n.e(43),n.e(650),n.e(546),n.e(712),n.e(282),n.e(855),n.e(673),n.e(825),n.e(642),n.e(722),n.e(765),n.e(871),n.e(3),n.e(167)]).then(n.bind(n,9548)))),xe=r().lazy((()=>n.e(416).then(n.bind(n,4341)))),ge=r().lazy((()=>Promise.all([n.e(417),n.e(385)]).then(n.bind(n,1385)))),fe=r().lazy((()=>n.e(773).then(n.bind(n,4773)))),he=r().lazy((()=>Promise.all([n.e(490),n.e(997),n.e(224),n.e(472),n.e(500),n.e(420),n.e(424),n.e(517),n.e(515),n.e(247),n.e(43),n.e(650),n.e(546),n.e(712),n.e(282),n.e(855),n.e(673),n.e(825),n.e(642),n.e(722),n.e(765),n.e(871),n.e(3),n.e(239)]).then(n.bind(n,6239)))),be=r().lazy((()=>Promise.all([n.e(490),n.e(997),n.e(224),n.e(472),n.e(500),n.e(420),n.e(424),n.e(517),n.e(515),n.e(247),n.e(43),n.e(650),n.e(546),n.e(712),n.e(282),n.e(855),n.e(673),n.e(825),n.e(642),n.e(722),n.e(765),n.e(871),n.e(3),n.e(849)]).then(n.bind(n,1849)))),ue=r().lazy((()=>Promise.all([n.e(490),n.e(997),n.e(224),n.e(472),n.e(500),n.e(420),n.e(424),n.e(517),n.e(515),n.e(247),n.e(43),n.e(650),n.e(546),n.e(712),n.e(282),n.e(855),n.e(673),n.e(825),n.e(642),n.e(722),n.e(765),n.e(871),n.e(3),n.e(992)]).then(n.bind(n,3992)))),me=r().lazy((()=>n.e(706).then(n.bind(n,1706)))),_e=r().lazy((()=>n.e(188).then(n.bind(n,8188)))),we=r().lazy((()=>n.e(136).then(n.bind(n,9136)))),ye=r().lazy((()=>Promise.all([n.e(417),n.e(116)]).then(n.bind(n,8116)))),je=()=>(0,I.jsx)("div",{className:"App",children:(0,I.jsx)(o.Suspense,{fallback:(0,I.jsx)("div",{children:"Loading..."}),children:(0,I.jsxs)(a.BV,{children:[(0,I.jsxs)(a.qh,{path:"/",element:(0,I.jsx)(H,{}),children:[(0,I.jsx)(a.qh,{path:"",element:(0,I.jsx)(xe,{})}),(0,I.jsx)(a.qh,{path:"/signin",element:(0,I.jsx)(de,{})}),(0,I.jsx)(a.qh,{path:"/signup",element:(0,I.jsx)(pe,{})}),(0,I.jsx)(a.qh,{path:"/mypage",element:(0,I.jsx)(ge,{})}),(0,I.jsx)(a.qh,{path:"/notice",element:(0,I.jsx)(he,{})}),(0,I.jsx)(a.qh,{path:"/noticePost",element:(0,I.jsx)(be,{})}),(0,I.jsx)(a.qh,{path:"/solution/:id",element:(0,I.jsx)(fe,{})}),(0,I.jsx)(a.qh,{path:"/list",element:(0,I.jsx)(se,{})}),(0,I.jsx)(a.qh,{path:"/problem/:id",element:(0,I.jsx)(le,{})}),(0,I.jsx)(a.qh,{path:"/question/:id",element:(0,I.jsx)(ce,{})}),(0,I.jsx)(a.qh,{path:"/notice/:id",element:(0,I.jsx)(ue,{})}),(0,I.jsx)(a.qh,{path:"/manageUser/:id",element:(0,I.jsx)(ye,{})})]}),(0,I.jsxs)(a.qh,{path:"/",element:(0,I.jsx)(ie,{}),children:[(0,I.jsx)(a.qh,{path:"/manageUser",element:(0,I.jsx)(ae,{children:(0,I.jsx)(me,{})})}),(0,I.jsx)(a.qh,{path:"/manageProb",element:(0,I.jsx)(ae,{children:(0,I.jsx)(_e,{})})}),(0,I.jsx)(a.qh,{path:"/manageFeed",element:(0,I.jsx)(ae,{children:(0,I.jsx)(we,{})})})]})]})})});var ke=n(4976),ve=n(5737),Ae={};Ae.styleTagTransform=m(),Ae.setAttributes=f(),Ae.insert=x().bind(null,"head"),Ae.domAPI=d(),Ae.insertStyleElement=b(),l()(ve.A,Ae),ve.A&&ve.A.locals&&ve.A.locals;const ze=document.getElementById("root");i.createRoot(ze).render((0,I.jsx)(ke.Kd,{children:(0,I.jsx)(je,{})}))},5546:(e,t,n)=>{n.d(t,{J:()=>i,L:()=>r});var o=n(1250);const r=o.Ay.div`
  
  .list_wrapper {
    display: flex;
    
  }
  .list_container {
    margin-right: 5%;
    width: 60%;
  }

  .ranking_container {
    width: 20%;
  }

  .container_header {
    margin-bottom: 20px;
    font-weight: bold;
    align-items: center;
    font-size: 30px;
    display: flex;
    width: 100%;
  }

  .student_container {
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;
    font-size: 18px;
    display: flex;
    width: 100%;
  }

  .student_button {
    width: 48%;
    height: fit-content;
    padding: 7px 30px;
    box-shadow: rgb(204, 201, 201) 1px 1px;
    border-radius: 8px;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
  }

  /* 클릭된 버튼 스타일 */
  .student_button_active {
    background-color: #cccccc;
    color: #fff;
  }

  .select_box {
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    height: 40px;
    display: flex;
    width: 50%;
  }

  .ranking-list {
    max-height: 400px;
    overflow-y: auto;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }
  .problem_wrapper {
    height: fit-content;
    background-color: white;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }
`,i=o.Ay.div`
  margin-bottom: 1px;
  padding: 0 10px;
  align-items: center;
  font-size: 18px;
  height: 40px;
  display: flex;
  background-color: white;
  width: 100%;
  border-radius: 8px;

  .ranking_id {
    width: 20%;
    margin-right: 2px;
  }
  .member_name {
    text-align: left;
    flex: 1 1 0%;
  }
  .score {
    width: 20%;
  }
`},8246:(e,t,n)=>{n.d(t,{f:()=>o});const o=n(1250).Ay.div`
    .problem_header {
        width: 80%;
        height: 78px;
        display: flex;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 16px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        justify-content: space-between;
    }
    .button_group{
        width: 80%;
        margin: 0 auto 32px;
        justify-content: right;
    }
    .problem_group {
        display: flex;
        align-items: center;
    }
    .problem_id {
        width: 80px;
        height: fit-content;
        font-size: 19px;

        padding: 8px 0;
        font-weight: bold;
        // background-color: #ffffff;
        background-color:#3B3B3B;
        color : #ffffff;
        border:solid 3px #3B3B3B; opacity:80%;
        border-radius : 50px;
        text-align: center;
        margin-right: 20px;
        box-shadow: 1px 3px #CCC9C9;
    }
    .header_title {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin-right: 8px;
    }
    .header_score {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin-left: 20px;
    }
    .header_answer_state {
        width: fit-content;
        padding: 8px 16px;
        // color: ${e=>"success"===e.state?"#5094F9":"fail"===e.state?"rgba(235, 52, 52, 0.8)":"#6A6B6F"};
        // background-color: #ffffff;

        /* border: solid 3px ${e=>"success"===e.state?"#5094F9":"fail"===e.state?"rgba(235, 52, 52, 0.8)":"#DEDEDE"};
        background-color: ${e=>"success"===e.state?"#0025cae0; opacity:70%;":"fail"===e.state?"rgb(255, 53, 53, 0.9)":"#3B3B3B; opacity:70%"}; */
        
        color: ${e=>"success"===e.state?"#0025cae0; opacity:70%;":"fail"===e.state?"rgb(255, 53, 53, 0.9)":"#3B3B3B; opacity:70%"};
        border: solid 3px ${e=>"success"===e.state?"#0025cae0; opacity:70%;":"fail"===e.state?"rgb(246, 73, 73, 0.9)":"#3B3B3B; opacity:70%"};

        font-size: 19px;
        font-weight: bold;
        margin-right: 10px;
        border-radius : 50px;
        box-sizing: border-box;
        box-shadow: 1px 2px #CCC9C9;
    }
    .description {
        width: 1376px;
        font-size: 20px;
        align-items: center;
        margin: auto;
        background-color: beige;
        text-align: left;
    }

    .problem_section{
        width:80%;
        height:100vh;
        margin: 60px auto 0;
        display: flex;
        justify-content: space-between;
        margin-bottom:20px;
    }

    &.problem_header_section {
        z-index: 998;
        position: relative;
    }

    .code_section{
        flex: 5;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: auto 0;
        height:100%;
    }

    .content_container {
        width: 40%;
        height: auto;
        justify-content: center;
        flex: 4;

        display: flex;
        flex-direction: column;
        margin-right: 60px;
        // background-color: #ffffff;
        // border-radius : 20px;
        // box-shadow: 1px 3px #CCC9C9;
        //   overflow-y: auto;

    }
    .content_container > .top,
    .content_container > .bottom{
        background-color: #ffffff;
        border-radius : 20px;
        box-shadow: 1px 3px #CCC9C9;
        overflow-y: auto;
        padding:12px;
        width: 100%;

        min-height: 240px;
    }

    // 스크롤바 디자인
    ::-webkit-scrollbar {
    width: 10px;  
    }
    ::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    }
    ::-webkit-scrollbar-track {
    background: #e7e6f696;  /*스크롤바 뒷 배경 색상*/
    }

    .content_container > .top{

        text-align: left;
        margin: 0 auto 4px;
        border-bottom: solid 1px;
        height: 45%;
    }
    .content_container > .bottom{
        height: 55%;

    }
    .content_container > .bottom > .sample_inputs {
        width: 90%;
        display:flex;
        flex-direction:column;
        align-items: start;

        text-align: left;
        margin: auto;
    }
    .underline
    {
        font-size:18px;
        text-decoration:underline;
        text-underline-offset : 6px;
        text-decoration-color: #5094F9; opacity:70%;

        color:#000000;
     
        font-size: 19px;
        // font-weight: bold;
        margin-bottom: 12px;
    }
    .top > .prob_text{
        font-weight:bold;
    }
    .sample_inputs > .input_text{
        font-weight:bold;
    }
    .sample_outputs > .output_text{
        font-weight:bold;
    }

    // input요소들 중 순서에 따라 색깔 부여
    .input_text > *:nth-child(1),
    .output_text > *:nth-child(1){
        color: rgb(124, 124, 124);
    }
    .input_text > *:nth-child(2n),
    .output_text > *:nth-child(2n){
        color: #a1a1ff;
    }
    .input_text > *:nth-child(3n),
    .output_text > *:nth-child(3n){
        color: #d783ff;
    }

    .content_container > .bottom > .sample_outputs {
        width: 90%;
        text-align: left;
        margin: auto;
    }
    .sample_outputs > .underline{
        margin-top:40px;
    }


    .code_input {
        width: 100%;
        height: 100%;
        min-height: 564px;
        font-size: 18px;
        // color: #ffffff;
        display: flex;
        justify-content: center;
        background-color: #3e3e3e;
        overflow-y: auto;

        border-radius : 20px;
        padding: 16px 8px 0 12px;
        box-shadow: 1px 3px #CCC9C9;
        box-sizing: border-box;
    }
    .submit_button {
        width: fit-content;
        height: fit-content;
        background-color: #9747FF;
        color: white;
        font-size: 20px;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: center;
        margin: 80px auto 40px;
        padding: 4px 36px;
        align-items: center;
        cursor: pointer;
        box-shadow: 1px 3px #CCC9C9;
    }
    .submit_button.disabled {
        background-color: #dedede;
        cursor: not-allowed;
    }

    .code_container {
        width: 1376px;
        height: auto;
        display: flex;
        align-items: center;
        margin: auto;
        border-radius: 5px;
        background-color: beige;
        font-size: 20px;
        white-space: pre-line; 
    }
   
    .title {
        width: fit-content;
        display: flex;
        font-size: 24px;
        font-weight: bold;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .result_container {
        width: 1376px;
    height: auto;
    background-color: #eee;
    margin: 0 auto;
    margin-bottom: 20px;
    font-size: 20px;
    white-space: pre-line; 
    text-align: left;
    }
    .loading {
        height: 1500px
    }
    .detail_container {
        width: 100%;
        height: auto;
        justify-content: center;
        text-align: left;
        margin-top: 40px;
    }
    .detail_content {
        min-height: 150px;
        text-align: left;
        padding: 16px 8px 0 12px;
        box-shadow: 1px 3px #CCC9C9;
        box-sizing: border-box;
        background-color: rgba(109, 99, 228, 0.3);
        font-size: 20px;
        border-radius: 15px;
    }
`},6553:(e,t,n)=>{n.d(t,{k:()=>o});const o=n(1250).Ay.div`
  .code_question_container {
    width: 95%;
    display: flex;
    justify-content: center;
    gap: 5%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .code_container {
    width: 40%;
    height: 564px;
    font-size: 20px;
  }
  .question_container {
    width: 40%;
  }
  .question_layout {
    width: 100%;
  }
  .question_header {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    margin: 20px auto 0;
  }
  .question_id {
    width: 80px;
    padding: 8px 0;
    height: fit-contents;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #325cc7;
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
    border-radius: 50px;
    background-color: #ffffff;
    box-shadow: 1px 3px #ccc9c9;
  }
  .header_title {
    font-size: 20px;
    font-weight: bold;
    flex: 1;
    text-align: left;
  }
  .answer_input {
    width: 100%;
    height: 181px;
    font-size: 20px;
    display: flex;
    background-color: #ffffff;
    border: solid #ffffff;
    border-radius: 20px;
    box-shadow: 1px 3px #ccc9c9;
    overflow-wrap: break-word;
    padding: 4px 12px;
  }
  .answer_input.display {
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
    /* 내용 초과시 스크롤바 */
    overflow-y: auto;
  }

  /* 스크롤바 */
  .answer_input.display::-webkit-scrollbar {
    width: 10px;
  }
  .answer_input.display::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .answer_input.display::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  /* 스크롤바 */
  .answer_input::-webkit-scrollbar {
    width: 10px;
  }
  .answer_input::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .answer_input::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  .button_group {
    display: flex;
  }
  .button {
    width: fit-content;
    height: fit-content;
    padding: 8px 32px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 3px #ccc9c9;
  }
  .button.answer {
    background-color: #ac6dfd;
    margin: 60px auto;
    &:hover {
      background-color: #9747ff;
    }
  }
  .btn_container {
    display: flex;
    justify-content: center;

    width: 80%;
    margin: 28px auto;
  }

  .button_problem {
    width: fit-content;
    height: fit-content;
    position: relative;
    padding: 8px 20px;
    color: white;
    font-weight: bold;
    border-radius: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 3px #ccc9c9;

    background-color: #3b3b3b;
    font-size: 16px;
  }
  .button_problem:hover {
    background-color: #3b3b3b;
    opacity: 80%;
  }
  .button_solution {
    width: fit-content;
    height: fit-content;
    padding: 8px 20px;
    color: white;
    font-weight: bold;
    border-radius: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 3px #ccc9c9;

    background-color: rgba(109, 99, 228, 0.6);
    margin-left: 20px;
    font-size: 16px;
  }
  .button_solution:hover {
    background-color: rgba(109, 99, 228, 0.8);
  }
  /* feedback (comment) */
  .feedback_section {
    width: 80%;
    justify-content: space-between;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
  }
  .feedback_waiting_bar {
    width: 60%;
    margin: 100px auto;
    padding: 12px 0;
    background-color: rgba(109, 99, 228, 0.6);
    color: #ffffff;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 1px 3px #ccc9c9;

    cursor: pointer;
  }
  .feedback_container {
    margin-top: 88px;
    width: 45%;
  }
  .feedback_result_pass,
  .feedback_result_fail {
    width: 100px;
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .feedback_result_pass {
    color: #04ca00;
  }
  .feedback_result_fail {
    color: rgba(244, 117, 117, 0.9);
  }
  .feedback_index {
    width: fit-content;
    height: fit-content;
    padding: 8px 24px;
    border-radius: 50px;
    text-align: center;
    // background-color: #9747FF; opacity:60%;
    background-color: #3b3b3b;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
  }
  .feedback_writer {
    margin-left: 20px;
    font-size: 20px;
    color: #3e3e3e;
    font-weight: bold;
  }
  .feedback_content {
    width: 100%;
    font-size: 20px;
    background-color: #ffffff;
    border: solid #ffffff;
    border-radius: 20px;
    box-shadow: 1px 3px #ccc9c9;
    overflow-wrap: break-word;
    margin-top: 10px;
    color: #3e3e3e;
  }
  .feed_section {
    width: 40%;
  }
  .feedback_content.input {
    height: 270px;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
  }
  .feedback_content.display {
    height: 250px;
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
    /* 내용 초과시 스크롤바 */
    overflow-y: auto;
  }

  .feedback_content.display::-webkit-scrollbar {
    width: 10px;
  }
  .feedback_content.display::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .feedback_content.display::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  // 수정하기
  .feedback_content::-webkit-scrollbar {
    width: 10px;
  }
  .feedback_content::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  .feedback_content::-webkit-scrollbar-track {
    background: #e7e6f696; /*스크롤바 뒷 배경 색상*/
  }

  .feedback_select_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button_container {
    width: fit-content;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 40px 0 40px;
  }
  .select_button {
    font-size: 36px;
    font-weight: bold;
    cursor: pointer;
  }
  .select_button.pass {
    color: ${e=>e.isSelected?"rgba(4, 202, 0, 1)":"rgba(4, 202, 0, 0.6)"};
    &:hover {
      color: rgba(4, 202, 0, 1);
    }
    margin-right: 20px;
  }
  .select_button.fail {
    color: ${e=>e.isSelected?"rgba(244, 117, 117, 1)":"rgba(244, 117, 117, 0.6)"};
    &:hover {
      color: rgba(244, 117, 117, 1);
    }
  }
  .select_comment {
    font-size: 20px;
    color: #6f6f6f;
  }
  .feedback_button {
    width: 100%;
    height: fit-content;
    padding: 10px 0;
    border: solid 1px rgba(109, 99, 228, 0.6);
    border-radius: 60px;
    background-color: rgba(109, 99, 228, 0.6);
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
  }
  .feedback_button:hover {
    background-color: rgba(109, 99, 228, 1);
  }

  .result_container > p {
    color: #665f5f;
    opacity: 60%;
  }
  .result.success {
    width: 70%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 120px auto 10px;
    padding: 12px 0;

    // background-color: #04ca00; opacity:57%;
    background-color: #0025cae0;
    opacity: 57%;
    color: #ffffff;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 1px 3px #ccc9c9;
    cursor: pointer;
    &:hover {
      background-color: #0025cae0;
      opacity: 70%;
    }
  }
  .result.fail {
    width: 70%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 120px auto 10px;
    padding: 12px 0;

    background-color: rgba(244, 117, 117, 0.8);
    color: #ffffff;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 1px 3px #ccc9c9;

    cursor: pointer;
  }
  .result.fail:hover {
    background-color: rgba(244, 117, 117, 1);
  }
  .loading {
    height: 1500px;
  }

  .dropdown_content {
    background-color: #fefdfd;
    border: 2px solid #c8c8c8;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin-right: 0;
    padding: 40px 20px;
    position: absolute;
    top: 40px;
    right: -10px;

    width: 520px;
    min-width: 200px;
    z-index: 999;
    color: black;

    // 글자 튀어나옴 방지_ by성임
    word-break: break-all;
  }

  .dropdown_content > .content {
    text-align: left;
  }

  .sample_inputs {
    text-align: left;
  }
  .sample_outputs {
    text-align: left;
  }
`},5193:(e,t,n)=>{n.d(t,{JW:()=>i.J,fM:()=>x,HF:()=>r,Lb:()=>i.L,HU:()=>g,J:()=>p,w4:()=>d});var o=n(1250);const r=o.Ay.div`
  .container {
    display: flex;
    flex-direction: row;
    height: fit-content;
    align-items: center;
    margin: auto;
    padding: 8px 16px 8px 0px;
    border-radius: 8px;

    background-color: ${e=>null===e.state?"#DEDEDE":"comment"===e.state||"question"===e.state?"rgba(243, 242, 242, 0.737)":"white"};
    transition: background-color 0.3s; 
    &:hover {
      background-color: ${e=>null===e.state?"#DEDEDE":"rgba(243, 242, 242, 0.737)"};
    }
  }

  .problem_id {
    width: 100px;
    height: 34px;
    color: ${e=>"success"===e.state?"#04CA00":"fail"===e.state?"#FF8412":"black"};
    font-size: 18px;
    text-align: center;
    line-height: 34px;
  }

  .problem_title {
    flex: 1;
    font-size: 20px;
    text-align: left;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
    color: #000000;
    opacity: 70%;
  }

  .grade {
    height: 34px;
    font-size: 16px;
    margin-right: 20px;
    line-height: 34px;
    font-weight: bold;
    color: #000000;
    opacity: 60%;
  }

  .button {
    width: fit-content;
    height: fit-content;
    padding: 7px 30px;
    box-shadow: 1px 1px #ccc9c9;

    color: ${e=>"success"===e.state||"fail"===e.state?"white":"#56565692"};

    background-color: ${e=>"success"===e.state?"rgba(109, 99, 228, 0.8)":"fail"===e.state?"rgba(244, 117, 117, 0.8)":(e.state,"white")};
    &:hover {
      background-color: ${e=>"success"===e.state?"rgba(109, 99, 228, 1.0)":"fail"===e.state?"rgba(244, 117, 117, 1.0)":""};
    }
    border-radius: 8px;
    font-size: 17px;
    font-weight: bold;

    text-align: center;
    border: ${e=>"success"===e.state||"fail"===e.state?"none":null===e.state?"#d6d6d6cc":"2px solid #DEDEDE"};
    transition: background-color 0.3s;
    margin-right: 14px;
    pointer-events: ${e=>"success"===e.state||"fail"===e.state?"auto":"none"};
  }
`;var i=n(5546),a=n(1716),s=n(4574),l=n(6773),c=n(436);const d=(0,a.A)(),p=(0,o.Ay)(l.A)`
  padding-top: 8px;
  justify-content: left;

  && .${c.A.root} {
    flex: initial;
    background-color: transparent;

    &.${c.A.selected} {
      ${e=>{let{index:t}=e;return 0===t?o.AH`
              color: inherit; /* 기본 색상으로 유지 */
              &::after {
                display: none; /* 밑줄 숨김 */
              }
            `:o.AH`
              color: ${e=>e.theme.palette.primary.main};

              &::after {
                content: "";
                display: block;
                height: 2.5px;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                background-color: ${e=>e.theme.palette.primary[500]};
                margin-top: 8px;
              }
            `}}
    }

    font-size: 26px;
  }
`,x=(0,o.Ay)(s.A)`
  flex-grow: 1;
  margin: -2px;
  overflow-x: hidden;
  overflow-y: hidden;
`;n(8246),n(6553);const g=o.Ay.div`
  margin-bottom: 1px;
  align-items: center;
  font-size: 18px;
  height: 40px;
  display: flex;
  background-color: white;
  width: 100%;
  border-radius: 8px;

  .ranking_id {
    width: 20%;
  }
  .member_name {
    text-align: left;
    flex: 1 1 0%;
  }
  .score {
    width: 20%;
  }
`},5737:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(1601),r=n.n(o),i=n(6314),a=n.n(i)()(r());a.push([e.id,"@font-face {\n    font-family: 'Pretendard-Regular';\n    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');\n    font-weight: 400;\n    font-style: normal;\n}",""]);const s=a},579:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(1601),r=n.n(o),i=n(6314),a=n.n(i)()(r());a.push([e.id,'@charset "UTF-8";\n/* ---------- footer ---------- */\n.footer {\n  height: 240px;\n  width: 100%;\n  background-color: #272727;\n  margin-top: 300px;\n  display: flex;\n  padding: 20px 0;\n}\n.footer :not(.logo, .info1, .info2, .footer_logout) {\n  color: rgba(255, 255, 255, 0.9254901961);\n}\n\n.mainPage .footer {\n  margin-top: 0; /* mainPage 클래스 안에 속해있을 때 margin-top 효과 제거 */\n}\n\n.footer_left {\n  width: 60%;\n}\n.footer_left .info {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  margin-left: 40px;\n}\n.footer_left .info * {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.footer_left .info * p {\n  margin-left: 12px;\n}\n.footer_left .logo {\n  width: 140px;\n  height: 100px;\n  font-size: 40px;\n  font-weight: bold;\n  margin-top: 28px;\n  color: rgba(255, 255, 255, 0.9254901961);\n}\n\n.footer_right {\n  height: 80%;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  margin-top: 12px;\n}\n.footer_right .sns {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 12px;\n  cursor: pointer;\n}\n.footer_right .sns *:first-child {\n  margin-right: 12px;\n}\n\n.info1,\n.info2 {\n  color: #c8c4c4;\n  opacity: 57%;\n}\n\n.about {\n  margin-bottom: 8px;\n}\n\n.footer_logout {\n  text-align: right;\n  margin: 8px 20px 0 0;\n  color: #d4d4d4;\n  cursor: pointer;\n}',""]);const s=a},7679:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(1601),r=n.n(o),i=n(6314),a=n.n(i)()(r());a.push([e.id,'@charset "UTF-8";\n.content_container {\n  height: calc(100vh - 200px); /* header, footer 높이 뺀 값 */\n}\n.content_container .manageuser_container {\n  display: flex;\n  height: calc(100vh + 100px);\n}\n.content_container .manageuser_container .userlist_wrapper {\n  flex: 9;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n  background-color: #e9e9eb;\n  padding-bottom: 40px;\n  overflow-y: auto;\n}\n.content_container .manageuser_container .userlist_wrapper::-webkit-scrollbar {\n  width: 10px;\n}\n.content_container .manageuser_container .userlist_wrapper::-webkit-scrollbar-thumb {\n  background: #c0c0c0; /* 스크롤바 색상 */\n  border-radius: 10px; /* 스크롤바 둥근 테두리 */\n}\n.content_container .manageuser_container .userlist_wrapper::-webkit-scrollbar-track {\n  background: rgba(231, 230, 246, 0.5882352941); /*스크롤바 뒷 배경 색상*/\n}\n.content_container .manageuser_container .userlist_wrapper .list_container {\n  width: 72%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper {\n  background-color: #f8f8f8;\n  border-top: solid #acacac 1px;\n  border-bottom: solid #acacac 1px;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper {\n  background-color: #ffffff;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper button {\n  height: 28px;\n  width: 80px;\n  border: solid 1px;\n  border-radius: 20px;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  margin-left: 8px;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .info_btn {\n  background-color: #434349;\n  opacity: 80%;\n  border-color: #434349;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .info_btn:hover {\n  background-color: #434349;\n  opacity: 95%;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_new {\n  color: #ffb862;\n  font-weight: 600;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_old {\n  color: rgba(50, 83, 255, 0.768627451);\n  font-weight: 600;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_manage {\n  color: white;\n  background-color: #434349;\n  padding: 4px 0px;\n  font-size: 15px;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_name {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.7490196078);\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_stunum,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_studep {\n  color: rgba(0, 0, 0, 0.7490196078);\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper {\n  display: inherit;\n  height: 40px;\n  align-items: center;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_state,\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_state_new,\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_state_old,\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_state_manage,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_new,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_old,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_state_manage {\n  flex: 1.5;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_name,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_name {\n  flex: 2;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_stunum,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_stunum {\n  flex: 2;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_studep,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_studep {\n  flex: 2;\n}\n.content_container .manageuser_container .userlist_wrapper .list_container .title_wrapper .title_none,\n.content_container .manageuser_container .userlist_wrapper .list_container .list_wrapper .title_none {\n  flex: 2;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}',""]);const s=a},4824:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(1601),r=n.n(o),i=n(6314),a=n.n(i)()(r());a.push([e.id,'@charset "UTF-8";\n/* -----네비게이션바----- */\n.logout,\n.userId,\n.userLevel {\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px 30px;\n  color: white;\n  border: solid white;\n  border-radius: 10px;\n  font-family: var(--Font1);\n}\n\n.logout {\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #ffffff;\n  margin: 15px 50px 0px auto;\n  color: #555555;\n  font-weight: bold;\n  font-size: 17px;\n  border: solid 3px #7d7d7d;\n  border-radius: 80px;\n}\n.logout:hover {\n  background-color: #414141;\n  border-color: #414141;\n  color: #ffffff;\n}\n\n.container > .btns > .userId {\n  width: -moz-fit-content;\n  width: fit-content;\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: bold;\n  background-color: rgba(90, 44, 218, 0.8235294118);\n  border-radius: 80px;\n}\n.container > .btns > .userId:hover {\n  background-color: rgba(120, 119, 119, 0.8549019608);\n}\n\n.userLevel {\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #000000;\n  color: #ffffff;\n  padding: 5px 10px;\n}\n\n.btns {\n  display: flex;\n  margin: 20px 60px 0px auto;\n}\n\n.container {\n  display: flex;\n  flex-direction: column; /* 수직으로 배치 */\n  align-items: center;\n  background-color: #ffffff;\n  height: 132px;\n}\n\n.navbar {\n  display: flex;\n  width: 90%;\n  margin: 0px auto;\n  align-items: center;\n}\n.navbar * {\n  display: flex;\n}\n.navbar .logo {\n  width: 120px;\n  height: 80px;\n  margin-right: 20px;\n  font-size: 40px;\n  font-weight: bold;\n  color: rgba(28, 28, 29, 0.7647058824);\n  cursor: pointer;\n}\n\n.menu1,\n.menu2,\n.menu3 {\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 26px;\n  margin-left: 56px;\n  margin-bottom: 20px;\n  font-weight: bold;\n  color: #686868;\n}\n\n.menu1:hover {\n  border-radius: 5px;\n  color: #000000;\n}\n\n.menu3 {\n  padding: 20px 0;\n  padding-bottom: 0;\n}\n\n.noticeAlertBtn {\n  background-color: rgb(255, 89, 89);\n  border: solid rgb(255, 89, 89);\n  width: 23px;\n  height: 23px;\n  padding: 8px;\n  border-radius: 40px;\n  color: white;\n  font-weight: 600;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 5px;\n}',""]);const s=a},6222:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(1601),r=n.n(o),i=n(6314),a=n.n(i)()(r());a.push([e.id,".dropdown-content {\n  position: absolute;\n  top: 60px;\n  right: 30px;\n  width: 240px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 0;\n  background-color: #fefdfd;\n  border: solid 2px rgb(200, 200, 200);\n  border-radius: 4px;\n  padding-top: 16px;\n  z-index: 999;\n  font-family: var(--Font1);\n}\n.dropdown-content .memberName {\n  color: rgb(37, 37, 37);\n  font-size: 17px;\n  margin: 16px 0;\n  font-size: 20px;\n  font-weight: bold;\n}\n.dropdown-content .navbar_bottom {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  width: 100%;\n  font-size: 14px;\n  color: #000000;\n  opacity: 75%;\n  border-top: solid 3px #d7d6d6;\n}\n.dropdown-content .navbar_bottom * {\n  width: 100%;\n  padding: 10px 8px;\n}\n.dropdown-content .navbar_bottom .btn_mypage {\n  border-right: solid 3px #d7d6d6;\n}\n\n.navbarInfo {\n  width: 30%;\n  text-align: left;\n}\n.navbarInfo * {\n  font-size: 15px;\n  color: #808080;\n}\n.navbarInfo .memberScore {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.navbarInfo .memberScore p {\n  color: #04ca00;\n  font-weight: bold;\n  margin-left: 8px;\n}\n\n.userImage {\n  width: 100px;\n  height: 100px;\n  background-color: rgb(212, 212, 212);\n  border-radius: 8px;\n  margin: 8px;\n}\n\n.btn_mypage,\n.btn_top_logout {\n  font-size: 13px;\n}\n.btn_mypage :hover,\n.btn_top_logout :hover {\n  color: #000000;\n  font-weight: bold;\n  background-color: #ebebeb;\n}",""]);const s=a},1684:(e,t,n)=>{var o=n(5072),r=n.n(o),i=n(7825),a=n.n(i),s=n(7659),l=n.n(s),c=n(5056),d=n.n(c),p=n(540),x=n.n(p),g=n(1113),f=n.n(g),h=n(7679),b={};b.styleTagTransform=f(),b.setAttributes=d(),b.insert=l().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=x(),r()(h.A,b),h.A&&h.A.locals&&h.A.locals},1594:e=>{e.exports=React},5206:e=>{e.exports=ReactDOM},3719:e=>{e.exports=axios}},e=>{e.O(0,[490,997,224,472,500,420,424,517,515,247,43,650,546,712,282,855,673,825,642,722,765,871,3],(()=>e(e.s=2980))),e.O()}]);