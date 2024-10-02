// 로딩 페이지
import {FadeLoader} from 'react-spinners';
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingPage>
      <FadeLoader
        color="#a1d2fa"
        cssOverride={{}}
        height={15}
        loading
        margin={2}
        radius={2}
        speedMultiplier={1}
        width={5}
        />
    </LoadingPage>
  )
}

export default Loading

const LoadingPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: auto;
`;