import React, {useState} from 'react';  
import Styled from 'styled-components'

const StyledForm = Styled.div`
    position:relative;
    display:flex;
    flex-direction: column;
    padding : 2.5rem;
    padding-top:5rem;

    label{
        margin-bottom: 0.8rem;
        font-size: 18px;
        font-weight:600;

        
    }
    
    input{
        height: 4rem;
        width:100%;
        align-items:center;
        margin-bottom: 2.5rem; 
        border: 1px solid #C7C7C7;
        background-color: #EDEDED;
    }
    .textInput{
       
    }


`
const StyledButton = Styled.button`
    display: block;
    background-color: ${props => props.color};
    color:white;
    border:none;
    height:4rem;
    font-size:18px;
    font-family: 'Poppins', sans-serif;
    margin-top: 4rem;
        
        @media(min-width: 800px){
            margin-top:0;
            display:block;
            width: 12rem;

        }

`


const SignUp = (props) => { 

    const [data, setData] = useState({name:"", email:""})
    

    function handleChange(event){
        event.preventDefault()
        setData(prev => ({...prev, [event.target.name]:event.target.value}))
    }
   
    
    return (
        <div>
            <StyledForm >
                <div className="textInput">
                    
                        <label className ="input" htmlFor="name">Name</label>
                        <input type="text" name="name" value={data.name} onChange={handleChange}/>   
                        <label className="input" htmlFor="email">Email</label>
                        <input type="email" name="email" value={data.email} onChange={handleChange}/>
                   
                 </div>
                <StyledButton color="#5200FF" >Sign me up</StyledButton>
                {console.log(data)}
            </StyledForm>
        </div>

    )   
}
export default SignUp