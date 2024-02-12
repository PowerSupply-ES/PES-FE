import styled from "styled-components";

export const StyledListItem = styled.div`
    .container {
        width: 1374px;
    height: 60px;
    display: flex;
    align-items: center;
    margin: auto;
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
        font-size: 28px;
        text-align: center;
    }

    .problem_title {
        flex: 1; /* Take up remaining space */
    font-size: 28px;
    text-align: left; 
    &:hover {
        cursor: pointer;
    }
    }

    .grade {
        height: 34px;
    font-size: 28px;
    text-align: center;
    margin-right: 20px;
    }

    .button {
        width: 150px;
        height: 42px;
        color: ${props => props.state === "locked" ? "#6A6B6F" : "white"};
        background-color: ${props => props.state === "comment" ? "#5094f9" : props.state === "success" ? "#04CA00" : props.state === "fail" ? "#FF8412" : "white"};
        border-radius: 5px;
        font-size: 28px;
        text-align: center;
        border: ${props => props.state === "locked" ? "2px solid #DEDEDE" : "none"};
        transition: background-color 0.3s;
    /* &:hover {
        background-color: ${props => props.color ? `${props.color}80` : "rgba(255, 255, 255, 0.8)"};
    } */
    }
`;

