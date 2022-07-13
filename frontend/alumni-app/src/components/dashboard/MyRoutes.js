import React from "react";
import { Route, Routes } from "react-router";
import Login from "../auth/Login";
import Register from "../auth/Register";
import UserLandingPage from "../menupage/UserLandingPage";
import Profile from "../profile/Profile"


export default function MyRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/userlandingpage' element={<UserLandingPage />} />
            <Route path='/editprofile' element={<Profile />} />
            <Route path='/editadvert' element={<UserLandingPage />} />
            <Route path='/viewadverts' element={<UserLandingPage />} />
        </Routes>
    )
}