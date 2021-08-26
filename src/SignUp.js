import React, {useState} from 'react';  
//import Styled from 'styled-components'

const SignUp = () => { 

    const [data, setData] = useState({name:"", email:""})
    

    function handleChange(event){
        event.preventDefault()
        setData(prev => ({...prev, [event.target.name]:event.target.value}))
    }
   
    
    return (
        <div>
            <form>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={data.name} onChange={handleChange}/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={data.email} onChange={handleChange}/>
                
                <button>Sign me up</button>
                {console.log(data)}
            </form>
        </div>

    )   
}
export default SignUp