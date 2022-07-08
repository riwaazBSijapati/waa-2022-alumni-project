import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

export default function Login() {
    const navigate = useNavigate();
    //refs created in our form to set focus in input when compo loads
    const userRef = useRef();
    const errRef = useRef();

    const { setAuth } = useContext(AuthContext);

    //creating states
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucess] = useState(false);

    //placing fouc on user input when user laods

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try{
    //         const response=await axios.post('/user',
    //             JSON.stringify({email: user,username: pwd}),
    //             {
    //                 headers:{'Content-Type':'application/json'},
    //                 // withCredentials:true
    //             });
    //         console.log(JSON.stringify(response?.data));
    //         const accessToken=response?.data?.phone;

    //         setUser('');
    //         setPwd('');
    //         setSucess(true);
    //         // navigate('/userlandingpage');
    //     }catch(err){

    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post(
            '/posts',
            {
                title: user,
                body: pwd,
                userId: 1,
            }).then(function(response){console.log(response)})
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            {success ? (
                <section>
                    <h1> Logged in </h1>
                </section>
            ) : (

                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive">{errMsg}</p>
                    <h1>Log In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type='text'
                            id='email'
                            ref={userRef}
                            autoComplete='off'
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <br />
                        <label htmlFor="pass">Password:</label>
                        <input
                            type='password'
                            id='pass'
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <br />
                        <input type='submit' value='Login' />
                    </form>
                </section>)}
        </>
    )





    // const handleSubmit=event=>{
    //     event.preventDefault();
    //     navigate('/userlandingpage');
    // }

    // return (
    //     <form className="login" onSubmit={handleSubmit}>
    //         <legend>Login</legend>
    //         <label>Email:
    //             <input type='text' />
    //         </label>
    //         <br />
    //         <label>Password:
    //             <input type='password' />
    //         </label>
    //         <br />
    //         <input type='submit' value='Login' />
    //     </form>
    // )
}