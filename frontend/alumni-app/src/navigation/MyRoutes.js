import React from "react";
import { Route, Routes } from "react-router";
import UserAdvert from "../components/student/UserAdvert";
import ViewAdvert from "../components/advert/ViewAdvert";
import Login from "../screen/Login/Login";
import Register from "../screen/Register/Register";
import  PasswordResetForm from "../screen/Login/PasswordResetForm";
import LandingInfo from "../screen/menupage/LandingInfo";
import UserLandingPage from "../screen/menupage/UserLandingPage";
import Profile from "../components/profile/Profile";


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
            <Route path='/passwordReset' element={<PasswordResetForm/>} />
        </Routes>
    )
}