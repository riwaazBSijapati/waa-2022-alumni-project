import React from "react";
import { Route, Routes } from "react-router";
import UserAdvert from "../student/UserAdvert";
import ViewAdvert from "../advert/ViewAdvert";
import Login from "../auth/Login";
import Register from "../auth/Register";
import LandingInfo from "../menupage/LandingInfo";
import UserLandingPage from "../menupage/UserLandingPage";
import Profile from "../profile/Profile"


export default function MyRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/userlandingpage' element={<UserLandingPage />} />
            <Route path='/viewprofile' element={<Profile />} />
            <Route path='/useradvert' element={<UserAdvert />} />
            <Route path='/viewadverts' element={<ViewAdvert/>} />
            <Route path='/landinginfo' element={<LandingInfo/>} />
        </Routes>
    )
}