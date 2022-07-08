import React from "react";
import { Route, Routes } from "react-router";
import Login from "../login/Login";



export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login></Login>} />
        </Routes>
    )
}