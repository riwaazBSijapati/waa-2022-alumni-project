import React from "react";
import {useNavigate} from "react-router";

export default function User(){
    const navigate= useNavigate()
    const clickedLogin=()=>{
        navigate('/login');
    }

    const clickedRegister=()=>{
        navigate('/register');
    }

    const clickedResetPassword=()=>{
        navigate('/reset-password');
    }
    
    return (
        <div>
            <h1>Edddd</h1>
            <form>
                <legend>Login</legend>
                <label for="email">Email:</label><br/>
                <input type="text" id="email"></input><br/>
                <label for="password">Password:</label><br/>
                <input type="password" id="password"></input><br/>
                {/* <label onClick={()=>{clickedResetPassword()}}>Reset Password</label>
                <input type="submit" onClick={()=>{clickedLogin()}}>Login</input>
                <input type="submit" onClick={()=>{clickedRegister()}}>Register</input> */}
            </form>
        </div>
    )
}