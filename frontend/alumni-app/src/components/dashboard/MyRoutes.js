import React from "react";
import { Route, Routes } from "react-router";
import Login from "../login/Login";
import Register from "../login/Register";
import UserLandingPage from "../menupage/UserLandingPage";


export default function MyRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/userlandingpage' element={<UserLandingPage />} />
        </Routes>
    )
}