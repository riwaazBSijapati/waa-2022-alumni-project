import React from "react";
import logo from './logo192.png'
import { Container, Navbar, Nav, NavbarBrand, NavLink,Form,Button } from "react-bootstrap";
import './DashStyle.css'

export default function Header() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <NavbarBrand href="/"><img src={logo} alt='logo' /></NavbarBrand>
                <Nav className="loginRegister">
                    <NavLink href='/login'>Login</NavLink>
                    <NavLink href='/register'>Sign Up</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
