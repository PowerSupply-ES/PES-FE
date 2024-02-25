import styled from "styled-components";

export const StyledQuestion = styled.div`

    .header_title {
        font-size: 20px;
    font-weight: bold;
    flex: 1;
    text-align: left;
    }
    .code_question_container {
        display: flex; 
        justify-content: space-between; 
    }
    .code_container {
        width: 657px;
        height: 564px;
        display: flex;
        align-items: center;
        margin: auto;
        border-radius: 20px;
        background-color: #3E3E3E;
        font-size: 20px;
        white-space: pre-line; 
        color: white;
    }
    .question_header {
        width: 822px;
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
    .answer_input {
        width: 822;
        height: 181px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        margin: auto;
        background-color: #ffffff;
        border: solid #ffffff;
        border-radius : 20px;
        box-shadow: 1px 3px #CCC9C9;
        overflow-wrap: break-word;
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
    .answer_button {
        width: fit-content;
        height: content;
        padding: 12px 32px;
        background-color: #9747FF;
        color: white;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        display: flex;
        justify-content: center;
        margin: auto;
        margin-top: 80px;
        align-items: center;
        cursor: pointer;
        box-shadow: 1px 3px #CCC9C9;

    }
    .title {
        width: 1376px;
    display: flex;
    font-size: 28px;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 10px;
    }
    .feedback_container {
        width: 1376px;
    height: auto;
    display: flex;
    align-items: center;
    margin: auto;
    border-radius: 5px;
    background-color: beige;
    font-size: 20px;
    white-space: pre-line; 
    margin-bottom: 10px;
    }
    
    .pass {
        width: 1057px;
        height: 60px;
        background-color: #04ca00;
        color: #ffffff;
        border-radius: 15px;
        font-size: 30px;
        font-weight: bold;
    }

    .fail {
        width: 1057px;
        height: 60px;
        background-color: #EB3434;
        color: #ffffff;
        border-radius: 15px;
        font-size: 30px;
        font-weight: bold;
    }

`;
