import styled from "styled-components";

export const StyledQuestion = styled.div`

    .code_question_container {
        width: 90%;
        display: flex; 
        justify-content: space-between; 
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .code_container {
        width: 40%;
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
    .question_container{
        width: 50%;
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
        width: 80%;
        height: 181px;
        font-size: 20px;
        display: flex;
        margin: auto;
        background-color: #ffffff;
        border: solid #ffffff;
        border-radius : 20px;
        box-shadow: 1px 3px #CCC9C9;
        overflow-wrap: break-word;

        div {
            text-align: left;
            padding: 10px;
            box-sizing: border-box;
        }
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
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: fit-content;
        height: fit-content;
        padding: 8px 32px;
        background-color: #9747FF;
        color: white;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        display: flex;
        justify-content: center;
        margin-top: 40px;
        align-items: center;
        cursor: pointer;
        box-shadow: 1px 3px #CCC9C9;
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
    .feedback_container {
        width: 45%;
    }
    .feedback_result {
        width: 100px;
        text-align: left;
        font-size: 50px;
        font-weight: bold;

        #pass {
            color: #04ca00;
        }

        #fail {
            color: rgba(244, 117, 117, 0.9);
        }
    }
    .feedback_index {
        width: 200px;
        height: 60px;
        border-radius: 50px;
        line-height: 60px;
        text-align: center;
        background-color: #9747FF;
    }
    .feedback_writer {
        margin-left: 10px;
        font-size: 35px;
    }
    .feedback_content {
        width: 100%;
        font-size: 20px;
        background-color: #ffffff;
        border: solid #ffffff;
        border-radius : 20px;
        box-shadow: 1px 3px #CCC9C9;
        overflow-wrap: break-word;
        
        textarea {
            height: 270px;
        }

        div {
            height: 250px;
            text-align: left;
            padding: 10px;
            box-sizing: border-box;
        }
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
    }
    .select_button {
        font-size: 50px;
        font-weight: bold;
        cursor: pointer;
        #pass {
            color: ${(props) => (props.isSelected ? "rgba(4, 202, 0, 1)" : "rgba(4, 202, 0, 0.6)")};
            &:hover {
                color: rgba(4, 202, 0, 1);
            }
        }
        #fail {
            color: ${(props) => (props.isSelected ? "rgba(244, 117, 117, 1)" : "rgba(244, 117, 117, 0.6)")};
            &:hover {
                color: rgba(244, 117, 117, 1);
            }
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
        cursor: pointer;
    }
    .feedback_button:hover {
    background-color: rgba(109,99,228,1);
    }
    .pass {
        width: 70%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 100px auto;
        padding: 12px 0;

        background-color: #04ca00;
        color: #ffffff;
        border-radius: 15px;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 1px 3px #CCC9C9;

        cursor: pointer;
    }
    .fail {
        width: 70%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 100px auto;
        padding: 12px 0;

        background-color: rgba(244, 117, 117, 0.9);
        color: #ffffff;
        border-radius: 15px;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 1px 3px #CCC9C9;

        cursor: pointer;
    }

`;
