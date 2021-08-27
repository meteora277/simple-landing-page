import React from 'react';
import Styled from 'styled-components'
import CtaImage from './cta-image.jpg'

console.log(CtaImage)

const StyledCta = Styled.div`

    position:relative;
    background-color: #7535fc;
    height: 36rem;
    color:white;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;

    h1{
        margin: 0;
        padding-top: 0;
        font-family: 'Bebas Neue', cursive;
        font-weight: normal;
        text-transform: uppercase;
        line-height: 77px;
        font-size: 64px;
        text-align:center;
        padding: 0 3rem;
    }
    h3{
        font-family: 'Poppins', sans-serif;
        text-align: center;
        font-size: 24px;
        font-weight:medium;
        line-height:36px;
        padding: 0 3rem;
    }
    @media (min-width: 1260px){
        padding: 0;
        height:100vh;
        justify-content:center;
        width:45vw;

        h1{
            padding: 0 12rem;
            text-align:right;
        }
        h3{
            text-align:right;
            padding: 0 12rem;
        }
    }
`

const Cta = (props) => (
    <StyledCta>
        <h1>{props.header}</h1>
        <h3>{props.subHeader}</h3>
    </StyledCta>
)
export default Cta