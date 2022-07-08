import React from "react";
import { Link } from "react-router-dom";
import logo from './logo192.png'

export default function Header(){
    return(
        <div className="header">
            <img src={logo} alt='logo'/><br/>
            <Link to='/login'>Login</Link><br/>
            <Link to='/register'>Sign Up</Link>
        </div>
    )
}
