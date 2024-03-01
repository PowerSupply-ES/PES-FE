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
        justify-content: space-between;
    }
    .problem_group {
        display: flex;
        align-items: center;
    }
    .problem_id {
        width: 80px;
        height: fit-content;
        padding: 8px 0;
        font-size: 20px;
        font-weight: bold;
        background-color: #ffffff;
        color : #325CC7;
        border-radius : 5px;
        text-align: center;
        margin-right: 20px;
        box-shadow: 1px 3px #CCC9C9;
    }
    .header_title {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin-right: 20px;
    }
    .header_score {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin-left: 20px;
    }
    .header_answer_state {
        width: 70px;
        padding: 5px 0;
        color: ${props => props.state === "success" ? "#5094F9" : props.state === "fail" ? "#EB3434" : "#6A6B6F"};
        font-size: 20px;
        font-weight: bold;
        margin-right: 10px;
        border-radius : 5px;
        background-color: #ffffff;
        box-shadow: 1px 3px #CCC9C9;
        border: solid 3px ${props => props.state === "success" ? "#5094F9" : props.state === "fail" ? "#EB3434" : "#DEDEDE"};
        box-sizing: border-box;
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
        width: 40%;
        height: auto;
        justify-content: center;
        font-size: 18px;
        flex: 3;

        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        border-radius : 20px;
        box-shadow: 1px 3px #CCC9C9;
        margin-right: 20px;
        overflow-wrap: break-word;
    }

    .code_section{
        flex: 5;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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

    .content_container > .content {
        width: 90%;
        text-align: left;
        margin: auto;
    }
    .content_container > .sample_inputs {
        width: 90%;
        text-align: left;
        margin: auto;
    }
    .content_container > .sample_outputs {
        width: 90%;
        text-align: left;
        margin: auto;
    }

    .code_input {
        width: 100%;
        height: auto;
        min-height: 564px;
        font-size: 20px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        background-color: #3e3e3e;
        overflow-wrap: break-word;
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
        background-color: rgba(151, 71, 255, 0.4);
        font-size: 20px;
    }
`;