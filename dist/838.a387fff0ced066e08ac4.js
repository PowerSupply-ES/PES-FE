"use strict";(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[838],{2394:(e,t,o)=>{o.d(t,{A:()=>s});var a=o(3719),n=o.n(a);const s=async e=>{try{return(await n().get(`/api2/problemtitle/${e}`,{withCredentials:!0})).data}catch(e){console.log(e)}console.log("problemId:",e)}},6385:(e,t,o)=>{o.d(t,{$2:()=>l,OE:()=>r,i0:()=>c,zg:()=>i});var a=o(1594),n=o.n(a),s=o(4848);const i=e=>e?e.replace("T"," "):"",r=()=>{window.history.back()},c=e=>e.split("\n").map(((e,t)=>(0,s.jsxs)(n().Fragment,{children:[e,(0,s.jsx)("br",{})]},t))),l=e=>e.split("\n\n").map(((e,t)=>(0,s.jsxs)("span",{children:[e,(0,s.jsx)("br",{})]},t)))},947:(e,t,o)=>{o.d(t,{A:()=>d});var a=o(1594),n=o(3719),s=o.n(n);const i=e=>{const[t,o]=(0,a.useState)(null),n=(0,a.useCallback)((async()=>{try{const t=await(async e=>{try{const{data:t}=await s().get(`/api2/problem/${e}`,{withCredentials:!0});return t}catch(e){console.log(e)}})(e);o(t)}catch(e){console.error(e)}}),[e]);return(0,a.useEffect)((()=>{n()}),[n]),t};var r=o(2394);var c=o(7767);const l=e=>{const t=(0,c.Zp)(),o=(0,a.useRef)(""),[n,i]=(0,a.useState)(null);return{detail:n,textHandler:function(e){o.current=e},submitCode:async()=>{if(o.current){const{data:a,status:n}=await(async(e,t)=>{try{const o=await s().post(`/api2/submit/${t}`,{code:e,problemId:t});return{data:o.data,status:o.status}}catch(e){return console.log(e),s().isAxiosError(e)?{status:e.response?e.response.status:500}:{status:500}}})(o.current,e);a?201===n?(console.log(a),alert("문제를 맞혔습니다! 질의응답 페이지로 이동합니다."),sessionStorage.setItem("problemId",e.toString()),t(`/question/${a.answer_id}`)):202===n?(i(a.detail),alert("문제를 틀렸습니다! 다시 풀어보세요.")):500===n&&alert(`server가 응답하지 않네요! 관리자에게 상황을 공유해주세요! : ${a.message}`):alert("오류!")}else alert("코드를 입력해주세요!")}}},d=e=>{const t=(e=>{const[t,o]=(0,a.useState)(null),n=(0,a.useCallback)((async()=>{try{const t=await(0,r.A)(e);o(t||null)}catch(e){console.error(e),o(null)}}),[e]);return(0,a.useEffect)((()=>{n()}),[n]),t})(e),o=i(e),{textHandler:n,submitCode:s,detail:c}=l(e);return{title:t,problem:o,detail:c,isLogin:sessionStorage.getItem("status"),textHandler:n,submitCode:s}}},3838:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var a=o(1594),n=o.n(a),s=o(7767),i=o(3719),r=o.n(i);const c=(e,t,o)=>{const[n,s]=(0,a.useState)(""),[i,c]=(0,a.useState)(""),[l,d]=(0,a.useState)(null),[p,x]=(0,a.useState)([]),[u,b]=(0,a.useState)(0),f=(0,a.useCallback)((async()=>{try{const t=await(async e=>{try{const{data:t}=await r().get(`/api2/question/${e}`,{withCredentials:!0});return t.code}catch(e){throw console.log(e),e}})(e);null!=t&&c(t)}catch(e){console.log(e)}}),[e]),h=(0,a.useCallback)((async()=>{try{const t=await(async e=>{try{return(await r().get(`/api/answer/${e}`,{withCredentials:!0})).data}catch(e){throw console.log(e),e}})(e);d(t),s(t.answerState||"")}catch(e){console.log(e)}}),[e]),g=(0,a.useCallback)((async()=>{try{const t=await(async e=>{try{return(await r().get(`/api/comment/${e}`,{withCredentials:!0})).data}catch(e){throw console.log(e),e}})(e);let o=0;x(t);for(let e=0;e<t.length;e++)1===t[e].commentPassFail&&o++;b(o)}catch(e){console.log(e)}}),[e]);return(0,a.useEffect)((()=>{f(),h()}),[f,h]),(0,a.useEffect)((()=>{"comment"!==n&&"success"!==n&&"fail"!==n||g()}),[n,g]),{code:i,qnA:l,state:n,feedbacks:p,passCount:u,getCodes:f,getQuestions:h,postAnswer:async(t,o)=>{try{await(async(e,t,o)=>{try{await r().post(`/api/answer/${e}`,{answerFst:t,answerSec:o})}catch(e){throw console.error(e),e}})(e,t,o),alert("성공적으로 답변을 등록했습니다."),window.location.reload()}catch(e){if(r().isAxiosError(e)){const t=e.response?e.response.status:null;400===t?alert("이미 답변이 등록되어 있습니다."):403===t?alert("접근할 수 있는 사용자가 아닙니다."):console.log("알 수 없는 서버 오류가 발생했습니다.",e)}else console.log("예상하지 못한 오류가 발생했습니다.",e)}},postFeedback:async(o,a)=>{try{const n=await(async(e,t,o)=>{try{return await r().post(`/api/comment/${e}`,{comment:t,commentPassFail:o})}catch(e){throw console.error(e),e}})(e,o,a);g(),t(n.status),window.location.reload()}catch(e){if(r().isAxiosError(e)){const t=e.response?.status;403===t?alert("권한이 없습니다!"):400===t?alert("이미 댓글을 달았어요!"):console.log("알 수 없는 오류가 발생했습니다.",e)}else console.log("예상하지 못한 오류가 발생했습니다.",e)}},setCode:c}};var l=o(6385),d=o(3124),p=o(4848);const x=n().lazy((()=>Promise.all([o.e(102),o.e(401)]).then(o.bind(o,6102)))),u=e=>{let{FstHandler:t,SecHandler:o,code:n,qnA:s,setCode:i,problemId:r}=e;return(0,p.jsxs)("div",{className:"code_question_container",children:[(0,p.jsx)("div",{className:"code_container",children:(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(d.A,{}),children:(0,p.jsx)(x,{onChange:i,readOnly:!0,code:n})})}),(0,p.jsx)("div",{className:"question_container",children:"question"===s.answerState?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"question_layout",children:[(0,p.jsxs)("div",{className:"question_header",children:[(0,p.jsx)("div",{className:"question_id",children:"질문 1"}),(0,p.jsx)("div",{className:"header_title",children:s.questionContentFst})]}),(0,p.jsx)("textarea",{className:"answer_input",onChange:t})]}),(0,p.jsxs)("div",{className:"question_layout",children:[(0,p.jsxs)("div",{className:"question_header",children:[(0,p.jsx)("div",{className:"question_id",children:"질문 2"}),(0,p.jsx)("div",{className:"header_title",children:s.questionContentSec})]}),(0,p.jsx)("textarea",{className:"answer_input",onChange:o})]})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"question_header",children:[(0,p.jsx)("div",{className:"question_id",children:"질문 1"}),(0,p.jsx)("div",{className:"header_title",children:s.questionContentFst})]}),(0,p.jsx)("div",{className:"answer_input display",children:(0,l.i0)(s.answerFst)}),(0,p.jsxs)("div",{className:"question_header",children:[(0,p.jsx)("div",{className:"question_id",children:"질문 2"}),(0,p.jsx)("div",{className:"header_title",children:s.questionContentSec})]}),(0,p.jsx)("div",{className:"answer_input display",children:(0,l.i0)(s.answerSec)})]})})]})};var b=o(947),f=o(8246);const h=e=>{let{state:t,navigate:o,problemId:s}=e;const[i,r]=(0,a.useState)(!1),{title:c,problem:d}=(0,b.A)(s??-1),x=c?c.problemTitle:"제목 없음",u=d?d.problemContent:"문제 내용 없음",h=d?d.sampleInputs:[],g=d?d.sampleOutputs:[];return null===s||-1===s?(0,p.jsx)(f.f,{className:"problem_header_section",state:t,children:(0,p.jsx)("div",{className:"problem_header",children:(0,p.jsxs)("div",{className:"problem_group",children:[(0,p.jsx)("div",{className:"problem_id",children:"알수없음"}),(0,p.jsx)("div",{className:"header_title",children:"제목 없음"}),(0,p.jsx)("div",{className:"header_answer_state",children:"알수없음"})]})})}):(0,p.jsxs)(f.f,{className:"problem_header_section",state:t,children:[(0,p.jsx)("div",{className:"problem_header",children:(0,p.jsxs)("div",{className:"problem_group",children:[(0,p.jsxs)("div",{className:"problem_id",children:["문제",null!==s?s:"정보 없음"]}),(0,p.jsx)("div",{className:"header_title",children:x}),(0,p.jsx)("div",{className:"header_answer_state",children:"success"===t?"성공":"fail"===t?"실패":"미완료"})]})}),(0,p.jsxs)("div",{className:"button_group",children:[(0,p.jsxs)("button",{className:"button_problem",onClick:()=>{r((e=>!e))},children:["문제보기",i&&(0,p.jsxs)("div",{className:"dropdown_content",children:[(0,p.jsx)("div",{className:"content",style:{whiteSpace:"pre"},children:(0,l.i0)(u)}),(0,p.jsxs)("div",{className:"sample_inputs",children:[(0,p.jsx)("h3",{children:"Sample Inputs:"}),h.map(((e,t)=>(0,p.jsx)(n().Fragment,{children:(0,l.i0)(e)},t)))]}),(0,p.jsxs)("div",{className:"sample_outputs",style:{whiteSpace:"pre"},children:[(0,p.jsx)("h3",{children:"Sample Outputs:"}),g.map(((e,t)=>(0,p.jsx)(n().Fragment,{children:(0,l.i0)(e)},t)))]})]})]}),("success"===t||"fail"===t)&&(0,p.jsx)("button",{className:"button_solution",onClick:()=>o(`/solution/${s}`),children:"다른 풀이 보기"})]})]})};var g=o(6553);const m=e=>{let{navigate:t,state:o,textFst:n,handleTextFstChange:s,memberStatus:i,feedbacks:r,passCount:c,postFeedback:d}=e;const[x,u]=(0,a.useState)("rgba(4, 202, 0, 0.6)"),[b,f]=(0,a.useState)("rgba(244, 117, 117, 0.6)"),[h,m]=(0,a.useState)(null),w=e=>{m(e)},_=r?Object.values(r):[];return(0,p.jsxs)(g.k,{className:"feedback_section_1",children:[(0,p.jsx)("hr",{style:{height:2,border:"none",backgroundColor:"gray",marginTop:100}}),(0,p.jsxs)("div",{className:"feedback_section",children:["신입생"===i&&_.length<=0&&"comment"===o&&(0,p.jsx)("div",{className:"feedback_waiting_bar",onClick:()=>t("/"),children:"피드백을 기다리는 중입니다..."}),_.length>0&&_.map(((e,t)=>(0,p.jsxs)("div",{className:"feedback_container",children:[1===e.commentPassFail?(0,p.jsx)("div",{className:"feedback_result_pass",children:"PASS"}):(0,p.jsx)("div",{className:"feedback_result_fail",children:"FAIL"}),(0,p.jsxs)("div",{className:"question_header",children:[(0,p.jsx)("div",{className:"feedback_index",children:`Feedback ${t+1}`}),(0,p.jsxs)("div",{className:"feedback_writer",children:[e.writerGen,"기"]}),(0,p.jsx)("div",{className:"feedback_writer",children:e.writerName})]}),(0,p.jsx)("div",{className:"feedback_content display",children:(0,l.i0)(e.commentContent)})]},t))),("재학생"===i||"관리자"===i)&&_.length<=1&&"comment"===o&&(0,p.jsxs)("div",{className:"feed_section",children:[(0,p.jsx)("div",{className:"question_header",children:(0,p.jsx)("div",{className:"feedback_index",children:"Feedback"})}),(0,p.jsx)("textarea",{className:"feedback_content input",placeholder:"피드백을 입력해주세요.",onChange:s}),(0,p.jsxs)("div",{className:"feedback_select_section",children:[(0,p.jsxs)("div",{className:"button_container",children:[(0,p.jsx)("div",{className:"select_button pass",style:{color:x},onClick:()=>{w("1"),f("rgba(244, 117, 117, 0.6)"),u("rgba(4, 202, 0, 1)")},children:"PASS"}),(0,p.jsx)("div",{className:"select_button fail",style:{color:b},onClick:()=>{w("0"),u("rgba(4, 202, 0, 0.6)"),f("rgba(244, 117, 117, 1)")},children:"FAIL"})]}),(0,p.jsx)("p",{className:"select_comment",children:"PASS 혹은 FAIL을 선택해주세요."})]}),(0,p.jsx)("button",{className:"feedback_button",onClick:()=>{n&&n?h?window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?")&&d(n,parseInt(h,10)):alert("통과 여부를 선택해주세요!"):alert("내용을 입력해주세요!")},children:"답변하기"})]})]}),_.length>=2&&(0,p.jsxs)("div",{className:"result_container",children:[(0,p.jsx)("div",{className:c>=1&&_.length>1?"result success":"result fail",onClick:()=>t("/"),children:c>=1&&_.length>1?`축하합니다! 성공적으로 통과했습니다!  ( ${c}/2 )`:`질문테스트에 통과하지 못했습니다.  ( ${c}/2 )`}),(0,p.jsx)("p",{children:"클릭시 홈화면으로 이동합니다"})]})]})},w=e=>{let{navigate:t,code:o,qnA:n,state:s,setCode:i,textFst:r,handleTextFstChange:c,postAnswer:l}=e;const d=Number(sessionStorage.getItem("problemId")),[x,b]=(0,a.useState)("");return(0,p.jsxs)(g.k,{className:"problem_answer_section",children:[(0,p.jsx)(h,{state:s,navigate:t,problemId:d}),"  ",n&&(0,p.jsx)(u,{FstHandler:c,SecHandler:e=>{b(e.target.value)},code:o,qnA:n,setCode:i,problemId:d}),"question"===s&&(!n.answerFst||!n.answerSec)&&(0,p.jsx)("div",{className:"btn_container",children:(0,p.jsx)("button",{className:"button answer",onClick:()=>{r&&x?window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?")&&l(r,x):alert("내용을 입력해주세요!")},children:"답변하기"})})]})},_=()=>{const e=(0,s.Zp)();let t=new URL(window.location.href),o=Number(t.pathname.split("/")[2]);console.log("answerId= ",o);Number(sessionStorage.getItem("problemId"));const[n,i]=(0,a.useState)(""),r=e=>{i(e.target.value),console.log("e.target.value = ",e.target.value)},{code:l,qnA:x,state:u,feedbacks:b,passCount:f,postFeedback:h,postAnswer:g,setCode:_}=c(o,(e=>{400===e?alert("이미 댓글을 달았습니다."):403===e&&alert("접근할 수 있는 사용자가 아닙니다.")})),k=sessionStorage.getItem("memberStatus");return(0,a.useEffect)((()=>{null===k&&(alert("풀이 열람 권한이 없습니다!"),e(-1))}),[k,x,e]),null===x?(0,p.jsx)(d.A,{}):(0,p.jsx)("div",{className:"success"===u?"successPage":"fail"===u?"failPage":"nonePage",children:(0,p.jsx)("div",{children:x?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(w,{navigate:e,code:l,qnA:x,state:u,setCode:_,textFst:n,handleTextFstChange:r,postAnswer:g}),(0,p.jsx)(m,{navigate:e,memberStatus:k,feedbacks:b,passCount:f,state:u,postFeedback:h,textFst:n,handleTextFstChange:r})]}):(0,p.jsx)(d.A,{})})})}},8246:(e,t,o)=>{o.d(t,{f:()=>a});const a=o(1250).Ay.div`
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
`},6553:(e,t,o)=>{o.d(t,{k:()=>a});const a=o(1250).Ay.div`
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
`}}]);