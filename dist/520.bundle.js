"use strict";(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[520],{2394:(e,n,t)=>{t.d(n,{A:()=>a});var s=t(1083);const a=async e=>{try{return(await s.A.get(`/api2/problemtitle/${e}`,{withCredentials:!0})).data}catch(e){console.log(e)}console.log("problemId:",e)}},6385:(e,n,t)=>{t.d(n,{$2:()=>i,OE:()=>l,i0:()=>o,zg:()=>r});var s=t(6540),a=t(4848);const r=e=>e?e.replace("T"," "):"",l=()=>{window.history.back()},o=e=>e.split("\n").map(((e,n)=>(0,a.jsxs)(s.Fragment,{children:[e,(0,a.jsx)("br",{})]},n))),i=e=>e.split("\n\n").map(((e,n)=>(0,a.jsxs)("span",{children:[e,(0,a.jsx)("br",{})]},n)))},6102:(e,n,t)=>{t.d(n,{A:()=>r}),t(6540);var s=t(470),a=(t(8940),t(7826),t(1289),t(4848));const r=e=>{let{code:n,onChange:t,readOnly:r}=e;return(0,a.jsx)(s.Ay,{mode:"c_cpp",theme:"monokai",onChange:e=>{t(e)},readOnly:r,value:n,fontSize:16,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:4,cursorWidth:2},style:{width:"90%",height:"100%"},editorProps:{$blockScrolling:!0}})}},947:(e,n,t)=>{t.d(n,{A:()=>c});var s=t(6540),a=t(1083);const r=e=>{const[n,t]=(0,s.useState)(null),r=(0,s.useCallback)((async()=>{try{const n=await(async e=>{try{const{data:n}=await a.A.get(`/api2/problem/${e}`,{withCredentials:!0});return n}catch(e){console.log(e)}})(e);t(n)}catch(e){console.error(e)}}),[e]);return(0,s.useEffect)((()=>{r()}),[r]),n};var l=t(2394);var o=t(7767);const i=e=>{const n=(0,o.Zp)(),t=(0,s.useRef)(""),[r,l]=(0,s.useState)(null);return{detail:r,textHandler:function(e){t.current=e},submitCode:async()=>{if(t.current){const{data:s,status:r}=await(async(e,n)=>{try{const t=await a.A.post(`/api2/submit/${n}`,{code:e,problemId:n});return{data:t.data,status:t.status}}catch(e){return console.log(e),a.A.isAxiosError(e)?{status:e.response?e.response.status:500}:{status:500}}})(t.current,e);s?201===r?(console.log(s),alert("문제를 맞혔습니다! 질의응답 페이지로 이동합니다."),sessionStorage.setItem("problemId",e.toString()),n(`/question/${s.answer_id}`)):202===r?(l(s.detail),alert("문제를 틀렸습니다! 다시 풀어보세요.")):500===r&&alert(`server가 응답하지 않네요! 관리자에게 상황을 공유해주세요! : ${s.message}`):alert("오류!")}else alert("코드를 입력해주세요!")}}},c=e=>{const n=(e=>{const[n,t]=(0,s.useState)(null),a=(0,s.useCallback)((async()=>{try{const n=await(0,l.A)(e);t(n||null)}catch(e){console.error(e),t(null)}}),[e]);return(0,s.useEffect)((()=>{a()}),[a]),n})(e),t=r(e),{textHandler:a,submitCode:o,detail:c}=i(e);return{title:n,problem:t,detail:c,isLogin:sessionStorage.getItem("status"),textHandler:a,submitCode:o}}},520:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var s=t(6540),a=t(8246),r=t(947),l=t(6102),o=t(6385),i=t(4848);const c=()=>{let e=new URL(window.location.href),n=Number(e.pathname.split("/")[2]);const{title:t,problem:c,detail:d,isLogin:p,textHandler:u,submitCode:m}=(0,r.A)(n);return(0,i.jsx)("div",{children:t&&c?(0,i.jsxs)(a.f,{state:"null",children:[(0,i.jsx)("div",{className:"problem_header",children:(0,i.jsxs)("div",{className:"problem_group",children:[(0,i.jsxs)("div",{className:"problem_id",children:["문제",n]}),(0,i.jsx)("div",{className:"header_title",children:t?.problemTitle}),(0,i.jsx)("div",{className:"header_answer_state",children:"미완료"})]})}),(0,i.jsxs)("div",{className:"problem_section",children:[(0,i.jsxs)("div",{className:"content_container",children:[(0,i.jsxs)("div",{className:"top",style:{whiteSpace:"pre"},children:[(0,i.jsx)("p",{className:"underline",children:"문제"}),(0,i.jsx)("div",{className:"prob_text",children:c?.problemContent&&(0,o.i0)(c.problemContent)})]}),(0,i.jsxs)("div",{className:"bottom",children:[(0,i.jsxs)("div",{className:"sample_inputs",style:{whiteSpace:"pre"},children:[(0,i.jsx)("p",{className:"underline",children:"Sample Inputs"}),(0,i.jsx)("div",{className:"input_text",children:c?.sampleInputs&&c.sampleInputs.map(((e,n)=>(0,i.jsx)(s.Fragment,{children:(0,o.$2)(e)},n)))})]}),(0,i.jsxs)("div",{className:"sample_outputs",style:{whiteSpace:"pre"},children:[(0,i.jsx)("p",{className:"underline",children:"Sample Outputs"}),(0,i.jsx)("div",{className:"output_text",children:c?.sampleOutputs&&c.sampleOutputs.map(((e,n)=>(0,i.jsx)(s.Fragment,{children:(0,o.$2)(e)},n)))})]})]})]}),(0,i.jsx)("div",{className:"code_section",children:p?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.A,{code:"",onChange:u,readOnly:!1}),null!=d&&(0,i.jsxs)("div",{className:"detail_container",children:[(0,i.jsx)("h3",{children:"틀린 이유"}),(0,i.jsx)("div",{className:"detail_content",children:d})]})]}):(0,i.jsx)("textarea",{disabled:!0,className:"code_input",placeholder:"로그인 후 이용해주세요."})})]}),(0,i.jsx)("button",{className:p?"submit_button":"submit_button disabled",onClick:()=>{p&&window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?")&&m()},children:"제출"})]}):(0,i.jsx)("div",{className:"loading",children:"Loading..."})})}},1237:(e,n,t)=>{t.d(n,{A:()=>o});var s=t(1601),a=t.n(s),r=t(6314),l=t.n(r)()(a());l.push([e.id,'@charset "UTF-8";\n.App {\n  text-align: center;\n  background-color: #e9e9eb;\n}\n\n:root {\n  --Font1: "Pretendard-Regular";\n}\n\n@font-face {\n  font-family: "Pretendard-Regular";\n  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");\n  font-weight: 400;\n  font-style: normal;\n}\n/* -----공통요소----- */\n* {\n  list-style-type: none;\n  text-decoration: none;\n  margin: 0px;\n  padding: 0px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n/* question페이지에서 fail/pass에 따른 배경화면 변화 */\n.failPage {\n  background-color: -color;\n  padding: 10px 0 140px;\n  margin-bottom: -300px;\n}\n\n.successPage {\n  background-color: #ebebfc;\n  padding: 10px 0 140px;\n  margin-bottom: -300px;\n}\n\n.nonePage {\n  background-color: #e9e9eb;\n  padding: 10px 0 140px;\n  margin-bottom: -300px;\n}',""]);const o=l},8940:(e,n,t)=>{var s=t(5072),a=t.n(s),r=t(7825),l=t.n(r),o=t(7659),i=t.n(o),c=t(5056),d=t.n(c),p=t(540),u=t.n(p),m=t(1113),h=t.n(m),x=t(1237),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=u(),a()(x.A,b),x.A&&x.A.locals&&x.A.locals}}]);