import React from 'react';
import Styled from 'styled-components'
import CtaImage from './cta-image.jpg'

console.log(CtaImage)

const screenSize = {
    lg:"1260px",
    md:"800px"
}



const StyledCta = Styled.div`

    position:relative;
    background-color:blue;
    height: 36rem;
    color:white;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    
    @media (min-width: 1260px){
        
        height:100vh;
        justify-content:center;
        width:45vw;

    }
`
const StyledH1 = Styled.h1`

    margin: 0;
    padding-top: 0;
    font-family: 'Bebas Neue', cursive;
    font-weight: normal;
    text-transform: uppercase;
    line-height: 77px;
    font-size: 64px;
    text-align:center;
    padding: 0 3rem;

    @media(min-width: ${screenSize.lg}){
        
        padding: 0 12rem;
        text-align:right;
    
    }
`

const Styled_h3 = Styled.h3`

    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 24px;
    font-weight:medium;
    line-height:36px;
    padding: 0 3rem;

    @media(min-width:${screenSize.lg}){
        text-align:right;
        padding: 0 12rem;
    }
`

const Cta = (props) => (
    <StyledCta>
        <StyledH1>{props.header}</StyledH1>
        <Styled_h3>{props.subHeader}</Styled_h3>
    </StyledCta>
)
export default Cta