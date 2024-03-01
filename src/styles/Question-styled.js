import styled from "styled-components";

export const StyledQuestion = styled.div`

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
        display: flex;
        align-items: center;
        border-radius: 20px;
        background-color: #3E3E3E;
        font-size: 20px;
        white-space: pre-line; 
        color: white;
        overflow-wrap: break-word;

    }
    .question_container{
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
        margin: auto;
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
        border-radius : 5px;
        background-color: #ffffff;
        box-shadow: 1px 3px #CCC9C9;
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
        border-radius : 20px;
        box-shadow: 1px 3px #CCC9C9;
        overflow-wrap: break-word;
        padding: 4px 12px;
    }
    .answer_input.display {
        text-align: left;
        padding: 10px;
        box-sizing: border-box;
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
    background: #e7e6f696;  /*스크롤바 뒷 배경 색상*/
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
        box-shadow: 1px 3px #CCC9C9;
    }
    .button.answer {
        background-color: #9747FF;
        margin: 60px auto;
    }
    .btn_container{
        display: flex;
        justify-content: center;

        width: 80%;
        margin: auto;
    }

    .button_problem {
        width: fit-content;
        height: fit-content;
        padding: 8px 20px;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 1px 3px #CCC9C9;

        background-color: #3B3B3B;
        font-size:16px;
    }
    .button_problem:hover{
        background-color: #3B3B3B; opacity:80%;
    }
    .button_solution {
        width: fit-content;
        height: fit-content;
        padding: 8px 20px;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 1px 3px #CCC9C9;

        background-color: rgba(109,99,228,0.6);
        margin-left: 20px;
        font-size:16px;
    }
    .button_solution:hover{
        background-color: rgba(109,99,228,0.8);
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
        background-color: rgba(109,99,228,0.6);
        color: #ffffff;
        border-radius: 15px;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 1px 3px #CCC9C9;

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
        background-color: #9747FF; opacity:60%;
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
    }
    .feedback_writer {
        margin-left: 20px;
        font-size: 20px;
        color:#3E3E3E;
    }
    .feedback_content {
        width: 100%;
        font-size: 20px;
        background-color: #ffffff;
        border: solid #ffffff;
        border-radius : 20px;
        box-shadow: 1px 3px #CCC9C9;
        overflow-wrap: break-word;
        margin-top: 10px;
        color:#3E3E3E;
    }
    .feedback_content.input {
        height: 270px;
    }
    .feedback_content.display {
        height: 250px;
        text-align: left;
        padding: 10px;
        box-sizing: border-box;
    }
    .feedback_content::-webkit-scrollbar {
    width: 10px;  
    }
    .feedback_content::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    }
    .feedback_content::-webkit-scrollbar-track {
    background: #e7e6f696;  /*스크롤바 뒷 배경 색상*/
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
        margin-top: 10px;
    }
    .select_button {
        font-size: 50px;
        font-weight: bold;
        cursor: pointer;
    }
    .select_button.pass {
        color: ${(props) => (props.isSelected ? "rgba(4, 202, 0, 1)" : "rgba(4, 202, 0, 0.6)")};
        &:hover {
            color: rgba(4, 202, 0, 1);
        }
    }
    .select_button.fail {
        color: ${(props) => (props.isSelected ? "rgba(244, 117, 117, 1)" : "rgba(244, 117, 117, 0.6)")};
        &:hover {
            color: rgba(244, 117, 117, 1);
        }
    }
    .select_comment {
        font-size: 24px;
        color: #6F6F6F;
    }
    .feedback_button {
        width: 100%;
        height: 80px;
        border-radius: 5px;
        background-color: rgba(109,99,228,0.6);
        color: #ffffff;
        font-size: 30px;
        font-weight: bold;
        align-items: center;
        margin-top: 10px;
        cursor: pointer;
    }
    .feedback_button:hover {
        background-color: rgba(109,99,228,1);
    }


    .result_container > p{
        color: #665F5F; opacity:60%;
    }
    .result.success {
        width: 70%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 120px auto 10px;
        padding: 12px 0;

        background-color: #04ca00; opacity:57%;
        color: #ffffff;
        border-radius: 15px;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 1px 3px #CCC9C9;
        cursor: pointer;
    }
    .result.success:hover{
        background-color: #04ca00;opacity:100%;
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
        box-shadow: 1px 3px #CCC9C9;

        cursor: pointer;
    }
    .result.fail:hover{
        background-color: rgba(244, 117, 117, 1.0);
    }
    .loading {
        height: 1500px
    }
`;
