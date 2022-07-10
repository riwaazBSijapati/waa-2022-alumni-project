import React from "react";
import { useNavigate } from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Register() {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/login');
    }

    return (
        <div className="Auth-Main-Container">
            <Form className="Auth-Main">
                <div className="Auth-Main-Content">
                    <h3 className="Auth-Main-Title">Sign Up</h3>
                    <Form.Group className="form-group mt-2" controlId="fname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            // ref={emailRef}
                            autoComplete='off'
                            // onChange={(e) => setEmail(e.target.value)}
                            // value={email}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="form-group mt-2" controlId="lname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            // ref={emailRef}
                            autoComplete='off'
                            // onChange={(e) => setEmail(e.target.value)}
                            // value={email}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="form-group mt-2" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            // ref={emailRef}
                            autoComplete='off'
                            // onChange={(e) => setEmail(e.target.value)}
                            // value={email}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="form-group mt-2" controlId="pass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            // onChange={(e) => setPwd(e.target.value)}
                            // value={pwd}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="form-group mt-2" controlId="repeat-pass">
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control
                            type='password'
                            // onChange={(e) => setPwd(e.target.value)}
                            // value={pwd}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="form-group mt-2" controlId="role">
                        <Form.Label>Role</Form.Label>
                        <Form.Select
                            type='password'
                            // onChange={(e) => setPwd(e.target.value)}
                            // value={pwd}
                            required
                        >
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                        </Form.Select>
                    </Form.Group>
                    <Button className="form-group mt-3" onClick={handleSubmit} variant="dark" type="submit">Sign Up!</Button>
                </div>
            </Form>
        </div>
    );
}