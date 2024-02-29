import styled from "styled-components";

export const StyledListItem = styled.div`
    .container {
        display: flex;
        flex-direction: row;
        width: 80%;
        height: fit-content;
        align-items: center;
        margin: auto;
        padding: 8px 0px;

        border-radius: 5px;
        background-color: ${props => props.state === "locked" ? "#DEDEDE" : "white"};
        transition: background-color 0.3s; /* Add transition for smooth color change */
        &:hover {
            background-color: ${props => props.state === "locked" ? "#DEDEDE" : "#DEDEDE80"};
        }
    }

    .problem_id {
        width: 100px;
        height: 34px;
        color: ${props => props.state === "success" ? "#04CA00" : props.state === "fail" ? "#FF8412" : "black"};
        font-size: 22px;
        text-align: center;
        line-height: 34px;
    }

    .problem_title {
        flex: 1; /* Take up remaining space */
        font-size: 22px;
        text-align: left; 
        &:hover {
            cursor: pointer;
        }
    }

    .grade {
        height: 34px;
        font-size: 22px;
        margin-right: 20px;
        line-height: 34px;
        }

    .button {
        width: fit-content;
        height: fit-content;
        padding: 6px 30px;
        box-shadow: 1px 1px #CCC9C9;
        
        color: ${props => (props.state === "success" || props.state === "fail") ? "white" : "#56565692"};
        background-color: ${props => props.state === "success" ? "rgba(109, 99, 228, 0.9)" : props.state === "fail" ? "rgba(244, 117, 117, 0.9)" : "white"};
        border-radius: 8px;
        font-size: 20px;
        text-align: center;
        border: ${props => (props.state === "success" || props.state === "fail") ? "none" : "2px solid #DEDEDE"};
        transition: background-color 0.3s;
        margin-right: 14px;
        pointer-events: ${props => (props.state === "success" || props.state === "fail") ? "auto" : "none"};
    }
`;