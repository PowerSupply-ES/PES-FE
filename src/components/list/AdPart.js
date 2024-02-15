import styled from "styled-components";
import img1 from '../../assets/images/coding.jpg';
import '../../App.css';


const AdContainer = styled.div`
    display:flex;
    align-items: center;
    background-color: #272727;
    justify-content:center;
    width:100%;
    height: 50vh;
    margin: auto;
    margin-bottom: 48px;
`

const AdPart = () => {
    return (
        <AdContainer>
            <img src={img1} className="img_slid"/>
        </AdContainer>
    );
};

export default AdPart;