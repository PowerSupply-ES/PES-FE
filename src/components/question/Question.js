import styled from "styled-components";

const Container = styled.div`
    width: 1376px;
    height: 80px;
    display: flex;
    align-items: center;
    margin: auto;
`
const ProblemId = styled.div`
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
`
const Title = styled.div`

`
const Input = styled.input`
    width: 1376px;
    height: 250px;
    display: flex;
    align-items: center;
    margin: auto;
    border-radius: 5px;
`

const Question = (props) => {
    return (
        <div>
            <Container>
                <ProblemId>{props.id}</ProblemId>
                <Title>{props.title}</Title>
            </Container>
            <Input
                placeholder="답변을 써주세요."
                ></Input>
        </div>

    );
}

export default Question;
