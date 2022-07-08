import React from "react";
import { useNavigate } from "react-router-dom"

export default function Register(){
    const navigate = useNavigate();

    const handleSubmit=event=>{
        event.preventDefault();
        navigate('/login');
    }    

    return(
        <form className='register' onSubmit={handleSubmit}>
            <legend>Register</legend>
            <label>Email:
                <input type='text' />
            </label>
            <br />
            <label>Password:
                <input type='password' />
            </label>
            <br />
            <label>Repeat Password:
                <input type='password' />
            </label>
            <br />
            <label>
                Role:
                <input list="roles"/>
            </label>
            <datalist id='roles'>
                <option value='Faculty'/>
                <option value='Student'/>
            </datalist>
            <input type='submit' value='Register' />
        </form>
    )
}