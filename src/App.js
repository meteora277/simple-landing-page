import React from "react";
import Cta from "./Cta";
import Styled, { createGlobalStyle } from "styled-components";
import SignUp from "./SignUp";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`;
const StyledDiv = Styled.div`
  @media(min-width: 1260px){
    display:flex;
  }

`;

function App() {
  return (
    <StyledDiv>
      <GlobalStyle />
      <Cta
        header="got marketing? advance your business insight."
        subHeader="Fill out the form and receive our award winning newsletter."
      />
      <SignUp />
    </StyledDiv>
  );
}

export default App;
