import styled from "styled-components";

const AdContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    width:1374px;
    height: 100px;
    background-color: #DEDEDE;
    margin: auto;
    margin-bottom: 48px;
    margin-top: 48px;
`
const AdPart = () => {
    return (
        <AdContainer>
            광고 배너
        </AdContainer>
    );
};

export default AdPart;