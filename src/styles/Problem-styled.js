import styled from "styled-components";

export const StyledProblem = styled.div`
    .problem_header {
        width: 1376px;
        height: 78px;
        display: flex;
        align-items: center;
        margin: auto;
    }
    .problem_id {
        width: 100px;
        height: 60px;
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        line-height: 60px;
    }
    .header_title {
        font-size: 28px;
        font-weight: bold;
        flex: 1;
        text-align: left;
    }
    .description {
        width: 1376px;
        font-size: 20px;
        align-items: center;
        margin: auto;
        background-color: beige;
        text-align: left;
    }
    .content_container {
        display: flex;
    justify-content: space-between;
    width: 1376px;
    margin: auto;
    padding: 20px;
    }
    .input_data {
        width: 300px;
    height: 300px;
    font-size: 20px;
    text-align: center;
    align-items: center;
    background-color: lavender;
    }
    .output_data {
        width: 300px;
    height: 300px;
    font-size: 20px;
    text-align: center;
    align-items: center;
    background-color: lavender;
    }
    .code_input {
        width: 1376px;
    height: 300px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: beige;
    overflow-wrap: break-word;
    }
    .submit_button {
        width: 100px;
    height: 52px;
    background-color: #FF8412;
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
        width: 1376px;
    display: flex;
    font-size: 28px;
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
`;