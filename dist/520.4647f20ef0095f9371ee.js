"use strict";(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[520],{2394:(t,e,o)=>{o.d(e,{A:()=>a});var n=o(3719),i=o.n(n);const a=async t=>{try{return(await i().get(`/api2/problemtitle/${t}`,{withCredentials:!0})).data}catch(t){console.log(t)}console.log("problemId:",t)}},6385:(t,e,o)=>{o.d(e,{$2:()=>c,OE:()=>r,i0:()=>l,zg:()=>s});var n=o(1594),i=o.n(n),a=o(4848);const s=t=>t?t.replace("T"," "):"",r=()=>{window.history.back()},l=t=>t.split("\n").map(((t,e)=>(0,a.jsxs)(i().Fragment,{children:[t,(0,a.jsx)("br",{})]},e))),c=t=>t.split("\n\n").map(((t,e)=>(0,a.jsxs)("span",{children:[t,(0,a.jsx)("br",{})]},e)))},947:(t,e,o)=>{o.d(e,{A:()=>d});var n=o(1594),i=o(3719),a=o.n(i);const s=t=>{const[e,o]=(0,n.useState)(null),i=(0,n.useCallback)((async()=>{try{const e=await(async t=>{try{const{data:e}=await a().get(`/api2/problem/${t}`,{withCredentials:!0});return e}catch(t){console.log(t)}})(t);o(e)}catch(t){console.error(t)}}),[t]);return(0,n.useEffect)((()=>{i()}),[i]),e};var r=o(2394);var l=o(7767);const c=t=>{const e=(0,l.Zp)(),o=(0,n.useRef)(""),[i,s]=(0,n.useState)(null);return{detail:i,textHandler:function(t){o.current=t},submitCode:async()=>{if(o.current){const{data:n,status:i}=await(async(t,e)=>{try{const o=await a().post(`/api2/submit/${e}`,{code:t,problemId:e});return{data:o.data,status:o.status}}catch(t){return console.log(t),a().isAxiosError(t)?{status:t.response?t.response.status:500}:{status:500}}})(o.current,t);n?201===i?(console.log(n),alert("문제를 맞혔습니다! 질의응답 페이지로 이동합니다."),sessionStorage.setItem("problemId",t.toString()),e(`/question/${n.answer_id}`)):202===i?(s(n.detail),alert("문제를 틀렸습니다! 다시 풀어보세요.")):500===i&&alert(`server가 응답하지 않네요! 관리자에게 상황을 공유해주세요! : ${n.message}`):alert("오류!")}else alert("코드를 입력해주세요!")}}},d=t=>{const e=(t=>{const[e,o]=(0,n.useState)(null),i=(0,n.useCallback)((async()=>{try{const e=await(0,r.A)(t);o(e||null)}catch(t){console.error(t),o(null)}}),[t]);return(0,n.useEffect)((()=>{i()}),[i]),e})(t),o=s(t),{textHandler:i,submitCode:a,detail:l}=c(t);return{title:e,problem:o,detail:l,isLogin:sessionStorage.getItem("status"),textHandler:i,submitCode:a}}},520:(t,e,o)=>{o.r(e),o.d(e,{default:()=>p});var n=o(1594),i=o.n(n),a=o(8246),s=o(947),r=o(6385),l=o(3124),c=o(4848);const d=i().lazy((()=>Promise.all([o.e(102),o.e(401)]).then(o.bind(o,6102)))),p=()=>{let t=new URL(window.location.href),e=Number(t.pathname.split("/")[2]);const{title:o,problem:p,detail:x,isLogin:u,textHandler:h,submitCode:b}=(0,s.A)(e);return(0,c.jsx)("div",{children:o&&p?(0,c.jsxs)(a.f,{state:"null",children:[(0,c.jsx)("div",{className:"problem_header",children:(0,c.jsxs)("div",{className:"problem_group",children:[(0,c.jsxs)("div",{className:"problem_id",children:["문제",e]}),(0,c.jsx)("div",{className:"header_title",children:o?.problemTitle}),(0,c.jsx)("div",{className:"header_answer_state",children:"미완료"})]})}),(0,c.jsxs)("div",{className:"problem_section",children:[(0,c.jsxs)("div",{className:"content_container",children:[(0,c.jsxs)("div",{className:"top",style:{whiteSpace:"pre"},children:[(0,c.jsx)("p",{className:"underline",children:"문제"}),(0,c.jsx)("div",{className:"prob_text",children:p?.problemContent&&(0,r.i0)(p.problemContent)})]}),(0,c.jsxs)("div",{className:"bottom",children:[(0,c.jsxs)("div",{className:"sample_inputs",style:{whiteSpace:"pre"},children:[(0,c.jsx)("p",{className:"underline",children:"Sample Inputs"}),(0,c.jsx)("div",{className:"input_text",children:p?.sampleInputs&&p.sampleInputs.map(((t,e)=>(0,c.jsx)(i().Fragment,{children:(0,r.$2)(t)},e)))})]}),(0,c.jsxs)("div",{className:"sample_outputs",style:{whiteSpace:"pre"},children:[(0,c.jsx)("p",{className:"underline",children:"Sample Outputs"}),(0,c.jsx)("div",{className:"output_text",children:p?.sampleOutputs&&p.sampleOutputs.map(((t,e)=>(0,c.jsx)(i().Fragment,{children:(0,r.$2)(t)},e)))})]})]})]}),(0,c.jsx)("div",{className:"code_section",children:u?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(l.A,{}),children:(0,c.jsx)(d,{code:"",onChange:h,readOnly:!1})}),null!=x&&(0,c.jsxs)("div",{className:"detail_container",children:[(0,c.jsx)("h3",{children:"틀린 이유"}),(0,c.jsx)("div",{className:"detail_content",children:x})]})]}):(0,c.jsx)("textarea",{disabled:!0,className:"code_input",placeholder:"로그인 후 이용해주세요."})})]}),(0,c.jsx)("button",{className:u?"submit_button":"submit_button disabled",onClick:()=>{u&&window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?")&&b()},children:"제출"})]}):(0,c.jsx)(l.A,{})})}},8246:(t,e,o)=>{o.d(e,{f:()=>n});const n=o(1250).Ay.div`
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
`}}]);