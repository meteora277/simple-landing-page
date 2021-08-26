import React from 'react';  

const SignUp = () => (

    <div>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>

            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>
            
            <button>Sign me up</button>
        </form>
    </div>
)
export default SignUp