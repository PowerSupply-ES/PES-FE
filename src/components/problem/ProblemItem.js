import styled from "styled-components";

const Container = styled.div`
    width: 1374px;
    height: 60px;
    display: flex;
    align-items: center;
    margin: auto;
    border-radius: 5px;
    background-color: ${props => props.lock ? "#DEDEDE" : "white"};
    transition: background-color 0.3s; /* Add transition for smooth color change */
    &:hover {
        background-color: ${props => props.lock ? "#DEDEDE" : "#DEDEDE80"};
    }
`
const ProblemId = styled.span`
    width: 100px;
    height: 34px;
    color: ${props => props.color || "black"};
    font-size: 28px;
    text-align: center;
`
const ProblemTitle = styled.span`
    flex: 1; /* Take up remaining space */
    font-size: 28px;
    &:hover {
        cursor: pointer;
    }
`
const Grade = styled.span`
    width: 100px;
    height: 34px;
    font-size: 28px;
    text-align: center;
    margin-right: 20px;
`
const Button = styled.button`
    width: 150px;
    height: 42px;
    color: ${props => props.fontcolor || "white"};
    background-color: ${props => props.color || "white"};
    border-radius: 5px;
    font-size: 28px;
    text-align: center;
    border: ${props => props.fontcolor ? "2px solid #DEDEDE" : "none"};
    transition: background-color 0.3s; /* Add transition for smooth color change */
    &:hover {
        background-color: ${props => props.color ? `${props.color}80` : "rgba(255, 255, 255, 0.8)"};
    }
`

const ProblemItem = (props) => {
    return (
        <Container lock={props.lock}>
            <ProblemId color={props.problemcolor}>{props.pid}</ProblemId>
            <ProblemTitle>{props.ptitle}</ProblemTitle>
            <Grade>점수 {props.grade}</Grade>
            <Button fontcolor={props.fontcolor} color={props.buttoncolor}>{props.state}</Button>
        </Container>
    );
}

export default ProblemItem;
