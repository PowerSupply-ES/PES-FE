"use strict";(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[539],{112:(n,e,t)=>{t.d(e,{A:()=>a}),t(6540);var o=t(9368),r=t(4848);const a=n=>{let{myFeedback:e,navigate:t}=n;return(0,r.jsxs)("div",{className:"bottom",children:[(0,r.jsxs)("div",{className:"feed_top",children:[(0,r.jsx)("div",{className:"mypage_btn",children:"my feedback"}),(0,r.jsxs)("div",{className:"feedNum",children:[e.length,"개"]})]}),(0,r.jsx)("div",{className:"myFeedback",children:(0,r.jsx)(o.A,{myFeedback:e,navigate:t})})]})}},7976:(n,e,t)=>{t.d(e,{A:()=>a}),t(6540);var o=t(9197),r=(t(1158),t(1684),t(4848));const a=n=>{let{memberName:e,memberId:t,memberEmail:a,memberGen:s,memberStatus:i,memberMajor:c,memberPhone:l}=n;return(0,r.jsx)("div",{className:"left",children:(0,r.jsxs)("div",{className:"memberInfo",children:[(0,r.jsxs)("div",{className:"info_name",children:[(0,r.jsx)(o.d$e,{size:40,style:{color:"grey"}}),(0,r.jsx)("p",{children:e})]}),(0,r.jsxs)("div",{className:"text",children:[(0,r.jsx)("div",{children:"학 번"}),(0,r.jsx)("p",{children:t})]}),(0,r.jsxs)("div",{className:"text",children:[(0,r.jsx)("div",{children:"이메일"}),(0,r.jsx)("p",{children:a})]}),(0,r.jsxs)("div",{className:"text",children:[(0,r.jsx)("div",{children:"기 수"}),(0,r.jsx)("p",{children:s})]}),(0,r.jsxs)("div",{className:"text",children:[(0,r.jsx)("div",{children:"상 태"}),(0,r.jsx)("p",{children:i})]}),(0,r.jsxs)("div",{className:"text",children:[(0,r.jsx)("div",{children:"학 과"}),(0,r.jsx)("p",{children:c})]}),(0,r.jsxs)("div",{className:"text",children:[(0,r.jsx)("div",{children:"전화 번호"}),(0,r.jsx)("p",{children:l})]})]})})}},7897:(n,e,t)=>{t.d(e,{A:()=>a}),t(6540);var o=t(6129),r=t(4848);const a=n=>{let{myProb:e,navigate:t}=n;return(0,r.jsxs)("div",{className:"top",children:[(0,r.jsxs)("div",{className:"prob_top",children:[(0,r.jsx)("div",{className:"mypage_btn",children:"내가 푼 문제"}),(0,r.jsxs)("div",{className:"probNum",children:[e.length,"개"]})]}),(0,r.jsx)("div",{className:"myProblem",children:(0,r.jsx)(o.A,{myProb:e,navigate:t})})]})}},9368:(n,e,t)=>{t.d(e,{A:()=>r}),t(6540);var o=t(4848);const r=n=>{let{myFeedback:e,navigate:t}=n;return(0,o.jsx)("div",{className:"FeedList",children:0===e.length?(0,o.jsx)("div",{className:"noFeed",children:"아직 남긴 피드백이 없어요!"}):e.map((n=>(0,o.jsxs)("div",{className:"feeds",children:[(0,o.jsx)("p",{className:"problemId",children:n.answerId}),(0,o.jsxs)("p",{className:"memberGenName",children:[n.memberGen,"기 ",n.memberName]}),(0,o.jsx)("p",{className:"commentContent",onClick:()=>{return e=n.answerId,console.log("problemId: ",e),void t(`question/${e}`);var e},children:n.commentContent}),(0,o.jsx)("div",{className:1===n.commentPassFail?"btn_success":0===n.commentPassFail?"btn_fail":"btn_state",children:1===n.commentPassFail?"success":0===n.commentPassFail?"fail":n.commentPassFail})]},n.answerId)))})}},6129:(n,e,t)=>{t.d(e,{A:()=>r}),t(6540);var o=t(4848);const r=n=>{let{myProb:e,navigate:t}=n;return(0,o.jsx)("div",{className:"problemList",children:0===e.length?(0,o.jsx)("div",{className:"noProblems",children:"아직 푼 문제가 없어요!"}):e.map((n=>(0,o.jsxs)("div",{className:"problems",children:[(0,o.jsx)("p",{className:"problemId",children:n.problemId}),(0,o.jsx)("p",{className:"problemTitle",onClick:()=>{return e=n.answerId,console.log("problemId: ",e),void t(`question/${e}`);var e},children:n.problemTitle}),(0,o.jsxs)("p",{className:"finalScore",children:[n.finalScore,"점"]}),(0,o.jsx)("p",{className:"dash",children:"/"}),(0,o.jsxs)("p",{className:"problemScore",children:[n.problemScore,"점"]}),(0,o.jsx)("div",{className:"success"===n.answerState?"btn_success":"fail"===n.answerState?"btn_fail":"btn_state",children:"question"===n.answerState?"질문대기":"comment"===n.answerState?"피드백대기":n.answerState})]},n.answerId)))})}},8539:(n,e,t)=>{t.r(e),t.d(e,{default:()=>x});var o=t(6540),r=(t(8940),t(1158),t(9368),t(7767)),a=t(112),s=t(4848);const i=n=>{let{myFeedback:e}=n;const t=(0,r.Zp)();return(0,s.jsx)(a.A,{myFeedback:e,navigate:t})};var c=t(7976);const l=n=>{let{memberData:e}=n;return(0,s.jsx)(c.A,{memberName:e.memberName,memberId:e.memberId,memberEmail:e.memberEmail,memberGen:e.memberGen,memberStatus:e.memberStatus,memberMajor:e.memberMajor,memberPhone:e.memberPhone})};t(6129);var m=t(7897);const d=n=>{let{myProb:e}=n;const t=(0,r.Zp)();return(0,s.jsx)(m.A,{myProb:e,navigate:t})};var b=t(1083);const p=()=>{const n=(0,r.Zp)(),[e,t]=(0,o.useState)(),[a,s]=(0,o.useState)([]),[i,c]=(0,o.useState)([]);return(0,o.useEffect)((()=>{if(null==sessionStorage.getItem("status"))return alert("로그인 해주세요"),void n("/signin");(async()=>{try{(async n=>{try{n((await b.A.get("/api/mypage/information")).data)}catch(n){b.A.isAxiosError(n)?console.error("Axios 오류 발생:",n.response?.status,n.response?.statusText):n instanceof Error?console.error("일반 오류 발생:",n.message):console.error("알 수 없는 오류 발생:",n)}})(t),(async n=>{try{n((await b.A.get("api/mypage/mysolve")).data)}catch(n){b.A.isAxiosError(n)?console.error("Axios 오류 발생:",n.response?.status,n.response?.statusText):n instanceof Error?console.error("일반 오류 발생:",n.message):console.error("알 수 없는 오류 발생:",n)}})(s),(async n=>{try{n((await b.A.get("api/mypage/myfeedback")).data)}catch(n){b.A.isAxiosError(n)?console.error("Axios 오류 발생:",n.response?.status,n.response?.statusText):n instanceof Error?console.error("일반 오류 발생:",n.message):console.error("알 수 없는 오류 발생:",n)}})(c)}catch(n){console.error("데이터를 가져오는 중 오류 발생:",n)}})()}),[n]),{memberData:e,myProb:a,myFeedback:i}},x=()=>{const n=(0,r.Zp)(),e=sessionStorage.getItem("memberStatus");console.log("memberStatus = ",e);const{memberData:t,myProb:o,myFeedback:a}=p();return t?(0,s.jsx)("div",{className:"content_mypage",children:(0,s.jsxs)("div",{className:"mypage_content",children:[(0,s.jsxs)("div",{className:"left",children:[(0,s.jsx)(l,{memberData:t}),"관리자"===e?(0,s.jsx)("button",{className:"btn_goto_manage",onClick:()=>n("/manageUser"),children:"관리자모드"}):(0,s.jsx)(s.Fragment,{})]}),(0,s.jsxs)("div",{className:"right",children:[(0,s.jsx)(d,{myProb:o}),(0,s.jsx)(i,{myFeedback:a})]})]})}):(0,s.jsx)("div",{children:"Loading..."})}},1237:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(1601),r=t.n(o),a=t(6314),s=t.n(a)()(r());s.push([n.id,'@charset "UTF-8";\n.App {\n  text-align: center;\n  background-color: #e9e9eb;\n}\n\n:root {\n  --Font1: "Pretendard-Regular";\n}\n\n@font-face {\n  font-family: "Pretendard-Regular";\n  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");\n  font-weight: 400;\n  font-style: normal;\n}\n/* -----공통요소----- */\n* {\n  list-style-type: none;\n  text-decoration: none;\n  margin: 0px;\n  padding: 0px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n/* question페이지에서 fail/pass에 따른 배경화면 변화 */\n.failPage {\n  background-color: -color;\n  padding: 10px 0 140px;\n  margin-bottom: -300px;\n}\n\n.successPage {\n  background-color: #ebebfc;\n  padding: 10px 0 140px;\n  margin-bottom: -300px;\n}\n\n.nonePage {\n  background-color: #e9e9eb;\n  padding: 10px 0 140px;\n  margin-bottom: -300px;\n}',""]);const i=s},6969:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(1601),r=t.n(o),a=t(6314),s=t.n(a)()(r());s.push([n.id,'@charset "UTF-8";\n/* -----마이페이지----- */\n@media (max-width: 1200px) {\n  .mypage_content {\n    flex-direction: column;\n    align-items: center;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n  .right {\n    width: 100%; /* 오른쪽 영역을 전체 너비로 설정 */\n  }\n}\n.content_mypage {\n  padding-top: 80px;\n  background-color: #f2f1fe;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-bottom: 300px;\n  margin-bottom: -300px;\n}\n.content_mypage h2 {\n  width: 100%;\n  text-align: left;\n  margin-left: 40px;\n  color: #000000;\n  opacity: 60%;\n  font-size: 26px;\n}\n\n.mypage_content {\n  display: flex;\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n  justify-content: center;\n  margin: 0 auto;\n}\n.mypage_content .left {\n  margin: 48px 60px 0 0;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  align-items: center;\n}\n.mypage_content .left button {\n  height: 36px;\n  width: 160px;\n  border: solid 1px;\n  border-radius: 10px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n.mypage_content .left .btn_goto_manage {\n  background-color: #323232;\n  opacity: 80%;\n  border-color: #000000;\n  margin-right: 60px;\n}\n.mypage_content .left .btn_goto_manage:hover {\n  background-color: #444444;\n}\n.mypage_content .manage_btn_container {\n  display: flex;\n  width: 90%;\n  justify-content: center;\n}\n.mypage_content .manage_btn_container button {\n  height: 36px;\n  width: 160px;\n  border: solid 1px;\n  border-radius: 10px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n.mypage_content .manage_btn_container .levelup_btn {\n  background-color: #ffd66b;\n  opacity: 80%;\n  border-color: #ffd66b;\n}\n.mypage_content .manage_btn_container .levelup_btn:hover {\n  background-color: #ffd66b;\n  opacity: 95%;\n}\n.mypage_content .manage_btn_container .btn_deletemem {\n  background-color: #ff2d2d;\n  opacity: 80%;\n  border-color: #ff2d2d;\n  margin-left: 8px;\n}\n.mypage_content .manage_btn_container .btn_deletemem:hover {\n  background-color: #ff2d2d;\n  opacity: 95%;\n}\n.mypage_content .manage_btn_container .btn_editmem {\n  background-color: rgba(53, 56, 61, 0.7921568627);\n  opacity: 80%;\n  border-color: rgba(53, 56, 61, 0.7921568627);\n  margin-left: 8px;\n}\n.mypage_content .manage_btn_container .btn_editmem:hover {\n  background-color: rgba(53, 56, 61, 0.7921568627);\n  opacity: 95%;\n}\n.mypage_content .right {\n  display: flex;\n  flex-direction: column;\n}\n\n.mypage_btn {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 2px 6px;\n  color: #ffffff;\n  background-color: #9747ff;\n  opacity: 60%;\n  border: solid #9747ff;\n  opacity: 60%;\n  border-radius: 20px;\n  margin: 0 0 6px 8px;\n}\n\n.feedNum,\n.probNum {\n  text-align: right;\n  font-size: 20px;\n  margin: 0 20px 8px 0;\n  color: #897d7d;\n  font-weight: bold;\n}\n\n.feed_top,\n.prob_top {\n  margin-top: 20px;\n  width: 800px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.noFeed,\n.noProblems {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-weight: bold;\n  color: hsl(0, 0%, 78%);\n}\n\n.memberInfo,\n.myProblem,\n.myFeedback {\n  padding: 10px;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 18px;\n  border: solid #c3c2c2 2px;\n  border-radius: 10px;\n}\n\n.memberInfo {\n  height: 50%;\n  width: 400px;\n  margin: 36px auto 20px;\n  justify-content: center;\n  padding: 20px;\n}\n.memberInfo .text {\n  margin-bottom: 3px;\n}\n.memberInfo .info_name {\n  margin: 20px 0 40px 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-weight: bold;\n  font-size: 32px;\n  color: #060606;\n}\n.memberInfo .info_name p {\n  font-size: 26px;\n  color: #000000;\n  margin-top: 12px;\n}\n.memberInfo *:not(:first-child) {\n  width: 100%;\n  display: flex;\n  justify-content: left;\n}\n.memberInfo *:first-child {\n  color: #000000;\n  opacity: 80%;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  justify-content: left;\n}\n\n.myProblem,\n.myFeedback {\n  height: 240px;\n  width: 800px;\n  justify-content: center;\n}\n\n.myFeedback {\n  color: #c3c2c2;\n}\n\n.myProblem {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  overflow-y: auto; /* 내용 초과시 스크롤바 */\n  /* 스크롤바 */\n}\n.myProblem::-webkit-scrollbar {\n  width: 10px;\n}\n.myProblem::-webkit-scrollbar-thumb {\n  background: #c0c0c0; /* 스크롤바 색상 */\n  border-radius: 10px; /* 스크롤바 둥근 테두리 */\n}\n.myProblem::-webkit-scrollbar-track {\n  background: rgba(231, 230, 246, 0.5882352941); /*스크롤바 뒷 배경 색상*/\n}\n\n.myFeedback {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  overflow-y: auto; /* 내용 초과시 스크롤바 */\n  /* 스크롤바 */\n}\n.myFeedback::-webkit-scrollbar {\n  width: 10px;\n}\n.myFeedback::-webkit-scrollbar-thumb {\n  background: #c0c0c0; /* 스크롤바 색상 */\n  border-radius: 10px; /* 스크롤바 둥근 테두리 */\n}\n.myFeedback::-webkit-scrollbar-track {\n  background: rgba(231, 230, 246, 0.5882352941); /*스크롤바 뒷 배경 색상*/\n}\n\n.problems,\n.feeds {\n  width: 100%;\n  display: flex;\n  padding: 4px 0;\n}\n.problems *,\n.feeds * {\n  display: flex;\n  align-items: center;\n}\n\n.problemList,\n.FeedList {\n  width: 100%;\n  height: 100%;\n  padding: 20px 0;\n  margin: 20px 0;\n}\n\n.feeds :last-child {\n  margin: auto;\n  display: flex;\n  align-items: center;\n}\n.feeds .problemId {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 8%;\n  color: #04ca00;\n  font-weight: bold;\n}\n\n.problems .problemId {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 10%;\n  color: #04ca00;\n  font-weight: bold;\n}\n.problems .finalScore,\n.problems .problemScore {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 7%;\n  color: rgba(170, 170, 170, 0.8274509804);\n  font-weight: bold;\n}\n.problems .problemScore {\n  margin-right: 10px;\n}\n.problems .problemTitle,\n.problems .mameberName,\n.problems .memberGen {\n  justify-content: left;\n  width: 60%;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.dash {\n  width: 1%;\n  color: rgba(31, 31, 31, 0.7019607843);\n  color: rgba(170, 170, 170, 0.8274509804);\n  font-weight: bold;\n}\n\n.feeds .memberGenName {\n  justify-content: left;\n  width: 12%;\n  font-weight: bold;\n  color: #262626;\n}\n.feeds .commentContent {\n  margin: 0 20px 0 20px;\n  width: 60%;\n  color: #1f1f1f;\n  cursor: pointer;\n}\n\n.problemList :hover,\n.FeedList :hover {\n  background-color: rgba(243, 242, 242, 0.737);\n}\n\n/* noproblems,noFeed 상태일때는 적용x */\n.problemList:hover > .noProblems,\n.FeedList:hover > .noFeed {\n  background-color: transparent;\n}\n\n/* 성공여부에 따라 버튼색 변화 */\n.btn_fail,\n.btn_success,\n.btn_state {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  width: 80px;\n  height: 28px;\n  font-weight: bold;\n}\n\n.btn_success {\n  border: solid 3px #5094f9;\n  color: #5094f9;\n}\n\n.btn_fail {\n  border: solid 3px #eb3434;\n  opacity: 80%;\n  color: #eb3434;\n  opacity: 80%;\n}\n\n.btn_state {\n  border: solid 3px #c2c2c2;\n  color: #999999;\n  opacity: 80%;\n  font-size: 16px;\n}\n\n.text :first-child {\n  width: 22%;\n  text-align: left;\n  margin-right: 12px;\n  color: #a7a7a7;\n  font-weight: bold;\n  font-size: 17px;\n}\n.text :last-child {\n  width: 78%;\n  text-align: left;\n  font-weight: bold;\n  color: hsla(0, 0%, 0%, 0.725);\n  font-size: 17px;\n}',""]);const i=s},8940:(n,e,t)=>{var o=t(5072),r=t.n(o),a=t(7825),s=t.n(a),i=t(7659),c=t.n(i),l=t(5056),m=t.n(l),d=t(540),b=t.n(d),p=t(1113),x=t.n(p),g=t(1237),f={};f.styleTagTransform=x(),f.setAttributes=m(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=b(),r()(g.A,f),g.A&&g.A.locals&&g.A.locals},1158:(n,e,t)=>{var o=t(5072),r=t.n(o),a=t(7825),s=t.n(a),i=t(7659),c=t.n(i),l=t(5056),m=t.n(l),d=t(540),b=t.n(d),p=t(1113),x=t.n(p),g=t(6969),f={};f.styleTagTransform=x(),f.setAttributes=m(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=b(),r()(g.A,f),g.A&&g.A.locals&&g.A.locals}}]);