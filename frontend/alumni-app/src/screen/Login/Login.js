import React, { useRef, useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Routes ,Route, useNavigate } from "react-router-dom";
// import AuthContext from "../../context/AuthProvider";
// import {axios} from "../../api/axios";
import axios from "axios";
import '../../styles/Auth.css';

import { connect } from 'react-redux';
//import { withRouter} from "react-router-dom"


export function Login() {
    const navigate = useNavigate();
    //refs created in our form to set focus in input when compo loads
    const emailRef = useRef();
    const errRef = useRef();

    //creating states
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucess] = useState(false);

    //placing fouc on email input when email laods

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd])


    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            'localhost:8080/api/v1',
            {
                email: email,
                password: pwd,
            }).then(function (response) { console.log(response) })
            .then(navigate('/userlandingpage'))
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleSubmitForgetPass= async (e) => {
        e.preventDefault();
        const response = await axios.post(
            'localhost:8080/api/v1',
            {
                email: email,
                password: pwd,
            }).then(function (response) { console.log(response) })
            .then(navigate('/userlandingpage'))
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="Auth-Main-Container">
            <Form className="Auth-Main">
                <div className="Auth-Main-Content">
                    <h3 className="Auth-Main-Title">Sign In</h3>
                    <Form.Group className="form-group mt-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            ref={emailRef}
                            autoComplete='off'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="form-group mt-3" controlId="pass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </Form.Group>
                    <Button className="form-group mt-3" onClick={handleSubmitLogin} variant="dark" type="submit">Login</Button>
                    <Button className="form-group mt-3" onClick={handleSubmitForgetPass} variant="dark" type="submit" >Forget Password</Button>
                </div>
            </Form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      profile: state.user.profile
    }
  }
  
  export default connect(mapStateToProps)((Login));
  