import styled from "styled-components";

const Container = styled.div`
    width: 1376px;
    height: 60px;
    display: flex;
    align-items: center;
    margin: auto;
    border-radius: 5px;
`

const UserCode = (props) => {
    return (
        <Container>
            {props.content}
        </Container>
    );
}

export default UserCode;
