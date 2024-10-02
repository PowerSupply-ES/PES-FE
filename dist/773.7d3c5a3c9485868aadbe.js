"use strict";(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[773],{2394:(n,t,o)=>{o.d(t,{A:()=>i});var e=o(1083);const i=async n=>{try{return(await e.A.get(`/api2/problemtitle/${n}`,{withCredentials:!0})).data}catch(n){console.log(n)}console.log("problemId:",n)}},4773:(n,t,o)=>{o.r(t),o.d(t,{default:()=>z});var e=o(5072),i=o.n(e),s=o(7825),l=o.n(s),r=o(7659),a=o.n(r),c=o(5056),d=o.n(c),g=o(540),h=o.n(g),f=o(1113),u=o.n(f),p=o(3159),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=l(),m.insertStyleElement=h(),i()(p.A,m),p.A&&p.A.locals&&p.A.locals;var b=o(1594),x=o(7767),_=o(4848);const v=n=>{let{solveData:t}=n;const o=(0,x.Zp)();return(0,_.jsx)("div",{className:"solving_list",children:t.map((n=>"question"!==n.answerState&&(0,_.jsxs)("div",{className:"solving",children:[(0,_.jsxs)("div",{className:"left",children:[(0,_.jsxs)("div",{className:"userGen",children:[n.memberGen,(0,_.jsx)("p",{children:"기 "})]}),(0,_.jsx)("div",{className:"userName",children:n.memberName})]}),(0,_.jsxs)("div",{className:"right",children:[(0,_.jsxs)("div",{className:"process_num",children:[n.commentCount,"/2"]}),(0,_.jsx)("div",{className:"success"===n.answerState?"btn_success":"fail"===n.answerState?"btn_fail":"btn_state",children:n.answerState}),(0,_.jsx)("button",{className:"btn_goto_challenge",onClick:()=>{return t=n.answerId,console.log("answerId: ",t),void o(`/question/${t}`);var t},children:"풀이보기"})]})]},n.answerId)))})};var w=o(1083);const j=n=>{const[t,o]=(0,b.useState)([]),e=(0,b.useCallback)((async()=>{try{const t=await(async n=>{try{const t=await w.A.get(`/api/answerlist/${n}`);return console.log("서버응답:",t.data),t.data}catch(n){return console.error("데이터 가져오기 실패:",n),[]}})(n);o(t)}catch(n){console.error("데이터 가져오기 실패:",n)}}),[n]);return(0,b.useEffect)((()=>{e()}),[e]),t};var y=o(2394);const z=()=>{let n=new URL(window.location.href).pathname.split("/")[2];sessionStorage.setItem("problemId",n);const t=Number(n),o=(n=>{const[t,o]=(0,b.useState)(void 0),e=(0,b.useCallback)((async()=>{try{const t=await(0,y.A)(n);o(t)}catch(n){console.error("데이터 가져오기 실패:",n)}}),[n]);return(0,b.useEffect)((()=>{e()}),[e]),t})(t),e=j(t);return o&&e.length?(0,_.jsxs)("div",{className:"solution_container",children:[(0,_.jsx)("div",{className:"solution_bar",children:(0,_.jsxs)("div",{className:"solution",children:[(0,_.jsxs)("div",{className:"left",children:[(0,_.jsx)("div",{className:"solution_num",children:o.problemId}),(0,_.jsx)("div",{className:"solution_title",children:o.problemTitle})]}),(0,_.jsxs)("div",{className:"prob_score",children:[o.problemScore,(0,_.jsx)("p",{children:"점"})]})]})}),(0,_.jsx)("div",{className:"pass_num"}),(0,_.jsx)(v,{solveData:e})]}):(0,_.jsx)("div",{children:"Loading..."})}},3159:(n,t,o)=>{o.d(t,{A:()=>r});var e=o(1601),i=o.n(e),s=o(6314),l=o.n(s)()(i());l.push([n.id,'@charset "UTF-8";\n/* 풀이타이틀 */\n.solution_container {\n  max-width: 1142px;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 60px auto;\n  display: flex;\n  flex-direction: column;\n  /* 성공인원수 */\n}\n.solution_container .pass_num {\n  font-weight: bold;\n  font-size: 20px;\n  margin-left: auto;\n  margin: 40px 0px 40px auto;\n}\n.solution_container .solution_bar,\n.solution_container .solution,\n.solution_container .solutionBtn,\n.solution_container .solving,\n.solution_container .left,\n.solution_container .right {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--font-medium);\n}\n.solution_container .solution_bar {\n  justify-content: space-between;\n}\n.solution_container .solution_bar .solution {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  margin: auto;\n}\n.solution_container .solution_bar .solution .left .solution_num {\n  margin-right: 16px;\n  color: #ff8412;\n  font-weight: bold;\n  font-size: 22px;\n}\n.solution_container .solution_bar .solution .left .solution_title {\n  font-weight: bold;\n  font-size: 20px;\n  margin-right: 60px;\n}\n.solution_container .solution_bar .solution .prob_score {\n  display: flex;\n  font-weight: bold;\n  font-size: 20px;\n  color: #04ca00;\n}\n\n/* 풀이목록 */\n.solving_list {\n  margin-top: var(--margin-middle);\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.solving_list .solving {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 8px;\n  justify-content: space-between;\n}\n.solving_list .solving .left .userGen {\n  width: 44px;\n  font-size: 20px;\n  display: flex;\n  color: #04ca00;\n  font-weight: bold;\n  margin-right: 20px;\n}\n.solving_list .solving .left .userName {\n  width: 100px;\n  text-align: left;\n  font-size: 20px;\n  font-weight: bold;\n}\n.solving_list .solving .right {\n  display: flex;\n  font-size: var(--font-medium);\n  /* 풀이 버튼 */\n}\n.solving_list .solving .right .btn_fail,\n.solving_list .solving .right .btn_success {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  width: 80px;\n  height: 28px;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  font-weight: bold;\n  padding: 7px 0;\n}\n.solving_list .solving .right .btn_success {\n  border: solid 3px #5094f9;\n  color: #5094f9;\n}\n.solving_list .solving .right .btn_fail {\n  border: solid 3px #eb3434;\n  opacity: 80%;\n  color: #eb3434;\n}\n.solving_list .solving .right .process_num {\n  color: black;\n  font-size: 20px;\n  font-weight: bold;\n  margin-right: 20px;\n}\n.solving_list .solving .right .btn_goto_challenge {\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 6px 28px;\n  color: white;\n  border: solid #565656;\n  border-radius: 5px;\n  background-color: #565656;\n  font-size: 16px;\n  font-weight: bold;\n  box-shadow: 1px 3px #ccc9c9;\n  margin-left: 12px;\n}\n.solving_list .solving .right .btn_goto_challenge:hover {\n  background-color: #262626;\n  border-color: #262626;\n}\n\n/* 풀이버튼 */\n.btn_baekjoon,\n.btn_challenge {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 5px;\n  border: 2px solid;\n  background: #fff;\n  padding: 10px 24px;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.btn_baekjoon {\n  border-color: #325cc7;\n  color: #325cc7;\n  margin-right: 12px;\n}\n\n.btn_challenge {\n  border-color: #dedede;\n  color: #6a6b6f;\n}\n\n.btn_process {\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #ffffff;\n  color: #6a6b6f;\n  font-weight: bold;\n  font-size: 20px;\n  border-radius: 5px;\n  border: 2px solid #dedede;\n  margin-right: 20px;\n  text-align: center;\n  padding: 3px;\n}\n\n.solution_score {\n  font-size: 20px;\n}',""]);const r=l}}]);