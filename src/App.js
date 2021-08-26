import React from 'react';
import Cta from "./Cta"
import {createGlobalStyle} from 'styled-components'
import SignUp from './SignUp'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }

`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Cta 
      header="got marketing? advance your business insight." 
      subHeader="Fill out the form and receive our award winning newsletter."/>
      <SignUp/>
    </div>
  );
}

export default App;
