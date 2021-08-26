import React from 'react';
import Styled from 'styled-components'
import CtaImage from './cta-image.jpg'

console.log(CtaImage)

const StyledCta = Styled.div`

    position:relative;
    background-color: #7535fc;
    height: 36rem;
    color:white;
    
    img{

        position:absolute;
        z-index: 1;
        height:36rem;
    }

    h1{
        margin: 0;
        padding: 0;
        font-family: 'Bebas Neue', cursive;
        font-weight: normal;
        text-transform: uppercase;
        padding:2rem;
        line-height: 77px;
        font-size:64px;
   
    }
`

const Cta = (props) => (
    <StyledCta>
        <h1>{props.header}</h1>
        <h3>{props.subHeader}</h3>
    </StyledCta>
)
export default Cta