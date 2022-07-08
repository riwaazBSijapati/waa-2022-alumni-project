import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate=useNavigate();

    const handleSubmit=event=>{
        event.preventDefault();
        navigate('/userlandingpage');
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <legend>Login</legend>
            <label>Email:
                <input type='text' />
            </label>
            <br />
            <label>Password:
                <input type='password' />
            </label>
            <br />
            <input type='submit' value='Login' />
        </form>
    )
}