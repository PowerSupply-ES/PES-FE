import styled from "styled-components";

export const StyledQuestion = styled.div`
    .header_title {
        font-size: 28px;
    font-weight: bold;
    flex: 1;
    text-align: left;
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
    .question_header {
        width: 1376px;
    height: 80px;
    display: flex;
    align-items: center;
    margin: auto;
    }
    .question_id {
        width: 100px;
    height: 60px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 5px;
    border: 2px solid #325cc7;
    color: #325cc7;
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;
    }
    .answer_input {
        width: 1376px;
    height: 250px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: beige;
    overflow-wrap: break-word;
    }
    .answer_button {
        width: 216px;
    height: 60px;
    background-color: #FFAC30;
    color: white;
    font-size: 28px;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
    align-items: center;
    cursor: pointer;
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
`;
