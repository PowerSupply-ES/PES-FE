import styled from "styled-components";

export const StyledProblem = styled.div`
    
    
    .problem_header {
        width: 80%;
        height: 78px;
        display: flex;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 40px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .problem_id {
        width: 80px;
        height: fit-content;
        padding: 8px 0;
        font-size: 20px;
        font-weight: bold;
        background-color: #ffffff;
        color : #325CC7;
        // border : solid #325CC7;
        border-radius : 5px;
        text-align: center;
        // line-height: 60px;
        margin-right: 20px;
        box-shadow: 1px 3px #CCC9C9;
    }
    .header_title {
        font-size: 20px;
        font-weight: bold;
        flex: 1;
        text-align: left;
    }
    .header_score {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin-left: 20px;
    }
    .description {
        width: 1376px;
        font-size: 20px;
        align-items: center;
        margin: auto;
        background-color: beige;
        text-align: left;
    }

    .promblem_section{
        width:80%;
        height:auto;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .content_container {
        // display: flex;
        // justify-content: space-between;
        // width: 1376px;
        // margin: auto;
        // padding: 20px;

        width: 606px;
        height: 564px;

        flex: 3;

        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        border-radius : 20px;
        box-shadow: 1px 3px #CCC9C9;
        margin-right: 20px;
    }

    .code_section{
        flex: 5;
        display: flex;
        flex-direction: column;
    }

    .content_container > .top,
    .content_container > .bottom{
        width: 100%;

        display: flex;
        flex-direction: column;
    }
    .content_container > .top > h2,
    .content_container > .bottom > h2
    {
        width: 100%;
        justify-content: center;
        
        font-size : 16px;
        margin: 15px auto;
    }

    .input_data {
        width: 80%;
        height: 300px;
        font-size: 20px;
        display: flex;
    
        text-align: center;
        align-items: center;
        margin: auto;

    }
    .output_data {
        width: 80%;
        height: 300px;
        font-size: 20px;
        text-align: center;
        align-items: center;
        margin: auto;
    }

    
    .code_input {
        width: 817px;
        height: 564px;
        font-size: 20px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        background-color: #3e3e3e;
        overflow-wrap: break-word;
        border-radius : 20px;
        padding: 16px 8px 0 12px;
        box-shadow: 1px 3px #CCC9C9;
    }

    .submit_button {
        width: fit-content;
        height: fit-content;
        background-color: #9747FF;
        color: white;
        font-size: 24px;
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
`;