import React, { FC } from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import Header from "./Header";
import ButtonsRow from "../ButtonRow";
import BannerSettings from "../BannerSettings";
import BannerView from "../BannerView";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }
  
  #app {
    padding: 0 152px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

const width = 538
const App: FC<{}> = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <ButtonsRow/>
      <StyledWrapper>
        <BannerView/>
        <BannerSettings/>
      </StyledWrapper>
      {/*<Main/>*/}
      {/*<Footer/>*/}
    </>
  )
}

export default App