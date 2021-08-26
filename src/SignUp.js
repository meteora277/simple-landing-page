import React, {useState} from 'react';  
import Styled from 'styled-components'

const StyledForm = Styled.div`

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
        margin-bottom: 2.5rem; 
        border: 1px solid #C7C7C7;
        background-color: #EDEDED;

    }

`
const StyledButton = Styled.button`
    background-color: ${props => props.color};
    color:white;
    border:none;
    height:4rem;
    font-size:18px;
    font-family: 'Poppins', sans-serif;

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

                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={data.name} onChange={handleChange}/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={data.email} onChange={handleChange}/>
                
                <StyledButton color="#5200FF" >Sign me up</StyledButton>
                {console.log(data)}
            </StyledForm>
        </div>

    )   
}
export default SignUp