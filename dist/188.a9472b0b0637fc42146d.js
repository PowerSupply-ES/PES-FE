"use strict";(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[188],{7858:(t,e,o)=>{o.d(e,{A:()=>r});var i=o(3719),n=o.n(i);const r=async(t,e)=>{const o="/manageFeed"===e.pathname?"/api/admin/problemlist":"/api/problemlist";try{const e={withCredentials:!0};t((await n().get(o,e)).data)}catch(t){console.log("Failed to fetch list:",t)}}},5945:(t,e,o)=>{o.d(e,{H:()=>a,c:()=>p});var i=o(1594),n=o(1250),r=o(4848);const a=()=>{const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=document.createElement("script");e.setAttribute("src","https://t1.daumcdn.net/kas/static/ba.min.js"),e.setAttribute("charset","utf-8"),e.setAttribute("async","true");const o=t.current;return o&&o.appendChild(e),()=>{o&&o.removeChild(e)}}),[]),(0,r.jsx)(c,{children:(0,r.jsx)("div",{ref:t,children:(0,r.jsx)("ins",{className:"kakao_ad_area",style:{display:"none"},"data-ad-unit":"DAN-vGny0Q5scRDlw6pg","data-ad-width":"728","data-ad-height":"90"})})})},c=n.Ay.div`
  display: flex;
  align-items: center;
  background-color: #272727;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 20px 0;
  margin: auto;
  margin-bottom: 48px;
`;var d=o(7767),s=o(1330),l=o(1468);const p=t=>{const e=(0,d.Zp)(),{memberStatus:o}=(0,l.d4)((t=>t.user)),i=o=>{o?(sessionStorage.setItem("problemId",t.pid.toString()),sessionStorage.getItem("problemId"),e(`/question/${t.answerId}`)):e(`/problem/${t.pid}`)};return(0,r.jsx)(s.HF,{state:"success",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"problem_id",onClick:()=>{i(t.answerId)},children:t.pid}),(0,r.jsx)("div",{className:"problem_title",onClick:()=>{i(t.answerId)},children:t.ptitle}),(0,r.jsxs)("div",{className:"grade",children:["점수 ",t.grade]}),(0,r.jsx)("button",{className:"button",onClick:()=>e(`/solution/${t.pid}`),disabled:!1,children:"풀이보기"})]})})}},597:(t,e,o)=>{o.d(e,{A:()=>r});var i=o(5945),n=(o(1594),o(4848));const r=t=>{let{problmeList:e}=t;return(0,n.jsx)("div",{className:"problem_wrapper",children:e.map((t=>(0,n.jsx)(i.c,{pid:t.problemId,ptitle:t.problemTitle,grade:t.problemScore,answerId:t.answerId,state:t.answerState},t.problemId)))})}},8188:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});var i=o(597),n=o(7858),r=o(1594),a=o(7767),c=o(1468);var d=o(4848);const s=()=>{const{list:t}=(()=>{const{memberStatus:t}=(0,c.d4)((t=>t.user))||"",[e,o]=(0,r.useState)([]),i=(0,a.zy)();return(0,r.useEffect)((()=>{(0,n.A)(o,i)}),[t,i]),{list:e}})();return(0,d.jsx)(i.A,{problmeList:t})}},5546:(t,e,o)=>{o.d(e,{J:()=>r,L:()=>n});var i=o(1250);const n=i.Ay.div`
  
  .list_wrapper {
    display: flex;
    
  }
  .list_container {
    margin-right: 5%;
    width: 60%;
  }

  .ranking_container {
    width: 20%;
    min-width: fit-content;

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
    font-family: "Pretendard-Regular";
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
`,r=i.Ay.div`
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
`},8246:(t,e,o)=>{o.d(e,{f:()=>i});const i=o(1250).Ay.div`
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
        // color: ${t=>"success"===t.state?"#5094F9":"fail"===t.state?"rgba(235, 52, 52, 0.8)":"#6A6B6F"};
        // background-color: #ffffff;

        /* border: solid 3px ${t=>"success"===t.state?"#5094F9":"fail"===t.state?"rgba(235, 52, 52, 0.8)":"#DEDEDE"};
        background-color: ${t=>"success"===t.state?"#0025cae0; opacity:70%;":"fail"===t.state?"rgb(255, 53, 53, 0.9)":"#3B3B3B; opacity:70%"}; */
        
        color: ${t=>"success"===t.state?"#0025cae0; opacity:70%;":"fail"===t.state?"rgb(255, 53, 53, 0.9)":"#3B3B3B; opacity:70%"};
        border: solid 3px ${t=>"success"===t.state?"#0025cae0; opacity:70%;":"fail"===t.state?"rgb(246, 73, 73, 0.9)":"#3B3B3B; opacity:70%"};

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
`},6553:(t,e,o)=>{o.d(e,{k:()=>i});const i=o(1250).Ay.div`
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
    color: ${t=>t.isSelected?"rgba(4, 202, 0, 1)":"rgba(4, 202, 0, 0.6)"};
    &:hover {
      color: rgba(4, 202, 0, 1);
    }
    margin-right: 20px;
  }
  .select_button.fail {
    color: ${t=>t.isSelected?"rgba(244, 117, 117, 1)":"rgba(244, 117, 117, 0.6)"};
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
`},1330:(t,e,o)=>{o.d(e,{JW:()=>r.J,HF:()=>n,Lb:()=>r.L,HU:()=>a});var i=o(1250);const n=i.Ay.div`
  .container {
    display: flex;
    flex-direction: row;
    height: fit-content;
    min-width: fit-content;
    align-items: center;
    margin: auto;
    padding: 8px 16px 8px 0px;
    border-radius: 8px;

    background-color: ${t=>null===t.state?"#DEDEDE":"comment"===t.state||"question"===t.state?"rgba(243, 242, 242, 0.737)":"white"};
    transition: background-color 0.3s; 
    &:hover {
      background-color: ${t=>null===t.state?"#DEDEDE":"rgba(243, 242, 242, 0.737)"};
    }
  }

  .problem_id {
    width: 100px;
    height: 34px;
    color: ${t=>"success"===t.state?"#04CA00":"fail"===t.state?"#FF8412":"black"};
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
    min-width: fit-content;
    height: fit-content;    
    padding: 7px 30px;
    box-shadow: 1px 1px #ccc9c9;

    color: ${t=>"success"===t.state||"fail"===t.state?"white":"#56565692"};

    background-color: ${t=>"success"===t.state?"rgba(109, 99, 228, 0.8)":"fail"===t.state?"rgba(244, 117, 117, 0.8)":(t.state,"white")};
    &:hover {
      background-color: ${t=>"success"===t.state?"rgba(109, 99, 228, 1.0)":"fail"===t.state?"rgba(244, 117, 117, 1.0)":""};
    }
    border-radius: 8px;
    font-size: 17px;
    font-weight: bold;

    text-align: center;
    border: ${t=>"success"===t.state||"fail"===t.state?"none":null===t.state?"#d6d6d6cc":"2px solid #DEDEDE"};
    transition: background-color 0.3s;
    margin-right: 14px;
    pointer-events: ${t=>"success"===t.state||"fail"===t.state?"auto":"none"};
  }
`;var r=o(5546);o(8246),o(6553);const a=i.Ay.div`
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
    min-width: fit-content;
  }
`}}]);
//# sourceMappingURL=188.a9472b0b0637fc42146d.js.map